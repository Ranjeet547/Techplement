function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let displayValue = document.getElementById('display').value;
    let result = eval(displayValue); // Using eval is not recommended for security reasons, but for a simple calculator it's okay
    document.getElementById('display').value = result;
}
