var e=globalThis,t={},a={},l=e.parcelRequirec605;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in a){var l=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,l.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequirec605=l),l.register;var r=l("7WQrb"),n=l("5D1XK");l("RKbfs"),l("5OQrz"),l("2LYUy"),l("7KTRf");class o extends n.WebComponent{async preloadData(){try{let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let t=JSON.parse(e);console.log("Données utilisateur récupérées:",t);let a=await fetch("http://localhost:3000/informations",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)});if(!a.ok)throw Error("Erreur serveur.");let l=[await a.json()];return console.log("Données mises dans un tableau:",l,l.length),l.length>0?l:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}enableEditing(e){return console.log("enable editing"),this.shadowRoot.getElementById("first_name").removeAttribute("readonly"),this.shadowRoot.getElementById("email").removeAttribute("readonly"),this.shadowRoot.getElementById("edit-button").style.display="none",this.shadowRoot.getElementById("save-button").style.display="inline-block",(0,n.html)`<div>Vous pouvez modifier désormais</div>`}validateForm(){let e=document.getElementById("email").value;return!!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)||(alert("Veuillez entrer un email valide"),!1)}saveChanges(){this.validateForm()&&fetch("/api/update-profile",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:document.getElementById("email").value,first_name:document.getElementById("first_name").value})}).then(e=>e.json()).then(e=>{e.success?alert("Modifications enregistrées avec succès"):alert("Erreur lors de l'enregistrement")}).catch(e=>console.error("Erreur:",e))}formatDateFromISO(e){let t=new Date(e),a=t.getFullYear(),l=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${a}-${l}-${r}`}convertToISODate(e){let[t,a,l]=e.split("-");return new Date(`${t}-${a}-${l}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[]}}o=(0,r.__decorate)([(0,n.customElement)({name:"page-compte",template:(0,n.html)`${e=>(0,n.html)`
      <pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left>
          <div slot = "drawer-panel">
            <navigation-panel></navigation-panel>
          </div>
          <pf-panel header scrollable>
            <div slot="header">
              <h1 class="title">Compte</h1>
            </div>
            <div class="table-infos">
              ${(0,n.asyncAppend)(e.preloadData(),t=>(0,n.html)`${(0,n.repeat)(t,(0,n.html)`${t=>(console.log(t),(0,n.html)`
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

                            <div class="grade">
                              <label for="grade">Grade:</label>
                              <input type="text" id="grade" value="${t.grade}" readonly/>
                            </div>

                            <div class="last-name">
                              <label for="last_name">Nom:</label>
                              <input type="text" id="last_name" value="${t.last_name}" readonly/>
                            </div>

                            <div class="role">
                              <label for="role">Rôle:</label>
                              <input type="text" id="role" value="${t.role}" readonly disabled/>
                            </div>

                            <div class="abonnement">
                              <label for="abonnement">Abonnement:</label>
                              <input type="text" id="abonnement" value="${t.abonnement}"/>
                            </div>
                            <!-- Bouton pour activer la modification -->
                             <button id="edit-button" @click="${e=>e.enableEditing(e)}">Modifier</button>

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
    `]})],o);let i=(0,n.html)`${e=>(0,n.html)`<page-compte></page-compte>`}`;(0,n.render)(i);
//# sourceMappingURL=index.e715027c.js.map
