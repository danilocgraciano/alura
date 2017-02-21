class DateHelper{

	constructor(){
		//lanca um erro, serve para validar classes abstratas (não possível de instancia)
		throw new Error("DateHelper não pode ser instanciado!");
	}

	static dateFromText(strDate){
		
		if (!/\d{4}-\d{2}-\d{2}/.test(strDate))
			throw new Error("Data deve estar no formato yyyy-MM-dd");
		
		return new Date(strDate.split('-'));
	}

	static textFromDate(aDate){

		return aDate.getDate() + '/' + (aDate.getMonth() + 1) + '/' + aDate.getFullYear();
	}
}