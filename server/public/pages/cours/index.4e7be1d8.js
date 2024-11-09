var e=globalThis,t={},r={},a=e.parcelRequirec605;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequirec605=a),a.register;var o=a("7WQrb"),n=a("5D1XK");a("RKbfs"),a("5OQrz"),a("2LYUy"),a("7KTRf");class s extends n.WebComponent{connectedCallback(){super.connectedCallback(),this.getRole()}async register(e){try{let t=localStorage.getItem("userData");if(!t)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let r=JSON.parse(t);console.log("Données utilisateur récupérées:",r);let a={user:r,cours:e};console.log(a);let o=await fetch("http://localhost:3000/cours/inscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!o.ok)throw Error("Erreur serveur.");let n=await o.json();console.log(n),n&&n.message?(console.log(n.message),"Inscription réussie !"===n.message?console.log("Bien inscrit au cours"):console.log("Pas d'inscription ou réponse inattendue.")):console.log("Réponse vide ou mal formatée.")}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async preloadData(){try{let e=await fetch("http://localhost:3000/cours/",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Erreur serveur.");let t=await e.json();return t.length>0?t:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}getRole(){let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let t=JSON.parse(e);console.log("Données utilisateur récupérées:",t);let r=t.role;console.log("Rôle de l'utilisateur:",r),"administrator"===r||"super-administrator"===r?this.isAdmin=!0:this.isAdmin=!1,console.log("Est-ce un administrateur ? ",this.isAdmin)}async loadDataParticipants(e){try{let t=e.id;console.log(t);let r=await fetch("http://localhost:3000/cours/inscription/participants",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cours_id:t})});if(!r.ok)throw Error("Erreur serveur.");let a=await r.json();if(console.log(a),Array.isArray(a))return a;return console.log("Réponse vide ou mal formatée."),[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async displayParticipants(e){try{let t=await this.loadDataParticipants(e);if(0===t.length)return(0,n.html)`<p>Aucun participant n'est inscrit pour ce cours.</p>`;return(0,n.html)`
        ${t.map(e=>(0,n.html)`
          <div class="row-info-participant">
            <div class="last_name">${e.last_name}</div>
            <div class="first_name">${e.first_name}</div>
          </div>
        `)}
      `}catch(e){return console.error("Erreur lors de l'affichage des participants :",e),(0,n.html)`<p>Erreur lors du chargement des participants.</p>`}}formatDateFromISO(e){let t=new Date(e),r=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0");return`${r}-${a}-${o}`}convertToISODate(e){let[t,r,a]=e.split("-");return new Date(`${t}-${r}-${a}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[],this.particpants=[],this.isAdmin=null}}(0,o.__decorate)([(0,n.state)()],s.prototype,"isAdmin",void 0),s=(0,o.__decorate)([(0,n.customElement)({name:"page-cours",template:(0,n.html)`${e=>(0,n.html)`
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
          <div class="panel">
            <h1 slot="header">Informations</h1>
            <div class="table-infos">
              ${(0,n.asyncAppend)(e.preloadData(),t=>(console.log(t),(0,n.html)`
                    ${(0,n.repeat)(t,(0,n.html)`${t=>(console.log(t),(0,n.html)`
                        <div class="panel-info">
                          <div class="row">
                            <div class="type-de-cours">${t.type_cours}</div>
                            <div class="date">${e.formatDateFromISO(t.date_cours)}</div>
                            <div class="heure-debut">${t.heure_debut}</div>
                            <div class="heure-fin">${t.heure_fin}</div>
                            <pf-button @click="${()=>e.register(t)}">Réservez</pf-button>
                            ${!0===e.isAdmin?(0,n.html)`<div @click="${()=>e.displayParticipants(t)}" class='icon-down'><div class='icon'><pf-icons-chevron-down></pf-icons-chevron-down></div></div>`:(0,n.html)``}
                          </div>
                          <div class="participants">
                            ${(0,n.asyncAppend)(e.displayParticipants(t),e=>e)}
                        </div>`)}`)}`))}
              </div>
            </div>
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
      `]})],s);let i=(0,n.html)`${e=>(0,n.html)`<page-cours></page-cours>`}`;(0,n.render)(i);
//# sourceMappingURL=index.4e7be1d8.js.map
