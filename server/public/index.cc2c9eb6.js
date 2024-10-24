var e=globalThis,i={},s={},t=e.parcelRequirec605;function a(e,i,s,t){var a,o=arguments.length,l=o<3?i:null===t?t=Object.getOwnPropertyDescriptor(i,s):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,i,s,t);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(l=(o<3?a(l):o>3?a(i,s,l):a(i,s))||l);return o>3&&l&&Object.defineProperty(i,s,l),l}null==t&&((t=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var a={id:e,exports:{}};return i[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,i){s[e]=i},e.parcelRequirec605=t),t.register,"function"==typeof SuppressedError&&SuppressedError;var o=t("1BF7I"),l=t("5OQrz");t("lTDtW"),t("2LYUy");class n extends o.WebComponent{}n=a([(0,o.customElement)({name:"main-home",template:(0,o.html)`${e=>(0,o.html)`<div>
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
                <slot>
                    <h3>Plonger dans l'univers implaccable du jiu jitsu Brésilien</h3>
                </slot>
            </section>
            <section>
                <slot>
                    <h3>Entraîner-vous avec les meilleurs</h3>
                    <span>Notre équipe d'enseignants d'élite vous offre une expérience d'apprentissage intense et sans compromis</span>
                </slot>
            </section>
            <section id="schedule">
                <slot>
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
                </slot>
            </section>
            <section id="tarifs">
                <slot>
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
                </slot>
            </section>
            <section id="reservation">
                <slot>
                    <h3>Réservez maintenant</h3>
            <span>Ne manquer pas cette occasion d'esseyer un cours gratuit</span>
            <pf-button>Cliquez-ici</pf-button>
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
            </form>
                </slot>
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
                <a href="#"><pf-icons-instagram></pf-icons-instagram></a>
                <a href="#"><img src="twitter-icon.png" alt="Twitter"></a>
                </div>
            </div>
            </footer>
        </div>`}`,styles:[(0,o.css)`
        .schedule-container {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 400px;
            margin: 50px auto;
            border: 1px solid #004080;
            padding: 10px;
        }
        .schedule-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #004080;
            padding: 15px 0;
        }
        `],shadowOptions:{mode:"open"}})],n);class r extends o.WebComponent{}r=a([(0,o.customElement)({name:"main-section",template:(0,o.html)`${e=>(0,o.html)`<section>
            <slot></slot>
    </section>`}`})],r);class c extends o.WebComponent{}c=a([(0,o.customElement)({name:"main-footer",template:(0,o.html)`${e=>(0,o.html)`<footer>
            <slot></slot>
    </footer>`}`})],c);class d extends l.PfModalBox{}d=a([(0,o.customElement)({name:"custom-modal"})],d),(0,o.render)((0,o.html)`<main-home></main-home>`,document.body);
//# sourceMappingURL=index.cc2c9eb6.js.map
