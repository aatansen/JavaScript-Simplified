// Array
const a =[1,2,3,4,5]
console.log(a);

// accessing element by index
console.log(a[0]);
const array1=['a','b','c','d','e']
console.log(array1[2]);
const array2=[
    [1,2,3,4,5,6],
    [7,8,9,10],
    [11,12,13,14,15],
]
console.log(array2[0][4]);
console.log(array2[1][2]);
console.log(array2[2][3]);

// add element at the end 
a.push(6)
console.log(a);

// add array in array
a.push([7,8,9])
console.log(a);

// length of array
console.log(array2.length);