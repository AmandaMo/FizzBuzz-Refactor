$(document).ready(function() {

	var number = +window.prompt("Please enter a number","");
		if ((isNaN(number)) || (number % 1 !== 0)){
			var input= +window.prompt("I'm sorry that was not an integer. Please enter a number.","");
				for (var i=1; i<input; i++){
				if (i%5===0 && i%3===0){
						$("body").append("<p>fizzbuzz</p>");
				}
				else if (i%3===0) {
						$("body").append("<p>fizz</p>");
				}
				else if (i%5===0){
						$("body").append("<p>buzz</p>");
				}
				else {
						$("body").append("<p></p>"+i);
			}
		}
	}
	else{
		for (var a=1; a<number; a++){
			if (a%5===0 && a%3===0){
					$("body").append("<p>fizzbuzz</p>");
			}
			else if (a%3===0) {
					$("body").append("<p>fizz</p>");
			}
			else if (a%5===0){
					$("body").append("<p>buzz</p>");
			}
			else {
					$("body").append("<p></p>"+a);
			}
		}
	}
});