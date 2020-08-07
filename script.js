// CALCULATING RESULTS
const operate = (num1, operator, num2) => {
    let result;
    switch (operator) {
        case '+': result = Number(num1) + Number(num2);
        break;
        case '-': result = Number(num1) - Number(num2);
        break;
        case 'x': result = Number(num1) * Number(num2);
        break;
        case '÷': result = Number(num1) / Number(num2);
        break;
        case '%': result = ((Number(num1) * 0.01) * (Number(num2)));
    }
    return result;
};

//  HANDLING INPUTS & BUTTON FUNCTIONS

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

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (operator.length<1 && previousValue.innerText.length<1) {
            if (button.innerText == '.' && num1.includes('.')) return;
            num1 += button.innerText;
            currentValue.innerText = num1
        }
        if (operator.length==1) {
            if (button.innerText == '.' && num2.includes('.')) return;
            num2 += button.innerText;
            currentValue.innerText = num1 + ' ' + operator + ' ' + num2;
            return
        }
        if (previousValue.innerText.includes('=')) {
            if (button.innerText == '.' && num1.includes('.')) return;
            previousValue.innerText = previousAnswer;
            num1 += button.innerText;
            currentValue.innerText = num1;
        }
})})

operandButtons.forEach(button => {
    button.addEventListener("click", () => {
    if (operator.length<1 && num1.length>0) {
        operator += button.innerText;
        currentValue.innerText = num1 + ' ' + operator;
    } if (operator.length<1 && num1.length<1 && answer.toString().length>0) {
        previousValue.innerText = previousAnswer;
        num1 = answer;
        operator += button.innerText;
        currentValue.innerText = num1 + ' ' + operator;
    } if (operator.length == 1 && num2.length>0) {
        answer = operate(num1, operator, num2);
        previousAnswer = num1 + ' ' + operator + ' ' + num2 + ' = ' + answer
        previousValue.innerText = previousAnswer;
        num1 = answer;
        num2 = ''
        operator = button.innerText;
        currentValue.innerText = num1 + ' ' + operator;
    }
})})

equalsButton.addEventListener("click", () => {
    if (operator.length<1) return;
    num3 = num1 + ' ' + operator + ' ' + num2 + ' ' + '=';
    previousValue.innerText = num3;
    answer = operate(num1, operator, num2);
    currentValue.innerText = answer;
    previousAnswer = num1 + ' ' + operator + ' ' + num2 + ' = ' + answer
    num1 = '';
    num2 = '';
    num3 = '';
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


//  KEYBOARD USAGE
document.addEventListener("keydown", (e) => {
    if (e.key == '=' || e.key == 'Enter') {
        equalsButton.click()
    } if (e.key == 'Escape' || e.key == 'Backspace') {
        clearButton.click()
    } if (e.key <= 9 && e.key >= 0) {
        document.querySelector(`[id='${e.key}']`).click()
    } if (e.key == '.') {
        document.querySelector('#decimal').click()
    } if (e.key == '÷' || e.key == '/') {
        document.querySelector('#divide').click()
    } if (e.key == '+') {
        document.querySelector('#plus').click()
    } if (e.key == '-') {
        document.querySelector('#minus').click()
    } if (e.key == '*' || e.key == 'x' || e.key == 'X') {
        document.querySelector('#multiply').click()
    } if (e.key == '÷' || e.key == '/') {
        document.querySelector('#divide').click()
    } if (e.key == '%') {
        document.querySelector('#percent').click()
    } else return
})

