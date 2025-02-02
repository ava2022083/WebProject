////P5.PLAY LIBRARY MUST BE ENABLED FOR THIS PROGRAM TO RUN
////P5.SOUND LIBRARY MUST BE ENABLED FOR THIS PROGRAM TO RUN

///////////////////////////////////////////global
//game control
var stage = 0; //keeps track of which function to run

//player
var p1X = 400; //p1 for player 1
var p1Y = 375;
var pWidth = 50;
var pHeight = 100;
var pSpeed = 4;

//boxes (platforms) ----FOR LVL 1
var b1X = 200; //b1 for box 1
var b1Y = 300;
var b2X = 600;
var b2Y = 300;
var b3X = 500;
var b3Y = 150;
var bWidth = 200;
var bHeight = 40;

//boxes for lvl 2
var b4X = 200; //b4 for box 4
var b4Y = 350;
var b5X = 400;
var b5Y = 300;
var b6X = 200;
var b6Y = 150;
var b7X = 600;
var b7Y = 200;

//wall barriers to stop jumping through platforms
var w1Y = b1Y+20;
var w2Y = b2Y+20;
var w3Y = b3Y+20;
var w4Y = b4Y+20;
var w5Y = b5Y+20;
var w6Y = b6Y+20;
var w7Y = b7Y+20;
var wHeight = 20;

//coins ---- FOR LVL 1
var c1X = 600;//c1 for coin 1
var c1Y = 410;
var c2X = 600;
var c2Y = 250;
var c3X = 500;
var c3Y = 100;
var c4X = 200;
var c4Y = 250;
var cWidth = 30;
var cHeight = 30;

//coins for lvl 2
var c5X = 200;//c1 for coin 1
var c5Y = 300;
var c6X = 380;
var c6Y = 250;
var c7X = 420;
var c7Y = 250;
var c8X = 180;
var c8Y = 100;
var c9X = 220;
var c9Y = 100;
var c10X = 600;
var c10Y = 150;


//goomba ---- FOR LVL 1
var g1X = 200; //g1 for goomba 1
var g1Y = 410;
var g2X = 550;
var g2Y = 100;
var gWidth = 50;
var gHeight = 60;
//moving goombas
var g1Position = 200;//center positions
var g2Position = 550;
var gSpeed = 2; //how fast goombas move
var g1Direction = -1; //moves right and -1 move left
var g1Distance = 150;//how far can goombas go
var g2Direction = 1; //moves right and -1 move left
var g2Distance = 50;//how far can goombas go

//powerup
var u1X = 120;//u1 for powerup 1
var u1Y = 260;
var uWidth = 40;
var uHeight = 40;
var up = false;//does character have power up

//goomba for lvl 2
var g3X = 600; //g1 for goomba 1
var g3Y = 400;
var g3Position = 600;
var g3Direction = 1;//moves right and -1 move left
var g3Distance = 100;//how far can goombas go
var g4X = 200; 
var g4Y = 300;
var g4Position = 200;
var g4Direction = -1;
var g4Distance = 50;
var g5X = 600; 
var g5Y = 150;
var g5Position = 600;
var g5Direction = 1;
var g5Distance = 50;
var g6X = 200;
var g6Y = 100;
var g6Position =200;
var g6Direction = -1;
var g6Distance = 50;

//counters ---- FOR LVL 1
var score = 0;
var lives = 2;
var totalTime;//total time of program running
var splashTime;//total time of splash screen
var gameTime;//total time of game running
var timeLimit = 15;//how much time you have to win

//counters ---- FOR LVL 2
var score2 = 0;
var lives2 = 3;
var gameTime2; //amount of time in lvl 2
var timeLimit2 = 30;//how much time you have to win

//gravity
var jump = false; //are we jumping?
var direction = 1; //the force of gravity in the y direction
var velocity = 2; //the speed of player
var jumpPower = 15; //the energy or strength of player
var fallingSpeed = 2; //equal to velocity
var minHeight = 385; //height of ground
var maxHeight = 50; //height of sky
var jumpCounter = 0; //keeps track of how much we are jumping

