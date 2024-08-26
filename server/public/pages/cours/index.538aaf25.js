var e=globalThis,r={},n={},t=e.parcelRequirec605;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){n[e]=r},e.parcelRequirec605=t),t.register;var o=t("1BF7I");t("lTDtW");let a=(0,o.html)`${e=>(0,o.html)`<div class='cours'>
        <nav class='header-menu'>
            <a href='compte'>Compte</a>
            <a href='/' id='logout'>Déconnexion</a>
        </nav>
        <div class='content'>
            <nav class='horizontal-menu'>
                <a href='cours'>S'inscrire aux cours</a>
                <a href='informations'>Informations supplémentaires</a>
            </nav>
            <h1>Inscriptions aux cours</h1>
        </div>
    </div>`}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("logout");e&&e.addEventListener("click",e=>{e.preventDefault(),localStorage.clear(),sessionStorage.clear(),window.location.href="/"})}),(0,o.render)(a);
//# sourceMappingURL=index.538aaf25.js.map
