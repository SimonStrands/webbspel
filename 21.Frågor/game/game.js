var map = map2lvl1;
var tiley = 0;
var tilex = 0;
var mapwidth = map[0].length;
var mapheight = map.length;
var whattile;
var tilesizewidth = 100/map[0].length;
var tilesizeheight = 100/map.length;


for (var mapx = 0; mapx < mapwidth; mapx++)
    {
        for (var mapy = 0; mapy < mapheight; mapy++)
            {
                if(tilex == 100)
                    {
                        tilex = 0;
                        tiley = tiley + tilesizeheight;
                    }
                if(map[mapx][mapy] == 0){
                    whattile = grasstex;
                }
                if(map[mapx][mapy] == 1){
                    whattile = graveltex;
                }
                if(map[mapx][mapy] == 2){
                    whattile = dirttex;
                }
                laydowntile(whattile);
                tilex = tilex + tilesizeheight;
            }
    }
function laydowntile(whattile){
    var newdiv = document.createElement("gamediv");
    document.getElementById("gamewindow").appendChild(newdiv);
    newdiv.class="tile";
    newdiv.style.width = tilesizewidth + 1 + "%";
    newdiv.style.height = tilesizeheight + 1 + "%";
    newdiv.style.position = "absolute";
    newdiv.style.backgroundImage = "url(" + whattile + ")";
    newdiv.style.backgroundSize = "cover";
    newdiv.style.top = tiley + "%";
    newdiv.style.left = tilex + "%";
}