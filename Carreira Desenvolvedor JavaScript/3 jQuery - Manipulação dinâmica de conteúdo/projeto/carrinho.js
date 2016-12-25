var geraPropaganda = function(){
	var propagandas= [
		"O que acha de comprar uma motocicleta?",
		"O que acha de comprar uma lancha?",
		"O que acha de comprar uma bicicleta?",
		"O que acha de comprar um carro?"
	];

	var index = Math.floor(propagandas.length * Math.random());
	var tr = $('<tr>').addClass("propaganda").append("<td>");
	tr.find("td").attr("colspan",6).text(propagandas[index]);
	return tr;
	
};

var refreshTotais = function(){

	$(".carrinho").each(function(){
		
		var items = $(this).find(".item-total:visible");
		var total = 0;

		for (var i = 0; i < items.length; i++) {
			var preco = parseFloat($(items[i]).text());
			total += preco;
		};

		$(this).find(".valor-total").text(total);
		$(this).find(".quantidade-de-itens").text(items.length);

		});

};

var undo = function(){
	$(this).closest(".carrinho").find("tr:hidden").addClass("recuperado").show();

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

	$(this).closest("tr").find(".recuperado").removeClass("recuperado");
	$(this).closest("tr").hide();

	refreshTotais();


};

var executaAposInicializacao = function(){

	$(".remove-item").click(removeItem);
	$(".undo").click(undo);

	refreshTotais();

	$(".carrinho").each(function(){
		$(this).find("tr:nth-child(3n), tr:last").each(function(){
			geraPropaganda().insertAfter($(this));
		});	
	});

	
	/* para mudar a cor da linha conforme mouse entra e sai

	$(".carrinho tbody tr").on("mouseenter",function(){
		$(this).addClass("hovering");
	});
	$(".carrinho tbody tr").on("mouseleave",function(){
		$(this).removeClass("hovering");
	});

	*/
	$(".carrinho tbody tr").hover(function(){
		$(this).addClass("hovering");
		$(this).find(".remove-item").fadeIn();
	},
	function(){
		$(this).removeClass("hovering");
		$(this).find(".remove-item").fadeOut();
	});

	$(".alterna-propaganda").click(function(event){
		event.preventDefault();
		$(".alterna-propaganda").toggle();
		$(".propaganda").fadeToggle();

	});
};

$(executaAposInicializacao);