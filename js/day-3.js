/* Day 3 practise
    Objects again!!
*/
alert("hello world");

var myObject = {
  firstName: "Soham",
  lastName: "Patel",
  sayHello: function() {
    var newP = document.createElement("p"); //Created element p
    newP.textContent = "Hey There!!!"; //in that element we just add text by text Context.
    document.body.appendChild(newP); // append in last into body
    document.body.innerHTML +=`
        <dl><!-- A dataList-->
            <dt>First Name:</dt> <!-- A dataList Title -->
            <dd>`+this.firstName+`</dd> <!-- A dataList data is followed by datalist title-->
            <dt>Last Name:</dt>
            <dd>`+this.lastName+`</dd>
        </dl>
    `;
  }
};
