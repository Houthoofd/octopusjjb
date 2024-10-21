var t=globalThis,e={},i={},o=t.parcelRequirec605;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in i){var o=i[t];delete i[t];var n={id:t,exports:{}};return e[t]=n,o.call(n.exports,n,n.exports),n.exports}var l=Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(t,e){i[t]=e},t.parcelRequirec605=o),o.register;var n=o("1BF7I");o("lTDtW"),o("5OQrz"),o("2LYUy");let l=(0,n.html)`${t=>(localStorage.getItem("first_name")&&console.log(localStorage.getItem("first_name")||""),(0,n.html)`<div class='home'>
        <pf-masthead display-inline>
            <slot slot="brand">
                <img src="images/logo3.png">
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
            
        </section>
    </div>`)}`;document.addEventListener("DOMContentLoaded",()=>{let t=document.getElementById("logout");if(localStorage.getItem("isLogged")){localStorage.getItem("isLogged");let t=document.getElementById("login");t?.setAttribute("class","hidden")}else t?.setAttribute("class","hidden");t&&t.addEventListener("click",t=>{t.preventDefault(),console.log(localStorage),localStorage.clear(),window.location.href="/"})}),(0,n.render)(l);
//# sourceMappingURL=index.ed2cdd3d.js.map
