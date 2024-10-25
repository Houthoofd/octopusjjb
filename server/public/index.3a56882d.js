var e=globalThis,t={},i={},o=e.parcelRequirec605;function n(e,t,i,o){var n,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r}null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in i){var o=i[e];delete i[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},e.parcelRequirec605=o),o.register,"function"==typeof SuppressedError&&SuppressedError;var s=o("1BF7I"),r=o("5OQrz");o("lTDtW"),o("2LYUy");class a extends s.WebComponent{}a=n([(0,s.customElement)({name:"main-home",template:(0,s.html)`${e=>(0,s.html)`<div>
            <pf-masthead display-inline>
                <div slot="brand">
                    <div class="logo"></div>
                </div>
                <pf-action-list>
                    ${(0,s.repeat)(["Accueil","Horaires","Tarifs","Connexion"],(0,s.html)`${e=>(0,s.html)`<pf-action-list><pf-button>${e}</pf-button></pf-action-list>`}`)}
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
                    ${(0,s.repeat)([{day:"Lundi",time:"19h30-21h15"},{day:"jeudi",time:"19h30-21h15"},{day:"Samedi",time:"12h00-13h30"},{day:"Dimanche",time:"14h15-16h00"}],(0,s.html)`${e=>(0,s.html)`
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
                        ${(0,s.repeat)([{number:1,text:"Cours gratuit à la réservation",image:"image1.png"},{number:2,text:"Plan intermédiaire",image:"image2.png"},{number:3,text:"Plan premium",image:"image3.png"}],(0,s.html)`${e=>(0,s.html)`
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

        .logo{
            background-image: url(/images/logo3.png);
            background-size: contain;
            aspect-ratio: 1/1;
            height: 70px;
            background-repeat: no-repeat;
            background-position: center;
            margin: 10px 20px;
        }
        `],shadowOptions:{mode:"open"}})],a);class l extends s.WebComponent{attributeChangedCallback(e,t,i){"visible"===e&&(this.isVisible="true"===i),super.attributeChangedCallback(e,t,i)}displayForm(){this.isVisible=!this.isVisible,this.visible=this.isVisible?"true":"false"}async getValues(){let e=this.shadowRoot?.querySelectorAll("input"),t=e?.[0].value||"",i=e?.[1].value||"";t&&i?(this.currentSelection.push({nom:t,email:i,cours:[]}),console.log(this.currentSelection)):alert("Vous devez remplir les champs")}selectRow(e){if(this.currentSelection.length>0){let t=this.currentSelection[this.currentSelection.length-1];t.cours.some(t=>t===e)?console.log("Ce cours est déjà sélectionné pour cet utilisateur."):(t.cours.push(e),console.log("Cours sélectionné:",e),console.log("Liste de sélection mise à jour:",this.currentSelection))}else console.log("Aucun utilisateur n'a été ajouté pour sélectionner un cours.")}deleteRow(e){}async preloadData(){try{let e=await fetch("http://localhost:3000/cours/",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Erreur serveur.");let t=await e.json();return t.length>0?t:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}formatDateFromISO(e){let t=new Date(e),i=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${i}-${o}-${n}`}convertToISODate(e){let[t,i,o]=e.split("-");return new Date(`${t}-${i}-${o}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.selection=[],this.currentSelection=[],this.visible=null,this.isVisible=!1}}n([s.attr],l.prototype,"visible",void 0),n([(0,s.state)()],l.prototype,"isVisible",void 0),l=n([(0,s.customElement)({name:"special-section",template:(0,s.html)`${e=>(0,s.html)`
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
                    <pf-panel scrollable class="result-box">
                        <slot name="header">
                            <h3>Ma réservation</h3>
                        </slot>
                        <slot>
                            <div class="table-infos">
                                ${(0,s.asyncAppend)(e.preloadData(),t=>(0,s.html)`
                                    <div class="raw-infos">
                                        ${(0,s.repeat)(t,(0,s.html)`${t=>(0,s.html)`
                                                        <div class="row" @click="${t=>e.selectRow(t)}">
                                                            <div class="type-de-cours">${t.type_cours}</div>
                                                            <div class="date">${e.formatDateFromISO(t.date_cours)}</div>
                                                            <div class="heure-debut">${t.heure_debut}</div>
                                                            <div class="heure-fin">${t.heure_fin}</div>
                                                        </div>`}`)}
                                    </div>
                                    `)}
                            </div>
                        </slot>
                        <slot name="extra-slot">
                             <div class="selection">
                                ${(0,s.repeat)(e.currentSelection,(0,s.html)`${t=>(console.log(t),(0,s.html)`
                                                <div class="selection">
                                                    <div class="type-de-cours">${t.type_cours}</div>
                                                    <div class="date">${e.formatDateFromISO(t.date_cours)}</div>
                                                    <div class="heure-debut">${t.heure_debut}</div>
                                                    <div class="heure-fin">${t.heure_fin}</div>
                                                    <div class="icon" @click="${t=>e.deleteRow(t)}"><pf-icons-trash-alt></pf-icons-trash-alt></div>
                                                </div>
                                            `)}`)}
                             </div>
                        </slot>
                    </pf-panel>
                    <pf-button @click="${()=>e.getValues()}">Réservez</pf-button>
                </form>
            `:""}
        </section>
        `}`,styles:[(0,s.css)`
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
        `]})],l);class c extends s.WebComponent{}c=n([(0,s.customElement)({name:"main-footer",template:(0,s.html)`${e=>(0,s.html)`
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
        </footer>`}`,styles:[(0,s.css)`
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
        `]})],c);class d extends r.PfModalBox{}d=n([(0,s.customElement)({name:"custom-modal"})],d),(0,s.render)((0,s.html)`<main-home></main-home>`,document.body);
//# sourceMappingURL=index.3a56882d.js.map
