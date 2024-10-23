var e=globalThis,i={},s={},t=e.parcelRequirec605;null==t&&((t=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var a={id:e,exports:{}};return i[e]=a,t.call(a.exports,a,a.exports),a.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,i){s[e]=i},e.parcelRequirec605=t),t.register;var a=t("1BF7I");t("lTDtW"),t("5OQrz"),t("2LYUy");let l=(0,a.html)`${e=>(e.createConsumable("selection",[]),localStorage.getItem("first_name")&&console.log(localStorage.getItem("first_name")||""),(0,a.html)`<div class='home'>
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
        <section id="univers">
            <h3>Plonger dans l'univers implaccable du jiu jitsu Brésilien</h3>
        </section>
        <section id="slogan">
            <h3>Entraîner-vous avec les meilleurs</h3>
            <span>Notre équipe d'enseignants d'élite vous offre une expérience d'apprentissage intense et sans compromis</span>
        </section>
        <section id="horaires">
            <h3>Entraîner-vous avec les meilleurs</h3>
                <div class="schedule-container">
                    <div class="schedule-row">
                        <div class="day">Lundi</div>
                        <div class="time">17h-19h</div>
                        <div class="arrow">→</div>
                    </div>
                    <div class="schedule-row">
                        <div class="day">Mardi</div>
                        <div class="time">18h-20h</div>
                        <div class="arrow">→</div>
                    </div>
                    <div class="schedule-row">
                        <div class="day">Mercredi</div>
                        <div class="time">19h-21h</div>
                        <div class="arrow">→</div>
                    </div>
                    <div class="schedule-row">
                        <div class="day">Jeudi</div>
                        <div class="time">20h-22h</div>
                        <div class="arrow">→</div>
                    </div>
                    <div class="schedule-row">
                        <div class="day">Samedi</div>
                        <div class="time">10h-12h</div>
                        <div class="arrow">→</div>
                    </div>
                </div>
        </section>
        <section id="tarifs">
            <div class="container">
                <div class="header">
                    <h2>Tarifs</h2>
                    <h1>Choisissez parmi trois plans adaptés à vos besoins et votre budget.</h1>
                </div>

                <div class="plans-container">
                    <div class="plan">
                        <div class="plan-content">
                            <span class="number">1</span>
                            <p>Cours gratuit à la réservation</p>
                        </div>
                        <div class="plan-image">
                            <img src="image1.png" alt="Person icon">
                        </div>
                    </div>
                    <div class="plan">
                        <div class="plan-content">
                            <span class="number">2</span>
                            <p>Accès aux instructeurs à tout moment</p>
                        </div>
                        <div class="plan-image">
                            <img src="image2.png" alt="Person walking">
                        </div>
                    </div>
                    <div class="plan">
                        <div class="plan-content">
                            <span class="number">3</span>
                            <p>Instructeurs passionnés, prêts à vous accompagner</p>
                        </div>
                        <div class="plan-image">
                            <img src="image3.png" alt="Instructor icon">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="réservation">
            <h3>Réservez maintenant</h3>
            <span>Ne manquer pas cette occasion d'esseyer un cours gratuit</span>
                <div>
                    ${(0,a.asyncAppend)(o,e=>(console.log(e),(0,a.html)`
                        <div>
                            <p>Cours trouvés : ${e.length}</p>
                            <ul>
                            ${(0,a.repeat)(e,e=>(0,a.html)`<li>${e.type_cours}</li>`)}
                            </ul>
                        </div>
                        `))}
                </div>
            <pf-button primary>Cliquez-ici</pf-button>
            <form>
                <div>
                    <label for='name'>Nom</label>
                    <input type='text'>
                </div>
                <div>
                    <label for='mail'>Mail</label>
                    <input type='email'>
                </div>
                <div class='table-infos'></div>
                <pf-modal class='result-box' scrollable medium>
                    <slot slot="header">
                        <h3>Ma réservation</h3>
                    </slot>
                    <slot></slot>
                </pf-modal>
                <pf-button>Réservez</pf-button>
            </form>
        </section>
        <footer>
            <div class="footer-container">
                <div class="footer-column">
                <h3>Emplacement</h3>
                <ul>
                    <li><a href="#">Nous trouver</a></li>
                    <li><a href="#">Plan d'accès</a></li>
                    <li><a href="#">Transports</a></li>
                </ul>
                </div>
                <div class="footer-column">
                <h3>Cours</h3>
                <ul>
                    <li><a href="#">Horaires</a></li>
                    <li><a href="#">Prix</a></li>
                    <li><a href="#">Instructeurs</a></li>
                </ul>
                </div>
                <div class="footer-column">
                <h3>Extras</h3>
                <ul>
                    <li><a href="#">Galerie photo</a></li>
                    <li><a href="#">Événements</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Tous les droits sont réservés</p>
                <div class="footer-icons">
                <a href="#"><img src="instagram-icon.png" alt="Instagram"></a>
                <a href="#"><img src="twitter-icon.png" alt="Twitter"></a>
                </div>
            </div>
        </footer>
    </div>`)}`;const o=new Promise((e,i)=>{fetch("http://localhost:3000/cours/",{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>{if(!e.ok)throw i("Erreur serveur."),Error("Erreur serveur.");return e.json()}).then(i=>{i.length>0?(console.log("Réponse du serveur:",i),e(i)):e([])}).catch(e=>{console.error("Erreur lors de la requête fetch:",e),i(e)})});document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll("pf-button")[4],i=document.querySelectorAll("pf-button")[5],s=document.querySelectorAll("form")[0];document.querySelectorAll(".table-infos")[0],e.addEventListener("click",e=>{console.log(i),s.classList.toggle("active")}),console.log(e,i,s);let t=document.getElementById("logout");if(localStorage.getItem("isLogged")){localStorage.getItem("isLogged");let e=document.getElementById("login");e?.setAttribute("class","hidden")}else t?.setAttribute("class","hidden");t&&t.addEventListener("click",e=>{e.preventDefault(),console.log(localStorage),localStorage.clear(),window.location.href="/"})}),(0,a.render)(l);
//# sourceMappingURL=index.8e368433.js.map
