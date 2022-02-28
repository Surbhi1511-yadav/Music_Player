const music = document.querySelector("audio");
const play = document.getElementById("play");

//to play music by clicking on play button
play.addEventListener("click", () => {
    music.play();
});