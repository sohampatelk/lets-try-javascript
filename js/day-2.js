alert("Hello world");

var myNumber = "54"; //accept as a string

console.log(myNumber + 6); //contacination occurs
muNumber = parseInt(myNumber); //parsing from string to int

console.log(myNumber + 6); //additionoccurs..

myNumber = parseFloat(myNumber); //now it is float

console.log(myNumber + 6); //addition

myNumber = Number(myNumber); //now it is 64 bit floating point
//numeric this is only actual type of number in javascript

console.log(myNumber + 6);

/* 
Conver number to string
*/

myNumber = myNumber.toString();

console.log(myNumber + 6); //contacination happens because of string

var myString = "Hello World";

console.log("Test 1");
console.log(myString); //Hello World

myString = 5;
console.log("Test 2");
console.log(myString); //5

myString = myString * 3;
console.log("Test 3");
console.log(myString); //15

myString = "Updated String";
console.log("Test 4");
console.log(myString); //Updated String

myString = { another: "string test!?" };
console.log("Test 5");
console.log(myString); //another:"string test1?"

//Changed made by soham/....

//changed by laptop...............

//add by desktop..

/* 
Switch case Statements
*/
var mathOperation = "add";
//If you dont put the brakes when it hits right condition then all condition print.
switch (mathOperation) {
  case "add":
    console.log(5 + 5);
    break;
  case "substract":
    console.log(5 - 5);
    break;
  case "devide":
    console.log(5 / 5);
    break;
  case "multiply":
    console.log(5 * 5);
    break;
  default:
    console.log("no operation provided.");
    break;
}
