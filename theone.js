
class Frase {
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

	value(){
		return this._value;
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

function palindrome(frase){
	var f = new Frase(frase);
	return (f.bind(upperCase).bind(removeSpecialCharacters).bind(reverseFrase).value() == frase.toUpperCase());
}

var string_tp2 = "OlA MunDo TP2";
var frase = new Frase(string_tp2);