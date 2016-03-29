console.log('...loaded');

var x = function rendSq(){ $('.board').append($('<div class="sq" move-val="0">'))}
var rone = function rendPi(){ $('.board').append($('<div class="sq pi" move-val="1" varId=rone>').text(1))}
var bone = function rendBluePi(){ $('.board').append($('<div class="sq bluepi" move-val="1" varId=bone>').text(1))}
var rtwo = function rendPi(){ $('.board').append($('<div class="sq pi" move-val="2" varId=rtwo>').text(2))}
var btwo = function rendBluePi(){ $('.board').append($('<div class="sq bluepi" move-val="2" varId=btwo>').text(2))}
var rthree = function rendPi(){ $('.board').append($('<div class="sq pi" move-val="3" varId=rthree>').text(3))}
var bthree = function rendBluePi(){ $('.board').append($('<div class="sq bluepi" move-val="3" varId=bthree>').text(3))}
var rflag = function rendPi(){ $('.board').append($('<div class="sq pi" move-val="1" varId=rflag>').text('F'))}
var bflag = function rendBluePi(){ $('.board').append($('<div class="sq bluepi" move-val="1" varId=bflag>').text('F'))}



var Board = [
  x, x, x, x, x,
  x, x, x, x, x,
  x, x, x, x, x,
  x, x, x, x, x,
  x, x, x, x, x,
  x, x, x, x, x,
  x, x, x, x, x
 ]

 var BoardOrigin = [
   x, x, x, x, x,
   x, x, x, x, x,
   x, x, x, x, x,
   x, x, x, x, x,
   x, x, x, x, x,
   x, x, x, x, x,
   x, x, x, x, x
  ]


  function shuffle(array) {
var currentIndex = array.length, temporaryValue, randomIndex;

// While there remain elements to shuffle...
while (0 !== currentIndex) {

  // Pick a remaining element...
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;

  // And swap it with the current element.
  temporaryValue = array[currentIndex];
  array[currentIndex] = array[randomIndex];
  array[randomIndex] = temporaryValue;
}

return array;
}


  function setUpRed(){
    var redpieces = [rflag, rone, rone, rone, rone, rone, rtwo, rtwo, rtwo, rthree];

      d = -1
      var redgameset = shuffle(redpieces)

      for (var i = 25; i < 35; i++) {
          d += 1
        Board[i] = redgameset[d]
      }

  }


  function setUpBlue(){
    var bluepieces = [bflag, bone, bone, bone, bone, bone, btwo, btwo, btwo, bthree];

      d = -1
      var bluegameset = shuffle(bluepieces)

      for (var i = 0; i < 10; i++) {
          d += 1
        Board[i] = bluegameset[d]
      }

  }






  function renderBoard(){
    for (var i = 0; i < Board.length; i++) {
      Board[i]()
      }

  };

  function clearBoard(){
    for (var i = 0; i < Board.length; i++) {
     $('div').remove()
   }

 };

//
// function clickMover(){
//
//     $('body').on('click', function(e){
//       var div_list = document.body.children
//       var div_array = Array.from(div_list)
//       var c = e.target
//           if (e.target.className === 'sq'){return alert('Not a piece!')}
//     clearBoard();
//     var clickPi = div_array.indexOf(c)
//
// if (e.target.className === 'pi'){
//     Board[clickPi] = x
//     Board[clickPi+5] = y
//   } else if (e.target.className ==='bluepi'){
//   Board[clickPi] = x
//   Board[clickPi+5] = z
// }
//
//     renderBoard();
//
//     }  )
// }


