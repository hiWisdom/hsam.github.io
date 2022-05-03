
//alert notification
alert('Play Car Game with HighSkool Automobile');



//create variables for game
var score = document.querySelector('.score');
var highScore = document.querySelector('.highScore');
var startScreen = document.querySelector('.startScreen');
var gameArea = document.querySelector('.gameArea');


startScreen.addEventListener('click', start);

document.addEventListener('keyup', keyup);

document.addEventListener('keydown', keydown);


let keys = {
    ArrowUp: false, 
    ArrowDown: false, 
    ArrowLeft: false, 
    ArrowRight: false
};

let player = {
    speed: 5, 
    
};



function keydown(e) {
    keys[e.key] = true;
}

function keyup(e) {
    keys[e.key] = false;
}

function start() {
 
    gameArea.innerHTML= "";

    startScreen.classList.add('hide');

    player.isStart = true;

    window.requestAnimationFrame(Play);



//create game elements variables

// var roadLines;

// var opponentsCars;

// var PlayerCar;



//create roadLines
for (i = 0; i < 5; i++) {
    
    let roadLines = document.createElement('div');
    roadLines.setAttribute('class', 'roadLines');
    roadLines.y = (i * 140);
    roadLines.style.top = roadLines.y + "px";
    gameArea.appendChild(roadLines);

}


//create opponents cars
for (i = 0; i < 3; i++) {
    
    let Opponents = document.createElement('div');
    Opponents.setAttribute('class', 'Opponents');
    Opponents.y = ((i) * -300);
    Opponents.style.top = roadLines.y + "px";
    gameArea.appendChild(Opponents);
    Opponents.style.left = Math.floor(Math.random() * 350) + "px";
    Opponents.style.backgroundColor = randomColor();

}


let car = document.createElement('div');
car.setAttribute('class', 'car');
gameArea.appendChild(car);
player.x = car.offsetLeft;
player.y = car.offsetTop;

}