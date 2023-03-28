var playerOne = {
  x : 10,
  y : 150,
  width: 20,
  height: 60,
  speed : 5,
  score : 0,
  moviment : function() {
    if(keyIsDown(87) && this.y > 0) {
      this.y -= this.speed;
    }
    if(keyIsDown(83) && this.y+this.height <= 400) {
      this.y += this.speed;
    }
  },
  _draw : function() {
    rect(playerOne.x,playerOne.y,playerOne.width,playerOne.height);
  }
}

var playerTwo = {
  x : 370,
  y : 150,
  width: 20,
  height: 60,
  speed : 5,
  score : 0,
  moviment : function() {
    if(keyIsDown(UP_ARROW) && this.y > 0) {
      this.y -= this.speed;
    }
    if(keyIsDown(DOWN_ARROW) && this.y+this.height <= 400) {
      this.y += this.speed;
    }
  },
  _draw : function() {
    rect(playerTwo.x,playerTwo.y,playerTwo.width,playerTwo.height);
  }
}

var _square = {
  x : 180,
  y : 140,
  width : 10,
  height : 10,
  speed : 1,
  xSpeed : 0,
  ySpeed : 0,
  moviment : function() {
    if(this.xSpeed > 0) {
      this.x += this.speed;
    }else if(this.xSpeed < 0) {
      this.x -= this.speed;
    }
    if(this.ySpeed > 0) {
      this.y += this.speed;
    }else if(this.ySpeed < 0) {
      this.y -= this.speed;
    }
  },
  _draw : function() {
    rect(_square.x,_square.y,_square.width,_square.height);
  }
}

function checkCollision(obj1,obj2) {
  let xCollision = obj1.x+obj1.width >= obj2.x && obj1.x <= obj2.x+obj2.width;
  let yCollision = obj1.y+obj1.height >= obj2.y && obj1.y <= obj2.y+obj2.height;
  if(xCollision && yCollision) {
    return true;
  }else {
    return false;
  }
}

function collisions() {
  //collision on playerOne and square
  if(checkCollision(playerOne,_square)) {
    _square.speed += 0.2;
    _square.xSpeed = 1;
    if(_square.ySpeed > 0)
    {
      _square.ySpeed = 1;
    }else {
      _square.ySpeed = -1;
    }
  }
  //collision on playerTwo and square
  if(checkCollision(playerTwo,_square)) {
    _square.speed += 0.2;
    _square.xSpeed = -1;
    if(_square.ySpeed > 0)
    {
      _square.ySpeed = 1;
    }else {
      _square.ySpeed = -1;
    }
  }
  //square map collision
  if(_square.y + _square.width > 400) {
    _square.ySpeed = -1;
  }
  if(_square.y  < 0) {
    _square.ySpeed = 1;
  }
  //square gol
  if(_square.x + _square.width < 0) {
    resetGameOnGol(2);
  }
  if(_square.x > 400) {
    resetGameOnGol(1);
  }
}

function ui() {
  let size = 32;
  textSize(size);
  var textScore = playerOne.score+" | "+playerTwo.score;
  text(textScore, 180, 40);
}

function startGame() {
  _square.xSpeed = 1;
  _square.ySpeed = 1;
}

function resetGameOnGol(playerGol) {
  _square.x = 180;
  _square.y = 140;
  _square.speed = 1;
  if(playerGol == 2) {
    playerTwo.score+=1;
    if(_square.xSpeed == 1)
    {
      _square.xSpeed = -1;
    }else {
      _square.xSpeed = 1;
    }
  } else {
    playerOne.score+=1;
    if(_square.xSpeed == 1)
    {
      _square.xSpeed = -1;
    }else {
      _square.xSpeed = 1;
    }
  }

}

function game() {
  playerOne._draw();
  playerOne.moviment();

  playerTwo._draw();
  playerTwo.moviment();

  _square._draw();
  _square.moviment();

  collisions();
  ui();
}

function setup() {
  createCanvas(400, 400);
  startGame();
}

function draw() {
  background(220);
  game();
}