window.CHAPTER = {
 "id": "ch06",
 "kind": "Campaign",
 "number": "06",
 "title": "The Draconian Dungeons",
 "pages": "28–30",
 "header": "img/ch06-header.jpg",
 "setup": "img/ch06-setup.jpg",
 "setupNote": "Table space 84 × 56 cm. All four Doors are #00 and start <b>Locked</b>. Components: 1 Grey, 1 Green, 1 Orange and 1 Red Rune token (the Runekeys), Interaction Token 1 (Book of Interactions p. 16), 2 Chest tokens, Buried Surprise Event deck.",
 "cast": {
  "narrator": {
   "name": "Narrator",
   "voice": "en_US-ryan-high",
   "length_scale": 1.12,
   "pitch": 1.0
  },
  "tharmagar": {
   "name": "Tharmagar",
   "voice": "en_GB-alan-medium",
   "length_scale": 1.12,
   "pitch": 0.93
  },
  "rules": {
   "name": "Rules",
   "voice": "en_US-lessac-high",
   "length_scale": 1.0,
   "pitch": 1.0
  }
 },
 "checklist": [
  "Build the map as shown; all four Doors (#00) are Locked.",
  "Place the Grey, Green, Orange and Red Rune tokens (the Runekeys), the Interaction Token and 2 Chest tokens.",
  "Rune Bag: keep only 3 Runes of each colour (15 total).",
  "Darkness Hunting Rune card, face A up, at the end of the Initiative Track.",
  "Shuffle the Buried Surprise Special Event deck next to the board.",
  "Take Tharmagar's Companion card and place his NPC token next to the Party Leader (LOYAL)."
 ],
 "rules": [
  {
   "title": "Darkness spawning – Darkness Hunting",
   "html": "Darkness emerges from Darkness Spawning points or from Darkness already on the board. Place the <b>Darkness Hunting</b> Rune card, face A up, at the end of the Initiative Track. When the Initiative Marker reaches it: draw the indicated number of Runes (one at a time), place their Darkness tiles, put the Rune(s) on the Initiative Track, then flip the card."
  },
  {
   "title": "Darkness behavior – Standard",
   "html": "Darkness chases the <b>Strongest Hero</b> who is not already on top of Darkness. If all Heroes are on Darkness, skip that spawning and every Hero takes Y non-preventable damage (Y = number of Heroes). This is <b>“the Crush.”</b>"
  },
  {
   "title": "Recall Action curse penalty – Single",
   "html": "Whenever a Hero takes a Recall Action (willingly or not), they receive <b>1 Curse Cube</b>."
  },
  {
   "title": "Winning & losing",
   "tone": "danger",
   "html": "<b>Fail</b> immediately if a Hero holds more Curse or Trauma Cubes than they can, if the <b>last Rune</b> in the bag is drawn, or if <b>Tharmagar</b> is defeated.<br><b>Win</b> when you read “The adventure ends here.”"
  },
  {
   "title": "A Precious Cargo",
   "html": "Tharmagar follows you and must be protected. Take his Companion card and place an NPC token adjacent to you. He starts <b>LOYAL</b>. If he is defeated, the Adventure ends in failure."
  },
  {
   "title": "Random Locked Doors",
   "html": "Doors may go in any slot (all are #00). All Doors are <b>Locked</b> until an effect changes this. No character can enter a Map tile in a tray behind a closed door."
  },
  {
   "title": "Collapsing Roof",
   "html": "Rune Bag holds only <b>3 Runes of each colour (15 total)</b>. When the <b>third</b> Rune of a colour is placed on the Initiative Track, remove the room of that colour (its Dungeon Tray, Map tiles, and the Door connected to it). Skip this if that room's Door is already open."
  },
  {
   "title": "Buried Surprises",
   "html": "Shuffle the <b>Buried Surprise</b> Special Event deck. Whenever a Door opens, after its Setup, draw one card and resolve it immediately."
  },
  {
   "title": "Runekeys",
   "html": "Runes placed in the First Setup are Runekeys. Collect one by being adjacent and using the <b>Search a Chest</b> Minor Action. The looting Hero may jump to any Hero Starting Position. With <b>3 of 4</b> Runekeys collected and the last enemy defeated, read the ending."
  },
  {
   "title": "FAQ: Companions",
   "tone": "faq",
   "html": "<ul><li>No Health: they have <b>Sturdiness</b> and are defeated only by damage exceeding it <i>all at once</i>.</li><li>Monsters treat them as Pets (last priority). Pet vs Companion tie: the Party Leader chooses.</li><li>Can hold SHIELD tokens and receive PREVENT.</li><li>Activate after the Hero they follow: Move, then Attack, like a Monster.</li><li>Discharged during the Camp Phase.</li></ul>"
  }
 ],
 "scenes": [
  {
   "id": "intro",
   "title": "Into the Dungeons",
   "kicker": "Read aloud before setup",
   "paragraphs": [
    [
     {
      "who": "narrator",
      "text": "When, at last, you recover your senses and look around, you see: on the right side, a mound of buried ruins, alongside a frowning Tharmagar; on the left side, barriers made of a kind of... luminous glass... confining a lot of those creatures, in halls overrun with them. By their squeaks, they already know you're there. What you don't see any sign of is the Seeds of Darkness. Maybe for the best.",
      "audio": "audio/ch06/intro_00_00_narrator_5283a8ec6a.mp3"
     }
    ],
    [
     {
      "who": "tharmagar",
      "text": "These halls are protected by magical barrier traps, set to prevent anything down here from running out of control, or that some monster could find its way up there,",
      "audio": "audio/ch06/intro_01_00_tharmagar_f4b84f77cd.mp3"
     },
     {
      "who": "narrator",
      "text": "the sage satisfies your curiosity.",
      "audio": "audio/ch06/intro_01_01_narrator_fc4a50d596.mp3"
     },
     {
      "who": "tharmagar",
      "text": "The tome we're looking for is there, resting atop that altar, guarded like the precious treasure it is,",
      "audio": "audio/ch06/intro_01_02_tharmagar_e574d5090a.mp3"
     },
     {
      "who": "narrator",
      "text": "he finishes, pointing to an alcove sculpted between the frescoes where stands an open book, behind another wall made of that same energy.",
      "audio": "audio/ch06/intro_01_03_narrator_8a16b8c717.mp3"
     }
    ],
    [
     {
      "who": "narrator",
      "text": "And to think you imagined that your sole trouble on this voyage would be fulfilling the quest that the paladin tasked you with too slowly. But look at how it all unrolled itself: Now you're stuck under many, many floors of rubble, fighting to recover some book that, supposedly, has information about the mysterious enemy and how to defeat it.",
      "audio": "audio/ch06/intro_02_00_narrator_efc1ef19fc.mp3"
     }
    ],
    [
     {
      "who": "tharmagar",
      "text": "But that's not everything. For us to be able to lift the barrier protecting the tome, we'll need to collect at least three runekeys, which are stored in the halls around us. In the end, fate has played a trick on us: we're the very ones who will need to lift the barriers holding back the monsters...",
      "audio": "audio/ch06/intro_03_00_tharmagar_c1748d4f05.mp3"
     },
     {
      "who": "narrator",
      "text": "Tharmagar sighs.",
      "audio": "audio/ch06/intro_03_01_narrator_082537add1.mp3"
     },
     {
      "who": "tharmagar",
      "text": "...Oh, yeah, last of all: we cannot linger here for long, because the old walls and columns that hold this floor aren't steady and strong. They won't endure the battering of these agitated creatures for much longer.",
      "audio": "audio/ch06/intro_03_02_tharmagar_1d5645b514.mp3"
     }
    ],
    [
     {
      "who": "narrator",
      "text": "You sigh in frustration at the irony, but assent with your head, preparing yourself for the upcoming battle.",
      "audio": "audio/ch06/intro_04_00_narrator_61ae62fece.mp3"
     }
    ],
    [
     {
      "who": "tharmagar",
      "text": "When you're ready, my fellow, pull one of the levers over on that arcane panel, so we can settle this at once.",
      "audio": "audio/ch06/intro_05_00_tharmagar_404cc6fa01.mp3"
     }
    ]
   ],
   "tab": "story"
  },
  {
   "id": "i68",
   "title": "#68: Pull the bone lever",
   "paragraphs": [
    [
     {
      "who": "narrator",
      "text": "Even though a bit uncertain of what could happen, you pull the bone lever, and prepare yourself to deal with the consequences...",
      "audio": "audio/ch06/i68_00_00_narrator_934498ed39.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "You gain FOCUS 2. Then, open the Door to the room containing the Orange Rune, and add the Setup it shows. Then, if there's another Locked Door on the board, this resolution does not reduce the value of the Interaction Token.",
      "audio": "audio/ch06/i68_01_00_rules_71de958f0d.mp3"
     }
    ]
   ],
   "tab": "interaction"
  },
  {
   "id": "i69",
   "title": "#69: Pull the gem-encrusted lever",
   "paragraphs": [
    [
     {
      "who": "narrator",
      "text": "Although fearful of what can follow this, you pull the lever inlaid with gems, and brace yourself to face the outcome...",
      "audio": "audio/ch06/i69_00_00_narrator_92f661c3a6.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "You gain FOCUS 2. Then, open the Door to the room containing the Green Rune, and add the Setup it shows. Then, if there's another Locked Door on the board, this resolution does not reduce the value of the Interaction Token.",
      "audio": "audio/ch06/i69_01_00_rules_29270fb500.mp3"
     }
    ]
   ],
   "tab": "interaction"
  },
  {
   "id": "i70",
   "title": "#70: Pull the skull lever",
   "paragraphs": [
    [
     {
      "who": "narrator",
      "text": "Even though you are afraid of whatever comes next, you pull the skull lever, and get ready for its effects...",
      "audio": "audio/ch06/i70_00_00_narrator_7ac3cd7eea.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "You gain FOCUS 2. Then, open the Door to the room containing the Grey Rune, and add the Setup it shows. Then, if there's another Locked Door on the board, this resolution does not reduce the value of the Interaction Token.",
      "audio": "audio/ch06/i70_01_00_rules_fbffb6c8a2.mp3"
     }
    ]
   ],
   "tab": "interaction"
  },
  {
   "id": "i71",
   "title": "#71: Pull the wooden lever",
   "paragraphs": [
    [
     {
      "who": "narrator",
      "text": "Ignoring the unease you feel for doing this, you pull the wooden lever, and tighten the grip around your weapon, waiting for the results...",
      "audio": "audio/ch06/i71_00_00_narrator_fef33a20fc.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "You gain FOCUS 2. Then, open the Door to the room containing the Red Rune, and add the Setup it shows. Then, if there's another Locked Door on the board, this resolution does not reduce the value of the Interaction Token.",
      "audio": "audio/ch06/i71_01_00_rules_8969701de8.mp3"
     }
    ]
   ],
   "tab": "interaction"
  },
  {
   "id": "end",
   "title": "End of the Adventure – What We Came Here For",
   "kicker": "Read when 3 Runekeys are collected and the last enemy falls",
   "paragraphs": [
    [
     {
      "who": "narrator",
      "text": "The battle was pretty intense, and the remains of the creatures of Darkness were scattered all over the halls. Once again, you prevailed, and—with the three Runekeys—now the path is clear for claiming what you came to take.",
      "audio": "audio/ch06/end_00_00_narrator_dd671b4cd8.mp3"
     }
    ],
    [
     {
      "who": "tharmagar",
      "text": "That's it! I'm sure, that's it!",
      "audio": "audio/ch06/end_01_00_tharmagar_23ccfab652.mp3"
     },
     {
      "who": "narrator",
      "text": "Tharmagar says excitedly, glancing at his reward as the magic barrier around it vanishes.",
      "audio": "audio/ch06/end_01_01_narrator_cf2450a72f.mp3"
     },
     {
      "who": "tharmagar",
      "text": "I can recall the details of all these engravings, these silvery filigrees, even if time and age have taken my eyesight...",
      "audio": "audio/ch06/end_01_02_tharmagar_01e0913407.mp3"
     }
    ],
    [
     {
      "who": "narrator",
      "text": "Feeling your duty is done, you allow yourself to loosen and relax. Having the tome, you could finally depart to Valarai, as was your desire and assignment in the first place.",
      "audio": "audio/ch06/end_02_00_narrator_530b2d8924.mp3"
     }
    ],
    [
     {
      "who": "tharmagar",
      "text": "'Varatash Veritas', or 'Truth about the Varatash'. The chronicles that tell of the first clash between Daren and the Darkness... A sharpened sword can defeat a foe, but a sharpened mind is the one that can win a war, my friend...",
      "audio": "audio/ch06/end_03_00_tharmagar_561ca0163e.mp3"
     },
     {
      "who": "narrator",
      "text": "he finishes in the didactic tone that you now recognize so well.",
      "audio": "audio/ch06/end_03_01_narrator_dc1d23658a.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "The adventure ends here. You may proceed to the Camp Phase and read “After the Adventure – And What's Next?”.",
      "audio": "audio/ch06/end_04_00_rules_6b7b618262.mp3"
     }
    ]
   ],
   "tab": "ending"
  },
  {
   "id": "after",
   "title": "After the Adventure – And What's Next?",
   "kicker": "Read during the Camp Phase",
   "paragraphs": [
    [
     {
      "who": "narrator",
      "text": "Made eager by the precious tome's retrieval, Tharmagar gently leafs through some pages of thick parchment, confirming the suspicion that already was in his heart and memory:",
      "audio": "audio/ch06/after_00_00_narrator_79ad07ec32.mp3"
     },
     {
      "who": "tharmagar",
      "text": "It's here! Everything's here! The ballads narrating the struggle of the First Belligerent against the Darkness, the research they made about the enemy's forces, the spells they used to turn the tides of battle! All of it!",
      "audio": "audio/ch06/after_00_01_tharmagar_089a6cc4e2.mp3"
     },
     {
      "who": "narrator",
      "text": "he thinks aloud, certain of having made the most important discovery of the age.",
      "audio": "audio/ch06/after_00_02_narrator_625f0bf568.mp3"
     }
    ],
    [
     {
      "who": "narrator",
      "text": "Despite all the blood and sweat shed, the first step of your journey together was a success. But now another question poses itself: how can you both move forward? The stairways that led you down here are buried now, and there isn't any other way out.",
      "audio": "audio/ch06/after_01_00_narrator_e3f213507a.mp3"
     }
    ],
    [
     {
      "who": "tharmagar",
      "text": "Don't worry yourself, my fellow. This Sanctum is built to serve also as a fortress. The same way they designed the dungeons, they planned tunnels for evacuation,",
      "audio": "audio/ch06/after_02_00_tharmagar_36bf178f7f.mp3"
     },
     {
      "who": "narrator",
      "text": "the sage continues, with his eyes bent to read, almost as if he wasn't paying any attention to you.",
      "audio": "audio/ch06/after_02_01_narrator_835afc62c7.mp3"
     },
     {
      "who": "tharmagar",
      "text": "I'll start my job, indeed. We don't know when we'll be alone and threat-free again. You, on the other hand, be alert for any creatures, in case they find their way here; and look for the hidden causeway that leads to the tunnels. I remember seeing some pickaxes that may help you, near the frescoes.",
      "audio": "audio/ch06/after_02_02_tharmagar_1c1fcd3786.mp3"
     }
    ],
    [
     {
      "who": "narrator",
      "text": "You sigh in frustration. After all, you weren't expecting to break stones to survive. Or rather, to have a chance of surviving! Sooner or later, you know, your provisions will be consumed. You know you must find the promised tunnels (that might not even exist), or you both will face a horrible fate. You don't even reckon the odds of the Draconians miraculously managing to get to you in time to rescue you. That is, if they survived the incursion. Once again, time isn't on your side.",
      "audio": "audio/ch06/after_03_00_narrator_1f8e789630.mp3"
     }
    ],
    [
     {
      "who": "narrator",
      "text": "Definitely, you didn't imagine how far answering that call for help in the woods would take you...",
      "audio": "audio/ch06/after_04_00_narrator_d859350a56.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "You may read “Interlude 01 – Making Amends” on page 31.",
      "audio": "audio/ch06/after_05_00_rules_d32593bcc1.mp3"
     }
    ]
   ],
   "tab": "ending"
  }
 ],
 "interactions": [
  {
   "label": "The Arcane Panel",
   "page": 16,
   "image": "img/boi-16.jpg",
   "when": "Interaction Token 1: pull a lever whenever a Hero interacts with the panel",
   "options": [
    "i68",
    "i69",
    "i70",
    "i71"
   ],
   "hotspots": {
    "i68": [
     13,
     67
    ],
    "i69": [
     28,
     68
    ],
    "i70": [
     67,
     67
    ],
    "i71": [
     85,
     67
    ]
   }
  }
 ],
 "trackers": [
  {
   "type": "flip",
   "id": "hunt",
   "label": "Darkness Hunting card",
   "faces": [
    "A",
    "B"
   ],
   "note": "Flip the card after each time it triggers."
  },
  {
   "type": "status",
   "id": "tharm",
   "label": "Tharmagar",
   "states": [
    "LOYAL",
    "DEFEATED"
   ],
   "bad": [
    "DEFEATED"
   ],
   "alerts": {
    "DEFEATED": "The precious cargo is lost, so the adventure ends in failure."
   }
  }
 ],
 "rewards": "Each player chooses and unlocks a <b>Class Ability</b> for their Hero.",
 "next": "Interlude 01 – Making Amends (page 31)",
 "plugin": "ch06"
};
