var e=globalThis,t={},i={},o=e.parcelRequirec605;function n(e,t,i,o){var n,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a}null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in i){var o=i[e];delete i[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},e.parcelRequirec605=o),o.register,"function"==typeof SuppressedError&&SuppressedError;var s=o("1BF7I"),a=o("5OQrz");o("lTDtW"),o("2LYUy");class r extends s.WebComponent{}r=n([(0,s.customElement)({name:"main-home",template:(0,s.html)`${e=>(0,s.html)`<div>
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
        </div>`}`,styles:[(0,s.css)`
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
        .schedule-row:last-child {
            border-bottom: none;
        }

        .day, .time, .arrow {
            font-size: 18px;
        }

        .arrow {
            font-size: 24px;
        }
        .container {
            width: 90%;
            max-width: 1200px;
            margin: 50px auto;
            text-align: center;
        }

        .header h1 {
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        .header h2 {
            font-size: 16px;
            color: #cccccc;
            margin-bottom: 10px;
        }

        .plans-container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 30px;
        }
        .plan {
            background-color: #003366;
            border-radius: 15px;
            padding: 20px;
            width: 300px;
            margin: 10px;
            text-align: center;
        }

        .plan-content .number {
            font-size: 48px;
            font-weight: bold;
            color: #66ccff;
        }

        .plan-content p {
            font-size: 16px;
            margin: 15px 0;
        }

        .plan-image img {
            width: 80px;
            height: auto;
            margin-top: 10px;
        }
        footer {
            background-color: #002244;
            color: white;
            padding: 20px;
            font-family: 'Arial', sans-serif;
        }

        .footer-container {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .footer-column {
            width: 30%;
        }

        .footer-column h3 {
            margin-bottom: 15px;
            font-size: 18px;
        }

        .footer-column ul {
            list-style: none;
            padding: 0;
        }

        .footer-column ul li {
            margin-bottom: 10px;
        }

        .footer-column ul li a {
            color: white;
            text-decoration: none;
        }

        .footer-column ul li a:hover {
            text-decoration: underline;
        }

        .footer-bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .footer-bottom p {
            margin: 0;
        }

        .footer-icons {
            display: flex;
        }

        .footer-icons a {
            margin-left: 15px;
        }

        .footer-icons img {
            width: 24px;
            height: 24px;
        }
        section#réservation {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
section#réservation > h3{
  font-size: 36px;
}
section#réservation > form {
  min-height: 0;
  display: none;
}

section#réservation > form.active {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
}

.table-infos {
  display: grid;
  align-items: center;
  width: 100%;
}
section#réservation > form > .table-infos .raw-infos {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 10px 10px;
}
section#réservation > form > .table-infos .raw-infos {
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 10px 10px;
  cursor: pointer;
}
section#réservation > form > .table-infos .raw-infos:nth-child(odd) {
  background-color: #9e9e9e59;
}

section#réservation > form > .table-infos .raw-infos:nth-child(even) {
  background-color: #9e9e9e17;
}
.type-de-cours-infos {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 10px;
  width: 12ch;
}
.heure-fin-infos {
  padding: 10px 10px;
  width: 12ch;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.heure-debut-infos {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 10px;
  width: 12ch;
}
.date-infos {
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
}
.down-arrow {
  cursor: pointer;
  background-color: #0350f4b0;
  justify-content: center;
  padding: 10px 10px;
  border-radius: 3px;
}
button.inscription {
  padding: 10px 10px;
  border: none;
  border-radius: 3px;
  background-color: #5b32a3b8;
  color: #ffff;
  cursor: pointer;
}
.raw-infos {
  cursor: pointer;
  justify-content: space-between;
  display: flex;
  flex-direction: column-reverse;
}
.row:nth-child(even){
  background-color:#004080;
}
.row:nth-child(odd){
  background-color:#0958a7;
}
.course-container {
  color: black;
}

.row {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 10px;
  gap: 10px;
  text-align: center;
}

pf-modal.result-box {
  display: none;
}
pf-modal.result-box.active {
  display: block;
}
.selection {
  color: #3e8635;
  display: flex;
  justify-content: space-around;
  padding: 10px 10px;
  background-color: #f3faf2;
  margin-top: 10px;
}
        `],shadowOptions:{mode:"open"}})],r);class l extends s.WebComponent{}l=n([(0,s.customElement)({name:"main-section",template:(0,s.html)`${e=>(0,s.html)`<section>
            <slot></slot>
    </section>`}`})],l);class c extends s.WebComponent{}c=n([(0,s.customElement)({name:"main-footer",template:(0,s.html)`${e=>(0,s.html)`<footer>
            <slot></slot>
    </footer>`}`})],c);class d extends a.PfModalBox{}d=n([(0,s.customElement)({name:"custom-modal"})],d),(0,s.render)((0,s.html)`<main-home></main-home>`,document.body);
//# sourceMappingURL=index.fdef7c7c.js.map
