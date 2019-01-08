import { Word } from './../src/word.js';

describe('Word', function() {
  it('should create a word', function() {
    var word = new Word("trash");
    expect(word.word).toEqual("trash");
  });

  it('should check whether a word contains only letters', function() {
    var word1 = new Word("dog");
    var word2 = new Word("1231425e");
    expect(word1.isLegal()).toEqual(true);
    expect(word2.isLegal()).toEqual(false);
  });

  it('should find the first vowel in a word, counting qu as a consonant', function() {
    var word1 = new Word("apple");
    var word2 = new Word("barbeque");
    var word3 = new Word("trash");
    var word4 = new Word("quack");
    expect(word1.findFirstVowel()).toEqual(0);
    expect(word2.findFirstVowel()).toEqual(1);
    expect(word3.findFirstVowel()).toEqual(2);
    expect(word4.findFirstVowel()).toEqual(2);
  });

  it('should find the pig latin derivation of a word', function() {
    var word1 = new Word("apple");
    var word2 = new Word("barbeque");
    var word3 = new Word("trash");
    var word4 = new Word("quack");
    expect(word1.pigLatin()).toEqual("appleway");
    expect(word2.pigLatin()).toEqual("arbequebay");
    expect(word3.pigLatin()).toEqual("ashtray");
    expect(word4.pigLatin()).toEqual("ackquay");
  });
});
