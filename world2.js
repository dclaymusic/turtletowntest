//possible crystal locations
let possibleCrystalLocations = 
    [
        //red
        [[18,3],[22,3],[19,4],[21,4],[18,5],[20,5],[22,5],[19,6],[21,6],[1,9],[4,10]],
        //orange
        [[8,24],[10,24],[7,25],[9,25],[11,25],[8,26],[10,26],[9,27],[11,27],[19,18],[20,19],[21,23],[22,24],[23,25],[24,26],[22,26],[21,25]],
        //yellow
        [[43,5],[45,5],[47,5],[48,4],[49,3],[50,4],[51,3],[51,5],[50,6]],
        //green
        [[49,25],[48,26],[54,17],[56,17],[53,18],[55,18],[52,19],[54,19]],
        //blue
        [[77,20],[75,20],[73,19],[73,21],[72,21],[71,21],[71,22],[70,22]],
        //purple
        [[71,5],[71,6],[71,7],[72,7],[72,8]]
    ]
var actualCrystalLocations = [];

//build the map and place character
function buildWorld2()
{
	let thisMapW = 80;
	let thisMapH = 30;

	gameMap = [302,302,302,302,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,303,303,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,304,304,304,304,304,304,307,306,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,303,305,314,303,303,303,303,303,303,303,304,304,303,303,303,303,303,303,304,304,304,303,303,307,304,304,304,304,304,304,305,305,314,304,304,303,303,305,305,305,325,325,325,325,325,325,325,325,325,324,324,324,302,302,302,304,304,304,304,306,306,306,306,306,304,304,304,304,304,304,304,303,304,304,304,303,304,304,304,304,303,305,305,305,305,305,303,303,303,303,303,303,305,305,305,305,305,304,304,304,303,305,305,306,306,306,304,311,310,305,305,305,304,304,303,303,305,305,305,305,304,304,304,304,304,304,304,304,304,334,326,335,302,302,304,304,304,306,306,306,306,304,304,304,304,304,304,303,303,303,303,308,304,304,304,308,303,303,303,303,303,303,305,303,305,305,305,305,305,305,305,305,305,304,304,304,305,303,303,305,305,305,308,308,308,306,304,311,304,305,305,305,305,304,303,303,305,306,306,306,306,306,306,306,306,306,306,306,304,304,304,302,302,302,304,304,306,306,304,304,304,304,304,303,303,303,303,303,311,310,310,308,308,308,308,308,308,310,310,310,303,303,305,303,303,304,304,304,304,304,304,304,304,304,303,303,305,305,305,305,308,308,308,308,308,308,310,310,304,304,304,304,312,310,304,303,305,305,306,306,306,303,304,304,304,304,306,306,304,306,306,306,302,302,304,306,306,304,304,303,303,303,303,303,311,310,310,310,310,303,303,308,308,308,308,308,303,303,303,312,310,303,305,303,304,304,304,305,303,304,304,304,303,311,310,310,308,308,308,308,308,308,308,308,308,308,303,312,310,310,304,304,304,312,304,303,303,305,303,303,306,303,311,310,308,304,304,306,306,306,306,306,302,301,303,306,306,304,304,303,311,310,310,310,310,303,303,303,303,304,303,311,308,308,308,305,303,303,303,303,312,303,305,304,304,306,305,305,305,303,303,311,310,310,303,303,303,303,303,305,305,305,311,308,308,305,303,304,304,312,310,310,310,312,310,310,310,310,310,303,303,303,311,303,308,305,304,304,304,304,306,306,302,301,303,306,304,304,303,303,311,303,303,303,303,303,304,304,304,304,303,311,303,303,306,305,305,305,305,305,312,305,305,304,307,306,306,308,308,308,308,311,303,303,303,304,304,304,303,303,303,303,311,303,305,303,303,304,304,304,312,304,304,304,304,304,303,305,312,310,310,310,310,303,308,308,305,304,304,304,304,306,302,301,303,306,304,304,303,311,310,303,304,304,304,304,304,304,304,303,311,310,303,306,306,305,305,306,306,303,312,304,304,304,306,308,308,308,308,308,308,308,304,304,304,304,304,304,304,304,303,303,311,303,303,304,304,304,304,304,312,310,304,304,304,303,303,305,303,303,303,306,303,303,303,308,305,305,304,304,304,306,302,301,308,310,310,304,303,311,303,303,304,304,306,306,306,304,304,303,311,303,303,306,306,306,306,306,304,303,312,310,310,310,308,308,308,308,308,306,308,306,305,305,305,305,305,305,305,305,305,303,330,303,303,304,304,304,304,304,304,312,304,304,304,304,303,305,305,306,306,306,303,311,310,308,308,305,304,304,304,330,302,301,305,305,312,308,303,311,303,304,304,306,306,306,306,306,306,306,311,306,306,306,306,306,306,304,304,303,303,303,303,303,305,308,308,308,306,304,306,306,306,306,306,306,306,306,306,306,306,303,303,303,303,303,304,305,305,304,304,312,310,304,304,304,303,303,305,305,306,303,303,311,304,304,308,308,304,304,304,331,302,301,305,305,312,308,308,308,305,305,305,305,306,306,306,306,306,303,311,303,306,306,306,306,304,304,304,304,304,303,305,308,308,308,308,308,306,304,304,304,304,305,305,305,305,305,305,303,306,306,306,306,306,303,305,305,305,305,304,304,312,306,304,304,304,303,303,303,305,303,311,310,304,304,304,308,304,304,304,330,302,301,305,305,305,308,308,308,308,305,305,305,303,303,306,306,303,303,311,303,306,306,306,304,304,304,304,304,305,308,308,308,308,308,305,308,310,310,310,310,310,310,310,310,310,310,310,303,306,303,303,303,306,306,306,306,306,306,306,306,311,306,304,304,311,310,310,310,310,310,310,303,304,304,308,308,306,304,304,306,302,301,306,306,305,305,308,308,308,308,308,303,303,303,303,303,303,308,308,308,305,306,306,304,304,304,304,308,308,308,308,308,305,305,305,305,305,304,304,306,306,304,306,304,304,304,312,310,310,303,330,303,303,305,305,305,305,304,304,304,311,310,310,310,310,304,304,303,305,303,303,303,304,304,308,306,306,304,304,306,302,300,306,306,305,305,305,305,308,308,308,310,310,310,310,310,310,308,308,308,308,305,305,305,304,304,305,308,308,305,305,305,305,305,305,306,306,304,304,304,306,306,306,306,306,304,304,304,312,303,311,303,304,304,305,305,304,304,304,304,311,304,304,304,304,304,304,303,305,303,303,303,311,310,308,308,306,304,304,330,302,301,306,305,305,305,305,305,305,308,308,308,303,303,303,303,308,308,308,308,308,308,308,308,305,305,308,308,305,304,304,304,304,304,304,304,306,304,304,307,306,306,306,306,306,306,304,304,311,310,310,304,304,304,304,304,304,304,306,308,308,304,304,304,304,304,304,303,305,303,303,311,310,304,306,308,306,304,304,331,302,301,306,306,305,305,305,305,308,308,308,308,310,310,310,310,310,308,308,308,308,308,308,308,308,308,308,310,310,310,310,310,304,304,304,304,306,306,304,304,306,306,306,306,306,306,304,304,311,304,304,304,304,304,306,306,306,306,308,308,308,308,310,310,310,310,304,303,305,303,303,311,303,307,306,308,304,304,304,330,302,301,306,306,306,305,305,308,308,308,308,308,303,303,303,303,303,308,308,308,308,308,308,303,303,303,303,304,304,304,304,312,304,304,304,304,304,306,304,304,304,306,306,306,306,306,304,304,311,304,304,304,304,306,308,308,308,308,308,306,311,304,304,304,304,312,310,310,310,310,310,310,303,303,306,308,304,304,306,306,302,301,306,306,306,305,305,308,308,308,308,308,310,310,310,310,310,310,308,308,308,308,308,313,311,304,304,304,304,304,304,312,310,304,304,304,306,306,304,304,304,304,306,306,306,304,304,311,310,304,304,304,304,306,308,308,308,306,308,304,311,304,304,304,304,304,304,303,305,305,303,303,303,304,304,308,304,304,306,302,302,301,304,306,306,306,305,305,308,308,308,305,305,305,305,305,305,305,305,305,308,308,304,303,311,304,304,304,304,304,304,304,312,304,304,306,306,304,304,304,304,304,304,306,304,304,304,311,304,304,304,304,306,308,308,308,308,306,306,304,313,311,304,304,304,304,304,303,305,306,306,306,307,304,308,308,308,306,306,302,302,301,304,304,306,306,305,303,312,303,303,303,305,305,314,305,305,305,306,305,305,304,304,303,311,303,304,304,304,304,304,304,312,310,304,306,304,304,304,304,303,303,303,308,308,308,304,311,304,304,304,304,303,303,312,303,306,306,306,304,304,311,304,304,304,304,304,303,305,306,306,304,304,304,308,308,308,308,308,302,302,301,304,304,304,306,306,303,312,310,310,303,305,305,305,305,305,306,306,306,306,304,304,303,311,303,303,304,304,304,304,304,304,312,310,310,310,310,304,304,303,308,308,308,308,308,311,310,304,304,304,305,313,313,312,303,303,306,306,304,304,311,304,304,304,304,304,303,305,306,306,304,308,308,308,302,302,302,302,302,302,301,304,304,304,306,306,303,303,303,312,303,305,305,305,305,306,306,306,304,304,304,303,303,311,303,303,303,304,304,304,304,304,304,304,306,304,312,310,310,310,308,308,308,308,308,308,303,304,313,313,313,312,304,304,304,304,307,304,304,304,311,303,304,304,305,305,303,305,305,304,308,308,310,310,310,310,310,308,308,302,302,304,304,304,306,306,306,305,303,312,303,305,305,305,306,306,306,304,304,304,305,308,308,311,303,305,303,303,304,304,306,306,306,306,306,304,304,304,303,308,308,308,308,308,308,308,308,303,312,303,305,303,304,304,304,304,304,304,304,303,308,308,303,305,305,305,308,308,305,308,310,310,310,310,310,310,308,308,308,302,302,304,304,304,304,306,306,305,308,312,308,305,305,305,303,303,303,303,304,305,305,308,308,308,305,305,305,306,306,306,306,304,304,304,304,304,304,304,303,305,305,305,308,308,305,305,308,308,308,305,305,303,304,304,304,304,304,304,303,308,308,308,308,308,310,310,310,308,308,308,310,310,310,310,310,308,308,308,302,302,302,304,304,304,304,306,305,308,308,308,308,308,308,303,303,303,303,303,303,305,308,308,308,308,308,305,305,303,304,304,304,304,304,304,307,304,304,304,303,303,303,305,305,305,305,305,305,305,308,308,305,303,304,303,303,304,304,304,311,308,308,308,305,305,305,305,305,308,308,310,310,310,310,310,308,308,302,302,302,302,302,304,304,304,306,306,305,308,308,308,308,308,308,310,310,310,310,310,303,303,303,308,308,308,308,308,305,305,314,305,305,305,304,306,306,306,304,304,304,304,306,306,306,303,303,303,305,305,308,308,303,303,303,311,310,310,310,310,310,303,308,305,305,305,302,302,302,302,312,310,310,310,310,308,308,302,302,302,329,302,302,302,304,304,304,306,306,305,305,308,308,308,308,303,303,303,303,312,310,310,310,310,310,310,303,303,303,305,305,305,305,305,306,306,304,306,306,306,306,306,306,306,304,304,304,303,303,305,308,310,310,310,310,310,303,304,304,304,304,304,305,305,303,305,305,310,310,308,308,310,310,310,310,308,302,302,302,302,308,302,302,302,302,304,304,304,306,306,306,306,306,306,307,304,304,303,303,303,303,303,303,303,303,303,303,304,304,304,305,305,304,304,306,304,304,304,304,304,304,304,304,304,304,304,304,304,304,303,303,303,303,303,303,303,304,304,304,304,304,304,303,314,303,305,305,302,302,302,308,310,310,310,310,308,308,308,308,308,308,302,302,302,302,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,304,303,303,303,303,303,303,303,302,302,302,302,302,302,302,302,302,302,302,302,302,302];


    itemMap = [];

	mapW = thisMapW;
	mapH = thisMapH;


    //set logs
    let logLocations = [[2,10],[12,23],[26,7],[30,2],[34,22],[31,27],[41,13],[47,12],[58,12],[64,7],[67,13],[67,18],[63,27],[57,2]];
    for(let i = 0; i < logLocations.length; i++)
    { 
        gameMap[toIndex(logLocations[i][0],logLocations[i][1])] = 336;
    }


    //random bush sprinkling
	for(let i = 0; i < gameMap.length; i++) { 
        itemMap[i] = 0; 
        if(gameMap[i] == 306)
        { 
            let r = randomInt(1);
            if(r == 1) { itemMap[i] = 309; }
        }
        if(gameMap[i] == 305)
        {
            let r = randomInt(1);
            if(r == 1) { itemMap[i] = 310; }
        }
    }
    setItemTo(42,16,300) //oswald

    
    //318-320
    let singleTreeLocations = [[1,3],[4,5],[5,4],[9,8],[1,20],[1,23],[15,0],[21,0],[25,9],[18,22],[20,20],[21,19],[25,18],[28,21],[33,18],[32,24],[34,27],[37,24],[39,17],[42,27],[45,15],[45,18],[46,14],[48,16],[50,15],[51,16],[52,14],[52,23],[53,8],[56,8],[57,9],[56,13],[57,22],[59,7],[60,8],[61,7],[61,18],[64,13],[65,14],[53,1],[60,1],[75,2],[77,7],[77,10],[77,13],[76,12],[76,15],[75,16],[72,18],[30,6]];
    for(let i = 0; i < singleTreeLocations.length; i++)
    {
        for(let y = 0; y < 3; y++)
        {
            itemMap[toIndex(singleTreeLocations[i][0],singleTreeLocations[i][1]+y)] = 318+y;   
        }
    }

    //321-326
    let doubleTreeLocations = [[2,1],[4,0],[11,1],[13,0],[16,0],[19,1],[14,7],[23,1],[25,1],[23,11],[2,21],[2,24],[3,27],[36,13],[31,15],[33,15],[37,16],[37,19],[35,23],[28,17],[26,19],[29,20],[43,27],[47,19],[49,18],[54,22],[55,23],[55,27],[57,27],[58,20],[62,17],[62,20],[64,19],[45,0],[54,6],[61,10],[71,11],[75,6],[75,9]];
    for(let i = 0; i < doubleTreeLocations.length; i++)
    {
        for(let y = 0; y < 3; y++)
        {
            for(let x = 0; x < 2; x++)
            {
                let t;
                if(x==0 && y==0) { t = 0; }
                if(x==1 && y==0) { t = 1; }
                if(x==0 && y==1) { t = 2; }
                if(x==1 && y==1) { t = 3; }
                if(x==0 && y==2) { t = 4; }
                if(x==1 && y==2) { t = 5; }
                itemMap[toIndex(doubleTreeLocations[i][0]+x,doubleTreeLocations[i][1]+y)] = 321+t;   
            }
        }
    }

	// var starting_pos = [78,27]; //for tests
    var starting_pos = [1,14]; //actual start
	player.position[0] = starting_pos[0];
	player.position[1] = starting_pos[1];
	player.placeAt(player.position[0], player.position[1]);
	viewport.update(playerX(),playerY());

    //opening sound
    selectSnd('bg-forest-water1',0,true);
    selectSnd('bg-forest-water2',0,true);
    selectSnd('bg-forest',0,true);
    
    timer = setInterval(() => {
        animationTimer();
    }, 1000);


}

