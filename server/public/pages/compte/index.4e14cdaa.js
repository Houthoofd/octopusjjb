var e=globalThis,a={},t={},l=e.parcelRequirec605;null==l&&((l=function(e){if(e in a)return a[e].exports;if(e in t){var l=t[e];delete t[e];var r={id:e,exports:{}};return a[e]=r,l.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,a){t[e]=a},e.parcelRequirec605=l),l.register;var r=l("7WQrb"),n=l("5D1XK");l("RKbfs"),l("5OQrz"),l("2LYUy"),l("7KTRf");class o extends n.WebComponent{async preloadData(){try{let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let a=JSON.parse(e);console.log("Données utilisateur récupérées:",a);let t=await fetch("http://localhost:3000/informations",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(a)});if(!t.ok)throw Error("Erreur serveur.");let l=[await t.json()];return console.log("Données mises dans un tableau:",l,l.length),l.length>0?l:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}formatDateFromISO(e){let a=new Date(e),t=a.getFullYear(),l=String(a.getMonth()+1).padStart(2,"0"),r=String(a.getDate()).padStart(2,"0");return`${t}-${l}-${r}`}convertToISODate(e){let[a,t,l]=e.split("-");return new Date(`${a}-${t}-${l}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[]}}o=(0,r.__decorate)([(0,n.customElement)({name:"page-compte",template:(0,n.html)`${e=>(0,n.html)`
      <pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left>
          <div slot = "drawer-panel">
            <navigation-panel></navigation-panel>
          </div>
          <pf-panel header scrollable>
            <div slot="header">
              <h1>Compte</h1>
            </div>
            <div class="table-infos">
              ${(0,n.asyncAppend)(e.preloadData(),a=>(0,n.html)`${(0,n.repeat)(a,(0,n.html)`${a=>(console.log(a),(0,n.html)`
                          <div class="row">
                            <div class="date-of-birth">
                              <label for="date_of_birth">Date de naissance:</label>
                              <input type="text" id="date_of_birth" value="${e.formatDateFromISO(a.date_of_birth)}" readonly disabled/>
                            </div>

                            <div class="email">
                              <label for="email">Email:</label>
                              <input type="email" id="email" value="${a.email}"/>
                            </div>

                            <div class="first-name">
                              <label for="first_name">Prénom:</label>
                              <input type="text" id="first_name" value="${a.first_name}"/>
                            </div>

                            <div class="gender">
                              <label for="gender">Genre:</label>
                              <input type="text" id="gender" value="${a.gender}"/>
                            </div>

                            <div class="grade">
                              <label for="grade">Grade:</label>
                              <input type="text" id="grade" value="${a.grade}"/>
                            </div>

                            <div class="last-name">
                              <label for="last_name">Nom:</label>
                              <input type="text" id="last_name" value="${a.last_name}"/>
                            </div>

                            <div class="role">
                              <label for="role">Rôle:</label>
                              <input type="text" id="role" value="${a.role}" readonly disabled/>
                            </div>

                            <div class="abonnement">
                              <label for="abonnement">Abonnement:</label>
                              <input type="text" id="abonnement" value="${a.abonnement}"/>
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
    `]})],o);let i=(0,n.html)`${e=>(0,n.html)`<page-compte></page-compte>`}`;(0,n.render)(i);
//# sourceMappingURL=index.4e14cdaa.js.map
