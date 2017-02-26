class NegociacaoController{

	constructor(){
		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');

		this._listNegociacao = new ListNegociacoes();
		this._negociacaoGrid = new NegociacaoGrid($('#negociacaoGrid'));
		this._negociacaoGrid.update(this._listNegociacao);

		this._mensagem = new Mensagem();
		this._mensagemView = new MensagemView($('#mensagemView'));
		this._mensagemView.update(this._mensagem);
	}

	adiciona(event){

		event.preventDefault();
		this._listNegociacao.adiciona(this._criaNegociacao());
		this._negociacaoGrid.update(this._listNegociacao);
		
		this._mensagem.setTexto("Negociação adicionada com sucesso!");
		this._mensagemView.update(this._mensagem);
		
		this._limpaTela();
		
	}

	_criaNegociacao(){

		return new Negociacao(
			DateHelper.dateFromText(this._inputData.value),
			this._inputQuantidade.value,
			this._inputValor.value
		);
	}

	_limpaTela(){

		this._inputData.value = '';
		this._inputQuantidade.value = 0;
		this._inputValor.value = 0.0;

		this._inputData.focus();
	}
}