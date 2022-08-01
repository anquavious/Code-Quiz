// High Score Javascript file
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// Event listener to clear scores if button is pressed
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Retreives highscores local stroage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);
allScores = allScores.sort(function(a,b){
    return b.score - a.score
})

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}
// Event listener to move to index page
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});