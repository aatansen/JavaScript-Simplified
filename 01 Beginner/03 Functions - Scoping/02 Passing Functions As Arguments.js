// printing function
function printVariable(variable){
    console.log(variable);
}
printVariable("A")
console.log(printVariable);

// passing function as argument
function func(x){
    x("Hello")
}
func(printVariable)

// callback
function sumCallback(a,b,callback){
    // return a+b 
    callback(a+b)
}
function handleSum(sum){
    console.log(sum);
}
sumCallback(3,4,handleSum)

// passing callback function
function printGreetings(greet){
    console.log(greet);
}

function helloGreet(name,callback){
    callback("Hello "+name)
}
helloGreet("Tansen",printGreetings)

// passing anonymous function
function greeting2(name,callback){
    callback("Hello "+name)
}

greeting2("Tansen",function(name){
    console.log(name);
})