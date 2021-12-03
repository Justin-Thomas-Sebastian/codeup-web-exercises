/* Prompt the user for an odd number between 1 and 50.
Use a loop and a break statement to continue prompting the user if they enter invalid input.*/

function checkOdd(num){
    return num % 2 !== 0;
}

let userOddNum = "";
while(true){
    userOddNum = prompt("Enter odd number between 1 and 50.");
    if(isNaN(userOddNum)){
        alert("Invalid input. Enter odd number between 1 and 50.");
    } else if(checkOdd(userOddNum) && (userOddNum >= 1 && userOddNum < 50)){
        break;
    } else {
        alert("Invalid input. Enter odd number between 1 and 50.");
    }
}

console.log(" ");

/* Use a loop and the continue statement to output all the odd numbers between 1 and 50,
except for the number the user entered.*/
console.log("Number to skip is: " + userOddNum);
console.log(" ");

for(let i = 1; i <= 50; i++){
    if(!checkOdd(i)){  // is even
        continue;
    }

    if(i === Number(userOddNum)){
        console.log("Yikes! Skipping number: " + userOddNum);
    } else {
        console.log("Here is an odd number: " + i);
    }
}

console.log(" ");