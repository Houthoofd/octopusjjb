var e=globalThis,r={},t={},n=e.parcelRequirec605;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},e.parcelRequirec605=n),n.register;var o=n("1BF7I");n("lTDtW");let i=(0,o.html)`${e=>(0,o.html)`<div>
        <h1>Compte</h1>
        <nav>
            <a href='profile'>Profile</a>
            <a href='inscriptions'>S'inscrire aux cours</a>
            <a href='informations'>Informations supplémentaires</a>
            <a href='/' id='logout'>Déconnexion</a>
        </nav>
    </div>`}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("logout");e&&e.addEventListener("click",e=>{e.preventDefault(),localStorage.clear(),window.location.href="/"})}),(0,o.render)(i);
//# sourceMappingURL=index.2fc06d7a.js.map
