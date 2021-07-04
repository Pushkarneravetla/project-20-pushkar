var bullet, wall, lane1, lane2, lane3;
var bullet1, bullet2, bullet3;
var wall1, wall2, wall3;
var speed, weight;

function setup() {
  createCanvas(1500,1500);

  speed=random(10,30);
  weight=random(400,1500);

  bullet=createSprite(50, 50, 50, 15);
  bullet.velocityX=speed;
  bullet.shapeColor="red";

   bullet1=createSprite(150, 200, 50, 15);
  bullet1.velocityX=speed;
  bullet1.shapeColor="red";

  bullet2=createSprite(200, 350, 50, 15);
  bullet2.velocityX=speed;
  bullet2.shapeColor="red";

  bullet3=createSprite(250, 500, 50, 15);
  bullet3.velocityX=speed;
  bullet3.shapeColor="red";
  
wall=createSprite(1300, 50, 20, 50);
wall.shapeColor="blue";

wall1=createSprite(1300, 200, 20, 50);
wall1.shapeColor="blue";

wall2=createSprite(1300, 350, 20, 50);
wall2.shapeColor="blue";

wall3=createSprite(1300, 500, 20, 50);
wall3.shapeColor="blue";

lane1 = createSprite(700, 100, 1500, 15);
lane1.shapeColor = "orange";

lane2 = createSprite(700, 250, 1500, 15);
lane2.shapeColor = "orange";

lane3 = createSprite(700, 400, 1500, 15);
lane3.shapeColor = "orange";


}

function draw() {
  background("yellow");  
  if(wall.x-bullet.x< (bullet.width+wall.width)/2)
  {
  bullet.velocityX=0;
  var deformation=0.5*weight*speed*speed/22500;

  if(deformation>180)
  {
  bullet.shapeColor="pink";

  }
  if(deformation<180 && deformation>100)
  {
    bullet.shapeColor="green";
  }
  if(deformation<100)
  {
  bullet.shapeColor="purple";

  }

  }


  if(wall1.x-bullet1.x< (bullet1.width+wall1.width)/2)
  {
  bullet1.velocityX=0;
  var deformation=0.5*weight*speed*speed/22500;

  if(deformation>180)
  {
  bullet1.shapeColor="pink";

  }
  if(deformation<180 && deformation>100)
  {
    bullet1.shapeColor="green";
  }
  if(deformation<100)
  {
  bullet1.shapeColor="purple";

  }

  }


  if(wall2.x-bullet2.x< (bullet2.width+wall2.width)/2)
  {
  bullet2.velocityX=0;
  var deformation=0.5*weight*speed*speed/22500;

  if(deformation>180)
  {
  bullet2.shapeColor="pink";

  }
  if(deformation<180 && deformation>100)
  {
    bullet2.shapeColor="green";
  }
  if(deformation<100)
  {
  bullet2.shapeColor="purple";

  }

  }


  if(wall3.x-bullet3.x< (bullet3.width+wall3.width)/2)
  {
  bullet3.velocityX=0;
  var deformation=0.5*weight*speed*speed/22500;

  if(deformation>180)
  {
  bullet3.shapeColor="pink";

  }
  if(deformation<180 && deformation>100)
  {
    bullet3.shapeColor="green";
  }
  if(deformation<100)
  {
  bullet3.shapeColor="purple";

  }

  }

  drawSprites();
}
