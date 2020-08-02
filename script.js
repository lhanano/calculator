// function for main operator aka calulator 
const operate = (num1, operator, num2) => {
    let result;
    switch (operator) {
        case '+': result = add(Number(num1), Number(num2));
        break;
        case '-': result = subtract(Number(num1), Number(num2));
        break;
        case 'x': result = multiply(Number(num1), Number(num2));
        break;
        case '÷': result = divide(Number(num1), Number(num2));
    }
    return result;
};

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

function multiply(a, b) {
    return a * b;
}

function multiplyArray (array) {
	array.reduce((accu, val) => result = accu * val);
	return result;
}

function divide(a,b) {
    return a / b;
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
let num1 = '';
let num2 = '';
let num3 = '';
let operator = '';
const currentValue = document.querySelector('.currentValue');
const previousValue = document.querySelector('.previousValue');
const buttons = document.querySelectorAll('button');
const clickButton = buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.innerText === "DEL") {
            let str = currentValue.innerText;
            let str2 = str.slice(0, str.length-1);
            currentValue.innerText = str2;
            return;
        }
        if (!isNaN(button.innerText) && operator.length<1) {
            num1 += button.innerText;
            currentValue.innerText = num1;}
        if (isNaN(button.innerText) && operator.length<1) {
            operator += button.innerText;
            previousValue.innerText = num1;
            currentValue.innerText = operator;
        }
        if (!isNaN(button.innerText) && operator.length==1) {
            previousValue.innerText = num1 + ' ' + operator;
            num2 += button.innerText;
            currentValue.innerText = num2;
        }
        if (button.innerText === "=") {
            num3 = num1 + ' ' + operator + ' ' + num2
            previousValue.innerText = num3;
            let answer = operate(num1, operator, num2);
            currentValue.innerText = answer;
        }
        if (button.innerText === "C") {
            num1 = '';
            num2 = '';
            num3 = '';
            operator = '';
            previousValue.innerText = '';
            currentValue.innerText = '';
        }
    })});


/*
window.addEventListener("keydown", (e) => {keyPress(e)})

function keyPress(e) {
    const button = document.querySelector(`#${e.keyCode}`);
    if (!button) return;
    button.classList.add("buttonDown");
}
*/