var e=globalThis,r={},a={},t=e.parcelRequirec605;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var s={id:e,exports:{}};return r[e]=s,t.call(s.exports,s,s.exports),s.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){a[e]=r},e.parcelRequirec605=t),t.register;var s=t("7WQrb"),o=t("5D1XK");t("RKbfs"),t("5OQrz"),t("2LYUy"),t("7KTRf");class n extends o.WebComponent{async preloadData(){try{let e=await fetch("http://localhost:3000/users/",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Erreur serveur.");let r=await e.json();return r.cours.length>0?r:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}}n=(0,s.__decorate)([(0,o.customElement)({name:"page-cours",template:(0,o.html)`${e=>(0,o.html)`
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
            <h1 slot="header">Dashboard</h1>
            <div class="table-infos">
               ${(0,o.asyncAppend)(cours.preloadData(),e=>(0,o.html)`
                    ${(0,o.repeat)(e.cours,(0,o.html)`${e=>(console.log(e),(0,o.html)`
                          <div class="panel-row" data-cours-id="${e.id}">
                            <div class="row">
                              <div class="type-de-cours">${e.type_cours}</div>
                              <div class="date">${cours.formatDateFromISO(e.date_cours)}</div>
                              <div class="heure-debut">${e.heure_debut}</div>
                              <div class="heure-fin">${e.heure_fin}</div>
                              <pf-button @click="${()=>cours.register(e)}">Réservez</pf-button>
                              ${!0===cours.isAdmin?(0,o.html)`<div @click="${e=>cours.displayParticipants(e)}" class='icon-down'><div class='icon'><pf-icons-chevron-down></pf-icons-chevron-down></div></div>`:(0,o.html)``}
                            </div>
                          </div>`)}`)}`)}
            </div>
          </pf-panel>
          <pf-avatar></pf-avatar>
        </pf-page>`}`,styles:[(0,o.css)`
        
      `]})],n);let i=(0,o.html)`${e=>(0,o.html)`<page-cours></page-cours>`}`;(0,o.render)(i);
//# sourceMappingURL=index.41f1ad4c.js.map
