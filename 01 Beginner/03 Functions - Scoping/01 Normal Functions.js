// Using `function` keyword
function sayHi(){
    console.log("Hi");
}
sayHi()

function sayName(){
    console.log("Tansen");
}
sayName()

// Function parameter sum(a,b) / argument sum(2,4)
function sum(a,b){
    console.log(a+b);
}
sum(2,4)

// Create a function that takes one argument (a person name) and print that out
function showName(name){
    console.log(name);
}
showName("Tansen")
showName() // output undefined

// Return function value
function sum2(a,b){
    return a+b
}
let result = sum2(3,4)
console.log(result);