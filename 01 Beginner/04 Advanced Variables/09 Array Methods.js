// Array Methods
// forEach method 
a=[1,2,3,4,5]
a.forEach((number,index)=>{
    console.log(index +" "+number);
})

// map method 
let result_map=a.map(number=>{
    return number*2
})
console.log(result_map);

// filter method 
let result_filter=a.filter(number=>{
    return number<3
})
console.log(result_filter);

// find method 
let result_find=a.find(number=>{
    return number<3
})
console.log(result_find);

// some method 
let result_some=a.some(number=>{
    return number>6
})
console.log(result_some);

// every method 
let result_every=a.every(number=>{
    return number>0
})
console.log(result_every);

// reduce method 
let result_reduce=a.reduce((sum,number)=>{
    return sum+number
},0)
console.log(result_reduce);

// includes method 
let isTrue=a.includes(2)
console.log(isTrue);









