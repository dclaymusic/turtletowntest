const cairnPurple = [166,150,187];
const logBrown = [131,102,87];
const waterWingsYellow = [255,234,1];
const headlightOrange = [251,169,4];


function diveAnimation() {
    if(alphaCount > 0.0) { 
        if(diving) { ctx.fillStyle = `rgba(36,86,128,${alphaCount})` }
        else if(!diving) { ctx.fillStyle = `rgba(255,255,255,${alphaCount})` }
        ctx.fillRect(0,0,viewport.screen[0],viewport.screen[1]);
        alphaCount -= 0.01;
    }
    if(characterScale <= 1.0)
    {
        characterScale += 0.005;
    }
}

//run animations
function animationTimer()
{
    //frame handler for sounds if needed (can use % for length of sound)
    frame += 1;

    for(let m = 0; m < gameMap.length; m++)
    {
        if(tileTypes[gameMap[m]].animateTo != undefined)
        {
            gameMap[m] = tileTypes[gameMap[m]].animateTo;
        }
    }
}

function itemFlashAnimation(color)
{
    if(alphaCount > 0.0) { 
        ctx.fillStyle = `rgba(${color[0]},${color[1]},${color[2]},${alphaCount})`
        ctx.fillRect(0,0,viewport.screen[0],viewport.screen[1]);
        alphaCount -= 0.01;
    }
}