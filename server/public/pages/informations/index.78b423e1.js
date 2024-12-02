var e=globalThis,t={},a={},r=e.parcelRequirec605;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequirec605=r),r.register;var n=r("7WQrb"),o=r("5D1XK");r("RKbfs"),r("3I5Zu"),r("dLLJA"),r("7KTRf");class l extends o.WebComponent{async preloadData(){try{let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let t=JSON.parse(e);console.log("Données utilisateur récupérées:",t);let a=await fetch("http://localhost:3000/compte",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)});if(!a.ok)throw Error("Erreur serveur.");let r=[await a.json()];return console.log("Données mises dans un tableau:",r,r.length),r.length>0?r:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}formatDateFromISO(e){let t=new Date(e),a=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${a}-${r}-${n}`}convertToISODate(e){let[t,a,r]=e.split("-");return new Date(`${t}-${a}-${r}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[]}}l=(0,n.__decorate)([(0,o.customElement)({name:"page-informations",template:(0,o.html)`${e=>(0,o.html)`
      <pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left>
          <div slot = "drawer-panel">
            <navigation-panel></navigation-panel>
          </div>
          <pf-panel header scrollable>
            <div slot="header">
              <h1 class="title">Informations</h1>
            </div>
            <div class="table-infos">
              ${(0,o.asyncAppend)(e.preloadData(),t=>(0,o.html)`${(0,o.repeat)(t,(0,o.html)`${t=>(console.log(t),(0,o.html)`
                          <div class="row">
                            <div class="type-de-cours">${e.formatDateFromISO(t.created_at)}</div>
                            <div class="heure-debut">${t.email}</div>
                            <div class="heure-fin">${t.first_name}</div>
                            <div class="type-de-cours">${t.gender}</div>
                            <div class="heure-debut">${t.grade}</div>
                            <div class="heure-fin">${t.last_name}</div>
                            <div class="heure-fin">${t.role}</div>
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
      .title{
        color: black;
      }
    `]})],l);let i=(0,o.html)`${e=>(0,o.html)`<page-informations></page-informations>`}`;(0,o.render)(i);
//# sourceMappingURL=index.78b423e1.js.map
