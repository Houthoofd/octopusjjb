var e=globalThis,t={},a={},i=e.parcelRequirec605;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var i=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,i.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequirec605=i),i.register;var o=i("7WQrb"),r=i("5D1XK");i("RKbfs"),i("5OQrz"),i("2LYUy");class n extends r.WebComponent{async preloadData(){try{let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let t=JSON.parse(e);console.log(t);let a=await fetch("http://localhost:3000/informations",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!a.ok)throw Error("Erreur serveur.");let i=await a.json();return i.length>0?i:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}constructor(...e){super(...e),this.data=[]}}n=(0,o.__decorate)([(0,r.customElement)({name:"page-informations",template:(0,r.html)`${e=>(0,r.html)`<pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left >
    <div slot = "drawer-panel">
      <pf-navigation>
        <pf-navigation-list>
            <pf-navigation-list-item
              @mousedown=${()=>{window.location.href="cours"}}>
                Cours
            </pf-navigation-list-item>
            <pf-navigation-list-item
              @mousedown=${()=>{window.location.href="informations"}}>
                Informations supplémentaires
            </pf-navigation-list-item>
            <pf-navigation-list-item
              @mousedown=${()=>{window.location.href="compte"}}>
                Compte
            </pf-navigation-list-item>
            <pf-navigation-list-item
              @mousedown=${()=>{window.location.href="profile"}}>
                Profile
            </pf-navigation-list-item>
        </pf-navigation-list>
      </pf-navigation>
    </div>
    <div>
      <pf-panel header scrollable>
        <h1 slot = "header" >Informations</h1>
        <div class="table-infos">
              ${(0,r.asyncAppend)(e.preloadData(),e=>(console.log(e),(0,r.html)`
                  <div class="raw-infos">
                      ${(0,r.repeat)(e,(0,r.html)`${e=>(console.log(e),(0,r.html)`
                                      <div class="row"">
                                          <div class="type-de-cours">${e.date_of_birth}</div>
                                          <div class="heure-debut">${e.email}</div>
                                          <div class="heure-fin">${e.first_name}</div>
                                          <div class="type-de-cours">${e.gender}</div>
                                          <div class="heure-debut">${e.grade}</div>
                                          <div class="heure-fin">${e.last_name}</div>
                                          <div class="heure-fin">${e.role}</div>
                                      </div>`)}`)}
                  </div>
                  `))}
          </div>
      </pf-panel>
    </div>
    <pf-avatar></pf-avatar>
  </pf-page>`}`})],n);let s=(0,r.html)`${e=>(0,r.html)`<page-informations></page-informations>`}`;(0,r.render)(s);
//# sourceMappingURL=index.8e48a51b.js.map
