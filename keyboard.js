//handle keyboard events -- if pressed, a keyCode will be listed as "true" in keysDown, "false" in keysUp

var keysDown = {
	32 : false, //action "space"
	65 : false, //left "A"
	87 : false, //up "W"
	68 : false, //right "D"
	83 : false //down "S"
};

var keysUp = {
	32 : false, //action "space"
	65 : false, //left "A"
	87 : false, //up "W"
	68 : false, //right "D"
	83 : false //down "S"
};

var keyCodes = [32,65,87,68,83];
var spaceTick = false; // so single space bar presses cue action, employed in movement.js

function toggleKeysUp(e) {
    let inKeyCodes = false;
    for(let i=0; i<keyCodes.length; i++)
    { 
        if(e.keyCode == keyCodes[i]) { inKeyCodes = true; } 
    }
    if(inKeyCodes)
    {
        keysUp[e.keyCode] = true;
        keysDown[e.keyCode] = false;
    }
}

function toggleKeysDown(e) {
    let inKeyCodes = false;
    for(let i=0; i<keyCodes.length; i++)
    { 
        if(e.keyCode == keyCodes[i]) { 
            inKeyCodes = true;
            if(keyCodes[i] == 32) { 
                spaceTick = true; 
            } //notes when spacebar is active 
        }
    }
    if(inKeyCodes)
    {
        keysDown[e.keyCode] = true;
        keysUp[e.keyCode] = false;
    }
}

function diveToggle()
{
    if(!diving && tileTypes[gameMap[toIndex(playerX(),playerY())]].divable)
    {
        //move to gameMap2
        diving = true;
        gameMap = gameMap2;
        itemMap = itemMap2;
        alphaCount = 0.7; //trigger color overlay in animation.js
        characterScale = 0.8 //trigger character scale in animation.js

    }
    else if(diving && tileTypes[gameMap2[toIndex(playerX(),playerY())]].risable)
    {
        //move to gameMap1
        diving = false;
        gameMap = gameMap1;
        itemMap = itemMap1;
        alphaCount = 0.7; //trigger color overlay in animation.js
        characterScale = 0.8 //trigger character scale in animation.js
    }
}