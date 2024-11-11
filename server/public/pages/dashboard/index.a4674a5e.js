var e=globalThis,t={},r={},a=e.parcelRequirec605;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequirec605=a),a.register;var n=a("7WQrb"),o=a("5D1XK");a("RKbfs"),a("5OQrz"),a("2LYUy"),a("7KTRf");class s extends o.WebComponent{async preloadData(){try{let e=await fetch("http://localhost:3000/users/",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Erreur serveur.");let t=await e.json();return console.log(t),t.length>0?t:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async loadInfosUser(e){console.log(e);try{let t=await fetch("http://localhost:3000/users/infos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e})});if(!t.ok)throw Error("Erreur serveur.");let r=await t.json();return r.participants&&r.participants.length>0?r.participants:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async displayMoreInfos(e){console.log("User ID:",e.id);let t=this.shadowRoot?.querySelector(`.panel-row[data-user-id="${e.id}"]`);if(console.log(t),t){if(t.classList.contains("active")){t.classList.remove("active"),console.log("Panel désactivé.");return}t.classList.add("active"),console.log("Panel activé:",t);let e=t.querySelector(".new-participants");if(e&&e.children.length>0){console.log("Participants déjà chargés. Aucun rechargement nécessaire.");return}e||((e=document.createElement("div")).classList.add("new-participants"),t.appendChild(e));try{let t=await this.loadInfosUser(cour.id);e.innerHTML="",0===Object.keys(t).length?e.textContent="Aucun participant trouvé.":Object.values(t).forEach(t=>{let r=document.createElement("div");r.classList.add("pill");let a=document.createElement("div");a.classList.add("first-name"),a.textContent=t.first_name;let n=document.createElement("div");n.classList.add("last-name"),n.textContent=t.last_name,r.appendChild(a),r.appendChild(n),e.appendChild(r)})}catch(t){console.error("Erreur lors du chargement des participants:",t),e.textContent="Erreur lors du chargement des participants."}console.log("Participants ajoutés dans la div:",e)}else console.error('Aucun élément "panel-row" trouvé pour ce cours.')}}s=(0,n.__decorate)([(0,o.customElement)({name:"page-dashboard",template:(0,o.html)`${e=>(0,o.html)`
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
                              <div @click="${r=>e.displayMoreInfos(t)}" class='icon-down'><div class='icon'><pf-icons-chevron-down></pf-icons-chevron-down></div></div>
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
      `]})],s);let l=(0,o.html)`${e=>(0,o.html)`<page-dashboard></page-dashboard>`}`;(0,o.render)(l);
//# sourceMappingURL=index.a4674a5e.js.map
