/* Don't steal my style(code), your soul will burn in hell, your parents and child(ren) will die in a car accident this year.*/

function ChangeDivShow(imgObj){var divObj=document.getElementById("bcrumb");var bodyObj=document.getElementById("nr_body");if(divObj.style.display=="block"){divObj.style.display="none";bodyObj.className="lx"}else{divObj.style.display="block";bodyObj.className+=" sidr-open"}};

var Cookie={get:function(sKey){if(!sKey){return null}return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(sKey).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},set:function(sKey,sValue,vEnd,sPath,sDomain,bSecure){if(!sKey||/^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)){return false}var sExpires="; max-age="+vEnd;document.cookie=encodeURIComponent(sKey)+"="+encodeURIComponent(sValue)+sExpires+(sDomain?"; domain="+sDomain:"")+(sPath?"; path="+sPath:"")+(bSecure?"; secure":"");return true}};function page(indexUrl){var p=document.getElementById("pageinput").value;location.href=indexUrl+p}var checkbg="inherit";var checkwe="bold";function nr_setbg(intype){var huyandiv=document.getElementById("huyandiv");var light=document.getElementById("lightdiv");if(intype=="huyan"){if(huyandiv.style.backgroundColor==""){set("light","huyan");document.cookie="light=huyan;path=/"}else{set("light","no");document.cookie="light=no;path=/"}}if(intype=="light"){if(light.innerHTML=="关灯"){set("light","yes");document.cookie="light=yes;path=/"}else{set("light","no");document.cookie="light=no;path=/"}}if(intype=="big"){set("font","big");document.cookie="font=big;path=/"}if(intype=="middle"){set("font","middle");document.cookie="font=middle;path=/"}if(intype=="small"){set("font","small");document.cookie="font=small;path=/"}}function getset(){var strCookie=document.cookie;var arrCookie=strCookie.split("; ");var light;var font;for(var i=0;i<arrCookie.length;i++){var arr=arrCookie[i].split("=");if("light"==arr[0]){light=arr[1];break}}for(var i=0;i<arrCookie.length;i++){var arr=arrCookie[i].split("=");if("font"==arr[0]){font=arr[1];break}}if(light=="yes"){set("light","yes")}else{if(light=="no"){set("light","no")}else{if(light=="huyan"){set("light","huyan")}}}if(font=="big"){set("font","big")}else{if(font=="middle"){set("font","middle")}else{if(font=="small"){set("font","small")}else{set("","")}}}}function set(intype,p){var nr_body=document.getElementById("nr_body");var pagewrap=document.getElementById("pagewrap");var huyandiv=document.getElementById("huyandiv");var lightdiv=document.getElementById("lightdiv");var fontbig=document.getElementById("fontbig");var fontmiddle=document.getElementById("fontmiddle");var fontsmall=document.getElementById("fontsmall");var nr1=document.getElementById("nr1");var nr_title=document.getElementById("nr_title");var header2=document.getElementById("header2");var comment=document.getElementById("comment");var comments=document.getElementById("comments");var posthead=document.getElementById("posthead");var tipsa=document.getElementById("tipsA");var lxbottom=document.getElementById("lxbottom");var submit=document.getElementById("submit");var author=document.getElementById("author");if(intype=="light"){if(p=="yes"){lightdiv.innerHTML="开灯";nr_body.style.backgroundColor="#000";pagewrap.style.cssText="color:#666;background-color:#262626";pagewrap.className="pagewraper";tipsa.style.backgroundColor="#222";huyandiv.style.backgroundColor="";huyandiv.style.fontWeight="";nr1.style.color="#666";nr_title.style.color="#666";comment.style.cssText="border:1px solid #3a3a3a;background-color:#3a3a3a;color:#777";comments.className+=" lightoff-comment";posthead.className+=" lightoff-posthead";header2.className+=" lightoff-header2";lxbottom.style.cssText="border-color: #444;color:#666";submit.style.color="#222";author.style.cssText="border:1px solid #3a3a3a;background-color:#3a3a3a;color:#777"}else{if(p=="no"){lightdiv.innerHTML="关灯";nr_body.style.backgroundColor="#e7e4d5";pagewrap.style.cssText="color:#000;background-color:#f6f4ec";pagewrap.className="";tipsa.style.backgroundColor="#e3dfcd";huyandiv.style.backgroundColor="";huyandiv.style.fontWeight="";nr1.style.color="#000";nr_title.style.color="#000";comment.style.cssText="";comments.className="comments-area";posthead.className="post-header clearfix";header2.className="clearfix";lxbottom.style.cssText="";submit.style.color="";author.style.cssText=""}else{if(p=="huyan"){lightdiv.innerHTML="关灯"}}}}if(intype=="font"){fontbig.style.backgroundColor="";fontmiddle.style.backgroundColor="";fontsmall.style.backgroundColor="";fontbig.style.fontWeight="";fontmiddle.style.fontWeight="";fontsmall.style.fontWeight="";if(p=="big"){fontbig.style.backgroundColor=checkbg;fontbig.style.fontWeight=checkwe;nr1.style.fontSize="24px"}if(p=="middle"){fontmiddle.style.backgroundColor=checkbg;fontmiddle.style.fontWeight=checkwe;nr1.style.fontSize="20px"}if(p=="small"){fontsmall.style.backgroundColor=checkbg;fontsmall.style.fontWeight=checkwe;nr1.style.fontSize="18px"}}};

var checkCount=50;function rmUCTip(){var e=document.getElementById("_ucEnterTip");if(e){e.parentNode.removeChild(e);checkCount=0}if(checkCount>0){checkCount--;setTimeout("rmUCTip()",100)}};

var isUC = /UCBrowser/i.test(navigator.userAgent);

var isQQ = /MQQBrowser/i.test(navigator.userAgent);

function gg_post_top() {
    //if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {} else {
    //}
}

function gg_post_top2() {
    if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {} else {
    }
}

function gg_post_middle() {
    if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {} else {
    }
}

function gg_post_bottom_couple() {
    //if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {} else {
    //}
}

function gg_post_bottom_couple2() {
    if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {} else {
    }
}

function gg_post_bottom_single() {
    if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    } else {}
}

function gg_post_anchor() {
}

function x_post_bottom() {
 }

 function x_post_bottom2() {
	if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
	}else{}
 }

 function x_post_bottom3() {
	if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

	}else{}
 }

function x_global_fixed() {
	if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
	}else{}
 }

function x_global_fixed2() {
	if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
	}else{}
 }

function _Top() {
    //gg_post_top();
}

function _Bottom() {
    //x_post_bottom();
}

function _Bottom2() {
    //gg_post_bottom_single();
}

function _Golbalfixed() {
}

function _GolbalAuto() {
    //gg_post_anchor();
}