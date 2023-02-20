// Initialize the Variable
let songIndex = 0;
const audioElement = new Audio("./1.mp3");
const masterPlay = document.getElementById("masterplay");
const myProgressBar = document.getElementById("myProgressBar");
const gif = document.getElementById("gif");
// Array.from is used to make array
const songItem = Array.from(document.getElementsByClassName("songlistplay"));
let songs = [
    {songName : "ssla1", filePath : "./3.mp3", coverPath : "./coverImage.jpeg"},
    {songName : "ssla2", filePath : "./rrr.mp3", coverPath : "./2.jpg"},
    {songName : "ssla3", filePath : "song/1.mp3", coverPath : "./coverImage.jpeg"},
    {songName : "ssla", filePath : "song/1.mp3", coverPath : "./coverImage.jpeg"},
    {songName : "ssla", filePath : "song/1.mp3", coverPath : "covers/1.jpg"},
    {songName : "ssla", filePath : "song/1.mp3", coverPath : "covers/1.jpg"},
    {songName : "ssla", filePath : "song/1.mp3", coverPath : "covers/1.jpg"},
    {songName : "ssla", filePath : "song/1.mp3", coverPath : "covers/1.jpg"},
    {songName : "ssla", filePath : "song/1.mp3", coverPath : "covers/1.jpg"},
]
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        // console.log(masterPlay.classList);
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = "1";
    }
    else{
        audioElement.pause();
        masterPlay.classList.add("fa-play");
        masterPlay.classList.remove("fa-pause");
        gif.style.opacity = "0"; 
    }
})

songItem.forEach((element)=>{
    element.getElementByTagName('img')[0].src = songs[i].coverPath;

})

audioElement.addEventListener('timeupdate',()=>{
    console.log(timeupdate);
     progress = parseInt((audioElement.currentTime/audioElement.duration))*100;
    // console.log(audioElement.currentTime/audioElement.duration);
    // console.log(progress);
    myProgressBar.value = progress;
    console.log(progress);
})

myProgressBar.addEventListener('change',()=>{ 
    audioElement.currentTime = myProgressBar.value * audioElement /100;
})


