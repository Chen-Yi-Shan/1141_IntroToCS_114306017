var num1Input = document.getElementById('num1');
var num2Input = document.getElementById('num2');
var operatorSelect = document.getElementById('operator');
var calcBtn = document.getElementById('calcBtn');
var resultDisplay = document.getElementById('resultDisplay');


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error (Div by 0)";
    }
    return a / b;
}


function calculate() {
    // input
    var n1 = parseFloat(num1Input.value);
    var n2 = parseFloat(num2Input.value);
    var op = operatorSelect.value;

    if (isNaN(n1) || isNaN(n2)) {
        resultDisplay.innerText = "Result = Please enter valid numbers";
        return;
    }

    let result = 0;

    switch (op) {
        case '+':
            result = add(n1, n2);
            break;
        case '-':
            result = subtract(n1, n2);
            break;
        case '*':
            result = multiply(n1, n2);
            break;
        case '/':
            result = divide(n1, n2);
            break;
        default:
            return;
    }

    // 顯示結果 (如果是數字則取小數點後兩位，如果是錯誤訊息則直接顯示)
    if (typeof result === 'number') {
        resultDisplay.innerText = "Result = " + result.toFixed(2);
    } else {
        resultDisplay.innerText = "Result = " + result;
    }
}

calcBtn.addEventListener('click', calculate);