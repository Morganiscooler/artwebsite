const playlist = ["Music/MakeYourMove.mp3","Music/Test-pilot.mp3","Music/Dust.mp3","Music/Night-in-the-City.mp3", "Music/Resonance.mp3","Music/Main_Menu.mp3"];
// add randomizer for music playlist!!!
document.getElementById("musicPlayer").addEventListener("click", function(){
  var audio = document.getElementById('audio');
  var exitBtn = document.getElementsByClassName('exit2');
  // trial
  // var audio1 = document.getElementById('audio1');
  // var audio2 = document.getElementById('audio2');
  var image = document.getElementById('musicIcon');
  var musicRandomizer = Math.floor(Math.random() * playlist.length);
  audio.src = playlist[musicRandomizer];


if(this.className == 'is-playing'){
  this.className = "";
  audio.pause();
  image.src="Assets/pauseButton.png";
}

else{
  this.className = "is-playing";
  audio.play();
  image.src="Assets/playButton.png";
}
});
