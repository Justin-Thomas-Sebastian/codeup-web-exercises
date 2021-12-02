// Create a while loop that uses console.log() to create the output shown below.

/*
2
4
8
16
32
64
128
256
512
1024
2048
4096
8192
16384
32768
65536
 */

let num = 2;
while(num <= 65536) {
    console.log(num)
    num = num * 2;
}

console.log(" ");

/*
An ice cream seller can't go home until she sells all of her cones.
First write enough code that generates a random number between 50 and 100,
representing the amount of cones to sell before you start your loop.
Inside of the loop your code should generate another random number between 1 and 5,
simulating the amount of cones being bought by her clients.
Use a do-while loop to log to the console the amount of cones sold to each person.
This is a way get the random numbers for this exercise.
*/

// Get a random number between 50 and 100
let allCones = Math.floor(Math.random() * 50) + 50;
console.log("Total cones: " + allCones);

do{
    let bought = Math.floor(Math.random() * 5) + 1;  // Get a random number between 1 and 5
    if(bought <= allCones){   // we have enough supply for the current demand of cones
        allCones -= bought;
        console.log(bought + " cones sold...")
    } else {
        console.log(`Cannot sell you ${bought} cones I only have ${allCones}`);
    }

} while(allCones > 0);

console.log("Yay! I sold them all!");