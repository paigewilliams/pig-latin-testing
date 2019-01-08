import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Word } from './../src/word.js';
import './styles.css'

$(document).ready(function() {
  $("#pig").submit(function(event) {
    event.preventDefault();
    var word = new Word($("#latin").val().toLowerCase());
    if(!word.isLegal()) {
      $("#not-word").show();
      $("#results").hide();
    } else {
      var newWord = word.pigLatin();
      $("#output").text(newWord);
      $("#results").show();
      $("#not-word").hide();
    }
  });
});
