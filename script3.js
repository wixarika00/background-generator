// reference type

//context vs scope  // scope is created when we see curly brakets
function b() {
    let a=4;
}
console.log(this)

this.alert("hello") === window.alert("hello") //this is what is to the left from the dot

const object4 = {
    a: function() {
        console.log(this);
    }
}
//instantiation  - multiple copies for an object
class Player {
    constructor(name,type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I am ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
    }
    play() {
        console.log(`Weeee I'am a ${this.type}`);
    }
}

const wizard1 = new Wizard('Aga', 'Healer');
const wizard2 = new Wizard('Bob', 'Topper');

//pass by reference vs pass by value
let obj = {a: 'a', b: 'b', c: 'c'}
let clone = Object.assign({},obj);
let clone2 = {...obj}
let superClone =JSON.parse(JSON.stringifly(obj))  //deep clone 


obj.c.deep = 'hahaha';
console.log(clone)
console.log(clone2)
console.log(superClone)

//ES8 //String method
pasStart();
padEnd(); 
'Turtle'.padStart(10);
"          'Turtle'" //10 spaces in total, includig string

const fun = (a,b,c,d,) => {
    console.log(a);
}
fun(1,2,3,4,)

Object.values
Object.entries
Object.keys

let obj = {
    usr1: 'Santa',
    usr2: 'Rud'
}
Object.keys(obj).forEach((key,index)=> {
    console.log(key, obj[key]);
})
usr1: 'Santa',
    usr2: 'Rud'

Object.values(obj).forEach(value => {
    console.log(value);
})
 'Santa',
 'Rud'

 Object.entries(obj).forEach(value => {
    console.log(value);
})
    [usr1: 'Santa',]
    [usr2: 'Rud']

Object.entries(obj),map(value => {
    return value[1]+value[0].replace('username', '');
})
["Santa0", "Rud1"]

///flat

const array = [1,[2,3],[4,5]]
array.flat()

[1,2,3,4,5]

const array = [1,[2,3,4,[5]]]
array.flat(2)  // How many level we want to flat

[1,2,3,4,5]

const array = [1,2,3,4,,,,,,5]
array.flat() // getting rid of empty entries

[1,2,3,4,5]

//trimming
const userEmail1 ='     sjajdk@sjs.sjs'
console.log(userEmail1.trimEnd()) /// trimStart()

//
userProfiles = [['com',23], ['derek',34]]
const obj = Object.fromEntries(userProfiles)

{
    "com": 23,
    "derek": 34
}

Object.entries(obj) //returns original array

// try and catch
try {
    true +'hi'
} catch {
    console.log('you messed up')
}

// Advanced loops
const basket =['apples','oranges', 'grapes']

basket.forEach(item => {
    console.log(item);
})

// for of  (does the same as above)
//Iterating
for (item of basket) {
    console.log(item)
}
apple
oranges
grapes

for (item of 'basket') {
    console.log(item)
}
b a s k e t

//for in loop - see objects properties
// enumerating - is for object

const detailedBasket

for (item in basket) {
    console.log(item)
}

// optional chaining operator ?.

let weight = andrei_pokemon?.pikachu?.weight
console.log(weight3)

//Nullish Coalescing Operator ??

let weight = andrei_pokemon?.pikachu?.power ?? 'no power'
console.log(power)

// set timeout
console.log(1);
setTimeout(()=> {
    console.log('2');
}, 2000)

