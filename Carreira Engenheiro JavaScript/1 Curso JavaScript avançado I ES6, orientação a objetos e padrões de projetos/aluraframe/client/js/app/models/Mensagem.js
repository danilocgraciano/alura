class Mensagem{

	//texto='' é o padrão para quando não é passado nada no construtor
	//caso seja passado, o valor passado é colocado no atributo da classe
	constructor(texto=''){

		this._texto = texto;

	}

	getTexto(){
		return this._texto;
	}

	setTexto(texto){
		this._texto = texto;
	}
}