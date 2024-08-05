// Event Listeners
// Add event listener in button
const btn =document.querySelector('[data-btn]')
btn.addEventListener('click',()=>{
    console.log("clicked");
    
})

// Remove event listener in button 
function printClicked(){
    console.log("Clicked");
}
btn.addEventListener('click', printClicked)
btn.removeEventListener('click',printClicked)

// view all event 
btn.addEventListener('click',e =>{
    console.log(e)
})

// Input event 
const input = document.querySelector('[data-input-text]')
input.addEventListener('change',()=>{
    console.log("changed")
})
input.addEventListener('input',()=>{
    console.log("text inputed")
})
// Check input empty of not 
input.addEventListener('input',e=>{
    console.log(e.target.value==="")
})

// form event prevent default behavior using `preventDefault()`
const form = document.querySelector("[data-form]")
form.addEventListener('submit',e=>{
    e.preventDefault()
    console.log("form submitted")
})

// Removing default behavior of anchor tag link click using `preventDefault()`
const link = document.querySelector("[data-link]")
link.addEventListener("click",e=>{
    e.preventDefault()
    console.log("Link clicked");
})



