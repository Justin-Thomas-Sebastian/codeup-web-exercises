/*
Create a variable that holds a boolean value for each of the following conditions:
- the password must be at least 5 characters
- the password must not include the username
- the username must be no more than 20 characters
- neither the username or password can start or end with whitespace
*/

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