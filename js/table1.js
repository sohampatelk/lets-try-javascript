/* 
Logic behind table form database
*/
//var i = 0;
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

    //Take table body element into variable
    var tableBody = document.getElementById("myTableBody");
    //table.insertRow(i);

    var tableNew = document.createElement("table");
    //myFirstLink.className = "my-link";

    var tableBody = document.createElement("tbody");
    var tableRow = document.createElement("tr");

    var tableData1 = document.createElement("td");
    var tableData2 = document.createElement("td");
    var tableData3 = document.createElement("td");
    var tableData4 = document.createElement("td");
    
    tableData1.textContent = nameValue;
    tableData2.textContent = ageValue;
    tableData3.textContent = schoolClassValue;
    tableData4.textContent = cityValue;

    tableData1.className = "TableData";
    tableData2.className = "TableData";
    tableData3.className = "TableData";
    tableData4.className = "TableData";

    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    tableRow.appendChild(tableData3);
    tableRow.appendChild(tableData4);

    tableBody.appendChild(tableRow);
    tableNew.appendChild(tableBody);
    document.body.appendChild(tableNew);

/* 
    var tableRow = document.createElement("tr");

    var td1 = document.querySelector(".myTableData1");
    var td2 = document.querySelector(".myTableData2");
    var td3 = document.querySelector(".myTableData3");
    var td4 = document.querySelector(".myTableData4");
    td1.textContent = nameValue;
    td2.textContent = ageValue;
    td3.textContent = schoolClassValue;
    td4.textContent = cityValue;
    var cellText = document.createTextNode(td1); */

    //reset the form
    document.getElementById("calculator").reset();
});

