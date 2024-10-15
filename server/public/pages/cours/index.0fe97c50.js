var e=globalThis,t={},i={},a=e.parcelRequirec605;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var a=i[e];delete i[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},e.parcelRequirec605=a),a.register;var r=a("1BF7I");a("lTDtW");let o=(0,r.html)`${e=>(0,r.html)`<pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left >
      <pf-action-list slot = "masthead-content">
        <pf-action-list-item>
          <pf-button>Action 1</pf-button>
        </pf-action-list-item>
        <pf-action-list-item>
          <pf-button>Action 1</pf-button>
        </pf-action-list-item>
      </pf-action-list>
      <div slot = "drawer-panel">
        <pf-navigation>
          <pf-navigation-list>
              <pf-navigation-list-item
                @mousedown=${()=>{window.location.href="cours"}}>
                  Bonjour
              </pf-navigation-list-item>
              <pf-navigation-list-item>Link 1</pf-navigation-list-item>
              <pf-navigation-list-item>Link 1</pf-navigation-list-item>
              <pf-navigation-list-item>Link 1</pf-navigation-list-item>
          </pf-navigation-list>
        </pf-navigation>
      </div>
      <div>
        <pf-panel header scrollable>
          <h1 slot = "header" >MyContent</h1>
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
    </pf-page>`}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.createElement("div"),t=document.querySelectorAll(".content-classes")[0];fetch("http://localhost:3000/cours/",{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>{if(!e.ok)throw Error("Erreur serveur.");return e.json()}).then(i=>{if(i.length>0)for(let e of i){let i=function(e){let t=new Date(e),i=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${i}-${a}-${r}`}(e.date_cours),a=document.createElement("div");a.setAttribute("class","raw-infos");let r=document.createElement("div");r.setAttribute("class","date-infos");let o=document.createElement("div");o.setAttribute("class","heure-debut-infos");let n=document.createElement("div");n.setAttribute("class","heure-fin-infos");let s=document.createElement("div");s.setAttribute("class","type-de-cours-infos");let l=document.createElement("button");l.setAttribute("class","inscription"),l.innerHTML="Inscription";let u=document.createElement("div");u.setAttribute("class","down-arrow"),u.innerHTML=`
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1); transform: ; msFilter:;">
                    <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
                </svg>
                `,r.innerHTML=i,o.innerHTML=e.heure_debut,n.innerHTML=e.heure_fin,s.innerHTML=e.type_cours,a.appendChild(r),a.appendChild(o),a.appendChild(n),a.appendChild(s),a.appendChild(l),a.appendChild(u),t.appendChild(a),l.addEventListener("click",e=>{console.log("Date formatée:",function(e){let[t,i,a]=e.split("-");return new Date(`${t}-${i}-${a}T00:00:00Z`).toISOString()}(e.target.parentNode.children[0].innerHTML));let t=localStorage.getItem("first_name");t?fetch("http://localhost:3000/inscriptions/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:t})}).then(e=>{if(!e.ok)throw Error("Erreur serveur.");return e.json()}).then(e=>{console.log("Réponse du serveur:",e)}).catch(e=>{console.error("Erreur lors de la requête fetch:",e)}):console.error("Aucun prénom trouvé dans le localStorage.")})}else e.textContent="Cours non trouvés";console.log("Réponse du serveur:",i)}).catch(t=>{e.innerHTML="Cours non trouvés",console.error("Erreur lors de la requête fetch:",t)});let i=document.getElementById("logout");i&&i.addEventListener("click",e=>{e.preventDefault(),localStorage.clear(),sessionStorage.clear(),window.location.href="/"})}),(0,r.render)(o);
//# sourceMappingURL=index.0fe97c50.js.map
