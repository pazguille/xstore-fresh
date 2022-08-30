/** @jsx h */
import { h, createContext } from 'preact';

import Head from '@/components/Head.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

export const AppContext = createContext({
  section: '',
});

export default function Layout({ children, section }) {
  return (
    <AppContext.Provider value={{ section }}>
      <Head />
      <Header />
      <main>
        {/* <div class="splash-loading" hidden>
          <svg width="100px" height="100px" viewbox="-20 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m110 104.1-5.5-77A5.5 5.5 0 0 0 99 22H77a22 22 0 1 0-44 0H11a5.5 5.5 0 0 0-5.5 5.1l-5.5 77a5.5 5.5 0 0 0 5.5 5.9h99a5.5 5.5 0 0 0 5.5-5.9ZM55 5.5c9.1 0 16.5 7.4 16.5 16.5h-33c0-9.1 7.4-16.5 16.5-16.5Zm-49.5 99 5.5-77h88l5.5 77h-99Z" fill="#fff" />
            <path d="M43.6 46.4h-.1v-.1A23.2 23.2 0 0 1 55 43a21.7 21.7 0 0 1 11.5 3.2l-.1.2H66l-.3-.1h-.8l-2 .1a18 18 0 0 0-4.1 1.3 108.3 108.3 0 0 0-3.8 1.8 20.8 20.8 0 0 0-4.8-2.2l-2.6-.8-2.5-.3-.8.1h-.7Zm5.4 8.8a83 83 0 0 0-9.4 14.3c-.7 1.4-1.2 2.7-1.6 3.9a11.9 11.9 0 0 0-.5 4.1l.1.8h-.1a21.5 21.5 0 0 1-2.8-21.8l2-3.9c.9-1.2 1.8-2.3 2.9-3.2l.3-.1h.3c.4 0 1 0 1.4.2l1.6.8a17.6 17.6 0 0 1 3.3 2.5A21.6 21.6 0 0 1 49 55v.1Zm20.8-6h.3A21.4 21.4 0 0 1 77 65a21.6 21.6 0 0 1-4.5 13.3h-.1V78l.1-.5v-.8c0-1-.1-2-.5-3.3l-1.6-3.9a52 52 0 0 0-4.7-8 84 84 0 0 0-4.7-6.3V55a87.4 87.4 0 0 1 4-3.6l1.7-1.2 1.6-.8 1.5-.3ZM55 60.7l1.2.9a73.6 73.6 0 0 0 3.4 3 71.3 71.3 0 0 1 8 9.3c.8 1 1.4 2.1 1.8 3.2.5 1 .7 2 .7 2.7l-.1 1-.5.8-1.5 1.2-1.6 1a21.9 21.9 0 0 1-22.8 0 55.6 55.6 0 0 1-3-2.2c-.3-.2-.5-.5-.6-.8a3 3 0 0 1-.1-1c0-.7.2-1.6.6-2.6a34.5 34.5 0 0 1 6.7-9.3 66 66 0 0 1 7.8-7.2Z" fill="#fff" />
          </svg>
        </div>
        <script dangerouslySetInnerHTML={{ __html:`
          const { pathname } = new URL(window.location.href);
          const pathSplit = pathname.split('/');
          const page = pathSplit[1];
          if (page === '') {
            document.querySelector('.splash-loading').toggleAttribute('hidden');
          }
          window.addEventListener('load', () => {
            if (page === '') {
              const $splash = document.querySelector('.splash-loading');
              requestIdleCallback(() => {
                $splash.classList.add('bye');
                setTimeout(() => {
                  $splash.toggleAttribute('hidden');
                }, 500);
              });
            }
          });
        `}} /> */}
        {children}
      </main>
      <Footer />

      <script type="text/partytown" dangerouslySetInnerHTML={{ __html:`
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-GTM4ELWW90', {
          anonymize_ip: true,
          allow_google_signals: false,
          allow_ad_personalization_signals: false,
          restricted_data_processing: true,
        });

        gtag('consent', 'default', {
          analytics_storage: 'granted',
          ad_storage: 'denied',
          personalization_storage: 'denied',
          functionality_storage: 'denied',
          security_storage: 'denied',
        });

        var s = document.createElement('script');
        s.src = 'https://www.googletagmanager.com/gtag/js?id=G-GTM4ELWW90';
        s.async = 1;
        s.type='text/partytown';
        var m = document.getElementsByTagName('script')[0];
        m.parentNode.insertBefore(s,m);
      `}} />

      <script dangerouslySetInnerHTML={{ __html:`
        window.requestIdleCallback = window.requestIdleCallback || function (cb) {
          var start = Date.now();
          return setTimeout(function () {
            cb({
              didTimeout: false,
              timeRemaining: function () {
                return Math.max(0, 50 - (Date.now() - start));
              }
            });
          }, 1);
        };

        // custom-elements: https://unpkg.com/@ungap/custom-elements@1.1.0/es.js
        /*! (c) Andrea Giammarchi @webreflection ISC */
        !function(){"use strict";var e=function(e,t){var n=function(e){for(var t=0,n=e.length;t<n;t++)r(e[t])},r=function(e){var t=e.target,n=e.attributeName,r=e.oldValue;t.attributeChangedCallback(n,r,t.getAttribute(n))};return function(o,a){var l=o.constructor.observedAttributes;return l&&e(a).then((function(){new t(n).observe(o,{attributes:!0,attributeOldValue:!0,attributeFilter:l});for(var e=0,a=l.length;e<a;e++)o.hasAttribute(l[e])&&r({target:o,attributeName:l[e],oldValue:null})})),o}};function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance. In order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,l=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw l}}}}
        /*! (c) Andrea Giammarchi - ISC */var r=!0,o=!1,a="querySelectorAll",l="querySelectorAll",i=self,u=i.document,c=i.Element,s=i.MutationObserver,f=i.Set,h=i.WeakMap,d=function(e){return l in e},v=[].filter,g=function(e){var t=new h,i=function(n,r){var o;if(r)for(var a,l=function(e){return e.matches||e.webkitMatchesSelector||e.msMatchesSelector}(n),i=0,u=p.length;i<u;i++)l.call(n,a=p[i])&&(t.has(n)||t.set(n,new f),(o=t.get(n)).has(a)||(o.add(a),e.handle(n,r,a)));else t.has(n)&&(o=t.get(n),t.delete(n),o.forEach((function(t){e.handle(n,r,t)})))},g=function(e){for(var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=0,r=e.length;n<r;n++)i(e[n],t)},p=e.query,y=e.root||u,m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:MutationObserver,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:["*"],u=function t(o,l,i,u,c,s){var f,h=n(o);try{for(h.s();!(f=h.n()).done;){var d=f.value;(s||a in d)&&(c?i.has(d)||(i.add(d),u.delete(d),e(d,c)):u.has(d)||(u.add(d),i.delete(d),e(d,c)),s||t(d[a](l),l,i,u,c,r))}}catch(e){h.e(e)}finally{h.f()}},c=new l((function(e){if(i.length){var t,a=i.join(","),l=new Set,c=new Set,s=n(e);try{for(s.s();!(t=s.n()).done;){var f=t.value,h=f.addedNodes,d=f.removedNodes;u(d,a,l,c,o,o),u(h,a,l,c,r,o)}}catch(e){s.e(e)}finally{s.f()}}})),s=c.observe;return(c.observe=function(e){return s.call(c,e,{subtree:r,childList:r})})(t),c}(i,y,s,p),b=c.prototype.attachShadow;return b&&(c.prototype.attachShadow=function(e){var t=b.call(this,e);return m.observe(t),t}),p.length&&g(y[l](p)),{drop:function(e){for(var n=0,r=e.length;n<r;n++)t.delete(e[n])},flush:function(){for(var e=m.takeRecords(),t=0,n=e.length;t<n;t++)g(v.call(e[t].removedNodes,d),!1),g(v.call(e[t].addedNodes,d),!0)},observer:m,parse:g}},p=self,y=p.document,m=p.Map,b=p.MutationObserver,w=p.Object,E=p.Set,S=p.WeakMap,A=p.Element,M=p.HTMLElement,O=p.Node,N=p.Error,C=p.TypeError,T=p.Reflect,q=w.defineProperty,I=w.keys,D=w.getOwnPropertyNames,L=w.setPrototypeOf,P=!self.customElements,k=function(e){for(var t=I(e),n=[],r=t.length,o=0;o<r;o++)n[o]=e[t[o]],delete e[t[o]];return function(){for(var o=0;o<r;o++)e[t[o]]=n[o]}};if(P){var x=function(){var e=this.constructor;if(!$.has(e))throw new C("Illegal constructor");var t=$.get(e);if(W)return z(W,t);var n=H.call(y,t);return z(L(n,e.prototype),t)},H=y.createElement,$=new m,_=new m,j=new m,R=new m,V=[],U=g({query:V,handle:function(e,t,n){var r=j.get(n);if(t&&!r.isPrototypeOf(e)){var o=k(e);W=L(e,r);try{new r.constructor}finally{W=null,o()}}var a="".concat(t?"":"dis","connectedCallback");a in r&&e[a]()}}).parse,W=null,F=function(e){if(!_.has(e)){var t,n=new Promise((function(e){t=e}));_.set(e,{$:n,_:t})}return _.get(e).$},z=e(F,b);q(self,"customElements",{configurable:!0,value:{define:function(e,t){if(R.has(e))throw new N('the name "'.concat(e,'" has already been used with this registry'));$.set(t,e),j.set(e,t.prototype),R.set(e,t),V.push(e),F(e).then((function(){U(y.querySelectorAll(e))})),_.get(e)._(t)},get:function(e){return R.get(e)},whenDefined:F}}),q(x.prototype=M.prototype,"constructor",{value:x}),q(self,"HTMLElement",{configurable:!0,value:x}),q(y,"createElement",{configurable:!0,value:function(e,t){var n=t&&t.is,r=n?R.get(n):R.get(e);return r?new r:H.call(y,e)}}),"isConnected"in O.prototype||q(O.prototype,"isConnected",{configurable:!0,get:function(){return!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}else try{var B=function e(){return self.Reflect.construct(HTMLLIElement,[],e)};B.prototype=HTMLLIElement.prototype;var G="extends-li";self.customElements.define("extends-li",B,{extends:"li"}),P=y.createElement("li",{is:G}).outerHTML.indexOf(G)<0;var J=self.customElements,K=J.get,Q=J.whenDefined;q(self.customElements,"whenDefined",{configurable:!0,value:function(e){var t=this;return Q.call(this,e).then((function(n){return n||K.call(t,e)}))}})}catch(e){P=!P}if(P){var X=function(e){var t=ae.get(e);ve(t.querySelectorAll(this),e.isConnected)},Y=self.customElements,Z=y.createElement,ee=Y.define,te=Y.get,ne=Y.upgrade,re=T||{construct:function(e){return e.call(this)}},oe=re.construct,ae=new S,le=new E,ie=new m,ue=new m,ce=new m,se=new m,fe=[],he=[],de=function(e){return se.get(e)||te.call(Y,e)},ve=g({query:he,handle:function(e,t,n){var r=ce.get(n);if(t&&!r.isPrototypeOf(e)){var o=k(e);be=L(e,r);try{new r.constructor}finally{be=null,o()}}var a="".concat(t?"":"dis","connectedCallback");a in r&&e[a]()}}).parse,ge=g({query:fe,handle:function(e,t){ae.has(e)&&(t?le.add(e):le.delete(e),he.length&&X.call(he,e))}}).parse,pe=A.prototype.attachShadow;pe&&(A.prototype.attachShadow=function(e){var t=pe.call(this,e);return ae.set(this,t),t});var ye=function(e){if(!ue.has(e)){var t,n=new Promise((function(e){t=e}));ue.set(e,{$:n,_:t})}return ue.get(e).$},me=e(ye,b),be=null;D(self).filter((function(e){return/^HTML.*Element$/.test(e)})).forEach((function(e){var t=self[e];function n(){var e=this.constructor;if(!ie.has(e))throw new C("Illegal constructor");var n=ie.get(e),r=n.is,o=n.tag;if(r){if(be)return me(be,r);var a=Z.call(y,o);return a.setAttribute("is",r),me(L(a,e.prototype),r)}return oe.call(this,t,[],e)}q(n.prototype=t.prototype,"constructor",{value:n}),q(self,e,{value:n})})),q(y,"createElement",{configurable:!0,value:function(e,t){var n=t&&t.is;if(n){var r=se.get(n);if(r&&ie.get(r).tag===e)return new r}var o=Z.call(y,e);return n&&o.setAttribute("is",n),o}}),q(Y,"get",{configurable:!0,value:de}),q(Y,"whenDefined",{configurable:!0,value:ye}),q(Y,"upgrade",{configurable:!0,value:function(e){var t=e.getAttribute("is");if(t){var n=se.get(t);if(n)return void me(L(e,n.prototype),t)}ne.call(Y,e)}}),q(Y,"define",{configurable:!0,value:function(e,t,n){if(de(e))throw new N("'".concat(e,"' has already been defined as a custom element"));var r,o=n&&n.extends;ie.set(t,o?{is:e,tag:o}:{is:"",tag:e}),o?(r="".concat(o,'[is="').concat(e,'"]'),ce.set(r,t.prototype),se.set(e,t),he.push(r)):(ee.apply(Y,arguments),fe.push(r=e)),ye(e).then((function(){o?(ve(y.querySelectorAll(r)),le.forEach(X,[r])):ge(y.querySelectorAll(r))})),ue.get(e)._(t)}})}}();

        window.addEventListener('load', function() {
          requestIdleCallback(() => {
            try {
              window.partytown = {
                forward: ['dataLayer.push', 'gtag'],
              };
              /* Inlined Partytown Snippet */
              !function(t,e,n,i,r,o,a,d,s,c,p,l){function u(){l||(l=1,"/"==(a=(o.lib||"/~partytown/")+(o.debug?"debug/":""))[0]&&(s=e.querySelectorAll('script[type="text/partytown"]'),i!=t?i.dispatchEvent(new CustomEvent("pt1",{detail:t})):(d=setTimeout(w,1e4),e.addEventListener("pt0",f),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||"partytown-sw.js"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener("statechange",(function(t){"activated"==t.target.state&&h()}))}),console.error):w())))}function h(t){c=e.createElement(t?"script":"iframe"),t||(c.setAttribute("style","display:block;width:0;height:0;border:0;visibility:hidden"),c.setAttribute("aria-hidden",!0)),c.src=a+"partytown-"+(t?"atomics.js?v=0.5.4":"sandbox-sw.html?"+Date.now()),e.body.appendChild(c)}function w(t,n){for(f(),t=0;t<s.length;t++)(n=e.createElement("script")).innerHTML=s[t].innerHTML,e.head.appendChild(n);c&&c.parentNode.removeChild(c)}function f(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(".").map((function(e,n,i){p=p[i[n]]=n+1<i.length?"push"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),"complete"==e.readyState?u():(t.addEventListener("DOMContentLoaded",u),t.addEventListener("load",u))}(window,document,navigator,top,window.crossOriginIsolated);
            } catch {}
          });
        });

        try {
          if (navigator.serviceWorker) {
            navigator.serviceWorker
              .register('./sw.js', { scope: '/' })
              .then((reg) => {
                console.log('Registration succeeded. Scope is ' + reg.scope);
              }).catch((error) => {
                console.log('Registration failed with ' + error);
              });

            bs();
          }
        } catch {}

        async function bs() {
          if (!navigator.permissions) { return; }

          const registration = await navigator.serviceWorker.ready;
          const status = await navigator.permissions.query({
            name: 'periodic-background-sync',
          });
          if (status.state === 'granted') {
            await registration.periodicSync.register('check-deals', {
              // An interval of one day.
              minInterval: 24 * 60 * 60 * 1000,
            });
          }
        }
      `}} />

      <script type="module" src="/src/js/web-components.js" />
      <script type="module" src="/src/js/swipes.js" />

      <script dangerouslySetInnerHTML={{ __html:`
        window.addEventListener('appinstalled', (eve) => {
          gtag('event', 'app_installed');
        });

        window.addEventListener('load', () => {
          document.querySelector('#search').addEventListener('submit', (eve) => {
            gtag('event', 'search', {
              search_term: eve.target.elements[0].value,
            });
          });

          const io = new IntersectionObserver(
            async (entries) => {
              entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                  requestIdleCallback(() => {
                    document.head.insertAdjacentHTML('beforeend', '<link rel="prefetch" href="'+ entry.target.href +'" />');
                    io.unobserve(entry.target);
                  });
                }
              });
            }
          );
          Array.from(document.querySelectorAll('.link'))
            .forEach(link => io.observe(link));

        });
      `}} />
    </AppContext.Provider>
  );
}
