var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE

  function createEnemy(x, y) {
    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.rect(50, 50, "red");
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = x;
    enemy.y = groundY - y;
    game.addGameItem(enemy);
    enemy.velocityX = -5
    enemy.rotationalVelocity = 10 
    enemy.onPlayerCollision = function () {game.changeIntegrity(-10);enemy.fadeOut();};
    enemy.onProjectileCollision = function () {game.increaseScore(100);
      enemy.fadeOut();};
    // all code from TODO 11 and 12
  }
  createEnemy(400, groundY - 320);
  createEnemy(800, groundY - 350);
  createEnemy(1200, groundY - 330);
function createSawBlade(x,y){
  var hitZoneSize = 25;
  var damageFromObstacle = 60;
  var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
  sawBladeHitZone.x = x;
  sawBladeHitZone.y = y;
  game.addGameItem(sawBladeHitZone);
  var obstacleImage = draw.bitmap("img/sawblade.png");
  sawBladeHitZone.addChild(obstacleImage);
  obstacleImage.x = -25
  obstacleImage.y = -25
}
createSawBlade(400, groundY - 20)
function createReward(x, y) {
  var reward = game.createGameItem("reward", 25);
  var greenSquare = draw.rect(50, 50, "green");
  greenSquare.x = -25;
  greenSquare.y = -25;
  reward.addChild(greenSquare);
  reward.x = x;
  reward.y = groundY - y;
  game.addGameItem(reward);
  reward.velocityX = -5
  reward.rotationalVelocity = 10 
  reward.onPlayerCollision = function () {game.increaseScore(100); reward.fadeOut();};
  reward.onProjectileCollision = function () {game.increaseScore(0);
    reward.fadeOut();};
  // all code from TODO 11 and 12
}
function createMarker(x, y) {
  var reward = game.createGameItem("marker", 25);
  var greenSquare = draw.rect(50, 50, "yellow");
  greenSquare.x = -25;
  greenSquare.y = -25;
  reward.addChild(greenSquare);
  reward.x = x;
  reward.y = groundY - y;
  game.addGameItem(reward);
  reward.velocityX = -5
  reward.rotationalVelocity = 10 
  reward.onPlayerCollision = function () {startLevel(); reward.fadeOut();};
  reward.onProjectileCollision = function () {startLevel(); reward.fadeOut();};
  // all code from TODO 11 and 12
}
createReward(900, groundY - 320);
  createReward(1000, groundY - 350);
  createReward(1700, groundY - 330);
  createMarker(2000, groundY - 330);
  var level = levelData[0].gameItems[1]
  var levelObjects = gameItems[0]
    function startLevel() {
      // TODO 13 goes below here
      for (var i = 0; i < gameItems.length; i++) {
        var Item = gameItems[i];
        var Itemx = Item.x
        var Itemy = Item.y
      createSawBlade(Itemx,Itemy)
      createEnemy(Itemx,Itemy)
        // code to do something with each element
      } 


      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
