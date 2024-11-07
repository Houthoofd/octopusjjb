var e=globalThis,r={},a={},t=e.parcelRequirec605;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,r){a[e]=r},e.parcelRequirec605=t),t.register;var o=t("7WQrb"),n=t("5D1XK");t("RKbfs"),t("5OQrz"),t("2LYUy"),t("7KTRf");class l extends n.WebComponent{async preloadData(){try{let e=await fetch("http://localhost:3000/cours",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Erreur serveur.");let r=[await e.json()];return console.log("Données récupèrées",r),r.length>0?r:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}formatDateFromISO(e){let r=new Date(e),a=r.getFullYear(),t=String(r.getMonth()+1).padStart(2,"0"),o=String(r.getDate()).padStart(2,"0");return`${a}-${t}-${o}`}convertToISODate(e){let[r,a,t]=e.split("-");return new Date(`${r}-${a}-${t}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[]}}l=(0,o.__decorate)([(0,n.customElement)({name:"page-cours",template:(0,n.html)`${e=>(0,n.html)`
      <pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left>
          <div slot = "drawer-panel">
            <navigation-panel></navigation-panel>
          </div>
          <pf-panel header scrollable>
            <h1 slot="header">Informations</h1>
            <div class="table-infos">
              ${(0,n.asyncAppend)(e.preloadData(),r=>(0,n.html)`${(0,n.repeat)(r,(0,n.html)`${r=>(console.log(r),(0,n.html)`
                          <div class="row">
                            <div class="type-de-cours">${e.formatDateFromISO(r.date_of_birth)}</div>
                            <div class="heure-debut">${r.email}</div>
                            <div class="heure-fin">${r.first_name}</div>
                            <div class="type-de-cours">${r.gender}</div>
                            <div class="heure-debut">${r.grade}</div>
                            <div class="heure-fin">${r.last_name}</div>
                            <div class="heure-fin">${r.role}</div>
                          </div>`)}`)}`)}
            </div>
          </pf-panel>
        <pf-avatar></pf-avatar>
      </pf-page>`}`,styles:[(0,n.css)`
      .table-infos {
        color: black;
      }
      .navigation{
        color: black
      }
    `]})],l);let s=(0,n.html)`${e=>(0,n.html)`<page-cours></page-cours>`}`;(0,n.render)(s);
//# sourceMappingURL=index.b385b8d0.js.map
