function clearscreen() {
    document.getElementById("result").value ="";    
}


//displays value

function display(value) {
    document.getElementById("result").value += value ;
}

function calculate() {
    let p = document.getElementById("result").value;
    let q = eval(p);
    document.getElementById("result").value = q;
}

// The eval() function is used in JavaScript to evaluate the expression passed to it as a parameter. It returns the evaluated result of the mathematical expression.