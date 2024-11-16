var e=globalThis,t={},r={},a=e.parcelRequirec605;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequirec605=a),a.register;var n=a("7WQrb"),o=a("5D1XK");a("RKbfs"),a("5OQrz"),a("2LYUy"),a("7KTRf");class l extends o.WebComponent{async preloadData(){try{let e=await fetch("http://localhost:3000/users/",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});if(!e.ok)throw Error("Erreur serveur.");let t=await e.json();return console.log(t),t.length>0?t:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async loadInfosUser(e){console.log(e);try{let t=await fetch("http://localhost:3000/users/infos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e}),credentials:"include"});if(!t.ok)throw Error("Erreur serveur.");let r=await t.json();return console.log(r),r}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async displayMoreInfos(e){console.log("User ID:",e.id);let t=this.shadowRoot?.querySelector(`.panel-row[data-user-id="${e.id}"]`);if(console.log(t),t){if(t.classList.contains("active")){t.classList.remove("active"),console.log("Panel désactivé.");return}t.classList.add("active"),console.log("Panel activé:",t);let r=t.querySelector(".new-participants");if(r||((r=document.createElement("div")).classList.add("new-participants"),t.appendChild(r)),r.children.length>0){console.log("Informations déjà chargées. Aucun rechargement nécessaire.");return}try{let t=await this.loadInfosUser(e.id);if(console.log(t),r.innerHTML="",0===Object.keys(t).length)r.textContent="Aucune information trouvée.";else{let a=document.createElement("form");a.classList.add("user-info-form");let n=(e,t,r,a=!1)=>{let n=document.createElement("div");n.classList.add("form-group");let o=document.createElement("label");o.textContent=e;let l=document.createElement("input");return l.type="text",l.name=t,l.value=r||"",l.disabled=a,l.classList.add("form-control"),n.appendChild(o),n.appendChild(l),n},o=(e,t,r,a="",n=!1)=>{let o=document.createElement("div");o.classList.add("form-group");let l=document.createElement("label");l.textContent=e;let i=document.createElement("select");return i.name=t,i.disabled=n,i.classList.add("form-control"),r.forEach(e=>{let t=document.createElement("option");t.value=e.value,t.textContent=e.text,e.value===a&&(t.selected=!0),i.appendChild(t)}),o.appendChild(l),o.appendChild(i),o};a.appendChild(n("Prénom","first_name",t.first_name,!0)),a.appendChild(n("Nom","last_name",t.last_name,!0)),a.appendChild(n("Email","email",t.email,!0)),a.appendChild(o("Choisisez votre rôle","rôle",[{value:"1",text:"user"},{value:"2",text:"administrator"},{value:"3",text:"super-administrator"}],t.role,!0)),a.appendChild(o("Choisisez votre genre","genre",[{value:"1",text:"Masculin"},{value:"2",text:"Féminin"}],t.genre,!0)),a.appendChild(n("Date de naissance","date_of_birth",new Date(t.date_of_birth).toLocaleDateString())),a.appendChild(o("Choisisez votre grade","grade",[{value:"1",text:"ceinture blanche"},{value:"2",text:"ceinture blanche une barette"},{value:"3",text:"ceinture blanche deux barettes"},{value:"4",text:"ceinture blanche trois barettes"},{value:"5",text:"ceinture blanche quatre barettes"},{value:"6",text:"ceinture bleue"},{value:"7",text:"ceinture bleue une barette"},{value:"8",text:"ceinture bleue deux barettes"},{value:"9",text:"ceinture bleue trois barettes"},{value:"10",text:"ceinture bleue quatre barettes"},{value:"11",text:"ceinture violette"},{value:"12",text:"ceinture violette une barette"},{value:"13",text:"ceinture violette deux barettes"},{value:"14",text:"ceinture violette trois barettes"},{value:"15",text:"ceinture violette quatre barettes"},{value:"16",text:"ceinture marron"},{value:"17",text:"ceinture marron une barette"},{value:"18",text:"ceinture marron deux barettes"},{value:"19",text:"ceinture marron trois barettes"},{value:"20",text:"ceinture marron quatre barettes"},{value:"21",text:"ceinture noire"},{value:"22",text:"ceinture noire une barette"},{value:"23",text:"ceinture noire deux barettes"},{value:"24",text:"ceinture noire trois barettes"},{value:"25",text:"ceinture noire quatre barettes"},{value:"26",text:"ceinture noire cinq barettes (ceinture noire avec bande rouge)"},{value:"27",text:"ceinture noire six barettes (ceinture noire avec bande rouge)"},{value:"28",text:"ceinture noire sept barettes (ceinture rouge et noire)"},{value:"29",text:"ceinture noire huit barettes (ceinture rouge et noire)"},{value:"30",text:"ceinture noire neuf barettes (ceinture rouge)"},{value:"31",text:"ceinture noire dix barettes (ceinture rouge)"}],t.grade,!0)),a.appendChild(o("Choisisez votre abonnement","abonnement",[{value:"1",text:"paiement mensuel - 25€"},{value:"2",text:"paiement- trimestriel - 100€"},{value:"3",text:"paiement annuel - 300€"}],t.abonnement,!0));let l=document.createElement("button");l.type="button",l.textContent="Modifier les informations",l.classList.add("edit-btn");let i=document.createElement("button");i.type="button",i.textContent="Présences",i.classList.add("more-infos-btn");let s=document.createElement("button");s.type="button",s.textContent="Sauvegarder",s.classList.add("save-btn"),s.style.display="none",a.appendChild(l),a.appendChild(s),r.appendChild(a),r.appendChild(i);let c=e=>{a.querySelectorAll("input").forEach(t=>{t.disabled=!e}),a.querySelectorAll("select").forEach(t=>{t.disabled=!e})};l.addEventListener("click",()=>{c(!0),s.style.display="block",l.style.display="none"}),i.addEventListener("click",()=>{console.log("more infos");let e={email:t.email,prenom:t.first_name,nom:t.last_name};console.log(e);let r=new URLSearchParams(e).toString();if(console.log("queryString"+r),window.location.href=`http://localhost:1234/pages/profile?${r}`,e.email&&e.prenom&&e.nom)fetch(`http://localhost:1234/pages/profile?${r}`).then(e=>e.json()).then(e=>{console.log("Statistiques de l'utilisateur:",e),window.location.href=`http://localhost:1234/pages/profile?${r}`}).catch(e=>console.error("Erreur:",e));else{let e=localStorage.getItem("email"),t=localStorage.getItem("firstName"),r=localStorage.getItem("lastName");console.log("fetch via body"),fetch("http://localhost:1234/pages/profile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,firstName:t,lastName:r})}).then(e=>e.json()).then(e=>{console.log("Statistiques de l'admin:",e)}).catch(e=>console.error("Erreur:",e))}}),s.addEventListener("click",async()=>{let t={};a.querySelectorAll("input").forEach(e=>{t[e.name]=e.value}),a.querySelectorAll("select").forEach(e=>{t[e.name]=e.value});try{let r=await fetch("http://localhost:3000/users/infos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e.id,data:t}),credentials:"include"});if(!r.ok)throw Error("Erreur serveur.");let a=await r.json();return console.log(a),a}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}try{console.log("Informations mises à jour avec succès:",t),c(!1),s.style.display="none",l.style.display="block"}catch(e){console.error("Erreur lors de la mise à jour des informations:",e)}})}}catch(e){console.error("Erreur lors du chargement des informations :",e),r.textContent="Erreur lors du chargement des informations."}console.log("Informations ajoutées dans la div:",r)}else console.error('Aucun élément "panel-row" trouvé pour cet utilisateur.')}}l=(0,n.__decorate)([(0,o.customElement)({name:"page-dashboard",template:(0,o.html)`${e=>(0,o.html)`
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
               ${(0,o.asyncAppend)(e.preloadData(),t=>(0,o.html)`
                    ${(0,o.repeat)(t,(0,o.html)`${t=>(console.log(t),(0,o.html)`
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
        </pf-page>`}`,styles:[(0,o.css)`
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
      `]})],l);let i=(0,o.html)`${e=>(0,o.html)`<page-dashboard></page-dashboard>`}`;(0,o.render)(i);
//# sourceMappingURL=index.f9c91f33.js.map
