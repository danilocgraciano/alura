describe("Agendamento",function(){

	var agenda;
	var danilo;

	beforeEach(function(){
		agenda = new Agendamento();
		danilo = new PacienteBuilder().build();
	});

	it("deve agendar retorno para 20 dias",function(){
		var consulta = new Consulta(danilo,[],false,false,new Date(2014,7,1));//01 de agosto de 2014
		var retorno = agenda.para(consulta);

		expect(retorno.getData().toString()).toEqual(new Date(2014,7,21).toString());
	});

	it("deve agendar retorno para 20 dias considerando final de semana",function(){
		var consulta = new Consulta(danilo,[],false,false,new Date(2014,5,30));//30 de junho de 2014
		var retorno = agenda.para(consulta);

		expect(retorno.getData().toString()).toEqual(new Date(2014,6,21).toString());//21 de julho de 2014
	});
});