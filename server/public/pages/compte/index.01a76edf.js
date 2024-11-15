var e=globalThis,t={},a={},r=e.parcelRequirec605;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var l={id:e,exports:{}};return t[e]=l,r.call(l.exports,l,l.exports),l.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequirec605=r),r.register;var l=r("7WQrb"),o=r("5D1XK");r("RKbfs"),r("5OQrz"),r("2LYUy"),r("7KTRf");class n extends o.WebComponent{async preloadData(e){try{let t=localStorage.getItem("userData");if(!t)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let a=JSON.parse(t);console.log("Données utilisateur récupérées:",a);let r=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(a)});if(!r.ok)throw Error("Erreur serveur.");let l=[await r.json()];return console.log("Données mises dans un tableau:",l,l.length),l.length>0?l:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}enableEditing(e){return console.log("enable editing"),this.shadowRoot.getElementById("first_name").removeAttribute("readonly"),this.shadowRoot.getElementById("last_name").removeAttribute("readonly"),this.shadowRoot.getElementById("grade").removeAttribute("readonly"),this.shadowRoot.getElementById("email").removeAttribute("readonly"),this.shadowRoot.getElementById("edit-button").style.display="none",this.shadowRoot.getElementById("save-button").style.display="inline-block",(0,o.html)`<div>Vous pouvez modifier désormais</div>`}validateForm(){let e=document.getElementById("email").value;return!!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)||(alert("Veuillez entrer un email valide"),!1)}saveChanges(){this.validateForm()&&fetch("/api/update-profile",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:document.getElementById("email").value,first_name:document.getElementById("first_name").value})}).then(e=>e.json()).then(e=>{e.success?alert("Modifications enregistrées avec succès"):alert("Erreur lors de l'enregistrement")}).catch(e=>console.error("Erreur:",e))}formatDateFromISO(e){let t=new Date(e),a=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),l=String(t.getDate()).padStart(2,"0");return`${a}-${r}-${l}`}convertToISODate(e){let[t,a,r]=e.split("-");return new Date(`${t}-${a}-${r}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[]}}n=(0,l.__decorate)([(0,o.customElement)({name:"page-compte",template:(0,o.html)`${e=>(0,o.html)`
      <pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left>
          <div slot = "drawer-panel">
            <navigation-panel></navigation-panel>
          </div>
          <pf-panel header scrollable>
            <div slot="header">
              <h1 class="title">Compte</h1>
            </div>
            <div class="table-infos">
              ${(0,o.asyncAppend)(e.preloadData("http://localhost:3000/informations"),t=>(0,o.html)`${(0,o.repeat)(t,(0,o.html)`${t=>(console.log(t),(0,o.html)`
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
                                <summary id="dropdownButtonPrice">${t.grade}</summary>
                                <div class="dropdown-menu">
                                  <!-- Les éléments du menu seront ajoutés ici -->
                                  ${(0,o.asyncAppend)(e.preloadData("http://localhost:3000/informations/grade"),t=>(0,o.html)`${(0,o.repeat)(t,(0,o.html)`${t=>(0,o.html)`<div class="dropdown-item" data-plan="${t.nom_plan}" data-prix="${t.prix}" @click="${t=>e.handleDropDownValueTarif(t)}">
                                         ${t.nom_plan} - ${t.prix} €
                                        </div>`}`)}`)}
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
                                <summary id="dropdownButtonPrice">${t.grade}</summary>
                                <div class="dropdown-menu">
                                  <!-- Les éléments du menu seront ajoutés ici -->
                                  ${(0,o.asyncAppend)(e.preloadData("http://localhost:3000/informations/abonnement"),t=>(0,o.html)`${(0,o.repeat)(t,(0,o.html)`${t=>(0,o.html)`<div class="dropdown-item" data-plan="${t.nom_plan}" data-prix="${t.prix}" @click="${t=>e.handleDropDownValueTarif(t)}">
                                         ${t.nom_plan} - ${t.prix} €
                                        </div>`}`)}`)}
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
      </pf-page>`}`,styles:[(0,o.css)`
      .table-infos {
        color: black;
      }
      .navigation{
        color: black
      }
      .title{
        color: black;
      }
    `]})],n);let i=(0,o.html)`${e=>(0,o.html)`<page-compte></page-compte>`}`;(0,o.render)(i);
//# sourceMappingURL=index.01a76edf.js.map
