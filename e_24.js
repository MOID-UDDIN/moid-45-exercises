/*
You don’t have to limit the number of tests you create to 10. If you want to try more
comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal
to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in an array
• Test whether an item is not in an array
*/
// equality and inequality
var myName = "Salman";
console.log(myName == "Salman"); //true  equal to
console.log(myName !== "salman"); //true  not equal to
//numerics
var myNumber = 15;
console.log(myNumber == 15); // true
console.log(myNumber !== 15); // false
console.log(myNumber > 5); // true greater than
console.log(myNumber < 5); // false less than
console.log(myNumber <= 5); // false less than equal to
console.log(myNumber >= 5); // true  greater than equal to
//and && ===== or ||(pipe)
var num1 = 10;
var num2 = 5;
console.log(num1 > 9 && num2 < 5); // false
// true stat    false stat
console.log(num1 > 9 || num2 < 5); //true
// true stat      false stat
var myArray = [2, 3, "Salman"];
var mystring = "Javed";
console.log(Array.isArray(myArray)); //true
console.log(Array.isArray(mystring)); //false
