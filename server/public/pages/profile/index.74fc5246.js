var e=globalThis,r={},t={},o=e.parcelRequirec605;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in t){var o=t[e];delete t[e];var a={id:e,exports:{}};return r[e]=a,o.call(a.exports,a,a.exports),a.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,r){t[e]=r},e.parcelRequirec605=o),o.register;var a=o("7WQrb"),l=o("5D1XK");o("RKbfs"),o("5OQrz"),o("2LYUy"),o("7KTRf");class n extends l.WebComponent{getQueryParams(){let e=new URLSearchParams(window.location.search);return{email:e.get("email"),prenom:e.get("prenom"),nom:e.get("nom")}}async preloadData(){try{let e=this.getQueryParams();if(e.email&&e.prenom&&e.nom){console.log("Données reçues depuis l'URL:",e);let r=await fetch(`http://localhost:3000/profile?email=${e.email}&prenom=${e.prenom}&nom=${e.nom}`);if(!r.ok)throw Error("Erreur serveur.");let t=await r.json();return t.totalCourses.length>0?t:[]}{let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let r=JSON.parse(e);console.log("Données utilisateur récupérées depuis localStorage:",r);let t=await fetch("http://localhost:3000/profile",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(r)});if(!t.ok)throw Error("Erreur serveur.");let o=await t.json();return o.totalCourses.length>0?o:[]}}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}calculatePresenceRate(e,r){let t=e.length,o=e.filter(e=>1===e.status).length;if(console.log(t,o,r),0===r||0===t)return"0%";let a=o/r*100;return console.log(a),`${a.toFixed(2)}%`}formatDateFromISO(e){let r=new Date(e),t=r.getFullYear(),o=String(r.getMonth()+1).padStart(2,"0"),a=String(r.getDate()).padStart(2,"0");return`${t}-${o}-${a}`}convertToISODate(e){let[r,t,o]=e.split("-");return new Date(`${r}-${t}-${o}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[]}}n=(0,a.__decorate)([(0,l.customElement)({name:"page-profile",template:(0,l.html)`${e=>(0,l.html)`
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
                    ${(0,l.repeat)(r.totalCourses,(0,l.html)`${r=>(console.log(r.month,r.total_courses,r.presences,e.calculatePresenceRate(r.presences,r.total_courses)),(0,l.html)`
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
//# sourceMappingURL=index.74fc5246.js.map
