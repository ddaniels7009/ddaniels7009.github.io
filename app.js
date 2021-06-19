
const displayContainer = document.getElementById('screen');


const button0 = document.getElementById('0');
const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');
const button4 = document.getElementById('4');
const button5 = document.getElementById('5');
const button6 = document.getElementById('6');
const button7 = document.getElementById('7');
const button8 = document.getElementById('8');
const button9 = document.getElementById('9');
const clear = document.getElementById('clear');
const plus = document.getElementById('sum');
const minus = document.getElementById('minus');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const equals = document.getElementById('equals');

button0.addEventListener('click', function () { display("0"); setOperand("0") });
button1.addEventListener('click', function () { display("1"); setOperand("1") });
button2.addEventListener('click', function () { display("2"); setOperand("2") });
button3.addEventListener('click', function () { display("3"); setOperand("3") });
button4.addEventListener('click', function () { display("4"); setOperand("4") });
button5.addEventListener('click', function () { display("5"); setOperand("5") });
button6.addEventListener('click', function () { display("6"); setOperand("6") });
button7.addEventListener('click', function () { display("7"); setOperand("7") });
button8.addEventListener('click', function () { display("8"); setOperand("8") });
button9.addEventListener('click', function () { display("9"); setOperand("9") });
clear.addEventListener('click', function () { clearAll(); });
plus.addEventListener('click', function () { display(" + "); setOperand("+") });
minus.addEventListener('click', function () { display(" - "); setOperand("-") });
divide.addEventListener('click', function () { display(" / ");; setOperand("/") });
multiply.addEventListener('click', function () { display(" x "); setOperand("x") });
equals.addEventListener('click', function () { display(" = "); setOperand("=") });


clear.classList.add("clear");
plus.classList.add("operator");
minus.classList.add("operator");
divide.classList.add("operator");
multiply.classList.add("operator");
equals.classList.add("equals");


let displayValue = 0;

let operand1 = "";
let operand2 = "";
let operators = [];
let result = 0;
let count = 0;
let firstTime = true;

let operatorCount = 0;
let operatorPresent = false;


    

function setOperand(input) {

    // set the initial operand
    if (firstTime == true && Number.isInteger(parseInt(input))) {
        operand1 += input;
        //console.log("Operand 1: " + operand1)
    }


    // set the initital operator
    if ((input == "+" || input == "-" || input == "/" || input == "x") && firstTime == true) {
        operators[count] = input;
        //console.log("Operator: " + operators[count]);
        firstTime = false;
        count++;
        operatorCount++;
        operatorPresent = true;
    }


    else if ((input == "+" || input == "-" || input == "/" || input == "x") && firstTime == false) {
        operators[count] = input;
        count++;
        operatorCount++;
    }

    else if (operatorCount > 0 && (input != "+" && input != "-" && input != "/" && input != "x") && input != "=" && operand1 != "" && Number.isInteger(parseInt(input))) {
        operand2 += input;
        //console.log("Operand 2: " + operand2)
    }
    else if (operatorPresent == true && operatorCount == 0 && (input != "+" && input != "-" && input != "/" && input != "x") && input != "=" && operand1 != "" && Number.isInteger(parseInt(input))) {
        operand2 += input;
        //console.log("Operand 2: " + operand2)
    }


    // Operate if user inputs an '=' sign
    if (input == "=") {
        if(operand1 == "" || operand2 == ""){
            clearAll();
            return;
        }
        //console.log("Operand 1 Second Round: " + operand1)
        //console.log("op count-1: " + operators[0] );
        result = operate(operand1, operand2, operators[count - 1]);
        operand1 = result;
        displayEquals(result);
    }

    // Operate if user puts a second operator
    if ((input == "+" || input == "-" || input == "/" || input == "x") && operand2 != "" && operators[count - 1] != undefined) {// CHANGE BACK TO "2" IF ERRORS!!!!!!
        console.log("fuck")
        console.log("operand1::" + operand1)
        console.log("op coint" + operatorCount)
        result = operate(operand1, operand2, operators[count - 2]);
        operand1 = result;

    }


}

function clearAll() {

    displayValue = 0;

    operand1 = "";
    operand2 = "";
    operators = [];
    result = 0;
    count = 0;
    firstTime = true;
    display("clear");
    operatorPresent = false;
    operatorCount = 0;


}

function reset() {

    operatorCount = 0;
    operand2 = "";
    result = 0;

}



function operate(operand1, operand2, operators) {


    console.log("After Operator: " + operators);
    console.log("After Op1: " + operand1);
    console.log("After Op2: " + operand2);

    let x = parseFloat(operand1);
    let y = parseFloat(operand2);
    let z = operators;

    reset();

    if (z == "+") {

        return (sum(x, y));
    }
    if (z == "-") {

        return (subtract(x, y));
    }
    if (z == "/") {
        if(x==0 && y ==0){
            alert("Nice try buddy.")
            
            return 0;
        }
        return (division(x, y));
    }
    if (z == "x") {

        return (multiplication(x, y));
    }
}

// Set display value based on user's button presses
function display(inputValue) {

    if (inputValue == "clear") {
        displayValue = 0;
        inputValue = 0;
    }
    else if (displayValue == 0 && operand1 !="") {
        displayValue += inputValue;
        
        
    }
    else if (displayValue == 0) {
        displayValue = inputValue;
        
    }
    else {
        displayValue += inputValue;
    }
    //console.log(displayValue);

    displayContainer.innerText = (displayValue)
}

function displayEquals(inputValue) {

    displayValue = result;
    //displayValue = displayValue.substring(0, displayValue.length-2);
    displayContainer.innerText = (inputValue)

}

// Sum funtion
function sum(operand1, operand2) {

    return operand1 + operand2;

}
function subtract(operand1, operand2) {

    return operand1 - operand2;

}
function division(operand1, operand2) {

    return operand1 / operand2;

}
function multiplication(operand1, operand2) {

    return operand1 * operand2;

}

function functionality() {
    alert("Button functionality has not yet been added.")
}