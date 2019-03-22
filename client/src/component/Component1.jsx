import React from 'react';
import $ from 'jquery';


const Board = (props) => {
  var buildBoard = function() {
    for (var i = 0; i < 7; i++) {
      $('.grid').append("<div class='row' id='row"+i+"'></div>");
      for (var j = 0; j < 6; j++) {
        $('#row'+i).append("<div class='square' id="+i+j+"></div>");
      }
    }
  }
  return (
    buildBoard()
  )
};

export default Board;



