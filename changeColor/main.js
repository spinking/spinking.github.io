
/*
thisEvent.addEventListener("changeColor", colorChangeFunc);

function colorChangeFunc(event) {
	var elem = document.getElementById('thisEvent');
	var bgColor = getComputedStyle(elem);
	var a = bgColor.backgroundColor.split("(")[1].split(")")[0];
	a = a.split(',');
	var b = a.map(function(x) {
		x= parseInt(x).toString(10);
		return (x.length==1) ? "0" + x : x;
	});
	b = b.join("");

	alert(b);
}





 var event = new CustomEvent("changeColor", {
 	detail: { name: "Вася" },
 });
 event.color = {
	color1: "black",
	color2: "red"
}

thisEvent.dispatchEvent(event);*/

var elem = document.getElementById('thisEvent');
var button = document.getElementById('thisButton');

/*function createMessageUnder(elem, text) {
	var coords = elem.getBoundingClientRect();
	var message = document.createElement('div');
	message.style.cssText = 'position:fixed; color:red';

	message.style.left = coords.left + "px";
	message.style.top = coords.bottom + "px";

	message.innerHTML = text;

	return message;
}*/

/*function addMessage() {
	var message = createMessageUnder(elem, "Hello World!");
	document.body.appendChild(message);
	setTimeout(function() {
		document.body.removeChild(message);
	}, 3000);
}*/
var color1 = 'rgb(128, 0, 0)';
var color2 = 'rgb(255, 255, 0)';


/*возвращаем цвет под fixed элементом*/
function changeItemColor() {
	var coords = elem.getBoundingClientRect();
	var topCoord = coords.top;
	var leftCoord = coords.left;
	var underElem = document.elementFromPoint(topCoord, leftCoord);
	var cssElem = getComputedStyle(underElem);
	console.log(cssElem.backgroundColor);
	return cssElem.backgroundColor;
	/*console.log(cssElem.backgroundColor);*/
}

/*changeItemColor();*/

/*function color16() {
	var backColor = changeItemColor();
	backColor = backColor.split("(")[1].split(")")[0];
	backColor = backColor.split(",");
	var colorNumber = backColor.map(function(x) {
		x = parseInt(x).toString(16);
		return (x.length==1) ? "0" + x : x;
	});
	colorNumber = colorNumber.join("");
	return colorNumber;
}*/


/*сравниваем цвет fixed элемента с background и в случае совпадения цвета, меняем его*/
function checkColor() {
	var thisColor = changeItemColor();
	console.log("thisColor= " + thisColor);
	if (thisColor == color2) {
		elem.style.backgroundColor = color2;/*?? в responsive ежиме все наоборот*/
	} else if (thisColor == color1) {
		elem.style.backgroundColor = color1;
	}
}

/*функция отслеживания скрола*/

window.onscroll = checkColor;

checkColor();

/*button.onclick = addMessage;*/

;(function ( $ , window, document, undefined) {
	var pluginName = 'switchColor',
		defaults = {
			propertyName : "value"
		};

	function Plugin(element, options) {
		this.element = element;
		this.options = $.extend( {}, defaults, options) 

		this.defaults = defaults;
		this._name = pluginName;

		this.init();
	}

	Plugin.prototype.init = function () {
		// Place initialization logic here
        // You already have access to the DOM element and
        // the options via the instance, e.g. this.element 
        // and this.options
	}

	$.fn[pluginName] = function(options) {
		return this.each(function () {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
			}
		});
	}
})(jQuery, window, document);