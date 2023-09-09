
let buttonValue = '';
let currentNumber = '';
let displayValue = "";
let operator = ''; 
let result = 0;
let isError = false;
let clickedOperator = false;
let clickedEquals = false;
// declaring global variables.

const allButtons = document.querySelectorAll('.buttons');
const acButton = document.getElementById('ac-btn');
// selecting all buttons with the .buttons class and declaring them under one variable.

function calculate() {

    if (currentNumber != 0) {
        // ensuring all variables have a value.

      switch (operator) {
        case '+':
          result = parseFloat(currentNumber) + parseFloat(displayValue);
          break;
        case '-':
          result = parseFloat(currentNumber) - parseFloat(displayValue);
          break;
        case '*':
          result = parseFloat(currentNumber) * parseFloat(displayValue);
          break;
        case '/':
          if (parseFloat(displayValue) === 0) {
            // Minor error-handling if divided by 0.
            displayValue = 'Error';
            isError = true;
            acButton.style.backgroundColor = '#D6605C';
            return;
          }
          result = parseFloat(currentNumber) / parseFloat(displayValue);
          break;
        default:
          break;
      }
        displayValue = result.toString().slice(0,9);
        // returning a string and slicing out the initial 9-numbers in case a division causes a lot of decimals.
    }
    return;
  }
 

function retrieValue (event) {

    buttonValue = event.target.value;
    // retrieve the value from button which is clicked.

    if (buttonValue === 'ac') {
        displayValue = "";
        isError = false;
        acButton.style.backgroundColor = '#EDF0FA';
    }
    // Linked to the error-handling below. Only the AC-button will return the isError state to false, and reset 'Error' in the window.

    else if (isError) {
        return;
    }
    // Prevents anything else from occupying the display until it's been reset by the AC-button.

    else if (buttonValue === '=') {
        calculate();
        if (displayValue !='Error') {
        document.getElementById('display-number').textContent = displayValue;
        currentNumber = displayValue;
        console.log(currentNumber);
        displayValue = "";
        clickedEquals = true;
        return;
    }
   }

    else if (!isNaN(buttonValue)) {

        if (clickedOperator === true) {
            displayValue = "";
            displayValue += buttonValue;
            clickedOperator = false;
        } else {
            displayValue += buttonValue;
        }}
        
        else if (buttonValue === "+" || buttonValue === "-" || buttonValue === "/" || buttonValue === "*") {

          if (clickedEquals === false) {
            currentNumber = displayValue;
            }
            console.log(currentNumber);
            displayValue = buttonValue;
            operator = buttonValue;
            clickedOperator = true;
            clickedEquals = true;
    }    

    if (displayValue === 'Error' || displayValue.length >= 9) {
    displayValue = "Error";
    isError = true;
    acButton.style.backgroundColor = '#D6605C';
   }
   // Error-handling, to make sure everything fits in the display window.


   document.getElementById('display-number').textContent = displayValue;
   // Finally, the display is updated.
}

allButtons.forEach(button => {
    button.addEventListener('click', retrieValue);
})


allButtons.forEach(button => {
    button.addEventListener('click', displayValue);
})


