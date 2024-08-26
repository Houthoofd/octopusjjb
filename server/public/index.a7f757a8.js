var e=globalThis,a={},r={},t=e.parcelRequirec605;null==t&&((t=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,a){r[e]=a},e.parcelRequirec605=t),t.register;var n=t("1BF7I");t("lTDtW");let o=(0,n.html)`${e=>{let a="";return localStorage.getItem("first_name")&&console.log(a=localStorage.getItem("first_name")||""),(0,n.html)`<div class='home'>
        <header class='header'>
            <nav class='navbar-middle'>
                <a href='#'>Acceuil</a>
                <a href='#'>Enfants</a>
                <a href='#'>Contact</a>
                <a href='pages/connexion'>Connexion</a>
            </nav>
            <nav class='navbar-right'>
                <a href='pages/profile'>${a}</a>
                <a href='/' id='logout'>Déconnexion</a>
            </nav>
        </header>
        <h1>Home 1234</h1>
    </div>`}}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("logout");e&&e.addEventListener("click",e=>{e.preventDefault(),console.log(localStorage),localStorage.clear(),window.location.href="/"})}),(0,n.render)(o);
//# sourceMappingURL=index.a7f757a8.js.map
