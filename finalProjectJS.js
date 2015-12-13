  /* 
  This is a program designed by Tim Bell for the Programming Fundamentals class
  at CVTC and submitted on December 12, 2015.
  
  The program is a math game for children.
  
  Problem Statement

  Create a program that will ask the user what type of math problems they would like 
  to do: addition, subtraction, multiplication or division.  The program will then
  present three problems with random numbers to the user and ask for their answers.
  The program will then provide output to the user stating if their answer was correct or incorrect. 
  
  */


// The Addition function is designed to produce simple addition problems using
// random numbers between 0 and 10.  If something besides a number is entered,
// it will request that a number is entered by the user.

function Addition () {
  var additionAnswer;
  var additionNumber1 = 0;
  var additionNumber2 = 0;
  var additionOutput;
  var notANumber;
  
  additionNumber1 = FirstNumber();
  additionNumber2 = SecondNumber();
  
  additionAnswer = prompt("What is " + additionNumber1 + " + " + additionNumber2 + "?");
  
  while (isNaN(additionAnswer)) {
    notANumber = alert(additionAnswer + " is not a valid answer. Please use the numeric pad.");
    additionAnswer = prompt("What is " + additionNumber1 + " + " + additionNumber2 + "?");
  }

  additionAnswer = Number(additionAnswer);
  
  if (additionAnswer === (additionNumber1 + additionNumber2)) {
    additionOutput = CorrectAnswer(additionAnswer);
  } else {
    additionOutput = IncorrectAnswer(additionAnswer);
  }
  
  return(additionOutput);
}


// The Subtraction function is designed to produce simple subtraction problems
// using random numbers between 0 and 10 for the first number and between 0 and the 
// first number, so that negative answers are not generated.  If something besides
// a number is entered, it will request that a number is entered by the user.

function Subtraction() {
  var notANumber;
  var subtractionAnswer;
  var subtractionNumber1 = 0;
  var subtractionNumber2 = 0;
  var subtractionOutput;
  
  subtractionNumber1 = FirstNumber();
  subtractionNumber2 = Math.floor(Math.random() * subtractionNumber1);
  
  subtractionAnswer = prompt("What is " + subtractionNumber1 + " - " + subtractionNumber2 + "?");

    while (isNaN(subtractionAnswer)) {
    notANumber = alert(subtractionAnswer + " is not a valid answer. Please use the numeric pad.");
    subtractionAnswer = prompt("What is " + subtractionNumber1 + " - " + subtractionNumber2 + "?");
  }
  
  subtractionAnswer = Number(subtractionAnswer);
  
  if (subtractionAnswer === (subtractionNumber1 - subtractionNumber2)) {
    subtractionOutput = CorrectAnswer(subtractionAnswer);
  } else {
    subtractionOutput = IncorrectAnswer(subtractionAnswer);
  }
  return(subtractionOutput);
}


// The Multiplication function is designed to produce simple multiplication problems
// using random numbers between 0 and 5.  If something besides a number is entered
// by the user, it will request that a number is entered by the user.

function Multiplication() {
  var multiplicationAnswer = 0;
  var multiplicationNumber1 = 0;
  var multiplicationNumber2 = 0;
  var multiplicationOutput;
  var notANumber;
  
  multiplicationNumber1 = Math.ceil(Math.random() * 5);
  multiplicationNumber2 = Math.ceil(Math.random() * 5);
  
  multiplicationAnswer = prompt("What is " + multiplicationNumber1 + " x " + multiplicationNumber2 + "?");

  while (isNaN(multiplicationAnswer)) {
    notANumber = alert(multiplicationAnswer + " is not a valid answer. Please use the numeric pad.");
    multiplicationAnswer = prompt("What is " + multiplicationNumber1 + " x " + multiplicationNumber2 + "?");
  }
  
  multiplicationAnswer = Number(multiplicationAnswer);
  
  if (multiplicationAnswer === (multiplicationNumber1 * multiplicationNumber2)) {
    multiplicationOutput = CorrectAnswer(multiplicationAnswer);
  } else {
    multiplicationOutput = IncorrectAnswer(multiplicationAnswer);
  }
  return(multiplicationOutput);
}


// The Division function is designed to produce simple division problems
// using random numbers from arrays.  The second number will divide evenly into
// the first number, so that only whole number answers are produced.  If something
// besides a number is entered, it will request that a number is entered by the user.

