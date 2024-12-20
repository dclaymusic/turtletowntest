//build the map and place character
function buildTurtleTown()
{
    let visit = gameState.turtleTownVisits;

	let thisMapW = 21;
	let thisMapH = 22;
    
    //visit == 1
	let thisGameMap =  
    [
        100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
        100,101,101,101,101,101,101,101,101,101,111,101,101,101,101,101,101,101,101,101,100,
        100,101,107,107,107,107,107,107,107,107,109,107,107,107,107,107,107,107,107,101,100,
        100,104,105,106,105,106,105,106,105,106,105,106,105,106,105,106,105,106,107,104,100,
        100,104,107,105,101,102,101,105,106,105,106,105,106,105,101,102,101,105,107,104,100,
        100,104,107,106,102,101,102,106,105,106,105,106,105,106,102,101,102,106,107,104,100,
        100,104,107,105,101,110,103,105,106,105,106,105,106,105,103,110,101,105,107,104,100,
        100,104,107,106,105,106,105,106,105,106,105,106,105,106,105,106,105,106,107,104,100,
        100,104,107,105,106,105,106,105,107,107,107,107,107,105,106,105,106,105,107,104,100,
        100,104,107,106,101,101,105,106,107,108,108,108,107,106,105,101,101,106,107,104,100,
        100,104,107,105,102,112,106,105,107,108,101,108,107,105,106,101,102,105,107,104,111,
        100,104,107,106,101,101,105,106,107,108,108,108,107,106,105,101,101,106,107,104,100,
        100,104,107,105,106,105,106,105,107,107,107,107,107,105,106,105,106,105,107,104,100,
        100,104,107,106,105,106,105,106,105,106,105,106,105,106,105,106,105,106,107,104,100,
        100,104,107,105,101,110,103,105,106,105,106,105,106,105,103,110,101,105,107,104,100,
        100,104,107,106,102,101,102,106,105,106,105,106,105,106,102,101,102,106,107,104,100,
        100,104,107,105,101,102,101,105,106,105,106,105,106,105,101,102,101,105,107,104,100,
        100,104,107,106,105,106,105,106,105,106,105,106,105,106,105,106,105,106,107,104,100,
        100,101,107,107,107,107,107,107,107,107,109,107,107,107,107,107,107,107,107,101,100,
        100,101,101,101,101,101,101,101,101,101,111,101,101,101,101,101,101,101,101,101,100,
        100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,
        100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100
    ]

    //visit == 1
	let thisItemMap =
    [
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
        0,  0,  0,  0,  0,  0,  0,  106,102,0,  0,  0,  104,0,  0,  0,  0,  0,  0,  0,  0,  
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  110,0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
        0,  0,  0,  0,  0,  0,  0,  0,  0,  105,107,105,0,  0,  0,  0,  0,  0,  0,  0,  0,  
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
        0,  0,  0,  0,  0,  0,  0,  105,0,  0,  0,  0,  0,  105,0,  0,  0,  0,  0,  0,  0,  
        0,  0,  0,  0,  0,  0,  0,  107,0,  0,  109,0,  0,  107,0,  0,  0,  0,  0,  0,  0,  
        0,  0,  0,  0,  0,  0,  0,  105,0,  0,  0,  0,  0,  105,0,  0,  0,  0,  0,  0,  0,  
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  107,0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
        0,  0,  0,  0,  0,  0,  0,  108,0,  0,  103,0,  0,  108,0,  0,  0,  0,  0,  0,  0,  
        0,  0,  0,  0,  0,  0,  0,  106,0,  0,  0,  0,  0,  106,0,  0,  0,  0,  0,  0,  0,  
        0,  0,  0,  0,  0,  0,  0,  108,0,  0,  0,  0,  0,  108,0,  0,  0,  0,  0,  0,  0,  
        0,  101,0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 
    ]

	mapW = thisMapW;
	mapH = thisMapH;
	gameMap = thisGameMap;
	itemMap = thisItemMap;


    //if instruments active, place on map
    if(gameState.instruments['LITHOPHONE']) { itemMap[toIndex(11,16)] = 115; } //place lithophone on map
    if(gameState.instruments['XYLOPHONE']) { itemMap[toIndex(9,16)] = 116; } //place xylophone on map

    //if you got at least 1 cairn, add to herman's dialogue
    if(gameState.cairnsCollected.length >= 1 && !gameState.instruments['LITHOPHONE'])
        hermanDialogue[visit-1].push(
            [
                "HERMAN:",
                "Say, it looks like you stumbled on a STONE CAIRN!",
                "These rocks are prized for their musical quality.",
                "I'll put something together for you and leave it",
                "over by TURTLE TOWER. Hope you like it!",
                ""
            ]
        )
    
    //if you got at least 1 cairn, add to bulger's dialogue
    if(gameState.cairnsCollected.length >= 1 && !gameState.instruments['XYLOPHONE'])
        bulgerDialogue[0].push(
            [
                "BULGER:",
                "Well well, if isn't a PETRIFIED LOG!",
                "Gimme a second with that and I'll chomp out",
                "something real special for you. Head to the",
                "south of town and give it a looky-loo!",
                ""
            ]
        )
    

    //change things depending on visit # and gameState
    let starting_pos;
    if(visit == 1) { 
        starting_pos = [10,16]; //start by heckus
    }
    if(visit == 2) { 
        starting_pos = [10,2]; //start at top of gate
        setTileTo(10,1,110); //close top door
        setTileTo(10,2,106); //change tile below to path
        setItemTo(10,5,0); //remove speaking scroll
        setTileTo(5,6,111); //hermicus door open
        setItemTo(5,6,111); //place hermicus 2
        setItemTo(1,17,0); //remove herman
        setTileTo(5,14,111); //herman door open
        setItemTo(5,14,101); //place herman at his house
    }
    if(visit == 3)
    {
        starting_pos = [19,10]; //start on right side
        setTileTo(10,1,110); //close top door
        setTileTo(20,10,110); //close side door
        setTileTo(10,2,106); //change tile below to path
        setItemTo(10,5,0); //remove speaking scroll
        setTileTo(5,6,111); //hermicus door open
        setItemTo(5,6,111); //place hermicus 2
        setItemTo(1,17,0); //remove herman
        setTileTo(5,14,111); //herman door open
        setItemTo(5,14,101); //place herman at his house
        setTileTo(15,6,111); //moe door open
        setItemTo(15,6,113); //place moe
        //create tunnel system in south
        setTileTo(10,19,117); //tunnel opening
        for(let x = 10; x <= 18; x++)
        {
            setTileTo(x,20,115);
        }
        setTileTo(19,20,116); //tunnel to world 3
        dimSurroundings = false;
        // swapDimmableTiles();
    }

    //for tests
    starting_pos=[10,6];
    //place player
	player.position[0] = starting_pos[0];
	player.position[1] = starting_pos[1];
	player.placeAt(player.position[0], player.position[1]);
	viewport.update(playerX(),playerY());


}

