function dialogueHandler() {

    //which time through turtle town is this?
    let visit = gameState.turtleTownVisits;

    if(gameState.level == 'turtle-town')
    {

        if(nextToCharacter() == 'heckus') { 
            if(visit == 1) { updateDialogue(heckusDialogue[0]); }
            if(visit == 2 || visit == 3) { updateDialogue(heckusDialogue[1]); }
            
        }

        if(nextToCharacter() == 'bulger') { 
            if(visit == 1 || visit == 2 || visit == 3) { updateDialogue(bulgerDialogue[0]); }
        }

        if(nextToCharacter() == 'spomer') { 
            if(visit == 1 || visit == 2 || visit == 3) { updateDialogue(spomerDialogue[0]); }
        }

        if(nextToCharacter() == 'herman') {
            if(visit == 1) { updateDialogue(hermanDialogue[0]); gameState.talkedToHermanBeforeWorld1 = true; } 
            if(visit == 2) { updateDialogue(hermanDialogue[1]); }
            if(visit == 3) { updateDialogue(hermanDialogue[2]); }

        }
        else { dialogueActive = false; dialoguePage = 0; }

        if(nextToCharacter() == 'hermicus2') {
            //only present after 2nd visit
            if(visit == 2) { updateDialogue(hermicusDialogue[0]); } 
            if(visit == 3) { updateDialogue(hermicusDialogue[1]); } 
        }
        else { dialogueActive = false; dialoguePage = 0; }

        if(nextToCharacter() == 'moe2') {
            //only present after 3rd visit
            if(visit == 3) { updateDialogue(moeDialogue[0]); } 
        }
        else { dialogueActive = false; dialoguePage = 0; }
    }
}

let hermanDialogue = [

    //visit == 1
    [
        ["HERMAN:",
        "It sure is nice to see an active turtle in these parts again!",
        "I've been the only creature of our kind in town for a while now.",
        "This place used to be a real lively spot, if you can imagine.",
        "Turtles, tortoises, terrapins as far as the eye could see!",
        "Singing, playing, snacking - and boy did we do a mean boogie."],

        ["HERMAN:",
        "Somewhere along the way we lost ourselves, though. Y'see, for as",
        "long as turtles have roamed this land, we honored the forces",
        "of nature that helped us thrive here. But as time went on, folks",
        "got greedy... thinking they could harness those forces",
        "to bring power and prestige to this place like never before!"],

        ["HERMAN:",
        "Year after year, the town's obsession spiraled out of control.",
        "Some left in pursuit of mythic artifacts spoken of by the OLD ONES.",
        "The rest disappeared into TURTLE TOWER to pore through the",
        "ancient texts, trying to find some kind of meaning.",
        "After a while, all grew quiet.",
        ],

        ["HERMAN:",
        "Folks got lost in their thoughts, I suppose.",
        "Riddled by puzzles of their own making. To this day,",
        "most of the town is asleep down there in the TURTLE TOWER stacks!",
        "I can't wake 'em up, no matter how hard I try.",
        "And I'm just here, alone... Sigh..."],

        ["HERMAN",
        "My grandfather, HERMICUS, is part of the problem I'm afraid.",
        "While the others were buried in books, the old hippie closed",
        "up his shop and wandered up into the MOONLIGHT HILLS in search",
        "of some silly relic he kept yammering about... the MYSTIC MOON!",
        "I haven't seen him since."],

        ["HERMAN:",
        "Sometimes I think I hear his voice, though...",
        "calling out from far up north.",
        "I wonder what he's trying to say...","",""]
    ],

    //visit == 2
    [
        ["HERMAN:",
            "Thank you for finding old HERMICUS and guiding him home!",
            "That'll show him to shoot for the moon ever again... ha!",
            "",
            "That LUMPY ROCK doesn't mean much to me.",
            "But I must admit, I sure do love a good rock collection..."]
    ],
    //visit ==3
    [
        ["HERMAN:",
            "That LUMPY ROCK doesn't mean much to me.",
            "But I must admit, I sure do love a good rock collection..."]
    ]
]

