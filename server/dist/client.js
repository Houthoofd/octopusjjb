import MysqlConnector from './mysqlconnector';
export default class Client {
    VerificationUtilisateur(sql, values) {
        return new Promise((resolve, reject) => {
            const mysqlConnector = new MysqlConnector();
            console.log("éxécution du query");
            console.log(sql, values);
            mysqlConnector.query(sql, values, (error, results) => {
                if (error) {
                    console.error('Erreur lors de l\'exécution de la requête : ' + error.message);
                    reject(error);
                }
                else {
                    console.log('Résultats de la requête :', results);
                    resolve(results);
                }
                // Fermez la connexion ici après avoir traité les résultats
                mysqlConnector.close();
            });
        });
    }
    Insert(sql, values) {
        return new Promise((resolve, reject) => {
            const mysqlConnector = new MysqlConnector();
            console.log("éxécution du query Insert");
            mysqlConnector.query(sql, values, (error, results) => {
                if (error) {
                    console.error('Erreur lors de l\'exécution de la requête : ' + error.message);
                    reject(error);
                }
                else {
                    console.log('Résultats de la requête :', results);
                    resolve(results);
                }
                // Fermez la connexion ici après avoir traité les résultats
                mysqlConnector.close();
            });
        });
    }
    query(sql, values) {
        return new Promise((resolve, reject) => {
            const mysqlConnector = new MysqlConnector();
            console.log("éxécution du query");
            mysqlConnector.query(sql, values, (error, results) => {
                if (error) {
                    console.error('Erreur lors de l\'exécution de la requête : ' + error.message);
                    reject(error);
                }
                else {
                    console.log('Résultats de la requête :', results);
                    resolve(results);
                }
                // Fermez la connexion ici après avoir traité les résultats
                mysqlConnector.close();
            });
        });
    }
}
//# sourceMappingURL=client.js.map