class NegociacaoDao {

    constructor(connection) {

        this._connection = connection;
        this._store = 'negociacoes';
    }

    adiciona(negociacao) {

        return new Promise((resolve, reject) => {

            let request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .add(negociacao);

            request.onsuccess = e => {
                resolve();
            };

            request.onerror = e => {
                console.log(e.target.error);
                reject('Negociação não incluída!');
            };

        });
    }

    listarTodos() {
        return new Promise((resolve, reject) => {

            let cursor = this._connection.transaction([this._store], 'readonly')
                .objectStore(this._store)
                .openCursor();

            let negociacoes = [];
            cursor.onsuccess = e => {

                let atual = e.target.result;

                if (atual) {
                    let dado = atual.value;
                    negociacoes.push(new Negociacao(dado._data, dado._quantidade, dado._valor));
                    atual.continue();//chama o onsuccess novamente (faz o FOR)
                } else {
                    resolve(negociacoes);
                }
            };

            cursor.onerror = e => {
                console.log(e.target.error);
                reject("Não foi possível listar as negociações!");
            };
        });
    }

    apagarTodos() {

        return new Promise((resolve, reject) => {

            let request = this._connection.transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .clear();

            request.onsuccess = e => {
                resolve('Negociações excluídas com sucesso!');
            };

            request.onerror = e => {
                console.log(e.target.error);
                reject("Não foi possível excluídas as negociações!");
            };
        });
    }
}