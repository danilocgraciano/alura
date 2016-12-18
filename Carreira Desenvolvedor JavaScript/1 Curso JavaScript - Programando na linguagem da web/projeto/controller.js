function iterate(myArray,myFunction){
	for (var i = 0; i < myArray.length; i++) {
		var element = myArray[i];
		myFunction(element);
	};
};

function extractPaciente(tr){
	var paciente = {
			nome: tr.getElementsByClassName("info-nome")[0].textContent,
			peso: tr.getElementsByClassName("info-peso")[0].textContent,
			altura: tr.getElementsByClassName("info-altura")[0].textContent,
			imc : tr.getElementsByClassName("info-imc")[0].textContent,
			calculaIMC : function(){
				this.imc = null;
				if (this.altura > 0)
					this.imc = this.peso / (this.altura * this.altura);
				return this;
			}
	};
	return paciente;
};

var listTr = document.getElementsByTagName("tr");
iterate(listTr, function(element){
	element.addEventListener("mouseover",function(){
		this.setAttribute("bgcolor","#FFF68F");
	});
	element.addEventListener("mouseout",function(){
		this.setAttribute("bgcolor","#FFFFFF");
	});
});

var btnCalculaIMC = document.getElementById("calcula-imcs");
btnCalculaIMC.addEventListener("click",function(){
	var trPacientes = document.getElementsByClassName("paciente");

	iterate(trPacientes, function(element){
		var paciente = extractPaciente(element);
		paciente.calculaIMC();
		element.getElementsByClassName("info-imc")[0].textContent = paciente.imc;
	});
});
//exemplificar mais de um evento sem sobrescrita
//btnCalculaIMC.onClick = ######
btnCalculaIMC.addEventListener("click",function(){
	console.log("btnCalculaIMC.onClick()");
});

var btnAddPaciente = document.querySelector("#adicionar-paciente");
btnAddPaciente.addEventListener("click",function(event){
	//previne comportamento default
	//neste caso, para impedir submit do form, pois a aplicação não possui BD.
	event.preventDefault();

	var nome = document.querySelector("#campo-nome");
	var peso = document.querySelector("#campo-peso");
	var altura = document.querySelector("#campo-altura");

	var pacienteNovo = "<tr class='paciente'>"+
						"<td class='info-nome'>"+nome.value+"</td>"+
						"<td class='info-peso'>"+peso.value+"</td>"+
						"<td class='info-altura'>"+altura.value+"</td>"+
						"<td class='info-imc'></td>"+
					"</tr>";
	var tabela = document.querySelector("table");
	tabela.innerHTML += pacienteNovo;

	nome.value = "";
	peso.value = "";
	altura.value = "";
});
