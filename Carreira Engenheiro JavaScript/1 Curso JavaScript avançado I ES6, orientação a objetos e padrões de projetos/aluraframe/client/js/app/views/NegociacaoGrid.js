class NegociacaoGrid extends View {

	template(model) {

		return `
			<table class="table table-hover table-bordered">
	        <thead>
	            <tr>
	                <th>DATA</th>
	                <th>QUANTIDADE</th>
	                <th>VALOR</th>
	                <th>VOLUME</th>
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