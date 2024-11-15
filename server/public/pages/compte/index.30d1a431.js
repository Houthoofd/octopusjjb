var e=globalThis,t={},o={},a=e.parcelRequirec605;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in o){var a=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},e.parcelRequirec605=a),a.register;var r=a("7WQrb"),n=a("5D1XK");a("RKbfs"),a("5OQrz"),a("2LYUy"),a("7KTRf");class l extends n.WebComponent{async preloadData(e){try{let t=localStorage.getItem("userData");if(!t)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let o=JSON.parse(t);console.log("Données utilisateur récupérées:",o);let a=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)});if(!a.ok)throw Error("Erreur serveur.");let r=[await a.json()];return console.log("Données mises dans un tableau:",r,r.length),r.length>0?r:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}handleDropDownValueGrade(e){let t=this.shadowRoot?.getElementById("dropdownButtonGrade"),o=this.shadowRoot?.getElementById("dropdownMenu");t.textContent=`${e.grade}`,this.tarif=e.grade,console.log(this.grade),"none"===o.style.display||""===o.style.display?o.style.display="block":o.style.display="none"}handleDropDownValueTarif(e){let t=this.shadowRoot?.getElementById("dropdownButtonPrice"),o=this.shadowRoot?.getElementById("dropdownMenu");t.textContent=`${e.nom_plan} - ${e.prix} \u{20AC}`,this.tarif=e.nom_plan,console.log(this.tarif),"none"===o.style.display||""===o.style.display?o.style.display="block":o.style.display="none"}async preloadDataDropDown(e){try{let t=await fetch(e,{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}});if(!t.ok)throw Error("Erreur serveur.");let o=await t.json();return console.log("Données mises dans un tableau:",o,o.length),o.length>0?o:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}enableEditing(e){return console.log("enable editing"),this.shadowRoot.getElementById("first_name").removeAttribute("readonly"),this.shadowRoot.getElementById("last_name").removeAttribute("readonly"),this.shadowRoot.getElementById("grade").removeAttribute("readonly"),this.shadowRoot.getElementById("email").removeAttribute("readonly"),this.shadowRoot.getElementById("edit-button").style.display="none",this.shadowRoot.getElementById("save-button").style.display="inline-block",(0,n.html)`<div>Vous pouvez modifier désormais</div>`}validateForm(){let e=document.getElementById("email").value;return!!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)||(alert("Veuillez entrer un email valide"),!1)}saveChanges(){this.validateForm()&&fetch("/api/update-profile",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:document.getElementById("email").value,first_name:document.getElementById("first_name").value})}).then(e=>e.json()).then(e=>{e.success?alert("Modifications enregistrées avec succès"):alert("Erreur lors de l'enregistrement")}).catch(e=>console.error("Erreur:",e))}formatDateFromISO(e){let t=new Date(e),o=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${o}-${a}-${r}`}convertToISODate(e){let[t,o,a]=e.split("-");return new Date(`${t}-${o}-${a}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[],this.tarif="",this.grade=""}}l=(0,r.__decorate)([(0,n.customElement)({name:"page-compte",template:(0,n.html)`${e=>(0,n.html)`
      <pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left>
          <div slot = "drawer-panel">
            <navigation-panel></navigation-panel>
          </div>
          <pf-panel header scrollable>
            <div slot="header">
              <h1 class="title">Compte</h1>
            </div>
            <div class="table-infos">
              ${(0,n.asyncAppend)(e.preloadData("http://localhost:3000/informations"),t=>(0,n.html)`${(0,n.repeat)(t,(0,n.html)`${t=>(console.log(t),(0,n.html)`
                          <div class="row">
                            <div class="date-of-birth">
                              <label for="date_of_birth">Date de naissance:</label>
                              <input type="text" id="date_of_birth" value="${e.formatDateFromISO(t.date_of_birth)}" readonly disabled/>
                            </div>

                            <div class="email">
                              <label for="email">Email:</label>
                              <input type="email" id="email" value="${t.email}" readonly/>
                            </div>

                            <div class="first-name">
                              <label for="first_name">Prénom:</label>
                              <input type="text" id="first_name" value="${t.first_name}" readonly/>
                            </div>

                            <div class="gender">
                              <label for="gender">Genre:</label>
                              <input type="text" id="gender" value="${t.gender}" readonly/>
                            </div>

                            <div class="dropdown">
                                <details>
                                <summary id="dropdownButtonGrade">${t.grade}</summary>
                                <div class="dropdown-menu">
                                  <!-- Les éléments du menu seront ajoutés ici -->
                                  ${(0,n.asyncAppend)(e.preloadDataDropDown("http://localhost:3000/informations/grade"),t=>(0,n.html)`${(0,n.repeat)(t,(0,n.html)`${t=>(console.log(t),(0,n.html)`<div class="dropdown-item" data-grade="${t.grade}"@click="${t=>e.handleDropDownValueGrade(t)}">
                                         ${t.grade}
                                        </div>`)}`)}`)}
                                </div>
                              </details>
                            </div>

                            <div class="last-name">
                              <label for="last_name">Nom:</label>
                              <input type="text" id="last_name" value="${t.last_name}" readonly/>
                            </div>

                            <div class="role">
                              <label for="role">Rôle:</label>
                              <input type="text" id="role" value="${t.role}" readonly disabled/>
                            </div>

                            <div class="dropdown">
                                <details>
                                <summary id="dropdownButtonPrice">${t.abonnement}</summary>
                                <div class="dropdown-menu">
                                  <!-- Les éléments du menu seront ajoutés ici -->
                                  ${(0,n.asyncAppend)(e.preloadDataDropDown("http://localhost:3000/informations/abonnement"),t=>(0,n.html)`${(0,n.repeat)(t,(0,n.html)`${t=>(console.log(t.nom_plan),(0,n.html)`<div class="dropdown-item" data-plan="${t.nom_plan}" data-prix="${t.prix}" @click="${t=>e.handleDropDownValueTarif(t)}">
                                         ${t.nom_plan} - ${t.prix} €
                                        </div>`)}`)}`)}
                                </div>
                              </details>
                            </div>
                            <!-- Bouton pour activer la modification -->
                             <button id="edit-button" @click="${()=>e.enableEditing(e)}">Modifier</button>

                            <!-- Bouton pour enregistrer les modifications -->
                            <button id="save-button" style="display:none;" onclick="saveChanges()">Enregistrer</button>
                          </div>
                          `)}`)}`)}
            </div>
          </pf-panel>
        <pf-avatar></pf-avatar>
      </pf-page>`}`,styles:[(0,n.css)`
      .table-infos {
        color: black;
      }
      .navigation{
        color: black
      }
      .title{
        color: black;
      }
       /* Conteneur du dropdown */
.dropdown {
  position: relative;
  display: inline-block;
  width: 100%;
}

/* Bouton du dropdown */
.dropdown-toggle {
      background-color: #fafbfe;
  color: #a2adcd;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
}

/* Liste cachée par défaut */
.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
}

/* Eléments du dropdown */
.dropdown-item {
  padding: 12px 16px;
  text-align: left;
  color: black;
  text-decoration: none;
  display: block;
  font-size: 14px;
}

/* Changer la couleur au survol */
.dropdown-item:hover {
  background-color: #f1f1f1;
  cursor: pointer;
}

/* Affichage du menu lorsque l'utilisateur clique sur le bouton */
.dropdown:hover .dropdown-menu {
  display: block;
}
    `]})],l);let d=(0,n.html)`${e=>(0,n.html)`<page-compte></page-compte>`}`;(0,n.render)(d);
//# sourceMappingURL=index.30d1a431.js.map
