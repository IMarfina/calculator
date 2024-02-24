function addToDisplay(value) {
    const InputValue = document.getElementById('display');
        const operators = ['+', '-', '*', '/'];
        const lastChar = InputValue.value.slice(-1);
        var newText = InputValue.value + value;

        if (operators.includes(value) && operators.includes(lastChar)) {
          return;
        }
        InputValue.value = newText;
      }
function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    document.getElementById('display').value = eval(document.getElementById('display').value);
}
