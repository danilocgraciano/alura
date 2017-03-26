class NegociacaoController {

	constructor() {
		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		this._ordemAtual = '';

		/**
		Este trecho de código usa como parametro da classe ListNegociacoes o this,
		que representa o escopo da classe NegociacaoController, pois este tipo de função
		possui escopo dinâmico, isso quer dizer que o this dentro da função,
		se não alterado com o uso do código Reflect.apply(this._event,this._context,[this]);
		será ListNegociacoes.

		this._listNegociacao = new ListNegociacoes(this,function(model){
			this._negociacaoGrid.update(model);
		});


		porém se trocarmos para uma arrow function (trecho abaixo), o escopo é mantido,
		uma vez que para a arrow function possui escopo léxico, o que significa que não 
		muda. Será NegociacaoController até o final de todas as chamadas.

		this._listNegociacao = new ListNegociacoes(model => this._negociacaoGrid.update(model));

		**/

		// this._listNegociacao = ProxyFactory.create(
		// 	new ListNegociacoes(),
		// 	['adiciona', 'esvazia'],
		// 	model => this._negociacaoGrid.update(model));

		// this._mensagem = ProxyFactory.create(
		// 	new Mensagem(),
		// 	['setTexto'],
		// 	model => this._mensagemView.update(model));

		this._listNegociacao = new Bind(
			new ListNegociacoes(),
			new NegociacaoGrid($('#negociacaoGrid')),
			['adiciona', 'esvazia', 'ordena', 'inverteOrdem']
		);

		this._mensagem = new Bind(
			new Mensagem(),
			new MensagemView($('#mensagemView')),
			['setTexto']
		);

		ConnectionFactory.getConnection()
			.then(connection => {
				new NegociacaoDao(connection)
					.listarTodos()
					.then(negociacoes => {
						negociacoes.forEach(negociacao => {
							this._listNegociacao.adiciona(negociacao);
						});
					}).catch(erro => this._mensagem.setTexto(erro));
			}).catch(erro => this._mensagem.setTexto(erro));



	}

	adiciona(event) {

		event.preventDefault();

		ConnectionFactory.getConnection()
			.then(connection => {
				let negociacao = this._criaNegociacao();
				new NegociacaoDao(connection)
					.adiciona(negociacao)
					.then(() => {
						this._listNegociacao.adiciona(negociacao);
						//this.save(negociacao);
						this._mensagem.setTexto("Negociação adicionada com sucesso!");
						this._limpaTela();
					}).catch(erro => this._mensagem.setTexto(erro));
			}).catch(erro => this._mensagem.setTexto(erro));




	}

	apaga() {

		ConnectionFactory.getConnection()
			.then(connection => {
				new NegociacaoDao(connection)
					.apagarTodos()
					.then(e => {
						this._listNegociacao.esvazia();
						this._mensagem.setTexto(e);
						this._limpaTela();
					}).catch(erro => this._mensagem.setTexto(erro));
			}).catch(erro => this._mensagem.setTexto(erro));

	}

	_criaNegociacao() {

		return new Negociacao(
			DateHelper.dateFromText(this._inputData.value),
			parseInt(this._inputQuantidade.value),
			parseFloat(this._inputValor.value)
		);
	}

	_limpaTela() {

		this._inputData.value = '';
		this._inputQuantidade.value = 0;
		this._inputValor.value = 1.0;

		this._inputData.focus();
	}

	importaNegociacoes() {

		//this._listNegociacao.esvazia();

		let service = new NegociacaoService();

		service.obterNegociacoes()
			.then(negociacoes => 
				negociacoes.filter(
						negociacao => this._listNegociacao.getNegociacoes().indexOf(negociacao) == -1
				)
			)
			.then((negociacoes) => {
				negociacoes
					.reduce((novaLista, lista) => novaLista.concat(lista), [])
					.forEach(negociacao => {
						this._listNegociacao.adiciona(negociacao)
						this._mensagem.setTexto("Negociações importadas com sucesso!");
					});
			})
			.catch(err => this._mensagem.setTexto(err));
	}

	save(negociacao) {

		let service = new NegociacaoService();
		service.save(negociacao)
			.then((msg) => {
				console.log(msg);
				this._mensagem.setTexto("Negociação salva com sucesso!");
			})
			.catch((erro) => {
				this._mensagem.setTexto(erro);
			});
	}

	ordena(coluna) {
		if (this._ordemAtual == coluna) {
			this._listNegociacao.inverteOrdem();
		} else {
			this._listNegociacao.ordena((a, b) => a[coluna] - b[coluna]);
			this._ordemAtual = coluna;
		}

	}
}