var e=globalThis,r={},a={},t=e.parcelRequirec605;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var l={id:e,exports:{}};return r[e]=l,t.call(l.exports,l,l.exports),l.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,r){a[e]=r},e.parcelRequirec605=t),t.register;var l=t("7WQrb"),s=t("5D1XK");t("RKbfs"),t("5OQrz"),t("2LYUy"),t("7KTRf");class o extends s.WebComponent{async preloadData(){try{let e=await fetch("http://localhost:3000/users/",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Erreur serveur.");let r=await e.json();return r.cours.length>0?r:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}}o=(0,l.__decorate)([(0,s.customElement)({name:"page-dashboard",template:(0,s.html)`${e=>(0,s.html)`
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
               ${(0,s.asyncAppend)(e.preloadData(),e=>(0,s.html)`
                    ${(0,s.repeat)(e,(0,s.html)`${e=>(console.log(e),(0,s.html)`
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
        </pf-page>`}`,styles:[(0,s.css)`
        
      `]})],o);let d=(0,s.html)`${e=>(0,s.html)`<page-dashboard></page-dashboard>`}`;(0,s.render)(d);
//# sourceMappingURL=index.f5b15a09.js.map
