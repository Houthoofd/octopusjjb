var e=globalThis,s={},t={},i=e.parcelRequirec605;null==i&&((i=function(e){if(e in s)return s[e].exports;if(e in t){var i=t[e];delete t[e];var o={id:e,exports:{}};return s[e]=o,i.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,s){t[e]=s},e.parcelRequirec605=i),i.register;var o=i("1BF7I");i("lTDtW"),i("5OQrz"),i("2LYUy");let a=(0,o.html)`${e=>(e.createConsumable("selection",[]),localStorage.getItem("first_name")&&console.log(localStorage.getItem("first_name")||""),(0,o.html)`<div class='home'>
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
                    ${(0,o.asyncAppend)(l,e=>(console.log(e),(0,o.html)`
                        <div>
                            <p>Cours trouvés : ${e.length}</p>
                            <ul>
                                ${(0,o.repeat)(e,e=>(console.log(e),(0,o.html)`
                                        <li>
                                            <p><strong>Type de cours:</strong> ${e.type_cours}</p>
                                            <p><strong>Date:</strong> ${new Date(e.date_cours).toLocaleDateString("fr-FR")}</p>
                                            <p><strong>Heure de début:</strong> ${e.heure_debut}</p>
                                            <p><strong>Heure de fin:</strong> ${e.heure_fin}</p>
                                        </li>
                                    `))}
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
    </div>`)}`;const l=new Promise((e,s)=>{fetch("http://localhost:3000/cours/",{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>{if(!e.ok)throw s("Erreur serveur."),Error("Erreur serveur.");return e.json()}).then(s=>{s.length>0?(console.log("Réponse du serveur:",s),e(s)):e([])}).catch(e=>{console.error("Erreur lors de la requête fetch:",e),s(e)})});document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll("pf-button")[4],s=document.querySelectorAll("pf-button")[5],t=document.querySelectorAll("form")[0];document.querySelectorAll(".table-infos")[0],e.addEventListener("click",e=>{console.log(s),t.classList.toggle("active")}),console.log(e,s,t);let i=document.getElementById("logout");if(localStorage.getItem("isLogged")){localStorage.getItem("isLogged");let e=document.getElementById("login");e?.setAttribute("class","hidden")}else i?.setAttribute("class","hidden");i&&i.addEventListener("click",e=>{e.preventDefault(),console.log(localStorage),localStorage.clear(),window.location.href="/"})}),(0,o.render)(a);
//# sourceMappingURL=index.91d7fd70.js.map
