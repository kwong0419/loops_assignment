// Exercises

// Problem One
// a. Write a while loop that takes the variable num and logs all the numbers, descending, between "num" and 1
// b. Write a for loop that takes the variable num and logs all the numbers, descending, between "num" and 1
// Example:

let num = 8;

// // Your code here
while(num >= 1){
    console.log("number " + num);
    num--;
}

for(let num1 = 8; num1 >= 1; num1--){
    console.log(num1);
}


// /* Logs:
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// */


// Problem Two
// a. Write a while loop that takes the variable "max", and iterates over all numbers from 0 to "max". For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")
// b. Use a for loop instead
// Example:

let max = 3;
let number = 0;

// // Your code here
while(number <= max){
    if (number % 2 === 0){
        console.log("1B. " + number + " " + "is even");
    }else{
        console.log("1B. " + number + " " + "is odd");
    }
    number++;
}

for(number = 0; number <= max; number++){
    if (number % 2 === 0){
        console.log("2B. " + number + " " + "is even");
    }else{
        console.log("2B. " +number + " " + "is odd");
    }
}

// /* Logs:
// "0 is even"
// "1 is odd"
// "2 is even"
// "3 is odd"
// */


// Problem Three
// a. Write a while loop that takes the variable "x" and iterates over all numbers from 0 to "x". For each iteration of the loop, it will multiply the number of "x" by 9 and log the result

let x = 10;
let num3a = 0;
while(num3a <= x){
    console.log("3A. " + "X = " + (num3a*9));
    num3a +=1;
}

// b. Use a for loop instead.

for(let num3b = 0; num3b <= x; num3b++){
    console.log("3B. " + "X = " + (num3b*9));
}

// Example:

// let x = 5

// // Your code here

// /* Logs:
// "0 * 9 = 0"
// "1 * 9 = 9"
// "2 * 9 = 18"
// "3 * 9 = 27"
// "4 * 9 = 36"
// "5 * 9 = 45"
// */
// Write a while loop and a for loop that takes the variable "x" and iterates over all numbers from 0 to "x". For each iteration of the loop, it will multiply the number of "x" by 9 and log the result (e.g. "2 * 9 = 18").
let num3c = 0;
while(num3c <= x){
    console.log("3C. " + num3c + " * 9 " + " = " + (num3c*9));
    num3c +=1;
}

// Problem Four
// Write code that prints/logs all the numbers that end in a 5 from 1 to 100, exclusive.
for (let k = 5; k <= 100; k+=10){
    console.log(k);
}
// Problem Five
// Without running/executing your code, how many times will the loop below run? Explain why.

// let i = 5;

// while (i > 3) {
//     i += 1
// }

// // Your explanation here
   // The code will run indefinitely because the condition i is incremented by 1 and therefore
   // i will always be greater than 3 and the loop will be continuous.

// Problem Six
// Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, 
// log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.
let y = 1;
while(y <= 100){
    if ( y % 3 === 0){
        console.log("Fizz");
    } else if( y % 5 === 0){
        console.log("Buzz")
    }
    else{
        console.log(y);
    }
    y++;
}

// Problem Seven
// Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).
let z = 1;
while(z <= 100){
    if ( z % 3 === 0 && z % 5 === 0 ){
        console.log("FizzBuzz");
    } else if( z % 3 === 0){
        console.log("Fizz");
    } else if( z % 5 === 0){
        console.log("Buzz")
    } else{ 
        console.log(z);
    }
    z++;
}

// Problem Eight
// Write a program that would log the lyrics of the song 99 Bottles of Beer. This is the first verse of the song:

// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down, pass it around, 98 bottles of beer on the wall.
// This verse is repeated, each time with one less bottle, until the number of bottles is 0. When the number of bottles is 2, the verse is:

// 2 bottles of beer on the wall, 2 bottles of beer.
// Take one down, pass it around, 1 bottle of beer on the wall.
// In the last line, the word bottles (plural), is replaced with bottle (singular)

// When the number of bottles is 1, the verse is:

// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down, pass it around, No more bottle of beer on the wall.

for ( let bottle = 99; bottle > 0 ; bottle-- ) {
    if ( bottle > 2 ){
        console.log( bottle + " bottles of beer on the wall, " + bottle + " bottles of beer. Take one down, pass it around, "+ (bottle-1)+" bottles of beer on the wall.")
    } else if ( bottle === 2){
        console.log( bottle + " bottles of beer on the wall, " + bottle + " bottles of beer. Take one down, pass it around, "+ (bottle-1)+" bottle of beer on the wall.")
    } else {
        console.log( bottle + " bottle of beer on the wall, " + bottle + " bottle of beer. Take one down, pass it around, no more bottles of beer on the wall.")
    }
 }

// Problem Nine
// Given an integer N draw a square of N x N asterisks. Look at the examples.

// Example 1: Input: let N = 2

// Output:

// **
// **
// Example 2: Input: let N = 3

// Output:
 
// ***
// ***
// ***
//  Hint 1
//  Hint 2
// Problem Ten
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.