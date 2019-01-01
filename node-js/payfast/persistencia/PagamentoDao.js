function PagamentoDao(connection) {
    this._connection = connection;
}

PagamentoDao.prototype.save = function (pagamento, callback) {
    const values = [
        pagamento.forma_de_pagamento,
        pagamento.valor,
        pagamento.moeda,
        pagamento.descricao,
        pagamento.status,
        pagamento.data
    ];
    this._connection.query('INSERT INTO pagamentos(forma_de_pagamento, valor, moeda, descricao, status, data) values($1, $2, $3, $4, $5, $6) RETURNING id', values, callback);
}

PagamentoDao.prototype.update = function (pagamento, callback) {
    const values = [
        pagamento.status,
        pagamento.id
    ];
    this._connection.query('UPDATE pagamentos SET status = $1 WHERE id = $2 RETURNING *', values, callback);
}

PagamentoDao.prototype.findAll = function (callback) {
    this._connection.query('select * from pagamentos', callback);
}

PagamentoDao.prototype.findById = function (id, callback) {
    this._connection.query("select * from pagamentos where id = $1", [id], callback);
}

module.exports = function () {
    return PagamentoDao;
};