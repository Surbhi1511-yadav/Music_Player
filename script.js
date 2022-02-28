const music = document.getElementById("audio");
const play = document.getElementsById("play");

//to play music by clicking on play button
play.addEventListener('click', () => {
    music.play();
});