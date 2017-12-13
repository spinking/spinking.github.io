// Представление

var view = {
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},
	displayChar: function(guess, symbol) {
		var charLocation = document.getElementById(guess);
		charLocation.innerHTML = symbol;
	}
}

// Модель

var model = {
	counter: 0,
	cells: {
		locations: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
		hits: ["", "", "", "", "", "", "", "", ""]
	},

// Функция возвращает х или о в зависимости от того, четный или нечетный клик.

	twoVariant: function() {
				this.counter++;
				/*console.log(this.counter);*/
				if (controller.guesses % 2 === 0) {
					view.displayMessage("X turn");
					return "o";
				} else {
					view.displayMessage("O turn");
					return "x";
				}
	},

/*метод принимает id клика, сверяет его с массивом значений, если по указанному id
 нет еще значения присваивает ему результат функии twoVariant.
 дальше инициализирует метод представления, отвечающий за вывод результата функии twoVariant на экран.
 дальше инициализирует метод, отслеживающий победные варианты.*/

	getHit: function(guess) {
		var loc = this.cells.locations;
		var check = this.cells.hits;
		for (var i = 0; i < loc.length; i++ ) {
			var index = loc.indexOf(guess);
			if (index >= 0 && check[index] == "") {
				check[index] = this.twoVariant();
					view.displayChar(guess, check[index]);
					this.collisions();
					
					/*console.log(guess);
					console.log(this.cells.hits);*/
			} 
		}

	},

/*метод отслеживает победные варианты.*/

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
		} else if (this.counter >= 9) {
			view.displayMessage("End this Game!");
		}
	}
}

// Контроллер

var controller = {
	guesses: 0,

// метод считает количество кликов и обращается к модели.

	processGuess: function(guess) {
		this.guesses++;
		model.getHit(guess);

	}
};

// Обработчик событий

function init() {
	var clicker = document.getElementsByTagName("td");
	for (var i = 0; clicker.length; i++) {
		clicker[i].addEventListener("click", value, false);
	}

// Функция получает элемент таблицы, и передает его id в контроллер.

	function value(thisClick) {
	var guess = thisClick.target.id;
	controller.processGuess(guess);
	}
}

window.onload = init;