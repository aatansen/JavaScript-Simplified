// Normal function
function sum(a,b){
    return a+b
}
console.log(sum(2,3));

// Arrow function
let sumArrow= (a,b)=>{
    return a+b
}
console.log(sumArrow(4,3));

// Normal function 02
function showName(name){
    console.log(name);
}
showName("Tansen")

// Arrow function 02
let showNameArrow=(name)=>{
    console.log(name);
}
showNameArrow("tansen")

// Arrow function more simplified
let sumArrow2=(a,b)=>a+b
console.log(sumArrow2(2,2));

// Normal function with no parameter/argument
function hi(){
    console.log("Hi");
}
hi()

// Arrow function with no parameter/argument
let hiArrow=()=>console.log("Hi")
hiArrow()

// Normal callback function
function func(a,callback){
    callback(a)
}
func(3,function showNum(num){
    console.log(num);
})

// Arrow callback function
function func2(a,callback){
    callback(a)
}
func2(4,num=>console.log(num))