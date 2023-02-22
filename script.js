// 1- Declare a variable called myVar and assign it the value of 5. Then, using the 
// console.log function, print the value of myVar to the console.

var myVar = 5;
console.log(myVar);

// 2- Declare a variable called myString and assign it the value of "Hello, world!".
//  Then, using the alert function, display the value of myString in an alert box.

var myString;
myString = ("Hello, World");
alert(myString);

// 3 - Declare two variables called num1 and num2, and assign them the values of 5 and 10,
//  respectively.Using the prompt function, ask the user to enter a number, and store the 
//  result in a variable called userNum.Then, using the console.log function, print the 
//  sum of num1, num2, and userNum to the console.

var num1 = 5;
var num2 = 10;
var user = parseInt(prompt("Enter a number to added"));
var userNum = user;
var plus = num1+num2+user;
console.log(plus);


// 4- Declare a variable called myBoolean and assign it the value of true. Using an if statement,
//  check if myBoolean is true, and if so, use the console.log function to print "It's true!" to
//   the console. Otherwise, print "It's false!" to the console.

var myBoolean = "True";
if (myBoolean == "True"){
    console.log("It's true!");
}else {
    console.log("It's false!");
}

// 5- Use an if/else statement to check if a number is even or odd. If the number is even, log "even"
//  to the console. If the number is odd, log "odd" to the console.

var num = prompt("Enter a number to even or odd");
if (num % 2==0 ){
    console.log("Number is Even");
}else{
    console.log("Number is Odd")
}


// 6- Use the + operator to concatenate two strings together. Then, log the result to the console.

var nam = "Umair"
var name = "Azmat"
var operator = nam + name;
console.log (operator)


// 7- Use the * operator to multiply two numbers together. Then, log the result to the console.

var num5 = 4;
var num6 = 5;
var multiply = num5 * num6;
console.log(multiply)


// 8- Write a program that takes a string from the user using prompt and checks if 
// it's equal to "password". If it is, display an alert saying "Access granted",
//  otherwise display an alert saying "Access denied".

var password = prompt ("Enter a password to log in account")
if(password == 6723){
    alert ("Access granted")
}else {
    alert ("Access denied")
}

// 9- Write a program that takes three numbers as input and returns the largest of those three numbers.

var num7 = 10;
var num8 = 50;
var num9 = 30;
if(num7 > num8 && num7 > num9){
    console.log("Num7 is larger than num8 and num9");
}else if (num8 > num9 && num8 > num7){
    console.log("Num8 is larger than num7 and num9");
}else{
    console.log("Num9 is larger than num7 and num");
}

// 10 -Write a program that takes two strings from the user using prompt and checks if they are equal.
//  If they are, display an alert saying "The strings are equal", otherwise display an 
//  alert saying "The strings are not equal".

var tell = prompt("Enter a word");
var toll = prompt("Enter same word again");
if (tell == toll){
    alert("The strings are equal")
}else{
    alert("The strings are not equal")
}
