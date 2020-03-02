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
  return prompt("Enter Your Name:");
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

/*
true === true
1 == true
0 == false
undefined == false
null == false
NaN == false
"" == false
*/

var a=3;
var b=5;
if(a===b){
    console.log("a is identical to b");
}else{
    console.log("a and b are not identical.");
}
//Converting to turnary
/**
 * Sysntax is:
 * (condition)?logic for true:logic for false;
 * note that it returns the outcome, so, it can be used for assignment.
 */
(a===b)?console.log("a and b are identical"):console.log("a and b not identical");;


// While Loop
var i =0;
while(i<6){
    console.log("While Loop:"+i);
    i++;
}

//Foreach It is a method for array datatype.
myArray.forEach( function(arrayItem) { 
    //Woah .we are in a closure, or anounomous function" now. We didn't declare and 
    //name , so won't be able to call it again...
    //It is useful here to process our array items though!!
    console.log("Array Item is: "+arrayItem);
});


/*
{   name: "Bob",
    age: 32,
    hobbies: ["sports","moveies","hike"]  }
*/


var myObject = { 
    name: "Bob", 
    age: 32, 
    hobbies: [
        "sports",
        "moveies",
        "hike"
    ]    
};

console.log("hello my name is "+myObject.name+". I am "+myObject.age+" years old. and one of my hobby is "+myObject.hobbies[1]+".");