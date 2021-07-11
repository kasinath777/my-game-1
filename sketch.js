var tom, jerry;

function setup(){
createCanvas(windowWidth, windowHeight)

tom = createSprite(300, 300, 20, 20);
jerry = createSprite(200, 400, 20, 20);

console.log(windowWidth);
console.log(windowHeight);
}

function draw(){
background(255,30,70);
obstacles();
drawSprites();
}

function obstacles(){
if(frameCount % 200 === 0){
var obstacle = createSprite(random(0, 600), 400, 50, 100)
obstacle.velocityX = -7;
obstacle.lifetime = 300;
}
}