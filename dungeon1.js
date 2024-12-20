//build the map and place character
function buildDungeon1()
{
	let thisMapW = 19;
	let thisMapH = 25;

    gameMap = [
            250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,
            250,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,250,
            250,251,253,252,253,252,253,252,253,252,255,252,255,254,253,254,253,251,250,
            250,260,252,253,252,253,252,253,252,253,254,255,254,253,252,255,252,260,250,
            250,251,253,252,253,252,253,252,253,252,255,254,253,254,255,254,253,251,250,
            250,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,251,250,
            250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,
            250,251,251,260,251,251,250,251,251,260,251,251,250,251,251,260,251,251,250,
            250,251,256,257,256,251,250,251,257,256,257,251,250,251,256,257,256,251,250,
            250,251,257,258,257,260,250,260,256,258,256,260,250,260,257,258,257,251,250,
            250,251,256,257,256,251,250,251,257,256,257,251,250,251,256,257,256,251,250,
            250,251,251,260,251,251,250,251,251,260,251,251,250,251,251,260,251,251,250,
            250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,
            250,251,251,260,251,251,250,251,251,260,251,251,250,251,251,260,251,251,250,
            250,251,257,256,257,251,250,251,256,257,256,251,250,251,257,256,257,251,250,
            250,260,256,258,256,251,250,260,257,258,257,260,250,251,256,258,256,260,250,
            250,251,257,256,257,251,250,251,256,257,256,251,250,251,257,256,257,251,250,
            250,251,251,260,251,251,250,251,251,260,251,251,250,251,251,260,251,251,250,
            250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,
            250,251,251,251,251,251,250,251,251,260,251,251,250,251,251,251,251,251,250,
            250,251,256,257,256,251,250,251,257,256,257,251,250,251,256,257,256,251,250,
            250,260,257,258,257,260,250,260,256,258,256,260,250,260,257,258,257,260,250,
            250,251,256,257,256,251,250,251,257,256,257,251,250,251,256,257,256,251,250,
            250,251,251,260,251,251,250,251,251,261,251,251,250,251,251,260,251,251,250,
            250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250]
    itemMap = [
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
            0,  0,  252,0,  0,  0,  251,0,  252,0,  0,  251,0,  0,  252,0,  251,0,  0,  
            0,  0,  0,  0,  0,  0,  0,  0,  0,  250,0,  0,  0,  253,251,0,  0,  0,  0,  
            0,  0,  0,  0,  252,0,  0,  251,0,  0,  0,  0,  252,0,  0,  0,  251,0,  0,  
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]

	mapW = thisMapW;
	mapH = thisMapH;

    var starting_pos = [9,21]; //actual start
    // var starting_pos = [16,3];
	player.position[0] = starting_pos[0];
	player.position[1] = starting_pos[1];
	player.placeAt(player.position[0], player.position[1]);
	viewport.update(playerX(),playerY());

    //opening sound
    selectSnd('bg-dungeon1',0,true,true);

    timer = setInterval(() => {
        animationTimer();
    }, 1000);

}