let heckusDialogue = [
    //visit == 1
    [
        ["HECKUS:",
        "Hiya! My friends and I were just passing through.",
        "We couldn't miss the opportunity to stop here in Turtle Town.",
        "It's one of the oldest communities in our entire land!",
        "But I have to say I'm not very impressed.",
        "I had heard that things had changed here... but..."],
        ["HECKUS:",
        "...ah, you're a visitor too, eh?",
        "I would have had no idea... after all,",
        "You're the first turtle we've spoken to since we arrived!",
        "The only other one around is brooding on the edge of town.",
        "Perhaps you should speak with him..."]
    ],
    //visit == 2,3
    [
        ["HECKUS:",
            "Snippin' and snappin', that's what I do --",
            "Could be a stick, a straw, or some old bamboo!"]
    ]
]

let spomerDialogue = [
    //visit == 1,2,3
    [
        ["SPOMER:", "Psst! Hey buddy, you got any string?", "I'm an ace at tying things together!"]
    ]
]

let bulgerDialogue = [
    //visit == 1,2,3
    [
        ["BULGER:", "Heylooo there! No special talents here...", "Unless you count gnawin' on a big hunk of wood as talent!"]
    ]
]

let hermicusDialogue = [

        //visit 2
        [
            ["HERMICUS:",
            "Thanks again for helping me out back there!",
            "I spent ages wandering the MOONLIGHT HILLS... and for what?!",
            "A silly rock. I should have stuck to my day job.",
            "Then again, who is around here to sell clothes to anymore?"],

            ["HERMICUS:",
            "It looks like I'm not the only one who got drawn into",
            "the ancient lore of the OLD ONES... y'know, I'm starting",
            "to think all the relics they wrote of were a bunch of hooey.",
            "Well... all except for the MAGIC BLOOM, of course..."],

            ["HERMICUS:",
            "I know the MAGIC BLOOM is real because I've seen it myself!",
            "A long time ago, my buddy MOE and I were out exploring",
            "the REDWOOD GROVE to the east when we wandered a bit too far.",
            "Came across a WATERFALL and tucked behind it a deep CRYSTAL CAVE."],

            ["HERMICUS:",
            "Inside, ancient ruins and the gorgeous MAGIC BLOOM",
            "nestled deep inside! Couldn't quite reach it though... ah!",
            "I never returned, but MOE may very well have gone back for it.",
            "We were just kids then... who knows where he is now."],

            ["HERMICUS:",
            "Listen, you're clearly the adventurous type. If you want to",
            "give it a go and find that MAGIC BLOOM, I'll lend you some",
            "of my world-famous WATER WINGS. They'll give you at least",
            "a fighting chance against all those rapids out there in the woods.",
            "Be careful out there, y'hear?"]
        ],
        //visit 3
        [
            ["HERMICUS:",
            "Wh-WHAT? The MAGIC BLOOM was just a CRUSTY BULB all along, y'say?",
            "I must have forgotten my glasses that day... eesh!"]
            
        ]
]

let moeDialogue = [
    //visit == 1,2
    [
        ["MOE:",
        "Much appreciated for your help back there. Truth is,",
        "I wouldn't a-gotten into that cave without a big ol' heap of luck!",
        "Swimming's not in my bones y'see. I'm a sand-dweller from the south.",
        "We from the WHISPERING DESERT rely on our brains and not our brawn.",
        "Of course, some of us take it too far..."],

        ["MOE:",
        "Years ago, a renegade clan of tortoises ventured far beyond here",
        "and dug a vast maze of MINES below the sands. Never been there,",
        "but heard it was full o' gizmos unlike anythin' you ever did see!",
        "Legend says one day they dug too deep, never to be heard from again.",
        "Can't help but wonder what kinda secrets they were looking for..."],

        ["MOE:",
        "It's a treacherous place out there.",
        "But if you're really feelin' brave... take this HEADLAMP.",
        "Just promise me you'll watch your step!"],
    ]
]