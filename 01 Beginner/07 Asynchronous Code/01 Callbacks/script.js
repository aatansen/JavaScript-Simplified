// Callback async
// `setTimeout` async 
setTimeout(()=>{
    console.log("Inside");
    
},1000)
console.log("Outside");

// `addEventListener` async
const btn =document.querySelector("button")
btn.addEventListener("click",()=>{
    console.log("Clicked");
    
})

// creating function to call the callback async 
function addClickEventListener(element,callback){
    element.addEventListener("click",callback)
}
addClickEventListener(btn,()=>{
    console.log("clicked");
})

// callback hell (can be prevented using promise)
setTimeout(()=>{
    console.log("1st callback");
    setTimeout(()=>{
        console.log("2nd callback");
        setTimeout(()=>{
            console.log("3rd callback");
        },1000)
    },1000)
},1000)