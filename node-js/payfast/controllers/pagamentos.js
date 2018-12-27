module.exports = (app) => {

    app.get('/pagamentos', (req, res) => {
        res.send('OK!');
    });

    app.post('/pagamentos/pagamento', (req, res) => {

        let pagamento = req.body;

        req.assert('forma_de_pagamento', 'Forma de Pagamento é obrigatória').notEmpty();
        req.assert('valor', 'Valor é obrigatório e deve ser um decimal').notEmpty().isFloat();
        req.assert('moeda', 'Moeda é obrigatória e deve ter 3 caracteres').notEmpty().len(3, 3);

        let errors = req.validationErrors();

        if (errors) {
            console.log('Erros de validação encontrados');
            res.status(400).send(errors);
            return;
        }

        console.log('Processando pagamento...');

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

            res.location('/pagamentos/pagamento/' + id);
            res.status(201).json(pagamento);

        });
    });

};