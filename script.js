const calculator = {
displayValue: '0',
firstOperand: null,
waitingForSecondOperand:false,
operator: null,

};

//function to update the calculator display

function updateDisplay(){
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

if(!target.matches('button')){
    return;
}

//check if target's class selector is 'operator'
if(target.classList.contains('operator')){
    console.log('operator',target.value);
    return;
}

//check if target's class selector is 'decimal'
if(target.classList.contains('decimal')){
    console.log('decimal',target.value);
    return;
}

//check if target's class selector is 'all-clear'
if (target.classList.contains('all-clear')) {
    console.log('clear', target.value);
    return;
  }

  //if anything else is clicked excluding above, console log it as 'digit'
  console.log('digit', target.value);

});