var borderUpdatetimer = setInterval(borderUpdate, 20);
function borderUpdate(){
    console.log()
if( playerposy < 0)
    {
        playerposy = 0;
    }
if( playerposx < 0)
    {
        playerposx = 0;
    }
if( playerposy > 100)
    {
        playerposy = 100;
    }
if( playerposx > 99)
    {
        playerposx = 99;
    }
}