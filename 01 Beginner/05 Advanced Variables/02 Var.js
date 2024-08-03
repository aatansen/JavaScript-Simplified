// Var 
var a = 1
console.log(a);

// breaking scoping rule
{
    var b = 2
    console.log(b);
}
console.log(b);

// hoisted as `undefined`
console.log(c);
var c = 3
