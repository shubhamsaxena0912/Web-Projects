var squares = document.querySelectorAll(".square");
var h1 = document.getElementsByTagName("h1")[0];
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var startGame = document.getElementById("startGame");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");

var levelOfGame = 6;
var colors = generateRandomColor(6);
var pickedColor = pickColor(levelOfGame);

colorDisplay.textContent = pickedColor;

/*Event Listener for EASY button*/
easy.addEventListener("click",function () {
    if(levelOfGame === 6){
        levelOfGame = 3;
        startNewGame();
        easy.classList.add("selected");
        hard.classList.remove("selected");
    }
});

/*Event Listener for HARD button*/
hard.addEventListener("click",function () {
    if(levelOfGame === 3){
        levelOfGame = 6;
        startNewGame();
        hard.classList.add("selected");
        easy.classList.remove("selected")
    }
})

for(var i = 0 ; i < levelOfGame ; i++){

    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click",function () {
       var color = this.style.backgroundColor;
       if (color === pickedColor){
           colorSquare(color);
           h1.style.backgroundColor = color;
           message.textContent = "Correct";
           startGame.textContent = "Play Again?";
       }
       else {
           this.style.backgroundColor = "#232323";
           message.textContent = "Try Again";
       }
    });
}

/*Event Listener for PLAY AGAIN button*/
startGame.addEventListener("click", function () {
    startNewGame();
});

/*Starts new game*/
function startNewGame(){
    colors = generateRandomColor(6);
    pickedColor = pickColor(levelOfGame);
    startGame.textContent = "New Colors";

    colorDisplay.textContent = pickedColor;

    for (var i = 0 ; i < squares.length ; i++){
        squares[i].style.backgroundColor = colors[i];
    }

    h1.style.backgroundColor = "steelblue";
    message.textContent = "";
}

/*Returns random color which have to find*/
function pickColor(maxNum) {
    return colors[Math.floor(Math.random() * maxNum + 1) % maxNum];
}

/*Colors all square*/
function colorSquare(color) {
    for(var j = 0 ; j < levelOfGame ; j++){
        squares[j].style.backgroundColor = color;
    }
}

/*Generate and returns array of random colors*/
function generateRandomColor(number) {

    var colorArray = [];

    for (var i = 0 ; i < number ; i++){
        var red = Math.floor(Math.random() * 256 + 1) % 256 ;
        var green = Math.floor(Math.random() * 256 + 1) % 256 ;
        var blue = Math.floor(Math.random() * 256 + 1) % 256 ;

        if (i >= levelOfGame){
            colorArray.push("#232323");
        }
        else {
            colorArray.push("rgb(" + red + ", "+green+", "+blue+")");
        }
    }
    return colorArray;
}
