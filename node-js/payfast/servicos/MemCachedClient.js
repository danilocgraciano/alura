const memcached = require('memcached');

function createMemCachedClient() {
    let client = new memcached('localhost:11211', {
        retries: 10,//número de retentativas feitas por request.
        retry: 10000,//tempo entre a falha de um servidor e uma tentativa de colocá-lo de volta em serviço.
        remove: true//autoriza a remoção automática de servidores mortos do pool
    });
    return client;
};

module.exports = () => createMemCachedClient;