// document.write('<p> hello world </p>')

var piece = 'X';

function togglePiece() {
  if(piece === 'X') {
    piece = 'O';
  } else {
    piece = 'X';
  }
}

function display(id) {
  if(document.getElementById(id).innerHTML !== 'Click me') {
    alert ('Please select a different space!')
  } else {
    document.getElementById(id).innerHTML = piece;
    togglePiece();

  }
  var element = document.getElementsByClassName("game");
  for(var i = 0; i < element.length; i++) {
    if (element[i].innerHTML === "Click me") {
      return;
    } else {
      continue;
    }
  }
  determineWinner();
}

function reset() {
  var element = document.getElementsByClassName("game");
  for(var i = 0; i < element.length; i++) {
    element[i].innerHTML = 'Click me';
  }
  piece = 'X';
}

function whoWins(win) {
  console.log(win)
  if (win !== 'X' && win !== 'O') {
    alert ("It's a tie!!")
  } else {
    alert (win + " is the winner!!")
  }
}

function determineWinner() {
  var arr = [];
  var winner = {};
  var element = document.getElementsByClassName("game");
  for(var i = 0; i < element.length; i++) {
    arr.push(element[i].innerHTML)
  }
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i + 3] && arr[i] === arr[i + 6]) {
      winner[arr[i]] = 'yes';
    }
    if( arr[0] === arr[1] && arr[0] === arr[2]) {
      winner[arr[0]] = 'yes';
    }
    if( arr[3] === arr[4] && arr[3] === arr[5]) {
      console.log('should work')
      winner[arr[3]] = 'yes';
    }
    if( arr[6] === arr[7] && arr[7] === arr[8]) {
      winner[arr[6]] = 'yes';
    }
    if(arr[0] === arr[4] && arr[0] === arr[8]) {
      winner[arr[0]] = 'yes';
    }
    if(arr[2] === arr[4] && arr[4] === arr[6]) {
      winner[arr[4]] = 'yes';
    }
  }
  if(Object.keys(winner).length !== 1) {
    whoWins('tie');
  } else {
    console.log(Object.keys(winner)[0])
    whoWins(Object.keys(winner)[0]);
  }
}


