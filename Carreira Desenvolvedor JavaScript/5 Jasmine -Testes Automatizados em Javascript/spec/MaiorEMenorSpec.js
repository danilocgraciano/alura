describe("Maior e Menor",function(){

	it("Deve Entender Números Sequencias",function(){
		var algoritmo = new MaiorEMenor();
		algoritmo.encontra([5,15,7,9]);

		expect(algoritmo.pegaMaior()).toEqual(15);
		expect(algoritmo.pegaMenor()).toEqual(5);
	});

	it("Deve Entender Números Ordem Decrescente",function(){
		var algoritmo = new MaiorEMenor();
		algoritmo.encontra([9,8,7,6]);

		expect(algoritmo.pegaMaior()).toEqual(9);
		expect(algoritmo.pegaMenor()).toEqual(6);
	});

	it("Deve Entender Números Ordem Crescente",function(){
		var algoritmo = new MaiorEMenor();
		algoritmo.encontra([1,5,9,10]);

		expect(algoritmo.pegaMaior()).toEqual(10);
		expect(algoritmo.pegaMenor()).toEqual(1);
	});

	it("Deve Entender Único número",function(){
		var algoritmo = new MaiorEMenor();
		algoritmo.encontra([1]);

		expect(algoritmo.pegaMaior()).toEqual(1);
		expect(algoritmo.pegaMenor()).toEqual(1);
	});

});