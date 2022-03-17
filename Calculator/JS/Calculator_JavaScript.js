const Calculator = { //Creates an object to keep track of values.
    displayValue: '0', //This displays 0 on the screen.
    firstOperand: null, //This will hold the first operand for any expressions, we set it to null for now.
    waitSecondOperand: false, //This checks whether or not the second operand has been input.
    operator: null, //This will hold the operator, we set it to null for now.
};

function inputDigit(digit) { //This modefies values each time a button is clicked.
    const { displayValue, waitSecondOperand } = Calculator;
    if (waitSecondOperand === true) { //Checks to see if waitSecondOperand is true and sets displayValue to the key that was clicked.
        Calculator.displayValue= digit; 
        Calculator.waitSecondOperand= false;
    } else {
        Calculator.displayValue= displayValue === '0' ? digit : displayValue + digit; //Overwrites displayValue if the current value is 0, otherwise it adds onto it.
    }
}

function inputDecimal(dot) { //This section handles decimal points.
    if (Calculator.waitSecondOperand === true) return; //this ensures that accidental clicking of the decimal point doesn't cause bugs in the operation.
    if (!Calculator.displayValue.includes(dot)) {
        Calculator.displayValue += dot; //We're saying that if the displayValue doesn't contain a decimal point that we do want to add decimal point.
    }
}

function handleOperator(nextOperator) { //This section handles the operators.
    const { firstOperand, displayValue, operator } = Calculator
    const valueOfInput= parseFloat(displayValue); //When an operator key is pressed, we convert the current number displayed on the screen to a number and then store the result in calculator.firstOperand if it doesn't already exist.
    if (operator && Calculator.waitSecondOperand) { //Checks if an operator already exists and if waitSecondOperand is true, then updates the operator and exits from the funtion.
        Calculator.operator= nextOperator;
        return;
    }
    if (firstOperand == null) {
        Calculator.firstOperand= valueOfInput;
    } else if (operator) {
        const valueNow= firstOperand || 0; //Checks if a value already exists.
        let result= performCalculation[operator] (valueNow, valueOfInput); //If operator exists, property lookup is performed for the operator in the performCalculation object and the function that matches the operator is executed.
        result= Number(result).toFixed(9) //Here we're adding a fixed amount of numbers after the decimal.
        result= (result * 1).toString() //This removes any trailing 0's.
        Calculator.displayValue= parseFloat(result);
        Calculator.firstOperand= parseFloat(result);
    }
    Calculator.waitSecondOperand= true;
    Calculator.operator= nextOperator;
}

const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand
};

function calculatorReset() {
    Calculator.displayValue= '0';
    Calculator.firstOperand= null;
    Calculator.waitSecondOperand= false;
    Calculator.operator= null;
}

function updateDisplay() { //This function updates the screen with the contents in displayValue.
    const display= document.querySelector('.calculatorScreen');
    display.value= Calculator.displayValue;
}

updateDisplay(); //This section monitors button clicks.
const keys= document.querySelector('.calculatorKeys');
keys.addEventListener('click', (event) => {
    const { target } = event; //The target variable is an object that represents the element that was clicked.
    if (!target.matches('button')) { //If the element that was clicked on is not a button, exit the function.
        return;
    }
    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains('allClear')) { //Ensures that AC clears the numbers from the Calculator.
        calculatorReset();
        updateDisplay();
        return;
    }
    inputDigit(target.value);
    updateDisplay();
})