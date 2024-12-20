var sounds = [
   
    //background sounds
    'bg-snooze',
    'bg-mountains1','bg-mountains2',
    'bg-cavedrips','bg-disco','bg-dungeon1',
    
    'bg-forest',
    'bg-forest-water1','bg-forest-water2',
    'bg-forest-waterfallloop1','bg-forest-waterfallloop2',
    'bg-waterfallcave1','bg-waterfallcave2','bg-cavedrips',
    'bg-dungeon2loop',

    //event sounds
    //world 1
    'cairn-found', 'gate-unlock', 'voice-calling-out', 'portal-thud',
    //dungeon 1
    'dungeon1-room1', 'dungeon1-room2', 'dungeon1-room3', 'dungeon1-room4', 'dungeon1-room5', 
    'dungeon1-room6', 'dungeon1-room7', 'dungeon1-room8', 'dungeon1-room9', 'dungeon1-exit' ,
    'moonglow',
    //tt-visit 1
    'water-wings-found',
    //world 2
    'rapids1','rapids2','rapids3','rapids4','rapids5','rapids6','rapids7','rapids8','rapids9','rapids10','rapids11',
    'water0','water1','water2','water3',
    'rainbowbridge','rainbowride',
    'log-in-water',
    'crystal1melody','crystal2melody','crystal3melody','crystal4melody','crystal5melody','crystal6melody',
    'crystal1drone','crystal2drone','crystal3drone','crystal4drone','crystal5drone','crystal6drone','crystal7drone',
    'wood-found','campfire',
    //dungeon 2
    'cave1','cave2','cave3','cave4','cave5','cave6','dungeon2melody'




];

//this requires a different sound for every tile/item type
for (const [key] of Object.entries(tileTypes)) {
    if(tileTypes[key].sound != undefined) { sounds.push(tileTypes[key].sound); }
    if(tileTypes[key].destructSound != undefined) { sounds.push(tileTypes[key].destructSound); }
}
for (const [key] of Object.entries(itemTypes)) {
    if(itemTypes[key].sound != undefined) { sounds.push(itemTypes[key].sound); }
    if(itemTypes[key].destructSound != undefined) { sounds.push(itemTypes[key].destructSound); }
}


//create list of buffers
let buffers = [];
for(let i = 0; i < sounds.length; i++) { buffers[i] = null; }

let activeSounds = [];

//initialize audioContext
function initSnd()
{ 
    soundInitialized = true; 
    var AudioContext = window.AudioContext || window.webkitAudioContext;   
    audioCtx = new AudioContext();
    for(let i = 0; i < sounds.length; i++)
    {
        loadSnd(i);
    }

    //count loaded buffers until all are loaded
    let t = setInterval(() => {
        let c = 0;
        for(let i = 0; i < sounds.length; i++)
        {
            if(buffers[i] != null) { c++; }
        }
        if(c == sounds.length)
        {
            clearInterval(t);
            soundsLoaded = true;
        }
    }, 50);
}

//select a sound by it's filename
function selectSnd(name,pan,loop) {
    for(let i = 0; i < sounds.length; i++)
    {
        if(sounds[i] == name)
        {
            loadSnd(i);
            playSnd(i,pan,loop,name); // pan default for now
        }
    }
}

//load sound so it's ready to play
function loadSnd(index) {
    const request = new XMLHttpRequest();
    request.open("GET", `./snd/${sounds[index]}.mp3`);
    request.responseType = "arraybuffer";
    request.onload = function() {
    let undecodedAudio = request.response;
    audioCtx.decodeAudioData(undecodedAudio, (data) => buffers[index] = data);
    };
    request.send();
};

// dungeon1.connect(dungeon1gain).connect(audioCtx.destination);
// var waterfallloop1gain = audioCtx.createGain();


//play a sound
function playSnd(index, pan, loop, name) { //loop and name arguments are for bg sounds only
    const source = audioCtx.createBufferSource();
    const panNode = audioCtx.createStereoPanner();
    source.buffer = buffers[index];
    panNode.pan.setValueAtTime(pan, audioCtx.currentTime);
    const gainNode = audioCtx.createGain();
    if(loop != undefined) { 
        source.loop = true;
        activeSounds.push([name,source,gainNode,panNode]);
    }
    source.connect(gainNode);
    gainNode.connect(panNode);
    panNode.connect(audioCtx.destination);
        source.start(audioCtx.currentTime); // play the source immediately
};

function clearAllBackgroundSnd(delayTime)
{
    if(delayTime == undefined)
    { delayTime = 0; }
    if(activeSounds.length > 0)
    {
        for(let i = 0; i < activeSounds.length; i++)
        {
            activeSounds[i][1].stop(audioCtx.currentTime + delayTime);
        }
    }
    activeSounds = [];
}

function fadeOutBackgroundSnd(name,timeInSeconds)
{
    // console.log(activeSounds);
    if(activeSounds.length > 0)
    {
        for(let i = 0; i < activeSounds.length; i++)
        {
            if(activeSounds[i][0] == name)
            {
                activeSounds[i][2].gain.linearRampToValueAtTime(-0.001, (audioCtx.currentTime + timeInSeconds));
                setTimeout(function(){activeSounds[i][1].stop(audioCtx.currentTime); }, timeInSeconds*1000);
            }
        }

    }
}

function setGain(name,gain,timeInSeconds)
{
    // console.log(activeSounds);

    if(activeSounds.length > 0)
    {
        for(let i = 0; i < activeSounds.length; i++)
        {
            if(activeSounds[i][0] == name)
            {
                activeSounds[i][2].gain.linearRampToValueAtTime(gain, (audioCtx.currentTime + timeInSeconds));
                // console.log(activeSounds[i][2].gain);
            }
        }

    }
}

function spatialGain(name,targetX,targetY,scaleOfFade)
{
    //where targetX, targetY is the location of the sound
    if(activeSounds.length > 0)
    {
        for(let i = 0; i < activeSounds.length; i++)
        {
            if(activeSounds[i][0] == name)
            {
                //lower scale of fade (i.e. 0.05) = more subtle fade, louder overall gain
                let prox = calculateProximity(playerX(),playerY(),targetX,targetY,scaleOfFade);
                activeSounds[i][2].gain.linearRampToValueAtTime(prox, (audioCtx.currentTime + 0.1));


                //handling panning
                let x = targetX-playerX();
                let sig = 1 / (1 + Math.exp(-(2/mapW) * x));//sigmoid logistics function
                setPan(name,sig);
            }
        }
    }
}

// function setGain(name,gain)
// {
//     if(activeSounds.length > 0)
//         {
//             for(let i = 0; i < activeSounds.length; i++)
//             {
//                 if(activeSounds[i][0] == name)
//                 {
//                     activeSounds[i][2].gain.linearRampToValueAtTime(gain, (audioCtx.currentTime + 0.05));
//                 }
//             }
    
//         }  
// }

function setPan(name,pan)
{
    for(let i = 0; i < activeSounds.length; i++)
    {
        if(activeSounds[i][0] == name)
        {
            // console.log(name,pan);
            activeSounds[i][3].pan.setValueAtTime(pan, audioCtx.currentTime);
        }
    }
}



function calculateProximity(characterX, characterY, pointX, pointY, mod) {
    // Calculate the distance between the character and the point
    const distance = Math.sqrt(Math.pow(pointX - characterX, 2) + Math.pow(pointY - characterY, 2));

    // Return a value that decreases gradually as the distance increases
    // For example, the value could be calculated as 1 / (1 + distance)
    const proximity = 1 / (1 + distance * mod); //lower decimal mod = subtler fade

    return proximity;
}