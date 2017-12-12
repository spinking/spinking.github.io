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
	clank: 0,
	cells: {
		locations: ["00", "01", "02", "10", "11", "12", "20", "21", "22"],
		hits: ["", "", "", "", "", "", "", "", ""]
	},

	/*winCells: {
		win1: ["hit", "hit", "hit", "" , "", "", "" , "", ""],
		win2: ["", "", "", "hit" , "hit", "hit", "" , "", ""],
		win3: ["", "", "", "" , "", "", "hit" , "hit", "hit"],
		win4: ["hit", "", "", "hit" , "", "", "hit" , "", ""],
		win5: ["", "hit", "", "" , "hit", "", "" , "hit", ""],
		win6: ["", "", "hit", "" , "", "hit", "" , "", "hit"],
		win7: ["hit", "", "", "" , "hit", "", "" , "", "hit"],
		win8: ["", "", "hit", "" , "hit", "", "hit" , "", ""]
	},*/

	twoVariant: function() {
		check = this.cells.hits;
		for (var i = 0; i < check.length; i++) {
				if (controller.guesses % 2 == 0) {
					view.displayMessage("Oooops");
					return "o";
				} else { 
					view.displayMessage("Wooops");
					return "x";
				}
		}
		
	},

	getHit: function(guess) {
		var loc = this.cells.locations;
		var check = this.cells.hits;
		for (var i =0; i < loc.length; i++ ) {
			var index = loc.indexOf(guess);
			if (index >= 0) {
				check[index] = this.twoVariant();
					view.displayChar(guess);
			} 
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