function clickMove(){
  $('body').on('click', function(e){
    var div_list = document.body.children
    var div_array = Array.from(div_list)
    var c = e.target

    // Finding index of the clicked square
    var clickPi = div_array.indexOf(c)

    if (e.target.className === 'sq'){
      return alert('Not a piece!')
    }


    var currentSq = $('.sq').eq(clickPi);

function varIdent(vari){
  return vari.attr('varId')

}


    // moves back
      if (e.shiftKey === true){

      var movingTo = $('.sq').eq(clickPi-5);
      if (e.target.className === movingTo.attr('class')){
        return alert('You already have a piece there!')
      }
      if (parseInt(movingTo.attr("move-val")) < parseInt(currentSq.attr("move-val"))) {
        if (e.target.className == 'sq bluepi'){
        Board[clickPi] = x
        Board[clickPi-5] = window[varIdent(currentSq)]}
        else {
          Board[clickPi] = x
          Board[clickPi-5] = window[varIdent(currentSq)]

        }
      }else if(parseInt(movingTo.attr("move-val")) > parseInt(currentSq.attr("move-val"))) {
        Board[clickPi] = x
      }else if(parseInt(movingTo.attr("move-val")) == parseInt(currentSq.attr("move-val"))) {
        console.log('worked');
        Board[clickPi] = x
        Board[clickPi-5] = x
      }
      clearBoard();
      renderBoard();
      // captureValidate()

    // moves left
    }else if (e.altKey === true){
      var movingTo = $('.sq').eq(clickPi+1);
      if (e.target.className === movingTo.attr('class')){
        return alert('You already have a piece there!')
      }
      if (parseInt(movingTo.attr("move-val")) < parseInt(currentSq.attr("move-val"))) {
        if (e.target.className == 'sq bluepi'){
        Board[clickPi] = x
        Board[clickPi+1] = window[varIdent(currentSq)]}
        else {
          Board[clickPi] = x
          Board[clickPi+1] = window[varIdent(currentSq)]
        }
      }else if(parseInt(movingTo.attr("move-val")) > parseInt(currentSq.attr("move-val"))) {
        Board[clickPi] = x
      }else if(parseInt(movingTo.attr("move-val")) == parseInt(currentSq.attr("move-val"))) {
        Board[clickPi] = x
        Board[clickPi+1] = x
      }
      clearBoard();
      renderBoard();

    // moves right
    }else if (e.metaKey === true){
      var movingTo = $('.sq').eq(clickPi-1);
      if (e.target.className === movingTo.attr('class')){
        return alert('You already have a piece there!')
      }

      if (parseInt(movingTo.attr("move-val")) < parseInt(currentSq.attr("move-val"))) {
        if (e.target.className == 'sq bluepi'){
        Board[clickPi] = x
        Board[clickPi-1] = window[varIdent(currentSq)]}
        else {
          Board[clickPi] = x
          Board[clickPi-1] = window[varIdent(currentSq)]

        }
      }else if(parseInt(movingTo.attr("move-val")) || 0 > parseInt(currentSq.attr("move-val"))) {
        Board[clickPi] = x
      }else if(parseInt(movingTo.attr("move-val")) || 0 == parseInt(currentSq.attr("move-val"))) {
        Board[clickPi] = x
        Board[clickPi-1] = x
      }
      clearBoard();
      renderBoard();
  }

  else {
          var movingTo = $('.sq').eq(clickPi+5);
          if (e.target.className === movingTo.attr('class')){
            return alert('You already have a piece there!')
          }

          if (parseInt(movingTo.attr("move-val")) < parseInt(currentSq.attr("move-val"))) {
            if (e.target.className == 'sq bluepi'){
            Board[clickPi] = x
            Board[clickPi+5] = window[varIdent(currentSq)]}
            else {
            Board[clickPi] = x
            Board[clickPi+5] = window[varIdent(currentSq)]}
          }else if(parseInt(movingTo.attr("move-val"))> parseInt(currentSq.attr("move-val"))) {
            Board[clickPi] = x
          }else if(parseInt(movingTo.attr("move-val")) == parseInt(currentSq.attr("move-val"))) {
            Board[clickPi] = x
            Board[clickPi+5] = x
          }
          clearBoard();
          renderBoard();
      // captureValidate()
    }
});
}

// function clickLeft(){
//
//     $('body').on('click', function(e){
//       var div_list = document.body.children
//       var div_array = Array.from(div_list)
//       var c = e.target
//     if (e.altKey === true){
//       if (e.target.className === 'sq'){
//         return alert('Not a piece!')
//       }
//       clearBoard();
//       var clickPi = div_array.indexOf(c)
//       Board[clickPi] = x
//       Board[clickPi+1] = y
//       renderBoard();
//     }
//     }  )
// }
// function clickRight(){
//
//     $('body').on('click', function(e){
//       var div_list = document.body.children
//       var div_array = Array.from(div_list)
//       var c = e.target
//     if (e.metaKey === true){
//           if (e.target.className === 'sq'){return alert('Not a piece!')}
//     clearBoard();
//     var clickPi = div_array.indexOf(c)
//
//     Board[clickPi] = x
//     Board[clickPi-1]= y
//     renderBoard();
//     }
//     })
// }



function showPi(el){
  if(el === y || el ===z){return el}

}
function showBluPi(el){
  if(el === z){return el}

}
function showRedPi(el){
  if(el === y){return el}

}
function removeRed(el){
  if (el === y ){Board.indexOf(el)}

}



function cleanArray(actual) {
  var newArray = new Array();
  for (var i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}




















$(function (){


setUpRed()
setUpBlue()
renderBoard()
clickMove()
// clickLeft()
// clickRight()
// clickMover()


})
