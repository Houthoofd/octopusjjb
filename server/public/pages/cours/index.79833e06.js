var e=globalThis,r={},t={},a=e.parcelRequirec605;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in t){var a=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,a.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,r){t[e]=r},e.parcelRequirec605=a),a.register;var o=a("7WQrb"),n=a("5D1XK");a("RKbfs"),a("5OQrz"),a("2LYUy"),a("7KTRf");class l extends n.WebComponent{register(e){console.log(e)}async preloadData(){try{let e=await fetch("http://localhost:3000/cours/",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Erreur serveur.");let r=await e.json();return r.length>0?r:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}formatDateFromISO(e){let r=new Date(e),t=r.getFullYear(),a=String(r.getMonth()+1).padStart(2,"0"),o=String(r.getDate()).padStart(2,"0");return`${t}-${a}-${o}`}convertToISODate(e){let[r,t,a]=e.split("-");return new Date(`${r}-${t}-${a}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[]}}l=(0,o.__decorate)([(0,n.customElement)({name:"page-cours",template:(0,n.html)`${e=>(0,n.html)`
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
              ${(0,n.asyncAppend)(e.preloadData(),r=>(console.log(r),(0,n.html)`
                  <div class="raw-infos">
                    ${(0,n.repeat)(r,(0,n.html)`${r=>(console.log(r),(0,n.html)`
                          <div class="row">
                            <div class="type-de-cours">${r.type_cours}</div>
                            <div class="date">${e.formatDateFromISO(r.date_cours)}</div>
                            <div class="heure-debut">${r.heure_debut}</div>
                            <div class="heure-fin">${r.heure_fin}</div>
                            <pf-button @click="${()=>e.register(r)}">Réservez</pf-button>
                          </div>`)}`)}
                  </div>`))}
            </div>
          </pf-panel>
          <pf-avatar></pf-avatar>
        </pf-page>`}`,styles:[(0,n.css)`
        .table-infos {
          color: black;
        }
        .navigation {
          color: black;
        }
      `]})],l);let s=(0,n.html)`${e=>(0,n.html)`<page-cours></page-cours>`}`;(0,n.render)(s);
//# sourceMappingURL=index.79833e06.js.map
