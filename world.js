class World
{
  constructor()
  {
    this.borderR = 500;
    this.count = 300; //seconds
    this.timer = -1;
  }
  
  display()
  {
    push();
    
    translate(player.pos.x, player.pos.y); 
    circle(200, 200, 20);
    
    noFill();
    rectMode(CENTER);
    circle(0, 0, this.borderR);
    
    pop();
  }

  clocking()
  {  
    this.timer = setInterval(function() {
      console.log("Count: " + this.count);
      this.count--;
      if (this.count == 0) {
        clearInterval(intervalId); // Stops the interval when it reaches 0
        console.log("Timer stopped.");
      }
    }, 1000);
    
  }

  ui()
  {
    push();
    const col_box = color("rgba(101, 101, 101, 0.26)");
    const col_exp = color("rgba(94, 137, 161, 1)");
    const col_expBar = color("rgba(33, 52, 113, 0.5)");
    const col_text = color("255, 255, 255");
    fill(col_box);
    
    let boxLevelW = width/8 * 5;
    let boxLevelH = height / 20;
    rect(0, 0, boxLevelW, boxLevelH); //level box && hp box
      fill(col_text);
      textSize(15);
      text("Level " + player.lvl, width * 1 / 20, boxLevelH/4 * 3);
      text("HP: " + player.hp + " / " + player.hpMax, boxLevelW * 4 / 8, boxLevelH/4 * 3);

    fill(col_expBar);
    rect(0, boxLevelH, boxLevelW, boxLevelH); //EXP BAR

    const lineAmt = 10;
    for (let i = 0; i < lineAmt; i++)
    {
      stroke(0)
      line(boxLevelW / lineAmt * i, boxLevelH, boxLevelW / lineAmt * i, boxLevelH * 2);
    }
    
    fill(col_exp);
    rect(0, boxLevelH, boxLevelW * (player.exp / player.expMax), boxLevelH); //EXP BAR

    fill(col_box);
    circle(width - 75, 55, 100); //Minimap

    for (let i = 0; i < 3; i++)
    { //Weapon Slots
      let boxS = width / 10
      let boxGap = width / 40;
      rect(0 + (boxS + boxGap) * i, width - boxS, boxS);
    }

    fill(col_text)
    textSize(20);
    textAlign(CENTER)
    text(this.count, width/2, boxLevelW * 4)

    print(this.count);
    pop();
  }
}