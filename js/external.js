console.log("Hello from external JavaScript");
alert("Welcome to my Website!");
let color = prompt("What is your favorite color?");
alert(color + " is my favorite color too.");

// 3.1 You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?

let mermaid = prompt("How many days to rent little mermaid?");
let bear = prompt("How many days to rent Brother Bear?");
let hercules = prompt("How many days to rent Hercules?")
let rent = prompt("How much is price per day?");
let total = (mermaid + bear + hercules) * rent;
alert("Total movie rent: $" + total);

// 3.2. Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
// they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week? You worked 10 hours for Facebook,
// 6 hours for Google and 4 hours for Amazon.

let googleRate = 400;
let amazonRate = 380;
let facebookRate = 350;

let googlePay = googleRate * 6;
let amazonPay = amazonRate * 4;
let facebookPay = facebookRate * 10;

let totalPay = googlePay + amazonPay + facebookPay;
console.log("Total pay is: $" + totalPay);

// 3.3. A student can be enrolled in a class only if the class is not full
// and the class schedule does not conflict with her current schedule.

let classNotFull = true;
let noConflict = true;
let canEnroll = classNotFull && noConflict;

// 3.4. A product offer can be applied only if a person buys more than 2 items,
// and the offer has not expired. Premium members do not need to buy a specific amount of products.

let numberInCart = 1;
let promoExpired = false;
let isPremium = true;
let applyPromo = false;

if(isPremium && !promoExpired){
    applyPromo = true;
} else if (promoExpired && numberInCart > 2){
    applyPromo = true;
} else {
    applyPromo = false;
}


