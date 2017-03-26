class NegociacaoService {

    obterNegociacoes() {

        return Promise.all([
            this.obterNegociacoesDaSemana(),
            this.obterNegociacoesDaSemanaAnterior(),
            this.obterNegociacoesDaSemanaRetrasada()
        ]).then(periodos => {
            let negociacoes = periodos.reduce((dados, periodo) => dados.concat(periodo), []);
            return negociacoes;
        }).catch(erro => {
            throw new Error(erro);
        });
    }

    obterNegociacoesDaSemana() {

        return HTTPService.get('negociacoes/semana')
            .then(negociacoes => negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))
            .catch(erro => {
                console.log(erro);
                reject("Não foi possível importar as negociações da semana!");
            });
    }

    obterNegociacoesDaSemanaAnterior() {

        return HTTPService.get('negociacoes/anterior')
            .then(negociacoes => negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))
            .catch(erro => {
                console.log(erro);
                reject("Não foi possível importar as negociações da semana anterior!");
            });

    }

    obterNegociacoesDaSemanaRetrasada() {

        return HTTPService.get('negociacoes/retrasada')
            .then(negociacoes => negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))
            .catch(erro => {
                console.log(erro);
                reject("Não foi possível importar as negociações da semana retrasada!");
            });

    }

    save(negociacao) {

        return HTTPService.post('/negociacoes', negociacao)
            .then((data) => data)
            .catch((erro) => {
                console.log(xhr.responseText);
                cb("Não foi possível salvar a Negociação!", null);
            });
    }

    cadastrar(negociacao) {
        return new Promise((resolve, reject) => {
            ConnectionFactory.getConnection()
                .then(connection => {
                    new NegociacaoDao(connection)
                        .adiciona(negociacao)
                        .then(() => {
                            resolve();
                        }).catch(erro => reject(erro));
                }).catch(erro => reject(erro));

        });
    }

    listarTodos() {
        return new Promise((resolve, reject) => {
            ConnectionFactory.getConnection()
                .then(connection => {
                    new NegociacaoDao(connection)
                        .listarTodos()
                        .then(negociacoes => resolve(negociacoes))
                        .catch(erro => reject(erro));
                }).catch(erro => reject(erro));
        });
    }

    apagarTodos() {

        return new Promise((resolve, reject) => {
            ConnectionFactory.getConnection()
                .then(connection => {
                    new NegociacaoDao(connection)
                        .apagarTodos()
                        .then(e => resolve(e))
                        .catch(erro => reject(e));
                }).catch(erro => reject(e));
        });
    }

    importaNegociacoes(listaAtual) {
        return new Promise((resolve, reject) => {
            this.obterNegociacoes()
                .then(negociacoes =>
                    negociacoes.filter(negociacao =>
                        !listaAtual.some(negociacaoExistente =>
                            JSON.stringify(negociacao) == JSON.stringify(negociacaoExistente))
                    )
                )
                .then(negociacoes => resolve(negociacoes))
                .catch(erro => reject(erro));
        });
    }
}