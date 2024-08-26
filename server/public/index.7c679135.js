var e=globalThis,a={},o={},t=e.parcelRequirec605;null==t&&((t=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,a){o[e]=a},e.parcelRequirec605=t),t.register;var r=t("1BF7I");t("lTDtW");let n=(0,r.html)`${e=>{let a="";return localStorage.getItem("first_name")&&console.log(a=localStorage.getItem("first_name")||""),(0,r.html)`<div class='home'>
        <header class='header'>
            <nav class='navbar-middle'>
                <a href='#'>Acceuil</a>
                <a href='#'>Enfants</a>
                <a href='#'>Contact</a>
                <a href='pages/connexion' id='login'>Connexion</a>
            </nav>
            <nav class='navbar-right'>
                <a href='pages/profile'>${a}</a>
                <a href='/' id='logout'>Déconnexion</a>
            </nav>
        </header>
        <h1>Home 1234</h1>
    </div>`}}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("logout");localStorage.getItem("isLogged")&&(localStorage.getItem("isLogged"),console.log(document.getElementById("login"))),e&&e.addEventListener("click",e=>{e.preventDefault(),console.log(localStorage),localStorage.clear(),window.location.href="/"})}),(0,r.render)(n);
//# sourceMappingURL=index.7c679135.js.map
