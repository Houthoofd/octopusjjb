var e=globalThis,i={},t={},o=e.parcelRequirec605;function n(e,i,t,o){var n,s=arguments.length,a=s<3?i:null===o?o=Object.getOwnPropertyDescriptor(i,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,i,t,o);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(a=(s<3?n(a):s>3?n(i,t,a):n(i,t))||a);return s>3&&a&&Object.defineProperty(i,t,a),a}null==o&&((o=function(e){if(e in i)return i[e].exports;if(e in t){var o=t[e];delete t[e];var n={id:e,exports:{}};return i[e]=n,o.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,i){t[e]=i},e.parcelRequirec605=o),o.register,"function"==typeof SuppressedError&&SuppressedError;var s=o("1BF7I"),a=o("5OQrz");o("lTDtW"),o("2LYUy");class r extends s.WebComponent{}r=n([(0,s.customElement)({name:"main-home",template:(0,s.html)`${e=>(0,s.html)`<div>
    <pf-masthead display-inline>
        <div slot="brand">
            <div class="logo"></div>
        </div>
        <pf-action-list>
            <pf-action-list-item><pf-button>Accueil</pf-button></pf-action-list-item>
            <pf-action-list-item><pf-button>Horaires</pf-button></pf-action-list-item>
            <pf-action-list-item><pf-button>Tarifs</pf-button></pf-action-list-item>
            <pf-action-list-item><pf-button>Connexion</pf-button></pf-action-list-item>
        </pf-action-list>
    </pf-masthead>

    <section>
        <h3>Plonger dans l'univers implacable du jiu jitsu Brésilien</h3>
    </section>

    <section>
        <h3>Entraînez-vous avec les meilleurs</h3>
        <span>Notre équipe d'enseignants d'élite vous offre une expérience d'apprentissage intense et sans compromis</span>
    </section>

    <section id="schedule">
        <h3>Entraînez-vous avec les meilleurs</h3>
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
            <!-- Continue with other days... -->
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
                <!-- Continue with other plans... -->
            </div>
        </div>
    </section>

    <main-section></main-section>
    <main-footer></main-footer>
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
            display: none;
        }
        section#reservation > form.active {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 10px;
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
        `],shadowOptions:{mode:"open"}})],r);class l extends s.WebComponent{attributeChangedCallback(e,i,t){"visible"===e&&(this.isVisible="true"===t),super.attributeChangedCallback(e,i,t)}displayForm(){this.isVisible=!this.isVisible,this.visible=this.isVisible?"true":"false"}constructor(...e){super(...e),this.visible=null,this.isVisible=!1}}n([s.attr],l.prototype,"visible",void 0),n([(0,s.state)()],l.prototype,"isVisible",void 0),l=n([(0,s.customElement)({name:"main-section",template:(0,s.html)`${e=>(0,s.html)`
        <section id="reservation">
    <h3>Réservez maintenant</h3>
    <span>Ne manquez pas cette occasion d'essayer un cours gratuit</span>
    <pf-button @click="${()=>e.displayForm()}">Cliquez-ici</pf-button>
    ${e.isVisible?(0,s.html)`
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
    `:""}
</section>
        `}`})],l);class c extends s.WebComponent{}c=n([(0,s.customElement)({name:"main-footer",template:(0,s.html)`${e=>(0,s.html)`
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
        </footer>`}`})],c);class p extends a.PfModalBox{}p=n([(0,s.customElement)({name:"custom-modal"})],p),(0,s.render)((0,s.html)`<main-home></main-home>`,document.body);
//# sourceMappingURL=index.b0742eb7.js.map
