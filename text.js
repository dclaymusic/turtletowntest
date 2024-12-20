const bgColor = "#CAEBF6";
const white = "#EEEEEE";
const black = "#333333";

// 241f17

function updatePopup(text) {
    popupActive = true; 
    activePopupText = text; 
}

function updateGotItem(text,tile) {
    gotItemActive = true;
    activeItemText = text;
    gotItemTileToDraw = tile;
}

function updateDialogue(text) { 
    activeDialogueText = text; 
}

function updateSign(text) { 
    activeSignText = text; 
}

function updateInscription(text) { 
    activeInscriptionText = text; 
}

function updateScroll(text) { 
    activeScrollText = text; 
}

//for small items
function drawPopup()
{
    if(popupActive)
    {
        ctx.font = "14px Andale Mono";
        ctx.textAlign = "center";
    
        let middleX = viewport.offset[0] + player.position[0];
        let center = middleX + (tileW/2);
        // let text = "This is a test message! What could it mean?"
        let textLen = ctx.measureText(activePopupText).width;
        let blockLen = textLen + (tileW*1);
        let blockOffset = center - (blockLen/2);
        
        ctx.fillStyle = bgColor;
        // ctx.fillRect(middleX - tileW*3, middleY - tileH*3.5, tileW*7, tileH*2.5);
        ctx.fillRect(blockOffset, tileH*0.5, blockLen, tileH*1.5);
        ctx.fillStyle = white;
        ctx.strokeRect(blockOffset, tileH*0.5, blockLen, tileH*1.5);
        ctx.fillStyle = black
        ctx.fillText(activePopupText, center, tileH*1.15);

        ctx.font = "12px Andale Mono";
        ctx.textAlign = "center";
        ctx.fillText('Press [SPACE] to exit', center, tileH*1.7);
    }
}

//for characters
function drawDialogue()
{
    ctx.font = "13px Andale Mono";
    ctx.textAlign = "left";

    let blockLen = viewport.screen[0] - (tileW);
    let blockHeight = tileH*(0.75*activeDialogueText[dialoguePage-1].length)+40;
    
    ctx.fillStyle = bgColor;
    ctx.fillRect(tileW*0.5, tileH*0.5, blockLen, blockHeight);
    ctx.fillStyle = white;
    ctx.strokeRect(tileW*0.5, tileH*0.5, blockLen, blockHeight);
    ctx.fillStyle = black
    for(let t = 0; t < activeDialogueText[dialoguePage-1].length; t++)
    {
        ctx.fillText(activeDialogueText[dialoguePage-1][t], tileW*1, tileH*(0.75*t)+50);
    }

    ctx.font = "12px Andale Mono";
    ctx.textAlign = "right";
    ctx.fillText('Press [SPACE] to continue.', viewport.screen[0] - (tileW*0.8), blockHeight+(tileW*0.2));
}

//for signs
function drawSign()
{
    
    ctx.font = "14px Andale Mono";
    ctx.textAlign = "center";

    let middleX = viewport.offset[0] + player.position[0];
    let center = middleX + (tileW/2);
    // let text = "This is a test message! What could it mean?"
    let textLen = ctx.measureText(activeSignText).width;
    let blockLen = textLen + (tileW*2);
    let blockOffset = center - (blockLen/2);
    
    ctx.fillStyle = bgColor;
    // ctx.fillRect(middleX - tileW*3, middleY - tileH*3.5, tileW*7, tileH*2.5);
    ctx.fillRect(blockOffset, center-(tileH*1.5), blockLen, tileH*1);
    ctx.fillStyle = white;
    ctx.strokeRect(blockOffset, center-(tileH*1.5), blockLen, tileH*1);
    ctx.fillStyle = black
    ctx.fillText(activeSignText, center, center-(tileH*0.9));

    // ctx.font = "12px Andale Mono";
    // ctx.textAlign = "right";
    // ctx.fillText('Press [SPACE] to exit', viewport.screen[0] - (tileW*0.7), tileH*5.75);
}

