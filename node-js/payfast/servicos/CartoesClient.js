const restify = require('restify-clients');

function CartoesClient() {
    this._client = restify.createJsonClient({
        url: 'http://localhost:3001',
        version: '~1.0'
    });
}

CartoesClient.prototype.autoriza = function (cartao, callback) {
    console.log(this._client);
    this._client.post('/cartoes/autoriza', cartao, callback);
};

module.exports = () => CartoesClient;