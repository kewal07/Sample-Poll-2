function zzOVV(){function a(a){try{if(window.top==window)return a.OnPage;for(var b=window,c=0;b.parent!=b&&c<1e3;){if(b.parent.document.domain!=b.document.domain)return a.CrossDomainIframe;b=b.parent}return a.SameDomainIframe}catch(a){}return a.CrossDomainIframe}this.DEBUG=!1,this.asset=null,this.positionInterval,this.userAgent=window.testOvvConfig&&window.testOvvConfig.userAgent?window.testOvvConfig.userAgent:navigator.userAgent,this.servingScenarioEnum={OnPage:1,SameDomainIframe:2,CrossDomainIframe:3},this.servingScenario=a(this.servingScenarioEnum),this.IN_IFRAME=this.servingScenario!=this.servingScenarioEnum.OnPage,this.IN_XD_IFRAME=this.servingScenario==this.servingScenarioEnum.CrossDomainIframe,this.geometrySupported=!this.IN_XD_IFRAME;var b=new OVVBrowser(this.userAgent);this.browser=b.getBrowser(),this.browserIDEnum=b.getBrowserIDEnum();var c=1e3;this.interval=c,this.releaseVersion="OVVRELEASEVERSION",this.buildVersion="OVVBUILDVERSION";var d={},e=[],f=1e3,g=[];this.addAsset=function(a){d.hasOwnProperty(a.getId())||(d[a.getId()]=a,this.asset=a)},this.removeAsset=function(a){delete d[a.getId()]},this.getAssetById=function(a){return d[a]},this.getAds=function(){var a={};for(var b in d)d.hasOwnProperty(b)&&(a[b]=d[b]);return a},this.subscribe=function(a,b,c,d){if(d)for(key in e[b])e[b][key]&&i(e[b][key].eventName,a)&&j(function(){c(b,e[b][key])});for(key in a)g[a[key]+b]||(g[a[key]+b]=[]),g[a[key]+b].push({Func:c})},this.publish=function(a,b,c){var d={eventName:a,eventTime:h(),ovvArgs:c};if(e[b]||(e[b]=[]),e[b].length<f&&e[b].push(d),a&&b&&g[a+b]instanceof Array)for(var i=0;i<g[a+b].length;i++){var k=g[a+b][i];k&&k.Func&&"function"==typeof k.Func&&j(function(){k.Func(b,d)})}},this.getAllReceivedEvents=function(a){return e[a]};var h=function(){"use strict";return Date.now?Date.now():(new Date).getTime()},i=function(a,b){for(var c=0;c<b.length;c++)if(b[c]===a)return!0;return!1},j=function(a){try{var b=a();return void 0===b||b}catch(a){return!1}}}function OVVCheck(){this.clientHeight=-1,this.clientWidth=-1,this.error="",this.focus=null,this.fps=-1,this.id="",this.beaconsSupported=null,this.geometrySupported=null,this.geometryViewabilityState="",this.beaconViewabilityState="",this.cssViewabilityState="",this.domViewabilityState="",this.technique="",this.beacons=new Array,this.inIframe=null,this.objBottom=-1,this.objLeft=-1,this.objRight=-1,this.objTop=-1,this.percentViewable=-1,this.percentObscured=0,this.viewabilityState=""}function OVVBrowser(a){function b(a,b){var c=function(){for(var b={ID:0,name:"",version:""},c=a,f=0;f<e.length;f++)if(null!=c.match(new RegExp(e[f].brRegex))){if(b.ID=e[f].id,b.name=e[f].name,null==e[f].verRegex)break;var g=c.match(new RegExp(e[f].verRegex+"[0-9]*"));if(null!=g){var h=g[0].match(new RegExp(e[f].verRegex));b.version=g[0].replace(h[0],"")}var i=c.match(new RegExp(d+"[0-9\\.]*"));null!=i&&(b.os=i[0]);break}return b},d="(Windows NT )",e=[{id:4,name:"Opera",brRegex:"OPR|Opera",verRegex:"(OPR/|Version/)"},{id:1,name:"MSIE",brRegex:"MSIE|Trident/7.*rv:11|rv:11.*Trident/7",verRegex:"(MSIE |rv:)"},{id:2,name:"Firefox",brRegex:"Firefox",verRegex:"Firefox/"},{id:3,name:"Chrome",brRegex:"Chrome",verRegex:"Chrome/"},{id:5,name:"Safari",brRegex:"Safari|(OS |OS X )[0-9].*AppleWebKit",verRegex:"Version/"}];return c()}var c={MSIE:1,Firefox:2,Chrome:3,Opera:4,safari:5},d=b(a);this.getBrowser=function(){return d},this.getBrowserIDEnum=function(){return c}}function OVVBeaconSupportCheck(){var a=new OVVBrowser($zovvObj.userAgent),b=a.getBrowser(),c=a.getBrowserIDEnum();this.supportsBeacons=function(){var a=6.3,d=b.ID==c.MSIE,e=b.version>=11,f=b.os?b.os.split(" "):[0],g=f[f.length-1],h=g>=a;return!d||e&&h}}function ZOVVAsset(a,b){var c,d,e=13,f=Math.sqrt(2),g=0,h=1,i=2,j=3,k=4,l=5,m=6,n=7,o=8,p=9,q=10,r=11,s=12,t=13,u=500,v=a,w=0,x=$zovvObj.DEBUG?20:1,y=b.geometryViewabilityCalculator,z=function(){return null},A=function(){return null},B=new OVVBeaconSupportCheck;this.checkViewability=function(){var a=new OVVCheck;if(a.id=v,a.inIframe=$zovvObj.IN_IFRAME,a.geometrySupported=$zovvObj.geometrySupported,a.focus=S(),!d)return a.error="Player not found!",a;if(C(a,d)===!0){if(!$zovvObj.DEBUG)return a;a.cssViewabilityState=OVVCheck.UNVIEWABLE}if(D(a,d)===!0){if(!$zovvObj.DEBUG)return a;a.domViewabilityState=OVVCheck.UNVIEWABLE}if(!B.supportsBeacons()&&a.geometrySupported===!1&&(a.viewabilityState=OVVCheck.UNMEASURABLE,!$zovvObj.DEBUG))return a;if(a.geometrySupported){if(a.technique=OVVCheck.GEOMETRY,F(a,d),a.viewabilityState=a.percentViewable>=50&&a.focus?OVVCheck.VIEWABLE:OVVCheck.UNVIEWABLE,!$zovvObj.DEBUG)return a;a.geometryViewabilityState=a.viewabilityState}var b=L(0),c=O(0);if(b&&b.isViewable&&c){var e=K(c)&&b.isViewable();a.beaconsSupported=!e}else a.beaconsSupported=!1;if(H())if(a.beaconsSupported){a.technique=OVVCheck.BEACON;var f=G(a);null===f?(a.viewabilityState=OVVCheck.UNMEASURABLE,$zovvObj.DEBUG&&(a.beaconViewabilityState=OVVCheck.UNMEASURABLE)):(a.viewabilityState=f?OVVCheck.VIEWABLE:OVVCheck.UNVIEWABLE,$zovvObj.DEBUG&&(a.beaconViewabilityState=f?OVVCheck.VIEWABLE:OVVCheck.UNVIEWABLE))}else a.viewabilityState=OVVCheck.UNMEASURABLE;else a.technique=OVVCheck.BEACON,a.viewabilityState=OVVCheck.NOT_READY;if($zovvObj.DEBUG)if(a.technique="",null===a.geometryViewabilityState&&null===a.beaconViewabilityState)a.viewabilityState=OVVCheck.UNMEASURABLE;else{var g=a.beaconViewabilityState===OVVCheck.VIEWABLE,h=a.cssViewabilityState===OVVCheck.VIEWABLE,i=a.domViewabilityState===OVVCheck.VIEWABLE,j=a.geometryViewabilityState===OVVCheck.VIEWABLE;a.viewabilityState=h||i||g||j?OVVCheck.VIEWABLE:OVVCheck.UNVIEWABLE}return a},this.beaconStarted=function(b){$zovvObj.DEBUG&&L(b).debug&&L(b).debug(),0!==b&&(w++,H()&&d["onJsReady"+a]())},this.dispose=function(){for(var a=1;a<=e;a++){var b=O(a);b&&(delete w[a],b.parentElement.removeChild(b))}clearInterval(window.$zovvObj.positionInterval),window.$zovvObj.removeAsset(this)},this.getId=function(){return v},this.getPlayer=function(){return d};var C=function(a,b){var c=window.getComputedStyle(b,null),d=c.getPropertyValue("visibility"),e=c.getPropertyValue("display");return("hidden"==d||"none"==e)&&(a.technique=OVVCheck.CSS_INVISIBILITY,a.viewabilityState=OVVCheck.UNVIEWABLE,!0)},D=function(a,b){var c=b.getBoundingClientRect(),d=12,e=c.left+d,f=c.right-d,g=c.top+d,h=c.bottom-d,i=Math.floor(c.left+c.width/2),j=Math.floor(c.top+c.height/2),k=[{x:e,y:g},{x:i,y:g},{x:f,y:g},{x:e,y:j},{x:i,y:j},{x:f,y:j},{x:e,y:h},{x:i,y:h},{x:f,y:h}];for(var l in k)if(k[l]&&k[l].x>=0&&k[l].y>=0&&(elem=document.elementFromPoint(k[l].x,k[l].y),null!=elem&&elem!=b&&!b.contains(elem)&&(overlappingArea=E(c,elem.getBoundingClientRect()),overlappingArea>0&&(a.percentObscured=100*E(c,elem.getBoundingClientRect()),a.percentObscured>50))))return a.percentViewable=100-a.percentObscured,a.technique=OVVCheck.DOM_OBSCURING,a.viewabilityState=OVVCheck.UNVIEWABLE,!0;return!1},E=function(a,b){var c=a.width*a.height,d=Math.max(0,Math.min(a.right,b.right)-Math.max(a.left,b.left)),e=Math.max(0,Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top));return d*e/c},F=function(a,b){a.percentObscured=a.percentObscured||0;var c=y.getViewabilityState(b,window);return c.error||(a.clientWidth=c.clientWidth,a.clientHeight=c.clientHeight,a.percentViewable=c.percentViewable-a.percentObscured,a.objTop=c.objTop,a.objBottom=c.objBottom,a.objLeft=c.objLeft,a.objRight=c.objRight),c},G=function(a){if(!H())return null;var b=0,c=0,f=0,g=0;a.beacons=new Array(e);var u=d.getClientRects?d.getClientRects()[0]:{top:-1,bottom:-1,left:-1,right:-1};a.objTop=u.top,a.objBottom=u.bottom,a.objLeft=u.left,a.objRight=u.right;for(var v=0;v<=e;v++)if(0!==v){var w=L(v),x=O(v),y=w.isViewable(),z=K(x);if(a.beacons[v]=y&&z,y)switch(b++,v){case i:case j:case k:case l:c++;break;case m:case n:case o:case p:f++;break;case q:case r:case s:case t:g++}}if(b===e)return!0;var A=a.beacons;return A[h]===!1?(g>=3||f>=3||c>=3)&&null:A[h]===!0&&(A[i]===!0&&A[j]===!0||A[i]===!0&&A[k]===!0||A[j]===!0&&A[l]===!0||A[k]===!0&&A[l]===!0)||(A[h]===!0&&4==f||(!A[i]||!A[l]||A[m]&&A[q]&&A[h]&&A[t]&&A[p]?!(!A[k]||!A[j]||A[o]&&A[s]&&A[h]&&A[r]&&A[n])&&null:null))},H=function(){return!!d&&w===e},I=function(a){if(a=BEACON_SWF_URL,""!==a&&"BEACON_SWF_URL"!==a){for(var b=0;b<=e;b++){var c=document.createElement("DIV");c.id="OVVBeaconContainer_"+b+"_"+v,c.style.position="absolute",c.style.zIndex=$zovvObj.DEBUG?99999:-99999;var d='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+x+'" height="'+x+'"><param name="movie" value="'+a+'" /><param name="quality" value="low" /><param name="flashvars" value="id='+v+"&index="+b+'" /><param name="bgcolor" value="#ffffff" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><!--[if !IE]>--><object id="OVVBeacon_'+b+"_"+v+'" type="application/x-shockwave-flash" data="'+a+'" width="'+x+'" height="'+x+'"><param name="quality" value="low" /><param name="flashvars" value="id='+v+"&index="+b+'" /><param name="bgcolor" value="#ff0000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><!--<![endif]--></object>';c.innerHTML=d,document.body.insertBefore(c,document.body.firstChild)}J.bind(this)(),this.positionInterval=setInterval(J.bind(this),u)}},J=function(){if(H()){var a=d.getClientRects()[0];if(!c||!a||c.left!==a.left||c.right!==a.right||c.top!==a.top||c.bottom!==a.bottom){c=a;for(var b=a.right-a.left,u=a.bottom-a.top,v=b/(1+f),w=u/(1+f),y=b/f,z=u/f,A=0;A<=e;A++){var B=a.left+document.body.scrollLeft,C=a.top+document.body.scrollTop;switch(A){case g:B=-1e5,C=-1e5;break;case h:B+=(b-x)/2,C+=(u-x)/2;break;case i:break;case j:B+=b-x;break;case k:C+=u-x;break;case l:B+=b-x,C+=u-x;break;case m:B+=(b-y)/2,C+=(u-z)/2;break;case n:B+=(b-y)/2+y,C+=(u-z)/2;break;case o:B+=(b-y)/2,C+=(u-z)/2+z;break;case p:B+=(b-y)/2+y,C+=(u-z)/2+z;break;case q:B+=(b-v)/2,C+=(u-w)/2;break;case r:B+=(b-v)/2+v,C+=(u-w)/2;break;case s:B+=(b-v)/2,C+=(u-w)/2+w;break;case t:B+=(b-v)/2+v,C+=(u-w)/2+w}A>=m&&(B-=x/2,C-=x/2);var D=O(A);D.style.left=B+"px",D.style.top=C+"px"}}}},K=function(a){if(!a)return!1;var b=Math.max(document.body.clientWidth,window.innerWidth),c=Math.max(document.body.clientHeight,window.innerHeight),d=a.getClientRects()[0];return d.top<c&&d.bottom>0&&d.left<b&&d.right>0},L=function(a){return z(a)}.memoize(),M=function(a){return document.getElementById("OVVBeacon_"+a+"_"+v)},N=function(a){var b=document.getElementById("OVVFrame_"+v+"_"+a),c=null;return b&&(c=b.contentWindow),c},O=function(a){return A(a)}.memoize(),P=function(a){return document.getElementById("OVVBeaconContainer_"+a+"_"+v)},Q=function(a){return document.getElementById("OVVFrame_"+v+"_"+a)},R=function(){for(var b=document.getElementsByTagName("embed"),c=0;c<b.length;c++)if(b[c][v])return b[c];for(var d=document.getElementsByTagName("object"),c=0;c<d.length;c++)if(d[c][v])return d[c];return document.getElementById(a)},S=function(){return("undefined"===document.hidden||document.hidden!==!0)&&(!!$zovvObj.IN_XD_IFRAME||(!window.top.document.hasFocus||window.top.document.hasFocus()))};d=R(),$zovvObj.DEBUG=!1,$zovvObj.IN_IFRAME=!1,0==$zovvObj.geometrySupported||$zovvObj.DEBUG?$zovvObj.browser.ID===$zovvObj.browserIDEnum.Firefox?(z=N,A=Q):(z=M,A=P,I.bind(this)("BEACON_SWF_URL")):d&&d["onJsReady"+a]&&setTimeout(function(){d["onJsReady"+a]()},5)}function OVVGeometryViewabilityCalculator(){this.getViewabilityState=function(d,e){var f,g=a();if(g.area==1/0)return{error:"Failed to determine viewport"};var h=d.getBoundingClientRect(),i=h.width*h.height;if(g.area/i<.5)f=Math.floor(100*g.area/i),j=g;else{var j=b(window.top),k=c(d,e);k.bottom>j.height&&(k.height-=k.bottom-j.height),k.top<0&&(k.height+=k.top),k.left<0&&(k.width+=k.left),k.right>j.width&&(k.width-=k.right-j.width),f=Math.floor(100*(k.width*k.height)/i)}return{clientWidth:j.width,clientHeight:j.height,objTop:h.top,objBottom:h.bottom,objLeft:h.left,objRight:h.right,percentViewable:f}};var a=function(){for(var a=b(window),c=a.area,d=window;d!=window.top;)d=d.parent,viewPortSize=b(d),viewPortSize.area<c&&(c=viewPortSize.area,a=viewPortSize);return a},b=function(a){var b={width:1/0,height:1/0,area:1/0};return!isNaN(a.document.body.clientWidth)&&a.document.body.clientWidth>0&&(b.width=a.document.body.clientWidth),!isNaN(a.document.body.clientHeight)&&a.document.body.clientHeight>0&&(b.height=a.document.body.clientHeight),a.document.documentElement&&a.document.documentElement.clientWidth&&!isNaN(a.document.documentElement.clientWidth)&&(b.width=a.document.documentElement.clientWidth),a.document.documentElement&&a.document.documentElement.clientHeight&&!isNaN(a.document.documentElement.clientHeight)&&(b.height=a.document.documentElement.clientHeight),a.innerWidth&&!isNaN(a.innerWidth)&&(b.width=Math.min(b.width,a.innerWidth)),a.innerHeight&&!isNaN(a.innerHeight)&&(b.height=Math.min(b.height,a.innerHeight)),b.area=b.height*b.width,b},c=function(a,b){var e=b,f=b.parent,g={width:0,height:0,left:0,right:0,top:0,bottom:0};if(a){var h=d(a,b);if(h.width=h.right-h.left,h.height=h.bottom-h.top,g=h,e!=f){var i=c(e.frameElement,f);i.bottom<g.bottom&&(i.bottom<g.top&&(g.top=i.bottom),g.bottom=i.bottom),i.right<g.right&&(i.right<g.left&&(g.left=i.right),g.right=i.right),g.width=g.right-g.left,g.height=g.bottom-g.top}}return g},d=function(a,b){var c=b,e=b.parent,f={left:0,right:0,top:0,bottom:0};if(a){var g=a.getBoundingClientRect();c!=e&&(f=d(c.frameElement,e)),f={left:g.left+f.left,right:g.right+f.left,top:g.top+f.top,bottom:g.bottom+f.top}}return f}}function Viewability(a){this.asset=new ZOVVAsset(a,{geometryViewabilityCalculator:new OVVGeometryViewabilityCalculator})}OVVCheck.UNMEASURABLE="unmeasurable",OVVCheck.VIEWABLE="viewable",OVVCheck.UNVIEWABLE="unviewable",OVVCheck.NOT_READY="not_ready",OVVCheck.BEACON="beacon",OVVCheck.GEOMETRY="geometry",OVVCheck.CSS_INVISIBILITY="css_invisibility",OVVCheck.DOM_OBSCURING="dom_obscuring",Function.prototype.memoized=function(a){return this._cacheValue=this._cacheValue||{},void 0!==this._cacheValue[a]?this._cacheValue[a]:this._cacheValue[a]=this.apply(this,arguments)},Function.prototype.memoize=function(){var a=this;return function(){return a.memoized.apply(a,arguments)}};var newOVV=new zzOVV;window.$zovvObj=window.$zovvObj||newOVV;for(var i in newOVV)$zovvObj.hasOwnProperty(i)||($zovvObj[i]=newOVV[i]);window.$zovvObj.addAsset(new ZOVVAsset("OVVID",{geometryViewabilityCalculator:new OVVGeometryViewabilityCalculator})),Viewability.prototype={iFlag:!1,fQFlag:!1,sQFlag:!1,tQFlag:!1,vCFlag:!1,startTime:!1,vStartTime:!1,VIEWABLEPERCENT:50,UNVIEWABLESEC:2,VIEWABLESEC:2,stopCheckingViewablity:!1,stopCountingOthrEvnt:!1,isFullScreen:!1,isAdImpressionCalled:!1,getViewability:function(){var a=this.asset.checkViewability();return a},checkViewability:function(a,b,c){var d={firstQuartile:Math.round(25*b)/100,midpoint:Math.round(50*b)/100,thirdQuartile:Math.round(75*b)/100};d.firstQuartile>a&&!firstQFlag&&(firstQFlag=!0)},onAdTimeHandler:function(a,b,c,d,e,f,g,h){if(!this.isAdImpressionCalled)return this.stopCountingOthrEvnt=!0,!1;if(g<=1&&h<=1)return this.stopCountingOthrEvnt=!0,!1;this.vStartTime||(this.vStartTime=a);var i={firstQuartile:Math.round(25*b)/100,midpoint:Math.round(50*b)/100,thirdQuartile:Math.round(75*b)/100},j=0,k=0,l={};l=this.getViewability(),this.isFullScreen&&(f("log","Viewability::isFullScreen"+this.isFullScreen+" percentage override to 100 and setfocus true "),l.percentViewable=100,l.focus=!0),f("log","Viewability::getViewability :: percentViewable "+l.percentViewable+" :: focus "+l.focus),l.percentViewable<this.VIEWABLEPERCENT||!l.focus?(this.startTime||(f("info"," Viewability  --------------> start unviewable counting <----------------- "),this.startTime=a,d&&(document.getElementById("viewability").style.color="#FF0000")),this.vStartTime=a):(d&&(document.getElementById("viewability").style.color="green"),this.startTime=!1),j=a-this.startTime,j>this.UNVIEWABLESEC&&this.startTime&&(d&&(document.getElementById("viewability").style.color="#FF0000",document.getElementById("viewability").innerHTML="unviewable"),f("info"," Viewability --------------> stopCountingOthrEvnt <----------------- "),this.stopCountingOthrEvnt=!0,this.iFlag&&(f("info"," Viewability --------------> stopCheckingViewablity <----------------- "),this.stopCheckingViewablity=!0)),k=a-this.vStartTime,f("log"," sTime "+this.vStartTime+" position ==> "+a+" diffViewableImpr => "+k+" ===> "+this.iFlag),k>this.VIEWABLESEC&&!this.iFlag?(f("log","Viewability:: Tracked viewableImpression "+a),this.iFlag=!0,Viewability.appendLog("Viewable Impression",d),e("viewableImpressions")):k>this.VIEWABLESEC&&(this.vStartTime=a),null!=document.getElementById("percentViewable")&&d&&(document.getElementById("percentViewable").innerHTML=l.percentViewable),null!=document.getElementById("viewability")&&d&&(document.getElementById("viewability").innerHTML=l.viewabilityState),"vpaid"==c||""==c||this.stopCountingOthrEvnt||(i.firstQuartile<a&&!this.fQFlag?(f("log","Viewability:: Tracked first Quartile impressions "+a),this.fQFlag=!0,Viewability.appendLog("First Quartile",d),e("viewableFirstQuartile")):i.midpoint<a&&!this.sQFlag?(f("log","Viewability:: Tracked midpoint impressions "+a),this.sQFlag=!0,Viewability.appendLog("Mid Point",d),e("viewableMidPoint")):i.thirdQuartile<a&&!this.tQFlag&&(f("log","Viewability:: Tracked third Quartile impressions "+a),this.tQFlag=!0,Viewability.appendLog("Third Quartile",d),e("viewableThirdQuartile")))},onAdCompleteHandler:function(a,b,c){this.vCFlag||(c("info","Viewability:: Tracked complete viewable impressions "),this.vCFlag=!0,Viewability.appendLog("Viewable Complete:",a),b("viewableComplete"))},updateWidgetStatus:function(a){null!=document.getElementById("percentViewable")&&a&&(document.getElementById("viewability").style.color="#FF0000",document.getElementById("percentViewable").innerHTML="",document.getElementById("viewability").innerHTML="unviewable")}},Viewability.initViewability=function(a){this.loadCSS(a),setTimeout(function(){var b='<div id="viewability-main-container"><div id="viewability-wrapper"><div id="viewability-header"><img id="viewability-logo" src="'+a+'HTML/app/assets/images/logo.png"><span class="viewability-title">VIEWABILITY INFO</span></div>';b+='<div id="viewability-content"><div class="prop-row"><span class="prop-name">Viewability</span><span id="viewability" class="prop-value">Viewable</span></div>',b+='<div class="prop-row"><span class="prop-name">Viewable %</span><span class="prop-value" id="percentViewable">100%</span></div></div></div></div>';var c=document.createElement("div");c.innerHTML=b,document.body.appendChild(c)},500)},Viewability.appendLog=function(a,b){if(b){var c=document.createElement("div");c.setAttribute("class","prop-row"),c.innerHTML="<span class='prop-name'>"+a+"</span><span class='prop-value'><span class='tick'></span></span>",document.getElementById("viewability-content").appendChild(c)}},Viewability.loadCSS=function(a){var b='#viewability-main-container{position:fixed;display:block;width:292px;height:auto;top:5px;right:5px;border:1px solid #AAA;padding:5px;box-shadow: 0px 0px 8px #888888;background-color: white;font-family: "Roboto", sans-serif;font-size: 15px;}';b+="#viewability-main-container #viewability-wrapper{width:100%;height:auto;border: 1px solid #E8E8E8;}#viewability-wrapper #viewability-header{height:16px;background-color:#32aed7;padding:10px;}",b+="#viewability-header #viewability-logo{position: relative;top: -5px;}#viewability-header .viewability-title{color:#fff;text-transform:uppercase;float:right;font-size:14px;vertical-align:middle;}",b+="#viewability-content .prop-row{margin-left:5px;margin-right:5px;padding: 7px 5px;border-bottom:1px solid #E8E8E8;line-height:24px;}",b+="#viewability-content .prop-row:last-child{border-bottom: none;}.prop-row .prop-value{float:right;}",b+='.prop-value .tick{background: url("'+a+'HTML/app/assets/images/tick.png") no-repeat;width: 24px;height: 24px;display: inline-block;}',head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style"),style.type="text/css",style.styleSheet?style.styleSheet.cssText=b:style.appendChild(document.createTextNode(b)),head.appendChild(style)};