var e=globalThis,a={},t={},n=e.parcelRequirec605;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return a[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,a){t[e]=a},e.parcelRequirec605=n),n.register;var o=n("7WQrb"),i=n("5D1XK");n("RKbfs"),n("5OQrz"),n("2LYUy");class r extends i.WebComponent{async connectedCallback(){super.connectedCallback();try{let e=await this.preloadData();console.log(e.length),e.length>0&&(console.log("Nouvelles données reçues :",e),this.data=[...e],console.log("Données assignées à this.data :",this.data))}catch(e){console.error("Erreur lors de la récupération et l'assignation des données:",e)}}async preloadData(){try{let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let a=JSON.parse(e);console.log("Données utilisateur récupérées:",a);let t=await fetch("http://localhost:3000/informations",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!t.ok)throw Error("Erreur serveur.");let n=[await t.json()];return console.log("Données mises dans un tableau:",n,n.length),n.length>0?n:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}constructor(...e){super(...e),this.data=[]}}r=(0,o.__decorate)([(0,i.customElement)({name:"page-informations",template:(0,i.html)`${e=>(0,i.html)`
      <pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left>
        <div slot="drawer-panel">
          <pf-navigation>
            <pf-navigation-list>
              <pf-navigation-list-item @mousedown=${()=>{window.location.href="cours"}}>Cours</pf-navigation-list-item>
              <pf-navigation-list-item @mousedown=${()=>{window.location.href="informations"}}>Informations supplémentaires</pf-navigation-list-item>
              <pf-navigation-list-item @mousedown=${()=>{window.location.href="compte"}}>Compte</pf-navigation-list-item>
              <pf-navigation-list-item @mousedown=${()=>{window.location.href="profile"}}>Profile</pf-navigation-list-item>
            </pf-navigation-list>
          </pf-navigation>
        </div>
        <div>
          <pf-panel header scrollable>
            <h1 slot="header">Informations</h1>
            <div class="table-infos">
              ${(0,i.asyncAppend)(e.preloadData(),e=>(0,i.html)`${(0,i.repeat)(e,e=>(0,i.html)`
                        <div class="row">
                          <div class="type-de-cours">${e.date_of_birth}</div>
                          <div class="heure-debut">${e.email}</div>
                          <div class="heure-fin">${e.first_name}</div>
                          <div class="type-de-cours">${e.gender}</div>
                          <div class="heure-debut">${e.grade}</div>
                          <div class="heure-fin">${e.last_name}</div>
                          <div class="heure-fin">${e.role}</div>
                        </div>`)}`)}
            </div>
          </pf-panel>
        </div>
        <pf-avatar></pf-avatar>
      </pf-page>`}`})],r);let s=(0,i.html)`${e=>(0,i.html)`<page-informations></page-informations>`}`;(0,i.render)(s);
//# sourceMappingURL=index.a22c3a1f.js.map
