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


function log(content)
	local file = io.open("/tmp/luaenjing.log","ab")
	file:write(content .. "\r\n")
	file:close()
end


--处理文字流程
function procText()
	
	--if ngx.header["Content-Length"] != nil
	--	ngx.header.
	--end


	ngx.header["Content-Length"] = nil
	local iszip = ngx.header["Content-Encoding"] == "gzip"	
	
	if iszip then
		ngx.ctx.iszip = true
		ngx.header["Content-Encoding"] = ""
		log("header_filter change content encoding")
	end
end


--需要处理的header类型
local procType = {'text/xml','text/html','text/webviewhtml'}
--text/css  text/javascript


--不需要处理，原样返回
if not inArray(ngx.header["Content-Type"],procType) then
    if ngx.header["Content-Type"] ~= nil then
    	log("----header:" .. ngx.header["Content-Type"] .. "just return")
    end
	return
end

log("----header:" .. ngx.header["Content-Type"] .. "process ed")

ngx.ctx.iszip = false
procText()


