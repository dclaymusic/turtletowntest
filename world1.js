//set world1 solution ahead of time
let world1WarpPuzzlePossibleSolutions = [9,11,13,15];
let world1WarpPuzzleSolution = [12,world1WarpPuzzlePossibleSolutions[randomInt(3)]];

//build the map and place character
function buildWorld1()
{
	let thisMapW = 60;
	let thisMapH = 60;

	gameMap = [203,203,203,203,202,202,202,202,202,202,202,202,202,202,202,202,202,203,203,203,203,203,202,202,202,203,203,203,203,202,202,202,203,208,208,208,208,208,208,208,208,203,203,202,202,202,202,202,203,203,203,203,203,203,203,203,203,203,202,202,203,225,229,203,203,202,202,202,202,202,202,202,202,202,203,203,203,203,203,218,203,203,203,203,203,203,209,212,213,213,213,213,213,212,210,209,210,209,210,209,212,213,213,213,213,213,213,213,213,212,210,207,216,218,218,218,218,203,202,202,203,207,207,207,203,203,202,202,202,202,202,202,202,203,203,207,207,218,218,218,218,218,218,218,207,203,210,203,203,203,203,203,203,208,211,208,208,208,208,211,208,203,203,203,203,203,203,203,203,203,209,207,203,218,218,218,203,203,202,202,203,203,203,212,203,203,202,202,202,202,202,202,203,203,216,207,203,218,218,218,218,218,218,218,207,203,209,203,209,212,213,213,213,212,210,209,210,209,217,209,212,213,213,213,213,213,212,209,217,209,210,203,203,218,218,218,218,203,203,202,202,203,203,213,203,203,202,202,202,202,202,202,203,203,207,203,218,218,218,218,218,218,218,207,216,203,217,203,210,203,203,203,203,208,208,211,208,208,211,208,208,203,203,203,203,203,203,212,203,203,203,218,218,218,218,218,218,218,203,203,202,202,202,213,203,202,202,202,202,202,202,202,202,203,207,203,218,218,218,218,218,203,207,207,203,203,209,203,209,203,203,203,203,208,208,209,208,208,209,208,208,203,203,203,203,203,203,213,203,203,203,207,218,218,218,218,218,218,207,203,202,202,203,213,203,202,202,202,202,202,202,202,202,203,207,218,218,218,218,218,203,203,212,203,203,203,210,203,217,209,210,212,213,212,209,217,209,210,209,210,228,203,203,210,212,213,213,213,213,212,207,207,218,218,218,218,218,203,212,203,202,202,203,212,203,202,202,202,202,202,202,202,202,203,218,218,218,218,218,203,203,203,213,203,203,203,209,203,203,203,212,203,203,208,208,209,208,208,217,208,208,203,203,209,203,203,203,212,203,203,216,207,218,218,218,218,218,203,213,203,202,203,203,221,203,203,202,202,202,202,202,202,202,203,203,218,218,218,218,218,203,203,213,203,203,203,210,212,213,213,213,213,213,212,209,210,209,210,209,210,212,213,212,210,209,203,203,210,203,203,207,207,218,218,218,218,218,203,213,203,203,220,203,218,218,219,203,202,202,202,202,202,231,207,203,218,218,218,218,218,203,203,212,203,203,203,203,203,203,203,212,203,203,208,211,208,208,208,208,211,208,203,203,203,217,209,210,209,203,203,207,218,218,218,218,218,218,203,213,203,203,218,218,218,218,218,203,203,202,202,202,203,203,207,203,218,218,218,218,218,203,203,210,209,226,209,210,203,203,209,210,203,203,208,209,208,208,208,208,217,208,203,203,203,203,203,203,212,203,207,207,218,218,218,218,218,218,203,213,203,203,219,218,218,203,220,203,203,203,202,202,203,231,207,203,218,218,218,203,203,203,203,203,226,224,226,209,217,209,210,203,203,203,208,210,209,217,209,210,209,208,203,203,202,202,203,203,213,203,207,218,218,218,218,218,218,218,203,213,203,203,218,218,218,218,218,203,203,202,202,202,203,203,207,207,207,203,218,218,212,213,213,212,209,226,209,210,203,203,203,203,202,203,208,208,208,211,223,208,208,208,203,202,202,202,203,203,213,203,207,218,218,218,218,218,218,218,202,213,203,203,210,203,203,203,209,203,203,203,203,203,203,231,207,202,202,202,207,207,203,203,203,203,203,203,203,203,203,202,202,202,202,202,203,207,207,207,207,207,207,203,203,202,202,202,202,203,212,203,207,218,218,218,218,218,218,202,202,213,203,203,212,203,203,203,217,209,230,203,203,203,203,203,207,202,202,202,202,202,202,203,203,203,203,202,203,202,202,202,203,202,202,202,202,203,207,207,207,207,203,202,202,202,202,202,202,203,210,209,207,207,218,218,218,218,218,202,203,213,202,203,213,203,203,203,203,203,203,203,203,203,203,231,207,207,202,202,202,202,202,202,203,202,202,202,202,202,202,203,203,203,203,202,202,202,202,216,216,202,202,202,202,202,202,202,202,203,227,203,203,207,218,218,218,218,218,202,203,212,203,203,213,203,202,202,203,203,203,203,203,203,203,203,203,216,202,203,203,202,202,202,202,202,202,202,202,202,203,203,207,207,207,207,207,207,207,216,216,202,202,202,202,202,202,202,202,202,203,203,203,216,207,218,218,218,202,202,208,209,203,203,213,202,202,202,202,203,202,202,202,202,203,203,207,207,203,203,203,203,203,202,202,202,202,203,203,203,203,207,207,207,203,203,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,203,203,207,207,218,218,202,202,208,211,203,203,213,202,202,202,202,202,202,202,202,202,202,207,207,203,203,203,203,203,203,203,203,203,203,203,203,203,203,207,203,203,203,203,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,203,203,203,216,202,202,202,208,211,203,203,213,203,202,202,202,203,203,202,202,207,207,207,203,203,203,203,203,203,203,203,202,203,203,203,203,203,203,212,203,203,203,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,202,203,208,208,209,208,208,202,208,211,203,203,213,203,202,203,203,203,203,203,202,207,203,203,203,203,203,203,202,202,202,202,202,202,202,203,203,203,203,213,203,202,202,202,202,202,203,203,203,203,203,202,202,202,202,202,202,202,202,202,203,203,208,209,226,209,208,202,208,211,203,203,212,203,203,203,203,216,216,216,216,207,203,203,203,203,203,202,202,202,202,202,202,202,202,202,203,203,203,213,203,202,202,202,202,203,216,214,206,207,206,203,203,202,202,202,202,202,202,202,203,203,208,226,224,226,208,202,208,211,203,203,207,203,203,218,218,218,203,203,203,203,203,203,203,203,203,202,202,202,202,202,202,202,202,202,202,203,203,213,202,202,202,202,202,203,214,216,205,206,205,206,203,202,202,202,202,202,202,202,203,203,208,209,226,209,208,208,208,211,203,203,218,203,218,218,218,218,203,203,203,203,203,203,203,202,202,202,202,202,203,203,202,202,202,202,202,202,202,213,203,202,203,203,203,205,216,203,203,203,207,206,203,202,202,202,202,202,202,202,203,203,208,210,209,210,209,210,209,210,203,203,218,203,218,218,218,203,203,203,203,203,203,203,202,202,202,202,202,203,203,203,203,203,202,202,202,202,203,213,203,202,203,207,205,214,205,203,202,203,203,206,205,203,202,202,202,202,202,202,202,203,203,208,208,208,208,208,208,208,203,203,218,203,218,218,203,203,203,203,203,202,203,202,202,202,202,202,203,208,208,208,208,208,203,202,202,202,203,212,202,202,203,206,206,206,205,203,202,202,203,206,206,206,214,215,202,202,202,202,202,202,203,203,203,203,203,203,203,203,203,203,218,203,218,218,203,203,203,203,202,202,202,202,202,202,202,202,203,208,209,226,209,208,203,202,202,203,203,206,203,203,205,206,205,203,203,202,202,202,203,203,205,206,205,214,214,202,202,202,202,202,202,202,203,203,203,203,203,203,202,203,218,218,218,218,203,203,203,202,202,202,202,202,202,202,202,202,203,208,226,224,226,208,203,203,203,203,203,216,206,206,206,205,203,203,202,202,202,202,202,203,207,206,206,207,205,202,202,202,202,202,202,202,202,202,202,202,202,202,202,203,203,218,218,218,203,203,203,202,202,202,202,202,202,202,202,203,203,208,209,226,209,208,203,203,203,203,203,206,215,205,205,203,202,202,202,202,202,202,202,202,203,206,206,206,205,203,203,202,202,202,202,202,202,202,202,202,202,202,202,203,218,218,218,218,203,203,202,202,202,202,202,202,202,202,202,202,203,203,208,209,210,209,212,213,213,213,212,214,216,205,203,203,202,202,202,202,202,202,202,202,203,203,207,205,206,207,205,203,202,202,202,202,202,202,202,202,202,202,202,203,218,218,218,203,203,202,202,202,202,202,202,203,203,202,202,202,202,203,203,203,208,208,208,208,203,203,203,203,203,203,203,202,202,202,202,202,202,202,202,202,202,203,203,203,206,206,206,203,203,203,203,203,202,202,202,202,202,202,202,203,218,218,218,203,202,202,202,202,202,202,203,203,203,203,203,203,203,203,203,203,203,203,203,208,203,203,202,202,202,202,202,202,202,203,203,203,203,203,202,202,202,202,202,203,214,206,206,207,206,206,207,203,203,202,202,202,202,202,202,202,203,218,218,203,202,202,202,202,202,203,203,208,208,208,208,208,208,208,203,203,203,203,208,208,203,203,202,202,202,202,202,203,203,204,205,205,206,203,203,203,202,202,202,203,214,214,205,205,205,206,205,206,203,203,203,203,202,202,202,202,202,203,207,203,202,202,202,202,203,203,208,209,210,209,210,209,217,209,208,203,208,208,208,208,208,203,202,202,202,202,203,203,206,205,205,206,205,205,207,203,203,203,203,203,205,205,207,206,205,205,205,205,206,207,206,203,202,202,202,202,202,203,212,203,202,202,202,202,203,203,208,217,208,228,208,208,209,210,208,203,208,210,209,210,208,203,203,202,202,203,203,206,205,205,206,203,203,206,205,212,213,213,213,212,205,206,203,203,203,206,207,205,205,206,204,206,203,202,202,202,202,202,213,202,202,202,202,202,202,203,208,211,208,208,208,208,208,211,208,208,208,211,203,211,203,203,203,202,202,203,203,205,204,206,203,203,203,203,206,203,203,203,203,203,207,203,203,202,202,203,203,203,205,206,205,207,214,207,202,202,202,203,213,203,202,202,202,202,202,203,205,206,205,206,204,217,209,210,208,210,209,210,203,204,205,204,203,203,202,203,205,206,205,206,203,203,202,203,203,203,202,202,202,203,203,203,202,202,203,203,203,203,205,205,205,206,203,212,202,202,202,203,213,203,202,202,202,202,202,203,206,205,205,204,203,203,210,203,203,203,203,217,203,205,205,205,204,203,203,203,206,205,205,206,203,202,202,202,202,202,202,202,202,202,202,203,203,203,203,203,204,205,205,205,206,204,203,213,202,202,202,203,213,203,202,202,202,202,202,203,203,204,205,206,203,203,209,212,213,213,212,209,203,206,204,206,214,215,203,202,203,206,205,204,203,202,202,202,202,202,202,202,203,203,203,203,206,204,205,205,205,205,206,205,205,215,203,213,202,202,203,203,213,203,203,202,202,202,202,202,203,203,206,205,203,203,203,202,203,203,203,203,203,204,206,205,206,214,203,202,202,203,204,205,203,203,202,202,202,202,202,202,203,203,204,206,205,205,206,205,206,204,205,205,214,214,203,213,202,202,203,203,212,203,203,202,202,202,202,203,203,203,205,206,203,203,202,202,202,203,203,203,203,206,205,204,203,203,202,202,202,203,205,206,204,203,203,202,202,202,203,203,203,206,205,205,206,205,205,206,203,206,205,214,214,203,203,213,202,202,203,203,209,203,203,203,202,202,203,203,203,203,205,204,204,203,203,202,202,202,203,203,206,206,205,203,203,202,202,202,202,203,204,205,204,203,202,202,202,203,203,203,204,205,205,206,204,206,203,203,203,208,208,208,208,208,203,212,202,202,203,209,226,209,203,203,202,202,203,203,203,205,205,206,205,204,205,203,202,202,203,203,204,205,206,203,202,202,202,202,202,203,206,205,203,203,202,202,202,203,203,206,205,205,206,204,203,203,203,203,203,208,210,209,210,217,210,209,202,202,203,226,224,226,203,203,202,202,202,203,203,206,204,205,204,204,204,214,203,202,203,203,206,205,205,203,202,202,202,203,203,206,205,206,203,202,202,202,203,203,204,205,205,206,205,204,203,203,203,202,202,208,211,208,208,208,211,208,202,202,203,209,226,209,203,202,202,202,202,202,203,204,206,205,203,203,205,204,215,202,202,203,204,204,206,203,203,203,203,203,206,205,206,203,203,202,203,203,203,204,206,205,206,204,205,205,203,203,203,202,202,208,210,209,210,209,210,208,203,202,203,203,209,203,203,202,202,202,202,202,203,205,205,203,202,202,203,214,202,202,202,202,203,206,205,204,204,203,203,206,204,205,203,203,202,203,203,206,205,205,205,206,205,205,206,205,204,203,203,203,203,203,208,208,209,226,209,208,203,202,202,203,203,203,202,202,202,202,202,203,203,212,203,202,202,202,202,202,202,202,202,202,203,204,205,205,206,204,206,205,205,206,203,202,202,203,217,214,205,206,204,204,204,205,205,205,205,206,205,204,203,203,203,208,226,224,226,208,203,202,202,203,203,203,202,202,202,202,202,202,203,213,203,203,202,202,202,202,202,202,202,202,203,203,204,205,204,205,205,205,204,203,203,202,203,217,215,214,214,204,203,203,203,204,206,205,206,205,205,205,206,203,208,208,209,226,209,208,203,202,202,202,203,202,202,202,202,202,202,202,202,213,203,203,202,202,202,202,202,202,202,202,202,203,203,206,205,205,204,206,205,212,213,213,212,209,210,209,210,208,203,202,202,203,212,203,203,203,204,205,205,204,203,208,210,209,210,208,203,202,202,202,202,202,202,202,202,202,202,202,203,213,203,202,202,202,202,202,202,202,202,202,202,203,203,203,204,206,205,205,203,203,203,202,208,208,211,208,208,208,202,202,202,203,213,203,202,202,203,206,205,205,203,203,208,208,209,217,202,202,202,202,202,202,202,202,202,202,202,203,203,213,203,202,202,202,202,202,202,202,202,202,202,202,203,203,203,205,205,204,203,202,202,202,208,209,210,208,208,208,202,203,203,203,213,203,202,202,202,203,204,205,203,203,203,208,208,211,202,202,202,202,202,202,202,202,202,203,203,203,203,212,203,203,202,202,202,202,202,202,202,203,203,202,202,203,203,203,204,214,203,202,202,202,208,208,208,208,203,203,203,203,203,203,212,203,203,202,202,203,205,205,206,203,203,203,203,212,202,202,202,202,202,202,202,202,203,203,204,205,206,205,204,203,203,202,202,202,202,202,203,203,203,203,203,203,203,203,214,214,203,203,203,202,202,203,203,203,203,205,204,204,205,205,204,205,203,203,202,202,203,205,205,203,203,203,203,213,202,202,202,202,202,202,202,203,203,204,206,205,205,204,205,205,203,203,203,203,203,203,203,203,203,203,203,203,203,203,203,204,205,204,203,203,203,203,203,205,204,204,205,206,205,204,204,204,206,203,203,203,206,205,204,205,203,203,203,213,202,202,202,202,202,203,203,203,206,205,205,205,206,205,204,206,205,214,203,203,203,203,203,205,205,206,204,203,203,203,203,206,204,204,205,204,204,205,204,204,205,206,205,204,204,203,205,214,203,203,203,205,204,204,204,214,206,203,203,213,202,202,202,202,203,203,206,204,205,206,204,206,205,204,204,204,214,214,204,204,205,206,205,205,204,205,204,205,206,203,203,203,205,206,204,205,206,204,205,206,204,205,204,214,203,203,214,217,203,203,203,203,205,204,214,210,208,203,203,213,203,202,202,203,203,206,205,205,204,205,204,204,203,203,203,203,203,203,203,205,204,204,204,205,206,204,205,206,205,205,203,203,203,203,206,205,205,206,205,205,204,215,214,203,202,203,208,209,208,203,203,208,208,208,215,209,208,209,203,212,203,203,203,203,214,204,204,204,203,203,203,203,203,203,202,202,202,203,203,203,203,203,205,204,204,205,206,204,205,204,203,203,203,203,203,203,206,204,203,204,214,214,203,203,202,202,208,210,212,213,213,213,212,210,208,211,208,211,203,211,203,203,215,214,205,204,205,203,203,203,203,202,202,202,202,202,202,202,202,202,203,203,203,204,205,204,204,206,205,205,206,205,203,203,203,203,203,203,203,203,203,203,202,202,202,202,208,208,208,203,203,203,208,209,210,209,210,209,210,209,203,203,203,203,203,203,203,203,202,202,202,202,202,202,202,202,202,202,202,202,202,202,203,203,200,200,200,200,200,200,201,200,200,200,200,200,200,203,203,203,202,202,202,202,202,202,202,202,202,203,203,203,203,203,203,203,203,203,203,203,202];


    itemMap = [];

    //random grass sprinkling
	for(let i = 0; i < gameMap.length; i++) { 
        itemMap[i] = 0; 
        if(gameMap[i] == 204 || gameMap[i] == 205)
        {
            let r = randomInt(3);
            if(r == 1 || r == 2) { 
                let s = randomInt(3);
                if(s == 0) { itemMap[i] = 208; }
                else { itemMap[i] = 207; }
            }
        }
    }



	mapW = thisMapW;
	mapH = thisMapH;

    //set scrolls
    let scrollCoordinates = [[18,56],[55,42]]
    for(let i = 0; i < scrollCoordinates.length; i++)
    { itemMap[toIndex(scrollCoordinates[i][0],scrollCoordinates[i][1])] = 200; }

    //set correct warp puzzle tile
    setTileTo(world1WarpPuzzleSolution[0],world1WarpPuzzleSolution[1],230);

	// var starting_pos = [15,12]; //for tests
    var starting_pos = [29,58]; //actual start
	player.position[0] = starting_pos[0];
	player.position[1] = starting_pos[1];
	player.placeAt(player.position[0], player.position[1]);
	viewport.update(playerX(),playerY());

    //opening sound
    selectSnd('bg-mountains1',0,true);


}

