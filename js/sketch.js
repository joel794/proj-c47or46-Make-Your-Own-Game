// var player1UP;
// var player2DOWN;
// function preload(){
// 	p = loadImage("images/maze.png");
// 	grass = loadImage("images/grass.jpg");
// 	playerB = loadImage("images/GunPerson.png");
// 	playerR = loadImage("images/GunPerson2.png");
// }

// function setup() {
// 	createCanvas(900, 800);

// 	wallGroup = createGroup();

// 	player1UP = createSprite(230, 25, 50, 50);
// 	player1UP.addImage(playerR);
// 	player1UP.scale = 0.15;

// 	player2DOWN = createSprite(620, 780, 50, 50);
// 	player2DOWN.addImage(playerB);
// 	player2DOWN.scale = 0.15;

// 	//creating edges
// 	edge1 = createSprite(0, 450, 20, 900);
// 	edge2 = createSprite(110, 0, 200, 20);
// 	edge3 = createSprite(600, 0, 700, 20); 
// 	edge4 = createSprite(900, 400, 20, 900);
// 	edge5 = createSprite(300, 800, 600, 20);
// 	edge6 = createSprite(800, 800, 310, 20);

// 	//creating sleeping lines of walls of maze
// 	w1 = new Wall(205, 30, 5, 45);
// 	w2 = new Wall(230, 50, 50, 5);
// 	w3 = new Wall(350, 50, 105, 5);
// 	w4 = new Wall(525, 50, 55, 5);
// 	w5 = new Wall(647, 50, 105, 5);
// 	w6 = new Wall(105, 50, 105, 5);
// 	w7 = new Wall(82, 95, 55, 5);
// 	w8 = new Wall(228, 95, 155, 5);
// 	w9 = new Wall(378, 95, 55, 5);
// 	w10 = new Wall(499, 95, 105, 5);
// 	w11 = new Wall(865, 95, 55, 5);
// 	w12 = new Wall(230, 139, 250, 5);
// 	w13 = new Wall(450, 139, 105, 5);
// 	w14 = new Wall(622, 139, 155, 5);
// 	w15 = new Wall(792, 139, 105, 5);
// 	w16 = new Wall(106, 183, 107, 5);
// 	w17 = new Wall(352, 183, 105, 5);
// 	w18 = new Wall(500, 183, 105, 5);
// 	w19 = new Wall(675, 183, 150, 5);
// 	w20 = new Wall(131, 227, 150, 5);
// 	w21 = new Wall(279, 227, 54, 5);
// 	w22 = new Wall(400, 227, 100, 5);
// 	w23 = new Wall(520, 227, 50, 5);
// 	w24 = new Wall(35, 270, 50, 5);
// 	w25 = new Wall(180, 270, 50, 5);
// 	w26 = new Wall(300, 270, 100, 5);
// 	w27 = new Wall(475, 270, 50, 5);
// 	w28 = new Wall(700, 270, 100, 5);
// 	w29 = new Wall(815, 270, 50, 5);
// 	w30 = new Wall(230, 312, 50, 5);
// 	w31 = new Wall(405, 312, 100, 5);
// 	w32 = new Wall(600, 312, 100, 5);
// 	w33 = new Wall(745, 312, 100, 5);
// 	w34 = new Wall(180, 355, 50, 5);
// 	w35 = new Wall(275, 355, 50, 5);
// 	w36 = new Wall(500, 355, 200, 5);
// 	w37 = new Wall(205, 400, 100, 5);
// 	w38 = new Wall(500, 400, 100, 5);
// 	w39 = new Wall(80, 444, 50, 5);
// 	w40 = new Wall(180, 444, 50, 5);
// 	w41 = new Wall(280, 444, 50, 5);
// 	w42 = new Wall(400, 444, 100, 5);
// 	w43 = new Wall(600, 444, 100, 5);
// 	w44 = new Wall(820, 444, 50, 5);
// 	w45 = new Wall(80, 486, 150, 5);
// 	w46 = new Wall(230, 486, 50, 5);
// 	w47 = new Wall(550, 486, 100, 5);
// 	w48 = new Wall(700, 486, 100, 5);
// 	w49 = new Wall(845, 486, 100, 5);
// 	w50 = new Wall(80, 530, 50, 5);
// 	w51 = new Wall(180, 530, 50, 5);
// 	w52 = new Wall(280, 530, 50, 5);
// 	w53 = new Wall(622, 530, 50, 5);
// 	w54 = new Wall(770, 530, 50, 5);
// 	w55 = new Wall(35, 574, 50, 5);
// 	w56 = new Wall(300, 574, 100, 5);
// 	w57 = new Wall(500, 574, 100, 5);
// 	w58 = new Wall(695, 574, 100, 5);
// 	w59 = new Wall(80, 618, 50, 5);
// 	w60 = new Wall(180, 618, 50, 5);
// 	w61 = new Wall(375, 618, 50, 5);
// 	w62 = new Wall(600, 618, 300, 5);
// 	w63 = new Wall(820, 618, 50, 5);
// 	w64 = new Wall(80, 661, 50, 5);
// 	w65 = new Wall(200, 661, 100, 5);
// 	w66 = new Wall(450, 661, 100, 5);
// 	w67 = new Wall(672, 661, 250, 5);
// 	w68 = new Wall(30, 704, 50, 5);
// 	w69 = new Wall(155, 704, 100, 5);
// 	w70 = new Wall(280, 704, 50, 5);
// 	w71 = new Wall(405, 704, 100, 5);
// 	w72 = new Wall(620, 704, 150, 5);
// 	w73 = new Wall(817, 704, 50, 5);
// 	w74 = new Wall(130, 748, 50, 5);
// 	w75 = new Wall(225, 748, 50, 5);
// 	w76 = new Wall(325, 748, 50, 5);
// 	w77 = new Wall(450, 748, 100, 5);
// 	w78 = new Wall(620, 748, 50, 5);
// 	w79 = new Wall(820, 748, 50, 5);
// 	w80 = new Wall(30, 400, 50, 5);

