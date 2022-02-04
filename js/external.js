console.log("Hello from external JavaScript");
alert("Welcome to my Website!");
let color = prompt("What is your favorite color?");
alert(color + " is my favorite color too.");

// 3.1
let mermaid = Number(prompt("How many days to rent little mermaid?"));
let bear = Number(prompt("How many days to rent Brother Bear?"));
let hercules = Number(prompt("How many days to rent Hercules?"));
let rent = Number(prompt("How much is price per day?"));
let total = (mermaid + bear + hercules) * rent;
alert("Total movie rent: $" + total);

// 3.2
let googleRate = Number(prompt("What is Google rate?"));
let amazonRate = Number(prompt("What is Amazon rate?"));
let facebookRate = Number(prompt("What is Facebook rate?"));

let googleHours = Number(prompt("How many days did you work at Google?"));
let amazonHours = Number(prompt("How many days did you work at Amazon?"));
let facebookHours = Number(prompt("How many days did you work at Facebook?"));

let googlePay = googleRate * googleHours;
let amazonPay = amazonRate * amazonHours;
let facebookPay = facebookRate * facebookHours;

let totalPay = googlePay + amazonPay + facebookPay;
alert("Total pay is: $" + totalPay);

// 3.3
let classNotFull = confirm("Is class not full?");
let noConflict = confirm("Is there no conflict in your schedule?");
let canEnroll = classNotFull && noConflict;

if(canEnroll){
    alert("Student can enroll");
} else {
    alert("Student cannot enroll.");
}

// 3.4
let numberInCart = Number(prompt("How many items in your cart?"));
let promoExpired = confirm("Promo is still good?");
let isPremium = confirm("Premium member?");
let applyPromo = false; // default;

if(isPremium && !promoExpired){
    applyPromo = true;
} else if (promoExpired && numberInCart > 2){
    applyPromo = true;
} else {
    applyPromo = false;
}

if(applyPromo){
    alert("Promo applied.");
} else {
    alert("Promo not applied.");
}


