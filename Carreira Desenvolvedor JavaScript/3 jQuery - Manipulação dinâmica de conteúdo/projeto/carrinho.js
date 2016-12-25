var refreshTotais = function(){

	var items = $(".item-total:visible");
	var total = 0;
	for (var i = 0; i < items.length; i++) {
		var preco = parseFloat($(items[i]).text());
		total += preco;
	};
	$("#valor-total").text(total);
	$("#quantidade-de-itens").text(items.length);

};

var undo = function(){

	$("tr:hidden").addClass("recuperado").show();

	refreshTotais();
};

var removeItem = function(event){

	event.preventDefault();

	/*

	var qtdeItens = parseInt($("#quantidade-de-itens").text()) -1;
	$("#quantidade-de-itens").text(qtdeItens);
	
	var totalItens = parseFloat($("#valor-total").text());
	var valorItem = parseFloat($(this).parent().prev().text());
	var valorItem = parseFloat($(this).closest("td").siblings(".item-total").text());
	var valorItem = parseFloat($(this).closest("tr").find(".item-total").text());
	$("#valor-total").text(totalItens - valorItem);
	
	$(this).closest("tr").remove();

	*/

	$(".recuperado").removeClass("recuperado");
	$(this).closest("tr").hide();

	refreshTotais();


};

var executaAposInicializacao = function(){

	$(".remove-item").click(removeItem);
	$("#btnUndo").click(undo);

	refreshTotais();
};

$(executaAposInicializacao);