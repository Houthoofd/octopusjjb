var e=globalThis,a={},t={},r=e.parcelRequirec605;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in t){var r=t[e];delete t[e];var i={id:e,exports:{}};return a[e]=i,r.call(i.exports,i,i.exports),i.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,a){t[e]=a},e.parcelRequirec605=r),r.register;var i=r("7WQrb"),s=r("5D1XK");r("RKbfs"),r("5OQrz"),r("2LYUy"),r("7KTRf");class o extends s.WebComponent{async preloadData(){try{let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let a=JSON.parse(e);console.log("Données utilisateur récupérées:",a);let t=await fetch("http://localhost:3000/profile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!t.ok)throw Error("Erreur serveur.");let r=await t.json();console.log(r);let i=[r];return console.log("Données mises dans un tableau:",i,i.length),i.length>0?i:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}formatDateFromISO(e){let a=new Date(e),t=a.getFullYear(),r=String(a.getMonth()+1).padStart(2,"0"),i=String(a.getDate()).padStart(2,"0");return`${t}-${r}-${i}`}convertToISODate(e){let[a,t,r]=e.split("-");return new Date(`${a}-${t}-${r}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[]}}o=(0,i.__decorate)([(0,s.customElement)({name:"page-profile",template:(0,s.html)`${e=>(0,s.html)`
      <pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left>
          <div slot = "drawer-panel">
            <navigation-panel></navigation-panel>
          </div>
          <pf-panel header scrollable>
            <h1 slot="header">Profile</h1>
            <div class="table-infos">
              ${(0,s.asyncAppend)(e.preloadData(),a=>(0,s.html)`${(0,s.repeat)(a,(0,s.html)`${a=>(console.log(a),(0,s.html)`
                          <div class="row">
                            <div class="type-de-cours">${e.formatDateFromISO(a.created_at)}</div>
                            <div class="heure-debut">${a.email}</div>
                            <div class="heure-fin">${a.first_name}</div>
                            <div class="type-de-cours">${a.gender}</div>
                            <div class="heure-debut">${a.grade}</div>
                            <div class="heure-fin">${a.last_name}</div>
                            <div class="heure-fin">${a.role}</div>
                          </div>`)}`)}`)}
            </div>
          </pf-panel>
        <pf-avatar></pf-avatar>
      </pf-page>`}`,styles:[(0,s.css)`
      .table-infos {
        color: black;
      }
      .navigation{
        color: black
      }
    `]})],o);let l=(0,s.html)`${e=>(0,s.html)`<pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left >
    <div slot = "drawer-panel">
      <navigation-panel></navigation-panel>
    </div>
    <div>
      <pf-panel header scrollable>
        <h1 slot = "header" >Profile</h1>
        <div>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodeleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commodo massa vulputate.
          </span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodeleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commodo massa vulputate.
          </span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodeleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commodo massa vulputate.
          </span>
        </div>
      </pf-panel>
    </div>
    <pf-avatar></pf-avatar>
  </pf-page>`}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("logout");e&&e.addEventListener("click",e=>{e.preventDefault(),localStorage.clear(),sessionStorage.clear(),window.location.href="/"})}),(0,s.render)(l);
//# sourceMappingURL=index.b442d9e6.js.map