// 	//creating standing lines of walls of maze
// 	w81 = new Wall(56, 72, 5, 50);
// 	w82 = new Wall(56, 160, 5, 50);
// 	w83 = new Wall(56, 248, 5, 50);
// 	w84 = new Wall(56, 357, 5, 90);
// 	w85 = new Wall(56, 553, 5, 50);
// 	w86 = new Wall(56, 553+87, 5, 50);
// 	w87 = new Wall(56, 553+87+87, 5, 50);
// 	w88 = new Wall(155, 72, 5, 50);
// 	w89 = new Wall(254, 72, 5, 50);
// 	w90 = new Wall(353, 72, 5, 50);
// 	w91 = new Wall(450, 48, 5, 100);
// 	w92 = new Wall(549, 72, 5, 50);
// 	w93 = new Wall(597, 72, 5, 50);
// 	w94 = new Wall(696, 93, 5, 90);
// 	w95 = new Wall(842, 72, 6, 50);
// 	w96 = new Wall(105, 117, 5, 50);
// 	w97 = new Wall(105, 337, 5, 220);
// 	w98 = new Wall(105, 574, 5, 90);
// 	w99 = new Wall(105, 728, 5, 50);
// 	w100 = new Wall(155, 160, 5, 45);
// 	w101 = new Wall(155, 290, 5, 45);
// 	w102 = new Wall(155, 378, 5, 50);
// 	w103 = new Wall(155, 531, 5, 90);
// 	w104 = new Wall(205, 225, 5, 90);
// 	w105 = new Wall(205, 335, 5, 45);
// 	w106 = new Wall(205, 445, 5, 90);
// 	w107 = new Wall(205, 575, 5, 90);
// 	w108 = new Wall(205, 727, 5, 45);
// 	w109 = new Wall(254, 180, 5, 90);
// 	w110 = new Wall(254, 290, 5, 50);
// 	w111 = new Wall(254, 422, 5, 45);
// 	w112 = new Wall(254, 510, 5, 45);
// 	w113 = new Wall(254, 640, 5, 135);
// 	w114 = new Wall(254, 770, 5, 50);
// 	w115 = new Wall(303, 335, 5, 130);
// 	w116 = new Wall(303, 465, 5, 45);
// 	w117 = new Wall(303, 620, 5, 95);
// 	w118 = new Wall(303, 727, 5, 45);
// 	w119 = new Wall(353, 162, 5, 45);
// 	w120 = new Wall(353, 252, 5, 40);
// 	w121 = new Wall(353, 444, 5, 270);
// 	w122 = new Wall(353, 660, 5, 93);
// 	w123 = new Wall(400, 115, 5, 45);
// 	w124 = new Wall(400, 290, 5, 50);
// 	w125 = new Wall(400, 380, 5, 50);
// 	w126 = new Wall(400, 555, 5, 135);
// 	w127 = new Wall(400, 727, 5, 50);
// 	w128 = new Wall(450, 225, 5, 90);
// 	w129 = new Wall(450, 488, 5, 180);
// 	w130 = new Wall(450, 640, 5, 45);
// 	w131 = new Wall(500, 117, 5, 50);
// 	w132 = new Wall(500, 315, 5, 90);
// 	w133 = new Wall(500, 486, 5, 92);
// 	w134 = new Wall(500, 706, 5, 90);
// 	w135 = new Wall(548, 140, 5, 90);
// 	w136 = new Wall(548, 270, 5, 90);
// 	w137 = new Wall(548, 422, 5, 50);
// 	w138 = new Wall(548, 552, 5, 50);
// 	w139 = new Wall(548, 640, 5, 45);
// 	w140 = new Wall(548, 728, 5, 47);
// 	w141 = new Wall(597, 225, 5, 90);
// 	w142 = new Wall(597, 380, 5, 50);
// 	w143 = new Wall(597, 550, 5, 130);
// 	w144 = new Wall(647, 115, 5, 45);
// 	w145 = new Wall(647, 355, 5, 270);
// 	w146 = new Wall(647, 770, 5, 50);
// 	w147 = new Wall(696, 205, 5, 45);
// 	w148 = new Wall(696, 380, 5, 135);
// 	w149 = new Wall(696, 530, 5, 85);
// 	w150 = new Wall(696, 750, 5, 95);
// 	w151 = new Wall(745, 95, 5, 170);
// 	w152 = new Wall(745, 245, 5, 50);
// 	w153 = new Wall(745, 420, 5, 130);
// 	w154 = new Wall(745, 755, 5, 100);
// 	w155 = new Wall(794, 45, 5, 100);
// 	w156 = new Wall(794, 315, 5, 265);
// 	w157 = new Wall(794, 572, 5, 175);
// 	w158 = new Wall(794, 729, 5, 45);
// 	w159 = new Wall(842, 205, 5, 130);
// 	w160 = new Wall(842, 380, 5, 135);
// 	w161 = new Wall(842, 617, 5, 180);

