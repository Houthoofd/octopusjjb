var e=globalThis,t={},a={},o=e.parcelRequirec605;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequirec605=o),o.register;var r=o("7WQrb"),n=o("5D1XK");o("RKbfs"),o("5OQrz"),o("2LYUy"),o("7KTRf");class l extends n.WebComponent{async preloadData(){try{let e=await fetch("http://localhost:3000/users/",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Erreur serveur.");let t=await e.json();return console.log(t),t.length>0?t:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async loadInfosUser(e){console.log(e);try{let t=await fetch("http://localhost:3000/users/infos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e})});if(!t.ok)throw Error("Erreur serveur.");let a=await t.json();return console.log(a),a}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async displayMoreInfos(e){console.log("User ID:",e.id);let t=this.shadowRoot?.querySelector(`.panel-row[data-user-id="${e.id}"]`);if(console.log(t),t){if(t.classList.contains("active")){t.classList.remove("active"),console.log("Panel désactivé.");return}t.classList.add("active"),console.log("Panel activé:",t);let a=t.querySelector(".new-participants");if(a||((a=document.createElement("div")).classList.add("new-participants"),t.appendChild(a)),a.children.length>0){console.log("Informations déjà chargées. Aucun rechargement nécessaire.");return}try{let t=await this.loadInfosUser(e.id);if(console.log(t),a.innerHTML="",0===Object.keys(t).length)a.textContent="Aucune information trouvée.";else{let e=document.createElement("form");e.classList.add("user-info-form");let o=(e,t,a,o=!1)=>{let r=document.createElement("div");r.classList.add("form-group");let n=document.createElement("label");n.textContent=e;let l=document.createElement("input");return l.type="text",l.name=t,l.value=a||"",l.disabled=o,l.classList.add("form-control"),r.appendChild(n),r.appendChild(l),r};e.appendChild(o("Prénom","first_name",t.first_name)),e.appendChild(o("Nom","last_name",t.last_name)),e.appendChild(o("Email","email",t.email)),e.appendChild(o("Rôle","role",t.role,!0)),e.appendChild(o("Genre","gender",t.gender)),e.appendChild(o("Date de naissance","date_of_birth",new Date(t.date_of_birth).toLocaleDateString())),e.appendChild(o("Grade","grade",t.grade));let r=document.createElement("button");r.type="button",r.textContent="Modifier les informations",r.classList.add("edit-btn");let n=document.createElement("button");n.type="button",n.textContent="Présences",n.classList.add("more-infos-btn");let l=document.createElement("button");l.type="button",l.textContent="Sauvegarder",l.classList.add("save-btn"),l.style.display="none",e.appendChild(r),e.appendChild(l),a.appendChild(e),a.appendChild(n);let s=t=>{e.querySelectorAll("input").forEach(e=>{"role"!==e.name&&(e.disabled=!t)})};r.addEventListener("click",()=>{s(!0),l.style.display="block",r.style.display="none"}),n.addEventListener("click",()=>{console.log("more infos");let e={email:t.email,prenom:t.first_name,nom:t.last_name};console.log(e);let a=new URLSearchParams(e).toString();if(console.log("queryString"+a),e.email&&e.prenom&&e.nom)console.log("fetch via url"),fetch(`http://localhost:1234/pages/profile?${a}`).then(e=>e.json()).then(e=>{console.log("Statistiques de l'utilisateur:",e),window.location.href=`http://localhost:1234/pages/profile?${a}`}).catch(e=>console.error("Erreur:",e));else{let e=localStorage.getItem("email"),t=localStorage.getItem("firstName"),a=localStorage.getItem("lastName");console.log("fetch via body"),fetch("http://localhost:1234/pages/profile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,firstName:t,lastName:a})}).then(e=>e.json()).then(e=>{console.log("Statistiques de l'admin:",e)}).catch(e=>console.error("Erreur:",e))}}),l.addEventListener("click",async()=>{let t={first_name:e.first_name.value,last_name:e.last_name.value,email:e.email.value,gender:e.gender.value,date_of_birth:e.date_of_birth.value,grade:e.grade.value};try{console.log("Informations mises à jour avec succès:",t),s(!1),l.style.display="none",r.style.display="block"}catch(e){console.error("Erreur lors de la mise à jour des informations:",e)}})}}catch(e){console.error("Erreur lors du chargement des informations :",e),a.textContent="Erreur lors du chargement des informations."}console.log("Informations ajoutées dans la div:",a)}else console.error('Aucun élément "panel-row" trouvé pour cet utilisateur.')}}l=(0,r.__decorate)([(0,n.customElement)({name:"page-dashboard",template:(0,n.html)`${e=>(0,n.html)`
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
               ${(0,n.asyncAppend)(e.preloadData(),t=>(0,n.html)`
                    ${(0,n.repeat)(t,(0,n.html)`${t=>(console.log(t),(0,n.html)`
                          <div class="panel-row" data-user-id="${t.id}">
                            <div class="row">
                              <div class="type-de-cours">${t.last_name}</div>
                              <div class="heure-debut">${t.first_name}</div>
                              <div class="heure-fin">${t.gender}</div>
                              <div class="heure-fin">${t.grade}</div>
                              <div @click="${t=>e.displayMoreInfos(t)}" class='icon-down'><div class='icon'><pf-icons-chevron-down></pf-icons-chevron-down></div></div>
                            </div>
                          </div>`)}`)}`)}
            </div>
          </pf-panel>
          <pf-avatar></pf-avatar>
        </pf-page>`}`,styles:[(0,n.css)`
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
      `]})],l);let s=(0,n.html)`${e=>(0,n.html)`<page-dashboard></page-dashboard>`}`;(0,n.render)(s);
//# sourceMappingURL=index.7844aa1e.js.map
