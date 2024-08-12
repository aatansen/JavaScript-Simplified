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
- [Hoisting](#hoisting)
- [Scoping](#scoping)
- [Closures](#closures)

</details>

<details>
<summary>Advanced Variables</summary>

- [Const](#const)
- [Var](#var)
- [Type Coercion](#type-coercion)
- [== Vs ===](#double-equal-vs-triple-equal)
- [NaN](#nan)
- [Array](#array)
- [Objects](#objects)
- [Value Vs Reference](#value-vs-reference)
- [Array Methods](#array-methods)
- [String Template Literals](#string-template-literals)
- [New And This](#new-and-this)

</details>

<details>
<summary>Basic DOM</summary>

- [Async Vs Defer](#async-vs-defer)
- [Window](#window)
- [Document](#document)
- [Id And Class Selectors](#id-and-class-selectors)
- [Query Selectors](#query-selectors)
- [Event Listeners](#event-listeners)
- [Additional Differences Between Arrow And Normal Functions](#additional-differences-between-arrow-and-normal-functions)
- [Data Attributes](#data-attributes)
- [DOM Traversal](#dom-traversal)
- [Simple Todo List](#simple-todo-list)
- [Modal Walkthrough](#modal-walkthrough)

</details>

<details>
<summary>Control Flow</summary>

- [If else](#if-else)
- [Ternary Operator](#ternary-operator)
- [Switch Statement](#switch-statement)
- [For Loop](#for-loop)
- [While loop](#while-loop)
- [Recursion](#recursion)
- [Short Circuit Evaluation](#short-circuit-evaluation)
- [Quiz app walkthrough](#quiz-app-walkthrough)
- [Form Validation Walkthrough](#form-validation-walkthrough)

</details>

<details>
<summary>Asynchronous Code</summary>

- [Callback](#callback)
- [Promises](#promises)
- [Async Await](#async-await)

</details>

<details>
<summary>Advanced DOM</summary>

- [Fetch](#fetch)
- [Event loop](#event-loop)
- [Event Delegation](#event-delegation)

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

#### Hoisting
- Access function before defining it
- In JavaScript all functions except arrow function are read first
- It does not work with arrow function because variable never get hoisted
- Normal function (Hoisting work)
    ```js
    // Hoisting
    console.log(sum(2,3));
    function sum(a,b){
        return a+b
    }
    ```
- Arrow function (Hoisting doesn't work)
    ```js
    // console.log(sumArrow(3,3)); // error
    const sumArrow=(a,b)=>{
        return a+b
    }
    ```
    
  [⬆️ Go to top](#beginner-section-topics)

#### Scoping
- Entire file is a global scope
- Where each function has its own scope which is local scope
    ```js
    // Scoping
    function sayHi(name) {
        console.log("Hi " + name);
    }

    let name = "Tansen"
    sayHi(name)
    ```
- Locally `a` is not defied or passed in function still find it from global scope
    ```js
    // local scope
    function sayHi2(name) {
        console.log("Hi " + name + a);
    }

    let a = 1
    sayHi2(name)
    ```
- Local scope also can be defied using only `{}`
- There is also nested scope `{{}}`
    ```js
    // {} scope
    {
        let b= 2
        console.log(b);
    }
    {
        let c= 4
        console.log(c);
        // console.log(b); // error
    }
    {
        let d=5
        {
            let e = 6
            console.log(e,d);
        }
    }
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### Closures
- Function return inside a function
    ```js
    // Closures
    function show(variable){
        let c = 3
        return function func(variable2){
            console.log(variable);
            console.log(variable2);
            console.log(c);
            
        }
    }

    let a=show(1)
    a(2)
    ```

  [⬆️ Go to top](#beginner-section-topics)

### Advanced Variables
#### Const
- It hold constant value
- Not changeable
    ```js
    // Const
    const a = 1
    // a =2 error
    console.log(a);
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### Var
- Old way to create variable
    ```js
    // Var 
    var a = 1
    console.log(a);
    ```
- It can break scoping rule
    ```js
    // breaking scoping rule
    {
        var b = 1
        console.log(b);
    }
    console.log(b);
    ```
- Variable get hoisted as `undefined`
    ```js
    // hoisted as `undefined`
    console.log(c);
    var c = 4
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### Type Coercion
- Number
    ```js
    // Number Coercion
    // int
    parseInt("123");       // 123
    parseInt("101", 2);    // 5 (binary 101 is 5 in decimal)

    // Float
    parseFloat("123.45");  // 123.45

    // Unary `+` operator
    +("123");             // 123
    +("123.45");          // 123.45
    +("abc");             // NaN (Not-a-Number)
    ```
- String
    ```js
    // String Coercion
    String(123);          // "123"
    String(true);        // "true"
    String(null);        // "null"

    // using `toString()`
    (123).toString();    // "123"
    (true).toString();  // "true"

    // Concatenation with a string
    123 + "abc";         // "123abc"
    true + "abc";        // "trueabc"
    ```
- Boolean
    ```js
    // Boolean Coercion
    Boolean(1);          // true
    Boolean(0);          // false
    Boolean("");         // false
    Boolean("non-empty"); // true
    Boolean(null);      // false
    Boolean(undefined); // false

    // NOT operator twice
    !!1;                // true
    !!0;                // false
    !!"non-empty";      // true
    ```
- Null
    ```js
    // Null Coercion 
    Boolean(null);      // false
    String(null);       // "null"
    Number(null);       // 0
    ```
- Undefined
    ```js
    // Undefined Coercion
    Boolean(undefined); // false
    String(undefined);  // "undefined"
    Number(undefined);  // NaN
    ```
- Coercion in Operations
    ```js
    // Coercion in Operations
    5 + "5";           // "55"
    "5" + 5;           // "55"

    // If operands are not numbers, they are coerced to numbers
    "5" - 2;           // 3
    "5" * "2";         // 10
    "5" / "2";         // 2.5
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### Double equal Vs triple equal
- `==` Vs `===`
    ```js
    // Double equal vs triple equal 
    {
    const a=1
    const b="1"
    console.log(a==b); // true

    const c=0 // also true for `""`
    const d=false
    console.log(c==d); // true
    }
    ```
- To prevent type coercion `===` used
    ```js
    // To prevent type coercion `===` used
    {
    const a=1
    const b="1"
    console.log(a===b); // false

    const c=0 // also false for `""`
    const d=false
    console.log(c===d); // false
    }
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### NaN
- Nothing is equal to `NaN`
    ```js
    const a = parseInt("awfawgwa")
    console.log(a); // NaN
    console.log(a===NaN); // false
    ```
- To check NaN `isNaN` is used
    ```js
    // NaN 
    const a = parseInt("awfawgwa")
    console.log(a); // NaN
    console.log(a===NaN); // false
    console.log(isNaN(a)); // true
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### Array
- Creating an array
    ```js
    // Array
    const a =[1,2,3,4,5]
    console.log(a);
    ```
- Accessing element by index
    ```js
    // accessing element by index
    console.log(a[0]);
    const array1=['a','b','c','d','e']
    console.log(array1[2]);
    const array2=[
        [1,2,3,4,5,6],
        [7,8,9,10],
        [11,12,13,14,15],
    ]
    console.log(array2[0][4]);
    console.log(array2[1][2]);
    console.log(array2[2][3]);
    ```
- Adding element in array
    ```js
    // add element at the end 
    a.push(6)
    console.log(a);

    // add array in array
    a.push([7,8,9])
    console.log(a);
    ```
- Get the length of an array
    ```js
    // length of array
    console.log(array2.length);
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### Objects
- Without object
    ```js
    // Without object
    let name ="Tansen"
    const age = 24
    const favoriteNumber = 7
    console.log(name,age,favoriteNumber);
    ```
- Creating object 
    ```js
    // Creating object 
    let person = {
        name: "Tansen",
        age: 24,
        favoriteNumber: 7,
    }
    console.log(person["name"]);
    ```
- Adding function in object 
    ```js
    // Adding function in object 
    let person2 = {
        name: "Tansen",
        age: 24,
        favoriteNumber: 7,
        sayHi:function(){
            console.log("Hi");
        },
        sayHi2(){
            console.log("Hi 2");
            
        }
    }
    person2.sayHi()
    person2.sayHi2()
    ```
- Exercise
    ```js
    // Exercise
    /*
    Create an object called car with the properties
    1. Make
    2. Model
    3. isUsed
    4. Add a function makeNoise which logs out `Vroom` text
    */
    let car={
        make:"Car1",
        model:"v1",
        isUsed:false,
        makeNoise(){
            console.log("Vroom");
        }
    }
    console.log(car["make"]);
    console.log(car.model);
    ```
- Adding object,array in object
    ```js
    // adding object,array in object
    let person3 = {
        name:"Tansen",
        hobbies:["Programming","Gaming"],
        address:{
            street:"12323 street",
            city:"Dhaka",
        }
    }
    console.log(person3.address.city);
    console.log(person3.hobbies[1]);
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### Value Vs Reference
- Value
    ```js
    // Reference Vs Value 
    // Value
    let a =10
    let b ="Hi"
    let c =a
    c=c+1
    console.log(a);
    console.log(c);
    ```
- Reference (Array)
    ```js
    // Array reference
    let d=[1,2]
    let e=d
    e.push(3)
    console.log(d);
    console.log(e);
    ```
- Reference (Object)
    ```js
    // Object reference
    let obj1={
        name:"Tansen",
        age:24,
    }
    obj2=obj1
    obj2.name="Nesnat"
    console.log(obj1);
    console.log(obj2);
    ```
    - In browser we need to use `JSON.stringify(obj2)` to see the object values

  [⬆️ Go to top](#beginner-section-topics)

#### Array Methods
- **Array methods does not modify original array**
- forEach method 
    ```js
    // Array Methods
    // forEach method 
    a=[1,2,3,4,5]
    a.forEach((number,index)=>{
        console.log(index +" "+number);
    })
    ```
    - It take 2 argument but in most use cases only one is used `number`
- map method
    ```js
    // map method 
    let result_map=a.map(number=>{
        return number*2
    })
    console.log(result_map);
    ```
- filter method 
    ```js
    // filter method 
    let result_filter=a.filter(number=>{
        return number<3
    })
    console.log(result_filter);
    ```
- find method
    ```js
    // find method 
    let result_find=a.find(number=>{
        return number<3
    })
    console.log(result_find);
    ```
- some method
    ```js
    // some method 
    let result_some=a.some(number=>{
        return number>6
    })
    console.log(result_some);
    ```
    - If any of the array element have the value then it will return true/false
- every method
    ```js
    // every method 
    let result_every=a.every(number=>{
        return number>0
    })
    console.log(result_every);
    ```
    - Every element of the array is checked
- reduce method
    ```js
    // reduce method 
    let result_reduce=a.reduce((sum,number)=>{
        return sum+number
    },0)
    console.log(result_reduce);
    ```
    - It take 2 arguments where first one need to be set default value `0`
- includes method
    ```js
    // includes method 
    let isTrue=a.includes(2)
    console.log(isTrue);
    ```
    - If the array include that element than it will return true / false

  [⬆️ Go to top](#beginner-section-topics)

#### String Template Literals
- It is used with backticks `${variable_name}`
    ```js
    // String Template Literals
    let name = "Tansen"
    let age= 24
    console.log(`name is ${name} and age ${age}`);
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### New And This
- Using new
    ```js
    // New And This
    // New
    const date= new Date()
    console.log(date);
    console.log(date.getFullYear());
    ```
- Using this
    ```js
    // This
    // Normal function
    function User(name,age){
        return {
            name:name,
            age:age,
        }
    }
    console.log(User("Tansen",24));

    // function constructor
    function User2(name,age){
        this.name=name
        this.age=age
    }
    const user1=new User2("Tansen",24)
    console.log(user1);

    // class construction
    class User3{
        constructor(name,age){
            this.name=name
            this.age=age
        }
        sayHi(){
            console.log("Hi");
            
        }
    }
    const user2=new User3("TT",7)
    console.log(user2);
    user2.sayHi()
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### Async Vs Defer
- **Inline Script**: This runs after all previous scripts and HTML have been parsed.
    ```js
    <script>
        console.log('Inline Script: This runs after all previous scripts and HTML have been parsed.');
    </script>
    ```
- **Normal Script**: This script blocks the HTML parsing until it finishes loading and executing.
- **Async Script**: This script loads asynchronously and may run before or after other scripts.
- **Defer Script**: This script is deferred until after the HTML is fully parsed.

  [⬆️ Go to top](#beginner-section-topics)

#### Window
- It is global so using `window` keyword or not it will work
    ```js
    console.log(window);
    window.console.log('hi')
    window.addEventListener("resize",()=>{
        console.log("resized");
        
    })
    alert("hi")
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### Document
- Get full html document
    ```js
    // Get full html document 
    console.log(document);
    ```
- Get only elements of the html document
    ```js
    // Get only elements of the html document 
    console.log(document.documentElement);
    ```
- Create new element in html document
    ```js
    // Create new element in html document
    const element = document.createElement("span")
    element.innerText="Hello World"
    document.body.appendChild(element)
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### Id And Class Selectors
- Using `getElementById`
    ```js
    console.log(document.getElementById("div-id"));
    ```
    - If id not valid `null` will be printed in console
- Modifying id element
    ```js
    // Modifying id element
    const divWithId=document.getElementById("div-id")
    divWithId.style.color="red"
    ```
- Modifying class element (❌)
    ```js
    // Modifying class element (❌)
    divWithClass.forEach(div=>{
        console.log(div);
    })
    ```
    - This won't work as `divWithClass` is holding html collection not array elements
- Modifying class element (✅)
    - To do this first we have to convert the html collection to array using `Array.form()`
        ```js
        // Modifying class element (✅)
        const divWithClassArray = Array.from(divWithClass)
        divWithClassArray.forEach(div=>{
            console.log(div);
            div.style.color="green"
        })
        ```
- We can directly modify without converting to array by accessing single element
    ```js
    // accessing html single element
    divWithClass[0].style.color="blue"
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### Query Selectors
- Get attribute element using `querySelector`
    ```js
    // Get attribute element using `querySelector`
    const dataAttributeElement = document.querySelector('[data-test]')
    console.log(dataAttributeElement);
    ```
- Get class element using `querySelector`
    ```js
    // Get class element using `querySelector`
    const divWithClass = document.querySelector('.div-class')
    console.log(divWithClass);
    ```
- Get class element using `querySelector`
    ```js
    // Get class element using `querySelector`
    const divWithClasses = document.querySelectorAll('.div-class')
    console.log(divWithClasses);
    divWithClasses.forEach(div=>{
    console.log(div);
    div.style.color="red"
    })
    ```
- Get input element using `querySelector`
    ```js
    // Get input element using `querySelector`
    const input = document.querySelector("body > input[type='Text']")
    console.log(input);
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### Event Listeners
- Add event listener in button
    ```js
    // Add event listener in button
    const btn =document.querySelector('[data-btn]')
    btn.addEventListener('click',()=>{
        console.log("clicked");
        
    })
    ```
- Remove event listener in button 
    ```js
    // Remove event listener in button 
    function printClicked(){
        console.log("Clicked");
    }
    btn.addEventListener('click', printClicked)
    btn.removeEventListener('click',printClicked)
    ```
- view all event
    ```js
    // view all event 
    btn.addEventListener('click',e =>{
        console.log(e)
    })
    ```
- Input event
    ```js
    // Input event 
    const input = document.querySelector('[data-input-text]')
    input.addEventListener('change',()=>{
        console.log("changed")
    })
    input.addEventListener('input',()=>{
        console.log("text inputed")
    })
    // Check input empty of not 
    input.addEventListener('input',e=>{
        console.log(e.target.value==="")
    })
    ```
- form event prevent default behavior using `preventDefault()`
    ```js
    // form event prevent default behavior using `preventDefault()`
    const form = document.querySelector("[data-form]")
    form.addEventListener('submit',e=>{
        e.preventDefault()
        console.log("form submitted")
    })
    ```
- Removing default behavior of anchor tag link click using `preventDefault()`
    ```js
    // Removing default behavior of anchor tag link click using `preventDefault()`
    const link = document.querySelector("[data-link]")
    link.addEventListener("click",e=>{
        e.preventDefault()
        console.log("Link clicked");
    })
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### Additional Differences Between Arrow And Normal Functions
- In arrow function this behave as global 
- In normal function this behave as local
    ```js
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
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### Data Attributes
- Get data attribute `DOMStringMap`
    ```js
    // Get data attribute `DOMStringMap`
    const test=document.querySelector("[data-test]")
    console.log(test.dataset);
    ```
- Read individual data from data attribute
    ```js
    // Read individual data from data attribute
    console.log(test.dataset.test);
    ```
- Change data attribute value (visible in elements tab of browser devtool)
    ```js
    // change data attribute value
    test.dataset.testTwo='321'
    ```
- Button click count
    ```js
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
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### DOM Traversal
- Selecting and modifying grand parent 
    ```js
    // Selecting and modifying grand parent 
    const grandParent = document.querySelector('#grand-parent')
    console.log(grandParent);
    grandParent.style.color="red"
    ```
- Get grand parent child and modify style from html collection
    ```js
    // Get grand parent child and modify style from html collection
    console.log(grandParent.children);
    const parentOne = grandParent.children[0]
    const parentTwo = grandParent.children[1]
    parentOne.style.color='blue'
    parentTwo.style.color='yellow'
    ```
- Modifying child using element sibling 
    ```js
    // modifying child using element sibling 
    parentTwo2=parentOne.nextElementSibling
    parentTwo2.style.color='orange'
    ```
- Get parent from child select
    ```js
    // get parent from child select
    const childOne = document.querySelector("#child-one")
    console.log(childOne);
    parentOne1=childOne.parentElement
    console.log(parentOne1);
    ```
- Get grand parent from child select using closest
    ```js
    // get grand parent from child select using closest
    const grandParent1=childOne.closest("#grand-parent")
    console.log(grandParent1);
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### Simple Todo List
- Step by step to-do list
    ```js
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
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### Modal Walkthrough
- Step by step modal walkthrough
    ```js
    /*
    TODO: 2. Select the elements with the following IDs
        * modal
        * open-modal-btn
        * close-modal-btn
        * BONUS: overlay
    */
    const modal = document.querySelector('#modal')
    const openModalBtn = document.querySelector('#open-modal-btn')
    const closeModalBtn = document.querySelector('#close-modal-btn')
    const overlay = document.querySelector('#overlay')

    // TODO: 3. Create a click event listener for the open-modal-btn that adds the class "open" to the modal
    // BONUS: Also add the class "open" to the overlay
    openModalBtn.addEventListener("click",()=>{
    modal.classList.add("open")
    overlay.classList.add("open")
    })

    // TODO: 4. Create a click event listener for the close-modal-btn that removes the class "open" from the modal
    // BONUS: Also remove the class "open" from the overlay
    closeModalBtn.addEventListener("click",closeModal)

    // BONUS: Add a click event listener to the overlay that removes the class "open" from the modal and the overlay
    overlay.addEventListener("click",closeModal)

    // function to close modal
    function closeModal(){
    modal.classList.remove("open")
    overlay.classList.remove("open")
    }
    ```

  [⬆️ Go to top](#beginner-section-topics)

### Control Flow
#### If else
- if else 
    ```js
    // if else 
    const userIsLoggedIn =true
    const isOnDashboard = true
    if (userIsLoggedIn && isOnDashboard){
        console.log("User logged in.");
    } else{
        console.log("Please login.");
    }
    ```
- `0`,`""`,`undefined`,`null` count as false
    ```js
    // `0`,`""`,`undefined`,`null` count as false
    if (0){
        console.log("True");
    }else{
        console.log("False");
    }
    ```
- Exercise
    ```js
    /*Exercise:
    Create a variable that contains an array.
    Using an if statement with else if I want you to check the length of the array
    If it is empty print out "empty"
    If it has less than 5 elements print out "small"
    If it has less than 10 elements print out "medium"
    Otherwise print out "large" */
    const arr=[2,3,4,1,3,5,6,7,8,9,11]
    arr_length = arr.length
    if (arr_length === 0){
        console.log("empty");
    }else if(arr_length<5){
        console.log("small");
    }else if(arr_length<10){
        console.log("medium");
    } else{
        console.log("large");
    }
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### Ternary Operator
- Single line condition
    ```js
    // Normal if-else 
    const isUserLoggedIn=true
    if (isUserLoggedIn){
        console.log("User is logged in");
    }
    if (isUserLoggedIn)console.log("User is logged in");

    // Ternary Operator
    isUserLoggedIn ? console.log("User is logged in") : console.log("Not logged in");
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### Switch Statement
- If else to switch statement
    ```js
    // if else
    const favoriteAnimal = "Cat";

    if (favoriteAnimal == "Cat") {
    console.log("cats are pretty cool");
    } else if (favoriteAnimal == "Dog") {
    console.log("They are loud");
    } else if (favoriteAnimal == "Elephant") {
    console.log("Interesting choice");
    } else {
    console.log("Cool but unfamiliar");
    }

    // using switch
    switch (favoriteAnimal) {
    case "TCat":
    case "Cat":
        console.log("cats are pretty cool");
        break;
    case "Dog":
        console.log("They are loud");
        break;
    case "Elephant":
        console.log("Interesting choice");
        break;
    default:
        console.log("Cool but unfamiliar");
    }
    ```
- Exercise
    ```js
    /* 
    Exercise
    Create a switch that checks to see the value of the number variable 
    If the number is 0 print out "it is zero" 
    If the number is 1 or 2 print out "it is small" 
    If the number is 3 or 4 print out "it is medium" 
    If the number is 5 print out "it is large" 
    If the number is none of these print out "try again"
    */
    const num = 3

    switch(num){
        case 0:
        console.log("it is zero");
        break
        case 1:
        case 2:
        console.log("it is small");
        break
        case 3:
        case 4:
        console.log("it is medium");
        break
        case 5:
        console.log("it is large");
        break
        default:
        console.log("try again");
    }
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### For Loop
- For loop
    ```js
    // for loop
    for(let i=0;i<5;i++){
        console.log("Hi");
    }
    ```
- Loop through array using for loop
    ```js
    // loop through array using for loop
    const arr=[1,2,3,4,5,6]
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
    ```
- Loop through array using `forEach`
    ```js
    // loop through array using `forEach`
    arr.forEach(num=>{
        console.log(num);
    })
    ```
- Exercise
    ```js
    /* 
    Exercise
    Create a for loop that loops from 0 to 10 and prints out all values from 0 to 10 
    Modify this loop and exit the loop when the value is equal to 5 by using break 
    */
    for(let i=0;i<=10;i++){
        console.log(i);
        if (i===5) break
    }
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### While loop
- For loop to while loop
    ```js
    // for loop
    for(let i=0;i<5;i++){
        console.log(i);
    }

    // while loop
    let j=0
    while(j<5){
        console.log(j);
        j++
    }
    ```
- Example
    ```js
    // Example
    const person = {
        name:'Tansen',
        friend:{
            name:'Boch',
            friend:{
                name:'Sally',
            }
        }
    }

    let currentPerson=person
    while(currentPerson!=null){
        console.log(currentPerson.name);
        currentPerson=currentPerson.friend
    }
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### Recursion
- Stack Overflow Error 
    ```js
    // Stack Overflow Error 
    function printHi(){
        console.log("Hi");
        printHi()
    }
    printHi()
    ```
- Example 01 countdown
    ```js
    // Example 01 countdown
    // for loop 
    for (let i=1;i<=10;i++){
        console.log(i);
    }

    // using recursion 
    function printNumber(number){
        if (number>10) return
        console.log(number);
        printNumber(number+1)
        // console.log(number);
    }
    printNumber(1)

    function countDown(num){
        if (num<0){
            return console.log("Whats up");
            
        }
        console.log(num);
        countDown(num-1)
        
    }
    countDown(10)
    ```
- Example 02 sum
    ```js
    // Example 02 sum
    function sum(num){
        if (num<=0){
            return 0
        }
        return num+sum(num-1)
    }
    console.log(sum(5));
    ```
- Example 03 person names 
    ```js
    // Example 03 person names 
    const person={
        name:"Tansen",
        friend:{
            name:"Boch",
            friend:{
                name:"Shakil",
            }
        }
    }

    let currentPerson=person

    while(currentPerson!=null){
        console.log(currentPerson.name);
        currentPerson=currentPerson.friend
        
    }

    // using recursive
    function showName(currentPerson){
        if (currentPerson==null){
            return
        }
        console.log(currentPerson.name);
        showName(currentPerson.friend)
    }
    showName(person)

    ```

  [⬆️ Go to top](#beginner-section-topics)

#### Short Circuit Evaluation
- Logical AND (`&&`)
    ```js
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
    ```
- Logical OR (`||`)
    ```js
    // Logical OR (`||`)
    function fallbackValue() {
        console.log("Fallback function called");
        return "default";
    }
    
    let value = null;
    
    let result = value || fallbackValue();
    
    console.log(result);
    ```
- Conditional Execution
    ```js
    // Conditional Execution
    let user = {
        name: "Alice",
        isAdmin: true
    };
    
    user.isAdmin && console.log(`${user.name} is an admin`);
    ```
- Function Argument Defaults
    ```js
    // Function Argument Defaults
    function greet(name) {
        name = name || "Guest";
        console.log(`Hello, ${name}!`);
    }
    
    greet("John"); // Output: Hello, John!
    greet();       // Output: Hello, Guest!
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### Quiz app walkthrough
- Quiz app walkthrough step by step
    ```js
    /*
    TODO: 2. Select all elements needed
        * The form element (has the id `quiz-form`)
        * The answer inputs (have the class `answer`)
        * BONUS: The questions (have the class `question-item`)
        * BONUS: The alert (has the id `alert`)
    */
    const form = document.querySelector("#quiz-form")
    const answers=Array.from(document.querySelectorAll(".answer")) // HTML collection converted to array
    const questions=document.querySelectorAll(".question-item")
    const alert=document.querySelector("#alert")

    // TODO: 3. Create a submit event listener for the form that does the following.

    form.addEventListener("submit",e=>{
    //    1. Prevent the default behaviour
    e.preventDefault()
    
    //    6. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers
    questions.forEach(question=>{
        question.classList.add("incorrect")
    })

    //    2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
    const checkedAnswers=answers.filter(answer=>answer.checked)
    console.log(checkedAnswers);
    
    //    3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
    checkedAnswers.forEach(answer=>{
        const isCorrect = answer.value === "true"
        const questionItem=answer.closest(".question-item")
        
        //    4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
        if (isCorrect){
        questionItem.classList.add("correct")
        questionItem.classList.remove("incorrect")      
        }else{
        //    5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
        questionItem.classList.add("incorrect")      
        questionItem.classList.remove("correct")      
        }

        //    7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)
        const allCorrect=checkedAnswers.every(answer=> answer.value === "true")
        const allAnswered = checkedAnswers.length === questions.length
        console.log(allCorrect);
        
        if (allCorrect && allAnswered){
        alert.classList.add("active")
        setTimeout(()=>{
            alert.classList.remove("active")
        },1000)
        }
    })
    })
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### Form Validation Walkthrough
- Form validation walkthrough step by step
    ```js
    // TODO: Select all elements needed
    //    Use the HTML to figure out what classes/ids will work best for selecting each element
    const form = document.querySelector("#form")
    const usernameInput=document.querySelector("#username")
    const passwordInput=document.querySelector("#password")
    const passwordConfirmInput=document.querySelector("#password-confirmation")
    const termsInput=document.querySelector("#terms")
    const errorsContainer=document.querySelector(".errors")
    const errorsList=document.querySelector(".errors-list")
    // TODO: Create an event listener for when the form is submitted and do the following inside of it.
    form.addEventListener("submit",e=>{
    //    TODO: Create an array to store all error messages and clear any old error messages
    const errorMessages=[]
    clearErrors()
    //    TODO: Define the following validation checks with appropriate error messages
    //      1. Ensure the username is at least 6 characters long
    if (usernameInput.value.length<6){
        errorMessages.push("Username must be at least 6 characters")
    }
    //      2. Ensure the password is at least 10 characters long
    if (passwordInput.value.length<10){
        errorMessages.push("Password must be at least 10 characters")
    }
    //      3. Ensure the password and confirmation password match
    if (passwordInput.value!==passwordConfirmInput.value){
        errorMessages.push("Password and confirmation password not matched")
    }
    //      4. Ensure the terms checkbox is checked
    if (!termsInput.checked){
        errorMessages.push("Term checkbox is not checked")
    }
    console.log(errorMessages);
    if (errorMessages.length>0){
        e.preventDefault()
        showErrors(errorMessages)
    }
    //    TODO: If there are any errors then prevent the form from submitting and show the error messages
    })

    // TODO: Define this function
    function clearErrors() {
    // Loop through all the children of the error-list element and remove them
    // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
    // I recommend using a while loop to accomplish this task
    // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
    // Also, make sure you remove the show class to the errors container
    
    // easy way:
    // errorsList.innerHTML=""

    while(errorsList.children[0]!=null){
        errorsList.removeChild(errorsList.children[0])
    }
    errorsContainer.classList.remove("show")
    }

    // TODO: Define this function
    function showErrors(errorMessages) {
    // Add each error to the error-list element
    // Make sure to use an li as the element for each error
    // Also, make sure you add the show class to the errors container
    errorMessages.forEach(errorMessage=>{
        const li=document.createElement('li')
        li.innerText=errorMessage
        errorsList.appendChild(li)
    })
    errorsContainer.classList.add("show")
    }

    ```

  [⬆️ Go to top](#beginner-section-topics)

### Asynchronous Code
#### Callback
- Callback async
    ```js
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
    ```
- Creating function to call the callback async 
    ```js
    // creating function to call the callback async 
    function addClickEventListener(element,callback){
        element.addEventListener("click",callback)
    }
    addClickEventListener(btn,()=>{
        console.log("clicked");
    })
    ```
- Callback hell (can be prevented using promise)
    ```js
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
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### Promises
- Promise : resolve/reject --> then/catch
    ```js
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
    ```
- Normal to Promise `setTimeout`
    ```js
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
    ```
- Callback hell solution
    ```js
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
    ```
- Create a promise version of addEventListener
    ```js
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
    ```
- Simple Promises
    ```js
    // Simple Promises
    Promise.resolve('value').then(message=>{
        console.log(message);
    })
    Promise.reject('error message').catch(message=>{
        console.error(message);
    })
    ```
- Multiple promises (every promise need to be succeed or resolve/then won't execute)
    ```js
    // Multiple promises (every promise need to be succeed or resolve/then won't execute)
    Promise.all([
        Promise.resolve("1"),
        Promise.resolve("2"),
        Promise.resolve("3"),
    ]).then(messages=>{
        console.log(messages);
    })
    ```
- Any promise that succeed 
    ```js
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
    ```
- First promise that succeed/fail 
    ```js
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
    ```
- Promise fulfilled or rejected all printed out
    ```js
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
    ```
- Promise finally
    ```js
    // Promise finally
    const promise2 = Promise.reject("here")
    promise2.then(message=>{
        console.log(message);
    }).catch(error=>{
        console.error(error);
    }).finally(()=>{
        console.log("finally");
    })
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### Async Await
- Promise
    ```js
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
    ```
- Async Await
    ```js
    // Async Await
    function setTimeoutPromise(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        // resolve(`Waited ${delay} seconds`)
        reject("Error message");
        }, delay);
    });
    }
    async function dothing() {
    try {
        const message = await setTimeoutPromise(1000);
        console.log(message);
    } catch (error) {
        console.error(error);
    }
    }
    dothing();
    ```
- Example task
    ```js
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
    ```
- Run promises parallelly
    ```js
    // Run promises parallelly
    getValueWithDelay("Tansen", 1000).then((message) => console.log(message));
    getValueWithDelay("Boch", 1000).then((message) => console.log(message));
    getValueWithDelay("Shakil", 1000).then((message) => console.log(message));
    ```

  [⬆️ Go to top](#beginner-section-topics)

### Advanced DOM
#### Fetch
- Fetching json data using promise and async
    ```js
    // Normal promise fetch 
    const URL="https://jsonplaceholder.typicode.com/users"
    fetch(URL).then(response=>{
        // console.log(response);
        return response.json()
    }).then(data=>{
        data.map(name=>{
            console.log(name.username);
        })
    })

    // Async await fetch
    async function dothing(){
        try{
            const response = await fetch(URL)
            console.log(response.ok);
            if(response.ok){
                const data=await response.json()
                data.forEach(name=>{
                    console.log(name.username);
                })
            }else{
                console.log("Failure");
                
            }
        }catch(e){
            console.error(e);
            
        }
        
    }
    dothing()
    ```
- Fetch post
    ```js
    // fetch post
    const URL2="https://jsonplaceholder.typicode.com/posts"
    async function dothing2(){
        const response = await fetch(URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title:"New post"
            })
        })
        const post=await response.json()
        console.log(post);
    }
    dothing2()
    ```
- Exercise get all comment in post id 1 
    ```js
    // Exercise get all comment in post id 1 
    const URL3="https://jsonplaceholder.typicode.com/comments?postId=1"

    // with normal promise fetch 
    fetch(URL3).then(response=>{
        return response.json()
    }).then(data=>{
        console.log(data);
        
    })

    // with async fetch
    async function getComments() {
        const response=await fetch(URL3)
        const comments = await response.json()
        console.log(comments);
    }
    getComments()
    ```

  [⬆️ Go to top](#beginner-section-topics)

#### Event loop
- Main thread vs task queue
    - Main thread run all the code
    - Task queue execute one by one
    - Task queue wait for other to run first in main thread then run
        ```js
        // Main thread vs task queue 
        function test(){
            console.log("Hi 1");
            console.log("Hi 2");
            setTimeout(()=>{
                console.log("Hi 3");
            },10)
            new Promise((resolve,reject)=>{
                resolve("Hi promise")
            }).then(message=>{
                console.log(message);
            })
            setTimeout(()=>{
                console.log("Hi 4");
            },0)
            console.log("Hi 5");
        }
        test()
        ```
    - In the task queue promise run first then callback run

  [⬆️ Go to top](#beginner-section-topics)

#### Event Delegation
- Simple click event listener (Button->Body->Document)
    ```js
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
    ```
- Creating new button and adding Event Listener with `matches`
    ```js
    // Creating new button and adding Event Listener with `matches`
    const newButton=document.createElement("button")
    newButton.innerText="Button 5"
    document.body.append(newButton)
    document.addEventListener("click",e=>{
        if(e.target.matches("button")){
            console.log("Clicked button 5");
        }
    })
    ```

  [⬆️ Go to top](#beginner-section-topics)