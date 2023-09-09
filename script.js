
let value;

const allButtons = document.querySelectorAll('.buttons');

function displayValue (event) {

    console.log('Button clicked');

    value = event.target.value;

    document.getElementById('display-number').textContent = value;

    console.log(value);

}


allButtons.forEach(button => {
    button.addEventListener('click', displayValue);
})


