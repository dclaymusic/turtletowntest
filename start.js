//build the map and place character
function buildStart()
{
	let thisMapW = 15;
	let thisMapH = 15;
	let thisGameMap =  [
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

function drawStart(currentFrameTime, currentSecond, tick)
{
	if(levelBuildTick) { buildStart(); levelBuildTick = false; }

	//draw current viewport only (for viewport, see movement.js)
	for(var y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y)
	{
		for(var x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x)
		{
			//draw gameMap
			var tile = tileTypes[gameMap[toIndex(x,y)]];
			ctx.drawImage(tileset, tile.sprite[0].x, tile.sprite[0].y, tile.sprite[0].w, tile.sprite[0].h,
				viewport.offset[0] + (x*tileW), viewport.offset[1] + (y*tileH), tileW, tileH);

			//to draw more complex shapes, move the "itemMap" draw below to it's own independent x/y for loop
			
			//draw items over top
			if (itemMap[toIndex(x,y)] != 0)
			{
				var item = itemTypes[itemMap[toIndex(x,y)]];
				ctx.drawImage(tileset, item.sprite[0].x, item.sprite[0].y, item.sprite[0].w, item.sprite[0].h,
				viewport.offset[0] + (x*tileW), viewport.offset[1] + (y*tileH), item.sprite[0].w, item.sprite[0].h);
			}
		}
	}

    startTime = Date.now();

    let borderOffset = 240;
    let middleX = viewport.offset[0] + player.position[0];
    let middleY = viewport.offset[1] + player.position[1];
    let center = middleX + (tileW/2);

    ctx.fillStyle = bgColor;
    ctx.fillRect(middleX - borderOffset, middleY - borderOffset, w-(tileW*2), h-(tileH*2));
    ctx.fillStyle = white;
    ctx.strokeRect(middleX - (borderOffset-1), middleY - borderOffset+1, w-(tileW*2), h-(tileH*2));
    
    ctx.font = "30px Andale Mono";
    ctx.textAlign = "center";
    ctx.fillStyle = black;

    ctx.fillText("WELCOME TO", center, middleY - tileH*2);
    ctx.fillText("TURTLE TOWN!", center, middleY - tileH*1);

    ctx.font = "20px Andale Mono";
    ctx.fillText("You must be new here.", center, middleY + tileH*2.5);
    ctx.fillText("Feel free to poke around!", center, middleY + tileH*3.25);
    // ctx.fillText("Use the WASD keys to move.", center, middleY + tileH*4);
    // ctx.fillText("Press SPACE next to a character to speak with them.", center, middleY + tileH*4.75);

    ctx.font = "16px Andale Mono";

    if(!soundInitialized && !soundsLoaded) {
        ctx.fillText("Use the WASD keys to move.", center, middleY + tileH*4.5);
        ctx.fillText("Press SPACE to load game.", center, middleY + tileH*5.25);
    }
    else if(!soundsLoaded) {
        ctx.fillText("Sounds are loading...", center, middleY + tileH*5);
    }
    else {
        ctx.fillText("Press SPACE to begin.", center, middleY + tileH*5);
    }

    drawCharacter(); //character.js

}