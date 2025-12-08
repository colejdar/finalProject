class Player
{
  constructor()
  {
    this.hpMax = 100;    //int
    this.hp = this.hpMax;//int
    this.lvl = 1;        //int
    this.exp = 30;         //int
    this.expMax = 100;      //int
    this.dmg =  10;      //int
    this.armor = 0;       //int
    this.speed = 5;       //int
    
    this.v = createVector(0, 0);
    this.pos = createVector(200, 200);   //vector

    this.crit = 5;       //percent
    this.cd = 100;       //percent
    this.projSpd = 100;  //percent
    this.projAmt = 100;  //percent
    this.projSize = 100; //percent

    this.lifesteal = 100; //percent
    this.xpBonus = 100;   //percent
    this.hpRegen = 0.5;   //float
  }
  
  move(vel)
  {
    if (this.v.x + vel.x > -this.speed && this.v.x + vel.x < this.speed)
    {
      this.v.x += vel.x;
    }
    if (this.v.y + vel.y > -this.speed && this.v.y + vel.y < this.speed)
    {
      this.v.y += vel.y;
    }
    
    this.pos.add(this.v);
    
    //Used to decrease the world border
    let friction = createVector(Math.sign(this.v.x) * (this.speed / 20), 
                                Math.sign(this.v.y) * (this.speed / 20));
    this.v.sub(friction);
    
    //Prevents the user from continuously sliding
    this.v = createVector(round(this.v.x, 2), round(this.v.y, 2));
    
    //calculates angle used to place the player on the border
    let a = Math.atan2(this.pos.y - width/2, this.pos.x - height/2);
    
    if (dist(width/2, height/2, this.pos.x, this.pos.y) > world.borderR / 2)
    {
      this.pos.x = width/2 + world.borderR * cos(a) / 2;
      this.pos.y = height/2 + world.borderR * sin(a) / 2;
    }
    
  }
  
  shoot()
  {
    print('shoot');
    
  }
  
  dodge()
  {
    print('dodge');
    let dodgeVel = createVector(10 * Math.sign(this.v.x), 10 * Math.sign(this.v.y));
    this.v.add(dodgeVel);
  }
  
  parry()
  {
    print('parry');
    
    
  }
  
  hookshot()
  {
    print('hook');
    
  }
  
  sweep()
  {
    print('sweep');
    
  }
  
  interact()
  {
    print('interact');
    
  }

  levelUp()
  {
    print('hi');
    this.exp -= this.expMax;
    this.expMax += 10 * this.lvl;
    this.lvl++;
  }
}

function doPlayer()
{
  displayPlayer();
  playerMove();
}

function displayPlayer()
{
  fill("red");
  circle(width/2, height/2, 15);
  
  
}

function playerMove()
{
  let vel = createVector(0, 0)
  let acc = player.speed / 4;
  let inc = 0
  if (keyIsDown(87)) { vel.add(0, acc); }
  if (keyIsDown(83)) { vel.add(0, -acc); }
  if (keyIsDown(65)) { vel.add(acc, 0); }
  if (keyIsDown(68)) { vel.add(-acc, 0); }
  
  player.move(vel);
}

function playerControls(input)
{
  switch (input)
  {
    case (controls.shoot[0]):
    case (controls.shoot[1]):
      player.shoot();
      break;
    case (controls.dodge[0]):
    case (controls.dodge[1]):
      player.dodge();
      break;
    case (controls.parry[0]):
    case (controls.parry[1]):
      player.parry();
      break;
    case (controls.hookshot[0]):
    case (controls.hookshot[1]):
      player.hookshot();
      break;
    case (controls.sweep[0]):
    case (controls.sweep[1]):
      player.sweep();
      break;
    case (controls.interact[0]):
    case (controls.interact[1]):
      player.interact();
      break;
  }
}