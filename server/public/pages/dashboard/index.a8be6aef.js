var e=globalThis,a={},t={},r=e.parcelRequirec605;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in t){var r=t[e];delete t[e];var n={id:e,exports:{}};return a[e]=n,r.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,a){t[e]=a},e.parcelRequirec605=r),r.register;var n=r("7WQrb"),o=r("5D1XK");r("RKbfs"),r("5OQrz"),r("2LYUy"),r("7KTRf");class l extends o.WebComponent{async preloadData(){try{let e=await fetch("http://localhost:3000/users/",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Erreur serveur.");let a=await e.json();return console.log(a),a.length>0?a:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async loadInfosUser(e){console.log(e);try{let a=await fetch("http://localhost:3000/users/infos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e})});if(!a.ok)throw Error("Erreur serveur.");let t=await a.json();return console.log(t),t}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async displayMoreInfos(e){console.log("User ID:",e.id);let a=this.shadowRoot?.querySelector(`.panel-row[data-user-id="${e.id}"]`);if(console.log(a),a){if(a.classList.contains("active")){a.classList.remove("active"),console.log("Panel désactivé.");return}a.classList.add("active"),console.log("Panel activé:",a);let t=a.querySelector(".new-participants");if(t||((t=document.createElement("div")).classList.add("new-participants"),a.appendChild(t)),t.children.length>0){console.log("Informations déjà chargées. Aucun rechargement nécessaire.");return}try{let a=await this.loadInfosUser(e.id);if(console.log(a),t.innerHTML="",0===Object.keys(a).length)t.textContent="Aucune information trouvée.";else{let e=document.createElement("form");e.classList.add("user-info-form");let r=(e,a,t,r=!1)=>{let n=document.createElement("div");n.classList.add("form-group");let o=document.createElement("label");o.textContent=e;let l=document.createElement("input");return l.type="text",l.name=a,l.value=t||"",l.disabled=r,l.classList.add("form-control"),n.appendChild(o),n.appendChild(l),n};e.appendChild(r("Prénom","first_name",a.first_name)),e.appendChild(r("Nom","last_name",a.last_name)),e.appendChild(r("Email","email",a.email)),e.appendChild(r("Rôle","role",a.role,!0)),e.appendChild(r("Genre","gender",a.gender)),e.appendChild(r("Date de naissance","date_of_birth",new Date(a.date_of_birth).toLocaleDateString())),e.appendChild(r("Grade","grade",a.grade));let n=document.createElement("button");n.type="button",n.textContent="Modifier les informations",n.classList.add("edit-btn");let o=document.createElement("button");o.type="button",o.textContent="Sauvegarder",o.classList.add("save-btn"),o.style.display="none",e.appendChild(n),e.appendChild(o),t.appendChild(e);let l=a=>{e.querySelectorAll("input").forEach(e=>{"role"!==e.name&&(e.disabled=!a)})};n.addEventListener("click",()=>{l(!0),o.style.display="block",n.style.display="none"}),o.addEventListener("click",async()=>{let a={first_name:e.first_name.value,last_name:e.last_name.value,email:e.email.value,gender:e.gender.value,date_of_birth:e.date_of_birth.value,grade:e.grade.value};try{console.log("Informations mises à jour avec succès:",a),l(!1),o.style.display="none",n.style.display="block"}catch(e){console.error("Erreur lors de la mise à jour des informations:",e)}})}}catch(e){console.error("Erreur lors du chargement des informations :",e),t.textContent="Erreur lors du chargement des informations."}console.log("Informations ajoutées dans la div:",t)}else console.error('Aucun élément "panel-row" trouvé pour cet utilisateur.')}}l=(0,n.__decorate)([(0,o.customElement)({name:"page-dashboard",template:(0,o.html)`${e=>(0,o.html)`
        <pf-page
          masterhead-no-icon
          masterhead-no-branding
          drawer-inline
          drawer-expanded
          drawer-static
          drawer-panel-left
        >
          <div slot="drawer-panel">
            <navigation-panel></navigation-panel>
          </div>
          <pf-panel header scrollable>
            <h1 slot="header">Dashboard</h1>
            <input
              type="text"
              placeholder="Rechercher un utilisateur"
            />
            <div class="table-infos">
               ${(0,o.asyncAppend)(e.preloadData(),a=>(0,o.html)`
                    ${(0,o.repeat)(a,(0,o.html)`${a=>(console.log(a),(0,o.html)`
                          <div class="panel-row" data-user-id="${a.id}">
                            <div class="row">
                              <div class="type-de-cours">${a.last_name}</div>
                              <div class="heure-debut">${a.first_name}</div>
                              <div class="heure-fin">${a.gender}</div>
                              <div class="heure-fin">${a.grade}</div>
                              <div @click="${a=>e.displayMoreInfos(a)}" class='icon-down'><div class='icon'><pf-icons-chevron-down></pf-icons-chevron-down></div></div>
                            </div>
                          </div>`)}`)}`)}
            </div>
          </pf-panel>
          <pf-avatar></pf-avatar>
        </pf-page>`}`,styles:[(0,o.css)`
        .table-infos {
          color: black;
          display: flex;
          gap: 20px;
          flex-direction: column;
        }
        .navigation {
          color: black;
        }
        .row{
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 10px;
          background-color: #9e9e9e26;
        }
        .icon-down{
          cursor: pointer;
          background-color: #9E9E9E;
          width: 24px;
          height: 24px;
          border-radius: 3px;
        }
        .icon{
          transform: translate(4px, 4px);
        }
        .panel-row .new-participants {
          display: none; /* Cacher la div par défaut */
        }

        .panel-row.active .new-participants {
          display: block; /* Afficher la div quand panel-row est active */
        }
      `]})],l);let s=(0,o.html)`${e=>(0,o.html)`<page-dashboard></page-dashboard>`}`;(0,o.render)(s);
//# sourceMappingURL=index.a8be6aef.js.map
