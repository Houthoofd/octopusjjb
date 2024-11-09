var e=globalThis,t={},r={},a=e.parcelRequirec605;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequirec605=a),a.register;var o=a("7WQrb"),i=a("5D1XK");a("RKbfs"),a("5OQrz"),a("2LYUy"),a("7KTRf");class s extends i.WebComponent{connectedCallback(){super.connectedCallback(),this.getRole()}attributeChangedCallback(e,t,r){"visible"===e&&(this.isVisible="true"===r),super.attributeChangedCallback(e,t,r)}async register(e){try{let t=localStorage.getItem("userData");if(!t)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let r=JSON.parse(t);console.log("Données utilisateur récupérées:",r);let a={user:r,cours:e};console.log(a);let o=await fetch("http://localhost:3000/cours/inscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!o.ok)throw Error("Erreur serveur.");let i=await o.json();console.log(i),i&&i.message?(console.log(i.message),"Inscription réussie !"===i.message?console.log("Bien inscrit au cours"):console.log("Pas d'inscription ou réponse inattendue.")):console.log("Réponse vide ou mal formatée.")}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async preloadData(){try{let e=await fetch("http://localhost:3000/cours/",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Erreur serveur.");let t=await e.json();return t.length>0?t:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}getRole(){let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let t=JSON.parse(e);console.log("Données utilisateur récupérées:",t);let r=t.role;console.log("Rôle de l'utilisateur:",r),"administrator"===r||"super-administrator"===r?this.isAdmin=!0:this.isAdmin=!1,console.log("Est-ce un administrateur ? ",this.isAdmin)}async loadDataParticipants(e){try{let t=e.id;console.log(t);let r=await fetch("http://localhost:3000/cours/inscription/participants",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cours_id:t})});if(!r.ok)throw Error("Erreur serveur.");let a=await r.json();if(Array.isArray(a.participants))return a.participants;return console.log("Réponse vide ou mal formatée."),[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}displayParticipants(e){this.isVisible=!this.isVisible,this.visible=this.isVisible?"true":"false"}formatDateFromISO(e){let t=new Date(e),r=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0");return`${r}-${a}-${o}`}convertToISODate(e){let[t,r,a]=e.split("-");return new Date(`${t}-${r}-${a}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[],this.particpants=[],this.visible=null,this.isAdmin=null,this.isVisible=null}}(0,o.__decorate)([i.attr],s.prototype,"visible",void 0),(0,o.__decorate)([(0,i.state)()],s.prototype,"isAdmin",void 0),(0,o.__decorate)([(0,i.state)()],s.prototype,"isVisible",void 0),s=(0,o.__decorate)([(0,i.customElement)({name:"page-cours",template:(0,i.html)`${e=>(0,i.html)`
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
              ${(0,i.asyncAppend)(e.preloadData(),t=>(console.log(t),(0,i.html)`
                    ${(0,i.repeat)(t,(0,i.html)`${t=>(console.log(t),(0,i.html)`
                        <div class="panel-info">
                          <div class="row">
                            <div class="type-de-cours">${t.type_cours}</div>
                            <div class="date">${e.formatDateFromISO(t.date_cours)}</div>
                            <div class="heure-debut">${t.heure_debut}</div>
                            <div class="heure-fin">${t.heure_fin}</div>
                            <pf-button @click="${()=>e.register(t)}">Réservez</pf-button>
                            ${!0===e.isAdmin?(0,i.html)`<div @click="${()=>e.displayParticipants(t)}" class='icon-down'><div class='icon'><pf-icons-chevron-down></pf-icons-chevron-down></div></div>`:(0,i.html)``}
                          </div>
                          <div class="participants">
                            ${(0,i.asyncAppend)(e.loadDataParticipants(t),e=>(0,i.html)`${(0,i.repeat)(e,(0,i.html)`${e=>(0,i.html)`<div class="row-participant-info">
                                      <div class="first-name">${e.first_name}</div>
                                      <div class="last-name">${e.last_name}</div>
                                    </div>`}`)}`)}
                          </div>
                        </div>`)}`)}`))}
              </div>
            </div>
          <pf-avatar></pf-avatar>
        </pf-page>`}`,styles:[(0,i.css)`
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
      `]})],s);let n=(0,i.html)`${e=>(0,i.html)`<page-cours></page-cours>`}`;(0,i.render)(n);
//# sourceMappingURL=index.b320579d.js.map
