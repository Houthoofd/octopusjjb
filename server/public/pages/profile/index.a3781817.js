var e=globalThis,t={},o={},r=e.parcelRequirec605;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequirec605=r),r.register;var a=r("7WQrb"),l=r("5D1XK");r("RKbfs"),r("3I5Zu"),r("dLLJA"),r("7KTRf");class n extends l.WebComponent{connectedCallback(){super.connectedCallback(),this.getRole()}checkUserConnection(){return!!localStorage.getItem("userData")||(window.location.href="/pages/connexion",!1)}getRole(){if(!this.checkUserConnection())return;let e=JSON.parse(localStorage.getItem("userData"));console.log("Données utilisateur récupérées:",e);let t=e.role;console.log("Rôle de l'utilisateur:",t),"administrator"===t||"super-administrator"===t?this.isAdmin=!0:this.isAdmin=!1,console.log("Est-ce un administrateur ? ",this.isAdmin)}getQueryParams(){let e=new URLSearchParams(window.location.search);return{email:e.get("email"),prenom:e.get("prenom"),nom:e.get("nom")}}async preloadData(){try{let e=this.getQueryParams();if(e.email&&e.prenom&&e.nom){console.log("Données reçues depuis l'URL:",e);let t=await fetch(`http://www.octopusjjb.ovh/profile?email=${e.email}&prenom=${e.prenom}&nom=${e.nom}`,{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}});if(!t.ok)throw Error("Erreur serveur.");let o=await t.json();return o.totalCourses.length>0?o:[]}{let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let t=JSON.parse(e);console.log("Données utilisateur récupérées depuis localStorage:",t);let o=await fetch("http://www.octopusjjb.ovh/profile",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)});if(!o.ok)throw Error("Erreur serveur.");let r=await o.json();return r.totalCourses.length>0?r:[]}}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}calculatePresenceRate(e,t){let o=e.length,r=e.filter(e=>1===e.status).length;if(console.log(o,r,t),0===t||0===o)return"0%";let a=r/t*100;return console.log(a,r,t),`${a.toFixed(2)}%`}formatDateFromISO(e){let t=new Date(e),o=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0");return`${o}-${r}-${a}`}convertToISODate(e){let[t,o,r]=e.split("-");return new Date(`${t}-${o}-${r}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[],this.isAdmin=null}}(0,a.__decorate)([(0,l.state)()],n.prototype,"isAdmin",void 0),n=(0,a.__decorate)([(0,l.customElement)({name:"page-profile",template:(0,l.html)`${e=>(0,l.html)`
      <pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left>
          <div slot = "drawer-panel">
            <navigation-panel></navigation-panel>
          </div>
          <pf-panel header scrollable>
            <div slot="header">
              <h1 class="title">Profile</h1>
            </div>
            <div class="table-infos">
              ${(0,l.asyncAppend)(e.preloadData(),t=>(console.log(t),(0,l.html)`
                    <div class="row header">
                      <div class="col">Mois</div>
                      <div class="col">Total de cours</div>
                      <div class="col">Taux de présences</div>
                    </div>
                    ${(0,l.repeat)(t.totalCourses,(0,l.html)`${t=>(console.log(t.month,t.total_courses,t.presences,e.calculatePresenceRate(t.presences,t.total_courses)),(0,l.html)`
                          <div class="row">
                            <div class="col">${t.month}</div>
                            <div class="col">${t.total_courses}</div>
                            <div class="col">${e.calculatePresenceRate(t.presences,t.total_courses)}</div>
                          </div>`)}`)}`))}
            </div>
          </pf-panel>
        <pf-avatar></pf-avatar>
      </pf-page>`}`,styles:[(0,l.css)`
      .title{
        color: black;
      }
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
//# sourceMappingURL=index.a3781817.js.map
