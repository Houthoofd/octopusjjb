import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';

  


let template: ViewTemplate<any> = html`${(context: ViewContext) => {
    
    context.createConsumable('selection',[]);

    let first_name = "";

    if (localStorage.getItem("first_name")) {
        first_name = localStorage.getItem("first_name") || "";
        console.log(first_name);
    }

    return html`<div class='home'>
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
            <pf-button primary @click=${() => displayForm()}>Cliquez-ici</pf-button>
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
                    <slot>
                        <div class="table-infos">
                            ${asyncAppend(preloadData, (result) => {
                                return html`
                                <div class="raw-infos">
                                        ${
                                            repeat(
                                                result, 
                                                html`${(cour) => {
                                                    return html`<div class="row" @click=${(cour) => selectRow(cour, context)}>
                                                        <div class="type-de-cours">${cour.type_cours}</div>
                                                        <div class="date">${formatDateFromISO(cour.date_cours)}</div>
                                                        <div class="heure-debut">${cour.heure_debut}</div>
                                                        <div class="heure-fin">${cour.heure_fin}</div>
                                                    </div>`;

                                                }}`
                                            )}
                                    </div>
                                </div>
                                `;
                            })}
                        </div>
                    </slot>
                    <div name="extra-slot">
                        <div class="selection" ${children({ property: 'selection' })}></div>
                    </div>
                </pf-modal>
                <pf-button @click=${() => displayClasses()}>Réservez</pf-button>
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
                <a href="#"><pf-icons-instagram></pf-icons-instagram></a>
                <a href="#"><img src="twitter-icon.png" alt="Twitter"></a>
                </div>
            </div>
        </footer>
    </div>`;
}}`;


function displayForm() {
    const form = document.querySelectorAll('form')[0];
    form.classList.toggle('active');
}

function displayClasses(){
    const modal = document.querySelectorAll('pf-modal')[0];
    modal.classList.toggle('active');
}


function selectRow(cour, context) {

    const selection = document.querySelector('.selection') as HTMLElement;

    if (context.selection.length > 0) {
        alert('Veuillez d\'abord supprimer la sélection actuelle avant d\'en ajouter une nouvelle.');
        return;
    }

    const selectionTemplate = html`
        <div class="type-de-cours">${cour.type_cours}</div>
        <div class="date">${formatDateFromISO(cour.date_cours)}</div>
        <div class="heure-debut">${cour.heure_debut}</div>
        <div class="heure-fin">${cour.heure_fin}</div>
        <div class="delete" @click=${(cour) => deleteSelection(cour, context)}><pf-icons-trash-alt></pf-icons-trash-alt></div>
    `;

    if (selection) {
        context.selection = [{
            cour: cour.type_cours,
            date: formatDateFromISO(cour.date_cours),
            heure_debut: cour.heure_debut,
            heure_fin: cour.heure_fin
        }];
        console.log(context.selection)
        render(selectionTemplate, selection);
    } else {
        console.error('Élément .selection introuvable');
    }
}

function deleteSelection(cour, context){
    console.log(context.selection);
}


const preloadData: Promise<any[]> = new Promise((next, reject) => {
    fetch('http://localhost:3000/cours/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            reject('Erreur serveur.');
            throw new Error('Erreur serveur.');
        }
        return response.json();
    })
    .then(data => {
        if (data.length > 0) {
            console.log('Réponse du serveur:', data);
            next(data);  // Retourne tout le tableau de cours ici
        } else {
            next([]);  // Retourne un tableau vide si aucun cours
        }
    })
    .catch(error => {
        console.error('Erreur lors de la requête fetch:', error);
        reject(error);
    });
});



function formatDateFromISO(isoDateString) {
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function convertToISODate(dateString) {
    const [year, month, day] = dateString.split('-');
    return new Date(`${year}-${month}-${day}T00:00:00Z`).toISOString();
}




render(template);