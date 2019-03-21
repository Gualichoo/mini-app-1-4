import React from 'react';
import $ from 'jquery';


const Board = (props) => {
  var buildBoard = function() {
    for (var i = 0; i < 6; i++) {
      $('.grid').append("<div class='row' id='row"+i+"'></div>");
      for (var j = 0; j < 7; j++) {
        $('#row'+i).append("<div class='square'></div>");
      }
    }
  }
  return (
    buildBoard()
  )
};

export default Board;

