var e=globalThis,t={},r={},a=e.parcelRequirec605;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequirec605=a),a.register;var n=a("7WQrb"),o=a("5D1XK");a("RKbfs"),a("5OQrz"),a("2LYUy"),a("7KTRf");class l extends o.WebComponent{async preloadData(){try{let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let t=JSON.parse(e);console.log("Données utilisateur récupérées:",t);let r=await fetch("http://localhost:3000/informations",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!r.ok)throw Error("Erreur serveur.");let a=[await r.json()];return console.log("Données mises dans un tableau:",a,a.length),a.length>0?a:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}formatDateFromISO(e){let t=new Date(e),r=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${r}-${a}-${n}`}convertToISODate(e){let[t,r,a]=e.split("-");return new Date(`${t}-${r}-${a}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[]}}l=(0,n.__decorate)([(0,o.customElement)({name:"page-informations",template:(0,o.html)`${e=>(0,o.html)`
      <pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left>
          <navigation-panel></navigation-panel>
          <pf-panel header scrollable>
            <h1 slot="header">Informations</h1>
            <div class="table-infos">
              ${(0,o.asyncAppend)(e.preloadData(),t=>(0,o.html)`${(0,o.repeat)(t,(0,o.html)`${t=>(console.log(t),(0,o.html)`
                          <div class="row">
                            <div class="type-de-cours">${e.formatDateFromISO(t.date_of_birth)}</div>
                            <div class="heure-debut">${t.email}</div>
                            <div class="heure-fin">${t.first_name}</div>
                            <div class="type-de-cours">${t.gender}</div>
                            <div class="heure-debut">${t.grade}</div>
                            <div class="heure-fin">${t.last_name}</div>
                            <div class="heure-fin">${t.role}</div>
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
    `]})],l);let s=(0,o.html)`${e=>(0,o.html)`<page-informations></page-informations>`}`;(0,o.render)(s);
//# sourceMappingURL=index.b0ffe050.js.map
