// Quick-reference rules lookup for Chronicles of Drunagor: Age of Darkness (Rulebook v1.5),
// paraphrased, with corrections from the Remake Errata v1.7 (July 2025) marked "(errata)".
// "page" = rulebook page number.
window.RULES = [
  {
    "title": "Campaign and game structure",
    "category": "Setup & rounds",
    "tags": ["campaign", "chapter", "adventure", "structure", "overview", "how to play", "co-op", "cooperative"],
    "text": "A Campaign is a series of Chapters, each one an Adventure, played by the same Heroes. Between Adventures the party usually goes through a <b>Camp Phase</b> to heal, collect rewards and prepare. If even <b>one</b> Hero falls, the Adventure is failed and must be replayed from the start; losing has no other penalty.",
    "page": 6
  },
  {
    "title": "Setting up an Adventure",
    "category": "Setup & rounds",
    "tags": ["setup", "set up", "preparation", "start game", "game setup", "begin"],
    "text": "<ul><li>Interactions Book in reach; shuffle the Chest deck (Trap Die beside it).</li><li>D20, Condition tokens, Darkness tiles and cubes nearby; all Rune tokens in the Rune bag.</li><li>Initiative Track + Initiative Marker; Monster Status board with 6 White Cubes.</li><li>Follow the Adventure Book setup; sort Monster cards by color and rank.</li><li>Put the Adventure's Rune card at the bottom of the track and each Hero's Initiative card in their Dungeon Role slot.</li><li>Build the First Setup and read the grey box.</li></ul>Consumables discarded in the previous Adventure are shuffled back into the Chest deck only now.",
    "page": 10
  },
  {
    "title": "Rounds and turns",
    "category": "Setup & rounds",
    "tags": ["round", "turn", "turn order", "sequence", "game round", "end of round"],
    "text": "Each round, every card on the Initiative Track (Heroes, Monsters, attack cards and the Rune card) takes its turn in order. When the last card (normally the Rune card) is resolved, the round ends and the Marker returns to the top. The game continues until the Adventure is completed, a Hero falls, or the last Rune is drawn.",
    "page": 12
  },
  {
    "title": "Initiative Track",
    "category": "Setup & rounds",
    "tags": ["initiative", "turn order", "track", "who goes first", "order", "rune slot", "initiative marker", "activation order"],
    "text": "The track sets the order of activation: read <b>left to right along the top row, then the bottom row</b>. Hero cards go in their Dungeon Role slot; Monster cards go above or below their matching Rune slot (arrow on the card); the Rune card is at the end. If several cards share a Rune slot, the <b>Party Leader</b> chooses their order. Several Monsters of the same type act in the color order of the Monster Status board (yellow first).",
    "page": 12
  },
  {
    "title": "Party Leader",
    "category": "Setup & rounds",
    "tags": ["party leader", "leader", "tie breaker", "tie", "who decides", "leadership"],
    "text": "The Party Leader breaks ties and makes some decisions (e.g., order of cards in the same Rune slot, where Darkness or shoved Monsters go). It is set by Dungeon Role, in priority: <b>Leader → Defender → Support → Controller → Striker</b>.",
    "page": 33
  },
  {
    "title": "Board Setups",
    "category": "Setup & rounds",
    "tags": ["setup", "first setup", "map", "board", "room", "tiles", "orientation", "dotted line", "player count"],
    "text": "The First Setup is built before play; each new Door reveals another Setup. While a Setup is being built the game is paused, and there is no turn change afterwards. Keep the same table orientation as the First Setup (no 90° turns) and connect it at the yellow arrow. Place everything above the dotted line plus the entries for each player count up to your party size.",
    "page": 16
  },
  {
    "title": "Doors and their special features",
    "category": "Setup & rounds",
    "tags": ["door", "doors", "special rule", "special event", "special mechanic", "endgame trigger", "interaction trigger", "grey box", "gray box", "folding door"],
    "text": "Each Door card hides the next Setup and may carry a grey box: <ul><li><b>Special Rules</b> change general rules for as long as stated.</li><li><b>Special Events</b> are effects that fire on a trigger (sometimes just opening the Door, e.g. traps).</li><li><b>Special Mechanics</b> are extra challenges to resolve.</li><li><b>Interaction / Endgame Triggers</b> send you to an Interaction or the Adventure's end when a game state is reached (often all revealed Monsters defeated).</li></ul>",
    "page": 17
  },
  {
    "title": "Monster summoned by a Door during your turn",
    "category": "Setup & rounds",
    "tags": ["door", "summon", "new monster", "initiative", "act this round", "spawned monster"],
    "text": "If a Setup places a Monster card after your Hero on the Initiative Track, that Monster acts this round when the Marker reaches it. If it lands before your Hero, it does not act until the next round.",
    "page": 16
  },
  {
    "title": "Winning or losing an Adventure",
    "category": "Setup & rounds",
    "tags": ["win", "lose", "victory", "defeat", "game over", "failure", "end game", "losing", "winning"],
    "text": "You win by completing the Adventure's goal (reaching its \"End of the Adventure\" entry). You lose immediately when: <ul><li>a Hero gets their <b>6th Curse Cube</b>;</li><li>a Hero gets their <b>2nd Trauma Cube</b>;</li><li>the <b>last Rune</b> is drawn from the bag;</li><li>or an Adventure-specific goal fails.</li></ul>Some effects raise the cube limits.",
    "page": 19
  },
  {
    "title": "Failing and restarting an Adventure",
    "category": "Setup & rounds",
    "tags": ["fail", "failure", "restart", "reset", "replay", "lost adventure", "try again"],
    "text": "Undo all progress from the failed attempt: return Equipment gained and unused Consumables obtained during it, and recover from the Consumable discard pile any Consumables you started with. Then replay the Chapter from the beginning. There is no other Campaign penalty.",
    "page": 19
  },
  {
    "title": "Concluding an Adventure",
    "category": "Setup & rounds",
    "tags": ["end of the adventure", "finish", "complete", "success", "after the adventure", "victory"],
    "text": "An Endgame Trigger or Interaction sends you to the \"End of the Adventure\" entry. After reading it, return the miniatures and Setups to the box but keep your Hero board and the Initiative Track as they are; then usually proceed to the Camp Phase.",
    "page": 19
  },
  {
    "title": "One-Shot Adventures",
    "category": "Setup & rounds",
    "tags": ["one-shot", "one shot", "standalone", "single game", "level up", "leveling", "oneshot"],
    "text": "Any non-sequential Adventure listed as One-Shot Friendly can be played on its own. Start each Hero with their board, two Starting Gear and Dungeon Role cards I and II, then apply the rewards from Table 1.1 one at a time (e.g. Chapter 02: 1 Hero Skill Level 1; Chapter 15: 4 Skill L1, 2 Camp Items L01, 4 Class Abilities, 2 Skill L2, 2 Camp Items L02).",
    "page": 52
  },
  {
    "title": "Player versus Player (Battlegrounds)",
    "category": "Setup & rounds",
    "tags": ["pvp", "player versus player", "battleground", "competitive", "versus", "1v1", "2v2"],
    "text": "No Rune card unless the Battleground says so. Everyone rolls a d20 for Initiative; Heroes alternate between teams on the track. Dungeon Roles aren't used fully: instead each Hero may Expend 1 AC as a Cube Action for <b>HEAL 2 AND CLEANSE 1</b>. Monsters target the <b>Nearest Hero</b> (Strongest breaks ties). Limit is 5 Curse Cubes per Hero; Trauma limit is shared by a team: 2 per Hero combined.",
    "page": 53
  },
  {
    "title": "Conditions in Player versus Player",
    "category": "Setup & rounds",
    "tags": ["pvp", "bleed pvp", "burn pvp", "poison pvp", "stealth pvp", "battleground conditions"],
    "text": "In PvP, BLEED, BURN and POISON deal their damage immediately and are then removed (all BURN tokens at once, so BURN 2 = 2 damage). STEALTH doesn't stop targeting; attackers without immunity get <b>-5 HIT</b> against a hidden Hero, and Surprise still gives DOUBLE DAMAGE.",
    "page": 53
  },
  {
    "title": "Hero board",
    "category": "Setup & rounds",
    "tags": ["hero board", "player board", "character sheet", "health track", "proficiencies", "hero's path", "path", "slots"],
    "text": "Shows the Health Track (start on the dark red space with a pink cube), two Focus Abilities, the Available and Expended Action Cube boxes, 8 starting Skills (Melee/Ranged/Agility/Wisdom) plus 1 Passive, Equipment slots, Dungeon Role, extra Skill slots, proficiencies, the bag, Class Abilities and the Hero's Path (used by some Skill Challenges).",
    "page": 7
  },
  {
    "title": "Hero turn",
    "category": "Actions",
    "tags": ["hero turn", "my turn", "turn steps", "what can i do", "turn structure", "actions per turn"],
    "text": "<ul><li>1. Resolve your Conditions (if knocked out by them, you catch your breath at once and act).</li><li>2. Start-of-turn Passive Skills trigger.</li><li>3. In any order: one <b>free Move Action</b>, up to <b>2 Cube Actions</b>, and Minor Actions (each type once, not while engaged except Focus/Consumable).</li><li>4. Optionally take a Recall Action.</li></ul>All actions are optional.",
    "page": 13
  },
  {
    "title": "Move Action",
    "category": "Actions",
    "tags": ["move", "movement", "walk", "move 3", "free move", "movement points", "how far"],
    "text": "Each turn a Hero gets one free Move Action = <b>Move 3</b> (3 squares), usable before, after or between Cube Actions. Movement is orthogonal or diagonal in any mix. Taking a Cube Action or Reaction ends your current movement (remaining points are lost); Minor Actions do not (but see Focus errata).",
    "page": 22
  },
  {
    "title": "Additional Move Action",
    "category": "Actions",
    "tags": ["extra move", "additional move", "buy movement", "expend move", "move again", "sprint"],
    "text": "Expend any Action Cube to take another Move Action (Move 3). This counts as one of your two Cube Actions, so you can do it at most twice per turn.",
    "page": 22
  },
  {
    "title": "Cube Actions",
    "category": "Actions",
    "tags": ["cube action", "cube actions", "two actions", "skill use", "spend cube", "actions"],
    "text": "Any action paid for with an Action Cube (using a Skill, or Expending a cube for an extra Move). A Hero may take <b>up to 2</b> per turn. Taking one ends any movement in progress. <b>Reactions are not Cube Actions</b>, even on your own turn.",
    "page": 55
  },
  {
    "title": "Minor Actions",
    "category": "Actions",
    "tags": ["minor action", "minor actions", "free action", "bonus action"],
    "text": "Six Minor Actions: Exchange Items, Interact, Open a Door, Search a Chest, Use Focus Ability, Use a Consumable Item. Each can be taken <b>once per turn</b>, they don't cost cubes and don't end your movement. They <b>can't</b> be taken while engaged, except Use Focus Ability and Use a Consumable Item.",
    "page": 29
  },
  {
    "title": "Exchange Items",
    "category": "Actions",
    "tags": ["exchange", "equip", "unequip", "swap item", "give item", "take item", "trade", "pass item"],
    "text": "Minor Action; do <b>one</b> of: equip/unequip or swap an equipped item with a same-type card in your bag; give a bag card to an adjacent Hero; or take a card from an adjacent willing Hero's bag (use it now or bag it). You can't exchange an item whose slot holds an Action Cube. Double-sided items keep their current face. If your bag is full you may discard an item to make room.",
    "page": 29
  },
  {
    "title": "Use a Consumable Item",
    "category": "Actions",
    "tags": ["consumable", "potion", "scroll", "drink", "use item", "discard item"],
    "text": "Minor Action, allowed even while engaged. Only one Consumable per turn. The item must be in your bag (Fruit of Life is on your board). After use, put it in the discard pile; it is shuffled back into the Chest deck at the start of the next Adventure.",
    "page": 29
  },
  {
    "title": "Interact",
    "category": "Actions",
    "tags": ["interact", "interaction", "interaction token", "story", "choice", "resolution", "interactions book"],
    "text": "Minor Action while adjacent to an Interaction token (not allowed if a Monster is adjacent to you). Open the Interactions Book at the listed page, choose an option not already chosen this Adventure, and read its numbered Resolution in the Adventure Book. Then remove one charge (remove the token at 0). A Hero can use the same token only once per turn; other Heroes may use it the same round.",
    "page": 30
  },
  {
    "title": "Open a Door",
    "category": "Actions",
    "tags": ["open door", "door", "unlock", "next room", "reveal"],
    "text": "Minor Action while adjacent to a Door: unfold the card, read the story and any Special Rules/Events, then add the Setup. The game pauses during the Setup; it does <b>not</b> interrupt your movement, so unspent points from your current move can still be used afterwards.",
    "page": 30
  },
  {
    "title": "Search a Chest",
    "category": "Actions",
    "tags": ["chest", "search", "loot", "open chest", "treasure", "search a chest"],
    "text": "Minor Action while adjacent to a Chest (not allowed if a Monster is adjacent to you). Remove the Chest token, draw the top Chest card into your bag, and <b>roll the Trap Die</b>.",
    "page": 31
  },
  {
    "title": "Use Focus Ability",
    "category": "Actions",
    "tags": ["focus ability", "focus abilities", "spend focus", "use focus"],
    "text": "Discard the FOCUS tokens shown to resolve one of your two Focus Abilities. It's a Minor Action (so <b>one per turn</b>, and allowed while engaged); Focus Abilities marked as Reactions may be used outside your turn. <b>(errata)</b> Like a Cube Action, using one while moving makes you lose your remaining movement points. Weapon Attacks from Focus use your Weapon's Type for Range (Melee = 0, Ranged/Implement = 1, so engagement applies); other effects have unlimited Range; move effects target yourself.",
    "page": 31
  },
  {
    "title": "Recall Action",
    "category": "Actions",
    "tags": ["recall", "refresh", "recover cubes", "reset cubes", "get cubes back"],
    "text": "Return <b>all</b> spent and expended Action Cubes to your available pool, then take <b>1 Curse Cube</b> (later Chapters/Adventures may raise this) and assign it to a Hero or Dungeon Role Skill.",
    "page": 20
  },
  {
    "title": "Willing and Unwilling Recall",
    "category": "Actions",
    "tags": ["willing recall", "unwilling recall", "forced recall", "out of cubes", "no cubes", "run out"],
    "text": "<b>Willing:</b> on your turn, if you have only two or fewer colors of cubes available; it <b>ends your turn</b>. <b>Unwilling:</b> mandatory the moment you have no available cubes (even outside your turn); it doesn't end your turn and is resolved right after the current effect finishes (e.g., finish taking the damage/FATIGUE first).",
    "page": 20
  },
  {
    "title": "Free Recall Action",
    "category": "Actions",
    "tags": ["free recall", "recall without curse", "no curse recall"],
    "text": "A Recall Action that does <b>not</b> give the Curse Cube penalty (e.g., when knocked out, or between Sequential Adventures).",
    "page": 55
  },
  {
    "title": "Reactions",
    "category": "Actions",
    "tags": ["reaction", "reactions", "lightning bolt", "interrupt", "defend", "respond", "out of turn"],
    "text": "Reactions (lightning bolt) are used in response to a <b>threat</b>: a Hero about to take <b>preventable</b> damage, even outside your turn. They cost a cube but are <b>not</b> Cube Actions. You may react for an ally unless the effect says SELF; RETALIATE needs you to be a target. Each Hero may use <b>one Reaction per threat</b>, but several Heroes can combine. You can still react even if SHIELD reduced the damage to 0. No Reactions against non-preventable damage.",
    "page": 14
  },
  {
    "title": "Engaged in combat",
    "category": "Combat",
    "tags": ["engaged", "engagement", "adjacent enemy", "melee range", "disengage", "ranged while adjacent", "zone of control"],
    "text": "A character adjacent to an enemy is engaged. An engaged Hero <b>can't make Ranged Weapon Attacks</b> and can't take Minor Actions (except Use Focus Ability / Use a Consumable Item). You can always move away freely with no penalty. Engaged Ranged Monsters must try to move away and can't attack if they can't.",
    "page": 13
  },
  {
    "title": "Action Cubes",
    "category": "Cubes & Skills",
    "tags": ["action cube", "ac", "cubes", "yellow", "red", "green", "blue", "melee cube", "ranged cube", "agility cube", "wisdom cube", "colors"],
    "text": "Four colors: <b>Melee = yellow, Ranged = red, Agility = green, Wisdom = blue</b>. Heroes start with the 5 cubes shown on their Initiative card and gain one per new Hero Skill or Dungeon Role Skill learned (not Class Abilities or Equipment). Spend a cube of the Skill's color by placing it on the Skill; that Skill stays blocked until recalled.",
    "page": 20
  },
  {
    "title": "Expend",
    "category": "Cubes & Skills",
    "tags": ["expend", "expended", "expended cubes", "exhaust"],
    "text": "To Expend, move an available cube (any color) to the Expended Action Cubes box. It can't be spent while there, but comes back with any Recall. It's not a permanent loss.",
    "page": 20
  },
  {
    "title": "Status Cubes",
    "category": "Cubes & Skills",
    "tags": ["status cubes", "purple", "black", "white", "pink", "cube colors", "life tracker", "class cube"],
    "text": "Status Cubes can't be spent: <b>Trauma = purple</b>, <b>Curse = black</b>, <b>white</b> marks learned Class Abilities and Monster Health on the Monster Status board, <b>pink</b> tracks Hero Health.",
    "page": 20
  },
  {
    "title": "Trauma Cube",
    "category": "Cubes & Skills",
    "tags": ["trauma", "trauma cube", "tc", "purple cube", "injury", "wound"],
    "text": "Gained when a Hero is knocked out; place it on an available Hero or Dungeon Role Skill (not Equipment or Class Ability), which is blocked while covered. Removed only by a specific effect or at the Camp Phase. A Hero holds normally just <b>1</b>; receiving the <b>2nd</b> means death and the Adventure fails.",
    "page": 20
  },
  {
    "title": "Curse Cube",
    "category": "Cubes & Skills",
    "tags": ["curse", "curse cube", "cc", "black cube", "corruption", "corrupted"],
    "text": "Gained from Recall Actions and effects. Place each on an available Hero or Dungeon Role Skill (not Equipment or Class Ability); that Skill is blocked. Removed with CLEANSE or at Camp. A Hero can hold <b>5</b>; the <b>6th</b> corrupts them and the Adventure fails.",
    "page": 20
  },
  {
    "title": "Covering a Passive Skill with a cube",
    "category": "Cubes & Skills",
    "tags": ["passive", "curse passive", "trauma passive", "block passive", "lose health"],
    "text": "You may put a Curse or Trauma Cube on a Passive Skill, but you lose its effect while covered (e.g., a +2 HP Passive covered = lose 2 Health at once; regained when the cube is CLEANSED).",
    "page": 20
  },
  {
    "title": "CURSE X",
    "category": "Conditions & effects",
    "tags": ["curse", "curse x", "curse effect", "gain curse"],
    "text": "The target gains X Curse Cubes. Because CURSE is an effect, immunity to CURSE can stop it, but such immunity does not stop Curse Cubes from other sources (e.g., Recall).",
    "page": 55
  },
  {
    "title": "Wild Cube",
    "category": "Cubes & Skills",
    "tags": ["wild", "wild cube", "any color", "rainbow cube", "double numbers"],
    "text": "Counts as any color you choose. If spent on one of your <b>Hero Skills</b> (not Dungeon Role or Equipment Skills), every number in the Skill's effect is doubled (e.g., HEAL 2 AND SHIELD 4 → HEAL 4 AND SHIELD 8, though SHIELD still caps at 4).",
    "page": 58
  },
  {
    "title": "Using a Skill",
    "category": "Cubes & Skills",
    "tags": ["skill", "skills", "use skill", "ability", "spend cube", "cast"],
    "text": "Spend an available Action Cube of the Skill's color by placing it on the Skill (one Cube Action). Resolve effects left to right in written order. Most effects are mandatory, but \"up to\" allows 0; effects you can't apply (out of Range, 5th stackable token) are simply wasted, and you may use a Skill knowing part of it will be wasted.",
    "page": 24
  },
  {
    "title": "Reading Skill text: and, commas, semicolons",
    "category": "Cubes & Skills",
    "tags": ["tied effect", "and", "comma", "semicolon", "punctuation", "skill text", "multi-part", "multi-effect", "targets"],
    "text": "<b>\"and\"</b> = Tied Effects: same target, happen at once, can't be split (apply only the parts the target can receive). <b>Comma</b> ties a target specification to the following effect(s) (also replaces \"and\" for 3+ tied effects). <b>Semicolon</b> separates independent effects, each may choose its own targets. A target restriction applies until the next semicolon.",
    "page": 24
  },
  {
    "title": "Skill Range by color",
    "category": "Cubes & Skills",
    "tags": ["range", "skill range", "melee range", "ranged range", "distance", "how far", "reach"],
    "text": "<ul><li><b>Melee (yellow):</b> Range 0 – adjacent or yourself.</li><li><b>Ranged (red):</b> Range 1 – up to one area (blue square) away, or yourself.</li><li><b>Agility (green):</b> unlimited (any revealed tile); its MOVE effects target yourself unless stated.</li><li><b>Wisdom (blue):</b> unlimited (any revealed tile).</li></ul>",
    "page": 25
  },
  {
    "title": "Multi-colored Skills and Cube Range (CR)",
    "category": "Cubes & Skills",
    "tags": ["multi-colored", "multicolor", "cr", "cube range", "dungeon role skill range", "two colors", "four colors"],
    "text": "Skills with a two- or four-color slot (common on Dungeon Roles and Equipment) take their Range from the color of the cube you spend: e.g., Stun Enemy with yellow = melee Range, with blue = unlimited. CR on a card means exactly this.",
    "page": 25
  },
  {
    "title": "RANGE X",
    "category": "Combat",
    "tags": ["range", "range 1", "range 2", "areas", "counting range", "distance"],
    "text": "Range is always counted in <b>areas</b> (blue squares): Range 1 reaches any square in an area up to 1 area away, Range 2 up to 2 areas, etc.",
    "page": 57
  },
  {
    "title": "Line of sight",
    "category": "Combat",
    "tags": ["line of sight", "los", "see", "visibility", "blocked", "walls", "cover", "obstruct"],
    "text": "The core rulebook has <b>no line-of-sight rule</b>. Targeting depends only on Range (counted in areas) and, for unlimited Range, on the target being on a revealed Map tile. Monsters only lose sight of Heroes via STEALTH.",
    "page": 25
  },
  {
    "title": "Targeting",
    "category": "Cubes & Skills",
    "tags": ["target", "targeting", "single target", "who can i target", "target specification", "up to two"],
    "text": "Unless the effect names a target, it affects <b>a single character within Range</b>, and you can always target yourself. A target specification (e.g., \"Up to two target adj enemies\") is written before its effect, followed by a comma.",
    "page": 26
  },
  {
    "title": "SELF",
    "category": "Cubes & Skills",
    "tags": ["self", "only me", "caster only", "self reaction"],
    "text": "The effect can only target the character using it, whatever the Range. A SELF Reaction can only be used if you yourself are threatened.",
    "page": 57
  },
  {
    "title": "ALLY / ALLIED",
    "category": "Cubes & Skills",
    "tags": ["ally", "allied", "allies", "friendly", "another hero"],
    "text": "The effect applies only to a target allied with the user. The rulebook says Monsters ally only with Monsters, and Heroes with Heroes, Pets and Companions. <b>(errata FAQ)</b> However, the designers clarify that the keyword ALLY means <b>another Hero</b> — Pets and Companions are not ALLY targets.",
    "page": 26
  },
  {
    "title": "ADJ / TARGET ADJ",
    "category": "Cubes & Skills",
    "tags": ["adj", "adjacent target", "target adj", "next to"],
    "text": "The effect can only target something in a square adjacent to the user, regardless of the Skill's Range.",
    "page": 54
  },
  {
    "title": "ENEMY and CHARACTER",
    "category": "Cubes & Skills",
    "tags": ["enemy", "character", "who is a character", "npc", "foe"],
    "text": "<b>Characters</b>: Heroes, Monsters, Pets, NPC tokens and Companions. All can benefit from immediate effects like PREVENT, but only those with a card or board can hold Conditions/Resource tokens. <b>Enemy</b>: any character not in your party and not an NPC token.",
    "page": 54
  },
  {
    "title": "SPLIT",
    "category": "Cubes & Skills",
    "tags": ["split", "divide", "distribute", "share heal"],
    "text": "Divide the effect among any number of targets in Range, each getting at least 1. Bonuses apply once to the total (e.g., +1 HEAL on SPLIT, HEAL 4 → SPLIT 5).",
    "page": 57
  },
  {
    "title": "COPY effect",
    "category": "Cubes & Skills",
    "tags": ["copy", "copy skill", "mimic", "duplicate"],
    "text": "A copied Skill works exactly as written, including its <b>original</b> base Range, whatever cube you used to copy it. Dungeon Role Skills, Equipment Skills and Reactions can't be copied unless stated.",
    "page": 55
  },
  {
    "title": "Passive Skills",
    "category": "Cubes & Skills",
    "tags": ["passive", "passive skill", "p", "grey skill", "gray skill", "static", "triggered"],
    "text": "Grey box marked \"P\"; always active unless covered by a Curse/Trauma Cube. Either static benefits or triggered effects (\"when/whenever\"). If no Range is given, it is <b>unlimited</b>, regardless of the Skill's color.",
    "page": 26
  },
  {
    "title": "Surge effects / ROLL X+",
    "category": "Combat",
    "tags": ["surge", "roll 16+", "roll 18+", "roll x+", "natural roll", "trigger on roll"],
    "text": "Triggered when the <b>natural</b> d20 roll is X or more (HIT bonuses don't count). Resolve immediately, before the attack or challenge finishes. Their extra effects have unlimited Range unless stated.",
    "page": 57
  },
  {
    "title": "Class Abilities",
    "category": "Cubes & Skills",
    "tags": ["class ability", "class abilities", "class tree", "trees", "white cube", "assassin", "cleric", "ranger", "mage", "warrior"],
    "text": "Each Class has 4 trees of 3 abilities. Learn a tree's first ability before its higher ones (some trees offer a choice for the second); you can start any number of trees. Mark learned abilities with a white cube. They're usually passive, have unlimited Range unless stated, give no Action Cube, and bonuses apply only when you are the source of the effect. Class rewards aren't level-restricted.",
    "page": 32
  },
  {
    "title": "Multiclassing",
    "category": "Cubes & Skills",
    "tags": ["multiclass", "multiclassing", "second class", "secondary class", "dual class"],
    "text": "Optional: a Hero may take <b>one</b> secondary Class by learning the Level 1 ability of one of its trees. The Class must not be the primary Class of another Hero in the party, and no third Class is allowed.",
    "page": 32
  },
  {
    "title": "Dungeon Roles",
    "category": "Cubes & Skills",
    "tags": ["dungeon role", "role", "controller", "defender", "leader", "striker", "support", "change role", "switch role"],
    "text": "Five roles: Controller, Defender, Leader, Striker, Support. Start with cards I and II; card III (A then B) can be learned instead of a Hero Skill of the same level. A role sets your Initiative slot and Party Leader priority. Upgrades belong to the Hero, so they transfer if you change role. <b>(errata)</b> Heroes may switch Dungeon Roles whenever they visit the Camp Phase.",
    "page": 33
  },
  {
    "title": "Learning new Skills (leveling up)",
    "category": "Cubes & Skills",
    "tags": ["level up", "leveling", "new skill", "skill card", "level 1", "level 2", "experience", "xp", "new cube", "gain cube"],
    "text": "Skills come at Initial, Level 1 and Level 2; a Level 2 Skill needs its Level 1. Rewards specify the level. Each new Hero Skill gives an Action Cube of that Skill's color (even if Passive). A new Dungeon Role Skill gives a cube of any color you choose (note it on the Campaign Log; you may change it if you change role).",
    "page": 51
  },
  {
    "title": "Attacks: Weapon vs Spell",
    "category": "Combat",
    "tags": ["attack", "attacks", "basic attack", "weapon attack", "spell attack", "crossed swords", "burst"],
    "text": "Only Skills with the <b>crossed swords</b> (Weapon Attack) or <b>burst</b> (Spell Attack) symbol are Attacks. There are <b>no basic attacks</b>: you attack only through Skills, Class Abilities, Focus or Equipment effects. Inflicting a Condition alone does not make something an Attack.",
    "page": 27
  },
  {
    "title": "Weapon Attack",
    "category": "Combat",
    "tags": ["weapon attack", "attack roll", "hit", "accuracy", "d20", "roll to hit", "+hit", "miss"],
    "text": "Roll d20 + the Skill's \"+N HIT\" and all modifiers (height ±2, -2 on Darkness, abilities). If the total ≥ your Weapon's <b>Accuracy</b>, you hit for the Weapon's damage plus any collateral; otherwise you miss. Without a Weapon you can't make Weapon Attacks.",
    "page": 27
  },
  {
    "title": "Multiple attacks in one Skill (+0 HIT / +0 HIT)",
    "category": "Combat",
    "tags": ["two attacks", "multiple attacks", "+0/+0", "double attack", "rapid shots"],
    "text": "A Skill showing several HIT modifiers makes that many separate Weapon Attacks, resolved one at a time; you can switch targets between them. Collateral effects apply once per attack that hits.",
    "page": 27
  },
  {
    "title": "Spell Attack",
    "category": "Combat",
    "tags": ["spell", "spell attack", "magic", "auto hit", "no roll", "burst"],
    "text": "Always hits; no roll. Spell Attacks have no collateral-damage rule: their Conditions apply even if the target prevents all the damage.",
    "page": 29
  },
  {
    "title": "Collateral damage",
    "category": "Combat",
    "tags": ["collateral", "on hit", "condition on hit", "secondary effect", "rider"],
    "text": "On Weapon Attacks (and all Monster attacks), Conditions/effects written after the HIT bonus with a comma, or after the damage with \"AND\", apply <b>only if the attack removes at least 1 Health</b>. Miss or prevent all damage = no Condition.",
    "page": 21
  },
  {
    "title": "Critical Hit",
    "category": "Combat",
    "tags": ["crit", "critical", "critical hit", "natural 20", "nat 20", "double", "crit x+"],
    "text": "A <b>natural 20</b> on a Weapon Attack doubles the damage, including +X DMG bonuses, but never Conditions or other effects. CRIT X+ widens the range (natural X or more); several CRIT ranges don't stack, the widest applies.",
    "page": 27
  },
  {
    "title": "DOUBLE DAMAGE",
    "category": "Combat",
    "tags": ["double damage", "x2", "quadruple", "backstab", "surprise"],
    "text": "Doubles the attack's damage. It isn't a Crit, so a Critical Hit doubles it again (×4 total).",
    "page": 28
  },
  {
    "title": "Critical Failure",
    "category": "Combat",
    "tags": ["critical failure", "natural 1", "nat 1", "fumble", "auto miss"],
    "text": "A <b>natural 1</b> on a Weapon Attack always misses, regardless of bonuses, unless an ability says otherwise.",
    "page": 28
  },
  {
    "title": "+X HIT and +X DMG",
    "category": "Combat",
    "tags": ["+hit", "+dmg", "bonus damage", "hit bonus", "modifier"],
    "text": "+X HIT is added to the attack roll for Accuracy only; it never turns a roll into a natural 20 or a Surge. +X DMG is added to damage and is doubled by Crits and DOUBLE DAMAGE.",
    "page": 54
  },
  {
    "title": "Advantage and disadvantage (height)",
    "category": "Combat",
    "tags": ["advantage", "disadvantage", "high ground", "higher", "lower", "elevation", "height bonus", "+2 hit"],
    "text": "A Weapon Attack against a target on a lower level gets <b>+2 HIT</b>; against a higher target <b>-2 HIT</b>, for melee and ranged alike. With multi-target attacks (CLEAVE, MULTISHOT) roll once and check the result separately for each target.",
    "page": 14
  },
  {
    "title": "Weapon Type vs Skill Range",
    "category": "Combat",
    "tags": ["weapon type", "melee weapon", "ranged weapon", "implement", "bow while engaged", "attack type"],
    "text": "For Weapon Attacks made through your Skills, the <b>Skill's color (or cube spent)</b> sets Range and engagement — not your Weapon. Yellow = melee attack, red = ranged attack (not while engaged). Your Weapon's Type only matters for Focus Ability attacks and attacks commanded by allies.",
    "page": 28
  },
  {
    "title": "Taking damage (Heroes)",
    "category": "Combat",
    "tags": ["damage", "take damage", "lose health", "mitigate", "reduce damage", "order"],
    "text": "Unprevented damage lowers Health. Order: <b>SHIELD tokens are used first</b> (mandatory), then you may use PREVENT Reactions for what remains. You can't skip SHIELD to save it.",
    "page": 14
  },
  {
    "title": "SHIELD",
    "category": "Conditions & effects",
    "tags": ["shield", "shields", "armor token", "block", "absorb", "barrier"],
    "text": "SHIELD X gives X tokens; each absorbs 1 damage. Stackable, <b>max 4</b>. Using them is mandatory against preventable damage and happens before any PREVENT. Pets and Companions can hold SHIELD too.",
    "page": 57
  },
  {
    "title": "PREVENT",
    "category": "Conditions & effects",
    "tags": ["prevent", "prevention", "negate", "reduce damage", "block damage"],
    "text": "PREVENT X ignores up to X damage that would hit the target. It's used as a Reaction at the moment of damage (not stored for later), after SHIELD. The <b>protected</b> character must be in the effect's Range. Several Heroes may stack PREVENTs, one Reaction each.",
    "page": 56
  },
  {
    "title": "ALL / ALL BUT 1 DMG",
    "category": "Conditions & effects",
    "tags": ["all", "all but 1", "prevent all", "evasion", "full block"],
    "text": "Equals the damage the protected target is taking (6 dmg → PREVENT ALL = 6, ALL BUT 1 = 5). SHIELD is still used first, and it protects only that one target, not every hit of a CLEAVE/MULTISHOT/STRIKE. <b>(errata FAQ)</b> A +1 PREVENT bonus on an ALL BUT 1 effect makes it prevent all.",
    "page": 54
  },
  {
    "title": "Non-preventable damage",
    "category": "Conditions & effects",
    "tags": ["non-preventable", "unpreventable", "true damage", "can't prevent", "unblockable"],
    "text": "Can't be reduced by SHIELD or PREVENT and isn't a threat, so no Reactions. Examples: Darkness, BLEED/BURN/POISON, Falling Damage, Crush, Pay X Life, VICIOUS.",
    "page": 56
  },
  {
    "title": "Health and maximum Health",
    "category": "Combat",
    "tags": ["health", "hp", "hit points", "life", "max health", "16"],
    "text": "Heroes start at the dark red space of their Health Track (pink cube). Maximum Health can't exceed <b>16</b>; extra bonus is lost. Healing never exceeds maximum. (Health tokens were removed from the game — errata.)",
    "page": 7
  },
  {
    "title": "HEAL",
    "category": "Conditions & effects",
    "tags": ["heal", "healing", "restore", "cure", "regain health", "hp back"],
    "text": "HEAL X: the target regains X Health, never above its maximum; excess is lost.",
    "page": 55
  },
  {
    "title": "Knocked out (0 Health)",
    "category": "Combat",
    "tags": ["knocked out", "ko", "0 health", "zero hp", "down", "dying", "dead", "unconscious", "defeated hero"],
    "text": "At 0 Health: lay the mini down; remove all Conditions (keep Resource tokens); take a Free Recall (no Curse); take <b>1 Trauma Cube</b> on a Hero/Dungeon Role Skill; erase any Aura. While down the Hero can't act or react, can't be targeted (even by allies) and ignores damage/effects; Passives still work. At the start of their next turn they <b>catch their breath</b>: stand up at full Health and play normally.",
    "page": 15
  },
  {
    "title": "Catch / Regain your breath",
    "category": "Combat",
    "tags": ["catch breath", "regain breath", "revive", "stand up", "get up", "recover"],
    "text": "Recovering from being knocked out: at the start of the Hero's next turn, return to full Health. If the Hero was knocked out by Condition damage during their own turn, they recover immediately and continue that turn.",
    "page": 15
  },
  {
    "title": "DRAIN",
    "category": "Conditions & effects",
    "tags": ["drain", "steal", "life steal", "leech"],
    "text": "The target loses what is drained and the drainer gains it. Draining Health is not damage, so it can't be answered with Reactions.",
    "page": 55
  },
  {
    "title": "PAY X LIFE",
    "category": "Conditions & effects",
    "tags": ["pay life", "pay x life", "health cost", "blood cost"],
    "text": "Lose X Health first (non-preventable) before the other effects. You can't use the Skill if paying would knock you out.",
    "page": 56
  },
  {
    "title": "RETALIATE",
    "category": "Combat",
    "tags": ["retaliate", "counter", "thorns", "riposte", "counterattack"],
    "text": "RETALIATE X deals X damage to the attacker. Only usable if you are one of the attack's targets. Via cubes the attacker must be in Range; via Focus or other sources any Range.",
    "page": 57
  },
  {
    "title": "PROTECT",
    "category": "Combat",
    "tags": ["protect", "guard", "taunt", "bodyguard", "intercept"],
    "text": "When a character adjacent to a PROTECT character is targeted, the protector may become the target instead. Works against CLEAVE, MULTISHOT and STRIKE only if the protector isn't already a target.",
    "page": 56
  },
  {
    "title": "CLEAVE",
    "category": "Combat",
    "tags": ["cleave", "sweep", "multi-target", "hit adjacent"],
    "text": "CLEAVE X targets up to X enemies adjacent to the attacker (they needn't be adjacent to each other). Heroes make a single attack roll applied to all targets.",
    "page": 54
  },
  {
    "title": "MULTISHOT",
    "category": "Combat",
    "tags": ["multishot", "multi shot", "volley", "multiple targets", "ranged multi"],
    "text": "MULTISHOT X: one ranged attack against X different targets in Range; damage dealt to each hit. Heroes roll once.",
    "page": 56
  },
  {
    "title": "STRIKE",
    "category": "Combat",
    "tags": ["strike", "area attack", "aoe", "area of effect", "blast", "splash"],
    "text": "STRIKE X affects X whole areas (blue squares) instead of a square. In melee, pick areas with a square adjacent to you; at Range 1 / unlimited, pick areas in Range. The user chooses which creatures in the area are affected. STRIKE still hits hidden (STEALTH) characters.",
    "page": 57
  },
  {
    "title": "REROLL",
    "category": "Combat",
    "tags": ["reroll", "re-roll", "roll again", "second chance"],
    "text": "One free reroll of the d20 for a Weapon Attack made by that Skill, usable when you miss.",
    "page": 57
  },
  {
    "title": "Conditions (general)",
    "category": "Conditions & effects",
    "tags": ["condition", "conditions", "debuff", "status effect", "tokens", "stackable", "redundant", "stack"],
    "text": "Lingering effects marked with tokens. <b>Stackable</b> (BLEED, BURN, POISON, INTIMIDATE): up to <b>4</b> tokens of a kind; a 5th is ignored (a \"2\" token counts as 2). <b>Redundant</b> (KNOCK DOWN, RANGER'S MARK, SLOW, STEALTH, STUN): only 1; a second is ignored. Conditions resolve at the start of the affected character's turn, before triggered abilities.",
    "page": 21
  },
  {
    "title": "Immediate effects",
    "category": "Conditions & effects",
    "tags": ["immediate effect", "instant", "cleanse", "drain", "fatigue", "heal"],
    "text": "Effects resolved fully at once, with no token (e.g., CLEANSE, DRAIN, FATIGUE, HEAL). In multi-part Skills, resolve them in written order, left to right.",
    "page": 21
  },
  {
    "title": "Resource tokens",
    "category": "Conditions & effects",
    "tags": ["resource", "resource token", "focus", "shield", "ki", "fury", "fruit of life", "buff"],
    "text": "Beneficial tokens kept until used: FOCUS, SHIELD, KI, FURY, FRUIT OF LIFE (all stackable to 4). +1 DAMAGE, +30 HEALTH and +1 MOVEMENT trackers have no limit. Kept when knocked out; removed at Camp.",
    "page": 21
  },
  {
    "title": "Immunity",
    "category": "Conditions & effects",
    "tags": ["immune", "immunity", "resist", "unaffected"],
    "text": "An immune character can be exposed to the effect but suffers nothing and takes no token. Immunity to STEALTH also lets the character target hidden characters and prevents being Surprised.",
    "page": 55
  },
  {
    "title": "BURN",
    "category": "Conditions & effects",
    "tags": ["burn", "fire", "burning", "flames", "on fire", "lava", "ignite"],
    "text": "BURN X gives X tokens (stackable, max 4). At the start of the character's turn it takes <b>1 non-preventable damage per BURN token</b>, then removes <b>only one</b> token. So BURN 2 deals 2 then 1 (3 total) unless removed.",
    "page": 54
  },
  {
    "title": "BLEED",
    "category": "Conditions & effects",
    "tags": ["bleed", "bleeding", "blood", "spikes", "cut"],
    "text": "BLEED X gives X tokens (stackable, max 4). At the start of the character's next turn it takes <b>1 non-preventable damage per token</b>, then removes <b>all</b> BLEED tokens.",
    "page": 54
  },
  {
    "title": "POISON",
    "category": "Conditions & effects",
    "tags": ["poison", "poisoned", "toxic", "venom", "noxious"],
    "text": "POISON X gives X tokens (stackable, max 4). At the start of each of the character's turns it takes <b>1 non-preventable damage per token</b>, and the tokens <b>stay</b>. Removed by any CLEANSE effect (or at Camp).",
    "page": 56
  },
  {
    "title": "SLOW",
    "category": "Conditions & effects",
    "tags": ["slow", "slowed", "snare", "movement penalty"],
    "text": "Redundant. Doesn't trigger at turn start: the next time the character gets a Move effect, that effect loses <b>2 movement points</b> and the token is removed.",
    "page": 57
  },
  {
    "title": "STUN",
    "category": "Conditions & effects",
    "tags": ["stun", "stunned", "daze", "lose action"],
    "text": "Redundant. Resolved at the start of the turn, then removed. A <b>Monster</b> loses its Attack that turn (still moves). A <b>Hero</b> loses one of their two Cube Actions that turn. Large Monsters are immune.",
    "page": 58
  },
  {
    "title": "KNOCK DOWN",
    "category": "Conditions & effects",
    "tags": ["knock down", "knockdown", "prone", "trip", "knocked down"],
    "text": "Redundant. Lingers until the character next receives a Move effect; that Move effect is cancelled and the token removed. Large Monsters are immune.",
    "page": 56
  },
  {
    "title": "INTIMIDATE",
    "category": "Conditions & effects",
    "tags": ["intimidate", "intimidated", "fear", "weaken", "damage down"],
    "text": "Stackable. -1 DMG per token. It lingers until the character's next Attack (Weapon or Spell, hit or miss), after which all INTIMIDATE tokens are removed.",
    "page": 55
  },
  {
    "title": "STEALTH",
    "category": "Conditions & effects",
    "tags": ["stealth", "hidden", "invisible", "hide", "surprise", "sneak"],
    "text": "Redundant. While holding it you are hidden: characters without STEALTH immunity can't target you or count you for engagement (but can't pass through you). STRIKE and Darkness still affect you. Discard it at the start of your next turn, or when you make a Weapon Attack; if that attack hits a target you were hidden from, it deals <b>DOUBLE DAMAGE</b> (Surprise).",
    "page": 58
  },
  {
    "title": "FOCUS",
    "category": "Conditions & effects",
    "tags": ["focus", "focus token", "focus x", "gain focus"],
    "text": "FOCUS X gives X FOCUS tokens (stackable resource, max 4), spent to use Focus Abilities (one Focus Ability per turn).",
    "page": 55
  },
  {
    "title": "CLEANSE",
    "category": "Conditions & effects",
    "tags": ["cleanse", "remove curse", "purify", "cure poison"],
    "text": "CLEANSE X removes up to X Curse Cubes from the target and also removes <b>all</b> its POISON tokens (only POISON).",
    "page": 54
  },
  {
    "title": "FATIGUE",
    "category": "Conditions & effects",
    "tags": ["fatigue", "tired", "exhaust", "lose cubes"],
    "text": "FATIGUE X: Expend X of your available cubes for no effect (all of them if you have fewer). If this leaves you with none, you take an Unwilling Recall afterwards.",
    "page": 55
  },
  {
    "title": "DISARM",
    "category": "Conditions & effects",
    "tags": ["disarm", "disarmed", "lose melee cubes"],
    "text": "Immediately Expend all available <b>Melee and Ranged</b> cubes. Counts as FATIGUE (FATIGUE immunity also blocks it).",
    "page": 55
  },
  {
    "title": "SILENCE",
    "category": "Conditions & effects",
    "tags": ["silence", "silenced", "mute", "lose wisdom cubes"],
    "text": "Immediately Expend all available <b>Agility and Wisdom</b> cubes. Counts as FATIGUE (FATIGUE immunity also blocks it).",
    "page": 57
  },
  {
    "title": "KI",
    "category": "Conditions & effects",
    "tags": ["ki", "chi", "ki token"],
    "text": "Stackable resource. Discard 1 KI to make a Weapon Attack with +0 HIT. Only one KI may be discarded per turn or Reaction, whatever it's used for.",
    "page": 56
  },
  {
    "title": "FURY",
    "category": "Conditions & effects",
    "tags": ["fury", "rage", "fury token"],
    "text": "Stackable resource. When you hit with a Weapon or Spell Attack, discard 1 FURY for +1 DMG. Max 1 FURY per turn or Reaction.",
    "page": 55
  },
  {
    "title": "FRUIT OF LIFE",
    "category": "Conditions & effects",
    "tags": ["fruit of life", "fruit", "apple", "heal item"],
    "text": "Stackable resource. With Use a Consumable Item, discard it for SELF, HEAL 2. It can be exchanged like an item but doesn't take bag space.",
    "page": 55
  },
  {
    "title": "RANGER'S MARK",
    "category": "Conditions & effects",
    "tags": ["ranger's mark", "rangers mark", "mark", "marked", "hunter's mark"],
    "text": "Redundant token. The Ranger's Weapon and Spell Attacks against the marked character deal +1 DMG (doubled on a Crit).",
    "page": 57
  },
  {
    "title": "REGENERATION",
    "category": "Conditions & effects",
    "tags": ["regeneration", "regen", "regenerate", "heal over time"],
    "text": "REGENERATION X: regain X Health at the start of the character's turn, not above maximum.",
    "page": 57
  },
  {
    "title": "PENITENCE",
    "category": "Conditions & effects",
    "tags": ["penitence", "curse damage"],
    "text": "The target takes 1 non-preventable damage for each Curse Cube it holds. Usually collateral damage.",
    "page": 56
  },
  {
    "title": "SHADOW AURA",
    "category": "Darkness & Runes",
    "tags": ["shadow aura", "darkness under", "small darkness"],
    "text": "Place a small Darkness tile under the affected target; it takes effect immediately.",
    "page": 57
  },
  {
    "title": "MANIFEST",
    "category": "Darkness & Runes",
    "tags": ["manifest", "reveal rune", "random rune"],
    "text": "Take a random Rune from the bag and reveal it to trigger an effect based on its color. This is not \"drawing\": no Darkness spawns, no draw triggers, and the Rune goes back into the bag (not on the track).",
    "page": 56
  },
  {
    "title": "DISCARD",
    "category": "Conditions & effects",
    "tags": ["discard", "lose token", "remove"],
    "text": "A resource loss: remove the item/token from your board.",
    "page": 55
  },
  {
    "title": "RECALL X",
    "category": "Conditions & effects",
    "tags": ["recall x", "recover cube", "partial recall"],
    "text": "Return up to X spent or Expended cubes to your available pool (no Curse Cube — that's only for the Recall Action).",
    "page": 57
  },
  {
    "title": "Movement basics",
    "category": "Movement & map",
    "tags": ["movement", "move", "diagonal", "orthogonal", "pass through ally", "squeeze", "movement points"],
    "text": "Each movement point moves 1 square, orthogonally or diagonally. You can't enter squares with Solid Objects or enemies (unless jumping). You may pass through but not stop on an ally's square, and you may squeeze diagonally between two blocking objects. Getting movement is an effect (MOVE X), the Move Action is just one source.",
    "page": 22
  },
  {
    "title": "MOVE X and +X MOVEMENT",
    "category": "Movement & map",
    "tags": ["move x", "+movement", "bonus movement", "move effect"],
    "text": "MOVE X: move up to X squares under normal movement rules. +X MOVEMENT adds X points every time you receive a Move effect.",
    "page": 56
  },
  {
    "title": "Squares and areas",
    "category": "Movement & map",
    "tags": ["square", "squares", "area", "areas", "blue square", "white lines", "blue lines", "grid"],
    "text": "Squares are outlined in white; areas in blue, each area = 4 squares. Small characters (25mm) occupy one square and move square to square. Large Monsters occupy a whole area and move area to area.",
    "page": 22
  },
  {
    "title": "Adjacency",
    "category": "Movement & map",
    "tags": ["adjacent", "adjacency", "next to", "diagonal adjacent", "touching"],
    "text": "Squares are adjacent if they share a side <b>or a corner</b> (8 neighbors). Under a bridge, a square is adjacent to the bridge square directly above and that square's neighbors.",
    "page": 22
  },
  {
    "title": "Solid Objects and objects",
    "category": "Movement & map",
    "tags": ["solid object", "object", "blocking", "obstacle", "chest token", "interaction token", "npc", "pile of runes"],
    "text": "Solid Objects (characters, Chest and Interaction tokens, Runes/Piles of Runes, NPC tokens, anything specified) can't be ended on, and enemy ones can't be passed. A Darkness tile may be placed under them. Other objects (Traps, Darkness tiles, Loot) can be walked over and stopped on.",
    "page": 57
  },
  {
    "title": "Dungeon levels and climbing",
    "category": "Movement & map",
    "tags": ["levels", "level", "height", "climb", "up", "tray", "3d", "elevation", "stairs", "platform"],
    "text": "Levels: <b>0</b> (table), <b>1</b> (first platform of Trays 1 and 2), <b>2</b> (top of Tray 2, the highest). Changing one level per step costs nothing extra; going from 0 straight to 2 in one step costs <b>1 extra point</b> (2 total). Going down is free.",
    "page": 23
  },
  {
    "title": "Falling Damage",
    "category": "Movement & map",
    "tags": ["falling", "fall", "fall damage", "drop", "height", "levels", "jump down", "pushed off", "ledge", "cliff"],
    "text": "Moving down <b>2 levels in one step</b> (level 2 → 0) deals <b>2 non-preventable damage</b>. The same applies if a character is <b>pushed</b> or moved by <b>TELEKINESIS</b> from level 2 straight to 0. Dropping one level is safe. <b>JUMP</b> and <b>FLYING</b> avoid Falling Damage (but still pay 2 points to climb 0 → 2).",
    "page": 23
  },
  {
    "title": "Abyss, pits and falling off the map",
    "category": "Movement & map",
    "tags": ["abyss", "pit", "chasm", "hole", "void", "fall off", "edge", "off the map", "bridge fall"],
    "text": "The core rulebook has <b>no rule</b> for abysses, pits or falling off the map; the only falling rule is Falling Damage (2 levels at once = 2 non-preventable). PUSH stops at the end of a level-0 map. Abyss effects are Adventure-specific: e.g. the <i>Adventure Book</i> has a rule where a Monster pushed into the abyss next to a bridge is defeated — check the Adventure's grey box.",
    "page": 23
  },
  {
    "title": "JUMP",
    "category": "Movement & map",
    "tags": ["jump", "leap", "hop", "jump over"],
    "text": "Special movement: ignores terrain and Darkness passed over (but the landing square applies); may pass over Solid Objects and enemies but not end there; no Falling Damage; still costs 2 points to go from level 0 to 2.",
    "page": 23
  },
  {
    "title": "PUSH",
    "category": "Movement & map",
    "tags": ["push", "knockback", "shove away", "repel", "throw"],
    "text": "PUSH X moves the target X squares in a straight line of your choice, each square farther from you. Only same-size or smaller targets (Large Monsters are immune). It stops early at an obstacle: a Solid Object, a wall up to a higher level, or the end of a level-0 map. It <b>can</b> fall to a lower level (2 → 0 = Falling Damage). Pushed into harmful terrain = suffers it immediately.",
    "page": 57
  },
  {
    "title": "TELEKINESIS",
    "category": "Movement & map",
    "tags": ["telekinesis", "levitate", "move object", "float", "tk"],
    "text": "TELEKINESIS X moves a small object or Solid Object up to X squares (Traps, Chests, small characters, small Darkness tiles; not Interaction tokens). It ignores terrain passed over but is affected by where it lands; level 2 → 0 = Falling Damage. Large Monsters are immune.",
    "page": 58
  },
  {
    "title": "SHOVE / Shoving",
    "category": "Movement & map",
    "tags": ["shove", "shoving", "displace", "large monster push", "make room"],
    "text": "When a Large Monster ends its move in an area holding Small Monsters, it shoves them to squares adjacent to its new area; the Party Leader chooses where. A shoved Hero picks their own square. Shoved characters suffer harmful terrain they land in (if not already this turn).",
    "page": 23
  },
  {
    "title": "SWAP",
    "category": "Movement & map",
    "tags": ["swap", "switch places", "trade places", "teleport"],
    "text": "Two objects exchange positions. Characters entering harmful terrain or Darkness for the first time this turn are affected.",
    "page": 58
  },
  {
    "title": "TRAMPLE",
    "category": "Movement & map",
    "tags": ["trample", "run over", "charge through"],
    "text": "TRAMPLE X: may pass through (not end on) enemy squares, dealing X non-preventable damage to each passed, at most once per character per move effect.",
    "page": 58
  },
  {
    "title": "Harmful terrain (when it affects you)",
    "category": "Movement & map",
    "tags": ["harmful terrain", "terrain", "hazard", "step on", "end turn", "terrain timing"],
    "text": "A character is affected when it <b>first steps into</b> a terrain type during a turn, or <b>ends its turn</b> in it — each terrain type only once per turn (but possibly again on another character's turn, e.g. moving via a Reaction). Starting your turn in it does nothing by itself. Darkness tiles over terrain replace it.",
    "page": 47
  },
  {
    "title": "Water / Difficult Terrain",
    "category": "Movement & map",
    "tags": ["water", "difficult terrain", "swamp", "slow terrain", "river"],
    "text": "When affected (entering by moving), lose 1 movement point from the current move effect. Once per turn like other terrain.",
    "page": 48
  },
  {
    "title": "Lava",
    "category": "Movement & map",
    "tags": ["lava", "magma", "fire terrain", "burn terrain"],
    "text": "When affected, the character suffers <b>BURN 2</b>.",
    "page": 48
  },
  {
    "title": "Noxious Miasma",
    "category": "Movement & map",
    "tags": ["noxious", "miasma", "gas", "toxic cloud", "noxious cloud", "poison terrain"],
    "text": "When affected, the character suffers <b>POISON 2</b>.",
    "page": 48
  },
  {
    "title": "Spikes",
    "category": "Movement & map",
    "tags": ["spikes", "spike", "spike trap", "bleed terrain"],
    "text": "When affected, the character suffers <b>BLEED 2</b>.",
    "page": 48
  },
  {
    "title": "Darkness terrain (printed on map)",
    "category": "Darkness & Runes",
    "tags": ["darkness terrain", "printed darkness", "map darkness"],
    "text": "Works like a Darkness tile (2 non-preventable damage to Heroes stepping in/ending turn, -2 HIT for Heroes, +2 DMG for Monsters) and also counts as a Darkness Spawn Point; tiles can't be placed on it.",
    "page": 48
  },
  {
    "title": "Bridges",
    "category": "Movement & map",
    "tags": ["bridge", "bridges", "bridgehead", "under bridge", "span"],
    "text": "Bridges sit at level 1 or 2, at the level of the Trays they connect. Squares under a bridge are blocked; terrain and Spawn Points under it don't count. A character where a bridge is placed moves aside as if shoved. Darkness may extend under/up onto bridges (to a level-2 bridge it must break, using one small tile). A character on a bridge over Darkness isn't in Darkness. <b>(errata)</b> Darkness where a Bridgehead must be placed is removed to make room.",
    "page": 49
  },
  {
    "title": "TRAP (Hero traps)",
    "category": "Movement & map",
    "tags": ["trap", "bear trap", "fire trap", "poison trap", "place trap"],
    "text": "Place a Trap token in the center of an area adjacent to yours (max 1 per area). The first time an enemy activates in or moves into that area, all enemies there are affected, then remove it. Bear Trap: 2 non-prev. dmg + BLEED 2. Fire Trap: 2 + BURN 4. Poison Trap: 2 + POISON 2.",
    "page": 58
  },
  {
    "title": "Monster types and hierarchy",
    "category": "Monsters",
    "tags": ["monster types", "minion", "white monster", "gray monster", "grey monster", "black monster", "wm", "gm", "bm", "commander", "overlord", "general", "boss"],
    "text": "Weakest to strongest: Minions → White → Gray → Black Monsters → Commanders → Overlords → Generals (Bosses). Minions have no color, aren't in Door Setups, and come from mechanics like Monster Raid or Boss attack cards.",
    "page": 38
  },
  {
    "title": "Monster ranks",
    "category": "Monsters",
    "tags": ["rank", "rookie", "fighter", "veteran", "champion", "monster level"],
    "text": "White, Gray and Black Monsters have ranks: <b>Rookie < Fighter < Veteran < Champion</b>. Even a White Rookie outranks Minions.",
    "page": 41
  },
  {
    "title": "Monster card",
    "category": "Monsters",
    "tags": ["monster card", "monster stats", "pink text", "blue text", "immunities", "base damage"],
    "text": "Shows type symbol, name, rank, immunities, Health, Rune position (arrow: top or bottom), Movement, Attack Type (Melee/Ranged/Magical), base damage (\"-\" = no attack) and abilities: <b>blue</b> = passive, <b>pink</b> = triggered at turn start, black = attack features/collateral.",
    "page": 38
  },
  {
    "title": "Monster sizes and Large immunities",
    "category": "Monsters",
    "tags": ["large", "large monster", "small monster", "size", "big monster", "immune push"],
    "text": "Small Monsters use one square; Large ones a whole area. Large Monsters (and Small ones with the Large icon) are immune to <b>KNOCK DOWN, PUSH, STUN and TELEKINESIS</b> unless an effect says otherwise.",
    "page": 38
  },
  {
    "title": "Summoning Monsters from a Setup",
    "category": "Monsters",
    "tags": ["summon", "spawn monster", "random monster", "set monster", "p+", "player count"],
    "text": "\"WM: Shadow Cultist - Rookie\" = that exact Monster. \"GM - Rookie\" = draw a random Gray Rookie card (use the same card for all identical random entries in that Setup). Place the card on the track, the minis on the map, and set Health on the Monster Status board by base color. Standard version by default; Alternate/Complex versions optional.",
    "page": 17
  },
  {
    "title": "Monster turn",
    "category": "Monsters",
    "tags": ["monster turn", "monster activation", "enemy turn", "ai", "monster steps"],
    "text": "All Monsters of the card's type act, in base-color order: <ul><li>1. Conditions (if defeated, nothing else happens).</li><li>2. Triggered (pink) abilities.</li><li>3. Preparation: choose targets.</li><li>4. Move if needed.</li><li>5. Attack.</li><li>6. Complex Behavior only: FLIP the card after the last one of its type.</li></ul>",
    "page": 39
  },
  {
    "title": "Monster targeting (Preparation)",
    "category": "Monsters",
    "tags": ["monster target", "targeting", "primary target", "strongest hero", "who does the monster attack", "aggro"],
    "text": "1. A Monster with a multi-target attack (CLEAVE, MULTISHOT, STRIKE; not ATTACK TWICE) goes where it can hit the most Heroes. 2. Otherwise (and among equal options) it goes for its <b>Primary Target</b> — the <b>Strongest Hero</b> unless a keyword says otherwise. If it can't reach the Primary Target, it switches to the next target it can reach; if it can reach none, it moves fully toward the Primary Target. If it sees no targets (all in STEALTH), it doesn't move or attack.",
    "page": 39
  },
  {
    "title": "Strongest / Weakest / Most... Hero",
    "category": "Monsters",
    "tags": ["strongest hero", "weakest hero", "most corrupted", "most tired", "most vigorous", "tie", "fastest initiative"],
    "text": "<ul><li><b>Strongest</b>: most Health (tie → fastest Initiative slot).</li><li><b>Weakest</b>: least Health (tie → slowest slot).</li><li><b>Most Corrupted</b>: most Curse Cubes (tie → fastest).</li><li><b>Most Vigorous</b>: most available cubes (tie → fastest).</li><li><b>Most Tired</b>: fewest available cubes (tie → slowest).</li></ul>",
    "page": 58
  },
  {
    "title": "Monster targeting keywords",
    "category": "Monsters",
    "tags": ["bloodseeker", "covetous", "defiant", "reckoner", "relentless", "primary target keyword", "alternate"],
    "text": "<ul><li><b>BLOODSEEKER</b>: Weakest Hero.</li><li><b>COVETOUS</b>: Hero with most Resource tokens (tie → fastest slot).</li><li><b>DEFIANT</b>: Most Vigorous Hero.</li><li><b>RECKONER</b>: Most Corrupted Hero.</li><li><b>RELENTLESS</b>: Most Tired Hero.</li></ul>",
    "page": 54
  },
  {
    "title": "SLAUGHTER",
    "category": "Monsters",
    "tags": ["slaughter", "npc target", "villager", "kill npc"],
    "text": "<b>(errata)</b> The Monster's Primary Target is NPC tokens (non-<b>Pet</b>). It never changes Primary Target while any NPC token is on the board; when none are left, it targets the Strongest Hero.",
    "page": 57
  },
  {
    "title": "Monster movement",
    "category": "Monsters",
    "tags": ["monster move", "monster movement", "pathing", "shortest path", "harmful terrain monster"],
    "text": "Monsters use the same movement rules, taking the shortest route toward their targets. They avoid harmful terrain and seek to end on Darkness if possible (even via a longer route), but will cross deadly terrain if that's the only way. A Monster already in reach won't move unless it can stand on Darkness and still attack the same targets.",
    "page": 40
  },
  {
    "title": "Monster attacks",
    "category": "Monsters",
    "tags": ["monster attack", "monster damage", "monster roll", "auto hit", "melee monster", "ranged monster", "magical monster"],
    "text": "Monsters <b>don't roll</b>: they always hit a target in Range (Heroes can still react). Their Conditions are collateral (need at least 1 damage). <b>Melee</b>: adjacent. <b>Ranged</b>: Range 1, can't attack while engaged (must try to move away first; if it can't, no move and no attack). <b>Magical</b>: unlimited Range, only moves to leave harmful terrain or reach Darkness.",
    "page": 40
  },
  {
    "title": "\"X\" on Monster and attack cards",
    "category": "Monsters",
    "tags": ["x", "variable", "x value", "rune count", "crux"],
    "text": "X = the number of Runes on the Initiative Track matching the color of that Monster's (or attack card's) Rune.",
    "page": 40
  },
  {
    "title": "Applying damage to Monsters / defeat",
    "category": "Monsters",
    "tags": ["monster health", "kill monster", "defeat monster", "monster status board", "white cube", "monster dies"],
    "text": "Move the white cube down the Monster's color line on the Monster Status board. At 0 or less the Monster is removed; if it was the last of that type and rank, remove its card from the Initiative Track.",
    "page": 16
  },
  {
    "title": "Standard, Alternate and Complex Behavior",
    "category": "Monsters",
    "tags": ["standard", "alternate", "complex behavior", "monster versions", "flip", "side a", "side b"],
    "text": "Setups mean the <b>Standard</b> version (targets Strongest Hero) by default, but you may use the <b>Alternate</b> side (targets someone else, more complex). <b>Complex Behavior</b> cards start on side A and flip after the last Monster of the type acts each turn; if the sides have different Runes the card moves on the track (it may act twice in a round).",
    "page": 41
  },
  {
    "title": "Commanders and Commander Power (CP)",
    "category": "Monsters",
    "tags": ["commander", "cp", "commander power", "commander health", "golden", "boss health"],
    "text": "Starting Health = card Health × CP, where CP = the Setup's number + party size (e.g. CP 2+P with 3 Heroes = 5; 8 Health → 40). Commanders have no maximum Health, so overhealing keeps adding. They follow normal Monster rules plus Commander Attack cards.",
    "page": 42
  },
  {
    "title": "Commander Attack cards",
    "category": "Monsters",
    "tags": ["commander attack", "attack cards", "commander cards", "extra attacks", "haste"],
    "text": "On summoning, shuffle the 10-card Commander Attack deck and draw <b>one per Hero</b>; place them on the track by their Runes. When reached, resolve the card (passive-only cards are just skipped). They're not the Commander's turn (unless stated, e.g. Haste) and do <b>not</b> get the +2 Darkness bonus.",
    "page": 42
  },
  {
    "title": "Overlords and MAELSTROM",
    "category": "Monsters",
    "tags": ["overlord", "maelstrom", "purple", "overlord attack"],
    "text": "Like Commanders but use Overlord Attack cards (rarer = stronger). MAELSTROM: at the start of its activation the Overlord shuffles its attack cards into the deck and draws a new hand (one per Hero). You may swap one in for a Commander if you want more challenge. Custom decks: exactly 10 cards, one per Rune color/position.",
    "page": 43
  },
  {
    "title": "Generals (Bosses)",
    "category": "Monsters",
    "tags": ["boss", "bosses", "general", "undead king", "boss fight", "boss board"],
    "text": "Boss fights are prepared by the Adventure Book. Bosses use a fixed set of <b>five</b> attack cards (not drawn, regardless of party size; Outcomes may add/remove some), usually have huge Health and a Boss Monster Board for stats and Health.",
    "page": 43
  },
  {
    "title": "COMMAND",
    "category": "Monsters",
    "tags": ["command", "commanded", "goad", "activate monster"],
    "text": "The Strongest other Monster immediately activates as if on its own turn (Conditions apply), then the commanding Monster continues. No effect if no other Monster is on the board. <b>(errata)</b> A Monster that has COMMAND can't be COMMANDED by another Monster.",
    "page": 54
  },
  {
    "title": "AMBUSH",
    "category": "Monsters",
    "tags": ["ambush", "teleport monster", "blink", "flicker"],
    "text": "Remove the Monster; its Primary Target (or that Pet/Companion's controller) places it in an unoccupied square adjacent to that target. Harmful terrain there affects it as if it landed from a JUMP.",
    "page": 54
  },
  {
    "title": "ATTACK TWICE",
    "category": "Monsters",
    "tags": ["attack twice", "two attacks", "double attack monster"],
    "text": "The Monster moves once, then attacks twice (no moving between). Each attack is resolved and can be reacted to separately; if the target leaves Range between attacks, it may pick another target without moving. Not a multi-target attack.",
    "page": 54
  },
  {
    "title": "EVOLVE",
    "category": "Monsters",
    "tags": ["evolve", "evolving", "grow stronger", "monster buff"],
    "text": "Each time it EVOLVES, the Monster gets a +2 DMG and a +1 MOVE token (on the Monster Status board). Cumulative; not Conditions.",
    "page": 55
  },
  {
    "title": "VICIOUS",
    "category": "Monsters",
    "tags": ["vicious", "unpreventable monster"],
    "text": "This Monster's attack damage is non-preventable.",
    "page": 58
  },
  {
    "title": "Large Monsters crushing Chests",
    "category": "Monsters",
    "tags": ["crush chest", "crushing", "large monster chest", "destroy chest"],
    "text": "A Large Monster may end its move in an area with a Chest: the Chest is destroyed, its contents lost, and the Trap Die is rolled with the effect applied to the Monster.",
    "page": 23
  },
  {
    "title": "Darkness turn (Rune card)",
    "category": "Darkness & Runes",
    "tags": ["darkness turn", "rune card", "darkness hunting", "draw runes", "end of round"],
    "text": "When the Marker reaches the Rune card (Darkness Hunting from Chapter 2 on): draw the listed number of Runes, place each Rune's Darkness tile on the board, put the Rune on its matching slot of the Initiative Track, then flip the Rune card. Some Adventures add a second (Special) Rune card above it with its own instructions.",
    "page": 44
  },
  {
    "title": "Rune tokens and the Rune bag",
    "category": "Darkness & Runes",
    "tags": ["rune", "runes", "rune bag", "rune tokens", "timer", "clock"],
    "text": "36 Runes (7 grey, 7 red, 7 green, 7 orange, 8 blue) start in the bag. The back of each shows a Darkness tile shape. Runes on the track also set the \"X\" of matching Monsters/attack cards. Drawing the <b>last Rune</b> ends the Adventure in failure immediately.",
    "page": 16
  },
  {
    "title": "Darkness spawning",
    "category": "Darkness & Runes",
    "tags": ["darkness spawn", "spawn point", "darkness placement", "place darkness", "spread"],
    "text": "Each tile must be placed on a Darkness Spawn Point or orthogonally adjacent and connected to Darkness already on the board, and grows toward the <b>Strongest Hero not already on Darkness</b>, as close as possible. If several placements are equally good, the Party Leader chooses. It ignores STEALTH and chases immune or knocked-out Heroes too.",
    "page": 44
  },
  {
    "title": "Darkness tiles that don't fit",
    "category": "Darkness & Runes",
    "tags": ["small darkness", "doesn't fit", "break darkness", "three small tiles"],
    "text": "If a tile doesn't fit or would hang off a higher level — or if breaking it gets closer to the target — replace it with <b>3 small Darkness tiles</b> placed by the same rules (the Rune still goes on the track). Leftover small tiles chase the next Strongest Hero; if none is left, discard them with no Crush.",
    "page": 45
  },
  {
    "title": "Crush",
    "category": "Darkness & Runes",
    "tags": ["crush", "all heroes in darkness", "darkness damage all"],
    "text": "If all Heroes are already on Darkness when a tile should spawn, skip the tile (still place the Rune on the track) and every Hero takes non-preventable damage equal to the <b>number of Heroes</b>. Even Darkness-immune Heroes take it.",
    "page": 44
  },
  {
    "title": "Darkness effects",
    "category": "Darkness & Runes",
    "tags": ["darkness", "darkness damage", "darkness tile", "standing in darkness", "darkness bonus"],
    "text": "<ul><li><b>2 non-preventable damage</b> to a Hero, Companion or Pet caught by a spawning tile, stepping on Darkness for the first time in a turn, or ending its turn on it without having taken Darkness damage that turn.</li><li>Heroes on Darkness: <b>-2 HIT</b> on Weapon Attacks.</li><li>Monsters on Darkness (even one square of a Large one): <b>+2 base damage</b> (not on Commander/Overlord/Boss attack cards).</li></ul>",
    "page": 46
  },
  {
    "title": "Darkness across levels",
    "category": "Darkness & Runes",
    "tags": ["darkness levels", "darkness climb", "darkness height"],
    "text": "Darkness tiles can change dungeon levels like a character while staying connected; going from level 0 to 2 costs an extra tile (2 instead of 1).",
    "page": 45
  },
  {
    "title": "Pets",
    "category": "Companions & Pets",
    "tags": ["pet", "pets", "summon", "luma", "jinx", "jynx", "wolf", "eagle", "animal companion", "dispel"],
    "text": "Summoned to an unoccupied square adjacent to their Hero (affected by terrain/Darkness there). <b>1 HP</b>; when it's lost the Pet is dispelled (can be summoned again). Can hold SHIELD and Conditions and receive PREVENT; affected by Darkness like a Hero. Only one Pet at a time normally (summoning a second dispels the first). Not on the Initiative Track.",
    "page": 9
  },
  {
    "title": "Pet turns and activations",
    "category": "Companions & Pets",
    "tags": ["pet turn", "activate pet", "pet activation", "extra activation", "pet move attack"],
    "text": "A Pet acts right after its Hero: Move, then Attack (never attack then move). An \"activate\" effect lets you move+attack, just attack, or summon/resummon a Pet; generic effects can activate any of your Pets. <b>(errata)</b> When a Pet is activated by such a special activation, its Conditions trigger as normal.",
    "page": 16
  },
  {
    "title": "Companions",
    "category": "Companions & Pets",
    "tags": ["companion", "companions", "npc ally", "tharmagar", "recruit", "follower"],
    "text": "Allies found during the story. No Health — they have <b>Sturdiness</b>. Act after the Hero they follow (Move, then Attack). Can hold SHIELD and receive PREVENT. Any number allowed, alongside Pets, but Pet abilities don't affect them. Dismissed at the Camp Phase (kept between Sequential Adventures).",
    "page": 15
  },
  {
    "title": "Companion card",
    "category": "Companions & Pets",
    "tags": ["companion card", "companion stats", "sturdiness value"],
    "text": "Shows card type, name and class, Sturdiness, Attack Type (Melee/Ranged/Magical), Movement points, attack damage, and special effects written like a Monster card. A missing element simply doesn't apply.",
    "page": 15
  },
  {
    "title": "STURDINESS",
    "category": "Companions & Pets",
    "tags": ["sturdiness", "sturdy", "companion damage", "companion defeated"],
    "text": "Damage from a single blow up to the Sturdiness value is ignored (even non-preventable). If one blow exceeds it by 1+, the Companion is defeated. Heroes can PREVENT for it; SHIELD tokens it holds are used the first time it takes any damage. <b>(errata)</b> All Condition damage is added together and dealt at once (BLEED 4 + POISON 2 = 6 in one blow).",
    "page": 57
  },
  {
    "title": "How Monsters treat Pets and Companions",
    "category": "Companions & Pets",
    "tags": ["monster target pet", "target companion", "pet aggro", "lowest priority"],
    "text": "Monsters ignore Pets/Companions when choosing targets; they attack them only when it doesn't cost them a Hero target — e.g., an extra CLEAVE/MULTISHOT/STRIKE target alongside the Primary Target, or when no Hero can be attacked. If a Pet or a Companion could be chosen, the Party Leader picks.",
    "page": 39
  },
  {
    "title": "FLYBY",
    "category": "Companions & Pets",
    "tags": ["flyby", "fly by", "return to master", "eagle"],
    "text": "After attacking, the Pet returns for free to a square adjacent to its master. It ignores squares flown over, but is affected by the landing square.",
    "page": 55
  },
  {
    "title": "UNIQUE (Pet)",
    "category": "Companions & Pets",
    "tags": ["unique", "unique pet", "story pet"],
    "text": "This Pet can only be summoned by the specific Skill that activates it. Once on the board, your generic pet-activation Skills work on it normally.",
    "page": 58
  },
  {
    "title": "LOOT (Companion)",
    "category": "Companions & Pets",
    "tags": ["loot", "companion loot", "safe chest"],
    "text": "If a Companion's hit with LOOT is the killing blow, replace the defeated enemy with a Chest token that is safe (no Trap Die). It's an object, not a Solid Object.",
    "page": 56
  },
  {
    "title": "TRICK OR TREAT (Tharmagar)",
    "category": "Companions & Pets",
    "tags": ["trick or treat", "tharmagar"],
    "text": "When Tharmagar activates, his controller chooses: a Hero within Range 1 gets HEAL 2, or a Monster within Range 1 suffers BLEED 2, BURN 2 or POISON 2 (controller's choice).",
    "page": 58
  },
  {
    "title": "NPC tokens",
    "category": "Companions & Pets",
    "tags": ["npc", "npc token", "villager", "children", "bystander"],
    "text": "Non-player characters (bystanders, or tokens representing Companions). They are Solid Objects and follow special rules given by each Adventure.",
    "page": 56
  },
  {
    "title": "Your bag",
    "category": "Items & loot",
    "tags": ["bag", "backpack", "inventory", "carry", "item limit", "capacity"],
    "text": "Holds <b>up to two items</b> (Consumables or unused Equipment). Bag contents carry over to the next Adventure. If you get a new item with a full bag, you may discard one to make room.",
    "page": 9
  },
  {
    "title": "Chests",
    "category": "Items & loot",
    "tags": ["chest", "chests", "treasure", "loot", "chest card", "rarity", "common", "rare", "epic"],
    "text": "Chest tokens are Solid Objects (Darkness may go under them). Loot with Search a Chest. Chest cards by rarity: Common ×4, Uncommon ×3, Rare ×2, Epic ×1.",
    "page": 18
  },
  {
    "title": "Trap Die",
    "category": "Items & loot",
    "tags": ["trap die", "trap dice", "d6", "trapped chest", "chest trap"],
    "text": "Rolled whenever a Chest is searched (d6): <b>POISON</b> face → POISON 2; <b>SLOW</b> → SLOW; <b>BURN</b> → BURN 2; <b>BLEED</b> → BLEED 2; two <b>blank</b> faces → no trap.",
    "page": 31
  },
  {
    "title": "Equipment and proficiencies",
    "category": "Items & loot",
    "tags": ["equipment", "gear", "proficiency", "proficient", "equip", "slots"],
    "text": "Four slots: Weapon, Off-Hand Tool, Armor, Trinket. You can carry anything, but only equip Subtypes you are proficient with (shown on your board); everyone is proficient with Trinkets.",
    "page": 34
  },
  {
    "title": "Weapons",
    "category": "Items & loot",
    "tags": ["weapon", "weapons", "heavy", "light", "implement", "ranged weapon", "accuracy", "base damage"],
    "text": "Subtypes: Heavy, Light (Melee type) and Implement, Ranged (Ranged type). A Weapon gives Accuracy and base damage. Its Type matters only for Focus Ability Weapon Attacks and attacks commanded by allies (and whether those can be made while engaged).",
    "page": 34
  },
  {
    "title": "Off-Hand Tools, Armor and Trinkets",
    "category": "Items & loot",
    "tags": ["off-hand", "offhand", "shield item", "relic", "armor", "cloth", "leather", "plate", "trinket", "ring", "amulet"],
    "text": "Off-Hand Tool Subtypes: Off-Hand Weapon, Shield, Relic. Armor: Cloth, Leather, Plate. Trinkets: anyone can equip.",
    "page": 35
  },
  {
    "title": "Equipment Skills",
    "category": "Items & loot",
    "tags": ["equipment skill", "dock slot", "item skill", "use equipment"],
    "text": "To use an Equipment Skill it must be equipped and you spend a matching cube (as a Reaction if it's a Reaction, otherwise as one of your 2 Cube Actions). Dock slots give no extra cube. Two dock slots = usable twice (still once per threat). Equipment Skills can't be blocked by Curse/Trauma Cubes. Discarded Equipment returns to its deck.",
    "page": 35
  },
  {
    "title": "Double-sided items and Sockets",
    "category": "Items & loot",
    "tags": ["double-sided", "flip", "socket", "cosmic gemstone", "gem", "upgrade item"],
    "text": "Adventure Items arrive FRONT face up and can only flip when an effect allows or forces it (no flipping back unless allowed). Items with \"socket\" can be flipped permanently by discarding a Cosmic Gemstone. Exchanging/unequipping keeps the current face.",
    "page": 36
  },
  {
    "title": "Consumable Items",
    "category": "Items & loot",
    "tags": ["consumable", "potion", "scroll", "gem", "pattern", "one use"],
    "text": "Marked \"DISCARD\"; single use. Must be kept in the bag, can't be stashed, and carry over between Adventures until used. Subtypes include Gem, Pattern, Potion and Scroll. Used ones go to the discard pile and return to the Chest deck at the next Adventure's setup.",
    "page": 29
  },
  {
    "title": "Starting Gear",
    "category": "Items & loot",
    "tags": ["starting gear", "starting weapon", "starting armor", "basic gear"],
    "text": "Each Hero starts with a Starting Weapon and Starting Armor matching their proficiencies. Discarded Starting Gear can be retrieved from the box at any Camp Phase — you never run out.",
    "page": 8
  },
  {
    "title": "Stashing items",
    "category": "Items & loot",
    "tags": ["stash", "storage", "store items", "retrieve", "bank"],
    "text": "During the Camp Phase only, you may stash or retrieve Equipment and Adventure Items (note them on the Campaign Log). Chest Items, including Consumables, can't be stashed.",
    "page": 51
  },
  {
    "title": "Equipment Offer (Camp Items)",
    "category": "Items & loot",
    "tags": ["camp items", "equipment offer", "level x equipment", "previous camp items deck", "shop", "reward items"],
    "text": "When rewarded with a Level X Equipment deck, reveal all cards of that level; each Hero picks one (Party Leader settles disputes). The rest become the <b>Previous Camp Items Deck</b>, which is only ever the most recently revealed level.",
    "page": 50
  },
  {
    "title": "Interactions",
    "category": "Campaign & Camp",
    "tags": ["interaction", "story", "choices", "resolutions", "charges", "interactions book"],
    "text": "Story moments shown as tokens (usually 2 charges) or triggered by a Setup (usually once). Pick an unused option and read its Resolution in the Adventure Book. Most affect only the choosing Hero; some affect the party or the Party Leader. Interaction tokens are Solid Objects.",
    "page": 18
  },
  {
    "title": "Skill Challenges",
    "category": "Campaign & Camp",
    "tags": ["skill challenge", "challenge", "difficulty", "check", "test", "saving throw", "roll check"],
    "text": "Roll d20 + the stated bonus per cube of the named color you own (e.g., +2 per Melee cube); the cubes count whether available or not and are not spent. Meet or beat the Difficulty to succeed. Some abilities allow rerolls.",
    "page": 19
  },
  {
    "title": "Campaign Log",
    "category": "Campaign & Camp",
    "tags": ["campaign log", "log sheet", "save", "record", "progress", "save game"],
    "text": "Each player's sheet recording Hero progress, Statuses, Aura, Outcomes, stashed items, Dungeon Role cube color, and Sequential Adventure data (Curse/Trauma Cubes, Runes) so the Campaign can be paused and resumed.",
    "page": 6
  },
  {
    "title": "Status",
    "category": "Campaign & Camp",
    "tags": ["status", "statuses", "temporary", "blessing", "morale"],
    "text": "Short-term story effects noted on the Campaign Log; any number allowed. Erased at the next Camp Phase (so they linger through Adventures that skip Camp).",
    "page": 6
  },
  {
    "title": "Aura",
    "category": "Campaign & Camp",
    "tags": ["aura", "auras", "blessing", "persistent"],
    "text": "Only <b>one</b> Aura at a time. It stays until the Hero receives a Trauma Cube (knocked out) or a new Aura (replaces it), or a special effect removes it. Not removed at Camp.",
    "page": 6
  },
  {
    "title": "Outcome",
    "category": "Campaign & Camp",
    "tags": ["outcome", "outcomes", "consequence", "campaign choice", "story flag"],
    "text": "Lasts for the whole Campaign unless an Interaction resolution erases it. Interactions and Boss fights may change based on Outcomes.",
    "page": 6
  },
  {
    "title": "Camp Phase",
    "category": "Campaign & Camp",
    "tags": ["camp", "camp phase", "rest", "between adventures", "heal up", "downtime"],
    "text": "Each Hero, in order: <ul><li>1. Remove all Condition and Resource tokens.</li><li>2. Remove all Curse and Trauma Cubes.</li><li>3. Recall all Action Cubes.</li><li>4. Recover all Health.</li><li>5. Erase Statuses (keep Auras and Outcomes).</li><li>6. Receive the Adventure's reward.</li><li>7. Stash/retrieve items.</li></ul>Companions are discharged. You may retrieve Starting Gear and <b>(errata)</b> switch Dungeon Roles.",
    "page": 50
  },
  {
    "title": "Rewards",
    "category": "Campaign & Camp",
    "tags": ["reward", "rewards", "loot reward", "unlock", "experience"],
    "text": "The Adventure Book lists each Hero's reward at the end of the Adventure (Skills, Class Abilities, Equipment decks...). Unlock it right away and record it on your Campaign Log.",
    "page": 50
  },
  {
    "title": "Sequential Adventures",
    "category": "Campaign & Camp",
    "tags": ["sequential", "chained", "no camp", "continue", "linked adventure", "next chapter"],
    "text": "No Camp Phase in between. Take the reward; take a Free Recall and recover all Health; remove Conditions (keep Resource tokens); Pets are dismissed, Companions stay. Keep the Hero board and track (reset Rune card to face A). If you stop the session, record Curse/Trauma Cubes and the number of Runes on the track; next time redistribute cubes and draw that many Runes (no Darkness tiles).",
    "page": 51
  },
  {
    "title": "Restarting a Sequential Adventure",
    "category": "Campaign & Camp",
    "tags": ["restart sequential", "retry", "balance", "easier"],
    "text": "After resetting and before playing, you may do any of: remove one Rune of each color from the track; give each Hero CLEANSE 2; remove a Trauma Cube from one Hero.",
    "page": 51
  },
  {
    "title": "What happens when a Hero reaches 0 Health?",
    "category": "Common questions",
    "tags": ["0 hp", "zero health", "die", "dead", "knocked out", "ko", "dying"],
    "text": "They are <b>knocked out</b>, not dead: remove Conditions, Free Recall, take 1 Trauma Cube, lose their Aura, and are untargetable until the start of their next turn, when they return at full Health. The real danger is the Trauma Cube — a 2nd one fails the Adventure.",
    "page": 15
  },
  {
    "title": "What happens when a Hero is defeated?",
    "category": "Common questions",
    "tags": ["hero defeated", "hero dies", "hero killed", "corrupted", "lose", "game over"],
    "text": "A Hero is defeated (killed) on receiving their <b>2nd Trauma Cube</b> or corrupted on their <b>6th Curse Cube</b>. Either way the whole Adventure immediately fails and must be restarted, with no other Campaign penalty.",
    "page": 19
  },
  {
    "title": "What happens if the Rune bag runs out?",
    "category": "Common questions",
    "tags": ["rune bag empty", "last rune", "out of runes", "time up", "timer"],
    "text": "The moment the last Rune is drawn, the Adventure <b>immediately ends in failure</b>.",
    "page": 16
  },
  {
    "title": "How much falling damage do you take?",
    "category": "Common questions",
    "tags": ["falling damage", "fall", "height", "drop", "jump down", "levels", "pushed off"],
    "text": "<b>2 non-preventable damage</b> when dropping 2 levels (level 2 → 0) in one step, or when pushed/telekinesed from 2 to 0. Dropping 1 level is free. JUMP and FLYING avoid it. Level 2 is the highest, so there is no bigger fall in the core rules. Falling into abysses/pits is <b>not covered</b> by the rulebook (Adventure-specific rules only).",
    "page": 23
  },
  {
    "title": "Can a Companion be healed?",
    "category": "Common questions",
    "tags": ["heal companion", "companion health", "companion hp"],
    "text": "Companions have <b>no Health</b>, only Sturdiness, so there is nothing to heal: they ignore any single blow up to their Sturdiness and are defeated by one that exceeds it. Protect them with SHIELD tokens and PREVENT instead.",
    "page": 15
  },
  {
    "title": "Can a Pet be healed?",
    "category": "Common questions",
    "tags": ["heal pet", "pet health", "pet hp", "revive pet"],
    "text": "A Pet has only 1 HP and healing can't exceed maximum, so healing does nothing useful. When it loses its HP it is dispelled, and you can summon it again with a Skill that activates it.",
    "page": 9
  },
  {
    "title": "Can I move after attacking?",
    "category": "Common questions",
    "tags": ["move after attack", "move attack move", "split movement", "lose movement"],
    "text": "Yes, if you haven't used your free Move Action yet (or buy another). But a Cube Action or Reaction ends a move in progress: leftover points from an interrupted move are lost.",
    "page": 13
  },
  {
    "title": "Does a Minor Action interrupt my movement?",
    "category": "Common questions",
    "tags": ["minor action movement", "open door while moving", "search mid move", "focus while moving"],
    "text": "Generally no: you can stop to open a Door, search a Chest, etc. and keep moving. <b>(errata)</b> Exception: using a Focus Ability while moving makes you lose the remaining movement points, just like a Cube Action.",
    "page": 22
  },
  {
    "title": "Do I take Darkness damage on every step?",
    "category": "Common questions",
    "tags": ["darkness every step", "darkness twice", "darkness end turn", "darkness damage how often"],
    "text": "No. 2 damage the first time you step on Darkness in a turn, or at end of turn if you haven't taken it that turn. You can take it again on another character's turn (e.g., moving via a Reaction). Starting your turn on Darkness does nothing by itself.",
    "page": 46
  },
  {
    "title": "Can I use a Reaction to protect another Hero?",
    "category": "Common questions",
    "tags": ["protect ally", "reaction for ally", "help ally", "prevent for friend"],
    "text": "Yes, if the effect isn't SELF and the protected Hero is within its Range. Each Hero may use one Reaction per threat, and several Heroes may combine.",
    "page": 14
  },
  {
    "title": "Can I keep my SHIELD tokens and use PREVENT instead?",
    "category": "Common questions",
    "tags": ["save shield", "skip shield", "shield first"],
    "text": "No. SHIELD tokens are always used first against preventable damage; only what's left can be PREVENTed.",
    "page": 15
  },
  {
    "title": "Does a Condition apply if the attack misses or is fully prevented?",
    "category": "Common questions",
    "tags": ["condition on miss", "prevented condition", "collateral", "bleed on miss"],
    "text": "For Weapon Attacks and Monster attacks: no — collateral Conditions need at least 1 damage dealt. For Spell Attacks: yes — their Conditions apply even if all damage is prevented.",
    "page": 21
  },
  {
    "title": "Can a ranged Hero attack while adjacent to an enemy?",
    "category": "Common questions",
    "tags": ["ranged engaged", "bow adjacent", "shoot in melee"],
    "text": "Not with a ranged Weapon Attack (red cube Skill, or Focus/commanded attack with a Ranged/Implement weapon). Melee (yellow) Weapon Attacks and Spell Attacks are fine. Or move away first — disengaging is free.",
    "page": 13
  },
  {
    "title": "What if a Monster can't reach its target?",
    "category": "Common questions",
    "tags": ["monster can't reach", "out of range monster", "monster no target"],
    "text": "It switches to the next target it can reach per its behavior. If it can reach nobody, it uses its full movement toward its Primary Target. If no target is visible (all in STEALTH), it doesn't move or attack.",
    "page": 39
  },
  {
    "title": "Do Monsters roll to hit?",
    "category": "Common questions",
    "tags": ["monster roll", "monster miss", "monster accuracy"],
    "text": "No. Monster attacks always hit a target in Range; Heroes can only respond with SHIELD and Reactions.",
    "page": 40
  },
  {
    "title": "Does a Critical Hit double Conditions?",
    "category": "Common questions",
    "tags": ["crit condition", "crit bleed", "crit double effect"],
    "text": "No. A Crit doubles damage (including +X DMG) but never Conditions or other effects.",
    "page": 27
  },
  {
    "title": "Does a knocked-out Hero get a Curse Cube from the Recall?",
    "category": "Common questions",
    "tags": ["knocked out curse", "ko recall", "free recall ko"],
    "text": "No. Being knocked out gives a <b>Free</b> Recall (no Curse Cube) — but you do take a Trauma Cube.",
    "page": 62
  },
  {
    "title": "How many Focus Abilities can I use per turn?",
    "category": "Common questions",
    "tags": ["focus per turn", "multiple focus", "focus limit"],
    "text": "One per turn (it's a Minor Action). You may still use a Reaction Focus Ability later in the same round, outside your turn.",
    "page": 31
  },
  {
    "title": "Can I trade items during combat?",
    "category": "Common questions",
    "tags": ["trade engaged", "exchange in combat", "give potion combat"],
    "text": "Not while engaged — Exchange Items is a Minor Action that can't be used adjacent to an enemy. Using a Consumable is allowed while engaged.",
    "page": 13
  },
  {
    "title": "Can I change my Dungeon Role?",
    "category": "Common questions",
    "tags": ["change role", "switch role", "respec"],
    "text": "Yes. <b>(errata)</b> Heroes may switch Dungeon Roles whenever they visit the Camp Phase. Learned role upgrades transfer to the new role, and you may also change the color of the cube gained from Dungeon Role Skills.",
    "page": 33
  },
  {
    "title": "Are Pets and Companions ALLIES?",
    "category": "Common questions",
    "tags": ["pet ally", "companion ally", "ally keyword"],
    "text": "<b>(errata FAQ)</b> No: the ALLY keyword means \"another Hero\". (The rulebook's targeting section says Heroes are allied with Pets and Companions; the errata settles the keyword.)",
    "page": 26
  },
  {
    "title": "What carries over between Adventures?",
    "category": "Common questions",
    "tags": ["carry over", "keep items", "persist", "next adventure"],
    "text": "Bag contents (Equipment and Consumables), equipped items, stashed items, learned Skills/Abilities, Auras and Outcomes. The Camp Phase removes tokens, Curse/Trauma Cubes, Statuses and Companions and restores Health.",
    "page": 50
  },
  {
    "title": "When does the Darkness hurt Monsters?",
    "category": "Common questions",
    "tags": ["darkness monster", "monster in darkness", "darkness heal monster"],
    "text": "It doesn't damage them: Darkness damages Heroes, Companions and Pets. Monsters standing on it gain +2 base damage instead.",
    "page": 46
  },
  {
    "title": "Can I target a knocked-out Hero to heal them?",
    "category": "Common questions",
    "tags": ["heal knocked out", "revive ally", "target ko"],
    "text": "No. A knocked-out Hero can't be targeted by any attack or Skill, even from allies, and ignores effects until they catch their breath.",
    "page": 15
  },
  {
    "title": "Can Monsters walk through Lava or other harmful terrain?",
    "category": "Common questions",
    "tags": ["monster lava", "monster terrain", "push monster lava"],
    "text": "They avoid it when possible but will cross it (even to their death) if it's the only way. Pushing or TELEKINESIS-ing a Monster into harmful terrain affects it immediately.",
    "page": 40
  }
];
