window.onload = function(){
    //game window
    var gamewidth = document.getElementById("gamediv").clientWidth;
    var gameheight = gamewidth * 0.5;
    document.getElementById("gamediv").style.height = gameheight + "px";
    
    
    //background img
    var backimg = document.getElementById("body").style.backgroundSize;
    var heighte = document.getElementById("html").clientHeight * 1.777;
    var width = document.getElementById("html").clientWidth;
    
    if(heighte > width)
        {
            //document.getElementById("body").style.backgroundSize = "auto" + screen.height + "px";
            
        }
    else{
            document.getElementById("body").style.backgroundSize = "cover"; 
        }
};

window.onresize = function() {
    //game window
    var gamewidth = document.getElementById("gamediv").clientWidth;
    var gameheight = gamewidth * 0.4;
    document.getElementById("gamediv").style.height = gameheight + "px";
    
    
    
    
    //background img
    var backimg = document.getElementById("body").style.backgroundSize;
    var heighte = document.getElementById("html").clientHeight * 1.777;
    var width = document.getElementById("html").clientWidth;
    
    if(heighte > width)
        {
            console.log("bigger");
            //document.getElementById("body").style.backgroundSize = "auto" + screen.height + "px";
            
        }
    else{
            document.getElementById("body").style.backgroundSize = "cover"; 
        }
};

var elem = document.getElementById("game");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}