const startTime = new Date().getTime();

function logWithTime(message) {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime; // Time elapsed since the start of the page load
    console.log(`${elapsedTime}ms - ${message}`);
}