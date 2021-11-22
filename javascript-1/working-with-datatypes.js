// 1. For each of the following code blocks, read the code and 
//    predict what the result of evaluating it would be, 
//    then execute the statement(s) in the Chrome console.

console.log("------- EXERCISE 1 -------");
console.log(" ");

// 1.1
console.log("Question 1.1");
var a = 1;
var b = a++;
var c = ++a;
// what is the value of a, b, and c? After executing all statements, the values are a = 3, b = 1, c = 3
console.log("a is currently: " + a);
console.log("b is currently: " + b);
console.log("c is currently: " + c);
console.log(" ");

// 1.2
console.log("Question 1.2");
var d = "hello";
var e = false;
d++;
e++;
console.log("d is: " + d);
console.log("e is: " + e);
console.log(" ");

// 1.3
console.log("Question 1.3");
var perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
console.log("perplexed is currently: " + perplexed);
console.log(" ");

// 1.4
console.log("Question 1.4");
var price = 2.7;
price.toFixed(2);
console.log("price is currently: " + price);
console.log(" ");

// 1.5
console.log("Question 1.5");
var price2 = "2.7";
//price2.toFixed(2); // results in error
console.log("price2 is currently " + price2);
console.log(" ");

// 1.6
console.log("Question 1.6");
console.log("Is 0 NaN?: " + isNaN(0));
console.log("Is 1 NaN?: " + isNaN(1));
console.log("Is \"\" NaN?: " + isNaN(""));
console.log("Is \"string\" NaN: " + isNaN("string"));
console.log("Is \"0\" NaN: " + isNaN("0"));
console.log("Is \"1\": " + isNaN("1"));
console.log("Is \"3.145\": " + isNaN("3.145"));
console.log("Is Number.MAX_VALUE NaN: " + isNaN(Number.MAX_VALUE));
console.log("Is Infinity NaN: " + isNaN(Infinity));
console.log("Is \"true\": " + isNaN("true"));
console.log("Is true NaN: " + isNaN(true));
console.log("Is \"false\" NaN: " + isNaN("false"));
console.log("Is false NaN: " + isNaN(false));
console.log("Is NaN == NaN: " + (NaN == NaN));  // to illustrate why the isNaN() function is needed:
console.log(" ");

// 1.7
console.log("Question 1.7");
console.log("!true ---> " + !true);
console.log("!false ---> " + !false);
console.log("!!true ---> " + !!true);
console.log("!!false ---> " + !!false);
console.log("!!0 ---> " + !!0);
console.log("!!-0 ---> " + !!-0);
console.log("!!1 ---> " + !!1);
console.log("!!-1 ---> " + !!-1);
console.log("!!0.1 ---> " + !!0.1);
console.log("!!\"hello\" ---> " + !!"hello");
console.log("!!\"\" ---> " + !!"");
console.log("!!\'\' ---> " + !!'');
console.log("!!\"false\" ---> " + !!"false");
console.log("!!\"0\" ---> " + !!"0");

// 2. Execute the following statement in the Chrome JavaScript console 
// and then follow the directions below.

console.log(" ");
console.log("------- EXERCISE 2 -------");
console.log(" ");

let sample = "Hello Codeup";
console.log(sample);

// 2.1 Use .length to find the number of characters in the string.
console.log("Sample length is: " + sample.length);

// 2.2 Try to make the sample string all upper or all lower case.
console.log(sample.toUpperCase());
console.log(sample.toLowerCase());

// 2.3 Update the variable sample via concatenation so that it contains "Hello Codeup Students".
sample += " Students";
console.log(sample)

// 2.4 Replace "Students" with "Class".
sample = sample.replace("Students", "Class");
console.log(sample);

// 2.5 Find the index of "c" using .indexOf(). What do you observe?
console.log("Index of \"c\": " + sample.indexOf("c"));

// 2.6 Find the index of "C" using .indexOf().
console.log("Index of \"C\": " + sample.indexOf("C"));

// 2.7 Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().
let start = sample.indexOf("C");
let end = sample.indexOf("p");
console.log(sample.substring(start, end + 1));

// 3. Write some JavaScript code, that is, variables and operators, to describe the following scenarios. 
// Do not worry about the real operations to get the values, 
// the goal of these exercises is to understand how real world conditions can be represented with code.

console.log(" ");
console.log("------- EXERCISE 3 -------");
console.log(" ");

// 3.1 You have rented some movies for your kids: The little mermaid (for 3 days), 
// Brother Bear (for 5 days, they love it), 
// and Hercules (1 day, you don't know yet if they're going to like it). 
// If price for a movie per day is $3, how much will you have to pay?

let mermaid = 3;
let bear = 5;
let hercules = 1;
let rent = 3;
let total = (mermaid + bear + hercules) * rent;
console.log("Total movie rent: $" + total);

// 3.2 Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, 
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

// 3.3 A student can be enrolled in a class only if the class is not full 
// and the class schedule does not conflict with her current schedule.

let classNotFull = true;
let noConflict = true;
let canEnroll = classNotFull && noConflict;

// 3.4 A product offer can be applied only if a person buys more than 2 items, 
// and the offer has not expired. Premium members do not need to buy a specific amount of products.

let numberInCart = 1;
let promoExpired = false;
let isPremium = true;
let applyPromo = false;

if(isPremium && !promoExpired){
    applyPromo = true;
} else if (!promoExpired && numberInCart > 2){
    applyPromo = true;
} else {
    applyPromo = false;
}

/*
4. Create a variable that holds a boolean value for each of the following conditions:
- the password must be at least 5 characters
- the password must not include the username
- the username must be no more than 20 characters
- neither the username or password can start or end with whitespace
*/

console.log(" ");
console.log("------- EXERCISE 4 -------");
console.log(" ");

let username = 'codeup';
let password = 'notastrongpassword';

let isValidPasswordLength = password.length >= 5;
let doesNotIncludeUsername = password.search(username) === -1;
let isValidUsernameLength = username.length <= 20;
let noTrailingWhitespace = ( (username.charAt(0) !== " " && username.charAt(username.length - 1) !== " ") &&
                             (password.charAt(0) !== " " && password.charAt(password.length - 1) !== " ") );

console.log("Password is at least 5 characters: " + isValidPasswordLength);
console.log("Password does not include username: " + doesNotIncludeUsername);
console.log("Username must not be more than 20 characters: " + isValidUsernameLength);
console.log("Username and password does not start or end with whitespace: " + noTrailingWhitespace);