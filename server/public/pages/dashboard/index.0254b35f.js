var e=globalThis,r={},a={},t=e.parcelRequirec605;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var l={id:e,exports:{}};return r[e]=l,t.call(l.exports,l,l.exports),l.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){a[e]=r},e.parcelRequirec605=t),t.register;var l=t("7WQrb"),o=t("5D1XK");t("RKbfs"),t("5OQrz"),t("2LYUy"),t("7KTRf");class s extends o.WebComponent{async preloadData(){try{let e=await fetch("http://localhost:3000/users/",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Erreur serveur.");let r=await e.json();return console.log(r),r.cours.length>0?r:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}}s=(0,l.__decorate)([(0,o.customElement)({name:"page-dashboard",template:(0,o.html)`${e=>(0,o.html)`
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
               ${(0,o.asyncAppend)(e.preloadData(),e=>(0,o.html)`
                    ${(0,o.repeat)(e,(0,o.html)`${e=>(console.log(e),(0,o.html)`
                          <div class="panel-row" data-user-id="${e.id}">
                            <div class="row">
                              <div class="type-de-cours">${e.type_cours}</div>
                              <div class="heure-debut">${e.heure_debut}</div>
                              <div class="heure-fin">${e.heure_fin}</div>
                            </div>
                          </div>`)}`)}`)}
            </div>
          </pf-panel>
          <pf-avatar></pf-avatar>
        </pf-page>`}`,styles:[(0,o.css)`
        
      `]})],s);let n=(0,o.html)`${e=>(0,o.html)`<page-dashboard></page-dashboard>`}`;(0,o.render)(n);
//# sourceMappingURL=index.0254b35f.js.map
