<div align="center">
<h1>JavaScript Simplified</h1>
</div>

## Beginner Section Topics:

<details>
<summary>Setup</summary>

- [Required programs](#required-programs)
- [First JavaScript code](#first-javascript-code)
- [Run js code in terminal](#run-js-code-in-terminal)
- [Adding js in HTML](#adding-js-in-html)
- [Install prettier module](#install-prettier-module)

</details>

<details>
<summary>Basic Variables</summary>

- [First variable](#first-variable)
- [Number Type](#number-type)
- [String Type](#string-type)
- [Boolean Type](#boolean-type)
- [Null And Undefined Type](#null-and-undefined-type)
- [Variable Comparison](#variable-comparison)
- [Garbage Collection](#garbage-collection)
- [Comments](#comments)

</details>

<details>
<summary>Functions - Scoping</summary>

- [Normal Functions](#normal-functions)
- [Passing Functions As Arguments](#passing-functions-as-arguments)
- [Arrow Functions](#arrow-functions)
- [Stack Trace And Call Stack](#stack-trace-and-call-stack)

</details>

<details>
<summary>Basic DOM</summary>
</details>

<details>
<summary>Control Flow</summary>
</details>

<details>
<summary>Asynchronous Code</summary>
</details>

<details>
<summary>Advanced DOM</summary>
</details>

<details>
<summary>Modules - Bundlers</summary>
</details>

<details>
<summary>Bonus</summary>
</details>

## Beginner Section:
### Setup
#### Required programs
- [Nodejs](https://nodejs.org/en)
- [Visualstudio](https://code.visualstudio.com/)
- [Chrome](https://www.google.com/chrome/)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
#### First JavaScript code
```js
console.log("Hello Tansen!!!!")
```
#### Run js code in terminal
```bash
node script.js
```
#### Adding js in HTML 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="script.js"></script>
</head>
<body>

</body>
</html>
```
#### Install prettier module
```bash
npm i -g prettier
```
- Here `npm` package manager
- `i` means install
- `-g` means global
    > package installed globally

  [⬆️ Go to top](#beginner-section-topics)

### Basic Variables
#### First variable
- Using `let` to create a variable
	```js
	let favoriteNumber=7
	console.log(favoriteNumber);
	```
- Updating the value of `favoriteNumber`
	```js
	let favoriteNumber=7
	favoriteNumber=4
	console.log(favoriteNumber);
	```
- Log multiple value in console
	```js
	let a=1
	let b=2
	let c=3
	console.log(a,b,c);
	```
- Assign other variable value
	```js
	let a=1
	let b=2
	let c=3
	console.log(a,b,c);

	let d=a
	console.log(d);
	```

  [⬆️ Go to top](#beginner-section-topics)

#### Number Type
- Usage of `typeof`
	```js
	//number type
	let a=2 
	let b=1.5
	console.log(typeof(a),typeof(b));
	```
- Math Operations
	```js
	// math operations
	let a=2 
	let b=1.5
	console.log(a+b);
	console.log(a-b);
	console.log(a*b);
	console.log(a/b);
	```
- Sum with rounding issue
	```js
	// sum with rounding issue
	let c=1.2
	let d=2.2
	console.log(c+d);
	// output: 3.4000000000000004
	```

  [⬆️ Go to top](#beginner-section-topics)

#### String Type
- Output a simple string
	```js
	// Output a simple string
	let a= "Hello world"
	console.log(a);
	```
- Single and double quote in string
	```js
	// Single and double quote in string
	let b = "Hello world 'Tansen' "
	console.log(b);
	```
- Concat string
	```js
	// Concat string
	let c = "Hello"
	let d = "Tansen"
	console.log(c+" "+d);
	```
- Concat name in string
	```js
	// Concat name in string
	let name="Tansen"
	console.log("My name is "+name);
	```

  [⬆️ Go to top](#beginner-section-topics)

#### Boolean Type
- Boolean true / false
	```js
	// boolean true / false
	let a=true
	let b=false
	console.log(typeof a);
	console.log(typeof b);
	```
- Boolean logic
	```js
	// boolean logic
	console.log(true && false);
	console.log(true || false);
	console.log((false && false)||true);
	```
- Invert logic with `!`
	```js
	// invert logic with `!`
	let happy=true
	let fun=true
	console.log(happy&&fun);
	console.log(!happy);
	console.log(!!fun);
	```

  [⬆️ Go to top](#beginner-section-topics)

#### Null And Undefined Type
- Null value
	```js
	// null
	let b=null
	console.log(b);
	console.log(typeof b);
	//null type is object
	```
- Undefined value
	```js
	// undefined
	let a=undefined
	console.log(a);
	console.log(typeof a);
	//undefined type is undefined
	```
- A variable without a value is `undefined`
	```js
	// a variable without a value is `undefined`
	let c
	console.log(c);
	```

  [⬆️ Go to top](#beginner-section-topics)

#### Variable Comparison
- Number comparison
	```js
	// number comparison 
	let a=1
	let b=2
	console.log(a==b); // false
	console.log(a!=b); // true
	console.log(a>b); // false
	console.log(a<b); // true
	```
- String comparison 
	```js
	// string comparison 
	console.log("a"=="a"); // true
	console.log("a"=="b"); // false
	console.log("a"<"b"); // true
	console.log("a">"b"); // false
	```
- Boolean comparison
	```js
	// boolean comparison
	console.log(true==true); // true
	console.log(true==false); // false
	console.log(false==false); // true
	```
- Null & undefined comparison
	```js
	// null & undefined comparison
	console.log(null==null); // true
	console.log(undefined==undefined); // true
	console.log(null==undefined); // true
	```

  [⬆️ Go to top](#beginner-section-topics)

#### Garbage Collection
- When a variable is no longer used it will cleaned up auto
	```js
	let a = 1
	console.log(a);

	let b = 2
	console.log(b);
	```

  [⬆️ Go to top](#beginner-section-topics)

#### Comments
- Single line comment `//`
	```js
	// sum of a,b
	let a=1
	let b=2
	console.log(a+b);
	```
- Multi line comment `/**/`
	```js
	/*
	find sum of a,b
	find subtraction of a,b
	*/
	console.log(a+b);
	console.log(a-b);
	```

  [⬆️ Go to top](#beginner-section-topics)

### Functions - Scoping
#### Normal Functions
- Using `function` keyword
    ```js
    // Using `function` keyword
    function sayHi(){
        console.log("Hi");
    }
    sayHi()
    ```
- Function parameter/argument
    ```js
    // Function parameter sum(a,b) / argument sum(2,4)
    function sum(a,b){
        console.log(a+b);
    }
    sum(2,4)
    ```
- Function output undefined when no argument passed
    ```js
    // Create a function that takes one argument (a person name) and print that out
    function showName(name){
        console.log(name);
    }
    showName("Tansen")
    showName() // output undefined
    ```
- Return function value
    ```js
    // Return function value
    function sum2(a,b){
        return a+b
    }
    let result = sum2(3,4)
    console.log(result);
    ```
    - Anything written after `return a+b` will be skipped

  [⬆️ Go to top](#beginner-section-topics)

#### Passing Functions As Arguments
- Printing function
    ```js
    // printing function
    function printVariable(variable){
        console.log(variable);
    }
    printVariable("A")
    console.log(printVariable);
    ```
- Passing function as argument
    ```js
    // passing function as argument
    function printVariable(variable){
        console.log(variable);
    }
    function func(x){
        x("Hello")
    }
    func(printVariable)
    ```
- Callback function
    ```js
    // callback function
    function sumCallback(a,b,callback){
        // return a+b 
        callback(a+b)
    }
    function handleSum(sum){
        console.log(sum);
    }
    sumCallback(3,4,handleSum)
    ```
- Passing callback function
    ```js
    // passing callback function
    function printGreetings(greet){
        console.log(greet);
    }

    function helloGreet(name,callback){
        callback("Hello "+name)
    }
    helloGreet("Tansen",printGreetings)
    ```
- Passing anonymous function
    ```js
    // passing anonymous function
    function greeting2(name,callback){
        callback("Hello "+name)
    }

    greeting2("Tansen",function(name){
        console.log(name);
    })
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### Arrow Functions
- Normal function to Arrow function
    ```js
    // Normal function
    function sum(a,b){
        return a+b
    }
    console.log(sum(2,3));

    // Arrow function
    let sumArrow= (a,b)=>{
        return a+b
    }
    console.log(sumArrow(4,3));
    ```
- Normal function to Arrow function simplified
    ```js
    // Normal function 02
    function showName(name){
        console.log(name);
    }
    showName("Tansen")

    // Arrow function 02
    let showNameArrow=(name)=>{
        console.log(name);
    }
    showNameArrow("tansen")

    // Arrow function more simplified
    let sumArrow2=(a,b)=>a+b
    console.log(sumArrow2(2,2));
    ```
- Normal function to Arrow function with no parameter/argument
    ```js
    // Normal function with no parameter/argument
    function hi(){
        console.log("Hi");
    }
    hi()

    // Arrow function with no parameter/argument
    let hiArrow=()=>console.log("Hi")
    hiArrow()
    ```
- Normal callback function to Arrow callback function
    ```js
    // Normal callback function
    function func(a,callback){
        callback(a)
    }
    func(3,function showNum(num){
        console.log(num);
    })

    // Arrow callback function
    function func2(a,callback){
        callback(a)
    }
    func2(4,num=>console.log(num))
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### Stack Trace And Call Stack
- Code debugging
    ```js
    // Code debugging 
    function doStuff(a,b,name){
        console.log(sum(a,b));
        console.log(showName(name));
    }

    function sum(a,b){
        return a+b
    }

    function showName(name){
        gg
        return "Hi "+name
    }

    doStuff(1,2,"Tansen")
    ```
    - After running this code we can see the error in browser console
        ```js
        // Stack Trace (visible in browser)
        /*
        Uncaught ReferenceError: gg is not defined
            at showName (scripts.js:12:5)
            at doStuff (scripts.js:4:17)
            at scripts.js:16:1
        */
        ```
    - To see call stack we need to navigate to sources tab in browser
    - There we can use the breakpoint->`pause on uncaught exception`
    - Also we can create a breakpoint in code to debug and see how it executed

  [⬆️ Go to top](#beginner-section-topics)