var e=globalThis,r={},t={},a=e.parcelRequirec605;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in t){var a=t[e];delete t[e];var n={id:e,exports:{}};return r[e]=n,a.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){t[e]=r},e.parcelRequirec605=a),a.register;var n=a("7WQrb"),o=a("5D1XK");a("RKbfs"),a("5OQrz"),a("2LYUy"),a("7KTRf");class l extends o.WebComponent{async preloadData(){try{let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let r=JSON.parse(e);console.log("Données utilisateur récupérées:",r);let t=await fetch("http://localhost:3000/informations",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(r)});if(!t.ok)throw Error("Erreur serveur.");let a=[await t.json()];return console.log("Données mises dans un tableau:",a,a.length),a.length>0?a:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}formatDateFromISO(e){let r=new Date(e),t=r.getFullYear(),a=String(r.getMonth()+1).padStart(2,"0"),n=String(r.getDate()).padStart(2,"0");return`${t}-${a}-${n}`}convertToISODate(e){let[r,t,a]=e.split("-");return new Date(`${r}-${t}-${a}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[]}}l=(0,n.__decorate)([(0,o.customElement)({name:"page-informations",template:(0,o.html)`${e=>(0,o.html)`
      <pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left>
          <div slot = "drawer-panel">
            <navigation-panel></navigation-panel>
          </div>
          <pf-panel header scrollable>
            <h1 slot="header">Informations</h1>
            <div class="table-infos">
              ${(0,o.asyncAppend)(e.preloadData(),r=>(0,o.html)`${(0,o.repeat)(r,(0,o.html)`${r=>(console.log(r),(0,o.html)`
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
      </pf-page>`}`,styles:[(0,o.css)`
      .table-infos {
        color: black;
      }
      .navigation{
        color: black
      }
    `]})],l);let i=(0,o.html)`${e=>(0,o.html)`<page-informations></page-informations>`}`;(0,o.render)(i);
//# sourceMappingURL=index.65bbc55e.js.map
