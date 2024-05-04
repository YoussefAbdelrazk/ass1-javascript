
// 1 

// let num = prompt("Enter a number : ")
// let result = parseInt(num)
// console.log("output: " , result);



//////////////////////////////////////////

// 2 

// let num = prompt("enter a number")
// let result = parseInt(num)

// if(result %3 == 0 && result %4 == 0){
//   console.log("output yes ")
// }else{
//   console.log("output no")
// }

/////////////////////////////////////////

// 3

// let input = prompt(" enter two integers ");

// let numbers = input.split(" ");
// console.log(numbers)

// let num1 = parseInt(numbers[0]);
// let num2 = parseInt(numbers[1]);

// if (num1 > num2) {
//     console.log("Output:", num1);
// } else {
//     console.log("Output:", num2);
// }

///////////////////////////////////////////
 
// 4 

// let num = prompt("enter a number")

// let result = parseInt(num)

// if(result < 0 ){
//   console.log(" negetive number")
// }else{
//   console.log("positive number")
// }

///////////////////////////////////////////////////

// 5 


// let input = prompt(" enter 3 numbers");

// let numbers = input.split(/[,\s]+/);

// let num1 = parseInt(numbers[0]);
// let num2 = parseInt(numbers[1]);
// let num3 = parseInt(numbers[2]);

// let max = num1;
// if (num2 > max) {
//     max = num2;
// }
// if (num3 > max) {
//     max = num3;
// }

// let min = num1;
// if (num2 < min) {
//     min = num2;
// }
// if (num3 < min) {
//     min = num3;
// }

// console.log("Max element =", max);
// console.log("Min element =", min);
////////////////////////////////////////////////////////

// 6 


// let num = prompt("enter a number")

// let result = parseInt(num)

// if(result %2 == 0 ){
//   console.log("even")
// }else{
//   console.log("odd")
// }

////////////////////////////////////


// 8 

// let character = prompt("enter a character:");


// if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
//     console.log("Output: vowel");
// } else {
//     console.log("Output: consonant");
// }

/////////////////////////////////////////

// 9

// let number = parseInt(prompt(" enter an number :"));

// let numbersString = "";

// for (let i = 1; i <= number; i++) {

//     numbersString += i;

//     if (i < number) {
//         numbersString += ", ";
//     }
// }


// console.log( numbersString);

///////////////////////////////////////////////////////

// 10 


// let number = prompt("Enter an number:");
// number = parseInt(number);  

// if (isNaN(number)) {
//     console.log("enter a valid number ");
// } else {
    
//     let output = "";
//     for (let i = 1; i <= 12; i++) {
//         output += (number * i) + " ";
//     }
//     console.log(output);  
// }


////////////////////////////////////////////////////////////

// 11 


// let maxNumber = prompt("Enter a number ");
// maxNumber = parseInt(maxNumber);  


// if (isNaN(maxNumber)) {
//     console.log("enter a valid number");
// } else {

//     let output = "";

//     for (let i = 1; i <= maxNumber; i++) {

//         if (i % 2 === 0) {
//             output += i + " "; 
//         }
//     }
//     console.log(output);  
// }

/////////////////////////////////////////////////////

// 12 


// function calculateResults() {
//   let totalMarks = 0;
//   let marks = [];
  
//   for (let i = 1; i <= 5; i++) {

//       let mark = prompt(`Enter marks  ${i}:`);
//       mark = parseInt(mark);

//       if (isNaN(mark)) {
//           console.log("Invalid input");
//           return; 
//       }
//       marks.push(mark);
//       totalMarks += mark;
//   }

//   let averageMarks = totalMarks / marks.length;

//   let percentage = (totalMarks / (marks.length * 100)) * 100;


//   console.log(`Total marks = ${totalMarks}`);
//   console.log(`Average Marks = ${Math.round(averageMarks)}`);
//   console.log(`Percentage = ${Math.round(percentage)}`);
// }

// calculateResults();


//////////////////////////////////////////////////////////////

// 13 


// function daysInMonth() {

//   let monthNumber = prompt("Enter Month Number");
//   monthNumber = parseInt(monthNumber);


//   let year = prompt("Enter Year");
//   year = parseInt(year);


//   if (isNaN(monthNumber) || isNaN(year) || monthNumber < 1 || monthNumber > 12) {
//       console.log("Invalid input ");
//       return;
//   }

//   let days = new Date(year, monthNumber, 0).getDate();

//   console.log(`Days in Month: ${days}`);
// }


// daysInMonth();

///////////////////////////////////////////////////////////

// 14 


// function calculateGrade() {
//   let subjects = ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Computer'];
//   let totalMarks = 0;