//draw current position on map and trigger events as needed
function drawWorld1(currentFrameTime, currentSecond, tick)
{
	if(levelBuildTick) { buildWorld1(); levelBuildTick = false; }

	//draw current viewport only (for viewport, see movement.js)
	for(var y = viewport.startTile[1]; y <= viewport.endTile[1]; y++)
	{
		for(var x = viewport.startTile[0]; x <= viewport.endTile[0]; x++)
		{
			//draw gameMap
			var tile = tileTypes[gameMap[toIndex(x,y)]];
			ctx.drawImage(tileset, tile.sprite[0].x, tile.sprite[0].y, tile.sprite[0].w, tile.sprite[0].h,
				viewport.offset[0] + (x*tileW), viewport.offset[1] + (y*tileH), tileW, tileH);
			
			//draw items over top
			if (itemMap[toIndex(x,y)] != 0)
			{
				var item = itemTypes[itemMap[toIndex(x,y)]];
				ctx.drawImage(tileset, item.sprite[0].x, item.sprite[0].y, item.sprite[0].w, item.sprite[0].h,
				viewport.offset[0] + (x*tileW), viewport.offset[1] + (y*tileH), item.sprite[0].w, item.sprite[0].h);
			}
		}
	}

    itemFlashAnimation(cairnPurple);

	drawCharacter(); //character.js

	//trigger any events if character just stepped on a new tile
	if(tick)
	{

        //cue 2nd background sound
        if(playerX() == 41 && playerY() == 25 && !gameState.world1BackgroundMusic2Triggered) {
            selectSnd('bg-mountains2',0,true);
        }
		if(itemTypes[thisItemIs()].isScroll) {
			// position conditionals here so each sign reads something different
			scrollActive = true; 
            popupActive = false;
            if(playerX() == 18 && playerY() == 56) { updateScroll(
                ["A crumpled page reads:",
                "I've noticed that certain stones will make way for you,",
                "but only if you give them a little push. -H"]); } //scroll

            if(playerX() == 55 && playerY() == 42) { updateScroll(
                ["A crumpled page reads:",
                "These ruins cannot be the GREAT HALL the ancients texts spoke of!",
                "Rumor says the complex is beyond the foothills and leads the way to",
                "the icy lakes that hide the MYSTIC MOON..."]); } //scroll
		}
		else { 
            if(playerX() == 29 && playerY() == 58) { 
                scrollActive = true;
                updateScroll([
                "The door behind you has closed, so you must press onward.", 
                "What lies within these mountains?" ]); 
            } //pop
            else { scrollActive = false; } 
        }

        //signs
        let n = nextToSign();
        if(n[0] == 37 && n[1] == 12) { updateSign(["THE GREAT HALL"]);}
        else if(n[0] == 2 && n[1] == 1) { updateSign(["HERMICUS' HUT"]); }
        else { signActive = false; }

        //inscriptions
        let o = nextToInscription();
        if(o[0] == 14 && o[1] == 34) { updateInscription([
                '"These mountains are marked with many paths',
                "carved by countless tiny turtle tracks -",
                "Each searching within this rocky gloom",
                'for the curious light of the MYSTIC MOON."']);
            }
        if(o[0] == 40 && o[1] == 6) { updateInscription([
            '"Ages ago, the OLD ONES crossed these hills',
            "in pursuit of the MYSTIC MOON.",
            "This hall bears witness to their search,",
            'Their echoes linger in these shadows and stones."']);}
        if(o[0] == 47 && o[1] == 15) { updateInscription(["These alpine lakes, long untouched by turtle feet",
            "resound with the hum of forgotten winds.",
            "",
            "This inscription is particularly old and hard to read...",
            "      THE WAY REVEALS ITSELF TO THOSE WHO LISTEN "]);} //a space at the end = faded
        else { inscriptionActive = false; }

        //moon switch puzzle
		toggleTile(219,220);
        if(gameMap[toIndex(playerX(),playerY())] == 220 || gameMap[toIndex(playerX(),playerY())] == 219)
        {
            //1,9 5,9 1,11 5,11
            if(gameMap[toIndex(1,9)] == 220 &&
            gameMap[toIndex(1,11)] == 220 &&
            gameMap[toIndex(5,9)] == 220 &&
            gameMap[toIndex(5,11)] == 220)
            {
                setTileTo(3,8,222); //puzzle solved
                if(!gameState.world1PuzzleGateUnlockedForFirstTime)
                { 
                    selectSnd('cairn-found',0);
                    gameState.world1PuzzleGateUnlockedForFirstTime = true;
                }
                selectSnd('gate-unlock',0);
            }
            else { setTileTo(3,8,221); }
        }

        //cairn handler (sound is in cairn function in items.js)
        if(itemTypes[itemMap[toIndex(playerX(),playerY())]].name == 'STONE TOTEM')
        {
            alphaCount = 0.7; //cue flash animation
            gameState.cairnsCollected.push(itemMap[toIndex(playerX(),playerY())]);
        }

        //warp puzzle handler
        if(playerX() == world1WarpPuzzleSolution[0]+1 && playerY() == world1WarpPuzzleSolution[1])
        { selectSnd('voice-calling-out',0); } //play audio at adjacent tile
        warpHandler(world1WarpPuzzleSolution[0],world1WarpPuzzleSolution[1],7,14); //warp solution

        //incorrect warp tiles
        if(thisTileIs() == 231) {
                selectSnd('warp231',0);
                player.position[0] = 37;
                player.position[1] = 14;
                player.placeAt(player.position[0], player.position[1]);
                viewport.update(playerX(),playerY()); 
        }
        // { if(playerX() != world1WarpPuzzleSolution[0] || playerY() != world1WarpPuzzleSolution[1])
        //     {

        //     }
        //     else
        //     {

        //     }
        // }

        // //if tunnel tile, randomize sound
        // if(thisTileIs() == 213) { 
        //     let r = randomInt(2);
        //     tileTypes[213].sound = `tunnel213-${r}`;
        // }


		// warpHandler(5,3,5,8);
		// movePlayer(7,12,19,12,true);
		// switchTile(8,9);
		// pickUpItem(2);
		if(playerX() == 1 && playerY() == 1)
		{ 
            selectSnd('portal-thud',0);
            clearAllBackgroundSnd();
			gameState.level = 'dungeon1'; levelBuildTick = true;
		}
	}
}