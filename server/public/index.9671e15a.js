var e=globalThis,t={},i={},s=e.parcelRequirec605;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in i){var s=i[e];delete i[e];var l={id:e,exports:{}};return t[e]=l,s.call(l.exports,l,l.exports),l.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},e.parcelRequirec605=s),s.register;var l=s("1BF7I");s("lTDtW"),s("5OQrz"),s("2LYUy");let a=(0,l.html)`${e=>(localStorage.getItem("first_name")&&console.log(localStorage.getItem("first_name")||""),(0,l.html)`<div class='home'>
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
    </div>`)}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll("pf-button")[4],t=document.querySelectorAll("pf-button")[5],i=document.querySelectorAll("form")[0],s=document.querySelectorAll(".table-infos")[0];e.addEventListener("click",e=>{console.log(t),i.classList.toggle("active"),t.addEventListener("click",e=>{let t=document.querySelectorAll("input")[0].value,i=document.querySelectorAll("input")[1].value,l=document.querySelectorAll("pf-modal")[0];console.log(l),l.innerHTML="",l.classList.toggle("active");let a=document.createElement("div"),o=document.createElement("div");a.textContent=`Nom: ${t}`,o.textContent=`Email: ${i}`,l.appendChild(a),l.appendChild(o);let n=document.createElement("div");n.classList.add("course-container"),fetch("http://localhost:3000/cours/",{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>{if(!e.ok)throw Error("Erreur serveur.");return e.json()}).then(e=>{e.length>0?(e.forEach(e=>{let t=function(e){let t=new Date(e),i=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),l=String(t.getDate()).padStart(2,"0");return`${i}-${s}-${l}`}(e.date_cours),i=document.createElement("div");i.classList.add("raw-infos");let s=document.createElement("div");s.classList.add("date-infos"),s.innerHTML=t;let l=document.createElement("div");l.classList.add("heure-debut-infos"),l.innerHTML=e.heure_debut;let a=document.createElement("div");a.classList.add("heure-fin-infos"),a.innerHTML=e.heure_fin;let o=document.createElement("div");o.classList.add("type-de-cours-infos"),o.innerHTML=e.type_cours,i.append(s,l,a,o),n.appendChild(i),i.addEventListener("click",e=>{let t=e.target,i=document.querySelector("pf-modal");if(i&&i.shadowRoot){let e=i.querySelector('[slot="extra-slot"]');e&&(e.innerHTML="");let s=document.createElement("div");s.setAttribute("slot","extra-slot");let l=document.createElement("div");l.setAttribute("class","selection"),console.log(t.parentNode),s.appendChild(l),i.appendChild(s)}else console.error("Modale introuvable ou pas encore chargée.")})}),l.appendChild(n)):s.textContent="Cours non trouvés",console.log("Réponse du serveur:",e)}).catch(e=>{s.textContent="Erreur lors de la récupération des cours.",console.error("Erreur lors de la requête fetch:",e)})})}),console.log(e,t,i);let l=document.getElementById("logout");if(localStorage.getItem("isLogged")){localStorage.getItem("isLogged");let e=document.getElementById("login");e?.setAttribute("class","hidden")}else l?.setAttribute("class","hidden");l&&l.addEventListener("click",e=>{e.preventDefault(),console.log(localStorage),localStorage.clear(),window.location.href="/"})}),(0,l.render)(a);
//# sourceMappingURL=index.9671e15a.js.map
