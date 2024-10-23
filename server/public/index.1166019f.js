var e=globalThis,t={},s={},i=e.parcelRequirec605;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in s){var i=s[e];delete s[e];var o={id:e,exports:{}};return t[e]=o,i.call(o.exports,o,o.exports),o.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){s[e]=t},e.parcelRequirec605=i),i.register;var o=i("1BF7I");i("lTDtW"),i("5OQrz"),i("2LYUy");let l=(0,o.html)`${e=>(e.createConsumable("selection",[]),localStorage.getItem("first_name")&&console.log(localStorage.getItem("first_name")||""),(0,o.html)`<div class='home'>
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
    </div>`)}`;new Promise((e,t)=>{fetch("http://localhost:3000/cours/",{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>{if(!e.ok)throw t("Erreur serveur."),Error("Erreur serveur.");return e.json()}).then(t=>{t.length>0?(console.log("Réponse du serveur:",t),e(t.length)):e(0)}).catch(e=>{console.error("Erreur lors de la requête fetch:",e),t(e)})}).then(e=>{console.log(`Donn\xe9es pr\xe9charg\xe9es avec succ\xe8s, ${e} cours r\xe9cup\xe9r\xe9s.`)}).catch(e=>{console.error("Le préchargement des données a échoué:",e)}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll("pf-button")[4],t=document.querySelectorAll("pf-button")[5],s=document.querySelectorAll("form")[0],i=document.querySelectorAll(".table-infos")[0];e.addEventListener("click",e=>{console.log(t),s.classList.toggle("active"),t.addEventListener("click",e=>{let t=document.querySelectorAll("input")[0].value,s=document.querySelectorAll("input")[1].value,o=document.querySelectorAll("pf-modal")[0];console.log(o),o.innerHTML="",o.classList.toggle("active");let l=document.createElement("div"),r=document.createElement("div");l.textContent=`Nom: ${t}`,r.textContent=`Email: ${s}`,o.appendChild(l),o.appendChild(r);let n=document.createElement("div");n.classList.add("course-container"),fetch("http://localhost:3000/cours/",{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>{if(!e.ok)throw Error("Erreur serveur.");return e.json()}).then(e=>{e.length>0?(e.forEach(e=>{let t=function(e){let t=new Date(e),s=t.getFullYear(),i=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0");return`${s}-${i}-${o}`}(e.date_cours),s=document.createElement("div");s.classList.add("raw-infos");let i=document.createElement("div");i.classList.add("date-infos"),i.innerHTML=t;let o=document.createElement("div");o.classList.add("heure-debut-infos"),o.innerHTML=e.heure_debut;let l=document.createElement("div");l.classList.add("heure-fin-infos"),l.innerHTML=e.heure_fin;let r=document.createElement("div");r.classList.add("type-de-cours-infos"),r.innerHTML=e.type_cours,s.append(i,o,l,r),n.appendChild(s),s.addEventListener("click",e=>{let t=e.target.parentNode;console.log(t);let s=document.querySelector("pf-modal");if(s&&s.shadowRoot&&t){let e=s.querySelector('[slot="extra-slot"]');e&&(e.innerHTML="");let i=document.createElement("div");i.setAttribute("slot","extra-slot");let o=document.createElement("div");o.setAttribute("class","selection");for(let e=0;e<t.children.length;e++){let s=t.children[e],i=document.createElement("div");i.innerHTML=s.innerHTML,o.appendChild(i)}i.appendChild(o),s.appendChild(i)}else console.error("Modale introuvable ou pas encore chargée.")})}),o.appendChild(n)):i.textContent="Cours non trouvés",console.log("Réponse du serveur:",e)}).catch(e=>{i.textContent="Erreur lors de la récupération des cours.",console.error("Erreur lors de la requête fetch:",e)})})}),console.log(e,t,s);let o=document.getElementById("logout");if(localStorage.getItem("isLogged")){localStorage.getItem("isLogged");let e=document.getElementById("login");e?.setAttribute("class","hidden")}else o?.setAttribute("class","hidden");o&&o.addEventListener("click",e=>{e.preventDefault(),console.log(localStorage),localStorage.clear(),window.location.href="/"})}),(0,o.render)(l);
//# sourceMappingURL=index.1166019f.js.map
