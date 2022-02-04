/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array

let newUser = {
    name: "sebastian",
    email: "sebastian@codeup.com",
    languages: ["html", "css", "javascript", "java"]
}

// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = newUser.name;
const email = newUser.email;
const languages = newUser.languages;

/**  WILL NOT WORK **/
// name = newUser.name;
// email = newUser.email;
// languages = newUser.languages;

// TODO: rewrite the object literal using object property shorthand

/** OLD WAY **/
// users.push({
//     name: name,
//     email: email,
//     languages: languages
// });

/** NEW WAY **/
users.push({
   name,
   email,
   languages
});

// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions

/** REGULAR FUNCTIONS **/
// users.forEach(function(user) {
//     return emails.push(user.email);
// });
// users.forEach(function(user) {
//     return names.push(user.name);
// });

/** ARROW FUNCTIONS **/
users.forEach( (user) => {
    return emails.push(user.email)
});

users.forEach( (user) => {
    return names.push(user.name)
});

console.log(emails);
console.log(names);

// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function(user) {
    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition

    /** OLD WAY **/
    // const name = user.name;
    // const email = user.email;
    // const languages = user.languages;

    /** ES6 **/
    const {name, email, languages} = user;

    // TODO: rewrite the assignment below to use template strings
    //developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
    developers.push(`${name}'s email is ${email} ${name} knows ${languages.join(', ')}`);
});
console.log(developers);

// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {
//
//     // TODO: rewrite the assignment below to use template strings
//     list += '<li>' + developer + '</li>';
// });
//list += '</ul>';

for(let developer of developers){
    list += `<li> ${developer} </li>`
}
list += '</ul>';

console.log(list);
// $("#developers-list").append(list);