
class THEONE {
	constructor(v){
		this._value = v;
	}

	bind(fun) {
		this._value = fun(this._value);
		return this;
	}

	printme(){
		console.log(this._value);
	}
}

function upperCase(frase){
	return frase.toUpperCase();
}

var frase = new THEONE("OlA MunDo TP2");