// }

// function draw() {
// 	//background setting to grass background
// 	background("green");

// 	// camera.x = player1UP.x;
// 	// camera.y = player1UP.y;

// 	player1UP.bounceOff(wallGroup)
// 	player2DOWN.bounceOff(wallGroup)

// 	//player1 controls
// 	if(keyIsDown(UP_ARROW)){
// 		player1UP.y = player1UP.y - 5;
// 	}
// 	if(keyIsDown(DOWN_ARROW)){
// 		player1UP.y = player1UP.y + 5;
// 	}
// 	if(keyIsDown(RIGHT_ARROW)){
// 		player1UP.x = player1UP.x + 5;
// 		player1UP.mirrorX(1)
// 	}
// 	if(keyIsDown(LEFT_ARROW)){
// 		player1UP.x = player1UP.x - 5;
// 		player1UP.mirrorX(-1)
// 	}

// 	//player2 controls
// 	if(keyDown("w")){
// 		player2DOWN.y = player2DOWN.y - 5;
// 	}
// 	if(keyDown("s")){
// 		player2DOWN.y = player2DOWN.y + 5;
// 	}
// 	if(keyDown("d")){
// 		player2DOWN.x = player2DOWN.x + 5;
// 		player2Down.mirrorX(-1)
// 	}
// 	if(keyDown("a")){
// 		player2DOWN.x = player2DOWN.x - 5;
// 		player2DOWN.mirrorX(-1)
// 	}

// 	//drawing sprites
// 	drawSprites();
// }

var database;
var back_img;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var life = 3;
var bullets = 6;
var player, form, game;
var player1, player2;
var players;
var player1life = 3;
var player2life = 3;
var player1bullets = 6;
var player2bullets = 6;

var xPosition, yPosition;
var bullet;

function preload() {
	back_img = loadImage("images/Form bg.jpg");
	playerB = loadImage("images/GunPerson.png");
	playerR = loadImage("images/GunPerson2.png");
	grass = loadImage("images/grass.jpg");
}
function setup() {
	createCanvas(900, 800);
	database = firebase.database();
	game = new Game();
	game.getState();
	game.start();
	wallGroup = createGroup();

	edge1 = new Wall(0, 450, 20, 900);
	edge2 = new Wall(110, 0, 200, 20);
	edge3 = new Wall(600, 0, 700, 20); 
	edge4 = new Wall(900, 400, 20, 900);
	edge5 = new Wall(300, 800, 600, 20);
	edge6 = new Wall(800, 800, 310, 20);

}

function draw() {

	if(gameState === 0){
		background(back_img)
	}
	if (playerCount === 2) {
		game.update(1);
	}
	if (gameState === 1) {
		clear();
		// background(grass)
		game.play();
		
	}
	if (gameState === 2) {
		game.end();
	}
	
}