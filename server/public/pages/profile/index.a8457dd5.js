var e=globalThis,r={},t={},a=e.parcelRequirec605;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in t){var a=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,a.call(o.exports,o,o.exports),o.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,r){t[e]=r},e.parcelRequirec605=a),a.register;var o=a("7WQrb"),l=a("5D1XK");a("RKbfs"),a("5OQrz"),a("2LYUy"),a("7KTRf");class n extends l.WebComponent{getQueryParams(){let e=new URLSearchParams(window.location.search);return{email:e.get("email"),prenom:e.get("prenom"),nom:e.get("nom")}}async preloadData(){try{let e=this.getQueryParams();if(e.email&&e.prenom&&e.nom){console.log("Données reçues depuis l'URL:",e);let r=await fetch(`http://localhost:3000/profile?email=${e.email}&prenom=${e.prenom}&nom=${e.nom}`);if(!r.ok)throw Error("Erreur serveur.");let t=await r.json();return t.totalCourses.length>0?t:[]}{let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let r=JSON.parse(e);console.log("Données utilisateur récupérées depuis localStorage:",r);let t=await fetch("http://localhost:3000/profile",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(r)});if(!t.ok)throw Error("Erreur serveur.");let a=await t.json();return a.totalCourses.length>0?a:[]}}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}calculatePresenceRate(e,r){let t=e.length,a=e.filter(e=>1===e.status).length;return(console.log(t,a,r),0===r||0===t)?"0%":`${(a/r*100).toFixed(2)}%`}formatDateFromISO(e){let r=new Date(e),t=r.getFullYear(),a=String(r.getMonth()+1).padStart(2,"0"),o=String(r.getDate()).padStart(2,"0");return`${t}-${a}-${o}`}convertToISODate(e){let[r,t,a]=e.split("-");return new Date(`${r}-${t}-${a}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[]}}n=(0,o.__decorate)([(0,l.customElement)({name:"page-profile",template:(0,l.html)`${e=>(0,l.html)`
      <pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left>
          <div slot = "drawer-panel">
            <navigation-panel></navigation-panel>
          </div>
          <pf-panel header scrollable>
            <h1 slot="header">Profile</h1>
            <div class="table-infos">
              ${(0,l.asyncAppend)(e.preloadData(),r=>(console.log(r),(0,l.html)`
                    <div class="row header">
                      <div class="col">Mois</div>
                      <div class="col">Total de cours</div>
                      <div class="col">Taux de présences</div>
                    </div>
                    ${(0,l.repeat)(r.totalCourses,(0,l.html)`${r=>(console.log(r.mont,r.total_courses,r.presences,e.calculatePresenceRate(r.presences,r.total_courses)),(0,l.html)`
                          <div class="row">
                            <div class="col">${r.month}</div>
                            <div class="col">${r.total_courses}</div>
                            <div class="col">${e.calculatePresenceRate(r.presences,r.total_courses)}</div>
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
      .table-infos .row {
  display: flex;
  padding: 10px 0;
}

.table-infos .row.header {
  font-weight: bold;
  background-color: #f4f4f4;
}

.table-infos .col {
  flex: 1;
  padding: 5px;
  border-bottom: 1px solid #ddd;
}

.table-infos .row:hover {
  background-color: #f9f9f9;
}
    `]})],n);let s=(0,l.html)`${e=>(0,l.html)`<page-profile></page-profile>`}`;(0,l.render)(s);
//# sourceMappingURL=index.a8457dd5.js.map
