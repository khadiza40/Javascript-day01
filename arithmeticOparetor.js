//arithmeticOparetor.js
// arithmetic operator : + ,- ,*, % , / ,**(power) ;
// assignment operator : =, +=, -=, =*, =% , =/ ,=** ;

var num1 = prompt("Enter first NUmber :");
var num2 = prompt("Enter Second NUmber :");


num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

var summtion , substruction, multiplication , divided ,reminder , exponential;

summtion = num1 + num2;
substruction = num2 -num1;
multiplication = num1*num2;
divided = num2 / num1;
reminder =  num2% num1;
exponential = divided ** reminder; 

document.write("The summetion is "+summtion+".<br/>");
document.write("The substruction is "+ substruction +".<br/>");
document.write("The multiplication is "+multiplication +".<br/>");
document.write("The divided is "+divided+".<br/>");
document.write("The reminder is "+reminder+".<br/>");
document.write("The  is exponential "+exponential+".<br/>");