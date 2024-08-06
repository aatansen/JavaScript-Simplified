// Get attribute element using `querySelector`
const dataAttributeElement = document.querySelector('[data-test]')
console.log(dataAttributeElement);

// Get class element using `querySelector`
const divWithClass = document.querySelector('.div-class')
console.log(divWithClass);

// Get class element using `querySelector`
const divWithClasses = document.querySelectorAll('.div-class')
console.log(divWithClasses);

divWithClasses.forEach(div=>{
    console.log(div);
    div.style.color="red"
})

// Get input element using `querySelector`
const input = document.querySelector("body > input[type='Text']")
console.log(input);
