// Get data attribute `DOMStringMap`
const test=document.querySelector("[data-test]")
console.log(test.dataset);

// Read individual data from data attribute
console.log(test.dataset.test);

// change data attribute value
test.dataset.testTwo='321'

// Button click count
const btns = document.querySelectorAll('button')
btns.forEach(btn=>{
    // console.log(btn);
    btn.addEventListener("click",()=>{
        // console.log(btn.dataset.clicks);
        const currentClicks=parseInt(btn.dataset.clicks)
        btn.dataset.clicks = currentClicks+1
    })
    
})
