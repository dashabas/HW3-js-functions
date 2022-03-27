console.log('#4');
function sum(a, b) {
    return a + b;
}
let result = sum(5, 4);
console.log(result);

function subtraction(a, b) {
    return a - b;
}
console.log(subtraction(5, 4));

const multiplication = function (a, b) {
    return a * b;
}
console.log(multiplication(5, 4));

console.log(division(5, 4));
function division(a, b) {
    return a / b;
}



console.log('#5');
function printNumber(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
printNumber(5);



console.log('#6');
function printNumber1(n) {
    for (let i = 5; i >= n; i--) {
        console.log(i);
    }
}
printNumber1(1);



console.log('#7');
function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}
console.log( pow(2, 3) );


function pow1(x, n) {
    return x ** n;
}
console.log(pow1(2, 3));



console.log('#8');
function isBigger(x, y) {
    return x > y;
}
console.log(isBigger(10, 5));



console.log('#9');
function isSmaller(x, y) {
    return x < y;
}
console.log(isSmaller(7, 4));



