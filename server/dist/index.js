var e=require("express"),r=require("cookie-parser"),s=require("morgan"),o=require("cors"),n=require("path"),t=require("mysql");function u(e){return e&&e.__esModule?e.default:e}const c=u(e).Router();c.get("/",function(e,r,s){r.send({layer:"users",version:1})});const l=u(e).Router();l.get("/",function(e,r,s){r.send({layer:"api",version:1})});class i{connection;constructor(){this.connection=u(t).createConnection({host:"localhost",user:"root",password:"",database:"octopus_jjb"}),this.connection.connect(e=>{if(e){console.error("Erreur de connexion à la base de données : "+e.stack);return}console.log("Connecté à la base de données MySQL avec l'ID : "+this.connection.threadId)})}query(e,r,s){this.connection.query(e,r,(e,r,o)=>{s(e,r,o)})}close(){this.connection.end(e=>{if(e){console.error("Erreur lors de la fermeture de la connexion : "+e.stack);return}console.log("Connexion à la base de données MySQL fermée")})}}class a{VerificationUtilisateur(e,r){return new Promise((s,o)=>{let n=new i;console.log("éxécution du query"),console.log(e,r),n.query(e,r,(e,r)=>{e?(console.error("Erreur lors de l'exécution de la requête : "+e.message),o(e)):(console.log("Résultats de la requête :",r),s(r)),n.close()})})}Insert(e,r){return new Promise((s,o)=>{let n=new i;console.log("éxécution du query Insert"),n.query(e,r,(e,r)=>{e?(console.error("Erreur lors de l'exécution de la requête : "+e.message),o(e)):(console.log("Résultats de la requête :",r),s(r)),n.close()})})}query(e,r){return new Promise((s,o)=>{let n=new i;console.log("éxécution du query"),n.query(e,r,(e,r)=>{e?(console.error("Erreur lors de l'exécution de la requête : "+e.message),o(e)):(console.log("Résultats de la requête :",r),s(r)),n.close()})})}}const d=u(e).Router();d.post("/",(e,r)=>{let{email:s,password:o}=e.body;new a().query("SELECT * FROM utilisateurs WHERE email = ? AND password = ?",[s,o]).then(e=>{e.length>0?r.json(e):r.status(401).send("Utilisateur non trouvé ou mot de passe incorrect")}).catch(e=>{console.error("Erreur lors de la vérification de l'utilisateur",e),r.status(500).send("Erreur lors de la vérification de l'utilisateur")})});const q=u(e).Router();q.get("/",(e,r)=>{new a().query("SELECT * FROM cours LIMIT 12").then(e=>{e.length>0?r.json(e):r.status(401).send("Cours non trouvés")}).catch(e=>{console.error("Erreur lors du chargement des cours",e),r.status(500).send("Erreur lors du chargement des cours")})});const g=u(e).Router();g.post("/",(e,r)=>{let{first_name:s}=e.body;if(!s)return r.status(400).send("Le prénom est requis");new a().query("SELECT * FROM utilisateurs WHERE first_name = ?",[s]).then(e=>{e.length>0?r.json(e):r.status(404).send("Utilisateur non trouvé")}).catch(e=>{console.error("Erreur lors du chargement des utilisateurs",e),r.status(500).send("Erreur lors du chargement des utilisateurs")})});const h=u(e).Router();h.use("/users",c),h.use("/api",l),h.use("/connexion",d),h.use("/cours",q),h.use("/inscriptions",g);const E=process.cwd?process.cwd():process.env.PWD,m=u(e)();m.use(u(s)("dev")),m.use(u(e).json()),m.use(u(e).urlencoded({extended:!1})),m.use(u(r)()),m.use(u(e).static(u(n).join(E,"/server/public"))),m.use(u(o)()),m.use("/",h),m.listen(3e3);
//# sourceMappingURL=index.js.map
