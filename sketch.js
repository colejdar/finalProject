let player
let world;

let controls;

function setup() {
  createCanvas(400, 400);
  
  controls = 
  {
    shoot: [LEFT, LEFT],
    dodge: [" ", " "],
    parry: ["shift", "shift"],
    hookshot: ["q", "q"],
    sweep: ["x", "x"],
    interact: ["e", "e"]

  }
  player = new Player();
  world = new World();
  world.clocking();
  
}

function draw() {
  background(220);
  
  world.display();
  world.ui();
  
  doPlayer();
  
  if(mouseIsPressed)
  {
    playerControls(mouseButton);
  }
  player.exp++;
  if (player.exp >= player.expMax)
  {
    player.levelUp();
  }
}


function keyPressed()
{
  playerControls(key.toLowerCase());
  
  if (key == "c")
  {
    
  }
  return;
}

