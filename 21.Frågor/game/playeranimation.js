var animationplayer = document.getElementById("playerimg");
var animationframe = 0;
var animationUpdatetimer = setInterval(animationUpdate, 200);
function animationUpdate(){
    if(playermoveRight == true)
        { 
            animationplayer.style = "-moz-transform: scaleX(1); -o-transform: scaleX(1); -webkit-transform: scaleX(1); transform: scaleX(1);"
            animationframe -= 110;
            animationplayer.style.left = animationframe + "%";
            if(animationframe <= -330)
                {
                    animationframe = 0;
                }
        }
    if(playermoveLeft == true)
        { 
            animationplayer.style = "-moz-transform: scaleX(-1); -o-transform: scaleX(-1); -webkit-transform: scaleX(-1); transform: scaleX(-1);"
            animationframe -= 110;
            animationplayer.style.left = animationframe + "%";
            if(animationframe <= -330)
                {
                    animationframe = -10;
                }   
        }
    if(playermoveDown == true)
        { 
            
        }
    if(playermoveUp == true)
        { 
            
        }
}