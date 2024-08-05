// Additional Differences Between Arrow And Normal Functions
const btn = document.querySelector('[data-btn]')
btn.addEventListener('click', e=>{
    console.log("Arrow This:");
    console.log(this);
})

btn.addEventListener('click', function (e){
    console.log("Function This:");
    console.log(this);
})

// this and window both global scope 
console.log(this === window);
