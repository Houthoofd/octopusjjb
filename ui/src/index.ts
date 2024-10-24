import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import { PfModalBox } from 'unofficial-pf-v5-wc';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';

@customElement({
    name: "main-home",
    template: html`${(home: Home) => {
        const buttons = ['Accueil', 'Horaires', 'Tarifs', 'Connexion'];
        const schedule = [
            { day: 'Lundi', time: '19h30-21h15' },
            { day: 'jeudi', time: '19h30-21h15' },
            { day: 'Samedi', time: '12h00-13h30' },
            { day: 'Dimanche', time: '14h15-16h00' },
        ];
        const plans = [
            { number: 1, text: 'Cours gratuit à la réservation', image: 'image1.png' },
            { number: 2, text: 'Plan intermédiaire', image: 'image2.png' },
            { number: 3, text: 'Plan premium', image: 'image3.png' }
        ];

        return html`<div>
            <pf-masthead display-inline>
                <div slot="brand">
                    <div class="logo"></div>
                </div>
                <pf-action-list>
                    ${buttons.map(button => html`<pf-action-list-item><pf-button>${button}</pf-button></pf-action-list-item>`)}
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
                    ${schedule.map(item => html`
                        <div class="schedule-row">
                            <div class="day">${item.day}</div>
                            <div class="time">${item.time}</div>
                            <div class="arrow">→</div>
                        </div>
                    `)}
                </div>
            </section>

            <section id="tarifs">
                <div class="container">
                    <div class="header">
                        <h2>Tarifs</h2>
                        <h1>Choisissez parmi trois plans adaptés à vos besoins et votre budget.</h1>
                    </div>
                    <div class="plans-container">
                        ${plans.map(plan => html`
                            <div class="plan">
                                <div class="plan-content">
                                    <span class="number">${plan.number}</span>
                                    <p>${plan.text}</p>
                                </div>
                                <div class="plan-image">
                                    <img src="${plan.image}" alt="Plan ${plan.number}">
                                </div>
                            </div>
                        `)}
                    </div>
                </div>
            </section>

            <main-section></main-section>
            <main-footer></main-footer>
        </div>`
    }}`,
    styles: [ 
        css`
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
        `
    ],
    shadowOptions: { mode: 'open' }
})
export class Home extends WebComponent {}


@customElement({
    name: "main-section",
    template: html`${(section: Section) => {
        return html`
        <section id="reservation">
    <h3>Réservez maintenant</h3>
    <span>Ne manquez pas cette occasion d'essayer un cours gratuit</span>
    <pf-button @click="${() => section.displayForm()}">Cliquez-ici</pf-button>
    ${section.isVisible ? html`
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
    ` : ''}
</section>
        `
    }}`,
    styles : [
        css`
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
        `
    ]
})
export class Section extends WebComponent {
    @attr visible: "true" | "false" | null = null;

    @state() isVisible: boolean = false;

    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
        if (name === "visible") {
            this.isVisible = newValue === "true";
        }
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    displayForm() {
        this.isVisible = !this.isVisible;
        this.visible = this.isVisible ? "true" : "false";
    }
}

@customElement({
    name: "main-footer",
    template: html`${(footer: Footer) => {
        return html`
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
        </footer>`
    }}`,
    styles : [
        css`
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
        `
    ]
})
export class Footer extends WebComponent{

}

@customElement({
    name: "custom-modal",
})
export class Modal extends PfModalBox{

}


// function displaySelection(){
//     const storedSelection = localStorage.getItem('selectionArray');
//     const form = document.querySelectorAll('form')[0];
//     console.log(storedSelection);
// }


// function displayForm() {
//     const form = document.querySelectorAll('form')[0];
//     const storedSelection = localStorage.getItem('selectionArray');
//     form.classList.toggle('active');
//     console.log(storedSelection)
// }

// function displayClasses(){
//     const modal = document.querySelectorAll('pf-modal')[0];
//     modal.classList.toggle('active');
// }

// function confirm(){
    
// }


// let selectionArray = JSON.parse(localStorage.getItem('selectionArray') || '[]');

// function selectRow(cour) {
//     const selectionElement = document.querySelector('.selection') as HTMLElement;


//     if (selectionArray.length > 0) {
//         alert('Veuillez d\'abord supprimer la sélection actuelle avant d\'en ajouter une nouvelle.');
//         return;
//     }

//     const selectionTemplate = html`
//         <div class="type-de-cours">${cour.type_cours}</div>
//         <div class="date">${formatDateFromISO(cour.date_cours)}</div>
//         <div class="heure-debut">${cour.heure_debut}</div>
//         <div class="heure-fin">${cour.heure_fin}</div>
//         <div class="delete" @click=${() => deleteSelection(cour)}><pf-icons-trash-alt></pf-icons-trash-alt></div>
//     `;

//     if (selectionElement) {
    
//         selectionArray.push({
//             cour: cour.type_cours,
//             date: formatDateFromISO(cour.date_cours),
//             heure_debut: cour.heure_debut,
//             heure_fin: cour.heure_fin
//         });

//         localStorage.setItem('selectionArray', JSON.stringify(selectionArray));

//         console.log(selectionArray);
//         render(selectionTemplate, selectionElement);
//     } else {
//         console.error('Élément .selection introuvable');
//     }

//     displayExistingSelection();
// }

// function displayExistingSelection() {
//     const selectionElement = document.querySelector('.selection') as HTMLElement;

//     selectionArray.forEach(cour => {
//         const selectionTemplate = html`
//             <div class="type-de-cours">${cour.cour}</div>
//             <div class="date">${cour.date}</div>
//             <div class="heure-debut">${cour.heure_debut}</div>
//             <div class="heure-fin">${cour.heure_fin}</div>
//             <div class="delete" @click=${() => deleteSelection(cour)}><pf-icons-trash-alt></pf-icons-trash-alt></div>
//         `;

//         render(selectionTemplate, selectionElement);
//     });
// }

// function deleteSelection(cour) {
//     selectionArray = selectionArray.filter(
//         (item) => item.cour !== cour.type_cours || item.date !== formatDateFromISO(cour.date_cours)
//     );

//     localStorage.setItem('selectionArray', JSON.stringify(selectionArray));

//     console.log(selectionArray);

//     const selectionElement = document.querySelector('.selection');
//     if (selectionElement) {
//         selectionElement.innerHTML = '';
//     }
// }




// const preloadData: Promise<any[]> = new Promise((next, reject) => {
//     fetch('http://localhost:3000/cours/', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(response => {
//         if (!response.ok) {
//             reject('Erreur serveur.');
//             throw new Error('Erreur serveur.');
//         }
//         return response.json();
//     })
//     .then(data => {
//         if (data.length > 0) {
//             console.log('Réponse du serveur:', data);
//             next(data);  // Retourne tout le tableau de cours ici
//         } else {
//             next([]);  // Retourne un tableau vide si aucun cours
//         }
//     })
//     .catch(error => {
//         console.error('Erreur lors de la requête fetch:', error);
//         reject(error);
//     });
// });



// function formatDateFromISO(isoDateString) {
//     const date = new Date(isoDateString);
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const day = String(date.getDate()).padStart(2, '0');
//     return `${year}-${month}-${day}`;
// }

// function convertToISODate(dateString) {
//     const [year, month, day] = dateString.split('-');
//     return new Date(`${year}-${month}-${day}T00:00:00Z`).toISOString();
// }




render(html`<main-home></main-home>`, document.body);