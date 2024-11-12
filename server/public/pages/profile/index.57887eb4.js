var e=globalThis,a={},r={},t=e.parcelRequirec605;null==t&&((t=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var l={id:e,exports:{}};return a[e]=l,t.call(l.exports,l,l.exports),l.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,a){r[e]=a},e.parcelRequirec605=t),t.register;var l=t("7WQrb"),o=t("5D1XK");t("RKbfs"),t("5OQrz"),t("2LYUy"),t("7KTRf");class n extends o.WebComponent{async preloadData(){try{let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let a=JSON.parse(e);console.log("Données utilisateur récupérées:",a);let r=await fetch("http://localhost:3000/profile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!r.ok)throw Error("Erreur serveur.");let t=await r.json();console.log(t);let l=[t];return console.log("Données mises dans un tableau:",l,l.length),l.length>0?l:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}calculatePresenceRate(e){}formatDateFromISO(e){let a=new Date(e),r=a.getFullYear(),t=String(a.getMonth()+1).padStart(2,"0"),l=String(a.getDate()).padStart(2,"0");return`${r}-${t}-${l}`}convertToISODate(e){let[a,r,t]=e.split("-");return new Date(`${a}-${r}-${t}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[]}}n=(0,l.__decorate)([(0,o.customElement)({name:"page-profile",template:(0,o.html)`${e=>(0,o.html)`
      <pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left>
          <div slot = "drawer-panel">
            <navigation-panel></navigation-panel>
          </div>
          <pf-panel header scrollable>
            <h1 slot="header">Profile</h1>
            <div class="table-infos">
              ${(0,o.asyncAppend)(e.preloadData(),a=>(0,o.html)`
                    <div class="row header">
                      <div class="col">Mois</div>
                      <div class="col">Taux de présences</div>
                      <div class="col">Total de cours</div>
                    </div>
                    ${(0,o.repeat)(a,(0,o.html)`${a=>(console.log(a),(0,o.html)`
                          <div class="row">
                            <div class="col">${a.month}</div>
                            <div class="col">${a.total_courses}</div>
                            <div class="col">${e.calculatePresenceRate(a.presences)}</div>
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
//# sourceMappingURL=index.57887eb4.js.map
