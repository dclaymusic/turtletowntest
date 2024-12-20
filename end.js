function drawEnd()
{

    if(!endGame)
    {
        endTime = Date.now();
        totalGameTime = toHMS((endTime-startTime)/1000);
        endGame = true;
    }

    // let borderOffset = 240;
    let middleX = viewport.offset[0] + player.position[0];
    let middleY = viewport.offset[1] + player.position[1];
    let center = middleX + (tileW/2);

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = white;
    ctx.strokeRect(1, 1, w-2, h-2);
    
    ctx.font = "30px Andale Mono";
    ctx.textAlign = "center";
    ctx.fillStyle = black;
    ctx.fillText("TO BE CONTINUED...", center, tileH*1.5);
    // ctx.fillText("TURTLE TOWN!", center, middleY - tileH*1);

    ctx.font = "20px Andale Mono";
    ctx.fillText("Total Time: " + totalGameTime, center, h-(tileH));
    // ctx.fillText("You must be new here.", center, middleY + tileH*2.5);
    // ctx.fillText("Feel free to poke around!", center, middleY + tileH*3.25);
    // // ctx.fillText("Use the WASD keys to move.", center, middleY + tileH*4);
    // // ctx.fillText("Press SPACE next to a character to speak with them.", center, middleY + tileH*4.75);

    // ctx.font = "16px Andale Mono";

    // if(!soundInitialized && !soundsLoaded) {
    //     ctx.fillText("Use the WASD keys to move.", center, middleY + tileH*4.5);
    //     ctx.fillText("Press SPACE to load game.", center, middleY + tileH*5.25);
    // }
    // else if(!soundsLoaded) {
    //     ctx.fillText("Sounds are loading...", center, middleY + tileH*5);
    // }
    // else {
    //     ctx.fillText("Press SPACE to begin.", center, middleY + tileH*5);
    // }

    drawInventory();
}