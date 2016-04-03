//Variables
var context;
var queue;
var WIDTH = 1680;
var HEIGHT = 1050;
var mouseXPosition;
var mouseYPosition;

//Initial Load
window.onload= function() {

//Canvas
   var canvas = document.getElementsByClassName('myCanvas');
   context = canvas.getContext('2d');
   context.canvas.width= WIDTH;
   context.canvas.height= HEIGHT;
   stage= new create.js.Stage("myCanvas")

   queue= new createjs.LoadQueue(false);
   queue.installPlugin(createjs.Sound);
   queue.on("complete", queueLoaded, this);
   createjs.Sound.alternateExtensions = ["ogg"];

//Load Assets
   queue.loadManifest ([
      {id: 'gameBall', src: 'assets/ball.png'},
      {id: 'goal', src: 'assets/goal.png'},
      {id:'backgroundImage', src:'assets/background'},
   ])

//Time
gameTimer = setInterval(updateTime, 1000);
}

function queueLoaded(event){
   //background
   var backgroundImage = new createjs.Bitmap(queue.getResult("backgroundImage"));
   stage.addChild(background);

   //Score
scoreText= new createjs.Text("Points: " + score.toString(), "36px Arial", "#FFF");
scoreText.x = 10;
scoreText.y = 10;
stage.addChild(scoreText);

//Timer
scoreText= new createjs.Text("Time: " + gameTime.toString(), "36px Arial", "#FFF");
scoreText.x = 800;
scoreText.y = 10;
stage.addChild(scoreText);
}
