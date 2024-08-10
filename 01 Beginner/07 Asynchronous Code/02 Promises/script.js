// Promise : resolve/reject --> then/catch
const promise = new Promise((resolve, reject) => {
    const sum = 1 + 1;
    if (sum === 2) {
        resolve(sum);
    } else {
        reject("Error");
    }
});

promise
    .then((message) => {
        console.log(message);
    })
    .catch((message) => {
        console.error(message);
    });

// Normal setTimeout
setTimeout(() => {
    console.log("Normal setTimeout");
}, 1000);

// Promise setTimeout
function setTimeoutPromise(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    });
}
setTimeoutPromise(2000).then(() => {
    console.log("Promise setTimeout");
});

// Callback hell
setTimeout(() => {
  console.log("1st callback");
  setTimeout(() => {
    console.log("2nd callback");
    setTimeout(() => {
      console.log("3rd callback");
    }, 1000);
  }, 1000);
}, 1000);

// Prevent Callback hell with promise
function setTimeoutPromise(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    });
}
setTimeoutPromise(1000).then(() => {
    console.log("1st callback promise");
    return setTimeoutPromise(1000).then(() => {
        console.log("2nd callback promise");
        return setTimeoutPromise(1000).then(() => {
            console.log("3rd callback promise");
        });
    });
});


// Create a promise version of addEventListener
// Normal addEventListener
const btn = document.querySelector('button')
// btn.addEventListener("click",()=>{
//     console.log("Clicked");
    
// })

// Promise addEventListener
function addEventListenerPromise(element,method){
    return new Promise((resolve,reject)=>{
        element.addEventListener(method,resolve)
    })
}
addEventListenerPromise(btn,"click").then(()=>{
    console.log("Clicked using promise");
})

// Simple Promises
Promise.resolve('value').then(message=>{
    console.log(message);
})
Promise.reject('error message').catch(message=>{
    console.error(message);
})

// Multiple promises (every promise need to be succeed or resolve/then won't execute)
Promise.all([
    Promise.resolve("1"),
    Promise.resolve("2"),
    Promise.resolve("3"),
]).then(messages=>{
    console.log(messages);
})

// Any promise that succeed 
Promise.any([
    Promise.reject("1"),
    Promise.resolve("2"),
    Promise.resolve("3"),
]).then(messages=>{
    console.log(messages);
}).catch(error=>{
    console.error(error);
})

// First promise that succeed/fail 
Promise.race([
    Promise.resolve("1"),
    Promise.reject("2"),
    Promise.resolve("3"),
]).then(messages=>{
    console.log(messages);
}).catch(error=>{
    console.error(error);
})

// Promise fulfilled or rejected all printed out
Promise.allSettled([
    Promise.resolve("1"),
    Promise.reject("2"),
    Promise.resolve("3"),
]).then(messages=>{
    console.log(messages);
}).catch(error=>{
    console.error(error);
})

// Promise finally
const promise2 = Promise.reject("here")
promise2.then(message=>{
    console.log(message);
}).catch(error=>{
    console.error(error);
}).finally(()=>{
    console.log("finally");
})





