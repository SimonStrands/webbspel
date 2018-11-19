window.addEventListener("load", heightandwidth);
window.addEventListener("resize", heightandwidth);

function heightandwidth(){
if(document.getElementById("body").clientHeight < document.getElementById("body").clientWidth)
    {
        document.getElementById("gamewindow").style.width = document.getElementById("body").clientHeight + "px";
    }
else if(document.getElementById("body").clientWidth < document.getElementById("body").clientHeight)
    {
        document.getElementById("gamewindow").style.height = document.getElementById("body").clientWidth + "px";
    }
    

}