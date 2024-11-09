var e=globalThis,t={},r={},o=e.parcelRequirec605;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},e.parcelRequirec605=o),o.register;var a=o("7WQrb"),s=o("5D1XK");o("RKbfs"),o("5OQrz"),o("2LYUy"),o("7KTRf");class i extends s.WebComponent{connectedCallback(){super.connectedCallback(),this.getRole()}async register(e){try{let t=localStorage.getItem("userData");if(!t)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let r=JSON.parse(t);console.log("Données utilisateur récupérées:",r);let o={user:r,cours:e};console.log(o);let a=await fetch("http://localhost:3000/cours/inscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!a.ok)throw Error("Erreur serveur.");let s=await a.json();console.log(s),s&&s.message?(console.log(s.message),"Inscription réussie !"===s.message?console.log("Bien inscrit au cours"):console.log("Pas d'inscription ou réponse inattendue.")):console.log("Réponse vide ou mal formatée.")}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async preloadData(){try{let e=await fetch("http://localhost:3000/cours/",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Erreur serveur.");let t=await e.json();return t.cours.length>0?t:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}getRole(){let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let t=JSON.parse(e);console.log("Données utilisateur récupérées:",t);let r=t.role;console.log("Rôle de l'utilisateur:",r),"administrator"===r||"super-administrator"===r?this.isAdmin=!0:this.isAdmin=!1,console.log("Est-ce un administrateur ? ",this.isAdmin)}displayParticipants(e){console.log(e)}formatDateFromISO(e){let t=new Date(e),r=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0");return`${r}-${o}-${a}`}convertToISODate(e){let[t,r,o]=e.split("-");return new Date(`${t}-${r}-${o}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[],this.isAdmin=null}}(0,a.__decorate)([(0,s.state)()],i.prototype,"isAdmin",void 0),i=(0,a.__decorate)([(0,s.customElement)({name:"page-cours",template:(0,s.html)`${e=>(0,s.html)`
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
              ${(0,s.asyncAppend)(e.preloadData(),t=>(0,s.html)`
                    ${(0,s.repeat)(t.cours,(0,s.html)`${t=>(console.log(t.participants),(0,s.html)`
                          <div class="panel-row">
                            <div class="row">
                              <div class="type-de-cours">${t.type_cours}</div>
                              <div class="date">${e.formatDateFromISO(t.date_cours)}</div>
                              <div class="heure-debut">${t.heure_debut}</div>
                              <div class="heure-fin">${t.heure_fin}</div>
                              <pf-button @click="${()=>e.register(t)}">Réservez</pf-button>
                              ${!0===e.isAdmin?(0,s.html)`<div @click="${()=>e.displayParticipants(t)}" class='icon-down'><div class='icon'><pf-icons-chevron-down></pf-icons-chevron-down></div></div>`:(0,s.html)``}
                            </div>
                            <div class="participants">
                              ${(0,s.repeat)(t.participants,(0,s.html)`${e=>(0,s.html)`
                                    <div class="pill">
                                      <div class="first-name">${e.first_name}</div>
                                      <div class="last-name">${e.last_name}</div>
                                      <div class="icon-cross"><div class="icon"><pf-icons-times></pf-icons-times></div></div>
                                      <div class="icon-validate"><div class="icon"><pf-icons-check></pf-icons-check></div></div>
                                    </div>
                                  `}`)}
                            </div>
                          </div>`)}`)}`)}
            </div>
          </pf-panel>
          <pf-avatar></pf-avatar>
        </pf-page>`}`,styles:[(0,s.css)`
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
        .pill{
          display: flex;
          justify-content: space-between;
          background-color: #9e9e9e0f;
          width: 200px;
          padding: 10px 10px;
          border-radius: 10px;
        }
      `]})],i);let n=(0,s.html)`${e=>(0,s.html)`<page-cours></page-cours>`}`;(0,s.render)(n);
//# sourceMappingURL=index.6a5a6077.js.map
