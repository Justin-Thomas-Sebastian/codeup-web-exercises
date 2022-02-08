"use strict";

function getLastCommit(username){
    return fetch(`https://api.github.com/users/${username}/events`,
        {headers: {'Authorization': GITHUB_TOKEN}})
        .then(response => response.json())
        .then( events => {
            let pushes = events.filter(event => event.type = "PushEvent");

            let latestCommit = pushes.reduce( (latestCommit, current) => {
                let currentDate = new Date(latestCommit.created_at);
                let nextDate = new Date(current.created_at);
                return currentDate.getTime() >= nextDate.getTime() ? latestCommit : current;
            }, pushes[0]);

            return new Date(latestCommit.created_at);
        })
        .catch(error => {
           console.log("Error: " + error);
        });
}

let findCommitBtn = document.getElementById("find-commit-btn");
let githubUsername = document.getElementById("github-username");
let commitResult = document.getElementById("github-latest-commit-result");

findCommitBtn.addEventListener("click", () => {
    getLastCommit(githubUsername.value).then(result =>{
        commitResult.innerText = String(result);
    });
});
