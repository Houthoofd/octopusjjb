var e=globalThis,r={},t={},n=e.parcelRequired5b2;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){t[e]=r},e.parcelRequired5b2=n),n.register;var o=n("5D1XK");n("RKbfs");let a=(0,o.html)`${e=>(0,o.html)`<div class='compte'>
          <nav class='header-menu'>
              <a href='compte'>Compte</a>
              <a href='/' id='logout'>Déconnexion</a>
          </nav>
          <div class='content'>
              <nav class='horizontal-menu'>
                  <a href='cours'>S'inscrire aux cours</a>
                  <a href='informations'>Informations supplémentaires</a>
              </nav>
              <h1>Compte</h1>
          </div>
      </div>`}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("logout");e&&e.addEventListener("click",e=>{e.preventDefault(),localStorage.clear(),window.location.href="/"})}),(0,o.render)(a);
//# sourceMappingURL=index.4abb89dc.js.map
