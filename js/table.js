/* 
Logic behind table form database
*/
var i = 0;

var calculateForm = document.getElementById("calculator");

calculateForm.addEventListener("submit",function(event){

    //stop the submission
    event.preventDefault();

    //collect the form fields
    var nameInput = document.getElementById("first-name");
    var ageInput = document.getElementById("age");
    var schoolClassInput = document.getElementById("school-class");
    var cityInput = document.getElementById("city");

    //retrive the values from form fields
    var nameValue = nameInput.value;
    var ageValue = ageInput.value;
    var schoolClassValue = schoolClassInput.value;
    var cityValue = cityInput.value;


    var tableBody = document.getElementById("myTableBody");
    //table.insertRow(i);
    // Creating a row
    var row = tableBody.insertRow(i);
    //Creating a cell
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    //give value to each cell
    cell1.innerHTML = nameValue;
    cell2.innerHTML = ageValue;
    cell3.innerHTML = schoolClassValue;
    cell4.innerHTML = cityValue;
    //increment counter for table row
    i++;
    //reset the form
    document.getElementById("calculator").reset();
});