
var body = document.getElementsByTagName("BODY")[0];
var char = document.getElementById("Cosmo_gif");
var char2 = document.getElementById("Aurora_gif");
var confetti = document.getElementById("Confetti_gif");

body.addEventListener("click", function(){
    if(char.style.visibility = "hidden"){
            char.style.visibility = "visible";
            confetti.style.visibility = "visible";
            char2.style.visibility = "visible";
        }
  });

function partyEffect()
{
    let soundEffect = document.getElementById("partyEffect");
    if(char.style.visibility = "visible"){
        soundEffect.play();
    }
}