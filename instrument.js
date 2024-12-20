//build the map and place character
function buildInstrument()
{
	let thisMapW = 15;
	let thisMapH = 15;
	let thisGameMap =  [
		130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 
        130, 130, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 130, 130, 
        130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 
        130, 134, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 130, 
        130, 137, 134, 131, 132, 131, 132, 131, 132, 131, 132, 131, 132, 131, 130, 
        130, 130, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 130, 
        130, 138, 134, 131, 132, 131, 132, 131, 132, 131, 132, 131, 132, 131, 130, 
        130, 130, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 130, 
        130, 141, 134, 131, 132, 131, 132, 131, 132, 131, 132, 131, 132, 131, 130, 
        130, 130, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 130, 
        130, 141, 134, 131, 132, 131, 132, 131, 132, 131, 132, 131, 132, 131, 130, 
        130, 136, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 130, 
        130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 
        130, 130, 130, 142, 130, 142, 130, 142, 130, 142, 130, 142, 130, 130, 130, 
        130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130
	]
	let thisItemMap = [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
	]
	mapW = thisMapW;
	mapH = thisMapH;
	gameMap = thisGameMap;
	itemMap = thisItemMap;

	var starting_pos = [7,7];
	player.position[0] = starting_pos[0];
	player.position[1] = starting_pos[1];
	player.placeAt(player.position[0], player.position[1]);
}

//draw current position on map and trigger events as needed

function drawInstrument(currentFrameTime, currentSecond, tick)
{
	if(levelBuildTick) { buildInstrument(); levelBuildTick = false; }

	//draw current viewport only (for viewport, see movement.js)
	for(var y = 0; y < mapH; ++y)
	{
		for(var x = 0; x < mapW; ++x)
		{
			//draw gameMap
			var tile = tileTypes[gameMap[toIndex(x,y)]];
			ctx.drawImage(tileset, tile.sprite[0].x, tile.sprite[0].y, tile.sprite[0].w, tile.sprite[0].h,
				(x*tileW), (y*tileH), tileW, tileH);

			//to draw more complex shapes, move the "itemMap" draw below to it's own independent x/y for loop
			
			//draw items over top
			if (itemMap[toIndex(x,y)] != 0)
			{
				var item = itemTypes[itemMap[toIndex(x,y)]];
				ctx.drawImage(tileset, item.sprite[0].x, item.sprite[0].y, item.sprite[0].w, item.sprite[0].h,
				(x*tileW), (y*tileH), item.sprite[0].w, item.sprite[0].h);
			}
		}
	}

    drawCharacter(); //character.js

    if(tick) {
        if(playerX() == 7 && playerY() == 13)
        {
            gameState.level = 'turtle-town';
            levelBuildTick = true;
        }
    }

}

// function instrumentHandler()
// {
//     let cairns = gameState.cairnsCollected;
//     if(playerX() = )

//     //if space was pressed
//     if(playerY() == 4 && playerX() > 2) { //stones
//         cycleArray([])
//     }
//     if(playerY() == 6 && playerX() > 2) { //logs

//     }
//     if(playerY() == 8 && playerX() > 2) { //world3

//     }
//     if(playerY() == 10 && playerX() > 2) { //world4

//     }
// }


