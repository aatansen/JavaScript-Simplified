// double equal vs triple equal 
{
const a=1
const b="1"
console.log(a==b); // true

const c=0 // also true for `""`
const d=false
console.log(c==d); // true
}

// To prevent type coercion `===` used
{
const a=1
const b="1"
console.log(a===b); // false

const c=0 // also false for `""`
const d=false
console.log(c===d); // false
}