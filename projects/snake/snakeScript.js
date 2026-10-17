// start screen
async function start(clicked) {
    ctx.textAlign = "center"; 
    ctx.fillStyle = "#008000"; 
    ctx.font = "50px Arial";
    ctx.fillText("Snake", width/2, height/2 - (2*scale));
    ctx.fillStyle = "#32CD32"; 
    ctx.font = "30px Arial";
    ctx.fillText("Start", width/2, height/2 + (2*scale)); 
    ctx.fillText(">          ", width/2, height/2 + (2*scale)); 

    // animation
    setTimeout(() => {
        ctx.fillStyle = "#000000"; 
        ctx.fillRect(width/2 - (4*scale), height/2, scale*(1.75), scale*2); 
        clicked.startClear = setInterval(() => {
            ctx.fillStyle = "#000000"; 
            ctx.fillRect(width/2 - (4*scale), height/2, scale*(1.75), scale*2); 
        }, 2000); 
    }, 1000); 
    clicked.startAdd = setInterval(() => {
        ctx.fillStyle = "#32CD32"; 
        ctx.font = "30px Arial";
        ctx.fillText(">          ", width/2, height/2 + (2*scale)); 
    }, 2000); 
}

// game screen
async function startGame(clicked) {
    ctx.fillStyle = "#000000"; 
    ctx.fillRect(0, 0, width, height); 
    clicked.game = setInterval(() => {
        ctx.fillStyle = "#000000"; 
        ctx.fillRect(0, 0, width, height); 
        ctx.fillStyle = "#ffffff"; 
        ctx.font = "30px Arial"; 
        if (dir == 0) {
            ctx.fillText("right", width/2, height/2); 
        } else if (dir == 1) {
            ctx.fillText("down", width/2, height/2); 
        } else if (dir == 2) {
            ctx.fillText("left", width/2, height/2); 
        } else {
            ctx.fillText("up", width/2, height/2); 
        }
    }, 500); 
}

// lose/win screen
async function gameEnd(won) {
    endScreen = true; 
    if (won) {
        // win screen
    } else {
        // lose screen
    } 
}

// stuff to change based on keypress
function keyPress(e) {
    if (startScreen) {
        clearInterval(clicked.startAdd); 
        clearInterval(clicked.startClear); 
        startGame(clicked); 
        startScreen = false; 
    } else if (endScreen) {
        // stuff
    } else {
        if (e.code == "ArrowRight" || e.code == "KeyD") {
            dir = Dirs.RIGHT; 
        } else if (e.code == "ArrowDown" || e.code == "KeyS") {
            dir = Dirs.DOWN; 
        } else if (e.code == "ArrowLeft" || e.code == "KeyA") {
            dir = Dirs.LEFT; 
        } else if (e.code == "ArrowUp"  || e.code == "KeyW") {
            dir = Dirs.UP; 
        }
    }
}

// 15 rows, 17 cols
// width = 190, height = 180
const canvas = document.getElementById("snakeCanvas");
const ctx = canvas.getContext("2d"); 
canvas.tabIndex = 0; // make it focusable so that event listners work

let rows = 15; 
let cols = 17; 
let scale = 15; 

let width = (cols+2) * scale; 
let height = (rows+4) * scale; 

// size of canvas
canvas.width = width; 
canvas.height = height; 

// make the whole canvas black
ctx.fillStyle = "#000000"; 
ctx.fillRect(0, 0, width, height); 

// set up variables
let startScreen = true; 
let endScreen = false; 

// start screen
let clicked = {startClear: null, startAdd: null}; 
start(clicked); 

// event listeners
canvas.addEventListener("keydown", keyPress); 
canvas.focus(); 


const Dirs = Object.freeze({
    RIGHT:  0, 
    DOWN:   1, 
    LEFT:   2, 
    UP:     3, 
}); 
let dir = Dirs.RIGHT; 


/*
// top bar of the canavs
ctx.fillStyle = "rgb(0, 100, 0)"; 
ctx.fillRect(0, 0, width, scale*2); 

// walls of the game
ctx.fillStyle = "rgb(0, 155, 0)"; 
ctx.fillRect(0, scale*2, width, height); 

// board of the game
ctx.fillStyle = "rgb(185, 255, 94)"; 
ctx.fillRect(scale, scale*3, width-(scale*2), height-(scale*4)); 
ctx.fillStyle = "rgb(210, 255, 140)"; 
ctx.fillRect(scale, scale*3, scale, scale); */