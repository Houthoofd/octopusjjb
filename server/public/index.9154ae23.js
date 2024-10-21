var t=globalThis,e={},o={},i=t.parcelRequirec605;null==i&&((i=function(t){if(t in e)return e[t].exports;if(t in o){var i=o[t];delete o[t];var n={id:t,exports:{}};return e[t]=n,i.call(n.exports,n,n.exports),n.exports}var l=Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(t,e){o[t]=e},t.parcelRequirec605=i),i.register;var n=i("1BF7I");i("lTDtW"),i("5OQrz"),i("2LYUy");let l=(0,n.html)`${t=>(localStorage.getItem("first_name")&&console.log(localStorage.getItem("first_name")||""),(0,n.html)`<div class='home'>
        <pf-masthead display-inline>
            <slot slot="brand">
                <div class="logo"></div>
            </slot>
            <pf-action-list>
                <pf-action-list-item>
                    <pf-button>Acceuil</pf-button>
                </pf-action-list-item>
                <pf-action-list-item>
                    <pf-button>Horaires</pf-button>
                </pf-action-list-item>
                <pf-action-list-item>
                    <pf-button>Tarifs</pf-button>
                </pf-action-list-item>
                <pf-action-list-item>
                    <pf-button>Connexion</pf-button>
                </pf-action-list-item>
            </pf-action-list>
        </pf-masthead>
        <section>
            <h3>Plonger dans l'univers implaccable du jiu jitsu Brésilien</h3>
        </section>
        <section>
            <h3>Entraîner-vous avec les meilleurs</h3>
            <span>Notre équipe d'enseignants d'élite vous offre une expérience d'apprentissage intense et sans compromis</span>
        </section>
        <footer>

        </footer>
    </div>`)}`;document.addEventListener("DOMContentLoaded",()=>{let t=document.getElementById("logout");if(localStorage.getItem("isLogged")){localStorage.getItem("isLogged");let t=document.getElementById("login");t?.setAttribute("class","hidden")}else t?.setAttribute("class","hidden");t&&t.addEventListener("click",t=>{t.preventDefault(),console.log(localStorage),localStorage.clear(),window.location.href="/"})}),(0,n.render)(l);
//# sourceMappingURL=index.9154ae23.js.map
