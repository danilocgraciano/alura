function PacienteBuilder(){
	var nome = "danilo";
	var idade = 26;
	var peso = 86;
	var altura = 1.88;

	var clazz = {
		setNome : function(valor){
			nome = valor;
			return this;
		},
		setIdade : function(valor){
			idade = valor;
			return this;
		},
		setPeso : function(valor){
			peso = valor;
			return this;
		},
		setAltura : function(valor){
			altura = valor;
			return this;
		},
		build : function(){
			return new Paciente(nome, idade, peso, altura);
		}
	};

	return clazz;
};