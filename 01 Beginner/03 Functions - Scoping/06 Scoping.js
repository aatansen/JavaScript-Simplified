// Scoping
function sayHi(name) {
    console.log("Hi " + name);
}

let name = "Tansen"
sayHi(name)

// local scope
function sayHi2(name) {
    console.log("Hi " + name + a);
}

let a = 1
sayHi2(name)

// {} scope
{
    let b= 2
    console.log(b);
}
{
    let c= 4
    console.log(c);
    // console.log(b); // error
}
{
    let d=5
    {
        let e = 6
        console.log(e,d);
    }
}
