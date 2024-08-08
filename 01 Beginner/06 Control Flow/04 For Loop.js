// for loop
for(let i=0;i<5;i++){
    console.log("Hi");
}

// loop through array using for loop
const arr=[1,2,3,4,5,6]
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// loop through array using `forEach`
arr.forEach(num=>{
    console.log(num);
})

/* 
Exercise
Create a for loop that loops from 0 to 10 and prints out all values from 0 to 10 
Modify this loop and exit the loop when the value is equal to 5 by using break 
*/
for(let i=0;i<=10;i++){
    console.log(i);
    if (i===5) break
}