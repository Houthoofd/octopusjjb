var e=globalThis,t={},r={},a=e.parcelRequirec605;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequirec605=a),a.register;var o=a("7WQrb"),n=a("5D1XK");a("RKbfs"),a("5OQrz"),a("2LYUy"),a("7KTRf");class i extends n.WebComponent{connectedCallback(){super.connectedCallback(),this.getRole()}async register(e){}async preloadData(){try{let e=await fetch("http://localhost:3000/cours/",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Erreur serveur.");let t=await e.json();return t.cours.length>0?t:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}getRole(){let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let t=JSON.parse(e);console.log("Données utilisateur récupérées:",t);let r=t.role;console.log("Rôle de l'utilisateur:",r),"administrator"===r||"super-administrator"===r?this.isAdmin=!0:this.isAdmin=!1,console.log("Est-ce un administrateur ? ",this.isAdmin)}async loadParticipants(e){console.log(e);try{let t=await fetch("http://localhost:3000/cours/inscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cour_id:e})});if(!t.ok)throw Error("Erreur serveur.");let r=await t.json();return r.cours.length>0?r:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async displayParticipants(e){console.log("Cours ID:",e.id);let t=this.shadowRoot?.querySelector(".panel-row");if(t){t.classList.toggle("active"),console.log('Classe "active" togglée pour:',t);let r=t.querySelector(".new-participants");r||((r=document.createElement("div")).classList.add("new-participants"),t.appendChild(r));try{let t=await this.loadParticipants(e.id);if(0===Object.keys(t).length)r.textContent="Aucun participant trouvé.";else{let e=Object.values(t);r.textContent=`Participants: ${e.map(e=>`${e.first_name} ${e.last_name}`).join(", ")}`}}catch(e){console.error("Erreur lors du chargement des participants:",e),r.textContent="Erreur lors du chargement des participants."}console.log("Participants ajoutés dans la div:",r)}else console.error('Aucun élément "panel-row" trouvé pour ce cours.')}formatDateFromISO(e){let t=new Date(e),r=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0");return`${r}-${a}-${o}`}convertToISODate(e){let[t,r,a]=e.split("-");return new Date(`${t}-${r}-${a}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[],this.isAdmin=null}}(0,o.__decorate)([(0,n.state)()],i.prototype,"isAdmin",void 0),i=(0,o.__decorate)([(0,n.customElement)({name:"page-cours",template:(0,n.html)`${e=>(0,n.html)`
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
//# sourceMappingURL=index.d263fc96.js.map