//draw current position on map and trigger events as needed
function drawTurtleTown(currentFrameTime, currentSecond, tick)
{
	if(levelBuildTick) { buildTurtleTown(); levelBuildTick = false; }

	//draw current viewport only (for viewport, see movement.js)
	for(var y = viewport.startTile[1]; y <= viewport.endTile[1]; y++)
	{
		for(var x = viewport.startTile[0]; x <= viewport.endTile[0]; x++)
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

	//for tunnel burrowing
	if(dimSurroundings)
	{
		for(var y = viewport.startTile[1]; y <= viewport.endTile[1]; y++)
			{
				for(var x = viewport.startTile[0]; x <= viewport.endTile[0]; x++)
				{
					var tile = tileTypes[gameMap[toIndex(x,y)]];
					if(!tile.undimmable) {
						ctx.fillStyle = 'rgba(0,0,0,0.5)';
						ctx.fillRect(viewport.offset[0] + x*tileW,viewport.offset[1] + y*tileH,tileW,tileH);
					}
				}
			}
	}
	
	//for diving
	diveAnimation(); //dive animation would go here

    if(gameState.turtleTownVisits == 2) { itemFlashAnimation(waterWingsYellow); }
    else if(gameState.turtleTownVisits == 3) { itemFlashAnimation(headlightOrange); }

	drawCharacter(); //character.js

	//trigger any events if character just stepped on a new tile
	if(tick)
	{

        dialogueHandler(); //dialogue.js
        
		if(itemTypes[thisItemIs()].isScroll) {
			// position conditionals here so each sign reads something different
			scrollActive = true; 
			updateScroll(["Press SPACE to speak with characters and read signs."]);
		}
		else { scrollActive = false; }

        let n = nextToSign();
        if(n[0] == 6 && n[1] == 6) { updateSign(["SLOW TIME CLOTHES"]);}
        else if(n[0] == 14 && n[1] == 6) { updateSign(["MOE'S HOUSE"]); }
        else if(n[0] == 14 && n[1] == 14) { updateSign(["TURTLE TOWER"]); }
        else if(n[0] == 6 && n[1] == 14) { updateSign(["HERMAN'S HOUSE"]); } 
        else { signActive = false; }

        //unlock world 1 door and play voice after speaking to herman
        if(playerX() == 1 && playerY() == 15 && gameState.talkedToHermanBeforeWorld1)
        { 
            setTileTo(10,2,106)
            // selectSnd('voice-calling-out',0); 
        }

        //clear inventory sign
        if(playerX() != 6 || playerY() != 10) { 
            inventoryActive = false; 
        }

        //special sound for rapids/water
        if(thisTileIs() == 107)
        {
            selectSnd(`water${waterCycle}`,0);
            waterCycle == 0 ? waterCycle = 1 : waterCycle = 0;
        }
        if(thisTileIs() == 108)
        {
            selectSnd(`water${deepWaterCycle}`,0);
            deepWaterCycle == 2 ? deepWaterCycle = 3 : deepWaterCycle = 2;
        }

        //warp to world 1
		if(playerX() == 10 && playerY() == 1)
		{ 
			gameState.level = 'world1'; levelBuildTick = true;
            selectSnd('voice-calling-out',0); 
            selectSnd('portal-thud',0)
        }
        //warp to world 2
        if(playerX() == 20 && playerY() == 10)
        { 
            gameState.level = 'world2'; levelBuildTick = true;
            selectSnd('portal-thud',0)
        }
        //warp to world 3
        if(playerX() == 19 && playerY() == 20)
        { 
            player.direction = directions.down;
            gameState.level = 'end';
            // gameState.level = 'world3'; levelBuildTick = true;
            selectSnd('portal-thud',0);
            
        }

        // //warp to instrument
        // if(playerX() == 10 && playerY() == 4)
        // { 
        //     gameState.level = 'instrument'; levelBuildTick = true;
        //     selectSnd('portal-thud',0)
        // }
	}
}