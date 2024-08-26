var e=globalThis,a={},r={},t=e.parcelRequirec605;null==t&&((t=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,a){r[e]=a},e.parcelRequirec605=t),t.register;var o=t("1BF7I");t("lTDtW");let n=(0,o.html)`${e=>{let a="";return localStorage.getItem("first_name")&&console.log(a=localStorage.getItem("first_name")||""),(0,o.html)`<div class='home'>
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
    </div>`}}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("logout");localStorage.getItem("isLogged")&&console.log(first_name=localStorage.getItem("first_name")||""),e&&e.addEventListener("click",e=>{e.preventDefault(),console.log(localStorage),localStorage.clear(),window.location.href="/"})}),(0,o.render)(n);
//# sourceMappingURL=index.843694a3.js.map
