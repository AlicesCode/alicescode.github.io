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
        clicked.clear = setInterval(() => {
            ctx.fillStyle = "#000000"; 
            ctx.fillRect(width/2 - (4*scale), height/2, scale*(1.75), scale*2); 
        }, 2000); 
    }, 1000); 
    clicked.add = setInterval(() => {
            ctx.fillStyle = "#32CD32"; 
            ctx.font = "30px Arial";
            ctx.fillText(">          ", width/2, height/2 + (2*scale)); 
    }, 2000); 
}

// 15 rows, 17 cols
// width = 190, height = 180
const canvas = document.getElementById("snakeCanvas");
const ctx = canvas.getContext("2d"); 

let rows = 15; 
let cols = 17; 
let scale = 15; 

let width = (cols+2) * scale; 
let height = (rows+4) * scale; 

// size of canvas
canvas.width = width; 
canvas.height = height; 

// make the whole canvas black
ctx.fillStyle = "rgb(0, 0, 0)"; 
ctx.fillRect(0, 0, width, height); 

// start screen
let clicked = {clear: null, add: null}; 
start(clicked); 


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