//draw current position on map and trigger events as needed
function drawWorld2(currentFrameTime, currentSecond, tick)
{
	if(levelBuildTick) { buildWorld2(); levelBuildTick = false; }

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

    itemFlashAnimation(logBrown);

	drawCharacter(); //character.js

	//trigger any events if character just stepped on a new tile
	if(tick)
	{

        if(playerX() == 49 && playerY() == 7) { 
            setTileTo(49,10,332);
            setTileTo(49,12,332);
            setTileTo(49,11,333);
        }
        else if(playerX() == 49 && playerY() == 14)
        {
            setTileTo(49,10,303);
            setTileTo(49,12,303);
            setTileTo(49,11,306);
        }

        //log handler (sound is in cairn function in items.js)
        if(itemTypes[itemMap[toIndex(playerX(),playerY())]].name == 'PETRIFIED LOG')
        { 
            alphaCount = 0.7; //cue flash animation
            gameState.logsCollected.push(itemMap[toIndex(playerX(),playerY())]); 
        }

        spatialGain('bg-forest-water1',78,26,0.05);
        spatialGain('bg-forest-water2',78,26,0.05);
        //spatial sound for crystals (function in snd.js)
        if(gameState.world2TalkedToOswald)
        {
            for(let i = 0; i < 6; i++)
            {
                if(playerX() == actualCrystalLocations[i][0] && playerY() == actualCrystalLocations[i][1] &&
                    thisItemIs() == 312+i)
                {
                    fadeOutBackgroundSnd(`crystal${i+1}melody`,0.25);
                    selectSnd(`crystal${i+1}drone`,0,true);
                    if(i == 5) { selectSnd(`crystal${i+2}drone`,0,true); }
                }
                else { spatialGain(`crystal${i+1}melody`,actualCrystalLocations[i][0],actualCrystalLocations[i][1],0.25); }
            }
        }

        //rainbow activated
        if(gameState.items["CRYSTAL"] == 6 && thisTileIs() == 326)
        {
            selectSnd('rainbowbridge',0);
            setTileTo(playerX(),playerY(),327); //activated bridge tile
            for(let i = 3; i < 22; i++)
            { 
                setTileTo(77,i,328); 
                setItemTo(77,i,0);
            } // rainbow 
        }


        //rainbow ride sound cue - if moving down from top or up from bottom of rainbow
        if(
            (playerX() == 77 && playerY() == 3 && player.direction == 2) ||
            (playerX() == 77 && playerY() == 21 && player.direction == 0) 
        ) 
        { selectSnd('rainbowride',0); }
    

        //special sound for rapids/water
        if(thisTileIs() == 308)
        {
            selectSnd(`water${waterCycle}`,0);
            waterCycle == 0 ? waterCycle = 1 : waterCycle = 0;
        }
        if(thisTileIs() >= 310 && thisTileIs() <= 313)
        {
            selectSnd(`rapids${rapidCycle}`,0);
            rapidCycle >= 9 ? rapidCycle = 1 : rapidCycle++;
        }

        //sign
        let n = nextToSign();
        if(n[0] == 78 && n[1] == 2) { updateSign(["THE WATCHTOWER"]);}
        else { signActive = false; }

        //character dialogue
        if(nextToCharacter() == 'oswald') { 
            updateDialogue(
            [
                ["OSWALD:",
                "Who-HOOOO are you? I haven't seen a creature like you in eons!",
                "And I see a LOT around these forests. Like the CRYSTAL WATERFALL...",
                "That thing used to twinkle with a RAINBOW so bright you could",
                "practically WALK on it. But it's just a dull grey now..."],
                ["OSWALD:",
                "Maybe a few too many CRYSTALS have gotten knocked loose into", 
                "the rushing river. Say, I don't swim myself, but if you",
                "splash around a little, you might be able to find some of them!",
                "Lo-HOOk around!"]
            ]);
        }
        else if(nextToCharacter() == 'gene')
        {
            updateDialogue(
                [
                    ["GENE:",
                    "Say, you're looking for some CRYSTALS, eh? I've seen 'em!",
                    "Try following the STREAMS on the top and bottom of the map.",
                    "Oh, two are right next to the WATERFALL, too!",
                    "Plus, don't forget to LISTEN to them glow!"]
                ]);
        }
        else { dialogueActive = false; dialoguePage = 0; }

       //warp to dungeon2
		if(playerX() == 78 && playerY() == 26)
		{ 
            clearAllBackgroundSnd();
			gameState.level = 'dungeon2'; levelBuildTick = true;
            selectSnd('warp329',0);
		}
	}
}