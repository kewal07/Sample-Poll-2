(function(){var l={2320:"2320",480:"480",2988:"2988"},m={578:"578",579:"579",3498:"3498",3499:"3499",5:"5"},n={580:"580",3500:"3500",4:"4"},p={2320:"2320"},d={2320:{channel:"",tags:"3",ptime:"3",ctime:""}};window.NetworkIdsCheck=function(){return{dock:function(a){var b=0;0==a&&l[inReadNetworkId]&&m[inReadChannelId]&&(b=1);1==a&&l[inReadNetworkId]&&n[inReadbChannelId]&&(b=1);return b},parallelLoad:function(){var a=0,b=a+"::";d[inReadNetworkId]&&d[inReadNetworkId].channel[inReadChannelId]&&(a=1);0==
a&&p[inReadNetworkId]&&(a=1);1==a&&(b=a+":"+d[inReadNetworkId].tags+":"+d[inReadNetworkId].ptime+":"+d[inReadNetworkId].ctime);return b}}}();zinr_hbTimer=0;try{var g=new Date,c=g.getMonth()+1,c=10>c?"0"+c:c,e=g.getDate(),e=10>e?"0"+e:e,f=g.getHours(),h=c+""+e+""+(10>f?"0"+f:f)}catch(a){h="080512"}var q=function(a,b,d){for(var c=0,e="",g=!1,f=0,l=a[0].bidders.length;f<l;f++){var k=a[0].bidders[f];"rubicon"===k.name&&(e={account_id:k.account_id,site_id:k.site_id,zone_id:k.zone_id,size_id:k.sizeId,width:a[0].width,
height:a[0].height},g=!0)}if(g){var c=0,h=function(){"undefined"!==typeof Zd_HB_Video?(clearTimeout(c),(new Zd_HB_Video(e,b,a[2],d)).init(),zinr_debugParam&&console.log(zinr_getTimestamp()+' ZINC Log : All Bidder"s initialized'),zinr_hbTimer=setTimeout(function(){clearTimeout(zinr_hbTimer);zinr_debugParam&&console.log(zinr_getTimestamp()+" ZINC Log : Header Bidding Timeout occured");a[2](b)},d)):c=setTimeout(function(){h()},200)};h()}};window.ZheaderVideoBids=function(){var a=parent.top.document.createElement("script"),
b="https:"===document.location.protocol;a.type="text/javascript";a.id="videoHB_inAticle";a.src=(b?"https://ss3.zedo.com":"http://c14.zedo.com")+"/utils/vhbidding/v1/zhbv.js?"+h;document.body.appendChild(a);return{getHeaderBid:function(a,b,c){q(a,b,c)},resetTimer:function(){clearTimeout(zinr_hbTimer)}}}})();