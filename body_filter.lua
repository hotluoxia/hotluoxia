local uuid = require("uuid")
local zlib = require("zlib")

function log(content)
        local file = io.open("/tmp/luaenjing.log","ab")
        file:write(content .. "\r\n")
        file:close()
end

function getStorePath(basepath,uri)
	local pos = string.find(uri,"?")
	if pos ~= nil and pos > 1 then
		uri = string.sub(uri,0,pos - 1)
	end

    local urllen = string.len(uri)
    if string.sub(uri,urllen,-1) == "/" then
        uri = uri .. "index.html"
    end

    log("-----uri2222here   " .. string.sub(uri,urllen,-1))
    log("-----uri222233" .. uri .. " -- " .. string.len(uri))
	log("----uri: " .. basepath .. uri);

	return basepath .. uri
end

function getDirOfFile(path)
	local pos = path:reverse():find("/")
	if pos == nil then
		return '/'
	end

	pos = #path - pos + 1
	if pos > 1 then 
		pos = pos - 1
	end

	return string.sub(path,0,pos)
end

function mkdir(dir)
	os.execute("mkdir -m 777 -p " .. dir)
end

function createFile(path,content)
	if #content < 2 then
		return
	end	
	log("cache file:" .. path .. " content lenght:" .. #content  .. " content:" .. string.sub(content,0,30))
	
	local wf = io.open(path,"w")
	
	--打开失败，则创建文件目录
	if wf == nil then
		mkdir(getDirOfFile(path))
		wf = io.open(path,"w")
		if wf == nil then
			return
		end
	end

	--写入内容
	wf:write(content)

	wf:close()
end

function geturiFix()
        local uri = ngx.unescape_uri(ngx.var.request_uri)
	uri = getStorePath('/tmp',uri)	

        local pos = uri:reverse():find('%.')
        if pos == nil then
                return ''
        end
        pos = #uri - pos + 2
        return string.sub(uri,pos)
end

function getReqId()
	if ngx.ctx.reqid then
		return ngx.ctx.reqid
	end
	ngx.ctx.reqid = uuid()
	return ngx.ctx.reqid
end

function inArray(value, tbl)
        if value == nil then
            return false
        end
        for k,v in ipairs(tbl) do
                if string.find(value,v) ~= nil then
                        return true
                end
        end
        return false
end

function unzipContent()
	local inflate = zlib.inflate()
	ngx.ctx.plainbody = inflate(ngx.arg[1])
end

-- isd true:arg1为默认值 false:返回nil
function exunzipContent(isd)
	if ngx.ctx.plainbody ~= nil then
		return ngx.ctx.plainbody
	end
	
	if pcall(unzipContent) then
		return ngx.ctx.plainbody
	end

	--返回arg1为默认值
	if isd then
		return ngx.arg[1]
	end

	return nil
end


local t1 = ngx.now()
local tlen = 0

function rectime(count)
	ngx.update_time()
	tlen = ngx.now() - t1
	log("----reg process: xxxxx" .. count .. " time length:" .. tlen)
end

function callback()
	local fhost = "www.copyluoxia.com"
	local shost = "www.copyluoxia.com"

	ngx.update_time()
	t1 = ngx.now()
	tlen = 0

	rectime(0)
	local str = ngx.arg[1]
--	str = string.gsub(str, "https://www.luoxia.com", "http://www.copyluoxia.com")
	str = string.gsub(str, "https://www.luoxia.com", "")
	str = string.gsub(str, "EnJing.com", shost)
	str = ngx.re.sub(str,"<script>[^<]+hm.baidu.com[^<]+</script>","","o")	
	str = ngx.re.sub(str,"<script>[^<]+zz.bdstatic.com[^<]+</script>","","o")	
	str = ngx.re.sub(str,"<h1[^<]+logo[^<]+<a[^<]+</a></h1>","<h1><a style='color:#FF5809;font-weight:400;font-size:100%;'  href='http://" .. fhost  .. "'>落日小说</a></h1>","o")
	str = ngx.re.gsub(str,"<ins[^<]+adsbygoogle[^<]+</ins>","","o")	
	str = ngx.re.gsub(str,"<script[^<]+adsbygoogle[^<]+</script>","","o")	
	--str = ngx.re.sub(str, "bdsharebuttonbox\"","bdsharebuttonbox\" style='display:none;'","o")
	str = string.gsub(str, "bdsharebuttonbox\"","bdsharebuttonbox\" style='display:none;'")
	--str = ngx.re.sub(str,".+bdsharebuttonbox.+","","o")	
	--str = ngx.re.sub(str,".+_bd_share_config.+","","o")	
	--str = ngx.re.sub(str,".+ddhuangchao.+","","o")	
	--添加百度统计
	str = string.gsub(str,'</head>','<script>var _hmt = _hmt || []; (function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?7c5dba02ecfaf44a7711ff5087a8f4ad"; var s = document.getElementsByTagName("script")[0];  s.parentNode.insertBefore(hm, s); })(); </script></head>')
	str = string.gsub(str,'</body>','<script>(function(){ var bp = document.createElement("script"); var curProtocol = window.location.protocol.split(":")[0]; if (curProtocol === "https") { bp.src = "https://zz.bdstatic.com/linksubmit/push.js"; } else { bp.src = "http://push.zhanzhang.baidu.com/push.js"; } var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(bp, s); })(); </script></body>')

	ngx.arg[1] = str
	ngx.ctx.plainbody = str

	rectime(11)	
end


--处理文字流程
function procText()
	--local iszip = ngx.header["Content-Encoding"] == "gzip"	

	if ngx.ctx.iszip then
		ngx.arg[1] = exunzipContent(true)
	end

	callback()
end

function cacheFile()
	local uri = ngx.unescape_uri(ngx.var.request_uri)
	local basepath = "/Users/junfachen/Desktop/project/gitee/novelmng/resources/views/templates/luoxia/template/"
	local filepath = getStorePath(basepath,uri)
	local iszip = ngx.header["Content-Encoding"] == "gzip"

	if iszip then
		local con = exunzipContent(true)
		if con ~= nil then
			createFile(filepath,con)
		end
	else
		createFile(filepath,ngx.arg[1])
	end
end

function canCache()
	local cacheType = {'text/javascript','image/svg+xml','text/css','image/png','image/jpeg'}
        
	--content-type类型进行cache
	if inArray(ngx.header["Content-Type"],cacheType) then
                return true
        end

	--根据后缀进行cache，有后缀的进行cache
	local fix = geturiFix()
	if inArray(fix,{'html','htm'}) then
		return true
	end
	return true
end

rectime(8800)

--需要处理的header类型
local procType = {'text/xml','text/html','text/webviewhtml'}
local cacheType = {'text/javascript','image/svg+xml','text/css','image/png','image/jpeg'}

local fname = getReqId()

if ngx.arg[1] ~= '' then
	if ngx.ctx.reqcache then
		ngx.ctx.reqcache = ngx.ctx.reqcache .. ngx.arg[1]
	else
		ngx.ctx.reqcache = ngx.arg[1]
	end
end

if ngx.arg[2] then
	ngx.arg[1] = ngx.ctx.reqcache

	--进行文字处理
	if inArray(ngx.header["Content-Type"],procType) then
		procText()
	end

	--进行cache处理
	if canCache() then
		cacheFile()
	end
else
    ngx.arg[1] = nil
end

