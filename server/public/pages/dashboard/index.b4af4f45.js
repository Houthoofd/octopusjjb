var e=globalThis,r={},t={},a=e.parcelRequirec605;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in t){var a=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,a.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,r){t[e]=r},e.parcelRequirec605=a),a.register;var o=a("7WQrb"),n=a("5D1XK");a("RKbfs"),a("5OQrz"),a("2LYUy"),a("7KTRf");class s extends n.WebComponent{async preloadData(){try{let e=await fetch("http://localhost:3000/users/",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Erreur serveur.");let r=await e.json();return console.log(r),r.length>0?r:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async loadInfosUser(e){console.log(e);try{let r=await fetch("http://localhost:3000/users/infos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e})});if(!r.ok)throw Error("Erreur serveur.");let t=await r.json();return console.log(t),t}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async displayMoreInfos(e){console.log("User ID:",e.id);let r=this.shadowRoot?.querySelector(`.panel-row[data-user-id="${e.id}"]`);if(console.log(r),r){if(r.classList.contains("active")){r.classList.remove("active"),console.log("Panel désactivé.");return}r.classList.add("active"),console.log("Panel activé:",r);let t=r.querySelector(".new-participants");if(t&&t.children.length>0){console.log("Participants déjà chargés. Aucun rechargement nécessaire.");return}t||((t=document.createElement("div")).classList.add("new-participants"),r.appendChild(t));try{let r=await this.loadInfosUser(e.id);console.log(r),t.innerHTML="",0===Object.keys(r).length?t.textContent="Aucun participant trouvé.":Object.values(r).forEach(e=>{let r=document.createElement("div");r.classList.add("pill");let a=document.createElement("div");a.classList.add("first-name"),a.textContent=e.first_name;let o=document.createElement("div");o.classList.add("last-name"),o.textContent=e.last_name,r.appendChild(a),r.appendChild(o),t.appendChild(r)})}catch(e){console.error("Erreur lors du chargement des participants:",e),t.textContent="Erreur lors du chargement des participants."}console.log("Participants ajoutés dans la div:",t)}else console.error('Aucun élément "panel-row" trouvé pour ce cours.')}}s=(0,o.__decorate)([(0,n.customElement)({name:"page-dashboard",template:(0,n.html)`${e=>(0,n.html)`
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
               ${(0,n.asyncAppend)(e.preloadData(),r=>(0,n.html)`
                    ${(0,n.repeat)(r,(0,n.html)`${r=>(console.log(r),(0,n.html)`
                          <div class="panel-row" data-user-id="${r.id}">
                            <div class="row">
                              <div class="type-de-cours">${r.last_name}</div>
                              <div class="heure-debut">${r.first_name}</div>
                              <div class="heure-fin">${r.gender}</div>
                              <div class="heure-fin">${r.grade}</div>
                              <div @click="${r=>e.displayMoreInfos(r)}" class='icon-down'><div class='icon'><pf-icons-chevron-down></pf-icons-chevron-down></div></div>
                            </div>
                          </div>`)}`)}`)}
            </div>
          </pf-panel>
          <pf-avatar></pf-avatar>
        </pf-page>`}`,styles:[(0,n.css)`
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
      `]})],s);let l=(0,n.html)`${e=>(0,n.html)`<page-dashboard></page-dashboard>`}`;(0,n.render)(l);
//# sourceMappingURL=index.b4af4f45.js.map