//   for (let subject of subjects) {
//       let mark = prompt(`Enter marks for ${subject}:`);
//       mark = parseInt(mark);


//       if (isNaN(mark) || mark < 0 || mark > 100) {
//           console.log("Invalid input. Please enter mark between 0 and 100.");
//           return;
//       }
//       totalMarks += mark;
//   }

//   let percentage = (totalMarks / (subjects.length * 100)) * 100;
//   let grade = '';

//   if (percentage >= 90) {
//       grade = 'Grade A';
//   } else if (percentage >= 80) {
//       grade = 'Grade B';
//   } else if (percentage >= 70) {
//       grade = 'Grade C';
//   } else if (percentage >= 60) {
//       grade = 'Grade D';
//   } else if (percentage >= 40) {
//       grade = 'Grade E';
//   } else {
//       grade = 'Grade F';
//   }


//   console.log(`Total Marks = ${totalMarks}`);
//   console.log(`Percentage = ${percentage.toFixed(2)}%`);
//   console.log(`${grade}`);
// }


// calculateGrade();

///////////////////////////////////////////////////////////
// 16 

// function checkVowelOrConsonant() {
//   let alphabet = prompt("Enter a alphabet:");
  
//   alphabet = alphabet.toLowerCase();  

//   switch (alphabet) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//           console.log(`${alphabet.toUpperCase()} is a vowel.`);
//           break;
//       default:
//           console.log(`${alphabet.toUpperCase()} is a consonant.`);
//           break;
//   }
// }


// checkVowelOrConsonant();

/////////////////////////////////////////////////
// 17

// function findMaximumUsingSwitch() {
//   let number1 = prompt("Enter the first number:");
//   let number2 = prompt("Enter the second number:");

//   number1 = parseFloat(number1);
//   number2 = parseFloat(number2);

//   if (isNaN(number1) || isNaN(number2)) {
//       console.log("Invalid input");
//       return;
//   }

//   switch (true) {
//       case number1 > number2:
//           console.log(`The maximum number is ${number1}`);
//           break;
//       case number2 > number1:
//           console.log(`The maximum number is ${number2}`);
//           break;
//       default:
//           console.log("Both numbers are equal.");
//           break;
//   }
// }


// findMaximumUsingSwitch();


/////////////////////////////////////////////////////
// 18

// function checkEvenOrOddUsingSwitch() {
//   let number = prompt("Enter a number:");
//   number = parseInt(number);

//   if (isNaN(number)) {
//       console.log("Invalid input");
//       return;
//   }

//   switch (number % 2) {
//       case 0:
//           console.log(`${number} is even.`);
//           break;
//       case 1:
      
//           console.log(`${number} is odd.`);
//           break;
//       default:
//           console.log("Unexpected error.");
//   }
// }


// checkEvenOrOddUsingSwitch();


////////////////////////////////////////////////////

// 19 

// function checkNumberSignUsingSwitch() {
//   let number = prompt("Enter a number:");
//   number = parseFloat(number);


//   if (isNaN(number)) {
//       console.log("Invalid input");
//       return;
//   }


//   switch (true) {
//       case number > 0:
//           console.log(`${number} is positive`);
//           break;
//       case number < 0:
//           console.log(`${number} is negative`);
//           break;
//       case number === 0:
//           console.log(`${number} is zero`);
//           break;
//       default:
//           console.log(" اي ايرور بقي مش عارف ");
//           break;
//   }
// }


// checkNumberSignUsingSwitch();


//////////////////////////////////////////////////////////////
// 20 

// function simpleCalculator() {
//   let number1 = prompt("Enter the first number");
//   let number2 = prompt("Enter the second number");
//   let operation = prompt("Enter the operation (+, -, *, /)");

//   number1 = parseFloat(number1);
//   number2 = parseFloat(number2);


//   if (isNaN(number1) || isNaN(number2)) {
//       console.log("Invalid input");
//       return;
//   }

//   switch (operation) {
//       case '+':
//           console.log(`Result of ${number1} + ${number2} = ${number1 + number2}`);
//           break;
//       case '-':
//           console.log(`Result of ${number1} - ${number2} = ${number1 - number2}`);
//           break;
//       case '*':
//           console.log(`Result of ${number1} * ${number2} = ${number1 * number2}`);
//           break;
//       case '/':

//           if (number2 === 0) {
//               console.log("Division by zero is not allowed");
//           } else {
//               console.log(`Result of ${number1} / ${number2} = ${number1 / number2}`);
//           }
//           break;
//       default:
//           console.log("Invalid operation");
//           break;
//   }
// }


// simpleCalculator();







