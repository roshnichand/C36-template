var database;
var form,player,game;

var gameState = 0;
var playerCount;

function setup(){
    database = firebase.database();
    console.log(database);

    createCanvas(500,500);
    
   }

function draw(){
    background("white");
   
    drawSprites();
}

