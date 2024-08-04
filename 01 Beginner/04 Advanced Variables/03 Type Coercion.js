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

// Null Coercion 
Boolean(null);      // false
String(null);       // "null"
Number(null);       // 0

// Undefined Coercion
Boolean(undefined); // false
String(undefined);  // "undefined"
Number(undefined);  // NaN

// Coercion in Operations
5 + "5";           // "55"
"5" + 5;           // "55"

// If operands are not numbers, they are coerced to numbers
"5" - 2;           // 3
"5" * "2";         // 10
"5" / "2";         // 2.5