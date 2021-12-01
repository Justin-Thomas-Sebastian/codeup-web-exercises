/* Create a function named showMultiplicationTable that accepts a number and console.
logs the multiplication table for that number (just multiply by the numbers 1 through 10) */
function showMultiplicationTable(num){
    for(let i = 1; i <= 10; i++){
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
showMultiplicationTable(7);

console.log(" ");

/* Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example: */
function generateRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkEvenOdd(num){
    if(num % 2 === 0){
        return "even";
    } else {
        return "odd";
    }
}

for(let i = 0; i < 10; i++){
    let random = generateRandom(20,200);
    console.log(`${random} is ${checkEvenOdd(random)}`);
}

console.log(" ");

/* Create a for loop that uses console.log to create the output shown below.
1
22
333
4444
55555
666666
7777777
88888888
999999999
 */

for(let i = 1; i <= 9; i++){
    let row = "";
    for(let j = 1; j <= i; j++){
        row += String(i);
    }
    console.log(row)
}

console.log(" ");

/* Create a for loop that uses console.log to create the output shown below.
100
95
90
85
80
75
70
65
60
55
50
45
40
35
30
25
20
15
10
5
*/

for(let i = 100; i >= 5; i -= 5){
    console.log(i);
}