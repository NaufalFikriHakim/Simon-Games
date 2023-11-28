let gamePattern = []
let buttonColours = ["red", "blue", "green", "yellow"]

function randomizeColour() {
    let randomNumber =  Math.floor(Math.random() * 4);
    return buttonColours[randomNumber]
}

let level = 1;
let time = 300;
function startGame() {
    $("#level-title").text("level " + level);
    gamePattern.push(randomizeColour())
    gamePattern.forEach(element => {
        setTimeout(() => {
            let sound = new Audio("./sounds/"+ element +".mp3");
            sound.play();
            $("."+element).fadeIn(100).fadeOut(100).fadeIn(100)
        }, time+=300);
        
    });
}

let sequence = 0;
function nextSequence(color) {
    if (gamePattern[sequence] == color) {
        sequence++;
        if(sequence === gamePattern.length){
            levelIncrease();
            sequence = 0;
        }
    } else {
        gameOver();
    }
}

function levelIncrease() {
    level++;
    time = 300;
    startGame();
}

function clicked(button) {
    let sound = new Audio("./sounds/"+$(button).attr("id")+".mp3");
    sound.play();
    $(button).addClass("pressed");
    setTimeout(() => {
        $(button).removeClass("pressed");
    }, 100);
    nextSequence($(button).attr("id"));
}

function gameOver() {
    
}

function playAudio() {
    
}

let gameStarted = false;
$(document).on("keydown", function () {
    if (gameStarted === false){
        gameStarted = true;
        startGame();
    }

});

$(".btn").click(function () {
    clicked(this);
});

