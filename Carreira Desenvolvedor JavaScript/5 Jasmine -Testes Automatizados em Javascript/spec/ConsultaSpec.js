describe("Consulta",function(){

	var danilo;

	beforeEach(function(){
		//Test Data Builder
		danilo = new PacienteBuilder().build();
	});

	describe("Consultas do tipo Retorno",function(){
		it("não deve cobrar nada se consulta for retorno",function(){
			var consulta = new Consulta(danilo,[], true, true);
			expect(consulta.preco()).toEqual(0);
		});	
	});

	describe("Consultas com procedimentos",function(){
		it("deve cobrar 25 por cada procedimento comum",function(){
			var consulta = new Consulta(danilo,["proc1","proc2"], false, false);
			expect(consulta.preco()).toEqual(50);
		});

		it("deve cobrar 50 por cada procedimento comum para consulta particular",function(){
			var consulta = new Consulta(danilo,["proc1","proc2"], true, false);
			expect(consulta.preco()).toEqual(100);
		});

		it("deve cobrar preco especifico por cada procedimento",function(){
			var consulta = new Consulta(danilo,["proc1","raio-x","proc2","gesso"], false, false);
			expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
		});		
	});
	
	/**
	 * "a ideia aqui é criar o menor conjunto de cenários possíveis
	 * que cubram todas as possibilidades de execução daquele método.
	 * Dessa forma, ganhamos segurança. 
	 * Podemos refatorar o código de produção quantas vezes quisermos, 
	 * que nossos testes nos darão sempre segurança sobre o funcionamento dele."
	 * https://cursos.alura.com.br/course/testes-automatizados-em-javascript-com-jasmine/task/5277
	 */

});