const operate = (num1, operator, num2) => {
    let result;
    if (operator === "plus") {result = add(num1, num2);}
    return result;
}

// functions for basic math operators
function add (a, b) {
	return a + b;	
}

function subtract (a, b) {
	return a - b;
}

function sum(array) {
	return array.reduce((total, current) => total + current, 0);
}

function multiply (array) {
	array.reduce((accu, val) => result = accu * val);
	return result;
}

function power(a, b) {
	return a**b;
}

function factorial(num) {
	let i = num;
	let total = num;
	while (i>1) {
		i--;
		total *= i;
	}
	if (num === 0) {return 1};
	return total;
}

//functions for buttons
window.addEventListener("keydown", (e) => {keyPress(e)})

function keyPress(e) {
    const button = document.querySelector(`#${e.keyCode}`);
    if (!button) return;
    button.classList.add("buttonDown");
}


