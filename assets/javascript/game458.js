// Playing the game
// Put the ball into a random cup
// Shuffle the cups
// Ask the user to pick a mofuckin cup
// Determine if they won or lost 
// Update Win/Lose Score.
// Alert if win
// Just Call setBallPosition again to reset the game
// Reset the Game 





// Create our Game Object

var game = {

	// Define our Properties of this object

	ball: 0,
	
	winCount: 0,
	
	loseCount: 0,

	waitingForGuess: false,

	// Game Start/Restart

	//Define Min and Max of Balls on init.

	initialize: function(minPosition, maxPosition){
			this.ball= Math.floor(
				Math.random()* (maxPosition - minPosition+1));


	},

	setUserGuess: function(guess) {

		
		this.waitingForGuess= false;
		return this.setWinLose(guess);

	},

	//Define our Functions of this project

	setBallPosition(minPosition, maxPosition){

		this.ball= Math.floor(Math.random()* (maxPosition -minPosition+1);

	
	},

//Check if user guess is where the ball is

//Set win/lose 
	setWinLose: function(guess){

		return(guess===this.ball){

			return true;
		}
			else{

				this.loseCount++;

				return false;

			}

	},

};

if (game.setWinLose(myGuess)){

	alert("Boom!");

}




