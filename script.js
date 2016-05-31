//create array of employees
var employeeList = [];

//create function to receive input from user
var submit = function (){

  var firstName = document.getElementById('nameInFirst').value;
  var lastName = document.getElementById('nameInLast').value;
  var empID = document.getElementById('empIDIn').value;
  var empTitle = document.getElementById('titleIn').value;
  var empSalary = document.getElementById('salaryIn').value;

//make new employee object
  var newEmp = {
'firstName' : firstName,
'lastName' : lastName,
'empID' : empID,
'empTitle' : empTitle,
'empSalary' : empSalary
};
//push values received into employees array
employeeList.push(newEmp);
// display emp list on the DOM
var empList = function(){
  document.getElementById("output").innerHTML = "";
  for( var i = 0; i< employeeList.length; i++ ){
    var empDisplay ="First Name: " + employeeList[i].firstName + ";  Last Name: " + employeeList[i].lastName + ";  EmployeeID: " + employeeList[i].empID + ";  Job Title: " + employeeList[i].empTitle + "; Employee Salary: " + employeeList[i].empSalary;
    document.getElementById("output").innerHTML += '<p>' + empDisplay + '</p>';
  }
};

empList();



// addSalary();
var totalSalary = 0;
var monSalary = 0;
//attempt to add salary together in a function
var addSalary = function (){

for (i =0; i < employeeList.length; i ++){
  var salary = Number(employeeList[i].empSalary);
totalSalary += salary;
monSalary = totalSalary / 12;

console.log(monSalary);

}
//show total salary on the dom. not currently working ** ask for help
var salaryList = function(){
  document.getElementById("output2").innerHTML = "";
  for( var i = 0; i< employeeList.length; i++ ){
    var salDisplay = "Total Salary= " + totalSalary;
    document.getElementById("output2").innerHTML += '<p>' + salDisplay + '</p>';
  }
};
};



addSalary();
// var salaryList = function(){
//   document.getElementById("output2").innerHTML = "";
//   for( var i = 0; i< employeeList.length; i++ ){
//     var salDisplay = "Total Salary= " + totalSalary;
//     document.getElementById("output2").innerHTML += '<p>' + salDisplay + '</p>';
//   }
// };

}; //end of function submit.
////attempt to add salaries by creating another array and summing it

// var salary = employeeList.empSalary;
// salaries.push(salary);
// console.log(salaries);
// };

//// attempting to i'm not sure

// var salary = number(employeeList.empSalary);
// Salary  += salary / 12;
//Displays employees in the DOM
// var empList = function(){
//   document.getElementById("output").innerHTML = "";
//   for( var i = 0; i< employeeList.length; i++ ){
//     var empDisplay ="First Name: " + employeeList[i].firstName + ";  Last Name: " + employeeList[i].lastName + ";  EmployeeID: " + employeeList[i].empID + ";  Job Title: " + employeeList[i].empTitle + "; Employee Salary: " + employeeList[i].empSalary;
//     document.getElementById("output").innerHTML += '<p>' + empDisplay + '</p>';
//   }
// };
