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

function splitWords(frase){
	return frase.split(' ')
}

function uncapitalize(frase){
	for(var i=0;i<frase.length;i++){
		frase[i] = frase[i].toLowerCase()
	}

	return frase
}

function removeStopWords(frase){
	stopwords = ["com"]
	for(var i=0; i<stopwords.length; i++){
		if(frase.includes(stopwords[i])){
			frase.splice(frase.indexOf(stopwords[i]),1)
		}
	}

	return frase
}


function countWords(frase){
	var word_map = {}
	for(var i=0; i<frase.length; i++){
			word_map[frase[i]] = 0
	}

	for(var i=0; i<frase.length; i++){
			word_map[frase[i]] += 1
	}

	return word_map
	
}

function wordCount(frase){
	var f = new THEONE(frase);
	f.bind(splitWords).bind(uncapitalize).bind(removeStopWords).bind(countWords).printme()
}