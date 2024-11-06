var e=globalThis,i={},a={},t=e.parcelRequirec605;null==t&&((t=function(e){if(e in i)return i[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return i[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,i){a[e]=i},e.parcelRequirec605=t),t.register;var o=t("7WQrb"),r=t("5D1XK");t("RKbfs"),t("5OQrz"),t("2LYUy");class s extends r.WebComponent{async preloadData(){try{let e=await fetch("http://localhost:3000/infos/",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Erreur serveur.");let i=await e.json();return console.log(i),i.length>0?i:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}constructor(...e){super(...e),this.data=[]}}s=(0,o.__decorate)([(0,r.customElement)({name:"page-informations",template:(0,r.html)`${e=>(0,r.html)`<pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left >
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
  </pf-page>`}`})],s);let l=(0,r.html)`${e=>(0,r.html)`<page-informations></page-informations>`}`;(0,r.render)(l);
//# sourceMappingURL=index.accc9986.js.map
