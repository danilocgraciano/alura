describe("Paciente",function(){
	it("deve calcular o IMC",function(){
		var danilo = new Paciente("Danilo", 26, 75, 1.88);
		expect(danilo.imc()).toEqual(75 / (1.88 * 1.88));
	});

	it("deve calcular os Batimentos",function(){
		var danilo = new Paciente("Danilo", 26, 75, 1.88);
		expect(danilo.batimentos()).toEqual(26 * 365 * 24 * 60 * 80);
	});
});