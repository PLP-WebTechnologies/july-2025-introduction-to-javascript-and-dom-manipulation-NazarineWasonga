// Part 1: Variables & Conditionals
document.getElementById("check-age-btn").addEventListener("click", function() {
    let age = prompt("Enter your age:");
    age = Number(age);

    if (isNaN(age)) {
        document.getElementById("age-result").textContent = "Please enter a valid number.";
    } else if (age >= 18) {
        document.getElementById("age-result").textContent = "You are an adult.";
    } else {
        document.getElementById("age-result").textContent = "You are a minor.";
    }
});

// Part 2: Functions
function calculateSum(a, b) {
    return a + b;
}

function formatResultText(result) {
    return `The result is: ${result}`;
}

document.getElementById("sum-btn").addEventListener("click", function() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let sum = calculateSum(num1, num2);
    document.getElementById("sum-result").textContent = formatResultText(sum);
});

// Part 3: Loops
document.getElementById("loop-btn").addEventListener("click", function() {
    let numberList = document.getElementById("number-list");
    numberList.innerHTML = ""; // Clear old list

    for (let i = 1; i <= 5; i++) {
        let li = document.createElement("li");
        li.textContent = i;
        numberList.appendChild(li);
    }
});

// Part 4: DOM Manipulation
document.getElementById("toggle-color-btn").addEventListener("click", function() {
    document.body.classList.toggle("highlight");
});

document.getElementById("dynamic-text").addEventListener("click", function() {
    this.textContent = "You clicked me!";
});

// Extra CSS for DOM toggle effect
let style = document.createElement("style");
style.innerHTML = `.highlight { background-color: lightblue; }`;
document.head.appendChild(style);
