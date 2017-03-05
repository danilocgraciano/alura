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
                console.log(xhr.responseText);
                reject("Não foi possível importar as negociações da semana!");
            });
    }

    obterNegociacoesDaSemanaAnterior() {

        return HTTPService.get('negociacoes/anterior')
            .then(negociacoes => negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))
            .catch(erro => {
                console.log(xhr.responseText);
                reject("Não foi possível importar as negociações da semana anterior!");
            });

    }

    obterNegociacoesDaSemanaRetrasada() {

        return HTTPService.get('negociacoes/retrasada')
            .then(negociacoes => negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))
            .catch(erro => {
                console.log(xhr.responseText);
                reject("Não foi possível importar as negociações da semana retrasada!");
            });

    }

    save(negociacao, cb) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/negociacoes", true);
        xhr.setRequestHeader("Content-type", "application/json");

        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {

                if (xhr.status == 200) {
                    cb(JSON.parse(xhr.responseText));
                } else {
                    console.log(xhr.responseText);
                    cb("Não foi possível salvar a Negociação!", null);
                }

            }
        };
        xhr.send(JSON.stringify(negociacao));
    }
}