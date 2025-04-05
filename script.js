let display = document.getElementById("display");
let currentValue = "";

function appendValue(value) {
    if (display.value === "Error") {
        display.value = "";
    }
    if (value === 'x') {
        display.value += '*';
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        // Replace all instances of × with * for evaluation
        let expression = display.value.replace(/x/g, '*');
        let result = eval(expression);
        
        // Check if result is a finite number
        if (!isFinite(result)) {
            throw new Error("Invalid calculation");
        }
        
        // Format the result to avoid excessive decimal places
        display.value = Number.isInteger(result) ? result : parseFloat(result.toFixed(8));
    } catch {
        display.value = "Error";
    }
}

function calculateTrig(func) {
    try {
        let value = parseFloat(display.value);
        if (isNaN(value)) throw new Error("Invalid input");
        
        let radians = value * (Math.PI / 180);
        let result = Math[func](radians);
        
        display.value = parseFloat(result.toFixed(8));
    } catch {
        display.value = "Error";
    }
}

function calculateLog() {
    try {
        let value = parseFloat(display.value);
        if (value <= 0) throw new Error("Invalid input for logarithm");
        
        let result = Math.log10(value);
        display.value = parseFloat(result.toFixed(8));
    } catch {
        display.value = "Error";
    }
}

function calculateExp() {
    try {
        let value = parseFloat(display.value);
        if (isNaN(value)) throw new Error("Invalid input");
        
        let result = Math.exp(value);
        if (!isFinite(result)) throw new Error("Result too large");
        
        display.value = parseFloat(result.toFixed(8));
    } catch {
        display.value = "Error";
    }
}

function calculateSquare() {
    try {
        let value = parseFloat(display.value);
        if (isNaN(value)) throw new Error("Invalid input");
        
        let result = Math.pow(value, 2);
        if (!isFinite(result)) throw new Error("Result too large");
        
        display.value = parseFloat(result.toFixed(8));
    } catch {
        display.value = "Error";
    }
}

function calculateSquareRoot() {
    try {
        let value = parseFloat(display.value);
        if (value < 0) throw new Error("Cannot calculate square root of negative number");
        if (isNaN(value)) throw new Error("Invalid input");
        
        let result = Math.sqrt(value);
        display.value = parseFloat(result.toFixed(8));
    } catch {
        display.value = "Error";
    }
}
