function checkOdd(num){
    return num % 2 !== 0;
}

let userOddNum = "";
while(true){
    userOddNum = prompt("Enter odd number");
    if(isNaN(userOddNum)){
        alert("Invalid input. Enter odd number");
    } else if(checkOdd(userOddNum)){
        break;
    } else {
        alert("Invalid input. Enter odd number");
    }
}

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