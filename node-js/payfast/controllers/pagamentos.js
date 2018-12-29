module.exports = (app) => {

    app.get('/pagamentos', (req, res) => {
        res.send('OK!');
    });

    app.delete('/pagamentos/pagamento/:id', (req, res) => {

        let id = req.params.id;
        let pagamento = {};
        pagamento.id = id;
        pagamento.status = 'CANCELADO';

        let connection = app.persistencia.connectionFactory;
        let pagamentoDao = new app.persistencia.PagamentoDao(connection);

        pagamentoDao.update(pagamento, (errors, results) => {

            if (errors) {
                res.status(500).send(errors);
                return;
            }
            res.sendStatus(204);
        });
    });

    app.put('/pagamentos/pagamento/:id', (req, res) => {

        let id = req.params.id;
        let pagamento = {};
        pagamento.id = id;
        pagamento.status = 'CONFIRMADO';

        let connection = app.persistencia.connectionFactory;
        let pagamentoDao = new app.persistencia.PagamentoDao(connection);

        pagamentoDao.update(pagamento, (errors, results) => {

            if (errors) {
                res.status(500).send(errors);
                return;
            }

            let response = {

                content: results.rows[0],
                _links: [
                    {
                        href: 'http://localhost:3000/pagamentos/pagamento/' + pagamento.id,
                        rel: 'self',
                        method: 'GET'
                    },
                ]

            };

            res.status(200).send(response);
        });
    });

    app.post('/pagamentos/pagamento', (req, res) => {

        let body = req.body;
        let pagamento = body['pagamento'];

        req.assert('pagamento.forma_de_pagamento', 'Forma de Pagamento é obrigatória').notEmpty();
        req.assert('pagamento.valor', 'Valor é obrigatório e deve ser um decimal').notEmpty().isFloat();
        req.assert('pagamento.moeda', 'Moeda é obrigatória e deve ter 3 caracteres').notEmpty().len(3, 3);

        let errors = req.validationErrors();

        if (errors) {
            console.log('Erros de validação encontrados');
            res.status(400).send(errors);
            return;
        }

        console.log('Processando pagamento...');
        let cartao = body['cartao'];
        if (pagamento.forma_de_pagamento == 'cartao') {
            console.log(cartao);

            let clientCartoes = new app.servicos.CartoesClient();

            clientCartoes.autoriza(cartao, (exception, request, response, results) => {
                if (exception) {
                    console.log(exception);
                    res.status(400).send(results);
                    return;
                }
                cartao = results;
            });
        }

        let connection = app.persistencia.connectionFactory;
        let pagamentoDao = new app.persistencia.PagamentoDao(connection);

        pagamento.status = 'CRIADO';
        pagamento.data = new Date();

        pagamentoDao.save(pagamento, (error, results) => {

            if (error) {
                res.status(500).send(error);
            }

            let id = results.rows[0].id;
            pagamento.id = id;

            let response = {

                content: pagamento,
                cartao: cartao,
                _links: [
                    {
                        href: 'http://localhost:3000/pagamentos/pagamento/' + pagamento.id,
                        rel: 'CONFIRMAR',
                        method: 'PUT'
                    },
                    {
                        href: 'http://localhost:3000/pagamentos/pagamento/' + pagamento.id,
                        rel: 'CANCELAR',
                        method: 'DELETE'
                    }
                ]

            };

            res.location('/pagamentos/pagamento/' + id);
            res.status(201).json(response);

        });
    });

};