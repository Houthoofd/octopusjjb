var e=globalThis,t={},i={},s=e.parcelRequirec605;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in i){var s=i[e];delete i[e];var n={id:e,exports:{}};return t[e]=n,s.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},e.parcelRequirec605=s),s.register;var n=s("1BF7I");s("lTDtW"),s("5OQrz"),s("2LYUy");let o=(0,n.html)`${e=>(localStorage.getItem("first_name")&&console.log(localStorage.getItem("first_name")||""),(0,n.html)`<div class='home'>
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
                <pf-modal class='result-box'>
                    <slot slot="header">
                        <h3>Ma réservation</h3>
                    </slot>
                    <slot>
                        
                    </slot>
                    <slot slot="footer">
                        <pf-button>Confirm</pf-button>
                        <pf-button>Cancel</pf-button>
                    </slot>
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
    </div>`)}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll("pf-button")[4],t=document.querySelectorAll("pf-button")[5],i=document.querySelectorAll("form")[0],s=document.querySelectorAll(".table-infos")[0];e.addEventListener("click",e=>{console.log(i.querySelector('input[name="name"]'),i.querySelector('input[name="mail"]')),i.classList.toggle("active"),t.addEventListener("click",e=>{i.classList.toggle("active"),fetch("http://localhost:3000/cours/",{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>{if(!e.ok)throw Error("Erreur serveur.");return e.json()}).then(e=>{e.length>0?e.forEach(e=>{let t=function(e){let t=new Date(e),i=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${i}-${s}-${n}`}(e.date_cours),i=document.createElement("div");i.classList.add("raw-infos");let n=document.createElement("div");n.classList.add("date-infos"),n.innerHTML=t;let o=document.createElement("div");o.classList.add("heure-debut-infos"),o.innerHTML=e.heure_debut;let a=document.createElement("div");a.classList.add("heure-fin-infos"),a.innerHTML=e.heure_fin;let l=document.createElement("div");l.classList.add("type-de-cours-infos"),l.innerHTML=e.type_cours;let r=document.createElement("button");r.classList.add("inscription"),r.innerHTML="Inscription";let d=document.createElement("div");d.classList.add("down-arrow"),d.innerHTML=`
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);">
                            <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
                        </svg>
                    `,i.append(n,o,a,l,r,d),s.appendChild(i),i.addEventListener("click",e=>{let t=document.querySelector("pf-modal")||document.createElement("pf-modal"),i=e.currentTarget;t.classList.toggle("active");let s=i.querySelector(".date-infos")?.innerHTML||"Date non disponible",n=i.querySelector(".heure-debut-infos")?.innerHTML||"Heure de début non disponible",o=i.querySelector(".heure-fin-infos")?.innerHTML||"Heure de fin non disponible",a=i.querySelector(".type-de-cours-infos")?.innerHTML||"Type de cours non disponible",l=`
                            <div><strong>Date :</strong> ${s}</div>
                            <div><strong>Heure de d\xe9but :</strong> ${n}</div>
                            <div><strong>Heure de fin :</strong> ${o}</div>
                            <div><strong>Type de cours :</strong> ${a}</div>
                        `,r=t.querySelectorAll("slot")[1];if(r){let e=document.createElement("div");e.innerHTML=l,r.innerHTML="",r.appendChild(e)}else console.error("Aucun slot trouvé dans le composant pf-modal.");document.body.contains(t)||document.body.appendChild(t),console.log("Informations affichées dans le modal:",l)})}):s.textContent="Cours non trouvés",console.log("Réponse du serveur:",e)}).catch(e=>{s.textContent="Erreur lors de la récupération des cours.",console.error("Erreur lors de la requête fetch:",e)})})}),console.log(e,t,i);let n=document.getElementById("logout");if(localStorage.getItem("isLogged")){localStorage.getItem("isLogged");let e=document.getElementById("login");e?.setAttribute("class","hidden")}else n?.setAttribute("class","hidden");n&&n.addEventListener("click",e=>{e.preventDefault(),console.log(localStorage),localStorage.clear(),window.location.href="/"})}),(0,n.render)(o);
//# sourceMappingURL=index.8f6ad168.js.map
