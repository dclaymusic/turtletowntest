//this script declares and tracks the status of the different events and items in the game.
//all items are stored in a single object which can be saved and loaded in the main menu using localStorage.

var gameState = {
    level : 'start',
    items: {
        'CARROT' : 0,
        'STONE TOTEM' : 0,
        'MOUNTAIN HERB' : 0,
        'PETRIFIED LOG' : 0,
        'MUSHROOM' : 0,
        'CRYSTAL' : 0
    },
    artifacts: {
        'LUMPY ROCK': false,
        'CRUSTY BULB': false,
        'RUSTY BUCKET': false,
        'BUMPY SHELL': false
    },
    tools: {
        'WATER WINGS': false,
        'HEADLAMP': false
    },
    instruments: {
        'LITHOPHONE': false,
        'XYLOPHONE': false
    },
    turtleTownVisits: 1,
    cairnsCollected: [], //202,203,204,205,206
    logsCollected: [], //304,305,306,307,308
    //world 1 conditionals
    talkedToHermanBeforeWorld1: false,
    world1BackgroundMusic2Triggered: false,
    world1PuzzleGateUnlockedForFirstTime: false,
    //world 2 conditionals
    world2TalkedToOswald: false,

}