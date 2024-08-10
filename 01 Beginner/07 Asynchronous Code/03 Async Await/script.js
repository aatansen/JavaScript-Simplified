// promise
function setTimeoutPromise(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(`Waited ${delay} seconds`)
      reject("Error message");
    }, delay);
  });
}

setTimeoutPromise(1000)
  .then(() => {
    console.log("1st setTimeout Promise");
    return setTimeoutPromise(1000);
  })
  .then(() => {
    console.log("2nd setTimeout Promise");
    return setTimeoutPromise(1000);
  })
  .then(() => {
    console.log("3rd setTimeout Promise");
})
.catch(e=>{
    console.error(e);
  })

// Async Await
async function dothing() {
  try {
    const message = await setTimeoutPromise(1000);
    console.log(message);
  } catch (error) {
    console.error(error);
  }
}
dothing();

// Example task
// Call getValueWithDelay twice and print out the returned value
// Then call getValueWithDelayError and make sure that the error is properly caught.
function getValueWithDelay(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}
function getValueWithDelayError(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error message");
    }, delay);
  });
}

async function dostuff() {
  try {
    const value1 = await getValueWithDelay("hello", 1000);
    console.log(value1);
    const value2 = await getValueWithDelayError("hello", 1000);
    console.log(value2);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Finally");
  }
}
dostuff();

// Run promises parallelly
getValueWithDelay("Tansen", 1000).then((message) => console.log(message));
getValueWithDelay("Boch", 1000).then((message) => console.log(message));
getValueWithDelay("Shakil", 1000).then((message) => console.log(message));
