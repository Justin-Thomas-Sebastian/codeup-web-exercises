"use strict";

// Create a function that accepts a GitHub username,
// and returns a promise that resolves
// returning just the date of the last commit that user made.
function getLastCommit(username) {
    return fetch(`https://api.github.com/users/${username}/events`,
        {headers: {'Authorization': GITHUB_TOKEN}})
        .then(response => response.json())
        .then(events => {
            let pushes = events.filter(event => event.type = "PushEvent");

            let lastCommit = pushes.reduce((last, current) => {
                let currentDate = new Date(last.created_at);
                let nextDate = new Date(current.created_at);
                return currentDate.getTime() >= nextDate.getTime() ? last : current;
            }, pushes[0]);

            return new Date(lastCommit.created_at);
        })
        .catch(error => {
            console.log("Error: " + error);
        });
}

// DOM Elements
let findCommitBtn = document.getElementById("find-commit-btn");
let githubUsername = document.getElementById("github-username");
let commitResult = document.getElementById("github-latest-commit-result");

// Find last commit in passed in username
findCommitBtn.addEventListener("click", () => {
    getLastCommit(githubUsername.value).then(result => {
        commitResult.innerText = String(result);
    });
});

// Write a function named wait that accepts a number as a parameter,
// and returns a promise that resolves after the passed number of milliseconds.
function wait(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isNaN(duration) && duration === 1000) {
                resolve(`You'll see this after ${duration / 1000} second`);
            } else if (!isNaN(duration)) {
                resolve(`You'll see this after ${duration / 1000} seconds`);
            } else {
                reject("Type error. Enter number in milliseconds.");
            }
        }, duration);
    });
}

wait(3000).then((message) => console.log(message));
wait(1000).then((message) => console.log(message));
wait(5000).then((message) => console.log(message));
wait(10000).then((message) => console.log(message));
wait(100).then((message) => console.log(message));
wait("sdlkfjsdklf").then((message) => console.log(message));