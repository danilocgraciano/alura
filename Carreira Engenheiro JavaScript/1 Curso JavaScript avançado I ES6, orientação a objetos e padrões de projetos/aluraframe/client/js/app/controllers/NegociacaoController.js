class NegociacaoController {

	constructor() {
		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');

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

		let me = this;
		this._listNegociacao = new Proxy(new ListNegociacoes(), {

			get: function (target, prop, receiver) {

				if (['adiciona', 'esvazia'].includes(prop) && typeof (target[prop]) == typeof (Function)) {

					return function () {
						console.log(`interceptando ${prop}`);
						Reflect.apply(target[prop], target, arguments);
						me._negociacaoGrid.update(target);
					}
				}

				return Reflect.get(target, prop, receiver);
			}
		});



		this._negociacaoGrid = new NegociacaoGrid($('#negociacaoGrid'));
		this._negociacaoGrid.update(this._listNegociacao);

		this._mensagem = new Mensagem();
		this._mensagemView = new MensagemView($('#mensagemView'));
		this._mensagemView.update(this._mensagem);
	}

	adiciona(event) {

		event.preventDefault();
		this._listNegociacao.adiciona(this._criaNegociacao());

		this._mensagem.setTexto("Negociação adicionada com sucesso!");
		this._mensagemView.update(this._mensagem);

		this._limpaTela();

	}

	apaga() {

		this._listNegociacao.esvazia();

		this._mensagem.setTexto("Negociações deletadas com sucesso!");
		this._mensagemView.update(this._mensagem);

		this._limpaTela();

	}

	_criaNegociacao() {

		return new Negociacao(
			DateHelper.dateFromText(this._inputData.value),
			this._inputQuantidade.value,
			this._inputValor.value
		);
	}

	_limpaTela() {

		this._inputData.value = '';
		this._inputQuantidade.value = 0;
		this._inputValor.value = 1.0;

		this._inputData.focus();
	}
}