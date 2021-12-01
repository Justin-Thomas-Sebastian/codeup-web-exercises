let num = 2;
while(num <= 65536) {
    console.log(num)
    num = num * 2;
}

// Get a random number between 50 and 100
let allCones = Math.floor(Math.random() * 50) + 50;
console.log("Total cones: " + allCones);

do{
    let bought = Math.floor(Math.random() * 5) + 1;  // Get a random number between 1 and 5
    if(bought <= allCones){
        allCones -= bought;
        console.log(bought + " cones sold...")
    } else {
        console.log(`Cannot sell you ${bought} cones I only have ${allCones}`);
    }

} while(allCones > 0);

console.log("Yay! I sold them all!");