let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function calculateTrig(func) {
    try {
        let radians = parseFloat(display.value) * (Math.PI / 180);
        display.value = Math[func](radians).toFixed(6);
    } catch {
        display.value = "Error";
    }
}

function calculateLog() {
    try {
        display.value = Math.log10(parseFloat(display.value)).toFixed(6);
    } catch {
        display.value = "Error";
    }
}

function calculateExp() {
    try {
        display.value = Math.exp(parseFloat(display.value)).toFixed(6);
    } catch {
        display.value = "Error";
    }
}

function calculateSquare() {
    try {
        display.value = Math.pow(parseFloat(display.value), 2);
    } catch {
        display.value = "Error";
    }
}
