var e=globalThis,t={},i={},o=e.parcelRequirec605;function n(e,t,i,o){var n,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(s=(a<3?n(s):a>3?n(t,i,s):n(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s}null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in i){var o=i[e];delete i[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},e.parcelRequirec605=o),o.register,"function"==typeof SuppressedError&&SuppressedError;var a=o("1BF7I"),s=o("5OQrz");o("lTDtW"),o("2LYUy");class r extends a.WebComponent{}r=n([(0,a.customElement)({name:"main-home",template:(0,a.html)`${e=>(0,a.html)`<div>
            <pf-masthead display-inline>
                <div slot="brand">
                    <div class="logo"></div>
                </div>
                <pf-action-list>
                    ${(0,a.repeat)(["Accueil","Horaires","Tarifs","Connexion"],(0,a.html)`${e=>(0,a.html)`<pf-action-list><pf-button>${e}</pf-button></pf-action-list>`}`)}
                </pf-action-list>
            </pf-masthead>

            <section>
                <h3>Plongez dans l'univers implacable du jiu jitsu Brésilien</h3>
            </section>

            <section>
                <h3>Entraînez-vous avec les meilleurs</h3>
                <span>Notre équipe d'enseignants d'élite vous offre une expérience d'apprentissage intense et sans compromis</span>
            </section>

            <section id="schedule">
                <h3>Entraînez-vous avec les meilleurs</h3>
                <div class="schedule-container">
                    ${(0,a.repeat)([{day:"Lundi",time:"19h30-21h15"},{day:"jeudi",time:"19h30-21h15"},{day:"Samedi",time:"12h00-13h30"},{day:"Dimanche",time:"14h15-16h00"}],(0,a.html)`${e=>(0,a.html)`
                            <div class="schedule-row">
                                <div class="day">${e.day}</div>
                                <div class="time">${e.time}</div>
                                <div class="arrow">→</div>
                            </div>
                            `}`)}
                </div>
            </section>

            <section id="tarifs">
                <div class="container">
                    <div class="header">
                        <h2>Tarifs</h2>
                        <h1>Choisissez parmi trois plans adaptés à vos besoins et votre budget.</h1>
                    </div>
                    <div class="plans-container">
                        ${(0,a.repeat)([{number:1,text:"Cours gratuit à la réservation",image:"image1.png"},{number:2,text:"Plan intermédiaire",image:"image2.png"},{number:3,text:"Plan premium",image:"image3.png"}],(0,a.html)`${e=>(0,a.html)`
                                    <div class="plan">
                                        <div class="plan-content">
                                            <span class="number">${e.number}</span>
                                            <p>${e.text}</p>
                                        </div>
                                        <div class="plan-image">
                                            <img src="${e.image}" alt="Plan ${e.number}">
                                        </div>
                                </div>
                                `}`)}
                    </div>
                </div>
            </section>

            <special-section></special-section>
            <main-footer></main-footer>
        </div>`}`,styles:[(0,a.css)`
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

        .logo{
            background-image: url(/images/logo3.png);
            background-size: contain;
            aspect-ratio: 1/1;
            height: 70px;
            background-repeat: no-repeat;
            background-position: center;
            margin: 10px 20px;
        }
        `],shadowOptions:{mode:"open"}})],r);class l extends a.WebComponent{attributeChangedCallback(e,t,i){"visible"===e&&(this.isVisible="true"===i),super.attributeChangedCallback(e,t,i)}displayForm(){this.isVisible=!this.isVisible,this.visible=this.isVisible?"true":"false"}getValues(){let e=this.shadowRoot?.querySelectorAll("input"),t=e?.[0].value||"",i=e?.[1].value||"";""===t||""===i?alert("Vous devez remplir les champs"):console.log("Nom:",t,"Email:",i)}constructor(...e){super(...e),this.selection=[],this.visible=null,this.isVisible=!1}}n([a.attr],l.prototype,"visible",void 0),n([(0,a.state)()],l.prototype,"isVisible",void 0),l=n([(0,a.customElement)({name:"special-section",template:(0,a.html)`${e=>(0,a.html)`
        <section id="reservation">
            <h3>Réservez maintenant</h3>
            <span>Ne manquez pas cette occasion d'essayer un cours gratuit</span>
            <pf-button @click="${()=>e.displayForm()}">Cliquez-ici</pf-button>
            ${e.isVisible?(0,a.html)`
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
                    <pf-button @click="${e=>e.getValues(e)}">Réservez</pf-button>
                </form>
            `:""}
        </section>
        `}`,styles:[(0,a.css)`
        section#reservation {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 20px;
        }
        section#reservation > h3{
            font-size: 36px;
        }
        section#reservation > form {
            min-height: 0;
            display: block;
        }
        section#reservation > form.active {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 10px;
        }
        `]})],l);class c extends a.WebComponent{}c=n([(0,a.customElement)({name:"main-footer",template:(0,a.html)`${e=>(0,a.html)`
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
        </footer>`}`,styles:[(0,a.css)`
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
        `]})],c);class p extends s.PfModalBox{}p=n([(0,a.customElement)({name:"custom-modal"})],p),(0,a.render)((0,a.html)`<main-home></main-home>`,document.body);
//# sourceMappingURL=index.1eb22717.js.map
