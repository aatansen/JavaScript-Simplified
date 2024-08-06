// Select all element
const form = document.querySelector('#new-item-form')
const list = document.querySelector("#list")
const input= document.querySelector("#item-input")


// When submit the form add a new element
form.addEventListener('submit', e =>{
    e.preventDefault()
    console.log(input.value);
    
    // Create new item
    const item = document.createElement('div')
    if (input.value !==""){
        item.innerText = input.value
        item.classList.add('list-item')
        console.log(item);
        // Add that item to the list
        list.appendChild(item)
    }

    // Clear input after adding
    input.value = ""

    // Setup event listener to delete item when clicked
    item.addEventListener("click", ()=>{
        // list.removeChild(item)
        item.remove()
    })
})