//multimedia
var character;
var platform;
var landscape;//cant use background
var jumpSound;
var marioFont;
var coin;
var coinSound;
var goomba;
var goombaSound;
var winSound;
var loseSound;
var themeSong;
var powerup;
var powerupSound;
var stompSound;

///////////////////////////////////////////setup
function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);
	textAlign(CENTER);
	imageMode(CENTER);
	
	//theme background music
	themeSong.play();
}//close setup

///////////////////////////////////////////draw
function draw() {
//call functions
	keyPressed();
	keyTyped();
	gravity();
	totalTime = millis();//start timer
	
	if(stage == 0){
		splash();
	}//close = 0
	
	if(stage == 1){
		level1();
	}//close = 1
	
	if(stage == 2){
		winScreen();
	}//close = 2
	
	if(stage == 3){
		loseScreen();
	}//close = 3

	if(stage == 4){
		level2();
	}//close 4
	
	if(mouseIsPressed == true && stage != 4){
		stage = 1;
	}//click start game
	
}//close draw

///////////////////////////////////////////splash
function splash(){
	//timer stuff
	splashTime = totalTime;//begin splash screen timer
	//appearance of game
	background(150, 230, 240); //sky blue
	image(landscape, width/2, height/2, width, height);
	
	
	//title
	textFont(marioFont);
	fill(255);
	stroke(0);
	strokeWeight(5);
	textSize(100);
	text('AVARTS', width/2, 120);
	textSize(40);
	text('BY: AVA2022083', width/2, 180);
	
	//instructions
	text('HOW TO PLAY:', width/2, 270);
	text('USE ARROW KEYS TO MOVE LEFT AND RIGHT, PRESS A TO JUMP', width/2, 330);
	text('WATCH OUT FOR GOOMBAS', width/2, 380);
	text('OBTAIN ALL COINS BEFORE TIME RUNS OUT', width/2, 430);
	
	text('CLICK THE SCREEN TO START', width/2, 480);
	
}//close splash

