var box1 = document.getElementById("1");
var box2 = document.getElementById("2");
var box3 = document.getElementById("3");
var box4 = document.getElementById("4");
var box5 = document.getElementById("5");
var box6 = document.getElementById("6");
var box7 = document.getElementById("7");
var box8 = document.getElementById("8");
var box9 = document.getElementById("9");

var count = 1;  
var gameOver = false; 

function charactershow() {
  var characterO = "O";
  var characterX = "X";

  if (count % 2 === 0) {
    return characterO;
  } else {
    return characterX;
  }
}

function reset() {
  box1.innerHTML = "";
  box2.innerHTML = "";
  box3.innerHTML = "";
  box4.innerHTML = "";
  box5.innerHTML = "";
  box6.innerHTML = "";
  box7.innerHTML = "";
  box8.innerHTML = "";
  box9.innerHTML = "";
  count = 1;
  gameOver = false;
  document.getElementById("winnerMessage").innerHTML = "";
}

function updateTurnBoxColor() {
  var turnBox = document.querySelectorAll('.turn-box');
  
  turnBox[0].style.backgroundColor = '';  
  turnBox[1].style.backgroundColor = '';  
  
  if (count % 2 === 0) {
    turnBox[1].style.backgroundColor = '#8B4513';  
  } else {
    turnBox[0].style.backgroundColor = '#8B4513';  
  }
}

function game(number) {
  if (gameOver) return; 

  var gameShow = charactershow();

  updateTurnBoxColor();

  if (number === 1 && box1.innerHTML === "") {
    box1.innerText = gameShow;
    count++;
  } else if (number === 2 && box2.innerHTML === "") {
    box2.innerText = gameShow;
    count++;
  } else if (number === 3 && box3.innerHTML === "") {
    box3.innerText = gameShow;
    count++;
  } else if (number === 4 && box4.innerHTML === "") {
    box4.innerText = gameShow;
    count++;
  } else if (number === 5 && box5.innerHTML === "") {
    box5.innerText = gameShow;
    count++;
  } else if (number === 6 && box6.innerHTML === "") {
    box6.innerText = gameShow;
    count++;
  } else if (number === 7 && box7.innerHTML === "") {
    box7.innerText = gameShow;
    count++;
  } else if (number === 8 && box8.innerHTML === "") {
    box8.innerText = gameShow;
    count++;
  } else if (number === 9 && box9.innerHTML === "") {
    box9.innerText = gameShow;
    count++;
  }

  win();
}

function win() {
  var countainers1 = box1.innerHTML;
  var countainers2 = box2.innerHTML;
  var countainers3 = box3.innerHTML;
  var countainers4 = box4.innerHTML;
  var countainers5 = box5.innerHTML;
  var countainers6 = box6.innerHTML;
  var countainers7 = box7.innerHTML;
  var countainers8 = box8.innerHTML;
  var countainers9 = box9.innerHTML;

  
  if (countainers1 === "O" && countainers2 === "O" && countainers3 === "O" || 
      countainers4 === "O" && countainers5 === "O" && countainers6 === "O" || 
      countainers7 === "O" && countainers8 === "O" && countainers9 === "O" || 
      countainers1 === "O" && countainers4 === "O" && countainers7 === "O" || 
      countainers2 === "O" && countainers5 === "O" && countainers8 === "O" || 
      countainers3 === "O" && countainers6 === "O" && countainers9 === "O" || 
      countainers1 === "O" && countainers5 === "O" && countainers9 === "O" || 
      countainers3 === "O" && countainers5 === "O" && countainers7 === "O") {
    document.getElementById("winnerMessage").innerHTML = "Congratulation O is Won";
    gameOver = true; 
  }
  

  else if (countainers1 === "X" && countainers2 === "X" && countainers3 === "X" || 
           countainers4 === "X" && countainers5 === "X" && countainers6 === "X" || 
           countainers7 === "X" && countainers8 === "X" && countainers9 === "X" || 
           countainers1 === "X" && countainers4 === "X" && countainers7 === "X" || 
           countainers2 === "X" && countainers5 === "X" && countainers8 === "X" || 
           countainers3 === "X" && countainers6 === "X" && countainers9 === "X" || 
           countainers1 === "X" && countainers5 === "X" && countainers9 === "X" || 
           countainers3 === "X" && countainers5 === "X" && countainers7 === "X") {
    document.getElementById("winnerMessage").innerHTML = "Congratulation X is Won";
    gameOver = true; 
  }
}




