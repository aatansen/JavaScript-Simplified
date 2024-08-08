// Stack Overflow Error 
function printHi(){
    console.log("Hi");
    printHi()
}
printHi()

// Example 01 countdown
// for loop 
for (let i=1;i<=10;i++){
    console.log(i);
}

// using recursion 
function printNumber(number){
    if (number>10) return
    console.log(number);
    printNumber(number+1)
    // console.log(number);
}
printNumber(1)

function countDown(num){
    if (num<0){
        return console.log("Whats up");
        
    }
    console.log(num);
    countDown(num-1)
    
}
countDown(10)

// Example 02 sum
function sum(num){
    if (num<=0){
        return 0
    }
    return num+sum(num-1)
}
console.log(sum(5));

// Example 03 person names 
const person={
    name:"Tansen",
    friend:{
        name:"Boch",
        friend:{
            name:"Shakil",
        }
    }
}

let currentPerson=person

while(currentPerson!=null){
    console.log(currentPerson.name);
    currentPerson=currentPerson.friend
    
}

// using recursive
function showName(currentPerson){
    if (currentPerson==null){
        return
    }
    console.log(currentPerson.name);
    showName(currentPerson.friend)
}
showName(person)

