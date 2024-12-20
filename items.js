function drawInventory()
{

    //bg dimming
    if(gameState.level != 'end') { 
        ctx.fillStyle = "rgba(0,0,0,0.5)"
        ctx.fillRect(0,0,tileW*15,tileH*15);
    }

    ctx.drawImage(inventoryImg, tileW*2, tileH*2);

    //check for artifacts and draw if you have
    var item = itemTypes[253];
    if(gameState.artifacts['LUMPY ROCK']) //if have the rock
    {
        ctx.drawImage(tileset, item.sprite[0].x, item.sprite[0].y, item.sprite[0].w, item.sprite[0].h,
            7*tileW, 6*tileH, item.sprite[0].w, item.sprite[0].h);
    }

    item = itemTypes[351];
    if(gameState.artifacts['CRUSTY BULB']) //if have the bulb
    {
        ctx.drawImage(tileset, item.sprite[0].x, item.sprite[0].y, item.sprite[0].w, item.sprite[0].h,
            8*tileW, 7*tileH, item.sprite[0].w, item.sprite[0].h);
    }
    //artifact 3
    //artifact 4

    //check for items and draw if enough

    //5,4 - 9,4 = cairns - 202-206
    if(gameState.cairnsCollected.length != undefined) {
        for(let i = 0; i < gameState.cairnsCollected.length; i++)
        {
            let x;
            let y = 4;
            if(gameState.cairnsCollected[i] == 202) { item = itemTypes[202]; x = 5; }
            if(gameState.cairnsCollected[i] == 203) { item = itemTypes[203]; x = 6; }
            if(gameState.cairnsCollected[i] == 204) { item = itemTypes[204]; x = 7; }
            if(gameState.cairnsCollected[i] == 205) { item = itemTypes[205]; x = 8; }
            if(gameState.cairnsCollected[i] == 206) { item = itemTypes[206]; x = 9; }
            ctx.drawImage(tileset, item.sprite[0].x, item.sprite[0].y, item.sprite[0].w, item.sprite[0].h,
                x*tileW, y*tileH, item.sprite[0].w, item.sprite[0].h);
        }
    }
    //10,5 - 10,9 = logs - 304-308
    if(gameState.logsCollected.length != undefined) {
        for(let i = 0; i < gameState.logsCollected.length; i++)
        {
            let x = 10;
            let y;
            if(gameState.logsCollected[i] == 304) { item = itemTypes[304]; y = 5; }
            if(gameState.logsCollected[i] == 305) { item = itemTypes[305]; y = 6; }
            if(gameState.logsCollected[i] == 306) { item = itemTypes[306]; y = 7; }
            if(gameState.logsCollected[i] == 307) { item = itemTypes[307]; y = 8; }
            if(gameState.logsCollected[i] == 308) { item = itemTypes[308]; y = 9; }
            ctx.drawImage(tileset, item.sprite[0].x, item.sprite[0].y, item.sprite[0].w, item.sprite[0].h,
                x*tileW, y*tileH, item.sprite[0].w, item.sprite[0].h);
        }
    }

    //3,3 = herb
    item = itemTypes[201];
    if(gameState.items['MOUNTAIN HERB'] == 9) //if you got 9 herbs, draw herb icon
    {
        ctx.drawImage(tileset, item.sprite[0].x, item.sprite[0].y, item.sprite[0].w, item.sprite[0].h,
            3*tileW, 3*tileH, item.sprite[0].w, item.sprite[0].h);
    }

    //11,3 = mushroom
    item = itemTypes[303];
    if(gameState.items['MUSHROOM'] == 9) //if you got 9 mushrooms, draw mushroom icon
    {
        ctx.drawImage(tileset, item.sprite[0].x, item.sprite[0].y, item.sprite[0].w, item.sprite[0].h,
            11*tileW, 3*tileH, item.sprite[0].w, item.sprite[0].h);
    }

    //11,11 = world 3 item
    //3,11 = world 4 item

}


