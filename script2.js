//Currying
const multiply = (a,b) => a*b;
const curriedMultiply = (a) => (b) => a * b;
const multiply5 = curriedMultiply(5);
myltiply5(3);
15

//compose
const compose = (f,g) => (a) => f(g(a));  // f(g(5)) ==> f(6) ==> 7
const sum = (num) => num+1;
compose(sum,sum)(5);

//Avoiding side effect:
//Deterministic

//Advanced Arrays

const array = [1, 2, 3, 10,];
const double = [];
const newArray = array.forEach((num)=> {
    double.push(num*2);  //pushing new number to array
})

//map, filter. reduce  // map transforms array vs forEach just walks trough array and does some actions
const mapArray = array.map((num) => {
    return num*2;
})
//const mapArray = array.map(num => num*2); krotsza opcja

//filter
const filterArray = array.filter(num => num > 5);
// const filterArray = array.filter(num => num === 3);

//reduce
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0);
console.log(reduceArray);

