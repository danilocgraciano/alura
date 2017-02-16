class ListNegociacoes{

	constructor(){
		this._negociacoes = [];
	}

	adiciona(negociacao){
		this._negociacoes.push(negociacao);
	}

	getNegociacoes(){
		return this._negociacoes;
	}
}