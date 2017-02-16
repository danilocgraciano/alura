class NegociacaoController{

	constructor(){
		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
	}

	adiciona(event){

		event.preventDefault();

		let list = new ListNegociacoes();
		list.adiciona(this._criaNegociacao());
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