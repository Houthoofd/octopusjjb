var e=globalThis,r={},t={},a=e.parcelRequirec605;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in t){var a=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,a.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},e.parcelRequirec605=a),a.register;var o=a("7WQrb"),i=a("5D1XK");a("RKbfs"),a("3I5Zu"),a("dLLJA"),a("7KTRf");var n=a("keLaC");class s extends i.WebComponent{async register(e){try{let r=localStorage.getItem("userData");if(!r)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let t=JSON.parse(r);console.log("Données utilisateur récupérées:",t);let a={user:t,cours:e};console.log(a);let o=await fetch(`${n.url}cours/inscription/`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(a)});if(!o.ok)throw Error("Erreur serveur.");let i=await o.json();console.log(i),i?(i.success_message&&alert(i.success_message+"au cour du "+this.formatDateFromISO(e.date_cours)),i.info_message&&alert(i.info_message)):console.log("Réponse vide ou mal formatée."),409===o.status&&alert(i.info_message)}catch(e){return console.error("Erreur lors de la requête fetch:",e),alert("vous êtes déjà inscrit à ce cour"),[]}}async preloadData(){try{let e=await fetch(`${n.url}cours/`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Erreur serveur.");let r=await e.json();return r.cours.length>0?r:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async loadParticipants(e){console.log(e);try{let r=await fetch(`${n.url}cours/participant/`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({cour_id:e})});if(!r.ok)throw Error("Erreur serveur.");let t=await r.json();return t.participants&&t.participants.length>0?t.participants:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async displayParticipants(e){console.log("Cours ID:",e.id);let r=this.shadowRoot?.querySelector(`.panel-row[data-cours-id="${e.id}"]`);if(console.log(r),r){if(r.classList.contains("active")){r.classList.remove("active"),console.log("Panel désactivé.");return}r.classList.add("active"),console.log("Panel activé:",r);let t=r.querySelector(".new-participants");if(t&&t.children.length>0){console.log("Participants déjà chargés. Aucun rechargement nécessaire.");return}t||((t=document.createElement("div")).classList.add("new-participants"),r.appendChild(t));try{let r=await this.loadParticipants(e.id);t.innerHTML="",0===Object.keys(r).length?t.textContent="Aucun participant trouvé.":Object.values(r).forEach(r=>{let a=document.createElement("div");a.classList.add("pill");let o=document.createElement("div");o.classList.add("first-name"),o.textContent=r.first_name;let i=document.createElement("div");i.classList.add("last-name"),i.textContent=r.last_name;let s=document.createElement("div");s.classList.add("icon-cross");let c=document.createElement("div");c.classList.add("icon"),c.innerHTML="<pf-icons-times></pf-icons-times>",s.appendChild(c),s.addEventListener("click",async()=>{try{let t=await fetch(`${n.url}cours/participant/cancel/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({courId:e.id,participantId:r.participant_id})});if(!t.ok)throw Error("Erreur serveur : impossible de supprimer le participant.");let a=await t.json();a.message?(console.log("Participant supprimé avec succès."),s.parentElement.classList.toggle("invalide")):console.error("Erreur lors de la suppression du participant :",a.message)}catch(e){console.error("Erreur lors de la requête fetch :",e)}});let l=document.createElement("div");l.classList.add("icon-validate");let d=document.createElement("div");d.classList.add("icon"),d.innerHTML="<pf-icons-check></pf-icons-check>",l.appendChild(d),l.addEventListener("click",async()=>{console.log(e.id,r.participant_id);try{let t=await fetch(`${n.url}cours/participant/validation/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({courId:e.id,participantId:r.participant_id})});if(!t.ok)throw Error("Erreur serveur : impossible de valider le participant.");let a=await t.json();a.message?(console.log("Participant validé avec succès."),s.parentElement.classList.toggle("valide")):console.error("Erreur lors de la suppression du participant :",a.message)}catch(e){console.error("Erreur lors de la requête fetch :",e)}}),a.appendChild(o),a.appendChild(i),a.appendChild(s),a.appendChild(l),t.appendChild(a)})}catch(e){console.error("Erreur lors du chargement des participants:",e),t.textContent="Erreur lors du chargement des participants."}console.log("Participants ajoutés dans la div:",t)}else console.error('Aucun élément "panel-row" trouvé pour ce cours.')}formatDateFromISO(e){let r=new Date(e),t=r.getFullYear(),a=String(r.getMonth()+1).padStart(2,"0"),o=String(r.getDate()).padStart(2,"0");return`${t}-${a}-${o}`}convertToISODate(e){let[r,t,a]=e.split("-");return new Date(`${r}-${t}-${a}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[]}}s=(0,o.__decorate)([(0,i.customElement)({name:"page-cours",template:(0,i.html)`${e=>(0,i.html)`
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
              <h1 class="title">Cours</h1>
            </div>
            <div class="table-infos">
              ${(0,i.asyncAppend)(e.preloadData(),r=>(0,i.html)`
                    ${(0,i.repeat)(r.cours,(0,i.html)`${r=>(console.log(r),(0,i.html)`
                          <div class="panel-row" data-cours-id="${r.id}">
                            <div class="row">
                              <div class="type-de-cours">${r.type_cours}</div>
                              <div class="date">${e.formatDateFromISO(r.date_cours)}</div>
                              <div class="heure-debut">${r.heure_debut}</div>
                              <div class="heure-fin">${r.heure_fin}</div>
                              <pf-button @click="${()=>e.register(r)}">Réservez</pf-button>
                              ${!0===e.isAdmin?(0,i.html)`<div @click="${r=>e.displayParticipants(r)}" class='icon-down'><div class='icon'><pf-icons-chevron-down></pf-icons-chevron-down></div></div>`:(0,i.html)``}
                            </div>
                          </div>`)}`)}`)}
            </div>
          </pf-panel>
          <pf-avatar></pf-avatar>
        </pf-page>`}`,styles:[(0,i.css)`
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
        .participants{
          display: flex;
          gap: 15px;
          margin-top: 10px;
        }
        .pill{
          display: flex;
          justify-content: space-between;
          background-color: #9e9e9e0f;
          width: 200px;
          padding: 10px 10px;
          border-radius: 10px;
        }
        .pill.valide{
          background-color: green;
        }
        .pill.invalide{
          background-color: red;
        }
        .pill > .icon-cross{
          cursor: pointer;
          background-color: #f9f9f9;
          width: 24px;
          height: 24px;
          border-radius: 3px;
        }
        .pill > .icon-validate{
          cursor: pointer;
          background-color: #f9f9f9;
          width: 24px;
          height: 24px;
          border-radius: 3px;
        }
        .pill > .icon-cross > .icon{
          transform: translate(4px, 4px);
          color: #9e9e9eab;
        }
        .pill > .icon-validate > .icon{
          transform: translate(4px, 4px);
          color: #9e9e9eab;
        }
        .panel-row .new-participants {
          display: none; /* Cacher la div par défaut */
        }

        .panel-row.active .new-participants {
          display: block; /* Afficher la div quand panel-row est active */
        }
      `]})],s);let c=(0,i.html)`${e=>(0,i.html)`<page-cours></page-cours>`}`;(0,i.render)(c);
//# sourceMappingURL=index.5ddb7b50.js.map
