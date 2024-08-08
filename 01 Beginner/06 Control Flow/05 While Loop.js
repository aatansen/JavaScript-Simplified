// for loop
for(let i=0;i<5;i++){
    console.log(i);
}

// while loop
let j=0
while(j<5){
    console.log(j);
    j++
}

// Example
const person = {
    name:'Tansen',
    friend:{
        name:'Boch',
        friend:{
            name:'Sally',
        }
    }
}

let currentPerson=person
while(currentPerson!=null){
    console.log(currentPerson.name);
    currentPerson=currentPerson.friend
}