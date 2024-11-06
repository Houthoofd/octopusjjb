var e=globalThis,t={},a={},i=e.parcelRequirec605;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var i=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,i.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequirec605=i),i.register;var r=i("7WQrb"),n=i("5D1XK");i("RKbfs"),i("5OQrz"),i("2LYUy");class o extends n.WebComponent{async preloadData(){try{let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let t=JSON.parse(e);console.log(t);let a=await fetch("http://localhost:3000/informations",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!a.ok)throw Error("Erreur serveur.");let i=await a.json();return i.length>0?i:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}constructor(...e){super(...e),this.data=[]}}o=(0,r.__decorate)([(0,n.customElement)({name:"page-informations",template:(0,n.html)`${e=>(0,n.html)`
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
              ${e.data.length>0?(0,n.html)`
                  <div class="raw-infos">
                    ${(0,n.repeat)(e.data,(0,n.html)`${e=>(0,n.html)`
                          <div class="row">
                            <div class="type-de-cours">${e.date_of_birth}</div>
                            <div class="heure-debut">${e.email}</div>
                            <div class="heure-fin">${e.first_name}</div>
                            <div class="type-de-cours">${e.gender}</div>
                            <div class="heure-debut">${e.grade}</div>
                            <div class="heure-fin">${e.last_name}</div>
                            <div class="heure-fin">${e.role}</div>
                          </div>`}`)}
                  </div>`:(0,n.html)`<p>Aucune donnée disponible.</p>`}
            </div>
          </pf-panel>
        </div>
        <pf-avatar></pf-avatar>
      </pf-page>`}`})],o);let s=(0,n.html)`${e=>(0,n.html)`<page-informations></page-informations>`}`;(0,n.render)(s);
//# sourceMappingURL=index.d2edd9b6.js.map
