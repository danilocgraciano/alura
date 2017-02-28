class MensagemView extends View {

	template(model) {

		return model.getTexto() ? `<p class="alert alert-info">${model.getTexto()}</p>` : ''
	}

}