
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

function removeSpecialCharacters (frase){
	return frase.replace(/\W/g,"");
}

function reverseFrase(frase){
	var splitFrase = frase.split("");
  var reverseArray = splitFrase.reverse();
  var reversedFrase = reverseArray.join("");
  
  return reversedFrase;
}

var frase = new THEONE("OlA MunDo TP2");