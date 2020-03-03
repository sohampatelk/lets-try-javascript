/*
Using what you just learned about conditional statements and loops, 
write a program that uses console.log() to print all the numbers from 1 to 100, 
with two exceptions.
For numbers divisible by 3, print Fizz instead of the number, and for numbers 
divisible by 5 (and not 3), print Buzz instead.
When you have that working, modify your program to print FizzBuzz, for numbers 
that are divisible by both 3 and 5 (and still print Fizz or Buzz for numbers divisible 
    by only one of those).
*/

//taking num 1 to 100.
for (var i = 1; i <= 100; i++) {
    //it is divided by 3 and 5 both then this condition true.
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {    //num devisable by just 3
        console.log("Fizz");
    } else if (i % 5 == 0) {    //num is devisable by 5 but not 3. 
        console.log("Buzz");
    } else {
        console.log(i);         //other numbers are printed here.
    }
}


/**
 * New Exercise:
===
Build a JS object of your own to represent a hotel.
Properties of the hotel object should include the name of the hotel (The Quay), 
the total number of rooms (40), the current number of rooms booked (25), 
an array of the types of rooms (twin, double, suite), 
and function to check the availability.
One you've created your object, create a loop to log to 
the console all of the room types one-by-one. Then, update the booked rooms to 30, 
check the new availability, and output that using console.log
 */

var myHotel = {
    nameOfHotel : "The Quay",
    numOfRooms : 40,
    currentRoomsBooked : 25,
    typeOfRooms :[
        "twin",
        "double",
        "suite"
    ],
    checkTheAvailability : function(){
        return (this.numOfRooms-this.currentRoomsBooked);
    }
}

//Loop to log to the console all of the room types one-by-one
for(var i in myHotel){
    console.log(myHotel[i]);
}

myHotel.currentRoomsBooked += 5;//Incease the value to 30.

console.log(myHotel.checkTheAvailability());