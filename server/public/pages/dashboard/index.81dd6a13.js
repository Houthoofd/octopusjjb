var e=globalThis,t={},a={},r=e.parcelRequirec605;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequirec605=r),r.register;var n=r("7WQrb"),o=r("5D1XK");r("RKbfs"),r("5OQrz"),r("2LYUy"),r("7KTRf");class l extends o.WebComponent{async preloadData(){try{let e=await fetch("http://localhost:3000/users/",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Erreur serveur.");let t=await e.json();return console.log(t),t.length>0?t:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async loadInfosUser(e){console.log(e);try{let t=await fetch("http://localhost:3000/users/infos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e})});if(!t.ok)throw Error("Erreur serveur.");let a=await t.json();return console.log(a),a}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async displayMoreInfos(e){console.log("User ID:",e.id);let t=this.shadowRoot?.querySelector(`.panel-row[data-user-id="${e.id}"]`);if(console.log(t),t){if(t.classList.contains("active")){t.classList.remove("active"),console.log("Panel désactivé.");return}t.classList.add("active"),console.log("Panel activé:",t);let a=t.querySelector(".new-participants");if(a||((a=document.createElement("div")).classList.add("new-participants"),t.appendChild(a)),a.children.length>0){console.log("Informations déjà chargées. Aucun rechargement nécessaire.");return}try{let t=await this.loadInfosUser(e.id);if(console.log(t),a.innerHTML="",0===Object.keys(t).length)a.textContent="Aucune information trouvée.";else{let e=document.createElement("div");e.classList.add("pill");let r=document.createElement("div");r.classList.add("first-name"),r.textContent=`Pr\xe9nom : ${t.first_name}`;let n=document.createElement("div");n.classList.add("last-name"),n.textContent=`Nom : ${t.last_name}`;let o=document.createElement("div");o.classList.add("email"),o.textContent=`Email : ${t.email}`;let l=document.createElement("div");l.classList.add("role"),l.textContent=`R\xf4le : ${t.role}`;let s=document.createElement("div");s.classList.add("gender"),s.textContent=`Genre : ${t.gender}`;let d=document.createElement("div");d.classList.add("dob");let i=new Date(t.date_of_birth).toLocaleDateString();d.textContent=`Date de naissance : ${i}`;let c=document.createElement("div");c.classList.add("grade"),c.textContent=`Grade : ${t.grade}`,e.appendChild(r),e.appendChild(n),e.appendChild(o),e.appendChild(l),e.appendChild(s),e.appendChild(d),e.appendChild(c),a.appendChild(e)}}catch(e){console.error("Erreur lors du chargement des informations :",e),a.textContent="Erreur lors du chargement des informations."}console.log("Informations ajoutées dans la div:",a)}else console.error('Aucun élément "panel-row" trouvé pour cet utilisateur.')}}l=(0,n.__decorate)([(0,o.customElement)({name:"page-dashboard",template:(0,o.html)`${e=>(0,o.html)`
        <pf-page
          masterhead-no-icon
          masterhead-no-branding
          drawer-inline
          drawer-expanded
          drawer-static
          drawer-panel-left
        >
          <div slot="drawer-panel">
            <navigation-panel></navigation-panel>
          </div>
          <pf-panel header scrollable>
            <h1 slot="header">Dashboard</h1>
            <input
              type="text"
              placeholder="Rechercher un utilisateur"
            />
            <div class="table-infos">
               ${(0,o.asyncAppend)(e.preloadData(),t=>(0,o.html)`
                    ${(0,o.repeat)(t,(0,o.html)`${t=>(console.log(t),(0,o.html)`
                          <div class="panel-row" data-user-id="${t.id}">
                            <div class="row">
                              <div class="type-de-cours">${t.last_name}</div>
                              <div class="heure-debut">${t.first_name}</div>
                              <div class="heure-fin">${t.gender}</div>
                              <div class="heure-fin">${t.grade}</div>
                              <div @click="${t=>e.displayMoreInfos(t)}" class='icon-down'><div class='icon'><pf-icons-chevron-down></pf-icons-chevron-down></div></div>
                            </div>
                          </div>`)}`)}`)}
            </div>
          </pf-panel>
          <pf-avatar></pf-avatar>
        </pf-page>`}`,styles:[(0,o.css)`
        .table-infos {
          color: black;
          display: flex;
          gap: 20px;
          flex-direction: column;
        }
        .navigation {
          color: black;
        }
        .row{
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 10px;
          background-color: #9e9e9e26;
        }
        .icon-down{
          cursor: pointer;
          background-color: #9E9E9E;
          width: 24px;
          height: 24px;
          border-radius: 3px;
        }
        .icon{
          transform: translate(4px, 4px);
        }
      `]})],l);let s=(0,o.html)`${e=>(0,o.html)`<page-dashboard></page-dashboard>`}`;(0,o.render)(s);
//# sourceMappingURL=index.81dd6a13.js.map
