var e=globalThis,r={},t={},o=e.parcelRequirec605;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in t){var o=t[e];delete t[e];var a={id:e,exports:{}};return r[e]=a,o.call(a.exports,a,a.exports),a.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,r){t[e]=r},e.parcelRequirec605=o),o.register;var a=o("7WQrb"),n=o("5D1XK");o("RKbfs"),o("5OQrz"),o("2LYUy"),o("7KTRf");class s extends n.WebComponent{connectedCallback(){super.connectedCallback(),this.getRole()}async register(e){try{let r=localStorage.getItem("userData");if(!r)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let t=JSON.parse(r);console.log("Données utilisateur récupérées:",t);let o={user:t,cours:e};console.log(o);let a=await fetch("http://localhost:3000/cours/inscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!a.ok)throw Error("Erreur serveur.");let n=await a.json();console.log(n),n&&n.message?(console.log(n.message),"Inscription réussie !"===n.message?console.log("Bien inscrit au cours"):console.log("Pas d'inscription ou réponse inattendue.")):console.log("Réponse vide ou mal formatée.")}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async preloadData(){try{let e=await fetch("http://localhost:3000/cours/",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Erreur serveur.");let r=await e.json();return r.cours.length>0?r:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}getRole(){let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let r=JSON.parse(e);console.log("Données utilisateur récupérées:",r);let t=r.role;console.log("Rôle de l'utilisateur:",t),"administrator"===t||"super-administrator"===t?this.isAdmin=!0:this.isAdmin=!1,console.log("Est-ce un administrateur ? ",this.isAdmin)}async loadParticipants(e){console.log(e);try{let r=await fetch("http://localhost:3000/cours/inscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cour_id:e.id})});if(!r.ok)throw Error("Erreur serveur.");let t=await r.json();return t.cours.length>0?t:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}displayParticipants(e){console.log(e);let r=e.target.closest(".panel-row");if(!r){console.error('Aucun élément "panel-row" trouvé.');return}r.classList.toggle("active"),console.log('Classe "active" togglée pour',r)}formatDateFromISO(e){let r=new Date(e),t=r.getFullYear(),o=String(r.getMonth()+1).padStart(2,"0"),a=String(r.getDate()).padStart(2,"0");return`${t}-${o}-${a}`}convertToISODate(e){let[r,t,o]=e.split("-");return new Date(`${r}-${t}-${o}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[],this.isAdmin=null}}(0,a.__decorate)([(0,n.state)()],s.prototype,"isAdmin",void 0),s=(0,a.__decorate)([(0,n.customElement)({name:"page-cours",template:(0,n.html)`${e=>(0,n.html)`
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
              ${(0,n.asyncAppend)(e.preloadData(),r=>(0,n.html)`
                    ${(0,n.repeat)(r.cours,(0,n.html)`${r=>(console.log(r.participants),(0,n.html)`
                          <div class="panel-row">
                            <div class="row">
                              <div class="type-de-cours">${r.type_cours}</div>
                              <div class="date">${e.formatDateFromISO(r.date_cours)}</div>
                              <div class="heure-debut">${r.heure_debut}</div>
                              <div class="heure-fin">${r.heure_fin}</div>
                              <pf-button @click="${()=>e.register(r)}">Réservez</pf-button>
                              ${!0===e.isAdmin?(0,n.html)`<div @click="${r=>e.displayParticipants(r)}" class='icon-down'><div class='icon'><pf-icons-chevron-down></pf-icons-chevron-down></div></div>`:(0,n.html)``}
                            </div>
                            <div class="participants">
                              ${e.loadParticipants(r)}
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
      `]})],s);let i=(0,n.html)`${e=>(0,n.html)`<page-cours></page-cours>`}`;(0,n.render)(i);
//# sourceMappingURL=index.6077d490.js.map
