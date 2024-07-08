// function showIcon(){
//     var playBtn = document.getElementById('play');
//     var pauseBtn = document.getElementById('pause');
//     if(playBtn.style.display === "none"){
//         playBtn.style.display = "inline-block";
//     }
//     else{
//         pauseBtn.style.display = "inline-block";
//     }
// }
// document.getElementById("musicPlayer").addEventListener("click", function(){
//     showIcon(div);
// });

// function showIcon(div) {
//     var icon = div.querySelector("img");
//     icon.classList.toggle('Assets/pauseButton.png');
//     icon.classList.toggle('Assets/playButton.png');
  
//     //  div.querySelector("span").textContent = icon.classList.contains('fa-plus') ? "Read more" : "Read less";
// }

(".pause").click(function(){
    this.toggleClass("play"); 
})