///////////////////////////////////////////level 1
function level1(){
//appearance of game
	background(150, 230, 240); //sky blue
	image(landscape, width/2, height/2, width, height);
//window frame
	noFill();
	stroke(0);
	strokeWeight(15);
	rect(width/2, height/2, width, height);
	
	//draw box
	stroke(0);
	strokeWeight(5);
	fill(255, 120, 0);//orange
	//rect(b1X, b1Y, bWidth, bHeight);
	image(platform, b1X, b1Y, bWidth, bHeight);
	image(platform, b2X, b2Y, bWidth, bHeight);
	image(platform, b3X, b3Y, bWidth, bHeight);

//collisions with box 1
	if(p1X >= b1X-bWidth/2 && p1X <= b1X+bWidth/2 && p1Y+pHeight/2 >= b1Y-bHeight/2 && p1Y-pHeight/2 <= b1Y+bHeight/2 && jump == false){
		p1Y = b1Y-55;//dont fall and rest on top of platform
		velocity = 0; //no speed becuase we arent falling
		jumpCounter = 0;//allows us to jump again
	}//close if on box
	
	//wall barrier under box
		if(p1X >= b1X-bWidth/2 && p1X <= b1X+bWidth/2 && p1Y+pHeight/2 >= w1Y-wHeight/2 && p1Y-pHeight/2 <= w1Y+wHeight/2){
		//hit barrier so fall
			jumpCounter = jumpPower; //no more energy
			velocity = fallingSpeed; //make character fall
		}//close hit wall
	
	//box2
	if(p1X >= b2X-bWidth/2 && p1X <= b2X+bWidth/2 && p1Y+pHeight/2 >= b2Y-bHeight/2 && p1Y-pHeight/2 <= b2Y+bHeight/2 && jump == false){
		p1Y = b2Y-55;//dont fall and rest on top of platform
		velocity = 0; //no speed becuase we arent falling
		jumpCounter = 0;//allows us to jump again
	}//close if on box
		//wall barrier under box
		if(p1X >= b2X-bWidth/2 && p1X <= b2X+bWidth/2 && p1Y+pHeight/2 >= w2Y-wHeight/2 && pY-pHeight/2 <= w2Y+wHeight/2){
		//hit barrier so fall
			jumpCounter = jumpPower; //no more energy
			velocity = fallingSpeed; //make character fall
		}//close hit wall
	
	//box3
	if(p1X >= b3X-bWidth/2 && p1X <= b3X+bWidth/2 && p1Y+pHeight/2 >= b3Y-bHeight/2 && p1Y-pHeight/2 <= b3Y+bHeight/2 && jump == false){
		p1Y = b3Y-55;//dont fall and rest on top of platform
		velocity = 0; //no speed becuase we arent falling
		jumpCounter = 0;//allows us to jump again
	}//close if on box
		//wall barrier under box
		if(p1X >= b3X-bWidth/2 && p1X <= b3X+bWidth/2 && p1Y+pHeight/2 >= w3Y-wHeight/2 && p1Y-pHeight/2 <= w3Y+wHeight/2){
		//hit barrier so fall
			jumpCounter = jumpPower; //no more energy
			velocity = fallingSpeed; //make character fall
		}//close hit wall
	
//coins
	//image(coin, c1X, c1Y, cWidth, cHeight);
	//if(p1X >= c1X-cWidth/2 && p1X <= c1X+cWidth/2 && p1Y >= c1Y-cHeight/2 && p1Y <= c1Y+cHeight/2){
		//we hit coin
		//score = score+1;//get point
	//	c1X = -1000;
	//	coinSound.play();
	//close hit coin
	
	image(coin, c2X, c2Y, cWidth, cHeight);
	if(p1X >= c2X-cWidth/2 && p1X <= c2X+cWidth/2 && p1Y >= c2Y-cHeight/2 && p1Y <= c2Y+cHeight/2){
		//we hit coin
		score = score+1;//get point
		c2X = -1000;
		coinSound.play();
	}//close hit coin
	
	image(coin, c3X, c3Y, cWidth, cHeight);
	if(p1X >= c3X-cWidth/2 && p1X <= c3X+cWidth/2 && p1Y >= c3Y-cHeight/2 && p1Y <= c3Y+cHeight/2){
		//we hit coin
		score = score+1;//get point
		c3X = -1000;
		coinSound.play();
	}//close hit coin
	
	image(coin, c4X, c4Y, cWidth, cHeight);
	if(p1X >= c4X-cWidth/2 && p1X <= c4X+cWidth/2 && p1Y >= c4Y-cHeight/2 && p1Y <= c4Y+cHeight/2){
		//we hit coin
		score = score+1;//get point
		c4X = -1000;
		coinSound.play();
	}//close hit coin
	
//goombas
	//goomba1
	image(goomba, g1X, g1Y, gWidth, gHeight);
	if(p1X >= g1X-gWidth/2 && p1X <= g1X+gWidth/2 && p1Y >= g1Y-gHeight/2 && p1Y <= g1Y+gHeight/2){
		if(up == false){//character no power up
			//hitting goomba
			goombaSound.play();
			lives = lives-1;//lose life
			p1X = 400;//put character on start position
			p1Y = 375;
		}//close power up false
		if(up == true){//character has power up
			stompSound.play();
			g1X = -1000;//goomba goes away
		}//close power up true
	}//close hit goomba
	
	//goomba2
	image(goomba, g2X, g2Y, gWidth, gHeight);
	if(p1X >= g2X-gWidth/2 && p1X <= g2X+gWidth/2 && p1Y >= g2Y-gHeight/2 && p1Y <= g2Y+gHeight/2){
		if(up == false){//no power up
			//hitting goomba
			goombaSound.play();
			lives = lives-1;//lose life
			p1X = 400;//put character on start position
			p1Y = 375;
		}//close power up false
		if(up == true){
			stompSound.play();
			g2X = -1000;//goomba goes away
		}//close power up true
	}//close hit goomba
	
//moving goombas
	//goomba 1
	g1X = g1X + (gSpeed*g1Direction);
	if(g1X >= g1Position+g1Distance || g1X <= g1Position-g1Distance){
		//exceed possible distance
		g1Direction = g1Direction*-1;//change direction
	}//close g1
	
	//goomba 2
	g2X = g2X + (gSpeed*g2Direction);
	if(g2X >= g2Position+g2Distance || g2X <= g2Position-g2Distance){
		//exceed possible distance
		g2Direction = g2Direction*-1;//change direction
	}//close g2
	
//draw player
	stroke(0);
	strokeWeight(5);
	fill(150, 0, 170);//purple
	//rect(p1X, p1Y, pWidth, pHeight);
	image(character, p1X, p1Y, pWidth, pHeight);
	
//scoreboard
	textFont(marioFont);
	fill(255);
	stroke(0);
	strokeWeight(3);
	textSize(30);
	text('POINTS:', 50, 50);
	text(score, 100, 50);
	
//lives
	textFont(marioFont);
	fill(255);
	stroke(0);
	strokeWeight(3);
	textSize(30);
	text('LIVES:', 150, 50);
	text(lives, 200, 50);
	
	//timer
	splashTime = splashTime;
	gameTime = int((totalTime-splashTime)/1000)//convert to seconds
	
	textFont(marioFont);
	fill(255);
	stroke(0);
	strokeWeight(3);
	textSize(30);
	text('TIME:', 700, 50);
	text(timeLimit-gameTime, 750, 50);//display countdown timer
	 

//code to trigger win or lose screen
	if(score >= 3){
		winSound.play();
		p1X = 400; //p1 for player 1
		p1Y = 375;
		stage = 4//trigger level 2
		}//close you win 
	
	if(lives <= 0){
		loseSound.play();
		stage = 3;//trigger lose screen
	}//close lose no lives
	if(gameTime >= timeLimit){
		loseSound.play();
		stage = 3;//trigger lose screen
	}//close lose time
	
//power up
	image(powerup, u1X, u1Y, uWidth, uHeight);
	if(p1X >= u1X-uWidth/2 && p1X <= u1X+uWidth/2 && p1Y >= u1Y-uHeight/2 && p1Y <= u1Y+uHeight/2){
		//hit powerup
		powerupSound.play();
		up = true;//characte has power up
		pWidth = 70;
		pHeight = 120;//character grows
		pSpeed = 8;//character goes faster
		u1X = -1000;//powerup off screen
		}//close got powerup
	
}//close level 1

