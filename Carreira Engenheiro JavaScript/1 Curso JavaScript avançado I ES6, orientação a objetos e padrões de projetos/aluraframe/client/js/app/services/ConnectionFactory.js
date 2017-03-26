/**
 * Abaixo foi utilizado o Module Pattern
 * 
 */

var ConnectionFactory = (function () {
    
    const dbName = 'aluraframa';
    const dbVersion = 3;
    const stores = ['negociacoes'];

    var connection = null;
    var fnClose = null;

    return class ConnectionFactory {

        constructor() {
            throw new Error('Classe não deve ser instanciada!');
        }

        static getConnection() {

            return new Promise((resolve, reject) => {

                let openRequest = window.indexedDB.open(dbName, dbVersion);

                openRequest.onupgradeneeded = e => {
                    ConnectionFactory._createStores(e.target.result);
                };

                openRequest.onsuccess = e => {
                    if (!connection) {
                        connection = e.target.result;
                        //Monkey Patch
                        fnClose = connection.close.bind(connection);
                        connection.close = function () {
                            throw new Error('A Conexão não pode ser fechada diretamente!');
                        };
                    }

                    resolve(connection);
                };

                openRequest.onerror = e => {
                    console.log(e.target.error);
                    reject(e.target.error.name);
                };

            });
        }

        static _createStores(connection) {
            stores.forEach(store => {

                if (connection.objectStoreNames.contains(store))
                    connection.deleteObjectStore(store);

                connection.createObjectStore(store, { autoIncrement: true });

            });
        }

        static closeConnection() {
            if (connection) {
                fnClose();
                connection = null;
            }
        }
    }
})();//função auto invocável IIFE
