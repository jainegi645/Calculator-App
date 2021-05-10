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
        console.log('operator', target.value);
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
        console.log('clear', target.value);
        return;
    }


    //if anything else is clicked excluding above, send its target value to `inputDigit` function
    inputDigit(target.value);

    //update the  calculator display 
    updateDisplay();

});


//display clicked value on the screen
function inputDigit(digit) {
    const { displayValue } = calculator;
    // Overwrite `displayValue` if the current value is '0' otherwise append to it
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
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
    const inputVlaue = parseFloat(displayValue);

}
