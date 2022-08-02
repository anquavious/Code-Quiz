// High Score Javascript file
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// Event listener to clear scores if button is pressed
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// go back after clearing screen if desire to do so
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});
// Retreives highscores from local stroage 
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
// Event listener to go to previous page if desire to do so without clearing high score list
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});