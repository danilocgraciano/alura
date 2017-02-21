class NegociacaoGrid{

	constructor(element){
		this._element = element;
	}
	
	_template(model){

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
	        </tfoot>
	    </table>
    `;
	}

	refresh(model){	
		this._element.innerHTML = this._template(model);
	}
}