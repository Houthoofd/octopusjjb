var e=globalThis,t={},a={},r=e.parcelRequirec605;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},e.parcelRequirec605=r),r.register;var n=r("7WQrb"),l=r("5D1XK");r("RKbfs"),r("5OQrz"),r("2LYUy"),r("7KTRf");class o extends l.WebComponent{async preloadData(){try{let e=await fetch("http://localhost:3000/users/",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});if(!e.ok)throw Error("Erreur serveur.");let t=await e.json();return console.log(t),t.length>0?t:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async loadInfosUser(e){console.log(e);try{let t=await fetch("http://localhost:3000/users/infos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e}),credentials:"include"});if(!t.ok)throw Error("Erreur serveur.");let a=await t.json();return console.log(a),a}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async displayMoreInfos(e){console.log("User ID:",e.id);let t=this.shadowRoot?.querySelector(`.panel-row[data-user-id="${e.id}"]`);if(console.log(t),t){if(t.classList.contains("active")){t.classList.remove("active"),console.log("Panel désactivé.");return}t.classList.add("active"),console.log("Panel activé:",t);let a=t.querySelector(".new-participants");if(a||((a=document.createElement("div")).classList.add("new-participants"),t.appendChild(a)),a.children.length>0){console.log("Informations déjà chargées. Aucun rechargement nécessaire.");return}try{let t=await this.loadInfosUser(e.id);if(console.log(t),a.innerHTML="",0===Object.keys(t).length)a.textContent="Aucune information trouvée.";else{let e=document.createElement("form");e.classList.add("user-info-form");let r=(e,t,a,r=!1)=>{let n=document.createElement("div");n.classList.add("form-group");let l=document.createElement("label");l.textContent=e;let o=document.createElement("input");return o.type="text",o.name=t,o.value=a||"",o.disabled=r,o.classList.add("form-control"),n.appendChild(l),n.appendChild(o),n},n=(e,t,a,r="",n=!1)=>{let l=document.createElement("div");l.classList.add("form-group");let o=document.createElement("label");o.textContent=e;let i=document.createElement("select");return i.name=t,i.disabled=n,i.classList.add("form-control"),a.forEach(e=>{let t=document.createElement("option");t.value=e.value,t.textContent=e.text,e.value===r&&(t.selected=!0),i.appendChild(t)}),l.appendChild(o),l.appendChild(i),l};e.appendChild(r("Prénom","first_name",t.first_name,!0)),e.appendChild(r("Nom","last_name",t.last_name,!0)),e.appendChild(r("Email","email",t.email,!0)),e.appendChild(r("Rôle","role",t.role,!0)),e.appendChild(r("Genre","gender",t.gender,!0)),e.appendChild(r("Date de naissance","date_of_birth",new Date(t.date_of_birth).toLocaleDateString())),e.appendChild(n("Choisisez votre grade","grade",[{value:"1",text:"ceinture blanche"},{value:"2",text:"ceinture blanche une barette"},{value:"3",text:"ceinture blanche deux barettes"},{value:"4",text:"ceinture blanche trois barettes"},{value:"5",text:"ceinture blanche quatre barettes"},{value:"6",text:"ceinture bleue"},{value:"7",text:"ceinture bleue une barette"},{value:"8",text:"ceinture bleue deux barettes"},{value:"9",text:"ceinture bleue trois barettes"},{value:"10",text:"ceinture bleue quatre barettes"},{value:"11",text:"ceinture violette"},{value:"12",text:"ceinture violette une barette"},{value:"13",text:"ceinture violette deux barettes"},{value:"14",text:"ceinture violette trois barettes"},{value:"15",text:"ceinture violette quatre barettes"},{value:"16",text:"ceinture marron"},{value:"17",text:"ceinture marron une barette"},{value:"18",text:"ceinture marron deux barettes"},{value:"19",text:"ceinture marron trois barettes"},{value:"20",text:"ceinture marron quatre barettes"},{value:"21",text:"ceinture noire"},{value:"22",text:"ceinture noire une barette"},{value:"23",text:"ceinture noire deux barettes"},{value:"24",text:"ceinture noire trois barettes"},{value:"25",text:"ceinture noire quatre barettes"},{value:"26",text:"ceinture noire cinq barettes (ceinture noire avec bande rouge)"},{value:"27",text:"ceinture noire six barettes (ceinture noire avec bande rouge)"},{value:"28",text:"ceinture noire sept barettes (ceinture rouge et noire)"},{value:"29",text:"ceinture noire huit barettes (ceinture rouge et noire)"},{value:"30",text:"ceinture noire neuf barettes (ceinture rouge)"},{value:"31",text:"ceinture noire dix barettes (ceinture rouge)"}],t.grade,!0)),e.appendChild(n("Choisisez votre abonnement","abonnement",[{value:"1",text:"paiement mensuel - 25€"},{value:"2",text:"paiement- trimestriel - 100€"},{value:"3",text:"paiement annuel - 300€"}],t.abonnement,!0));let l=document.createElement("button");l.type="button",l.textContent="Modifier les informations",l.classList.add("edit-btn");let o=document.createElement("button");o.type="button",o.textContent="Présences",o.classList.add("more-infos-btn");let i=document.createElement("button");i.type="button",i.textContent="Sauvegarder",i.classList.add("save-btn"),i.style.display="none",e.appendChild(l),e.appendChild(i),a.appendChild(e),a.appendChild(o);let s=t=>{e.querySelectorAll("input").forEach(e=>{"role"!==e.name&&(e.disabled=!t)})};l.addEventListener("click",()=>{s(!0),i.style.display="block",l.style.display="none"}),o.addEventListener("click",()=>{console.log("more infos");let e={email:t.email,prenom:t.first_name,nom:t.last_name};console.log(e);let a=new URLSearchParams(e).toString();if(console.log("queryString"+a),window.location.href=`http://localhost:1234/pages/profile?${a}`,e.email&&e.prenom&&e.nom)fetch(`http://localhost:1234/pages/profile?${a}`).then(e=>e.json()).then(e=>{console.log("Statistiques de l'utilisateur:",e),window.location.href=`http://localhost:1234/pages/profile?${a}`}).catch(e=>console.error("Erreur:",e));else{let e=localStorage.getItem("email"),t=localStorage.getItem("firstName"),a=localStorage.getItem("lastName");console.log("fetch via body"),fetch("http://localhost:1234/pages/profile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,firstName:t,lastName:a})}).then(e=>e.json()).then(e=>{console.log("Statistiques de l'admin:",e)}).catch(e=>console.error("Erreur:",e))}}),i.addEventListener("click",async()=>{let t={first_name:e.first_name.value,last_name:e.last_name.value,email:e.email.value,gender:e.gender.value,date_of_birth:e.date_of_birth.value,grade:e.grade.value,abonnement:e.abonnement.value};console.log(t);try{console.log("Informations mises à jour avec succès:",t),s(!1),i.style.display="none",l.style.display="block"}catch(e){console.error("Erreur lors de la mise à jour des informations:",e)}})}}catch(e){console.error("Erreur lors du chargement des informations :",e),a.textContent="Erreur lors du chargement des informations."}console.log("Informations ajoutées dans la div:",a)}else console.error('Aucun élément "panel-row" trouvé pour cet utilisateur.')}}o=(0,n.__decorate)([(0,l.customElement)({name:"page-dashboard",template:(0,l.html)`${e=>(0,l.html)`
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
      `]})],o);let i=(0,l.html)`${e=>(0,l.html)`<page-dashboard></page-dashboard>`}`;(0,l.render)(i);
//# sourceMappingURL=index.c4a963df.js.map
