// Closures
function show(variable){
    let c = 3
    return function func(variable2){
        console.log(variable);
        console.log(variable2);
        console.log(c);
        
    }
}

let a=show(1)
a(2)