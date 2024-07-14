// Code debugging 
function doStuff(a,b,name){
    console.log(sum(a,b));
    console.log(showName(name));
}

function sum(a,b){
    return a+b
}

function showName(name){
    gg
    return "Hi "+name
}

doStuff(1,2,"Tansen")


// Stack Trace (visible in browser)
/*
Uncaught ReferenceError: gg is not defined
    at showName (scripts.js:12:5)
    at doStuff (scripts.js:4:17)
    at scripts.js:16:1
*/

// Call Stack (visible in browser)
