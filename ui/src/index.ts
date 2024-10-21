import { render , html, ViewTemplate , ViewContext } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';


let template: ViewTemplate<any> = html`${(context: ViewContext) => {
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
    </div>`;
}}`;

document.addEventListener('DOMContentLoaded', () => {
    const btn1 = document.querySelectorAll('pf-button')[4];
    const btn2 = document.querySelectorAll('pf-button')[5];
    const form = document.querySelectorAll('form')[0];
    const tableResult = document.querySelectorAll('.table-infos')[0];

    btn1.addEventListener('click', (e) => {
        console.log(btn2);
        
        form.classList.toggle('active');
    
        
        const handleBtn2Click = (e) => {
            const nameInput = document.querySelectorAll('input')[0].value;
            const emailInput = document.querySelectorAll('input')[1].value;
            const modal = document.querySelectorAll('pf-modal')[0];
            console.log(modal)
        
            modal.innerHTML = '';
            modal.classList.toggle('active');
        
            const nameElement = document.createElement('div');
            const emailElement = document.createElement('div');
        
            nameElement.textContent = `Nom: ${nameInput}`;
            emailElement.textContent = `Email: ${emailInput}`;
        
            modal.appendChild(nameElement);
            modal.appendChild(emailElement);
        
            const courseContainer = document.createElement('div');
            courseContainer.classList.add('course-container'); // Classe pour le style si besoin
        
            // Requête fetch
            fetch('http://localhost:3000/cours/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur serveur.');
                }
                return response.json();
            })
            .then(data => {
                if (data.length > 0) {
                    data.forEach(item => {
                        let formatedDate = formatDateFromISO(item.date_cours);
        
                        const raw = document.createElement('div');
                        raw.classList.add('raw-infos');
        
                        const date = document.createElement('div');
                        date.classList.add('date-infos');
                        date.innerHTML = formatedDate;
        
                        const heureDebut = document.createElement('div');
                        heureDebut.classList.add('heure-debut-infos');
                        heureDebut.innerHTML = item.heure_debut;
        
                        const heureFin = document.createElement('div');
                        heureFin.classList.add('heure-fin-infos');
                        heureFin.innerHTML = item.heure_fin;
        
                        const typeCours = document.createElement('div');
                        typeCours.classList.add('type-de-cours-infos');
                        typeCours.innerHTML = item.type_cours;
        
                        raw.append(date, heureDebut, heureFin, typeCours);
                        courseContainer.appendChild(raw);

                        raw.addEventListener('click', (e) => {
                            const row = e.target as HTMLElement;
                            console.log(modal, row);
                        
                            let extraSlot = modal.querySelector('slot[name="extra"]');
                            if (!extraSlot) {
                                extraSlot = document.createElement('slot');
                                extraSlot.setAttribute('name', 'extra');
                                modal.appendChild(extraSlot);
                            }
                        
                            const contentContainer = document.createElement('div');
                            contentContainer.classList.add('extra-content');
                        
                            contentContainer.textContent = `Vous avez cliqué sur: ${row.textContent}`;
                        
                            extraSlot.appendChild(contentContainer);
                        });
                    });
                    modal.appendChild(courseContainer);
                } else {
                    tableResult.textContent = 'Cours non trouvés';
                }
                console.log('Réponse du serveur:', data);
            })
            .catch(error => {
                tableResult.textContent = "Erreur lors de la récupération des cours.";
                console.error('Erreur lors de la requête fetch:', error);
            });
        };
        
    
        // Attacher l'écouteur d'événement à btn2
        btn2.addEventListener('click', handleBtn2Click);
    });
    
    console.log(btn1,btn2,form);

    let isLogged = "";
    const logoutLink = document.getElementById('logout');
    if (localStorage.getItem("isLogged")) {
        isLogged = localStorage.getItem("isLogged") || "";
        const loginLink = document.getElementById('login');
        loginLink?.setAttribute('class', 'hidden')
    }else{
        logoutLink?.setAttribute('class','hidden')
    }

    if (logoutLink) {
        logoutLink.addEventListener('click', (e) => {
            
            e.preventDefault();

            console.log(localStorage)
            localStorage.clear();

            window.location.href = '/';
        });
    }
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