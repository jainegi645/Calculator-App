const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,

};


//function to update the calculator display
function updateDisplay() {
    //select the elememnt with class of 'calculator-screen'

    const display = document.querySelector('.calculator-screen');
    //update the value of the element with the contents of 'displayValue'
    display.value = calculator.displayValue;
}

updateDisplay();


//function to handle key presses
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {

    //access the clicked element
    const target = event.target;

    //check if the clicked element is a button.
    //if not, exit from the function 

    if (!target.matches('button')) {
        return;
    }


    //check if target's class selector is 'operator'
    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }  


    //check if target's class selector is 'decimal'
    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }


    //check if target's class selector is 'all-clear'
    if (target.classList.contains('all-clear')) {
        resetCalculator();
        updateDisplay();
        return;
    }


    //if anything else is clicked excluding above, send its target value to `inputDigit` function
    inputDigit(target.value);

    //update the  calculator display 
    updateDisplay();

});


//display clicked value on the screen
function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;

    if(waitingForSecondOperand === true){
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    }
    else{
    // Overwrite `displayValue` if the current value is '0' otherwise append to it
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
    console.log(calculator);
}


// to enter decimal on the screen
function inputDecimal(dot) {
    //if the `displayValue` property does not contain a decimal point
    if (!calculator.displayValue.includes(dot)) {
        //append the decimal point 

        calculator.displayValue += dot;
    }
}


//Handling operators
function handleOperator(nextOperator) {
    //Destructure the properties on the calculator object
    const { firstOperand, displayValue, operator} = calculator

   // `parseFloat` converts the string contents of `displayValue`
  // to a floating-point number
    const inputValue = parseFloat(displayValue);

//when two or more operaotr enterd consecutively,
//if `operator` exists and `waitingforsecondoperator` is set to true
//replace value of operator with new operator, and function exits so no calculation is perfomed
if (operator && calculator.waitingForSecondOperand)  {
    calculator.operator = nextOperator;
    console.log(calculator);
    return;
  }

 //verify that 'fistOPerand' is null and that the 'inputValue' 
 //is not a 'NaN' value
 if(firstOperand === null && !isNaN(inputValue)){

    //update the firstoperand property
    calculator.firstOperand = inputValue;
 } 
 else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);

    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }

 calculator.waitingForSecondOperand = true;
 calculator.operator = nextOperator;

 console.log(calculator);
}


// When the user hits an operator after 
//entering the second operand

function calculate(firstOperand, secondOperand, operator){
    if(operator === '+'){
        return firstOperand + secondOperand;
    } 
    else if (operator === '-'){
        return firstOperand - secondOperand;
    }
    else if(operator === '*'){
        return firstOperand * secondOperand;
    }
    else if(operator === '/'){
        return firstOperand / secondOperand;
    }
    return secondOperand;

}

//Reset the calculator
function resetCalculator(){
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    console.log(calculator);
}