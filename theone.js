// Classe THEONE com o wrapper e o bind
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

	value(){
		return this._value;
	}
}

//Funções para achar palíndromos
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
	var f = new THEONE(frase);
	var f_aux = new THEONE(frase);
	return (f.bind(upperCase).bind(removeSpecialCharacters).bind(reverseFrase).value()
	== f_aux.bind(upperCase).bind(removeSpecialCharacters).value());
}

//Variáveis de teste
var string_tp2 = "OlA MunDo TP2";
var string_palindromo = "Luza Rocelina, a namorada do Manuel, leu na moda da romana: \"anil e cor azul\"."
