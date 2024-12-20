//Tile Stuff
const tileW = 40, tileH = 40;
const w = 600, h = 600;

var tileset = null, tilesetLoaded = false;

var floorTypes = {

	solid : 0,
	path : 1,
	destructible : 2,
	ice : 3,
	conveyorU : 4,
	conveyorD : 5,
	conveyorL : 6,
	conveyorR : 7,
	pushable: 8

};

//to do's:
//tiles in base units of 100 to facilitate easy adding


//new paramaters for each tile:

//"sound:" optional sound to play
//floorTypes.destructible needs "destructTo: tile #" and "destructSound: sound file"
//floorTypes.pushable needs destructTo and destructSound
//invsible: if navigating an underground tunnel (before hat)
//undimmable: activates "dim" map on all but underground area
//divable: spacebar triggers a "dive" below or above to a different gameMap with identical size

//if gameState.hasWaterWings, then tileTypes[ALL_WATER_TILES].floor = 1; 

//item parameters
//isCharacter and name

var tileTypes = {

//0-99 - tests
//100-149 - turtle town
//150-199 - turtle tower
//200-249 - world 1
//250-299 - dungeon 1
//300-349 - world 2
//350-399 - dungeon 2
//400-449 - world 3
//450-499 - dungeon 3
//500-549 - world 4
//550-599 - dungeon 4

//0-99 test mechanics //////////////////////////////////////////////////////////////////////////////////////////////////

		0: { floor:floorTypes.solid, sprite:[{x:tileW*0, y:tileH*0, w:tileW, h:tileH}] }, // black mountain
		1: { floor:floorTypes.path, sprite:[{x:tileW*1, y:tileH*0, w:tileW, h:tileH}] }, // grey mountain
		2: { floor:floorTypes.path, sprite:[{x:tileW*2, y:tileH*0, w:tileW, h:tileH}] }, // path brown
		3: { floor:floorTypes.path, sprite:[{x:tileW*3, y:tileH*0, w:tileW, h:tileH}] }, // path tan
		//destructible
		4: { floor:floorTypes.destructible, sprite:[{x:tileW*4, y:tileH*0, w:tileW, h:tileH}], destructTo: 2, destructSound: 'bulger' }, // path grey
		5: { floor:floorTypes.destructible, sprite:[{x:tileW*5, y:tileH*0, w:tileW, h:tileH}], destructTo: 2, destructSound: 'bulger' }, // path white	
		//pushable
		6: { floor:floorTypes.pushable, sprite:[{x:tileW*6, y:tileH*0, w:tileW, h:tileH}], destructTo: 2, destructSound: 'bulger' }, // path temple1
		//diving
		7: { floor:floorTypes.path, sprite:[{x:tileW*1, y:tileH*1, w:tileW, h:tileH}] }, // regular water
		8: { floor:floorTypes.path, sprite:[{x:tileW*10, y:tileH*7, w:tileW, h:tileH}], divable: true }, // divable water, level 1
		9: { floor:floorTypes.path, sprite:[{x:tileW*0, y:tileH*1, w:tileW, h:tileH}], risable: true }, // risable water, level 2 (bubbles)
		//animation test
		10: { floor:floorTypes.solid, sprite:[{x:tileW*0, y:tileH*1, w:tileW, h:tileH}], animateTo: 11 }, // ice water
		11: { floor:floorTypes.path, sprite:[{x:tileW*1, y:tileH*1, w:tileW, h:tileH}], animateTo: 10 }, // regular water

		//sliding invisible tunnels for world 1
		21: { floor:floorTypes.ice, sprite:[{x:tileW*0, y:tileH*0, w:tileW, h:tileH}], invisible: true}, // sliding tunnel path under mountains
		22: { floor:floorTypes.ice, sprite:[{x:tileW*5, y:tileH*1, w:tileW, h:tileH}], invisible: true }, // sliding warp path for tunnel
		
		//revealable tunnels for world 3
		22: { floor:floorTypes.path, sprite:[{x:tileW*5, y:tileH*1, w:tileW, h:tileH}], tunnel: true }, // tunnel entrance (reveals paths)
		23: { floor:floorTypes.path, sprite:[{x:tileW*0, y:tileH*0, w:tileW, h:tileH}], undimmable: true }, // tunnel disguised as mountain
		24: { floor:floorTypes.path, sprite:[{x:tileW*3, y:tileH*0, w:tileW, h:tileH}], undimmable: true }, // tunnel under mountain

		
		//100-149 turtle town //////////////////////////////////////////////////////////////////////////////////////////////////

		100: { floor:floorTypes.solid, sprite:[{x:tileW*8, y:tileH*0, w:tileW, h:tileH}]}, // turtle wall
		101: { floor:floorTypes.solid, sprite:[{x:tileW*7, y:tileH*7, w:tileW, h:tileH}]}, // building blank
		102: { floor:floorTypes.solid, sprite:[{x:tileW*1, y:tileH*6, w:tileW, h:tileH}]}, // building window
		103: { floor:floorTypes.solid, sprite:[{x:tileW*8, y:tileH*7, w:tileW, h:tileH}], isSign: true, sound: 'sign103'}, // building sign
		104: { floor:floorTypes.path, sprite:[{x:tileW*2, y:tileH*6, w:tileW, h:tileH}], sound: 'path104'}, // sidewalk dark grey
		105: { floor:floorTypes.path, sprite:[{x:tileW*4, y:tileH*6, w:tileW, h:tileH}], sound: 'path105'}, // sidewalk darker
		106: { floor:floorTypes.path, sprite:[{x:tileW*3, y:tileH*6, w:tileW, h:tileH}], sound: 'path106'}, // sidewalk lighter
		107: { floor:floorTypes.solid, sprite:[{x:tileW*1, y:tileH*1, w:tileW, h:tileH}]}, // water shallow
		108: { floor:floorTypes.path, sprite:[{x:tileW*10, y:tileH*6, w:tileW, h:tileH}]}, // water deep
		109: { floor:floorTypes.solid, sprite:[{x:tileW*6, y:tileH*6, w:tileW, h:tileH}]}, // bridge
		110: { floor:floorTypes.solid, sprite:[{x:tileW*7, y:tileH*6, w:tileW, h:tileH}]}, // closed door
		111: { floor:floorTypes.path, sprite:[{x:tileW*5, y:tileH*6, w:tileW, h:tileH}], sound: 'warp111'}, // open door
		112: { floor:floorTypes.solid, sprite:[{x:tileW*14, y:tileH*2, w:tileW, h:tileH}]}, // inventory sign
		113: { floor:floorTypes.path, sprite:[{x:tileW*2, y:tileH*6, w:tileW, h:tileH}], undimmable: true, undimTo: 115}, // tunnel path as wall
		114: { floor:floorTypes.path, sprite:[{x:tileW*5, y:tileH*6, w:tileW, h:tileH}], undimmable: true, undimTo: 116}, // tunnel warp as wall
		115: { floor:floorTypes.path, sprite:[{x:tileW*7, y:tileH*7, w:tileW, h:tileH}], undimmable: true, dimTo: 113}, // tunnel path revealed
		116: { floor:floorTypes.path, sprite:[{x:tileW*7, y:tileH*7, w:tileW, h:tileH}], undimmable: true, dimTo: 114}, // tunnel warp revealed
		117: { floor:floorTypes.path, sprite:[{x:tileW*5, y:tileH*6, w:tileW, h:tileH}], tunnel: true}, // tunnel opening


		//130 - instrument
		130: { floor:floorTypes.solid, sprite:[{x:tileW*8, y:tileH*0, w:tileW, h:tileH}]}, //wall
		131: { floor:floorTypes.path, sprite:[{x:tileW*4, y:tileH*6, w:tileW, h:tileH}]}, //path lite
		132: { floor:floorTypes.path, sprite:[{x:tileW*3, y:tileH*6, w:tileW, h:tileH}]}, //path dark
		133: { floor:floorTypes.path, sprite:[{x:tileW*2, y:tileH*6, w:tileW, h:tileH}]}, //row between
		134: { floor:floorTypes.path, sprite:[{x:tileW*8, y:tileH*14, w:tileW, h:tileH}]}, //pause
		135: { floor:floorTypes.path, sprite:[{x:tileW*9, y:tileH*14, w:tileW, h:tileH}]}, //play
		136: { floor:floorTypes.path, sprite:[{x:tileW*5, y:tileH*6, w:tileW, h:tileH}]}, //portal
		137: { floor:floorTypes.solid, sprite:[{x:tileW*9, y:tileH*15, w:tileW, h:tileH}]}, //icon1
		138: { floor:floorTypes.solid, sprite:[{x:tileW*10, y:tileH*15, w:tileW, h:tileH}]}, //icon2 
		139: { floor:floorTypes.solid, sprite:[{x:tileW*11, y:tileH*15, w:tileW, h:tileH}]}, //icon3 
		140: { floor:floorTypes.solid, sprite:[{x:tileW*12, y:tileH*15, w:tileW, h:tileH}]}, //icon4 
		141: { floor:floorTypes.solid, sprite:[{x:tileW*8, y:tileH*15, w:tileW, h:tileH}]}, //icon locked 
		142: { floor:floorTypes.solid, sprite:[{x:tileW*2, y:tileH*6, w:tileW, h:tileH}]}, //wall
		147: { floor:floorTypes.solid, sprite:[{x:tileW*2, y:tileH*6, w:tileW, h:tileH}]}, //wall

		// 142: { floor:floorTypes.solid, sprite:[{x:tileW*4, y:tileH*6, w:tileW, h:tileH}]}, //path dark

		// #241f17 = wall 130
		// #e1d5c2 = tile lite 131 
		// #9c9a98 = tile dark 132
		// #575551 = row between 133
		// #50f950 = play/pause button (2 total) 134, 135
		// #4f5e4f = portal 136
		// #865d1b = icon wall (5 total) 137-141
		// #275ea1 = symbols in stone (5 total) 142-146
		// #1f3e1f = turtlephone text (9 total) 147-155


		//149-200 turtle tower //////////////////////////////////////////////////////////////////////////////////////////////////

		//200-249 world 1 //////////////////////////////////////////////////////////////////////////////////////////////////

		200: { floor:floorTypes.solid, sprite:[{x:tileW*8, y:tileH*0, w:tileW, h:tileH}]}, // turtle wall
		201: { floor:floorTypes.solid, sprite:[{x:tileW*7, y:tileH*6, w:tileW, h:tileH}]}, // closed door
		202: { floor:floorTypes.solid, sprite:[{x:tileW*0, y:tileH*0, w:tileW, h:tileH}]}, // black mountain
		203: { floor:floorTypes.solid, sprite:[{x:tileW*1, y:tileH*0, w:tileW, h:tileH}]}, // grey mountain
		204: { floor:floorTypes.path, sprite:[{x:tileW*2, y:tileH*0, w:tileW, h:tileH}], sound: 'path204'}, // path brown
		205: { floor:floorTypes.path, sprite:[{x:tileW*3, y:tileH*0, w:tileW, h:tileH}], sound: 'path205'}, // path tan
		206: { floor:floorTypes.path, sprite:[{x:tileW*4, y:tileH*0, w:tileW, h:tileH}], sound: 'path206'}, // path grey
		207: { floor:floorTypes.path, sprite:[{x:tileW*5, y:tileH*0, w:tileW, h:tileH}], sound: 'path207'}, // path white
		208: { floor:floorTypes.solid, sprite:[{x:tileW*9, y:tileH*0, w:tileW, h:tileH}]}, // temple wall
		209: { floor:floorTypes.path, sprite:[{x:tileW*6, y:tileH*0, w:tileW, h:tileH}], sound: 'path209'}, // path temple1
		210: { floor:floorTypes.path, sprite:[{x:tileW*7, y:tileH*0, w:tileW, h:tileH}], sound: 'path210'}, // path temple2
		211: { floor:floorTypes.path, sprite:[{x:tileW*11, y:tileH*0, w:tileW, h:tileH}], sound: 'path211'}, // temple stairs
		212: { floor:floorTypes.ice, sprite:[{x:tileW*5, y:tileH*1, w:tileW, h:tileH}], invisible: true, sound: 'warp212'}, // warp (open door)
		213: { floor:floorTypes.ice, sprite:[{x:tileW*1, y:tileH*0, w:tileW, h:tileH}], invisible: true, sound: 'tunnel213-0'}, // invisible tunnel
		214: { floor:floorTypes.destructible, sprite:[{x:tileW*9, y:tileH*1, w:tileW, h:tileH}], destructTo: 205, destructSound: 'destruct214'}, // destructible dirt
		215: { floor:floorTypes.destructible, sprite:[{x:tileW*9, y:tileH*1, w:tileW, h:tileH}], destructTo: 206, destructSound: 'destruct214'}, // destructible dirt into item
		216: { floor:floorTypes.destructible, sprite:[{x:tileW*8, y:tileH*1, w:tileW, h:tileH}], destructTo: 207, destructSound: 'destruct216'}, // destructible ice
		217: { floor:floorTypes.destructible, sprite:[{x:tileW*7, y:tileH*1, w:tileW, h:tileH}], destructTo: 210, destructSound: 'destruct217'}, // destructible temple
		218: { floor:floorTypes.ice, sprite:[{x:tileW*0, y:tileH*1, w:tileW, h:tileH}], sound: 'ice218'}, // ice
		219: { floor:floorTypes.path, sprite:[{x:tileW*3, y:tileH*1, w:tileW, h:tileH}], sound: 'switch219'}, // moon switch off
		220: { floor:floorTypes.path, sprite:[{x:tileW*4, y:tileH*1, w:tileW, h:tileH}], sound: 'switch220'}, // moon switch on
		221: { floor:floorTypes.solid, sprite:[{x:tileW*2, y:tileH*1, w:tileW, h:tileH}]}, // moon gate closed
		222: { floor:floorTypes.path, sprite:[{x:tileW*11, y:tileH*1, w:tileW, h:tileH}], sound: 'path222'}, // moon gate open
		223: { floor:floorTypes.solid, sprite:[{x:tileW*12, y:tileH*0, w:tileW, h:tileH}], sound: 'sign223', isSign: true}, // temple sign
		224: { floor:floorTypes.solid, sprite:[{x:tileW*12, y:tileH*1, w:tileW, h:tileH}]}, // cairns
		225: { floor:floorTypes.path, sprite:[{x:tileW*6, y:tileH*1, w:tileW, h:tileH}], sound: 'warp225'}, // dungeon warp
		226: { floor:floorTypes.destructible, sprite:[{x:tileW*13, y:tileH*1, w:tileW, h:tileH}], destructTo: 210, destructSound: 'destruct226'}, // destructible cairn tile
		227: { floor:floorTypes.solid, sprite:[{x:tileW*12, y:tileH*2, w:tileW, h:tileH}], isInscription: true, sound: 'inscription227'}, // mountain rock inscription
		228: { floor:floorTypes.solid, sprite:[{x:tileW*12, y:tileH*0, w:tileW, h:tileH}], isInscription: true, sound: 'inscription228'}, // temple inscription
		229: { floor:floorTypes.solid, sprite:[{x:tileW*12, y:tileH*2, w:tileW, h:tileH}], isSign: true, sound: 'sign229' }, // mountain rock sign
		230: { floor:floorTypes.path, sprite:[{x:tileW*15, y:tileH*1, w:tileW, h:tileH}], sound: 'warp230'}, // correct puzzle warp
		231: { floor:floorTypes.path, sprite:[{x:tileW*15, y:tileH*1, w:tileW, h:tileH}], sound: 'warp231'}, // dud warps

		//250-299 dungeon 1 //////////////////////////////////////////////////////////////////////////////////////////////////

		250: { floor:floorTypes.solid, sprite:[{x:tileW*0, y:tileH*5, w:tileW, h:tileH}]}, // dark purple rock wall
		251: { floor:floorTypes.solid, sprite:[{x:tileW*1, y:tileH*5, w:tileW, h:tileH}]}, // light purple rock wall
		252: { floor:floorTypes.path, sprite:[{x:tileW*2, y:tileH*5, w:tileW, h:tileH}]}, // floor tile light
		253: { floor:floorTypes.path, sprite:[{x:tileW*3, y:tileH*5, w:tileW, h:tileH}]}, // floor tile dark
		254: { floor:floorTypes.destructible, sprite:[{x:tileW*7, y:tileH*1, w:tileW, h:tileH}], destructTo: 252, destructSound: 'destruct254'}, //destructible dark
		255: { floor:floorTypes.destructible, sprite:[{x:tileW*8, y:tileH*1, w:tileW, h:tileH}], destructTo: 253, destructSound: 'destruct255'}, //destructible light
		256: { floor:floorTypes.path, sprite:[{x:tileW*4, y:tileH*5, w:tileW, h:tileH}], animateTo: 257}, // disco tile 1 pink
		257: { floor:floorTypes.path, sprite:[{x:tileW*5, y:tileH*5, w:tileW, h:tileH}], animateTo: 258}, // disco tile 2 blue
		258: { floor:floorTypes.path, sprite:[{x:tileW*6, y:tileH*5, w:tileW, h:tileH}], animateTo: 259}, // disco tile 3 orange
		259: { floor:floorTypes.path, sprite:[{x:tileW*7, y:tileH*5, w:tileW, h:tileH}], animateTo: 256}, // disco tile 4 yellow
		260: { floor:floorTypes.path, sprite:[{x:tileW*8, y:tileH*5, w:tileW, h:tileH}]}, // disco warp
		261: { floor:floorTypes.solid, sprite:[{x:tileW*9, y:tileH*5, w:tileW, h:tileH}]}, // closed door

		//300-349 world 2 //////////////////////////////////////////////////////////////////////////////////////////////////

		300: { floor:floorTypes.solid, sprite:[{x:tileW*7, y:tileH*6, w:tileW, h:tileH}]}, 	// closed door
		301: { floor:floorTypes.solid, sprite:[{x:tileW*8, y:tileH*0, w:tileW, h:tileH}]}, 	// turtle wall
		302: { floor:floorTypes.solid, sprite:[{x:tileW*1, y:tileH*0, w:tileW, h:tileH}]},	// rock wall
		303: { floor:floorTypes.solid, sprite:[{x:tileW*10, y:tileH*8, w:tileW, h:tileH}]},	// dirt wall
		304: { floor:floorTypes.solid, sprite:[{x:tileW*10, y:tileH*4, w:tileW, h:tileH}]}, 	// tree wall
		305: { floor:floorTypes.path, sprite:[{x:tileW*11, y:tileH*10, w:tileW, h:tileH}], sound: 'dirt305'}, 	// dirt path
		306: { floor:floorTypes.path, sprite:[{x:tileW*10, y:tileH*3, w:tileW, h:tileH}], sound:'grass306'},	// grass path
		307: { floor:floorTypes.destructible, sprite:[{x:tileW*9, y:tileH*9, w:tileW, h:tileH}], destructTo: 306, destructSound: 'fern307'},	// destructible bush to mushroom item
		308: { floor:floorTypes.path, sprite:[{x:tileW*10, y:tileH*6, w:tileW, h:tileH}], isWater: true},	// water
		309: { floor:floorTypes.path, sprite:[{x:tileW*11, y:tileH*6, w:tileW, h:tileH}]},	// water with submerged log
		310: { floor:floorTypes.conveyorL, sprite:[{x:tileW*10, y:tileH*10, w:tileW, h:tileH}]},	// rapids left
		311: { floor:floorTypes.conveyorD, sprite:[{x:tileW*8, y:tileH*10, w:tileW, h:tileH}]},	// rapids down
		312: { floor:floorTypes.conveyorU, sprite:[{x:tileW*9, y:tileH*10, w:tileW, h:tileH}]},// rapids up - 312
		313: { floor:floorTypes.conveyorR, sprite:[{x:tileW*7, y:tileH*10, w:tileW, h:tileH}]},// rapids right - 313
		314: { floor:floorTypes.path, sprite:[{x:tileW*12, y:tileH*9, w:tileW, h:tileH}], animateTo: 315, sound: 'campfire314'},// campfire tile 1 - 314
		315: { floor:floorTypes.path, sprite:[{x:tileW*12, y:tileH*10, w:tileW, h:tileH}], animateTo: 316, sound: 'campfire315'},// campfire tile 2 - 315
		316: { floor:floorTypes.path, sprite:[{x:tileW*12, y:tileH*11, w:tileW, h:tileH}], animateTo: 314, sound: 'campfire316'},// campfire tile 3 - 316
		317: { floor:floorTypes.path, sprite:[{x:tileW*12, y:tileH*12, w:tileW, h:tileH}], sound: 'campfire317'},// campfire post-log - 317
		// 318: { floor:floorTypes.path, sprite:[{x:tileW*0, y:tileH*10, w:tileW, h:tileH}]},// crystal red submerged - 318
		// 319: { floor:floorTypes.path, sprite:[{x:tileW*1, y:tileH*10, w:tileW, h:tileH}]},// crystal orange submerged - 319
		// 320: { floor:floorTypes.path, sprite:[{x:tileW*2, y:tileH*10, w:tileW, h:tileH}]},// crystal yellow submerged - 320
		// 321: { floor:floorTypes.path, sprite:[{x:tileW*3, y:tileH*10, w:tileW, h:tileH}]},// crystal green submerged - 321
		// 322: { floor:floorTypes.path, sprite:[{x:tileW*4, y:tileH*10, w:tileW, h:tileH}]},// crystal blue submerged - 322
		// 323: { floor:floorTypes.path, sprite:[{x:tileW*5, y:tileH*10, w:tileW, h:tileH}]},// crystal purple submerged - 323
		324: { floor:floorTypes.path, sprite:[{x:tileW*6, y:tileH*9, w:tileW, h:tileH}], sound: 'stairs324'},// bridge grate - 324
		325: { floor:floorTypes.path, sprite:[{x:tileW*6, y:tileH*10, w:tileW, h:tileH}], sound: 'stairs325'},// bridge stairs -325
		326: { floor:floorTypes.path, sprite:[{x:tileW*4, y:tileH*9, w:tileW, h:tileH}] , sound: 'stairs326'},// bridge rainbow tile unactivated - 326
		327: { floor:floorTypes.path, sprite:[{x:tileW*4, y:tileH*8, w:tileW, h:tileH}]},// bridge rainbow tile activated (when player has all 6 crystals) -327
		328: { floor:floorTypes.ice, sprite:[{x:tileW*5, y:tileH*9, w:tileW, h:tileH}]},// bridge rainbow (ice) - 77,2 to 77,21 when player is on - 328
		329: { floor:floorTypes.path, sprite:[{x:tileW*8, y:tileH*5, w:tileW, h:tileH}], sound: 'warp329'},// dungeon warp -329
		330: { floor:floorTypes.ice, sprite:[{x:tileW*5, y:tileH*6, w:tileW, h:tileH}], sound: 'warp330', invisible: true},// regular warp -330
		331: { floor:floorTypes.ice, sprite:[{x:tileW*1, y:tileH*0, w:tileW, h:tileH}], sound: 'tunnel331', invisible: true},// rock wall ice -331
		332: { floor:floorTypes.ice, sprite:[{x:tileW*10, y:tileH*8, w:tileW, h:tileH}], sound: 'tunnel332', invisible: true},// dirt wall ice (for tunnel,49,10 and 49,12 triggered at 49,7) then switches back at 49,14 - 332
		333: { floor:floorTypes.ice, sprite:[{x:tileW*10, y:tileH*3, w:tileW, h:tileH}], sound: 'tunnel333', invisible: true},// grass path ice (for tunnel) 49,11 triggered at 49,7 then switches back at 49,14 -333
		334: { floor:floorTypes.solid, sprite:[{x:tileW*7, y:tileH*7, w:tileW, h:tileH}]},// bridge wall
		335: { floor:floorTypes.solid, sprite:[{x:tileW*8, y:tileH*7, w:tileW, h:tileH}], isSign: true},// bridge sign
		336: { floor:floorTypes.pushable, sprite:[{x:tileW*7, y:tileH*8, w:tileW, h:tileH}], destructTo: 305, destructSound: 'log336'}, // log



		//350-399 dungeon 2 //////////////////////////////////////////////////////////////////////////////////////////////////

		350: { floor:floorTypes.solid, sprite:[{x:tileW*0, y:tileH*5, w:tileW, h:tileH}]}, // rock wall dark purple
		351: { floor:floorTypes.solid, sprite:[{x:tileW*1, y:tileH*5, w:tileW, h:tileH}]}, // rock wall lighter purple
		352: { floor:floorTypes.solid, sprite:[{x:tileW*1, y:tileH*0, w:tileW, h:tileH}]}, // rock wall grey
		353: { floor:floorTypes.ice, sprite:[{x:tileW*5, y:tileH*6, w:tileW, h:tileH}], invisible: true, sound: 'warp353'}, // warp
		354: { floor:floorTypes.path, sprite:[{x:tileW*10, y:tileH*5, w:tileW, h:tileH}], isWater: true}, //water path
		355: { floor:floorTypes.conveyorU, sprite:[{x:tileW*10, y:tileH*5, w:tileW, h:tileH}], isWater: true}, //rapids up
		356: { floor:floorTypes.conveyorR, sprite:[{x:tileW*10, y:tileH*5, w:tileW, h:tileH}], isWater: true}, //rapids right
		357: { floor:floorTypes.conveyorL, sprite:[{x:tileW*10, y:tileH*5, w:tileW, h:tileH}], isWater: true}, //rapids left
		358: { floor:floorTypes.conveyorD, sprite:[{x:tileW*10, y:tileH*5, w:tileW, h:tileH}], isWater: true}, //rapids down
		359: { floor:floorTypes.solid, sprite:[{x:tileW*0, y:tileH*8, w:tileW, h:tileH}], animateTo: 360}, //geode 1 (default)
		360: { floor:floorTypes.solid, sprite:[{x:tileW*1, y:tileH*8, w:tileW, h:tileH}], animateTo: 361}, //geode 2
		361: { floor:floorTypes.solid, sprite:[{x:tileW*2, y:tileH*8, w:tileW, h:tileH}], animateTo: 362}, //geode 3
		362: { floor:floorTypes.solid, sprite:[{x:tileW*3, y:tileH*8, w:tileW, h:tileH}], animateTo: 359}, //geode 4
		363: { floor:floorTypes.path, sprite:[{x:tileW*3, y:tileH*5, w:tileW, h:tileH}], sound: 'path363'}, //temple tile red
		364: { floor:floorTypes.path, sprite:[{x:tileW*2, y:tileH*5, w:tileW, h:tileH}], sound: 'path364'}, //temple tile white
		365: { floor:floorTypes.path, sprite:[{x:tileW*6, y:tileH*5, w:tileW, h:tileH}], sound: 'path365', animateTo: 366}, //disco tile 1  orange
		366: { floor:floorTypes.path, sprite:[{x:tileW*4, y:tileH*5, w:tileW, h:tileH}], sound: 'path366', animateTo: 367}, // disco tile 2 pink
		367: { floor:floorTypes.path, sprite:[{x:tileW*7, y:tileH*5, w:tileW, h:tileH}], sound: 'path367', animateTo: 368}, // disco tile 3 yellow
		368: { floor:floorTypes.path, sprite:[{x:tileW*5, y:tileH*5, w:tileW, h:tileH}], sound: 'path368', animateTo: 365}, // disco tile 4 blue
		369: { floor:floorTypes.path, sprite:[{x:tileW*3, y:tileH*0, w:tileW, h:tileH}], sound: 'path369'}, // dirt path
		370: { floor:floorTypes.destructible, sprite:[{x:tileW*7, y:tileH*1, w:tileW, h:tileH}], destructTo: 369, destructSound: 'destruct370'}, // destructible stone (end of river)
		371: { floor:floorTypes.path, sprite:[{x:tileW*5, y:tileH*6, w:tileW, h:tileH}], tunnel: true, sound: 'path371'}, // tunnel opening
		372: { floor:floorTypes.path, sprite:[{x:tileW*0, y:tileH*5, w:tileW, h:tileH}], undimmable: true, dimTo: 385, sound: 'path372'}, // tunnel path hiding as dark rock wall
		373: { floor:floorTypes.path, sprite:[{x:tileW*0, y:tileH*5, w:tileW, h:tileH}], undimmable: true, dimTo: 386, sound: 'path373'}, // tunnel warp hiding as dark rock wall
		374: { floor:floorTypes.destructible, sprite:[{x:tileW*8, y:tileH*1, w:tileW, h:tileH}], destructTo: 364, destructSound: 'destruct374'}, //destructible temple tile light
		375: { floor:floorTypes.destructible, sprite:[{x:tileW*9, y:tileH*1, w:tileW, h:tileH}], destructTo: 363, destructSound: 'destruct375'}, //destructible temple tile dark
		376: { floor:floorTypes.solid, sprite:[{x:tileW*9, y:tileH*0, w:tileW, h:tileH}]}, // temple wall
		377: { floor:floorTypes.ice, sprite:[{x:tileW*6, y:tileH*5, w:tileW, h:tileH}], animateTo: 378, invisible: true}, //disco tile ice
		378: { floor:floorTypes.ice, sprite:[{x:tileW*4, y:tileH*5, w:tileW, h:tileH}], animateTo: 379, invisible: true}, // disco tile ice
		379: { floor:floorTypes.ice, sprite:[{x:tileW*7, y:tileH*5, w:tileW, h:tileH}], animateTo: 380, invisible: true}, // disco tile ice
		380: { floor:floorTypes.ice, sprite:[{x:tileW*5, y:tileH*5, w:tileW, h:tileH}], animateTo: 377, invisible: true}, // disco tile ice
		381: { floor:floorTypes.ice, sprite:[{x:tileW*1, y:tileH*5, w:tileW, h:tileH}], invisible: true}, // light purple ice
		382: { floor:floorTypes.ice, sprite:[{x:tileW*1, y:tileH*0, w:tileW, h:tileH}], invisible: true}, // rock ice
		383: { floor:floorTypes.solid, sprite:[{x:tileW*9, y:tileH*5, w:tileW, h:tileH}]}, // closed door
		384: { floor:floorTypes.ice, sprite:[{x:tileW*10, y:tileH*5, w:tileW, h:tileH}], invisible:true}, // end rapids ice
		385: { floor:floorTypes.path, sprite:[{x:tileW*3, y:tileH*0, w:tileW, h:tileH}], undimmable: true, undimTo: 372, sound: 'path385'}, // tunnel path hiding as dark rock wall
		386: { floor:floorTypes.path, sprite:[{x:tileW*5, y:tileH*6, w:tileW, h:tileH}], undimmable: true, undimTo: 373, sound: 'path386'}, // tunnel warp hiding as dark rock wall
		387: { floor:floorTypes.solid, sprite:[{x:tileW*8, y:tileH*11, w:tileW, h:tileH}], animateTo: 389}, //dancing plant red 1
		388: { floor:floorTypes.solid, sprite:[{x:tileW*8, y:tileH*12, w:tileW, h:tileH}], animateTo: 390}, //dancing plant blue 1
		389: { floor:floorTypes.solid, sprite:[{x:tileW*11, y:tileH*11, w:tileW, h:tileH}], animateTo: 387}, //dancing plant red 2
		390: { floor:floorTypes.solid, sprite:[{x:tileW*11, y:tileH*12, w:tileW, h:tileH}], animateTo: 388}, //dancing plant blue 2
		391: { floor:floorTypes.ice, sprite:[{x:tileW*5, y:tileH*6, w:tileW, h:tileH}], invisible: true}, // warp, no sound
		392: { floor:floorTypes.path, sprite:[{x:tileW*5, y:tileH*16, w:tileW, h:tileH}], sound: 'switch392'}, // flower switch off
		393: { floor:floorTypes.path, sprite:[{x:tileW*6, y:tileH*16, w:tileW, h:tileH}], sound: 'switch393'}, // flower switch on
		394: { floor:floorTypes.solid, sprite:[{x:tileW*1, y:tileH*0, w:tileW, h:tileH}], animateTo: 395}, // animateable path
		395: { floor:floorTypes.ice, sprite:[{x:tileW*8, y:tileH*13, w:tileW, h:tileH}], animateTo: 394}, // animateable dirt path
	
	};
	
	var itemTypes = {

		//0-99 - tests
		//100-149 - turtle town
		//150-199 - turtle tower
		//200-249 - world 1
		//250-299 - dungeon 1
		//300-349 - world 2
		//350-399 - dungeon 2
		//400-449 - world 3
		//450-499 - dungeon 3
		//500-549 - world 4
		//550-599 - dungeon 4
	
		//0-99 test mechanics //////////////////////////////////////////////////////////////////////////////////////////////////

		0: { }, // empty
		1: { floor:floorTypes.path, sprite:[{x:tileW*0, y:tileH*2, w:tileW, h:tileH}], pickupTo: 0, name:'CARROT', itemMax: 15}, // carrot
		2: { floor:floorTypes.path, sprite:[{x:tileW*1, y:tileH*2, w:tileW, h:tileH}], isScroll: true }, // turtle scroll
		
		// 3: { floor:floorTypes.solid, sprite:[{x:tileW*4, y:tileH*3, w:tileW, h:tileH}], isCharacter: true, name: 'HECKUS' }, // turtle sage

		//100-149 turtle town //////////////////////////////////////////////////////////////////////////////////////////////////

		100: { floor:floorTypes.path, sprite:[{x:tileW*9, y:tileH*2, w:tileW, h:tileH}]}, // exclamation point
		101: { floor:floorTypes.solid, sprite:[{x:tileW*3, y:tileH*4, w:tileW, h:tileH}], isCharacter: true, name:'herman', sound: 'herman'}, // herman
		102: { floor:floorTypes.solid, sprite:[{x:tileW*0, y:tileH*4, w:tileW, h:tileH}], isCharacter: true, name: 'spomer', sound: 'spomer'}, // spomer
		103: { floor:floorTypes.solid, sprite:[{x:tileW*2, y:tileH*4, w:tileW, h:tileH}], isCharacter: true, name:'heckus', sound: 'heckus'}, // heckus
		104: { floor:floorTypes.solid, sprite:[{x:tileW*1, y:tileH*4, w:tileW, h:tileH}], isCharacter: true, name: 'bulger', sound: 'bulger'}, // bulger
		105: { floor:floorTypes.solid, sprite:[{x:tileW*4, y:tileH*4, w:tileW, h:tileH}]}, // lamp post
		106: { floor:floorTypes.solid, sprite:[{x:tileW*6, y:tileH*4, w:tileW, h:tileH}]}, // trash can
		107: { floor:floorTypes.path, sprite:[{x:tileW*7, y:tileH*4, w:tileW, h:tileH}], sound: 'bench107'}, // bench facing down
		108: { floor:floorTypes.solid, sprite:[{x:tileW*5, y:tileH*4, w:tileW, h:tileH}]}, // tree
		109: { floor:floorTypes.solid, sprite:[{x:tileW*1, y:tileH*9, w:tileW, h:tileH}]}, // demicus statue
		110: { floor:floorTypes.path, sprite:[{x:tileW*1, y:tileH*2, w:tileW, h:tileH}], isScroll: true, sound: 'scroll110'}, // scroll
		111: { floor:floorTypes.solid, sprite:[{x:tileW*4, y:tileH*3, w:tileW, h:tileH}], isCharacter: true, name:'hermicus2', sound: 'hermicus2'}, // hermicus in turtle town
		112: { floor:floorTypes.solid, sprite:[{x:tileW*4, y:tileH*14, w:tileW, h:tileH}], isMainItem: true, name:'WATER WINGS'}, // hermicus in turtle town
		113: { floor:floorTypes.solid, sprite:[{x:tileW*7, y:tileH*13, w:tileW, h:tileH}], isCharacter: true, name:'moe2'}, // moe
		114: { floor:floorTypes.solid, sprite:[{x:tileW*5, y:tileH*14, w:tileW, h:tileH}], isMainItem: true, name:'HEADLAMP'}, // headlamp

		115: { floor:floorTypes.path, sprite:[{x:tileW*9, y:tileH*13, w:tileW, h:tileH}], sound: 'lithophone'}, // lithophone
		116: { floor:floorTypes.path, sprite:[{x:tileW*10, y:tileH*13, w:tileW, h:tileH}], sound: 'xylophone'}, // xylophone
		// 117: { floor:floorTypes.path, sprite:[{x:tileW*9, y:tileH*13, w:tileW, h:tileH}]}, // world 3 inst
		// 118: { floor:floorTypes.path, sprite:[{x:tileW*9, y:tileH*13, w:tileW, h:tileH}]}, // world 4 inst



		

	
		//150-199 turtle tower //////////////////////////////////////////////////////////////////////////////////////////////////

		//200-249 world 1 //////////////////////////////////////////////////////////////////////////////////////////////////

		200: { floor:floorTypes.path, sprite:[{x:tileW*1, y:tileH*2, w:tileW, h:tileH}], isScroll: true, sound: 'scroll200'}, // scroll
		201: { floor:floorTypes.path, sprite:[{x:tileW*14, y:tileH*1, w:tileW, h:tileH}], sound: 'herb201', pickupTo: 209, name:'MOUNTAIN HERB', itemMax: 9}, // mountain herb 1
		202: { floor:floorTypes.path, sprite:[{x:tileW*13, y:tileH*0, w:tileW, h:tileH}], sound: 'cairn202', pickupTo: 0, name:'STONE TOTEM', itemMax: 5}, // cairn 1
		203: { floor:floorTypes.path, sprite:[{x:tileW*14, y:tileH*0, w:tileW, h:tileH}], sound: 'cairn203', pickupTo: 0, name:'STONE TOTEM', itemMax: 5}, // cairn 2
		204: { floor:floorTypes.path, sprite:[{x:tileW*15, y:tileH*0, w:tileW, h:tileH}], sound: 'cairn204', pickupTo: 0, name:'STONE TOTEM', itemMax: 5}, // cairn 3
		205: { floor:floorTypes.path, sprite:[{x:tileW*16, y:tileH*0, w:tileW, h:tileH}], sound: 'cairn205', pickupTo: 0, name:'STONE TOTEM', itemMax: 5}, // cairn 4
		206: { floor:floorTypes.path, sprite:[{x:tileW*17, y:tileH*0, w:tileW, h:tileH}], sound: 'cairn206', pickupTo: 0, name:'STONE TOTEM', itemMax: 5}, // cairn 5
		207: { floor:floorTypes.path, sprite:[{x:tileW*10, y:tileH*2, w:tileW, h:tileH}], sound: 'grass207'}, // grass thicker
		208: { floor:floorTypes.path, sprite:[{x:tileW*11, y:tileH*2, w:tileW, h:tileH}], sound: 'grass208'}, // grass lighter
		209: { floor:floorTypes.path, sprite:[{x:tileW*16, y:tileH*1, w:tileW, h:tileH}]}, // grass lighter


		//250-299 dungeon 1 //////////////////////////////////////////////////////////////////////////////////////////////////

		250: { floor:floorTypes.solid, sprite:[{x:tileW*4, y:tileH*3, w:tileW, h:tileH}], isCharacter: true, name:'hermicus1', sound: 'hermicus1'}, // hermicus
		251: { floor:floorTypes.solid, sprite:[{x:tileW*2, y:tileH*2, w:tileW, h:tileH}]}, // books
		252: { floor:floorTypes.solid, sprite:[{x:tileW*3, y:tileH*2, w:tileW, h:tileH}]}, // candles
		253: { floor:floorTypes.path, sprite:[{x:tileW*4, y:tileH*2, w:tileW, h:tileH}], pickupTo: 0, name:'LUMPY ROCK', isMainItem: true}, // lumpy rock

		//300-349 world 2 //////////////////////////////////////////////////////////////////////////////////////////////////

		300: { floor:floorTypes.solid, sprite:[{x:tileW*9, y:tileH*3, w:tileW, h:tileH}], isCharacter: true, name:'oswald', sound: 'oswald'}, // oswald
		301: { floor:floorTypes.solid, sprite:[{x:tileW*11, y:tileH*9, w:tileW, h:tileH}], isCharacter: true, name: 'gene', sound: 'gene'}, // gene
		302: { floor:floorTypes.pushable, sprite:[{x:tileW*7, y:tileH*8, w:tileW, h:tileH}]}, // log (NOT USED)
		303: { floor:floorTypes.path, sprite:[{x:tileW*5, y:tileH*8, w:tileW, h:tileH}], pickupTo: 209, name:'MUSHROOM', itemMax: 9, sound: 'mushroom303'}, // mushroom
		304: { floor:floorTypes.path, sprite:[{x:tileW*13, y:tileH*9, w:tileW, h:tileH}], pickupTo: 0, name:'PETRIFIED LOG', itemMax: 5, sound: 'wood304'}, // wood 1
		305: { floor:floorTypes.path, sprite:[{x:tileW*14, y:tileH*9, w:tileW, h:tileH}], pickupTo: 0, name:'PETRIFIED LOG', itemMax: 5, sound: 'wood305'}, // wood 2
		306: { floor:floorTypes.path, sprite:[{x:tileW*15, y:tileH*9, w:tileW, h:tileH}], pickupTo: 0, name:'PETRIFIED LOG', itemMax: 5, sound: 'wood306'}, // wood 3
		307: { floor:floorTypes.path, sprite:[{x:tileW*16, y:tileH*9, w:tileW, h:tileH}], pickupTo: 0, name:'PETRIFIED LOG', itemMax: 5, sound: 'wood307'}, // wood 4
		308: { floor:floorTypes.path, sprite:[{x:tileW*17, y:tileH*9, w:tileW, h:tileH}], pickupTo: 0, name:'PETRIFIED LOG', itemMax: 5, sound: 'wood308'}, // wood 5
		309: { floor:floorTypes.path, sprite:[{x:tileW*13, y:tileH*10, w:tileW, h:tileH}], sound: 'bush309'}, // bush grass
		310: { floor:floorTypes.path, sprite:[{x:tileW*13, y:tileH*11, w:tileW, h:tileH}], sound: 'bush310'}, // bushes dirt
		311: { floor:floorTypes.path, sprite:[{x:tileW*1, y:tileH*2, w:tileW, h:tileH}], isScroll: true}, // scroll
		312: { floor:floorTypes.path, sprite:[{x:tileW*0, y:tileH*10, w:tileW, h:tileH}], pickupTo: 0, name:'CRYSTAL', itemMax: 6, sound: 'crystal312'},// crystal red submerged - 312
		313: { floor:floorTypes.path, sprite:[{x:tileW*1, y:tileH*10, w:tileW, h:tileH}], pickupTo: 0, name:'CRYSTAL', itemMax: 6, sound: 'crystal313'},// crystal orange submerged - 313
		314: { floor:floorTypes.path, sprite:[{x:tileW*2, y:tileH*10, w:tileW, h:tileH}], pickupTo: 0, name:'CRYSTAL', itemMax: 6, sound: 'crystal314'},// crystal yellow submerged - 314
		315: { floor:floorTypes.path, sprite:[{x:tileW*3, y:tileH*10, w:tileW, h:tileH}], pickupTo: 0, name:'CRYSTAL', itemMax: 6, sound: 'crystal315'},// crystal green submerged - 315
		316: { floor:floorTypes.path, sprite:[{x:tileW*4, y:tileH*10, w:tileW, h:tileH}], pickupTo: 0, name:'CRYSTAL', itemMax: 6, sound: 'crystal316'},// crystal blue submerged - 316
		317: { floor:floorTypes.path, sprite:[{x:tileW*5, y:tileH*10, w:tileW, h:tileH}], pickupTo: 0, name:'CRYSTAL', itemMax: 6, sound: 'crystal317'},// crystal purple submerged - 317
		318: { floor:floorTypes.solid, sprite:[{x:tileW*15, y:tileH*2, w:tileW, h:tileH}]}, // single tree A
		319: { floor:floorTypes.solid, sprite:[{x:tileW*15, y:tileH*3, w:tileW, h:tileH}]}, // single tree B
		320: { floor:floorTypes.solid, sprite:[{x:tileW*15, y:tileH*4, w:tileW, h:tileH}]}, // single tree C
		321: { floor:floorTypes.solid, sprite:[{x:tileW*16, y:tileH*2, w:tileW, h:tileH}]}, // double tree A1
		322: { floor:floorTypes.solid, sprite:[{x:tileW*17, y:tileH*2, w:tileW, h:tileH}]}, // double tree A2
		323: { floor:floorTypes.solid, sprite:[{x:tileW*16, y:tileH*3, w:tileW, h:tileH}]}, // double tree B1
		324: { floor:floorTypes.solid, sprite:[{x:tileW*17, y:tileH*3, w:tileW, h:tileH}]}, // double tree B2
		325: { floor:floorTypes.solid, sprite:[{x:tileW*16, y:tileH*4, w:tileW, h:tileH}]}, // double tree C1
		326: { floor:floorTypes.solid, sprite:[{x:tileW*17, y:tileH*4, w:tileW, h:tileH}]}, // double tree C2


		//350-399 dungeon 2 //////////////////////////////////////////////////////////////////////////////////////////////////

		350: { floor:floorTypes.solid, sprite:[{x:tileW*7, y:tileH*13, w:tileW, h:tileH}], isCharacter: true, name:'moe', sound: 'moe'}, // moe
		351: { floor:floorTypes.path, sprite:[{x:tileW*3, y:tileH*12, w:tileW, h:tileH}], pickupTo: 0, name:'CRUSTY BULB', isMainItem: true}, // bulb
		352: { floor:floorTypes.solid, sprite:[{x:tileW*1, y:tileH*9, w:tileW, h:tileH}]}, // demicus statue
		353: { floor:floorTypes.solid, sprite:[{x:tileW*4, y:tileH*16, w:tileW, h:tileH}]} // flower gates



	// 	//turtle tower revisited
	// 	51: { floor:floorTypes.solid, sprite:[{x:tileW*11, y:tileH*0, w:tileW, h:tileH}]}, // carrot cake empty
	// 	52: { floor:floorTypes.solid, sprite:[{x:tileW*11, y:tileH*1, w:tileW, h:tileH}]}, // ordinary table
	// 	53: { floor:floorTypes.solid, sprite:[{x:tileW*11, y:tileH*2, w:tileW, h:tileH}]}, // mushroom gumbo empty
	// 	54: { floor:floorTypes.solid, sprite:[{x:tileW*12, y:tileH*0, w:tileW, h:tileH}]}, // carrot cake filled
	// 	55: { floor:floorTypes.solid, sprite:[{x:tileW*12, y:tileH*2, w:tileW, h:tileH}]}, // mushroom gumbo filled
	// 	56: { floor:floorTypes.solid, sprite:[{x:tileW*5, y:tileH*13, w:tileW, h:tileH}]}, // bulb pedestal filled
	// 	57: { floor:floorTypes.solid, sprite:[{x:tileW*10, y:tileH*11, w:tileW, h:tileH}]}, // bulb pedestal blue 1
	// 	58: { floor:floorTypes.solid, sprite:[{x:tileW*4, y:tileH*13, w:tileW, h:tileH}]}, // bulb wall filled but pre-drop
	// 	59: { floor:floorTypes.solid, sprite:[{x:tileW*9, y:tileH*11, w:tileW, h:tileH}]}, // bulb pedestal pink 1
	// 	60: { floor:floorTypes.solid, sprite:[{x:tileW*10, y:tileH*12, w:tileW, h:tileH}]}, // bulb pedestal pink 2
	// 	61: { floor:floorTypes.solid, sprite:[{x:tileW*11, y:tileH*11, w:tileW, h:tileH}]}, // bulb wall blue 1
	// 	62: { floor:floorTypes.solid, sprite:[{x:tileW*8, y:tileH*12, w:tileW, h:tileH}]}, // bulb wall blue 2
	// 	63: { floor:floorTypes.solid, sprite:[{x:tileW*8, y:tileH*11, w:tileW, h:tileH}]}, // bulb wall pink 1
	// 	64: { floor:floorTypes.solid, sprite:[{x:tileW*11, y:tileH*12, w:tileW, h:tileH}]},  // bulb wall pink 2
	// 	65: { floor:floorTypes.path, sprite:[{x:tileW*1, y:tileH*12, w:tileW, h:tileH}]}, // confetti 1
	// 	66: { floor:floorTypes.path, sprite:[{x:tileW*2, y:tileH*12, w:tileW, h:tileH}]},  // confetti 2
	
	// 	//
	// 	67: { floor:floorTypes.path, sprite:[{x:tileW*10, y:tileH*1, w:tileW, h:tileH}]}, //open moon door for world1
	// 	68: { floor:floorTypes.solid, sprite:[{x:tileW*6, y:tileH*13, w:tileW, h:tileH}]}, // sound wave
		
	// 	//world 3
	// 	69: { floor:floorTypes.solid, sprite:[{x:tileW*12, y:tileH*6, w:tileW, h:tileH}]}, //boulder1 (pushable)
	// 	70: { floor:floorTypes.solid, sprite:[{x:tileW*13, y:tileH*6, w:tileW, h:tileH}]}, //boulder2 (pushable)
	// 	71: { floor:floorTypes.solid, sprite:[{x:tileW*13, y:tileH*7, w:tileW, h:tileH}]}, //rock1
	// 	72: { floor:floorTypes.solid, sprite:[{x:tileW*13, y:tileH*8, w:tileW, h:tileH}]}, //rock2
	// 	73: { floor:floorTypes.destructible, sprite:[{x:tileW*12, y:tileH*7, w:tileW, h:tileH}]}, //rock3 (destructible)
	// 	74: { floor:floorTypes.destructible, sprite:[{x:tileW*12, y:tileH*8, w:tileW, h:tileH}]}, //rock4 (destructible)
	// 	75: { floor:floorTypes.path, sprite:[{x:tileW*13, y:tileH*4, w:tileW, h:tileH}]}, //hole
	// 	76: { floor:floorTypes.solid, sprite:[{x:tileW*12, y:tileH*4, w:tileW, h:tileH}]}, //cactus
	// 	77: { floor:floorTypes.solid, sprite:[{x:tileW*13, y:tileH*2, w:tileW, h:tileH}]}, //radio tower base
	// 	78: { floor:floorTypes.solid, sprite:[{x:tileW*13, y:tileH*1, w:tileW, h:tileH}]}, //radio tower top
	// 	79: { floor:floorTypes.path, sprite:[{x:tileW*13, y:tileH*0, w:tileW, h:tileH}]}, //mirage -cool drink
	// 	80: { floor:floorTypes.solid, sprite:[{x:tileW*0, y:tileH*12, w:tileW, h:tileH}]} //gizmo test jewel
	// 	// 81: { floor:floorTypes.solid, sprite:[{x:tileW*3, y:tileH*1, w:tileW, h:tileH}]}, //switch OFF
	// 	// 82: { floor:floorTypes.solid, sprite:[{x:tileW*11, y:tileH*4, w:tileW, h:tileH}]}, //test gizmo 1
	// 	// 83: { floor:floorTypes.solid, sprite:[{x:tileW*12, y:tileH*10, w:tileW, h:tileH}]} //test gizmo 2
	
	}