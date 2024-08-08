// Q1. Write a program to demonstrate how a function can be passed as a parameter to another function.
// Ans.
function outer(inner) {
  inner();
  inner();
  inner();
}

function random() {
  let a = Math.random() * 10;
  console.log(Math.round(a));
}

outer(random);

// Q2. An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the first letter of both the arguments. For the arguments Roger and Waters, the function returns ‘RW’. Write this function.

// Ans.

const arrow = (firstName, lastName) => {
  let str = firstName[0] + lastName[0];
  return str;
};

console.log(arrow("Roger", "Water"));
