var zTagManager=function(){this.adtag="<!-- Javascript tag  -->\n<!-- begin ZEDO for channel:  Udayavani.com , publisher: Udayavani.com , Ad Dimension: 300x250 InView Slider-300x250 -->\n<script language=\"JavaScript\">\nvar uy_checkIfSmartphone = function () {\n\tvar uy_isSmartphone = false;\n\ttry {\n\t\tvar uy_regExp1 = \/(android|bb\\d+|meego).+mobile|avantgo|bada\\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino\/i,\n\t\tuy_uaToMatch = navigator.userAgent || navigator.vendor || window.opera,\n\t\tuy_isMobile = uy_regExp1.test(uy_uaToMatch)|| uy_regExp1.test(uy_uaToMatch.substr(0,4)),\n\t\tuy_isSupportedOS = (\/(iPhone)\/g.test(navigator.userAgent) || (\/(Android)\/i.test(navigator.userAgent) && (parseFloat(navigator.userAgent.match(\/Android\\s+([\\d\\.]+)\/)[1]) >= 4.2))),\n\t\tuy_maxDeviceWidth = 420,\n\t\tuy_maxDeviceHeight = 740,\n\t\tuy_width = Math.min(screen.width, window.innerWidth),\n\t\tuy_height = Math.min(screen.height, window.innerHeight),\n\t\tuy_matchesPhoneDisplaySize = (uy_width <= uy_maxDeviceHeight && uy_height <= uy_maxDeviceWidth) || (uy_height <= uy_maxDeviceHeight && uy_width <= uy_maxDeviceWidth);\n\n\t\tuy_isSmartphone = uy_isSupportedOS && uy_isMobile && uy_matchesPhoneDisplaySize;\n\t\t}\n\t\tcatch (e) {\n\t\tuy_isSmartphone = false;\n\t\t}\n\treturn uy_isSmartphone;\n};\n\nvar uy_isDevice = uy_checkIfSmartphone();\nif (uy_isDevice) {\n\tvar uy_script = document.createElement(\'script\');\n\tuy_script.type = \'text\/javascript\';\n\tuy_script.text=\'var zflag_nid=\"1364\"; var zflag_cid=\"361\"; var zflag_sid=\"218\"; var zflag_width=\"728\"; var zflag_height=\"90\"; var zflag_sz=\"89\";\';\n\tdocument.body.appendChild(uy_script);\n} else {\n\tvar uy_script = document.createElement(\'script\');\n\tuy_script.type = \'text\/javascript\';\n\tuy_script.text=\'var zflag_nid=\"1364\"; var zflag_cid=\"361\"; var zflag_sid=\"218\"; var zflag_width=\"300\"; var zflag_height=\"250\"; var zflag_sz=\"87\"; var zflag_visible_position=\"0\";\';\n\tdocument.body.appendChild(uy_script);\n}\nvar uy_script1 = document.createElement(\'script\');\nuy_script1.type = \'text\/javascript\';\nuy_script1.src = \'http:\/\/e1.zedo.com\/jsc\/e1\/fhs.js\';\ndocument.body.appendChild(uy_script1);<\/script>\n<!-- end ZEDO for channel:  Udayavani.com , publisher: Udayavani.com , Ad Dimension: 300x250 InView Slider-300x250 -->",this.createIframe=function(e,t,n){var r=document.getElementById(e),a=getMSIEVr(),i="undefiend"==n?0:n,o="undefiend"==t?0:t,s=document;if(null!=r){var c=document.createElement("iframe");if(c.style.width=this.formatToNumber(o),c.style.height=this.formatToNumber(i),c.id="zd_async_tagframe_"+e,c.name="zd_async_tagframe_"+e,c.scrolling="no",c.style.marginHeight="0px",c.style.marginWidth="0px",c.frameBorder="0",c.style.hspace="0px",c.style.vspace="0px",c.allowTransparency="true",c.style.frameSpacing="0px",c.src="javascript:\"<html><body style='background:transparent'></body></html>\"",this.zdInFriendlyIframe()){var d=window.frameElement.parentElement;s=window.parent.document,r=d}try{r.parentElement.insertBefore(c,r)}catch(m){console.log&&"undefiend"!=console.log&&console.log("Could not insert element before the container TGM ERROR")}rIframe=s.getElementById("zd_async_tagframe_"+e),g=rIframe.contentWindow?rIframe.contentWindow.document:rIframe.contentDocument;var l='<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><script>var inDapIF = true;</script></head><body marginwidth=0 marginheight=0 leftmargin=0 rightmargin=0 topmargin=0>'+this.adtag+"</body></html>";if(a)rIframe.contentWindow.contents=l,rIframe.src='javascript:window["contents"]';else try{-1!=navigator.userAgent.indexOf("Firefox")&&g.open("text/html","replace"),g.write(l),g.close()}catch(f){console.log&&"undefiend"!=console.log&&console.log("Could not write content into iframe using  the DOM standards method:"+f.message)}}},getMSIEVr=function(){var e=navigator.userAgent,t=e.indexOf("MSIE ");return-1==t?0:parseFloat(e.substring(t+5,e.indexOf(";",t)))},this.initTagManager=function(e,t,n,r,a){this.replaceMacros(t),this.createIframe(e,r,a)},this.replaceMacros=function(e){for(var t in e){var n="{{"+t+"}}",r=e[t];this.adtag=this.adtag.replace(n,r)}},this.formatToNumber=function(e){var t;return void 0==e||"undefined"==e?0:"number"==typeof e?e+"px":t=-1!==e.indexOf("%")?e:-1!==e.indexOf("px")?parseInt(e.split("px")[0],10):parseInt(e,10)+"px"},this.zdIsParentAccessible=function(){try{return window.document.location&&window.parent.document.location,!0}catch(e){return!1}},this.zdInIframe=function(){return window.frameElement&&"IFRAME"==window.frameElement.tagName},this.zdInFriendlyIframe=function(){return this.zdIsParentAccessible()?this.zdInIframe():!1},this.zdGetDoc=function(){return zdInFriendlyIframe()?window.parent.document:document}};