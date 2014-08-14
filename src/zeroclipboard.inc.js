/*!
 * ZeroClipboard
 * The ZeroClipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
 * Copyright (c) 2014 Jon Rohan, James M. Greene
 * Licensed MIT
 * http://zeroclipboard.org/
 * v2.1.5
 */
!function(a,b){"use strict";var c,d=a,e=d.document,f=d.navigator,g=d.setTimeout,h=d.encodeURIComponent,i=d.ActiveXObject,j=d.Error,k=d.Number.parseInt||d.parseInt,l=d.Number.parseFloat||d.parseFloat,m=d.Number.isNaN||d.isNaN,n=d.Math.round,o=d.Date.now,p=d.Object.keys,q=d.Object.defineProperty,r=d.Object.prototype.hasOwnProperty,s=d.Array.prototype.slice,t=function(){var a=function(a){return a};if("function"==typeof d.wrap&&"function"==typeof d.unwrap)try{var b=e.createElement("div"),c=d.unwrap(b);1===b.nodeType&&c&&1===c.nodeType&&(a=d.unwrap)}catch(f){}return a}(),u=function(a){return s.call(a,0)},v=function(){var a,c,d,e,f,g,h=u(arguments),i=h[0]||{};for(a=1,c=h.length;c>a;a++)if(null!=(d=h[a]))for(e in d)r.call(d,e)&&(f=i[e],g=d[e],i!==g&&g!==b&&(i[e]=g));return i},w=function(a){var b,c,d,e;if("object"!=typeof a||null==a)b=a;else if("number"==typeof a.length)for(b=[],c=0,d=a.length;d>c;c++)r.call(a,c)&&(b[c]=w(a[c]));else{b={};for(e in a)r.call(a,e)&&(b[e]=w(a[e]))}return b},x=function(a,b){for(var c={},d=0,e=b.length;e>d;d++)b[d]in a&&(c[b[d]]=a[b[d]]);return c},y=function(a,b){var c={};for(var d in a)-1===b.indexOf(d)&&(c[d]=a[d]);return c},z=function(a){if(a)for(var b in a)r.call(a,b)&&delete a[b];return a},A=function(a,b){if(a&&1===a.nodeType&&a.ownerDocument&&b&&(1===b.nodeType&&b.ownerDocument&&b.ownerDocument===a.ownerDocument||9===b.nodeType&&!b.ownerDocument&&b===a.ownerDocument))do{if(a===b)return!0;a=a.parentNode}while(a);return!1},B=function(a){var b;return"string"==typeof a&&a&&(b=a.split("#")[0].split("?")[0],b=a.slice(0,a.lastIndexOf("/")+1)),b},C=function(a){var b,c;return"string"==typeof a&&a&&(c=a.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/),c&&c[1]?b=c[1]:(c=a.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/),c&&c[1]&&(b=c[1]))),b},D=function(){var a,b;try{throw new j}catch(c){b=c}return b&&(a=b.sourceURL||b.fileName||C(b.stack)),a},E=function(){var a,c,d;if(e.currentScript&&(a=e.currentScript.src))return a;if(c=e.getElementsByTagName("script"),1===c.length)return c[0].src||b;if("readyState"in c[0])for(d=c.length;d--;)if("interactive"===c[d].readyState&&(a=c[d].src))return a;return"loading"===e.readyState&&(a=c[c.length-1].src)?a:(a=D())?a:b},F=function(){var a,c,d,f=e.getElementsByTagName("script");for(a=f.length;a--;){if(!(d=f[a].src)){c=null;break}if(d=B(d),null==c)c=d;else if(c!==d){c=null;break}}return c||b},G=function(){var a=B(E())||F()||"";return a+"ZeroClipboard.swf"},H={bridge:null,version:"0.0.0",pluginType:"unknown",disabled:null,outdated:null,unavailable:null,deactivated:null,overdue:null,ready:null},I="11.0.0",J={},K={},L=null,M={ready:"Flash communication is established",error:{"flash-disabled":"Flash is disabled or not installed","flash-outdated":"Flash is too outdated to support ZeroClipboard","flash-unavailable":"Flash is unable to communicate bidirectionally with JavaScript","flash-deactivated":"Flash is too outdated for your browser and/or is configured as click-to-activate","flash-overdue":"Flash communication was established but NOT within the acceptable time limit"}},N={swfPath:G(),trustedDomains:a.location.host?[a.location.host]:[],cacheBust:!0,forceEnhancedClipboard:!1,flashLoadTimeout:3e4,autoActivate:!0,bubbleEvents:!0,containerId:"global-zeroclipboard-html-bridge",containerClass:"global-zeroclipboard-container",swfObjectId:"global-zeroclipboard-flash-bridge",hoverClass:"zeroclipboard-is-hover",activeClass:"zeroclipboard-is-active",forceHandCursor:!1,title:null,zIndex:999999999},O=function(a){if("object"==typeof a&&null!==a)for(var b in a)if(r.call(a,b))if(/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(b))N[b]=a[b];else if(null==H.bridge)if("containerId"===b||"swfObjectId"===b){if(!bb(a[b]))throw new Error("The specified `"+b+"` value is not valid as an HTML4 Element ID");N[b]=a[b]}else N[b]=a[b];{if("string"!=typeof a||!a)return w(N);if(r.call(N,a))return N[a]}},P=function(){return{browser:x(f,["userAgent","platform","appName"]),flash:y(H,["bridge"]),zeroclipboard:{version:Eb.version,config:Eb.config()}}},Q=function(){return!!(H.disabled||H.outdated||H.unavailable||H.deactivated)},R=function(a,b){var c,d,e,f={};if("string"==typeof a&&a)e=a.toLowerCase().split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)r.call(a,c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&Eb.on(c,a[c]);if(e&&e.length){for(c=0,d=e.length;d>c;c++)a=e[c].replace(/^on/,""),f[a]=!0,J[a]||(J[a]=[]),J[a].push(b);if(f.ready&&H.ready&&Eb.emit({type:"ready"}),f.error){var g=["disabled","outdated","unavailable","deactivated","overdue"];for(c=0,d=g.length;d>c;c++)if(H[g[c]]===!0){Eb.emit({type:"error",name:"flash-"+g[c]});break}}}return Eb},S=function(a,b){var c,d,e,f,g;if(0===arguments.length)f=p(J);else if("string"==typeof a&&a)f=a.split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)r.call(a,c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&Eb.off(c,a[c]);if(f&&f.length)for(c=0,d=f.length;d>c;c++)if(a=f[c].toLowerCase().replace(/^on/,""),g=J[a],g&&g.length)if(b)for(e=g.indexOf(b);-1!==e;)g.splice(e,1),e=g.indexOf(b,e);else g.length=0;return Eb},T=function(a){var b;return b="string"==typeof a&&a?w(J[a])||null:w(J)},U=function(a){var b,c,d;return a=cb(a),a&&!ib(a)?"ready"===a.type&&H.overdue===!0?Eb.emit({type:"error",name:"flash-overdue"}):(b=v({},a),hb.call(this,b),"copy"===a.type&&(d=ob(K),c=d.data,L=d.formatMap),c):void 0},V=function(){if("boolean"!=typeof H.ready&&(H.ready=!1),!Eb.isFlashUnusable()&&null===H.bridge){var a=N.flashLoadTimeout;"number"==typeof a&&a>=0&&g(function(){"boolean"!=typeof H.deactivated&&(H.deactivated=!0),H.deactivated===!0&&Eb.emit({type:"error",name:"flash-deactivated"})},a),H.overdue=!1,mb()}},W=function(){Eb.clearData(),Eb.blur(),Eb.emit("destroy"),nb(),Eb.off()},X=function(a,b){var c;if("object"==typeof a&&a&&"undefined"==typeof b)c=a,Eb.clearData();else{if("string"!=typeof a||!a)return;c={},c[a]=b}for(var d in c)"string"==typeof d&&d&&r.call(c,d)&&"string"==typeof c[d]&&c[d]&&(K[d]=c[d])},Y=function(a){"undefined"==typeof a?(z(K),L=null):"string"==typeof a&&r.call(K,a)&&delete K[a]},Z=function(a){return"undefined"==typeof a?w(K):"string"==typeof a&&r.call(K,a)?K[a]:void 0},$=function(a){if(a&&1===a.nodeType){c&&(wb(c,N.activeClass),c!==a&&wb(c,N.hoverClass)),c=a,vb(a,N.hoverClass);var b=a.getAttribute("title")||N.title;if("string"==typeof b&&b){var d=lb(H.bridge);d&&d.setAttribute("title",b)}var e=N.forceHandCursor===!0||"pointer"===xb(a,"cursor");Bb(e),Ab()}},_=function(){var a=lb(H.bridge);a&&(a.removeAttribute("title"),a.style.left="0px",a.style.top="-9999px",a.style.width="1px",a.style.top="1px"),c&&(wb(c,N.hoverClass),wb(c,N.activeClass),c=null)},ab=function(){return c||null},bb=function(a){return"string"==typeof a&&a&&/^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(a)},cb=function(a){var b;if("string"==typeof a&&a?(b=a,a={}):"object"==typeof a&&a&&"string"==typeof a.type&&a.type&&(b=a.type),b){v(a,{type:b.toLowerCase(),target:a.target||c||null,relatedTarget:a.relatedTarget||null,currentTarget:H&&H.bridge||null,timeStamp:a.timeStamp||o()||null});var d=M[a.type];return"error"===a.type&&a.name&&d&&(d=d[a.name]),d&&(a.message=d),"ready"===a.type&&v(a,{target:null,version:H.version}),"error"===a.type&&(/^flash-(disabled|outdated|unavailable|deactivated|overdue)$/.test(a.name)&&v(a,{target:null,minimumVersion:I}),/^flash-(outdated|unavailable|deactivated|overdue)$/.test(a.name)&&v(a,{version:H.version})),"copy"===a.type&&(a.clipboardData={setData:Eb.setData,clearData:Eb.clearData}),"aftercopy"===a.type&&(a=pb(a,L)),a.target&&!a.relatedTarget&&(a.relatedTarget=db(a.target)),a=eb(a)}},db=function(a){var b=a&&a.getAttribute&&a.getAttribute("data-clipboard-target");return b?e.getElementById(b):null},eb=function(a){if(a&&/^_(?:click|mouse(?:over|out|down|up|move))$/.test(a.type)){var c=a.target,f="_mouseover"===a.type&&a.relatedTarget?a.relatedTarget:b,g="_mouseout"===a.type&&a.relatedTarget?a.relatedTarget:b,h=zb(c),i=d.screenLeft||d.screenX||0,j=d.screenTop||d.screenY||0,k=e.body.scrollLeft+e.documentElement.scrollLeft,l=e.body.scrollTop+e.documentElement.scrollTop,m=h.left+("number"==typeof a._stageX?a._stageX:0),n=h.top+("number"==typeof a._stageY?a._stageY:0),o=m-k,p=n-l,q=i+o,r=j+p,s="number"==typeof a.movementX?a.movementX:0,t="number"==typeof a.movementY?a.movementY:0;delete a._stageX,delete a._stageY,v(a,{srcElement:c,fromElement:f,toElement:g,screenX:q,screenY:r,pageX:m,pageY:n,clientX:o,clientY:p,x:o,y:p,movementX:s,movementY:t,offsetX:0,offsetY:0,layerX:0,layerY:0})}return a},fb=function(a){var b=a&&"string"==typeof a.type&&a.type||"";return!/^(?:(?:before)?copy|destroy)$/.test(b)},gb=function(a,b,c,d){d?g(function(){a.apply(b,c)},0):a.apply(b,c)},hb=function(a){if("object"==typeof a&&a&&a.type){var b=fb(a),c=J["*"]||[],e=J[a.type]||[],f=c.concat(e);if(f&&f.length){var g,h,i,j,k,l=this;for(g=0,h=f.length;h>g;g++)i=f[g],j=l,"string"==typeof i&&"function"==typeof d[i]&&(i=d[i]),"object"==typeof i&&i&&"function"==typeof i.handleEvent&&(j=i,i=i.handleEvent),"function"==typeof i&&(k=v({},a),gb(i,j,[k],b))}return this}},ib=function(a){var b=a.target||c||null,d="swf"===a._source;delete a._source;var e=["flash-disabled","flash-outdated","flash-unavailable","flash-deactivated","flash-overdue"];switch(a.type){case"error":-1!==e.indexOf(a.name)&&v(H,{disabled:"flash-disabled"===a.name,outdated:"flash-outdated"===a.name,unavailable:"flash-unavailable"===a.name,deactivated:"flash-deactivated"===a.name,overdue:"flash-overdue"===a.name,ready:!1});break;case"ready":var f=H.deactivated===!0;v(H,{disabled:!1,outdated:!1,unavailable:!1,deactivated:!1,overdue:f,ready:!f});break;case"copy":var g,h,i=a.relatedTarget;!K["text/html"]&&!K["text/plain"]&&i&&(h=i.value||i.outerHTML||i.innerHTML)&&(g=i.value||i.textContent||i.innerText)?(a.clipboardData.clearData(),a.clipboardData.setData("text/plain",g),h!==g&&a.clipboardData.setData("text/html",h)):!K["text/plain"]&&a.target&&(g=a.target.getAttribute("data-clipboard-text"))&&(a.clipboardData.clearData(),a.clipboardData.setData("text/plain",g));break;case"aftercopy":Eb.clearData(),b&&b!==ub()&&b.focus&&b.focus();break;case"_mouseover":Eb.focus(b),N.bubbleEvents===!0&&d&&(b&&b!==a.relatedTarget&&!A(a.relatedTarget,b)&&jb(v({},a,{type:"mouseenter",bubbles:!1,cancelable:!1})),jb(v({},a,{type:"mouseover"})));break;case"_mouseout":Eb.blur(),N.bubbleEvents===!0&&d&&(b&&b!==a.relatedTarget&&!A(a.relatedTarget,b)&&jb(v({},a,{type:"mouseleave",bubbles:!1,cancelable:!1})),jb(v({},a,{type:"mouseout"})));break;case"_mousedown":vb(b,N.activeClass),N.bubbleEvents===!0&&d&&jb(v({},a,{type:a.type.slice(1)}));break;case"_mouseup":wb(b,N.activeClass),N.bubbleEvents===!0&&d&&jb(v({},a,{type:a.type.slice(1)}));break;case"_click":case"_mousemove":N.bubbleEvents===!0&&d&&jb(v({},a,{type:a.type.slice(1)}))}return/^_(?:click|mouse(?:over|out|down|up|move))$/.test(a.type)?!0:void 0},jb=function(a){if(a&&"string"==typeof a.type&&a){var b,c=a.target||null,f=c&&c.ownerDocument||e,g={view:f.defaultView||d,canBubble:!0,cancelable:!0,detail:"click"===a.type?1:0,button:"number"==typeof a.which?a.which-1:"number"==typeof a.button?a.button:f.createEvent?0:1},h=v(g,a);c&&f.createEvent&&c.dispatchEvent&&(h=[h.type,h.canBubble,h.cancelable,h.view,h.detail,h.screenX,h.screenY,h.clientX,h.clientY,h.ctrlKey,h.altKey,h.shiftKey,h.metaKey,h.button,h.relatedTarget],b=f.createEvent("MouseEvents"),b.initMouseEvent&&(b.initMouseEvent.apply(b,h),b._source="js",c.dispatchEvent(b)))}},kb=function(){var a=e.createElement("div");return a.id=N.containerId,a.className=N.containerClass,a.style.position="absolute",a.style.left="0px",a.style.top="-9999px",a.style.width="1px",a.style.height="1px",a.style.zIndex=""+Cb(N.zIndex),a},lb=function(a){for(var b=a&&a.parentNode;b&&"OBJECT"===b.nodeName&&b.parentNode;)b=b.parentNode;return b||null},mb=function(){var a,b=H.bridge,c=lb(b);if(!b){var f=tb(d.location.host,N),g="never"===f?"none":"all",h=rb(N),i=N.swfPath+qb(N.swfPath,N);c=kb();var j=e.createElement("div");c.appendChild(j),e.body.appendChild(c);var k=e.createElement("div"),l="activex"===H.pluginType;k.innerHTML='<object id="'+N.swfObjectId+'" name="'+N.swfObjectId+'" width="100%" height="100%" '+(l?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"':'type="application/x-shockwave-flash" data="'+i+'"')+">"+(l?'<param name="movie" value="'+i+'"/>':"")+'<param name="allowScriptAccess" value="'+f+'"/><param name="allowNetworking" value="'+g+'"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="'+h+'"/></object>',b=k.firstChild,k=null,t(b).ZeroClipboard=Eb,c.replaceChild(b,j)}return b||(b=e[N.swfObjectId],b&&(a=b.length)&&(b=b[a-1]),!b&&c&&(b=c.firstChild)),H.bridge=b||null,b},nb=function(){var a=H.bridge;if(a){var b=lb(a);b&&("activex"===H.pluginType&&"readyState"in a?(a.style.display="none",function c(){if(4===a.readyState){for(var d in a)"function"==typeof a[d]&&(a[d]=null);a.parentNode&&a.parentNode.removeChild(a),b.parentNode&&b.parentNode.removeChild(b)}else g(c,10)}()):(a.parentNode&&a.parentNode.removeChild(a),b.parentNode&&b.parentNode.removeChild(b))),H.ready=null,H.bridge=null,H.deactivated=null}},ob=function(a){var b={},c={};if("object"==typeof a&&a){for(var d in a)if(d&&r.call(a,d)&&"string"==typeof a[d]&&a[d])switch(d.toLowerCase()){case"text/plain":case"text":case"air:text":case"flash:text":b.text=a[d],c.text=d;break;case"text/html":case"html":case"air:html":case"flash:html":b.html=a[d],c.html=d;break;case"application/rtf":case"text/rtf":case"rtf":case"richtext":case"air:rtf":case"flash:rtf":b.rtf=a[d],c.rtf=d}return{data:b,formatMap:c}}},pb=function(a,b){if("object"!=typeof a||!a||"object"!=typeof b||!b)return a;var c={};for(var d in a)if(r.call(a,d)){if("success"!==d&&"data"!==d){c[d]=a[d];continue}c[d]={};var e=a[d];for(var f in e)f&&r.call(e,f)&&r.call(b,f)&&(c[d][b[f]]=e[f])}return c},qb=function(a,b){var c=null==b||b&&b.cacheBust===!0;return c?(-1===a.indexOf("?")?"?":"&")+"noCache="+o():""},rb=function(a){var b,c,e,f,g="",i=[];if(a.trustedDomains&&("string"==typeof a.trustedDomains?f=[a.trustedDomains]:"object"==typeof a.trustedDomains&&"length"in a.trustedDomains&&(f=a.trustedDomains)),f&&f.length)for(b=0,c=f.length;c>b;b++)if(r.call(f,b)&&f[b]&&"string"==typeof f[b]){if(e=sb(f[b]),!e)continue;if("*"===e){i.length=0,i.push(e);break}i.push.apply(i,[e,"//"+e,d.location.protocol+"//"+e])}return i.length&&(g+="trustedOrigins="+h(i.join(","))),a.forceEnhancedClipboard===!0&&(g+=(g?"&":"")+"forceEnhancedClipboard=true"),"string"==typeof a.swfObjectId&&a.swfObjectId&&(g+=(g?"&":"")+"swfObjectId="+h(a.swfObjectId)),g},sb=function(a){if(null==a||""===a)return null;if(a=a.replace(/^\s+|\s+$/g,""),""===a)return null;var b=a.indexOf("//");a=-1===b?a:a.slice(b+2);var c=a.indexOf("/");return a=-1===c?a:-1===b||0===c?null:a.slice(0,c),a&&".swf"===a.slice(-4).toLowerCase()?null:a||null},tb=function(){var a=function(a){var b,c,d,e=[];if("string"==typeof a&&(a=[a]),"object"!=typeof a||!a||"number"!=typeof a.length)return e;for(b=0,c=a.length;c>b;b++)if(r.call(a,b)&&(d=sb(a[b]))){if("*"===d){e.length=0,e.push("*");break}-1===e.indexOf(d)&&e.push(d)}return e};return function(b,c){var d=sb(c.swfPath);null===d&&(d=b);var e=a(c.trustedDomains),f=e.length;if(f>0){if(1===f&&"*"===e[0])return"always";if(-1!==e.indexOf(b))return 1===f&&b===d?"sameDomain":"always"}return"never"}}(),ub=function(){try{return e.activeElement}catch(a){return null}},vb=function(a,b){if(!a||1!==a.nodeType)return a;if(a.classList)return a.classList.contains(b)||a.classList.add(b),a;if(b&&"string"==typeof b){var c=(b||"").split(/\s+/);if(1===a.nodeType)if(a.className){for(var d=" "+a.className+" ",e=a.className,f=0,g=c.length;g>f;f++)d.indexOf(" "+c[f]+" ")<0&&(e+=" "+c[f]);a.className=e.replace(/^\s+|\s+$/g,"")}else a.className=b}return a},wb=function(a,b){if(!a||1!==a.nodeType)return a;if(a.classList)return a.classList.contains(b)&&a.classList.remove(b),a;if("string"==typeof b&&b){var c=b.split(/\s+/);if(1===a.nodeType&&a.className){for(var d=(" "+a.className+" ").replace(/[\n\t]/g," "),e=0,f=c.length;f>e;e++)d=d.replace(" "+c[e]+" "," ");a.className=d.replace(/^\s+|\s+$/g,"")}}return a},xb=function(a,b){var c=d.getComputedStyle(a,null).getPropertyValue(b);return"cursor"!==b||c&&"auto"!==c||"A"!==a.nodeName?c:"pointer"},yb=function(){var a,b,c,d=1;return"function"==typeof e.body.getBoundingClientRect&&(a=e.body.getBoundingClientRect(),b=a.right-a.left,c=e.body.offsetWidth,d=n(b/c*100)/100),d},zb=function(a){var b={left:0,top:0,width:0,height:0};if(a.getBoundingClientRect){var c,f,g,h=a.getBoundingClientRect();"pageXOffset"in d&&"pageYOffset"in d?(c=d.pageXOffset,f=d.pageYOffset):(g=yb(),c=n(e.documentElement.scrollLeft/g),f=n(e.documentElement.scrollTop/g));var i=e.documentElement.clientLeft||0,j=e.documentElement.clientTop||0;b.left=h.left+c-i,b.top=h.top+f-j,b.width="width"in h?h.width:h.right-h.left,b.height="height"in h?h.height:h.bottom-h.top}return b},Ab=function(){var a;if(c&&(a=lb(H.bridge))){var b=zb(c);v(a.style,{width:b.width+"px",height:b.height+"px",top:b.top+"px",left:b.left+"px",zIndex:""+Cb(N.zIndex)})}},Bb=function(a){H.ready===!0&&(H.bridge&&"function"==typeof H.bridge.setHandCursor?H.bridge.setHandCursor(a):H.ready=!1)},Cb=function(a){if(/^(?:auto|inherit)$/.test(a))return a;var b;return"number"!=typeof a||m(a)?"string"==typeof a&&(b=Cb(k(a,10))):b=a,"number"==typeof b?b:"auto"},Db=function(a){function b(a){var b=a.match(/[\d]+/g);return b.length=3,b.join(".")}function c(a){return!!a&&(a=a.toLowerCase())&&(/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(a)||"chrome.plugin"===a.slice(-13))}function d(a){a&&(i=!0,a.version&&(m=b(a.version)),!m&&a.description&&(m=b(a.description)),a.filename&&(k=c(a.filename)))}var e,g,h,i=!1,j=!1,k=!1,m="";if(f.plugins&&f.plugins.length)e=f.plugins["Shockwave Flash"],d(e),f.plugins["Shockwave Flash 2.0"]&&(i=!0,m="2.0.0.11");else if(f.mimeTypes&&f.mimeTypes.length)h=f.mimeTypes["application/x-shockwave-flash"],e=h&&h.enabledPlugin,d(e);else if("undefined"!=typeof a){j=!0;try{g=new a("ShockwaveFlash.ShockwaveFlash.7"),i=!0,m=b(g.GetVariable("$version"))}catch(n){try{g=new a("ShockwaveFlash.ShockwaveFlash.6"),i=!0,m="6.0.21"}catch(o){try{g=new a("ShockwaveFlash.ShockwaveFlash"),i=!0,m=b(g.GetVariable("$version"))}catch(p){j=!1}}}}H.disabled=i!==!0,H.outdated=m&&l(m)<l(I),H.version=m||"0.0.0",H.pluginType=k?"pepper":j?"activex":i?"netscape":"unknown"};Db(i);var Eb=function(){return this instanceof Eb?void("function"==typeof Eb._createClient&&Eb._createClient.apply(this,u(arguments))):new Eb};q(Eb,"version",{value:"2.1.5",writable:!1,configurable:!0,enumerable:!0}),Eb.config=function(){return O.apply(this,u(arguments))},Eb.state=function(){return P.apply(this,u(arguments))},Eb.isFlashUnusable=function(){return Q.apply(this,u(arguments))},Eb.on=function(){return R.apply(this,u(arguments))},Eb.off=function(){return S.apply(this,u(arguments))},Eb.handlers=function(){return T.apply(this,u(arguments))},Eb.emit=function(){return U.apply(this,u(arguments))},Eb.create=function(){return V.apply(this,u(arguments))},Eb.destroy=function(){return W.apply(this,u(arguments))},Eb.setData=function(){return X.apply(this,u(arguments))},Eb.clearData=function(){return Y.apply(this,u(arguments))},Eb.getData=function(){return Z.apply(this,u(arguments))},Eb.focus=Eb.activate=function(){return $.apply(this,u(arguments))},Eb.blur=Eb.deactivate=function(){return _.apply(this,u(arguments))},Eb.activeElement=function(){return ab.apply(this,u(arguments))};var Fb=0,Gb={},Hb=0,Ib={},Jb={};v(N,{autoActivate:!0});var Kb=function(a){var b=this;b.id=""+Fb++,Gb[b.id]={instance:b,elements:[],handlers:{}},a&&b.clip(a),Eb.on("*",function(a){return b.emit(a)}),Eb.on("destroy",function(){b.destroy()}),Eb.create()},Lb=function(a,b){var c,d,e,f={},g=Gb[this.id]&&Gb[this.id].handlers;if("string"==typeof a&&a)e=a.toLowerCase().split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)r.call(a,c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&this.on(c,a[c]);if(e&&e.length){for(c=0,d=e.length;d>c;c++)a=e[c].replace(/^on/,""),f[a]=!0,g[a]||(g[a]=[]),g[a].push(b);if(f.ready&&H.ready&&this.emit({type:"ready",client:this}),f.error){var h=["disabled","outdated","unavailable","deactivated","overdue"];for(c=0,d=h.length;d>c;c++)if(H[h[c]]){this.emit({type:"error",name:"flash-"+h[c],client:this});break}}}return this},Mb=function(a,b){var c,d,e,f,g,h=Gb[this.id]&&Gb[this.id].handlers;if(0===arguments.length)f=p(h);else if("string"==typeof a&&a)f=a.split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)r.call(a,c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&this.off(c,a[c]);if(f&&f.length)for(c=0,d=f.length;d>c;c++)if(a=f[c].toLowerCase().replace(/^on/,""),g=h[a],g&&g.length)if(b)for(e=g.indexOf(b);-1!==e;)g.splice(e,1),e=g.indexOf(b,e);else g.length=0;return this},Nb=function(a){var b=null,c=Gb[this.id]&&Gb[this.id].handlers;return c&&(b="string"==typeof a&&a?c[a]?c[a].slice(0):[]:w(c)),b},Ob=function(a){if(Tb.call(this,a)){"object"==typeof a&&a&&"string"==typeof a.type&&a.type&&(a=v({},a));var b=v({},cb(a),{client:this});Ub.call(this,b)}return this},Pb=function(a){a=Vb(a);for(var b=0;b<a.length;b++)if(r.call(a,b)&&a[b]&&1===a[b].nodeType){a[b].zcClippingId?-1===Ib[a[b].zcClippingId].indexOf(this.id)&&Ib[a[b].zcClippingId].push(this.id):(a[b].zcClippingId="zcClippingId_"+Hb++,Ib[a[b].zcClippingId]=[this.id],N.autoActivate===!0&&Wb(a[b]));var c=Gb[this.id]&&Gb[this.id].elements;-1===c.indexOf(a[b])&&c.push(a[b])}return this},Qb=function(a){var b=Gb[this.id];if(!b)return this;var c,d=b.elements;a="undefined"==typeof a?d.slice(0):Vb(a);for(var e=a.length;e--;)if(r.call(a,e)&&a[e]&&1===a[e].nodeType){for(c=0;-1!==(c=d.indexOf(a[e],c));)d.splice(c,1);var f=Ib[a[e].zcClippingId];if(f){for(c=0;-1!==(c=f.indexOf(this.id,c));)f.splice(c,1);0===f.length&&(N.autoActivate===!0&&Xb(a[e]),delete a[e].zcClippingId)}}return this},Rb=function(){var a=Gb[this.id];return a&&a.elements?a.elements.slice(0):[]},Sb=function(){this.unclip(),this.off(),delete Gb[this.id]},Tb=function(a){if(!a||!a.type)return!1;if(a.client&&a.client!==this)return!1;var b=Gb[this.id]&&Gb[this.id].elements,c=!!b&&b.length>0,d=!a.target||c&&-1!==b.indexOf(a.target),e=a.relatedTarget&&c&&-1!==b.indexOf(a.relatedTarget),f=a.client&&a.client===this;return d||e||f?!0:!1},Ub=function(a){if("object"==typeof a&&a&&a.type){var b=fb(a),c=Gb[this.id]&&Gb[this.id].handlers["*"]||[],e=Gb[this.id]&&Gb[this.id].handlers[a.type]||[],f=c.concat(e);if(f&&f.length){var g,h,i,j,k,l=this;for(g=0,h=f.length;h>g;g++)i=f[g],j=l,"string"==typeof i&&"function"==typeof d[i]&&(i=d[i]),"object"==typeof i&&i&&"function"==typeof i.handleEvent&&(j=i,i=i.handleEvent),"function"==typeof i&&(k=v({},a),gb(i,j,[k],b))}return this}},Vb=function(a){return"string"==typeof a&&(a=[]),"number"!=typeof a.length?[a]:a},Wb=function(a){if(a&&1===a.nodeType){var b=function(a){(a||(a=d.event))&&("js"!==a._source&&(a.stopImmediatePropagation(),a.preventDefault()),delete a._source)},c=function(c){(c||(c=d.event))&&(b(c),Eb.focus(a))};a.addEventListener("mouseover",c,!1),a.addEventListener("mouseout",b,!1),a.addEventListener("mouseenter",b,!1),a.addEventListener("mouseleave",b,!1),a.addEventListener("mousemove",b,!1),Jb[a.zcClippingId]={mouseover:c,mouseout:b,mouseenter:b,mouseleave:b,mousemove:b}}},Xb=function(a){if(a&&1===a.nodeType){var b=Jb[a.zcClippingId];if("object"==typeof b&&b){for(var c,d,e=["move","leave","enter","out","over"],f=0,g=e.length;g>f;f++)c="mouse"+e[f],d=b[c],"function"==typeof d&&a.removeEventListener(c,d,!1);delete Jb[a.zcClippingId]}}};Eb._createClient=function(){Kb.apply(this,u(arguments))},Eb.prototype.on=function(){return Lb.apply(this,u(arguments))},Eb.prototype.off=function(){return Mb.apply(this,u(arguments))},Eb.prototype.handlers=function(){return Nb.apply(this,u(arguments))},Eb.prototype.emit=function(){return Ob.apply(this,u(arguments))},Eb.prototype.clip=function(){return Pb.apply(this,u(arguments))},Eb.prototype.unclip=function(){return Qb.apply(this,u(arguments))},Eb.prototype.elements=function(){return Rb.apply(this,u(arguments))},Eb.prototype.destroy=function(){return Sb.apply(this,u(arguments))},Eb.prototype.setText=function(a){return Eb.setData("text/plain",a),this},Eb.prototype.setHtml=function(a){return Eb.setData("text/html",a),this},Eb.prototype.setRichText=function(a){return Eb.setData("application/rtf",a),this},Eb.prototype.setData=function(){return Eb.setData.apply(this,u(arguments)),this},Eb.prototype.clearData=function(){return Eb.clearData.apply(this,u(arguments)),this},Eb.prototype.getData=function(){return Eb.getData.apply(this,u(arguments))},"function"==typeof define&&define.amd?define(function(){return Eb}):"object"==typeof module&&module&&"object"==typeof module.exports&&module.exports?module.exports=Eb:a.ZeroClipboard=Eb}(function(){return this||window}());
//# sourceMappingURL=ZeroClipboard.min.map