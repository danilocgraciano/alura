function Agendamento(){
	var clazz = {

		para : function(consulta){
			var umDiaMilis = 1000 * 60 * 60  * 24;
			var vinteDiasMilis =  umDiaMilis * 20;
			var novaData = new Date(consulta.getData().getTime() + vinteDiasMilis);

			while(novaData.getDay()==0 || novaData.getDay()==6) 
				novaData = new Date(novaData.getTime() + umDiaMilis);

			var novaConsulta = new Consulta(consulta.getPaciente(), consulta.getProcedimentos(), 
				consulta.isParticular(), consulta.isRetorno(), novaData);
            return novaConsulta;
		}

	};

	return clazz;
};