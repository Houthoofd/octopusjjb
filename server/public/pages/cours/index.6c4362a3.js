var e=globalThis,t={},r={},o=e.parcelRequirec605;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequirec605=o),o.register;var a=o("7WQrb"),n=o("5D1XK");o("RKbfs"),o("5OQrz"),o("2LYUy"),o("7KTRf");class i extends n.WebComponent{connectedCallback(){super.connectedCallback(),this.getRole()}async register(e){try{let t=localStorage.getItem("userData");if(!t)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let r=JSON.parse(t);console.log("Données utilisateur récupérées:",r);let o={user:r,cours:e};console.log(o);let a=await fetch("http://localhost:3000/cours/inscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!a.ok)throw Error("Erreur serveur.");let n=await a.json();console.log(n),n&&n.message?(console.log(n.message),"Inscription réussie !"===n.message?console.log("Bien inscrit au cours"):console.log("Pas d'inscription ou réponse inattendue.")):console.log("Réponse vide ou mal formatée.")}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async preloadData(){try{let e=await fetch("http://localhost:3000/cours/",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Erreur serveur.");let t=await e.json();return t.cours.length>0?t:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}getRole(){let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let t=JSON.parse(e);console.log("Données utilisateur récupérées:",t);let r=t.role;console.log("Rôle de l'utilisateur:",r),"administrator"===r||"super-administrator"===r?this.isAdmin=!0:this.isAdmin=!1,console.log("Est-ce un administrateur ? ",this.isAdmin)}async loadParticipants(e){console.log(e);try{let t=await fetch("http://localhost:3000/cours/participant",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cour_id:e})});if(!t.ok)throw Error("Erreur serveur.");let r=await t.json();return r.participants&&r.participants.length>0?r.participants:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async displayParticipants(e){console.log("Cours ID:",e.id);let t=this.shadowRoot?.querySelector(".panel-row");if(t){t.classList.toggle("active"),console.log('Classe "active" togglée pour:',t);let r=t.querySelector(".new-participants");r||((r=document.createElement("div")).classList.add("new-participants"),t.appendChild(r));try{let t=await this.loadParticipants(e.id);r.innerHTML="",0===Object.keys(t).length?r.textContent="Aucun participant trouvé.":Object.values(t).forEach(e=>{let t=document.createElement("div");t.classList.add("pill");let o=document.createElement("div");o.classList.add("first-name"),o.textContent=e.first_name;let a=document.createElement("div");a.classList.add("last-name"),a.textContent=e.last_name;let n=document.createElement("div");n.classList.add("icon-cross");let i=document.createElement("div");i.classList.add("icon"),i.innerHTML="<pf-icons-times></pf-icons-times>",n.appendChild(i);let s=document.createElement("div");s.classList.add("icon-validate");let l=document.createElement("div");l.classList.add("icon"),l.innerHTML="<pf-icons-check></pf-icons-check>",s.appendChild(l),t.appendChild(o),t.appendChild(a),t.appendChild(n),t.appendChild(s),r.appendChild(t)})}catch(e){console.error("Erreur lors du chargement des participants:",e),r.textContent="Erreur lors du chargement des participants."}console.log("Participants ajoutés dans la div:",r)}else console.error('Aucun élément "panel-row" trouvé pour ce cours.')}formatDateFromISO(e){let t=new Date(e),r=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0");return`${r}-${o}-${a}`}convertToISODate(e){let[t,r,o]=e.split("-");return new Date(`${t}-${r}-${o}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[],this.isAdmin=null}}(0,a.__decorate)([(0,n.state)()],i.prototype,"isAdmin",void 0),i=(0,a.__decorate)([(0,n.customElement)({name:"page-cours",template:(0,n.html)`${e=>(0,n.html)`
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
            <h1 slot="header">Informations</h1>
            <div class="table-infos">
              ${(0,n.asyncAppend)(e.preloadData(),t=>(0,n.html)`
                    ${(0,n.repeat)(t.cours,(0,n.html)`${t=>(console.log(t),(0,n.html)`
                          <div class="panel-row">
                            <div class="row">
                              <div class="type-de-cours">${t.type_cours}</div>
                              <div class="date">${e.formatDateFromISO(t.date_cours)}</div>
                              <div class="heure-debut">${t.heure_debut}</div>
                              <div class="heure-fin">${t.heure_fin}</div>
                              <pf-button @click="${()=>e.register(t)}">Réservez</pf-button>
                              ${!0===e.isAdmin?(0,n.html)`<div @click="${t=>e.displayParticipants(t)}" class='icon-down'><div class='icon'><pf-icons-chevron-down></pf-icons-chevron-down></div></div>`:(0,n.html)``}
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
      `]})],i);let s=(0,n.html)`${e=>(0,n.html)`<page-cours></page-cours>`}`;(0,n.render)(s);
//# sourceMappingURL=index.6c4362a3.js.map
