// source --> https://andtea.com/wp-content/themes/andtea/assets/js/lib/modernizr-2.7.1.min.js?ver=1.5 
window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in a){var e=a[d];if(!F(e,"-")&&j[e]!==c)return"pfx"==b?e:!0}return!1}function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c))}function J(){e.input=function(c){for(var d=0,e=c.length;e>d;d++)u[c[d]]=!!(c[d]in k);return u.list&&(u.list=!(!b.createElement("datalist")||!a.HTMLDataListElement)),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var e,f,h,d=0,i=a.length;i>d;d++)k.setAttribute("type",f=a[d]),e="text"!==k.type,e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&"textfield"!==h.getComputedStyle(k,null).WebkitAppearance&&0!==k.offsetHeight,g.removeChild(k)):/^(search|tel)$/.test(f)||(e=/^(url|email)$/.test(f)?k.checkValidity&&k.checkValidity()===!1:k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var x,B,d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))for(;d--;)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=E(e[d],"function"),E(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),A={}.hasOwnProperty;B=E(A,"undefined")||E(A.call,"undefined")?function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined")}:function(a,b){return A.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=w.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(w.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(w.call(arguments)))};return d}),s.flexbox=function(){return I("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))},s.canvastext=function(){return!(!e.canvas||!E(b.createElement("canvas").getContext("2d").fillText,"function"))},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!I("indexedDB",a)},s.hashchange=function(){return z("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!(!a.history||!history.pushState)},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return C("background-color:rgba(150,255,150,.5)"),F(j.backgroundColor,"rgba")},s.hsla=function(){return C("background-color:hsla(120,40%,100%,.5)"),F(j.backgroundColor,"rgba")||F(j.backgroundColor,"hsla")},s.multiplebgs=function(){return C("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return I("backgroundSize")},s.borderimage=function(){return I("borderImage")},s.borderradius=function(){return I("borderRadius")},s.boxshadow=function(){return I("boxShadow")},s.textshadow=function(){return""===b.createElement("div").style.textShadow},s.opacity=function(){return D("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return I("animationName")},s.csscolumns=function(){return I("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return C((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),F(j.backgroundImage,"gradient")},s.cssreflections=function(){return I("boxReflect")},s.csstransforms=function(){return!!I("transform")},s.csstransforms3d=function(){var a=!!I("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b){a=9===b.offsetLeft&&3===b.offsetHeight}),a},s.csstransitions=function(){return I("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&0===g.indexOf(d.split(" ")[0])}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var K in s)B(s,K)&&(x=K.toLowerCase(),e[x]=s[K](),v.push((e[x]?"":"no-")+x));return e.input||J(),e.addTest=function(a,b){if("object"==typeof a)for(var d in a)B(a,d)&&e.addTest(d,a[d]);else{if(a=a.toLowerCase(),e[a]!==c)return e;b="function"==typeof b?b():b,"undefined"!=typeof f&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},C(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return"string"==typeof a?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){if(c||(c=b),k)return c.createElement(a);d||(d=n(c));var g;return g=d.cache[a]?d.cache[a].cloneNode():f.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!g.canHaveChildren||e.test(a)||g.tagUrn?g:d.frag.appendChild(g)}function p(a,c){if(a||(a=b),k)return a.createDocumentFragment();c=c||n(a);for(var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;g>e;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return!s.shivCSS||g||c.hasCSS||(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var g,k,c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",i=0,j={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){g=!0,k=!0}}();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=z,e.testProp=function(a){return G([a])},e.testAllProps=I,e.testStyles=y,e.prefixed=function(a,b,c){return b?I(a,b,c):I(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var A,B,l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}};B=function(a){function b(a){var e,f,g,a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a};for(f=0;d>f;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;b>f;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var c,b=0;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var m,n,h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var l,o,k=b.createElement("script"),e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var j,e=b.createElement("link"),c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
// source --> https://andtea.com/wp-content/themes/andtea/assets/js/es.js?ver=1.5 
class ESjs{
    openSharePop(url) {
        window.open(
            url, 
            'shareWindow',
            'menubar=0,location=0,toolbar=0,status=0,scrollbars=1,width=800,height=600');
    }
    nodeListIdx(arr,obj){
        for( let i = 0; i < arr.length; i++ ){
            if( arr[i] == obj ){
                return i;
            }
        }
    }
    //取得css的值 object, string
    getCssValue(obj, attr){
        return parseInt(
            window.getComputedStyle(obj, null).getPropertyValue(attr)
        )
    }
    //圓形跑馬燈
    circleTrack(obj, speed){
        let val = 0;
        moveTrack()
        function moveTrack(){
            if( obj.classList.contains('esin') ){
                let combineSpeed = speed * Math.abs(scrSpeed) <= speed ? speed : speed * Math.abs(scrSpeed);
                if( winW <= 768 ){
                    val += speed; 
                }else{
                    val += combineSpeed;
                }
                obj.style.transform = 'rotate('+ val +'deg)';
            }
            requestAnimationFrame(moveTrack);
        }
    }
    //跑馬燈動畫 wraper ,speed
    railTrack(wrap, speed){
        let val = 0;
        let objWidth  = this.getCssValue( wrap.children[0], 'width' );
        moveTrack()
        function moveTrack(){
            if( wrap.classList.contains('esin') ){
                let combineSpeed = speed * Math.abs(scrSpeed) <= speed ? speed : speed * Math.abs(scrSpeed);
                val < objWidth && val >= 0 ? 
                val += combineSpeed: 
                val = 0 ;
                wrap.style.transform = 'translate3d(-'+ val +'px,0,0)';
            }
            requestAnimationFrame(moveTrack);
        }
    }
    //追滑鼠小東西
    followCursorInSec(obj, section){
        let mouseIn = false;

        //算區塊中心點
        let secRect = section.getBoundingClientRect();
        let objcenterX = secRect.width / 2; 
        let objcenterY = secRect.height / 2;

        let x = objcenterX, 
            y = objcenterY, 
            valX = 0, 
            valY = 0, 
            speed = 0.1;

        obj.style.transform = 'translate3d('+ objcenterX +'px,'+ objcenterY +'px,0)';
        
        //算距離動畫，有待改進，跳出時應該要清除
        move();
        function move(){
            let disA = x - valX, 
                disB = y - valY;

            valX += disA * speed; 
            valY += disB * speed;

            obj.style.transform = 'translate3d('+ valX +'px,'+ valY +'px,0)';
            requestAnimationFrame(move);
        }
        section.addEventListener('mouseenter', (e)=>{
            mouseIn = true;
            section.classList.add('hover');
        });
        //在區塊範圍內監聽
        section.addEventListener('mousemove', (e)=>{
            if( mouseIn == false ) return;
            let secLeft = section.getBoundingClientRect().left;
            let secTop  = section.getBoundingClientRect().top;
            x = e.pageX - secLeft, y = e.pageY - secTop;
        });
        //回到中心點
        section.addEventListener('mouseleave', ()=>{
            mouseIn = false;
            section.classList.remove('hover');
            x = objcenterX, y = objcenterY;
        });
    }
    //自我中心追滑鼠
    followCursorPara(obj, sec){
        let mouseIn = false;
        let X     = 0, 
            valX  = 0,
            speed = 0.1;
        
        paraMove()
        function paraMove(){
            let dis = X - valX;
            valX += dis * speed;
            obj.style.transform = 'translate3d('+ valX +'px,0,0)';
            requestAnimationFrame(paraMove);
        }
        sec.addEventListener('mousemove', (e)=>{
            mouseIn = true;
            if( mouseIn ){
                X = (window.innerWidth / 2 - e.clientX) / 10
            }
        });
        sec.addEventListener('mouseleave', ()=>{
            mouseIn = false;
        })
    }
    //string('alert', 'success'), string, string
    message(type, text, icon){

        let msgWrap  = document.createElement('div')
        let msgInner = document.createElement('div')
        let msgText  = document.createElement('p')

        msgText.innerHTML = '<i class="icon-'+icon+'"></i>' + text;
        
        msgWrap.className  = 'message ' + type;
        msgInner.className = 'msg_inner'
        
        msgInner.appendChild(msgText)
        msgWrap.appendChild(msgInner)
        document.body.appendChild( msgWrap )

        setTimeout(()=>{
            msgWrap.classList.add('leave')
        }, 2000)
        setTimeout(()=>{
            msgWrap.remove()
        }, 2500)
    }
}
class ESvideoPopup{
    constructor(open){
        this.isOpen    = false
        this.newPop    = document.createElement('div')
        this.popInner  = document.createElement('div')
        this.popCloser = document.createElement('div')
        this.youtuDiv  = document.createElement('iframe') //youtube
    }
    openPop(videoId, callback){
        this.isOpen              = true;
        this.newPop.className    = 'espopup'
        this.popCloser.className = 'closer'
        this.popInner.className  = 'inner'

        this.youtuDiv.setAttribute('autoplay', 'true')
        this.youtuDiv.setAttribute('src', 'https://www.youtube.com/embed/'+ videoId )

        this.popInner.appendChild( this.youtuDiv )
        this.popInner.appendChild( this.popCloser )
        this.newPop.appendChild( this.popInner )
        document.body.appendChild( this.newPop )

        this.popCloser.addEventListener('click', ()=>{
            this.closePop()
        })
        
        let iframe = document.createElement('iframe');
        
        // callback;
    }
    closePop(){
        this.newPop.classList.add('leave');
        setTimeout(()=>{
            this.newPop.remove()
            this.isOpen = false;
        }, 500)
    }
};
// source --> https://andtea.com/wp-content/themes/andtea/assets/js/support.js?ver=1.5 
/** barba
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
 !function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).barba=n()}(this,(function(){function t(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function n(n,r,e){return r&&t(n.prototype,r),e&&t(n,e),n}function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t}).apply(this,arguments)}function e(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,n){return(o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function u(t,n,r){return(u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,r){var e=[null];e.push.apply(e,n);var i=new(Function.bind.apply(t,e));return r&&o(i,r.prototype),i}).apply(null,arguments)}function f(t){var n="function"==typeof Map?new Map:void 0;return(f=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return u(t,arguments,i(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),o(r,t)})(t)}function s(t,n){try{var r=t()}catch(t){return n(t)}return r&&r.then?r.then(void 0,n):r}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var c,a="2.9.7",h=function(){};!function(t){t[t.off=0]="off",t[t.error=1]="error",t[t.warning=2]="warning",t[t.info=3]="info",t[t.debug=4]="debug"}(c||(c={}));var v=c.off,l=function(){function t(t){this.t=t}t.getLevel=function(){return v},t.setLevel=function(t){return v=c[t]};var n=t.prototype;return n.error=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.error,c.error,n)},n.warn=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.warn,c.warning,n)},n.info=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.info,c.info,n)},n.debug=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.log,c.debug,n)},n.i=function(n,r,e){r<=t.getLevel()&&n.apply(console,["["+this.t+"] "].concat(e))},t}(),d=O,m=E,p=g,w=x,b=T,y="/",P=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function g(t,n){for(var r,e=[],i=0,o=0,u="",f=n&&n.delimiter||y,s=n&&n.whitelist||void 0,c=!1;null!==(r=P.exec(t));){var a=r[0],h=r[1],v=r.index;if(u+=t.slice(o,v),o=v+a.length,h)u+=h[1],c=!0;else{var l="",d=r[2],m=r[3],p=r[4],w=r[5];if(!c&&u.length){var b=u.length-1,g=u[b];(!s||s.indexOf(g)>-1)&&(l=g,u=u.slice(0,b))}u&&(e.push(u),u="",c=!1);var E=m||p,x=l||f;e.push({name:d||i++,prefix:l,delimiter:x,optional:"?"===w||"*"===w,repeat:"+"===w||"*"===w,pattern:E?A(E):"[^"+k(x===f?x:x+f)+"]+?"})}}return(u||o<t.length)&&e.push(u+t.substr(o)),e}function E(t,n){return function(r,e){var i=t.exec(r);if(!i)return!1;for(var o=i[0],u=i.index,f={},s=e&&e.decode||decodeURIComponent,c=1;c<i.length;c++)if(void 0!==i[c]){var a=n[c-1];f[a.name]=a.repeat?i[c].split(a.delimiter).map((function(t){return s(t,a)})):s(i[c],a)}return{path:o,index:u,params:f}}}function x(t,n){for(var r=new Array(t.length),e=0;e<t.length;e++)"object"==typeof t[e]&&(r[e]=new RegExp("^(?:"+t[e].pattern+")$",R(n)));return function(n,e){for(var i="",o=e&&e.encode||encodeURIComponent,u=!e||!1!==e.validate,f=0;f<t.length;f++){var s=t[f];if("string"!=typeof s){var c,a=n?n[s.name]:void 0;if(Array.isArray(a)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(0===a.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<a.length;h++){if(c=o(a[h],s),u&&!r[f].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');i+=(0===h?s.prefix:s.delimiter)+c}}else if("string"!=typeof a&&"number"!=typeof a&&"boolean"!=typeof a){if(!s.optional)throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"))}else{if(c=o(String(a),s),u&&!r[f].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+c+'"');i+=s.prefix+c}}else i+=s}return i}}function k(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function A(t){return t.replace(/([=!:$/()])/g,"\\$1")}function R(t){return t&&t.sensitive?"":"i"}function T(t,n,r){for(var e=(r=r||{}).strict,i=!1!==r.start,o=!1!==r.end,u=r.delimiter||y,f=[].concat(r.endsWith||[]).map(k).concat("$").join("|"),s=i?"^":"",c=0;c<t.length;c++){var a=t[c];if("string"==typeof a)s+=k(a);else{var h=a.repeat?"(?:"+a.pattern+")(?:"+k(a.delimiter)+"(?:"+a.pattern+"))*":a.pattern;n&&n.push(a),s+=a.optional?a.prefix?"(?:"+k(a.prefix)+"("+h+"))?":"("+h+")?":k(a.prefix)+"("+h+")"}}if(o)e||(s+="(?:"+k(u)+")?"),s+="$"===f?"$":"(?="+f+")";else{var v=t[t.length-1],l="string"==typeof v?v[v.length-1]===u:void 0===v;e||(s+="(?:"+k(u)+"(?="+f+"))?"),l||(s+="(?="+k(u)+"|"+f+")")}return new RegExp(s,R(r))}function O(t,n,r){return t instanceof RegExp?function(t,n){if(!n)return t;var r=t.source.match(/\((?!\?)/g);if(r)for(var e=0;e<r.length;e++)n.push({name:e,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return t}(t,n):Array.isArray(t)?function(t,n,r){for(var e=[],i=0;i<t.length;i++)e.push(O(t[i],n,r).source);return new RegExp("(?:"+e.join("|")+")",R(r))}(t,n,r):function(t,n,r){return T(g(t,r),n,r)}(t,n,r)}d.match=function(t,n){var r=[];return E(O(t,r,n),r)},d.regexpToFunction=m,d.parse=p,d.compile=function(t,n){return x(g(t,n),n)},d.tokensToFunction=w,d.tokensToRegExp=b;var S={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},j=new(function(){function t(){this.o=S,this.u=new DOMParser}var n=t.prototype;return n.toString=function(t){return t.outerHTML},n.toDocument=function(t){return this.u.parseFromString(t,"text/html")},n.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},n.getHtml=function(t){return void 0===t&&(t=document),this.toString(t.documentElement)},n.getWrapper=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},n.getContainer=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},n.removeContainer=function(t){document.body.contains(t)&&t.parentNode.removeChild(t)},n.addContainer=function(t,n){var r=this.getContainer();r?this.s(t,r):n.appendChild(t)},n.getNamespace=function(t){void 0===t&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},n.getHref=function(t){if(t.tagName&&"a"===t.tagName.toLowerCase()){if("string"==typeof t.href)return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},n.resolveUrl=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var e=n.length;if(0===e)throw new Error("resolveUrl requires at least one argument; got none.");var i=document.createElement("base");if(i.href=arguments[0],1===e)return i.href;var o=document.getElementsByTagName("head")[0];o.insertBefore(i,o.firstChild);for(var u,f=document.createElement("a"),s=1;s<e;s++)f.href=arguments[s],i.href=u=f.href;return o.removeChild(i),u},n.s=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},t}()),M=new(function(){function t(){this.h=[],this.v=-1}var e=t.prototype;return e.init=function(t,n){this.l="barba";var r={ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(r),this.v=0;var e={from:this.l,index:0,states:[].concat(this.h)};window.history&&window.history.replaceState(e,"",t)},e.change=function(t,n,r){if(r&&r.state){var e=r.state,i=e.index;n=this.m(this.v-i),this.replace(e.states),this.v=i}else this.add(t,n);return n},e.add=function(t,n){var r=this.size,e=this.p(n),i={ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(i),this.v=r;var o={from:this.l,index:r,states:[].concat(this.h)};switch(e){case"push":window.history&&window.history.pushState(o,"",t);break;case"replace":window.history&&window.history.replaceState(o,"",t)}},e.update=function(t,n){var e=n||this.v,i=r({},this.get(e),{},t);this.set(e,i)},e.remove=function(t){t?this.h.splice(t,1):this.h.pop(),this.v--},e.clear=function(){this.h=[],this.v=-1},e.replace=function(t){this.h=t},e.get=function(t){return this.h[t]},e.set=function(t,n){return this.h[t]=n},e.p=function(t){var n="push",r=t,e=S.prefix+"-"+S.history;return r.hasAttribute&&r.hasAttribute(e)&&(n=r.getAttribute(e)),n},e.m=function(t){return Math.abs(t)>1?t>0?"forward":"back":0===t?"popstate":t>0?"back":"forward"},n(t,[{key:"current",get:function(){return this.h[this.v]}},{key:"state",get:function(){return this.h[this.h.length-1]}},{key:"previous",get:function(){return this.v<1?null:this.h[this.v-1]}},{key:"size",get:function(){return this.h.length}}]),t}()),L=function(t,n){try{var r=function(){if(!n.next.html)return Promise.resolve(t).then((function(t){var r=n.next;if(t){var e=j.toElement(t);r.namespace=j.getNamespace(e),r.container=j.getContainer(e),r.html=t,M.update({ns:r.namespace});var i=j.toDocument(t);document.title=i.title}}))}();return Promise.resolve(r&&r.then?r.then((function(){})):void 0)}catch(t){return Promise.reject(t)}},$=d,_={__proto__:null,update:L,nextTick:function(){return new Promise((function(t){window.requestAnimationFrame(t)}))},pathToRegexp:$},q=function(){return window.location.origin},B=function(t){return void 0===t&&(t=window.location.href),U(t).port},U=function(t){var n,r=t.match(/:\d+/);if(null===r)/^http/.test(t)&&(n=80),/^https/.test(t)&&(n=443);else{var e=r[0].substring(1);n=parseInt(e,10)}var i,o=t.replace(q(),""),u={},f=o.indexOf("#");f>=0&&(i=o.slice(f+1),o=o.slice(0,f));var s=o.indexOf("?");return s>=0&&(u=D(o.slice(s+1)),o=o.slice(0,s)),{hash:i,path:o,port:n,query:u}},D=function(t){return t.split("&").reduce((function(t,n){var r=n.split("=");return t[r[0]]=r[1],t}),{})},F=function(t){return void 0===t&&(t=window.location.href),t.replace(/(\/#.*|\/|#.*)$/,"")},H={__proto__:null,getHref:function(){return window.location.href},getOrigin:q,getPort:B,getPath:function(t){return void 0===t&&(t=window.location.href),U(t).path},parse:U,parseQuery:D,clean:F};function I(t,n,r){return void 0===n&&(n=2e3),new Promise((function(e,i){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(o.readyState===XMLHttpRequest.DONE)if(200===o.status)e(o.responseText);else if(o.status){var n={status:o.status,statusText:o.statusText};r(t,n),i(n)}},o.ontimeout=function(){var e=new Error("Timeout error ["+n+"]");r(t,e),i(e)},o.onerror=function(){var n=new Error("Fetch error");r(t,n),i(n)},o.open("GET",t),o.timeout=n,o.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),o.setRequestHeader("x-barba","yes"),o.send()}))}var C=function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then};function N(t,n){return void 0===n&&(n={}),function(){for(var r=arguments.length,e=new Array(r),i=0;i<r;i++)e[i]=arguments[i];var o=!1,u=new Promise((function(r,i){n.async=function(){return o=!0,function(t,n){t?i(t):r(n)}};var u=t.apply(n,e);o||(C(u)?u.then(r,i):r(u))}));return u}}var X=new(function(t){function n(){var n;return(n=t.call(this)||this).logger=new l("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}e(n,t);var r=n.prototype;return r.init=function(){var t=this;this.registered.clear(),this.all.forEach((function(n){t[n]||(t[n]=function(r,e){t.registered.has(n)||t.registered.set(n,new Set),t.registered.get(n).add({ctx:e||{},fn:r})})}))},r.do=function(t){for(var n=this,r=arguments.length,e=new Array(r>1?r-1:0),i=1;i<r;i++)e[i-1]=arguments[i];if(this.registered.has(t)){var o=Promise.resolve();return this.registered.get(t).forEach((function(t){o=o.then((function(){return N(t.fn,t.ctx).apply(void 0,e)}))})),o.catch((function(r){n.logger.debug("Hook error ["+t+"]"),n.logger.error(r)}))}return Promise.resolve()},r.clear=function(){var t=this;this.all.forEach((function(n){delete t[n]})),this.init()},r.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var t=[];this.registered.forEach((function(n,r){return t.push(r)})),this.logger.info("Registered hooks: "+t.join(","))},n}(h)),z=function(){function t(t){if(this.P=[],"boolean"==typeof t)this.g=t;else{var n=Array.isArray(t)?t:[t];this.P=n.map((function(t){return $(t)}))}}return t.prototype.checkHref=function(t){if("boolean"==typeof this.g)return this.g;var n=U(t).path;return this.P.some((function(t){return null!==t.exec(n)}))},t}(),G=function(t){function n(n){var r;return(r=t.call(this,n)||this).k=new Map,r}e(n,t);var i=n.prototype;return i.set=function(t,n,r){return this.k.set(t,{action:r,request:n}),{action:r,request:n}},i.get=function(t){return this.k.get(t)},i.getRequest=function(t){return this.k.get(t).request},i.getAction=function(t){return this.k.get(t).action},i.has=function(t){return!this.checkHref(t)&&this.k.has(t)},i.delete=function(t){return this.k.delete(t)},i.update=function(t,n){var e=r({},this.k.get(t),{},n);return this.k.set(t,e),e},n}(z),Q=function(){return!window.history.pushState},W=function(t){return!t.el||!t.href},J=function(t){var n=t.event;return n.which>1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey},K=function(t){var n=t.el;return n.hasAttribute("target")&&"_blank"===n.target},V=function(t){var n=t.el;return void 0!==n.protocol&&window.location.protocol!==n.protocol||void 0!==n.hostname&&window.location.hostname!==n.hostname},Y=function(t){var n=t.el;return void 0!==n.port&&B()!==B(n.href)},Z=function(t){var n=t.el;return n.getAttribute&&"string"==typeof n.getAttribute("download")},tt=function(t){return t.el.hasAttribute(S.prefix+"-"+S.prevent)},nt=function(t){return Boolean(t.el.closest("["+S.prefix+"-"+S.prevent+'="all"]'))},rt=function(t){var n=t.href;return F(n)===F()&&B(n)===B()},et=function(t){function n(n){var r;return(r=t.call(this,n)||this).suite=[],r.tests=new Map,r.init(),r}e(n,t);var r=n.prototype;return r.init=function(){this.add("pushState",Q),this.add("exists",W),this.add("newTab",J),this.add("blank",K),this.add("corsDomain",V),this.add("corsPort",Y),this.add("download",Z),this.add("preventSelf",tt),this.add("preventAll",nt),this.add("sameUrl",rt,!1)},r.add=function(t,n,r){void 0===r&&(r=!0),this.tests.set(t,n),r&&this.suite.push(t)},r.run=function(t,n,r,e){return this.tests.get(t)({el:n,event:r,href:e})},r.checkLink=function(t,n,r){var e=this;return this.suite.some((function(i){return e.run(i,t,n,r)}))},n}(z),it=function(t){function n(r,e){var i;void 0===e&&(e="Barba error");for(var o=arguments.length,u=new Array(o>2?o-2:0),f=2;f<o;f++)u[f-2]=arguments[f];return(i=t.call.apply(t,[this].concat(u))||this).error=r,i.label=e,Error.captureStackTrace&&Error.captureStackTrace(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(i),n),i.name="BarbaError",i}return e(n,t),n}(f(Error)),ot=function(){function t(t){void 0===t&&(t=[]),this.logger=new l("@barba/core"),this.all=[],this.page=[],this.once=[],this.A=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var n=t.prototype;return n.add=function(t,n){switch(t){case"rule":this.A.splice(n.position||0,0,n.value);break;case"transition":default:this.all.push(n)}this.update()},n.resolve=function(t,n){var r=this;void 0===n&&(n={});var e=n.once?this.once:this.page;e=e.filter(n.self?function(t){return t.name&&"self"===t.name}:function(t){return!t.name||"self"!==t.name});var i=new Map,o=e.find((function(e){var o=!0,u={};return!(!n.self||"self"!==e.name)||(r.A.reverse().forEach((function(n){o&&(o=r.R(e,n,t,u),e.from&&e.to&&(o=r.R(e,n,t,u,"from")&&r.R(e,n,t,u,"to")),e.from&&!e.to&&(o=r.R(e,n,t,u,"from")),!e.from&&e.to&&(o=r.R(e,n,t,u,"to")))})),i.set(e,u),o)})),u=i.get(o),f=[];if(f.push(n.once?"once":"page"),n.self&&f.push("self"),u){var s,c=[o];Object.keys(u).length>0&&c.push(u),(s=this.logger).info.apply(s,["Transition found ["+f.join(",")+"]"].concat(c))}else this.logger.info("No transition found ["+f.join(",")+"]");return o},n.update=function(){var t=this;this.all=this.all.map((function(n){return t.T(n)})).sort((function(t,n){return t.priority-n.priority})).reverse().map((function(t){return delete t.priority,t})),this.page=this.all.filter((function(t){return void 0!==t.leave||void 0!==t.enter})),this.once=this.all.filter((function(t){return void 0!==t.once}))},n.R=function(t,n,r,e,i){var o=!0,u=!1,f=t,s=n.name,c=s,a=s,h=s,v=i?f[i]:f,l="to"===i?r.next:r.current;if(i?v&&v[s]:v[s]){switch(n.type){case"strings":default:var d=Array.isArray(v[c])?v[c]:[v[c]];l[c]&&-1!==d.indexOf(l[c])&&(u=!0),-1===d.indexOf(l[c])&&(o=!1);break;case"object":var m=Array.isArray(v[a])?v[a]:[v[a]];l[a]?(l[a].name&&-1!==m.indexOf(l[a].name)&&(u=!0),-1===m.indexOf(l[a].name)&&(o=!1)):o=!1;break;case"function":v[h](r)?u=!0:o=!1}u&&(i?(e[i]=e[i]||{},e[i][s]=f[i][s]):e[s]=f[s])}return o},n.O=function(t,n,r){var e=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(e+=Math.pow(10,r),t.from&&t.from[n]&&(e+=1),t.to&&t.to[n]&&(e+=2)),e},n.T=function(t){var n=this;t.priority=0;var r=0;return this.A.forEach((function(e,i){r+=n.O(t,e.name,i+1)})),t.priority=r,t},t}(),ut=function(){function t(t){void 0===t&&(t=[]),this.logger=new l("@barba/core"),this.S=!1,this.store=new ot(t)}var r=t.prototype;return r.get=function(t,n){return this.store.resolve(t,n)},r.doOnce=function(t){var n=t.data,r=t.transition;try{var e=function(){i.S=!1},i=this,o=r||{};i.S=!0;var u=s((function(){return Promise.resolve(i.j("beforeOnce",n,o)).then((function(){return Promise.resolve(i.once(n,o)).then((function(){return Promise.resolve(i.j("afterOnce",n,o)).then((function(){}))}))}))}),(function(t){i.S=!1,i.logger.debug("Transition error [before/after/once]"),i.logger.error(t)}));return Promise.resolve(u&&u.then?u.then(e):e())}catch(t){return Promise.reject(t)}},r.doPage=function(t){var n=t.data,r=t.transition,e=t.page,i=t.wrapper;try{var o=function(t){if(u)return t;f.S=!1},u=!1,f=this,c=r||{},a=!0===c.sync||!1;f.S=!0;var h=s((function(){function t(){return Promise.resolve(f.j("before",n,c)).then((function(){var t=!1;function r(r){return t?r:Promise.resolve(f.remove(n)).then((function(){return Promise.resolve(f.j("after",n,c)).then((function(){}))}))}var o=function(){if(a)return s((function(){return Promise.resolve(f.add(n,i)).then((function(){return Promise.resolve(f.j("beforeLeave",n,c)).then((function(){return Promise.resolve(f.j("beforeEnter",n,c)).then((function(){return Promise.resolve(Promise.all([f.leave(n,c),f.enter(n,c)])).then((function(){return Promise.resolve(f.j("afterLeave",n,c)).then((function(){return Promise.resolve(f.j("afterEnter",n,c)).then((function(){}))}))}))}))}))}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [sync]")}));var r=function(r){return t?r:s((function(){var t=function(){if(!1!==o)return Promise.resolve(f.add(n,i)).then((function(){return Promise.resolve(f.j("beforeEnter",n,c)).then((function(){return Promise.resolve(f.enter(n,c,o)).then((function(){return Promise.resolve(f.j("afterEnter",n,c)).then((function(){}))}))}))}))}();if(t&&t.then)return t.then((function(){}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [before/after/enter]")}))},o=!1,u=s((function(){return Promise.resolve(f.j("beforeLeave",n,c)).then((function(){return Promise.resolve(Promise.all([f.leave(n,c),L(e,n)]).then((function(t){return t[0]}))).then((function(t){return o=t,Promise.resolve(f.j("afterLeave",n,c)).then((function(){}))}))}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [before/after/leave]")}));return u&&u.then?u.then(r):r(u)}();return o&&o.then?o.then(r):r(o)}))}var r=function(){if(a)return Promise.resolve(L(e,n)).then((function(){}))}();return r&&r.then?r.then(t):t()}),(function(t){if(f.S=!1,t.name&&"BarbaError"===t.name)throw f.logger.debug(t.label),f.logger.error(t.error),t;throw f.logger.debug("Transition error [page]"),f.logger.error(t),t}));return Promise.resolve(h&&h.then?h.then(o):o(h))}catch(t){return Promise.reject(t)}},r.once=function(t,n){try{return Promise.resolve(X.do("once",t,n)).then((function(){return n.once?N(n.once,n)(t):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.leave=function(t,n){try{return Promise.resolve(X.do("leave",t,n)).then((function(){return n.leave?N(n.leave,n)(t):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.enter=function(t,n,r){try{return Promise.resolve(X.do("enter",t,n)).then((function(){return n.enter?N(n.enter,n)(t,r):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.add=function(t,n){try{return j.addContainer(t.next.container,n),X.do("nextAdded",t),Promise.resolve()}catch(t){return Promise.reject(t)}},r.remove=function(t){try{return j.removeContainer(t.current.container),X.do("currentRemoved",t),Promise.resolve()}catch(t){return Promise.reject(t)}},r.M=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},r.j=function(t,n,r){try{return Promise.resolve(X.do(t,n,r)).then((function(){return r[t]?N(r[t],r)(n):Promise.resolve()}))}catch(t){return Promise.reject(t)}},n(t,[{key:"isRunning",get:function(){return this.S},set:function(t){this.S=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some((function(t){return"self"===t.name}))}},{key:"shouldWait",get:function(){return this.store.all.some((function(t){return t.to&&!t.to.route||t.sync}))}}]),t}(),ft=function(){function t(t){var n=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,0!==t.length&&(t.forEach((function(t){n.byNamespace.set(t.namespace,t)})),this.names.forEach((function(t){X[t](n.L(t))})))}return t.prototype.L=function(t){var n=this;return function(r){var e=t.match(/enter/i)?r.next:r.current,i=n.byNamespace.get(e.namespace);return i&&i[t]?N(i[t],i)(r):Promise.resolve()}},t}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var n=this;do{if(n.matches(t))return n;n=n.parentElement||n.parentNode}while(null!==n&&1===n.nodeType);return null});var st={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}};return new(function(){function t(){this.version=a,this.schemaPage=st,this.Logger=l,this.logger=new l("@barba/core"),this.plugins=[],this.hooks=X,this.dom=j,this.helpers=_,this.history=M,this.request=I,this.url=H}var e=t.prototype;return e.use=function(t,n){var r=this.plugins;r.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):"function"==typeof t.install?(t.install(this,n),r.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=void 0===t?{}:t,e=n.transitions,i=void 0===e?[]:e,o=n.views,u=void 0===o?[]:o,f=n.schema,s=void 0===f?S:f,c=n.requestError,a=n.timeout,h=void 0===a?2e3:a,v=n.cacheIgnore,d=void 0!==v&&v,m=n.prefetchIgnore,p=void 0!==m&&m,w=n.preventRunning,b=void 0!==w&&w,y=n.prevent,P=void 0===y?null:y,g=n.debug,E=n.logLevel;if(l.setLevel(!0===(void 0!==g&&g)?"debug":void 0===E?"off":E),this.logger.info(this.version),Object.keys(s).forEach((function(t){S[t]&&(S[t]=s[t])})),this.$=c,this.timeout=h,this.cacheIgnore=d,this.prefetchIgnore=p,this.preventRunning=b,this._=this.dom.getWrapper(),!this._)throw new Error("[@barba/core] No Barba wrapper found");this._.setAttribute("aria-live","polite"),this.q();var x=this.data.current;if(!x.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new G(d),this.prevent=new et(p),this.transitions=new ut(i),this.views=new ft(u),null!==P){if("function"!=typeof P)throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",P)}this.history.init(x.url.href,x.namespace),this.B=this.B.bind(this),this.U=this.U.bind(this),this.D=this.D.bind(this),this.F(),this.plugins.forEach((function(t){return t.init()}));var k=this.data;k.trigger="barba",k.next=k.current,k.current=r({},this.schemaPage),this.hooks.do("ready",k),this.once(k),this.q()},e.destroy=function(){this.q(),this.H(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,r){var e;if(void 0===n&&(n="barba"),this.transitions.isRunning)this.force(t);else if(!(e="popstate"===n?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(t,n,r),r&&(r.stopPropagation(),r.preventDefault()),this.page(t,n,e)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then((function(){function r(){return Promise.resolve(n.hooks.do("afterEnter",t)).then((function(){}))}var e=function(){if(n.transitions.hasOnce){var r=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:r,data:t})).then((function(){}))}}();return e&&e.then?e.then(r):r()}))}catch(t){return Promise.reject(t)}},e.page=function(t,n,e){try{var i=function(){var t=o.data;return Promise.resolve(o.hooks.do("page",t)).then((function(){var n=s((function(){var n=o.transitions.get(t,{once:!1,self:e});return Promise.resolve(o.transitions.doPage({data:t,page:u,transition:n,wrapper:o._})).then((function(){o.q()}))}),(function(){0===l.getLevel()&&o.force(t.current.url.href)}));if(n&&n.then)return n.then((function(){}))}))},o=this;o.data.next.url=r({href:t},o.url.parse(t)),o.data.trigger=n;var u=o.cache.has(t)?o.cache.update(t,{action:"click"}).request:o.cache.set(t,o.request(t,o.timeout,o.onRequestError.bind(o,n)),"click").request,f=function(){if(o.transitions.shouldWait)return Promise.resolve(L(u,o.data)).then((function(){}))}();return Promise.resolve(f&&f.then?f.then(i):i())}catch(t){return Promise.reject(t)}},e.onRequestError=function(t){this.transitions.isRunning=!1;for(var n=arguments.length,r=new Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];var i=r[0],o=r[1],u=this.cache.getAction(i);return this.cache.delete(i),!(this.$&&!1===this.$(t,u,i,o)||("click"===u&&this.force(i),1))},e.prefetch=function(t){var n=this;this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba")).catch((function(t){n.logger.error(t)})),"prefetch")},e.F=function(){!0!==this.prefetchIgnore&&(document.addEventListener("mouseover",this.B),document.addEventListener("touchstart",this.B)),document.addEventListener("click",this.U),window.addEventListener("popstate",this.D)},e.H=function(){!0!==this.prefetchIgnore&&(document.removeEventListener("mouseover",this.B),document.removeEventListener("touchstart",this.B)),document.removeEventListener("click",this.U),window.removeEventListener("popstate",this.D)},e.B=function(t){var n=this,r=this.I(t);if(r){var e=this.dom.getHref(r);this.prevent.checkHref(e)||this.cache.has(e)||this.cache.set(e,this.request(e,this.timeout,this.onRequestError.bind(this,r)).catch((function(t){n.logger.error(t)})),"enter")}},e.U=function(t){var n=this.I(t);if(n)return this.transitions.isRunning&&this.preventRunning?(t.preventDefault(),void t.stopPropagation()):void this.go(this.dom.getHref(n),n,t)},e.D=function(t){this.go(this.url.getHref(),"popstate",t)},e.I=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.q=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:r({href:t},this.url.parse(t))};this.C={current:n,next:r({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},n(t,[{key:"data",get:function(){return this.C}},{key:"wrapper",get:function(){return this._}}]),t}())}));

 // LocomotiveScroll
 !function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).LocomotiveScroll=e()}(this,(function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function i(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){s(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?c(t):e}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,s=r(t);if(e){var n=r(this).constructor;i=Reflect.construct(s,arguments,n)}else i=s.apply(this,arguments);return h(this,i)}}function u(t,e,i){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var s=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=r(t)););return t}(t,e);if(s){var n=Object.getOwnPropertyDescriptor(s,e);return n.get?n.get.call(i):n.value}})(t,e,i||t)}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var i=[],s=!0,n=!1,o=void 0;try{for(var l,r=t[Symbol.iterator]();!(s=(l=r.next()).done)&&(i.push(l.value),!e||i.length!==e);s=!0);}catch(t){n=!0,o=t}finally{try{s||null==r.return||r.return()}finally{if(n)throw o}}return i}(t,e)||m(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||m(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){if(t){if("string"==typeof t)return v(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?v(t,e):void 0}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,s=new Array(e);i<e;i++)s[i]=t[i];return s}var y={el:document,name:"scroll",offset:[0,0],repeat:!1,smooth:!1,direction:"vertical",gestureDirection:"vertical",reloadOnContextChange:!1,lerp:.1,class:"is-inview",scrollbarContainer:!1,scrollbarClass:"c-scrollbar",scrollingClass:"has-scroll-scrolling",draggingClass:"has-scroll-dragging",smoothClass:"has-scroll-smooth",initClass:"has-scroll-init",getSpeed:!1,getDirection:!1,scrollFromAnywhere:!1,multiplier:1,firefoxMultiplier:50,touchMultiplier:2,resetNativeScroll:!0,tablet:{smooth:!1,direction:"vertical",gestureDirection:"vertical",breakpoint:1024},smartphone:{smooth:!1,direction:"vertical",gestureDirection:"vertical"}},b=function(){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e),Object.assign(this,y,i),this.smartphone=y.smartphone,i.smartphone&&Object.assign(this.smartphone,i.smartphone),this.tablet=y.tablet,i.tablet&&Object.assign(this.tablet,i.tablet),this.namespace="locomotive",this.html=document.documentElement,this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.windowMiddle={x:this.windowWidth/2,y:this.windowHeight/2},this.els={},this.currentElements={},this.listeners={},this.hasScrollTicking=!1,this.hasCallEventSet=!1,this.checkScroll=this.checkScroll.bind(this),this.checkResize=this.checkResize.bind(this),this.checkEvent=this.checkEvent.bind(this),this.instance={scroll:{x:0,y:0},limit:{x:this.html.offsetHeight,y:this.html.offsetHeight},currentElements:this.currentElements},this.isMobile?this.isTablet?this.context="tablet":this.context="smartphone":this.context="desktop",this.isMobile&&(this.direction=this[this.context].direction),"horizontal"===this.direction?this.directionAxis="x":this.directionAxis="y",this.getDirection&&(this.instance.direction=null),this.getDirection&&(this.instance.speed=0),this.html.classList.add(this.initClass),window.addEventListener("resize",this.checkResize,!1)}return i(e,[{key:"init",value:function(){this.initEvents()}},{key:"checkScroll",value:function(){this.dispatchScroll()}},{key:"checkResize",value:function(){var t=this;this.resizeTick||(this.resizeTick=!0,requestAnimationFrame((function(){t.resize(),t.resizeTick=!1})))}},{key:"resize",value:function(){}},{key:"checkContext",value:function(){if(this.reloadOnContextChange){this.isMobile=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1||this.windowWidth<this.tablet.breakpoint,this.isTablet=this.isMobile&&this.windowWidth>=this.tablet.breakpoint;var t=this.context;if(this.isMobile?this.isTablet?this.context="tablet":this.context="smartphone":this.context="desktop",t!=this.context)("desktop"==t?this.smooth:this[t].smooth)!=("desktop"==this.context?this.smooth:this[this.context].smooth)&&window.location.reload()}}},{key:"initEvents",value:function(){var t=this;this.scrollToEls=this.el.querySelectorAll("[data-".concat(this.name,"-to]")),this.setScrollTo=this.setScrollTo.bind(this),this.scrollToEls.forEach((function(e){e.addEventListener("click",t.setScrollTo,!1)}))}},{key:"setScrollTo",value:function(t){t.preventDefault(),this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name,"-href"))||t.currentTarget.getAttribute("href"),{offset:t.currentTarget.getAttribute("data-".concat(this.name,"-offset"))})}},{key:"addElements",value:function(){}},{key:"detectElements",value:function(t){var e=this,i=this.instance.scroll.y,s=i+this.windowHeight,n=this.instance.scroll.x,o=n+this.windowWidth;Object.entries(this.els).forEach((function(l){var r=f(l,2),a=r[0],c=r[1];if(!c||c.inView&&!t||("horizontal"===e.direction?o>=c.left&&n<c.right&&e.setInView(c,a):s>=c.top&&i<c.bottom&&e.setInView(c,a)),c&&c.inView)if("horizontal"===e.direction){var h=c.right-c.left;c.progress=(e.instance.scroll.x-(c.left-e.windowWidth))/(h+e.windowWidth),(o<c.left||n>c.right)&&e.setOutOfView(c,a)}else{var d=c.bottom-c.top;c.progress=(e.instance.scroll.y-(c.top-e.windowHeight))/(d+e.windowHeight),(s<c.top||i>c.bottom)&&e.setOutOfView(c,a)}})),this.hasScrollTicking=!1}},{key:"setInView",value:function(t,e){this.els[e].inView=!0,t.el.classList.add(t.class),this.currentElements[e]=t,t.call&&this.hasCallEventSet&&(this.dispatchCall(t,"enter"),t.repeat||(this.els[e].call=!1))}},{key:"setOutOfView",value:function(t,e){var i=this;this.els[e].inView=!1,Object.keys(this.currentElements).forEach((function(t){t===e&&delete i.currentElements[t]})),t.call&&this.hasCallEventSet&&this.dispatchCall(t,"exit"),t.repeat&&t.el.classList.remove(t.class)}},{key:"dispatchCall",value:function(t,e){this.callWay=e,this.callValue=t.call.split(",").map((function(t){return t.trim()})),this.callObj=t,1==this.callValue.length&&(this.callValue=this.callValue[0]);var i=new Event(this.namespace+"call");this.el.dispatchEvent(i)}},{key:"dispatchScroll",value:function(){var t=new Event(this.namespace+"scroll");this.el.dispatchEvent(t)}},{key:"setEvents",value:function(t,e){this.listeners[t]||(this.listeners[t]=[]);var i=this.listeners[t];i.push(e),1===i.length&&this.el.addEventListener(this.namespace+t,this.checkEvent,!1),"call"===t&&(this.hasCallEventSet=!0,this.detectElements(!0))}},{key:"unsetEvents",value:function(t,e){if(this.listeners[t]){var i=this.listeners[t],s=i.indexOf(e);s<0||(i.splice(s,1),0===i.index&&this.el.removeEventListener(this.namespace+t,this.checkEvent,!1))}}},{key:"checkEvent",value:function(t){var e=this,i=t.type.replace(this.namespace,""),s=this.listeners[i];s&&0!==s.length&&s.forEach((function(t){switch(i){case"scroll":return t(e.instance);case"call":return t(e.callValue,e.callWay,e.callObj);default:return t()}}))}},{key:"startScroll",value:function(){}},{key:"stopScroll",value:function(){}},{key:"setScroll",value:function(t,e){this.instance.scroll={x:0,y:0}}},{key:"destroy",value:function(){var t=this;window.removeEventListener("resize",this.checkResize,!1),Object.keys(this.listeners).forEach((function(e){t.el.removeEventListener(t.namespace+e,t.checkEvent,!1)})),this.listeners={},this.scrollToEls.forEach((function(e){e.removeEventListener("click",t.setScrollTo,!1)})),this.html.classList.remove(this.initClass)}}]),e}(),g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function w(t,e){return t(e={exports:{}},e.exports),e.exports}var x=w((function(t,e){t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var i,s=t.HTMLElement||t.Element,n={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:s.prototype.scroll||r,scrollIntoView:s.prototype.scrollIntoView},o=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,l=(i=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(i)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==a(arguments[0])?p.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):n.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(a(arguments[0])?n.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):p.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},s.prototype.scroll=s.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==a(arguments[0])){var t=arguments[0].left,e=arguments[0].top;p.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},s.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==a(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},s.prototype.scrollIntoView=function(){if(!0!==a(arguments[0])){var i=u(this),s=i.getBoundingClientRect(),o=this.getBoundingClientRect();i!==e.body?(p.call(this,i,i.scrollLeft+o.left-s.left,i.scrollTop+o.top-s.top),"fixed"!==t.getComputedStyle(i).position&&t.scrollBy({left:s.left,top:s.top,behavior:"smooth"})):t.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function r(t,e){this.scrollLeft=t,this.scrollTop=e}function a(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(t,e){return"Y"===e?t.clientHeight+l<t.scrollHeight:"X"===e?t.clientWidth+l<t.scrollWidth:void 0}function h(e,i){var s=t.getComputedStyle(e,null)["overflow"+i];return"auto"===s||"scroll"===s}function d(t){var e=c(t,"Y")&&h(t,"Y"),i=c(t,"X")&&h(t,"X");return e||i}function u(t){for(;t!==e.body&&!1===d(t);)t=t.parentNode||t.host;return t}function f(e){var i,s,n,l,r=(o()-e.startTime)/468;l=r=r>1?1:r,i=.5*(1-Math.cos(Math.PI*l)),s=e.startX+(e.x-e.startX)*i,n=e.startY+(e.y-e.startY)*i,e.method.call(e.scrollable,s,n),s===e.x&&n===e.y||t.requestAnimationFrame(f.bind(t,e))}function p(i,s,l){var a,c,h,d,u=o();i===e.body?(a=t,c=t.scrollX||t.pageXOffset,h=t.scrollY||t.pageYOffset,d=n.scroll):(a=i,c=i.scrollLeft,h=i.scrollTop,d=r),f({scrollable:a,method:d,startTime:u,startX:c,startY:h,x:s,y:l})}}}})),S=(x.polyfill,function(e){l(n,e);var s=d(n);function n(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(this,n),(e=s.call(this,i)).resetNativeScroll&&(history.scrollRestoration&&(history.scrollRestoration="manual"),window.scrollTo(0,0)),window.addEventListener("scroll",e.checkScroll,!1),void 0===window.smoothscrollPolyfill&&(window.smoothscrollPolyfill=x,window.smoothscrollPolyfill.polyfill()),e}return i(n,[{key:"init",value:function(){this.instance.scroll.y=window.pageYOffset,this.addElements(),this.detectElements(),u(r(n.prototype),"init",this).call(this)}},{key:"checkScroll",value:function(){var t=this;u(r(n.prototype),"checkScroll",this).call(this),this.getDirection&&this.addDirection(),this.getSpeed&&(this.addSpeed(),this.speedTs=Date.now()),this.instance.scroll.y=window.pageYOffset,Object.entries(this.els).length&&(this.hasScrollTicking||(requestAnimationFrame((function(){t.detectElements()})),this.hasScrollTicking=!0))}},{key:"addDirection",value:function(){window.pageYOffset>this.instance.scroll.y?"down"!==this.instance.direction&&(this.instance.direction="down"):window.pageYOffset<this.instance.scroll.y&&"up"!==this.instance.direction&&(this.instance.direction="up")}},{key:"addSpeed",value:function(){window.pageYOffset!=this.instance.scroll.y?this.instance.speed=(window.pageYOffset-this.instance.scroll.y)/Math.max(1,Date.now()-this.speedTs):this.instance.speed=0}},{key:"resize",value:function(){Object.entries(this.els).length&&(this.windowHeight=window.innerHeight,this.updateElements())}},{key:"addElements",value:function(){var t=this;this.els={},this.el.querySelectorAll("[data-"+this.name+"]").forEach((function(e,i){e.getBoundingClientRect();var s,n,o,l=e.dataset[t.name+"Class"]||t.class,r="string"==typeof e.dataset[t.name+"Id"]?e.dataset[t.name+"Id"]:i,a="string"==typeof e.dataset[t.name+"Offset"]?e.dataset[t.name+"Offset"].split(","):t.offset,c=e.dataset[t.name+"Repeat"],h=e.dataset[t.name+"Call"],d=e.dataset[t.name+"Target"],u=(o=void 0!==d?document.querySelector("".concat(d)):e).getBoundingClientRect();s=u.top+t.instance.scroll.y,n=u.left+t.instance.scroll.x;var f=s+o.offsetHeight,p=n+o.offsetWidth;"#header"===d&&console.log(s,f),c="false"!=c&&(null!=c||t.repeat);var m=t.getRelativeOffset(a),v={el:e,targetEl:o,id:r,class:l,top:s+=m[0],bottom:f-=m[1],left:n,right:p,offset:a,progress:0,repeat:c,inView:!1,call:h};t.els[r]=v,e.classList.contains(l)&&t.setInView(t.els[r],r)}))}},{key:"updateElements",value:function(){var t=this;Object.entries(this.els).forEach((function(e){var i=f(e,2),s=i[0],n=i[1],o=n.targetEl.getBoundingClientRect().top+t.instance.scroll.y,l=o+n.targetEl.offsetHeight,r=t.getRelativeOffset(n.offset);t.els[s].top=o+r[0],t.els[s].bottom=l-r[1]})),this.hasScrollTicking=!1}},{key:"getRelativeOffset",value:function(t){var e=[0,0];if(t)for(var i=0;i<t.length;i++)"string"==typeof t[i]?t[i].includes("%")?e[i]=parseInt(t[i].replace("%","")*this.windowHeight/100):e[i]=parseInt(t[i]):e[i]=t[i];return e}},{key:"scrollTo",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=parseInt(e.offset)||0,s=!!e.callback&&e.callback;if("string"==typeof t){if("top"===t)t=this.html;else if("bottom"===t)t=this.html.offsetHeight-window.innerHeight;else if(!(t=document.querySelector(t)))return}else if("number"==typeof t)t=parseInt(t);else if(!t||!t.tagName)return void console.warn("`target` parameter is not valid");if(i="number"!=typeof t?t.getBoundingClientRect().top+i+this.instance.scroll.y:t+i,s){i=i.toFixed();var n=function t(){window.pageYOffset.toFixed()===i&&(window.removeEventListener("scroll",t),s())};window.addEventListener("scroll",n)}window.scrollTo({top:i,behavior:"smooth"})}},{key:"update",value:function(){this.addElements(),this.detectElements()}},{key:"destroy",value:function(){u(r(n.prototype),"destroy",this).call(this),window.removeEventListener("scroll",this.checkScroll,!1)}}]),n}(b)),k=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;function A(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var O=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var s={};return"abcdefghijklmnopqrst".split("").forEach((function(t){s[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},s)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,s,n=A(t),o=1;o<arguments.length;o++){for(var l in i=Object(arguments[o]))T.call(i,l)&&(n[l]=i[l]);if(k){s=k(i);for(var r=0;r<s.length;r++)E.call(i,s[r])&&(n[s[r]]=i[s[r]])}}return n};function D(){}D.prototype={on:function(t,e,i){var s=this.e||(this.e={});return(s[t]||(s[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){var s=this;function n(){s.off(t,n),e.apply(i,arguments)}return n._=e,this.on(t,n,i)},emit:function(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),s=0,n=i.length;s<n;s++)i[s].fn.apply(i[s].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),s=i[t],n=[];if(s&&e)for(var o=0,l=s.length;o<l;o++)s[o].fn!==e&&s[o].fn._!==e&&n.push(s[o]);return n.length?i[t]=n:delete i[t],this}};var C=D,L=w((function(t,e){(function(){(null!==e?e:this).Lethargy=function(){function t(t,e,i,s){this.stability=null!=t?Math.abs(t):8,this.sensitivity=null!=e?1+Math.abs(e):100,this.tolerance=null!=i?1+Math.abs(i):1.1,this.delay=null!=s?s:150,this.lastUpDeltas=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:t>=e;1<=e?t++:t--)i.push(null);return i}.call(this),this.lastDownDeltas=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:t>=e;1<=e?t++:t--)i.push(null);return i}.call(this),this.deltasTimestamp=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:t>=e;1<=e?t++:t--)i.push(null);return i}.call(this)}return t.prototype.check=function(t){var e;return null!=(t=t.originalEvent||t).wheelDelta?e=t.wheelDelta:null!=t.deltaY?e=-40*t.deltaY:null==t.detail&&0!==t.detail||(e=-40*t.detail),this.deltasTimestamp.push(Date.now()),this.deltasTimestamp.shift(),e>0?(this.lastUpDeltas.push(e),this.lastUpDeltas.shift(),this.isInertia(1)):(this.lastDownDeltas.push(e),this.lastDownDeltas.shift(),this.isInertia(-1))},t.prototype.isInertia=function(t){var e,i,s,n,o,l,r;return null===(e=-1===t?this.lastDownDeltas:this.lastUpDeltas)[0]?t:!(this.deltasTimestamp[2*this.stability-2]+this.delay>Date.now()&&e[0]===e[2*this.stability-1])&&(s=e.slice(0,this.stability),i=e.slice(this.stability,2*this.stability),r=s.reduce((function(t,e){return t+e})),o=i.reduce((function(t,e){return t+e})),l=r/s.length,n=o/i.length,Math.abs(l)<Math.abs(n*this.tolerance)&&this.sensitivity<Math.abs(n)&&t)},t.prototype.showLastUpDeltas=function(){return this.lastUpDeltas},t.prototype.showLastDownDeltas=function(){return this.lastDownDeltas},t}()}).call(g)})),M={hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in window||window.TouchEvent||window.DocumentTouch&&document instanceof DocumentTouch,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1},j=Object.prototype.toString,_=Object.prototype.hasOwnProperty;function B(t,e){return function(){return t.apply(e,arguments)}}var W=L.Lethargy,H="virtualscroll",R=V,Y=37,P=38,I=39,z=40,X=32;function V(t){!function(t){if(!t)return console.warn("bindAll requires at least one argument.");var e=Array.prototype.slice.call(arguments,1);if(0===e.length)for(var i in t)_.call(t,i)&&"function"==typeof t[i]&&"[object Function]"==j.call(t[i])&&e.push(i);for(var s=0;s<e.length;s++){var n=e[s];t[n]=B(t[n],t)}}(this,"_onWheel","_onMouseWheel","_onTouchStart","_onTouchMove","_onKeyDown"),this.el=window,t&&t.el&&(this.el=t.el,delete t.el),this.options=O({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",limitInertia:!1,useKeyboard:!0,useTouch:!0},t),this.options.limitInertia&&(this._lethargy=new W),this._emitter=new C,this._event={y:0,x:0,deltaX:0,deltaY:0},this.touchStartX=null,this.touchStartY=null,this.bodyTouchAction=null,void 0!==this.options.passive&&(this.listenerOptions={passive:this.options.passive})}function F(t,e,i){return(1-i)*t+i*e}function q(t){var e={};if(window.getComputedStyle){var i=getComputedStyle(t),s=i.transform||i.webkitTransform||i.mozTransform,n=s.match(/^matrix3d\((.+)\)$/);return n?(e.x=n?parseFloat(n[1].split(", ")[12]):0,e.y=n?parseFloat(n[1].split(", ")[13]):0):(n=s.match(/^matrix\((.+)\)$/),e.x=n?parseFloat(n[1].split(", ")[4]):0,e.y=n?parseFloat(n[1].split(", ")[5]):0),e}}function K(t){for(var e=[];t&&t!==document;t=t.parentNode)e.push(t);return e}V.prototype._notify=function(t){var e=this._event;e.x+=e.deltaX,e.y+=e.deltaY,this._emitter.emit(H,{x:e.x,y:e.y,deltaX:e.deltaX,deltaY:e.deltaY,originalEvent:t})},V.prototype._onWheel=function(t){var e=this.options;if(!this._lethargy||!1!==this._lethargy.check(t)){var i=this._event;i.deltaX=t.wheelDeltaX||-1*t.deltaX,i.deltaY=t.wheelDeltaY||-1*t.deltaY,M.isFirefox&&1==t.deltaMode&&(i.deltaX*=e.firefoxMultiplier,i.deltaY*=e.firefoxMultiplier),i.deltaX*=e.mouseMultiplier,i.deltaY*=e.mouseMultiplier,this._notify(t)}},V.prototype._onMouseWheel=function(t){if(!this.options.limitInertia||!1!==this._lethargy.check(t)){var e=this._event;e.deltaX=t.wheelDeltaX?t.wheelDeltaX:0,e.deltaY=t.wheelDeltaY?t.wheelDeltaY:t.wheelDelta,this._notify(t)}},V.prototype._onTouchStart=function(t){var e=t.targetTouches?t.targetTouches[0]:t;this.touchStartX=e.pageX,this.touchStartY=e.pageY},V.prototype._onTouchMove=function(t){var e=this.options;e.preventTouch&&!t.target.classList.contains(e.unpreventTouchClass)&&t.preventDefault();var i=this._event,s=t.targetTouches?t.targetTouches[0]:t;i.deltaX=(s.pageX-this.touchStartX)*e.touchMultiplier,i.deltaY=(s.pageY-this.touchStartY)*e.touchMultiplier,this.touchStartX=s.pageX,this.touchStartY=s.pageY,this._notify(t)},V.prototype._onKeyDown=function(t){var e=this._event;e.deltaX=e.deltaY=0;var i=window.innerHeight-40;switch(t.keyCode){case Y:case P:e.deltaY=this.options.keyStep;break;case I:case z:e.deltaY=-this.options.keyStep;break;case t.shiftKey:e.deltaY=i;break;case X:e.deltaY=-i;break;default:return}this._notify(t)},V.prototype._bind=function(){M.hasWheelEvent&&this.el.addEventListener("wheel",this._onWheel,this.listenerOptions),M.hasMouseWheelEvent&&this.el.addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),M.hasTouch&&this.options.useTouch&&(this.el.addEventListener("touchstart",this._onTouchStart,this.listenerOptions),this.el.addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),M.hasPointer&&M.hasTouchWin&&(this.bodyTouchAction=document.body.style.msTouchAction,document.body.style.msTouchAction="none",this.el.addEventListener("MSPointerDown",this._onTouchStart,!0),this.el.addEventListener("MSPointerMove",this._onTouchMove,!0)),M.hasKeyDown&&this.options.useKeyboard&&document.addEventListener("keydown",this._onKeyDown)},V.prototype._unbind=function(){M.hasWheelEvent&&this.el.removeEventListener("wheel",this._onWheel),M.hasMouseWheelEvent&&this.el.removeEventListener("mousewheel",this._onMouseWheel),M.hasTouch&&(this.el.removeEventListener("touchstart",this._onTouchStart),this.el.removeEventListener("touchmove",this._onTouchMove)),M.hasPointer&&M.hasTouchWin&&(document.body.style.msTouchAction=this.bodyTouchAction,this.el.removeEventListener("MSPointerDown",this._onTouchStart,!0),this.el.removeEventListener("MSPointerMove",this._onTouchMove,!0)),M.hasKeyDown&&this.options.useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)},V.prototype.on=function(t,e){this._emitter.on(H,t,e);var i=this._emitter.e;i&&i[H]&&1===i[H].length&&this._bind()},V.prototype.off=function(t,e){this._emitter.off(H,t,e);var i=this._emitter.e;(!i[H]||i[H].length<=0)&&this._unbind()},V.prototype.reset=function(){var t=this._event;t.x=0,t.y=0},V.prototype.destroy=function(){this._emitter.off(),this._unbind()};var N="function"==typeof Float32Array;function U(t,e){return 1-3*e+3*t}function $(t,e){return 3*e-6*t}function G(t){return 3*t}function J(t,e,i){return((U(e,i)*t+$(e,i))*t+G(e))*t}function Q(t,e,i){return 3*U(e,i)*t*t+2*$(e,i)*t+G(e)}function Z(t){return t}var tt=function(t,e,i,s){if(!(0<=t&&t<=1&&0<=i&&i<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&i===s)return Z;for(var n=N?new Float32Array(11):new Array(11),o=0;o<11;++o)n[o]=J(.1*o,t,i);function l(e){for(var s=0,o=1;10!==o&&n[o]<=e;++o)s+=.1;--o;var l=s+.1*((e-n[o])/(n[o+1]-n[o])),r=Q(l,t,i);return r>=.001?function(t,e,i,s){for(var n=0;n<4;++n){var o=Q(e,i,s);if(0===o)return e;e-=(J(e,i,s)-t)/o}return e}(e,l,t,i):0===r?l:function(t,e,i,s,n){var o,l,r=0;do{(o=J(l=e+(i-e)/2,s,n)-t)>0?i=l:e=l}while(Math.abs(o)>1e-7&&++r<10);return l}(e,s,s+.1,t,i)}return function(t){return 0===t?0:1===t?1:J(l(t),e,s)}},et=38,it=40,st=32,nt=9,ot=33,lt=34,rt=36,at=35,ct=function(e){l(n,e);var s=d(n);function n(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(this,n),history.scrollRestoration&&(history.scrollRestoration="manual"),window.scrollTo(0,0),(e=s.call(this,i)).inertia&&(e.lerp=.1*e.inertia),e.isScrolling=!1,e.isDraggingScrollbar=!1,e.isTicking=!1,e.hasScrollTicking=!1,e.parallaxElements={},e.stop=!1,e.scrollbarContainer=i.scrollbarContainer,e.checkKey=e.checkKey.bind(c(e)),window.addEventListener("keydown",e.checkKey,!1),e}return i(n,[{key:"init",value:function(){var t=this;this.html.classList.add(this.smoothClass),this.html.setAttribute("data-".concat(this.name,"-direction"),this.direction),this.instance=o({delta:{x:0,y:0}},this.instance),this.vs=new R({el:this.scrollFromAnywhere?document:this.el,mouseMultiplier:navigator.platform.indexOf("Win")>-1?1:.4,firefoxMultiplier:this.firefoxMultiplier,touchMultiplier:this.touchMultiplier,useKeyboard:!1,passive:!0}),this.vs.on((function(e){t.stop||t.isDraggingScrollbar||requestAnimationFrame((function(){t.updateDelta(e),t.isScrolling||t.startScrolling()}))})),this.setScrollLimit(),this.initScrollBar(),this.addSections(),this.addElements(),this.checkScroll(!0),this.transformElements(!0,!0),u(r(n.prototype),"init",this).call(this)}},{key:"setScrollLimit",value:function(){if(this.instance.limit.y=this.el.offsetHeight-this.windowHeight,"horizontal"===this.direction){for(var t=0,e=this.el.children,i=0;i<e.length;i++)t+=e[i].offsetWidth;this.instance.limit.x=t-this.windowWidth}}},{key:"startScrolling",value:function(){this.startScrollTs=Date.now(),this.isScrolling=!0,this.checkScroll(),this.html.classList.add(this.scrollingClass)}},{key:"stopScrolling",value:function(){cancelAnimationFrame(this.checkScrollRaf),this.scrollToRaf&&(cancelAnimationFrame(this.scrollToRaf),this.scrollToRaf=null),this.isScrolling=!1,this.instance.scroll.y=Math.round(this.instance.scroll.y),this.html.classList.remove(this.scrollingClass)}},{key:"checkKey",value:function(t){var e=this;if(this.stop)t.keyCode==nt&&requestAnimationFrame((function(){e.html.scrollTop=0,document.body.scrollTop=0,e.html.scrollLeft=0,document.body.scrollLeft=0}));else{switch(t.keyCode){case nt:requestAnimationFrame((function(){e.html.scrollTop=0,document.body.scrollTop=0,e.html.scrollLeft=0,document.body.scrollLeft=0,e.scrollTo(document.activeElement,{offset:-window.innerHeight/2})}));break;case et:this.instance.delta[this.directionAxis]-=240;break;case it:this.instance.delta[this.directionAxis]+=240;break;case ot:this.instance.delta[this.directionAxis]-=window.innerHeight;break;case lt:this.instance.delta[this.directionAxis]+=window.innerHeight;break;case rt:this.instance.delta[this.directionAxis]-=this.instance.limit[this.directionAxis];break;case at:this.instance.delta[this.directionAxis]+=this.instance.limit[this.directionAxis];break;case st:document.activeElement instanceof HTMLInputElement||document.activeElement instanceof HTMLTextAreaElement||(t.shiftKey?this.instance.delta[this.directionAxis]-=window.innerHeight:this.instance.delta[this.directionAxis]+=window.innerHeight);break;default:return}this.instance.delta[this.directionAxis]<0&&(this.instance.delta[this.directionAxis]=0),this.instance.delta[this.directionAxis]>this.instance.limit[this.directionAxis]&&(this.instance.delta[this.directionAxis]=this.instance.limit[this.directionAxis]),this.stopScrolling(),this.isScrolling=!0,this.checkScroll(),this.html.classList.add(this.scrollingClass)}}},{key:"checkScroll",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e||this.isScrolling||this.isDraggingScrollbar){this.hasScrollTicking||(this.checkScrollRaf=requestAnimationFrame((function(){return t.checkScroll()})),this.hasScrollTicking=!0),this.updateScroll();var i=Math.abs(this.instance.delta[this.directionAxis]-this.instance.scroll[this.directionAxis]),s=Date.now()-this.startScrollTs;if(!this.animatingScroll&&s>100&&(i<.5&&0!=this.instance.delta[this.directionAxis]||i<.5&&0==this.instance.delta[this.directionAxis])&&this.stopScrolling(),Object.entries(this.sections).forEach((function(e){var i=f(e,2),s=(i[0],i[1]);s.persistent||t.instance.scroll[t.directionAxis]>s.offset[t.directionAxis]&&t.instance.scroll[t.directionAxis]<s.limit[t.directionAxis]?("horizontal"===t.direction?t.transform(s.el,-t.instance.scroll[t.directionAxis],0):t.transform(s.el,0,-t.instance.scroll[t.directionAxis]),s.inView||(s.inView=!0,s.el.style.opacity=1,s.el.style.pointerEvents="all",s.el.setAttribute("data-".concat(t.name,"-section-inview"),""))):(s.inView&&(s.inView=!1,s.el.style.opacity=0,s.el.style.pointerEvents="none",s.el.removeAttribute("data-".concat(t.name,"-section-inview"))),t.transform(s.el,0,0))})),this.getDirection&&this.addDirection(),this.getSpeed&&(this.addSpeed(),this.speedTs=Date.now()),this.detectElements(),this.transformElements(),this.hasScrollbar){var o=this.instance.scroll[this.directionAxis]/this.instance.limit[this.directionAxis]*this.scrollBarLimit[this.directionAxis];"horizontal"===this.direction?this.transform(this.scrollbarThumb,o,0):this.transform(this.scrollbarThumb,0,o)}u(r(n.prototype),"checkScroll",this).call(this),this.hasScrollTicking=!1}}},{key:"resize",value:function(){this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.checkContext(),this.windowMiddle={x:this.windowWidth/2,y:this.windowHeight/2},this.update()}},{key:"updateDelta",value:function(t){var e,i=this[this.context]&&this[this.context].gestureDirection?this[this.context].gestureDirection:this.gestureDirection;e="both"===i?t.deltaX+t.deltaY:"vertical"===i?t.deltaY:"horizontal"===i?t.deltaX:t.deltaY,this.instance.delta[this.directionAxis]-=e*this.multiplier,this.instance.delta[this.directionAxis]<0&&(this.instance.delta[this.directionAxis]=0),this.instance.delta[this.directionAxis]>this.instance.limit[this.directionAxis]&&(this.instance.delta[this.directionAxis]=this.instance.limit[this.directionAxis])}},{key:"updateScroll",value:function(t){this.isScrolling||this.isDraggingScrollbar?this.instance.scroll[this.directionAxis]=F(this.instance.scroll[this.directionAxis],this.instance.delta[this.directionAxis],this.lerp):this.instance.scroll[this.directionAxis]>this.instance.limit[this.directionAxis]?this.setScroll(this.instance.scroll[this.directionAxis],this.instance.limit[this.directionAxis]):this.instance.scroll.y<0?this.setScroll(this.instance.scroll[this.directionAxis],0):this.setScroll(this.instance.scroll[this.directionAxis],this.instance.delta[this.directionAxis])}},{key:"addDirection",value:function(){this.instance.delta.y>this.instance.scroll.y?"down"!==this.instance.direction&&(this.instance.direction="down"):this.instance.delta.y<this.instance.scroll.y&&"up"!==this.instance.direction&&(this.instance.direction="up"),this.instance.delta.x>this.instance.scroll.x?"right"!==this.instance.direction&&(this.instance.direction="right"):this.instance.delta.x<this.instance.scroll.x&&"left"!==this.instance.direction&&(this.instance.direction="left")}},{key:"addSpeed",value:function(){this.instance.delta[this.directionAxis]!=this.instance.scroll[this.directionAxis]?this.instance.speed=(this.instance.delta[this.directionAxis]-this.instance.scroll[this.directionAxis])/Math.max(1,Date.now()-this.speedTs):this.instance.speed=0}},{key:"initScrollBar",value:function(){if(this.scrollbar=document.createElement("span"),this.scrollbarThumb=document.createElement("span"),this.scrollbar.classList.add("".concat(this.scrollbarClass)),this.scrollbarThumb.classList.add("".concat(this.scrollbarClass,"_thumb")),this.scrollbar.append(this.scrollbarThumb),this.scrollbarContainer?this.scrollbarContainer.append(this.scrollbar):document.body.append(this.scrollbar),this.getScrollBar=this.getScrollBar.bind(this),this.releaseScrollBar=this.releaseScrollBar.bind(this),this.moveScrollBar=this.moveScrollBar.bind(this),this.scrollbarThumb.addEventListener("mousedown",this.getScrollBar),window.addEventListener("mouseup",this.releaseScrollBar),window.addEventListener("mousemove",this.moveScrollBar),this.hasScrollbar=!1,"horizontal"==this.direction){if(this.instance.limit.x+this.windowWidth<=this.windowWidth)return}else if(this.instance.limit.y+this.windowHeight<=this.windowHeight)return;this.hasScrollbar=!0,this.scrollbarBCR=this.scrollbar.getBoundingClientRect(),this.scrollbarHeight=this.scrollbarBCR.height,this.scrollbarWidth=this.scrollbarBCR.width,"horizontal"===this.direction?this.scrollbarThumb.style.width="".concat(this.scrollbarWidth*this.scrollbarWidth/(this.instance.limit.x+this.scrollbarWidth),"px"):this.scrollbarThumb.style.height="".concat(this.scrollbarHeight*this.scrollbarHeight/(this.instance.limit.y+this.scrollbarHeight),"px"),this.scrollbarThumbBCR=this.scrollbarThumb.getBoundingClientRect(),this.scrollBarLimit={x:this.scrollbarWidth-this.scrollbarThumbBCR.width,y:this.scrollbarHeight-this.scrollbarThumbBCR.height}}},{key:"reinitScrollBar",value:function(){if(this.hasScrollbar=!1,"horizontal"==this.direction){if(this.instance.limit.x+this.windowWidth<=this.windowWidth)return}else if(this.instance.limit.y+this.windowHeight<=this.windowHeight)return;this.hasScrollbar=!0,this.scrollbarBCR=this.scrollbar.getBoundingClientRect(),this.scrollbarHeight=this.scrollbarBCR.height,this.scrollbarWidth=this.scrollbarBCR.width,"horizontal"===this.direction?this.scrollbarThumb.style.width="".concat(this.scrollbarWidth*this.scrollbarWidth/(this.instance.limit.x+this.scrollbarWidth),"px"):this.scrollbarThumb.style.height="".concat(this.scrollbarHeight*this.scrollbarHeight/(this.instance.limit.y+this.scrollbarHeight),"px"),this.scrollbarThumbBCR=this.scrollbarThumb.getBoundingClientRect(),this.scrollBarLimit={x:this.scrollbarWidth-this.scrollbarThumbBCR.width,y:this.scrollbarHeight-this.scrollbarThumbBCR.height}}},{key:"destroyScrollBar",value:function(){this.scrollbarThumb.removeEventListener("mousedown",this.getScrollBar),window.removeEventListener("mouseup",this.releaseScrollBar),window.removeEventListener("mousemove",this.moveScrollBar),this.scrollbar.remove()}},{key:"getScrollBar",value:function(t){this.isDraggingScrollbar=!0,this.checkScroll(),this.html.classList.remove(this.scrollingClass),this.html.classList.add(this.draggingClass)}},{key:"releaseScrollBar",value:function(t){this.isDraggingScrollbar=!1,this.html.classList.add(this.scrollingClass),this.html.classList.remove(this.draggingClass)}},{key:"moveScrollBar",value:function(t){var e=this;this.isDraggingScrollbar&&requestAnimationFrame((function(){var i=100*(t.clientX-e.scrollbarBCR.left)/e.scrollbarWidth*e.instance.limit.x/100,s=100*(t.clientY-e.scrollbarBCR.top)/e.scrollbarHeight*e.instance.limit.y/100;s>0&&s<e.instance.limit.y&&(e.instance.delta.y=s),i>0&&i<e.instance.limit.x&&(e.instance.delta.x=i)}))}},{key:"addElements",value:function(){var t=this;this.els={},this.parallaxElements={},this.el.querySelectorAll("[data-".concat(this.name,"]")).forEach((function(e,i){var s,n,o,l=K(e),r=Object.entries(t.sections).map((function(t){var e=f(t,2);e[0];return e[1]})).find((function(t){return l.includes(t.el)})),a=e.dataset[t.name+"Class"]||t.class,c="string"==typeof e.dataset[t.name+"Id"]?e.dataset[t.name+"Id"]:"el"+i,h=e.dataset[t.name+"Repeat"],d=e.dataset[t.name+"Call"],u=e.dataset[t.name+"Position"],p=e.dataset[t.name+"Delay"],m=e.dataset[t.name+"Direction"],v="string"==typeof e.dataset[t.name+"Sticky"],y=!!e.dataset[t.name+"Speed"]&&parseFloat(e.dataset[t.name+"Speed"])/10,b="string"==typeof e.dataset[t.name+"Offset"]?e.dataset[t.name+"Offset"].split(","):t.offset,g=e.dataset[t.name+"Target"],w=(o=void 0!==g?document.querySelector("".concat(g)):e).getBoundingClientRect();null===r||r.inView?(s=w.top+t.instance.scroll.y-q(o).y,n=w.left+t.instance.scroll.x-q(o).x):(s=w.top-q(r.el).y-q(o).y,n=w.left-q(r.el).x-q(o).x);var x=s+o.offsetHeight,S=n+o.offsetWidth,k={x:(S-n)/2+n,y:(x-s)/2+s};if(v){var T=e.getBoundingClientRect(),E=T.top,A=T.left,O={x:A-n,y:E-s};s+=window.innerHeight,n+=window.innerWidth,x=E+o.offsetHeight-e.offsetHeight-O[t.directionAxis],k={x:((S=A+o.offsetWidth-e.offsetWidth-O[t.directionAxis])-n)/2+n,y:(x-s)/2+s}}h="false"!=h&&(null!=h||t.repeat);var D=[0,0];if(b)if("horizontal"===t.direction){for(var C=0;C<b.length;C++)"string"==typeof b[C]?b[C].includes("%")?D[C]=parseInt(b[C].replace("%","")*t.windowWidth/100):D[C]=parseInt(b[C]):D[C]=b[C];n+=D[0],S-=D[1]}else{for(C=0;C<b.length;C++)"string"==typeof b[C]?b[C].includes("%")?D[C]=parseInt(b[C].replace("%","")*t.windowHeight/100):D[C]=parseInt(b[C]):D[C]=b[C];s+=D[0],x-=D[1]}var L={el:e,id:c,class:a,section:r,top:s,middle:k,bottom:x,left:n,right:S,offset:b,progress:0,repeat:h,inView:!1,call:d,speed:y,delay:p,position:u,target:o,direction:m,sticky:v};t.els[c]=L,e.classList.contains(a)&&t.setInView(t.els[c],c),(!1!==y||v)&&(t.parallaxElements[c]=L)}))}},{key:"addSections",value:function(){var t=this;this.sections={};var e=this.el.querySelectorAll("[data-".concat(this.name,"-section]"));0===e.length&&(e=[this.el]),e.forEach((function(e,i){var s="string"==typeof e.dataset[t.name+"Id"]?e.dataset[t.name+"Id"]:"section"+i,n=e.getBoundingClientRect(),o={x:n.left-1.5*window.innerWidth-q(e).x,y:n.top-1.5*window.innerHeight-q(e).y},l={x:o.x+n.width+2*window.innerWidth,y:o.y+n.height+2*window.innerHeight},r="string"==typeof e.dataset[t.name+"Persistent"];e.setAttribute("data-scroll-section-id",s);var a={el:e,offset:o,limit:l,inView:!1,persistent:r,id:s};t.sections[s]=a}))}},{key:"transform",value:function(t,e,i,s){var n;if(s){var o=q(t),l=F(o.x,e,s),r=F(o.y,i,s);n="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(l,",").concat(r,",0,1)")}else n="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e,",").concat(i,",0,1)");t.style.webkitTransform=n,t.style.msTransform=n,t.style.transform=n}},{key:"transformElements",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=this.instance.scroll.x+this.windowWidth,n=this.instance.scroll.y+this.windowHeight,o={x:this.instance.scroll.x+this.windowMiddle.x,y:this.instance.scroll.y+this.windowMiddle.y};Object.entries(this.parallaxElements).forEach((function(l){var r=f(l,2),a=(r[0],r[1]),c=!1;if(t&&(c=0),a.inView||i)switch(a.position){case"top":c=e.instance.scroll[e.directionAxis]*-a.speed;break;case"elementTop":c=(n-a.top)*-a.speed;break;case"bottom":c=(e.instance.limit[e.directionAxis]-n+e.windowHeight)*a.speed;break;case"left":c=e.instance.scroll[e.directionAxis]*-a.speed;break;case"elementLeft":c=(s-a.left)*-a.speed;break;case"right":c=(e.instance.limit[e.directionAxis]-s+e.windowHeight)*a.speed;break;default:c=(o[e.directionAxis]-a.middle[e.directionAxis])*-a.speed}a.sticky&&(c=a.inView?"horizontal"===e.direction?e.instance.scroll.x-a.left+window.innerWidth:e.instance.scroll.y-a.top+window.innerHeight:"horizontal"===e.direction?e.instance.scroll.x<a.left-window.innerWidth&&e.instance.scroll.x<a.left-window.innerWidth/2?0:e.instance.scroll.x>a.right&&e.instance.scroll.x>a.right+100&&a.right-a.left+window.innerWidth:e.instance.scroll.y<a.top-window.innerHeight&&e.instance.scroll.y<a.top-window.innerHeight/2?0:e.instance.scroll.y>a.bottom&&e.instance.scroll.y>a.bottom+100&&a.bottom-a.top+window.innerHeight),!1!==c&&("horizontal"===a.direction||"horizontal"===e.direction&&"vertical"!==a.direction?e.transform(a.el,c,0,!t&&a.delay):e.transform(a.el,0,c,!t&&a.delay))}))}},{key:"scrollTo",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=parseInt(i.offset)||0,n=i.duration||1e3,o=i.easing||[.25,0,.35,1],l=!!i.disableLerp,r=!!i.callback&&i.callback;if(o=tt.apply(void 0,p(o)),"string"==typeof t){if("top"===t)t=0;else if("bottom"===t)t=this.instance.limit.y;else if("left"===t)t=0;else if("right"===t)t=this.instance.limit.x;else if(!(t=document.querySelector(t)))return}else if("number"==typeof t)t=parseInt(t);else if(!t||!t.tagName)return void console.warn("`target` parameter is not valid");if("number"!=typeof t){var a=K(t).includes(this.el);if(!a)return;var c=t.getBoundingClientRect(),h=c.top,d=c.left,u=K(t),m=u.find((function(t){return Object.entries(e.sections).map((function(t){var e=f(t,2);e[0];return e[1]})).find((function(e){return e.el==t}))})),v=0;v=m?q(m)[this.directionAxis]:-this.instance.scroll[this.directionAxis],s="horizontal"===this.direction?d+s-v:h+s-v}else s=t+s;var y=parseFloat(this.instance.delta[this.directionAxis]),b=Math.max(0,Math.min(s,this.instance.limit[this.directionAxis])),g=b-y,w=function(t){l?"horizontal"===e.direction?e.setScroll(y+g*t,e.instance.delta.y):e.setScroll(e.instance.delta.x,y+g*t):e.instance.delta[e.directionAxis]=y+g*t};this.animatingScroll=!0,this.stopScrolling(),this.startScrolling();var x=Date.now(),S=function t(){var i=(Date.now()-x)/n;i>1?(w(1),e.animatingScroll=!1,0==n&&e.update(),r&&r()):(e.scrollToRaf=requestAnimationFrame(t),w(o(i)))};S()}},{key:"update",value:function(){this.setScrollLimit(),this.addSections(),this.addElements(),this.detectElements(),this.updateScroll(),this.transformElements(!0),this.reinitScrollBar(),this.checkScroll(!0)}},{key:"startScroll",value:function(){this.stop=!1}},{key:"stopScroll",value:function(){this.stop=!0}},{key:"setScroll",value:function(t,e){this.instance=o(o({},this.instance),{},{scroll:{x:t,y:e},delta:{x:t,y:e},speed:0})}},{key:"destroy",value:function(){u(r(n.prototype),"destroy",this).call(this),this.stopScrolling(),this.html.classList.remove(this.smoothClass),this.vs.destroy(),this.destroyScrollBar(),window.removeEventListener("keydown",this.checkKey,!1)}}]),n}(b);return function(){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e),this.options=i,Object.assign(this,y,i),this.smartphone=y.smartphone,i.smartphone&&Object.assign(this.smartphone,i.smartphone),this.tablet=y.tablet,i.tablet&&Object.assign(this.tablet,i.tablet),this.smooth||"horizontal"!=this.direction||console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"),this.tablet.smooth||"horizontal"!=this.tablet.direction||console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"),this.smartphone.smooth||"horizontal"!=this.smartphone.direction||console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"),this.init()}return i(e,[{key:"init",value:function(){if(this.options.isMobile=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1||window.innerWidth<this.tablet.breakpoint,this.options.isTablet=this.options.isMobile&&window.innerWidth>=this.tablet.breakpoint,this.smooth&&!this.options.isMobile||this.tablet.smooth&&this.options.isTablet||this.smartphone.smooth&&this.options.isMobile&&!this.options.isTablet?this.scroll=new ct(this.options):this.scroll=new S(this.options),this.scroll.init(),window.location.hash){var t=window.location.hash.slice(1,window.location.hash.length),e=document.getElementById(t);e&&this.scroll.scrollTo(e)}}},{key:"update",value:function(){this.scroll.update()}},{key:"start",value:function(){this.scroll.startScroll()}},{key:"stop",value:function(){this.scroll.stopScroll()}},{key:"scrollTo",value:function(t,e){this.scroll.scrollTo(t,e)}},{key:"setScroll",value:function(t,e){this.scroll.setScroll(t,e)}},{key:"on",value:function(t,e){this.scroll.setEvents(t,e)}},{key:"off",value:function(t,e){this.scroll.unsetEvents(t,e)}},{key:"destroy",value:function(){this.scroll.destroy()}}]),e}()}));
// source --> https://andtea.com/wp-content/themes/andtea/assets/js/scripts.js?ver=1.5 
console.log("%c ❤️  Made By ES design studio ❤️ ", "background:#ffe800;padding:5px 15px;border-radius:5px; color:#000000;");

var ESscroll, scrV, scrSpeed, scrDirection, curEle, Header, scrollContainer, pageBox;
var winH = window.innerHeight;
var winW = window.innerWidth;
const ES = new ESjs;
const openVideo = new ESvideoPopup;

document.addEventListener("DOMContentLoaded", function() {
    imagesLoaded(document.body, function () {
        document.body.classList.remove('loading')
        document.body.classList.add('loaded')
        ESinit()
        setTimeout(()=>{
            document.body.classList.remove('loaded')
        },1500)
    });
});
function ESinit(){
    Header = document.getElementById('header');
    scrollContainer = document.querySelector('[data-scroll-container]');
    pageBox = document.getElementById('pageBox');
    
    ESscroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        repeat: true,
        getDirection: true,
        getSpeed: true,
        class: 'esin',
        reloadOnContextChange: true,
        tablet: {
            breakpoint: 1024,
            smooth: true
        },
        smartphone: {
            breakpoint: 768,
            smooth: false
        }
    });

    HeadFunc()
    initScroll()
    resize()

    barba.init({
        debug: false, 
        timeout: 50000,
        transitions: [{
            leave() {
                const done = this.async(); // 設置結束點
                closeNav()
                document.body.classList.add('loading')
                setTimeout(()=>{
                    ESscroll.destroy()
                    done()
                }, 1000)

            },
            after(){
                ESscroll.init()
                initScroll()
                HeadFunc()
                setTimeout(()=>{
                    document.body.classList.remove('loading')
                    document.body.classList.add('loaded')
                },500)
                setTimeout(()=>{
                    document.body.classList.remove('loaded')
                },1500)
            }
        }],
        views: [
            {
                namespace: 'home',
                afterEnter() { 
                    //barba 沒有 hook 可以處理 after 之後，先暴力解
                    setTimeout(()=>{
                        homeFunc()
                    },500)
                }
            },{
                namespace: 'about',
                afterEnter() { 
                    aboutFunc()
                }
            },{
                namespace: 'drinks',
                afterEnter() { 
                    drinkFunc()
                }
            },{
                namespace: 'blog',
                beforeEnter(data) {
                }
            },{
                namespace: 'blogSingle',
                beforeEnter(){
                    document.querySelectorAll('.listpost').forEach((section)=>{
                        ES.followCursorInSec(
                            section.querySelector('.post_image'),
                            section
                        )
                    })
                }
            }
        ]
    });
}
function resize(){
    window.addEventListener('resize', ()=>{
        winH = window.innerHeight;
        winW = window.innerWidth;
    })
}
function HeadFunc(){
    let navicon   = document.getElementById('navWave');
    let backarrow = document.getElementById('backtop');
    navicon.addEventListener('click', openNav)
    backarrow.addEventListener('click', backTop)
    function openNav(){
        if( Header.classList.contains('navopen') ){
            closeNav()
        }else{
            // ESscroll.stop()
            // document.body.classList.add('lock')
            Header.classList.add('navopen');
        }
    }
    function backTop(){
        ESscroll.scrollTo(0)
    }
    barba.hooks.leave(()=>{
        navicon.removeEventListener('click', openNav)
        backarrow.removeEventListener('click', backTop)
    })
}
function initScroll(){
    ESscroll.on('scroll', (val)=>{
        scrV = val.scroll.y;
        scrSpeed = val.speed;
        scrDirection = val.direction;
        if( scrV > 50 ){
            Header.classList.add('scroll')
        }else{
            Header.classList.remove('scroll')
        }
    })
    imagesLoaded(scrollContainer, { background: true }, function () {
        ESscroll.update();
    });
}
function closeNav(){
    Header.classList.add('isclose');
    // document.body.classList.remove('lock')
    // ESscroll.start()
    Header.classList.remove('navopen');
    setTimeout(()=>{ Header.classList.remove('isclose'); }, 1000)
}
function drinkFunc(){
    let cupSlider = document.querySelector('.cup_slider');
    let cupMnImg  = cupSlider.querySelector('.main_drink figure');
    let cupArr    = cupSlider.querySelectorAll('.cup_smimg .cups');
    let cupWrap   = cupSlider.querySelector('.cup_smimg > div');
    let cupBgArr  = cupSlider.querySelectorAll('.bgimg figure');
    let cupPreIdx = 0;
    let isChange  = false;

    let cupInterval = setInterval(()=>{
        changeCup(1)
    }, 3000)

    cupArr.forEach((el)=>{
        el.addEventListener('click', ()=>{
            clearInterval(cupInterval) //點擊取消時間play
            changeCup( ES.nodeListIdx(cupArr, el) )
            cupInterval = setInterval(()=>{ //重設
                changeCup(1)
            }, 3000)
        })
    })
    //先複製小圖一份
    for( let i = 0 ; i < cupArr.length; i++ ){
        let clone = cupArr[i].cloneNode(true);
        clone.addEventListener('click', ()=>{ //複製後沒有監聽，要另外補上
            changeCup( ES.nodeListIdx(cupArr, clone) )
        })
        cupWrap.appendChild(clone);
    }
    changeCup(0) //初始動畫

    function changeCup(idx){
        if( !isChange ){
            isChange = true;
            let movedVal = 0;

            cupSlider.classList.add('isChanging')
            
            //更換主圖
            let nextImg = document.createElement('img');
            nextImg.setAttribute('src', cupArr[idx].querySelector('img').getAttribute('src') );
            cupMnImg.appendChild(nextImg)

            //移動小圖
            let curCup = cupArr[idx];
            let cupWidth = ES.getCssValue(curCup, 'width');
            let curNav = curCup.dataset.nav;
            movedVal += cupWidth * (idx+1);
            cupWrap.style.transform = 'translate3d(-'+ movedVal  +'px,0,0)';

            //更換背景色
            cupSlider.style.backgroundColor = curCup.dataset.color;
            changeBgImg( cupBgArr, curNav-1, cupPreIdx )
            changeText( cupSlider.querySelectorAll('.cup_des > div'), curNav-1 )
            changeText( cupSlider.querySelectorAll('.series_text > div'), curNav-1 )
            changeText( cupSlider.querySelectorAll('.bellfont > div'), curNav-1 )

            setTimeout(()=>{
                cupPreIdx = curNav-1;
                //主圖動畫結束
                cupMnImg.children[0].remove(); //上一張離開
                cupSlider.classList.remove('isChanging');
                //往後複製小圖
                for( let i = 0 ; i < idx; i++ ){
                    cupWrap.appendChild(cupArr[i])
                }
                cupArr = cupSlider.querySelectorAll('.cup_smimg .cups');//更新陣列
                //回預設初始，減1px減少移動誤差
                cupWrap.style.transform = 'translate3d(-'+ (cupWidth-1)  +'px,0,0)';
                isChange = false;
            }, 1100)
        }
    }
    //更換背景圖
    function changeBgImg(arr, idx, preIdx){
        arr.forEach((el)=>{
            el.style.zIndex = 0;
            el.classList.remove('active')
        });
        arr[preIdx].style.zIndex = 1;
        arr[idx].style.zIndex = 2;
        arr[idx].classList.add('active');
    }
    //更換文字
    function changeText(arr, idx){
        setTimeout(()=>{
            arr.forEach((el)=>{
                el.style.display = 'none';
            })
            arr[idx].style.display = 'block'
        }, 500) //動畫跑完再換
    }

    //奶油 Slider
    let creamNavs   = document.querySelectorAll('.cream_navs li');
    let creamWrap   = document.querySelector('.cream_slide_wrap');
    let creamPreIdx = 0;
    
    creamNavs.forEach((el)=>{
        el.addEventListener('click', ()=>{
            changeCream(ES.nodeListIdx(creamNavs, el))
        })
    })
    changeCream(0)
    function changeCream(idx){
        if( idx != 0 ){ ESscroll.scrollTo(creamWrap, {offset: -100}) }
        creamWrap.classList.add('isChanging');
        let creamBigCup = document.querySelector('.cream_bigcup figure'); 

        let nextImg = document.createElement('img');
        nextImg.setAttribute('src', creamNavs[idx].dataset.cupimg );
        creamBigCup.appendChild(nextImg)
        
        changeBgImg( creamWrap.querySelectorAll('.cream_bigimg figure'), idx, creamPreIdx )
        changeText( creamWrap.querySelectorAll('.creaminfo'), idx )
        changeText( creamWrap.querySelectorAll('.criboon'), idx )

        let moveVal = ES.getCssValue( creamNavs[0], 'height');
        creamNavs.forEach(el=>el.classList.remove('active'))
        creamNavs[idx].classList.add('active')
        document.querySelector('.cream_navs i').style.top = (moveVal*idx) + 'px'; //移動葉子

        setTimeout(()=>{
            creamPreIdx = idx;
            creamWrap.classList.remove('isChanging');
            creamBigCup.children[0].remove()
        }, 1000)
    }

    //菜單選擇換提
    let esCollary = document.querySelectorAll('.es_collapse');
    let menuImg = document.querySelector('#menuImg');
    let menuImgurl = esCollary[0].dataset.img;
    
    //先放第一張圖 figure > img
    menuImg.children[0].children[0].setAttribute('src', menuImgurl);

    esCollary.forEach(el=>{
        let nextImg = document.createElement('img');

        el.children[0].addEventListener('click',()=>{
            esCollary.forEach((escol)=>{ //關閉其他的
                if( escol != el ){
                    escol.classList.remove('open')
                    escol.children[1].style.height = 0;
                }
            })
            let ans = el.children[1];
            let inner = ans.children[0];
            let height = ES.getCssValue(inner, 'height');

            if( el.classList.contains('open') ){
                el.classList.remove('open')
                ans.style.height = '0px';
            }else{
                el.classList.add('open');
                ans.style.height = height + 'px';
            }
            //滑順滾動才使用
            ESscroll.update()
            //換主圖
            menuImg.classList.add('isChanging')
            nextImg.setAttribute('src', el.dataset.img );
            menuImg.children[0].appendChild(nextImg);
            setTimeout(()=>{
                menuImg.children[0].children[0].remove();
                menuImg.classList.remove('isChanging')
            }, 1000)
        })
    })

    ES.followCursorPara(
        document.querySelector('.cream_ribbon > div'),
        document.querySelector('.cream_slide_wrap')
    )
    ES.collapse()

    //離開首頁時要打掃乾淨
    barba.hooks.leave(()=>{
        clearInterval(cupInterval);
    })

}
function aboutFunc(){
    ES.railTrack(
        document.querySelector('.track_wrap'),
        1.5
    )
}
function homeFunc(){
    let cirSec;
    let runStep = 0;
    let isSlowing = true;
    let oldScrVal = 0; //在外面存舊值來判斷是否滾動快要停止
    let homeInterval = setInterval(() => {
        oldScrVal = ESscroll.scroll.instance.scroll.y;
    }, 500); //每0.5秒存一次

    let playvideos = document.querySelectorAll('.es_video');

    document.querySelector('.cir_skip').addEventListener('click', () => {
        ESscroll.scrollTo(
            document.querySelector('.section_hgc')
        )
    })

    //影片播放
    imagesLoaded(playvideos, function () { //確保載入圖片再執行 follower 不然js拿不到高度
        playvideos.forEach((section)=>{
            ES.followCursorInSec(
                section.querySelector('.video_play'),
                section
            )
        })
    });
    playvideos.forEach((el)=>{
        el.addEventListener('click', ()=>{
            openVideo.openPop(el.dataset.videoid);
        })
    })
    //最新消息
    document.querySelectorAll('.listpost').forEach((section)=>{
        ES.followCursorInSec(
            section.querySelector('.post_image'),
            section
        )
    })
    ES.circleTrack(
        document.querySelector('.hga_text h1'),
        0.3
    )
    ES.followCursorPara(
        document.querySelector('.circle_ribbon > div'),
        document.querySelector('.circle_section')
    )

    ESscroll.on('scroll', (val)=>{
        //首頁主視覺
        let firstDrink               = document.querySelector('.hga_img > img');
        let firstDrinkBg             = document.querySelector('.hga_bg');
        firstDrinkBg.style.transform = 'scale('+ (1 + scrV / 2000) +')';
        firstDrink.style.transform   = 'translate3d(0,'+ scrV +'px,0)';

        //首頁旋轉動畫
        cirSec = val.currentElements['circleSection'];
        if( cirSec != undefined ){
            //參數
            let curIdx, bgcolor;

            //區塊高度要剪去 視窗高度，因為還沒實質上的到底
            let secHei = ES.getCssValue(cirSec.el,'height') - cirSec.top;
            let imgarray = document.querySelectorAll('.cir_slide');

            imgarray.forEach((el)=>{
                let angle = ( 72 * ES.nodeListIdx( imgarray , el) ); //直接用算的得到現在的角度，取值還要算PI，太麻煩了，五個系列是72角度，有空再改成動態的
                let curAngle = (scrV - cirSec.top) * 288 / secHei; //比例式，現在 = 滾動長度 * 288度 / 區塊高，288是要抓最後一個要轉回0的角度

                if( scrV > cirSec.top ){ //大於就是進入該區旋轉之後才開始
                    let startAngle = curAngle - angle; //減去各別起始值
                    
                    if( scrV > secHei + cirSec.top ){ //計算到尾端時
                        imgarray[imgarray.length-1].style.transform = 'rotate(0deg)';
                        return;
                    }else{
                        el.style.transform = 'rotate('+ startAngle +'deg)';
                    }
                    if( startAngle >= -50 && startAngle <= 30 ){ //當進入時
                        el.classList.add('in')
                        curIdx = ES.nodeListIdx(imgarray , el); //現在的 idx
                        bgcolor = el.children[0].dataset.bgcolor; //取得背景
                    }else{
                        el.classList.remove('in')
                    }
                }else{ //出去範圍要清空，不然滾太快會卡在中間
                    el.style.transform = 'rotate(-'+ angle +'deg)';
                }
            });
            cirSec.el.style.backgroundColor = bgcolor;
            titleZhAnimation( curIdx )
            listAnimation( curIdx )

            //滾動快要停止時
            let compareScroll = Math.abs(scrV - oldScrVal); 
            if( compareScroll >= 0 && compareScroll < 100 ){
                runStep += 1; 

                let limit = 40; // 設定手機比較敏感一點
                if (winW < 500) {
                    limit = 20;
                }
                
                // console.log(runStep, compareScroll)
                if( runStep >= limit ){ //在跑很多之後才開始執行
                    if( isSlowing != false ){
                        isSlowing = false;
                        if( curIdx != undefined ){
                            scrollToSec( curIdx )
                        }
                        setTimeout(() => { //2秒後才可重新執行，不然會卡住
                            isSlowing = true;
                            runStep = 0;
                        }, 500);
                    }
                }
            }

        };

        //橢圓文字橫移 
        if (winW > 500) {
            if ( val.currentElements['ovalText'] != undefined ) {
                let svgwrap = val.currentElements['ovalText'];
                let textPath = svgwrap.el.querySelector('textPath');
                textPath.setAttribute('startOffset', ( - (scrV - svgwrap.top) * 0.02 )+'%')
            };
        } else {
            document.querySelector('.ovaltext').setAttribute('startOffset', '0%')
        }

    });

    // 移動中文標題動畫
    function titleZhAnimation(idx){
        let wrap = document.getElementById('cirTitlezh');
        let moveVal = ES.getCssValue(
            wrap.children[0].children[0], 
            'height'
        ) * idx;
        wrap.children[0].style.transform = 'translate3d(0,-'+ moveVal +'px,0)';
    };
    //移動清單焦點
    let cirinList  = document.getElementById('cirinList');
    let ribbonText = document.querySelector('.circle_ribbon');
    let oldIdx     = 0;
    let listIsAni  = false;
    function listAnimation(idx){
        if( idx == undefined ) return;
        let arr = cirinList.children[0].children;
        let moveVal = ES.getCssValue( arr[0], 'height');
        let desList = document.getElementById('cirDes');
        cirinList.querySelector('i').style.top = (moveVal*idx) + 'px'; //移動葉子

        for( let i = 0 ; i < arr.length; i++ ){ //亮起清單
            if( i == idx ){
                arr[i].classList.add('active');
                setTimeout(()=>{
                    desList.children[i].classList.add('active');
                }, 300)
            }else{
                arr[i].classList.remove('active');
                setTimeout(()=>{
                    desList.children[i].classList.remove('active');
                }, 300)
            }
        }
        
        if( listIsAni != true ){
            if( oldIdx != idx ){ //換值才觸發
                listIsAni = true; //旗標
                oldIdx = idx;
                desList.classList.add('leave');
                ribbonText.classList.add('leave')
                ribbonText.querySelectorAll('.ciriboon').forEach((el)=>{
                    el.style.display = 'none';
                })
                setTimeout(()=>{ //動畫跑完才移除
                    ribbonText.querySelectorAll('.ciriboon')[idx].style.display = 'block'
                    desList.classList.remove('leave');
                    ribbonText.classList.remove('leave')
                    listIsAni = false;
                }, 600)
            }
        }
    };
    //點擊移動切換清單
    cirinList.querySelectorAll('li').forEach((el)=>{
        el.addEventListener('click', function(){
            let idx = ES.nodeListIdx( cirinList.children[0].children, this )
            scrollToSec( idx )
        })
    });
    let isScrollToSec = false;
    function scrollToSec(idx){
        
        if( isScrollToSec != true ){ //防止重複執行
            isScrollToSec = true;
            let arrLength = 4;
            let secH =  ES.getCssValue( cirSec.el, 'height' );
            if( idx == arrLength ){ //最後一個
                ESscroll.scrollTo( secH, {
                    duration: 200,
                    callback: isScrollToSec = false
                } )
            }else if( idx == 0 ){ //第一個
                ESscroll.scrollTo( cirSec.top, {
                    duration: 200,
                    callback: isScrollToSec = false
                }  )
            }else{
                //區塊尾端 - 區塊起始 / 系列數量-1，因為最後一段不需要跑
                let eachSecH = (secH - cirSec.top) / arrLength;
                // 初始位置 + 每一區塊長度 * 目前idx
                ESscroll.scrollTo( cirSec.top + eachSecH * idx, {
                    duration:200,
                    callback: isScrollToSec = false
                }  )
            }
        };
    }
    //離開首頁時要打掃乾淨
    barba.hooks.leave(()=>{
        clearInterval(homeInterval);
        ESscroll.scroll.listeners.scroll.splice(1, 1)
    })

}
function copyLink(e){
    let url = decodeURI(window.location.href);
    if( navigator.clipboard == undefined ){
        alert('您的連線不安全，不支援複製到面板')
    }else{
        navigator.clipboard.writeText(url);
    }
    ES.message('success', '您已成功複製網址：' + url, 'ok')
};