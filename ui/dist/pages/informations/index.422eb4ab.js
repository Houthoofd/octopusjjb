var e=globalThis,r={},n={},o=e.parcelRequired5b2;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var o=n[e];delete n[e];var t={id:e,exports:{}};return r[e]=t,o.call(t.exports,t,t.exports),t.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){n[e]=r},e.parcelRequired5b2=o),o.register;var t=o("5D1XK");o("RKbfs");let a=(0,t.html)`${e=>(0,t.html)`<div class='informations'>
          <nav class='header-menu'>
              <a href='compte'>Compte</a>
              <a href='/' id='logout'>Déconnexion</a>
          </nav>
          <div class='content'>
              <nav class='horizontal-menu'>
                  <a href='cours'>S'inscrire aux cours</a>
                  <a href='informations'>Informations supplémentaires</a>
              </nav>
              <h1>Informations</h1>
          </div>
      </div>`}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("logout");e&&e.addEventListener("click",e=>{e.preventDefault(),localStorage.clear(),sessionStorage.clear(),window.location.href="/"})}),(0,t.render)(a);
//# sourceMappingURL=index.422eb4ab.js.map
