//var variableName = document.getElementById("id name for element"); //by get element id . we need id must
//var variableName = document.querySelector("#id or.classname or pathfrom parent to child by line 15,16");  // by query selector method..we can doit with id ,class name, any element shown in line 15,16.

//alert("Hello World");

/* TAble exercise */

var myForm = document.getElementById("table-form");

function deleteRow(element){//element will be button what we pressed it.
    var tableRow = element.parentNode.parentNode;//2 levels up from bottom,to get our row.
    tableRow.parentNode.removeChild(tableRow);//an element can not delete itself...so we havve to tell the parent to do it for us..
}

//grab existing buttons..
var allButtons = document.querySelectorAll("td>button");
//Loop through our query selected buttons,
for(var i=0; i<allButtons.length ; i++){
    //lets add listerners to these!!
    allButtons[i].addEventListener("click",function(event){
        deleteRow(this);
    });
}

// myform event lisner
myForm.addEventListener("submit",function(event){
    //prevent the form from actually submitting (would leave or refresh the page.)
    event.preventDefault();

    //grab your input elements..
    var nameField = document.querySelector("form>label>input");//get the first element only just NAME input
    var ageField = document.querySelector("#age");  //get element by ID from query selector
    var schoolClassField = document.getElementById("school-class");
    var cityField = document.getElementById("city");


    //Extract Values from fields
    var nameValue = nameField.value;
    var ageValue = ageField.value;
    var schoolClassValue = schoolClassField.value;
    var cityValue = cityField.value;

    // Create a new element (table row)
    var newRow = document.createElement("tr");

    //Create a new element table data for each row
    // first for name cell
    var nameCell = document.createElement("td");
    nameCell.textContent = nameValue;//add our text to cell.
    newRow.appendChild(nameCell);
    
    // second for age cell
    var ageCell = document.createElement("td");
    ageCell.textContent = ageValue;//add our text to cell.
    newRow.appendChild(ageCell);
    
    // third for schoolclass cell
    var schoolClassCell = document.createElement("td");
    schoolClassCell.textContent = schoolClassValue;//add our text to cell.
    newRow.appendChild(schoolClassCell);
    
    // forth for city cell
    var cityCell = document.createElement("td");
    cityCell.textContent = cityValue;//add our text to cell.
    newRow.appendChild(cityCell);


    //Create a delete button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Row";//add some text
    //delete button ,add listener now active when you add new table data for pewssing delete button
    // This elements are being dynamically added-the event lisner we added earlier woudn't see it! we have to add event lisner as we are making them instead here.
    deleteButton.addEventListener("click",function(event){
        deleteRow(this);//delete the row
        //inthis case, "this" is the element the EVENT is happening too!!
        //remember objects! we used "this" to refer to itself there too!!
    });
    var actionCell = document.createElement("td");//Create the action cell
    actionCell.appendChild(deleteButton);//add the button inside 
    newRow.appendChild(actionCell); //dont forget to add new cell into row too!!


    //target your table body
    var tableBody = document.getElementById("table-body"); //by get element id .
    //var tableBody = document.querySelector(".tableBody");  // by query selector method..id or classor path parent to chield.
    tableBody.appendChild(newRow); //inject the brand new row ,so, user can see it.

    //Reset all element in table 
    document.getElementById("table-form").reset();

});