/////////////////////////////////////////////////////////level 2
function level2(){
  image(landscape, width/2, height/2, width, height);	
	
//scoreboard
	textFont(marioFont);
	fill(255);
	stroke(0);
	strokeWeight(3);
	textSize(30);
	text('POINTS:', 50, 50);
	text(score2, 100, 50);
	
//lives
	textFont(marioFont);
	fill(255);
	stroke(0);
	strokeWeight(3);
	textSize(30);
	text('LIVES:', 150, 50);
	text(lives2, 200, 50);
	
	//timer
	gameTime = gameTime;
	gameTime2 = int((totalTime-splashTime-(gameTime*1000))/1000);//convert to seconds
	textFont(marioFont);
	fill(255);
	stroke(0);
	strokeWeight(3);
	textSize(30);
	text('TIME:', 700, 50);
	text(timeLimit2-gameTime2, 750, 50);//display countdown timer
	
//drawing and colliding with platforms
//box4
image(platform, b4X, b4Y, bWidth, bHeight);
	if(p1X >= b4X-bWidth/2 && p1X <= b4X+bWidth/2 && p1Y+pHeight/2 >= b4Y-bHeight/2 && p1Y-pHeight/2 <= b4Y+bHeight/2 && jump == false){
		p1Y = b4Y-55;//dont fall and rest on top of platform
		velocity = 0; //no speed becuase we arent falling
		jumpCounter = 0;//allows us to jump again
	}//close if on box
	//wall barrier under box
		if(p1X >= b4X-bWidth/2 && p1X <= b4X+bWidth/2 && p1Y+pHeight/2 >= w4Y-wHeight/2 && p1Y-pHeight/2 <= w4Y+wHeight/2){
		//hit barrier so fall
			jumpCounter = jumpPower; //no more energy
			velocity = fallingSpeed; //make character fall
		}//close hit wall
	
//box5
image(platform, b5X, b5Y, bWidth, bHeight);
	if(p1X >= b5X-bWidth/2 && p1X <= b5X+bWidth/2 && p1Y+pHeight/2 >= b5Y-bHeight/2 && p1Y-pHeight/2 <= b5Y+bHeight/2 && jump == false){
		p1Y = b5Y-55;//dont fall and rest on top of platform
		velocity = 0; //no speed becuase we arent falling
		jumpCounter = 0;//allows us to jump again
	}//close if on box	
	//wall barrier under box
		if(p1X >= b5X-bWidth/2 && p1X <= b5X+bWidth/2 && p1Y+pHeight/2 >= w5Y-wHeight/2 && p1Y-pHeight/2 <= w5Y+wHeight/2){
		//hit barrier so fall
			jumpCounter = jumpPower; //no more energy
			velocity = fallingSpeed; //make character fall
		}//close hit wall
	
//box6
image(platform, b6X, b6Y, bWidth, bHeight);
	if(p1X >= b6X-bWidth/2 && p1X <= b6X+bWidth/2 && p1Y+pHeight/2 >= b6Y-bHeight/2 && p1Y-pHeight/2 <= b6Y+bHeight/2 && jump == false){
		p1Y = b6Y-55;//dont fall and rest on top of platform
		velocity = 0; //no speed becuase we arent falling
		jumpCounter = 0;//allows us to jump again
	}//close if on box
	//wall barrier under box
		if(p1X >= b6X-bWidth/2 && p1X <= b6X+bWidth/2 && p1Y+pHeight/2 >= w6Y-wHeight/2 && p1Y-pHeight/2 <= w6Y+wHeight/2){
		//hit barrier so fall
			jumpCounter = jumpPower; //no more energy
			velocity = fallingSpeed; //make character fall
		}//close hit wall
	
//box7
image(platform, b7X, b7Y, bWidth, bHeight);
	if(p1X >= b7X-bWidth/2 && p1X <= b7X+bWidth/2 && p1Y+pHeight/2 >= b7Y-bHeight/2 && p1Y-pHeight/2 <= b7Y+bHeight/2 && jump == false){
		p1Y = b7Y-55;//dont fall and rest on top of platform
		velocity = 0; //no speed becuase we arent falling
		jumpCounter = 0;//allows us to jump again
	}//close if on box	
	//wall barrier under box
		if(p1X >= b7X-bWidth/2 && p1X <= b7X+bWidth/2 && p1Y+pHeight/2 >= w7Y-wHeight/2 && p1Y-pHeight/2 <= w7Y+wHeight/2){
		//hit barrier so fall
			jumpCounter = jumpPower; //no more energy
			velocity = fallingSpeed; //make character fall
		}//close hit wall

//drawing and colliding with coins
	//coin 5
	image(coin, c5X, c5Y, cWidth, cHeight);
	if(p1X >= c5X-cWidth/2 && p1X <= c5X+cWidth/2 && p1Y >= c5Y-cHeight/2 && p1Y <= c5Y+cHeight/2){
		//we hit coin
		score2 = score2+1;//get point
		c5X = -1000;
		coinSound.play();
	}//close hit coin
	
	//drawing and colliding with coins
	//coin 6
	image(coin, c6X, c6Y, cWidth, cHeight);
	if(p1X >= c6X-cWidth/2 && p1X <= c6X+cWidth/2 && p1Y >= c6Y-cHeight/2 && p1Y <= c6Y+cHeight/2){
		//we hit coin
		score2 = score2+1;//get point
		c6X = -1000;
		coinSound.play();
	}//close hit coin
	
	//drawing and colliding with coins
	//coin 7
	image(coin, c7X, c7Y, cWidth, cHeight);
	if(p1X >= c7X-cWidth/2 && p1X <= c7X+cWidth/2 && p1Y >= c7Y-cHeight/2 && p1Y <= c7Y+cHeight/2){
		//we hit coin
		score2 = score2+1;//get point
		c7X = -1000;
		coinSound.play();
	}//close hit coin
	
	//drawing and colliding with coins
	//coin 8
	image(coin, c8X, c8Y, cWidth, cHeight);
	if(p1X >= c8X-cWidth/2 && p1X <= c8X+cWidth/2 && p1Y >= c8Y-cHeight/2 && p1Y <= c8Y+cHeight/2){
		//we hit coin
		score2 = score2+1;//get point
		c8X = -1000;
		coinSound.play();
	}//close hit coin
	
	//drawing and colliding with coins
	//coin 9
	image(coin, c9X, c9Y, cWidth, cHeight);
	if(p1X >= c9X-cWidth/2 && p1X <= c9X+cWidth/2 && p1Y >= c9Y-cHeight/2 && p1Y <= c9Y+cHeight/2){
		//we hit coin
		score2 = score2+1;//get point
		c9X = -1000;
		coinSound.play();
	}//close hit coin
	
	//drawing and colliding with coins
	//coin 10
	image(coin, c10X, c10Y, cWidth, cHeight);
	if(p1X >= c10X-cWidth/2 && p1X <= c10X+cWidth/2 && p1Y >= c10Y-cHeight/2 && p1Y <= c10Y+cHeight/2){
		//we hit coin
		score2 = score2+1;//get point
		c10X = -1000;
		coinSound.play();
	}//close hit coin
	
////drawing and colliding with goombas
//goomba3
	image(goomba, g3X, g3Y, gWidth, gHeight);
	if(p1X >= g3X-gWidth/2 && p1X <= g3X+gWidth/2 && p1Y >= g3Y-gHeight/2 && p1Y <= g3Y+gHeight/2){
			//hitting goomba
			goombaSound.play();
			lives2 = lives2-1;//lose life
			p1X = 400;//put character on start position
			p1Y = 375;
	}//close hit goomba
	
	//move goomba 3
	g3X = g3X + (gSpeed*g3Direction);
	if(g3X >= g3Position+g3Distance || g3X <= g3Position-g3Distance){
		//exceed possible distance
		g3Direction = g3Direction*-1;//change direction
	}//close g3
	
//goomba4
	image(goomba, g4X, g4Y, gWidth, gHeight);
	if(p1X >= g4X-gWidth/2 && p1X <= g4X+gWidth/2 && p1Y >= g4Y-gHeight/2 && p1Y <= g4Y+gHeight/2){
			//hitting goomba
			goombaSound.play();
			lives2 = lives2-1;//lose life
			p1X = 400;//put character on start position
			p1Y = 375;
	}//close hit goomba
	
	//move goomba 4
	g4X = g4X + (gSpeed*g3Direction);
	if(g4X >= g4Position+g4Distance || g4X <= g4Position-g4Distance){
		//exceed possible distance
		g4Direction = g4Direction*-1;//change direction
	}//close g4
	
//goomba5
	image(goomba, g5X, g5Y, gWidth, gHeight);
	if(p1X >= g5X-gWidth/2 && p1X <= g5X+gWidth/2 && p1Y >= g5Y-gHeight/2 && p1Y <= g5Y+gHeight/2){
			//hitting goomba
			goombaSound.play();
			lives2 = lives2-1;//lose life
			p1X = 400;//put character on start position
			p1Y = 375;
	}//close hit goomba
	
	//move goomba 3
	g5X = g5X + (gSpeed*g3Direction);
	if(g5X >= g5Position+g5Distance || g5X <= g5Position-g5Distance){
		//exceed possible distance
		g5Direction = g5Direction*-1;//change direction
	}//close g5
	
		//goomba6
	image(goomba, g6X, g6Y, gWidth, gHeight);
	if(p1X >= g6X-gWidth/2 && p1X <= g6X+gWidth/2 && p1Y >= g6Y-gHeight/2 && p1Y <= g6Y+gHeight/2){
			//hitting goomba
			goombaSound.play();
			lives2 = lives2-1;//lose life
			p1X = 400;//put character on start position
			p1Y = 375;
	}//close hit goomba
	
	//move goomba 6
	g6X = g6X + (gSpeed*g6Direction);
	if(g6X >= g6Position+g6Distance || g6X <= g6Position-g6Distance){
		//exceed possible distance
		g6Direction = g6Direction*-1;//change direction
	}//close g6
	
//draw player
	pWidth = 50;
	pHeight = 100;
	image(character, p1X, p1Y, pWidth, pHeight);
	
	//code to trigger win or lose screen
	if(score2 >= 6){
		winSound.play();
		stage = 2;//trigger win screen
		}//close you win 
	
	if(lives2 < 0){
		loseSound.play();
		stage = 3;//trigger lose screen
	}//close lose no lives
	if(gameTime2 >= timeLimit){
		loseSound.play();
		stage = 3;//trigger lose screen
	}//close lose time
	
}//close level 2


