class NegociacaoController{

	constructor(){
		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		this._listNegociacao = new ListNegociacoes();

		this._negociacaoGrid = new NegociacaoGrid($('#negociacaoGrid'));
		this._negociacaoGrid.refresh(this._listNegociacao);
	}

	adiciona(event){

		event.preventDefault();
		this._listNegociacao.adiciona(this._criaNegociacao());
		this._negociacaoGrid.refresh(this._listNegociacao);
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