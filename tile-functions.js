
function shuffle(array) {
let currentIndex = array.length;

// While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}  


//getting tile information related to player
function thisTileIs() 
{ return gameMap[toIndex(player.position[0]/tileW,player.position[1]/tileH)]; }

function thisItemIs()
{ return itemMap[toIndex(player.position[0]/tileW,player.position[1]/tileH)]; }

function setPlayerTile(tile)
{ return gameMap[toIndex(player.position[0]/tileW,player.position[1]/tileH)] = tile; }

function setPlayerItem(tile)
{ return itemMap[toIndex(player.position[0]/tileW,player.position[1]/tileH)] = tile; }

function setTileTo(x,y,tile)
{ return gameMap[toIndex(x,y)] = tile; }

function setItemTo(x,y,tile)
{ return itemMap[toIndex(x,y)] = tile; }

function playerX()
{ return player.position[0]/tileW; }

function playerY()
{ return player.position[1]/tileH }

function playerXY()
{ return [player.position[0]/tileW, player.position[1]/tileH] }

function movePlayer(startX,startY,endX,endY,isReversible)
{
    if(playerX() == startX && playerY() == startY)
    {
        player.position[0] = endX;
        player.position[1] = endY;
        player.placeAt(player.position[0], player.position[1]);
    }
    else if(playerX() == endX && playerY() == endY && isReversible == true)
    {
        player.position[0] = startX;
        player.position[1] = startY;
        player.placeAt(player.position[0], player.position[1]);
    }
}

function upperLeftTileIs(x,y,tile)
{
    if(gameMap[toIndex(x-1,y-1)] == tile)
    { return true }
    else { return false }
}

function upperTileIs(x,y,tile)
{
    if(gameMap[toIndex(x,y-1)] == tile)
    { return true }
    else { return false }
}


function upperRightTileIs(x,y,tile)
{
    if(gameMap[toIndex(x+1,y-1)] == tile)
    { return true }
    else { return false }
}


function leftTileIs(x,y,tile)
{
    if(gameMap[toIndex(x-1,y)] == tile)
    { return true }
    else { return false }
}


function rightTileIs(x,y,tile)
{
    if(gameMap[toIndex(x+1,y)] == tile)
    { return true }
    else { return false }
}

function lowerLeftTileIs(x,y,tile)
{
    if(gameMap[toIndex(x-1,y+1)] == tile)
    { return true }
    else { return false }
}

function lowerTileIs(x,y,tile)
{
    if(gameMap[toIndex(x,y+1)] == tile)
    { return true }
    else { return false }
}


function lowerRightTileIs(x,y,tile)
{
    if(gameMap[toIndex(x+1,y+1)] == tile)
    { return true }
    else { return false }
}

function toIndex(x, y)
{
	return((y * mapW) + x);
}

function fromIndex(m)
{
	x = m % mapW;
	y = Math.floor(m / mapW);
	return([x, y]);
}

function randomInt(max)
{
	rand_val = Math.floor(Math.random() * Math.floor(max + 1))
	return rand_val;
}

function warpHandler(x1,y1,x2,y2)
{
    if (playerX() == x1 && playerY() == y1 )
    {
        player.position[0] = x2; player.position[1] = y2;
        player.placeAt(player.position[0], player.position[1]);
    }
    else if (playerX() == x2 && playerY() == y2 )
    {
        player.position[0] = x1; player.position[1] = y1;
        player.placeAt(player.position[0], player.position[1]);
    }
}

function swapTiles(tile1, tile2)
{
    for(let m = 0; m < gameMap.length; m++)
    {
        if(gameMap[m] == tile1) { gameMap[m] = tile2; }
    }
}


function nextToCharacter()
{
    if(itemTypes[itemMap[toIndex(playerX()+1,playerY())]].isCharacter) { return itemTypes[itemMap[toIndex(playerX()+1,playerY())]].name }
    else if(itemTypes[itemMap[toIndex(playerX()-1,playerY())]].isCharacter) { return itemTypes[itemMap[toIndex(playerX()-1,playerY())]].name  }
    else if(itemTypes[itemMap[toIndex(playerX(),playerY()+1)]].isCharacter) { return itemTypes[itemMap[toIndex(playerX(),playerY()+1)]].name  }
    else if(itemTypes[itemMap[toIndex(playerX(),playerY()-1)]].isCharacter) { return itemTypes[itemMap[toIndex(playerX(),playerY()-1)]].name }

}

function nextToSign()
{
    if(tileTypes[gameMap[toIndex(playerX()+1,playerY())]].isSign) { return [playerX()+1,playerY()] }
    else if(tileTypes[gameMap[toIndex(playerX()-1,playerY())]].isSign) { return [playerX()-1,playerY()] }
    else if(tileTypes[gameMap[toIndex(playerX(),playerY()+1)]].isSign) { return [playerX(),playerY()+1] }
    else if(tileTypes[gameMap[toIndex(playerX(),playerY()-1)]].isSign) { return [playerX(),playerY()-1] }
    else return [undefined,undefined]
}

function nextToInscription()
{
    if(tileTypes[gameMap[toIndex(playerX()+1,playerY())]].isInscription) { return [playerX()+1,playerY()] }
    else if(tileTypes[gameMap[toIndex(playerX()-1,playerY())]].isInscription) { return [playerX()-1,playerY()] }
    else if(tileTypes[gameMap[toIndex(playerX(),playerY()+1)]].isInscription) { return [playerX(),playerY()+1] }
    else if(tileTypes[gameMap[toIndex(playerX(),playerY()-1)]].isInscription) { return [playerX(),playerY()-1] }
    else return [undefined,undefined]
}

function toggleTile(tile1, tile2)
{
    if(gameMap[toIndex(playerX(),playerY())] == tile1) {
        setTileTo(playerX(),playerY(),tile2);
    }
    else if(gameMap[toIndex(playerX(),playerY())] == tile2) {
        setTileTo(playerX(),playerY(),tile1);
    } 

    
}

function swapDimmableTiles()
{

    // swapDimmableTiles logic
    // if dim = false && tile.dimTo != undefined >> dimTo this
    // if dim = true && tile.dimFrom != undefined >> dimFrom this

    for(let i = 0; i < gameMap.length; i++)
    {
        if(!dimSurroundings)
        {    
            if(tileTypes[gameMap[i]].undimTo != undefined)
            {
                gameMap[i] = tileTypes[gameMap[i]].undimTo;
            }
        }
        else if(dimSurroundings)
        {
            if(tileTypes[gameMap[i]].dimTo != undefined)
            {
                gameMap[i] = tileTypes[gameMap[i]].dimTo;
            }
        }
    }
}



function pickFromArray(array, count) 
{
    if (count > array.length) {
      throw new Error("Count must not exceed the number of items in the array.");
    }
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
}

//time calculator
function toHMS(time)
{
	var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";
    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

function cycleArray(array) {
    if (!Array.isArray(array) || array.length === 0) {
      throw new Error("Please provide a non-empty array.");
    }
  
    let index = 0;
  
    return function getNextItem() {
      const item = array[index];
      index = (index + 1) % array.length; // Wrap around to the first item
      return item;
    };
  }