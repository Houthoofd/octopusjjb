import mysql from 'mysql';
export default class MysqlConnector {
    constructor() {
        // Configuration de la connexion à la base de données MySQL
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'octopus_jjb'
        });
        // Établir la connexion à la base de données
        this.connection.connect((err) => {
            if (err) {
                console.error('Erreur de connexion à la base de données : ' + err.stack);
                return;
            }
            console.log('Connecté à la base de données MySQL avec l\'ID : ' + this.connection.threadId);
        });
    }
    query(sql, values, callback) {
        // Exécuter la requête SQL avec les valeurs échappées
        this.connection.query(sql, values, (error, results, fields) => {
            callback(error, results, fields);
        });
    }
    close() {
        // Fermer la connexion à la base de données
        this.connection.end((err) => {
            if (err) {
                console.error('Erreur lors de la fermeture de la connexion : ' + err.stack);
                return;
            }
            console.log('Connexion à la base de données MySQL fermée');
        });
    }
}
//# sourceMappingURL=mysqlconnector.js.map