function Division() {
  var divisionAnswer = 0;
  var divisionFirstNumbers = [2,4,6,8,10];
  var divisionNumber1 = 0;
  var divisionNumber2 = 0;
  var divisionOutput = "";
  var divisionSecondNumbers = [1,2];
  var notANumber;
  
  divisionNumber1 = divisionFirstNumbers[Math.floor(Math.random() * 4)];
  divisionNumber2 = divisionSecondNumbers[Math.floor(Math.random() * 2)];
  
  divisionAnswer = prompt("What is " + divisionNumber1 + " / " + divisionNumber2 + "?");

  while (isNaN(divisionAnswer)) {
    notANumber = alert(divisionAnswer + " is not a valid answer. Please use the numeric pad.");
    divisionAnswer = prompt("What is " + divisionNumber1 + " / " + divisionNumber2 + "?");
  }
  
  divisionAnswer = Number(divisionAnswer);
  
  if (divisionAnswer === (divisionNumber1 / divisionNumber2)) {
    divisionOutput = CorrectAnswer(divisionAnswer);
  } else {
    divisionOutput = IncorrectAnswer(divisionAnswer);
  }
  return(divisionOutput);
}


// The CorrectAnswer function is called by all of the operator functions when a
// correct answer is entered by the user.  The function generates a response that
// includes the user's input.

function CorrectAnswer(correctAnswer) {
  var correctAnswerOutput;

  correctAnswerOutput = "<p>You entered " + correctAnswer + ".</p><h1>YOU ARE CORRECT!</h1>";

  return (correctAnswerOutput);
}


// The incorrectAnswer function is called by all of the operator functions when an
// incorrect answer is entered by the user.  The function generates a response that
// includes the user's input.

function IncorrectAnswer(incorrectAnswer) {
  var incorrectAnswerOutput;

  incorrectAnswerOutput = "<p>You entered " + incorrectAnswer + ".</p><h3> That is incorrect. Please try again.</h3>";

  return (incorrectAnswerOutput);
}


// The FirstNumber function is called by Addition and Subtraction functions to
// generate the first number of the math problem.

function FirstNumber() {
  var firstNumber;

  firstNumber = Math.floor(Math.random() * 10);
  Number(firstNumber);

  return(firstNumber);
}


// The SecondNumber function is called by Addition function to generate the
// second number of the math problem.

function SecondNumber() {
  var secondNumber;

  secondNumber = Math.floor(Math.random() * 10);
  Number(secondNumber);

  return(secondNumber);
}


// The WriteOutput function is called each time the user enters input.  This
// function eliminates the need for multiple document.write statements.

function WriteOutput(outputStatement) {
  document.write("<p>" + outputStatement + "</p>");
}


// The Main function contains the algorithm for accepting the user input and
// determining which type of problem the user would like to work with.  Once the
// user makes a selection, the Main function calls the appropriate operator
// function and has output returned to it.  The Main function then sends their
// output to the WriteOutput function to be displayed to the user.

function Main() {
  var output;
  var outputArea = document.getElementById('outputArea');
  var problemType;
  
  // Get the problem type field from the webpage
  var problemTypeField = document.getElementById('problemTypeField');

  // This prevents the form from being submitted to a server
  selectProblemType.addEventListener("submit", function(event) {
    event.preventDefault();

  problemType = problemTypeField.value;

  
  // Once the user selects which type of problem they would like to work with,
  // the switch statement calls the appropriate operator function.  The program
  // loops through the operator function 3 times and sends the output to the
  // the WriteOutput function to be displayed to the user.
  
  switch (problemType) {
    case "a":
      for(var additionCounter = 0; additionCounter < 3; additionCounter ++){
        output = Addition();
        WriteOutput(output);
      }
      break;
    case "s":
      for(var subtractionCounter = 0; subtractionCounter < 3; subtractionCounter ++){
      output = Subtraction();
      WriteOutput(output);
      }
      break;
    case "m":
      for(var multiplicationCounter = 0; multiplicationCounter < 3; multiplicationCounter ++){
      output = Multiplication();
      WriteOutput(output);
      }
      break;
    case "d":
      for(var divisionCounter = 0; divisionCounter < 3; divisionCounter ++){
      output = Division();
      WriteOutput(output);
      }
      break;
    default:
      WriteOutput("Please enter a, s, m or d.");
  }

  outputArea.innerHTML = output;
    
  });

 
}
  

Main();
