document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("form"),t=document.createElement("div");e?.appendChild(t),e&&e.addEventListener("submit",e=>{e.preventDefault();let r=document.querySelectorAll("input"),o=r[0].value,n=r[1].value;if(!o||!n){t.textContent="Veuillez remplir tous les champs.";return}let s={email:o,password:n};console.log(s),fetch("http://localhost:3000/connexion/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then(e=>{if(!e.ok)throw Error("Erreur serveur.");return e.json()}).then(e=>{if(e.length>0){for(let t of e)localStorage.setItem("first_name",t.first_name),localStorage.setItem("email",t.email);window.location.href="http://localhost:1234"}else t.innerHTML=`
                        Utilisateur non trouv\xe9 ou mot de passe incorrect.<br>
                        Vous n'\xeates pas encore inscrit ? <a href="/pages/inscription"><strong>Inscrivez-vous ici</strong></a>.
                    `;console.log("Réponse du serveur:",e)}).catch(e=>{t.innerHTML=`
                    Une erreur est survenue lors de la connexion.<br>
                    Vous n'\xeates pas encore inscrit ? <a href="/pages/inscription"><strong>Inscrivez-vous ici</strong></a>.
                `,console.error("Erreur lors de la requête fetch:",e)})})});
//# sourceMappingURL=index.5c05e361.js.map
