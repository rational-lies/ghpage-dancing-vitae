(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{2962:function(e,t,o){"use strict";o.d(t,{PB:function(){return d}});var r=o(7294),a=o(9008),n=o.n(a);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}var l=["keyOverride"],p={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},c=function(e,t,o){void 0===t&&(t=[]);var a=void 0===o?{}:o,n=a.defaultWidth,i=a.defaultHeight;return t.reduce(function(t,o,a){return t.push(r.createElement("meta",{key:"og:"+e+":0"+a,property:"og:"+e,content:o.url})),o.alt&&t.push(r.createElement("meta",{key:"og:"+e+":alt0"+a,property:"og:"+e+":alt",content:o.alt})),o.secureUrl&&t.push(r.createElement("meta",{key:"og:"+e+":secure_url0"+a,property:"og:"+e+":secure_url",content:o.secureUrl.toString()})),o.type&&t.push(r.createElement("meta",{key:"og:"+e+":type0"+a,property:"og:"+e+":type",content:o.type.toString()})),o.width?t.push(r.createElement("meta",{key:"og:"+e+":width0"+a,property:"og:"+e+":width",content:o.width.toString()})):n&&t.push(r.createElement("meta",{key:"og:"+e+":width0"+a,property:"og:"+e+":width",content:n.toString()})),o.height?t.push(r.createElement("meta",{key:"og:"+e+":height"+a,property:"og:"+e+":height",content:o.height.toString()})):i&&t.push(r.createElement("meta",{key:"og:"+e+":height"+a,property:"og:"+e+":height",content:i.toString()})),t},[])},u=function(e){var t,o,a,n,u,s=[];e.titleTemplate&&(p.templateTitle=e.titleTemplate);var d="";e.title?(d=e.title,p.templateTitle&&(d=p.templateTitle.replace(/%s/g,function(){return d}))):e.defaultTitle&&(d=e.defaultTitle),d&&s.push(r.createElement("title",{key:"title"},d));var h=e.noindex||p.noindex||e.dangerouslySetAllPagesToNoIndex,f=e.nofollow||p.nofollow||e.dangerouslySetAllPagesToNoFollow,m="";if(e.robotsProps){var g=e.robotsProps,y=g.nosnippet,v=g.maxSnippet,k=g.maxImagePreview,G=g.maxVideoPreview,b=g.noarchive,E=g.noimageindex,w=g.notranslate,_=g.unavailableAfter;m=(y?",nosnippet":"")+(v?",max-snippet:"+v:"")+(k?",max-image-preview:"+k:"")+(b?",noarchive":"")+(_?",unavailable_after:"+_:"")+(E?",noimageindex":"")+(G?",max-video-preview:"+G:"")+(w?",notranslate":"")}if(h||f?(e.dangerouslySetAllPagesToNoIndex&&(p.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(p.nofollow=!0),s.push(r.createElement("meta",{key:"robots",name:"robots",content:(h?"noindex":"index")+","+(f?"nofollow":"follow")+m}))):s.push(r.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+m})),e.description&&s.push(r.createElement("meta",{key:"description",name:"description",content:e.description})),e.themeColor&&s.push(r.createElement("meta",{key:"theme-color",name:"theme-color",content:e.themeColor})),e.mobileAlternate&&s.push(r.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach(function(e){s.push(r.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))}),e.twitter&&(e.twitter.cardType&&s.push(r.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&s.push(r.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&s.push(r.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&s.push(r.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(null!=(t=e.openGraph)&&t.title||d)&&s.push(r.createElement("meta",{key:"og:title",property:"og:title",content:(null==(n=e.openGraph)?void 0:n.title)||d})),(null!=(o=e.openGraph)&&o.description||e.description)&&s.push(r.createElement("meta",{key:"og:description",property:"og:description",content:(null==(u=e.openGraph)?void 0:u.description)||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&s.push(r.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var T=e.openGraph.type.toLowerCase();s.push(r.createElement("meta",{key:"og:type",property:"og:type",content:T})),"profile"===T&&e.openGraph.profile?(e.openGraph.profile.firstName&&s.push(r.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&s.push(r.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&s.push(r.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&s.push(r.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===T&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(function(e,t){s.push(r.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))}),e.openGraph.book.isbn&&s.push(r.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&s.push(r.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(function(e,t){s.push(r.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))})):"article"===T&&e.openGraph.article?(e.openGraph.article.publishedTime&&s.push(r.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&s.push(r.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&s.push(r.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(function(e,t){s.push(r.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))}),e.openGraph.article.section&&s.push(r.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(function(e,t){s.push(r.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))})):("video.movie"===T||"video.episode"===T||"video.tv_show"===T||"video.other"===T)&&e.openGraph.video&&(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(function(e,t){e.profile&&s.push(r.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&s.push(r.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))}),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(function(e,t){s.push(r.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))}),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(function(e,t){s.push(r.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))}),e.openGraph.video.duration&&s.push(r.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&s.push(r.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(function(e,t){s.push(r.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))}),e.openGraph.video.series&&s.push(r.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(p.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(p.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&s.push.apply(s,c("image",e.openGraph.images,{defaultWidth:p.defaultOpenGraphImageWidth,defaultHeight:p.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(p.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(p.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&s.push.apply(s,c("video",e.openGraph.videos,{defaultWidth:p.defaultOpenGraphVideoWidth,defaultHeight:p.defaultOpenGraphVideoHeight})),e.openGraph.audio&&s.push.apply(s,c("audio",e.openGraph.audio)),e.openGraph.locale&&s.push(r.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),(e.openGraph.siteName||e.openGraph.site_name)&&s.push(r.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.siteName||e.openGraph.site_name}))}return e.canonical&&s.push(r.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach(function(e){var t,o,a=e.keyOverride,n=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,l);s.push(r.createElement("meta",i({key:"meta:"+(null!=(t=null!=(o=null!=a?a:n.name)?o:n.property)?t:n.httpEquiv)},n)))}),null!=(a=e.additionalLinkTags)&&a.length&&e.additionalLinkTags.forEach(function(e){var t;s.push(r.createElement("link",i({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))}),s},s=function(e){return r.createElement(n(),null,u(e))},d=function(e){var t=e.title,o=e.themeColor,a=e.noindex,n=void 0!==a&&a,i=e.nofollow,l=e.robotsProps,p=e.description,c=e.canonical,d=e.openGraph,h=e.facebook,f=e.twitter,m=e.additionalMetaTags,g=e.titleTemplate,y=e.defaultTitle,v=e.mobileAlternate,k=e.languageAlternates,G=e.additionalLinkTags,b=e.useAppDir;return r.createElement(r.Fragment,null,void 0!==b&&b?u({title:t,themeColor:o,noindex:n,nofollow:i,robotsProps:l,description:p,canonical:c,facebook:h,openGraph:d,additionalMetaTags:m,twitter:f,titleTemplate:g,defaultTitle:y,mobileAlternate:v,languageAlternates:k,additionalLinkTags:G}):r.createElement(s,{title:t,themeColor:o,noindex:n,nofollow:i,robotsProps:l,description:p,canonical:c,facebook:h,openGraph:d,additionalMetaTags:m,twitter:f,titleTemplate:g,defaultTitle:y,mobileAlternate:v,languageAlternates:k,additionalLinkTags:G}))};RegExp("["+Object.keys(Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})).join("")+"]","g")},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(2648).Z,a=o(7273).Z,n=r(o(7294)),i=o(4532),l=o(3353),p=o(1410),c=o(9064),u=o(370),s=o(9955),d=o(4224),h=o(508),f=o(1516),m=o(4266);let g=new Set;function y(e,t,o,r,a){if(a||l.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let a=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,n=t+"%"+o+"%"+a;if(g.has(n))return;g.add(n)}Promise.resolve(e.prefetch(t,o,r)).catch(e=>{})}}function v(e){return"string"==typeof e?e:p.formatUrl(e)}let k=n.default.forwardRef(function(e,t){let o,r;let{href:p,as:g,children:k,prefetch:G,passHref:b,replace:E,shallow:w,scroll:_,locale:T,onClick:O,onMouseEnter:x,onTouchStart:C,legacyBehavior:P=!1}=e,M=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=k,P&&("string"==typeof o||"number"==typeof o)&&(o=n.default.createElement("a",null,o));let A=!1!==G,I=n.default.useContext(s.RouterContext),j=n.default.useContext(d.AppRouterContext),S=null!=I?I:j,L=!I,{href:H,as:N}=n.default.useMemo(()=>{if(!I){let e=v(p);return{href:e,as:g?v(g):e}}let[e,t]=i.resolveHref(I,p,!0);return{href:e,as:g?i.resolveHref(I,g):t||e}},[I,p,g]),W=n.default.useRef(H),V=n.default.useRef(N);P&&(r=n.default.Children.only(o));let R=P?r&&"object"==typeof r&&r.ref:t,[D,U,K]=h.useIntersection({rootMargin:"200px"}),q=n.default.useCallback(e=>{(V.current!==N||W.current!==H)&&(K(),V.current=N,W.current=H),D(e),R&&("function"==typeof R?R(e):"object"==typeof R&&(R.current=e))},[N,R,H,K,D]);n.default.useEffect(()=>{S&&U&&A&&y(S,H,N,{locale:T},L)},[N,H,U,T,A,null==I?void 0:I.locale,S,L]);let B={ref:q,onClick(e){P||"function"!=typeof O||O(e),P&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,o,r,a,i,p,c,u,s){let{nodeName:d}=e.currentTarget,h="A"===d.toUpperCase();if(h&&(function(e){let t=e.currentTarget,o=t.getAttribute("target");return o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!l.isLocalURL(o)))return;e.preventDefault();let f=()=>{"beforePopState"in t?t[a?"replace":"push"](o,r,{shallow:i,locale:c,scroll:p}):t[a?"replace":"push"](r||o,{forceOptimisticNavigation:!s})};u?n.default.startTransition(f):f()}(e,S,H,N,E,w,_,T,L,A)},onMouseEnter(e){P||"function"!=typeof x||x(e),P&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),S&&(A||!L)&&y(S,H,N,{locale:T,priority:!0,bypassPrefetchedCheck:!0},L)},onTouchStart(e){P||"function"!=typeof C||C(e),P&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),S&&(A||!L)&&y(S,H,N,{locale:T,priority:!0,bypassPrefetchedCheck:!0},L)}};if(c.isAbsoluteUrl(N))B.href=N;else if(!P||b||"a"===r.type&&!("href"in r.props)){let e=void 0!==T?T:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&f.getDomainLocale(N,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);B.href=t||m.addBasePath(u.addLocale(N,e,null==I?void 0:I.defaultLocale))}return P?n.default.cloneElement(r,B):n.default.createElement("a",Object.assign({},M,B),o)});t.default=k,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:o,disabled:p}=e,c=p||!n,[u,s]=r.useState(!1),d=r.useRef(null),h=r.useCallback(e=>{d.current=e},[]);r.useEffect(()=>{if(n){if(c||u)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,o){let{id:r,observer:a,elements:n}=function(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===o.root&&e.margin===o.margin);if(r&&(t=i.get(r)))return t;let a=new Map,n=new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e);return t={id:o,observer:n,elements:a},l.push(o),i.set(o,t),t}(o);return n.set(e,t),a.observe(e),function(){if(n.delete(e),a.unobserve(e),0===n.size){a.disconnect(),i.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:o});return r}}else if(!u){let e=a.requestIdleCallback(()=>s(!0));return()=>a.cancelIdleCallback(e)}},[c,o,t,u,d.current]);let f=r.useCallback(()=>{s(!1)},[]);return[h,u,f]};var r=o(7294),a=o(29);let n="function"==typeof IntersectionObserver,i=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9008:function(e,t,o){e.exports=o(2636)},1664:function(e,t,o){e.exports=o(5569)},1163:function(e,t,o){e.exports=o(6885)}}]);