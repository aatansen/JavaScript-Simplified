// Reference Vs Value 
// Value
let a =10
let b ="Hi"
let c =a
c=c+1
console.log(a);
console.log(c);

// Reference
let d=[1,2]
let e=d
e.push(3)
console.log(d);
console.log(e);

// Object reference
let obj1={
    name:"Tansen",
    age:24,
}
obj2=obj1
obj2.name="Nesnat"
console.log(obj1);
console.log(obj2);