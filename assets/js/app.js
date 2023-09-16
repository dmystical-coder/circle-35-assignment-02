const body = document.querySelector("body");
const display=document.querySelector(".display")
const calculatorcontainer = document.querySelector(".calculatorcontainer");
const btncontainer = document.querySelector(".btncontainer");
const btnsectionA = document.querySelector(".btnsectionA");
const btnsectionB  = document.querySelector(".btnsectionB");
const btnsectionBi = document.querySelector(".btnsectionBi");
const btnsectionBii= document.querySelector(".btnsectionBii");
const btnsingle= document.querySelector(".btnsingle");
// const btndoublecolumn = document.querySelector(".btndoublecolumn");
const  btnreturn= document.querySelector(".btnreturn");
const  btndivide= document.querySelector(".btndivide");
const btnmultiply = document.querySelector(".btnmultiply");
const  btnsubtract= document.querySelector(".btnsubtract");
const btnadd = document.querySelector(".btnadd");
const  btn1= document.querySelector(".btn1");
const  btn2= document.querySelector(".btn2");
const  btn3= document.querySelector(".btn3");
const  btn4= document.querySelector(".btn4");
const  btn5= document.querySelector(".btn5");
const  btn6= document.querySelector(".btn6");
const  btn7= document.querySelector(".btn7");
const  btn8= document.querySelector(".btn8");
const  btn9= document.querySelector(".btn9");
const  btn0= document.querySelector(".btn0");
const  btndot= document.querySelector(".btndot");
const  btnequal= document.querySelector(".btnequal");
//  const calculatorcontainer = document.getElementsByClassName(
//    "calculatorcontainer"
//  );
const toggle = document.getElementById("toggle");
toggle.onclick = function () {
   calculatorcontainer.classList.toggle("active");
  toggle.classList.toggle("active");
  body.classList.toggle("active");
   display.classList.toggle("active")
   btncontainer.classList.toggle("active")
  btnsectionA.classList.toggle("active")
  btnsectionB.classList.toggle("active")
  btnsectionBi.classList.toggle("active")
  btnsectionBii.classList.toggle("active")
  btnsingle.classList.toggle("active")
  // btndoublecolumn.classList.toggle("active")
  btnreturn.classList.toggle("active")
  btndivide.classList.toggle("active");
  btnsubtract.classList.toggle("active");
  btnadd.classList.toggle("active");
  btn1.classList.toggle("active");
  btn2.classList.toggle("active");
  btn3.classList.toggle("active");
  btn4.classList.toggle("active");
  btn5.classList.toggle("active");
  btn6.classList.toggle("active");
btn7.classList.toggle("active");
  btn8.classList.toggle("active");
  btn9.classList.toggle("active");
  btn0.classList.toggle("active");
  btndot.classList.toggle("active");
  btnequal.classList.toggle("active");
  btnmultiply.classList.toggle("active")

};

// Function to update the calculation value
let calculation = '';

function updateCalculation(value) {
  calculation += value;
  document.getElementById('calculation-display').innerText = calculation;
  console.log(calculation);
}

// Function to get the calculation results
function calculateResult() {
    calculation = eval(calculation);
   console.log(calculation)
  }

  // Find the clear button element by ID
const clearButton = document.getElementById('clear-button');

// Add a click event listener to the clear button
clearButton.addEventListener('click', function () {
  calculation = ''; // Clear the calculation
  console.log(calculation)
  document.getElementById('calculation-display').innerText = '0'; // Clear the display
  document.getElementById('result-display').innerText = ''; // Clear the result display

 });

 // Add a click event listener to the delete button

 const deleteButton = document.querySelector('.btndel');

deleteButton.addEventListener('click', function () {
  deleteLastCharacter();
  document.getElementById('calculation-display').innerText = calculation;
});

 // Function to delete the last character
function deleteLastCharacter() {
  calculation = calculation.slice(0, -1); // Remove the last character
 console.log(calculation)
}

function calculateResult() {
  try {
    calculation = eval(calculation);
    console.log(calculation); // Log to console
    document.getElementById('result-display').innerText = calculation; // Update the result display
  } catch (error) {
    document.getElementById('result-display').innerText = 'Error';
    calculation = '';
    console.log(calculation)
  }
  
}


