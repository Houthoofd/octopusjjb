var e=globalThis,r={},a={},t=e.parcelRequirec605;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,r){a[e]=r},e.parcelRequirec605=t),t.register;var o=t("7WQrb"),l=t("5D1XK");t("RKbfs"),t("5OQrz"),t("2LYUy");class n extends l.WebComponent{async preloadData(){try{let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let r=JSON.parse(e);console.log("Données utilisateur récupérées:",r);let a=await fetch("http://localhost:3000/informations",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!a.ok)throw Error("Erreur serveur.");let t=[await a.json()];return console.log("Données mises dans un tableau:",t,t.length),t.length>0?t:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}formatDateFromISO(e){let r=new Date(e),a=r.getFullYear(),t=String(r.getMonth()+1).padStart(2,"0"),o=String(r.getDate()).padStart(2,"0");return`${a}-${t}-${o}`}convertToISODate(e){let[r,a,t]=e.split("-");return new Date(`${r}-${a}-${t}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[]}}n=(0,o.__decorate)([(0,l.customElement)({name:"page-informations",template:(0,l.html)`${e=>(0,l.html)`
      <pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left>
        <div class="navigation">
          <ul>
            <li><a href="/pages/cours">cours</a></li>
            <li><a href="/pages/infos">infos</a></li>
            <li><a href="/pages/compte">compte</a></li>
            <li><a href="/pages/profile">profile</a></li>
          </ul>
        </div>
        <div>
          <pf-panel header scrollable>
            <h1 slot="header">Informations</h1>
            <div class="table-infos">
              ${(0,l.asyncAppend)(e.preloadData(),r=>(0,l.html)`${(0,l.repeat)(r,(0,l.html)`${r=>(console.log(r),(0,l.html)`
                          <div class="row">
                            <div class="type-de-cours">${e.formatDateFromISO(r.date_of_birth)}</div>
                            <div class="heure-debut">${r.email}</div>
                            <div class="heure-fin">${r.first_name}</div>
                            <div class="type-de-cours">${r.gender}</div>
                            <div class="heure-debut">${r.grade}</div>
                            <div class="heure-fin">${r.last_name}</div>
                            <div class="heure-fin">${r.role}</div>
                          </div>`)}`)}`)}
            </div>
          </pf-panel>
        </div>
        <pf-avatar></pf-avatar>
      </pf-page>`}`,styles:[(0,l.css)`
      .table-infos {
        color: black;
      }
      .navigation{
        color: black
      }
    `]})],n);let i=(0,l.html)`${e=>(0,l.html)`<page-informations></page-informations>`}`;(0,l.render)(i);
//# sourceMappingURL=index.2a7f6075.js.map
