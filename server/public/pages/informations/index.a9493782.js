var e=globalThis,t={},a={},o=e.parcelRequirec605;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequirec605=o),o.register;var i=o("7WQrb"),r=o("5D1XK");o("RKbfs"),o("5OQrz"),o("2LYUy");class n extends r.WebComponent{async preloadData(){try{let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let t=JSON.parse(e);console.log(t);let a=await fetch("http://localhost:3000/informations",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!a.ok)throw Error("Erreur serveur.");let o=await a.json();return console.log(o),o.length>0?o:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}constructor(...e){super(...e),this.data=[]}}n=(0,i.__decorate)([(0,r.customElement)({name:"page-informations",template:(0,r.html)`${e=>(0,r.html)`<pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left >
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
                                        ${(0,r.repeat)(e,(0,r.html)`${e=>(0,r.html)`
                                                        <div class="row"">
                                                            <div class="type-de-cours">${e.type_cours}</div>
                                                            <div class="heure-debut">${e.heure_debut}</div>
                                                            <div class="heure-fin">${e.heure_fin}</div>
                                                        </div>`}`)}
                                    </div>
                                    `))}
                            </div>
      </pf-panel>
    </div>
    <pf-avatar></pf-avatar>
  </pf-page>`}`})],n);let l=(0,r.html)`${e=>(0,r.html)`<page-informations></page-informations>`}`;(0,r.render)(l);
//# sourceMappingURL=index.a9493782.js.map
