/*pass by value
    - When a variable is passed to another variable, the value remains independent of the other with each occupying different memory space
*/

let firstVariable = 15;
let newVariable = firstVariable;

firstVariable = 20;
console.log("This is the first variable", firstVariable);
console.log("This is the new variable", newVariable);

/*pass by reference
    - Javascript arrays and objects use pass by reference property
    - The variables directly passes the memory reference/address, when assigned to a new variable, both point to the same memory address
*/

let firstObject = { test: "case 1" };
let newObect = firstObject;

firstObject.test = "case 2";

console.log("This is the first object", firstObject.test);
console.log("This is the new object", newObect.test);
