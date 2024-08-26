var e=globalThis,t={},a={},o=e.parcelRequirec605;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequirec605=o),o.register;var r=o("1BF7I");o("lTDtW");let n=(0,r.html)`${e=>{let t="";return localStorage.getItem("first_name")&&console.log(t=localStorage.getItem("first_name")||""),(0,r.html)`<div class='home'>
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
    </div>`}}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("logout");if(localStorage.getItem("isLogged")){localStorage.getItem("isLogged");let e=document.getElementById("login");e?.setAttribute("class","hidden")}e&&e.addEventListener("click",e=>{e.preventDefault(),console.log(localStorage),localStorage.clear(),window.location.href="/"})}),(0,r.render)(n);
//# sourceMappingURL=index.88f18b9c.js.map
