// Get full html document 
console.log(document);

// Get only elements of the html document 
console.log(document.documentElement);

// Create new element in html document
const element = document.createElement("span")
element.innerText="Hello World"
document.body.appendChild(element)
