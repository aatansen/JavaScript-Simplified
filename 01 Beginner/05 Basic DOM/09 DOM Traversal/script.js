// Selecting and modifying grand parent 
const grandParent = document.querySelector('#grand-parent')
console.log(grandParent);
grandParent.style.color="red"

// Get grand parent child and modify style from html collection
console.log(grandParent.children);
const parentOne = grandParent.children[0]
const parentTwo = grandParent.children[1]
parentOne.style.color='blue'
parentTwo.style.color='yellow'

// modifying child using element sibling 
parentTwo2=parentOne.nextElementSibling
parentTwo2.style.color='orange'

// get parent from child select
const childOne = document.querySelector("#child-one")
console.log(childOne);
parentOne1=childOne.parentElement
console.log(parentOne1);

// get grand parent from child select using closest
const grandParent1=childOne.closest("#grand-parent")
console.log(grandParent1);
