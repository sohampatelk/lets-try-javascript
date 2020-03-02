// alert("Hello World");

//single line
var myInteger = 30;
console.log("Hello Word!! in console");
console.log(myInteger * 3);

if (myInteger > 5) {
  console.log("Number is greater than 5");
} else if (myInteger < 5) {
  console.log("number is less than 5");
} else if (myInteger === 7 || myInteger === 34) {
  console.log("Number is .......7 or 34");
} else if (myInteger === 6 && myInteger > 5) {
  console.log("number is 5?????");
} else {
  console.log("Number is anything.....");
}

var myString = "hello world";
var myInteger = 64;
var myFloat = 12.78;
var myBoolean = true;
var uhoh = undefined; //No value is yet assigned.
var myNull = null; //The value/variable doesn't exist.
var myArray = [myString, myInteger, myFloat, myBoolean, uhoh, myNull];

for (var i = 0; i < myArray.length; i++) {
  console.log("value of position: " + i + ", in myArray,is " + myArray[i]);
}

//A bsic function which starts with function keyword.
function getValue() {
  console.log("Enter the name:  ");
  return prompt();
}

function addSmile(inputValue) {
  return inputValue + ":)";
}

function addSmileLft(addSmileRight) {
  return "(:" + addSmileRight;
}

function finalValue(addSmileLeft) {
  console.log(addSmileLeft);
}

var inputValue = getValue();
var addSmileRight = addSmile(inputValue);
var addSmileLeft = addSmileLft(addSmileRight);
finalValue(addSmileLeft);
