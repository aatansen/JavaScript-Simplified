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