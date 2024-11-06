var e=globalThis,t={},a={},o=e.parcelRequirec605;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequirec605=o),o.register;var n=o("7WQrb"),r=o("5D1XK");o("RKbfs"),o("5OQrz"),o("2LYUy");class i extends r.WebComponent{async connectedCallback(){super.connectedCallback();try{let e=await this.preloadData();console.log(e.length),e.length>0&&(console.log("Nouvelles données reçues :",e),this.data=[...e],console.log("Données assignées à this.data :",this.data))}catch(e){console.error("Erreur lors de la récupération et l'assignation des données:",e)}}async preloadData(){try{let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let t=JSON.parse(e);console.log("Données utilisateur récupérées:",t);let a=await fetch("http://localhost:3000/informations",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!a.ok)throw Error("Erreur serveur.");let o=await a.json();return console.log("Réponse du serveur:",o),o.length>0?o:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}constructor(...e){super(...e),this.data=[]}}i=(0,n.__decorate)([(0,r.customElement)({name:"page-informations",template:(0,r.html)`${e=>(0,r.html)`
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
              ${(0,r.asyncAppend)(e.preloadData(),e=>(0,r.html)`${(0,r.repeat)(e,e=>(0,r.html)`
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
      </pf-page>`}`})],i);let s=(0,r.html)`${e=>(0,r.html)`<page-informations></page-informations>`}`;(0,r.render)(s);
//# sourceMappingURL=index.ae4fd644.js.map