//draw current position on map and trigger events as needed
function drawDungeon1(currentFrameTime, currentSecond, tick)
{
	if(levelBuildTick) { buildDungeon1(); levelBuildTick = false; }

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

	drawCharacter(); //character.js

	//trigger any events if character just stepped on a new tile
	if(tick)
	{
        //puzzle sign
        if(playerX() == 9 && playerY() == 22) { 
            scrollActive = true;
            selectSnd('scroll200',0);
            updateScroll([
            "The door shuts behind you. An inscription reads:",
            "LET THE RISING VOICE GUIDE YOU ",
            "TO THE MYSTIC MOON! "]); 
        }
        //hermicus exit line
        else if(playerX() == 15 && playerY() == 3)
        {
            selectSnd('hermicus1',0);
            scrollActive = true;
            gotItemActive = false;
            updateScroll([
            "HERMICUS:",
            "...thank you! I'll see you on the other side..."]); 
        }
        else { scrollActive = false; } 

        //hermicus dialogue
        if(nextToCharacter() == 'hermicus1') { 
            updateDialogue(
            [
                ["HERMICUS:",
                "Wha... a... TURTLE? I'm so glad you're here!",
                "I was looking for wisdom in these mountains.",
                "I thought the further away I got from Turtle Town,",
                "the closer I'd get to that big, beautiful MYSTIC MOON.",
                "After searching these craggy peaks, I finally found it..."],
                ["HERMICUS:",
                "..and it's just a big rock! It's useless!",
                "I want to go home... but I'm far too weak to do it alone.",
                "Can you help clear a path for me?",
                "And PLEASE - take that blasted thing with you!",
                "I want it out of my sight!"]
            ]);
        }
        else { dialogueActive = false; dialoguePage = 0; }

        //if it's a warp tile
        if(thisTileIs() == 260)
        {
            //iterate through possible pairs
            for (let i = 0; i < warpPairs.length; i++)
            {
                //if coordinates match first 2 values, move 
                if(playerX() == warpPairs[i][0] && playerY() == warpPairs[i][1])
                {
                    player.position[0] = warpPairs[i][2]; player.position[1] = warpPairs[i][3];
                    player.placeAt(player.position[0], player.position[1]);
                    viewport.update(playerX(),playerY());

                    //play sound here
                    selectSnd(warpPairs[i][4],0);
                    break;
                }
            }
        }
        //mystic moon / lumpy rock
        if(thisItemIs() == 253) 
        { 
            updateGotItem(['You got the LUMPY ROCK!','What purpose could it serve...?'],253)
            selectSnd('moonglow',0,true);
            fadeOutBackgroundSnd('bg-dungeon1',3.0);
            gameState.artifacts["LUMPY ROCK"] = true; 
        }
        //back to turtle town
		if(playerX() == 17 && playerY() == 3)
		{ 
            gameState.turtleTownVisits = 2;
            updateDialogue([[]]);
            selectSnd('warp230',0);
            fadeOutBackgroundSnd('moonglow',3.0);
            // clearAllBackgroundSnd(3.0);
			gameState.level = 'turtle-town'; levelBuildTick = true;  
		}
	}
}

//warp scrambling
let warpRooms = {
    1: { warpLocations: [[9,19],[7,21],[11,21]], toRoom: [2,3,4] },
    2: { warpLocations: [[15,13],[17,15],[15,17]], toRoom: [1,3,5] },
    3: { warpLocations: [[9,7],[7,9],[9,11],[11,9]], toRoom: [1,2,4,6] },
    4: { warpLocations: [[15,7],[13,9],[15,11]], toRoom: [1,3,7] },
    5: { warpLocations: [[3,7],[5,9],[3,11]], toRoom: [2,6,8] },
    6: { warpLocations: [[9,13],[7,15],[11,15],[9,17]], toRoom: [3,5,7,9] },
    7: { warpLocations: [[3,13],[1,15],[3,17]], toRoom: [4,6,8] },
    8: { warpLocations: [[1,21],[5,21],[3,23]], toRoom: [5,7,9] },
    9: { warpLocations: [[13,21],[17,21],[15,23]], toRoom: [8,6,0] },
}

let warpPairs = []; //5 values -- currentX, currentY, warpToX, warpToY, sound of room being entered

//shuffle coordinate-room assignments
for (const [key] of Object.entries(warpRooms)) {
    shuffle(warpRooms[key].warpLocations);
}

//for each room, find coordinates
for (const [key1] of Object.entries(warpRooms)) {

    let wIndex = 0;
    //iterate through room coordinates of every other room
    for (const [key2] of Object.entries(warpRooms)) 
    {
        //if not looking at the current room
        if(warpRooms[key1] != warpRooms[key2])
        {
            //iterate through warp locations of that room
            for(let i = 0; i < warpRooms[key2].warpLocations.length; i++)
            {
                //and if there should be a path between these 2 rooms
                if(warpRooms[key2].toRoom[i] == key1)
                {
                    //pair the next 2 available coordinates using wIndex
                    let currentWarpX = warpRooms[key1].warpLocations[wIndex][0];
                    let currentWarpY = warpRooms[key1].warpLocations[wIndex][1];
                    let warpToX = warpRooms[key2].warpLocations[i][0];
                    let warpToY = warpRooms[key2].warpLocations[i][1];
                    let sound = `dungeon1-room${key2}`;
                    warpPairs.push([currentWarpX,currentWarpY,warpToX,warpToY,sound]);
                    wIndex++;
                }
            }
        }
    }
}
//push maze exit coordinates and opposites
warpPairs.push([warpRooms[9].warpLocations[2][0],warpRooms[9].warpLocations[2][1],1,3,'dungeon1-exit']);
warpPairs.push([1,3,warpRooms[9].warpLocations[2][0],warpRooms[9].warpLocations[2][1],'dungeon1-room9']);
