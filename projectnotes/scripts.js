console.log('...loaded');

var x = function rendSq(){ $('.board').append($('<div>'))}
var y = function rendPi(){ $('.board').append($('<div class ="pi">'))}

var Board = [
  y, y, y,
  x, x, x,
  x, x, x,
  x, x, x
 ]






  function renderBoard(){
    for (var i = 0; i < Board.length; i++) {
      Board[i]()
      }

  };
  function clearBoard(){
    for (var i = 0; i < 6; i++) {
     $('div').remove()
   }

  }



function pieceFwd(){
  $('body').keydown(function(e){
      if (e.keyCode == 37) {
        clearBoard();
 var locPi = Board.indexOf(y)
        Board[locPi] = x
        Board[locPi+1] = y
        renderBoard();
      }
})
}

function pieceBck(){
  $('body').keydown(function(e){
      if (e.keyCode == 39) {
        clearBoard();
        var locPi = Board.indexOf(y)
               Board[locPi] = x
               Board[locPi-1] = y
        renderBoard();
      }
})
}

function pieceDwn(){
  $('body').keydown(function(e){
      if (e.keyCode == 40) {
        clearBoard();
        var locPi = Board.indexOf(y)
               Board[locPi] = x

             Board[locPi+3] = y
        renderBoard();
      }
})
}
function pieceUp(){
  $('body').keydown(function(e){
      if (e.keyCode == 38) {
        clearBoard();
        var locPi = Board.indexOf(y)
               Board[locPi] = x

             Board[locPi-3] = y
        renderBoard();
      }
})
}

function clickMover(){

    $('body').on('click', function(e){
      var div_list = document.body.children
      var div_array = Array.from(div_list)
    var c = e.target
    clearBoard();
    var clickPi = div_array.indexOf(c)
    Board[clickPi] = x
    Board[clickPi+3] = y
    renderBoard();

    }  )
}

function clickBack(){

    $('body').on('click', function(e){
      var div_list = document.body.children
      var div_array = Array.from(div_list)
      var c = e.target
    if (e.shiftKey === true){
    clearBoard();
    var clickPi = div_array.indexOf(c)
    Board[clickPi] = x
    Board[clickPi-3] = y
    renderBoard();
    }
    }  )
}


















$(function (){

renderBoard()
pieceFwd()
pieceBck()
pieceDwn()
pieceUp()
clickBack()
clickMover()


})
