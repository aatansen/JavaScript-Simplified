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
