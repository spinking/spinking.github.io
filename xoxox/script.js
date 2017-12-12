// Представление

var view = {
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},
	displayChar: function(guess) {
		var charLocation = document.getElementById(guess);
		charLocation.innerHTML = model.twoVariant();
	}
}

// Модель

var model = {
	cells: {
		locations: ["00", "01", "02", "10", "11", "12", "20", "21", "22"],
		hits: ["", "", "", "", "", "", "", "", ""]
	},

	twoVariant: function() {
		check = this.cells.hits;
				if (controller.guesses % 2 === 0) {
					view.displayMessage("X turn");
					return "o";
				} else { 
					view.displayMessage("O turn");
					return "x";
				}
	},

	getHit: function(guess) {
		var loc = this.cells.locations;
		var check = this.cells.hits;
		for (var i =0; i < loc.length; i++ ) {
			var index = loc.indexOf(guess);
			if (index >= 0 && check[index] == "") {
				check[index] = this.twoVariant();
					view.displayChar(guess);
					this.collisions();
					
					console.log(guess);
					console.log(this.cells.hits);
			} 
		}

	},

	collisions: function() {
		check = this.cells.hits;
		if (
			(check[0] === "x" && check[1] === "x" && check[2] === "x" ) ||
			(check[3] === "x" && check[4] === "x" && check[5] === "x" ) ||
			(check[6] === "x" && check[7] === "x" && check[8] === "x" ) ||
			(check[0] === "x" && check[3] === "x" && check[6] === "x" ) ||
			(check[1] === "x" && check[4] === "x" && check[7] === "x" ) ||
			(check[2] === "x" && check[5] === "x" && check[8] === "x" ) ||
			(check[0] === "x" && check[4] === "x" && check[8] === "x" ) ||
			(check[2] === "x" && check[4] === "x" && check[6] === "x" )
			) {
			view.displayMessage("X win the game!");
			this.cells.hits = ["g", "g", "g", "g", "g", "g", "g", "g", "g"];

		} else if (
			(check[0] === "o" && check[1] === "o" && check[2] === "o" ) ||
			(check[3] === "o" && check[4] === "o" && check[5] === "o" ) ||
			(check[6] === "o" && check[7] === "o" && check[8] === "o" ) ||
			(check[0] === "o" && check[3] === "o" && check[6] === "o" ) ||
			(check[1] === "o" && check[4] === "o" && check[7] === "o" ) ||
			(check[2] === "o" && check[5] === "o" && check[8] === "o" ) ||
			(check[0] === "o" && check[4] === "o" && check[8] === "o" ) ||
			(check[2] === "o" && check[4] === "o" && check[6] === "o" )
			) {
			view.displayMessage("O win the game!");
			this.cells.hits = ["g", "g", "g", "g", "g", "g", "g", "g", "g"];
		} else if (controller.guesses >= 9) {
			view.displayMessage("End this Game!");
		}
	}
}

// Контроллер

var controller = {
	guesses: 0,

	processGuess: function(guess) {
		if (guess) {
		this.guesses = this.guesses + 1;
		var hit = model.getHit(guess);
		}
	}
};

// Обработчик событий

function init() {
	var clicker = document.getElementsByTagName("td");
	for (var i = 0; clicker.length; i++) {
		clicker[i].addEventListener("click", value, false);
	}
	function value(clickID) {
	var guess = clickID.target.id;
	controller.processGuess(guess);
	}
}

window.onload = init;
