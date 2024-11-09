var e=globalThis,t={},r={},o=e.parcelRequirec605;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var s={id:e,exports:{}};return t[e]=s,o.call(s.exports,s,s.exports),s.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequirec605=o),o.register;var s=o("7WQrb"),a=o("5D1XK");o("RKbfs"),o("5OQrz"),o("2LYUy"),o("7KTRf");class i extends a.WebComponent{async preloadData(){try{let e=await fetch("http://localhost:3000/cours/",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Erreur serveur.");let t=await e.json();return t.length>0?t:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}}i=(0,s.__decorate)([(0,a.customElement)({name:"table-rows-infos",template:(0,a.html)`${e=>(0,a.html)`
      <div class="table-infos">
        ${(0,a.asyncAppend)(e.preloadData(),e=>(console.log(e),(0,a.html)`
            ${(0,a.repeat)(e,(0,a.html)`${e=>(0,a.html)`<row-infos></row-infos>`}`)}`))}
      </div>
    `}`,styles:[(0,a.css)`
      /* Ajoute tes styles ici */
    `]})],i);class n extends a.WebComponent{attributeChangedCallback(e,t,r){"visible"===e&&(this.isVisible="true"===r),super.attributeChangedCallback(e,t,r)}getRole(){let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let t=JSON.parse(e);console.log("Données utilisateur récupérées:",t);let r=t.role;console.log("Rôle de l'utilisateur:",r),"administrator"===r||"super-administrator"===r?this.isAdmin=!0:this.isAdmin=!1,console.log("Est-ce un administrateur ? ",this.isAdmin)}async loadDataParticipants(e){try{let t=e.id;console.log(t);let r=await fetch("http://localhost:3000/cours/inscription/participants",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cours_id:t})});if(!r.ok)throw Error("Erreur serveur.");let o=await r.json();if(Array.isArray(o.participants))return o.participants;return console.log("Réponse vide ou mal formatée."),[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}displayParticipants(e){this.isVisible=!this.isVisible,this.visible=this.isVisible?"true":"false"}async register(e){try{let t=localStorage.getItem("userData");if(!t)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let r=JSON.parse(t);console.log("Données utilisateur récupérées:",r);let o={user:r,cours:e};console.log(o);let s=await fetch("http://localhost:3000/cours/inscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!s.ok)throw Error("Erreur serveur.");let a=await s.json();console.log(a),a&&a.message?(console.log(a.message),"Inscription réussie !"===a.message?console.log("Bien inscrit au cours"):console.log("Pas d'inscription ou réponse inattendue.")):console.log("Réponse vide ou mal formatée.")}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}formatDateFromISO(e){let t=new Date(e),r=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${r}-${o}-${s}`}convertToISODate(e){let[t,r,o]=e.split("-");return new Date(`${t}-${r}-${o}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[],this.particpants=[],this.isAdmin=null,this.isVisible=null,this.visible=null}}(0,s.__decorate)([(0,a.state)()],n.prototype,"isAdmin",void 0),(0,s.__decorate)([(0,a.state)()],n.prototype,"isVisible",void 0),(0,s.__decorate)([a.attr],n.prototype,"visible",void 0),n=(0,s.__decorate)([(0,a.customElement)({name:"row-infos",template:(0,a.html)`${e=>(0,a.html)`
        <div class="row">
          <div class="type-de-cours"></div>
          <div class="date"></div>
          <div class="heure-debut"></div>
          <div class="heure-fin"></div>
          <pf-button>Réservez</pf-button>
          ${!0===e.isAdmin?(0,a.html)`
                <div class="icon-down">
                  <div class="icon">
                    <pf-icons-chevron-down></pf-icons-chevron-down>
                  </div>
                </div>
              `:(0,a.html)``}
        </div>`}`,styles:[(0,a.css)`
      /* Ajoute tes styles ici */
    `]})],n);class l extends a.WebComponent{}l=(0,s.__decorate)([(0,a.customElement)({name:"page-cours",template:(0,a.html)`${e=>(0,a.html)`
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
            <table-rows-infos></table-rows-infos>
          <pf-avatar></pf-avatar>
        </pf-page>`}`,styles:[(0,a.css)`
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
      `]})],l);let c=(0,a.html)`${e=>(0,a.html)`<page-cours></page-cours>`}`;(0,a.render)(c);
//# sourceMappingURL=index.001233f6.js.map
