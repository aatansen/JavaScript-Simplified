// Logical AND (`&&`)
function expensiveFunction() {
    console.log("Expensive function called");
    return true;
  }
  
  let condition = false;
  
  if (condition && expensiveFunction()) {
    console.log("Condition is true and expensiveFunction returned true");
  } else {
    console.log("Condition is false or expensiveFunction returned false");
  }

// Logical OR (`||`)
function fallbackValue() {
    console.log("Fallback function called");
    return "default";
  }
  
  let value = null;
  
  let result = value || fallbackValue();
  
  console.log(result);

// Conditional Execution
let user = {
    name: "Alice",
    isAdmin: true
  };
  
  user.isAdmin && console.log(`${user.name} is an admin`);

// Function Argument Defaults
function greet(name) {
    name = name || "Guest";
    console.log(`Hello, ${name}!`);
  }
  
  greet("John"); // Output: Hello, John!
  greet();       // Output: Hello, Guest!