///////////////////////////////////////////win screen
function winScreen(){
	image(landscape, width/2, height/2, width, height);
	textFont(marioFont);
	fill(255);
	stroke(0);
	strokeWeight(5);
	textSize(200);
	text('YOU WIN!', width/2, height/2);
}//close win function

///////////////////////////////////////////lose screen
function loseScreen(){
	image(landscape, width/2, height/2, width, height);
	textFont(marioFont);
	fill(255);
	stroke(0);
	strokeWeight(5);
	textSize(200);
	text('YOU LOSE!', width/2, height/2);
}//close lose function

///////////////////////////////////////////gravity
function gravity(){

	if(p1Y >= minHeight && jump == false){
		//STOP FALLING ON THE GROUND
		p1Y = p1Y; //dont fall
		jumpCounter = 0;//reset jump counter when landing
	}//close on ground
	else{
		p1Y = p1Y + (direction*velocity); //the code that makes gravity work
	}//else fall
	
	
	if(jump == true){
		if(p1Y <= maxHeight || jumpCounter >= jumpPower){
			if(p1Y >= minHeight){
				p1Y = minHeight;
			}//close at min already
			else{
				velocity = fallingSpeed; //fall at maximums
			}//close else not at min
		}//close at max
		else{
			jumpSound.play();
			velocity = -jumpPower; //jumping
			jumpCounter = jumpCounter+1;//add to jump counter
		}//close else not at max
	}//close jump
	else{
		velocity = fallingSpeed;
	}//close not jumping
	
	////horizontal barriers
	if(p1X+pWidth/2 >= width){//exceeded right wall
		p1X = p1X-5;
	}//close at width
	
	if(p1X-pWidth/2 <= 0){//exceeded left wall
		p1X = p1X+5;
	}//close at 0
	
}//close gravity

