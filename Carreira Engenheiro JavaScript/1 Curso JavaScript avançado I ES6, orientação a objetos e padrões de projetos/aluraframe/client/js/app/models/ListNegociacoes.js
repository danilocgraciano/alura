class ListNegociacoes {

	constructor() {
		this._negociacoes = [];
	}

	adiciona(negociacao) {
		this._negociacoes.push(negociacao);
	}

	getNegociacoes() {
		return [].concat(this._negociacoes);
	}

	esvazia() {
		this._negociacoes = [];
	}

	ordena(criterio){
		this._negociacoes.sort(criterio);
	}

	inverteOrdem(){
		this._negociacoes.reverse();
	}
}