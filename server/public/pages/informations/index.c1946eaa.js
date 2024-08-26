var e=globalThis,r={},t={},o=e.parcelRequirec605;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in t){var o=t[e];delete t[e];var n={id:e,exports:{}};return r[e]=n,o.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){t[e]=r},e.parcelRequirec605=o),o.register;var n=o("1BF7I");o("lTDtW");let a=(0,n.html)`${e=>(0,n.html)`<div>
        <h1>Informations supplémentaires</h1>
        <nav>
            <a href='profile'>Profile</a>
            <a href='compte'>Compte</a>
            <a href='inscriptions'>S'inscrire aux cours</a>
            <a href='/' id='logout'>Déconnexion</a>
        </nav>
    </div>`}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("logout");e&&e.addEventListener("click",e=>{e.preventDefault(),localStorage.clear(),sessionStorage.clear(),window.location.href="/"})}),(0,n.render)(a);
//# sourceMappingURL=index.c1946eaa.js.map
