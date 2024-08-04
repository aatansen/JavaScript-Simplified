// New And This
// New
const date= new Date()
console.log(date);
console.log(date.getFullYear());

// This
// Normal function
function User(name,age){
    return {
        name:name,
        age:age,
    }
}
console.log(User("Tansen",24));

// function constructor
function User2(name,age){
    this.name=name
    this.age=age
}
const user1=new User2("Tansen",24)
console.log(user1);

// class construction
class User3{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    sayHi(){
        console.log("Hi");
        
    }
}
const user2=new User3("TT",7)
console.log(user2);
user2.sayHi()
