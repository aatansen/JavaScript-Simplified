// Hoisting
console.log(sum(2,3));
function sum(a,b){
    return a+b
}

// console.log(sumArrow(3,3)); // error
const sumArrow=(a,b)=>{
    return a+b
}
console.log(sumArrow(3,3));
