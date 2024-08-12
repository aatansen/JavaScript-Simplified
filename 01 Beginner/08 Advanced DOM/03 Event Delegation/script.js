// Simple click event listener (Button->Body->Document)
// Change the order with capture (Body->Button->Document)
// Stop bubble with `stopPropagation()`
const buttons = document.querySelectorAll('button')
document.addEventListener("click",()=>{
    console.log("Clicked Document");
    
})
document.body.addEventListener("click",e=>{
    e.stopPropagation()
    console.log("Clicked Body");
    
},{capture:true})
buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        console.log("Clicked Button");
        
    })
})

// Creating new button and adding Event Listener with `matches`
const newButton=document.createElement("button")
newButton.innerText="Button 5"
document.body.append(newButton)
document.addEventListener("click",e=>{
    if(e.target.matches("button")){
        console.log("Clicked button 5");
    }
})