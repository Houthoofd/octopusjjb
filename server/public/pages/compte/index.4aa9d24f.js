var e=globalThis,r={},t={},n=e.parcelRequirec605;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){t[e]=r},e.parcelRequirec605=n),n.register;var o=n("1BF7I");n("lTDtW");let a=(0,o.html)`${e=>(0,o.html)`<div class='compte'>
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
//# sourceMappingURL=index.4aa9d24f.js.map
