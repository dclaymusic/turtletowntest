//build the map and place character
function buildMain()
{
	let thisMapW = 9;
	let thisMapH = 9;
	let thisGameMap =  [
		0,0,0,0,0,0,0,0,0,
		0,7,7,7,7,7,7,10,0,
		0,7,7,7,7,7,7,11,0,
		0,7,7,7,7,7,7,10,0,
		0,7,7,7,7,7,7,11,0,
		0,7,7,7,7,8,8,7,0,
		0,7,7,7,7,8,8,7,0,
		0,7,7,7,7,7,7,7,0,
		0,0,0,0,0,0,0,0,0,
	];

	let thisItemMap = [
		0,0,0,0,0,0,0,0,0,
		0,0,2,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,1,0,0,
		0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,
		0,0,3,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0
	];

	//if an underwater map
	gameMap1 = thisGameMap;
	itemMap1 = thisItemMap;
	
	gameMap2 = [
		0,0,0,0,0,0,0,0,0,
		0,7,7,7,7,7,7,7,0,
		0,7,7,8,8,8,7,7,0,
		0,7,7,8,8,8,7,7,0,
		0,7,7,8,8,8,7,7,0,
		0,7,7,8,8,9,9,7,0,
		0,7,7,8,8,9,9,7,0,
		0,7,7,7,7,7,7,7,0,
		0,0,0,0,0,0,0,0,0
	];


	itemMap2 = [
		0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0
	];


	mapW = thisMapW;
	mapH = thisMapH;
	gameMap = thisGameMap;
	itemMap = thisItemMap;



	var starting_pos = [5,2];
	player.position[0] = starting_pos[0];
	player.position[1] = starting_pos[1];
	player.placeAt(player.position[0], player.position[1]);
	viewport.update(playerX(),playerY());


}

//draw current position on map and trigger events as needed
function drawMain(currentFrameTime, currentSecond, tick)
{
	if(levelBuildTick) { buildMain(); levelBuildTick = false; }

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

	drawCharacter(); //character.js

	//trigger any events if character just stepped on a new tile
	if(tick)
	{
		if(itemTypes[thisItemIs()].isSign) {
			// position conditionals here so each sign reads something different
			signActive = true; 
			updateSign(["Give cracked items a poke by stepping into them.", "Watch your step!", 'Bibbity boppity boo!'])
		}
		else { signActive = false; }
		if(nextToCharacter() == 'HECKUS') { 
				updateDialogue(
				[
					['HECKUS:',
					'Hiya! My friends and I were just passing through.',
					'We couldn\'t miss the opportunity to stop here in Turtle Town.',
					'It\'s one of the oldest communities in our entire land!',
					'But I have to say I\'m not very impressed.',
					'I had heard that things were changing here... but...'
					],
					['HECKUS:',
						'asdalkdsajdlaksjdsalkajsladksdsalkdlkj.',
						'sldfkjdslfkdjsflskdjfslkfjldkjfsdlkj.',
						'It\'s one of the oldest communities in our entire land!',
						'But I have to say I\'m not very impressed.',
						'I had heard that things were changing here... but...'
					]
				]
			);
		}
		else { dialogueActive = false; dialoguePage = 0; }
		// warpHandler(5,3,5,8);
		// movePlayer(7,12,19,12,true);
		// switchTile(8,9);
		// pickUpItem(2);
		// if(playerX() == 4 && playerY() == 5) { updateTextBar("It reads, \"Look for peculiar walls, and give them a poke.\"")}
		// if(playerX() == 13 && playerY() == 6) { updateTextBar("It reads, \"Sometimes it pays to look backwards.\"")}
		// if(hasCastle1Key == false && thisTileIs() == 7) {updateTextBar("The door appears to be locked.")}
		// if(hasCastle1Key == true && thisTileIs() == 7) { setTileTo(playerX() - 1,playerY(),10); setPlayerTile(11); updateTextBar("You unlocked the door!")}
		if(playerX() == 5 && playerY() == 2)
		{ 
			//move to new level
		}
	}
}