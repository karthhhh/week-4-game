var playerScore = 0;

var randomnum = 0;

var currentTotal= 0;

var endOfGame = false;	

var playLoses = false;

var playerScore = 0;

var wins=0;

var losses=0;

var winaudio = new Audio('assets/audio/cheer.mp3');//winner audio

var loseaudio = new Audio('assets/audio/aww.mp3');//loser audio


var crystal = {
	red : {
		strength :0,
		pathtoimg : "",

	},

	blue : {
		strength : 0,
		pathtoimg : "" ,
	},
	
	orange : {
		strength : 0,
		pathtoimg : "",
	},

	green : {
		strength : 0,
		pathtoimg : "",
	},

};

$(document).ready(function(){

	
	$('#red').append('<img src=' + crystal.red.pathtoimg + '>');
	$('#red').click(function(){
		if (endOfGame == false){
		playerScore=playerScore + crystal.red.strength;
		checkScore();
		$('#playerScore').html(playerScore);
		};
	})


	$('#blue').append('<img src=' + crystal.blue.pathtoimg + '>');
	$('#blue').click(function(){
		if (endOfGame == false){
		playerScore=playerScore + crystal.blue.strength;
		checkScore();
		$('#playerScore').html(playerScore);
		};
	})


	$('#yellow').append('<img src=' + crystal.orange.pathtoimg + '>');  
	$('#yellow').click(function(){
		if (endOfGame == false){
		playerScore=playerScore + crystal.orange.strength;
		checkScore();
		$('#playerScore').html(playerScore);
		};
	})


	$('#green').append('<img src=' + crystal.green.pathtoimg + '>');
	$('#green').click(function(){
		if (endOfGame == false){
		playerScore=playerScore + crystal.green.strength;
		checkScore();
		$('#playerScore').html(playerScore);
		};
	})

	var gameValues = {

		currentTotal:0,
		goal:0,
		c1:0,
		c2:0,
		c3:0,
		c4:0,
		numberGenerator: function(min, max) {

		},
		returnMathFor: function(min, max){
			(Math.random(.2)*120)+19
		},

		initialze:function(){

			this.c1 = this.numberGenerator(1,12),

			this.c2 = this.numberGenerator(1,12),

			this.c3 = this.numberGenerator(1,12),

			this.c4 = this.numberGenerator(1,12),

			currentTotal = c1+c2+c3+c4   
		}
	};


	


});
