window.CHAPTER = {
 "id": "ch08",
 "kind": "Campaign",
 "number": "08",
 "title": "The Dwarven King’s Manor",
 "pages": "36–39",
 "header": "img/ch08-header.jpg",
 "setup": "img/ch08-setup.jpg",
 "setupNote": "Table space 84 × 56 cm, two Dungeon Trays (2). Monsters marked 2+, 3+, 4+, 5+ are placed only with that many players or more. Door 01 is between Maps C4-F and B3-F.",
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
  },
  "lakin": {
   "name": "King James Lakin",
   "voice": "en_GB-northern_english_male-medium",
   "length_scale": 1.15,
   "pitch": 0.82,
   "fx": "ghost"
  },
  "volin": {
   "name": "Jim Volin, the archer",
   "voice": "en_GB-semaine-medium",
   "speaker_id": 2,
   "length_scale": 1.0,
   "pitch": 1.0
  }
 },
 "checklist": [
  "Build the map as shown: two Dungeon Trays (2) with Maps B2-F, C5-B, C2-F, Bridge BR2-B, C4-F and B3-F, and Door 01 on C4-F.",
  "Place the Monsters: B1 1 BM – Fighter, G1 1 GM – Veteran, W2 2+: WM – Veteran, G2 2+: GM – Veteran, B3 3+: BM – Fighter, G4 4+: GM – Veteran, W5 5+: WM – Veteran.",
  "Place the Heroes on the starting spaces (*) on Map C4-F.",
  "The Gathering Darkness: take 3 Runes of each color from the bag (15 total) and place them on the Initiative Track – do NOT place their Darkness tiles.",
  "Place the Darkness Hunting Rune card, face A up, at the end of the Initiative Track.",
  "Take Tharmagar’s Companion card (RESENTFUL side) and place an NPC token adjacent to the Party Leader.",
  "Read the special instructions, then open the Book of Interactions to page 20 (The King Under the Mountain)."
 ],
 "rules": [
  {
   "title": "Darkness spawning – Darkness Hunting",
   "html": "Darkness emerges from Darkness Spawning points or from Darkness already on the board. Place the <b>Darkness Hunting</b> Rune card, face A up, at the end of the Initiative Track. When the Initiative Marker reaches it: draw the indicated number of Runes (one at a time), place their Darkness tiles, put the Rune(s) on the Initiative Track, then flip the card."
  },
  {
   "title": "Darkness behavior – Standard",
   "html": "Darkness chases the <b>Strongest Hero</b> who is not already on top of Darkness. If all Heroes are on Darkness, skip that spawning and every Hero takes Y non-preventable damage (Y = number of Heroes). This applies each time a Rune should be drawn but no tile is placed and is called <b>“the Crush.”</b>"
  },
  {
   "title": "Recall Action curse penalty – Single",
   "html": "Whenever a Hero takes a Recall Action (willingly or unwillingly), they receive <b>1 Curse Cube</b>."
  },
  {
   "title": "Winning & losing",
   "tone": "danger",
   "html": "<b>Fail</b> immediately if a Hero receives more Curse Cubes or Trauma Cubes than they can hold, if the <b>last Rune</b> in the bag is drawn, or if <b>Tharmagar</b> is defeated.<br><b>Win</b> when a player reads an entry that says “The adventure ends here.”"
  },
  {
   "title": "Special mechanic – A Precious Cargo",
   "html": "Tharmagar follows you and you must protect him. Take his Companion card and place an NPC token adjacent to you. At first, the sage is <b>RESENTFUL</b>. If Tharmagar is defeated, the Adventure immediately ends in failure."
  },
  {
   "title": "Special preparation – The Gathering Darkness",
   "html": "Before playing, take <b>3 Runes of each color</b> from the bag (15 Runes) and place them on the Initiative Track. Do <b>not</b> place their Darkness tiles on the board."
  },
  {
   "title": "Special rule – Tumbling Down",
   "html": "Every empty space adjacent to <b>Bridge BR2-B</b> is abyss. If a PUSH or TELEKINESIS effect places a Monster in one of these spaces, it is thrown into the abyss and is <b>defeated</b>."
  },
  {
   "title": "Special rule – Crumbling Path",
   "tone": "faq",
   "html": "The Cursed Guardian event says “The <b>Special Rule – Crumbling Path</b> is resolved and the current turn ends immediately”, but the Adventure Book v1.0 does not print this rule anywhere (pages 36–39 or the outcomes). Check the official errata/FAQ, or agree on a house ruling at the table."
  },
  {
   "title": "Starting the adventure – The King Under the Mountain",
   "html": "After Setup, open the <b>Book of Interactions to page 20</b>. As a group, choose one option and resolve it. A tie is decided by the Party Leader."
  },
  {
   "title": "FAQ: Companions",
   "tone": "faq",
   "html": "<ul><li>No Health: they have <b>Sturdiness</b> and are defeated only by damage exceeding it <i>all at once</i>.</li><li>Monsters treat them as Pets (last priority). Pet vs Companion: the Party Leader chooses the target.</li><li>Can hold SHIELD tokens and receive PREVENT.</li><li>Activate after the Hero they follow: a Move Action, then an Attack Action, like a Monster.</li><li>Discharged during the Camp Phase.</li></ul>"
  }
 ],
 "scenes": [
  {
   "id": "intro",
   "tab": "story",
   "title": "The Dwarven King’s Manor",
   "kicker": "Read aloud before setup",
   "paragraphs": [
    [
     {
      "who": "narrator",
      "text": "The creatures grunt louder and louder, signaling that they are closer to finding a way to you. Tharmagar, however, remains euphoric, unstoppable in asking questions. For each new answer, memories from his life’s work slowly come back to the sage—a name recalled here, a story unburied there...",
      "audio": "audio/ch08/intro_00_00_narrator_0fdfb99bbd.mp3"
     }
    ],
    [
     {
      "who": "narrator",
      "text": "Nonetheless, there wasn’t any mention of the Undead King.",
      "audio": "audio/ch08/intro_01_00_narrator_b3738b510f.mp3"
     }
    ],
    [
     {
      "who": "lakin",
      "text": "The only Varatash sovereign I know is the Black Prince, and I never found him on the battlefield. Besides, the elvish ballads always describe him as a proud knight, donning heavy armor and wielding a sword with unparalleled skill. Of him, to have the power over death itself, that I never heard. But bear in mind that they were the ones who brought necromancy to this world,",
      "audio": "audio/ch08/intro_02_00_lakin_322c174d27.mp3"
     },
     {
      "who": "narrator",
      "text": "the King explains, as if he was talking to someone of his time.",
      "audio": "audio/ch08/intro_02_01_narrator_a603ce2554.mp3"
     }
    ],
    [
     {
      "who": "tharmagar",
      "text": "Prince... King...",
      "audio": "audio/ch08/intro_03_00_tharmagar_52fafcfec8.mp3"
     },
     {
      "who": "narrator",
      "text": "Tharmagar considered.",
      "audio": "audio/ch08/intro_03_01_narrator_49e6613d65.mp3"
     },
     {
      "who": "tharmagar",
      "text": "He may have been someone that he’s not anymore. A prince who inherited the crown? One who set the sword aside with the coming of age? Do those things even age?",
      "audio": "audio/ch08/intro_03_02_tharmagar_61faa519f7.mp3"
     },
     {
      "who": "narrator",
      "text": "But before you can explore the subject, the first wave of the expected Creatures of Darkness arrive, pouring from the pathways like ants from an anthill.",
      "audio": "audio/ch08/intro_03_03_narrator_b5b1562111.mp3"
     }
    ],
    [
     {
      "who": "narrator",
      "text": "And that was only a stray patrol.",
      "audio": "audio/ch08/intro_04_00_narrator_5beacfacde.mp3"
     }
    ],
    [
     {
      "who": "narrator",
      "text": "Prevailing after another long round of battle, you know that it is time to go, but the sage is reluctant. He is eager to discover the link between the Undead King and the Darkness, sure that he is not a mere necromant.",
      "audio": "audio/ch08/intro_05_00_narrator_a9a7f7f317.mp3"
     }
    ],
    [
     {
      "who": "lakin",
      "text": "I don’t know, Master Tharmagar. All I can say is that the Varatash are masters of themselves. If the Darkness follows this so-called king of yours, it’s because he served it before,",
      "audio": "audio/ch08/intro_06_00_lakin_4f2645e928.mp3"
     },
     {
      "who": "narrator",
      "text": "the Dwarven King answers hastily, perceiving that the hall was trembling and the ceiling crumbling in anticipation of the tide that was coming through the hallways.",
      "audio": "audio/ch08/intro_06_01_narrator_ef576b4df8.mp3"
     },
     {
      "who": "lakin",
      "text": "Go! Through that door! You will pass through some galleries, and then keep going ahead, always up. You will reach the surface! The path won’t be easy, but death is certain if you remain here. Now, quick! Tell me how I can help you one last time!",
      "audio": "audio/ch08/intro_06_02_lakin_0153792017.mp3"
     }
    ]
   ]
  },
  {
   "id": "start",
   "tab": "play",
   "title": "Starting the Adventure – The King Under the Mountain",
   "kicker": "Right after Setup",
   "paragraphs": [
    [
     {
      "who": "rules",
      "text": "After you have completed the Setup, start the adventure by opening the Book of Interactions to page 20. As a group, you and your partners must choose one option and proceed to its resolution. In case of a split decision, the Party Leader has the power to choose which of the tied choices will be taken.",
      "audio": "audio/ch08/start_00_00_rules_9d8ff3eb5b.mp3"
     }
    ]
   ],
   "choices": [
    "i93",
    "i94",
    "i95",
    "i96"
   ]
  },
  {
   "id": "guardian",
   "tab": "play",
   "title": "Special Event – The Cursed Guardian",
   "kicker": "Read when the Special Event is triggered (the book does not state the trigger)",
   "paragraphs": [
    [
     {
      "who": "narrator",
      "text": "And there you are, fighting another round in the endless battle against the Darkness. Although your body is exhausted, your determination still stands firm. At this point, whether because you better understand the fate of those captured by the enemy or because you have just became used to it, slaying a Creature of Darkness becomes easier and easier.",
      "audio": "audio/ch08/guardian_00_00_narrator_1364cac3df.mp3"
     }
    ],
    [
     {
      "who": "narrator",
      "text": "So, one kill after another, until you find yourself in front of the last of the Creatures. At that very moment, a buzz runs past your ears and an arrow hits your target, right between the eyes, taking the last blow from your grasp.",
      "audio": "audio/ch08/guardian_01_00_narrator_a93fc7a648.mp3"
     }
    ],
    [
     {
      "who": "volin",
      "text": "You don’t seem akin to these monsters. Therefore, I’ll give you the chance to introduce yourselves... Who are you in the service of?",
      "audio": "audio/ch08/guardian_02_00_volin_5d249ed2b7.mp3"
     },
     {
      "who": "narrator",
      "text": "threatens a voice.",
      "audio": "audio/ch08/guardian_02_01_narrator_4ced629c61.mp3"
     }
    ],
    [
     {
      "who": "narrator",
      "text": "Emerging from the shadows with a dramatic entrance, showing firmness and—unlike you—without the smallest sign of being tired, a man dressed as a ranger captures all of your attention as he readies another arrow from his quiver. Even more arresting is his strange, cadaveric arm...",
      "audio": "audio/ch08/guardian_03_00_narrator_d81e53ebee.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "The “Special Rule – Crumbling Path” is resolved and the current turn ends immediately. Then, move the Initiative Marker to the next card on the Initiative Track (but do not start that turn) and open the Book of Interactions to page 21. As a group, you and your partners must choose one option and proceed to its resolution. In case of a split decision, the Party Leader has the power to choose which of the tied choices will be taken.",
      "audio": "audio/ch08/guardian_04_00_rules_7746e74c0f.mp3"
     }
    ]
   ],
   "choices": [
    "i100",
    "i101",
    "i102"
   ]
  },
  {
   "id": "end-bracelet",
   "tab": "ending",
   "title": "End of the Adventure – The Cursed Bracelet",
   "kicker": "Read when the Corrupted Guardian is defeated (#100) or after #104",
   "paragraphs": [
    [
     {
      "who": "narrator",
      "text": "The archer’s body dissolves, scorched by flames that painlessly burn him, if such a thing is possible. Where once the man was, all that is left is a pile of ashes and a golden bracelet which, as if it was alive, jumps to your left wrist and closes with a pop. It is a perfect fit, and for some reason, you know that it will never leave you...",
      "audio": "audio/ch08/end-bracelet_00_00_narrator_bfe8437dfc.mp3"
     }
    ],
    [
     {
      "who": "narrator",
      "text": "You just need a few tries to realize it.",
      "audio": "audio/ch08/end-bracelet_01_00_narrator_6d25ac0c21.mp3"
     }
    ],
    [
     {
      "who": "tharmagar",
      "text": "We can worry ourselves about that later, my fellow. Time is pressing. The tremors haven’t stopped, and we haven’t reached the surface,",
      "audio": "audio/ch08/end-bracelet_02_00_tharmagar_b7b8cd6cc2.mp3"
     },
     {
      "who": "narrator",
      "text": "the sage draws your attention to the plight you’re facing, perceiving that you are glancing at the artifact with a strange look of wonder and fear.",
      "audio": "audio/ch08/end-bracelet_02_01_narrator_890b9fda66.mp3"
     }
    ],
    [
     {
      "who": "narrator",
      "text": "But he is right. Now isn’t the time to worry about it.",
      "audio": "audio/ch08/end-bracelet_03_00_narrator_5e6874af19.mp3"
     }
    ],
    [
     {
      "who": "narrator",
      "text": "Nodding, you both move ahead. However, the burden of Tharmagar’s old age is evident—a fact he tried so much to hide from you—and he can barely keep up the pace. The sage is already trespassing his limits, and you start to worry if he will manage to make it to the end...",
      "audio": "audio/ch08/end-bracelet_04_00_narrator_32a4fa3c6b.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "If any Hero has the “Cursebreaker” Status on their Campaign Log, they take the Cursed Bracelet card from the Adventure deck. If no Hero has it, the Party Leader takes it instead. Then, the Hero who took it must write down the “Guardian’s Curse” Outcome on their Campaign Log (Outcomes remain in effect for the entire Campaign unless some other effect changes them) and equip the Cursed Bracelet immediately. As long as that Hero has this Outcome on their Campaign Log, they cannot unequip the Cursed Bracelet.",
      "audio": "audio/ch08/end-bracelet_05_00_rules_aa4c03ca66.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "The adventure ends here. You may now proceed to the Camp Phase and read “After the Adventure – The Final Ascent”.",
      "audio": "audio/ch08/end-bracelet_06_00_rules_1ce71067aa.mp3"
     }
    ]
   ],
   "choices": [
    "final"
   ],
   "choiceNote": "During the Camp Phase"
  },
  {
   "id": "end-notover",
   "tab": "ending",
   "title": "End of the Adventure – This Is Not Over Yet",
   "kicker": "Read after #101, #102 or #105",
   "paragraphs": [
    [
     {
      "who": "volin",
      "text": "If you do not mind a last word...",
      "audio": "audio/ch08/end-notover_00_00_volin_2ec0f75c18.mp3"
     },
     {
      "who": "narrator",
      "text": "the archer asks. He doesn’t seem to be concerned at all with the imminent collapse of these halls.",
      "audio": "audio/ch08/end-notover_00_01_narrator_515dbd8224.mp3"
     },
     {
      "who": "volin",
      "text": "We are in the catacombs of a Sanctuary built long, long ago, honoring the Six. Being one of the few places like it that still stands, it has always attracted the attention of pilgrims from everywhere, which made it natural to establish a village at the foot of the mountain,",
      "audio": "audio/ch08/end-notover_00_02_volin_54888056ce.mp3"
     },
     {
      "who": "narrator",
      "text": "he continues.",
      "audio": "audio/ch08/end-notover_00_03_narrator_e4f1f5c588.mp3"
     }
    ],
    [
     {
      "who": "volin",
      "text": "I managed to slay all of the monstrosities that I found below ground, but I wasn’t able to do anything about those that are on the surface...",
      "audio": "audio/ch08/end-notover_01_00_volin_93dfe681db.mp3"
     },
     {
      "who": "narrator",
      "text": "he says, and you can imagine what request will follow:",
      "audio": "audio/ch08/end-notover_01_01_narrator_ea11e06cc1.mp3"
     },
     {
      "who": "volin",
      "text": "Hezechia is a peaceful place, distant, with few people... They won’t be able to survive without help from capable people like you,",
      "audio": "audio/ch08/end-notover_01_02_volin_d9b08557ea.mp3"
     },
     {
      "who": "narrator",
      "text": "he concludes, making a masked solicitation.",
      "audio": "audio/ch08/end-notover_01_03_narrator_13d246effb.mp3"
     }
    ],
    [
     {
      "who": "narrator",
      "text": "Nodding, you both follow his hint. However, the burden of Tharmagar’s old age is evident—a fact he tried so much to hide from you—and he can barely keep up the pace. The sage is already trespassing his limits, and you start to worry if he will manage to make it to the end...",
      "audio": "audio/ch08/end-notover_02_00_narrator_ab9785a32f.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "The adventure ends here. You may now proceed to the Camp Phase and read “After the Adventure – The Final Ascent”.",
      "audio": "audio/ch08/end-notover_03_00_rules_1ce71067aa.mp3"
     }
    ]
   ],
   "choices": [
    "final"
   ],
   "choiceNote": "During the Camp Phase"
  },
  {
   "id": "final",
   "tab": "ending",
   "title": "After the Adventure – The Final Ascent",
   "kicker": "Read during the Camp Phase",
   "paragraphs": [
    [
     {
      "who": "narrator",
      "text": "So you proceed through galleries, halls, and stairways with thousands of steps, under the constant threat of being swallowed by rolling avalanches of dust, pebbles, and murderous tendrils. Tharmagar’s strength is faltering, and in those moments when your legs are most required, you carry him on your shoulders, always escaping a tragic fate only narrowly.",
      "audio": "audio/ch08/final_00_00_narrator_5c5a46bd1a.mp3"
     }
    ],
    [
     {
      "who": "narrator",
      "text": "You even imagine that the end of you both has arrived. And not only once or twice. However, powered by the persevering instinct that every living creature has inside of it, deep down, that makes the impossible possible in order to survive, you pass through the labyrinthine paths amidst dust and confusion, blind as moles.",
      "audio": "audio/ch08/final_01_00_narrator_32f9c79c6a.mp3"
     }
    ],
    [
     {
      "who": "narrator",
      "text": "Guiding yourselves like those creatures—or merely by chance—you take every turn that, somehow, leads you towards the surface, until you reach a place of corridors and halls crammed with sarcophagi: a catacomb where, at last, the tremors vanish and you have the feeling of treading over steady ground for the first time in a long time.",
      "audio": "audio/ch08/final_02_00_narrator_f7c00c5ecd.mp3"
     }
    ],
    [
     {
      "who": "narrator",
      "text": "Fresh corpses of some Creatures of Darkness lie everywhere, mingled with the butchered remains of people dressed as priests. The macabre scene repeats itself in the Great Hall of the Sanctuary, just a flight of stairs above, where thick columns of stone hold an arched ceiling more than three stories tall.",
      "audio": "audio/ch08/final_03_00_narrator_f24d66661e.mp3"
     }
    ],
    [
     {
      "who": "narrator",
      "text": "Resting against an old altarpiece topped by an animal statue destroyed above its ankles, the sage finally gives in, despite the fact that you are the winners. He lets himself enjoy a fresh night breeze running through the hall, howling like a mountain wolf.",
      "audio": "audio/ch08/final_04_00_narrator_9968c61bfa.mp3"
     }
    ],
    [
     {
      "who": "narrator",
      "text": "A feeling that you had forgotten just how it felt.",
      "audio": "audio/ch08/final_05_00_narrator_6e8c9172ff.mp3"
     }
    ],
    [
     {
      "who": "narrator",
      "text": "However, the wind doesn’t bring only relief, but also the desperate screams of a village that is suffering its worst nightmare, just a few hundred yards down the mountain...",
      "audio": "audio/ch08/final_06_00_narrator_587df36504.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "Rewards: Each player chooses and unlocks a level 1 Hero Skill or Dungeon Role Skill for their Hero.",
      "audio": "audio/ch08/final_07_00_rules_94486f7d57.mp3"
     }
    ]
   ]
  },
  {
   "id": "i93",
   "tab": "interaction",
   "title": "#93: Ask him for help against the next wave of monsters",
   "paragraphs": [
    [
     {
      "who": "narrator",
      "text": "Feeling fatigued by the succession of battles, you ask him for help to deal with the next wave of enemies. Consenting with a nod of his ghostly head, the Dwarven King takes a stand at the rubble bridge and howls the mightiest roar you’ve ever heard, miraculously making his spectral silhouette flesh again.",
      "audio": "audio/ch08/i93_00_00_narrator_a203816ba2.mp3"
     },
     {
      "who": "lakin",
      "text": "Now go forth, my fellows! Go forth and remember this, my last stand!",
      "audio": "audio/ch08/i93_00_01_lakin_9fe43743d1.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "The Party Leader gains FOCUS 2. Remove Bridge BR2-B, Maps C2-F, C5-B, B2-F, and the Dungeon Tray 02 that is now empty from the board, along with any Monsters on top of them. Consider those Monsters defeated.",
      "audio": "audio/ch08/i93_01_00_rules_aa197d19ba.mp3"
     }
    ]
   ]
  },
  {
   "id": "i94",
   "tab": "interaction",
   "title": "#94: Ask to go through the door with his family name",
   "paragraphs": [
    [
     {
      "who": "narrator",
      "text": "You ask the Dwarven King to let you pass through the heavy iron door that bears his family name.",
      "audio": "audio/ch08/i94_00_00_narrator_c6fceba96f.mp3"
     },
     {
      "who": "lakin",
      "text": "The Forgotten Halls of Xereth are not pathways, my fellows, but a fate. One that is better to avoid. Besides, even if I should wish to, I cannot open the door right now...",
      "audio": "audio/ch08/i94_00_01_lakin_b0d49e7c5e.mp3"
     },
     {
      "who": "narrator",
      "text": "he says, turning his attention completely to you...",
      "audio": "audio/ch08/i94_00_02_narrator_b25db746d4.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "If any Hero has the Dwarven King’s Sword Adventure Item (stored in their bag or equipped), read Interaction #97. Otherwise, read the resolution below:",
      "audio": "audio/ch08/i94_01_00_rules_ccfc8db866.mp3"
     }
    ],
    [
     {
      "who": "lakin",
      "text": "My treasure most dear and precious, the sword that is the symbol of my royal birthright, was stolen from me just before you arrived. That was why I woke up from my slumber. It is the only key that may open that keyhole,",
      "audio": "audio/ch08/i94_02_00_lakin_6b5667f649.mp3"
     },
     {
      "who": "narrator",
      "text": "he explains, and Tharmagar and you instantly connect the dots in your heads: the tomb robber!",
      "audio": "audio/ch08/i94_02_01_narrator_6616398a69.mp3"
     },
     {
      "who": "lakin",
      "text": "However, I will not let you down. If I cannot help you with this door, at least something from my royal treasure should be of use...",
      "audio": "audio/ch08/i94_02_02_lakin_559a73c962.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "Place 2 Chest tokens on Map B3-F as indicated in the following illustration. These Chests are safe and the Heroes don’t need to roll the Trap Die to open them.",
      "audio": "audio/ch08/i94_03_00_rules_bab60a42cf.mp3"
     }
    ]
   ],
   "choices": [
    "i97"
   ],
   "choiceNote": "Only if a Hero has the Dwarven King’s Sword (read #97 instead of the resolution). Chest illustration: Adventure Book page 100."
  },
  {
   "id": "i95",
   "tab": "interaction",
   "title": "#95: Ask him about the most precious treasure which he mentioned",
   "paragraphs": [
    [
     {
      "who": "narrator",
      "text": "Curious about the mysterious “most precious treasure,” you ask the Dwarven King what it was.",
      "audio": "audio/ch08/i95_00_00_narrator_3bc4cfadd3.mp3"
     },
     {
      "who": "lakin",
      "text": "What could it be, if not the sword of my ancestors, passed down from father to son since the first of my dynasty?",
      "audio": "audio/ch08/i95_00_01_lakin_3a672a15f3.mp3"
     },
     {
      "who": "narrator",
      "text": "he explains, turning his attention completely to you...",
      "audio": "audio/ch08/i95_00_02_narrator_a1eec08b32.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "If any Hero has the Dwarven King’s Sword Adventure Item (stored in their bag or equipped), read Interaction #97. Otherwise, read the resolution below:",
      "audio": "audio/ch08/i95_01_00_rules_ccfc8db866.mp3"
     }
    ],
    [
     {
      "who": "lakin",
      "text": "And just as it was stolen from me, I woke from my slumber. I know that it is still there, but after all we spoke of, I fear that I will not be able to recover it anymore,",
      "audio": "audio/ch08/i95_02_00_lakin_f11cac2837.mp3"
     },
     {
      "who": "narrator",
      "text": "Lakin concludes as he draws from behind his throne a glittering object with his spectral hands.",
      "audio": "audio/ch08/i95_02_01_narrator_a62c0faa19.mp3"
     },
     {
      "who": "lakin",
      "text": "This, by the way, is its scabbard. A true art-piece of my folk, and an artifact on its own merit.",
      "audio": "audio/ch08/i95_02_02_lakin_c5a37da82d.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "The Hero of the Party Leader’s choice takes the Undermountain Scabbard card from the Adventure deck.",
      "audio": "audio/ch08/i95_03_00_rules_59b0458121.mp3"
     }
    ]
   ],
   "choices": [
    "i97"
   ],
   "choiceNote": "Only if a Hero has the Dwarven King’s Sword (read #97 instead of the resolution)."
  },
  {
   "id": "i96",
   "tab": "interaction",
   "title": "#96: Ask for any equipment that he can share",
   "paragraphs": [
    [
     {
      "who": "narrator",
      "text": "Not wanting to waste any time, or to abuse the generous hospitality of the Dwarven King, you ask him for anything he can give you that might be useful in the journey ahead.",
      "audio": "audio/ch08/i96_00_00_narrator_a6977e2971.mp3"
     },
     {
      "who": "lakin",
      "text": "Anything within my power, my fellows. Quick, take what you need, and brace yourselves: the fight will be hard!",
      "audio": "audio/ch08/i96_00_01_lakin_15b792c8c5.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "The Party Leader gains FOCUS 2 and then searches the Chest deck for a card of their choice and gives it to a Hero in the party.",
      "audio": "audio/ch08/i96_01_00_rules_137c24c1b7.mp3"
     }
    ]
   ]
  },
  {
   "id": "i97",
   "tab": "interaction",
   "title": "#97: A Hero has the Dwarven King’s Sword",
   "kicker": "From #94 or #95",
   "paragraphs": [
    [
     {
      "who": "narrator",
      "text": "...but the ghost has eyes only for the beautiful sword in your possession.",
      "audio": "audio/ch08/i97_00_00_narrator_fc3c9980c3.mp3"
     },
     {
      "who": "lakin",
      "text": "Wait... But that is my sword, I’m sure! What are you doing with it? Don’t tell me that you...",
      "audio": "audio/ch08/i97_00_01_lakin_25ab60b53a.mp3"
     },
     {
      "who": "narrator",
      "text": "he muses, but you promptly explain, undoing the misunderstanding: You didn’t steal the sword—or better: not from him.",
      "audio": "audio/ch08/i97_00_02_narrator_3e605cb01c.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "You face a dilemma: As a group, you and your partners must choose one option and proceed to its resolution. In case of a split decision, the Party Leader has the power to choose which of the tied choices will be taken.",
      "audio": "audio/ch08/i97_01_00_rules_d72bb20d7e.mp3"
     }
    ]
   ],
   "choices": [
    "i98",
    "i99"
   ]
  },
  {
   "id": "i98",
   "tab": "interaction",
   "title": "#98: Offer to give the sword back to him",
   "paragraphs": [
    [
     {
      "who": "narrator",
      "text": "Having found its true owner, you offer to give the sword back to the Dwarven King.",
      "audio": "audio/ch08/i98_00_00_narrator_e6824c1357.mp3"
     },
     {
      "who": "lakin",
      "text": "You honor me, fellow, and I strongly thank you. However, if I take it now, my spirit would fall again into slumber, and I still have one last battle to fight. So keep it with you. I will be happy to know it is in good hands!",
      "audio": "audio/ch08/i98_00_01_lakin_4263445128.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "The Party Leader gains FOCUS 2 and writes down “The Honorable Gesture” Status on their Campaign Log. As long as they have it (Statuses are removed during the next Camp Phase), whenever they take a Recall Action, they also gain FOCUS 1.",
      "audio": "audio/ch08/i98_01_00_rules_3f27816aa8.mp3"
     }
    ]
   ]
  },
  {
   "id": "i99",
   "tab": "interaction",
   "title": "#99: Pretend not to understand and keep the sword",
   "paragraphs": [
    [
     {
      "who": "lakin",
      "text": "Nevertheless, the sword doesn’t matter to me anymore, my fellow. I needed it to go back to my rest, but I still have one last battle to fight. So keep it with you. I will be happy to know it is in good hands!",
      "audio": "audio/ch08/i99_00_00_lakin_2ff2084d4d.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "The Party Leader gains FOCUS 2 and writes down the “Play Dumb” Status on their Campaign Log. As long as they have it (Statuses are removed during the next Camp Phase), they may choose not to gain any Curse Cubes when they take a Recall Action.",
      "audio": "audio/ch08/i99_01_00_rules_404225236f.mp3"
     }
    ]
   ]
  },
  {
   "id": "i100",
   "tab": "interaction",
   "title": "#100: Threaten the man back, demanding he introduces himself",
   "paragraphs": [
    [
     {
      "who": "narrator",
      "text": "Feeling insulted, you threaten the man back, demanding the respect that is due to a battle-hardened adventurer like you. Without even listening to your demand to the end, the archer shoots you, fully hitting your chest. Then, releasing the corrupted, mysterious powers within him, his body ignites into an emerald flame that burns without causing any pain...",
      "audio": "audio/ch08/i100_00_00_narrator_e96b8f3611.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "The Party Leader gains FOCUS 2 and takes 4 damage (preventable). Additionally, if they follow the Path of Strength, they also gain SHIELD 4 OR recover all of their Health, their choice.",
      "audio": "audio/ch08/i100_01_00_rules_21c0ae1c3b.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "Then, summon the Jim Volin Scenario Monster as a Commander with CP 3+Players (draw the appropriate number of Commander Attack cards as normal). Replace the Interaction token with a Skeleton Archer miniature to represent him. When the Corrupted Guardian is defeated, read “End of the Adventure – The Cursed Bracelet” on page 39.",
      "audio": "audio/ch08/i100_02_00_rules_498d49d0c8.mp3"
     }
    ]
   ],
   "choices": [
    "end-bracelet"
   ],
   "choiceNote": "When the Corrupted Guardian is defeated"
  },
  {
   "id": "i101",
   "tab": "interaction",
   "title": "#101: Introduce yourselves as volunteers for the Doctrine",
   "paragraphs": [
    [
     {
      "who": "narrator",
      "text": "You show him your volunteer badge, explaining your link to Tharmagar and your escort mission.",
      "audio": "audio/ch08/i101_00_00_narrator_b1b17d14e3.mp3"
     },
     {
      "who": "volin",
      "text": "It seems to me, however, that you are a little far from the road to Valarai, aren’t you?",
      "audio": "audio/ch08/i101_00_01_volin_fef5feb748.mp3"
     },
     {
      "who": "narrator",
      "text": "the archer questions, examining the piece’s details.",
      "audio": "audio/ch08/i101_00_02_narrator_2d02d9e67c.mp3"
     },
     {
      "who": "volin",
      "text": "However, my job here is prevent the entrance of curious people and prevent the monsters from leaving—not the opposite. Thus, you have my blessing to proceed in peace,",
      "audio": "audio/ch08/i101_00_03_volin_30fcd9ea38.mp3"
     },
     {
      "who": "narrator",
      "text": "he continues, whispering a prayer over the badge.",
      "audio": "audio/ch08/i101_00_04_narrator_729c73f2a1.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "The Party Leader writes down the “Blessing of the Guardian” Aura on their Campaign Log. As long as they have it (Auras are removed when you receive a Trauma Cube or another Aura), whenever any Hero Expends an AC for any effect other than FATIGUE (as to gain an additional Move Action in a turn, for example) they also gain SHIELD 2. Then, read “End of the Adventure – This Is Not Over Yet” on page 39.",
      "audio": "audio/ch08/i101_01_00_rules_77449a02a8.mp3"
     }
    ]
   ],
   "choices": [
    "end-notover"
   ],
   "choiceNote": "Continue"
  },
  {
   "id": "i102",
   "tab": "interaction",
   "title": "#102: Introduce yourselves as under the protection of the Dwarven King",
   "paragraphs": [
    [
     {
      "who": "narrator",
      "text": "You introduce yourselves as lost adventures who, after a long journey and many battles, encountered the Dwarven King, James Lakin, and were pointed in this direction by him.",
      "audio": "audio/ch08/i102_00_00_narrator_6c2a5bb253.mp3"
     },
     {
      "who": "volin",
      "text": "The patriarch? You’ve met him?",
      "audio": "audio/ch08/i102_00_01_volin_96f9f06472.mp3"
     },
     {
      "who": "narrator",
      "text": "the man lowers his bow, changing the tone of his speech. You swear that you even see a little smile.",
      "audio": "audio/ch08/i102_00_02_narrator_3781ed65c3.mp3"
     },
     {
      "who": "volin",
      "text": "Please, help me find him! He’s the only one who can help me!",
      "audio": "audio/ch08/i102_00_03_volin_3bba73605b.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "If any Hero has the Dwarven King’s Sword Adventure Item (stored in their Bag or equipped), read Interaction #103. Otherwise, read the resolution below:",
      "audio": "audio/ch08/i102_01_00_rules_6e32a688ce.mp3"
     }
    ],
    [
     {
      "who": "narrator",
      "text": "Regretfully, you explain to the archer that the patriarch is out of reach now because the paths from whence you came are buried. The information makes the man’s complexion frown again.",
      "audio": "audio/ch08/i102_02_00_narrator_8cafb5ae92.mp3"
     },
     {
      "who": "volin",
      "text": "I fear there’s no salvation for me anymore, then...",
      "audio": "audio/ch08/i102_02_01_volin_9a51f6d2a0.mp3"
     },
     {
      "who": "narrator",
      "text": "the man mourns, crestfallen.",
      "audio": "audio/ch08/i102_02_02_narrator_3324730000.mp3"
     },
     {
      "who": "volin",
      "text": "Anyway, it doesn’t matter now, to you. What matters is my job here is to prevent the entrance of curious people and prevent the monsters from leaving—and not the opposite. Thus, you have my blessing to proceed in peace,",
      "audio": "audio/ch08/i102_02_03_volin_2a5ba12e6a.mp3"
     },
     {
      "who": "narrator",
      "text": "he continues, stepping aside to clear the way.",
      "audio": "audio/ch08/i102_02_04_narrator_f75f3c2726.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "The Party Leader writes down the “True-hearted Blessing” Aura on their Campaign Log. As long as they have it (Auras are removed when you receive a Trauma Cube or another Aura), whenever any Hero Expends an AC for any effect other than FATIGUE (as to gain an additional Move Action in a turn, for example) they also gain FOCUS 1. Then, read “End of the Adventure – This Is Not Over Yet” on page 39.",
      "audio": "audio/ch08/i102_03_00_rules_1dc8931d60.mp3"
     }
    ]
   ],
   "choices": [
    "i103",
    "end-notover"
   ],
   "choiceNote": "#103 only if a Hero has the Dwarven King’s Sword; otherwise continue to the ending."
  },
  {
   "id": "i103",
   "tab": "interaction",
   "title": "#103: Turns out that the Dwarven King’s symbol of power is with you...",
   "kicker": "From #102, if a Hero has the Dwarven King’s Sword",
   "paragraphs": [
    [
     {
      "who": "narrator",
      "text": "You explain to the archer that the patriarch is out of reach now but, by his good fortune, the majesty of the King Under the Mountain is in your hands.",
      "audio": "audio/ch08/i103_00_00_narrator_c21601efaf.mp3"
     },
     {
      "who": "volin",
      "text": "Really? If you hold the King’s sword, you have the power to lift the curse that ruined my life!",
      "audio": "audio/ch08/i103_00_01_volin_f617621091.mp3"
     },
     {
      "who": "narrator",
      "text": "he explains with the cheer of renewed hope.",
      "audio": "audio/ch08/i103_00_02_narrator_810f15bd41.mp3"
     },
     {
      "who": "volin",
      "text": "However, I need to warn you: my freedom won’t be free. The curse you take from me will fall upon you. Slowly, with the passing of seasons, your body will reject the light, and it won’t be long before you to start seeking refuge underground, running from it, as I have done,",
      "audio": "audio/ch08/i103_00_03_volin_1633860742.mp3"
     },
     {
      "who": "narrator",
      "text": "he finishes with the sorrow of his fate wrought upon his voice.",
      "audio": "audio/ch08/i103_00_04_narrator_92357f033c.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "You face a dilemma: The player who holds the Dwarven King’s Sword Adventure Item must choose an option and proceed to its resolution.",
      "audio": "audio/ch08/i103_01_00_rules_6d4b2309f8.mp3"
     }
    ]
   ],
   "choices": [
    "i104",
    "i105"
   ],
   "choiceNote": "The player who holds the Dwarven King’s Sword chooses."
  },
  {
   "id": "i104",
   "tab": "interaction",
   "title": "#104: Accept the consequences and break the curse",
   "paragraphs": [
    [
     {
      "who": "narrator",
      "text": "With his eyes full of tears, the archer introduces himself as Jim Volin, and falls to his knees on the ground in gratitude. Reciting the words he teaches you, you extend the sword toward him, and watch in surprise as his body bursts into an emerald flame like an effigy set on fire. To your amazement, it is a fire that burns without hurting him...",
      "audio": "audio/ch08/i104_00_00_narrator_3b107aa5b1.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "The player who holds the Dwarven King’s Sword must write down the “Cursebreaker” Outcome on their Campaign Log (Outcomes remain in effect for the entire Campaign unless some other effect changes them). Then, read “End of the Adventure – The Cursed Bracelet” on page 39.",
      "audio": "audio/ch08/i104_01_00_rules_d1e32d59d4.mp3"
     }
    ]
   ],
   "choices": [
    "end-bracelet"
   ],
   "choiceNote": "Continue"
  },
  {
   "id": "i105",
   "tab": "interaction",
   "title": "#105: Lament for the archer, but don’t break the curse",
   "paragraphs": [
    [
     {
      "who": "narrator",
      "text": "Thanking the man for his honesty, you lament for his fate but explain that you cannot help him because you also have a role to fulfill.",
      "audio": "audio/ch08/i105_00_00_narrator_c6e7f379bf.mp3"
     },
     {
      "who": "volin",
      "text": "I understand… Unfortunately, the price for my freedom is too high to be paid by anyone,",
      "audio": "audio/ch08/i105_00_01_volin_58dcd3fedd.mp3"
     },
     {
      "who": "narrator",
      "text": "the archer concedes.",
      "audio": "audio/ch08/i105_00_02_narrator_db0293cdcf.mp3"
     },
     {
      "who": "volin",
      "text": "However, though I regret knowing that my fate will last, I give you my blessing to proceed in peace,",
      "audio": "audio/ch08/i105_00_03_volin_9695423ffd.mp3"
     },
     {
      "who": "narrator",
      "text": "he says, stepping aside to clear the way.",
      "audio": "audio/ch08/i105_00_04_narrator_6e5445c9b1.mp3"
     }
    ],
    [
     {
      "who": "rules",
      "text": "The Party Leader writes down the “Blessing of Good Fortune” Aura on their Campaign Log. As long as they have it (Auras are removed when you receive a Trauma Cube or another Aura), whenever any Hero Expends an AC for any effect other than FATIGUE (as to gain an additional Move Action in a turn, for example) they also recall 1 AC. Then, read “End of the Adventure – This Is Not Over Yet” on page 39.",
      "audio": "audio/ch08/i105_01_00_rules_1a091931e9.mp3"
     }
    ]
   ],
   "choices": [
    "end-notover"
   ],
   "choiceNote": "Continue"
  }
 ],
 "interactions": [
  {
   "label": "The King Under the Mountain",
   "page": 20,
   "image": "img/boi-20.jpg",
   "when": "At the start of the adventure, right after Setup",
   "options": [
    "i93",
    "i94",
    "i95",
    "i96"
   ],
   "hotspots": {
    "i93": [
     26,
     13
    ],
    "i94": [
     17,
     29
    ],
    "i95": [
     71,
     16
    ],
    "i96": [
     83,
     34
    ]
   }
  },
  {
   "label": "The Cursed Guardian",
   "page": 21,
   "image": "img/boi-21.jpg",
   "when": "During the Special Event – The Cursed Guardian",
   "options": [
    "i100",
    "i101",
    "i102"
   ],
   "hotspots": {
    "i100": [
     70,
     10
    ],
    "i101": [
     32,
     12
    ],
    "i102": [
     70,
     44
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
    "RESENTFUL",
    "DEFEATED"
   ],
   "bad": [
    "DEFEATED"
   ],
   "alerts": {
    "DEFEATED": "The precious cargo is lost, so the adventure ends in failure."
   }
  },
  {
   "type": "status",
   "id": "archer",
   "label": "The archer (Jim Volin)",
   "states": [
    "NOT MET",
    "FIGHTING",
    "DEFEATED",
    "LET YOU PASS"
   ],
   "bad": [
    "FIGHTING"
   ],
   "alerts": {
    "FIGHTING": "Commander with CP 3+Players. When the Corrupted Guardian is defeated, read “The Cursed Bracelet”.",
    "DEFEATED": "Read “End of the Adventure – The Cursed Bracelet”.",
    "LET YOU PASS": "Read “End of the Adventure – This Is Not Over Yet”, unless #104 sent you to “The Cursed Bracelet”."
   }
  },
  {
   "type": "checks",
   "id": "sword",
   "label": "Dwarven King’s Sword",
   "items": [
    "A Hero has the Sword (from Chapter 07)",
    "Cursebreaker Outcome written (#104)"
   ],
   "note": "With the Sword, #94/#95 lead to #97 and #102 leads to #103."
  }
 ],
 "rewards": "Each player chooses and unlocks a level 1 <b>Hero Skill</b> or <b>Dungeon Role Skill</b> for their Hero.",
 "next": "Chapter 09 – The Battle for Hezechia (page 40)"
};
