// Using `getElementById`
console.log(document.getElementById("div-id"));

// Modifying id element
const divWithId=document.getElementById("div-id")
divWithId.style.color="red"

// Using `getElementsByClassName`
const divWithClass = document.getElementsByClassName("div-class")
console.log(divWithClass);

// Modifying class element (❌)
/*
divWithClass.forEach(div=>{
    console.log(div);
})
*/

// Modifying class element (✅)
const divWithClassArray = Array.from(divWithClass)
divWithClassArray.forEach(div=>{
    console.log(div);
    div.style.color="green"
})

// accessing html single element
divWithClass[0].style.color="blue"