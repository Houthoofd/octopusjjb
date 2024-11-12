var e=globalThis,t={},r={},a=e.parcelRequirec605;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},e.parcelRequirec605=a),a.register;var o=a("7WQrb"),l=a("5D1XK");a("RKbfs"),a("5OQrz"),a("2LYUy"),a("7KTRf");class n extends l.WebComponent{async preloadData(){try{let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let t=JSON.parse(e);console.log("Données utilisateur récupérées:",t);let r=await fetch("http://localhost:3000/profile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!r.ok)throw Error("Erreur serveur.");let a=await r.json();console.log(a.totalCourses.length)}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}calculatePresenceRate(e){}formatDateFromISO(e){let t=new Date(e),r=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0");return`${r}-${a}-${o}`}convertToISODate(e){let[t,r,a]=e.split("-");return new Date(`${t}-${r}-${a}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[]}}n=(0,o.__decorate)([(0,l.customElement)({name:"page-profile",template:(0,l.html)`${e=>(0,l.html)`
      <pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left>
          <div slot = "drawer-panel">
            <navigation-panel></navigation-panel>
          </div>
          <pf-panel header scrollable>
            <h1 slot="header">Profile</h1>
            <div class="table-infos">
              ${(0,l.asyncAppend)(e.preloadData(),e=>(console.log(e),(0,l.html)`
                    <div class="row header">
                      <div class="col">Mois</div>
                      <div class="col">Taux de présences</div>
                      <div class="col">Total de cours</div>
                    </div>
                    ${(0,l.repeat)(e,(0,l.html)`${e=>(console.log(e.month,e.total_courses),(0,l.html)`
                          <div class="row">
                            <div class="col">${e.month}</div>
                            <div class="col">${e.total_courses}</div>
                            <div class="col"></div>
                          </div>`)}`)}`))}
            </div>
          </pf-panel>
        <pf-avatar></pf-avatar>
      </pf-page>`}`,styles:[(0,l.css)`
      .table-infos {
        color: black;
      }
      .navigation{
        color: black
      }
    `]})],n);let s=(0,l.html)`${e=>(0,l.html)`<page-profile></page-profile>`}`;(0,l.render)(s);
//# sourceMappingURL=index.70ed337c.js.map
