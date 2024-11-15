var e=globalThis,a={},t={},r=e.parcelRequirec605;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in t){var r=t[e];delete t[e];var l={id:e,exports:{}};return a[e]=l,r.call(l.exports,l,l.exports),l.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,a){t[e]=a},e.parcelRequirec605=r),r.register;var l=r("7WQrb"),n=r("5D1XK");r("RKbfs"),r("5OQrz"),r("2LYUy"),r("7KTRf");class o extends n.WebComponent{async preloadData(){try{let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let a=JSON.parse(e);console.log("Données utilisateur récupérées:",a);let t=await fetch("http://localhost:3000/informations",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(a)});if(!t.ok)throw Error("Erreur serveur.");let r=[await t.json()];return console.log("Données mises dans un tableau:",r,r.length),r.length>0?r:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}formatDateFromISO(e){let a=new Date(e),t=a.getFullYear(),r=String(a.getMonth()+1).padStart(2,"0"),l=String(a.getDate()).padStart(2,"0");return`${t}-${r}-${l}`}convertToISODate(e){let[a,t,r]=e.split("-");return new Date(`${a}-${t}-${r}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[]}}o=(0,l.__decorate)([(0,n.customElement)({name:"page-informations",template:(0,n.html)`${e=>(0,n.html)`
      <pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left>
          <div slot = "drawer-panel">
            <navigation-panel></navigation-panel>
          </div>
          <pf-panel header scrollable>
            <h1 slot="header">Informations</h1>
            <div class="table-infos">
              ${(0,n.asyncAppend)(e.preloadData(),a=>(0,n.html)`${(0,n.repeat)(a,(0,n.html)`${a=>(console.log(a),(0,n.html)`
                          <div class="row">
                            <div class="date-of-birth">
                              <label for="date_of_birth">Date de naissance:</label>
                              <input type="text" id="date_of_birth" value="${e.formatDateFromISO(a.date_of_birth)}" readonly />
                            </div>

                            <div class="email">
                              <label for="email">Email:</label>
                              <input type="email" id="email" value="${a.email}" readonly />
                            </div>

                            <div class="first-name">
                              <label for="first_name">Prénom:</label>
                              <input type="text" id="first_name" value="${a.first_name}" readonly />
                            </div>

                            <div class="gender">
                              <label for="gender">Genre:</label>
                              <input type="text" id="gender" value="${a.gender}" readonly />
                            </div>

                            <div class="grade">
                              <label for="grade">Grade:</label>
                              <input type="text" id="grade" value="${a.grade}" readonly />
                            </div>

                            <div class="last-name">
                              <label for="last_name">Nom:</label>
                              <input type="text" id="last_name" value="${a.last_name}" readonly />
                            </div>

                            <div class="role">
                              <label for="role">Rôle:</label>
                              <input type="text" id="role" value="${a.role}" readonly />
                            </div>

                            <div class="abonnement">
                              <label for="abonnement">Abonnement:</label>
                              <input type="text" id="abonnement" value="${a.abonnement}" readonly />
                            </div>
                          </div>
                          `)}`)}`)}
            </div>
          </pf-panel>
        <pf-avatar></pf-avatar>
      </pf-page>`}`,styles:[(0,n.css)`
      .table-infos {
        color: black;
      }
      .navigation{
        color: black
      }
    `]})],o);let i=(0,n.html)`${e=>(0,n.html)`<page-informations></page-informations>`}`;(0,n.render)(i);
//# sourceMappingURL=index.701435a3.js.map
