class NegociacaoGrid extends View {

	template(model) {

		return `
			<table class="table table-hover table-bordered">
	        <thead>
	            <tr>
	                <th onClick="controller.ordena('_data')">DATA</th>
	                <th onClick="controller.ordena('_quantidade')">QUANTIDADE</th>
	                <th onClick="controller.ordena('_valor')">VALOR</th>
	                <th onClick="controller.ordena('_volume')">VOLUME</th>
	            </tr>
	        </thead>
	        
	        <tbody>
			    ${model.getNegociacoes().map(n =>

				`
				          <tr>
				            <td>${DateHelper.textFromDate(n.getData())}</td>
				            <td>${n.getQuantidade()}</td>
				            <td>${n.getValor()}</td>
				            <td>${n.getVolume()}</td>
				          </tr>
			          `

			).join('')}
			</tbody>
	        
	        <tfoot>
	        	<td colspan="3"></td>
	        	<td>
	        		${model.getNegociacoes().reduce((total, n) => total += n.getVolume(), 0.0)}
	        	</td>
	        </tfoot>
	    </table>
    `;
	}

	//o trecho abaixo:
	//${model.getNegociacoes().reduce((total,n) => total += n.getVolume(),0.0)}
	//é a redução de:
	/*<td>${
	        		(function(){
	        			let total = 0;
	        			model.getNegociacoes().forEach(n => total += n.getVolume());
	        			return total;
	        		})()
	        	}</td>
	*/
}