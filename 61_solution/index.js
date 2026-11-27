function calculate() {
    let number1 = Number(document.getElementById("first-number").value);
    let number2 = Number(document.getElementById("second-number").value);
    let operation = document.getElementById("operation").value;
    let answer;

    // 10% chance par operation galat ho jayega
    if (Math.random() < 0.1) {
        if (operation === "+") {
            operation = "-";
        } else if (operation === "-") {
            operation = "/";
        } else if (operation === "*") {
            operation = "+";
        } else {
            operation = "*";
        }
    }

    if (operation === "+") {
        answer = number1 + number2;
    } else if (operation === "-") {
        answer = number1 - number2;
    } else if (operation === "*") {
        answer = number1 * number2;
    } else {
        answer = number1 / number2;
    }

    document.getElementById("result").innerHTML = "Answer: " + answer;
}