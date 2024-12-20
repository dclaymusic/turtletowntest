let postWaterWingsDelay = false;
let postHeadlampDelay = false;
let pickedUpMoe = false;

function processMovement(currentFrameTime) {
	//process movement
	if(!player.processMovement(currentFrameTime))
        {

            //opening menu handler
            if(gameState.level == 'start')
            {
                if(keysUp[32] && spaceTick) {
                    if(!soundInitialized && windowLoaded) { initSnd(); }
                    //assign level
                    else if(soundsLoaded) { gameState.level = START_LEVEL; gameStarted = true; levelBuildTick = true; }
                }
            }
            else
            {
                //adding these IF conditionals makes it impossible to move at a diagonal.
                if((keysDown[65] && keysDown[87]) || 
                (keysDown[65] && keysDown[83]) ||
                (keysDown[68] && keysDown[87]) ||
                (keysDown[68] && keysDown[83]) ||
                !gameStarted //also don't move if on title screen
                ) {}
                else
                {
                    //spacebar handler
                    if(keysUp[32] && spaceTick)
                    {
                        diveToggle(); //for diving movement; see keyboard.js
                        popupActive = false;
                        gotItemActive = false;

                        //dialogue handler
                        if(nextToCharacter()) { 
                            //play character sound
                            let c = nextToCharacter();
                            if(c != undefined && dialoguePage == 0)
                            { selectSnd(c,0); }
                            dialogueActive = true; 
                        } //tile-functions.js
                        else { dialogueActive = false; }
                        if(dialogueActive) {

                            //triggered right away
                            if(nextToCharacter() == 'oswald' && !gameState.world2TalkedToOswald)
                            {
                                gameState.world2TalkedToOswald = true; 
                                //drop crystals
                                let currentCrystalTile = 312; //loop will inc through all 6 crystal sprites
                                for(let i = 0; i < possibleCrystalLocations.length; i++)
                                {
                                    //choose spot
                                    let thisSpot = possibleCrystalLocations[i][randomInt(possibleCrystalLocations[i].length-1)];
                                    setItemTo(thisSpot[0],thisSpot[1],currentCrystalTile);
                                    actualCrystalLocations.push([thisSpot[0],thisSpot[1]]);

                                    //add sound at delayed time to stagger
                                    let del = i*500;
                                    setTimeout(() => {
                                        selectSnd(`crystal${i+1}melody`,0,true);
                                        spatialGain(`crystal${i+1}melody`,thisSpot[0],thisSpot[1],0.25);
                                        // let p = calculateProximity(playerX(),playerY(),thisSpot[0],thisSpot[1],0.1);
                                        // setGain(`crystal${i+1}melody`,p);
                                    }, del);
                                    
                                    currentCrystalTile++;
                                }
                                setItemTo(2,14,301); //add gene
                            }

                            //have to reach end of dialogue text to earn this
                            if(dialoguePage == activeDialogueText.length)
                            {

                                dialogueActive = false;
                                dialoguePage = 0; 

                                //INSTRUMENT BUILDS      
                                if(nextToCharacter() == 'herman' && !gameState.instruments['LITHOPHONE'] && gameState.cairnsCollected.length >= 1)
                                {
                                    gameState.instruments['LITHOPHONE'] = true;
                                    itemMap[toIndex(11,16)] = 115; //place lithophone on map
                                }

                                if(nextToCharacter() == 'bulger' && !gameState.instruments['XYLOPHONE'] && gameState.logsCollected.length >= 1)
                                {
                                    gameState.instruments['XYLOPHONE'] = true;
                                    itemMap[toIndex(9,16)] = 116; //place xylophone on map
                                }

                                //ITEM COLLECTION
                                
                                //trigger water wings after finishing speaking to hermicus in visit 2
                                if(nextToCharacter() == 'hermicus2' && !gameState.tools['WATER WINGS'])
                                {
                                    selectSnd('water-wings-found',0);
                                    alphaCount = 0.7; //cue flash animation
                                    tileTypes[107].floor = floorTypes.path;
                                    updateGotItem(['You got the WATER WINGS!','You can now swim through water.'],112);
                                    gameState.tools['WATER WINGS'] = true;
                                    player.sprites[directions.up] = [{x:tileW*0, y:tileH*14, w:tileW, h:tileH}];
                                    player.sprites[directions.right] = [{x:tileW*1, y:tileH*14, w:tileW, h:tileH}];
                                    player.sprites[directions.left] = [{x:tileW*2, y:tileH*14, w:tileW, h:tileH}];
                                    player.sprites[directions.down] = [{x:tileW*3, y:tileH*14, w:tileW, h:tileH}];
                                }
                                //in dungeon 2
                                if(nextToCharacter() == 'moe')
                                {
                                    setItemTo(14,64,0);
                                    alphaCount = 0.7;
                                    pickedUpMoe = true;
                                    player.sprites[directions.up] = [{x:tileW*0, y:tileH*17, w:tileW, h:tileH}];
                                    player.sprites[directions.right] = [{x:tileW*1, y:tileH*17, w:tileW, h:tileH}];
                                    player.sprites[directions.left] = [{x:tileW*2, y:tileH*17, w:tileW, h:tileH}];
                                    player.sprites[directions.down] = [{x:tileW*3, y:tileH*17, w:tileW, h:tileH}];
                                }
                                //in turtle town (3rd visit)
                                if(nextToCharacter() == 'moe2' && !gameState.tools['HEADLAMP'])
                                    {
                                        // selectSnd('head-lamp-found',0);
                                        alphaCount = 0.7; //cue flash animation
                                        tileTypes[107].floor = floorTypes.path;
                                        updateGotItem(['You got the HEADLAMP!','You can now see inside dark tunnels.'],114);
                                        gameState.tools['HEADLAMP'] = true;
                                        player.sprites[directions.up] = [{x:tileW*0, y:tileH*15, w:tileW, h:tileH}];
                                        player.sprites[directions.right] = [{x:tileW*1, y:tileH*15, w:tileW, h:tileH}];
                                        player.sprites[directions.left] = [{x:tileW*2, y:tileH*15, w:tileW, h:tileH}];
                                        player.sprites[directions.down] = [{x:tileW*3, y:tileH*15, w:tileW, h:tileH}];
                                        setTileTo(10,18,107);
                                    }
                            }
                            else { 
                                //these are so the dialogue screen doesn't automatically pop up again after acquiring items
                                if(nextToCharacter() == 'hermicus2' && gameState.tools['WATER WINGS'] && !postWaterWingsDelay)
                                {
                                    dialogueActive = false;
                                    dialoguePage = 0;
                                    postWaterWingsDelay = true;
                                }
                                else if(nextToCharacter() == 'moe2' && gameState.tools['HEADLAMP'] && !postHeadlampDelay)
                                {
                                    dialogueActive = false;
                                    dialoguePage = 0;
                                    postHeadlampDelay = true;
                                }
                                else { dialoguePage += 1; }
                            }
                        }
                        else {
                            
                            //sign handler
                            let n = nextToSign();
                            if(n[0] != undefined) { 
                                signActive = true; 
                                //sign sound
                                let s = tileTypes[gameMap[toIndex(n[0],n[1])]].sound;
                                if(s != undefined)
                                { selectSnd(s,0); }
                            }
                            else { signActive = false; }

                            //inscription handler
                            let o = nextToInscription();
                            if(o[0] != undefined) { 
                                inscriptionActive = true;
                                let s = tileTypes[gameMap[toIndex(o[0],o[1])]].sound;
                                if(s != undefined)
                                { selectSnd(s,0); } 
                            }
                            else { inscriptionActive = false; }

                            //inventory handler
                            if(gameState.level == 'turtle-town' && playerX() == 6 && playerY() == 10)
                            { inventoryActive = true; }
                            else { inventoryActive = false; }
                            // //conch handler
                            // if(gameState.hasConch) {
                            //     // Tap space on certain tiles to sound conch and knock down secret walls. 
                            // }

                            // //dungeon 2 secret exit
                            if(gameState.level == 'dungeon2' && playerX() == 14 && playerY() == 68 && pickedUpMoe)
                            {
                                setTileTo(13,68,353);
                            }
                        }

                    }
                    //arrow keys handler
                    else
                    {
                        //check for destructibles, pushables
                        let nextTile;
                        let tileAfterNext;
                        if(keysDown[65]) {      nextTile = toIndex(playerX()-1,playerY()); tileAfterNext = toIndex(playerX()-2,playerY()); } //left
                        else if(keysDown[68]) { nextTile = toIndex(playerX()+1,playerY()); tileAfterNext = toIndex(playerX()+2,playerY()); } //right
                        else if(keysDown[87]) { nextTile = toIndex(playerX(),playerY()-1); tileAfterNext = toIndex(playerX(),playerY()-2);} //up
                        else if(keysDown[83]) { nextTile = toIndex(playerX(),playerY()+1); tileAfterNext = toIndex(playerX(),playerY()+2); } //down

                        if(nextTile != undefined)
                        {
                            //if next tile is destructible and 
                            //not currently waiting for a destruct (destructTick not active) then cue destruct process
                            if(!destructTick && tileTypes[gameMap[nextTile]].floor==floorTypes.destructible) { 
                                let t = tileTypes[gameMap[nextTile]].destructTo; //save tile destruct info before changing
                                let s = tileTypes[gameMap[nextTile]].destructSound;//save sound to play before changing
                                destructTick = true; setTimeout(() => {
                                        if(gameMap[nextTile] == 215 && gameState.level == 'world1') { itemMap[nextTile] = 201; }
                                        if(gameMap[nextTile] == 307 && gameState.level == 'world2') { itemMap[nextTile] = 303; }
                                        gameMap[nextTile] = t;
                                        selectSnd(s,0);
                                        destructTick = false;
                                        if(gameState.level == 'world1') { world1CairnsDestructed(); } //items.js
                                    }, playerSpeed*2);
                            }

                            if(!destructTick && //if not currently waiting for a push (destructTick not active)
                                tileTypes[gameMap[nextTile]].floor==floorTypes.pushable && //and if tile in adjacent space is pushable
                                tileTypes[gameMap[tileAfterNext]].floor!=floorTypes.solid //and tile being pushed to is path
                                ) 
                            { 

                                let t = tileTypes[gameMap[nextTile]].destructTo; //save tile destruct info before changing
                                let n = gameMap[nextTile]; //save next tile before changing
                                let s = tileTypes[gameMap[nextTile]].destructSound;//save sound to play before changing
                                destructTick = true; setTimeout(() => {            
                                        itemMap[tileAfterNext] = 0; //eliminate items if terrain

                                        //if it's water or rapids, world 2
                                        if(gameMap[tileAfterNext] >= 308 && gameMap[tileAfterNext] <= 313) {
                                            gameMap[tileAfterNext] = 309;
                                            selectSnd('log-in-water',0);
                                        }
                                        else if(gameMap[tileAfterNext] >= 314 && gameMap[tileAfterNext] <= 316)
                                        {
                                            world2PetrifiedLogs(tileAfterNext); //items.js
                                            gameMap[tileAfterNext] = 317;
                                        }
                                        else { gameMap[tileAfterNext] = n; }
                                        gameMap[nextTile] = t;
                                        selectSnd(s,0);
                                        destructTick = false;
                                    }, playerSpeed*2);
                            }
                        }

                        //either way, just move
                        if(keysDown[87] && player.canMoveUp()) { player.moveUp(currentFrameTime); }
                        if(keysDown[83] && player.canMoveDown()) { player.moveDown(currentFrameTime); }
                        if(keysDown[65] && player.canMoveLeft()) { player.moveLeft(currentFrameTime); }
                        if(keysDown[68] && player.canMoveRight()) { player.moveRight(currentFrameTime); }
                    }
                }
            }

            //spaceTick deactivated as long as spacebar isn't currently pressed
            if(keysUp[32]) { spaceTick = false; }
            
        }
}

//Viewport Scanning
var viewport = {
	screen		: [0,0],
	startTile	: [0,0],
	endTile		: [0,0],
	offset		: [0,0],
	update		: function(px, py) {
		this.offset[0] = Math.floor((this.screen[0]/2) - px);
		this.offset[1] = Math.floor((this.screen[1]/2) - py);

		var tile = [ Math.floor(px/tileW), Math.floor(py/tileH) ];

		this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0]/2) / tileW);
		this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1]/2) / tileH);

		if(this.startTile[0] < 0) { this.startTile[0] = 0; }
		if(this.startTile[1] < 0) { this.startTile[1] = 0; }

		this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0]/2) / tileW);
		this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1]/2) / tileH);

		if(this.endTile[0] >= mapW) { this.endTile[0] = mapW-1; }
		if(this.endTile[1] >= mapH) { this.endTile[1] = mapH-1; }
	}
};

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

//fps calculator
function drawFPS()
{
    //////////////frame rate check
	ctx.fillStyle = "#ff0000";
	ctx.font = "10px Andale Mono";
	ctx.textAlign = "start";
	ctx.fillText("FPS: " + framesLastSecond, 10, 20);
}