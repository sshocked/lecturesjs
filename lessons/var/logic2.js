let fixComision = 100;
let percentComision = 0.02;

let amount = 1000;
let commission = fixComision + (amount * percentComision);

//console.log(commission);

let test = function () {
    return test3(100, test2(3232));
}

function test2(num) {
    return num / 2;
}

function test3 (a, b) {
    return a + b;
}


let c = test();
console.log(c);