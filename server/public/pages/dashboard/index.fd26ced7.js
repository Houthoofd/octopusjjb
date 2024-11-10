var e=globalThis,r={},a={},t=e.parcelRequirec605;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,r){a[e]=r},e.parcelRequirec605=t),t.register;var o=t("7WQrb"),l=t("5D1XK");t("RKbfs"),t("5OQrz"),t("2LYUy"),t("7KTRf");class n extends l.WebComponent{async preloadData(){try{let e=await fetch("http://localhost:3000/users/",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Erreur serveur.");let r=await e.json();return console.log(r),r.length>0?r:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}}n=(0,o.__decorate)([(0,l.customElement)({name:"page-dashboard",template:(0,l.html)`${e=>(0,l.html)`
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
            <input
              type="text"
              placeholder="Rechercher un utilisateur"
            />
            <div class="table-infos">
               ${(0,l.asyncAppend)(e.preloadData(),e=>(0,l.html)`
                    ${(0,l.repeat)(e,(0,l.html)`${e=>(console.log(e),(0,l.html)`
                          <div class="panel-row" data-user-id="${e.id}">
                            <div class="row">
                              <div class="type-de-cours">${e.last_name}</div>
                              <div class="heure-debut">${e.first_name}</div>
                              <div class="heure-fin">${e.gender}</div>
                              <div class="heure-fin">${e.grade}</div>
                            </div>
                          </div>`)}`)}`)}
            </div>
          </pf-panel>
          <pf-avatar></pf-avatar>
        </pf-page>`}`,styles:[(0,l.css)`
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
      `]})],n);let s=(0,l.html)`${e=>(0,l.html)`<page-dashboard></page-dashboard>`}`;(0,l.render)(s);
//# sourceMappingURL=index.fd26ced7.js.map