function itemHandler() {

    //play item sounds
    if(itemTypes[itemMap[toIndex(playerX(),playerY())]].sound != undefined) 
    { selectSnd(itemTypes[itemMap[toIndex(playerX(),playerY())]].sound,0); } 

    //item pickup
    if(itemTypes[itemMap[toIndex(playerX(),playerY())]].pickupTo != undefined && 
        itemTypes[itemMap[toIndex(playerX(),playerY())]].isMainItem == undefined)
    {
        //if there's no item quantity, just write dialogue box
        if(itemTypes[itemMap[toIndex(playerX(),playerY())]].itemMax == undefined) {         
            updatePopup(`You got the ${itemTypes[itemMap[toIndex(playerX(),playerY())]].name}!`);
        }
        //otherwise, if you have less than the max # of possible items in your inventory, pick it up
        else if(gameState.items[itemTypes[itemMap[toIndex(playerX(),playerY())]].name] < itemTypes[itemMap[toIndex(playerX(),playerY())]].itemMax) {
           
            //add one to your inventory
            gameState.items[itemTypes[itemMap[toIndex(playerX(),playerY())]].name] += 1;

            //update with item # text

            //world 2 crystals
            if(itemTypes[itemMap[toIndex(playerX(),playerY())]].name == 'CRYSTAL' && gameState.items[itemTypes[itemMap[toIndex(playerX(),playerY())]].name] == 6)
            { updatePopup('You got all the CRYSTALS! Visit the WATCHTOWER by the WATERFALL.') }
            else { updatePopup(`You got a ${itemTypes[itemMap[toIndex(playerX(),playerY())]].name}! You've found ${gameState.items[itemTypes[itemMap[toIndex(playerX(),playerY())]].name]} out of ${itemTypes[itemMap[toIndex(playerX(),playerY())]].itemMax}.`); }
        } 
        //either way, rewrite item map
        itemMap[toIndex(playerX(),playerY())] = itemTypes[itemMap[toIndex(playerX(),playerY())]].pickupTo;    
    }
    else if(itemTypes[itemMap[toIndex(playerX(),playerY())]].isMainItem != undefined)
    {
        itemMap[toIndex(playerX(),playerY())] = itemTypes[itemMap[toIndex(playerX(),playerY())]].pickupTo;   
    }

}

//world 1
function world1CairnsDestructed() //movement.js
{

    //all cairn positions on map
    let cairnPositions = [[56,46], [20,27],[53,21],[24,11],[3,43]];
    for(let i = 0; i < cairnPositions.length; i++)
    {
        let cX = cairnPositions[i][0];
        let cY = cairnPositions[i][1];

        //if the tile in list is still a possible cairn
        if(gameMap[toIndex(cX,cY)] == 224) {
            let tileCount = 0;
            //check if all destructibles around it are cleared
            if(gameMap[toIndex(cX+1,cY)] == 210) { tileCount++; }
            if(gameMap[toIndex(cX-1,cY)] == 210) { tileCount++; }
            if(gameMap[toIndex(cX,cY+1)] == 210) { tileCount++; }
            if(gameMap[toIndex(cX,cY-1)] == 210) { tileCount++; }
            //if all destructibles are cleared, assign to one of the 5 item tiles based on coordinates
            if(tileCount == 4) { 
                selectSnd('cairn-found',0);
                setTileTo(cX,cY,209); 
                if(i == 0) { setItemTo(cX,cY,202); }
                else if(i == 1) { setItemTo(cX,cY,203); }
                else if(i == 2) { setItemTo(cX,cY,204); }
                else if(i == 3) { setItemTo(cX,cY,205); }
                else if(i == 4) { setItemTo(cX,cY,206); }
            }
        }
    }
}

//world 2
function world2PetrifiedLogs(tileAfterNext) //movement.js
{

    //need to find a way to extract X and Y coordinates from tileAfterNext

    let coord = fromIndex(tileAfterNext);
    let x = coord[0]; let y = coord[1];

    //all log positions on map
    let logPos = [[13,20], [28,26],[29,1],[59,1],[61,28]];
    for(let i = 0; i < logPos.length; i++)
    {
        let cX = logPos[i][0];
        let cY = logPos[i][1];

        if(x == cX && y == cY)
        {
            selectSnd('wood-found',0);
            if(i == 0) { setItemTo(cX,cY,304); }
            else if(i == 1) { setItemTo(cX,cY,305); }
            else if(i == 2) { setItemTo(cX,cY,306); }
            else if(i == 3) { setItemTo(cX,cY,307); }
            else if(i == 4) { setItemTo(cX,cY,308); }
        }

    }
}