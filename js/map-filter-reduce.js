const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of
// user objects where
// each user object has at least 3 languages in the languages array.

let atLeastThreeLanguages = users.filter( user => {
    if(user.languages.length >= 3){
        return user;
    }
});

console.log(atLeastThreeLanguages);
console.log(" ");

// Use .map to create an array of strings
// where each element is a user's email address

let emails = users.map( user => {
    return user.email;
});

console.log(emails);

// Use .reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the average.

let totalYears = users.reduce( (accumulation, current) => {
    return accumulation + current.yearsOfExperience;
}, 0);

let avgYears = totalYears / users.length;
console.log("Average years of experience: " + avgYears);

// Use .reduce to get the longest email from the list of users.

let longestEmail = users.reduce( (a, b) => {
    return a.email.length > b.email.length ? a : b;
});

console.log("Longest email: " + longestEmail.email);

// Use .reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.

let userNames = users.reduce( (current, next) => {
    return current + " " + next.name;
},"");

console.log("Instructors:" + userNames);

// Use .reduce to get the unique list of languages from the list of users.

let languages = users.reduce( (uniqueLanguages, user) => {
    user.languages.forEach( (language) => {
        if(!uniqueLanguages.includes(language)){
            uniqueLanguages.push(language);
        }
    });
    return uniqueLanguages;
}, []);

console.log("Unique list of languages: ");
console.log(languages);