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
		frase[i] = frase[i].toLowerCase().replace(/[\n\r]/g,'');
	}

	return frase
}

function removeStopWords(frase){	
	stopwords  = stopwordsfunc()
	console.log(stopwords)
	for(var j=0;j<frase.length;j++){
		for(var i=0; i<stopwords.length; i++){
				if(frase.includes(stopwords[i])){
					frase.splice(frase.indexOf(stopwords[i]),1)
				}
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


function stopwordsfunc (){
	return ["a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "between", "both", "but", "by", "can't", "cannot", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "don't", "down", "during", "each", "few", "for", "from", "further", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "isn't", "it", "it's", "its", "itself", "let's", "me", "more", "most", "mustn't", "my", "myself", "no", "nor", "not", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own", "same", "shan't", "she", "she'd", "she'll", "she's", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to", "too", "under", "until", "up", "very", "was", "wasn't", "we", "we'd", "we'll", "we're", "we've", "were", "weren't", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves", "ante", "após", "até", "com", "de", "desde", "em", "para", "por", "sem", "sob", "como", "senão", "la", "le", "lo", "a", "o", "e", "an", "en", "so", "con", "um", "uma", "un", "una", "uno", "del", "y", "da", "já", "ya", "ser"] 
}