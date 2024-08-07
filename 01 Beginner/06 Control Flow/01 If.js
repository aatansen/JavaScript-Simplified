// if else 
const userIsLoggedIn =true
const isOnDashboard = true
if (userIsLoggedIn && isOnDashboard){
    console.log("User logged in.");
} else{
    console.log("Please login.");
}

// `0`,`""`,`undefined`,`null` count as false 
if (0){
    console.log("True");
}else{
    console.log("False");
}

/*Exercise:
Create a variable that contains an array.
Using an if statement with else if I want you to check the length of the array
If it is empty print out "empty"
If it has less than 5 elements print out "small"
If it has less than 10 elements print out "medium"
Otherwise print out "large" */
const arr=[2,3,4,1,3,5,6,7,8,9,11]
arr_length = arr.length
if (arr_length === 0){
    console.log("empty");
}else if(arr_length<5){
    console.log("small");
}else if(arr_length<10){
    console.log("medium");
} else{
    console.log("large");
}
