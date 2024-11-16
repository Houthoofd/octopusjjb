var e=globalThis,t={},a={},n=e.parcelRequirec605;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},e.parcelRequirec605=n),n.register;var o=n("7WQrb"),l=n("5D1XK");n("RKbfs"),n("5OQrz"),n("2LYUy"),n("7KTRf");class r extends l.WebComponent{async preloadData(){try{let e=await fetch("http://localhost:3000/users/",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});if(!e.ok)throw Error("Erreur serveur.");let t=await e.json();return console.log(t),t.length>0?t:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async loadInfosUser(e){console.log(e);try{let t=await fetch("http://localhost:3000/users/infos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e}),credentials:"include"});if(!t.ok)throw Error("Erreur serveur.");let a=await t.json();return console.log(a),a}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async displayMoreInfos(e){console.log("User ID:",e.id);let t=this.shadowRoot?.querySelector(`.panel-row[data-user-id="${e.id}"]`);if(console.log(t),t){if(t.classList.contains("active")){t.classList.remove("active"),console.log("Panel désactivé.");return}t.classList.add("active"),console.log("Panel activé:",t);let a=t.querySelector(".new-participants");if(a||((a=document.createElement("div")).classList.add("new-participants"),t.appendChild(a)),a.children.length>0){console.log("Informations déjà chargées. Aucun rechargement nécessaire.");return}try{let t=await this.loadInfosUser(e.id);if(console.log(t),a.innerHTML="",0===Object.keys(t).length)a.textContent="Aucune information trouvée.";else{let e=document.createElement("form");e.classList.add("user-info-form");let n=(e,t,a,n=!1)=>{let o=document.createElement("div");o.classList.add("form-group");let l=document.createElement("label");l.textContent=e;let r=document.createElement("input");return r.type="text",r.name=t,r.value=a||"",r.disabled=n,r.classList.add("form-control"),o.appendChild(l),o.appendChild(r),o};e.appendChild(n("Prénom","first_name",t.first_name)),e.appendChild(n("Nom","last_name",t.last_name)),e.appendChild(n("Email","email",t.email)),e.appendChild(n("Rôle","role",t.role,!0)),e.appendChild(n("Genre","gender",t.gender)),e.appendChild(n("Date de naissance","date_of_birth",new Date(t.date_of_birth).toLocaleDateString())),e.appendChild(((e,t,a,n="",o=!1)=>{let l=document.createElement("div");l.classList.add("form-group");let r=document.createElement("label");r.textContent=e;let s=document.createElement("select");return s.name=t,s.disabled=o,s.classList.add("form-control"),a.forEach(e=>{let t=document.createElement("option");t.value=e.value,t.textContent=e.text,e.value===n&&(t.selected=!0),s.appendChild(t)}),l.appendChild(r),l.appendChild(s),l})("Choisisez votre grade","grade",[{value:"1",text:"paiement mensuel - 25€"},{value:"2",text:"paiement- trimestriel - 100€"},{value:"3",text:"paiement annuel - 300€"}],t.grade)),e.appendChild(n("Abonnement","abonnement",t.abonnement));let o=document.createElement("button");o.type="button",o.textContent="Modifier les informations",o.classList.add("edit-btn");let l=document.createElement("button");l.type="button",l.textContent="Présences",l.classList.add("more-infos-btn");let r=document.createElement("button");r.type="button",r.textContent="Sauvegarder",r.classList.add("save-btn"),r.style.display="none",e.appendChild(o),e.appendChild(r),a.appendChild(e),a.appendChild(l);let s=t=>{e.querySelectorAll("input").forEach(e=>{"role"!==e.name&&(e.disabled=!t)})};o.addEventListener("click",()=>{s(!0),r.style.display="block",o.style.display="none"}),l.addEventListener("click",()=>{console.log("more infos");let e={email:t.email,prenom:t.first_name,nom:t.last_name};console.log(e);let a=new URLSearchParams(e).toString();if(console.log("queryString"+a),window.location.href=`http://localhost:1234/pages/profile?${a}`,e.email&&e.prenom&&e.nom)fetch(`http://localhost:1234/pages/profile?${a}`).then(e=>e.json()).then(e=>{console.log("Statistiques de l'utilisateur:",e),window.location.href=`http://localhost:1234/pages/profile?${a}`}).catch(e=>console.error("Erreur:",e));else{let e=localStorage.getItem("email"),t=localStorage.getItem("firstName"),a=localStorage.getItem("lastName");console.log("fetch via body"),fetch("http://localhost:1234/pages/profile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,firstName:t,lastName:a})}).then(e=>e.json()).then(e=>{console.log("Statistiques de l'admin:",e)}).catch(e=>console.error("Erreur:",e))}}),r.addEventListener("click",async()=>{let t={first_name:e.first_name.value,last_name:e.last_name.value,email:e.email.value,gender:e.gender.value,date_of_birth:e.date_of_birth.value,grade:e.grade.value,abonnement:e.abonnement.value};console.log(t);try{console.log("Informations mises à jour avec succès:",t),s(!1),r.style.display="none",o.style.display="block"}catch(e){console.error("Erreur lors de la mise à jour des informations:",e)}})}}catch(e){console.error("Erreur lors du chargement des informations :",e),a.textContent="Erreur lors du chargement des informations."}console.log("Informations ajoutées dans la div:",a)}else console.error('Aucun élément "panel-row" trouvé pour cet utilisateur.')}}r=(0,o.__decorate)([(0,l.customElement)({name:"page-dashboard",template:(0,l.html)`${e=>(0,l.html)`
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
            <div slot="header">
              <h1 class="title">Dashboard</h1>
            </div>
            <input
              type="text"
              placeholder="Rechercher un utilisateur"
            />
            <div class="table-infos">
               ${(0,l.asyncAppend)(e.preloadData(),t=>(0,l.html)`
                    ${(0,l.repeat)(t,(0,l.html)`${t=>(console.log(t),(0,l.html)`
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
        </pf-page>`}`,styles:[(0,l.css)`
        .title{
          color: black;
        }
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
      `]})],r);let s=(0,l.html)`${e=>(0,l.html)`<page-dashboard></page-dashboard>`}`;(0,l.render)(s);
//# sourceMappingURL=index.ad3863a8.js.map