///////////////////////////////////////////keypressed
function keyPressed(){
	if(keyDown('LEFT_ARROW')){
		p1X = p1X-pSpeed; //move left
	}//close left
	
	if(keyDown('RIGHT_ARROW')){
		p1X = p1X+pSpeed; //move right
	}//close right
	
}//close keypressed

///////////////////////////////////////////keytyped
function keyTyped(){
	if(keyDown('a')){
		jump = true; //jump
	}//a pressed
	else{
		jump = false; //dont jump
	}//close not a
	
}//close keytyped
 
///////////////////////////////////////////preload
function preload(){
	character = loadImage('8bit_Character.png');
	platform = loadImage('mario_bricks.jpeg');
	landscape = loadImage('supermario_background.jpg');
	jumpSound = loadSound('Mario-jump-sound.mp3');
	marioFont = loadFont('smbfont.ttf');
	coin = loadImage('mario_coin.png');
	coinSound = loadSound('coin-sound.mp3');
	goomba = loadImage('mario_goomba.png');
	goombaSound = loadSound('mario_life.m4a');
	winSound = loadSound('mario_win_sound.m4a');
	loseSound = loadSound('mario_gameover_sound.m4a');
	themeSong = loadSound('theme_8bit.mp3');
	powerup = loadImage('mario_powerup.png');
	powerupSound = loadSound ('powerup_sound.mp3');
	stompSound = loadSound ('stomp_sound.mp3')
	
}//close preload