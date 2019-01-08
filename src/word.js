const VOWELS = ["a", "e", "i", "o", "u"];
const LEGALVALUES = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export function Word(word) {
  this.word = word;
}

Word.prototype.isLegal = function() {
  for(var i = 0; i < this.word.length; i++) {
    var letterLegal = false;
    for(var j = 0; j < LEGALVALUES.length; j++) {
      if(this.word.slice(i, i+1) === LEGALVALUES[j]) {
        letterLegal = true;
        break;
      }
    }
    if(!letterLegal) {
      return false;
    }
  }
  return true;
};

Word.prototype.isVowel = function(letter, pointInWord) {
  if(letter === "u" && pointInWord > 0 && this.word.slice(pointInWord - 1, pointInWord) === "q") {
    return false;
  }
  for(var i = 0; i < VOWELS.length; i++) {
    if(VOWELS[i] === letter) {
      return true;
    } else if(pointInWord > 0 && letter === "y") {
      return true;
    }
  }
  return false;
};

Word.prototype.findFirstVowel = function() {
  for(var i = 0; i < this.word.length; i++) {
    if(this.isVowel(this.word.slice(i, i+1), i)) {
      return i;
    }
  }
};

Word.prototype.pigLatin = function() {
  var firstVowel = this.findFirstVowel(this.word);
  var frontPortion = this.word.slice(0, firstVowel);
  var newWord;
  if(firstVowel === 0) {
    newWord = this.word.concat("way");
  } else {
    newWord = this.word.slice(firstVowel) + frontPortion + "ay";
  }
  return newWord;
};