//for scroll
function drawScroll()
{
    ctx.font = "13px Andale Mono";
    ctx.textAlign = "left";

    let blockLen = viewport.screen[0] - (tileW);
    let blockHeight = tileH*(0.75*activeScrollText.length)+25;
    
    ctx.fillStyle = bgColor;
    ctx.fillRect(tileW*0.5, tileH*0.5, blockLen, blockHeight);
    ctx.fillStyle = white;
    ctx.strokeRect(tileW*0.5, tileH*0.5, blockLen, blockHeight);
    ctx.fillStyle = black
    for(let t = 0; t < activeScrollText.length; t++)
    {
        // ctx.fillText(activeScrollText[t], tileW*1, tileH*(0.75*t)+50);
        //FADE TEXT IF IT ENDS IN A SPACE
        if(activeScrollText[t][activeScrollText[t].length-1] == ' ')
        { 
            ctx.fillStyle = 'rgba(0,0,0,0.3)'; 
            ctx.font = "16px Andale Mono";
        }
        ctx.fillText(activeScrollText[t], tileW*1, tileH*(0.75*t)+50);
    }

    // ctx.font = "12px Andale Mono";
    // ctx.textAlign = "right";
    // ctx.fillText('Press [SPACE] to exit', viewport.screen[0] - (tileW*0.7), tileH*5.75);
}

function drawInscription() //inscriptions are signs (tiles that are approached) but longer, so print as scrolls
{
    ctx.font = "13px Andale Mono";
    ctx.textAlign = "left";

    let blockLen = viewport.screen[0] - (tileW);
    let blockHeight = tileH*(0.75*activeInscriptionText.length)+25;
    
    ctx.fillStyle = bgColor;
    ctx.fillRect(tileW*0.5, tileH*0.5, blockLen, blockHeight);
    ctx.fillStyle = white;
    ctx.strokeRect(tileW*0.5, tileH*0.5, blockLen, blockHeight);
    ctx.fillStyle = black;
    for(let t = 0; t < activeInscriptionText.length; t++)
    {
        //FADE TEXT IF IT ENDS IN A SPACE
        if(activeInscriptionText[t][activeInscriptionText[t].length-1] == ' ')
        { 
            ctx.fillStyle = 'rgba(0,0,0,0.3)'; 
            ctx.font = "16px Andale Mono";
        }
        ctx.fillText(activeInscriptionText[t], tileW*1, tileH*(0.75*t)+50);
    }
}


function drawIcon(thisItemType, xPos, yPos)
{
        //draw character
        var tile = itemTypes[thisItemType];
        ctx.drawImage(tileset, tile.sprite[0].x, tile.sprite[0].y, tile.sprite[0].w, tile.sprite[0].h,
            xPos, yPos,
            tile.sprite[0].w, tile.sprite[0].h);
}

//for characters
function drawGotItem()
{
    if(gotItemActive)
    {
        ctx.font = "16px Andale Mono";
        ctx.textAlign = "center";
    
        let middleX = viewport.offset[0] + player.position[0];
        let center = middleX + (tileW/2);
        // let text = "This is a test message! What could it mean?"
        let textLen = ctx.measureText(activeItemText[1]).width;
        let blockLen = textLen + (tileW*2);
        let blockOffset = center - (blockLen/2);
        
        ctx.fillStyle = bgColor;
        ctx.fillRect(blockOffset, tileH*0.5, blockLen, tileH*3.5);
        ctx.fillStyle = white;
        ctx.strokeRect(blockOffset, tileH*0.5, blockLen, tileH*3.5);

        ctx.fillStyle = black;
        ctx.fillText(activeItemText[0], center, tileH*1.15);

        drawIcon(gotItemTileToDraw,tileW*7,tileH*1.5);

        ctx.font = "14px Andale Mono";
        ctx.fillText(activeItemText[1], center, tileH*3.1);

        ctx.font = "12px Andale Mono";
        ctx.textAlign = "center";
        ctx.fillText('Press [SPACE] to exit', center, tileH*3.7);
    }
}