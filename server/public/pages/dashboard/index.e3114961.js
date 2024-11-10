var e=globalThis,a={},r={},t=e.parcelRequirec605;null==t&&((t=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,a){r[e]=a},e.parcelRequirec605=t),t.register;var o=t("7WQrb"),n=t("5D1XK");t("RKbfs"),t("5OQrz"),t("2LYUy"),t("7KTRf");class l extends n.WebComponent{async preloadData(){try{let e=await fetch("http://localhost:3000/users/",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Erreur serveur.");let a=await e.json();return console.log(a),a.length>0?a:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}}l=(0,o.__decorate)([(0,n.customElement)({name:"page-dashboard",template:(0,n.html)`${e=>(0,n.html)`
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
               ${(0,n.asyncAppend)(e.preloadData(),e=>(0,n.html)`
                    ${(0,n.repeat)(e,(0,n.html)`${e=>(console.log(e),(0,n.html)`
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
      `]})],l);let s=(0,n.html)`${e=>(0,n.html)`<page-dashboard></page-dashboard>`}`;(0,n.render)(s);
//# sourceMappingURL=index.e3114961.js.map
