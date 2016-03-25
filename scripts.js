  console.log('..loaded');

var guessGame = {};
guessGame.num = Math.floor(Math.random() * 10)

function guessHandler(){
    $('#guesssub').on('click', function(e){
    e.preventDefault;
    var guess = parseInt($('#guess').val())
    if (guess < guessGame.num) {alert('guess a higher number')}
    else if (guess > guessGame.num) {alert('guess a lower number')}
    else {alert('You Win!')}
    })
  }



$(function(){




  guessHandler()


})
