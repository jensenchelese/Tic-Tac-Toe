var previousWinner;

var piece = 'X';

var score = {X: 0, O: 0};

function togglePiece() {
  if(piece === 'X') {
    piece = 'O';
  } else {
    piece = 'X';
  }
}

var playerX;
var playerO;

function playerNames() {
  playerX = prompt("Player X: ", "player X name here");
  playerO = prompt("Player O: ", "player O name here");
  document.write("<h2 class='name'>Player X: " + playerX  + "</h2>");
  document.write("<h2 class='name'>Player O: " + playerO  + "</h2>");
}

playerNames()

function display(id) {
  if(document.getElementById(id).innerHTML !== '') {
    alert ('Please select a different space!')
  } else {
    document.getElementById(id).innerHTML = piece;
    togglePiece();

  }
  var arr = [];
  var element = document.getElementsByClassName("game");
  for(var j = 0; j < element.length; j++) {
    arr.push(element[j].innerHTML)
  }
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i + 3] && arr[i] === arr[i + 6] && arr[i] !== "") {
      whoWins(arr[i])
      return;
    }
    if( arr[0] === arr[1] && arr[0] === arr[2] && arr[1] !== "") {
      whoWins(arr[0])
      return;
    }
    if( arr[3] === arr[4] && arr[3] === arr[5] && arr[4] !== "") {
      console.log('should work')
      whoWins(arr[3])
      return
    }
    if( arr[6] === arr[7] && arr[7] === arr[8] && arr[7] !== "") {
      whoWins(arr[6])
      return;
    }
    if(arr[0] === arr[4] && arr[0] === arr[8] && arr[4] !== "") {
      whoWins(arr[0])
      return
    }
    if(arr[2] === arr[4] && arr[4] === arr[6] && arr[4] !== "") {
      whoWins(arr[2])
      return
    }
    if(arr.indexOf('') === -1) {
      whoWins('tie');
      return;
    }
  }
}

function reset() {
  var element = document.getElementsByClassName("game");
  for(var i = 0; i < element.length; i++) {
    element[i].innerHTML = '';
  }
  piece = previousWinner || 'X';
}

function whoWins(win) {
  console.log(win)
  if (win !== 'X' && win !== 'O') {
    alert ("It's a tie!!")
  } else if (win === "X") {
    score.X ++
    previousWinner = win;
      alert (playerX + " is the winner!!")
  } else if (win === "O") {
    score.O ++
    previousWinner = win;
    alert (playerO + " is the winner!!")
}
}

function displayScore() {
  document.write("<h2>X Score: " + "</h2>")
}

