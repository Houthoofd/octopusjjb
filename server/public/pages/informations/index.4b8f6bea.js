var e=globalThis,t={},a={},r=e.parcelRequirec605;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequirec605=r),r.register;var i=r("7WQrb"),n=r("5D1XK");r("RKbfs"),r("5OQrz"),r("2LYUy");class o extends n.WebComponent{async preloadData(){try{let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let t=JSON.parse(e);console.log("Données utilisateur récupérées:",t);let a=await fetch("http://localhost:3000/informations",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!a.ok)throw Error("Erreur serveur.");let r=[await a.json()];return console.log("Données mises dans un tableau:",r,r.length),r.length>0?r:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}formatDateFromISO(e){let t=new Date(e),a=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0");return`${a}-${r}-${i}`}convertToISODate(e){let[t,a,r]=e.split("-");return new Date(`${t}-${a}-${r}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[]}}o=(0,i.__decorate)([(0,n.customElement)({name:"page-informations",template:(0,n.html)`${e=>(0,n.html)`
      <pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left>
        <div slot="drawer-panel">
          <pf-navigation>
            <pf-navigation-list>
              <pf-navigation-list-item><pf-button><a href="/pages/cours">Cours</a></pf-button>Cours</pf-navigation-list-item>
              <pf-navigation-list-item>Informations supplémentaires</pf-navigation-list-item>
              <pf-navigation-list-item>Compte</pf-navigation-list-item>
              <pf-navigation-list-item>profile</pf-navigation-list-item>
            </pf-navigation-list>
          </pf-navigation>
        </div>
        <div>
          <pf-panel header scrollable>
            <h1 slot="header">Informations</h1>
            <div class="table-infos">
              ${(0,n.asyncAppend)(e.preloadData(),t=>(0,n.html)`${(0,n.repeat)(t,(0,n.html)`${t=>(console.log(t),(0,n.html)`
                          <div class="row">
                            <div class="type-de-cours">${e.formatDateFromISO(t.date_of_birth)}</div>
                            <div class="heure-debut">${t.email}</div>
                            <div class="heure-fin">${t.first_name}</div>
                            <div class="type-de-cours">${t.gender}</div>
                            <div class="heure-debut">${t.grade}</div>
                            <div class="heure-fin">${t.last_name}</div>
                            <div class="heure-fin">${t.role}</div>
                          </div>`)}`)}`)}
            </div>
          </pf-panel>
        </div>
        <pf-avatar></pf-avatar>
      </pf-page>`}`,styles:[(0,n.css)`
      .table-infos {
        color: black;
      }
    `]})],o);let s=(0,n.html)`${e=>(0,n.html)`<page-informations></page-informations>`}`;(0,n.render)(s);
//# sourceMappingURL=index.4b8f6bea.js.map
