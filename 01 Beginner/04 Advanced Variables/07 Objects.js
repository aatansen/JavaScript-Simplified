// Without object
let name ="Tansen"
const age = 24
const favoriteNumber = 7
console.log(name,age,favoriteNumber);

// Creating object 
let person = {
    name: "Tansen",
    age: 24,
    favoriteNumber: 7,
}
console.log(person["name"]);

// Adding function in object 
let person2 = {
    name: "Tansen",
    age: 24,
    favoriteNumber: 7,
    sayHi:function(){
        console.log("Hi");
    },
    sayHi2(){
        console.log("Hi 2");
        
    }
}
person2.sayHi()
person2.sayHi2()

// Exercise
/*
Create an object called car with the properties
1. Make
2. Model
3. isUsed
4. Add a function makeNoise which logs out `Vroom` text
*/
let car={
    make:"Car1",
    model:"v1",
    isUsed:false,
    makeNoise(){
        console.log("Vroom");
    }
}
console.log(car["make"]);
console.log(car.model);

// adding object,array in object
let person3 = {
    name:"Tansen",
    hobbies:["Programming","Gaming"],
    address:{
        street:"12323 street",
        city:"Dhaka",
    }
}
console.log(person3.address.city);
console.log(person3.hobbies[1]);
