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


function multiply(a, b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function power(a, b) {
	return a**b;
}

//functions for buttons

let num1 = '';
let num2 = '';
let num3 = '';
let operator = '';
let answer;
let previousAnswer = '';
const currentValue = document.querySelector('.currentValue');
const previousValue = document.querySelector('.previousValue');
const numberButtons = document.querySelectorAll('.numbers');
const operandButtons = document.querySelectorAll('.operands');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');


numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (operator.length<1 && previousValue.innerText.length<1) {
        num1 += button.innerText;
        currentValue.innerText = num1
        }
        if (operator.length==1) {
            num2 += button.innerText;
            currentValue.innerText = num1 + ' ' + operator + ' ' + num2;
            return
        }
        if (previousValue.innerText.includes('=')) {
            previousValue.innerText = previousAnswer;
            num1 += button.innerText;
            currentValue.innerText = num1;
        }
})})

operandButtons.forEach(button => {
    button.addEventListener("click", () => {
    if (operator.length<1 && num1.length>0) {
        operator += button.innerText;
        currentValue.innerText = num1 + ' ' + operator;}
    if (operator.length<1 && num1.length<1 && answer.toString().length>0) {
        previousValue.innerText = previousAnswer;
        num1 = answer;
        operator += button.innerText;
        currentValue.innerText = num1 + ' ' + operator;
    }
})})

equalsButton.addEventListener("click", () => {
    if (num1.length<1) return;
    num3 = num1 + ' ' + operator + ' ' + num2 + ' ' + '=';
    previousValue.innerText = num3;
    answer = operate(num1, operator, num2);
    currentValue.innerText = answer;
    previousAnswer = num1 + ' ' + operator + ' ' + num2 + ' = ' + answer
    num1 = '';
    num2 = '';
    operator = '';
})

clearButton.addEventListener("click", () => {
    num1 = '';
    num2 = '';
    num3 = '';
    operator = '';
    answer = '';
    previousAnswer = '';
    previousValue.innerText = '';
    currentValue.innerText = '';
})

deleteButton.addEventListener("click", () => {
    let str = currentValue.innerText;
        let str2 = str.slice(0, str.length-1);
        currentValue.innerText = str2;
        return;
})


//function for keyboard
/*
window.addEventListener("keydown", (e) => {keyPress(e)})

function keyPress(e) {
    const button = document.querySelector(`#${e.keyCode}`);
    if (!button) return;
    button.classList.add("buttonDown");
}
*/