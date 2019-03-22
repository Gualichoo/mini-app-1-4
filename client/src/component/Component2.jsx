import React from 'react';
import $ from 'jquery';
import { notDeepEqual } from 'assert';

const Functionality = (props) => {

  var gameDynamics = function () {
    var count = 1;
    var redToggle = [];
    var blueToggle = [];
    // $(".square").mouseenter(
    // function() {
    //   $(this).css('background-color', 'red')
    // });
    $(".square").click(function(event) {
        //$(this).css('background-color', 'red');
        if (count % 2 === 0 && !redToggle.includes(this.id)) {
          blueToggle.push(this.id)
          $(this).removeClass("square").addClass("blueCircle");
          count ++;
          console.log(blueToggle)
        } else if (count % 2 !== 0 && !blueToggle.includes(this.id)) {
          redToggle.push(this.id)
          $(this).removeClass("square").addClass("redCircle");
        console.log(redToggle)
        count++
        }
        // var clicked = true;
      });

      // $(".square").mouseleave(
      //   function() {
      //     $(this).css('background-color', 'lightgoldenrodyellow')
      //   });





  }


    //split the classname to isolate the last number
  //   var number = this.className.slice(-1)
  //   //compare the number to the key value of the tictactoe object
  //     for (var key in tilecolor) {
  //     if (number === key) {
  //       //if the tile has already been activated then ignore
  //       if (tilecolor[key] === 'red' || tilecolor[key] === 'green' || victory === true) {
  //         continue
  //       } else {
  //         //set the tile to true and change color and text
  //         if (count % 2 === 0) {
  //           tilecolor[number] = 'red';
  //           turnRed(e);
  //           resultsArray.push(Number(number));
  //           count++;
  //           } else {
  //             tilecolor[number] = 'green';
  //             turnGreen(e);
  //             resultsArray.push(Number(number));
  //             count ++;
  //           }
  //       }
  //     if (
  //       tilecolor[1] === 'red' && tilecolor[4] === 'red' && tilecolor[7] === 'red' ||
  //       tilecolor[2] === 'red' && tilecolor[5] === 'red' && tilecolor[8] === 'red' ||
  //       tilecolor[3] === 'red' && tilecolor[6] === 'red' && tilecolor[9] === 'red' ||
  //       tilecolor[1] === 'red' && tilecolor[2] === 'red' && tilecolor[3] === 'red' ||
  //       tilecolor[4] === 'red' && tilecolor[5] === 'red' && tilecolor[6] === 'red' ||
  //       tilecolor[7] === 'red' && tilecolor[8] === 'red' && tilecolor[9] === 'red' ||
  //       tilecolor[1] === 'red' && tilecolor[5] === 'red' && tilecolor[9] === 'red' ||
  //       tilecolor[7] === 'red' && tilecolor[5] === 'red' && tilecolor[3] === 'red'
  //     ) {
  //       victory = true;
  //       //alert ('Red wins!!! Congratulations :)')
  //       setTimeout(alert ('Red wins!!! Congratulations :)'), 1);
  //       // e.querySelectorAll('.tile').removeEventListener('click');
  //       // document.getElementById("restart").click();
  //     } else if (
  //       tilecolor[1] === 'green' && tilecolor[4] === 'green' && tilecolor[7] === 'green' ||
  //       tilecolor[2] === 'green' && tilecolor[5] === 'green' && tilecolor[8] === 'green' ||
  //       tilecolor[3] === 'green' && tilecolor[6] === 'green' && tilecolor[9] === 'green' ||
  //       tilecolor[1] === 'green' && tilecolor[2] === 'green' && tilecolor[3] === 'green' ||
  //       tilecolor[4] === 'green' && tilecolor[5] === 'green' && tilecolor[6] === 'green' ||
  //       tilecolor[7] === 'green' && tilecolor[8] === 'green' && tilecolor[9] === 'green' ||
  //       tilecolor[1] === 'green' && tilecolor[5] === 'green' && tilecolor[9] === 'green' ||
  //       tilecolor[7] === 'green' && tilecolor[5] === 'green' && tilecolor[3] === 'green'
  //     ) {
  //       victory = true;
  //       alert ('Green wins!!! Congratulations :)')
  //     };
  //     if (resultsArray.length === 9 && victory === false) {
  //       alert ('It\'s a draw, try again')
  //     }
  //     }
  //     }
  //   }
  // )})
  // }
  return (
    gameDynamics()
  )

}

export default Functionality;