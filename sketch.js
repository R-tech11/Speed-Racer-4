var canvas;
var backgroundImage, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];
var fuels, powerCoins, obstactles;
var fuelImg, powerCoinImg, obstacle1Image, obstacle2Image;
var lifeImage, blastImg

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/track.jpg");
  fuelImg = loadImage("assets/fuel.png");
  powerCoinImg = loadImage("assets/goldCoin.png");
  obstacle1Image = loadImage("assets/obstacle1.png");
  obstacle2Image = loadImage("assets/obstacle2.png");
  lifeImage = loadImage("assets/life.png");
  blastImg= loadImage("assets/blast.png")

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() 
{
  background(backgroundImage);
  if (playerCount === 2) 
  {
    game.update(1);
  }

  if (gameState === 1) 
  {
    game.play();
  }

  if(gameState === 2)
  {
    game.showLeaderboard();
    game.gameOver();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
