var e=globalThis,t={},a={},o=e.parcelRequirec605;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},e.parcelRequirec605=o),o.register;var r=o("7WQrb"),l=o("5D1XK");o("RKbfs"),o("5OQrz"),o("2LYUy"),o("7KTRf");class n extends l.WebComponent{async preloadData(e){try{let t=localStorage.getItem("userData");if(!t)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let a=JSON.parse(t);console.log("Données utilisateur récupérées:",a);let o=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(a)});if(!o.ok)throw Error("Erreur serveur.");let r=[await o.json()];return console.log("Données mises dans un tableau:",r,r.length),r.length>0?r:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async preloadDataDropDown(e){try{let t=await fetch(e,{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}});if(!t.ok)throw Error("Erreur serveur.");let a=await t.json();return console.log(a,a.length),a.length>0?a:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}enableEditing(e){return console.log("Enable editing"),this.shadowRoot.getElementById("first_name").removeAttribute("readonly"),this.shadowRoot.getElementById("last_name").removeAttribute("readonly"),this.shadowRoot.getElementById("email").removeAttribute("readonly"),this.shadowRoot.getElementById("edit-button").style.display="none",this.shadowRoot.getElementById("save-button").style.display="inline-block",(0,l.html)`<div>Vous pouvez modifier désormais</div>`}validateForm(){let e=this.shadowRoot?.getElementById("email").value,t=this.shadowRoot?.getElementById("first_name").value,a=this.shadowRoot?.getElementById("last_name").value;return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)?!!t&&!!a||(alert("Tous les champs doivent être remplis"),!1):(alert("Veuillez entrer un email valide"),!1)}saveChanges(){if(this.validateForm()){let e=this.shadowRoot?.getElementById("email").value,t=this.shadowRoot?.getElementById("first_name").value,a=this.shadowRoot?.getElementById("last_name").value,o=localStorage.getItem("userData"),r=o?JSON.parse(o):{};fetch("http://localhost:3000/users/update",{method:"PATCH",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({new_email:e,new_first_name:t,new_last_name:a,current_mail:r.email,current_first_name:r.prenom,current_last_name:r.nom})}).then(e=>e.json()).then(e=>{e.success?(alert("Modifications enregistrées avec succès"),console.log(e.json()),localStorage.setItem("userData",JSON.stringify(e.data))):alert("Erreur lors de l'enregistrement")}).catch(e=>{console.error("Erreur:",e),alert("Une erreur s'est produite lors de la tentative d'enregistrement")}),this.shadowRoot.getElementById("first_name").setAttribute("readonly","true"),this.shadowRoot.getElementById("last_name").setAttribute("readonly","true"),this.shadowRoot.getElementById("email").setAttribute("readonly","true"),this.shadowRoot.getElementById("save-button").style.display="none",this.shadowRoot.getElementById("edit-button").style.display="inline-block"}}formatDateFromISO(e){let t=new Date(e),a=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${a}-${o}-${r}`}convertToISODate(e){let[t,a,o]=e.split("-");return new Date(`${t}-${a}-${o}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[],this.nom="",this.prenom="",this.mail=""}}n=(0,r.__decorate)([(0,l.customElement)({name:"page-compte",template:(0,l.html)`${e=>(0,l.html)`
      <pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left>
          <div slot = "drawer-panel">
            <navigation-panel></navigation-panel>
          </div>
          <pf-panel header scrollable>
            <div slot="header">
              <h1 class="title">Compte</h1>
            </div>
            <div class="table-infos">
              ${(0,l.asyncAppend)(e.preloadData("http://localhost:3000/informations"),t=>(0,l.html)`${(0,l.repeat)(t,(0,l.html)`${t=>(console.log(t),(0,l.html)`
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


                            <div class="last-name">
                              <label for="last_name">Nom:</label>
                              <input type="text" id="last_name" value="${t.last_name}" readonly/>
                            </div>

                            <div class="role">
                              <label for="role">Rôle:</label>
                              <input type="text" id="role" value="${t.role}" readonly disabled/>
                            </div>

                            <div class="grade">
                              <label for="grade">Grade:</label>
                              <input type="text" id="grade" value="${t.grade}" readonly disabled/>
                            </div>

                            <div class="abonnement">
                              <label for="role">abonnement:</label>
                              <input type="text" id="abonnement" value="${t.abonnement}" readonly disabled/>
                            </div>

                            
                            <!-- Bouton pour activer la modification -->
                             <button id="edit-button" @click="${()=>e.enableEditing(e)}">Modifier</button>

                            <!-- Bouton pour enregistrer les modifications -->
                            <button id="save-button" style="display:none" @click="${()=>e.saveChanges()}">Enregistrer</button>
                          </div>
                          `)}`)}`)}
            </div>
          </pf-panel>
        <pf-avatar></pf-avatar>
      </pf-page>`}`,styles:[(0,l.css)`
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

#dropdownMenu {
  display: none;
  /* Autres styles pour le menu */
}

#dropdownMenu.visible {
  display: block;
  /* Autres styles pour le menu visible, comme une animation */
}

    `]})],n);let i=(0,l.html)`${e=>(0,l.html)`<page-compte></page-compte>`}`;(0,l.render)(i);
//# sourceMappingURL=index.5b571993.js.map
