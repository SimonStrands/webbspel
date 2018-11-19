var playermoveRight = false;
var playermoveLeft = false;
var playermoveUp = false;
var playermoveDown = false;

var player = document.getElementById("player").style;

document.addEventListener('keydown', function(){
    if(event.keyCode == 68) {
        //key D
        playermoveRight = true;
  }
    if(event.keyCode == 65) {
        //key A
        playermoveLeft = true;
  }
    if(event.keyCode == 87){
        //key W
        playermoveUp = true;
    }
    if(event.keyCode == 83){
        //key S
        playermoveDown = true;
    }
});
document.addEventListener('keyup', function(){
    if(event.keyCode == 68) {
        //key D
        playermoveRight = false;
  }
    if(event.keyCode == 65) {
        //key A
        playermoveLeft = false;
  }
    if(event.keyCode == 87){
        //key W
        playermoveUp = false;
    }
    if(event.keyCode == 83){
        //key S
        playermoveDown = false;
    }
});

var playerposx = 50;
var playerposy = 50;
var playerspeed = 0.2;

    
var PlayerUpdatetimer = setInterval(PlayerUpdate, 1);
function PlayerUpdate(){
    
    if(playermoveRight == true)
        { 
            playerposx += playerspeed;
            document.getElementById("player").style.left = playerposx + "%";
        }
    if(playermoveLeft == true)
        { 
            playerposx -= playerspeed;
            document.getElementById("player").style.left = playerposx + "%";
        }
    if(playermoveDown == true)
        { 
            playerposy += playerspeed;
            document.getElementById("player").style.top = playerposy + "%";
        }
    if(playermoveUp == true)
        { 
            playerposy -= playerspeed;
            document.getElementById("player").style.top = playerposy + "%";
        }
           
         if((playermoveDown == true && playermoveLeft == true)||
       (playermoveDown == true && playermoveRight == true)||
       (playermoveUp == true && playermoveLeft == true)||
       (playermoveUp == true && playermoveRight == true)){
        playerspeed = 0.17;
    }
    else{
        playerspeed = 0.2;
    }
        

    
}