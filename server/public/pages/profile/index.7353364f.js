var e=globalThis,t={},r={},a=e.parcelRequirec605;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var l={id:e,exports:{}};return t[e]=l,a.call(l.exports,l,l.exports),l.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequirec605=a),a.register;var l=a("7WQrb"),o=a("5D1XK");a("RKbfs"),a("5OQrz"),a("2LYUy"),a("7KTRf");class n extends o.WebComponent{async preloadData(){try{let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let t=JSON.parse(e);console.log("Données utilisateur récupérées:",t);let r=await fetch("http://localhost:3000/profile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!r.ok)throw Error("Erreur serveur.");let a=await r.json();console.log(a);let l=[a];return console.log("Données mises dans un tableau:",l,l.length),l.length>0?l:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}calculatePresenceRate(e){let t=e.length,r=e.filter(e=>1===e.status).length;return 0===t?"0%":`${(r/t*100).toFixed(2)}%`}formatDateFromISO(e){let t=new Date(e),r=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),l=String(t.getDate()).padStart(2,"0");return`${r}-${a}-${l}`}convertToISODate(e){let[t,r,a]=e.split("-");return new Date(`${t}-${r}-${a}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[]}}n=(0,l.__decorate)([(0,o.customElement)({name:"page-profile",template:(0,o.html)`${e=>(0,o.html)`
      <pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left>
          <div slot = "drawer-panel">
            <navigation-panel></navigation-panel>
          </div>
          <pf-panel header scrollable>
            <h1 slot="header">Profile</h1>
            <div class="table-infos">
              ${(0,o.asyncAppend)(e.preloadData(),t=>(0,o.html)`
                    <div class="row header">
                      <div class="col">Mois</div>
                      <div class="col">Taux de présences</div>
                      <div class="col">Total de cours</div>
                    </div>
                    ${(0,o.repeat)(t,(0,o.html)`${t=>(console.log(t),(0,o.html)`
                          <div class="row">
                            <div class="col">${t.month}</div>
                            <div class="col">${t.total_courses}</div>
                            <div class="col">${e.calculatePresenceRate(t.presences)}</div>
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
    `]})],n);let s=(0,o.html)`${e=>(0,o.html)`<page-profile></page-profile>`}`;(0,o.render)(s);
//# sourceMappingURL=index.7353364f.js.map
