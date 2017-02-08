class Negociacao{

	constructor(data, quantidade, valor){

		/* o caracter "_" antes da variável significa que por convenção
		 * não devemos acessar estas variáveis a não ser dento da própria classe
		 * utilizar métodos get e set.
		*/
		this._data = new Date(data.getTime());
		this._quantidade = quantidade;
		this._valor = valor;
		//para garantir que nenhum atributo da classe será alterado
		//a negociação não pode ser alterada depois de criada (deve ser imutável)
		Object.freeze(this);
	}

	getData(){
		//usado para prevenir modificações, para garantir a imutabilidade,
		//por se tratar de um outro objeto to tipo date
		return new Date(this._data.getTime());
	}

	getQuantidade(){
		return this._quantidade;
	}

	getValor(){
		return this._valor;
	}

	getVolume(){
		return this._quantidade * this._valor;
	}

	/*
	OS MÉTODOS GET E SET TAMBÉM PODERIAM SER FEITOS ASSIM
	USADO QUANDO OS ATRIBUTOS SÃO MARCADOS COMO PRIVADOS "_PROPRIEDADE".
	ISSO IMPEDE QUE O TRECHO OBJ.ATRIBUTO = "" AINDA FUNCIONE.
	pois OBJ.ATRIBUTO É UM MÉTODO E NÃO UMA VARIÁVEL.

	get quantidade(){
		return new Date(this._data.getTime());	
	}

	get valor(){
		return this._valor;
	}

	get valor(){
		return this._quantidade * this._valor;
	}
	**/


}