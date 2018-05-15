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

function sizeOfHash(obj) {
    var size = 0, key;
    for (key in obj) {
       if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function wordCount(frase){
	var f = new THEONE(frase);
	var hash;
	frase_from_hash = "";
	hash = f.bind(splitWords).bind(uncapitalize).bind(removeStopWords).bind(countWords).value()
	console.log(sizeOfHash(hash));
	for (var k in hash) {
    // use hasOwnProperty to filter out keys from the Object.prototype
    if (hash.hasOwnProperty(k)) {
        frase_from_hash += k + " -> " + hash[k] + ", "
    }
}
	for(var i=0; i<sizeOfHash(hash);i++){
	}
	swal({
    title: "Palavras:",
    text: frase_from_hash,
    icon: "success",
    button: "Massa!",
  });
}