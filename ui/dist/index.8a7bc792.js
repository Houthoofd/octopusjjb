var e=globalThis,t={},a={},r=e.parcelRequired5b2;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequired5b2=r),r.register;var o=r("5D1XK");r("RKbfs");let n=(0,o.html)`${e=>{let t="";return localStorage.getItem("first_name")&&console.log(t=localStorage.getItem("first_name")||""),(0,o.html)`<div class='home'>
        <header class='header'>
            <nav class='navbar-middle'>
                <a href='#'>Acceuil</a>
                <a href='#'>Enfants</a>
                <a href='#'>Contact</a>
                <a href='pages/connexion' id='login'>Connexion</a>
            </nav>
            <nav class='navbar-right'>
                <a href='pages/profile'>${t}</a>
                <a href='/' id='logout'>Déconnexion</a>
            </nav>
        </header>
        <h1>Home 1234</h1>
    </div>`}}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("logout");if(localStorage.getItem("isLogged")){localStorage.getItem("isLogged");let e=document.getElementById("login");e?.setAttribute("class","hidden")}else e?.setAttribute("class","hidden");e&&e.addEventListener("click",e=>{e.preventDefault(),console.log(localStorage),localStorage.clear(),window.location.href="/"})}),(0,o.render)(n);
//# sourceMappingURL=index.8a7bc792.js.map
