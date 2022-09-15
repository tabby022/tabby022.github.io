console.log("calc JS loaded");

const result = document.getElementById("result");

function equation1() {
    result.innerHTML = 3 + 3;
}

function equation2() {
    result.innerHTML = 2 + 2 ;
}

function equation3(a, b) {
    result.innerHTML = a + b;
    var answerField = 50 + 5
    
}


function bigOlNumber(c, d) {
    var x = c * d;
    result.innerHTML = x;
}

