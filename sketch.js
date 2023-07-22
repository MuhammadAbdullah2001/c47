var backgroundImg,bikeImg,coinImg,obstacleImg;
var bike;
var track;

function preload() {
 backgroundImg = loadImage("background.jpeg");
 bikeImg = loadImage("bike.jpg");
 coinImg = loadImage("Coin.png");
 obstacleImg  = loadImage("Obstacle.png");
}
function setup(){
createCanvas(1000,500);


track = createSprite(500,250)
track.addImage("background",backgroundImg);
track.velocityX = +1;

bike = createSprite(950,300,50,50);
bike.addImage(bikeImg);
bike.scale = 0.5;

}
function draw(){
    background(0);
    drawSprites();
    
    if(track.x>400){
        track.x = 300;
        }
}