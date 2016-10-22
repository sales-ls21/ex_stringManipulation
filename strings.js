document.getElementById("enter").addEventListener('click', allFunctions);
var testString = document.getElementById("userString").value;
var insert = document.getElementById('insert');

function reversal(random) {
var testString = document.getElementById("userString").value;
	var randomReverse = testString.split("").reverse().join('');
	// console.log(randomReverse);
	insert.innerHTML = "<p>" + randomReverse + "</p>";
	alphabits(random);
}

function alphabits(random) {
	var testString = document.getElementById("userString").value;
	var randomAlpha = testString.split("").sort().join("")
	insert.innerHTML += "<p>" + randomAlpha + "</p>";
	palindrome(random);
}

function palindrome(random) {
	var testString = document.getElementById("userString").value;
	var compString = testString.split("").reverse().join("");
	if (compString === testString){
		insert.innerHTML += "Your string is a palindrome."
	}
	else 
		 insert.innerHTML += "Your string is not a palindrome."
}

function allFunctions() {
	reversal(testString);
	// testString.innerHTML = "<p>" + randomReverse + "</p>" + "<p>" + randomAlpha + "</p>" +"<p>" + randomPalin + "</p>";
}

// reversal(testString);
// alphabits(testString);
// palindrome(testString);

