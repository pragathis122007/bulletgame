var thickness, wall;
var bullet,bulletSpeed, bulletWeight;


function setup() {
    createCanvas(1600,400);

    bulletSpeed = random(223,321);
    bulletWeight = random(30,52);
    thickness = random(22,83);

    bullet = createSprite(5,200,101,10);
    bullet.shapeColor = "white";
    bullet.velocityX = bulletSpeed;
    wall = createSprite(1300,200,thickness,height/2);
    wall.shapeColor = "black";
}

function draw() {
    background(0);  
    if (wall.x-bullet.x<bullet.width+wall.width/2){
       bullet.velocityX=0;
       var deformation = 0.5*bulletWeight * bulletSpeed * bulletSpeed/22509;
       if(deformation>180)
    {
        bullet.shapeColor = color(255,0,0);
    }
    if (deformation<180 && deformation>100)
    {
        bullet.shapeColor=color(230,230,0);
    }
    if(deformation<100){
        bullet.shapeColor=color(0,255,0);

        
    }
    }
    else {
     bullet.shapeColor = "green";
     wall.shapeColor = "blue";
    }

    if (hasCollided(bullet,wall)){
        bullet.velocityX=0;
        var damage = 0.5 * bulletWeight * bulletSpeed * bulletSpeed/(thickness * thickness * thickness);

        if(damage>10){
            wall.shapeColor=color(255,0,0);
        }
        if(damage<10){
            wall.shapeColor=color(0,255,0);
        }
    }

    drawSprites();
}

