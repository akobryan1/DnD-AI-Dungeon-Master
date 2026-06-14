/* ============================================================
   D&D 5e Data Structures (extracted from provided markdown)
   ============================================================ */

// Proficiency bonus by level
const proficiencyBonusByLevel = {
  1:2,2:2,3:2,4:2,
  5:3,6:3,7:3,8:3,
  9:4,10:4,11:4,12:4,
  13:5,14:5,15:5,16:5,
  17:6,18:6,19:6,20:6
};

// Races (full data as provided)
const races = {
  "Dwarf": {
    subraces: [
      { name: "Hill Dwarf", abilityIncrease: { Constitution: 2, Wisdom: 1 }, traits: ["Dwarven Toughness: +1 HP per level"], speed: 25, size: "Medium", darkvision: 60, languages: ["Common","Dwarvish"], additionalTraits: ["Dwarven Resilience: advantage on saves vs poison, resistance to poison damage","Dwarven Combat Training: proficiency with battleaxe, handaxe, throwing hammer, warhammer","Tool Proficiency: one artisan's tool","Stonecunning: double proficiency on History checks related to stonework"] },
      { name: "Mountain Dwarf", abilityIncrease: { Constitution: 2, Strength: 2 }, traits: ["Dwarven Armor Training: proficiency with light and medium armor"], speed: 25, size: "Medium", darkvision: 60, languages: ["Common","Dwarvish"], additionalTraits: ["Dwarven Resilience","Dwarven Combat Training","Tool Proficiency","Stonecunning"] }
    ]
  },
  "Elf": {
    subraces: [
      { name: "High Elf", abilityIncrease: { Dexterity: 2, Intelligence: 1 }, traits: ["Elf Weapon Training: longsword, shortsword, shortbow, longbow","Cantrip: one wizard cantrip","Extra Language"], speed: 30, size: "Medium", darkvision: 60, languages: ["Common","Elvish"], additionalTraits: ["Keen Senses: proficiency in Perception","Fey Ancestry: advantage vs charm, can't be put to sleep","Trance: 4 hours meditation instead of sleep"] },
      { name: "Wood Elf", abilityIncrease: { Dexterity: 2, Wisdom: 1 }, traits: ["Elf Weapon Training","Fleet of Foot: speed 35 ft","Mask of the Wild"], speed: 35, size: "Medium", darkvision: 60, languages: ["Common","Elvish"], additionalTraits: ["Keen Senses","Fey Ancestry","Trance"] },
      { name: "Dark Elf (Drow)", abilityIncrease: { Dexterity: 2, Charisma: 1 }, traits: ["Superior Darkvision 120 ft","Sunlight Sensitivity","Drow Magic: dancing lights, faerie fire, darkness","Drow Weapon Training: rapiers, shortswords, hand crossbows"], speed: 30, size: "Medium", darkvision: 120, languages: ["Common","Elvish"], additionalTraits: ["Keen Senses","Fey Ancestry","Trance"] }
    ]
  },
  "Halfling": {
    subraces: [
      { name: "Lightfoot", abilityIncrease: { Dexterity: 2, Charisma: 1 }, traits: ["Naturally Stealthy"], speed: 25, size: "Small", darkvision: 0, languages: ["Common","Halfling"], additionalTraits: ["Lucky: reroll 1 on attack, check, save","Brave: advantage vs frightened","Halfling Nimbleness: move through space of larger creature"] },
      { name: "Stout", abilityIncrease: { Dexterity: 2, Constitution: 1 }, traits: ["Stout Resilience: advantage vs poison, resistance to poison damage"], speed: 25, size: "Small", darkvision: 0, languages: ["Common","Halfling"], additionalTraits: ["Lucky","Brave","Halfling Nimbleness"] }
    ]
  },
  "Human": {
    subraces: [
      { name: "Human", abilityIncrease: { Strength:1, Dexterity:1, Constitution:1, Intelligence:1, Wisdom:1, Charisma:1 }, traits: [], speed: 30, size: "Medium", darkvision: 0, languages: ["Common","one extra"], additionalTraits: [] }
    ]
  },
  "Dragonborn": {
    subraces: [
      { name: "Dragonborn", abilityIncrease: { Strength:2, Charisma:1 }, traits: ["Draconic Ancestry (choose type)","Breath Weapon","Damage Resistance"], speed: 30, size: "Medium", darkvision: 0, languages: ["Common","Draconic"], additionalTraits: [] }
    ]
  },
  "Gnome": {
    subraces: [
      { name: "Forest Gnome", abilityIncrease: { Intelligence:2, Dexterity:1 }, traits: ["Natural Illusionist: minor illusion cantrip","Speak with Small Beasts"], speed: 25, size: "Small", darkvision: 60, languages: ["Common","Gnomish"], additionalTraits: ["Gnome Cunning: advantage on Int, Wis, Cha saves vs magic"] },
      { name: "Rock Gnome", abilityIncrease: { Intelligence:2, Constitution:1 }, traits: ["Artificer's Lore","Tinker"], speed: 25, size: "Small", darkvision: 60, languages: ["Common","Gnomish"], additionalTraits: ["Gnome Cunning"] }
    ]
  },
  "Half-Elf": {
    subraces: [
      { name: "Half-Elf", abilityIncrease: { Charisma:2 }, traits: ["Skill Versatility: two extra skill proficiencies"], speed: 30, size: "Medium", darkvision: 60, languages: ["Common","Elvish","one extra"], additionalTraits: ["Fey Ancestry"] }
    ]
  },
  "Half-Orc": {
    subraces: [
      { name: "Half-Orc", abilityIncrease: { Strength:2, Constitution:1 }, traits: ["Menacing: proficiency in Intimidation","Relentless Endurance","Savage Attacks"], speed: 30, size: "Medium", darkvision: 60, languages: ["Common","Orc"], additionalTraits: [] }
    ]
  },
  "Tiefling": {
    subraces: [
      { name: "Standard (Infernal Legacy)", abilityIncrease: { Intelligence:1, Charisma:2 }, traits: ["Hellish Resistance: resistance to fire damage","Infernal Legacy: thaumaturgy, hellish rebuke, darkness"], speed: 30, size: "Medium", darkvision: 60, languages: ["Common","Infernal"], additionalTraits: [] },
      { name: "Feral (SCAG)", abilityIncrease: { Dexterity:2, Intelligence:1 }, traits: ["Hellish Resistance: resistance to fire damage","Infernal Legacy: thaumaturgy, hellish rebuke, darkness"], speed: 30, size: "Medium", darkvision: 60, languages: ["Common","Infernal"], additionalTraits: [] },
      { name: "Winged (SCAG)", abilityIncrease: { Charisma:2, Dexterity:1 }, traits: ["Hellish Resistance: resistance to fire damage","Wings: flying speed of 30 ft."], speed: 30, size: "Medium", darkvision: 60, languages: ["Common","Infernal"], additionalTraits: [] },
      { name: "Devil's Tongue (MToF)", abilityIncrease: { Charisma:2, Intelligence:1 }, traits: ["Hellish Resistance: resistance to fire damage","Devil's Tongue: vicious mockery, charm person, enthrall"], speed: 30, size: "Medium", darkvision: 60, languages: ["Common","Infernal"], additionalTraits: [] }
    ]
  }
};

// Classes
const classes = {
  "Artificer": { hitDie: "d8", primaryAbility: "Intelligence", savingThrows: ["Constitution","Intelligence"], armorProficiencies: ["Light armor","Medium armor","Shields"], weaponProficiencies: ["Simple"], skillChoices: 2, skillOptions: ["Arcana","History","Investigation","Medicine","Nature","Perception","Sleight of Hand"], spellcasting: true, spellcastingAbility: "Intelligence", spellList: "Artificer", subclassLevel: 3, subclasses: ["Alchemist","Armorer","Artillerist","Battle Smith"] },
  "Barbarian": { hitDie: "d12", primaryAbility: "Strength", savingThrows: ["Strength","Constitution"], armorProficiencies: ["Light armor","Medium armor","Shields"], weaponProficiencies: ["Simple","Martial"], skillChoices: 2, skillOptions: ["Animal Handling","Athletics","Intimidation","Nature","Perception","Survival"], spellcasting: false, subclassLevel: 3, subclasses: ["Path of the Berserker","Path of the Totem Warrior","Path of the Ancestral Guardian","Path of the Beast","Path of Wild Magic"] },
  "Bard": { hitDie: "d8", primaryAbility: "Charisma", savingThrows: ["Dexterity","Charisma"], armorProficiencies: ["Light armor"], weaponProficiencies: ["Simple","hand crossbows","longswords","rapiers","shortswords"], skillChoices: 3, skillOptions: ["Acrobatics","Animal Handling","Arcana","Athletics","Deception","History","Insight","Intimidation","Investigation","Medicine","Nature","Perception","Performance","Persuasion","Religion","Sleight of Hand","Stealth","Survival"], spellcasting: true, spellcastingAbility: "Charisma", spellList: "Bard", subclassLevel: 3, subclasses: ["College of Lore","College of Valor","College of Swords","College of Eloquence"] },
  "Cleric": { hitDie: "d8", primaryAbility: "Wisdom", savingThrows: ["Wisdom","Charisma"], armorProficiencies: ["Light armor","Medium armor","Shields"], weaponProficiencies: ["Simple"], skillChoices: 2, skillOptions: ["History","Insight","Medicine","Persuasion","Religion"], spellcasting: true, spellcastingAbility: "Wisdom", spellList: "Cleric", subclassLevel: 1, subclasses: ["Knowledge Domain","Life Domain","Light Domain","Nature Domain","Tempest Domain","Trickery Domain","War Domain","Forge Domain","Grave Domain","Order Domain","Twilight Domain"] },
  "Druid": { hitDie: "d8", primaryAbility: "Wisdom", savingThrows: ["Intelligence","Wisdom"], armorProficiencies: ["Light armor","Medium armor","Shields (nonmetal)"], weaponProficiencies: ["Clubs","daggers","darts","javelins","maces","quarterstaffs","scimitars","sickles","slings","spears"], skillChoices: 2, skillOptions: ["Arcana","Animal Handling","Insight","Medicine","Nature","Perception","Religion","Survival"], spellcasting: true, spellcastingAbility: "Wisdom", spellList: "Druid", subclassLevel: 2, subclasses: ["Circle of the Land","Circle of the Moon","Circle of the Shepherd","Circle of Spores","Circle of Stars","Circle of Wildfire"] },
  "Fighter": { hitDie: "d10", primaryAbility: "Strength or Dexterity", savingThrows: ["Strength","Constitution"], armorProficiencies: ["All armor","Shields"], weaponProficiencies: ["Simple","Martial"], skillChoices: 2, skillOptions: ["Acrobatics","Animal Handling","Athletics","History","Insight","Intimidation","Perception","Survival"], spellcasting: false, subclassLevel: 3, subclasses: ["Champion","Battle Master","Eldritch Knight","Arcane Archer","Rune Knight"] },
  "Monk": { hitDie: "d8", primaryAbility: "Dexterity and Wisdom", savingThrows: ["Strength","Dexterity"], armorProficiencies: ["None"], weaponProficiencies: ["Simple","shortswords"], skillChoices: 2, skillOptions: ["Acrobatics","Athletics","History","Insight","Religion","Stealth"], spellcasting: false, subclassLevel: 3, subclasses: ["Way of the Open Hand","Way of Shadow","Way of the Four Elements","Way of the Drunken Master","Way of the Sun Soul","Way of Mercy"] },
  "Paladin": { hitDie: "d10", primaryAbility: "Strength and Charisma", savingThrows: ["Wisdom","Charisma"], armorProficiencies: ["All armor","Shields"], weaponProficiencies: ["Simple","Martial"], skillChoices: 2, skillOptions: ["Athletics","Insight","Intimidation","Medicine","Persuasion","Religion"], spellcasting: true, spellcastingAbility: "Charisma", spellList: "Paladin", subclassLevel: 3, subclasses: ["Oath of Devotion","Oath of the Ancients","Oath of Vengeance","Oath of Conquest","Oath of Redemption"] },
  "Ranger": { hitDie: "d10", primaryAbility: "Dexterity and Wisdom", savingThrows: ["Strength","Dexterity"], armorProficiencies: ["Light armor","Medium armor","Shields"], weaponProficiencies: ["Simple","Martial"], skillChoices: 3, skillOptions: ["Animal Handling","Athletics","Insight","Investigation","Nature","Perception","Stealth","Survival"], spellcasting: true, spellcastingAbility: "Wisdom", spellList: "Ranger", subclassLevel: 3, subclasses: ["Hunter","Beast Master","Gloom Stalker","Monster Slayer","Swarmkeeper"] },
  "Rogue": { hitDie: "d8", primaryAbility: "Dexterity", savingThrows: ["Dexterity","Intelligence"], armorProficiencies: ["Light armor"], weaponProficiencies: ["Simple","hand crossbows","longswords","rapiers","shortswords"], skillChoices: 4, skillOptions: ["Acrobatics","Athletics","Deception","Insight","Intimidation","Investigation","Perception","Performance","Persuasion","Sleight of Hand","Stealth"], spellcasting: false, subclassLevel: 3, subclasses: ["Thief","Assassin","Arcane Trickster","Swashbuckler","Soulknife"] },
  "Sorcerer": { hitDie: "d6", primaryAbility: "Charisma", savingThrows: ["Constitution","Charisma"], armorProficiencies: ["None"], weaponProficiencies: ["Daggers","darts","slings","quarterstaffs","light crossbows"], skillChoices: 2, skillOptions: ["Arcana","Deception","Insight","Intimidation","Persuasion","Religion"], spellcasting: true, spellcastingAbility: "Charisma", spellList: "Sorcerer", subclassLevel: 1, subclasses: ["Draconic Bloodline","Wild Magic","Divine Soul","Shadow Magic","Storm Sorcery"] },
  "Warlock": { hitDie: "d8", primaryAbility: "Charisma", savingThrows: ["Wisdom","Charisma"], armorProficiencies: ["Light armor"], weaponProficiencies: ["Simple"], skillChoices: 2, skillOptions: ["Arcana","Deception","History","Intimidation","Investigation","Nature","Religion"], spellcasting: true, spellcastingAbility: "Charisma", spellList: "Warlock", subclassLevel: 1, subclasses: ["The Archfey","The Fiend","The Great Old One","The Hexblade","The Fathomless"] },
  "Wizard": { hitDie: "d6", primaryAbility: "Intelligence", savingThrows: ["Intelligence","Wisdom"], armorProficiencies: ["None"], weaponProficiencies: ["Daggers","darts","slings","quarterstaffs","light crossbows"], skillChoices: 2, skillOptions: ["Arcana","History","Insight","Investigation","Medicine","Religion"], spellcasting: true, spellcastingAbility: "Intelligence", spellList: "Wizard", subclassLevel: 2, subclasses: ["School of Abjuration","School of Conjuration","School of Divination","School of Enchantment","School of Evocation","School of Illusion","School of Necromancy","School of Transmutation","Bladesinging"] }
};

// Backgrounds
const backgrounds = {
  "Acolyte": { skillProficiencies: ["Insight","Religion"], toolProficiencies: [], languages: ["Two of your choice"], equipment: ["holy symbol","prayer book","5 sticks of incense","vestments","common clothes","15 gp"], feature: { name: "Shelter of the Faithful", description: "As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (and only you) at a modest lifestyle." } },
  "Charlatan": { skillProficiencies: ["Deception","Sleight of Hand"], toolProficiencies: ["Disguise kit","Forgery kit"], languages: [], equipment: ["fine clothes","disguise kit","tools of con","15 gp"], feature: { name: "False Identity", description: "You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy." } },
  "Criminal": { skillProficiencies: ["Deception","Stealth"], toolProficiencies: ["Gaming set","Thieves' tools"], languages: [], equipment: ["crowbar","dark common clothes","15 gp"], feature: { name: "Criminal Contact", description: "You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you." } },
  "Entertainer": { skillProficiencies: ["Acrobatics","Performance"], toolProficiencies: ["Disguise kit","Musical instrument"], languages: [], equipment: ["musical instrument","favor of admirer","costume","15 gp"], feature: { name: "By Popular Demand", description: "You can always find a place to perform, usually in an inn or tavern but possibly with a circus, a traveling troupe, or a similar venue. At such a place, you receive free lodging and food of a modest or comfortable standard, as long as you perform each night. In addition, your performance makes you something of a local figure." } },
  "Folk Hero": { skillProficiencies: ["Animal Handling","Survival"], toolProficiencies: ["Artisan's tools","Vehicles (land)"], languages: [], equipment: ["artisan's tools","shovel","iron pot","common clothes","10 gp"], feature: { name: "Rustic Hospitality", description: "Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you." } },
  "Guild Artisan": { skillProficiencies: ["Insight","Persuasion"], toolProficiencies: ["Artisan's tools"], languages: ["One of your choice"], equipment: ["artisan's tools","letter of introduction","traveler's clothes","15 gp"], feature: { name: "Guild Membership", description: "As an established and respected member of a guild, you can rely on certain benefits from your membership. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities, a guildhall offers a central meeting place where guild members can gather. At such a location, you can use the guild's services, such as scribes or messengers." } },
  "Hermit": { skillProficiencies: ["Medicine","Religion"], toolProficiencies: ["Herbalism kit"], languages: ["One of your choice"], equipment: ["scroll case","winter blanket","common clothes","herbalism kit","5 gp"], feature: { name: "Discovery", description: "The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of your seclusion. It might be a great truth about the cosmos, the deities, the powerful beings of the outer planes, or the forces of nature." } },
  "Noble": { skillProficiencies: ["History","Persuasion"], toolProficiencies: ["Gaming set"], languages: ["One of your choice"], equipment: ["fine clothes","signet ring","scroll of pedigree","25 gp"], feature: { name: "Position of Privilege", description: "Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere." } },
  "Outlander": { skillProficiencies: ["Athletics","Survival"], toolProficiencies: ["Musical instrument"], languages: ["One of your choice"], equipment: ["staff","hunting trap","trophy from animal","traveler's clothes","10 gp"], feature: { name: "Wanderer", description: "You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth." } },
  "Sage": { skillProficiencies: ["Arcana","History"], toolProficiencies: [], languages: ["Two of your choice"], equipment: ["bottle of ink","quill","small knife","letter from dead colleague","common clothes","10 gp"], feature: { name: "Researcher", description: "When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this is a local library, scriptorium, university, or a sage or other learned person or creature." } },
  "Sailor": { skillProficiencies: ["Athletics","Perception"], toolProficiencies: ["Navigator's tools","Vehicles (water)"], languages: [], equipment: ["belaying pin","50 ft silk rope","lucky charm","common clothes","10 gp"], feature: { name: "Ship's Passage", description: "When you need to, you can secure free passage on a sailing ship for yourself and your adventuring companions. You might sail on the ship you served on, or another ship a fellow sailor is willing to take you on. Because you're calling in a favor, you can't be certain of a schedule or route that will meet your every need." } },
  "Soldier": { skillProficiencies: ["Athletics","Intimidation"], toolProficiencies: ["Gaming set","Vehicles (land)"], languages: [], equipment: ["insignia of rank","trophy","bone dice","common clothes","10 gp"], feature: { name: "Military Rank", description: "Your military rank grants you influence over other soldiers. You can expect soldiers who recognize your authority to follow your orders. You can also gain access to military bases and fortresses, and you can obtain equipment from your former comrades." } },
  "Urchin": { skillProficiencies: ["Sleight of Hand","Stealth"], toolProficiencies: ["Disguise kit","Thieves' tools"], languages: [], equipment: ["small knife","map of city","pet mouse","token of parents","common clothes","10 gp"], feature: { name: "City Secrets", description: "You know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow." } }
};

const spellsDatabase = {
  "Cantrips": [
    { name: "Acid Splash", level: 0, school: "Conjuration", classes: ["Artificer", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "Instantaneous", description: "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage." },
    { name: "Blade Ward", level: 0, school: "Abjuration", classes: ["Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "Self", components: ["V", "S"], duration: "1 round", description: "You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks." },
    { name: "Booming Blade", level: 0, school: "Evocation", classes: ["Artificer", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "Self (5-foot radius)", components: ["S", "M (a melee weapon worth at least 1 sp)"], duration: "1 round", description: "You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects and then becomes sheathed in booming energy until the start of your next turn. If the target willingly moves 5 feet or more before then, the target takes 1d8 thunder damage, and the spell ends." },
    { name: "Chill Touch", level: 0, school: "Necromancy", classes: ["Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S"], duration: "1 round", description: "You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn." },
    { name: "Control Flames", level: 0, school: "Transmutation", classes: ["Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["S"], duration: "Instantaneous or 1 hour", description: "You choose nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of the following ways:" },
    { name: "Create Bonfire", level: 0, school: "Conjuration", classes: ["Druid", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "You create a bonfire on ground that you can see within range. Until the spell ends, the bonfire fills a 5-foot cube. Any creature in the bonfire's space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 fire damage. A creature must also make the saving throw when it enters the bonfire's space for the first time on a turn or ends its turn there." },
    { name: "Dancing Lights", level: 0, school: "Evocation", classes: ["Artificer", "Bard", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S", "M (a bit of phosphorus or wychwood, or a glowworm)"], duration: "Concentration, up to 1 minute", description: "You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius." },
    { name: "Druidcraft", level: 0, school: "Transmutation", classes: ["Druid"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S"], duration: "Instantaneous", description: "Whispering to the spirits of nature, you create one of the following effects within range:" },
    { name: "Eldritch Blast", level: 0, school: "Evocation", classes: ["Warlock"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S"], duration: "Instantaneous", description: "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage." },
    { name: "Fire Bolt", level: 0, school: "Evocation", classes: ["Artificer", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S"], duration: "Instantaneous", description: "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried." },
    { name: "Friends", level: 0, school: "Enchantment", classes: ["Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "Self", components: ["S", "M (a small amount of makeup applied to the face as this spell is cast)"], duration: "Concentration, up to 1 minute", description: "For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn't hostile toward you. When the spell ends, the creature realizes that you used magic to influence its mood and becomes hostile toward you. A creature prone to violence might attack you. Another creature might seek retribution in other ways (at the DM's discretion), depending on the nature of your interaction with it." },
    { name: "Frostbite", level: 0, school: "Evocation", classes: ["Artificer", "Druid", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "Instantaneous", description: "You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn." },
    { name: "Green-Flame Blade", level: 0, school: "Evocation", classes: ["Artificer", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "Self (5-foot radius)", components: ["S", "M (a melee weapon worth at least 1 sp)"], duration: "Instantaneous", description: "You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects, and you can cause green fire to leap from the target to a different creature of your choice that you can see within 5 feet of it. The second creature takes fire damage equal to your spellcasting ability modifier." },
    { name: "Guidance", level: 0, school: "Divination", classes: ["Artificer", "Cleric", "Druid"], castingTime: "1 Action", range: "Touch", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends." },
    { name: "Gust", level: 0, school: "Transmutation", classes: ["Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S"], duration: "Instantaneous", description: "You seize the air and compel it to create one of the following effects at a point you can see within range:" },
    { name: "Infestation", level: 0, school: "Conjuration", classes: ["Druid", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S", "M (a living flea)"], duration: "Instantaneous", description: "You cause a cloud of mites, fleas, and other parasites to appear momentarily on one creature you can see within range. The target must succeed on a Constitution saving throw, or it takes 1d6 poison damage and moves 5 feet in a random direction if it can move and its speed is at least 5 feet. Roll a d4 for the direction: 1, north; 2, south; 3, east; or 4, west. This movement doesn't provoke opportunity attacks, and if the direction rolled is blocked, the target doesn't move." },
    { name: "Light", level: 0, school: "Evocation", classes: ["Artificer", "Bard", "Cleric", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "M (a firefly or phosphorescent moss)"], duration: "1 hour", description: "You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action." },
    { name: "Lightning Lure", level: 0, school: "Evocation", classes: ["Artificer", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "Self (15-foot radius)", components: ["V"], duration: "Instantaneous", description: "You create a lash of lightning energy that strikes at one creature of your choice that you can see within 15 feet of you. The target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and then take 1d8 lightning damage if it is within 5 feet of you." },
    { name: "Mage Hand", level: 0, school: "Conjuration", classes: ["Artificer", "Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S"], duration: "1 minute", description: "A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again." },
    { name: "Magic Stone", level: 0, school: "Transmutation", classes: ["Druid", "Warlock", "Artificer"], castingTime: "1 Bonus Action", range: "Touch", components: ["V", "S"], duration: "1 minute", description: "You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, it has a range of 60 feet. If someone else attacks with the pebble, that attacker adds your spellcasting ability modifier, not the attacker's, to the attack roll. On a hit, the target takes bludgeoning damage equal to 1d6 + your spellcasting ability modifier. Hit or miss, the spell then ends on the stone." },
    { name: "Mending", level: 0, school: "Transmutation", classes: ["Artificer", "Bard", "Cleric", "Druid", "Sorcerer", "Wizard"], castingTime: "1 Minute", range: "Touch", components: ["V", "S", "M (two lodestones)"], duration: "Instantaneous", description: "This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage." },
    { name: "Message", level: 0, school: "Transmutation", classes: ["Artificer", "Bard", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S", "M (a short piece of copper wire)"], duration: "1 round", description: "You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear." },
    { name: "Mind Sliver", level: 0, school: "Enchantment", classes: ["Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V"], duration: "1 round", description: "You drive a disorienting spike of psychic energy into the mind of one creature you can see within range. The target must succeed on an Intelligence saving throw or take 1d6 psychic damage and subtract 1d4 from the next saving throw it makes before the end of your next turn." },
    { name: "Minor Illusion", level: 0, school: "Illusion", classes: ["Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["S", "M (A bit of fleece)"], duration: "1 minute", description: "You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again." },
    { name: "Mold Earth", level: 0, school: "Transmutation", classes: ["Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["S"], duration: "Instantaneous or 1 hour", description: "You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:" },
    { name: "Poison Spray", level: 0, school: "Conjuration", classes: ["Artificer", "Druid", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "10 feet", components: ["V", "S"], duration: "Instantaneous", description: "You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage." },
    { name: "Prestidigitation", level: 0, school: "Transmutation", classes: ["Artificer", "Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "10 feet", components: ["V", "S"], duration: "Up to 1 hour", description: "This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range:" },
    { name: "Primal Savagery", level: 0, school: "Transmutation", classes: ["Druid"], castingTime: "1 Action", range: "Self", components: ["S"], duration: "Instantaneous", description: "You channel primal magic to cause your teeth or fingernails to sharpen, ready to deliver a corrosive attack. Make a melee spell attack against one creature within 5 feet of you. On a hit, the target takes 1d10 acid damage. After you make the attack, your teeth or fingernails return to normal." },
    { name: "Produce Flame", level: 0, school: "Conjuration", classes: ["Druid"], castingTime: "1 Action", range: "Self", components: ["V", "S"], duration: "10 minutes", description: "A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again." },
    { name: "Ray of Frost", level: 0, school: "Evocation", classes: ["Artificer", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "Instantaneous", description: "A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn." },
    { name: "Resistance", level: 0, school: "Abjuration", classes: ["Artificer", "Cleric", "Druid"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (a miniatrue cloak)"], duration: "Concentration, up to 1 minute", description: "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one saving throw of its choice. It can roll the die before or after the saving throw. The spell then ends." },
    { name: "Sacred Flame", level: 0, school: "Evocation", classes: ["Cleric"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "Instantaneous", description: "Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw." },
    { name: "Shape Water", level: 0, school: "Transmutation", classes: ["Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["S"], duration: "Instantaneous or 1 hour", description: "You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:" },
    { name: "Shillelagh", level: 0, school: "Transmutation", classes: ["Druid"], castingTime: "1 Bonus Action", range: "Touch", components: ["V", "S", "M (mistletoe, a shamrock leaf, and a club or quarterstaff)"], duration: "1 minute", description: "The wood of a club or quarterstaff you are holding is imbued with nature's power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The weapon also becomes magical, if it isn't already. The spell ends if you cast it again or if you let go of the weapon." },
    { name: "Shocking Grasp", level: 0, school: "Evocation", classes: ["Artificer", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S"], duration: "Instantaneous", description: "Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 lightning damage, and it can't take reactions until the start of its next turn." },
    { name: "Spare the Dying", level: 0, school: "Necromancy", classes: ["Artificer", "Cleric"], castingTime: "1 Action", range: "Touch", components: ["V", "S"], duration: "Instantaneous", description: "You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs." },
    { name: "Sword Burst", level: 0, school: "Conjuration", classes: ["Artificer", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "Self (5-foot radius)", components: ["V"], duration: "Instantaneous", description: "You create a momentary circle of spectral blades that sweep around you. All other creatures within 5 feet of you must succeed on a Dexterity saving throw or take 1d6 force damage." },
    { name: "Thaumaturgy", level: 0, school: "Transmutation", classes: ["Cleric"], castingTime: "1 Action", range: "30 Feet", components: ["V"], duration: "Up to 1 minute", description: "You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range:" },
    { name: "Thorn Whip", level: 0, school: "Transmutation", classes: ["Artificer", "Druid"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S", "M (the stem of a plant with thorns)"], duration: "Instantaneous", description: "You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you." },
    { name: "Thunderclap", level: 0, school: "Evocation", classes: ["Bard", "Druid", "Sorcerer", "Warlock", "Wizard", "Artificer"], castingTime: "1 Action", range: "Self (5-foot radius)", components: ["S"], duration: "Instantaneous", description: "You create a burst of thunderous sound, which can be heard 100 feet away. Each creature other than you within 5 feet of you must make a Constitution saving throw. On a failed save, the creature takes 1d6 thunder damage." },
    { name: "Toll the Dead", level: 0, school: "Necromancy", classes: ["Cleric", "Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "Instantaneous", description: "You point at one creature you can see within range, and the sound of a dolorous bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d8 necrotic damage. If the target is missing any of its hit points, it instead takes 1d12 necrotic damage." },
    { name: "True Strike", level: 0, school: "Divination", classes: ["Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["S"], duration: "Concentration up to 1 round", description: "You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the target's defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn't ended." },
    { name: "Vicious Mockery", level: 0, school: "Enchantment", classes: ["Bard"], castingTime: "1 Action", range: "60 Feet", components: ["V"], duration: "Instantaneous", description: "You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn." },
    { name: "Word of Radiance", level: 0, school: "Evocation", classes: ["Cleric"], castingTime: "1 Action", range: "5 feet", components: ["V", "M (a holy symbol)"], duration: "Instantaneous", description: "You utter a divine word, and burning radiance erupts from you. Each creature of your choice that you can see within range must succeed on a Constitution saving throw or take 1d6 radiant damage." }
  ],
  "1st": [
    { name: "Absorb Elements", level: 1, school: "Abjuration", classes: ["Artificer", "Druid", "Ranger", "Sorcerer", "Wizard"], castingTime: "1 Reaction", range: "Self", components: ["S"], duration: "1 round", description: "The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends." },
    { name: "Alarm", level: 1, school: "Abjuration", classes: ["Artificer", "Ranger", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S", "M (a tiny bell and a piece of fine silver wire)"], duration: "8 hours", description: "You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible." },
    { name: "Animal Friendship", level: 1, school: "Enchantment", classes: ["Bard", "Druid", "Ranger"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S", "M (a cup of water)"], duration: "24 hours", description: "This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the spell ends." },
    { name: "Armor of Agathys", level: 1, school: "Abjuration", classes: ["Warlock"], castingTime: "1 Action", range: "Self", components: ["V", "S", "M (a morsel of food)"], duration: "1 hour", description: "A protective magical force surrounds you, manifesting as a spectral frost that covers you and your gear. You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 cold damage." },
    { name: "Arms of Hadar", level: 1, school: "Conjuration", classes: ["Warlock"], castingTime: "1 Action", range: "Self (10-foot radius)", components: ["V", "S"], duration: "Instantaneous", description: "You invoke the power of Hadar, the Dark Hunger. Tendrils of dark energy erupt from you and batter all creatures within 10 feet of you. Each creature in that area must make a Strength saving throw. On a failed save, a target takes 2d6 necrotic damage and can't take reactions until its next turn. On a successful save, the creature takes half damage, but suffers no other effect." },
    { name: "Bane", level: 1, school: "Enchantment", classes: ["Bard", "Cleric"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S", "M (a drop of blood)"], duration: "Concentration, up to 1 minute", description: "Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw." },
    { name: "Beast Bond", level: 1, school: "Divination", classes: ["Druid", "Ranger"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (a bit of fur wrapped in cloth)"], duration: "Concentration, up to 1 minute", description: "You establish a telepathic link with one beast you touch that is friendly to you or charmed by you. The spell fails if the beast's Intelligence is 4 or higher. Until the spell ends, the link is active while you and the beast are within line of sight of each other. Through the link, the beast can understand your telepathic messages to it, and it can telepathically communicate simple emotions and concepts back to you. While the link is active, the beast gains advantage on attack rolls against any creature within 5 feet of you that you can see." },
    { name: "Bless", level: 1, school: "Enchantment", classes: ["Cleric", "Paladin"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S", "M (a sprinkling of holy water)"], duration: "Concentration, up to 1 minute", description: "You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw." },
    { name: "Burning Hands", level: 1, school: "Evocation", classes: ["Sorcerer", "Wizard"], castingTime: "1 Action", range: "Self (15-foot cone)", components: ["V", "S"], duration: "Instantaneous", description: "As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one." },
    { name: "Catapult", level: 1, school: "Transmutation", classes: ["Artificer", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["S"], duration: "Instantaneous", description: "Choose one object weighing 1 to 5 pounds within range that isn't being worn or carried. The object flies in a straight line up to 90 feet in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface. If the object would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the target and stops moving. When the object strikes something, the object and what it strikes each take 3d8 bludgeoning damage." },
    { name: "Cause Fear", level: 1, school: "Necromancy", classes: ["Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "You awaken the sense of mortality in one creature you can see within range. A construct or an undead is immune to this effect. The target must succeed on a Wisdom saving throw or become frightened of you until the spell ends. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
    { name: "Ceremony", level: 1, school: "Evocation", classes: ["Cleric", "Paladin"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (25 gp worth of powdered silver, which the spell consumes)"], duration: "Instantaneous", description: "You perform one of several religious ceremonies. When you cast the spell, choose one of the following ceremonies, the target of which must be within 10 feet of you throughout the casting." },
    { name: "Chaos Bolt", level: 1, school: "Evocation", classes: ["Sorcerer"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S"], duration: "Instantaneous", description: "You hurl an undulating, warbling mass of chaotic energy at one creature in range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 + 1d6 damage. Choose one of the d8s. The number rolled on that die determines the attack's damage type, as shown below." },
    { name: "Charm Person", level: 1, school: "Enchantment", classes: ["Bard", "Druid", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S"], duration: "1 hour", description: "You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you." },
    { name: "Chromatic Orb", level: 1, school: "Evocation", classes: ["Sorcerer", "Wizard"], castingTime: "1 Action", range: "90 feet", components: ["V", "S", "M (a diamond worth at least 50 gp)"], duration: "Instantaneous", description: "You hurl a 4-inch-diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature takes 3d8 damage of the type you chose." },
    { name: "Color Spray", level: 1, school: "Illusion", classes: ["Bard", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Self (15-foot cone)", components: ["V", "S", "M (A pinch of powder or sand that is colored red, yellow, and blue)"], duration: "1 round", description: "A dazzling array of flashing, colored light springs from your hand. Roll 6d10, the total is how many hit points of creatures this spell can effect. Creatures in a 15-foot cone originating from you are affected in ascending order of their current hit points (ignoring unconscious creatures and creatures that can't see)." },
    { name: "Command", level: 1, school: "Enchantment", classes: ["Bard", "Cleric", "Paladin"], castingTime: "1 Action", range: "60 Feet", components: ["V"], duration: "1 round", description: "You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. The spell has no effect if the target is undead, if it doesn't understand your language, or if your command is directly harmful to it. Some typical commands and their effects follow. You might issue a command other than one described here. If you do so, the DM determines how the target behaves. If the target can't follow your command, the spell ends." },
    { name: "Compelled Duel", level: 1, school: "Enchantment", classes: ["Paladin"], castingTime: "1 Bonus Action", range: "30 Feet", components: ["V"], duration: "Concentration, up to 1 minute", description: "You attempt to compel a creature into a duel. One creature that you can see within range must make a Wisdom saving throw. On a failed save, the creature is drawn to you, compelled by your divine demand. For the duration, it has disadvantage on attack rolls against creatures other than you, and must make a Wisdom saving throw each time it attempts to move to a space that is more than 30 feet away from you; if it succeeds on this saving throw, this spell doesn't restrict the target's movement for that turn." },
    { name: "Comprehend Languages", level: 1, school: "Divination", classes: ["Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "Self", components: ["V", "S", "M (a pinch of soot and salt)"], duration: "1 hour", description: "For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text." },
    { name: "Create or Destroy Water", level: 1, school: "Transmutation", classes: ["Cleric", "Druid"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S", "M (a drop of water if creating water or a few grains of sand if destroying it)"], duration: "Instantaneous", description: "You either create or destroy water." },
    { name: "Cure Wounds", level: 1, school: "Evocation", classes: ["Artificer", "Bard", "Cleric", "Druid", "Paladin", "Ranger"], castingTime: "1 Action", range: "Touch", components: ["V", "S"], duration: "Instantaneous", description: "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs." },
    { name: "Detect Evil and Good", level: 1, school: "Divination", classes: ["Cleric", "Paladin"], castingTime: "1 Action", range: "Self", components: ["V", "S"], duration: "Concentration, up to 10 minutes", description: "For the duration, you know if there is an aberration, celestial, elemental, fey, fiend, or undead within 30 feet of you, as well as where the creature is located. Similarly, you know if there is a place or object within 30 feet of you that has been magically consecrated or desecrated." },
    { name: "Detect Magic", level: 1, school: "Divination", classes: ["Artificer", "Bard", "Cleric", "Druid", "Paladin", "Ranger", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Self", components: ["V", "S"], duration: "Concentration, up to 10 minutes", description: "For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any." },
    { name: "Detect Poison and Disease", level: 1, school: "Divination", classes: ["Cleric", "Druid", "Paladin", "Ranger"], castingTime: "1 Action", range: "Self", components: ["V", "S", "M (a yew leaf)"], duration: "Concentration, up to 10 minutes", description: "For the duration, you can sense the presence and location of poisons, poisonous creatures, and diseases within 30 feet of you. You also identify the kind of poison, poisonous creature, or disease in each case." },
    { name: "Disguise Self", level: 1, school: "Illusion", classes: ["Artificer", "Bard", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Self", components: ["V", "S"], duration: "1 hour", description: "You make yourself - including your clothing, armor, weapons, and other belongings on your person - look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can't change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you." },
    { name: "Dissonant Whispers", level: 1, school: "Enchantment", classes: ["Bard"], castingTime: "1 Action", range: "60 Feet", components: ["V"], duration: "Instantaneous", description: "You whisper a discordant melody that only one creature of your choice within range can hear, wracking it with terrible pain. The target must make a Wisdom saving throw. On a failed save, it takes 3d6 psychic damage and must immediately use its reaction, if available, to move as far as its speed allows away from you. The creature doesn't move into obviously dangerous ground, such as a fire or a pit. On a successful save, the target takes half as much damage and doesn't have to move away. A deafened creature automatically succeeds on the save." },
    { name: "Divine Favor", level: 1, school: "Evocation", classes: ["Paladin"], castingTime: "1 Bonus Action", range: "Self", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "Your prayer empowers you with divine radiance. Until the spell ends, your weapon attacks deal an extra 1d4 radiant damage on a hit." },
    { name: "Earth Tremor", level: 1, school: "Evocation", classes: ["Bard", "Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Self (10-foot radius)", components: ["V", "S"], duration: "Instantaneous", description: "You cause a tremor in the ground in a 10-foot radius. Each creature other than you in that area must make a Dexterity saving throw. On a failed save, a creature takes 1d6 bludgeoning damage and is knocked prone. If the ground in that area is loose earth or stone, it becomes difficult terrain until cleared." },
    { name: "Ensnaring Strike", level: 1, school: "Conjuration", classes: ["Ranger"], castingTime: "1 Bonus Action", range: "Self", components: ["V"], duration: "Concentration, up to 1 minute", description: "The next time you hit a creature with a weapon attack before this spell ends, a writhing mass of thorny vines appears at the point of impact, and the target must succeed on a Strength saving throw or be restrained by the magical vines until the spell ends. A Large or larger creature has advantage on this saving throw. If the target succeeds on the save, the vines shrivel away." },
    { name: "Entangle", level: 1, school: "Conjuration", classes: ["Druid", "Ranger"], castingTime: "1 Action", range: "90 feet", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "Grasping weeds and vines sprout from the ground in a 20-foot square starting from a point within range. For the duration, these plants turn the ground in the area into difficult terrain." },
    { name: "Expeditious Retreat", level: 1, school: "Transmutation", classes: ["Artificer", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Bonus Action", range: "Self", components: ["V", "S"], duration: "Concentration, up to 10 minutes", description: "This spell allows you to move at an incredible pace. When you cast this spell, and then as a bonus action on each of your turns until the spell ends, you can take the Dash action." },
    { name: "Faerie Fire", level: 1, school: "Evocation", classes: ["Artificer", "Bard", "Druid"], castingTime: "1 Action", range: "60 Feet", components: ["V"], duration: "Concentration, up to 1 minute", description: "Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice)." },
    { name: "False Life", level: 1, school: "Necromancy", classes: ["Artificer", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Self", components: ["V", "S", "M (a small amount of alcohol or distilled spirits)"], duration: "1 hour", description: "Bolstering yourself with a necromantic facsimile of life, you gain 1d4 + 4 temporary hit points for the duration." },
    { name: "Feather Fall", level: 1, school: "Transmutation", classes: ["Artificer", "Bard", "Sorcerer", "Wizard"], castingTime: "1 Reaction", range: "60 Feet", components: ["V", "M (a small feather or piece of down)"], duration: "1 minute", description: "Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature." },
    { name: "Find Familiar", level: 1, school: "Conjuration", classes: ["Wizard"], castingTime: "1 Hour", range: "10 feet", components: ["V", "S", "M (10 gp worth of charcoal, incense, and herbs that must be consumed by fire in a brass brazier)"], duration: "Instantaneous", description: "You gain the service of a familiar, a spirit that takes an animal form you choose: bat, cat, crab, frog (toad), hawk, lizard, octopus, owl, poisonous snake, fish (quipper), rat, raven, sea horse, spider, or weasel. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of a beast." },
    { name: "Fog Cloud", level: 1, school: "Conjuration", classes: ["Druid", "Ranger", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S"], duration: "Concentration, up to 1 hour", description: "You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it." },
    { name: "Goodberry", level: 1, school: "Transmutation", classes: ["Druid", "Ranger"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (a sprig of mistletoe)"], duration: "Instantaneous", description: "Up to ten berries appear in your hand and are infused with magic for the duration. A creature can use its action to eat one berry. Eating a berry restores 1 hit point, and the berry provides enough nourishment to sustain a creature for one day." },
    { name: "Grease", level: 1, school: "Conjuration", classes: ["Artificer", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S", "M (a bit of pork rind or butter)"], duration: "1 minute", description: "Slick grease covers the ground in a 10-foot square centered on a point within range and turns it into difficult terrain for the duration." },
    { name: "Guiding Bolt", level: 1, school: "Evocation", classes: ["Cleric"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S"], duration: "1 round", description: "A flash of light streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes 4d6 radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then." },
    { name: "Hail of Thorns", level: 1, school: "Conjuration", classes: ["Ranger"], castingTime: "1 Bonus Action", range: "Self", components: ["V"], duration: "Concentration, up to 1 minute", description: "The next time you hit a creature with a ranged weapon attack before the spell ends, this spell creates a rain of thorns that sprouts from your ranged weapon or ammunition. In addition to the normal effect of the attack, the target of the attack and each creature within 5 feet of it must make a Dexterity saving throw. A creature takes 1d10 piercing damage on a failed save, or half as much damage on a successful one." },
    { name: "Healing Word", level: 1, school: "Evocation", classes: ["Bard", "Cleric", "Druid"], castingTime: "1 Bonus Action", range: "60 Feet", components: ["V"], duration: "Instantaneous", description: "A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs." },
    { name: "Hellish Rebuke", level: 1, school: "Evocation", classes: ["Warlock"], castingTime: "1 Reaction", range: "60 Feet", components: ["V", "S"], duration: "Instantaneous", description: "You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one." },
    { name: "Heroism", level: 1, school: "Enchantment", classes: ["Bard", "Paladin"], castingTime: "1 Action", range: "Touch", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to being frightened and gains temporary hit points equal to your spellcasting ability modifier at the start of each of its turns. When the spell ends, the target loses any remaining temporary hit points from this spell." },
    { name: "Hex", level: 1, school: "Enchantment", classes: ["Warlock"], castingTime: "1 Bonus Action", range: "90 feet", components: ["V", "S", "M (the petrified eye of a newt)"], duration: "Concentration, up to 1 hour", description: "You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 necrotic damage to the target whenever you hit it with an attack. Also, choose one ability when you cast the spell. The target has disadvantage on ability checks made with the chosen ability." },
    { name: "Hunter's Mark", level: 1, school: "Divination", classes: ["Ranger"], castingTime: "1 Bonus Action", range: "90 feet", components: ["V"], duration: "Concentration, up to 1 hour", description: "You choose a creature you can see within range and mystically mark it as your quarry. Until the spell ends, you deal an extra 1d6 damage to the target whenever you hit it with a weapon attack, and you have advantage on any Wisdom (Perception) or Wisdom (Survival) check you make to find it." },
    { name: "Ice Knife", level: 1, school: "Conjuration", classes: ["Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["S", "M (a drop of water or piece of ice)"], duration: "Instantaneous", description: "You create a shard of ice and fling it at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 piercing damage. Hit or miss, the shard then explodes. The target and each creature within 5 feet of the point where the ice exploded must succeed on a Dexterity saving throw or take 2d6 cold damage." },
    { name: "Identify", level: 1, school: "Divination", classes: ["Artificer", "Bard", "Wizard"], castingTime: "1 Minute", range: "Touch", components: ["V", "S", "M (a pearl worth at least 100 gp and an owl feather)"], duration: "Instantaneous", description: "You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it." },
    { name: "Illusory Script", level: 1, school: "Illusion", classes: ["Bard", "Warlock", "Wizard"], castingTime: "1 Minute", range: "Touch", components: ["S", "M (a lead-based ink worth at least 10 gp, which the spell consumes)"], duration: "10 days", description: "You write on parchment, paper, or some other suitable writing material and imbue it with a potent illusion that lasts for the duration." },
    { name: "Inflict Wounds", level: 1, school: "Necromancy", classes: ["Cleric"], castingTime: "1 Action", range: "Touch", components: ["V", "S"], duration: "Instantaneous", description: "Make a melee spell attack against a creature you can reach. On a hit, the target takes 3d10 necrotic damage." },
    { name: "Jump", level: 1, school: "Transmutation", classes: ["Artificer", "Druid", "Ranger", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (a grasshopper's hind leg)"], duration: "1 minute", description: "You touch a creature. The creature's jump distance is tripled until the spell ends." },
    { name: "Longstrider", level: 1, school: "Transmutation", classes: ["Artificer", "Bard", "Druid", "Ranger", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (a pinch of dirt)"], duration: "1 hour", description: "You touch a creature. The target's speed increases by 10 feet until the spell ends." },
    { name: "Mage Armor", level: 1, school: "Abjuration", classes: ["Sorcerer", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (a piece of cured leather)"], duration: "8 hours", description: "You touch a willing creature who isn't wearing armor, and a protective magical force surrounds it until the spell ends. The target's base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action." },
    { name: "Magic Missile", level: 1, school: "Evocation", classes: ["Sorcerer", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S"], duration: "Instantaneous", description: "You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously and you can direct them to hit one creature or several." },
    { name: "Protection from Evil and Good", level: 1, school: "Abjuration", classes: ["Cleric", "Druid", "Paladin", "Warlock", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (holy water or powdered silver and iron, which the spell consumes)"], duration: "Concentration, up to 10 minutes", description: "Until the spell ends, one willing creature you touch is protected against certain types of creatures: aberrations, celestials, elementals, fey, fiends, and undead." },
    { name: "Purify Food and Drink", level: 1, school: "Transmutation", classes: ["Artificer", "Cleric", "Druid", "Paladin"], castingTime: "1 Action", range: "10 feet", components: ["V", "S"], duration: "Instantaneous", description: "All nonmagical food and drink within a 5-foot-radius sphere centered on a point of your choice within range is purified and rendered free of poison and disease." },
    { name: "Ray of Sickness", level: 1, school: "Necromancy", classes: ["Sorcerer", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "Instantaneous", description: "A ray of sickening greenish energy lashes out toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 poison damage and must make a Constitution saving throw. On a failed save, it is also poisoned until the end of your next turn." },
    { name: "Sanctuary", level: 1, school: "Abjuration", classes: ["Artificer", "Cleric"], castingTime: "1 Bonus Action", range: "30 Feet", components: ["V", "S", "M (a small silver mirror)"], duration: "1 minute", description: "You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn't protect the warded creature from area effects, such as the explosion of a fireball." },
    { name: "Searing Smite", level: 1, school: "Evocation", classes: ["Paladin", "Ranger"], castingTime: "1 Bonus Action", range: "Self", components: ["V"], duration: "Concentration, up to 1 minute", description: "The next time you hit a creature with a melee weapon attack during the spell's duration, your weapon flares with white-hot intensity, and the attack deals an extra 1d6 fire damage to the target and causes the target to ignite in flames." },
    { name: "Shield", level: 1, school: "Abjuration", classes: ["Sorcerer", "Wizard"], castingTime: "1 Reaction", range: "Self", components: ["V", "S"], duration: "1 round", description: "An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from Magic Missile." },
    { name: "Shield of Faith", level: 1, school: "Abjuration", classes: ["Cleric", "Paladin"], castingTime: "1 Bonus Action", range: "60 Feet", components: ["V", "S", "M (a small parchment with a bit of holy text written on it)"], duration: "Concentration, up to 1 minute", description: "A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration." },
    { name: "Silent Image", level: 1, school: "Illusion", classes: ["Bard", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S", "M (a bit of fleece)"], duration: "Concentration, up to 10 minutes", description: "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot cube. The image appears at a spot within range and lasts for the duration. The image is purely visual; it isn't accompanied by sound, smell, or other sensory effects." },
    { name: "Sleep", level: 1, school: "Enchantment", classes: ["Bard", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "90 feet", components: ["V", "S", "M (a pinch of fine sand, rose petals, or a cricket)"], duration: "1 minute", description: "This spell sends creatures into a magical slumber. Roll 5d8, the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures)." },
    { name: "Snare", level: 1, school: "Abjuration", classes: ["Artificer", "Druid", "Ranger", "Wizard"], castingTime: "1 Minute", range: "Touch", components: ["V", "S", "M (30 feet of cord or rope, which is consumed by the spell)"], duration: "Until dispelled or triggered", description: "While you cast this spell, you use the cord or rope to create a circle with a 5-foot radius on a flat surface within your reach. When you finish casting, the cord or rope disappears to become a magical trap." },
    { name: "Speak with Animals", level: 1, school: "Divination", classes: ["Bard", "Druid", "Ranger"], castingTime: "1 Action", range: "Self", components: ["V", "S"], duration: "10 minutes", description: "You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the DM's discretion." },
    { name: "Tasha's Caustic Brew", level: 1, school: "Evocation", classes: ["Artificer", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Self (30-foot line)", components: ["V", "S", "M (a bit of rotten food)"], duration: "Concentration, up to 1 minute", description: "A stream of acid emanates from you in a line 30 feet long and 5 feet wide in a direction you choose. Each creature in the line must succeed on a Dexterity saving throw or be covered in acid for the spell's duration or until a creature uses its action to scrape or wash the acid off itself or another creature. A creature covered in the acid takes 2d4 acid damage at start of each of its turns." },
    { name: "Tasha's Hideous Laughter", level: 1, school: "Enchantment", classes: ["Bard", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S", "M (tiny tarts and a feather that is waved in the air)"], duration: "Concentration, up to 1 minute", description: "A creature of your choice that you can see within range perceives everything as hilariously funny and falls into fits of laughter if this spell affects it. The target must succeed on a Wisdom saving throw or fall prone, becoming incapacitated and unable to stand up for the duration. A creature with an Intelligence score of 4 or less isn't affected." },
    { name: "Tenser's Floating Disk", level: 1, school: "Conjuration", classes: ["Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S", "M (a drop of mercury)"], duration: "1 hour", description: "This spell creates a circular, horizontal plane of force, 3 feet in diameter and 1 inch thick, that floats 3 feet above the ground in an unoccupied space of your choice that you can see within range. The disk remains for the duration, and can hold up to 500 pounds. If more weight is placed on it, the spell ends, and everything on the disk falls to the ground." },
    { name: "Thunderous Smite", level: 1, school: "Evocation", classes: ["Paladin"], castingTime: "1 Bonus Action", range: "Self", components: ["V"], duration: "Concentration, up to 1 minute", description: "The first time you hit with a melee weapon attack during this spell's duration, your weapon rings with thunder that is audible within 300 feet of you, and the attack deals an extra 2d6 thunder damage to the target. Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you and knocked prone." },
    { name: "Thunderwave", level: 1, school: "Evocation", classes: ["Bard", "Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Self (15-foot cube)", components: ["V", "S"], duration: "Instantaneous", description: "A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed." },
    { name: "Unseen Servant", level: 1, school: "Conjuration", classes: ["Bard", "Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S", "M (a piece of string and a bit of wood)"], duration: "1 hour", description: "This spell creates an invisible, mindless, shapeless, Medium force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 hit point, and a Strength of 2, and it can't attack. If it drops to 0 hit points, the spell ends." },
    { name: "Witch Bolt", level: 1, school: "Evocation", classes: ["Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S", "M (a twig from a tree that has been struck by lightning)"], duration: "Concentration, up to 1 minute", description: "A beam of crackling, blue energy lances out toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against that creature. On a hit, the target takes 1d12 lightning damage, and on each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically. The spell ends if you use your action to do anything else. The spell also ends if the target is ever outside the spell's range or if it has total cover from you." },
    { name: "Wrathful Smite", level: 1, school: "Evocation", classes: ["Paladin"], castingTime: "1 Bonus Action", range: "Self", components: ["V"], duration: "Concentration, up to 1 minute", description: "The next time you hit with a melee weapon attack during this spell's duration, your attack deals an extra 1d6 psychic damage. Additionally, if the target is a creature, it must make a Wisdom saving throw or be frightened of you until the spell ends. As an action, the creature can make a Wisdom check against your spell save DC to steel its resolve and end this spell." },
    { name: "Zephyr Strike", level: 1, school: "Transmutation", classes: ["Ranger"], castingTime: "1 Bonus Action", range: "Self", components: ["V"], duration: "Concentration, up to 1 minute", description: "You move like the wind. For the duration, your movement doesn't provoke opportunity attacks." }
  ],
  "2nd": [
    { name: "Aganazzar's Scorcher", level: 2, school: "Evocation", classes: ["Sorcerer", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S", "M (a red dragon's scale)"], duration: "Instantaneous", description: "A line of roaring flame 30 feet long and 5 feet wide emanates from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 3d8 fire damage on a failed save, or half as much damage on a successful one." },
    { name: "Aid", level: 2, school: "Abjuration", classes: ["Artificer", "Bard", "Cleric", "Paladin", "Ranger"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S", "M (a tiny strip of white cloth)"], duration: "8 hours", description: "Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration." },
    { name: "Alter Self", level: 2, school: "Transmutation", classes: ["Artificer", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Self", components: ["V", "S"], duration: "Concentration, up to 1 hour", description: "You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one." },
    { name: "Animal Messenger", level: 2, school: "Enchantment", classes: ["Bard", "Druid", "Ranger"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S", "M (a morsel of food)"], duration: "24 hours", description: "By means of this spell, you use an animal to deliver a message. Choose a Tiny beast you can see within range, such as a squirrel, a blue jay, or a bat. You specify a location, which you must have visited, and a recipient who matches a general description, such as \"a man or woman dressed in the uniform of the town guard\" or \"a red-haired dwarf wearing a pointed hat.\" You also speak a message of up to twenty-five words. The target beast travels for the duration of the spell toward the specified location, covering about 50 miles per 24 hours for a flying messenger, or 25 miles for other animals." },
    { name: "Arcane Lock", level: 2, school: "Abjuration", classes: ["Artificer", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (gold dust worth at least 25 gp, which the spell consumes)"], duration: "Until dispelled", description: "You touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration." },
    { name: "Augury", level: 2, school: "Divination", classes: ["Cleric", "Druid", "Wizard"], castingTime: "1 Minute", range: "Self", components: ["V", "S", "M (specially marked sticks, bones, or similar tokens worth at least 25 gp)"], duration: "Instantaneous", description: "By casting gem-inlaid sticks, rolling dragon bones, laying out ornate cards, or employing some other divining tool, you receive an omen from an otherworldly entity about the results of a specific course of action that you plan to take within the next 30 minutes. The DM chooses from the following possible omens:" },
    { name: "Barkskin", level: 2, school: "Transmutation", classes: ["Druid", "Ranger"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (a handful of oak bark)"], duration: "Concentration, up to 1 hour", description: "You touch a willing creature. Until the spell ends, the target's skin has a rough, bark-like appearance, and the target's AC can't be less than 16, regardless of what kind of armor it is wearing." },
    { name: "Beast Sense", level: 2, school: "Divination", classes: ["Druid", "Ranger"], castingTime: "1 Action", range: "Touch", components: ["S"], duration: "Concentration, up to 1 hour", description: "You touch a willing beast. For the duration of the spell, you can use your action to see through the beast's eyes and hear what it hears, and continue to do so until you use your action to return to your normal senses." },
    { name: "Blindness/Deafness", level: 2, school: "Necromancy", classes: ["Bard", "Cleric", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V"], duration: "1 minute", description: "You can blind or deafen a foe. Choose one creature that you can see within range to make a Constitution saving throw. If it fails, the target is either blinded or deafened (your choice) for the duration. At the end of each of its turns, the target can make a Constitution saving throw. On a success, the spell ends." },
    { name: "Blur", level: 2, school: "Illusion", classes: ["Artificer", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Self", components: ["V"], duration: "Concentration, up to 1 minute", description: "Your body becomes blurred, shifting and wavering to all who can see you. For the duration, any creature has disadvantage on attack rolls against you. An attacker is immune to this effect if it doesn't rely on sight, as with blindsight, or can see through illusions, as with truesight." },
    { name: "Branding Smite", level: 2, school: "Evocation", classes: ["Paladin"], castingTime: "1 Bonus Action", range: "Self", components: ["V"], duration: "Concentration, up to 1 minute", description: "The next time you hit a creature with a weapon attack before this spell ends, the weapon gleams with astral radiance as you strike. The attack deals an extra 2d6 radiant damage to the target, which becomes visible if it is invisible, and the target sheds dim light in a 5-foot radius and can't become invisible until the spell ends." },
    { name: "Calm Emotions", level: 2, school: "Enchantment", classes: ["Bard", "Cleric"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "You attempt to suppress strong emotions in a group of people. Each humanoid in a 20-foot-radius sphere centered on a point you choose within range must make a Charisma saving throw; a creature can choose to fail this saving throw if it wishes. If a creature fails its saving throw, choose one of the following two effects. You can suppress any effect causing a target to be charmed or frightened. When this spell ends, any suppressed effect resumes, provided that its duration has not expired in the meantime." },
    { name: "Cloud of Daggers", level: 2, school: "Conjuration", classes: ["Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S", "M (a sliver of glass)"], duration: "Concentration, up to 1 minute", description: "You fill the air with spinning daggers in a cube 5 feet on each side, centered on a point you choose within range. A creature takes 4d4 slashing damage when it enters the spell's area for the first time on a turn or starts its turn there." },
    { name: "Continual Flame", level: 2, school: "Evocation", classes: ["Artificer", "Cleric", "Druid", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (ruby dust worth 50 gp, which the spell consumes)"], duration: "Until dispelled", description: "A flame, equivalent in brightness to a torch, springs forth from an object that you touch. The effect looks like a regular flame, but it creates no heat and doesn't use oxygen. A continual flame can be covered or hidden but not smothered or quenched." },
    { name: "Cordon of Arrows", level: 2, school: "Transmutation", classes: ["Ranger"], castingTime: "1 Action", range: "5 feet", components: ["V", "S", "M (four or more arrows or bolts)"], duration: "8 hours", description: "You plant four pieces of nonmagical ammunition - arrows or crossbow bolts - in the ground within range and lay magic upon them to protect an area. Until the spell ends, whenever a creature other than you comes within 30 feet of the ammunition for the first time on a turn or ends its turn there, one piece of ammunition flies up to strike it. The creature must succeed on a Dexterity saving throw or take 1d6 piercing damage. The piece of ammunition is then destroyed. The spell ends when no ammunition remains." },
    { name: "Crown of Madness", level: 2, school: "Enchantment", classes: ["Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "One humanoid of your choice that you can see within range must succeed on a Wisdom saving throw or become charmed by you for the duration. While the target is charmed in this way, a twisted crown of jagged iron appears on its head, and a madness glows in its eyes." },
    { name: "Darkness", level: 2, school: "Evocation", classes: ["Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "M (bat fur and a drop of pitch or piece of coal)"], duration: "Concentration, up to 10 minutes", description: "Magical darkness spreads from a point you choose within range to fill a 15-foot radius sphere for the duration. The darkness spreads around corners. A creature with darkvision can't see through this darkness, and nonmagical light can't illuminate it." },
    { name: "Darkvision", level: 2, school: "Transmutation", classes: ["Artificer", "Druid", "Ranger", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (either a pinch of dried carrot or an agate)"], duration: "8 hours", description: "You touch a willing creature to grant it the ability to see in the dark. For the duration, that creature has darkvision out to a range of 60 feet." },
    { name: "Detect Thoughts", level: 2, school: "Divination", classes: ["Bard", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (a copper piece)"], duration: "Concentration, up to 1 minute", description: "For the duration, you can read the thoughts of certain creatures. When you cast the spell and as your action on each turn until the spell ends, you can focus your mind on any one creature that you can see within 30 feet of you. If the creature you choose has an Intelligence of 3 or lower or doesn't speak any language, the creature is unaffected." },
    { name: "Dragon's Breath", level: 2, school: "Transmutation", classes: ["Sorcerer", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (a hot pepper)"], duration: "Concentration, up to 1 minute", description: "You touch one willing creature and imbue it with the power to spew magical energy from its mouth, provided it has one. Choose acid, cold, fire, lightning, or poison. Until the spell ends, the creature can use an action to exhale energy of the chosen type in a 15-foot cone. Each creature in that area must make a Dexterity saving throw, taking 3d6 damage of the chosen type on a failed save, or half as much damage on a successful one." },
    { name: "Dust Devil", level: 2, school: "Conjuration", classes: ["Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S", "M (a pinch of dust)"], duration: "Concentration, up to 1 minute", description: "Choose an unoccupied 5-foot cube of air that you can see within range. An elemental force that resembles a dust devil appears in the cube and lasts for the spell's duration." },
    { name: "Earthbind", level: 2, school: "Transmutation", classes: ["Druid", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "300 feet", components: ["V"], duration: "Concentration, up to 1 minute", description: "Choose one creature you can see within range. Yellow strips of magical energy loop around the creature. The target must succeed on a Strength saving throw or its flying speed (if any) is reduced to 0 feet for the spell's duration. An airborne creature affected by this spell descends at 60 feet per round until it reaches the ground or the spell ends." },
    { name: "Enhance Ability", level: 2, school: "Transmutation", classes: ["Artificer", "Bard", "Cleric", "Druid", "Ranger", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (fur or a feather from a beast)"], duration: "Concentration, up to 1 hour", description: "You touch a creature and bestow upon it a magical enhancement. Choose one of the following effects; the target gains the effect until the spell ends." },
    { name: "Enlarge/Reduce", level: 2, school: "Transmutation", classes: ["Artificer", "Bard", "Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S", "M ((a pinch of powdered iron)"], duration: "Concentration, up to 1 minute", description: "You cause a creature or an object you can see within range to grow larger or smaller for the duration. Choose either a creature or an object that is neither worn nor carried. If the target is unwilling, it can make a Constitution saving throw. On a success, the spell has no effect." },
    { name: "Enthrall", level: 2, school: "Enchantment", classes: ["Bard", "Warlock"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "1 minute", description: "You weave a distracting string of words, causing creatures of your choice that you can see within range and that can hear you to make a Wisdom saving throw. Any creature that can't be charmed succeeds on this saving throw automatically, and if you or your companions are fighting a creature, it has advantage on the save. On a failed save, the target has disadvantage on Wisdom (Perception) checks made to perceive any creature other than you until the spell ends or until the target can no longer hear you. The spell ends if you are incapacitated or can no longer speak." },
    { name: "Find Steed", level: 2, school: "Conjuration", classes: ["Paladin"], castingTime: "10 Minutes", range: "30 Feet", components: ["V", "S"], duration: "Instantaneous", description: "You summon a spirit that assumes the form of an unusually intelligent, strong, and loyal steed, creating a long-lasting bond with it. Appearing in an unoccupied space within range, the steed takes on a form that you choose: a warhorse, a pony, a camel, an elk, or a mastiff. (Your DM might allow other animals to be summoned as steeds.) The steed has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of its normal type. Additionally, if your steed has an Intelligence of 5 or less, its Intelligence becomes 6, and it gains the ability to understand one language of your choice that you speak." },
    { name: "Find Traps", level: 2, school: "Divination", classes: ["Cleric", "Druid", "Ranger"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S"], duration: "Instantaneous", description: "You sense the presence of any trap within range that is within line of sight." },
    { name: "Flame Blade", level: 2, school: "Evocation", classes: ["Druid", "Sorcerer"], castingTime: "1 Bonus Action", range: "Self", components: ["V", "S", "M (a leaf of sumac)"], duration: "Concentration, up to 10 minutes", description: "You evoke a fiery blade in your free hand. The blade is similar in size and shape to a scimitar, and it lasts for the duration. If you let go of the blade, it disappears, but you can evoke the blade again as a bonus action." },
    { name: "Flaming Sphere", level: 2, school: "Conjuration", classes: ["Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S", "M (a bit of tallow, a pinch of brimstone, and a dusting of powdered iron)"], duration: "Concentration, up to 1 minute", description: "A 5-foot-diameter sphere of fire appears in an unoccupied space of your choice within range and lasts for the duration. Any creature that ends its turn within 5 feet of the sphere must make a Dexterity saving throw. The creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one." },
    { name: "Gentle Repose", level: 2, school: "Necromancy", classes: ["Cleric", "Paladin", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (a pinch of salt and one copper piece placed on each of the corpse's eyes, which must remain there for the duration)"], duration: "10 days", description: "You touch a corpse or other remains. For the duration, the target is protected from decay and can't become undead." },
    { name: "Gust of Wind", level: 2, school: "Evocation", classes: ["Druid", "Ranger", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Self (60-foot line)", components: ["V", "S", "M (a legume seed)"], duration: "Concentration, up to 1 minute", description: "A line of strong wind 60 feet long and 10 feet wide blasts from you in a direction you choose for the spell's duration. Each creature that starts its turn in the line must succeed on a Strength saving throw or be pushed 15 feet away from you in a direction following the line." },
    { name: "Healing Spirit", level: 2, school: "Conjuration", classes: ["Druid", "Ranger"], castingTime: "1 Bonus Action", range: "60 Feet", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "You call forth a nature spirit to soothe the wounded. The intangible spirit appears in a space that is a 5-foot cube you can see within range. The spirit looks like a transparent beast or fey (your choice). Until the spell ends, whenever you or a creature you can see moves into the spirits space for the first time on a turn or starts its turn there, you can cause the spirit to restore 1d6 hit points to that creature (no action required). The spirit can't heal constructs or undead. As a bonus action on your turn, you can move the Spirit up to 30 feet to a space you can see. The spirit can heal a number of times equal to 1 + your spellcasting ability modifier (minimum of twice). After healing that number of times, the spirit disappears." },
    { name: "Heat Metal", level: 2, school: "Transmutation", classes: ["Artificer", "Bard", "Druid"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S", "M (a piece of iron and a flame)"], duration: "Concentration, up to 1 minute", description: "Choose a manufactured metal object, such as a metal weapon or a suit of heavy or medium metal armor, that you can see within range. You cause the object to glow red-hot. Any creature in physical contact with the object takes 2d8 fire damage when you cast the spell. Until the spell ends, you can use a bonus action on each of your subsequent turns to cause this damage again." },
    { name: "Hold Person", level: 2, school: "Enchantment", classes: ["Bard", "Cleric", "Druid", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S", "M (a small, straight piece of iron)"], duration: "Concentration, up to 1 minute", description: "Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target." },
    { name: "Invisibility", level: 2, school: "Transmutation", classes: ["Artificer", "Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (an eyelash encased in gum arabic)"], duration: "Concentration, up to 1 hour", description: "A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person. The spell ends for a target that attacks or casts a spell." },
    { name: "Knock", level: 2, school: "Transmutation", classes: ["Bard", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V"], duration: "Instantaneous", description: "Choose an object that you can see within range. The object can be a door, a box, a chest, a set of manacles, a padlock, or another object that contains a mundane or magical means that prevents access." },
    { name: "Lesser Restoration", level: 2, school: "Abjuration", classes: ["Artificer", "Bard", "Cleric", "Druid", "Paladin", "Ranger"], castingTime: "1 Action", range: "Touch", components: ["V", "S"], duration: "Instantaneous", description: "You touch a creature and can end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned." },
    { name: "Levitate", level: 2, school: "Transmutation", classes: ["Artificer", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S", "M (either a small leather loop or a piece of golden wire bent into a cup shape with a long shank on one end)"], duration: "Concentration, up to 10 minutes", description: "One creature or object of your choice that you can see within range rises vertically, up to 20 feet, and remains suspended there for the duration. The spell can levitate a target that weighs up to 500 pounds. An unwilling creature that succeeds on a Constitution saving throw is unaffected." },
    { name: "Locate Animals or Plants", level: 2, school: "Divination", classes: ["Bard", "Druid", "Ranger"], castingTime: "1 Action", range: "Self", components: ["V", "S", "M (a bit of fur from a bloodhound)"], duration: "Instantaneous", description: "Describe or name a specific kind of beast or plant. Concentrating on the voice of nature in your surroundings, you learn the direction and distance to the closest creature or plant of that kind within 5 miles, if any are present." },
    { name: "Locate Object", level: 2, school: "Divination", classes: ["Bard", "Cleric", "Druid", "Paladin", "Ranger", "Wizard"], castingTime: "1 Action", range: "Self", components: ["V", "S", "M (a forked twig)"], duration: "Concentration, up to 10 minutes", description: "Describe or name an object that is familiar to you. You sense the direction to the object's location, as long as that object is within 1,000 feet of you. If the object is in motion, you know the direction of its movement." },
    { name: "Magic Mouth", level: 2, school: "Illusion", classes: ["Artificer", "Bard", "Wizard"], castingTime: "1 Minute", range: "30 Feet", components: ["V", "S", "M (a small bit of honeycomb and jade dust worth at least 10 gp, which the spell consumes)"], duration: "Until dispelled", description: "You implant a message within an object in range, a message that is uttered when a trigger condition is met. Choose an object that you can see and that isn't being worn or carried by another creature. Then speak the message, which must be 25 words or less, though it can be delivered over as long as 10 minutes. Finally, determine the circumstance that will trigger the spell to deliver your message." },
    { name: "Magic Weapon", level: 2, school: "Transmutation", classes: ["Artificer", "Paladin", "Ranger", "Sorcerer", "Wizard"], castingTime: "1 Bonus Action", range: "Touch", components: ["V", "S"], duration: "Concentration, up to 1 hour", description: "You touch a nonmagical weapon. Until the spell ends, that weapon becomes a magic weapon with a +1 bonus to attack rolls and damage rolls." },
    { name: "Maximillian's Earthen Grasp", level: 2, school: "Transmutation", classes: ["Sorcerer", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S", "M (a miniature hand sculpted from clay)"], duration: "Concentration, up to 1 minute", description: "You choose a 5-foot-square unoccupied space on the ground that you can see within range. A Medium hand made from compacted soil rises there and reaches for one creature you can see within 5 feet of it. The target must make a Strength saving throw. On a failed save, the target takes 2d6 bludgeoning damage and is restrained for the spell's duration." },
    { name: "Melf's Acid Arrow", level: 2, school: "Evocation", classes: ["Wizard"], castingTime: "1 Action", range: "90 feet", components: ["V", "S", "M (powdered rhubarb leaf and an adder's stomach)"], duration: "Instantaneous", description: "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn." },
    { name: "Mind Spike", level: 2, school: "Divination", classes: ["Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["S"], duration: "Concentration, up to 1 hour", description: "You reach into the mind of one creature you can see within range. The target must make a Wisdom saving throw, taking 3d8 psychic damage on a failed save, or half as much damage on a successful one. On a failed save, you also always know the target's location until the spell ends, but only while the two of you are on the same plane of existence. While you have this knowledge, the target can't become hidden from you, and if it's invisible, it gains no benefit from that condition against you." },
    { name: "Mirror Image", level: 2, school: "Illusion", classes: ["Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "Self", components: ["V", "S"], duration: "1 minute", description: "Three illusory duplicates of yourself appear in your space. Until the spell ends, the duplicates move with you and mimic your actions, shifting position so it's impossible to track which image is real. You can use your action to dismiss the illusory duplicates." },
    { name: "Misty Step", level: 2, school: "Conjuration", classes: ["Sorcerer", "Warlock", "Wizard"], castingTime: "1 Bonus Action", range: "Self", components: ["V"], duration: "Instantaneous", description: "Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see." },
    { name: "Moonbeam", level: 2, school: "Evocation", classes: ["Druid"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S", "M (several seeds of any moonseed plant and a piece of opalescent feldspar)"], duration: "Concentration, up to 1 minute", description: "A silvery beam of pale light shines down in a 5-foot radius, 40-foot-high cylinder centered on a point within range. Until the spell ends, dim light fills the cylinder." },
    { name: "Nystul's Magic Aura", level: 2, school: "Illusion", classes: ["Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (a small square of silk)"], duration: "24 hours", description: "You place an illusion on a creature or an object you touch so that divination spells reveal false information about it. The target can be a willing creature or an object that isn't being carried or worn by another creature." },
    { name: "Pass Without Trace", level: 2, school: "Abjuration", classes: ["Druid", "Ranger"], castingTime: "1 Action", range: "Self", components: ["V", "S", "M (ashes from a burned leaf of mistletoe and a sprig of spruce)"], duration: "Concentration, up to 1 hour", description: "A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and can't be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage." },
    { name: "Phantasmal Force", level: 2, school: "Illusion", classes: ["Bard", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S", "M (a bit of fleece)"], duration: "Concentration, up to 1 minute", description: "You craft an illusion that takes root in the mind of a creature that you can see within range. The target must make an Intelligence saving throw. On a failed save, you create a phantasmal object, creature, or other visible phenomenon of your choice that is no larger than a 10-foot cube and that is perceivable only to the target for the duration. This spell has no effect on undead or constructs." },
    { name: "Prayer of Healing", level: 2, school: "Evocation", classes: ["Cleric", "Paladin"], castingTime: "10 Minutes", range: "Touch", components: ["V"], duration: "Instantaneous", description: "Up to six creatures of your choice that you can see within range each regain hit points equal to 2d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs." },
    { name: "Protection from Poison", level: 2, school: "Abjuration", classes: ["Artificer", "Cleric", "Druid", "Paladin", "Ranger"], castingTime: "1 Action", range: "Touch", components: ["V", "S"], duration: "1 hour", description: "You touch a creature. If it is poisoned, you neutralize the poison. If more than one poison afflicts the target, you neutralize one poison that you know is present, or you neutralize one at random." },
    { name: "Pyrotechnics", level: 2, school: "Transmutation", classes: ["Artificer", "Bard", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "Instantaneous", description: "Choose an area of flame that you can see and that can fit within a 5-foot cube within range. You can extinguish the fire in that area, and you create either fireworks or smoke." },
    { name: "Ray of Enfeeblement", level: 2, school: "Necromancy", classes: ["Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "A black beam of enervating energy springs from your finger toward a creature within range." },
    { name: "Rope Trick", level: 2, school: "Transmutation", classes: ["Artificer", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (powdered corn extract and a twisted loop of parchment)"], duration: "1 hour", description: "You touch a length of rope that is up to 60 feet long. One end of the rope then rises into the air until the whole rope hangs perpendicular to the ground. At the upper end of the rope, an invisible entrance opens to an extradimensional space that lasts until the spell ends." },
    { name: "Scorching Ray", level: 2, school: "Evocation", classes: ["Sorcerer", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S"], duration: "Instantaneous", description: "You create three rays of fire and hurl them at targets within range. You can hurl them at one target or several. Make a ranged spell attack for each ray. On a hit, the target takes 2d6 fire damage." },
    { name: "See Invisibility", level: 2, school: "Divination", classes: ["Artificer", "Bard", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Self", components: ["V", "S", "M (pinch of talc and a small sprinkling of powdered silver)"], duration: "1 hour", description: "For the duration, you see invisible creatures and objects as if they were visible, and you can see into the Ethereal Plane. Ethereal creatures and objects appear ghostly and translucent." },
    { name: "Shadow Blade", level: 2, school: "Illusion", classes: ["Sorcerer", "Warlock", "Wizard"], castingTime: "1 Bonus Action", range: "Self", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "You weave together threads of shadow to create a sword of solidified gloom in your hand. This magic sword lasts until the spell ends. It counts as a simple melee weapon with which you are proficient. It deals 2d8 psychic damage on a hit and has the finesse, light, and thrown properties (range 20/60). In addition, when you use the sword to attack a target that is in dim light or darkness, you make the attack roll with advantage." },
    { name: "Shatter", level: 2, school: "Evocation", classes: ["Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S", "M (a chip of mica)"], duration: "Instantaneous", description: "A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution saving throw. A creature takes 3d8 thunder damage on a failed save, or half as much damage on a successful one. A creature made of inorganic material such as stone, crystal, or metal has disadvantage on this saving throw." },
    { name: "Silence", level: 2, school: "Illusion", classes: ["Bard", "Cleric", "Ranger"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S"], duration: "Concentration, up to 10 minutes", description: "For the duration, no sound can be created within or pass through a 20-foot-radius sphere centered on a point you choose within range. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it. Casting a spell that includes a verbal component is impossible there." },
    { name: "Skywrite", level: 2, school: "Transmutation", classes: ["Bard", "Druid", "Wizard", "Artificer"], castingTime: "1 Action", range: "Sight", components: ["V", "S"], duration: "Concentration, up to 1 day", description: "You cause up to ten words to form in a part of the sky you can see. The words appear to be made of cloud and remain in place for the spell's duration. The words dissipate when the spell ends. A strong wind can disperse the clouds and end the spell early." },
    { name: "Snilloc's Snowball Storm", level: 2, school: "Evocation", classes: ["Sorcerer", "Wizard"], castingTime: "1 Action", range: "90 feet", components: ["V", "S", "M (a piece of ice or a small white rock chip)"], duration: "Instantaneous", description: "A flurry of magic snowballs erupts from a point you choose within range. Each creature in a 5-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes 3d6 cold damage on a failed save, or half as much damage on a successful one." },
    { name: "Spider Climb", level: 2, school: "Transmutation", classes: ["Artificer", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (a drop of bitumen and a spider)"], duration: "Concentration, up to 1 hour", description: "Until the spell ends, one willing creature you touch gains the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving its hands free. The target also gains a climbing speed equal to its walking speed." },
    { name: "Spike Growth", level: 2, school: "Transmutation", classes: ["Druid", "Ranger"], castingTime: "1 Action", range: "150 Feet", components: ["V", "S", "M (seven sharp thorns or seven small twigs, each sharpened to a point)"], duration: "Concentration, up to 10 minutes", description: "The ground in a 20-foot radius centered on a point within range twists and sprouts hard spikes and thorns. The area becomes difficult terrain for the duration. When a creature moves into or within the area, it takes 2d4 piercing damage for every 5 feet it travels." },
    { name: "Spiritual Weapon", level: 2, school: "Evocation", classes: ["Cleric"], castingTime: "1 Bonus Action", range: "60 Feet", components: ["V", "S"], duration: "1 minute", description: "You create a floating, spectral weapon within range that lasts for the duration or until you cast this spell again." },
    { name: "Suggestion", level: 2, school: "Enchantment", classes: ["Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "M (a snake's tongue and either a bit of honeycomb or a drop of sweet oil)"], duration: "Concentration, up to 8 hours", description: "You suggest a course of activity (limited to a sentence or two) and magically influence a creature you can see within range that can hear and understand you. Creatures that can't be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act ends the spell." },
    { name: "Summon Beast", level: 2, school: "Conjuration", classes: ["Druid", "Ranger"], castingTime: "1 Action", range: "90 feet", components: ["V", "S", "M (a feather, tuft of fur, and fish tail inside a gilded acorn worth at least 200 gp)"], duration: "Concentration, up to 1 hour", description: "You call forth a bestial spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Bestial Spirit stat block. When you cast the spell, choose an environment: Air, Land, or Water. The creature resembles an animal of your choice that is native to the chosen environment, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." },
    { name: "Tasha's Mind Whip", level: 2, school: "Enchantment", classes: ["Sorcerer", "Wizard"], castingTime: "1 Action", range: "90 feet", components: ["V"], duration: "1 round", description: "You psychically lash out at one creature you can see within range. The target must make an Intelligence saving throw. On a failed save, the target takes 3d6 psychic damage, and it can't take a reaction until the end of its next turn. Moreover, on its next turn, it must choose whether it gets a move, an action, or a bonus action; it gets only one of the three. On a successful save, the target takes half as much damage and suffers none of the spell's other effects." },
    { name: "Warding Bond", level: 2, school: "Abjuration", classes: ["Cleric", "Paladin"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (a pair of platinum rings worth at least 50 gp each, which you and target must wear for the duration)"], duration: "1 hour", description: "This spell wards a willing creature you touch and creates a mystic connection between you and the target until the spell ends." },
    { name: "Warding Wind", level: 2, school: "Evocation", classes: ["Bard", "Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Self", components: ["V"], duration: "Concentration, up to 10 minutes", description: "A strong wind (20 miles per hour) blows around you in a 10-foot radius and moves with you, remaining centered on you. The wind lasts for the spell's duration." },
    { name: "Web", level: 2, school: "Conjuration", classes: ["Artificer", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S", "M (a bit of spiderweb)"], duration: "Concentration, up to 1 hour", description: "You conjure a mass of thick, sticky webbing at a point of your choice within range. The webs fill a 20-foot cube from that point for the duration. The webs are difficult terrain and lightly obscure their area." },
    { name: "Zone of Truth", level: 2, school: "Enchantment", classes: ["Bard", "Cleric", "Paladin"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "10 minutes", description: "You create a magical zone that guards against deception in a 15-foot-radius sphere centered on a point of your choice within range. Until the spell ends, a creature that enters the spell's area for the first time on a turn or starts its turn there must make a Charisma saving throw. On a failed save, a creature can't speak a deliberate lie while in the radius. You know whether each creature succeeds or fails on its saving throw." }
  ],
  "3rd": [
    { name: "Animate Dead", level: 3, school: "Necromancy", classes: ["Cleric", "Wizard"], castingTime: "1 Minute", range: "10 feet", components: ["V", "S", "M (a drop of blood, a piece of flesh, and a pinch of bone dust)"], duration: "Instantaneous", description: "This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. The target becomes a skeleton if you chose bones or a zombie if you chose a corpse (the DM has the creature's game statistics)." },
    { name: "Aura of Vitality", level: 3, school: "Evocation", classes: ["Cleric", "Druid", "Paladin"], castingTime: "1 Action", range: "Self (30-foot radius)", components: ["V"], duration: "Concentration, up to 1 minute", description: "Healing energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. You can use a bonus action to cause one creature in the aura (including you) to regain 2d6 hit points." },
    { name: "Beacon of Hope", level: 3, school: "Abjuration", classes: ["Cleric"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "This spell bestows hope and vitality. Choose any number of creatures within range. For the duration, each target has advantage on Wisdom saving throws and death saving throws, and regains the maximum number of hit points possible from any healing." },
    { name: "Bestow Curse", level: 3, school: "Necromancy", classes: ["Bard", "Cleric", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "You touch a creature, and that creature must succeed on a Wisdom saving throw or become cursed for the duration of the spell. When you cast this spell, choose the nature of the curse from the following options:" },
    { name: "Blinding Smite", level: 3, school: "Evocation", classes: ["Paladin"], castingTime: "1 Bonus Action", range: "Self", components: ["V"], duration: "Concentration, up to 1 minute", description: "The next time you hit a creature with a melee weapon attack during this spell's duration, you weapon flares with a bright light, and the attack deals an extra 3d8 radiant damage to the target. Additionally, the target must succeed on a Constitution saving throw or be blinded until the spell ends." },
    { name: "Blink", level: 3, school: "Transmutation", classes: ["Artificer", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Self", components: ["V", "S"], duration: "1 minute", description: "Roll a d20 at the end of each of your turns for the duration of the spell. On a roll of 11 or higher, you vanish from your current plane of existence and appear in the Ethereal Plane (the spell fails and the casting is wasted if you were already on that plane)." },
    { name: "Call Lightning", level: 3, school: "Conjuration", classes: ["Druid"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S"], duration: "Concentration, up to 10 minutes", description: "A storm cloud appears in the shape of a cylinder that is 10 feet tall with a 60-foot radius, centered on a point you can see 100 feet directly above you. The spell fails if you can't see a point in the air where the storm cloud could appear (for example, if you are in a room that can't accommodate the cloud)." },
    { name: "Catnap", level: 3, school: "Enchantment", classes: ["Artificer", "Bard", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["S", "M (a pinch of sand)"], duration: "10 minutes", description: "You make a calming gesture, and up to three willing creatures of your choice that you can see within range fall unconscious for the spell's duration. The spell ends on a target early if it takes damage or someone uses an action to shake or slap it awake. If a target remains unconscious for the full duration, that target gains the benefit of a short rest, and it can't be affected by this spell again until it finishes a long rest." },
    { name: "Clairvoyance", level: 3, school: "Divination", classes: ["Bard", "Cleric", "Sorcerer", "Wizard"], castingTime: "10 Minutes", range: "1 mile", components: ["V", "S", "M (a focus worth at least 100 gp, either a jeweled horn for hearing or a glass eye for seeing)"], duration: "Concentration, up to 10 minutes", description: "You create an invisible sensor within range in a location familiar to you (a place you have visited or seen before) or in an obvious location that is unfamiliar to you (such as behind a door, around a corner, or in a grove of trees). The sensor remains in place for the duration, and it can't be attacked or otherwise interacted with." },
    { name: "Conjure Animals", level: 3, school: "Conjuration", classes: ["Druid", "Ranger"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "Concentration, up to 1 hour", description: "You summon fey spirits that take the form of beasts and appear in unoccupied spaces that you can see within range." },
    { name: "Conjure Barrage", level: 3, school: "Conjuration", classes: ["Ranger"], castingTime: "1 Action", range: "Self (60-foot cone)", components: ["V", "S", "M (one piece of ammunition or a thrown weapon)"], duration: "Instantaneous", description: "You throw a nonmagical weapon or fire a piece of nonmagical ammunition into the air to create a cone of identical weapons that shoot forward and then disappear. Each creature in a 60-foot cone must succeed on a Dexterity saving throw. A creature takes 3d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the weapon or ammunition used as a component." },
    { name: "Counterspell", level: 3, school: "Abjuration", classes: ["Sorcerer", "Warlock", "Wizard"], castingTime: "1 Reaction", range: "60 Feet", components: ["S"], duration: "Instantaneous", description: "You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a success, the creature's spell fails and has no effect." },
    { name: "Create Food and Water", level: 3, school: "Conjuration", classes: ["Artificer", "Cleric", "Paladin"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S"], duration: "Instantaneous", description: "You create 45 pounds of food and 30 gallons of water on the ground or in containers within range, enough to sustain up to fifteen humanoids or five steeds for 24 hours. The food is bland but nourishing, and spoils if uneaten after 24 hours. The water is clean and doesn't go bad." },
    { name: "Crusader's Mantle", level: 3, school: "Evocation", classes: ["Paladin"], castingTime: "1 Action", range: "Self", components: ["V"], duration: "Concentration, up to 1 minute", description: "Holy power radiates from you in an aura with a 30-foot radius, awakening boldness in friendly creatures. Until the spell ends, the aura moves with you, centered on you. While in the aura, each non-hostile creature in the aura (including you) deals an extra 1d4 radiant damage when it hits with a weapon attack." },
    { name: "Daylight", level: 3, school: "Evocation", classes: ["Cleric", "Druid", "Paladin", "Ranger", "Sorcerer"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "1 hour", description: "A 60-foot-radius sphere of light spreads out from a point you choose within range. The sphere is bright light and sheds dim light for an additional 60 feet." },
    { name: "Dispel Magic", level: 3, school: "Abjuration", classes: ["Artificer", "Bard", "Cleric", "Druid", "Paladin", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S"], duration: "Instantaneous", description: "Choose any creature, object, or magical effect within range. Any spell of 3rd level or lower on the target ends. For each spell of 4th level or higher on the target, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a successful check, the spell ends." },
    { name: "Elemental Weapon", level: 3, school: "Transmutation", classes: ["Artificer", "Druid", "Paladin", "Ranger"], castingTime: "1 Action", range: "Touch", components: ["V", "S"], duration: "Concentration, up to 1 hour", description: "A nonmagical weapon you touch becomes a magic weapon. Choose one of the following damage types: acid, cold, fire, lightning, or thunder. For the duration, the weapon has a +1 bonus to attack rolls and deals an extra 1d4 damage of the chosen type when it hits." },
    { name: "Enemies Abound", level: 3, school: "Enchantment", classes: ["Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "You reach into the mind of one creature you can see and force it to make an Intelligence saving throw. A creature automatically succeeds if it is immune to being frightened. On a failed save, the target loses the ability to distinguish friend from foe, regarding all creatures it can see as enemies until the spell ends. Each time the target takes damage, it can repeat the saving throw, ending the effect on itself on a success." },
    { name: "Erupting Earth", level: 3, school: "Transmutation", classes: ["Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S", "M (a piece of obsidian)"], duration: "Instantaneous", description: "Choose a point you can see on the ground within range. A fountain of churned earth and stone erupts in a 20-foot cube centered on that point. Each creature in that area must make a Dexterity saving throw. A creature takes 3d12 bludgeoning damage on a failed save, or half as much damage on a successful one. Additionally, the ground in that area becomes difficult terrain until cleared away. Each 5-foot-square portion of the area requires at least 1 minute to clear by hand." },
    { name: "Fear", level: 3, school: "Illusion", classes: ["Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "Self (30-foot cone)", components: ["V", "S", "M (a white feather or the heart of a hen)"], duration: "Concentration, up to 1 minute", description: "You project a phantasmal image of a creature's worst fears. Each creature in a 30-foot cone must succeed on a Wisdom saving throw or drop whatever it is holding and become frightened for the duration." },
    { name: "Feign Death", level: 3, school: "Necromancy", classes: ["Bard", "Cleric", "Druid", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (a pinch of graveyard dirt)"], duration: "1 hour", description: "You touch a willing creature and put it into a cataleptic state that is indistinguishable from death." },
    { name: "Fireball", level: 3, school: "Evocation", classes: ["Sorcerer", "Wizard"], castingTime: "1 Action", range: "150 Feet", components: ["V", "S", "M (a tiny ball of bat guano and sulfur)"], duration: "Instantaneous", description: "A bright streak flashes from your pointing finger to a point you choose within range then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot radius must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried." },
    { name: "Flame Arrows", level: 3, school: "Transmutation", classes: ["Artificer", "Druid", "Ranger", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S"], duration: "Concentration, up to 1 hour", description: "You touch a quiver containing arrows or bolts. When a target is hit by a ranged weapon attack using a piece of ammunition drawn from the quiver, the target takes an extra 1d6 fire damage. The spell's magic ends on the piece of ammunition when it hits or misses, and the spell ends when twelve pieces of ammunition have been drawn from the quiver." },
    { name: "Fly", level: 3, school: "Transmutation", classes: ["Artificer", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (a wing feather from any bird)"], duration: "Concentration, up to 10 minute", description: "You touch a willing creature. The target gains a flying speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall." },
    { name: "Gaseous Form", level: 3, school: "Transmutation", classes: ["Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (a bit of gauze and a wisp of smoke)"], duration: "Concentration, up to 1 hour", description: "You transform a willing creature you touch, along with everything it's wearing and carrying, into a misty cloud for the duration. The spell ends if the creature drops to 0 hit points. An incorporeal creature isn't affected." },
    { name: "Glyph of Warding", level: 3, school: "Abjuration", classes: ["Artificer", "Bard", "Cleric", "Wizard"], castingTime: "1 Hour", range: "Touch", components: ["V", "S", "M (incense and powdered diamond worth at least 200 gp, which the spell consumes)"], duration: "Until dispelled or triggered", description: "When you cast this spell, you inscribe a glyph that harms other creatures, either upon a surface (such as a table or a section of floor or wall) or within an object that can be closed (such as a book, a scroll, or a treasure chest) to conceal the glyph." },
    { name: "Haste", level: 3, school: "Transmutation", classes: ["Artificer", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S", "M (a shaving of licorice root)"], duration: "Concentration, up to 1 minute", description: "Choose a willing creature that you can see within range. Until the spell ends, the target's speed is doubled, it gains a +2 bonus to AC, it has advantage on Dexterity saving throws, and it gains an additional action on each of its turns. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action." },
    { name: "Hunger Of Hadar", level: 3, school: "Conjuration", classes: ["Warlock"], castingTime: "1 Action", range: "150 Feet", components: ["V", "S", "M (a pickled octopus tentacle)"], duration: "Concentration, up to 1 minute", description: "You open a gateway to the dark between the stars, a region infested with unknown horrors. A 20-foot-radius sphere of blackness and bitter cold appears, centered on a point with range and lasting for the duration. This void is filled with a cacophony of soft whispers and slurping noises that can be heard up to 30 feet away. No light, magical or otherwise, can illuminate the area, and creatures fully within the area are blinded." },
    { name: "Hypnotic Pattern", level: 3, school: "Illusion", classes: ["Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["S", "M (a glowing stick of incense or a crystal vial filled with phosphorescent material)"], duration: "Concentration, up to 1 minute", description: "You create a twisting pattern of colors that weaves through the air inside a 30-foot cube within range. The pattern appears for a moment and vanishes. Each creature in the area who sees the pattern must make a Wisdom saving throw. On a failed save, the creature becomes charmed for the duration. While charmed by this spell, the creature is incapacitated and has a speed of 0." },
    { name: "Intellect Fortress", level: 3, school: "Abjuration", classes: ["Artificer", "Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V"], duration: "Concentration, up to 1 hour", description: "For the duration, you or one willing creature you can see within range has resistance to psychic damage, as well as advantage on Intelligence, Wisdom, and Charisma saving throws." },
    { name: "Leomund's Tiny Hut", level: 3, school: "Evocation", classes: ["Bard", "Wizard"], castingTime: "1 Minute", range: "Self (10-foot radius hemisphere)", components: ["V", "S", "M (a small crystal bead)"], duration: "8 hours", description: "A 10-foot-radius immobile dome of force springs into existence around and above you and remains stationary for the duration. The spell ends if you leave its area." },
    { name: "Life Transference", level: 3, school: "Evocation", classes: ["Cleric", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S"], duration: "Instantaneous", description: "You sacrifice some of your health to mend another creature's injuries. You take 4d8 necrotic damage, which can't be reduced in any way, and one creature of your choice that you can see within range regains a number of hit points equal to twice the necrotic damage you take." },
    { name: "Lightning Arrow", level: 3, school: "Transmutation", classes: ["Ranger"], castingTime: "1 Bonus Action", range: "Self", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "The next time you make a ranged weapon attack during the spell's duration, the weapon's ammunition, or the weapon itself if it's a thrown weapon, transforms into a bolt of lightning. Make the attack roll as normal. The target takes 4d8 lightning damage on a hit, or half as much damage on a miss, instead of the weapon's normal damage." },
    { name: "Lightning Bolt", level: 3, school: "Evocation", classes: ["Sorcerer", "Wizard"], castingTime: "1 Action", range: "Self (100-foot line)", components: ["V", "S", "M (a bit of fur and a rod of amber, crystal, or glass)"], duration: "Instantaneous", description: "A stroke of lightning forming a line of 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much damage on a successful one." },
    { name: "Magic Circle", level: 3, school: "Abjuration", classes: ["Cleric", "Paladin", "Warlock", "Wizard"], castingTime: "1 Minute", range: "10 feet", components: ["V", "S", "M (holy water or powdered silver and iron worth at least 100 gp, which the spell consumes)"], duration: "1 hour", description: "You create a 10-foot-radius, 20-foot-tall cylinder of magical energy centered on a point on the ground that you can see within range. Glowing runes appear wherever the cylinder intersects with the floor or other surface." },
    { name: "Major Image", level: 3, school: "Illusion", classes: ["Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S", "M (a bit of fleece)"], duration: "Concentration, up to 10 minutes", description: "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 20-foot cube. The image appears at a spot that you can see within range and lasts for the duration. It seems completely real, including sounds, smells, and temperature appropriate to the thing depicted. You can't create sufficient heat or cold to cause damage, a sound loud enough to deal thunder damage or deafen a creature, or a smell that might sicken a creature (like a troglodyte's stench)." },
    { name: "Mass Healing Word", level: 3, school: "Evocation", classes: ["Bard", "Cleric"], castingTime: "1 Bonus Action", range: "60 Feet", components: ["V"], duration: "Instantaneous", description: "As you call out words of restoration, up to six creatures of your choice that you can see within range regain hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs." },
    { name: "Meld into Stone", level: 3, school: "Transmutation", classes: ["Cleric", "Druid", "Ranger"], castingTime: "1 Action", range: "Touch", components: ["V", "S"], duration: "8 hours", description: "You step into a stone object or surface large enough to fully contain your body, melding yourself and all the equipment you carry with the stone for the duration. Using your movement, you step into the stone at a point you can touch. Nothing of your presence remains visible or otherwise detectable by nonmagical senses." },
    { name: "Melf's Minute Meteors", level: 3, school: "Evocation", classes: ["Sorcerer", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S", "M (niter, sulfur, and pine tar formed into a bead)"], duration: "Concentration, up to 10 minutes", description: "You create six tiny meteors in your space. They float in the air and orbit you for the spell's duration. When you cast the spell -- and as a bonus action on each of your turns thereafter -- you can expend one or two of the meteors, sending them streaking toward a point or points you choose within 120 feet of you. Once a meteor reaches its destination or impacts against a solid surface, the meteor explodes. Each creature within 5 feet of the point where the meteor explodes must make a Dexterity saving throw. A creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one." },
    { name: "Nondetection", level: 3, school: "Abjuration", classes: ["Bard", "Ranger", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (a pinch of diamond dust worth 25 gp sprinkled over the target, which the spell consumes)"], duration: "8 hours", description: "For the duration, you hide a target that you touch from divination magic. The target can be a willing creature or a place or an object no larger than 10 feet in any dimension. The target can't be targeted by any divination magic or perceived through magical scrying sensors." },
    { name: "Phantom Steed", level: 3, school: "Illusion", classes: ["Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S"], duration: "1 hour", description: "A Large quasi-real, horselike creature appears on the ground in an unoccupied space of your choice within range. You decide the creature's appearance, but it is equipped with a saddle, bit, and bridle. Any of the equipment created by the spell vanishes in a puff of smoke if it is carried more than 10 feet away from the steed." },
    { name: "Plant Growth", level: 3, school: "Transmutation", classes: ["Bard", "Druid", "Ranger"], castingTime: "1 Action", range: "150 Feet", components: ["V", "S"], duration: "Instantaneous", description: "This spell channels vitality into plants within a specific area. There are two possible uses for the spell, granting either immediate or long-term benefits." },
    { name: "Protection from Energy", level: 3, school: "Abjuration", classes: ["Artificer", "Cleric", "Druid", "Ranger", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S"], duration: "Concentration, up to 1 hour", description: "For the duration, the willing creature you touch has resistance to one damage type of your choice: acid, cold, fire, lightning, or thunder." },
    { name: "Remove Curse", level: 3, school: "Abjuration", classes: ["Cleric", "Paladin", "Warlock", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S"], duration: "Instantaneous", description: "At your touch, all curses affecting one creature or object end. If the object is a cursed magic item, its curse remains, but the spell breaks its owner's attunement to the object so it can be removed or discarded." },
    { name: "Revivify", level: 3, school: "Necromancy", classes: ["Artificer", "Cleric", "Druid", "Paladin", "Ranger"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (diamonds worth 300 gp, which the spell consumes)"], duration: "Instantaneous", description: "You touch a creature that has died within the last minute. That creature returns to life with 1 hit point. This spell can't return to life a creature that has died of old age, nor can it restore any missing body parts." },
    { name: "Sending", level: 3, school: "Evocation", classes: ["Bard", "Cleric", "Wizard"], castingTime: "1 Action", range: "Unlimited", components: ["V", "S", "M (a short piece of fine copper wire)"], duration: "1 round", description: "You send a short message of twenty-five words or less to a creature with which you are familiar. The creature hears the message in its mind, recognizes you as the sender if it knows you, and can answer in a like manner immediately. The spell enables creatures with Intelligence scores of at least 1 to understand the meaning of your message." },
    { name: "Sleet Storm", level: 3, school: "Conjuration", classes: ["Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S", "M (a pinch of dust and a few drops of water)"], duration: "Concentration, up to 1 minute", description: "Until the spell ends, freezing rain and sleet fall in a 20-foot-tall cylinder with a 40-foot radius centered on a point you choose within range. The area is heavily obscured, and exposed flames in the area are doused." },
    { name: "Slow", level: 3, school: "Transmutation", classes: ["Bard", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S", "M (a drop of molasses)"], duration: "Concentration, up to 1 minute", description: "You alter time around up to six creatures of your choice in a 40-foot cube within range. Each target must succeed on a Wisdom saving throw or be affected by this spell for the duration." },
    { name: "Speak with Dead", level: 3, school: "Necromancy", classes: ["Bard", "Cleric", "Wizard"], castingTime: "1 Action", range: "10 feet", components: ["V", "S", "M (burning incense)"], duration: "10 minutes", description: "You grant the semblance of life and intelligence to a corpse of your choice within range, allowing it to answer the questions you pose. The corpse must still have a mouth and can't be undead. The spell fails if the corpse was the target of this spell within the last 10 days." },
    { name: "Speak with Plants", level: 3, school: "Transmutation", classes: ["Bard", "Druid", "Ranger"], castingTime: "1 Action", range: "Self (30-foot radius)", components: ["V", "S"], duration: "10 minutes", description: "You imbue plants within 30 feet of you with limited sentience and animation, giving them the ability to communicate with you and follow your simple commands. You can question plants about events in the spell's area within the past day, gaining information about creatures that have passed, weather, and other circumstances." },
    { name: "Spirit Guardians", level: 3, school: "Conjuration", classes: ["Cleric"], castingTime: "1 Action", range: "Self (15-foot radius)", components: ["V", "S", "M (a holy symbol)"], duration: "Concentration, up to 10 minutes", description: "You call forth spirits to protect you. They flit around you to a distance of 15 feet for the duration. If you are good or neutral, their spectral form appears angelic or fey (your choice). If you are evil, they appear fiendish." },
    { name: "Spirit Shroud", level: 3, school: "Necromancy", classes: ["Cleric", "Paladin", "Warlock", "Wizard"], castingTime: "1 Bonus Action", range: "Self", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "You call forth spirits of the dead, which flit around you for the spell's duration. The spirits are intangible and invulnerable." },
    { name: "Stinking Cloud", level: 3, school: "Conjuration", classes: ["Bard", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "90 feet", components: ["V", "S", "M (a rotten egg or several skunk cabbage leaves)"], duration: "Concentration, up to 1 minute", description: "You create a 20-foot-radius sphere of yellow, nauseating gas centered on a point within range. The cloud spreads around corners, and its area is heavily obscured. The cloud lingers in the air for the duration." },
    { name: "Summon Fey", level: 3, school: "Conjuration", classes: ["Druid", "Ranger", "Warlock", "Wizard"], castingTime: "1 Action", range: "90 feet", components: ["V", "S", "M (a gilded flower worth at least 300 gp)"], duration: "Concentration, up to 1 hour", description: "You call forth a fey spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Fey Spirit stat block. When you cast the spell, choose a mood. Fuming, Mirthful, or Tricksy. The creature resembles a fey creature of your choice marked by the chosen mood, which determines one of the traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." },
    { name: "Summon Lesser Demons", level: 3, school: "Conjuration", classes: ["Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S", "M (a vial of blood from a humanoid killed within the past 24 hours)"], duration: "Concentration, up to 1 hour", description: "You utter foul words, summoning one demon from the chaos of the Abyss. Roll on the following table to determine what appears." },
    { name: "Summon Shadowspawn", level: 3, school: "Conjuration", classes: ["Warlock", "Wizard"], castingTime: "1 Action", range: "90 feet", components: ["V", "S", "M (tears inside a crystal vial worth at least 300 gp)"], duration: "Concentration, up to 1 hour", description: "You call forth a shadowy spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Shadow Spirit stat block. When you cast the spell, choose an emotion: Fury, Despair, or Fear. The creature resembles a misshapen biped marked by the chosen emotion, which determines certain traits in its stat block. The creature disappears when it drop to 0 hit points or when the spell ends." },
    { name: "Summon Undead", level: 3, school: "Necromancy", classes: ["Warlock", "Wizard"], castingTime: "1 Action", range: "90 feet", components: ["V", "S", "M (a gilded skull worth at least 300 gp)"], duration: "Concentration, up to 1 hour", description: "You call forth an undead spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Undead Spirit stat block. When you cast the spell, choose the creature's form: Ghostly, Putrid, or Skeletal. The spirit resembles an undead creature with the chosen form, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." },
    { name: "Thunder Step", level: 3, school: "Conjuration", classes: ["Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "90 feet", components: ["V"], duration: "Instantaneous", description: "You teleport yourself to an unoccupied space you can see within range. Immediately after you disappear, a thunderous boom sounds, and each creature within 10 feet of the space you left must make a Constitution saving throw, taking 3d10 thunder damage on a failed save, or half as much damage on a successful one. The thunder can be heard from up to 300 feet away." },
    { name: "Tidal Wave", level: 3, school: "Conjuration", classes: ["Druid", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S", "M (a drop of water)"], duration: "Instantaneous", description: "You conjure up a wave of water that crashes down on an area within range. The area can be up to 30 feet long, up to 10 feet wide, and up to 10 feet tall. Each creature in that area must make a Dexterity saving throw. On a failure, a creature takes 4d8 bludgeoning damage and is knocked prone. On a success, a creature takes half as much damage and isn't knocked prone. The water then spreads out across the ground in all directions, extinguishing unprotected flames in its area and within 30 feet of it." },
    { name: "Tiny Servant", level: 3, school: "Transmutation", classes: ["Artificer", "Wizard"], castingTime: "1 Minute", range: "Touch", components: ["V", "S"], duration: "8 hours", description: "You touch one Tiny, nonmagical object that isn't attached to another object or a surface and isn't being carried by another creature. The target animates and sprouts little arms and legs, becoming a creature under your control until the spell ends or the creature drops to 0 hit points. See the stat block for its statistics." },
    { name: "Tongues", level: 3, school: "Divination", classes: ["Bard", "Cleric", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "M (a small clay model of a ziggurat)"], duration: "1 hour", description: "This spell grants the creature you touch the ability to understand any spoken language it hears. Moreover, when the target speaks, any creature that knows at least one language and can hear the target understands what it says." },
    { name: "Vampiric Touch", level: 3, school: "Necromancy", classes: ["Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "Self", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "The touch of your shadow-wreathed hand can siphon force from others to heal your wounds. Make a melee spell attack against a creature within your reach. On a hit, the target takes 3d6 necrotic damage, and you regain hit points equal to half the amount of necrotic damage dealt. Until the spell ends, you can make the attack again on each of your turns as an action." },
    { name: "Wall of Sand", level: 3, school: "Evocation", classes: ["Wizard"], castingTime: "1 Action", range: "90 feet", components: ["V", "S", "M (a handful of sand)"], duration: "Concentration, up to 10 minutes", description: "You conjure up a wall of swirling sand on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 10 feet thick, and it vanishes when the spell ends. It blocks line of sight but not movement. A creature is blinded while in the wall's space and must spend 3 feet of movement for every 1 foot it moves there." },
    { name: "Wall of Water", level: 3, school: "Evocation", classes: ["Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S", "M (a drop of water)"], duration: "Concentration, up to 10 minutes", description: "You conjure up a wall of water on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 1 foot thick, or you can make a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall vanishes when the spell ends. The wall's space is difficult terrain." },
    { name: "Water Breathing", level: 3, school: "Transmutation", classes: ["Artificer", "Druid", "Ranger", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S", "M (a short reed or piece of straw)"], duration: "24 hours", description: "This spell grants up to ten willing creatures you can see within range the ability to breathe underwater until the spell ends. Affected creatures also retain their normal mode of respiration." },
    { name: "Water Walk", level: 3, school: "Transmutation", classes: ["Artificer", "Cleric", "Druid", "Ranger", "Sorcerer"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S", "M (a piece of cork)"], duration: "1 hour", description: "This spell grants the ability to move across any liquid surface - such as water, acid, mud, snow, quicksand, or lava - as if it were harmless solid ground (creatures crossing molten lava can still take damage from the heat). Up to ten willing creatures you can see within range gain this ability for the duration." },
    { name: "Wind Wall", level: 3, school: "Evocation", classes: ["Druid", "Ranger"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S", "M (a tiny fan and a feather of exotic origin)"], duration: "Concentration, up to 1 minute", description: "A wall of strong wind rises from the ground at a point you choose within range. You can make the wall up to 50 feet long, 15 feet high, and 1 foot thick. You can shape the wall in any way you choose so long as it makes one continuous path along the ground. The wall lasts for the duration." }
  ],
  "4th": [
    { name: "Arcane Eye", level: 4, school: "Divination", classes: ["Artificer", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S", "M (a bit of bat fur)"], duration: "Concentration, up to 1 hour", description: "You create an invisible, magical eye within range that hovers in the air for the duration. You mentally receive visual information from the eye, which has normal vision and darkvision out to 30 feet. The eye can look in every direction." },
    { name: "Aura of Life", level: 4, school: "Abjuration", classes: ["Cleric", "Paladin"], castingTime: "1 Action", range: "Self (30-foot radius)", components: ["V"], duration: "Concentration, up to 10 minutes", description: "Life-preserving energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each non-hostile creature in the aura (including you) has resistance to necrotic damage, and its hit point maximum can't be reduced. In addition, a non-hostile, living creature regains 1 hit point when it starts its turn in the aura with 0 hit points." },
    { name: "Aura of Purity", level: 4, school: "Abjuration", classes: ["Cleric", "Paladin"], castingTime: "1 Action", range: "Self (30-foot radius)", components: ["V"], duration: "Concentration, up to 10 minutes", description: "Purifying energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each non-hostile creature in the aura (including you) can't become diseased, has resistance to poison damage, and has advantage on saving throws against effects that cause any of the following conditions: blinded, charmed, deafened, frightened, paralyzed, poisoned, and stunned." },
    { name: "Banishment", level: 4, school: "Abjuration", classes: ["Cleric", "Paladin", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S", "M (an item distasteful to the target)"], duration: "Concentration, up to 1 minutes", description: "You attempt to send one creature that you can see within range to another place of existence. The target must succeed on a Charisma saving throw or be banished." },
    { name: "Blight", level: 4, school: "Necromancy", classes: ["Druid", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S"], duration: "Instantaneous", description: "Necromantic energy washes over a creature of your choice that you can see within range, draining moisture and vitality from it. The target must make a Constitution saving throw. The target takes 8d8 necrotic damage on a failed save, or half as much damage on a successful one. This spell has no effect on undead or constructs." },
    { name: "Charm Monster", level: 4, school: "Enchantment", classes: ["Bard", "Druid", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S"], duration: "1 hour", description: "You attempt to charm a creature you can see within range. It must make a Wisdom saving throw, and it does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature is friendly to you. When the spell ends, the creature knows it was charmed by you." },
    { name: "Compulsion", level: 4, school: "Enchantment", classes: ["Bard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "Creatures of your choice that you can see within range and that can hear you must make a Wisdom saving throw. A target automatically succeeds on this saving throw if it can't be charmed. On a failed save, a target is affected by this spell. Until the spell ends, you can use a bonus action on each of your turns to designate a direction that is horizontal to you. Each affected target must use as much of its movement as possible to move in that direction on its next turn. It can take its action before it moves. After moving in this way, it can make another Wisdom saving throw to try to end the effect." },
    { name: "Confusion", level: 4, school: "Enchantment", classes: ["Bard", "Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "90 feet", components: ["V", "S", "M (three nut shells)"], duration: "Concentration, up to 1 minute", description: "This spell assaults and twists creatures' minds, spawning delusions and provoking uncontrolled actions. Each creature in a 10-foot-radius sphere centered on a point you choose within range must succeed on a Wisdom saving throw when you cast this spell or be affected by it." },
    { name: "Conjure Minor Elementals", level: 4, school: "Conjuration", classes: ["Druid", "Wizard"], castingTime: "1 Minute", range: "90 feet", components: ["V", "S"], duration: "Concentration, up to 1 hour", description: "You summon elementals that appear in unoccupied spaces that you can see within range. You choose one the following options for what appears:" },
    { name: "Conjure Woodland Beings", level: 4, school: "Conjuration", classes: ["Druid", "Ranger"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S", "M (one holly berry per creature summoned)"], duration: "Concentration, up to 1 hour", description: "You summon fey creatures that appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears:" },
    { name: "Control Water", level: 4, school: "Transmutation", classes: ["Cleric", "Druid", "Wizard"], castingTime: "1 Action", range: "300 feet", components: ["V", "S", "M (a drop of water and a pinch of dust)"], duration: "Concentration, up to 10 minutes", description: "Until the spell ends, you control any freestanding water inside an area you choose that is a cube up to 100 feet on a side. You can choose from any of the following effects when you cast this spell. As an action on your turn, you can repeat the same effect or choose a different one." },
    { name: "Death Ward", level: 4, school: "Abjuration", classes: ["Cleric", "Paladin"], castingTime: "1 Action", range: "Touch", components: ["V", "S"], duration: "8 hours", description: "You touch a creature and grant it a measure of protection from death. The first time the target would drop to 0 hit points as a result of taking damage, the target instead drops to 1 hit point, and the spell ends. If the spell is still in effect when the target is subjected to an effect that would kill it instantaneously without dealing damage, that effect is instead negated against the target, and the spells ends." },
    { name: "Dimension Door", level: 4, school: "Conjuration", classes: ["Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "500 feet", components: ["V"], duration: "Instantaneous", description: "You teleport yourself from your current location to any other spot within range. You arrive at exactly the spot desired. It can be a place you can see, one you can visualize, or one you can describe by stating distance and direction, such as \"200 feet straight downward\" or \"upward to the northwest at a 45-degree angle, 300 feet\"." },
    { name: "Divination", level: 4, school: "Divination", classes: ["Cleric", "Druid", "Wizard"], castingTime: "1 Action", range: "Self", components: ["V", "S", "M (incense and a sacrificial offering appropriate to your religion, together worth at least 25 gp, which the spell consumes)"], duration: "Instantaneous", description: "Your magic and an offering put you in contact with a god or a god's servants. You ask a single question concerning a specific goal, event, or activity to occur within 7 days. The DM offers a truthful reply. The reply might be a short phrase, a cryptic rhyme, or an omen." },
    { name: "Dominate Beast", level: 4, school: "Enchantment", classes: ["Druid", "Ranger", "Sorcerer"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "You attempt to beguile a beast that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw." },
    { name: "Elemental Bane", level: 4, school: "Transmutation", classes: ["Druid", "Warlock", "Wizard", "Artificer"], castingTime: "1 Action", range: "90 feet", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "Choose one creature you can see within range, and choose one of the following damage types: acid, cold, fire, lightning, or thunder. The target must succeed on a Constitution saving throw or be affected by the spell for its duration. The first time each turn the affected target takes damage of the chosen type, the target takes an extra 2d6 damage of that type. Moreover, the target loses any resistance to that damage type until the spell ends." },
    { name: "Evard's Black Tentacles", level: 4, school: "Conjuration", classes: ["Wizard"], castingTime: "1 Action", range: "90 feet", components: ["V", "S", "M (a piece of tentacle from a giant octopus or a giant squid)"], duration: "Concentration, up to 1 minute", description: "Squirming, ebony tentacles fill a 20-foot square on ground that you can see within range. For the duration, these tentacles turn the ground in the area into difficult terrain." },
    { name: "Fabricate", level: 4, school: "Transmutation", classes: ["Artificer", "Wizard"], castingTime: "10 Minutes", range: "120 Feet", components: ["V", "S"], duration: "Instantaneous", description: "You convert raw materials into products of the same material. For example, you can fabricate a wooden bridge from a clump of trees, a rope from a patch of hemp, and clothes from flax or wool." },
    { name: "Find Greater Steed", level: 4, school: "Conjuration", classes: ["Paladin"], castingTime: "10 Minutes", range: "30 Feet", components: ["V", "S"], duration: "Instantaneous", description: "You summon a spirit that assumes the form of a loyal, majestic mount. Appearing in an unoccupied space within range, the spirit takes on a form you choose: a griffon, a pegasus, a peryton, a dire wolf, a rhinoceros, or a saber--toothed tiger. The creature has the statistics provided in the Monster Manual for the chosen form, though it is a celestial, a fey, or a fiend (your choice) instead of its normal creature type. Additionally, if it has an Intelligence score of 5 or lower, its Intelligence becomes 6, and it gains the ability to understand one language of your choice that you speak. You control the mount in combat. While the mount is within 1 mile of you, you can communicate with it telepathically. While mounted on it, you can make any spell you cast that targets only you also target the mount. The mount disappears temporarily when it drops to 0 hit points or when you dismiss it as an action. Casting this spell again re--summons the bonded mount, with all its hit points restored and any conditions removed. You can't have more than one mount bonded by this spell or find steed at the same time. As an action, you can release a mount from its bond, causing it to disappear permanently. Whenever the mount disappears, it leaves behind any objects it was wearing or carrying." },
    { name: "Fire Shield", level: 4, school: "Evocation", classes: ["Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Self", components: ["V", "S", "M (a bit of phosphorus or a firefly)"], duration: "10 minutes", description: "Thin and wispy flames wreathe your body for the duration, shedding bright light in a 10-foot radius and dim light for an additional 10 feet. You can end the spell early by using an action to dismiss it." },
    { name: "Freedom of Movement", level: 4, school: "Abjuration", classes: ["Artificer", "Bard", "Cleric", "Druid", "Ranger"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (a leather strap, bound around the arm or a similar appendage)"], duration: "1 hour", description: "You touch a willing creature. For the duration, the target's movement is unaffected by difficult terrain, and spells and other magical effects can neither reduce the target's speed nor cause the target to be paralyzed or restrained." },
    { name: "Giant Insect", level: 4, school: "Transmutation", classes: ["Druid"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S"], duration: "Concentration, up to 10 minutes", description: "You transform up to ten centipedes, three spiders, five wasps, or one scorpion within range into giant versions of their natural forms for the duration. A centipede becomes a giant centipede, a spider becaomes a giant spider, a wasp becomes a giant wasp, and a scorpion becomes a giant scorpion." },
    { name: "Grasping Vine", level: 4, school: "Conjuration", classes: ["Druid", "Ranger"], castingTime: "1 Bonus Action", range: "30 Feet", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "You conjure a vine that sprouts from the ground in an unoccupied space of your choice that you can see within range. When you cast this spell, you can direct the vine to lash out at a creature within 30 feet of it that you can see. That creature must succeed on a Dexterity saving throw or be pulled 20 feet directly toward the vine." },
    { name: "Greater Invisibility", level: 4, school: "Illusion", classes: ["Bard", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "You or a creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person." },
    { name: "Guardian of Faith", level: 4, school: "Conjuration", classes: ["Cleric"], castingTime: "1 Action", range: "30 Feet", components: ["V"], duration: "8 hours", description: "A Large spectral guardian appears and hovers for the duration in an unoccupied space of your choice that you can see within range. The guardian occupies that space and is indistinct except for a gleaming sword and shield emblazoned with the symbol of your deity." },
    { name: "Guardian of Nature", level: 4, school: "Transmutation", classes: ["Druid", "Ranger"], castingTime: "1 Bonus Action", range: "Self", components: ["V"], duration: "Concentration, up to 1 minute", description: "A nature spirit answers your call and transforms you into a powerful guardian. The transformation lasts until the spell ends. You choose one of the following forms to assume: Primal Beast or Great Tree." },
    { name: "Hallucinatory Terrain", level: 4, school: "Illusion", classes: ["Bard", "Druid", "Warlock", "Wizard"], castingTime: "10 Minutes", range: "300 feet", components: ["V", "S", "M (a stone, a twig, and a bit of green plant)"], duration: "24 hours", description: "You make natural terrain in a 150-foot cube in range look, sound, and smell like some other sort of natural terrain. Thus, open fields or a road can be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road. Manufactured structures, equipment, and creatures within the area aren't changed in appearance." },
    { name: "Ice Storm", level: 4, school: "Evocation", classes: ["Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "300 feet", components: ["V", "S", "M (a pinch of dust and a few drops of water)"], duration: "Instantaneous", description: "A hail of rock-hard ice pounds to the ground in a 20-foot-radius, 40-foot-high cylinder centered on a point within range. Each creature in the cylinder must make a Dexterity saving throw. A creature takes 2d8 bludgeoning damage and 4d6 cold damage on a failed save, or half as much damage on a successful one." },
    { name: "Leomund's Secret Chest", level: 4, school: "Conjuration", classes: ["Artificer", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (an exquisite chest, 3 feet by 2 feet by 2 feet, constructed from rare materials worth at least 5,000 gp, and a Tiny replica made from the same materials worth at least 50 gp)"], duration: "Instantaneous", description: "You hide a chest, and all its contents, on the Ethereal Plane. You must touch the chest and the miniature replica that serves as a material component for the spell. The chest can contain up to 12 cubic feet of nonliving material (3 feet by 2 feet by 2 feet)." },
    { name: "Locate Creature", level: 4, school: "Divination", classes: ["Bard", "Cleric", "Druid", "Paladin", "Ranger", "Wizard"], castingTime: "1 Action", range: "Self", components: ["V", "S", "M (a bit of fur from a bloodhound)"], duration: "Concentration, up to 1 hour", description: "Describe or name a creature that is familiar to you. You sense the direction to the creature's location, as long as that creature is within 1,000 feet of you. If the creature is moving, you know the direction of its movement." },
    { name: "Mordenkainen's Faithful Hound", level: 4, school: "Conjuration", classes: ["Artificer", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S", "M (a tiny silver whistle, a piece of bone, and a thread)"], duration: "8 hours", description: "You conjure a phantom watchdog in an unoccupied space that you can see within range, where it remains for the duration, until you dismiss it as an action, or until you move more than 100 feet away from it." },
    { name: "Mordenkainen's Private Sanctum", level: 4, school: "Abjuration", classes: ["Artificer", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S", "M (a thin sheet of lead, a piece of opaque glass, a wad of cotton or cloth, and powdered chrysolite)"], duration: "24 hours", description: "You make an area within range magically secure. The area is a cube that can be as small as 5 feet to as large as 100 feet on each side. The spell lasts for the duration or until you use an action to dismiss it." },
    { name: "Otiluke's Resilient Sphere", level: 4, school: "Evocation", classes: ["Artificer", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S", "M (a hemispherical piece of clear crystal and a matching hemispherical piece of gum arabic)"], duration: "Concentration, up to 1 minute", description: "A sphere of shimmering force encloses a creature or object of Large size or smaller within range. An unwilling creature must make a Dexterity saving throw. On a failed save, the creature is enclosed for the duration." },
    { name: "Phantasmal Killer", level: 4, school: "Illusion", classes: ["Bard", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "You tap into the nightmares of a creature you can see within range and create an illusory manifestation of its deepest fears, visible only to that creature." },
    { name: "Polymorph", level: 4, school: "Transmutation", classes: ["Bard", "Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S", "M (a caterpillar cocoon)"], duration: "Concentration, up to 1 hour", description: "This spell transforms a creature that you can see within range into a new form. An unwilling creature must make a Wisdom saving throw to avoid the effect. A shapechanger automatically succeeds on this saving throw." },
    { name: "Shadow Of Moil", level: 4, school: "Necromancy", classes: ["Warlock"], castingTime: "1 Action", range: "Self", components: ["V", "S", "M (an undead eyeball encased in a gem worth at least 150 gp)"], duration: "Concentration, up to 1 minute", description: "Flame-like shadows wreathe your body until the spell ends, causing you to become heavily obscured to others. The shadows turn dim light within 10 feet of you into darkness, and bright light in the same area to dim light." },
    { name: "Sickening Radiance", level: 4, school: "Evocation", classes: ["Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S"], duration: "Concentration, up to 10 minutes", description: "Dim, greenish light spreads within a 30-foot-radius sphere centered on a point you choose within range. The light spreads around corners, and it lasts until the spell ends." },
    { name: "Staggering Smite", level: 4, school: "Evocation", classes: ["Paladin"], castingTime: "1 Bonus Action", range: "Self", components: ["V"], duration: "Concentration, up to 1 minute", description: "The next time you hit a creature with a melee weapon attack during this spell's duration, your weapon pierces both body and mind, and the attack deals an extra 4d6 psychic damage to the target. The target must make a Wisdom saving throw. On a failed save, it has disadvantage on attack rolls and ability checks, and can't take reactions, until the end of its next turn." },
    { name: "Stone Shape", level: 4, school: "Transmutation", classes: ["Artificer", "Cleric", "Druid", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (soft clay, which must be worked into roughly the desired shape of the stone object)"], duration: "Instantaneous", description: "You touch a stone object of Medium size or smaller or a section of stone no more than 5 feet in any dimension and form it into any shape that suits your purpose. So, for example, you could shape a large rock into a weapon, idol, or coffer, or make a small passage through a wall, as long as the wall is less than 5 feet thick. You could also shape a stone door or its frame to seal the door shut. The object you create can have up to two hinges and a latch, but finer mechanical detail isn't possible." },
    { name: "Stoneskin", level: 4, school: "Abjuration", classes: ["Artificer", "Druid", "Ranger", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (diamond dust worth 100 gp, which the spell consumes)"], duration: "Concentration, up to 1 hour", description: "This spell turns the flesh of a willing creature you touch as hard as stone. Until the spell ends, the target has resistance to nonmagical bludgeoning, piercing, and slashing damage." },
    { name: "Storm Sphere", level: 4, school: "Evocation", classes: ["Sorcerer", "Wizard"], castingTime: "1 Action", range: "150 Feet", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "A 20-foot-radius sphere of whirling air springs into existence centered on a point you choose within range. The sphere remains for the spell's duration. Each creature in the sphere when it appears or that ends its turn there must succeed on a Strength saving throw or take 2d6 bludgeoning damage. The sphere's space is difficult terrain." },
    { name: "Summon Aberration", level: 4, school: "Conjuration", classes: ["Warlock", "Wizard"], castingTime: "1 Action", range: "90 feet", components: ["V", "S", "M (a pickled tentacle and an eyeball in a platinum inlaid vial worth at least 400 gp)"], duration: "Concentration, up to 1 hour", description: "You call forth an aberrant spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Aberrant Spirit stat block. When you cast the spell, choose Beholderkin, Slaad, or Star Spawn. The creature resembles an aberration of that kind, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." },
    { name: "Summon Construct", level: 4, school: "Conjuration", classes: ["Artificer", "Wizard"], castingTime: "1 Action", range: "90 feet", components: ["V", "S", "M (an ornate stone and metal lockbox worth at least 400 gp)"], duration: "Concentration, up to 1 hour", description: "You call forth the spirit of a construct. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Construct Spirit stat block. When you cast the spell, choose a material: Clay, Metal, or Stone. The creature resembles a golem or a modron (your choice) made of the chosen material, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." },
    { name: "Summon Elemental", level: 4, school: "Conjuration", classes: ["Druid", "Ranger", "Wizard"], castingTime: "1 Action", range: "90 feet", components: ["V", "S", "M (air, a pebble, ash, and water inside a gold-inlaid vial worth at least 400 gp)"], duration: "Concentration, up to 1 hour", description: "You call forth an elemental spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Elemental Spirit stat block. When you cast the spell, choose an element: Air, Earth, Fire, or Water. The creature resembles a bipedal form wreathed in the chosen element, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." },
    { name: "Summon Greater Demon", level: 4, school: "Conjuration", classes: ["Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S", "M (a vial of blood from a humanoid killed within the past 24 hours)"], duration: "Concentration, up to 1 hour", description: "You utter foul words, summoning one demon from the chaos of the Abyss. You choose the demon's type, which must be one of challenge rating 5 or lower, such as a shadow demon or a barlgura. The demon appears in an unoccupied space you can see within range, and the demon disappears when it drops to 0 hit points or when the spell ends." },
    { name: "Vitriolic Sphere", level: 4, school: "Evocation", classes: ["Sorcerer", "Wizard"], castingTime: "1 Action", range: "150 Feet", components: ["V", "S", "M (a drop of giant slug bile)"], duration: "Instantaneous", description: "You point at a place within range, and a glowing 1-foot ball of emerald acid streaks there and explodes in a 20-foot radius. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 10d4 acid damage and 5d4 acid damage at the end of its next turn. On a successful save, a creature takes half the initial damage and no damage at the end of its next turn." },
    { name: "Wall of Fire", level: 4, school: "Evocation", classes: ["Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S", "M (a small piece of phosphorus)"], duration: "Concentration, up to 1 minute", description: "You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall is opaque and lasts for the duration." },
    { name: "Watery Sphere", level: 4, school: "Conjuration", classes: ["Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "90 feet", components: ["V", "S", "M (a droplet of water)"], duration: "Concentration, up to 1 minute", description: "You conjure up a sphere of water with a 5-foot radius on a point you can see within range. The sphere can hover in the air, but no more than 10 feet off the ground. The sphere remains for the spell's duration." }
  ],
  "5th": [
    { name: "Animate Objects", level: 5, school: "Transmutation", classes: ["Artificer", "Bard", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "Objects come to life at your command. Choose up to ten nonmagical objects within range that are not being worn or carried. Medium targets count as two objects, Large targets count as four objects, Huge targets count as eight objects. You can't animate any object larger than Huge. Each target animates and becomes a creature under your control until the spell ends or until reduced to 0 hit points." },
    { name: "Antilife Shell", level: 5, school: "Abjuration", classes: ["Druid"], castingTime: "1 Action", range: "Self (10-foot radius)", components: ["V", "S"], duration: "Concentration, up to 1 hour", description: "A shimmering barrier extends out from you in a 10-foot radius and moves with you, remaining centered on you and hedging out creatures other than undead and constructs." },
    { name: "Awaken", level: 5, school: "Transmutation", classes: ["Bard", "Druid"], castingTime: "8 Hours", range: "Touch", components: ["V", "S", "M (an agate worth at least 1,000 gp, which the spell consumes)"], duration: "Instantaneous", description: "After spending the casting time tracing magical pathways within a precious gemstone, you touch a huge or smaller beast or plant. The target must have either no Intelligence score or an Intelligence of 3 or less." },
    { name: "Banishing Smite", level: 5, school: "Abjuration", classes: ["Paladin"], castingTime: "1 Bonus Action", range: "Self", components: ["V"], duration: "Concentration, up to 1 minute", description: "The next time you hit a creature with a weapon attack before this spell ends, your weapon crackles with force, and the attack deals an extra 5d10 force damage to the target. Additionally, if this attack reduces the target to 50 hit points of fewer, you banish it. If the target is native to a different plane of existence than the on you're on, the target disappears, returning to its home plane. If the target is native to the plane you're on, the creature vanishes into a harmless demiplane. While there, the target is incapacitated. It remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied." },
    { name: "Bigby's Hand", level: 5, school: "Evocation", classes: ["Artificer", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S", "M (an eggshell and a snakeskin glove)"], duration: "Concentration, up to 1 minute", description: "You create a Large hand of shimmering, translucent force in an unoccupied space that you can see within range. The hand lasts for the spell's duration, and it moves at your command, mimicking the movements of your own hand." },
    { name: "Circle of Power", level: 5, school: "Abjuration", classes: ["Paladin"], castingTime: "1 Action", range: "Self (30-foot radius)", components: ["V"], duration: "Concentration, up to 10 minutes", description: "Divine energy radiates from you, distorting and diffusing magical energy within 30 feet of you. Until the spell ends, the sphere moves with you, centered on you. For the duration, each friendly creature in the area (including you) has advantage on saving throws against spells and other magical effects." },
    { name: "Cloudkill", level: 5, school: "Conjuration", classes: ["Sorcerer", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S"], duration: "Concentration, up to 10 minutes", description: "You create a 20-foot-radius sphere of poisonous, yellow-green fog centered on a point you choose within range. The fog spreads around corners. It lasts for the duration or until strong wind disperses the fog, ending the spell. Its area is heavily obscured." },
    { name: "Commune", level: 5, school: "Divination", classes: ["Cleric"], castingTime: "1 Minute", range: "Self", components: ["V", "S", "M (incense and a vial of holy or unholy water)"], duration: "1 minute", description: "You contact your deity or a divine proxy and ask up to three questions that can be answered with a yes or no. You must ask your questions before the spell ends. You receive a correct answer for each question." },
    { name: "Commune with Nature", level: 5, school: "Divination", classes: ["Druid", "Ranger"], castingTime: "1 Minute", range: "Self", components: ["V", "S"], duration: "Instantaneous", description: "You briefly become one with nature and gain knowledge of the surrounding territory. In the outdoors, the spell gives you knowledge of the land within 3 miles of you. In caves and other natural underground settings, the radius is limited to 300 feet. The spell doesn't function where nature has been replaced by construction, such as in dungeons and towns." },
    { name: "Cone of Cold", level: 5, school: "Evocation", classes: ["Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Self (60-foot cone)", components: ["V", "S", "M (a small crystal or glass cone)"], duration: "Instantaneous", description: "A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a Constitution saving throw. A creature takes 8d8 cold damage on a failed save, or half as much damage on a successful one. A creature killed by this spell becomes a frozen statue until it thaws." },
    { name: "Conjure Elemental", level: 5, school: "Conjuration", classes: ["Druid", "Wizard"], castingTime: "1 Action", range: "90 feet", components: ["V", "S", "M (burning incense for air, soft clay for earth, sulfur and phosphorus for fire, or water and sand for water)"], duration: "Concentration, up to 1 hour", description: "You call forth an elemental servant. Choose an area of air, earth, fire, or water that fills a 10-foot cube within range. An elemental of challenge rating 5 or lower appropriate to the area you chose appears in an unoccupied space within 10 feet of it. For example, a fire elemental emerges from a bonfire, and an earth elemental rises up from the ground. The elemental disappears when it drops to 0 hit points or when the spell ends." },
    { name: "Conjure Volley", level: 5, school: "Conjuration", classes: ["Ranger"], castingTime: "1 Action", range: "150 Feet", components: ["V", "S", "M (one piece of ammunition or one thrown weapon)"], duration: "Instantaneous", description: "You fire a piece of nonmagical ammunition from a ranged weapon or throw a nonmagical weapon into the air and choose a point within range. Hundreds of duplicates of the ammunition or weapon fall in a volley from above and then disappear. Each creature in a 40-foot-radius, 20-foot-high cylinder centered on that point must make a Dexterity saving throw. A creature takes 8d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the ammunition or weapon." },
    { name: "Contact Other Plane", level: 5, school: "Divination", classes: ["Warlock", "Wizard"], castingTime: "1 Minute", range: "Self", components: ["V"], duration: "1 minute", description: "You mentally contact a demigod, the spirit of a long-dead sage, or some other mysterious entity from another plane. Contacting this extraplanar intelligence can strain or even break your mind. When you cast this spell, make a DC 15 Intelligence saving throw. On a failure, you take 6d6 psychic damage and are insane until you finish a long rest. While insane, you can't take actions, can't understand what other creatures say, can't read, and speak only in gibberish. A Greater Restoration spell cast on you ends this effect." },
    { name: "Contagion", level: 5, school: "Necromancy", classes: ["Cleric", "Druid"], castingTime: "1 Action", range: "Touch", components: ["V", "S"], duration: "7 days", description: "Your touch inflicts disease. Make a melee spell attack against a creature within your reach. On a hit, the target is poisoned." },
    { name: "Control Winds", level: 5, school: "Transmutation", classes: ["Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "300 feet", components: ["V", "S"], duration: "Concentration, up to 1 hour", description: "You take control of the air in a 100-foot cube that you can see within range. Choose one of the following effects when you cast the spell. The effect lasts for the spell's duration, unless you use your action on a later turn to switch to a different effect. You can also use your action to temporarily halt the effect or to restart one you've halted." },
    { name: "Creation", level: 5, school: "Illusion", classes: ["Artificer", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S", "M (a tiny piece of matter of the same type of the item you plan to create)"], duration: "Special", description: "You pull wisps of shadow material from the Shadowfell to create a nonliving object of vegetable matter within range: soft goods, rope, wood, or something similar. You can also use this spell to create mineral objects such as stone, crystal, or metal. The object created must be no larger than a 5-foot cube, and the object must be of a form and material that you have seen before." },
    { name: "Danse Macabre", level: 5, school: "Necromancy", classes: ["Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "Concentration, up to 1 hour", description: "Threads of dark power leap from your fingers to pierce up to five Small or Medium corpses you can see within range. Each corpse immediately stands up and becomes undead. You decide whether it is a zombie or a skeleton (the statistics for zombies and skeletons are in the Monster Manual), and it gains a bonus to its attack and damage rolls equal to your spellcasting ability modifier. You can use a bonus action to mentally command the creatures you make with this spell, issuing the same command to all of them. To receive the command, a creature must be within 60 feet of you. You decide what action the creatures will take and where they will move during their next turn, or you can issue a general command, such as to guard a chamber or passageway against your foes. If you issue no commands, the creatures do nothing except defend themselves against hostile creatures. Once given an order, the creatures continue to follow it until their task is complete." },
    { name: "Dawn", level: 5, school: "Evocation", classes: ["Cleric", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S", "M (a sunburst pendant worth at least 100 gp)"], duration: "Concentration, up to 1 minute", description: "The light of dawn shines down on a location you specify within range. Until the spell ends, a 30-foot-radius.40-foot-high cylinder of bright light glimmers there. This light is sunlight. When the cylinder appears, each creature in it must make a Constitution saving throw, taking 4d10 radiant damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw whenever it ends its turn in the cylinder. If you're within 60 feet of the cylinder, you can move it up to 60 feet as a bonus action on your turn." },
    { name: "Destructive Wave", level: 5, school: "Evocation", classes: ["Paladin"], castingTime: "1 Action", range: "Self (30-foot radius)", components: ["V"], duration: "Instantaneous", description: "You strike the ground, creating a burst of divine energy that ripples outward from you. Each creature you choose within 30 feet of you must succeed on a Constitution saving throw or take 5d6 thunder damage, as well as 5d6 radiant or necrotic damage (your choice), and be knocked prone. A creature that succeeds on its saving throw takes half as much damage and isn't knocked prone." },
    { name: "Dispel Evil and Good", level: 5, school: "Abjuration", classes: ["Cleric", "Paladin"], castingTime: "1 Action", range: "Self", components: ["V", "S", "M (holy water or powdered silver and iron)"], duration: "Concentration, up to 1 minute", description: "Shimmering energy surrounds and protects you from fey, undead, and creatures originating from beyond the Material Plane. For the duration, celestials, elementals, fey, fiends, and undead have disadvantage on attack rolls against you. You can end the spell early by using either of the following special functions." },
    { name: "Dominate Person", level: 5, school: "Enchantment", classes: ["Bard", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "You attempt to beguile a humanoid that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw." },
    { name: "Dream", level: 5, school: "Illusion", classes: ["Bard", "Warlock", "Wizard"], castingTime: "1 Minute", range: "Special", components: ["V", "S", "M (a handful of sand, a dab of ink, and a writing quill plucked from a sleeping bird)"], duration: "8 hours", description: "This spell shapes a creature's dreams. Choose a creature known to you as the target of this spell. The target must be on the same plane of existence as you. Creatures that don't sleep, such as elves, can't be contacted by this spell. You, or a willing creature you touch, enters a trance state, acting as a messenger. While in the trance, the messenger is aware of their surroundings, but can't take actions or move." },
    { name: "Enervation", level: 5, school: "Necromancy", classes: ["Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "A tendril of inky darkness reaches out from you, touching a creature you can see within range to drain life from it. The target must make a Dexterity saving throw. On a successful save, the target takes 2d8 necrotic damage, and the spell ends. On a failed save, the target takes 4d8 necrotic damage, and until the spell ends, you can use your action on each of your turns to automatically deal 4d8 necrotic damage to the target. The spell ends if you use your action to do anything else, if the target is ever outside the spell's range, or if the target has total cover from you. Whenever the spell deals damage to a target, you regain hit points equal to half the amount of necrotic damage the target takes." },
    { name: "Far Step", level: 5, school: "Conjuration", classes: ["Sorcerer", "Warlock", "Wizard"], castingTime: "1 Bonus Action", range: "Self", components: ["V"], duration: "Concentration, up to 1 minute", description: "You teleport up to 60 feet to an unoccupied space you can see. On each of your turns before the spell ends, you can use a bonus action to teleport in this way again." },
    { name: "Flame Strike", level: 5, school: "Evocation", classes: ["Cleric"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S", "M (pinch of sulfur)"], duration: "Instantaneous", description: "A vertical column of divine fire roars down from the heavens in a location you specify. Each creature in a 10-foot radius, 40-foot-high cylinder centered on a point within range must make a Dexterity saving throw. A creature takes 4d6 fire damage and 4d6 radiant damage on a failed save, or half as much damage on a successful one." },
    { name: "Geas", level: 5, school: "Enchantment", classes: ["Bard", "Cleric", "Druid", "Paladin", "Wizard"], castingTime: "1 Minute", range: "60 Feet", components: ["V"], duration: "30 days", description: "You place a magical command on a creature that you can see within range, forcing it to carry out some service or refrain from some action or course of activity as you decide." },
    { name: "Greater Restoration", level: 5, school: "Abjuration", classes: ["Artificer", "Bard", "Cleric", "Druid", "Ranger"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (diamond dust worth at least 100 gp, which the spell consumes)"], duration: "Instantaneous", description: "You imbue a creature you touch with positive energy to undo a debilitating effect. You can reduce the target's exhaustion level by one, or end one of the following effects on the target:" },
    { name: "Hallow", level: 5, school: "Evocation", classes: ["Cleric"], castingTime: "24 Hours", range: "Touch", components: ["V", "S", "M (herbs, oils, and incense worth at least 1,000 gp, which the spell consumes)"], duration: "Until dispelled", description: "You touch a point and infuse an area around it with holy (or unholy) power. The area can have a radius up to 60 feet, and the spell fails if the radius includes an area already under the effect a hallow spell. The affected area is subject to the following effects." },
    { name: "Hold Monster", level: 5, school: "Enchantment", classes: ["Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "90 feet", components: ["V", "S", "M (a small, straight piece of iron)"], duration: "Concentration, up to 1 minute", description: "Choose a creature that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. This spell has no effect on undead. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target." },
    { name: "Holy Weapon", level: 5, school: "Evocation", classes: ["Cleric", "Paladin"], castingTime: "1 Bonus Action", range: "Touch", components: ["V", "S"], duration: "Concentration, up to 1 hour", description: "You imbue a weapon you touch with holy power. Until the spell ends, the weapon emits bright light in a 30--foot radius and dim light for an additional 30 feet. In addition, weapon attacks made with it deal an extra 2d8 radiant damage on a hit. If the weapon isn't already a magic weapon, it becomes one for the duration. As a bonus action on your turn, you can dismiss this spell and cause the weapon to emit a burst of radiance. Each creature of your choice that you can see within 30 feet of the weapon must make a Constitution saving throw. On a failed save, a creature takes 4d8 radiant damage, and it is blinded for 1 minute. On a successful save, a creature takes half as much damage and isn't blinded. At the end of each of its turns, a blinded creature can make a Constitution saving throw, ending the effect on itself on a success." },
    { name: "Immolation", level: 5, school: "Evocation", classes: ["Sorcerer", "Wizard"], castingTime: "1 Action", range: "90 feet", components: ["V"], duration: "Concentration, up to 1 minute", description: "Flames wreathe one creature you can see within range. The target must make a Dexterity saving throw. It takes 7d6 fire damage on a failed save, or half as much damage on a successful one. On a failed save, the target also burns for the spell's duration. The burning target sheds bright light in a 30-foot radius and dim light for an additional 30 feet. At the end of each of its turns, the target repeats the saving throw. It takes 3d6 fire damage on a failed save, and the spell ends on a successful one. These magical flames can't be extinguished through nonmagical means." },
    { name: "Infernal Calling", level: 5, school: "Conjuration", classes: ["Warlock", "Wizard"], castingTime: "1 Minute", range: "90 feet", components: ["V", "S", "M (a ruby worth at least 999 gp)"], duration: "Concentration, up to 1 hour", description: "Uttering a dark incantation, you summon a devil from the Nine Hells. You choose the devil's type, which must be one of challenge rating 6 or lower, such as a barbed devil or a bearded devil. The devil appears in an unoccupied space that you can see within range. The devil disappears when it drops to 0 hit points or when the spell ends." },
    { name: "Insect Plague", level: 5, school: "Conjuration", classes: ["Cleric", "Druid", "Sorcerer"], castingTime: "1 Action", range: "300 feet", components: ["V", "S", "M (a few grains of sugar, some kernels of grain, and a smear of fat)"], duration: "Concentration, up to 10 minutes", description: "Swarming, biting locusts fill a 20-foot-radius sphere centered on a point you choose within range. The sphere spreads around corners. The sphere remains for the duration, and its area is lightly obscured. The sphere's area is difficult terrain." },
    { name: "Legend Lore", level: 5, school: "Divination", classes: ["Bard", "Cleric", "Wizard"], castingTime: "10 Minutes", range: "Self", components: ["V", "S", "M (incense worth at least 250 gp, which the spell consumes, and four ivory strips worth at least 50 gp each)"], duration: "Instantaneous", description: "Name or describe a person, place, or object. The spell brings to your mind a brief summary of the significant lore about the thing you named. The lore might consist of current tales, forgotten stories, or even secret lore that has never been widely known. If the thing you named isn't of legendary importance, you gain no information. The more information you already have about the thing, the more precise and detailed the information you receive is." },
    { name: "Maelstrom", level: 5, school: "Evocation", classes: ["Druid"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S", "M (paper or leaf in the shape of a funnel)"], duration: "Concentration, up to 1 minute", description: "A mass of 5-foot-deep water appears and swirls in a 30-foot radius centered on a point you can see within range. The point must be on ground or in a body of water. Until the spell ends, that area is difficult terrain, and any creature that starts its turn there must succeed on a Strength saving throw or take 6d6 bludgeoning damage and be pulled 10 feet toward the center." },
    { name: "Mass Cure Wounds", level: 5, school: "Evocation", classes: ["Bard", "Cleric", "Druid"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "Instantaneous", description: "A wave of healing energy washes out from a point of your choice within range. Choose up to six creatures in a 30-foot-radius sphere centered on that point. Each target regains hit points equal to 3d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs." },
    { name: "Mislead", level: 5, school: "Illusion", classes: ["Bard", "Warlock", "Wizard"], castingTime: "1 Action", range: "Self", components: ["S"], duration: "Concentration, up to 1 hour", description: "You become invisible at the same time that an illusory double of you appears where you are standing. The double lasts for the duration, but the invisibility ends if you attack or cast a spell." },
    { name: "Modify Memory", level: 5, school: "Enchantment", classes: ["Bard", "Warlock", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "You attempt to reshape another creature's memories. One creature that you can see must make a Wisdom saving throw. If you are fighting the creature, it has advantage on the saving throw. On a failed save, the target becomes charmed by you for the duration. The charmed target is incapacitated and unaware of its surroundings, though it can still hear you. If it takes any damage or is targeted by another spell, this spell ends, and none of the target's memories are modified." },
    { name: "Negative Energy Flood", level: 5, school: "Necromancy", classes: ["Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "M (a broken bone and a square of black silk)"], duration: "Instantaneous", description: "You send ribbons of negative energy at one creature you can see within range. Unless the target is undead, it must make a Constitution saving throw, taking 5d12 necrotic damage on a failed save, or half as much damage on a successful one. A target killed by this damage rises up as a zombie at the start of your next turn. The zombie pursues whatever creature it can see that is closest to it. Statistics for the zombie are in the Monster Manual. If you target an undead with this spell, the target doesn't make a saving throw. Instead, roll 5d12. The target gains half the total as temporary hit points." },
    { name: "Passwall", level: 5, school: "Transmutation", classes: ["Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S", "M (a pinch of sesame seeds)"], duration: "1 hour", description: "A passage appears at a point of your choice that you can see on a wooden, plaster, or stone surface (such as a wall, a ceiling, or a floor) within range, and lasts for the duration. You choose the opening's dimensions: up to 5 feet wide, 8 feet tall, and 20 feet deep. The passage creates no instability in a structure surrounding it." },
    { name: "Planar Binding", level: 5, school: "Abjuration", classes: ["Bard", "Cleric", "Druid", "Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S", "M (a jewel worth at least 1,000 gp, which the spell consumes)"], duration: "24 hours", description: "With this spell, you attempt to bind a celestial, an elemental, a fey, or a fiend to your service. The creature must be within range for the entire casting of the spell. (Typically, the creature is first summoned into the center of an inverted Magic Circle in order to keep it trapped while this spell is cast.) At the completion of the casting, the target must make a Charisma saving throw. On a failed save, it is bound to serve you for the duration. If the creature was summoned or created by another spell, that spell's duration is extended to match the duration of this spell." },
    { name: "Raise Dead", level: 5, school: "Necromancy", classes: ["Bard", "Cleric", "Paladin"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (a diamond worth at least 500 gp, which the spell consumes)"], duration: "Instantaneous", description: "You return a dead creature you touch to life, provided that it has been dead no longer than 10 days. If the creature's soul is both willing and at liberty to rejoin the body, the creature returns to life with 1 hit point." },
    { name: "Rary's Telepathic Bond", level: 5, school: "Divination", classes: ["Bard", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S", "M (pieces of eggshell from two different kinds of creatures)"], duration: "1 hour", description: "You forge a telepathic link among up to eight willing creatures of your choice within range, psychically linking each creature to all the others for the duration. Creatures with Intelligence scores of 2 or less aren't affected by this spell." },
    { name: "Reincarnate", level: 5, school: "Transmutation", classes: ["Druid"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (rare oils and unguents worth at least 1,000 gp, which the spell consumes)"], duration: "Instantaneous", description: "You touch a dead humanoid or a piece of a dead humanoid. Provided that the creature has been dead no longer than 10 days, the spell forms a new adult body for it and then calls the soul to enter that body. If the target's soul isn't free or willing to do so, the spell fails." },
    { name: "Scrying", level: 5, school: "Divination", classes: ["Bard", "Cleric", "Druid", "Warlock", "Wizard"], castingTime: "10 Minutes", range: "Self", components: ["V", "S", "M (a focus worth at least 1,000 gp, such as a crystal ball, a silver mirror, or a font filled with holy water)"], duration: "Concentration, up to 10 minutes", description: "You can see and hear a particular creature you choose that is on the same plane of existence as you. The target must make a Wisdom saving throw, which is modified by how well you know the target and the sort of physical connection you have to it. If a target knows you're casting this spell, it can fail the saving throw voluntarily if it wants to be observed." },
    { name: "Seeming", level: 5, school: "Illusion", classes: ["Bard", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S"], duration: "8 hours", description: "This spell allows you to change the appearance of any number of creatures that you can see within range. You give each target you choose a new, illusory appearance. An unwilling target can make a Charisma saving throw, and if it succeeds, it is unaffected by this spell." },
    { name: "Skill Empowerment", level: 5, school: "Transmutation", classes: ["Artificer", "Bard", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S"], duration: "Concentration, up to 1 hour", description: "Your magic deepens a creature's understanding of its own talent. You touch one willing creature and give it expertise in one skill of your choice; until the spell ends, the creature doubles its proficiency bonus for ability checks it makes that use the chosen skill." },
    { name: "Steel Wind Strike", level: 5, school: "Conjuration", classes: ["Ranger", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["S", "M (a melee weapon worth at least 1 sp)"], duration: "Instantaneous", description: "You flourish the weapon used in the casting and then vanish to strike like the wind. Choose up to five creatures you can see within range. Make a melee spell attack against each target. On a hit, a target takes 6d10 force damage." },
    { name: "Summon Celestial", level: 5, school: "Conjuration", classes: ["Cleric", "Paladin"], castingTime: "1 Action", range: "90 feet", components: ["V", "S", "M (a golden reliquary worth at least 500 gp)"], duration: "Concentration, up to 1 hour", description: "You call forth a celestial spirit. It manifests in an angelic form in an unoccupied space that you can see within range. This corporeal form uses the Celestial Spirit stat block. When you cast the spell, choose Avenger or Defender. Your choice determines the creature's attack in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." },
    { name: "Swift Quiver", level: 5, school: "Transmutation", classes: ["Ranger"], castingTime: "1 Bonus Action", range: "Touch", components: ["V", "S", "M (a quiver containing at least one piece of ammunition)"], duration: "Concentration, up to 1 minute", description: "You transmute your quiver so it produces an endless supply of nonmagical ammunition, which seems to leap into your hand when you reach for it." },
    { name: "Synaptic Static", level: 5, school: "Enchantment", classes: ["Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S"], duration: "Instantaneous", description: "You choose a point within range and cause psychic energy to explode there. Each creature in a 20-foot-radius sphere centered on that point must make an Intelligence saving throw. A creature with an Intelligence score of 2 or lower can't be affected by this spell. A target takes 8d6 psychic damage on a failed save, or half as much damage on a successful one." },
    { name: "Telekinesis", level: 5, school: "Transmutation", classes: ["Sorcerer", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "Concentration, up to 10 minutes", description: "You gain the ability to move or manipulate creatures or objects by thought. When you cast the spell, and as your action each round for the duration, you can exert your will on one creature or object that you can see within range, causing the appropriate effect below. You can affect the same target round after round, or choose a new one at any time. If you switch targets, the prior target is no longer affected by the spell." },
    { name: "Teleportation Circle", level: 5, school: "Conjuration", classes: ["Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "10 feet", components: ["V", "M (rare chalks and inks infused with precious gems with 50 gp, which the spell consumes)"], duration: "1 round", description: "As you cast the spell, you draw a 10-foot-diameter circle on the ground inscribed with sigils that link your location to a permanent teleportation circle of your choice whose sigil sequence you know and that is on the same plane of existence as you." },
    { name: "Transmute Rock", level: 5, school: "Transmutation", classes: ["Druid", "Wizard", "Artificer"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S", "M (clay and water)"], duration: "Instantaneous", description: "You choose an area of stone or mud that you can see that fits within a 40-foot cube and that is within range, and choose one of the following effects." },
    { name: "Tree Stride", level: 5, school: "Conjuration", classes: ["Druid", "Ranger"], castingTime: "1 Action", range: "Self", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "You gain the ability to enter a tree and move from inside it to inside another tree of the same kind within 500 feet." },
    { name: "Wall of Force", level: 5, school: "Evocation", classes: ["Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S", "M (a pinch of powder made by crushing a clear gemstone)"], duration: "Concentration, up to 10 minutes", description: "An invisible wall of force springs into existence at a point you choose within range." },
    { name: "Wall Of Light", level: 5, school: "Evocation", classes: ["Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S", "M (a hand mirror)"], duration: "Concentration, up to 10 minutes", description: "A shimmering wall of bright light appears at a point you choose within range. The wall appears in any orientation you choose: horizontally, vertically, or diagonally. It can be free floating, or it can rest on a solid surface. The wall can be up to 60 feet long, 10 feet high, and 5 feet thick. The wall blocks line of sight, but creatures and objects can pass through it. It emits bright light out to 120 feet and dim light for an additional 120 feet." },
    { name: "Wall of Stone", level: 5, school: "Evocation", classes: ["Artificer", "Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S", "M (a small block of granite)"], duration: "Concentration, up to 10 minutes", description: "A nonmagical wall of solid stone springs into existence at a point you choose within range. The wall is 6 inches thick and is composed of ten 10-foot-by-10-foot panels. Each panel must be contiguous with at least on other panel. Alternatively, you can create 10-foot-by-20-foot panels that are only 3 inches thick." },
    { name: "Wrath Of Nature", level: 5, school: "Evocation", classes: ["Druid", "Ranger"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "You call out to the spirits of nature to rouse them against your enemies. Choose a point you can see within range. The spirits cause trees, rocks, and grasses in a 60-foot cube centered on that point to become animated until the spell ends." }
  ],
  "6th": [
    { name: "Arcane Gate", level: 6, school: "Conjuration", classes: ["Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "500 feet", components: ["V", "S"], duration: "Concentration, up to 10 minutes", description: "You create linked teleportation portals that remain open for the duration. Choose two points on the ground that you can see, one point within 10 feet of you and one point within 500 feet of you. A circular portal, 10 feet in diameter, opens over each point. If the portal would open in the space occupied by a creature, the spell fails, and the casting is lost." },
    { name: "Blade Barrier", level: 6, school: "Evocation", classes: ["Cleric"], castingTime: "1 Action", range: "90 feet", components: ["V", "S"], duration: "Concentration, up to 10 minutes", description: "You create a vertical wall of whirling, razor-sharp blades made of magical energy. The wall appears within range and lasts for the duration. You can make a straight wall up to 100 feet long, 20 feet high, and 5 feet thick, or a ringed wall up to 60 feet in diameter, 20 feet high, and 5 feet thick. The wall provides three-quarters cover to creatures behind it, and its space is difficult terrain." },
    { name: "Bones of the Earth", level: 6, school: "Transmutation", classes: ["Druid"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S"], duration: "Instantaneous", description: "You cause up to six pillars of stone to burst from places on the ground that you can see within range. Each pillar is a cylinder that has a diameter of 5 feet and a height of up to 30 feet. The ground where a pillar appears must be wide enough for its diameter, and you can target ground under a creature if that creature is Medium or smaller. Each pillar has AC 5 and 30 hit points. When reduced to 0 hit points, a pillar crumbles into rubble, which creates an area of difficult terrain with a 10-foot radius. The rubble lasts until cleared." },
    { name: "Chain Lightning", level: 6, school: "Evocation", classes: ["Sorcerer", "Wizard"], castingTime: "1 Action", range: "150 Feet", components: ["V", "S", "M (a bit of fur; a piece of amber, glass, or a crystal rod; and three silver pins)"], duration: "Instantaneous", description: "You create a bolt of lightning that arcs toward a target of your choice that you can see within range. Three bolts then leap from that target to as many as three other targets, each of which must be within 30 feet of the first target. A target can be a creature or an object and can be targeted by only one of the bolts." },
    { name: "Circle of Death", level: 6, school: "Necromancy", classes: ["Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "150 Feet", components: ["V", "S", "M (the powder of a crushed black pearl worth at least 500 gp)"], duration: "Instantaneous", description: "A sphere of negative energy ripples out in a 60-foot-radius sphere from a point within range. Each creature in that area must make a Constitution saving throw. A target takes 8d6 necrotic damage on a failed save, or half as much damage on a successful one." },
    { name: "Conjure Fey", level: 6, school: "Conjuration", classes: ["Druid", "Warlock"], castingTime: "1 Action", range: "90 feet", components: ["V", "S"], duration: "Concentration, up to 1 hour", description: "You summon a fey creature of challenge rating 6 or lower, or a fey spirit that takes the form of a beast of challenge rating 6 or lower. It appears in an unoccupied space that you can see within range. The fey creature disappears when it drops to 0 hit points or when the spell ends." },
    { name: "Contingency", level: 6, school: "Evocation", classes: ["Wizard"], castingTime: "10 Minutes", range: "Self", components: ["V", "S", "M (a statuette of yourself carved from ivory and decorated with gems worth at least 1,500 gp)"], duration: "10 days", description: "Choose a spell of 5th level or lower that you can cast, that has a casting time of 1 action, and that can target you. You cast that spell called the contingent spell as part of casting contingency, expending spell slots for both, but the contingent spell doesn't come into effect. Instead, it takes effect when a certain circumstance occurs. You describe that circumstance when you cast the two spells. For example, a contingency cast with water breathing might stipulate that water breathing comes into effect when you are engulfed in water or a similar liquid." },
    { name: "Create Homunculus", level: 6, school: "Transmutation", classes: ["Wizard"], castingTime: "1 Hour", range: "120 Feet", components: ["V", "S", "M (clay, ash, and mandrake root, all of which the spell consumes, and a jewel-encrusted dagger worth at least 1,000 gp)"], duration: "Instantaneous", description: "While speaking an intricate incantation, you cut yourself with a jewel-encrusted dagger, taking 2d4 piercing damage that can't be reduced in any way. You then drip your blood on the spell's other components and touch them, transforming them into a special construct called a homunculus. The statistics of the homunculus are in the Monster Manual. It is your faithful companion, and it dies if you die. Whenever you finish a long rest, you can spend up to half your Hit Dice if the homunculus is on the same plane of existence as you. When you do so, roll each die and add your Constitution modifier to it. Your hit point maximum is reduced by the total, and the homunculus's hit point maximum and current hit points are both increased by it. This process can reduce you to no lower than 1 hit point. and the change to your and the homunculus's hit points ends when you finish your next long rest. The reduction to your hit point maximum can't be removed by any means before then, except by the homunculus's death. You can have only one homunculus at a time. If you cast this spell while your homunculus lives, the spell fails." },
    { name: "Create Undead", level: 6, school: "Necromancy", classes: ["Cleric", "Warlock", "Wizard"], castingTime: "1 Minute", range: "10 feet", components: ["V", "S", "M (one clay pot filled with grave dirt, one clay pot filled with brackish water, and one 150 gp black onyx stone for each corpse)"], duration: "Instantaneous", description: "You can cast this spell only at night. Choose up to three corpses of Medium or Small humanoids within range. Each corpse becomes a ghoul under your control. The DM has game statistics for these creatures." },
    { name: "Disintegrate", level: 6, school: "Transmutation", classes: ["Sorcerer", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S", "M (a lodestone and a pinch of dust)"], duration: "Instantaneous", description: "A thin green ray springs from your pointing finger to a target that you can see within range. The target can be a creature, an object, or a creation of magical force, such as the wall created by wall of force." },
    { name: "Drawmij's Instant Summons", level: 6, school: "Conjuration", classes: ["Wizard"], castingTime: "1 Minute", range: "Touch", components: ["V", "S", "M (a sapphire worth 1,000 gp)"], duration: "Until dispelled", description: "You touch an object weighing 10 pounds or less whose longest dimension is 6 feet or less. The spell leaves an invisible mark on its surface and invisibly inscribes the name of the item on the sapphire you use as the material component. Each time you cast this spell, you must use a different sapphire." },
    { name: "Druid Grove", level: 6, school: "Abjuration", classes: ["Druid"], castingTime: "10 Minutes", range: "Touch", components: ["V", "S", "M (mistletoe, which the spell consumes, that was harvested with a golden sickle under the light of a full moon)"], duration: "24 hours", description: "You invoke the spirits of nature to protect an area outdoors or underground. The area can be as small as a 30--foot cube or as large as a 90-foot cube. Buildings and other structures are excluded from the affected area. If you cast this spell in the same area every day for a year, the spell lasts until dispelled. The spell creates the following effects within the area. When you cast this spell, you can specify creatures as friends who are immune to the effects. You can also specify a password that, when spoken aloud, makes the speaker immune to these effects. The entire warded area radiates magic. A dispel magic cast on the area, if successful, removes only one of the following effects, not the entire area. That spell's caster chooses which effect to end. Only when all its effects are gone is this spell dispelled." },
    { name: "Eyebite", level: 6, school: "Necromancy", classes: ["Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "Self", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "For the spell's duration, your eyes become an inky void imbued with dread power. One creature of your choice within 60 feet of you that you can see must succeed on a Wisdom saving throw or be affected by one of the following effects of your choice for the duration. On each of your turns until the spell ends, you can use your action to target another creature but can't target a creature again if it has succeeded on a saving throw against this casting of eyebite." },
    { name: "Find the Path", level: 6, school: "Divination", classes: ["Bard", "Cleric", "Druid"], castingTime: "1 Minute", range: "Self", components: ["V", "S", "M (a set of divinatory tools - such as bones, ivory sticks, cards, teeth, or carved runes - worth 100 gp, and an object from the location you wish to find)"], duration: "Concentration, up to 1 day", description: "This spell allows you to find the shortest, most direct physical route to a specific fixed location that you are familiar with on the same plane of existence. If you name a destination on another plan of existence, a destination that moves (such as a mobile fortress), or a destination that isn't specific (such as \"a green dragon's lair\"), the spell fails." },
    { name: "Flesh to Stone", level: 6, school: "Transmutation", classes: ["Druid", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S", "M (a pinch of lime, water, and earth)"], duration: "Concentration, up to 1 minute", description: "You attempt to turn one creature that you can see within range into stone. If the target's body is made of flesh, the creature must make a Constitution saving throw. On a failed save, it is restrained as its flesh begins to harden. On a successful save, the creature isn't affected." },
    { name: "Forbiddance", level: 6, school: "Abjuration", classes: ["Cleric"], castingTime: "10 Minutes", range: "Touch", components: ["V", "S", "M (a sprinkling of holy water, rare incense, and powdered ruby worth at least 1,000 gp)"], duration: "1 day", description: "You create a ward against magical travel that protects up to 40,000 square feet of floor space to a height of 30 feet above the floor. For the duration, creatures can't teleport into the area or use portals, such as those created by the gate spell, to enter the area. The spell proofs the area against planar travel, and therefore prevents creatures from accessing the area by way of the Astral Plane, Ethereal Plane, Feywild, Shadowfell, or the plane shift spell." },
    { name: "Globe of Invulnerability", level: 6, school: "Abjuration", classes: ["Sorcerer", "Wizard"], castingTime: "1 Action", range: "Self (10-foot radius)", components: ["V", "S", "M (a glass or crystal bead that shatters when the spell ends)"], duration: "Concentration, up to 1 minute", description: "An immobile, faintly shimmering barrier springs into existence in a 10-foot radius around you and remains for the duration." },
    { name: "Guards and Wards", level: 6, school: "Abjuration", classes: ["Bard", "Wizard"], castingTime: "10 Minutes", range: "Touch", components: ["V", "S", "M (burning incense, a small measure of brimstone and oil, a knotted string, a small amount of umber hulk blood, and a small silver rod worth at least 10 gp)"], duration: "24 hours", description: "You create a ward that protects up to 2,500 square feet of floor space (an area 50 feet square, or one hundred 5-foot squares or twenty-five 10-foot squares). The warded area can be up to 20 feet tall, and shaped as you desire. You can ward several stories of a stronghold by dividing the area among them, as long as you can walk into each contiguous area while you are casting the spell." },
    { name: "Harm", level: 6, school: "Necromancy", classes: ["Cleric"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "Instantaneous", description: "You unleash a virulent disease on a creature that you can see within range. The target must make a Constitution saving throw. On a failed save, it takes 14d6 necrotic damage, or half as much damage on a successful save. The damage can't reduce the target's hit points below 1. If the target fails the saving throw, its hit point maximum is reduced for 1 hour by an amount equal to the necrotic damage it took. Any effect that removes a disease allows a creature's hit point maximum to return to normal before that time passes." },
    { name: "Heal", level: 6, school: "Evocation", classes: ["Cleric", "Druid"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "Instantaneous", description: "Choose a creature that you can see within range. A surge of positive energy washes through the creature, causing it to regain 70 hit points. The spell also ends blindness, deafness, and any diseases affecting the target. This spell has no effect on constructs or undead." },
    { name: "Heroes' Feast", level: 6, school: "Conjuration", classes: ["Bard", "Cleric", "Druid"], castingTime: "10 Minutes", range: "30 Feet", components: ["V", "S", "M (a gem-encrusted bowl worth at least 1,000 gp, which the spell consumes)"], duration: "Instantaneous", description: "You bring forth a great feast, including magnificent food and drink. The feast takes 1 hour to consume and disappears at the end of that time, and the beneficial effects don't set in until this hour is over. Up to twelve other creatures can partake of the feast." },
    { name: "Investiture of Flame", level: 6, school: "Transmutation", classes: ["Druid", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "Self", components: ["V", "S"], duration: "Concentration, up to 10 minutes", description: "Flames race across your body, shedding bright light in a 30-foot radius and dim light for an additional 30 feet for the spell's duration. The flames don't harm you. Until the spell ends, you gain the following benefits:" },
    { name: "Investiture of Ice", level: 6, school: "Transmutation", classes: ["Druid", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "Self", components: ["V", "S"], duration: "Concentration, up to 10 minutes", description: "Until the spell ends, ice rimes your body, and you gain the following benefits:" },
    { name: "Investiture of Stone", level: 6, school: "Transmutation", classes: ["Druid", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "Self", components: ["V", "S"], duration: "Concentration, up to 10 minutes", description: "Until the spell ends, bits of rock spread across your body, and you gain the following benefits:" },
    { name: "Investiture of Wind", level: 6, school: "Transmutation", classes: ["Druid", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "Self", components: ["V", "S"], duration: "Concentration, up to 10 minutes", description: "Until the spell ends, wind whirls around you, and you gain the following benefits:" },
    { name: "Magic Jar", level: 6, school: "Necromancy", classes: ["Wizard"], castingTime: "1 Minute", range: "Self", components: ["V", "S", "M (a gem, crystal, reliquary, or some other ornamental container worth at least 500 gp)"], duration: "Until dispelled", description: "Your body falls into a catatonic state as your soul leaves it and enters the container you used for the spell's material component. While your soul inhabits the container, you are aware of your surroundings as if you were in the container's space. You can't move or use reactions. The only action you can take is to project your soul up to 100 feet out of the container, either returning to your living body (and ending the spell) or attempting to possess a humanoids body." },
    { name: "Mass Suggestion", level: 6, school: "Enchantment", classes: ["Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "M (a snake's tongue and either a bit of honeycomb or a drop of sweet oil)"], duration: "24 hours", description: "You suggest a course of activity (limited to a sentence or two) and magically influence up to twelve creatures of your choice that you can see within range and that can hear and understand you. Creatures that can't be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act automatically negates the effect of the spell." },
    { name: "Mental Prison", level: 6, school: "Illusion", classes: ["Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["S"], duration: "Concentration, up to 1 minute", description: "You attempt to bind a creature within an illusory cell that only it perceives. One creature you can see within range must make an Intelligence saving throw. The target succeeds automatically if it is immune to being charmed. On a successful save, the target takes 5d10 psychic damage, and the spell ends. On a failed save, the target takes 5d10 psychic damage, and you make the area immediately around the target's space appear dangerous to it in some way. You might cause the target to perceive itself as being surrounded by fire, floating razors, or hideous maws filled with dripping teeth. Whatever form the illusion takes, the target can't see or hear anything beyond it and is restrained for the spell's duration. If the target is moved out of the illusion, makes a melee attack through it, or reaches any part of its body through it, the target takes 10d10 psychic damage, and the spell ends." },
    { name: "Move Earth", level: 6, school: "Transmutation", classes: ["Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S", "M (an iron blade and a small bag containing a mixture of soils - clay, loam, and sand)"], duration: "Concentration, up to 2 hours", description: "Choose an area of terrain no larger than 40 feet on a side within range. You can reshape dirt, sand, or clay in the area in any manner you choose for the duration. You can raise or lower the area's elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can't exceed half the area's largest dimension. So, if you affect a 40-foot square, you can create a pillar up to 20 feet high, raise or lower the square's elevation by up to 20 feet, dig a trench up to 20 feet deep, and so on. It takes 10 minutes for these changes to complete." },
    { name: "Otiluke's Freezing Sphere", level: 6, school: "Evocation", classes: ["Sorcerer", "Wizard"], castingTime: "1 Action", range: "300 feet", components: ["V", "S", "M (a small crystal sphere)"], duration: "Instantaneous", description: "A frigid globe of cold energy streaks from your fingertips to a point of your choice within range, where it explodes in a 60-foot-radius sphere. Each creature within the area must make a Constitution saving throw. On a failed save, a creature takes 10d6 cold damage. On a successful save, it takes half as much damage." },
    { name: "Otto's Irresistible Dance", level: 6, school: "Enchantment", classes: ["Bard", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V"], duration: "Concentration, up to 1 minute", description: "Choose one creature that you can see within range. The target begins a comic dance in place: shuffling, tapping its feet, and capering for the duration. Creatures that can't be charmed are immune to this spell." },
    { name: "Planar Ally", level: 6, school: "Conjuration", classes: ["Cleric"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "Instantaneous", description: "You beseech an otherworldly entity for aid. The being must be known to you: a god, a primordial, a demon prince, or some other being of cosmic power. That entity sends a celestial, an elemental, or a fiend loyal to it to aid you, making the creature appear in an unoccupied space within range. If you know a specific creature's name, you can speak that name when you cast this spell to request that creature, though you might get a different creature anyway (DM's choice)." },
    { name: "Primordial Ward", level: 6, school: "Abjuration", classes: ["Druid"], castingTime: "1 Action", range: "Self", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "You have resistance to acid, cold, fire, lightning, and thunder damage for the spell's duration." },
    { name: "Programmed Illusion", level: 6, school: "Illusion", classes: ["Bard", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S", "M (a bit of fleece and jade dust worth at least 25 gp)"], duration: "Until dispelled", description: "You create an illusion of an object, a creature, or some other visible phenomenon within range that activates when a specific condition occurs. The illusion is imperceptible until then. It must be no larger than a 30-foot cube, and you decide when you cast the spell how the illusion behaves and what sounds it makes. This scripted performance can last up to 5 minutes." },
    { name: "Scatter", level: 6, school: "Conjuration", classes: ["Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V"], duration: "Instantaneous", description: "The air quivers around up to five creatures of your choice that you can see within range. An unwilling creature must succeed on a Wisdom saving throw to resist this spell. You teleport each affected target to an unoccupied space that you can see within 120 feet of you. That space must be on the ground or on a floor." },
    { name: "Soul Cage", level: 6, school: "Necromancy", classes: ["Warlock", "Wizard"], castingTime: "1 Reaction", range: "60 Feet", components: ["V", "S", "M (a tiny silver cage worth 100 gp)"], duration: "8 hours", description: "This spell snatches the soul of a humanoid as it dies and traps it inside the tiny cage you use for the material component. A stolen soul remains inside the cage until the spell ends or until you destroy the cage, which ends the spell. While you have a soul inside the cage, you can exploit it in any of the ways described below. You can use a trapped soul up to six times. Once you exploit a soul for the sixth time, it is released, and the spell ends. While a soul is trapped, the dead humanoid it came from can't be revived." },
    { name: "Summon Fiend", level: 6, school: "Conjuration", classes: ["Warlock", "Wizard"], castingTime: "1 Action", range: "90 feet", components: ["V", "S", "M (humanoid blood inside a ruby vial worth at least 600 gp)"], duration: "Concentration, up to 1 hour", description: "You call forth a fiendish spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Fiendish Spirit stat block. When you cast the spell, choose Demon, Devil, or Yugoloth. The creature resembles a fiend of the chosen type, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." },
    { name: "Sunbeam", level: 6, school: "Evocation", classes: ["Cleric", "Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Self (60-foot line)", components: ["V", "S", "M (a magnifying glass)"], duration: "Concentration, up to 1 minute", description: "A beam of brilliant light flashes out from your hand in a 5-foot-wide, 60-foot-line. Each creature in the line must make a Constitution saving throw. On a failed save, a creature takes 6d8 radiant damage and is blinded until your next turn. On a successful save, it takes half as much damage and isn't blinded by this spell. Undead and oozes have disadvantage on this saving throw." },
    { name: "Tasha's Otherworldly Guise", level: 6, school: "Transmutation", classes: ["Sorcerer", "Warlock", "Wizard"], castingTime: "1 Bonus Action", range: "Self", components: ["V", "S", "M (an object engraved with a symbol of the Outer Planes, worth at least 500 gp)"], duration: "Concentration, up to 1 minute", description: "Uttering an incantation, you draw on the magic of the Lower Planes or Upper Planes (your choice) to transform yourself. You gain the following benefits until the spell ends:" },
    { name: "Tenser's Transformation", level: 6, school: "Transmutation", classes: ["Wizard"], castingTime: "1 Action", range: "Self", components: ["V", "S", "M (a few hairs from a bull)"], duration: "Concentration, up to 10 minutes", description: "You endow yourself with endurance and martial prowess fueled by magic. Until the spell ends, you can't cast spells, and you gain the following benefits:" },
    { name: "Transport via Plants", level: 6, school: "Conjuration", classes: ["Druid"], castingTime: "1 Action", range: "10 feet", components: ["V", "S"], duration: "1 round", description: "This spell creates a magical link between a Large or larger inanimate plant within range and another plant, at any distance, on the same plane of existence. You must have seen or touched the destination plant at least once before. For the duration, any creature can step into the target plant and exit from the destination plant by using 5 feet of movement." },
    { name: "True Seeing", level: 6, school: "Divination", classes: ["Bard", "Cleric", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (an ointment for the eyes that costs 25 gp; is made from mushroom powder, saffron, and fat; and is consumed by the spell)"], duration: "1 hour", description: "This spell gives the willing creature you touch the ability to see things as they actually are. For the duration, the creature has truesight, notices secret doors hidden by magic, and can see into the Ethereal Plane, all out to a range of 120 feet." },
    { name: "Wall of Ice", level: 6, school: "Evocation", classes: ["Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S", "M (a small piece of quartz)"], duration: "Concentration, up to 10 minutes", description: "You create a wall of ice on a solid surface within range. You can form it into a hemispherical dome or a sphere with radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-square panels. Each panel must be contiguous with another panel. In any form, the wall is 1 foot thick and lasts for the duration." },
    { name: "Wall of Thorns", level: 6, school: "Conjuration", classes: ["Druid"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S", "M (a handful of thorns)"], duration: "Concentration, up to 10 minutes", description: "You create a wall of tough, pliable, tangled brush bristling with needle-sharp thorns. The wall appears within range on a solid surface and lasts for the duration. You choose to make the wall up to 60 feet long, 10 feet high, and 5 feet thick or a circle that has a 20-foot diameter and is up to 20 feet high and 5 feet thick. The wall blocks line of sight." },
    { name: "Wind Walk", level: 6, school: "Transmutation", classes: ["Druid"], castingTime: "1 Minute", range: "30 Feet", components: ["V", "S", "M (fire and holy water)"], duration: "8 hours", description: "You and up to ten willing creatures you can see within range assume a gaseous form for the duration, appearing as wisps of cloud. While in this cloud form, a creature has a flying speed of 300 feet and has resistance to damage from nonmagical weapons. The only actions a creature can take in this form are the Dash action or to revert to its normal form." },
    { name: "Word of Recall", level: 6, school: "Conjuration", classes: ["Cleric"], castingTime: "1 Action", range: "5 feet", components: ["V"], duration: "Instantaneous", description: "You and up to five willing creatures within 5 feet of you instantly teleport to a previously designated sanctuary. You and any creatures that teleport with you appear in the nearest unoccupied space to the spot you designated when you prepared your sanctuary (see below). If you cast this spell without first preparing a sanctuary, the spell has no effect." }
  ],
  "7th": [
    { name: "Conjure Celestial", level: 7, school: "Conjuration", classes: ["Cleric"], castingTime: "1 Minute", range: "90 feet", components: ["V", "S"], duration: "Concentration, up to 1 hour", description: "You summon a celestial of challenge rating 4 or lower, which appears in an unoccupied space that you can see within range. The celestial disappears when it drops to 0 hit points or when the spell ends." },
    { name: "Crown Of Stars", level: 7, school: "Conjuration", classes: ["Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "Self", components: ["V", "S"], duration: "1 hour", description: "Seven star-like motes of light appear and orbit your head until the spell ends. You can use a bonus action to send one of the motes streaking toward one creature or object within 120 feet of you. When you do so, make a ranged spell attack. On a hit. the target takes 4d12 radiant damage. Whether you hit or miss, the mote is expended. The spell ends early if you expend the last mote. If you have four or more motes remaining, they shed bright light in a 30-foot radius and dim light for an additional 30 feet. If you have one to three motes remaining, they shed dim light in a 30--foot radius." },
    { name: "Delayed Blast Fireball", level: 7, school: "Evocation", classes: ["Sorcerer", "Wizard"], castingTime: "1 Action", range: "150 Feet", components: ["V", "S", "M (a tiny ball of bat guano and sulfur)"], duration: "Concentration, up to 1 minute", description: "A beam of yellow light flashes from your pointing finger, then condenses to linger at a chosen point within range as a glowing bead for the duration. When the spell ends, either because your concentration is broken or because you decide to end it, the bead blossoms with a low roar into an explosion of flame that spreads around corners. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes fire damage equal to the total accumulated damage on a failed save, or half as much damage on a successful one." },
    { name: "Divine Word", level: 7, school: "Evocation", classes: ["Cleric"], castingTime: "1 Bonus Action", range: "30 Feet", components: ["V"], duration: "Instantaneous", description: "You utter a divine word, imbued with the power that shaped the world at the dawn of creation. Choose any number of creatures you can see within range. Each creature that can hear you must make a Charisma saving throw. On a failed save, a creature suffers an effect based on its current hit points:" },
    { name: "Dream of the Blue Veil", level: 7, school: "Conjuration", classes: ["Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "10 Minutes", range: "20 feet", components: ["V", "S", "M (a magic item or a willing creature from the destination world)"], duration: "6 hours", description: "You and up to eight willing creatures within range fall unconscious for the spells' duration and experience visions of another world on the Material Plane, such as Oerth, Toril, Krynn, or Eberron. If the spell reaches its full duration, the visions conclude with each of you encountering and pulling back a mysterious blue curtain. The spell then ends with you mentally and physically transported to the world that was in the visions." },
    { name: "Etherealness", level: 7, school: "Transmutation", classes: ["Bard", "Cleric", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "Self", components: ["V", "S"], duration: "Up to 8 hours", description: "You step into the border regions of the Ethereal Plane, in the area where it overlaps with your current plane. You remain in the Border Ethereal for the duration or until you use your action to dismiss the spell. During this time, you can move in any direction. If you move up or down, every foot of movement costs an extra foot. You can see and hear the plane you originated from, but everything there looks gray, and you can't see anything more than 60 feet away." },
    { name: "Finger of Death", level: 7, school: "Necromancy", classes: ["Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "Instantaneous", description: "You send negative energy coursing through a creature that you can see within range, causing it searing pain. The target must make a Constitution saving throw. It takes 7d8 + 30 necrotic damage on a failed save, or half as much damage on a successful one." },
    { name: "Fire Storm", level: 7, school: "Evocation", classes: ["Cleric", "Druid", "Sorcerer"], castingTime: "1 Action", range: "150 Feet", components: ["V", "S"], duration: "Instantaneous", description: "A storm made up of sheets of roaring flame appears in a location you choose within range. The area of the storm consists of up to ten 10-foot cubes, which you can arrange as you wish. Each cube must have at least one face adjacent to the face of another cube. Each creature in the area must make Dexterity saving throw. It takes 7d10 fire damage on a failed save, or half as much damage on a successful one." },
    { name: "Forcecage", level: 7, school: "Evocation", classes: ["Bard", "Warlock", "Wizard"], castingTime: "1 Action", range: "100 feet", components: ["V", "S", "M (ruby dust worth 1,500 gp)"], duration: "1 hour", description: "An immobile, invisible, cube-shaped prison composed of magical force springs into existence around an area you choose within range. The prison can be a cage or a solid box as you choose." },
    { name: "Mirage Arcane", level: 7, school: "Illusion", classes: ["Bard", "Druid", "Wizard"], castingTime: "10 Minutes", range: "Sight", components: ["V", "S"], duration: "10 days", description: "You make terrain in an area up to 1 mile square look, sound, smell, and even feel like some other sort of terrain. The terrain's general shape remains the same, however. Open fields or a road could be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road." },
    { name: "Mordenkainen's Magnificent Mansion", level: 7, school: "Conjuration", classes: ["Bard", "Wizard"], castingTime: "1 Minute", range: "300 feet", components: ["V", "S", "M (a miniature portal carved from ivory, a small piece of polished marble, and a tiny silver spoon, each item worth at least 5 gp)"], duration: "24 hours", description: "You conjure an extradimensional dwelling in range that lasts for the duration. You choose where its one entrance is located. The entrance shimmers faintly and is 5 feet wide and 10 feet tall. You and any creature you designate when you cast the spell can enter the extradimensional dwelling as long as the portal remains open. You can open or close the portal if you are within 30 feet of it. While closed, the portal is invisible." },
    { name: "Mordenkainen's Sword", level: 7, school: "Evocation", classes: ["Bard", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S", "M (a miniature platinum sword with a grip and pommel of copper and zinc, worth 250 gp)"], duration: "Concentration, up to 1 minute", description: "You create a sword-shaped plane of force that hovers within range. It lasts for the duration." },
    { name: "Plane Shift", level: 7, school: "Conjuration", classes: ["Cleric", "Druid", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (a forked, metal rod worth at least 250 gp, attuned to a particular plane of existence)"], duration: "Instantaneous", description: "You and up to eight willing creatures who link hands in a circle are transported to a different plane of existence. You can specify a target destination in general terms, such as the City of Brass on the Elemental Plane of Fire or the palace of Dispater on the second level of the Nine Hells, and you appear in or near that destination. If you are trying to reach the City of Brass, for example, you might arrive in its Street of Steel, before its Gate of Ashes, or looking at the city from across the Sea of Fire, at the DM's discretion." },
    { name: "Power Word: Pain", level: 7, school: "Enchantment", classes: ["Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V"], duration: "Instantaneous", description: "You speak a word of power that causes waves of intense pain to assail one creature you can see within range. If the target has 100 hit points or fewer, it is subject to crippling pain. Otherwise, the spell has no effect on it. A target is also unaffected if it is immune to being charmed." },
    { name: "Prismatic Spray", level: 7, school: "Evocation", classes: ["Bard", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "Self (60-foot cone)", components: ["V", "S"], duration: "Instantaneous", description: "Eight multicolored rays of light flash from your hand. Each ray is a different color and has a different power and purpose. Each creature in a 60-foot cone must make a Dexterity saving throw. For each target, roll a d8 to determine which color ray affects it." },
    { name: "Project Image", level: 7, school: "Illusion", classes: ["Bard", "Warlock", "Wizard"], castingTime: "1 Action", range: "500 Miles", components: ["V", "S", "M (a small replica of you made from materials worth at least 5 gp)"], duration: "Concentration, up to 1 day", description: "You create an illusory copy of yourself that lasts for the duration. The copy can appear at any location within range that you have seen before, regardless of intervening obstacles. The illusion looks and sounds like you but is intangible. If the illusion takes any damage, it disappears, and the spell ends." },
    { name: "Regenerate", level: 7, school: "Transmutation", classes: ["Bard", "Cleric", "Druid"], castingTime: "1 Minute", range: "Touch", components: ["V", "S", "M (a prayer wheel and holy water)"], duration: "1 hour", description: "You touch a creature and stimulate its natural healing ability. The target regains 4d8 + 15 hit points. For the duration of the spell, the target regains 1 hit point at the start of each of its turns (10 hit points each minute)." },
    { name: "Resurrection", level: 7, school: "Necromancy", classes: ["Bard", "Cleric"], castingTime: "1 Hour", range: "Touch", components: ["V", "S", "M (a diamond worth at least 1,000 gp, which the spell consumes)"], duration: "Instantaneous", description: "You touch a dead creature that has been dead for no more than a century, that didn't die of old age, and that isn't undead. If its soul is free and willing, the target returns to life with all its hit points." },
    { name: "Reverse Gravity", level: 7, school: "Transmutation", classes: ["Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "100 feet", components: ["V", "S", "M (a lodestone and iron filings)"], duration: "Concentration, up to 1 minute", description: "This spell reverses gravity in a 50-foot-radius, 100-foot high cylinder centered on a point within range. All creatures and objects that aren't somehow anchored to the ground in the area fall upward and reach the top of the area when you cast this spell. A creature can make a Dexterity saving throw to grab onto a fixed object it can reach, thus avoiding the fall." },
    { name: "Sequester", level: 7, school: "Transmutation", classes: ["Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S", "M (a powder composed of diamond, emerald, ruby, and sapphire dust worth at least 5,000 gp, which the spell consumes)"], duration: "Until dispelled", description: "By means of this spell, a willing creature or an object can be hidden away, safe from detection for the duration. When you cast the spell and touch the target, it becomes invisible and can't be targeted by divination spells or perceived through scrying sensors created by the divination of spells." },
    { name: "Simulacrum", level: 7, school: "Illusion", classes: ["Wizard"], castingTime: "12 Hours", range: "Touch", components: ["V", "S", "M (snow or ice in quantities sufficient to made a life-size copy of the duplicated creature; some hair, fingernail clippings, or other piece of that creature's body placed inside the snow or ice; and powdered ruby worth 1,500 gp, sprinkled over the duplicate and consumed by the spell)"], duration: "Until dispelled", description: "You shape an illusory duplicate of one beast or humanoid that is within range for the entire casting time of the spell. The duplicate is a creature, partially real and formed from ice or snow, and it can take actions and otherwise be affected as a normal creature. It appears to be the same as the original, but it has half the creature's hit point maximum and is formed without any equipment. Otherwise, the illusion uses all the statistics of the creature it duplicates." },
    { name: "Symbol", level: 7, school: "Abjuration", classes: ["Bard", "Cleric", "Druid", "Wizard"], castingTime: "1 Minute", range: "Touch", components: ["V", "S", "M (mercury, phosphorus, and powdered diamond and opal with a total value of at least 1,000 gp, which the spell consumes)"], duration: "Until dispelled or triggered", description: "When you cast this spell, you inscribe a harmful glyph either on a surface (such as a section of floor, a wall, or a table) or within an object that can be closed to conceal the glyph (such as a book, a scroll, or a treasure chest). If you choose a surface, the glyph can cover an area of the surface no larger than 10 feet in diameter. If you choose an object, that object must remain in its place; if the object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered." },
    { name: "Teleport", level: 7, school: "Conjuration", classes: ["Bard", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "10 feet", components: ["V"], duration: "Instantaneous", description: "This spell instantly transports you and up to eight willing creatures of your choice that you can see within range, or a single object that you can see within range, to a destination you select. If you target an object, it must be able to fit entirely inside a 10-foot cube, and it can't be held or carried by an unwilling creature." },
    { name: "Temple of the Gods", level: 7, school: "Conjuration", classes: ["Cleric"], castingTime: "1 Hour", range: "120 Feet", components: ["V", "S", "M (a holy symbol worth at least 5 gp)"], duration: "24 hours", description: "You cause a temple to shimmer into existence on ground you can see within range. The temple must fit within an unoccupied cube of space, up to 120 feet on each side. The temple remains until the spell ends. It is dedicated to whatever god, pantheon, or philosophy is represented by the holy symbol used in the casting." },
    { name: "Whirlwind", level: 7, school: "Evocation", classes: ["Druid", "Wizard"], castingTime: "1 Action", range: "300 feet", components: ["V", "M (a piece of straw)"], duration: "Concentration, up to 1 minute", description: "A whirlwind howls down to a point on the ground you specify. The whirlwind is a 10-foot-radius, 30-foot-high cylinder centered on that point. Until the spell ends, you can use your action to move the whirlwind up to 30 feet in any direction along the ground. The whirlwind sucks up any Medium or smaller objects that aren't secured to anything and that aren't worn or carried by anyone." }
  ],
  "8th": [
    { name: "Abi-Dalzim's Horrid Wilting", level: 8, school: "Necromancy", classes: ["Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "150 Feet", components: ["V", "S", "M (a bit of sponge)"], duration: "Instantaneous", description: "You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. Constructs and undead aren't affected, and plants and water elementals make this saving throw with disadvantage. A creature takes 10d8 necrotic damage on a failed save, or half as much damage on a successful one." },
    { name: "Animal Shapes", level: 8, school: "Transmutation", classes: ["Druid"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S"], duration: "Concentration, up to 24 hours", description: "Your magic turns others into beasts. Choose any number of willing creatures that you can see within range. You transform each target into the form of a large or smaller beast with a challenge rating of 4 or lower. On subsequent turns, you can use your actions to transform affected creatures into new forms." },
    { name: "Antimagic Field", level: 8, school: "Abjuration", classes: ["Cleric", "Wizard"], castingTime: "1 Action", range: "Self (10-foot radius sphere)", components: ["V", "S", "M (a pinch of powdered iron or iron filings)"], duration: "Concentration, up to 1 hour", description: "A 10-foot-radius invisible sphere of antimagic surrounds you. This area is divorced from the magical energy that suffuses the multiverse. Within the sphere, spells can't be cast, summoned creatures disappear, and even magic items become mundane. Until the spell ends, the sphere moves with you, centered on you." },
    { name: "Antipathy/Sympathy", level: 8, school: "Enchantment", classes: ["Bard", "Druid", "Wizard"], castingTime: "1 Hour", range: "60 Feet", components: ["V", "S", "M (either a lump of alum soaked in vinegar for the antipathy effect or a drop of honey for the sympathy effect)"], duration: "10 days", description: "This spell attracts or repels creatures of your choice. You target something within range, either a Huge or smaller object or creature or an area that is no larger than a 200-foot cube. Then specify a kind of intelligent creature, such as red dragons, goblins, or vampires. You invest the target with an aura that either attracts or repels the specified creatures for the duration. Choose antipathy or sympathy as the aura's effect." },
    { name: "Clone", level: 8, school: "Necromancy", classes: ["Wizard"], castingTime: "1 Hour", range: "Touch", components: ["V", "S", "M (a diamond worth at least 1000 gp and at least 1 cubic inch of flesh of the creature that is to be cloned, which the spell consumes. A vessel worth at least 2000 gp that has a sealable lid and is large enough to hold a Medium creature, such as a huge urn, coffin, mud-filled cyst in the ground, or crystal container filled with salt water)"], duration: "Instantaneous", description: "This spell grows an inert duplicate of a living creature as a safeguard against death. This clone forms inside a sealed vessel and grows to full size and maturity after 120 days; you can also choose to have the clone be a younger version of the same creature. It remains inert and endures indefinitely, as long as its vessel remains undisturbed." },
    { name: "Control Weather", level: 8, school: "Transmutation", classes: ["Cleric", "Druid", "Wizard"], castingTime: "10 Minutes", range: "Self (5 mile radius)", components: ["V", "S", "M ((burning incense and bits of earth and wood mixed in water)"], duration: "Concentration, up to 8 hours", description: "You take control of the weather within 5 miles of you for the duration. You must be outdoors to cast this spell. Moving to a place where you don't have a clear path to the sky ends the spell early." },
    { name: "Demiplane", level: 8, school: "Conjuration", classes: ["Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["S"], duration: "1 hour", description: "You create a shadowy door on a flat solid surface that you can see within range. The door is large enough to allow Medium creatures to pass through unhindered. When opened, the door leads to a demiplane that appears to be an empty room 30 feet in each dimension, made of wood or stone. When the spell ends, the door disappears, and any creatures or objects inside the demiplane remain trapped there, as the door also disappears from the other side." },
    { name: "Dominate Monster", level: 8, school: "Enchantment", classes: ["Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "Concentration, up to 1 hour", description: "You attempt to beguile a creature that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw." },
    { name: "Earthquake", level: 8, school: "Evocation", classes: ["Cleric", "Druid", "Sorcerer"], castingTime: "1 Action", range: "500 feet", components: ["V", "S", "M (a pinch o f dirt, a piece o f rock, and a lump of clay)"], duration: "Concentration, up to 1 minute", description: "You create a seismic disturbance at a point on the ground that you can see within range. For the duration, an intense tremor rips through the ground in a 100-foot-radius circle centered on that point and shakes creatures and structures in contact with the ground in that area." },
    { name: "Feeblemind", level: 8, school: "Enchantment", classes: ["Bard", "Druid", "Warlock", "Wizard"], castingTime: "1 Action", range: "150 Feet", components: ["V", "S", "M (a handful of clay, crystal, glass, or mineral spheres)"], duration: "Instantaneous", description: "You blast the mind of a creature that you can see within range, attempting to shatter its intellect and personality. The target takes 4d6 psychic damage and must make an Intelligence saving throw." },
    { name: "Glibness", level: 8, school: "Transmutation", classes: ["Bard", "Warlock"], castingTime: "1 Action", range: "Self", components: ["V"], duration: "1 hour", description: "Until the spell ends, when you make a Charisma check, you can replace the number you roll with a 15. Additionally, no matter what you say, magic that would determine if you are telling the truth indicates that you are being truthful." },
    { name: "Holy Aura", level: 8, school: "Abjuration", classes: ["Cleric"], castingTime: "1 Action", range: "Self", components: ["V", "S", "M (a tiny reliquary worth at least 1,000 gp containing a sacred relic, such as a scrap of cloth from a saint's robe or a piece of parchment from a religious text)"], duration: "Concentration, up to 1 minute", description: "Divine light washes out from you and coalesces in a soft radiance in a 30-foot radius around you. Creatures of your choice in that radius when you cast this spell shed dim light in a 5-foot radius and have advantage on all saving throws, and other creatures have disadvantage on attack rolls against them until the spell ends. In addition, when a fiend or an undead hits an affected creature with a melee attack, the aura flashes with brilliant light. The attacker must succeed on a Constitution saving throw or be blinded until the spell ends." },
    { name: "Illusory Dragon", level: 8, school: "Illusion", classes: ["Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["S"], duration: "Concentration, up to 1 minute", description: "By gathering threads of shadow material from the Shadowfell, you create a Huge shadowy dragon in an unoccupied space that you can see within range. The illusion lasts for the spell's duration and occupies its space, as if it were a creature." },
    { name: "Incendiary Cloud", level: 8, school: "Conjuration", classes: ["Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "150 Feet", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "A swirling cloud of smoke shot through with white-hot embers appears in a 20-foot-radius sphere centered on a point within range. The cloud spreads around corners and is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it." },
    { name: "Maddening Darkness", level: 8, school: "Evocation", classes: ["Warlock", "Wizard"], castingTime: "1 Action", range: "150 Feet", components: ["V", "M (a drop of pitch mixed with a drop of mercury)"], duration: "Concentration, up to 10 minutes", description: "Magical darkness spreads from a point you choose within range to fill a 60--foot--radius sphere until the spell ends. The darkness spreads around corners. A creature with darkvision can't see through this darkness. Nonmagical light, as well as light created by spells of 8th level or lower, can't illuminate the area. Shrieks, gibbering, and mad laughter can be heard within the sphere. Whenever a creature starts its turn in the sphere, it must make a Wisdom saving throw, taking 8d8 psychic damage on a failed save, or half as much damage on a successful one." },
    { name: "Maze", level: 8, school: "Conjuration", classes: ["Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "Concentration, up to 10 minutes", description: "You banish a creature that you can see within range into a labyrinthine demiplane. The target remains there for the duration or until it escapes the maze." },
    { name: "Mighty Fortress", level: 8, school: "Conjuration", classes: ["Wizard"], castingTime: "1 Minute", range: "1 mile", components: ["V", "S", "M (a diamond worth at least 500 gp, which the spell consumes)"], duration: "Instantaneous", description: "A fortress of stone erupts from a square area of ground of your choice that you can see within range. The area is 120 feet on each side, and it must not have any buildings or other structures on it. Any creatures in the area are harmlessly lifted up as the fortress rises." },
    { name: "Mind Blank", level: 8, school: "Abjuration", classes: ["Bard", "Wizard"], castingTime: "1 Action", range: "Touch", components: ["V", "S"], duration: "24 hours", description: "Until the spell ends, one willing creature you touch is immune to psychic damage, any effect that would sense its emotions or read its thoughts, divination spells, and the charmed condition. The spell even foils Wish spells and spells or effects of similar power used to affect the target's mind or to gain information about the target." },
    { name: "Power Word: Stun", level: 8, school: "Enchantment", classes: ["Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "Instantaneous", description: "You speak a word of power that can overwhelm the mind of one creature you can see within range, leaving it dumbfounded. If the target has 150 hit points or fewer, it is stunned. Otherwise, the spell has no effect. The stunned target must make a Constitution saving throw at the end of each of its turns. On a successful save, this stunning effect ends." },
    { name: "Sunburst", level: 8, school: "Evocation", classes: ["Cleric", "Druid", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "150 Feet", components: ["V", "S", "M (fire and a piece of sunstone)"], duration: "Instantaneous", description: "Brilliant sunlight flashes in a 60-foot radius centered on a point you choose within range. Each creature in that light must make a Constitution saving throw. On a failed save, a creature takes 12d6 radiant damage and is blinded for 1 minute. On a successful save, it takes half as much damage and isn't blinded by this spell. Undead and oozes have disadvantage on this saving throw." },
    { name: "Telepathy", level: 8, school: "Evocation", classes: ["Wizard"], castingTime: "1 Action", range: "Unlimited", components: ["V", "S", "M (a pair of linked silver rings)"], duration: "24 hours", description: "You create a telepathic link between yourself and a willing creature with which you are familiar. The creature can be anywhere on the same plane of existence as you. The spell ends if you or the target are no longer on the same plane." },
    { name: "Tsunami", level: 8, school: "Conjuration", classes: ["Druid"], castingTime: "1 Action", range: "Sight", components: ["V", "S"], duration: "Concentration, up to 6 rounds", description: "A wall of water springs into existence at a point you choose within range. You can make the wall up to 300 feet long, 300 feet high, and 50 feet thick. The wall lasts for the duration." }
  ],
  "9th": [
    { name: "Astral Projection", level: 9, school: "Evocation", classes: ["Cleric", "Warlock", "Wizard"], castingTime: "1 Hour", range: "10 feet", components: ["V", "S", "M (for each creature you affect with this spell, you must provide one jacinth worth at least 1,000 gp and one ornately carved bar of silver worth at least 100 gp, all of which the spell consumes)"], duration: "Special", description: "You and up to eight willing creatures within range project your astral bodies into the Astral Plane (the spell fails and the casting is wasted if you are already on that plane). The material body you leave behind is unconscious and in a state of suspended animation; it doesn't need food or air and doesn't age." },
    { name: "Blade of Disaster", level: 9, school: "Conjuration", classes: ["Sorcerer", "Warlock", "Wizard"], castingTime: "1 Bonus Action", range: "60 Feet", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "You create a blade-shaped planar rift about 3 feet long in an unoccupied space you can see within range. The blade lasts for the duration. When you cast this spell, you can make up to two melee spell attacks with the blade, each one against a creature, loose object, or structure within 5 feet of the blade. On a hit, the target takes 4d12 force damage. This attack scores a critical hit if the number on the d20 is 18 or higher. On a critical hit, the blade deals an extra 8d12 force damage (for a total of 12d12 force damage)." },
    { name: "Foresight", level: 9, school: "Divination", classes: ["Bard", "Druid", "Warlock", "Wizard"], castingTime: "1 Minute", range: "Touch", components: ["V", "S", "M (a hummingbird feather)"], duration: "8 hours", description: "You touch a willing creature and bestow a limited ability to see into the immediate future. For the duration, the target can't be surprised and has advantage on attack rolls, ability checks, and saving throws. Additionally, other creatures have disadvantage on attack rolls against the target for the duration. This spell immediately ends if you cast it again before its duration ends." },
    { name: "Gate", level: 9, school: "Conjuration", classes: ["Cleric", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S", "M (a diamond worth at least 5,000 gp)"], duration: "Concentration, up to 1 minute", description: "You conjure a portal linking an unoccupied space you can see within range to a precise location on a different plane of existence. The portal is a circular opening, which you can make 5 to 20 feet in diameter. You can orient the portal in any direction you choose. The portal lasts for the duration." },
    { name: "Imprisonment", level: 9, school: "Abjuration", classes: ["Warlock", "Wizard"], castingTime: "1 Minute", range: "30 Feet", components: ["V", "S", "M (a vellum depiction or a carved statuette in the likeness of the target, and a special component that varies according to the version of the spell you choose, worth at least 500 gp per Hit Die of the target)"], duration: "Until dispelled", description: "You create a magical restraint to hold a creature that you can see within range. The target must succeed on a Wisdom saving throw or be bound by the spell; if it succeeds, it is immune to this spell if you cast it again. While affected by this spell, the creature doesn't need to breathe, eat, or drink, and it doesn't age. Divination spells can't locate or perceive the target." },
    { name: "Invulnerability", level: 9, school: "Abjuration", classes: ["Wizard"], castingTime: "1 Action", range: "Self", components: ["V", "S", "M (a small piece of adamantine worth at least 500 gp, which the spell consumes)"], duration: "Concentration, up to 10 minutes", description: "You are immune to all damage until the spell ends." },
    { name: "Mass Heal", level: 9, school: "Evocation", classes: ["Cleric"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "Instantaneous", description: "A flood of healing energy flows from you into injured creatures around you. You restore up to 700 hit points, divided as you choose among any number of creatures that you can see within range. Creatures healed by this spell are also cured of all diseases and any effect making them blinded or deafened. This spell has no effect on undead or constructs." },
    { name: "Mass Polymorph", level: 9, school: "Transmutation", classes: ["Bard", "Sorcerer", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S", "M (a caterpillar cocoon)"], duration: "Concentration, up to 1 hour", description: "You transform up to ten creatures of your choice that you can see within range. An unwilling target must succeed on a Wisdom saving throw to resist the transformation. An unwilling shapechanger automatically succeeds on the save." },
    { name: "Meteor Swarm", level: 9, school: "Evocation", classes: ["Sorcerer", "Wizard"], castingTime: "1 Action", range: "1 mile", components: ["V", "S"], duration: "Instantaneous", description: "Blazing orbs of fire plummet to the ground at four different points you can see within range. Each creature in a 40-foot-radius sphere centered on each point you choose must make a Dexterity saving throw. The sphere spreads around corners. A creature takes 20d6 fire damage and 20d6 bludgeoning damage on a failed save, or half as much damage on a successful one. A creature in the area of more than one fiery burst is affected only once." },
    { name: "Power Word: Heal", level: 9, school: "Evocation", classes: ["Bard", "Cleric"], castingTime: "1 Action", range: "Touch", components: ["V", "S"], duration: "Instantaneous", description: "A wave of healing energy washes over a creature you touch. The target regains all its hit points. If the creature is charmed, frightened, paralyzed, or stunned, the condition ends. If the creature is prone, it can use its reaction to stand up. This spell has no effect on undead or constructs." },
    { name: "Power Word: Kill", level: 9, school: "Enchantment", classes: ["Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V"], duration: "Instantaneous", description: "You utter a word of power that can compel one creature you can see within range to die instantly. If the creature you chose has 100 hit points or fewer, it dies. Otherwise, the spell has no effect." },
    { name: "Prismatic Wall", level: 9, school: "Abjuration", classes: ["Bard", "Wizard"], castingTime: "1 Action", range: "60 Feet", components: ["V", "S"], duration: "10 minutes", description: "A shimmering, multicolored plane of light forms a vertical opaque wall - up to 90 feet long, 30 feet high, and 1 inch thick - centered on a point you can see within range. Alternatively, you can shape the wall into a sphere up to 30 feet in diameter centered on a point you choose within range. The wall remains in place for the duration. If you position the wall so that it passes through a space occupied by a creature, the spell fails, and your action and the spell slot are wasted." },
    { name: "Psychic Scream", level: 9, school: "Enchantment", classes: ["Bard", "Sorcerer", "Warlock", "Wizard"], castingTime: "1 Action", range: "90 feet", components: ["S"], duration: "Instantaneous", description: "You unleash the power of your mind to blast the intellect of up to ten creatures of your choice that you can see within range. Creatures that have an Intelligence score of 2 or lower are unaffected." },
    { name: "Shapechange", level: 9, school: "Transmutation", classes: ["Druid", "Warlock", "Wizard"], castingTime: "1 Action", range: "Self", components: ["V", "S", "M (a jade circlet worth at least 1,500 gp, which you must place on your head before you cast the spell)"], duration: "Concentration, up to 1 hour", description: "You assume the form of a different creature for the duration. The new form can be any creature with a challenge rating equal to your level or lower. The creature can't be a construct or an undead, and you must have seen the sort of creature at least once. You transform into an average example of that creature, one without any class levels or the Spellcasting trait." },
    { name: "Storm of Vengeance", level: 9, school: "Conjuration", classes: ["Druid"], castingTime: "1 Action", range: "Sight", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "A churning storm cloud forms, centered on a point you can see and spreading to a radius of 360 feet. Lightning flashes in the area, thunder booms, and strong winds roar. Each creature under the cloud (no more than 5,000 feet beneath the cloud) when it appears must make a Constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 5 minutes." },
    { name: "Time Ravage", level: 9, school: "Necromancy", classes: ["Wizard"], castingTime: "1 Action", range: "90 feet", components: ["V", "S", "M (an hourglass filled with diamond dust worth at least 5,000 gp, which the spell consumes)"], duration: "Instantaneous", description: "You target a creature you can see within range, putting its physical form through the devastation of rapid aging. The target must make a Constitution saving throw, taking 10d12 necrotic damage on a failed save, or half as much damage on a successful one. If the save fails, the target also ages to the point where it has only 30 days left before it dies of old age. In this aged state, the target has disadvantage on attack rolls, ability checks, and saving throws, and its walking speed is halved. Only the Wish spell or the Greater Restoration spell cast with a 9th-level spell slot can end these effects and restore the target to its previous age." },
    { name: "Time Stop", level: 9, school: "Transmutation", classes: ["Sorcerer", "Wizard"], castingTime: "1 Action", range: "Self", components: ["V"], duration: "Instantaneous", description: "You briefly stop the flow of time for everyone but yourself. No time passes for other creatures, while you take 1d4 + 1 turns in a row, during which you can use actions and move as normal." },
    { name: "True Polymorph", level: 9, school: "Transmutation", classes: ["Bard", "Warlock", "Wizard"], castingTime: "1 Action", range: "30 Feet", components: ["V", "S", "M (a drop of mercury, a dollop of gum arabic, and a wisp of smoke)"], duration: "Concentration, up to 1 hour", description: "Choose one creature or nonmagical object that you can see within range. You transform the creature into a different creature, the creature into an object, or the object into a creature (the object must be neither worn nor carried by another creature). The transformation lasts for the duration, or until the target drops to 0 hit points or dies. If you concentrate on this spell for the full duration, the transformation becomes permanent." },
    { name: "True Resurrection", level: 9, school: "Necromancy", classes: ["Cleric", "Druid"], castingTime: "1 Hour", range: "Touch", components: ["V", "S", "M (a sprinkle of holy water and diamonds worth at least 25,000 gp, which the spell consumes)"], duration: "Instantaneous", description: "You touch a creature that has been dead for no longer than 200 years and that died for any reason except old age. If the creature's soul is free and willing, the creature is restored to life with all its hit points." },
    { name: "Weird", level: 9, school: "Illusion", classes: ["Warlock", "Wizard"], castingTime: "1 Action", range: "120 Feet", components: ["V", "S"], duration: "Concentration, up to 1 minute", description: "Drawing on the deepest fears of a group of creatures, you create illusory creatures in their minds, visible only to them." },
    { name: "Wish", level: 9, school: "Conjuration", classes: ["Sorcerer", "Wizard"], castingTime: "1 Action", range: "Self", components: ["V"], duration: "Instantaneous", description: "Wish is the mightiest spell a mortal creature can cast. By simply speaking aloud, you can alter the very foundations of reality in accord with your desires." }
  ],
};
const classSpellLists = {
  "Artificer": [...spellsDatabase.Cantrips.filter(s => s.classes.includes("Artificer")), ...spellsDatabase["1st"].filter(s => s.classes.includes("Artificer")), ...spellsDatabase["2nd"].filter(s => s.classes.includes("Artificer")), ...spellsDatabase["3rd"].filter(s => s.classes.includes("Artificer")), ...spellsDatabase["4th"].filter(s => s.classes.includes("Artificer")), ...spellsDatabase["5th"].filter(s => s.classes.includes("Artificer"))],
  "Bard": [...spellsDatabase.Cantrips.filter(s => s.classes.includes("Bard")), ...spellsDatabase["1st"].filter(s => s.classes.includes("Bard")), ...spellsDatabase["2nd"].filter(s => s.classes.includes("Bard")), ...spellsDatabase["3rd"].filter(s => s.classes.includes("Bard")), ...spellsDatabase["4th"].filter(s => s.classes.includes("Bard")), ...spellsDatabase["5th"].filter(s => s.classes.includes("Bard")), ...(spellsDatabase["6th"]||[]).filter(s => s.classes.includes("Bard")), ...(spellsDatabase["7th"]||[]).filter(s => s.classes.includes("Bard")), ...(spellsDatabase["8th"]||[]).filter(s => s.classes.includes("Bard")), ...(spellsDatabase["9th"]||[]).filter(s => s.classes.includes("Bard"))],
  "Cleric": [...spellsDatabase.Cantrips.filter(s => s.classes.includes("Cleric")), ...spellsDatabase["1st"].filter(s => s.classes.includes("Cleric")), ...spellsDatabase["2nd"].filter(s => s.classes.includes("Cleric")), ...spellsDatabase["3rd"].filter(s => s.classes.includes("Cleric")), ...spellsDatabase["4th"].filter(s => s.classes.includes("Cleric")), ...spellsDatabase["5th"].filter(s => s.classes.includes("Cleric")), ...(spellsDatabase["6th"]||[]).filter(s => s.classes.includes("Cleric")), ...(spellsDatabase["7th"]||[]).filter(s => s.classes.includes("Cleric")), ...(spellsDatabase["8th"]||[]).filter(s => s.classes.includes("Cleric")), ...(spellsDatabase["9th"]||[]).filter(s => s.classes.includes("Cleric"))],
  "Druid": [...spellsDatabase.Cantrips.filter(s => s.classes.includes("Druid")), ...spellsDatabase["1st"].filter(s => s.classes.includes("Druid")), ...spellsDatabase["2nd"].filter(s => s.classes.includes("Druid")), ...spellsDatabase["3rd"].filter(s => s.classes.includes("Druid")), ...spellsDatabase["4th"].filter(s => s.classes.includes("Druid")), ...spellsDatabase["5th"].filter(s => s.classes.includes("Druid")), ...(spellsDatabase["6th"]||[]).filter(s => s.classes.includes("Druid")), ...(spellsDatabase["7th"]||[]).filter(s => s.classes.includes("Druid")), ...(spellsDatabase["8th"]||[]).filter(s => s.classes.includes("Druid")), ...(spellsDatabase["9th"]||[]).filter(s => s.classes.includes("Druid"))],
  "Paladin": [...spellsDatabase["1st"].filter(s => s.classes.includes("Paladin")), ...spellsDatabase["2nd"].filter(s => s.classes.includes("Paladin")), ...spellsDatabase["3rd"].filter(s => s.classes.includes("Paladin")), ...spellsDatabase["4th"].filter(s => s.classes.includes("Paladin")), ...spellsDatabase["5th"].filter(s => s.classes.includes("Paladin")), ...(spellsDatabase["6th"]||[]).filter(s => s.classes.includes("Paladin")), ...(spellsDatabase["7th"]||[]).filter(s => s.classes.includes("Paladin")), ...(spellsDatabase["8th"]||[]).filter(s => s.classes.includes("Paladin")), ...(spellsDatabase["9th"]||[]).filter(s => s.classes.includes("Paladin"))],
  "Ranger": [...spellsDatabase["1st"].filter(s => s.classes.includes("Ranger")), ...spellsDatabase["2nd"].filter(s => s.classes.includes("Ranger")), ...spellsDatabase["3rd"].filter(s => s.classes.includes("Ranger")), ...spellsDatabase["4th"].filter(s => s.classes.includes("Ranger")), ...spellsDatabase["5th"].filter(s => s.classes.includes("Ranger")), ...(spellsDatabase["6th"]||[]).filter(s => s.classes.includes("Ranger")), ...(spellsDatabase["7th"]||[]).filter(s => s.classes.includes("Ranger")), ...(spellsDatabase["8th"]||[]).filter(s => s.classes.includes("Ranger")), ...(spellsDatabase["9th"]||[]).filter(s => s.classes.includes("Ranger"))],
  "Sorcerer": [...spellsDatabase.Cantrips.filter(s => s.classes.includes("Sorcerer")), ...spellsDatabase["1st"].filter(s => s.classes.includes("Sorcerer")), ...spellsDatabase["2nd"].filter(s => s.classes.includes("Sorcerer")), ...spellsDatabase["3rd"].filter(s => s.classes.includes("Sorcerer")), ...spellsDatabase["4th"].filter(s => s.classes.includes("Sorcerer")), ...spellsDatabase["5th"].filter(s => s.classes.includes("Sorcerer")), ...(spellsDatabase["6th"]||[]).filter(s => s.classes.includes("Sorcerer")), ...(spellsDatabase["7th"]||[]).filter(s => s.classes.includes("Sorcerer")), ...(spellsDatabase["8th"]||[]).filter(s => s.classes.includes("Sorcerer")), ...(spellsDatabase["9th"]||[]).filter(s => s.classes.includes("Sorcerer"))],
  "Warlock": [...spellsDatabase.Cantrips.filter(s => s.classes.includes("Warlock")), ...spellsDatabase["1st"].filter(s => s.classes.includes("Warlock")), ...spellsDatabase["2nd"].filter(s => s.classes.includes("Warlock")), ...spellsDatabase["3rd"].filter(s => s.classes.includes("Warlock")), ...spellsDatabase["4th"].filter(s => s.classes.includes("Warlock")), ...spellsDatabase["5th"].filter(s => s.classes.includes("Warlock")), ...(spellsDatabase["6th"]||[]).filter(s => s.classes.includes("Warlock")), ...(spellsDatabase["7th"]||[]).filter(s => s.classes.includes("Warlock")), ...(spellsDatabase["8th"]||[]).filter(s => s.classes.includes("Warlock")), ...(spellsDatabase["9th"]||[]).filter(s => s.classes.includes("Warlock"))],
  "Wizard": [...spellsDatabase.Cantrips.filter(s => s.classes.includes("Wizard")), ...spellsDatabase["1st"].filter(s => s.classes.includes("Wizard")), ...spellsDatabase["2nd"].filter(s => s.classes.includes("Wizard")), ...spellsDatabase["3rd"].filter(s => s.classes.includes("Wizard")), ...spellsDatabase["4th"].filter(s => s.classes.includes("Wizard")), ...spellsDatabase["5th"].filter(s => s.classes.includes("Wizard")), ...(spellsDatabase["6th"]||[]).filter(s => s.classes.includes("Wizard")), ...(spellsDatabase["7th"]||[]).filter(s => s.classes.includes("Wizard")), ...(spellsDatabase["8th"]||[]).filter(s => s.classes.includes("Wizard")), ...(spellsDatabase["9th"]||[]).filter(s => s.classes.includes("Wizard"))]
};
// Weapons data (from the provided table)
const weaponsData = {
  "Club": { cost: "1 sp", damage: "1d4 bludgeoning", weight: 2, properties: "Light", type: "simple", melee: true, thrown: false },
  "Dagger": { cost: "2 gp", damage: "1d4 piercing", weight: 1, properties: "Finesse, light, thrown (range 20/60)", type: "simple", melee: true, thrown: true },
  "Greatclub": { cost: "2 sp", damage: "1d8 bludgeoning", weight: 10, properties: "Two-handed", type: "simple", melee: true, thrown: false },
  "Handaxe": { cost: "5 gp", damage: "1d6 slashing", weight: 2, properties: "Light, thrown (range 20/60)", type: "simple", melee: true, thrown: true },
  "Javelin": { cost: "5 sp", damage: "1d6 piercing", weight: 2, properties: "Thrown (range 30/120)", type: "simple", melee: true, thrown: true },
  "Light hammer": { cost: "2 gp", damage: "1d4 bludgeoning", weight: 2, properties: "Light, thrown (range 20/60)", type: "simple", melee: true, thrown: true },
  "Mace": { cost: "5 gp", damage: "1d6 bludgeoning", weight: 4, properties: "", type: "simple", melee: true, thrown: false },
  "Quarterstaff": { cost: "2 sp", damage: "1d6 bludgeoning", weight: 4, properties: "Versatile (1d8)", type: "simple", melee: true, thrown: false },
  "Sickle": { cost: "1 gp", damage: "1d4 slashing", weight: 2, properties: "Light", type: "simple", melee: true, thrown: false },
  "Spear": { cost: "1 gp", damage: "1d6 piercing", weight: 3, properties: "Thrown (range 20/60), versatile (1d8)", type: "simple", melee: true, thrown: true, excludeQuantity: true },
  "Light crossbow": { cost: "25 gp", damage: "1d8 piercing", weight: 5, properties: "Ammunition (range 80/320), loading, two-handed", type: "simple", melee: false, thrown: false },
  "Dart": { cost: "5 cp", damage: "1d4 piercing", weight: 0.25, properties: "Finesse, thrown (range 20/60)", type: "simple", melee: false, thrown: true },
  "Shortbow": { cost: "25 gp", damage: "1d6 piercing", weight: 2, properties: "Ammunition (range 80/320), two-handed", type: "simple", melee: false, thrown: false },
  "Sling": { cost: "1 sp", damage: "1d4 bludgeoning", weight: 0, properties: "Ammunition (range 30/120)", type: "simple", melee: false, thrown: false },
  "Battleaxe": { cost: "10 gp", damage: "1d8 slashing", weight: 4, properties: "Versatile (1d10)", type: "martial", melee: true, thrown: false },
  "Flail": { cost: "10 gp", damage: "1d8 bludgeoning", weight: 2, properties: "", type: "martial", melee: true, thrown: false },
  "Glaive": { cost: "20 gp", damage: "1d10 slashing", weight: 6, properties: "Heavy, reach, two-handed", type: "martial", melee: true, thrown: false },
  "Greataxe": { cost: "30 gp", damage: "1d12 slashing", weight: 7, properties: "Heavy, two-handed", type: "martial", melee: true, thrown: false },
  "Greatsword": { cost: "50 gp", damage: "2d6 slashing", weight: 6, properties: "Heavy, two-handed", type: "martial", melee: true, thrown: false },
  "Halberd": { cost: "20 gp", damage: "1d10 slashing", weight: 6, properties: "Heavy, reach, two-handed", type: "martial", melee: true, thrown: false },
  "Lance": { cost: "10 gp", damage: "1d12 piercing", weight: 6, properties: "Reach, special", type: "martial", melee: true, thrown: false },
  "Longsword": { cost: "15 gp", damage: "1d8 slashing", weight: 3, properties: "Versatile (1d10)", type: "martial", melee: true, thrown: false },
  "Maul": { cost: "10 gp", damage: "2d6 bludgeoning", weight: 10, properties: "Heavy, two-handed", type: "martial", melee: true, thrown: false },
  "Morningstar": { cost: "15 gp", damage: "1d8 piercing", weight: 4, properties: "", type: "martial", melee: true, thrown: false },
  "Pike": { cost: "5 gp", damage: "1d10 piercing", weight: 18, properties: "Heavy, reach, two-handed", type: "martial", melee: true, thrown: false },
  "Rapier": { cost: "25 gp", damage: "1d8 piercing", weight: 2, properties: "Finesse", type: "martial", melee: true, thrown: false },
  "Scimitar": { cost: "25 gp", damage: "1d6 slashing", weight: 3, properties: "Finesse, light", type: "martial", melee: true, thrown: false },
  "Shortsword": { cost: "10 gp", damage: "1d6 piercing", weight: 2, properties: "Finesse, light", type: "martial", melee: true, thrown: false },
  "Trident": { cost: "5 gp", damage: "1d6 piercing", weight: 4, properties: "Thrown (range 20/60), versatile (1d8)", type: "martial", melee: true, thrown: true, excludeQuantity: true },
  "War pick": { cost: "5 gp", damage: "1d8 piercing", weight: 2, properties: "", type: "martial", melee: true, thrown: false },
  "Warhammer": { cost: "15 gp", damage: "1d8 bludgeoning", weight: 2, properties: "Versatile (1d10)", type: "martial", melee: true, thrown: false },
  "Whip": { cost: "2 gp", damage: "1d4 slashing", weight: 3, properties: "Finesse, reach", type: "martial", melee: true, thrown: false },
  "Blowgun": { cost: "10 gp", damage: "1 piercing", weight: 1, properties: "Ammunition (range 25/100), loading", type: "martial", melee: false, thrown: false },
  "Hand crossbow": { cost: "75 gp", damage: "1d6 piercing", weight: 3, properties: "Ammunition (range 30/120), light, loading", type: "martial", melee: false, thrown: false },
  "Heavy crossbow": { cost: "50 gp", damage: "1d10 piercing", weight: 18, properties: "Ammunition (range 100/400), heavy, loading, two-handed", type: "martial", melee: false, thrown: false },
  "Longbow": { cost: "50 gp", damage: "1d8 piercing", weight: 2, properties: "Ammunition (range 150/600), heavy, two-handed", type: "martial", melee: false, thrown: false },
  "Net": { cost: "1 gp", damage: "", weight: 3, properties: "Special, thrown (range 5/15)", type: "martial", melee: false, thrown: true }
};

// Armor data (from the provided table)
const armorData = {
  "Padded": { cost: "5 gp", ac: "11 + Dex modifier", strengthReq: null, stealth: "Disadvantage", weight: 8, category: "Light" },
  "Leather": { cost: "10 gp", ac: "11 + Dex modifier", strengthReq: null, stealth: null, weight: 10, category: "Light" },
  "Studded leather": { cost: "45 gp", ac: "12 + Dex modifier", strengthReq: null, stealth: null, weight: 13, category: "Light" },
  "Hide": { cost: "10 gp", ac: "12 + Dex modifier (max 2)", strengthReq: null, stealth: null, weight: 12, category: "Medium" },
  "Chain shirt": { cost: "50 gp", ac: "13 + Dex modifier (max 2)", strengthReq: null, stealth: null, weight: 20, category: "Medium" },
  "Scale mail": { cost: "50 gp", ac: "14 + Dex modifier (max 2)", strengthReq: null, stealth: "Disadvantage", weight: 45, category: "Medium" },
  "Breastplate": { cost: "400 gp", ac: "14 + Dex modifier (max 2)", strengthReq: null, stealth: null, weight: 20, category: "Medium" },
  "Half plate": { cost: "750 gp", ac: "15 + Dex modifier (max 2)", strengthReq: null, stealth: "Disadvantage", weight: 40, category: "Medium" },
  "Ring mail": { cost: "30 gp", ac: "14", strengthReq: null, stealth: "Disadvantage", weight: 40, category: "Heavy" },
  "Chain mail": { cost: "75 gp", ac: "16", strengthReq: 13, stealth: "Disadvantage", weight: 55, category: "Heavy" },
  "Splint": { cost: "200 gp", ac: "17", strengthReq: 15, stealth: "Disadvantage", weight: 60, category: "Heavy" },
  "Plate": { cost: "1500 gp", ac: "18", strengthReq: 15, stealth: "Disadvantage", weight: 65, category: "Heavy" }
};

// ========== EQUIPMENT PACKS ==========
// ========== FLAVOR DESCRIPTIONS ==========
const raceDescriptions = {
  "Hill Dwarf": "Hill Dwarves are the most common of the dwarven clans, known for their deep connection to the earth and their resilient nature. They are patient, traditional, and fiercely loyal to their kin.",
  "Mountain Dwarf": "Mountain Dwarves are strong and hardy, raised in the high halls of the mountains. They are master smiths and miners, and their culture values strength, honor, and craftsmanship.",
  "High Elf": "High Elves are graceful and intelligent, often seen as aloof but deeply curious. They have a natural talent for magic and a love for art, poetry, and ancient lore.",
  "Wood Elf": "Wood Elves are swift and stealthy, at home in the wilds. They are fiercely protective of their forests and possess an almost supernatural connection to nature.",
  "Dark Elf (Drow)": "Drow hail from the dark Underdark. They are cunning, ambitious, and often mistrusted by surface races, but they are also resourceful survivors with innate magical abilities.",
  "Lightfoot": "Lightfoot Halflings are the most common halflings, known for their cheerfulness, curiosity, and remarkable luck. They easily blend in with larger folk and love stories and comfort.",
  "Stout": "Stout Halflings have a dash of dwarven blood, making them more resilient than their lightfoot cousins. They are practical, hardy, and enjoy good food and ale.",
  "Human": "Humans are the most adaptable and ambitious of the common races. They live short lives but accomplish much, driven by passion, faith, or the desire for glory.",
  "Dragonborn": "Dragonborn look like humanoid dragons. They are proud, honorable, and often have a draconic ancestry that grants them a breath weapon and elemental resistance.",
  "Forest Gnome": "Forest Gnomes are natural illusionists and love animals. They are playful, curious, and use their magic to create harmless pranks and beautiful illusions.",
  "Rock Gnome": "Rock Gnomes are inventors and tinkerers, always building small gadgets. They are fascinated by mechanics, alchemy, and the physical world.",
  "Half-Elf": "Half-Elves belong to two worlds – the mortal and the fey. They are charismatic, adaptable, and often wanderers, seeking a place where they truly belong.",
  "Half-Orc": "Half-Orcs are fierce and strong, often judged by their orcish heritage. They are determined survivors, capable of incredible feats of endurance and savage attacks.",
  "Standard (Infernal Legacy)": "Tieflings carry the mark of infernal blood. They are often outsiders, but their fiendish heritage grants them fire resistance and dark magic.",
  "Feral (SCAG)": "This Tiefling variant is swifter and more agile, trading intellect for dexterity, often raised in harsh environments.",
  "Winged (SCAG)": "Some Tieflings are born with leathery wings, able to fly. They are rare and often seen as omens – good or ill.",
  "Devil's Tongue (MToF)": "These Tieflings possess a silver tongue and enchantment magic, able to beguile and charm with whispers."
};

const classDescriptions = {
  "Artificer": "Artificers are magical engineers who infuse objects with power. They create wondrous items, use gadgets, and can heal, blast, or support with their inventions.",
  "Barbarian": "Barbarians tap into raw, primal fury. They are unstoppable warriors who shrug off blows and deal devastating damage when enraged.",
  "Bard": "Bards are storytellers, musicians, and masters of inspiration. They use their charisma to support allies, debuff enemies, and cast versatile spells.",
  "Cleric": "Clerics are divine agents of a god or pantheon. They heal, protect, and smite, with domain spells that reflect their deity's nature.",
  "Druid": "Druids draw power from nature itself. They can shape-shift into beasts, summon animals, and wield elemental magic to protect the wild.",
  "Fighter": "Fighters are weapon-masters, skilled in all forms of combat. They are durable, adaptable, and can specialize in anything from archery to heavy armor.",
  "Monk": "Monks harness ki energy to perform extraordinary martial arts feats. They are unarmored but highly mobile, able to stun foes and deflect missiles.",
  "Paladin": "Paladins are holy warriors bound by an oath. They smite evil with divine magic, heal allies, and radiate a protective aura.",
  "Ranger": "Rangers are hunters and trackers who excel in wilderness survival. They fight with a bow or two blades and often have an animal companion.",
  "Rogue": "Rogues rely on stealth, precision, and skills. They sneak attack vulnerable foes, disable traps, and are masters of deception and lockpicking.",
  "Sorcerer": "Sorcerers possess innate magical bloodlines. They cast spells with raw, flexible power and can use Metamagic to alter spell effects.",
  "Warlock": "Warlocks bargain with otherworldly patrons for secret knowledge and power. They rely on eldritch blasts and a few but potent spell slots.",
  "Wizard": "Wizards learn magic through rigorous study. They have the most extensive spell list and can specialize in a school of magic."
};

const subclassDescriptions = {
  "Champion": "Champions focus on raw athleticism and critical hits. They are simple but deadly, improving their chance to land devastating blows.",
  "Battle Master": "Battle Masters use maneuvers to control the battlefield – tripping, disarming, or goading enemies while commanding allies.",
  "Eldritch Knight": "Eldritch Knights blend magic with martial skill, casting defensive spells and summoning their bonded weapon.",
  "Arcane Archer": "Arcane Archers infuse arrows with magical effects, such as seeking, banishing, or grasping vines.",
  "Life Domain": "Life clerics are the ultimate healers, channeling positive energy to restore wounds and even raise the dead.",
  "Light Domain": "Light clerics wield radiance and fire, banishing darkness and burning undead with holy flames.",
  "War Domain": "War clerics are divine crusaders, granting bonus attacks and smiting foes with guided strikes.",
  "Draconic Bloodline": "Sorcerers with draconic blood gain natural armor, extra hit points, and eventually wings, plus elemental affinity.",
  "Wild Magic": "Wild Magic sorcerers tap into chaotic forces, causing random surges that can be hilarious or deadly.",
  "The Fiend": "Fiend warlocks gain fire spells and temporary hit points when they slay enemies, plus the classic 'Hurl Through Hell' ability.",
  "The Archfey": "Archfey warlocks charm and frighten, teleporting away when hit and spreading beguiling magic."
};

const equipmentPacks = {
  "Burglar's Pack": { cost: 16, classes: ["Rogue","Ranger"], contents: ["Backpack","bag of 1,000 ball bearings","10 ft of string","bell","5 candles","crowbar","hammer","10 pitons","hooded lantern","2 flasks of oil","5 days rations","tinderbox","waterskin","50 ft hempen rope"] },
  "Diplomat's Pack": { cost: 39, classes: ["Cleric","Bard","Druid"], contents: ["Chest","2 map/scroll cases","fine clothes","bottle of ink","ink pen","lamp","2 flasks of oil","5 sheets of paper","vial of perfume","sealing wax","soap"] },
  "Dungeoneer's Pack": { cost: 12, classes: ["any"], contents: ["Backpack","crowbar","hammer","10 pitons","10 torches","tinderbox","10 days rations","waterskin","50 ft hempen rope"] },
  "Entertainer's Pack": { cost: 40, classes: ["Bard"], contents: ["Backpack","bedroll","2 costumes","5 candles","5 days rations","waterskin","disguise kit"] },
  "Explorer's Pack": { cost: 10, classes: ["Barbarian","Fighter","Ranger","Druid","Monk","Artificer"], contents: ["Backpack","bedroll","mess kit","tinderbox","10 torches","10 days rations","waterskin","50 ft hempen rope"] },
  "Priest's Pack": { cost: 19, classes: ["Cleric","Paladin"], contents: ["Backpack","blanket","10 candles","tinderbox","alms box","2 blocks of incense","censer","vestments","2 days rations","waterskin"] },
  "Scholar's Pack": { cost: 40, classes: ["Warlock","Wizard","Artificer"], contents: ["Backpack","book of lore","bottle of ink","ink pen","10 sheets of parchment","bag of sand","small knife"] }
};

// ========== SUBCLASS SPELLS ==========
const subclassSpells = {
  "Knowledge Domain": ["command","identify","augury","suggestion","nondetection","speak with dead","arcane eye","confusion","legend lore","scrying"],
  "Life Domain": ["bless","cure wounds","lesser restoration","spiritual weapon","beacon of hope","revivify","death ward","guardian of faith","mass cure wounds","raise dead"],
  "Light Domain": ["burning hands","faerie fire","flaming sphere","scorching ray","daylight","fireball","guardian of faith","wall of fire","flame strike","scrying"],
  "Nature Domain": ["animal friendship","speak with animals","barkskin","spike growth","plant growth","wind wall","dominate beast","grasping vine","insect plague","tree stride"],
  "Tempest Domain": ["fog cloud","thunderwave","gust of wind","shatter","call lightning","sleet storm","control water","ice storm","destructive wave","insect plague"],
  "Trickery Domain": ["charm person","disguise self","mirror image","pass without trace","blink","dispel magic","dimension door","polymorph","dominate person","modify memory"],
  "War Domain": ["divine favor","shield of faith","magic weapon","spiritual weapon","crusader's mantle","spirit guardians","freedom of movement","stoneskin","hold monster","destructive wave"],
  "Forge Domain": ["searing smite","shield of faith","heat metal","magic weapon","elemental weapon","protection from energy","fabricate","wall of fire","animate objects","creation"],
  "Grave Domain": ["bane","false life","gentle repose","ray of enfeeblement","revivify","vampiric touch","blight","death ward","antilife shell","raise dead"],
  "Order Domain": ["command","heroism","hold person","zone of truth","mass healing word","slow","compulsion","locate creature","commune","dominate person"],
  "Peace Domain": ["heroism","sanctuary","aid","warding bond","beacon of hope","sending","aura of purity","Otiluke's resilient sphere","greater restoration","Rary's telepathic bond"],
  "Twilight Domain": ["faerie fire","sleep","moonbeam","see invisibility","aura of vitality","Leomund's tiny hut","aura of life","greater invisibility","circle of power","mislead"],
  "Oath of Devotion": ["protection from evil and good","sanctuary","lesser restoration","zone of truth","dispel magic","sending","aura of purity","compulsion","commune","flame strike"],
  "Oath of the Ancients": ["ensnaring strike","speak with animals","moonbeam","misty step","plant growth","protection from energy","ice storm","stoneskin","commune with nature","tree stride"],
  "Oath of Vengeance": ["bane","hunter's mark","hold person","misty step","haste","protection from energy","banishment","dimension door","hold monster","scrying"],
  "Oath of Conquest": ["armor of Agathys","command","hold person","spiritual weapon","fear","spirit guardians","dominate beast","stoneskin","dominate person","hold monster"],
  "Oath of Redemption": ["sanctuary","sleep","calm emotions","hold person","counterspell","hypnotic pattern","Otiluke's resilient sphere","stoneskin","hold monster","wall of force"],
  "Oath of Glory": ["guiding bolt","heroism","enhance ability","magic weapon","haste","protection from energy","compulsion","freedom of movement","commune","flame strike"],
  "Oath of the Watchers": ["alarm","detect magic","moonbeam","see invisibility","counterspell","nondetection","aura of purity","banishment","hold monster","scrying"],
  "Circle of the Land": ["speak with animals","animal friendship","barkskin","spike growth","plant growth","wind wall","dominate beast","grasping vine","insect plague","tree stride"],
  "Circle of the Moon": [],
  "Circle of Dreams": [],
  "Circle of the Shepherd": [],
  "Circle of Spores": ["chill touch","blindness/deafness","gentle repose","animate dead","gaseous form","blight","confusion","cloudkill","contagion"],
  "Circle of Stars": ["guidance","guiding bolt"],
  "Circle of Wildfire": ["burning hands","cure wounds","flaming sphere","scorching ray","plant growth","revivify","aura of life","fire shield","flame strike","mass cure wounds"]
};

// ========== SUBCLASS FEATURES DATA ==========
const metamagicOptions = [
  { name: "Careful Spell", description: "When you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell's full force. You can spend 1 sorcery point to choose a number of those creatures up to your Charisma modifier. A chosen creature automatically succeeds on its saving throw against the spell." },
  { name: "Distant Spell", description: "When you cast a spell that has a range of 5 feet or greater, you can spend 1 sorcery point to double the range. If the spell's range is Touch, its range becomes 30 feet." },
  { name: "Empowered Spell", description: "When you roll damage for a spell, you can spend 1 sorcery point to reroll a number of the damage dice up to your Charisma modifier. You must use the new rolls." },
  { name: "Extended Spell", description: "When you cast a spell that has a duration of 1 minute or longer, you can spend 1 sorcery point to double its duration, to a maximum of 24 hours." },
  { name: "Heightened Spell", description: "When you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw against the spell." },
  { name: "Quickened Spell", description: "When you cast a spell that has a casting time of 1 action, you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting." },
  { name: "Subtle Spell", description: "When you cast a spell, you can spend 1 sorcery point to cast it without any somatic or verbal components." },
  { name: "Twinned Spell", description: "When you cast a spell that targets only one creature and doesn't have a range of self, you can spend a number of sorcery points equal to the spell's level to target a second creature in range with the same spell (1 sorcery point if the spell is a cantrip)." }
];

const eldritchInvocations = [
  { name: "Agonizing Blast", prerequisite: "eldritch blast cantrip", description: "When you cast eldritch blast, add your Charisma modifier to the damage it deals on a hit." },
  { name: "Armor of Shadows", prerequisite: "", description: "You can cast mage armor on yourself at will, without expending a spell slot or material components." },
  { name: "Beast Speech", prerequisite: "", description: "You can cast speak with animals at will, without expending a spell slot." },
  { name: "Beguiling Influence", prerequisite: "", description: "You gain proficiency in Deception and Persuasion." },
  { name: "Devil's Sight", prerequisite: "", description: "You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet." },
  { name: "Eldritch Sight", prerequisite: "", description: "You can cast detect magic at will, without expending a spell slot." },
  { name: "Eldritch Smite", prerequisite: "5th level, Pact of the Blade", description: "Once per turn when you hit a creature with your pact weapon, you can expend a warlock spell slot to deal an extra 1d8 force damage per slot level, plus knock the target prone." },
  { name: "Eyes of the Rune Keeper", prerequisite: "", description: "You can read all writing." },
  { name: "Fiendish Vigor", prerequisite: "", description: "You can cast false life on yourself at will as a 1st-level spell, without expending a spell slot or material components." },
  { name: "Gaze of Two Minds", prerequisite: "", description: "You can use your action to touch a willing creature and perceive through its senses until the end of your next turn. As a bonus action on subsequent turns, you can maintain this connection." },
  { name: "Grasp of Hadar", prerequisite: "eldritch blast cantrip", description: "Once on each of your turns when you hit a creature with eldritch blast, you can move that creature 10 feet straight toward you." },
  { name: "Improved Pact Weapon", prerequisite: "Pact of the Blade", description: "Your pact weapon gains a +1 bonus to attack and damage rolls, can be used as a spellcasting focus, and can be any weapon form." },
  { name: "Lance of Lethargy", prerequisite: "eldritch blast cantrip", description: "Once on each of your turns when you hit a creature with eldritch blast, you can reduce its speed by 10 feet until the end of your next turn." },
  { name: "Lifedrinker", prerequisite: "12th level, Pact of the Blade", description: "When you hit a creature with your pact weapon, the creature takes extra necrotic damage equal to your Charisma modifier." },
  { name: "Mask of Many Faces", prerequisite: "", description: "You can cast disguise self at will, without expending a spell slot." },
  { name: "Misty Visions", prerequisite: "", description: "You can cast silent image at will, without expending a spell slot or material components." },
  { name: "One with Shadows", prerequisite: "5th level", description: "When you are in an area of dim light or darkness, you can use your action to become invisible until you move or take an action or a reaction." },
  { name: "Otherworldly Leap", prerequisite: "9th level", description: "You can cast jump on yourself at will, without expending a spell slot or material components." },
  { name: "Repelling Blast", prerequisite: "eldritch blast cantrip", description: "When you hit a creature with eldritch blast, you can push the creature up to 10 feet away from you." },
  { name: "Sculptor of Flesh", prerequisite: "7th level", description: "You can cast polymorph once using a warlock spell slot. You can't do so again until you finish a long rest." },
  { name: "Thirsting Blade", prerequisite: "5th level, Pact of the Blade", description: "You can attack with your pact weapon twice, instead of once, whenever you take the Attack action on your turn." },
  { name: "Tomb of Levistus", prerequisite: "5th level", description: "As a reaction when you take damage, you can entomb yourself in ice, which melts at the end of your next turn. You gain temporary hit points equal to 10 times your warlock level and are incapacitated until the ice melts." },
  { name: "Trickster's Escape", prerequisite: "7th level", description: "You can cast freedom of movement once on yourself using a warlock spell slot. You can't do so again until you finish a long rest." },
  { name: "Visions of Distant Realms", prerequisite: "15th level", description: "You can cast arcane eye at will, without expending a spell slot." },
  { name: "Voice of the Chain Master", prerequisite: "Pact of the Chain", description: "You can communicate telepathically with your familiar and perceive through its senses while on the same plane of existence." },
  { name: "Whispers of the Grave", prerequisite: "9th level", description: "You can cast speak with dead at will, without expending a spell slot." },
  { name: "Witch Sight", prerequisite: "15th level", description: "You can see the true form of any shapechanger or creature concealed by illusion or transmutation magic while it is within 30 feet of you." }
];

// Pact Boon options for Warlocks
const pactBoonOptions = [
  "Pact of the Blade",
  "Pact of the Chain",
  "Pact of the Tome",
  "Pact of the Talisman"
];

// ========== WARLOCK PATRONS DATABASE ==========
const warlockPatrons = {
  "The Archfey": {
    expandedSpells: {
      1: ["faerie fire", "sleep"],
      2: ["calm emotions", "misty step"],
      3: ["blink", "plant growth"],
      4: ["dominate beast", "greater invisibility"],
      5: ["dominate person", "seeming"]
    },
    features: [
      { level: 1, name: "Fey Presence", description: "As an action, you cause each creature in a 10‑ft cube to make a Wisdom save vs. your spell save DC. On a failure, they are charmed or frightened (your choice) until the end of your next turn. Once per short or long rest." },
      { level: 6, name: "Misty Escape", description: "When you take damage, you can use your reaction to become invisible and teleport up to 60 ft to an unoccupied space you can see. You remain invisible until the start of your next turn or until you attack/cast a spell. Once per short or long rest." },
      { level: 10, name: "Beguiling Defenses", description: "You are immune to being charmed. When a creature attempts to charm you, you can use your reaction to turn the effect back on that creature, forcing it to make a Wisdom save or be charmed by you for 1 minute." },
      { level: 14, name: "Dark Delirium", description: "As an action, you cause a creature you can see within 60 ft to make a Wisdom save. On a failure, it is charmed or frightened (your choice) for 1 minute or until you lose concentration. The creature perceives a hallucinatory realm of your design. Once per long rest." }
    ],
    resource: null
  },
  "The Fiend": {
    expandedSpells: {
      1: ["burning hands", "command"],
      2: ["blindness/deafness", "scorching ray"],
      3: ["fireball", "stinking cloud"],
      4: ["fire shield", "wall of fire"],
      5: ["flame strike", "hallow"]
    },
    features: [
      { level: 1, name: "Dark One's Blessing", description: "When you reduce a hostile creature to 0 hit points, you gain temporary HP equal to your Charisma modifier + your warlock level." },
      { level: 6, name: "Dark One's Own Luck", description: "When you make an ability check or saving throw, you can add a d10 to the roll. You must decide before the DM says if you succeed/fail. Once per short or long rest." },
      { level: 10, name: "Fiendish Resilience", description: "When you finish a short or long rest, choose one damage type (except bludgeoning, piercing, slashing from nonmagical attacks). You gain resistance to that damage type until you finish a rest or choose a different type." },
      { level: 14, name: "Hurl Through Hell", description: "When you hit a creature with an attack, you can teleport it through the lower planes. The creature disappears and takes 10d10 psychic damage, then reappears in the space it left (or the nearest unoccupied space). Once per long rest." }
    ],
    resource: null
  },
  "The Great Old One": {
    expandedSpells: {
      1: ["dissonant whispers", "Tasha's hideous laughter"],
      2: ["detect thoughts", "phantasmal force"],
      3: ["clairvoyance", "sending"],
      4: ["confusion", "Evard's black tentacles"],
      5: ["dominate person", "telekinesis"]
    },
    features: [
      { level: 1, name: "Awakened Mind", description: "You can telepathically speak to any creature within 30 ft that you can see and that understands at least one language. The creature does not need to share a language." },
      { level: 6, name: "Entropic Ward", description: "When a creature makes an attack roll against you, you can use your reaction to impose disadvantage on that roll. If the attack misses, you have advantage on your next attack roll against that creature before the end of your next turn. Once per short or long rest." },
      { level: 10, name: "Thought Shield", description: "You have resistance to psychic damage. Additionally, any creature that deals psychic damage to you or reads your thoughts takes 3d6 psychic damage." },
      { level: 14, name: "Create Thrall", description: "When you touch an incapacitated humanoid, it becomes charmed by you until a remove curse or similar magic is cast on it. You can communicate telepathically with the thrall at any distance (as long as you are on the same plane). You can have only one thrall at a time." }
    ],
    resource: null
  },
  "The Hexblade": {
    expandedSpells: {
      1: ["shield", "wrathful smite"],
      2: ["blur", "branding smite"],
      3: ["blink", "elemental weapon"],
      4: ["phantasmal killer", "staggering smite"],
      5: ["banishing smite", "cone of cold"]
    },
    features: [
      { level: 1, name: "Hexblade's Curse", description: "As a bonus action, choose one creature you can see within 30 ft. Once per short rest, you gain: bonus to damage rolls equal to proficiency bonus; critical hit on 19–20; you regain HP equal to your warlock level + Cha mod if the cursed target dies. Lasts 1 minute." },
      { level: 1, name: "Hex Warrior", description: "You can use your Charisma modifier instead of Strength or Dexterity for attack and damage rolls with one handed weapon you touch (not two‑handed). Also gain proficiency with medium armor, shields, and martial weapons." },
      { level: 6, name: "Accursed Specter", description: "When you slay a humanoid, you can bind its spirit as a specter (use specter stat block). It gains bonus HP equal to half your warlock level. It obeys your verbal commands and rolls its own initiative. Lasts until you finish a long rest. Once per long rest." },
      { level: 10, name: "Armor of Hexes", description: "While your Hexblade's Curse is on a target, when that target hits you with an attack roll, you can roll a d6. On a 4–6, the attack misses regardless of its roll." },
      { level: 14, name: "Master of Hexes", description: "You can transfer your Hexblade's Curse to a new creature as a bonus action (no action required if the previous cursed creature died). No longer limited to once per rest – you can use it at will, but only one curse active at a time." }
    ],
    resource: { name: "Hexblade's Curse", maxUses: "proficiency bonus per short rest", currentUses: 0 }
  },
  "The Fathomless": {
    expandedSpells: {
      1: ["create or destroy water", "thunderwave"],
      2: ["gust of wind", "shatter"],
      3: ["lightning bolt", "sleet storm"],
      4: ["control water", "summon elemental (water only)"],
      5: ["bigby's hand (appears as a watery tentacle)", "cone of cold"]
    },
    features: [
      { level: 1, name: "Tentacle of the Deeps", description: "As a bonus action, create a spectral tentacle at a point you can see within 60 ft. It lasts 1 minute. When you create it, make a melee spell attack against a creature within 10 ft of it; on hit, it deals 1d8 cold damage and reduces the target's speed by 10 ft. As a bonus action, you can move the tentacle 30 ft and repeat the attack. Uses equal to proficiency bonus per long rest." },
      { level: 1, name: "Gift of the Sea", description: "You gain a swimming speed equal to your walking speed, and you can breathe underwater." },
      { level: 6, name: "Oceanic Soul", description: "You gain resistance to cold damage. Additionally, when you are fully submerged, any creature that starts its turn in the water within 30 ft of you takes cold damage equal to your Charisma modifier." },
      { level: 10, name: "Guardian Coil", description: "When a creature you can see hits you with an attack, you can use your reaction to reduce the damage by 1d8. You can use this after the damage roll but before the damage is applied. You gain additional uses equal to your proficiency bonus per long rest." },
      { level: 14, name: "Fathomless Plunge", description: "As a bonus action, you can teleport to an unoccupied space you can see that is submerged in water (or within 30 ft of a body of water). You can also cause a 20‑ft radius sphere of water to erupt, forcing creatures within to make a Strength save or take 2d6 bludgeoning damage and be pushed 15 ft away. Once per long rest." }
    ],
    resource: { name: "Tentacle of the Deeps", maxUses: "proficiency bonus per long rest", currentUses: 0 }
  }
};

const battleMasterManeuvers = [
  { name: "Commander's Strike", description: "When you take the Attack action on your turn, you can forgo one of your attacks and use a bonus action to direct one of your companions to strike. When you do so, choose a friendly creature who can see or hear you and expend one superiority die. That creature can immediately use its reaction to make one weapon attack, adding the superiority die to the attack's damage roll." },
  { name: "Disarming Attack", description: "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to disarm the target. Add the superiority die to the attack's damage roll. The target must succeed on a Strength saving throw or drop one item of your choice that it is holding." },
  { name: "Distracting Strike", description: "When you hit a creature with a weapon attack, you can expend one superiority die to distract it. Add the superiority die to the attack's damage roll. The next attack roll against the target by an attacker other than you has advantage if the attack is made before the start of your next turn." },
  { name: "Evasive Footwork", description: "When you move, you can expend one superiority die, rolling the die and adding the number rolled to your AC until you stop moving." },
  { name: "Feinting Attack", description: "You can expend one superiority die and use a bonus action on your turn to feint, choosing one creature within 5 feet of you as your target. You have advantage on your next attack roll against that creature. If that attack hits, add the superiority die to the attack's damage roll." },
  { name: "Goading Attack", description: "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to goad the target. Add the superiority die to the attack's damage roll. The target must make a Wisdom saving throw. On a failure, it has disadvantage on all attack rolls against targets other than you until the end of your next turn." },
  { name: "Lunging Attack", description: "When you make a melee weapon attack, you can expend one superiority die to increase your reach for that attack by 5 feet. If you hit, add the superiority die to the damage roll." },
  { name: "Maneuvering Attack", description: "When you hit a creature with a weapon attack, you can expend one superiority die to maneuver one of your comrades. Add the superiority die to the attack's damage roll. Choose a friendly creature who can see or hear you. That creature can use its reaction to move up to half its speed without provoking opportunity attacks from the target of your attack." },
  { name: "Menacing Attack", description: "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to frighten the target. Add the superiority die to the attack's damage roll. The target must make a Wisdom saving throw. On a failure, it is frightened of you until the end of your next turn." },
  { name: "Parry", description: "When another creature damages you with a melee attack, you can use your reaction and expend one superiority die to reduce the damage by the number you roll on your superiority die + your Dexterity modifier." },
  { name: "Precision Attack", description: "When you make a weapon attack roll against a creature, you can expend one superiority die to add it to the roll. You can use this maneuver before or after making the attack roll, but before any effects of the attack are applied." },
  { name: "Pushing Attack", description: "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to drive the target back. Add the superiority die to the attack's damage roll. If the target is Large or smaller, it must make a Strength saving throw. On a failure, you push it up to 15 feet away from you." },
  { name: "Rally", description: "On your turn, you can use a bonus action and expend one superiority die to bolster the resolve of one of your companions. Choose a friendly creature who can see or hear you. That creature gains temporary hit points equal to the superiority die roll + your Charisma modifier." },
  { name: "Riposte", description: "When a creature misses you with a melee attack, you can use your reaction and expend one superiority die to make a melee weapon attack against that creature. If you hit, add the superiority die to the attack's damage roll." },
  { name: "Sweeping Attack", description: "When you hit a creature with a melee weapon attack, you can expend one superiority die to attempt to damage another creature. Choose another creature within 5 feet of the original target and within your reach. If the original attack roll would hit that creature, it takes damage equal to the number you roll on your superiority die. The damage is of the same type dealt by the original attack." },
  { name: "Trip Attack", description: "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to knock the target down. Add the superiority die to the attack's damage roll. If the target is Large or smaller, it must make a Strength saving throw. On a failure, you knock the target prone." }
];

const arcaneShots = [
  { name: "Banishing Arrow", description: "You use abjuration magic to try to banish your target to a harmless demiplane. The creature hit must succeed on a Charisma saving throw or be banished. At the start of your next turn, the target reappears in the space it left or the nearest unoccupied space." },
  { name: "Beguiling Arrow", description: "Your enchantment magic causes the target to become confused. The creature hit takes an extra 2d6 psychic damage, and you choose one of the target's allies. The target must succeed on a Wisdom saving throw or be charmed by that ally until the start of your next turn." },
  { name: "Bursting Arrow", description: "You imbue your arrow with a burst of force energy. The attack deals an extra 2d6 force damage to the target. Each creature within 10 feet of it must make a Dexterity saving throw or take 1d6 force damage." },
  { name: "Enfeebling Arrow", description: "You weave necromantic magic into your arrow. The creature hit takes an extra 2d6 necrotic damage. The target must make a Constitution saving throw or deal only half damage with weapon attacks for 1 minute." },
  { name: "Grasping Arrow", description: "When this arrow hits, it transforms into grasping vines that deal an extra 2d6 piercing damage. The target's speed is reduced by 10 feet. It takes 2d6 slashing damage the first time on each turn it moves 1 foot or more. The effect ends after 1 minute or if it or a creature succeeds on a Strength check to remove the vines." },
  { name: "Piercing Arrow", description: "You unleash a phantom arrow that passes through creatures. Make a single attack roll against a line of creatures up to your Dexterity modifier in length. The first creature takes your normal damage, and each creature beyond the first takes 1d6 piercing damage per fighter level (max 10d6)." },
  { name: "Seeking Arrow", description: "You grant your arrow the ability to seek out your target. When you use this option, you don't make an attack roll. Instead, choose one creature you have seen in the past minute. The arrow flies toward it, moving around corners and obstacles, and hits automatically, dealing 1d6 force damage plus normal arrow damage. The target must make a Dexterity saving throw or take an extra 1d6 force damage." },
  { name: "Shadow Arrow", description: "You weave illusion magic into your arrow. The creature hit must make a Wisdom saving throw or be unable to see anything beyond 5 feet for 1 minute. It can repeat the save at the end of each of its turns." }
];

const dragonAncestries = [
  { name: "Black", damageType: "Acid", breathShape: "5 by 30 ft. line", save: "Dex", resistance: "Acid" },
  { name: "Blue", damageType: "Lightning", breathShape: "5 by 30 ft. line", save: "Dex", resistance: "Lightning" },
  { name: "Brass", damageType: "Fire", breathShape: "5 by 30 ft. line", save: "Dex", resistance: "Fire" },
  { name: "Bronze", damageType: "Lightning", breathShape: "5 by 30 ft. line", save: "Dex", resistance: "Lightning" },
  { name: "Copper", damageType: "Acid", breathShape: "5 by 30 ft. line", save: "Dex", resistance: "Acid" },
  { name: "Gold", damageType: "Fire", breathShape: "15 ft. cone", save: "Dex", resistance: "Fire" },
  { name: "Green", damageType: "Poison", breathShape: "15 ft. cone", save: "Con", resistance: "Poison" },
  { name: "Red", damageType: "Fire", breathShape: "15 ft. cone", save: "Dex", resistance: "Fire" },
  { name: "Silver", damageType: "Cold", breathShape: "15 ft. cone", save: "Con", resistance: "Cold" },
  { name: "White", damageType: "Cold", breathShape: "15 ft. cone", save: "Con", resistance: "Cold" }
];

const backgroundDescriptions = {
  "Acolyte": "You have spent your life in service to a temple, learning sacred rites and providing guidance to the faithful. You command respect from those who share your faith and can expect aid from temple establishments.",
  "Charlatan": "You are a master of deception and trickery, skilled at creating false identities and conning the unwary. You have a false identity ready and can forge documents with ease.",
  "Criminal": "You have a history of breaking the law and surviving by your wits in the underworld. You have a reliable criminal contact who can pass messages for you.",
  "Entertainer": "You thrive in front of an audience, whether as a musician, actor, or storyteller. You can always find a place to perform and earn free lodging and food.",
  "Folk Hero": "You come from humble origins but performed a deed that made you a local champion. Commoners will shelter you, seeing you as one of their own.",
  "Guild Artisan": "You are a skilled craftsperson and a member of a respected guild, which provides you with benefits and connections in cities where your guild has influence.",
  "Hermit": "You lived a secluded life in isolation, during which you made a remarkable personal discovery – a truth about the cosmos or a hidden power.",
  "Noble": "You were born into wealth and privilege, with a title and lands. Your noble status grants you access to high society and influence over common folk.",
  "Outlander": "You grew up in the wilds, far from civilization. You are a skilled survivalist who can find food and water for your group and recall geographical details with ease.",
  "Sage": "You are a scholar devoted to knowledge, spending years studying lore. You know where to find information on most topics, from libraries to learned sages.",
  "Sailor": "You spent years at sea, learning to navigate by the stars. You can secure free passage on ships and are comfortable with rope, weather, and the ways of the water.",
  "Soldier": "You served in an army, learning discipline and combat tactics. Your military rank grants you authority over soldiers and access to military facilities.",
  "Urchin": "You grew up on the streets of a city, surviving by your wits and quick hands. You know the secret passages and shortcuts that make city travel faster."
};

const pointBuyCosts = { 8:0, 9:1, 10:2, 11:3, 12:4, 13:5, 14:7, 15:9 };
const startingPoints = 27;
const abilities = ["Strength","Dexterity","Constitution","Intelligence","Wisdom","Charisma"];

// IMPORTANT: These must be defined before applyState() runs
const sessionBtnWraps = ['wrap-char', 'wrap-quest', 'wrap-npc', 'wrap-guide', 'wrap-combat'];
const sessionBtns     = ['btn-char', 'btn-quest', 'btn-npc', 'btn-guide', 'btn-combat'];

// Portrait cropping globals
let cropper = null;
let currentCropResolve = null;

/* ========== GLOBAL STATE ========== */
let sessionActive = false;
let activeBtn     = null;
let currentCharacter = null;
let campaigns = [];
let selectedCampaignId = null;
let wizardContext = null;
let wizardStep = 1;

// New ability score system: finalScores directly (after racial bonuses)
let finalScores = { Strength:8, Dexterity:8, Constitution:8, Intelligence:8, Wisdom:8, Charisma:8 };

let selectedRace = "Dwarf";
let selectedSubrace = "Hill Dwarf";
let selectedClass = "Fighter";
let selectedSubclass = "";
let selectedBackground = "Acolyte";
let characterLevel = 3;

let characterName = "";
let characterAppearance = "";
let characterBackstory = "";
let characterTraits = "";
let chosenCantrips = [];
let chosenSpells = [];

// Subclass features selections
let chosenMetamagic = [];
let chosenInvocations = [];
let chosenManeuvers = [];
let chosenArcaneShots = [];
let selectedPactBoon = "";
let selectedDragonbornAncestry = "";
let selectedSorcererAncestry = "";
let selectedAlignment = "N";
let tempLevelUpSpells = null; // temporary spell selection for level-up modal

let chosenClassSkills = [];
let chosenRaceBonusSkills = [];
let chosenHighElfCantrip = "";
let pendingOpenWorldConfig = null;
let pendingStoryCampaign = null;

// Step 0: External databases loaded from markdown files
let spellDatabase = null;      // Will hold { normalizedName: spellObject }
let featDatabase = null;       // Will hold { normalizedName: featObject }

function normalizeName(name) {
  return name.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();
}

async function loadSpellDatabase() {
  const storageKey = 'dnd_spell_db';
  const version = 2;
  const cached = localStorage.getItem(storageKey);
  if (cached) {
    try {
      const data = JSON.parse(cached);
      if (data.version === version) {
        spellDatabase = data.spells;
        console.log('Spell DB loaded from cache:', Object.keys(spellDatabase).length);
        return;
      }
    } catch(e) {}
  }
  try {
    const response = await fetch('spells.md');
    const text = await response.text();
    const spells = parseSpellsFromMarkdown(text);
    spellDatabase = spells;
    localStorage.setItem(storageKey, JSON.stringify({ version, spells }));
    console.log('Spell DB parsed:', Object.keys(spells).length);
  } catch(e) {
    console.warn('Could not load spells.md, using built-in database');
    spellDatabase = null;
  }
}

function parseSpellsFromMarkdown(markdown) {
  const spells = {};
  const blocks = markdown.split(/\n### /);
  for (let block of blocks) {
    if (!block.trim()) continue;
    const lines = block.split('\n');
    const name = lines[0].trim();
    const spell = { name };
    for (let line of lines.slice(1)) {
      const match = line.match(/^-\s*\*\*([^*]+)\*\*:\s*(.*)/);
      if (match) {
        let key = match[1].toLowerCase().replace(/\s/g, '_');
        let value = match[2].trim();
        if (key === 'classes') value = value.split(',').map(s => s.trim());
        spell[key] = value;
      }
    }
    spells[normalizeName(name)] = spell;
  }
  return spells;
}

async function loadFeatDatabase() {
  const storageKey = 'dnd_feat_db';
  const version = 1;
  const cached = localStorage.getItem(storageKey);
  if (cached) {
    try {
      const data = JSON.parse(cached);
      if (data.version === version) {
        featDatabase = data.feats;
        console.log('Feat DB loaded from cache:', Object.keys(featDatabase).length);
        return;
      }
    } catch(e) {}
  }
  try {
    const response = await fetch('feats.md');
    const text = await response.text();
    const feats = parseFeatsFromMarkdown(text);
    featDatabase = feats;
    localStorage.setItem(storageKey, JSON.stringify({ version, feats }));
    console.log('Feat DB parsed:', Object.keys(feats).length);
  } catch(e) {
    console.warn('Could not load feats.md');
    featDatabase = null;
  }
}

function parseFeatsFromMarkdown(markdown) {
  const feats = {};
  const blocks = markdown.split(/\n### /);
  for (let block of blocks) {
    if (!block.trim()) continue;
    const lines = block.split('\n');
    const name = lines[0].trim();
    const feat = { name };
    for (let line of lines.slice(1)) {
      const match = line.match(/^-\s*\*\*([^*]+)\*\*:\s*(.*)/);
      if (match) {
        let key = match[1].toLowerCase().replace(/\s/g, '_');
        let value = match[2].trim();
        if (key === 'prerequisite') {
          // keep as string
        } else if (key === 'benefit') {
          // keep
        } else if (key === 'ability_increase') {
          const parts = value.match(/(\w+)\s*\+\s*(\d+)/);
          if (parts) feat.abilityIncrease = { ability: parts[1], amount: parseInt(parts[2]) };
        }
        feat[key] = value;
      }
    }
    feats[normalizeName(name)] = feat;
  }
  return feats;
}

function getSpellArray() {
  if (spellDatabase) return Object.values(spellDatabase);
  // Fallback: build from built-in spellsDatabase
  const arr = [];
  for (let level in spellsDatabase) {
    arr.push(...spellsDatabase[level]);
  }
  return arr;
}

// Equipment selections
let selectedPack = "";
let selectedArmor = "";
let hasShield = false;
let selectedWeapons = []; // array of { name, quantity } – max 2 distinct names
let customItems = "";

// DOM elements
let sidebar, sessionSec, mainContent;
let campaignModal, sessionListDiv, emptyStateDiv, deleteCampaignBtn, newCampaignBtn;
let confirmModal, confirmMessage, confirmDeleteBtn, confirmCancelBtn;
let selectionModal, configModal, campaignListDiv;
let characterSheetModal, charCreationWizard;

// Hardcoded story campaigns
const storyCampaigns = [
  {
    id: "pale_harvest",
    name: "The Pale Harvest",
    setting: "Dalelands / Baldur's Gate / Northern Faerûn",
    tone: "Grimdark / Mystery",
    description: `The grain turns black in the fields. Rivers run thick and slow. A plague without a name sweeps the North, and the dead do not stay dead. A whisper on the wind says: "The Lord of Bones has set his table."

You are not the prophesied saviour. No fallen prince will bear the cursed crown for you. There is only the rising dead, a cult that preys on the desperate, and a necromancer who claims to offer salvation. Behind him, in a citadel of frozen shadow, a Lich waits. His name is Aszagrix. He has seen empires rot and gods blink.

This is not a story of a single monster. It is the story of how the world learns to fear the dark again. And how you, against all reason, decide to light a match.`,
    initialHook: `*A cold wind rattles the windows of the inn. Outside, a funeral procession passes – but the corpse is walking at the front.*

The town of Westbridge is dying. Not from war or famine, but from a sleeping sickness that turns its victims pale and hollow. Three days later, they rise. The local lords blame a foreign plague. The church of Lathander is baffled. But you've seen the symbol carved into the forehead of one of the risen – a black crown, the mark of Myrkul.

A hooded figure has left a message under your door: "The harvest has begun. Come to the old catacombs if you wish to stop it."

What do you do?`,
    toneClass: "tone-grimdark"
  },
  {
    id: "iron_wake",
    name: "The Iron Wake",
    setting: "The North (Silver Marches / Spine of the World)",
    tone: "Heroic / Tactical",
    description: `Palischuk burned in a single night. The half-orc city of smiths and shield-maidens, which stood for three centuries, is now ash and bone. The survivors speak of a warlord named Aragway—not a brute, but a general. He rides a frost dragon from the Spine of the World. His army of three thousand orcs, half-orcs, goblins, and ogres marches not for plunder, but for dominion.

They say his black helm whispers. They say it broke the dragon's will in nine heartbeats. He offers every city one choice: kneel, and your people become the foundation of a new empire. Resist, and you become the mortar.

The lords of Faerûn bicker. The Harpers watch and wait. But you have seen the razed farmsteads, the chained prisoners, the goblin raiders wearing half-orc sergeant's stripes. This is the story of free peoples standing against the iron fist. Of dragon-fire met with courage. Of a helm that breaks wills—and the wills that refuse to break.`,
    initialHook: `*The morning sun is choked by smoke on the horizon. A half-dozen ragged survivors from Palischuk stumble into your camp, their eyes hollow. One of them, a one-armed shield-maiden named Threnn, grips your arm.*

"Aragway is three days behind us. He has a dragon, three thousand killers, and a helm that eats souls. Every town between here and Silverymoon will burn unless someone rallies the lords. The Harpers are too slow. The lords are too scared."

*She presses a tarnished compass into your hand.*

"This belonged to my father. It points to an old dwarven cache – weapons, maybe a secret. Go. I'll gather who I can and meet you at the Ironfast."

What do you do?`,
    toneClass: "tone-heroic"
  },
  {
    id: "crimson_rift",
    name: "The Crimson Rift",
    setting: "Athkatla / Thunder Peaks / Western Faerûn",
    tone: "High Heroism / Desperate Last Stand",
    description: `"The merchant lords of Athkatla speak of a miracle: a young heiress named Seren Vaskar, whose fortune doubled overnight after her father's mysterious death. She buys iron, slaves, and masons by the thousand. She says she is building a monument to her father's memory. She lies.

Deep in the Thunder Peaks, her workers have carved a colossal archway into a mountain. When the sun sets, the stone bleeds light. When the wind blows, it smells of brimstone. Goblins raiding the lowlands now flee from things with wings and barbed tails. Farmers vanish. Villages wake to find their children's shadows missing.

The demon lord Saramok the Screaming Hunger has waited ten thousand years for this. His tanarukk legions—half-demon, half-orc berserkers—stand ready beyond the Rift. Seren Vaskar promised him a world to devour. In return, he will make her a queen of ashes.

The portal is not yet complete. It needs one final ingredient: thousands of souls, offered in a single night of blood. The sacrifices are already being rounded up.

You are not generals. You are not chosen by prophecy. You are the only ones who have seen the truth beneath the rumors. And you are the only ones close enough to stop the slaughter before the Rift tears open.

This is the story of a portal, a pact, and a people who refuse to kneel to the abyss."`,
    initialHook: `*The evening air in Waymoot carries the scent of smoke from the east. A merchant caravan arrived this morning—or what was left of it. The guards are dead. The cargo is untouched. But every victim has a burned handprint seared into their face.*

*A dwarf named Dorrik Stonehand sits in the corner of the tavern, nursing a mug of ale with trembling hands. He escaped from a place he calls "the Riftworks"—a massive construction site hidden in the Thunder Peaks. He mutters about a young heiress, a stone arch that bleeds crimson light, and something winged that hunts the night.*

*He looks at you with haunted eyes.*

"If you've got steel in your spine and foolsblood in your veins, you'll want to see what I saw. But I warn you—some doors are built to keep things out. That one was built to let something in."

What do you do?`,
    toneClass: "tone-heroic"
  }
];

/* ========== COMBAT TRACKER STATE ========== */
let activeCombat = {
  active: false,
  round: 1,
  currentTurnIndex: 0,
  participants: []
};

/* ========== ENCUMBRANCE STATE ========== */
let encumbranceInterval = null;

/* ========== UTILITY FUNCTIONS ========== */
function getProficiencyBonus(level) { return proficiencyBonusByLevel[Math.min(20, Math.max(1, level))] || 2; }
function calculateModifier(score) { return Math.floor((score - 10) / 2); }

function getAbilityIncreaseForRace(raceName, subraceName) {
  const race = races[raceName];
  if (!race) return {};
  const subrace = race.subraces.find(s => s.name === subraceName);
  return subrace ? subrace.abilityIncrease : {};
}

function getCurrentRacialBonuses() {
  let bonuses = getAbilityIncreaseForRace(selectedRace, selectedSubrace);
  return bonuses;
}

function getPointBuyCost(base) {
  return pointBuyCosts[base] || 0;
}

function computeBaseFromFinal(ability) {
  const racialBonuses = getCurrentRacialBonuses();
  const bonus = racialBonuses[ability] || 0;
  return finalScores[ability] - bonus;
}

function updateAbilityScoresUI() {
  const container = document.getElementById("abilityScoresTable");
  if (!container) return;
  const racialBonuses = getCurrentRacialBonuses();
  let html = `<div class="ability-row"><span class="ability-name">Ability</span><span>Final Score</span><span>Modifier</span><span>Cost (base)</span><span></span></div>`;
  for (let ab of abilities) {
    const finalVal = finalScores[ab];
    const mod = calculateModifier(finalVal);
    const racialBonus = racialBonuses[ab] || 0;
    const base = finalVal - racialBonus;
    const cost = getPointBuyCost(base);
    html += `<div class="ability-row">
      <span class="ability-name">${ab}</span>
      <input type="number" class="ability-score-input" data-ability="${ab}" value="${finalVal}" min="${8 + racialBonus}" max="${15 + racialBonus}" step="1">
      <span class="ability-mod">${mod >=0 ? "+"+mod : mod}</span>
      <span class="point-cost">${cost}</span>
      <div><button class="small-btn inc" data-ability="${ab}">+</button><button class="small-btn dec" data-ability="${ab}">-</button></div>
    </div>`;
  }
  container.innerHTML = html;
  let totalPointsSpent = 0;
  for (let ab of abilities) {
    const racialBonus = racialBonuses[ab] || 0;
    const base = finalScores[ab] - racialBonus;
    totalPointsSpent += getPointBuyCost(base);
  }
  document.getElementById("pointBuyPoints").innerText = startingPoints - totalPointsSpent;

  document.querySelectorAll(".ability-score-input").forEach(input => {
    input.addEventListener("change", (e) => {
      let newVal = parseInt(e.target.value, 10);
      if (isNaN(newVal)) newVal = 8;
      const ab = e.target.dataset.ability;
      const racialBonus = racialBonuses[ab] || 0;
      const minVal = 8 + racialBonus;
      const maxVal = 15 + racialBonus;
      newVal = Math.min(maxVal, Math.max(minVal, newVal));
      const oldBase = finalScores[ab] - racialBonus;
      const newBase = newVal - racialBonus;
      const oldCost = getPointBuyCost(oldBase);
      const newCost = getPointBuyCost(newBase);
      let totalSpent = 0;
      for (let a of abilities) {
        const r = racialBonuses[a] || 0;
        const base = (a === ab ? newBase : finalScores[a] - r);
        totalSpent += getPointBuyCost(base);
      }
      if (totalSpent <= startingPoints) {
        finalScores[ab] = newVal;
        updateAbilityScoresUI();
      } else {
        e.target.value = finalScores[ab];
      }
    });
  });
  document.querySelectorAll(".inc").forEach(btn => {
    btn.addEventListener("click", () => {
      const ab = btn.dataset.ability;
      const racialBonus = racialBonuses[ab] || 0;
      const maxVal = 15 + racialBonus;
      if (finalScores[ab] < maxVal) {
        const newVal = finalScores[ab] + 1;
        const newBase = newVal - racialBonus;
        let totalSpent = 0;
        for (let a of abilities) {
          const r = racialBonuses[a] || 0;
          const base = (a === ab ? newBase : finalScores[a] - r);
          totalSpent += getPointBuyCost(base);
        }
        if (totalSpent <= startingPoints) {
          finalScores[ab] = newVal;
          updateAbilityScoresUI();
        }
      }
    });
  });
  document.querySelectorAll(".dec").forEach(btn => {
    btn.addEventListener("click", () => {
      const ab = btn.dataset.ability;
      const racialBonus = racialBonuses[ab] || 0;
      const minVal = 8 + racialBonus;
      if (finalScores[ab] > minVal) {
        finalScores[ab] = finalScores[ab] - 1;
        updateAbilityScoresUI();
      }
    });
  });
  updateFinalScoresDisplay();
}

function updateFinalScoresDisplay() {
  const container = document.getElementById("finalScoresTable");
  if (!container) return;
  let html = `<div class="ability-row"><span class="ability-name">Ability</span><span>Score</span><span>Modifier</span></div>`;
  for (let ab of abilities) {
    const score = finalScores[ab];
    const mod = calculateModifier(score);
    html += `<div class="final-score-row"><span>${ab}</span><span>${score}</span><span>${mod >=0 ? "+"+mod : mod}</span></div>`;
  }
  container.innerHTML = html;
  const anyOver20 = Object.values(finalScores).some(s => s > 20);
  document.getElementById("abilityWarning").innerText = anyOver20 ? "Warning: Some final scores exceed 20. Reduce base scores." : "";
}

function recommendedSpread() {
  const racialBonuses = getCurrentRacialBonuses();
  const recommendedBase = [15,14,13,12,10,8];
  for (let i = 0; i < abilities.length; i++) {
    const ab = abilities[i];
    const bonus = racialBonuses[ab] || 0;
    finalScores[ab] = recommendedBase[i] + bonus;
  }
  updateAbilityScoresUI();
}

function randomAbilities() {
  const racialBonuses = getCurrentRacialBonuses();
  let attempts = 0;
  while (attempts < 100) {
    let newFinal = {};
    for (let ab of abilities) {
      const bonus = racialBonuses[ab] || 0;
      const base = Math.floor(Math.random() * 8) + 8;
      newFinal[ab] = base + bonus;
    }
    let totalCost = 0;
    for (let ab of abilities) {
      const bonus = racialBonuses[ab] || 0;
      const base = newFinal[ab] - bonus;
      totalCost += getPointBuyCost(base);
    }
    if (totalCost <= startingPoints) {
      finalScores = newFinal;
      updateAbilityScoresUI();
      break;
    }
    attempts++;
  }
}

function resetAbilities() {
  const racialBonuses = getCurrentRacialBonuses();
  for (let ab of abilities) {
    const bonus = racialBonuses[ab] || 0;
    finalScores[ab] = 8 + bonus;
  }
  updateAbilityScoresUI();
}

function getRacialTraitsHTML(raceName, subraceName) {
  const race = races[raceName];
  if (!race) return "";
  const subrace = race.subraces.find(s => s.name === subraceName);
  if (!subrace) return "";
  let html = `<h4>Racial Traits</h4><ul>`;
  for (let [ability, inc] of Object.entries(subrace.abilityIncrease)) {
    html += `<li>+${inc} ${ability}</li>`;
  }
  html += `<li>Speed: ${subrace.speed} ft.</li>`;
  if (subrace.darkvision) html += `<li>Darkvision ${subrace.darkvision} ft.</li>`;
  html += `<li>Languages: ${subrace.languages.join(", ")}</li>`;
  subrace.additionalTraits.forEach(t => html += `<li>${t}</li>`);
  // Dragonborn draconic ancestry
  if (raceName === "Dragonborn") {
    const ancestry = dragonAncestries.find(a => a.name === selectedDragonbornAncestry);
    if (ancestry) {
      html += `<li>Breath Weapon: ${ancestry.damageType} damage, ${ancestry.breathShape}, ${ancestry.save} save</li>`;
      html += `<li>Damage Resistance: ${ancestry.resistance}</li>`;
    }
  }
  html += `</ul>`;
  return html;
}

function getClassSummaryHTML(className) {
  const cls = classes[className];
  if (!cls) return "";
  return `<h4>Class Features</h4>
    <ul>
      <li>Hit Die: ${cls.hitDie}</li>
      <li>Primary Ability: ${cls.primaryAbility}</li>
      <li>Saving Throws: ${cls.savingThrows.join(", ")}</li>
      <li>Armor Proficiencies: ${cls.armorProficiencies.join(", ")}</li>
      <li>Weapon Proficiencies: ${cls.weaponProficiencies.join(", ")}</li>
      <li>Skills: choose ${cls.skillChoices} from ${cls.skillOptions.join(", ")}</li>
    </ul>`;
}

function updateRacialTraitsPanel() {
  const panel = document.getElementById("racialTraitsPanel");
  if (panel) panel.innerHTML = getRacialTraitsHTML(selectedRace, selectedSubrace);
  // High Elf cantrip dropdown
  const heContainer = document.getElementById("highElfCantripContainer");
  if (selectedRace === "Elf" && selectedSubrace === "High Elf") {
    heContainer.style.display = "block";
    const select = document.getElementById("highElfCantripSelect");
    if (select && select.options.length === 0) {
      const wizardCantrips = spellsDatabase.Cantrips.filter(s => s.classes.includes("Wizard"));
      select.innerHTML = wizardCantrips.map(c => `<option value="${c.name}">${c.name}</option>`).join("");
      if (chosenHighElfCantrip) select.value = chosenHighElfCantrip;
      else { select.value = wizardCantrips[0]?.name || ""; chosenHighElfCantrip = wizardCantrips[0]?.name || ""; }
    }
  } else {
    heContainer.style.display = "none";
  }
}
function updateClassSummaryPanel() {
  const panel = document.getElementById("classSummaryPanel");
  if (panel) panel.innerHTML = getClassSummaryHTML(selectedClass);
  // Saving throws read-only display
  const stList = document.getElementById("savingThrowsList");
  const cls = classes[selectedClass];
  if (stList && cls) {
    stList.innerHTML = cls.savingThrows.map(st => `<span class="save-tag">${st}</span>`).join(" ");
  }
}
function updateSubraceDropdown() {
  const subraceSelect = document.getElementById("wizardSubrace");
  if (!subraceSelect) return;
  const race = races[selectedRace];
  if (race && race.subraces) {
    subraceSelect.innerHTML = race.subraces.map(s => `<option value="${s.name}">${s.name}</option>`).join("");
    selectedSubrace = race.subraces[0].name;
  } else { subraceSelect.innerHTML = `<option value="">None</option>`; selectedSubrace = ""; }
}
function updateSubclassDropdown() {
  const subclassSelect = document.getElementById("wizardSubclass");
  if (!subclassSelect) return;
  const cls = classes[selectedClass];
  if (cls && cls.subclasses) {
    subclassSelect.innerHTML = `<option value="">None (choose later)</option>` + cls.subclasses.map(sc => `<option value="${sc}">${sc}</option>`).join("");
    selectedSubclass = "";
  } else subclassSelect.innerHTML = `<option value="">None</option>`;
  updatePactBoonUI();
}
function updatePactBoonUI() {
  const field = document.getElementById("pactBoonField");
  const select = document.getElementById("wizardPactBoon");
  if (!field || !select) return;
  if (selectedClass === "Warlock") {
    field.style.display = "block";
    // Only populate if empty (preserve selection)
    if (select.options.length === 0) {
      select.innerHTML = `<option value="">— Choose Pact Boon —</option>`
        + pactBoonOptions.map(p => `<option value="${p}">${p}</option>`).join("");
    }
  } else {
    field.style.display = "none";
    selectedPactBoon = "";
  }
}
function updateVariantHumanUI() {
  // Variant Human removed – no action needed
}

function updateDragonbornUI() {
  const container = document.getElementById("dragonbornAncestryContainer");
  if (selectedRace === "Dragonborn") {
    container.style.display = "block";
    const select = document.getElementById("dragonbornAncestrySelect");
    if (select && select.options.length === 0) {
      select.innerHTML = dragonAncestries.map(a => `<option value="${a.name}">${a.name} (${a.damageType})</option>`).join("");
      select.value = dragonAncestries[0].name;
      selectedDragonbornAncestry = dragonAncestries[0].name;
    }
  } else {
    container.style.display = "none";
  }
}

/* ── Flavor Description Helpers ── */
function updateRaceDescription() {
  const descBox = document.getElementById("raceDescText");
  if (!descBox) return;
  const key = selectedSubrace;
  const description = raceDescriptions[key] || `${selectedRace} (${selectedSubrace}) – A classic adventuring folk.`;
  descBox.innerText = description;
}

function updateClassDescription() {
  const descBox = document.getElementById("classDescText");
  if (!descBox) return;
  const description = classDescriptions[selectedClass] || `${selectedClass} – A core D&D class.`;
  descBox.innerText = description;
}

function updateBackgroundDescription() {
  const descBox = document.getElementById("bgDescText");
  if (!descBox) return;
  const description = backgroundDescriptions[selectedBackground] || `${selectedBackground} background – A classic D&D background.`;
  descBox.innerText = description;
}

function updateSubclassDescription() {
  const panel = document.getElementById("subclassDescPanel");
  const descBox = document.getElementById("subclassDescText");
  if (!panel || !descBox) return;
  if (selectedSubclass && selectedSubclass !== "" && subclassDescriptions[selectedSubclass]) {
    panel.style.display = "block";
    descBox.innerText = subclassDescriptions[selectedSubclass];
  } else if (selectedSubclass && selectedSubclass !== "") {
    panel.style.display = "block";
    descBox.innerText = `"${selectedSubclass}" – A specialized path for the ${selectedClass}.`;
  } else {
    panel.style.display = "none";
  }
}

function getSpellSlotsForClass(className, level) {
  // Full casters
  if (["Bard","Cleric","Druid","Sorcerer","Wizard"].includes(className)) {
    if (level === 1) return {1:2};
    if (level === 2) return {1:3};
    if (level === 3) return {1:4,2:2};
    if (level === 4) return {1:4,2:3};
    if (level === 5) return {1:4,2:3,3:2};
    if (level === 6) return {1:4,2:3,3:3};
    if (level === 7) return {1:4,2:3,3:3,4:1};
    if (level === 8) return {1:4,2:3,3:3,4:2};
    if (level === 9) return {1:4,2:3,3:3,4:3,5:1};
    if (level >= 10) return {1:4,2:3,3:3,4:3,5:2};
  }
  // Warlock
  else if (className === "Warlock") {
    let slotLevel = Math.min(5, Math.ceil(level / 2));
    let slotCount = 2;
    if (level >= 17) slotCount = 4;
    else if (level >= 11) slotCount = 3;
    return {[slotLevel]: slotCount};
  }
  // Half-casters (Paladin, Ranger, Artificer)
  else if (["Paladin","Ranger","Artificer"].includes(className)) {
    if (level < 2) return {};
    if (level === 2) return {1:2};
    if (level === 3) return {1:3};
    if (level === 4) return {1:3};
    if (level === 5) return {1:4,2:2};
    if (level === 6) return {1:4,2:2};
    if (level === 7) return {1:4,2:3};
    if (level === 8) return {1:4,2:3};
    if (level === 9) return {1:4,2:3,3:2};
    if (level === 10) return {1:4,2:3,3:2};
    if (level === 11) return {1:4,2:3,3:3};
    if (level === 12) return {1:4,2:3,3:3};
    if (level === 13) return {1:4,2:3,3:3,4:1};
    if (level === 14) return {1:4,2:3,3:3,4:1};
    if (level === 15) return {1:4,2:3,3:3,4:2};
    if (level === 16) return {1:4,2:3,3:3,4:2};
    if (level === 17) return {1:4,2:3,3:3,4:3,5:1};
    if (level === 18) return {1:4,2:3,3:3,4:3,5:1};
    if (level >= 19) return {1:4,2:3,3:3,4:3,5:2};
  }
  return {};
}

function getSpellShortDescription(spell) {
  // Generate a one-line summary
  if (spell.description) {
    // Try to extract damage or key info
    if (spell.description.includes("damage")) {
      const damageMatch = spell.description.match(/(\d+d\d+)/);
      const damage = damageMatch ? damageMatch[0] : "";
      if (damage) return `${damage} ${spell.school}, ${spell.range}`;
    }
    if (spell.description.includes("heal")) return `Healing, ${spell.range}`;
    if (spell.description.includes("save")) return `Save ends, ${spell.duration}`;
    return `${spell.school}, ${spell.range}`;
  }
  return `${spell.school}, ${spell.range}`;
}

/* ── Step 4 UI helpers ── */

function switchSpellTab(tab) {
  const panelC = document.getElementById('panelCantrips');
  const panelS = document.getElementById('panelSpells');
  const tabC   = document.getElementById('tabCantrips');
  const tabS   = document.getElementById('tabSpells');
  if (tab === 'cantrips') {
    panelC.style.display = ''; panelS.style.display = 'none';
    tabC.classList.add('active'); tabS.classList.remove('active');
  } else {
    panelC.style.display = 'none'; panelS.style.display = '';
    tabS.classList.add('active'); tabC.classList.remove('active');
  }
}

function reRenderSpellGrids() {
  updateSpellUI();
}

function updateTabCounters() {
  const maxC  = parseInt(document.getElementById('maxCantrips')?.innerText) || 0;
  const maxS  = parseInt(document.getElementById('maxSpells')?.innerText) || 0;
  const selC  = chosenCantrips.length;
  const selS  = chosenSpells.length;
  const tcC   = document.getElementById('tabCounterCantrips');
  const tcS   = document.getElementById('tabCounterSpells');
  if (tcC) { tcC.textContent = `${selC} / ${maxC}`; tcC.classList.toggle('maxed', selC >= maxC && maxC > 0); }
  if (tcS) { tcS.textContent = `${selS} / ${maxS}`; tcS.classList.toggle('maxed', selS >= maxS && maxS > 0); }
}

function updateEquipmentSummary() {
  // Armor line
  const armorSel = document.getElementById('armorSelect');
  const armorText = document.getElementById('summaryArmorText');
  if (armorText) {
    const val = armorSel ? armorSel.value : '';
    const shield = document.getElementById('shieldCheck')?.checked;
    let parts = [];
    if (val) parts.push(val);
    if (shield) parts.push('Shield (+2 AC)');
    armorText.textContent = parts.length ? parts.join(', ') : '—';
  }
  // Weapons line
  const weaponsText = document.getElementById('summaryWeaponsText');
  if (weaponsText) {
    if (selectedWeapons && selectedWeapons.length) {
      weaponsText.innerHTML = selectedWeapons.map(w => `<div class="eq-summary-item"><span class="eq-summary-item-name">${w.name}</span><span class="eq-summary-item-detail">×${w.quantity}</span></div>`).join('');
    } else {
      weaponsText.textContent = '—';
    }
  }
  // Extra items
  const extraText = document.getElementById('summaryExtraText');
  if (extraText) {
    const raw = document.getElementById('extraItems')?.value.trim();
    if (raw) {
      extraText.innerHTML = raw.split('\n').filter(Boolean).map(l => `<div>• ${l.trim()}</div>`).join('');
    } else {
      extraText.textContent = '—';
    }
  }
}

/* ── Skill Proficiencies UI ── */

const allSkillsList = [
  "Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception",
  "History", "Insight", "Intimidation", "Investigation", "Medicine",
  "Nature", "Perception", "Performance", "Persuasion", "Religion",
  "Sleight of Hand", "Stealth", "Survival"
];

function getRaceBonusSkillCount(raceName, subraceName) {
  if (raceName === "Half-Elf") return 2;
  if (raceName === "Half-Orc" && subraceName === "Half-Orc") return 1; // Menacing gives Intimidation, but that's a trait, not a choice
  // Half-elves get 2 extra; variant human gets 1 skill from feat, handled elsewhere
  return 0;
}

function updateSkillUI() {
  const cls = classes[selectedClass];
  if (!cls) return;
  const maxClassSkills = cls.skillChoices;
  document.getElementById("classSkillsMax").innerText = maxClassSkills;
  const classSkillOptions = cls.skillOptions;
  const container = document.getElementById("classSkillsList");
  if (!container) return;
  container.innerHTML = classSkillOptions.map(skill => `
    <label><input type="checkbox" value="${skill}" class="class-skill-cb" ${chosenClassSkills.includes(skill) ? 'checked' : ''}> ${skill}</label>
  `).join("");
  const checkboxes = container.querySelectorAll(".class-skill-cb");
  const counterSpan = document.getElementById("classSkillsCounter");
  function updateClassCount() {
    const count = Array.from(checkboxes).filter(cb => cb.checked).length;
    counterSpan.innerText = `${count} / ${maxClassSkills}`;
    if (count > maxClassSkills) {
      const lastChecked = Array.from(checkboxes).filter(cb => cb.checked).pop();
      if (lastChecked) lastChecked.checked = false;
      updateClassCount();
      alert(`You can select at most ${maxClassSkills} class skills.`);
    }
    chosenClassSkills = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);
  }
  checkboxes.forEach(cb => cb.addEventListener("change", updateClassCount));
  updateClassCount();
  // Background skills (read-only)
  const bg = backgrounds[selectedBackground];
  const bgContainer = document.getElementById("backgroundSkillsDisplay");
  if (bg && bg.skillProficiencies) {
    bgContainer.innerHTML = `<ul>${bg.skillProficiencies.map(s => `<li>${s}</li>`).join("")}</ul>`;
  } else {
    bgContainer.innerHTML = `<span class="eq-summary-empty">None</span>`;
  }
  // Race bonus skills (half-elf, etc.)
  const raceBonusMax = getRaceBonusSkillCount(selectedRace, selectedSubrace);
  document.getElementById("raceBonusMax").innerText = raceBonusMax;
  const raceContainer = document.getElementById("raceBonusSkillsContainer");
  if (raceBonusMax > 0) {
    raceContainer.style.display = "block";
    const raceGrid = document.getElementById("raceBonusSkillsList");
    raceGrid.innerHTML = allSkillsList.map(skill => `
      <label><input type="checkbox" value="${skill}" class="race-skill-cb" ${chosenRaceBonusSkills.includes(skill) ? 'checked' : ''}> ${skill}</label>
    `).join("");
    const raceCbs = raceGrid.querySelectorAll(".race-skill-cb");
    const raceCounter = document.getElementById("raceBonusCounter");
    function updateRaceCount() {
      const count = Array.from(raceCbs).filter(cb => cb.checked).length;
      raceCounter.innerText = `${count} / ${raceBonusMax}`;
      if (count > raceBonusMax) {
        const lastChecked = Array.from(raceCbs).filter(cb => cb.checked).pop();
        if (lastChecked) lastChecked.checked = false;
        updateRaceCount();
        alert(`Race bonus skills max ${raceBonusMax}.`);
      }
      chosenRaceBonusSkills = Array.from(raceCbs).filter(cb => cb.checked).map(cb => cb.value);
    }
    raceCbs.forEach(cb => cb.addEventListener("change", updateRaceCount));
    updateRaceCount();
  } else {
    raceContainer.style.display = "none";
  }
}

/* ── Class Starting Equipment Choices ── */

function renderClassEquipmentChoices() {
  // This is now handled by renderPackSelection
}

function renderPackSelection() {
  const container = document.getElementById("packSelection");
  if (!container) return;
  let availablePacks = [];
  for (let [packName, data] of Object.entries(equipmentPacks)) {
    if (data.classes.includes("any") || data.classes.includes(selectedClass)) {
      availablePacks.push(packName);
    }
  }
  if (availablePacks.length === 0) {
    container.innerHTML = `<div class="field-note">No packs available for this class.</div>`;
    return;
  }
  if (!selectedPack || !availablePacks.includes(selectedPack)) {
    selectedPack = availablePacks[0];
  }
  let html = `<div class="pack-radio-group">`;
  availablePacks.forEach(pack => {
    html += `<label><input type="radio" name="equipmentPack" value="${pack}" ${selectedPack === pack ? 'checked' : ''}> ${pack} (${equipmentPacks[pack].cost} gp)</label>`;
  });
  html += `</div>`;
  container.innerHTML = html;
  document.querySelectorAll('input[name="equipmentPack"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      selectedPack = e.target.value;
      updatePackContentsDisplay();
      updateEquipmentSummary();
    });
  });
  updatePackContentsDisplay();
}

function updatePackContentsDisplay() {
  const contentsDiv = document.getElementById("packContentsDisplay");
  if (!selectedPack || !equipmentPacks[selectedPack]) {
    if (contentsDiv) contentsDiv.innerHTML = "";
    return;
  }
  const pack = equipmentPacks[selectedPack];
  if (contentsDiv) {
    contentsDiv.innerHTML = `<div class="pack-contents-title">Contents:</div><ul>${pack.contents.map(item => `<li>${item}</li>`).join("")}</ul><div class="field-note">Value: ${pack.cost} gp.</div>`;
  }
}

function renderSpellGrid(containerId, spellList, isCantrip, maxSelections, selectedSet, onSelectionChange) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const filterName = document.getElementById(`${containerId}-filter-name`)?.value.toLowerCase() || "";
  const filterSchool = document.getElementById(`${containerId}-filter-school`)?.value || "";
  const filterLevel = document.getElementById(`${containerId}-filter-level`)?.value ? parseInt(document.getElementById(`${containerId}-filter-level`).value) : null;
  
  let filtered = [...spellList];
  if (filterName) filtered = filtered.filter(s => s.name.toLowerCase().includes(filterName));
  if (filterSchool) filtered = filtered.filter(s => s.school === filterSchool);
  if (filterLevel !== null && !isCantrip) filtered = filtered.filter(s => s.level === filterLevel);
  
  let html = `<div class="spell-grid">`;
  for (let spell of filtered) {
    const isSelected = selectedSet.has(spell.name);
    const detailId = `spell-detail-${spell.name.replace(/[^a-zA-Z0-9]/g, '_')}`;
    html += `
      <div class="spell-card ${isSelected ? 'selected' : ''}" data-spell-name="${spell.name}">
        <div class="spell-card-header">
          <label class="spell-checkbox">
            <input type="checkbox" ${isSelected ? 'checked' : ''} ${selectedSet.size >= maxSelections && !isSelected ? 'disabled' : ''}>
          </label>
          <span class="spell-name">${spell.name}</span>
          <span class="spell-school-level">${spell.school} ${spell.level > 0 ? spell.level : 'Cantrip'}</span>
          <button class="spell-expand-btn" data-target="${detailId}">▼</button>
        </div>
        <div class="spell-short-desc">${getSpellShortDescription(spell)}</div>
        <div class="spell-detailed" id="${detailId}" style="display:none;">
          <div><strong>Casting Time:</strong> ${spell.castingTime || '1 action'}</div>
          <div><strong>Range:</strong> ${spell.range || 'Self'}</div>
          <div><strong>Components:</strong> ${(spell.components || ['V','S']).join(', ')}</div>
          <div><strong>Duration:</strong> ${spell.duration || 'Instantaneous'}</div>
          <div><strong>Description:</strong> ${spell.description || 'No description available.'}</div>
        </div>
      </div>
    `;
  }
  html += `</div>`;
  container.innerHTML = html;
  
  // Attach event listeners after rendering
  container.querySelectorAll('.spell-card input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', (e) => {
      e.stopPropagation();
      const card = cb.closest('.spell-card');
      const spellName = card.dataset.spellName;
      if (cb.checked) {
        if (selectedSet.size < maxSelections) {
          selectedSet.add(spellName);
          card.classList.add('selected');
          onSelectionChange(selectedSet);
          if (selectedSet.size >= maxSelections) {
            container.querySelectorAll('.spell-card input[type="checkbox"]:not(:checked)').forEach(oth => oth.disabled = true);
          }
        } else {
          cb.checked = false;
          alert(`You can only select up to ${maxSelections} ${isCantrip ? 'cantrips' : 'spells'}.`);
        }
      } else {
        selectedSet.delete(spellName);
        card.classList.remove('selected');
        onSelectionChange(selectedSet);
        container.querySelectorAll('.spell-card input[type="checkbox"]').forEach(oth => oth.disabled = false);
      }
    });
  });
  container.querySelectorAll('.spell-expand-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = btn.dataset.target;
      const detailDiv = document.getElementById(targetId);
      if (detailDiv) {
        const isVisible = detailDiv.style.display === 'block';
        detailDiv.style.display = isVisible ? 'none' : 'block';
        btn.textContent = isVisible ? '▼' : '▲';
      }
    });
  });
}

function updateSpellUI() {
  const cls = classes[selectedClass];
  if (!cls || !cls.spellcasting) {
    document.getElementById("spellsSection").style.display = "none";
    return;
  }
  document.getElementById("spellsSection").style.display = "block";
  document.getElementById("spellcastingAbility").innerText = cls.spellcastingAbility;
  const level = characterLevel;
  const spellSlots = getSpellSlotsForClass(selectedClass, level);
  let slotsHtml = `<table><tr><th>Level</th><th>Slots</th></tr>`;
  for (let i=1; i<=5; i++) if (spellSlots[i]) slotsHtml += `<tr><td>${i}</td><td>${spellSlots[i]}</td></tr>`;
  slotsHtml += `</table>`;
  document.getElementById("spellSlotsTable").innerHTML = slotsHtml;
  
  let maxCantrips = 0;
  if (selectedClass === "Bard") maxCantrips = 2 + (level>=4?1:0) + (level>=10?1:0);
  else if (selectedClass === "Cleric") maxCantrips = 3 + (level>=4?1:0) + (level>=10?1:0);
  else if (selectedClass === "Druid") maxCantrips = 2 + (level>=4?1:0) + (level>=10?1:0);
  else if (selectedClass === "Sorcerer") maxCantrips = 4 + (level>=4?1:0) + (level>=10?1:0);
  else if (selectedClass === "Warlock") maxCantrips = 2 + (level>=4?1:0) + (level>=10?1:0);
  else if (selectedClass === "Wizard") maxCantrips = 3 + (level>=4?1:0) + (level>=10?1:0);
  document.getElementById("maxCantrips").innerText = maxCantrips;
  
  const availableCantrips = classSpellLists[selectedClass]?.filter(s => s.level === 0) || [];
  renderSpellGrid("cantripGrid", availableCantrips, true, maxCantrips, new Set(chosenCantrips), (newSet) => {
    chosenCantrips = Array.from(newSet);
    document.getElementById("cantripsKnown").innerText = chosenCantrips.length;
    updateTabCounters();
  });
  
  let maxSpells = 0;
  if (selectedClass === "Bard") maxSpells = 4 + (level>1?1:0) + (level>2?1:0) + (level>3?1:0) + (level>4?1:0);
  else if (selectedClass === "Sorcerer") maxSpells = 2 + (level>1?1:0) + (level>2?1:0) + (level>3?1:0) + (level>4?1:0);
  else if (selectedClass === "Warlock") maxSpells = 2 + (level>1?1:0) + (level>2?1:0) + (level>3?1:0);
  else if (["Cleric","Druid","Wizard","Paladin","Ranger","Artificer"].includes(selectedClass)) {
    const abilityMod = calculateModifier(finalScores[cls.spellcastingAbility]);
    maxSpells = level + abilityMod;
  }
  document.getElementById("maxSpells").innerText = maxSpells;
  const availableSpells = classSpellLists[selectedClass]?.filter(s => s.level > 0 && s.level <= Math.min(5, Math.floor((level+1)/2))) || [];
  renderSpellGrid("spellGrid", availableSpells, false, maxSpells, new Set(chosenSpells), (newSet) => {
    chosenSpells = Array.from(newSet);
    document.getElementById("spellsKnownCount").innerText = chosenSpells.length;
    updateTabCounters();
  });
  updateTabCounters();
  // Subclass spells (always prepared) in wizard
  const subSpells = subclassSpells[selectedSubclass];
  const subWizardDiv = document.getElementById("subclassSpellsWizard");
  const subListWizard = document.getElementById("subclassSpellsListWizard");
  if (subSpells && subSpells.length > 0 && subWizardDiv && subListWizard) {
    subWizardDiv.style.display = "block";
    subListWizard.innerHTML = subSpells.map(s => `<div class="spell-readonly-item">${s}</div>`).join("");
  } else if (subWizardDiv) {
    subWizardDiv.style.display = "none";
  }
}

// Helper: check if a weapon allows quantity selection
function weaponAllowsQuantity(weaponName) {
  const w = weaponsData[weaponName];
  if (!w) return false;
  // Throwable, not spear, not trident
  if (w.thrown && !w.excludeQuantity) return true;
  return false;
}

function updateEquipmentUI() {
  const cls = classes[selectedClass];
  if (!cls) return;
  
  // Armor selection
  const armorProfs = cls.armorProficiencies;
  let availableArmor = [];
  // Handle "All armor" as a special case (Paladin, Fighter)
  if (armorProfs.includes("All armor")) {
    availableArmor.push(...Object.keys(armorData).filter(a => ["Light", "Medium", "Heavy"].includes(armorData[a].category)));
  } else {
    if (armorProfs.includes("Light armor")) availableArmor.push(...Object.keys(armorData).filter(a => armorData[a].category === "Light"));
    if (armorProfs.includes("Medium armor")) availableArmor.push(...Object.keys(armorData).filter(a => armorData[a].category === "Medium"));
    if (armorProfs.includes("Heavy armor")) availableArmor.push(...Object.keys(armorData).filter(a => armorData[a].category === "Heavy"));
  }
  // Druid metal restriction
  if (selectedClass === "Druid") {
    const metalArmors = ["Chain shirt", "Scale mail", "Breastplate", "Half plate", "Ring mail", "Chain mail", "Splint", "Plate"];
    availableArmor = availableArmor.filter(a => !metalArmors.includes(a));
  }
  if (availableArmor.length) {
    let armorHtml = `<select id="armorSelect" class="sheet-input"><option value="">None</option>`;
    for (let arm of availableArmor) {
      const a = armorData[arm];
      armorHtml += `<option value="${arm}">${arm} (AC ${a.ac}, ${a.weight} lb, ${a.cost})</option>`;
    }
    armorHtml += `</select>`;
    document.getElementById("armorSelection").innerHTML = armorHtml;
    const armorSelect = document.getElementById("armorSelect");
    if (armorSelect) {
      armorSelect.value = selectedArmor;
      armorSelect.addEventListener("change", (e) => { selectedArmor = e.target.value; updateEquipmentSummary(); });
    }
  } else {
    document.getElementById("armorSelection").innerHTML = `<div class="field-note">No armor proficiency or none available.</div>`;
  }
  
  // Shield (if proficient)
  if (cls.armorProficiencies.includes("Shields")) {
    document.getElementById("shieldSelection").style.display = "block";
    const shieldCheck = document.getElementById("shieldCheck");
    if (shieldCheck) {
      shieldCheck.checked = hasShield;
      shieldCheck.addEventListener("change", (e) => { hasShield = e.target.checked; updateEquipmentSummary(); });
    }
  } else {
    document.getElementById("shieldSelection").style.display = "none";
  }
  
  // Weapons: show grid of proficient weapons, max 2 distinct selections
  const weaponProfs = cls.weaponProficiencies;
  const isSimple = weaponProfs.includes("Simple");
  const isMartial = weaponProfs.includes("Martial");
  let eligibleWeapons = [];
  for (let [name, data] of Object.entries(weaponsData)) {
    if ((data.type === "simple" && isSimple) || (data.type === "martial" && isMartial)) {
      eligibleWeapons.push(name);
    }
  }
  const weaponGrid = document.getElementById("weaponGrid");
  if (eligibleWeapons.length) {
    let gridHtml = `<div class="weapon-checkbox-grid"><div class="weapon-grid-note">Select up to 2 different weapons. Throwable weapons (except spears/tridents) allow quantity 2–4.</div>`;
    for (let w of eligibleWeapons) {
      const data = weaponsData[w];
      const selected = selectedWeapons.find(sw => sw.name === w);
      const qty = selected ? selected.quantity : 1;
      const isThrowable = weaponAllowsQuantity(w);
      const showQty = isThrowable;
      gridHtml += `
        <div class="weapon-item" data-weapon-name="${w}">
          <label class="weapon-check-label">
            <input type="checkbox" class="weapon-check" data-weapon="${w}" ${selected ? 'checked' : ''}>
            <span class="weapon-name">${w}</span>
          </label>
          <span class="weapon-damage">${data.damage}</span>
          <span class="weapon-properties">${data.properties}</span>
          <span class="weapon-weight">${data.weight} lb</span>
          ${showQty ? `<input type="number" class="weapon-qty" data-weapon="${w}" value="${qty}" min="1" max="4" step="1" style="width:55px;" ${!selected ? 'disabled' : ''}>` : `<span class="weapon-qty-fixed">×1</span>`}
        </div>
      `;
    }
    gridHtml += `</div>`;
    weaponGrid.innerHTML = gridHtml;
    
    // Attach events with max selection enforcement
    const weaponChecks = weaponGrid.querySelectorAll(".weapon-check");
    const updateWeaponSelection = () => {
      // Count distinct selected weapons
      const selectedNames = Array.from(weaponChecks).filter(cb => cb.checked).map(cb => cb.dataset.weapon);
      if (selectedNames.length > 2) {
        // Too many, uncheck the last one
        alert("You can select at most two different weapons.");
        // Find the one that was just checked (last changed) – simplest: disable any extra check
        // We'll re‑evaluate after a short delay to allow the event to finish
        setTimeout(() => {
          const currentChecked = Array.from(weaponChecks).filter(cb => cb.checked);
          if (currentChecked.length > 2) {
            // Uncheck the last one (by index)
            currentChecked[currentChecked.length-1].checked = false;
            // Also remove from selectedWeapons
            const weaponName = currentChecked[currentChecked.length-1].dataset.weapon;
            selectedWeapons = selectedWeapons.filter(w => w.name !== weaponName);
          }
          // Refresh the UI to show correct qty states
          weaponGrid.querySelectorAll(".weapon-check").forEach(cb => {
            const wName = cb.dataset.weapon;
            const idx = selectedWeapons.findIndex(w => w.name === wName);
            const isChecked = cb.checked;
            const qtyInput = weaponGrid.querySelector(`.weapon-qty[data-weapon="${wName}"]`);
            if (isChecked && idx === -1) {
              selectedWeapons.push({ name: wName, quantity: weaponAllowsQuantity(wName) ? 1 : 1 });
              if (qtyInput) { qtyInput.disabled = false; qtyInput.value = 1; }
            } else if (!isChecked && idx !== -1) {
              selectedWeapons.splice(idx,1);
              if (qtyInput) { qtyInput.disabled = true; }
            }
          });
          updateEquipmentSummary();
        }, 10);
      } else {
        // Normal update: sync selectedWeapons
        weaponGrid.querySelectorAll(".weapon-check").forEach(cb => {
          const wName = cb.dataset.weapon;
          const idx = selectedWeapons.findIndex(w => w.name === wName);
          const qtyInput = weaponGrid.querySelector(`.weapon-qty[data-weapon="${wName}"]`);
          if (cb.checked && idx === -1) {
            selectedWeapons.push({ name: wName, quantity: weaponAllowsQuantity(wName) ? 1 : 1 });
            if (qtyInput) { qtyInput.disabled = false; qtyInput.value = 1; }
          } else if (!cb.checked && idx !== -1) {
            selectedWeapons.splice(idx,1);
            if (qtyInput) { qtyInput.disabled = true; }
          }
        });
        updateEquipmentSummary();
      }
    };
    
    weaponChecks.forEach(cb => {
      cb.addEventListener("change", updateWeaponSelection);
    });
    
    weaponGrid.querySelectorAll(".weapon-qty").forEach(qty => {
      qty.addEventListener("change", (e) => {
        const weaponName = qty.dataset.weapon;
        let newQty = parseInt(qty.value, 10);
        if (isNaN(newQty) || newQty < 1) newQty = 1;
        if (newQty > 4) newQty = 4;
        const idx = selectedWeapons.findIndex(w => w.name === weaponName);
        if (idx >= 0) {
          selectedWeapons[idx].quantity = newQty;
        } else {
          selectedWeapons.push({ name: weaponName, quantity: newQty });
          const cb = weaponGrid.querySelector(`.weapon-check[data-weapon="${weaponName}"]`);
          if (cb && !cb.checked) cb.checked = true;
        }
        qty.value = newQty;
        updateEquipmentSummary();
      });
    });
    
    // Initial sync
    updateWeaponSelection();
  } else {
    weaponGrid.innerHTML = `<div class="field-note">No weapon proficiencies.</div>`;
  }
  
  // Background equipment display
  const bg = backgrounds[selectedBackground];
  if (bg) {
    document.getElementById("backgroundEquipmentDisplay").innerHTML = `<div class="equipment-choice"><label>Background Equipment</label><ul>${bg.equipment.map(e => `<li>${e}</li>`).join("")}</ul></div>`;
  }
  
  // Class starting choices – replaced by Adventuring Gear Pack selection
  
  // Currency presets
  document.getElementById("coinCP").value = 0;
  document.getElementById("coinSP").value = 0;
  document.getElementById("coinEP").value = 0;
  document.getElementById("coinGP").value = 150;
  document.getElementById("coinPP").value = 0;
  updateEquipmentSummary();
  updateSkillUI();
  renderPackSelection();
}

/* ── Subclass Features UI ── */

function renderFeatureGrid(containerId, optionsArray, selectedSet, maxAllowed, featureType) {
  const container = document.getElementById(containerId);
  if (!container) return;
  let html = `<div class="feature-grid">`;
  for (let opt of optionsArray) {
    const checked = selectedSet.includes(opt.name);
    html += `
      <div class="feature-card">
        <label>
          <input type="checkbox" value="${opt.name}" ${checked ? 'checked' : ''}>
          <strong>${opt.name}</strong>
        </label>
        ${opt.prerequisite ? `<div class="feature-desc" style="color:#C8A96E;">Prerequisite: ${opt.prerequisite}</div>` : ""}
        <div class="feature-desc">${opt.description}</div>
      </div>
    `;
  }
  html += `</div>`;
  container.innerHTML = html;

  const checkboxes = container.querySelectorAll('input[type="checkbox"]');
  const counterSpan = document.getElementById(`${featureType}Counter`);
  const updateCounter = () => {
    const count = Array.from(checkboxes).filter(cb => cb.checked).length;
    if (counterSpan) counterSpan.innerText = `${count} / ${maxAllowed}`;
    return count;
  };
  checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const count = updateCounter();
      if (cb.checked && count > maxAllowed) {
        cb.checked = false;
        alert(`You can select at most ${maxAllowed} ${featureType} options at level ${characterLevel}.`);
        updateCounter();
        return;
      }
      if (cb.checked) {
        if (!selectedSet.includes(cb.value)) selectedSet.push(cb.value);
      } else {
        const idx = selectedSet.indexOf(cb.value);
        if (idx !== -1) selectedSet.splice(idx, 1);
      }
    });
  });
  updateCounter();
}

function getAvailableInvocations(level) {
  const pact = selectedPactBoon || (currentCharacter && currentCharacter.pactBoon) || "";
  return eldritchInvocations.filter(inv => {
    // Level prerequisite check
    if (inv.prerequisite && inv.prerequisite.includes("level")) {
      const match = inv.prerequisite.match(/(\d+)/);
      if (match) {
        const reqLevel = parseInt(match[0], 10);
        if (level < reqLevel) return false;
      }
    }
    // Pact Boon prerequisite check
    if (inv.prerequisite && inv.prerequisite.includes("Pact of the")) {
      // Extract the pact name from prerequisite (e.g., "Pact of the Blade" from "5th level, Pact of the Blade")
      const pactMatch = inv.prerequisite.match(/(Pact of the \w+)/);
      if (pactMatch) {
        const requiredPact = pactMatch[1];
        if (pact !== requiredPact) return false;
      }
    }
    // Eldritch blast prerequisite (already passed level check)
    return true;
  });
}

function getMetamagicMax(level) {
  if (level >= 17) return 4;
  if (level >= 10) return 3;
  if (level >= 3) return 2;
  return 0;
}

function getInvocationsMax(level) {
  if (level >= 18) return 8;
  if (level >= 15) return 7;
  if (level >= 12) return 6;
  if (level >= 9) return 5;
  if (level >= 7) return 4;
  if (level >= 5) return 3;
  if (level >= 2) return 2;
  return 0;
}

function getManeuversMax(level) {
  if (level >= 15) return 7;
  if (level >= 10) return 5;
  if (level >= 7) return 5;
  if (level >= 3) return 3;
  return 0;
}

function getArcaneShotsMax(level) {
  if (level >= 18) return 5;
  if (level >= 15) return 4;
  if (level >= 10) return 3;
  if (level >= 7) return 3;
  if (level >= 3) return 2;
  return 0;
}

function updateSubclassFeaturesUI() {
  const section = document.getElementById("subclassFeaturesSection");
  if (!section) return;
  const cls = classes[selectedClass];
  if (!cls) { section.style.display = "none"; return; }

  // Metamagic (Sorcerer)
  const metaContainer = document.getElementById("metamagicContainer");
  const metaMax = getMetamagicMax(characterLevel);
  if (selectedClass === "Sorcerer" && metaMax > 0) {
    metaContainer.style.display = "block";
    renderFeatureGrid("metamagicGrid", metamagicOptions, chosenMetamagic, metaMax, "metamagic");
  } else {
    metaContainer.style.display = "none";
  }

  // Eldritch Invocations (Warlock)
  const invContainer = document.getElementById("invocationsContainer");
  const invMax = getInvocationsMax(characterLevel);
  if (selectedClass === "Warlock" && invMax > 0) {
    invContainer.style.display = "block";
    const available = getAvailableInvocations(characterLevel);
    renderFeatureGrid("invocationGrid", available, chosenInvocations, invMax, "invocations");
  } else {
    invContainer.style.display = "none";
  }

  // Battle Master Maneuvers (Fighter with Battle Master subclass)
  const manContainer = document.getElementById("maneuversContainer");
  const manMax = getManeuversMax(characterLevel);
  if (selectedClass === "Fighter" && selectedSubclass === "Battle Master" && manMax > 0) {
    manContainer.style.display = "block";
    renderFeatureGrid("maneuverGrid", battleMasterManeuvers, chosenManeuvers, manMax, "maneuvers");
  } else {
    manContainer.style.display = "none";
  }

  // Arcane Shots (Fighter with Arcane Archer subclass)
  const asContainer = document.getElementById("arcaneShotsContainer");
  const asMax = getArcaneShotsMax(characterLevel);
  if (selectedClass === "Fighter" && selectedSubclass === "Arcane Archer" && asMax > 0) {
    asContainer.style.display = "block";
    renderFeatureGrid("arcaneShotsGrid", arcaneShots, chosenArcaneShots, asMax, "arcaneShots");
  } else {
    asContainer.style.display = "none";
  }

  // Draconic Sorcerer ancestry
  const draconicDiv = document.getElementById("draconicSorcererContainer");
  if (selectedClass === "Sorcerer" && selectedSubclass === "Draconic Bloodline") {
    draconicDiv.style.display = "block";
    const select = document.getElementById("dragonSorcererAncestrySelect");
    if (select && select.options.length === 0) {
      select.innerHTML = dragonAncestries.map(a => `<option value="${a.name}">${a.name}</option>`).join("");
      if (!selectedSorcererAncestry) {
        selectedSorcererAncestry = dragonAncestries[0].name;
        select.value = selectedSorcererAncestry;
      }
    }
    if (select) select.value = selectedSorcererAncestry || dragonAncestries[0].name;
  } else {
    draconicDiv.style.display = "none";
  }

  // Show the whole section if any container is visible
  const anyVisible = ["metamagicContainer","invocationsContainer","maneuversContainer","arcaneShotsContainer","draconicSorcererContainer"]
    .some(id => document.getElementById(id)?.style.display === "block");
  section.style.display = anyVisible ? "block" : "none";
}

function updateWizardUI() {
  for (let i=1; i<=6; i++) {
    const stepDiv = document.getElementById(`wizard-step-${i}`);
    if (stepDiv) stepDiv.style.display = i === wizardStep ? "block" : "none";
  }
  document.querySelectorAll(".wizard-steps .step").forEach((step, idx) => {
    if (idx+1 === wizardStep) step.classList.add("active");
    else step.classList.remove("active");
  });
  document.getElementById("stepIndicator").innerText = `Step ${wizardStep} of 6`;
  const backBtn = document.getElementById("wizardBackBtn"), nextBtn = document.getElementById("wizardNextBtn"), finishBtn = document.getElementById("wizardFinishBtn");
  backBtn.disabled = (wizardStep === 1);
  if (wizardStep === 6) { nextBtn.style.display = "none"; finishBtn.style.display = "inline-block"; generateReview(); }
  else { nextBtn.style.display = "inline-block"; finishBtn.style.display = "none"; }
}

function nextStep() {
  if (wizardStep === 1) {
    selectedRace = document.getElementById("wizardRace").value;
    selectedSubrace = document.getElementById("wizardSubrace").value;
    selectedClass = document.getElementById("wizardClass").value;
    selectedSubclass = document.getElementById("wizardSubclass").value;
    selectedPactBoon = document.getElementById("wizardPactBoon")?.value || "";
    selectedBackground = document.getElementById("wizardBackground").value;
    characterLevel = parseInt(document.getElementById("wizardLevel").value, 10);
    updateVariantHumanUI();
    const racialBonuses = getCurrentRacialBonuses();
    for (let ab of abilities) {
      const bonus = racialBonuses[ab] || 0;
      finalScores[ab] = 8 + bonus;
    }
  } else if (wizardStep === 2) {
    characterName = document.getElementById("charName").value;
    characterAppearance = document.getElementById("charAppearance").value;
    characterBackstory = document.getElementById("charBackstory").value;
    characterTraits = document.getElementById("charTraits").value;
    selectedAlignment = document.getElementById("wizardAlignment").value;
    if (!characterName.trim()) { alert("Please enter a character name."); return; }
  } else if (wizardStep === 3) {
    for (let ab of abilities) {
      if (finalScores[ab] > 20) {
        alert(`${ab} final score exceeds 20. Adjust final scores.`);
        return;
      }
    }
  } else if (wizardStep === 4) {
    customItems = document.getElementById("extraItems").value;
  }
  wizardStep++;
  updateWizardUI();
  if (wizardStep === 3) {
    updateAbilityScoresUI();
    updateVariantHumanUI();
    const vh1 = document.getElementById("vhBonus1"), vh2 = document.getElementById("vhBonus2");
    if (vh1) { vh1.innerHTML = abilities.map(a => `<option value="${a}">${a}</option>`).join(""); vh2.innerHTML = abilities.map(a => `<option value="${a}">${a}</option>`).join(""); vh1.value = "Strength"; vh2.value = "Dexterity"; }
  } else if (wizardStep === 4) {
    updateEquipmentUI();
    updateSpellUI();
  } else if (wizardStep === 5) {
    updateSubclassFeaturesUI();
  }
}
function prevStep() { wizardStep--; updateWizardUI(); }
function generateReview() {
  const racialBonuses = getCurrentRacialBonuses();
  const hp = (classes[selectedClass].hitDie === "d6"?6: classes[selectedClass].hitDie === "d8"?8: classes[selectedClass].hitDie === "d10"?10:12) + calculateModifier(finalScores.Constitution);
  const reviewHtml = `
    <h3>Character Summary</h3>
    <p><strong>Name:</strong> ${characterName}</p>
    <p><strong>Race:</strong> ${selectedRace} (${selectedSubrace})</p>
    <p><strong>Class:</strong> ${selectedClass} ${selectedSubclass ? `(${selectedSubclass})` : ""}</p>
    <p><strong>Level:</strong> ${characterLevel}</p>
    ${selectedClass === "Warlock" && selectedPactBoon ? `<p><strong>Pact Boon:</strong> ${selectedPactBoon}</p>` : ""}
    <p><strong>Background:</strong> ${selectedBackground}</p>
    <p><strong>Ability Scores:</strong> ${abilities.map(ab => `${ab}: ${finalScores[ab]} (${calculateModifier(finalScores[ab])>=0?"+":""}${calculateModifier(finalScores[ab])})`).join(", ")}</p>
    <p><strong>Hit Points:</strong> ${hp}</p>
    <p><strong>Proficiency Bonus:</strong> +${getProficiencyBonus(characterLevel)}</p>
    <p><strong>Equipment:</strong> Armor: ${selectedArmor || "None"}, Shield: ${hasShield ? "Yes" : "No"}, Weapons: ${selectedWeapons.map(w => `${w.name} (${w.quantity})`).join(", ") || "None"}, Extra: ${customItems || "None"}</p>
    <p><strong>Spells:</strong> Cantrips: ${chosenCantrips.join(", ")} | Spells: ${chosenSpells.join(", ")}</p>
    ${chosenMetamagic.length ? `<p><strong>Metamagic:</strong> ${chosenMetamagic.join(", ")}</p>` : ""}
    ${chosenInvocations.length ? `<p><strong>Eldritch Invocations:</strong> ${chosenInvocations.join(", ")}</p>` : ""}
    ${chosenManeuvers.length ? `<p><strong>Maneuvers:</strong> ${chosenManeuvers.join(", ")}</p>` : ""}
    ${chosenArcaneShots.length ? `<p><strong>Arcane Shots:</strong> ${chosenArcaneShots.join(", ")}</p>` : ""}
  `;
  document.getElementById("reviewCard").innerHTML = reviewHtml;
}

// Calculate max HP for any class and level (1st level: max die + Con; subsequent levels: average roll + Con)
function calculateLevelBasedMaxHp(className, conMod, level) {
    const cls = classes[className];
    if (!cls) return 8 + conMod;
    const hitDieVal = cls.hitDie === "d12" ? 12 : cls.hitDie === "d10" ? 10 : cls.hitDie === "d8" ? 8 : 6;
    let hp = hitDieVal + conMod;               // level 1
    const average = Math.floor(hitDieVal / 2) + 1;  // average roll (rounded up)
    for (let i = 2; i <= level; i++) {
        hp += average + conMod;
    }
    return hp;
}

function finishWizard() {
  const racialBonuses = getCurrentRacialBonuses();
  const charClass = classes[selectedClass];
  const conMod = calculateModifier(finalScores.Constitution);
  const maxHp = calculateLevelBasedMaxHp(selectedClass, conMod, characterLevel);
  const character = {
    id: Date.now().toString(), name: characterName, race: selectedRace, subrace: selectedSubrace,
    class: selectedClass, subclass: selectedSubclass, level: characterLevel, background: selectedBackground,
    abilityScores: {...finalScores},
    hp: maxHp,
    maxHp: maxHp,
    tempHp: 0,
    appearance: characterAppearance, backstory: characterBackstory, personalityTraits: characterTraits,
    cantrips: chosenCantrips.slice(), spells: chosenSpells.slice(),
    equipment: { armor: selectedArmor, shield: hasShield, weapons: selectedWeapons.slice(), custom: document.getElementById("extraItems").value },
    currency: { cp: parseInt(document.getElementById("coinCP").value) || 0, sp: parseInt(document.getElementById("coinSP").value) || 0, ep: parseInt(document.getElementById("coinEP").value) || 0, gp: parseInt(document.getElementById("coinGP").value) || 0, pp: parseInt(document.getElementById("coinPP").value) || 0 },
    xp: xpTable[characterLevel] || 0,
    metamagic: chosenMetamagic.slice(),
    invocations: chosenInvocations.slice(),
    maneuvers: chosenManeuvers.slice(),
    arcaneShots: chosenArcaneShots.slice(),
    pactBoon: selectedPactBoon || "",
    dragonbornAncestry: selectedDragonbornAncestry,
    sorcererDragonAncestry: selectedSorcererAncestry,
    alignment: selectedAlignment,
    classSkills: chosenClassSkills.slice(),
    raceBonusSkills: chosenRaceBonusSkills.slice(),
    racialCantrip: chosenHighElfCantrip,
    selectedPack: selectedPack,
    backgroundFeature: backgrounds[selectedBackground]?.feature || null,
    alwaysPreparedSpells: selectedClass === "Warlock" && warlockPatrons[selectedSubclass]
      ? (function() {
          const patron = warlockPatrons[selectedSubclass];
          let spells = [];
          for (let level in patron.expandedSpells) {
            spells = spells.concat(patron.expandedSpells[level]);
          }
          return spells;
        })()
      : subclassSpells[selectedSubclass] || [],
    // Inventory items
    inventory: [],
    // New feature fields
    spellSlots: (function() { const s = getSpellSlotsForClass(selectedClass, characterLevel); let o = {}; for (let k in s) { o[k] = { used: 0, max: s[k] }; } return o; })(),
    hitDiceRemaining: characterLevel,
    hitDiceTotal: characterLevel,
    hitDiceType: charClass ? charClass.hitDie : "d8",
    shortRestCounter: 0,
    conditions: [],
    classResources: getClassResources(selectedClass, selectedSubclass, characterLevel),
    deathSaveSuccesses: 0,
    deathSaveFailures: 0,
    isUnconscious: false
  };
  
  currentCharacter = character;
  localStorage.setItem('dnd_current_character', JSON.stringify(currentCharacter));
  
  // Create campaign after character creation
  let newCampaign = null;
  if (wizardContext && wizardContext.type === 'openworld' && pendingOpenWorldConfig) {
    const config = pendingOpenWorldConfig;
    const isFaerun = config.worldbuildingKey === 'faerun';
    newCampaign = {
      id: Date.now().toString(),
      name: config.name,
      lastPlayed: new Date().toISOString().slice(0,10),
      type: 'openworld',
      config: { location: config.location, tone: config.tone },
      description: isFaerun ? "The continent of Faerûn awaits. Explore the Sword Coast, brave the Underdark, and shape your legend in the Forgotten Realms." : "The world of Al'mundi is yours to explore.",
      initialHook: config.initialHook,
      characterId: character.id,
      worldbuildingKey: config.worldbuildingKey || 'almundi'
    };
    campaigns.push(newCampaign);
    // Store the appropriate worldbuilding reference
    if (isFaerun && typeof FAERUN_WORLDBUILDING !== 'undefined') {
      saveWorldbuilding(FAERUN_WORLDBUILDING);
    } else if (!isFaerun && typeof ALMUNDI_WORLDBUILDING !== 'undefined') {
      saveWorldbuilding(ALMUNDI_WORLDBUILDING);
    }
    pendingOpenWorldConfig = null;
  } else if (wizardContext && wizardContext.type === 'story' && pendingStoryCampaign) {
    newCampaign = {
      id: Date.now().toString(),
      name: pendingStoryCampaign.name,
      lastPlayed: new Date().toISOString().slice(0,10),
      type: 'story',
      refId: pendingStoryCampaign.id,
      description: pendingStoryCampaign.description || '',
      initialHook: pendingStoryCampaign.initialHook || pendingStoryCampaign.description || '',
      characterId: character.id
    };
    campaigns.push(newCampaign);
    pendingStoryCampaign = null;
  } else if (wizardContext && wizardContext.type === 'custom' && wizardContext.campaign) {
    const customCamp = wizardContext.campaign;
    customCamp.characterId = character.id;
    const index = campaigns.findIndex(c => c.id === customCamp.id);
    if (index !== -1) campaigns[index] = customCamp;
    saveCampaigns();

    selectedCampaignId = customCamp.id;
    sessionActive = true;
    applyState();
    chatSessionInit = false;
    startGameSession(customCamp.id);

    const chatNoSession = document.getElementById('chatNoSession');
    const chatShell = document.getElementById('chatShell');
    if (chatNoSession) chatNoSession.style.display = 'none';
    if (chatShell) chatShell.style.display = 'flex';
    sessionSec.classList.remove('hidden');
    if (sessionBtns && sessionBtns.length) {
      for (let i = 0; i < sessionBtns.length; i++) {
        const btn = document.getElementById(sessionBtns[i]);
        if (btn) btn.disabled = false;
      }
    }
  }
  
  if (newCampaign) {
    saveCampaigns();
    // Start game session for the new campaign
    selectedCampaignId = newCampaign.id;
    sessionActive = true;
    applyState();
    chatSessionInit = false;
    startGameSession(newCampaign.id);
    // Apply visual state
    const chatNoSession = document.getElementById('chatNoSession');
    const chatShell = document.getElementById('chatShell');
    if (chatNoSession) chatNoSession.style.display = 'none';
    if (chatShell) chatShell.style.display = 'flex';
    sessionSec.classList.remove('hidden');
    if (sessionBtns && sessionBtns.length) {
      for (let i = 0; i < sessionBtns.length; i++) {
        const btn = document.getElementById(sessionBtns[i]);
        if (btn) btn.disabled = false;
      }
    }
  }
  
  closeWizard();
  openCharacterSheetModal();
  updateChatTopbar();
}

// ========== CAMPAIGN FUNCTIONS ==========
function loadCampaigns() {
  const stored = localStorage.getItem('dnd_campaigns');
  if (stored) {
    try { campaigns = JSON.parse(stored); } catch(e) { campaigns = []; }
  } else {
    campaigns = [];
  }
}
function saveCampaigns() { localStorage.setItem('dnd_campaigns', JSON.stringify(campaigns)); }
function renderSessionList() {
  if (!sessionListDiv || !emptyStateDiv) return;
  sessionListDiv.innerHTML = '';
  if (campaigns.length === 0) { emptyStateDiv.style.display = 'flex'; sessionListDiv.style.display = 'none'; return; }
  emptyStateDiv.style.display = 'none'; sessionListDiv.style.display = 'block';
  campaigns.forEach(campaign => {
    const row = document.createElement('div'); row.className = 'session-row'; if (selectedCampaignId === campaign.id) row.classList.add('selected'); row.dataset.id = campaign.id;
    const selector = document.createElement('div'); selector.className = 'session-selector';
    const nameSpan = document.createElement('span'); nameSpan.className = 'session-name'; nameSpan.textContent = campaign.name;
    const lastSpan = document.createElement('span'); lastSpan.className = 'session-last-played';
    if (campaign.lastPlayed) { const daysAgo = Math.floor((new Date() - new Date(campaign.lastPlayed)) / (1000*60*60*24)); lastSpan.textContent = `Last: ${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`; }
    else lastSpan.textContent = 'Never';
    row.appendChild(selector); row.appendChild(nameSpan); row.appendChild(lastSpan);
    // Resume button
    const resumeBtn = document.createElement('button');
    resumeBtn.className = 'small-btn';
    resumeBtn.textContent = '▶ Resume';
    resumeBtn.style.cssText = 'width:auto;margin:0;padding:3px 10px;font-size:0.65rem;';
    resumeBtn.addEventListener('click', (e) => { e.stopPropagation(); resumeCampaign(campaign.id); });
    row.appendChild(resumeBtn);
    row.addEventListener('dblclick', (e) => { e.stopPropagation(); resumeCampaign(campaign.id); });
    row.addEventListener('click', (e) => { e.stopPropagation(); selectCampaign(campaign.id); });
    sessionListDiv.appendChild(row);
  });
  updateDeleteButtonState();
}
function selectCampaign(id) {
  selectedCampaignId = id;
  renderSessionList();
  // Start session with a double-click via resume
}

function resumeCampaign(id) {
  const campaign = campaigns.find(c => c.id === id);
  if (!campaign) return;
  selectedCampaignId = id;
  sessionActive = true;
  // Load character
  if (campaign.characterId) {
    const storedChar = localStorage.getItem('dnd_current_character');
    if (storedChar) currentCharacter = JSON.parse(storedChar);
    if (currentCharacter) syncCharacterStats();
  }
  closeCampaignModal();
  // Don't call applyState() first — it would init a fresh session.
  // Instead call startGameSession directly which handles everything.
  chatSessionInit = false;
  startGameSession(id);
  applyState();
  // Now apply the visual state
  const chatNoSession = document.getElementById('chatNoSession');
  const chatShell = document.getElementById('chatShell');
  if (chatNoSession) chatNoSession.style.display = 'none';
  if (chatShell) chatShell.style.display = 'flex';
  sessionSec.classList.remove('hidden');
  // Enable session buttons
  if (sessionBtns && sessionBtns.length) {
    for (let i = 0; i < sessionBtns.length; i++) {
      const btn = document.getElementById(sessionBtns[i]);
      if (btn) btn.disabled = false;
      if (sessionBtnWraps && sessionBtnWraps[i]) {
        const wrap = document.getElementById(sessionBtnWraps[i]);
        if (wrap && wrap.hasAttribute('data-tooltip')) wrap.removeAttribute('data-tooltip');
      }
    }
  }
}

function startGameSession(campaignId) {
  if (!campaignId) return;
  selectedCampaignId = campaignId;
  chatSessionInit = false;
  
  // Load chat history for this campaign
  const chatKey = `dnd_chat_${campaignId}`;
  const storedChat = localStorage.getItem(chatKey);
  if (storedChat) {
    try {
      chatHistory = JSON.parse(storedChat);
    } catch(e) { chatHistory = []; }
  } else {
    chatHistory = [];
  }
  
  // Initialize summarization counter
  messagesSinceLastSummary = chatHistory.filter(m => m.role !== 'system').length;
  
  // Load quests for this campaign
  loadQuests();
  
  // Load NPCs for this campaign
  loadNPCs();
  
  // Update last played
  const campaign = campaigns.find(c => c.id === campaignId);
  if (campaign) {
    campaign.lastPlayed = new Date().toISOString().slice(0,10);
    saveCampaigns();
  }
  
  // Initialize the chat interface
  initChatSession();
  
}

function saveChatHistory() {
  if (!selectedCampaignId) return;
  const key = `dnd_chat_${selectedCampaignId}`;
  // Limit to last 200 messages
  const toSave = chatHistory.slice(-200);
  localStorage.setItem(key, JSON.stringify(toSave));
}
function updateDeleteButtonState() { if (deleteCampaignBtn) { deleteCampaignBtn.disabled = !selectedCampaignId; deleteCampaignBtn.title = !selectedCampaignId ? "Select a campaign first" : ""; } }
function openCampaignModal() { if (!campaignModal) return; campaignModal.style.display = 'flex'; setTimeout(() => campaignModal.classList.add('show'), 10); renderSessionList(); }
function closeCampaignModal() { if (!campaignModal) return; campaignModal.classList.remove('show'); setTimeout(() => { campaignModal.style.display = 'none'; }, 200); }
function newCampaign() { closeCampaignModal(); openCampaignSelectionModal(); }
function openCampaignSelectionModal() { if (!selectionModal) return; renderCampaignSelection(); selectionModal.style.display = 'flex'; setTimeout(() => selectionModal.classList.add('show'), 10); }
function closeCampaignSelectionModal() { if (!selectionModal) return; selectionModal.classList.remove('show'); setTimeout(() => { selectionModal.style.display = 'none'; }, 200); }
function renderCampaignSelection() {
  if (!campaignListDiv) return;
  campaignListDiv.innerHTML = '';

  // Open World: Al'mundi
  const openWorldAlmundi = {
    type: "openworld",
    id: "openworld_almundi",
    name: "Al'mundi",
    setting: "Al'mundi (Homebrew)",
    tone: "Custom",
    description: "The world of Al'mundi is yours to explore. No fixed main plot—the AI Dungeon Master creates dynamic adventures as you go.",
    toneClass: "tone-neutral"
  };
  campaignListDiv.appendChild(createCampaignCard(openWorldAlmundi, true));

  // Open World: Faerûn (Forgotten Realms)
  const openWorldFaerun = {
    type: "openworld",
    id: "openworld_faerun",
    name: "Faerûn (Forgotten Realms)",
    setting: "Faerûn",
    tone: "Custom",
    description: "Explore the Sword Coast, brave the Underdark, or sail the Sea of Fallen Stars. The classic D&D setting, open for sandbox adventure. The AI will generate quests, factions, and random encounters using Faerûn lore.",
    toneClass: "tone-neutral"
  };
  campaignListDiv.appendChild(createCampaignCard(openWorldFaerun, true));

  // Story campaigns
  storyCampaigns.forEach(story => {
    campaignListDiv.appendChild(createCampaignCard(story, false));
  });
}
function createCampaignCard(campaign, isOpenWorld = false) {
  const card = document.createElement('div'); card.className = 'campaign-card';
  const badge = document.createElement('div'); badge.className = `card-badge ${isOpenWorld ? 'open-world' : ''}`; badge.textContent = isOpenWorld ? '🌍 Open World' : '📜 Story Campaign'; card.appendChild(badge);
  const name = document.createElement('div'); name.className = 'campaign-name'; name.textContent = campaign.name; card.appendChild(name);
  const setting = document.createElement('div'); setting.className = 'campaign-setting'; setting.textContent = `Setting: ${campaign.setting}`; card.appendChild(setting);
  const tone = document.createElement('div'); tone.className = `campaign-tone ${campaign.toneClass || 'tone-neutral'}`; tone.textContent = typeof campaign.tone === 'string' ? campaign.tone : 'Narrative Tone: ' + campaign.tone; card.appendChild(tone);
  const desc = document.createElement('div'); desc.className = 'campaign-description'; desc.textContent = campaign.description; card.appendChild(desc);
  const button = document.createElement('button'); button.className = 'card-button'; button.textContent = 'Start Adventure';
  button.addEventListener('click', (e) => { e.stopPropagation(); if (isOpenWorld) openOpenWorldConfigModal(campaign.id); else startStoryCampaign(campaign); });
  card.appendChild(button);
  return card;
}
function startStoryCampaign(story) { closeCampaignSelectionModal(); pendingStoryCampaign = story; wizardContext = { type: 'story' }; openCharacterCreationWizard(); }
let pendingWorldbuildingKey = 'almundi'; // 'almundi' or 'faerun'
function openOpenWorldConfigModal(campaignId) { 
  closeCampaignSelectionModal(); 
  if (!configModal) return; 
  const isFaerun = campaignId === 'openworld_faerun';
  pendingWorldbuildingKey = isFaerun ? 'faerun' : 'almundi';
  document.getElementById('owSessionName').value = isFaerun ? "Faerûn" : "Al'mundi"; 
  document.getElementById('owStartLocation').value = 'Random'; 
  document.getElementById('owTone').value = 'Heroic'; 
  document.getElementById('owNameError').innerText = ''; 
  configModal.style.display = 'flex'; 
  setTimeout(() => configModal.classList.add('show'), 10); 
}
function closeOpenWorldConfigModal() { if (!configModal) return; configModal.classList.remove('show'); setTimeout(() => { configModal.style.display = 'none'; }, 200); }
function generateAIHook(location, tone) {
  const hooks = { "Baldur's Gate": `The Gate's streets teem with intrigue – a Flaming Fist patrol blocks an alley, a smuggler's note falls from a crate, and a desperate tiefling whispers of a vanished duke.`, 'Waterdeep': `The City of Splendors gleams under the afternoon sun. A masked lord has been murdered, and the Watch is offering a reward for any who can track the killer into the Undermountain.`, 'Neverwinter': `Smoke still rises from the Chasm, but the city rebuilds. A half‑elven ranger claims the Neverwinter Wood hides a green dragon – and a lost forge that could save the city.`, 'Silverymoon': `The Moonbridge shimmers above the river. The High Mage requests discreet adventurers to retrieve a stolen spellbook – one that holds the secret to closing a planar rift in the High Forest.`, 'Menzoberranzan': `In the dark elf city, a matron mother offers a dangerous bargain: retrieve a rogue House's soul‑spider egg from the Clawrift, and earn safe passage to the surface.`, 'random town': `A bustling town square, a guarded gate, and rumors of trouble beyond the walls draw your attention...`, 'random village': `A quiet hamlet where the locals eye you with a mix of curiosity and concern—something is amiss...`, 'Random': `Rumors swirl of an ancient ruin...` };
  let hook = hooks[location] || hooks['Random'];
  if (tone === 'Grimdark') hook += ' Dark omens and blood‑soaked trails await.';
  if (tone === 'Lighthearted') hook += ' A bumbling wizard offers a comical reward.';
  if (tone === 'Mystery') hook += ' Clues hint at a conspiracy older than the city itself.';
  return hook;
}
function submitOpenWorldConfig() {
  const name = document.getElementById('owSessionName').value.trim();
  const location = document.getElementById('owStartLocation').value;
  const tone = document.getElementById('owTone').value;
  if (!name) { document.getElementById('owNameError').innerText = 'Adventure name is required'; return; }
  document.getElementById('owNameError').innerText = '';
  pendingOpenWorldConfig = { name, location, tone, initialHook: generateAIHook(location, tone), worldbuildingKey: pendingWorldbuildingKey || 'almundi' };
  wizardContext = { type: 'openworld' };
  closeOpenWorldConfigModal();
  openCharacterCreationWizard();
}
function deleteCampaign() {
  try {
    if (!selectedCampaignId) return;
    const campaign = campaigns.find(c => c.id === selectedCampaignId);
    if (!campaign) return;
    if (confirmMessage) confirmMessage.textContent = `Delete "${campaign.name}"? This action is permanent.`;
    if (confirmModal) confirmModal.style.display = 'flex';
  } catch (e) { console.error("deleteCampaign error:", e); }
}
function confirmDelete() {
  try {
    if (!selectedCampaignId) return;
    const id = selectedCampaignId;
    // Delete associated data
    localStorage.removeItem(`dnd_chat_${id}`);
    localStorage.removeItem(`dnd_quests_${id}`);
    localStorage.removeItem(`dnd_npcs_${id}`);
    localStorage.removeItem(`dnd_dm_guide_${id}`);
    localStorage.removeItem(`dnd_campaign_summary_${id}`);
    campaigns = campaigns.filter(c => c.id !== id);
    selectedCampaignId = null;
    sessionActive = false;
    chatHistory = [];
    chatSessionInit = false;
    applyState();
    saveCampaigns();
    renderSessionList();
    closeConfirmModal();
  } catch (e) {
    console.error("confirmDelete error:", e);
    closeConfirmModal();
    renderSessionList();
  }
}
function closeConfirmModal() {
  if (confirmModal) {
    confirmModal.style.display = 'none';
    confirmModal.classList.remove('show');
  }
}
function toggleSession() {
  if (!sidebar) return;
  sessionActive = !sessionActive;
  applyState();
}
function toggleCollapse() { if (sidebar) sidebar.classList.toggle('collapsed'); }
function applyState() {
  if (!sessionSec || !mainContent) return;
  const chatNoSession = document.getElementById('chatNoSession');
  const chatShell     = document.getElementById('chatShell');
  if (!sessionActive) {
    sessionSec.classList.add('hidden');
    if (chatNoSession) chatNoSession.style.display = '';
    if (chatShell)     chatShell.style.display = 'none';
  } else {
    sessionSec.classList.remove('hidden');
    if (chatNoSession) chatNoSession.style.display = 'none';
    if (chatShell)     chatShell.style.display = 'flex';
    initChatSession();
  }
  if (sessionBtns && sessionBtns.length) {
    for (let i = 0; i < sessionBtns.length; i++) {
      const btn = document.getElementById(sessionBtns[i]);
      if (btn) btn.disabled = !sessionActive;
      if (sessionBtnWraps && sessionBtnWraps[i]) {
        const wrap = document.getElementById(sessionBtnWraps[i]);
        if (wrap && sessionActive && wrap.hasAttribute('data-tooltip')) {
          wrap.removeAttribute('data-tooltip');
        }
      }
    }
  }
  if (!sessionActive && activeBtn && sessionBtns.includes(activeBtn)) {
    const oldActive = document.getElementById(activeBtn);
    if (oldActive) oldActive.classList.remove('active');
    activeBtn = null;
  }
  // Show/hide sidebar dice roller widget
  const dwc = document.getElementById('diceWidgetContainer');
  if (dwc) dwc.style.display = sessionActive ? 'block' : 'none';
}
function setActive(id) {
  if (activeBtn) {
    const prevBtn = document.getElementById(activeBtn);
    if (prevBtn) prevBtn.classList.remove('active');
  }
  activeBtn = id;
  const currentBtn = document.getElementById(id);
  if (currentBtn) currentBtn.classList.add('active');
}
function escapeHtml(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str || ''));
  return div.innerHTML;
}

/* ═══════════════════════════════════════════
   SIDEBAR DICE ROLLER WIDGET
═══════════════════════════════════════════ */
let dwSign = '+';
function initDiceRoller() {
  const qtyEl   = document.getElementById('dwQty');
  const dieEl   = document.getElementById('dwDie');
  const modEl   = document.getElementById('dwMod');
  const signEl  = document.getElementById('dwSign');
  const rollEl  = document.getElementById('dwRollBtn');
  if (!qtyEl || !dieEl || !modEl || !signEl || !rollEl) return;

  // Sign toggle
  signEl.addEventListener('click', () => {
    dwSign = dwSign === '+' ? '-' : '+';
    signEl.textContent = dwSign;
  });

  // Roll button
  rollEl.addEventListener('click', async () => {
    const qty  = parseInt(qtyEl.value, 10) || 1;
    const die  = parseInt(dieEl.value, 10);
    const mod  = parseInt(modEl.value, 10) || 0;
    const sign = dwSign;

    if (qty < 1 || qty > 20) { alert('Quantity must be 1–20.'); return; }
    if (!die || die < 2) { alert('Select a valid die type.'); return; }

    const modPart = mod !== 0 ? (sign === '+' ? `+${mod}` : `-${mod}`) : '';
    const formula = `${qty}d${die}${modPart}`;

    // Use rollDiceExpression for the raw math
    const parsed = rollDiceExpression(formula);
    if (!parsed) { alert('Invalid dice expression.'); return; }

    let finalTotal;
    // Try 3D animation if available
    if (typeof window.rollWithAnimation === 'function') {
      try {
        const result = await window.rollWithAnimation(formula, parsed, () => rollDiceExpression(formula));
        finalTotal = result ? result.total : parsed.total;
      } catch (e) {
        finalTotal = parsed.total;
      }
    } else {
      finalTotal = parsed.total;
    }

    const msg = `Player has rolled ${formula} and got ${finalTotal}!`;
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
      if (chatInput.value.trim() === '') {
        chatInput.value = msg;
      } else {
        // Insert at cursor or append
        const start = chatInput.selectionStart;
        const end   = chatInput.selectionEnd;
        chatInput.value = chatInput.value.substring(0, start) + msg + '\n' + chatInput.value.substring(end);
      }
      chatInput.focus();
      // Trigger input event so auto-resize etc. work
      chatInput.dispatchEvent(new Event('input', { bubbles: true }));
    }
  });
}

function recalcDerivedStats() {
  if (!currentCharacter) return;
  for (let ab of abilities) {
    const mod = calculateModifier(currentCharacter.abilityScores[ab]);
    const el = document.getElementById(`stat-${ab.toLowerCase()}-mod`);
    if (el) el.innerText = (mod >= 0 ? "+" : "") + mod;
  }
  updateSavesAndSkills();
}

/**
 * Update the HP display in the character sheet sidebar.
 * Computes max HP from class hit die, level, and Con modifier.
 * Shows current HP (editable), max HP (read-only), and temp HP (editable).
 */
function updateHPDisplay() {
  if (!currentCharacter) return;
  const char = currentCharacter;
  const cls = classes[char.class];
  // Compute max HP
  if (cls) {
    const hitDieVal = cls.hitDie === "d12" ? 12 : cls.hitDie === "d10" ? 10 : cls.hitDie === "d8" ? 8 : cls.hitDie === "d6" ? 6 : 8;
    const conMod = calculateModifier(char.abilityScores.Constitution);
    // Level 1: max hit die + Con mod; for higher levels we use stored maxHp or compute
    const computedMax = hitDieVal + conMod;
    // Allow stored maxHp to override (in case of level ups or manual edits)
    if (!char.maxHp || char.maxHp < computedMax) {
      char.maxHp = computedMax;
    }
  }
  // Ensure current HP is within bounds
  if (char.hp === undefined || char.hp === null) char.hp = char.maxHp;
  char.hp = Math.max(0, Math.min(char.maxHp, char.hp));
  if (!char.tempHp) char.tempHp = 0;
  if (char.tempHp < 0) char.tempHp = 0;

  const hpInput = document.getElementById('sheetHP');
  const maxHpSpan = document.getElementById('sheetMaxHP');
  const tempInput = document.getElementById('sheetTempHP');
  if (hpInput) hpInput.value = char.hp;
  if (maxHpSpan) maxHpSpan.textContent = char.maxHp;
  if (tempInput) tempInput.value = char.tempHp;

  // Remove old listeners before adding new ones to avoid duplicates
  const newHpInput = document.getElementById('sheetHP');
  const newTempInput = document.getElementById('sheetTempHP');
  if (newHpInput) {
    newHpInput.onchange = function() {
      const val = parseInt(this.value);
      if (!isNaN(val)) {
        char.hp = Math.max(0, Math.min(char.maxHp, val));
        this.value = char.hp;
        localStorage.setItem('dnd_current_character', JSON.stringify(char));
      }
    };
  }
  if (newTempInput) {
    newTempInput.onchange = function() {
      const val = parseInt(this.value);
      if (!isNaN(val)) {
        char.tempHp = Math.max(0, val);
        this.value = char.tempHp;
        localStorage.setItem('dnd_current_character', JSON.stringify(char));
      }
    };
  }
}

function updateSavesAndSkills() {
  if (!currentCharacter) return;
  const cls = classes[currentCharacter.class];
  if (!cls) return;
  const profBonus = getProficiencyBonus(currentCharacter.level);
  const abilityMods = {};
  for (let ab of abilities) {
    abilityMods[ab] = calculateModifier(currentCharacter.abilityScores[ab]);
  }
  // Saving throws
  const savesContainer = document.getElementById("savesContainer");
  if (savesContainer) {
    const saveAbilities = ["Strength","Dexterity","Constitution","Intelligence","Wisdom","Charisma"];
    savesContainer.innerHTML = saveAbilities.map(ab => {
      const isProficient = (currentCharacter.saveProficiencies || cls.savingThrows).includes(ab);
      const total = abilityMods[ab] + (isProficient ? profBonus : 0);
      return `<div class="save-row" data-ability="${ab}">
        <span class="save-name">${ab}</span>
        <span class="save-total" id="save-${ab}-total">${total >= 0 ? "+" : ""}${total}</span>
        <button class="prof-toggle" data-save="${ab}">${isProficient ? "✔" : "⌾"}</button>
      </div>`;
    }).join("");
    document.querySelectorAll("#savesContainer .prof-toggle[data-save]").forEach(btn => {
      btn.addEventListener("click", () => {
        const saveAb = btn.dataset.save;
        if (!currentCharacter.saveProficiencies) currentCharacter.saveProficiencies = cls.savingThrows.slice();
        const idx = currentCharacter.saveProficiencies.indexOf(saveAb);
        if (idx === -1) currentCharacter.saveProficiencies.push(saveAb);
        else currentCharacter.saveProficiencies.splice(idx, 1);
        updateSavesAndSkills();
      });
    });
  }
  // Skill definitions
  const skillDefs = [
    { name: "Acrobatics", ability: "Dexterity" },
    { name: "Animal Handling", ability: "Wisdom" },
    { name: "Arcana", ability: "Intelligence" },
    { name: "Athletics", ability: "Strength" },
    { name: "Deception", ability: "Charisma" },
    { name: "History", ability: "Intelligence" },
    { name: "Insight", ability: "Wisdom" },
    { name: "Intimidation", ability: "Charisma" },
    { name: "Investigation", ability: "Intelligence" },
    { name: "Medicine", ability: "Wisdom" },
    { name: "Nature", ability: "Intelligence" },
    { name: "Perception", ability: "Wisdom" },
    { name: "Performance", ability: "Charisma" },
    { name: "Persuasion", ability: "Charisma" },
    { name: "Religion", ability: "Intelligence" },
    { name: "Sleight of Hand", ability: "Dexterity" },
    { name: "Stealth", ability: "Dexterity" },
    { name: "Survival", ability: "Wisdom" }
  ];
  const skillsContainer = document.getElementById("skillsContainer");
  if (skillsContainer) {
    skillsContainer.innerHTML = skillDefs.map(skill => {
      const abilityMod = abilityMods[skill.ability];
      const isProficient = (currentCharacter.skillProficiencies || []).includes(skill.name);
      const total = abilityMod + (isProficient ? profBonus : 0);
      return `<div class="skill-row" data-skill="${skill.name}">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-total" id="skill-${skill.name.replace(/\s/g,'')}-total">${total >= 0 ? "+" : ""}${total}</span>
        <button class="prof-toggle" data-skill="${skill.name}">${isProficient ? "✔" : "⌾"}</button>
      </div>`;
    }).join("");
    document.querySelectorAll("#skillsContainer .prof-toggle[data-skill]").forEach(btn => {
      btn.addEventListener("click", () => {
        const skillName = btn.dataset.skill;
        if (!currentCharacter.skillProficiencies) currentCharacter.skillProficiencies = [];
        const idx = currentCharacter.skillProficiencies.indexOf(skillName);
        if (idx === -1) currentCharacter.skillProficiencies.push(skillName);
        else currentCharacter.skillProficiencies.splice(idx, 1);
        updateSavesAndSkills();
      });
    });
  }
  // Passive perception & initiative
  const percMod = abilityMods.Wisdom;
  const percProf = (currentCharacter.skillProficiencies || []).includes("Perception") ? profBonus : 0;
  const passivePerc = 10 + percMod + percProf;
  const ppEl = document.getElementById("passivePerception");
  if (ppEl) ppEl.innerText = passivePerc;
  const initEl = document.getElementById("initiative");
  if (initEl) initEl.innerText = (abilityMods.Dexterity >= 0 ? "+" : "") + abilityMods.Dexterity;
}

function populateCharacterSheet() {
  if (!currentCharacter) return;
  const char = currentCharacter;
  document.getElementById("sheetCharName").innerText = char.name || "Unnamed Hero";
  // ── Portrait ──
  const charImg = document.getElementById('charPortraitImg');
  const charPlaceholder = document.getElementById('charPortraitPlaceholder');
  if (char.portrait) {
    charImg.src = char.portrait;
    charImg.style.display = 'block';
    charPlaceholder.style.display = 'none';
  } else {
    charImg.style.display = 'none';
    charPlaceholder.style.display = 'flex';
  }
  document.getElementById("sheetRace").innerText = `${char.race}${char.subrace ? " (" + char.subrace + ")" : ""}`;
  document.getElementById("sheetClass").innerText = `${char.class}${char.subclass ? " (" + char.subclass + ")" : ""}`;
  document.getElementById("sheetLevel").value = char.level || 1;
  // ── Level change listener ──
  const levelInput = document.getElementById("sheetLevel");
  if (levelInput && !levelInput.hasAttribute("data-listener")) {
    levelInput.setAttribute("data-listener", "true");
    levelInput.addEventListener("change", function() {
      const newLevel = parseInt(this.value);
      if (!isNaN(newLevel) && newLevel >= 1 && newLevel <= 20) {
        currentCharacter.level = newLevel;
        syncCharacterStats();    // recalc HP and XP
        // Also update spell slots and hit dice
        const slots = getSpellSlotsForClass(currentCharacter.class, newLevel);
        if (!currentCharacter.spellSlots) currentCharacter.spellSlots = {};
        for (let k in slots) {
          if (!currentCharacter.spellSlots[k]) currentCharacter.spellSlots[k] = { used: 0, max: slots[k] };
          else currentCharacter.spellSlots[k].max = slots[k];
        }
        currentCharacter.hitDiceTotal = newLevel;
        currentCharacter.hitDiceRemaining = newLevel;
        saveCharacter();
        updateSpellSlotsUI();
        updateHitDiceUI();
        updateHPDisplay();
        recalcDerivedStats();
      }
    });
  }
  // ── HP display ──
  updateHPDisplay();
  // ── Spell Slots & Hit Dice (init) ──
  initSpellSlots();
  updateSpellSlotsUI();
  updateHitDiceUI();
  // ── Condition icons ──
  updateConditionIcons();
  // ── Encumbrance ──
  updateEncumbranceDisplay();
  // ── Class Resources ──
  if (!currentCharacter.classResources) {
    currentCharacter.classResources = getClassResources(currentCharacter.class, currentCharacter.subclass, currentCharacter.level);
  }
  updateClassResourcesUI();
  // Ability scores
  const absContainer = document.getElementById("abilityScoresSidebar");
  if (absContainer) {
    absContainer.innerHTML = abilities.map(ab => {
      const abId = ab.toLowerCase();
      const score = char.abilityScores[ab] || 10;
      const mod = calculateModifier(score);
      return `<div class="ability-score-row">
        <span class="as-label">${ab.substring(0,3)}</span>
        <input type="number" class="sheet-input as-score" id="stat-${abId}-score" value="${score}" min="1" max="30">
        <span class="as-mod" id="stat-${abId}-mod">${mod >= 0 ? "+" : ""}${mod}</span>
      </div>`;
    }).join("");
    // Add change listeners for auto-recalc
    document.querySelectorAll("#abilityScoresSidebar .as-score").forEach(inp => {
      inp.addEventListener("change", () => {
        const abName = inp.id.replace("stat-","").replace("-score","");
        const abFull = abilities.find(a => a.toLowerCase() === abName);
        if (abFull) {
          const val = parseInt(inp.value);
          if (!isNaN(val)) currentCharacter.abilityScores[abFull] = Math.min(30, Math.max(1, val));
          recalcDerivedStats();
        }
      });
    });
  }
  // Speed from race
  const race = races[char.race];
  if (race) {
    const subrace = race.subraces.find(s => s.name === char.subrace);
    if (subrace) document.getElementById("sheetSpeed").value = subrace.speed || 30;
  }
  updateXPDisplay();
  recalcDerivedStats();
  populateBackstoryTab();
  populateInventoryTab();
  populateEquipmentTab();
  populateSpellsTab();
  populateFeatsTab();
  populateDetailsTab();
  syncCharacterStats();
}

function syncCharacterStats() {
    if (!currentCharacter) return;
    // Fix XP for level
    const expectedXp = xpTable[currentCharacter.level] || 0;
    if ((currentCharacter.xp || 0) < expectedXp) {
        currentCharacter.xp = expectedXp;
        console.log("Fixed XP for level", currentCharacter.level);
    }
    // Fix max HP for level
    const cls = classes[currentCharacter.class];
    if (cls) {
        const conMod = calculateModifier(currentCharacter.abilityScores.Constitution);
        const expectedHp = calculateLevelBasedMaxHp(currentCharacter.class, conMod, currentCharacter.level);
        if (currentCharacter.maxHp !== expectedHp) {
            currentCharacter.maxHp = expectedHp;
            if (currentCharacter.hp > currentCharacter.maxHp) currentCharacter.hp = currentCharacter.maxHp;
            console.log("Fixed max HP for level", currentCharacter.level);
        }
    }
    saveCharacter();
    updateXPDisplay();
    updateHPDisplay();
}

function populateBackstoryTab() {
  if (!currentCharacter) return;
  document.getElementById("backstoryAppearance").value = currentCharacter.appearance || "";
  document.getElementById("backstoryText").value = currentCharacter.backstory || "";
  document.getElementById("backstoryTraits").value = currentCharacter.personalityTraits || "";
}

function populateInventoryTab() {
  if (!currentCharacter) return;
  const cur = currentCharacter.currency || { cp:0, sp:0, ep:0, gp:0, pp:0 };
  document.getElementById("inventoryCP").value = cur.cp || 0;
  document.getElementById("inventorySP").value = cur.sp || 0;
  document.getElementById("inventoryEP").value = cur.ep || 0;
  document.getElementById("inventoryGP").value = cur.gp || 0;
  document.getElementById("inventoryPP").value = cur.pp || 0;
  const invItems = currentCharacter.inventory || [];
  // Fallback: migrate old equipment.custom string into inventory array
  if (invItems.length === 0 && currentCharacter.equipment?.custom) {
    const oldItems = currentCharacter.equipment.custom.split("\n").filter(l => l.trim());
    oldItems.forEach(name => {
      invItems.push({ name, quantity: 1, weight: '', notes: '' });
    });
    currentCharacter.inventory = invItems;
  }
  const tbody = document.getElementById("inventoryBody");
  if (tbody) {
    tbody.innerHTML = invItems.map((item, idx) =>
      `<tr>
        <td><input type="text" class="inv-name sheet-input" value="${escapeHtml(item.name)}"></td>
        <td><input type="number" class="inv-qty sheet-input small" value="${item.quantity || 1}" min="1"></td>
        <td><input type="text" class="inv-weight sheet-input small" placeholder="lb" value="${escapeHtml(item.weight || '')}"></td>
        <td><input type="text" class="inv-notes sheet-input" placeholder="Notes" value="${escapeHtml(item.notes || '')}"></td>
        <td><button class="remove-row small-btn" data-idx="${idx}">✖</button></td>
      </tr>`
    ).join("");
  }
}

function populateEquipmentTab() {
  if (!currentCharacter) return;
  const eq = currentCharacter.equipment || {};
  document.getElementById("equipmentArmor").value = eq.armor || "";
  document.getElementById("equipmentShield").checked = !!eq.shield;
  const weaponsContainer = document.getElementById("weaponsList");
  if (weaponsContainer) {
    const weapons = eq.weapons || [];
    weaponsContainer.innerHTML = weapons.map((w, idx) =>
      `<div class="weapon-edit-row">
        <input type="text" class="weapon-name sheet-input" value="${escapeHtml(w.name)}" placeholder="Weapon name">
        <input type="number" class="weapon-qty-sheet sheet-input small" value="${w.quantity || 1}" min="1" max="4">
        <button class="remove-weapon-row small-btn" data-idx="${idx}">✖</button>
      </div>`
    ).join("");
  }
}

function populateSpellsTab() {
  if (!currentCharacter) return;
  const cantrips = (currentCharacter.cantrips || []).join("\n");
  const spells = (currentCharacter.spells || []).join("\n");
  document.getElementById("spellCantrips").value = cantrips;
  document.getElementById("spellSpells").value = spells;
  // Subclass spells
  const subSpells = subclassSpells[currentCharacter.subclass];
  const subSection = document.getElementById("subclassSpellsSection");
  const subList = document.getElementById("subclassSpellsList");
  if (subSpells && subSpells.length > 0 && subSection && subList) {
    subSection.style.display = "block";
    subList.innerHTML = subSpells.map(s => `<div>${s}</div>`).join("");
  } else if (subSection) {
    subSection.style.display = "none";
  }
}

function populateFeatsTab() {
  if (!currentCharacter) return;
  const race = races[currentCharacter.race];
  const subrace = race ? race.subraces.find(s => s.name === currentCharacter.subrace) : null;
  const cls = classes[currentCharacter.class];
  let racialTraitsText = "";
  if (subrace) {
    racialTraitsText = [...(subrace.additionalTraits || []), ...(subrace.traits || [])].join("\n");
  }
  document.getElementById("featsList").value = currentCharacter.feats || "";
  let classFeatures = currentCharacter.class;
  if (currentCharacter.subclass) classFeatures += " (" + currentCharacter.subclass + ")";
  document.getElementById("classFeaturesList").value = classFeatures;
  document.getElementById("racialTraitsList").value = racialTraitsText;

  // Pact Boon (Warlock)
  const pactBoonArea = document.getElementById("sheetPactBoonArea");
  const pactBoonDisplay = document.getElementById("sheetPactBoonDisplay");
  if (currentCharacter.class === "Warlock" && currentCharacter.pactBoon) {
    pactBoonArea.style.display = "block";
    pactBoonDisplay.innerHTML = `<div class="feature-item"><strong>${currentCharacter.pactBoon}</strong></div>`;
  } else {
    pactBoonArea.style.display = "none";
  }

  // Patron Expanded Spells (Warlock)
  const patronSpellsArea = document.getElementById("sheetPatronSpellsArea");
  const patronSpellsList = document.getElementById("sheetPatronSpellsList");
  const patron = warlockPatrons[currentCharacter.subclass];
  if (currentCharacter.class === "Warlock" && patron) {
    patronSpellsArea.style.display = "block";
    let allSpells = [];
    for (let slvl in patron.expandedSpells) {
      allSpells = allSpells.concat(patron.expandedSpells[slvl]);
    }
    patronSpellsList.innerHTML = allSpells.map(s => `<span class="spell-readonly-item">${s}</span>`).join("");
  } else {
    patronSpellsArea.style.display = "none";
  }

  // Patron Features (Warlock)
  const patronFeaturesArea = document.getElementById("sheetPatronFeaturesArea");
  const patronFeaturesList = document.getElementById("sheetPatronFeaturesList");
  if (currentCharacter.class === "Warlock" && patron) {
    patronFeaturesArea.style.display = "block";
    const level = currentCharacter.level || 1;
    const availableFeatures = patron.features.filter(f => f.level <= level);
    patronFeaturesList.innerHTML = availableFeatures.map(f =>
      `<div class="feature-item">
        <strong>${f.name}</strong>
        <br><span class="feature-desc">${f.description}</span>
        ${patron.resource && patron.resource.name === f.name
          ? `<br><span class="feature-desc" style="color:#C8A96E;">Resource: ${patron.resource.maxUses}</span>`
          : ""}
      </div>`
    ).join("");
  } else {
    patronFeaturesArea.style.display = "none";
  }

  // Metamagic in sheet
  const metaArea = document.getElementById("sheetMetamagicArea");
  if (currentCharacter.metamagic?.length) {
    metaArea.style.display = "block";
    document.getElementById("sheetMetamagicList").innerHTML = currentCharacter.metamagic.map(name => {
      const opt = metamagicOptions.find(o => o.name === name);
      return `<div class="feature-item"><strong>${name}</strong><br><span class="feature-desc">${opt ? opt.description : ""}</span></div>`;
    }).join("");
  } else { metaArea.style.display = "none"; }

  // Invocations in sheet
  const invArea = document.getElementById("sheetInvocationsArea");
  if (currentCharacter.invocations?.length) {
    invArea.style.display = "block";
    document.getElementById("sheetInvocationsList").innerHTML = currentCharacter.invocations.map(name => {
      const opt = eldritchInvocations.find(o => o.name === name);
      return `<div class="feature-item"><strong>${name}</strong><br><span class="feature-desc">${opt ? opt.description : ""}</span></div>`;
    }).join("");
  } else { invArea.style.display = "none"; }

  // Maneuvers in sheet
  const manArea = document.getElementById("sheetManeuversArea");
  if (currentCharacter.maneuvers?.length) {
    manArea.style.display = "block";
    document.getElementById("sheetManeuversList").innerHTML = currentCharacter.maneuvers.map(name => {
      const opt = battleMasterManeuvers.find(o => o.name === name);
      return `<div class="feature-item"><strong>${name}</strong><br><span class="feature-desc">${opt ? opt.description : ""}</span></div>`;
    }).join("");
  } else { manArea.style.display = "none"; }

  // Arcane Shots in sheet
  const asArea = document.getElementById("sheetArcaneShotsArea");
  if (currentCharacter.arcaneShots?.length) {
    asArea.style.display = "block";
    document.getElementById("sheetArcaneShotsList").innerHTML = currentCharacter.arcaneShots.map(name => {
      const opt = arcaneShots.find(o => o.name === name);
      return `<div class="feature-item"><strong>${name}</strong><br><span class="feature-desc">${opt ? opt.description : ""}</span></div>`;
    }).join("");
  } else { asArea.style.display = "none"; }
}

function populateDetailsTab() {
  if (!currentCharacter) return;
  document.getElementById("detailsRace").value = currentCharacter.race || "";
  document.getElementById("detailsSubrace").value = currentCharacter.subrace || "";
  document.getElementById("detailsClass").value = currentCharacter.class || "";
  document.getElementById("detailsSubclass").value = currentCharacter.subclass || "";
  document.getElementById("detailsBackground").value = currentCharacter.background || "";
  document.getElementById("detailsAlignment").value = currentCharacter.alignment || "N";
  // Languages from race data
  const race = races[currentCharacter.race];
  let langs = [];
  if (race) {
    const subrace = race.subraces.find(s => s.name === currentCharacter.subrace);
    if (subrace) langs = subrace.languages || [];
  }
  document.getElementById("detailsLanguages").value = (langs.join(", ")) || "";
  // Proficiencies summary
  const profCls = classes[currentCharacter.class];
  let profs = [];
  if (profCls) profs.push(...profCls.armorProficiencies, ...profCls.weaponProficiencies);
  if (currentCharacter.skillProficiencies) profs.push(...currentCharacter.skillProficiencies.map(s => "Skill: " + s));
  // Dragonborn ancestry
  if (currentCharacter.dragonbornAncestry) {
    const anc = dragonAncestries.find(a => a.name === currentCharacter.dragonbornAncestry);
    if (anc) profs.push("Breath Weapon: " + anc.damageType + " (" + anc.breathShape + "), Resistance: " + anc.resistance);
  }
  // Sorcerer dragon ancestry
  if (currentCharacter.sorcererDragonAncestry) {
    profs.push("Draconic Ancestor: " + currentCharacter.sorcererDragonAncestry);
  }
  document.getElementById("detailsProficiencies").value = profs.join("\n");
  // Background feature
  const bgFeature = currentCharacter.backgroundFeature || (backgrounds[currentCharacter.background]?.feature);
  const bgFeatureDiv = document.getElementById("detailsBackgroundFeature");
  if (bgFeatureDiv) {
    if (bgFeature) {
      bgFeatureDiv.innerHTML = `<strong>${bgFeature.name}</strong>: ${bgFeature.description}`;
    } else {
      bgFeatureDiv.innerHTML = `<span class="eq-summary-empty">No background feature available.</span>`;
    }
  }
  // Custom properties
  const propsContainer = document.getElementById("customPropertiesDisplay");
  if (currentCharacter.customProperties && Object.keys(currentCharacter.customProperties).length) {
    let propsHtml = '<ul>';
    for (let [key, value] of Object.entries(currentCharacter.customProperties)) {
      propsHtml += `<li><strong>${escapeHtml(key)}:</strong> ${escapeHtml(value)}</li>`;
    }
    propsHtml += '</ul>';
    propsContainer.innerHTML = propsHtml;
  } else {
    propsContainer.innerHTML = '<span class="eq-summary-empty">No custom properties set.</span>';
  }
  // Notes
  const notesContainer = document.getElementById("characterNotesDisplay");
  if (currentCharacter.notes && currentCharacter.notes.length) {
    let notesHtml = '<ul>';
    for (let note of currentCharacter.notes) {
      notesHtml += `<li>${escapeHtml(note)}</li>`;
    }
    notesHtml += '</ul>';
    notesContainer.innerHTML = notesHtml;
  } else {
    notesContainer.innerHTML = '<span class="eq-summary-empty">No notes added.</span>';
  }
}

function saveCharacterSheet() {
  if (!currentCharacter) return;
  currentCharacter.name = document.getElementById("sheetCharName").innerText;
  currentCharacter.level = parseInt(document.getElementById("sheetLevel").value) || 1;
  for (let ab of abilities) {
    const val = parseInt(document.getElementById(`stat-${ab.toLowerCase()}-score`).value);
    if (!isNaN(val)) currentCharacter.abilityScores[ab] = Math.min(30, Math.max(1, val));
  }
  currentCharacter.appearance = document.getElementById("backstoryAppearance").value;
  currentCharacter.backstory = document.getElementById("backstoryText").value;
  currentCharacter.personalityTraits = document.getElementById("backstoryTraits").value;
  currentCharacter.currency = {
    cp: parseInt(document.getElementById("inventoryCP").value) || 0,
    sp: parseInt(document.getElementById("inventorySP").value) || 0,
    ep: parseInt(document.getElementById("inventoryEP").value) || 0,
    gp: parseInt(document.getElementById("inventoryGP").value) || 0,
    pp: parseInt(document.getElementById("inventoryPP").value) || 0
  };
  currentCharacter.equipment = currentCharacter.equipment || {};
  currentCharacter.equipment.armor = document.getElementById("equipmentArmor").value;
  currentCharacter.equipment.shield = document.getElementById("equipmentShield").checked;
  // Save full inventory row data as structured array
  currentCharacter.inventory = Array.from(document.querySelectorAll("#inventoryBody tr"))
    .map(row => ({
      name: row.querySelector('.inv-name')?.value || '',
      quantity: parseInt(row.querySelector('.inv-qty')?.value) || 1,
      weight: row.querySelector('.inv-weight')?.value || '',
      notes: row.querySelector('.inv-notes')?.value || ''
    }))
    .filter(item => item.name.trim());
  currentCharacter.cantrips = document.getElementById("spellCantrips").value.split("\n").filter(l => l.trim());
  currentCharacter.spells = document.getElementById("spellSpells").value.split("\n").filter(l => l.trim());
  currentCharacter.feats = document.getElementById("featsList").value;
  currentCharacter.alignment = document.getElementById("detailsAlignment").value;
  // Recalc HP based on level and Con
  const cls = classes[currentCharacter.class];
  if (cls) {
    const baseHp = cls.hitDie === "d6" ? 6 : cls.hitDie === "d8" ? 8 : cls.hitDie === "d10" ? 10 : 12;
    const conMod = calculateModifier(currentCharacter.abilityScores.Constitution);
    const computedMax = baseHp + conMod;
    currentCharacter.maxHp = computedMax;
    // Keep current HP in bounds
    currentCharacter.hp = Math.min(currentCharacter.hp || computedMax, computedMax);
  }
  // Also read HP from sheet inputs if available
  const hpInput = document.getElementById('sheetHP');
  const tempInput = document.getElementById('sheetTempHP');
  if (hpInput) {
    const val = parseInt(hpInput.value);
    if (!isNaN(val)) currentCharacter.hp = Math.max(0, Math.min(currentCharacter.maxHp, val));
  }
  if (tempInput) {
    const val = parseInt(tempInput.value);
    if (!isNaN(val)) currentCharacter.tempHp = Math.max(0, val);
  }
  localStorage.setItem('dnd_current_character', JSON.stringify(currentCharacter));
  recalcDerivedStats();
  // Update HP display after save
  updateHPDisplay();
}

function openCharacterSheetModal() {
  if (!characterSheetModal) return;
  if (currentCharacter) {
    populateCharacterSheet();
  }
  characterSheetModal.style.display = 'flex';
  setTimeout(() => characterSheetModal.classList.add('show'), 10);
}
function closeCharacterSheetModal() { if (!characterSheetModal) return; characterSheetModal.classList.remove('show'); setTimeout(() => { characterSheetModal.style.display = 'none'; }, 200); }
function initSheetTabs() { const tabs = document.querySelectorAll('.sheet-tab'); const contents = document.querySelectorAll('.sheet-tab-content'); tabs.forEach(tab => { tab.addEventListener('click', () => { const targetId = tab.dataset.tab; tabs.forEach(t => t.classList.remove('active')); tab.classList.add('active'); contents.forEach(content => content.style.display = 'none'); const activeContent = document.getElementById(`tab-${targetId}`); if (activeContent) activeContent.style.display = 'block'; }); }); }
function closeWizard() { if (charCreationWizard) { charCreationWizard.classList.remove('show'); setTimeout(() => { charCreationWizard.style.display = 'none'; }, 200); } pendingOpenWorldConfig = null; pendingStoryCampaign = null; }

/* ── Settings Modal ── */
const MODEL_OPTIONS = [
  'openrouter/owl-alpha',
  'openai/gpt-oss-120b:free'
];

const DEFAULT_MODEL = 'openai/gpt-oss-120b:free';

function populateModelDroplist(select, savedModel) {
  select.innerHTML = '';
  MODEL_OPTIONS.forEach(id => {
    const opt = document.createElement('option');
    opt.value = id;
    opt.text = id;
    select.add(opt);
  });
  select.value = savedModel && MODEL_OPTIONS.includes(savedModel) ? savedModel : DEFAULT_MODEL;
  select.disabled = false;
}

function loadSettings() {
  const saved = localStorage.getItem('dnd_ai_settings');
  if (saved) {
    try {
      const settings = JSON.parse(saved);
      document.getElementById('settingsApiKey').value = settings.apiKey || '';
      const select = document.getElementById('settingsModelSelect');
      populateModelDroplist(select, settings.model);
      return settings;
    } catch (e) { /* ignore */ }
  }
  // Default settings
  const select = document.getElementById('settingsModelSelect');
  if (select) {
    populateModelDroplist(select, DEFAULT_MODEL);
  }
  return { apiKey: '', model: DEFAULT_MODEL };
}

function saveSettings() {
  const apiKey = document.getElementById('settingsApiKey').value.trim();
  const model = document.getElementById('settingsModelSelect').value || DEFAULT_MODEL;
  const settings = { apiKey, model };
  localStorage.setItem('dnd_ai_settings', JSON.stringify(settings));
  updateModelBadge();
}

function openSettingsModal() {
  const modal = document.getElementById('settingsModal');
  if (!modal) return;
  loadSettings();
  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('show'), 10);
}

function closeSettingsModal() {
  const modal = document.getElementById('settingsModal');
  if (!modal) return;
  modal.classList.remove('show');
  setTimeout(() => { modal.style.display = 'none'; }, 200);
}

async function fetchModels() {
  const apiKey = document.getElementById('settingsApiKey').value.trim();
  const statusEl = document.getElementById('modelStatus');
  const select = document.getElementById('settingsModelSelect');
  if (!apiKey) { statusEl.innerText = '❌ Please enter an API key first.'; return; }
  statusEl.innerText = '🔄 Validating API key...';
  statusEl.style.color = '#C8A96E';
  try {
    const response = await fetch('https://openrouter.ai/api/v1/auth/key', {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    });
    if (!response.ok) {
      statusEl.innerText = `❌ API key rejected (${response.status}).`;
      statusEl.style.color = '#C85A3A';
      return;
    }
    // Repopulate our fixed model droplist
    populateModelDroplist(select, localStorage.getItem('dnd_ai_settings')
      ? (JSON.parse(localStorage.getItem('dnd_ai_settings')).model || DEFAULT_MODEL)
      : DEFAULT_MODEL);
    select.disabled = false;
    statusEl.innerText = `✅ API key valid. Models ready.`;
    statusEl.style.color = '#4CAF50';
  } catch (err) {
    statusEl.innerText = `❌ Network error: ${err.message}`;
    statusEl.style.color = '#C85A3A';
  }
}

async function testConnection() {
  const apiKey = document.getElementById('settingsApiKey').value.trim();
  const statusEl = document.getElementById('testConnectionStatus');
  if (!apiKey) { statusEl.innerText = '❌ Enter an API key first.'; return; }
  statusEl.innerText = '🔄 Testing connection...';
  statusEl.style.color = '#C8A96E';
  try {
    const response = await fetch('https://openrouter.ai/api/v1/auth/key', {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    });
    if (response.ok) {
      statusEl.innerText = '✅ Connection successful! API key is valid.';
      statusEl.style.color = '#4CAF50';
    } else if (response.status === 401) {
      statusEl.innerText = '❌ Invalid API key (401).';
      statusEl.style.color = '#C85A3A';
    } else {
      statusEl.innerText = `❌ Error (${response.status}).`;
      statusEl.style.color = '#C85A3A';
    }
  } catch (err) {
    statusEl.innerText = `❌ Network error: ${err.message}`;
    statusEl.style.color = '#C85A3A';
  }
}

/* ── Quest Tracker ── */
let quests = [];
let questLog = [];

function getQuestStorageKey() {
  if (!selectedCampaignId) return null;
  return `dnd_quests_${selectedCampaignId}`;
}

function loadQuests() {
  const key = getQuestStorageKey();
  if (!key) { quests = []; return; }
  const stored = localStorage.getItem(key);
  quests = stored ? JSON.parse(stored) : [];
}

function saveQuests() {
  const key = getQuestStorageKey();
  if (!key) return;
  localStorage.setItem(key, JSON.stringify(quests));
}

function addQuestLog(entry) {
  questLog.unshift({ text: entry, time: new Date().toLocaleString() });
  if (questLog.length > 50) questLog.length = 50;
}

function createQuest(name, description, source = 'manual') {
  const quest = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2,6),
    name, description, status: 'active',
    milestones: [],
    source,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  quests.push(quest);
  saveQuests();
  const lbl = source === 'ai' ? '🤖 AI' : '✏️ Player';
  addQuestLog(`${lbl} created quest "${name}"`);
  return quest;
}

function updateQuest(id, updates) {
  const q = quests.find(x => x.id === id);
  if (!q) return;
  Object.assign(q, updates, { updatedAt: new Date().toISOString() });
  saveQuests();
}

function completeQuest(id) {
  const q = quests.find(x => x.id === id);
  if (!q) return;
  q.status = 'completed';
  q.milestones.forEach(m => m.completed = true);
  q.updatedAt = new Date().toISOString();
  saveQuests();
  addQuestLog(`✔️ Completed quest "${q.name}"`);
}

function failQuest(id) {
  const q = quests.find(x => x.id === id);
  if (!q) return;
  q.status = 'failed';
  q.updatedAt = new Date().toISOString();
  saveQuests();
  addQuestLog(`❌ Failed quest "${q.name}"`);
}

function archiveQuest(id) {
  const q = quests.find(x => x.id === id);
  if (!q) return;
  q.status = 'archived';
  q.updatedAt = new Date().toISOString();
  saveQuests();
  addQuestLog(`📦 Archived quest "${q.name}"`);
}

function restoreQuest(id) {
  const q = quests.find(x => x.id === id);
  if (!q) return;
  q.status = 'active';
  q.updatedAt = new Date().toISOString();
  saveQuests();
  addQuestLog(`🔄 Restored quest "${q.name}"`);
}

function deleteQuest(id) {
  const q = quests.find(x => x.id === id);
  if (!q) return;
  const name = q.name;
  quests = quests.filter(x => x.id !== id);
  saveQuests();
  addQuestLog(`🗑️ Deleted quest "${name}"`);
}

function addMilestone(questId, text) {
  const q = quests.find(x => x.id === questId);
  if (!q) return;
  q.milestones.push({ text, completed: false });
  q.updatedAt = new Date().toISOString();
  saveQuests();
}

function toggleMilestone(questId, idx) {
  const q = quests.find(x => x.id === questId);
  if (!q || !q.milestones[idx]) return;
  q.milestones[idx].completed = !q.milestones[idx].completed;
  q.updatedAt = new Date().toISOString();
  saveQuests();
  const m = q.milestones[idx];
  const lbl = m.completed ? '✔️' : '🔄';
  addQuestLog(`${lbl} Milestone "${m.text}" for quest "${q.name}"`);
}

function renderQuests() {
  const activeList = document.getElementById('questActiveList');
  const archList = document.getElementById('questArchivedList');
  if (!activeList) return;
  const active = quests.filter(q => q.status === 'active');
  const archived = quests.filter(q => q.status !== 'active');
  activeList.innerHTML = active.length ? active.map(q => renderQuestCard(q)).join('') :
    '<div class="quest-empty">No active quests. Start a new adventure or add one manually.</div>';
  archList.innerHTML = archived.length ? archived.map(q => renderQuestCard(q)).join('') :
    '<div class="quest-empty">No archived quests.</div>';
  // Log
  const logContent = document.getElementById('questLogContent');
  if (logContent) {
    logContent.innerHTML = questLog.length ? questLog.map(e =>
      `<div class="quest-log-entry">${e.text} <span style="color:#555;font-size:0.65rem;">(${e.time})</span></div>`
    ).join('') : '<div class="quest-empty" style="padding:10px;">No activity yet.</div>';
  }
}

function renderQuestCard(q) {
  const total = q.milestones.length;
  const done = q.milestones.filter(m => m.completed).length;
  const pct = total > 0 ? Math.round(done/total*100) : 0;
  const statusClass = `quest-status-${q.status}`;
  const icon = q.source === 'ai' ? '🤖' : '✏️';
  const milHtml = q.milestones.map((m, i) =>
    `<div class="quest-milestone ${m.completed ? 'done' : ''}">
      <input type="checkbox" ${m.completed ? 'checked' : ''} data-quest-id="${q.id}" data-idx="${i}">
      ${m.text}
    </div>`
  ).join('');
  const actions = q.status === 'active' ? `
    <button class="btn-complete" data-action="complete" data-id="${q.id}">Complete</button>
    <button class="btn-fail" data-action="fail" data-id="${q.id}">Fail</button>
    <button data-action="archive" data-id="${q.id}">Archive</button>
    <button data-action="edit" data-id="${q.id}">Edit</button>
    <button data-action="addMilestone" data-id="${q.id}">+ Milestone</button>
  ` : `
    <button data-action="restore" data-id="${q.id}">Restore</button>
    <button data-action="delete" data-id="${q.id}" style="border-color:#C85A3A;color:#C85A3A;">Delete</button>
  `;
  return `<div class="quest-card">
    <div class="quest-card-header">
      <span class="quest-card-icon">${icon}</span>
      <span class="quest-card-name">${q.name}</span>
      <span class="quest-card-status ${statusClass}">${q.status}</span>
    </div>
    <div class="quest-card-desc">${q.description || ''}</div>
    ${total > 0 ? `<div class="quest-milestones">${milHtml}</div>
    <div class="quest-progress">Progress: ${done}/${total} milestones</div>
    <div class="quest-progress-bar"><div class="quest-progress-fill" style="width:${pct}%"></div></div>` : ''}
    <div class="quest-card-actions">${actions}</div>
  </div>`;
}

function openQuestModal() {
  const modal = document.getElementById('questModal');
  if (!modal) return;
  if (!selectedCampaignId) { alert('Please select a campaign first.'); return; }
  loadQuests();
  renderQuests();
  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('show'), 10);
}

function closeQuestModal() {
  const modal = document.getElementById('questModal');
  if (!modal) return;
  modal.classList.remove('show');
  setTimeout(() => { modal.style.display = 'none'; }, 200);
}

function handleQuestAction(e) {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const action = btn.dataset.action;
  const id = btn.dataset.id;
  switch (action) {
    case 'complete': completeQuest(id); renderQuests(); break;
    case 'fail': failQuest(id); renderQuests(); break;
    case 'archive': archiveQuest(id); renderQuests(); break;
    case 'restore': restoreQuest(id); renderQuests(); break;
    case 'delete': if (confirm('Delete permanently?')) { deleteQuest(id); renderQuests(); } break;
    case 'edit': openQuestEdit(id); break;
    case 'addMilestone': {
      const text = prompt('Enter milestone text:');
      if (text && text.trim()) { addMilestone(id, text.trim()); renderQuests(); }
      break;
    }
  }
}

// Quest edit modal
let editingQuestId = null;

function openQuestEdit(id) {
  editingQuestId = id;
  const q = id ? quests.find(x => x.id === id) : null;
  document.getElementById('questEditTitle').innerText = q ? 'Edit Quest' : 'New Quest';
  document.getElementById('questEditName').value = q ? q.name : '';
  document.getElementById('questEditDesc').value = q ? (q.description || '') : '';
  renderEditMilestones(q ? q.milestones : []);
  document.getElementById('questEditModal').style.display = 'flex';
  setTimeout(() => document.getElementById('questEditModal').classList.add('show'), 10);
}

function closeQuestEdit() {
  const modal = document.getElementById('questEditModal');
  if (!modal) return;
  modal.classList.remove('show');
  setTimeout(() => { modal.style.display = 'none'; }, 200);
  editingQuestId = null;
}

function renderEditMilestones(milestones) {
  const container = document.getElementById('questEditMilestones');
  container.innerHTML = milestones.map((m, i) =>
    `<div class="quest-milestone"><input type="checkbox" ${m.completed ? 'checked' : ''} data-edit-idx="${i}" style="width:13px;height:13px;">
    <input type="text" class="sheet-input" value="${m.text}" data-edit-idx="${i}" style="flex:1;padding:4px 6px;font-size:0.75rem;">
    <button class="small-btn" data-remove-idx="${i}" style="color:#C85A3A;">✖</button></div>`
  ).join('');
}

function saveQuestEdit() {
  const name = document.getElementById('questEditName').value.trim();
  const desc = document.getElementById('questEditDesc').value.trim();
  if (!name) { alert('Quest name is required.'); return; }
  // Collect milestones
  const milestoneInputs = document.querySelectorAll('#questEditMilestones input[type="text"]');
  const milestoneChecks = document.querySelectorAll('#questEditMilestones input[type="checkbox"]');
  const milestones = [];
  milestoneInputs.forEach((inp, i) => {
    const txt = inp.value.trim();
    if (txt) milestones.push({ text: txt, completed: milestoneChecks[i]?.checked || false });
  });
  // Remove empty trailing
  while (milestones.length && !milestones[milestones.length-1].text) milestones.pop();
  if (editingQuestId) {
    const q = quests.find(x => x.id === editingQuestId);
    if (q) { q.name = name; q.description = desc; q.milestones = milestones; q.updatedAt = new Date().toISOString(); }
  } else {
    createQuest(name, desc, 'manual').milestones = milestones;
  }
  saveQuests();
  closeQuestEdit();
  renderQuests();
}

function parseQuestCommands(text) {
  // Parse [QUEST CREATE: "Name"|"Description"]
  const createRegex = /\[QUEST CREATE:\s*"([^"]+)"\s*\|\s*"([^"]*)"\s*\]/gi;
  let match;
  while ((match = createRegex.exec(text)) !== null) {
    const name = match[1];
    const desc = match[2];
    const existing = quests.find(q => q.name.toLowerCase() === name.toLowerCase() && q.status === 'active');
    if (existing) {
      existing.description = desc || existing.description;
      existing.updatedAt = new Date().toISOString();
      addQuestLog(`🤖 AI updated quest "${name}"`);
    } else {
      createQuest(name, desc, 'ai');
    }
  }
  // Parse [QUEST COMPLETE: "Name"]
  const completeRegex = /\[QUEST COMPLETE:\s*"([^"]+)"\s*\]/gi;
  while ((match = completeRegex.exec(text)) !== null) {
    const q = quests.find(x => x.name.toLowerCase() === match[1].toLowerCase() && x.status === 'active');
    if (q) completeQuest(q.id);
  }
  // Parse [QUEST FAIL: "Name"]
  const failRegex = /\[QUEST FAIL:\s*"([^"]+)"\s*\]/gi;
  while ((match = failRegex.exec(text)) !== null) {
    const q = quests.find(x => x.name.toLowerCase() === match[1].toLowerCase() && x.status === 'active');
    if (q) failQuest(q.id);
  }
  // Parse [QUEST MILESTONE: "Name"|"Milestone"|complete/fail]
  const milRegex = /\[QUEST MILESTONE:\s*"([^"]+)"\s*\|\s*"([^"]+)"\s*\|\s*(\w+)\s*\]/gi;
  while ((match = milRegex.exec(text)) !== null) {
    const q = quests.find(x => x.name.toLowerCase() === match[1].toLowerCase() && x.status === 'active');
    if (q) {
      const txt = match[2];
      const status = match[3].toLowerCase();
      const existingIdx = q.milestones.findIndex(m => m.text.toLowerCase() === txt.toLowerCase());
      if (status === 'complete' && existingIdx >= 0) {
        toggleMilestone(q.id, existingIdx);
      } else if (status === 'create' || status === 'add') {
        addMilestone(q.id, txt);
      }
    }
  }
  saveQuests();
  return text.replace(/\[QUEST[^\]]*\]/gi, '').trim();
}

function getActiveQuestsForPrompt() {
  const active = quests.filter(q => q.status === 'active');
  if (!active.length) return '';
  return 'Active Quests:\n' + active.map(q => {
    const total = q.milestones.length;
    const done = q.milestones.filter(m => m.completed).length;
    const progress = total > 0 ? ` (progress: ${done}/${total} milestones)` : '';
    return `- ${q.name}${progress}`;
  }).join('\n');
}

/* ═══════════════════════════════════════════════════════
   PORTRAIT CROPPING — Shared by Character & NPC
═══════════════════════════════════════════════════════ */

/**
 * Show the crop modal with an image Blob/URL.
 * @param {string} imageUrl - A blob URL or object URL for the image.
 * @param {number} aspectRatio - Aspect ratio for the crop box (default 1/1 square).
 * @returns {Promise<string>} Resolves with cropped base64 data URL, or rejects if cancelled.
 */
function showCropModal(imageUrl, aspectRatio = 1/1) {
  return new Promise((resolve, reject) => {
    const modal = document.getElementById('cropModal');
    const cropImg = document.getElementById('cropImage');
    if (!modal || !cropImg) { reject(new Error('Crop modal not found')); return; }

    // Clean up any previous cropper
    if (cropper) {
      cropper.destroy();
      cropper = null;
    }

    currentCropResolve = { resolve, reject };

    cropImg.src = imageUrl;
    modal.style.display = 'flex';
    setTimeout(() => {
      modal.classList.add('show');
      // Initialize cropper after the image is loaded
      cropImg.onload = function() {
        cropper = new Cropper(cropImg, {
          aspectRatio: aspectRatio,
          viewMode: 1,
          dragMode: 'crop',
          autoCropArea: 1,
          restore: false,
          guides: true,
          center: true,
          highlight: false,
          cropBoxMovable: true,
          cropBoxResizable: true,
          toggleDragModeOnDblclick: false,
        });
      };
      // If image already loaded
      if (cropImg.complete && cropImg.naturalWidth) {
        cropImg.onload = null;
        cropper = new Cropper(cropImg, {
          aspectRatio: aspectRatio,
          viewMode: 1,
          dragMode: 'crop',
          autoCropArea: 1,
          restore: false,
          guides: true,
          center: true,
          highlight: false,
          cropBoxMovable: true,
          cropBoxResizable: true,
          toggleDragModeOnDblclick: false,
        });
      }
    }, 10);
  });
}

function closeCropModal() {
  const modal = document.getElementById('cropModal');
  if (!modal) return;
  if (cropper) {
    cropper.destroy();
    cropper = null;
  }
  modal.classList.remove('show');
  setTimeout(() => { modal.style.display = 'none'; }, 200);
  if (currentCropResolve) {
    currentCropResolve.reject(new Error('Crop cancelled'));
    currentCropResolve = null;
  }
}

function applyCrop() {
  if (!cropper || !currentCropResolve) return;
  const canvas = cropper.getCroppedCanvas({
    width: 256,
    height: 256,
    imageSmoothingQuality: 'high',
  });
  const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
  const resolve = currentCropResolve;
  currentCropResolve = null;
  closeCropModal();
  resolve.resolve(dataUrl);
}

function updateCharacterPortrait(base64Data) {
  const img = document.getElementById('charPortraitImg');
  const placeholder = document.getElementById('charPortraitPlaceholder');
  if (!img || !placeholder) return;
  img.src = base64Data;
  img.style.display = 'block';
  placeholder.style.display = 'none';
  if (currentCharacter) {
    currentCharacter.portrait = base64Data;
    localStorage.setItem('dnd_current_character', JSON.stringify(currentCharacter));
  }
}

/* ── NPC Directory ── */
let npcs = [];

function getNpcStorageKey() {
  if (!selectedCampaignId) return null;
  return `dnd_npcs_${selectedCampaignId}`;
}

function loadNPCs() {
  const key = getNpcStorageKey();
  if (!key) { npcs = []; return; }
  const stored = localStorage.getItem(key);
  npcs = stored ? JSON.parse(stored) : [];
}

function saveNPCs() {
  const key = getNpcStorageKey();
  if (!key) return;
  localStorage.setItem(key, JSON.stringify(npcs));
}

function addNPC(data) {
  const npc = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2,6),
    name: data.name.trim(),
    role: data.role || '',
    location: data.location || '',
    description: data.description || '',
    relationship: data.relationship || 'Unknown',
    portrait: data.portrait || '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  npcs.push(npc);
  saveNPCs();
  return npc;
}

function updateNPC(id, data) {
  const npc = npcs.find(n => n.id === id);
  if (!npc) return;
  Object.assign(npc, data, { updatedAt: new Date().toISOString() });
  saveNPCs();
}

function deleteNPC(id) {
  npcs = npcs.filter(n => n.id !== id);
  saveNPCs();
}

function renderNPCList() {
  const container = document.getElementById('npcGrid');
  const search = (document.getElementById('npcSearchInput').value || '').toLowerCase();
  if (!container) return;
  let filtered = npcs;
  if (search) {
    filtered = npcs.filter(n =>
      n.name.toLowerCase().includes(search) ||
      (n.location || '').toLowerCase().includes(search) ||
      (n.role || '').toLowerCase().includes(search)
    );
  }
  if (!filtered.length) {
    container.innerHTML = '<div class="npc-empty">' + (search ? 'No NPCs match your search.' : 'No NPCs recorded yet. Add one or the AI will log them automatically.') + '</div>';
    return;
  }
  container.innerHTML = filtered.map(n => {
    const portraitSrc = n.portrait ? n.portrait : '';
    const portraitStyle = n.portrait ? '' : ' style="display:none;"';
    const placeholderStyle = n.portrait ? ' style="display:none;"' : '';
    const relClass = (n.relationship || 'Unknown').replace(/\s+/g, '');
    return `<div class="npc-card" data-npc-id="${n.id}">
      <div class="npc-card-portrait">
        <img src="${portraitSrc}" alt="${escapeHtml(n.name)}"${portraitStyle}>
        <div class="portrait-placeholder-small"${placeholderStyle}>🎭</div>
      </div>
      <div class="npc-card-info">
        <div class="npc-card-name">${escapeHtml(n.name)}</div>
        <div class="npc-card-role-loc">${escapeHtml(n.role)}${n.role && n.location ? ' – ' : ''}${escapeHtml(n.location)}</div>
        <div class="npc-card-desc">${escapeHtml(n.description)}</div>
        <span class="npc-relationship ${relClass}">${escapeHtml(n.relationship)}</span>
      </div>
      <div class="npc-card-actions">
        <button data-npc-action="edit" data-npc-id="${n.id}" title="Edit">✏️</button>
        <button data-npc-action="delete" data-npc-id="${n.id}" title="Delete">🗑</button>
      </div>
    </div>`;
  }).join('');
}

function openNPCDirectory() {
  const modal = document.getElementById('npcDirectoryModal');
  if (!modal) return;
  if (!selectedCampaignId) { alert('Please select a campaign first.'); return; }
  loadNPCs();
  renderNPCList();
  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('show'), 10);
}

function closeNPCDirectory() {
  const modal = document.getElementById('npcDirectoryModal');
  if (!modal) return;
  modal.classList.remove('show');
  setTimeout(() => { modal.style.display = 'none'; }, 200);
}

function handleNpcAction(e) {
  const btn = e.target.closest('[data-npc-action]');
  if (!btn) return;
  const action = btn.dataset.npcAction;
  const id = btn.dataset.npcId;
  if (action === 'edit') { openNPCForm(id); return; }
  if (action === 'delete') {
    const npc = npcs.find(n => n.id === id);
    if (npc && confirm(`Delete "${npc.name}"? This action is permanent.`)) { deleteNPC(id); renderNPCList(); }
  }
}

// NPC form modal
let editingNpcId = null;

function openNPCForm(id) {
  editingNpcId = id || null;
  const npc = id ? npcs.find(n => n.id === id) : null;
  document.getElementById('npcFormTitle').innerText = npc ? 'Edit NPC' : 'Add NPC';
  document.getElementById('npcFormName').value = npc ? npc.name : '';
  document.getElementById('npcFormRole').value = npc ? npc.role : '';
  document.getElementById('npcFormLocation').value = npc ? npc.location : '';
  document.getElementById('npcFormDesc').value = npc ? npc.description : '';
  document.getElementById('npcFormRelationship').value = npc ? npc.relationship : 'Neutral';
  // Portrait
  tempNpcPortrait = npc ? (npc.portrait || '') : '';
  const preview = document.getElementById('npcPortraitPreview');
  const placeholder = document.getElementById('npcPortraitPlaceholder');
  if (tempNpcPortrait) {
    preview.src = tempNpcPortrait;
    preview.style.display = 'block';
    placeholder.style.display = 'none';
  } else {
    preview.style.display = 'none';
    placeholder.style.display = 'flex';
  }
  document.getElementById('npcFormModal').style.display = 'flex';
  setTimeout(() => document.getElementById('npcFormModal').classList.add('show'), 10);
}

function closeNPCForm() {
  const modal = document.getElementById('npcFormModal');
  if (!modal) return;
  modal.classList.remove('show');
  setTimeout(() => { modal.style.display = 'none'; }, 200);
  editingNpcId = null;
  tempNpcPortrait = '';
}

// Temp storage for NPC portrait during form editing
let tempNpcPortrait = '';

function saveNPCForm() {
  const name = document.getElementById('npcFormName').value.trim();
  if (!name) { alert('NPC name is required.'); return; }
  const data = {
    name,
    portrait: tempNpcPortrait || '',
    role: document.getElementById('npcFormRole').value.trim(),
    location: document.getElementById('npcFormLocation').value.trim(),
    description: document.getElementById('npcFormDesc').value.trim(),
    relationship: document.getElementById('npcFormRelationship').value
  };
  if (editingNpcId) {
    updateNPC(editingNpcId, data);
  } else {
    addNPC(data);
  }
  tempNpcPortrait = '';
  closeNPCForm();
  renderNPCList();
}

function getNPCsForPrompt() {
  if (!npcs.length) return '';
  return 'Known NPCs: ' + npcs.map(n => `${n.name} (${n.role ? n.role + ', ' : ''}${n.relationship}${n.location ? ', ' + n.location : ''})`).join('; ') + '.';
}

function openCharacterCreationWizard() {
  if (!charCreationWizard) return;
  wizardStep = 1;
  selectedRace = "Dwarf"; selectedSubrace = "Hill Dwarf"; selectedClass = "Fighter"; selectedSubclass = ""; selectedBackground = "Acolyte"; characterLevel = 3;
  const racialBonuses = getCurrentRacialBonuses();
  for (let ab of abilities) {
    const bonus = racialBonuses[ab] || 0;
    finalScores[ab] = 8 + bonus;
  }
  chosenCantrips = []; chosenSpells = []; characterName = "";
  selectedArmor = ""; hasShield = false; selectedWeapons = []; customItems = "";
  chosenMetamagic = []; chosenInvocations = []; chosenManeuvers = []; chosenArcaneShots = [];
  selectedPactBoon = "";
  const pactSelect = document.getElementById("wizardPactBoon");
  if (pactSelect) pactSelect.innerHTML = "";
  const raceSelect = document.getElementById("wizardRace");
  if (raceSelect) { raceSelect.innerHTML = Object.keys(races).map(r => `<option value="${r}">${r}</option>`).join(""); raceSelect.value = "Dwarf"; updateSubraceDropdown(); }
  const classSelect = document.getElementById("wizardClass");
  if (classSelect) { classSelect.innerHTML = Object.keys(classes).map(c => `<option value="${c}">${c}</option>`).join(""); classSelect.value = "Fighter"; updateSubclassDropdown(); }
  const bgSelect = document.getElementById("wizardBackground");
  if (bgSelect) { bgSelect.innerHTML = Object.keys(backgrounds).map(b => `<option value="${b}">${b}</option>`).join(""); bgSelect.value = "Acolyte"; }
  document.getElementById("wizardLevel").value = 3;
  selectedDragonbornAncestry = ""; selectedSorcererAncestry = "";
  updateDragonbornUI(); updateRacialTraitsPanel(); updateClassSummaryPanel();
  updateRaceDescription(); updateClassDescription(); updateSubclassDescription(); updateBackgroundDescription();
  updateWizardUI();
  charCreationWizard.style.display = 'flex';
  setTimeout(() => charCreationWizard.classList.add('show'), 10);
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
  sidebar = document.getElementById('sidebar');
  sessionSec = document.getElementById('session-section');
  mainContent = document.getElementById('main-content');
  // demoToggleSes removed
  campaignModal = document.getElementById('campaignModal');
  sessionListDiv = document.getElementById('sessionList');
  emptyStateDiv = document.getElementById('emptyState');
  deleteCampaignBtn = document.getElementById('deleteCampaignBtn');
  newCampaignBtn = document.getElementById('newCampaignBtn');
  confirmModal = document.getElementById('confirmDeleteModal');
  confirmMessage = document.getElementById('confirmMessage');
  confirmDeleteBtn = document.querySelector('.confirm-delete');
  confirmCancelBtn = document.querySelector('.confirm-cancel');
  selectionModal = document.getElementById('campaignSelectionModal');
  configModal = document.getElementById('openWorldConfigModal');
  campaignListDiv = document.getElementById('campaignList');
  characterSheetModal = document.getElementById('characterSheetModal');
  charCreationWizard = document.getElementById('charCreationWizard');
  loadCampaigns();
  document.getElementById('closeModalBtn').onclick = closeCampaignModal;
  if (newCampaignBtn) newCampaignBtn.onclick = newCampaign;
  if (deleteCampaignBtn) deleteCampaignBtn.onclick = deleteCampaign;
  document.getElementById('closeSelectionBtn').onclick = closeCampaignSelectionModal;
  // Custom campaign modal wiring
  const customCampaignModal = document.getElementById('customCampaignModal');
  document.getElementById('createCustomCampaignBtn').addEventListener('click', () => {
    closeCampaignSelectionModal();
    customCampaignModal.style.display = 'flex';
    setTimeout(() => customCampaignModal.classList.add('show'), 10);
  });
  function closeCustomCampaignModal() {
    customCampaignModal.classList.remove('show');
    setTimeout(() => { customCampaignModal.style.display = 'none'; }, 200);
  }
  document.getElementById('closeCustomCampaignBtn').addEventListener('click', closeCustomCampaignModal);
  document.getElementById('cancelCustomCampaignBtn').addEventListener('click', closeCustomCampaignModal);
  document.getElementById('submitCustomCampaignBtn').addEventListener('click', () => {
    const name = document.getElementById('customCampaignName').value.trim();
    const nameError = document.getElementById('customCampaignNameError');
    if (!name) {
      nameError.style.display = 'block';
      return;
    }
    nameError.style.display = 'none';

    const campaignType = document.querySelector('input[name="campaignType"]:checked').value;
    const location = document.getElementById('customCampaignLocation').value.trim();
    const worldDesc = document.getElementById('customWorldDescription').value.trim();
    const tone = document.getElementById('customCampaignTone').value;
    const plotHook = document.getElementById('customMainPlotHook').value.trim();
    const tagsRaw = document.getElementById('customCampaignTags').value.trim();
    const tags = tagsRaw ? tagsRaw.split(',').map(t => t.trim()) : [];
    const houseRules = document.getElementById('customHouseRules').value.trim();

    const newCampaign = {
      id: Date.now().toString(),
      name,
      lastPlayed: new Date().toISOString().slice(0,10),
      type: campaignType,
      config: {
        location: location || (campaignType === 'openworld' ? 'Random' : 'Unknown'),
        tone: tone,
      },
      description: worldDesc,
      initialHook: plotHook || (campaignType === 'openworld'
        ? 'The world of Al\'mundi is yours to explore. Where do you begin?'
        : 'Your journey begins...'),
      custom: true,
      tags,
      houseRules,
    };

    campaigns.push(newCampaign);
    saveCampaigns();
    closeCustomCampaignModal();

    wizardContext = { type: 'custom', campaign: newCampaign };
    openCharacterCreationWizard();
  });
  document.getElementById('closeConfigBtn').onclick = closeOpenWorldConfigModal;
  document.getElementById('cancelConfigBtn').onclick = closeOpenWorldConfigModal;
  document.getElementById('submitConfigBtn').onclick = submitOpenWorldConfig;
  document.getElementById('closeSheetBtn').onclick = closeCharacterSheetModal;
  document.getElementById('cancelSheetBtn').onclick = closeCharacterSheetModal;
  document.getElementById('saveSheetBtn').onclick = () => { saveCharacterSheet(); closeCharacterSheetModal(); };
  document.getElementById('wizardBackBtn').onclick = prevStep;
  document.getElementById('wizardNextBtn').onclick = nextStep;
  document.getElementById('wizardFinishBtn').onclick = finishWizard;
  document.getElementById('closeWizardBtn').onclick = closeWizard;
  if (confirmDeleteBtn) confirmDeleteBtn.onclick = confirmDelete;
  if (confirmCancelBtn) confirmCancelBtn.onclick = closeConfirmModal;
  // Settings modal wiring
  const settingsModal = document.getElementById('settingsModal');
  document.getElementById('closeSettingsBtn').onclick = closeSettingsModal;
  document.getElementById('cancelSettingsBtn').onclick = closeSettingsModal;
  document.getElementById('saveSettingsBtn').onclick = () => { saveSettings(); closeSettingsModal(); };
  document.getElementById('fetchModelsBtn').onclick = fetchModels;
  document.getElementById('testConnectionBtn').onclick = testConnection;
  document.getElementById('btn-settings').onclick = () => { setActive('btn-settings'); openSettingsModal(); };
  // Enable/disable buttons based on API key input
  document.getElementById('settingsApiKey').addEventListener('input', function() {
    const hasKey = this.value.trim().length > 0;
    document.getElementById('fetchModelsBtn').disabled = !hasKey;
    document.getElementById('testConnectionBtn').disabled = !hasKey;
  });
  // Quest modal wiring
  const questModal = document.getElementById('questModal');
  const questEditModal = document.getElementById('questEditModal');
  document.getElementById('closeQuestBtn').onclick = closeQuestModal;
  document.getElementById('closeQuestFooterBtn').onclick = closeQuestModal;
  document.getElementById('closeQuestEditBtn').onclick = closeQuestEdit;
  document.getElementById('cancelQuestEditBtn').onclick = closeQuestEdit;
  document.getElementById('saveQuestEditBtn').onclick = saveQuestEdit;
  document.getElementById('addQuestBtn').onclick = () => openQuestEdit(null);
  document.getElementById('questAddMilestoneBtn').onclick = () => {
    const container = document.getElementById('questEditMilestones');
    container.insertAdjacentHTML('beforeend',
      `<div class="quest-milestone"><input type="checkbox" style="width:13px;height:13px;">
      <input type="text" class="sheet-input" style="flex:1;padding:4px 6px;font-size:0.75rem;">
      <button class="small-btn" style="color:#C85A3A;">✖</button></div>`);
  };
  // Quest tab switching
  document.querySelectorAll('.quest-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.quest-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      const target = this.dataset.questTab;
      document.getElementById('questActiveList').style.display = target === 'active' ? '' : 'none';
      document.getElementById('questArchivedList').style.display = target === 'archived' ? '' : 'none';
    });
  });
  document.getElementById('questLogToggle').onclick = function() {
    document.getElementById('questLogContent').classList.toggle('open');
    this.innerText = this.innerText.startsWith('▼') ? '▲ Recent Activity' : '▼ Recent Activity';
  };
  document.getElementById('btn-quest').onclick = () => { setActive('btn-quest'); openQuestModal(); };
  // Quest body event delegation for card actions, milestone toggles, edit milestone removes
  document.getElementById('questBody').addEventListener('click', handleQuestAction);
  document.getElementById('questBody').addEventListener('change', (e) => {
    const cb = e.target.closest('input[type="checkbox"][data-quest-id]');
    if (cb) { toggleMilestone(cb.dataset.questId, parseInt(cb.dataset.idx)); renderQuests(); }
  });
  // Quest edit milestone remove button delegation
  document.getElementById('questEditMilestones').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-remove-idx]');
    if (btn) {
      const items = document.querySelectorAll('#questEditMilestones .quest-milestone');
      const idx = parseInt(btn.dataset.removeIdx);
      if (items[idx]) items[idx].remove();
    }
  });
  // NPC modal wiring
  const npcModal = document.getElementById('npcDirectoryModal');
  const npcFormModal = document.getElementById('npcFormModal');
  document.getElementById('closeNpcModalBtn').onclick = closeNPCDirectory;
  document.getElementById('closeNpcFormBtn').onclick = closeNPCForm;
  document.getElementById('cancelNpcFormBtn').onclick = closeNPCForm;
  document.getElementById('saveNpcFormBtn').onclick = saveNPCForm;
  document.getElementById('addNpcBtn').onclick = () => openNPCForm(null);
  document.getElementById('npcSearchInput').addEventListener('input', renderNPCList);
  document.getElementById('btn-npc').onclick = () => { setActive('btn-npc'); openNPCDirectory(); };
  document.getElementById('npcGrid').addEventListener('click', handleNpcAction);
  // Campaign Summary wiring
  const summaryModal = document.getElementById('campaignSummaryModal');
  document.getElementById('btn-summary').onclick = () => { setActive('btn-summary'); openCampaignSummaryModal(); };
  document.getElementById('closeSummaryBtn').onclick = closeCampaignSummaryModal;
  document.getElementById('refreshSummaryBtn').onclick = refreshCampaignSummary;
  document.getElementById('copySummaryBtn').onclick = copyCampaignSummary;
  // Manual XP button
  document.getElementById('manualXpBtn').onclick = openManualXpDialog;
  // DM Guide wiring
  document.getElementById('btn-guide').onclick = () => { setActive('btn-guide'); openDMGuideModal(); };
  document.getElementById('closeDMGuideBtn').onclick = closeDMGuideModal;
  document.getElementById('cancelDMGuideBtn').onclick = closeDMGuideModal;
  document.getElementById('saveDMGuideBtn').onclick = saveDMGuide;
  document.getElementById('dmGuideText').addEventListener('input', updateDMGuideCounter);
  // Combat Tracker wiring
  document.getElementById('closeCombatBtn').onclick = closeCombatTracker;
  document.getElementById('closeCombatFooterBtn').onclick = closeCombatTracker;
  document.getElementById('btn-combat').onclick = function() { setActive('btn-combat'); openCombatTracker(); };
  // Death Save wiring
  document.getElementById('closeDeathSaveBtn').onclick = closeDeathSaveModal;
  document.getElementById('closeDeathSaveFooterBtn').onclick = closeDeathSaveModal;
  document.getElementById('rollDeathSaveBtn').onclick = rollDeathSave;
  // Hit Dice Modal wiring
  document.getElementById('closeHitDiceBtn').onclick = function() { var m = document.getElementById('hitDiceModal'); m.classList.remove('show'); setTimeout(function() { m.style.display = 'none'; }, 200); };
  document.getElementById('cancelHitDiceBtn').onclick = function() { var m = document.getElementById('hitDiceModal'); m.classList.remove('show'); setTimeout(function() { m.style.display = 'none'; }, 200); };
  document.getElementById('applyHitDiceBtn').onclick = function() { applyHitDiceSpend(); var m = document.getElementById('hitDiceModal'); m.classList.remove('show'); setTimeout(function() { m.style.display = 'none'; }, 200); };
  // Level-Up Modal wiring
  document.getElementById('closeLevelUpBtn').onclick = function() { var m = document.getElementById('levelUpModal'); m.classList.remove('show'); setTimeout(function() { m.style.display = 'none'; }, 200); };
  document.getElementById('confirmLevelUpBtn').onclick = confirmLevelUp;
  const dmGuideModal = document.getElementById('dmGuideModal');
  const combatModal = document.getElementById('combatTrackerModal');
  const deathModal = document.getElementById('deathSaveModal');
  const hitDiceModal = document.getElementById('hitDiceModal');
  const levelUpModal = document.getElementById('levelUpModal');
  const cropModal = document.getElementById('cropModal');
  const featureChoiceModal = document.getElementById('featureChoiceModal');
  const modals = [campaignModal, selectionModal, configModal, confirmModal, characterSheetModal, charCreationWizard, settingsModal, questModal, questEditModal, npcModal, npcFormModal, summaryModal, dmGuideModal, combatModal, deathModal, hitDiceModal, levelUpModal, cropModal, customCampaignModal, featureChoiceModal];
  modals.forEach(modal => { if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) { if (modal === campaignModal) closeCampaignModal(); else if (modal === selectionModal) closeCampaignSelectionModal(); else if (modal === configModal) closeOpenWorldConfigModal(); else if (modal === confirmModal) closeConfirmModal(); else if (modal === characterSheetModal) closeCharacterSheetModal(); else if (modal === charCreationWizard) closeWizard(); else if (modal === settingsModal) closeSettingsModal(); else if (modal === questModal) closeQuestModal(); else if (modal === questEditModal) closeQuestEdit(); else if (modal === npcModal) closeNPCDirectory(); else if (modal === npcFormModal) closeNPCForm(); else if (modal === summaryModal) closeCampaignSummaryModal(); else if (modal === dmGuideModal) closeDMGuideModal(); else if (modal === combatModal) closeCombatTracker(); else if (modal === deathModal) closeDeathSaveModal(); else if (modal === hitDiceModal) { hitDiceModal.classList.remove('show'); setTimeout(function() { hitDiceModal.style.display = 'none'; }, 200); } else if (modal === levelUpModal) { levelUpModal.classList.remove('show'); setTimeout(function() { levelUpModal.style.display = 'none'; }, 200); } else if (modal === cropModal) closeCropModal(); else if (modal === customCampaignModal) closeCustomCampaignModal(); else if (modal === featureChoiceModal) { featureChoiceModal.classList.remove('show'); setTimeout(function() { featureChoiceModal.style.display = 'none'; }, 200); } } }); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { if (confirmModal && confirmModal.style.display === 'flex') closeConfirmModal(); else if (configModal && configModal.style.display === 'flex') closeOpenWorldConfigModal(); else if (selectionModal && selectionModal.style.display === 'flex') closeCampaignSelectionModal(); else if (campaignModal && campaignModal.style.display === 'flex') closeCampaignModal(); else if (customCampaignModal && customCampaignModal.style.display === 'flex') closeCustomCampaignModal(); else if (characterSheetModal && characterSheetModal.style.display === 'flex') closeCharacterSheetModal(); else if (charCreationWizard && charCreationWizard.style.display === 'flex') closeWizard(); else if (settingsModal && settingsModal.style.display === 'flex') closeSettingsModal(); else if (questModal && questModal.style.display === 'flex') closeQuestModal(); else if (questEditModal && questEditModal.style.display === 'flex') closeQuestEdit(); else if (npcModal && npcModal.style.display === 'flex') closeNPCDirectory(); else if (npcFormModal && npcFormModal.style.display === 'flex') closeNPCForm(); else if (summaryModal && summaryModal.style.display === 'flex') closeCampaignSummaryModal(); else if (dmGuideModal && dmGuideModal.style.display === 'flex') closeDMGuideModal(); else if (combatModal && combatModal.style.display === 'flex') closeCombatTracker(); else if (deathModal && deathModal.style.display === 'flex') closeDeathSaveModal(); else if (hitDiceModal && hitDiceModal.style.display === 'flex') { hitDiceModal.classList.remove('show'); setTimeout(function() { hitDiceModal.style.display = 'none'; }, 200); } else if (levelUpModal && levelUpModal.style.display === 'flex') { levelUpModal.classList.remove('show'); setTimeout(function() { levelUpModal.style.display = 'none'; }, 200); } else if (cropModal && cropModal.style.display === 'flex') closeCropModal(); else if (featureChoiceModal && featureChoiceModal.style.display === 'flex') { featureChoiceModal.classList.remove('show'); setTimeout(function() { featureChoiceModal.style.display = 'none'; }, 200); } } });
  document.getElementById('btn-char').addEventListener('click', () => { setActive('btn-char'); if (currentCharacter) openCharacterSheetModal(); else alert('No character created yet. Start a campaign first.'); });
  initSheetTabs();
  const storedChar = localStorage.getItem('dnd_current_character');
  if (storedChar) currentCharacter = JSON.parse(storedChar);
  if (currentCharacter) syncCharacterStats();
  
  // ── Initialize Al'mundi worldbuilding reference if not already stored ──
  if (!localStorage.getItem('dnd_worldbuilding')) {
    // The worldbuilding file content will be loaded on first campaign start.
    // Check if the worldbuilding file exists and load it.
    const wbKey = 'dnd_worldbuilding';
    const existing = localStorage.getItem(wbKey);
    if (!existing) {
      // Placeholder — actual content is stored when user provides it.
      // We load it from a script-embedded constant if available.
      if (typeof ALMUNDI_WORLDBUILDING !== 'undefined') {
        saveWorldbuilding(ALMUNDI_WORLDBUILDING);
      }
    }
  }
  
  // ── Portrait cropping event binding ──
  document.getElementById('closeCropModalBtn').onclick = closeCropModal;
  document.getElementById('cancelCropBtn').onclick = closeCropModal;
  document.getElementById('applyCropBtn').onclick = applyCrop;
  document.getElementById('cropModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeCropModal();
  });

  // ── Character portrait upload ──
  document.getElementById('uploadCharPortraitBtn').addEventListener('click', () => {
    document.getElementById('charPortraitFileInput').click();
  });
  document.getElementById('charPortraitFileInput').addEventListener('change', (e) => {
    if (e.target.files.length) {
      const file = e.target.files[0];
      const blob = URL.createObjectURL(file);
      showCropModal(blob).then(croppedBase64 => {
        updateCharacterPortrait(croppedBase64);
      }).catch(() => {});
      e.target.value = '';
    }
  });

  // ── NPC portrait upload ──
  document.getElementById('uploadNpcPortraitBtn').addEventListener('click', () => {
    document.getElementById('npcPortraitFileInput').click();
  });
  document.getElementById('npcPortraitFileInput').addEventListener('change', (e) => {
    if (e.target.files.length) {
      const file = e.target.files[0];
      const blob = URL.createObjectURL(file);
      showCropModal(blob).then(croppedBase64 => {
        tempNpcPortrait = croppedBase64;
        const preview = document.getElementById('npcPortraitPreview');
        const placeholder = document.getElementById('npcPortraitPlaceholder');
        preview.src = croppedBase64;
        preview.style.display = 'block';
        placeholder.style.display = 'none';
      }).catch(() => {});
      e.target.value = '';
    }
  });

  // Wizard listeners
  const raceSelect = document.getElementById("wizardRace");
  const bgSelect = document.getElementById("wizardBackground");
  if (bgSelect) bgSelect.addEventListener("change", () => { selectedBackground = bgSelect.value; updateBackgroundDescription(); });
  if (raceSelect) raceSelect.addEventListener("change", () => { selectedRace = raceSelect.value; updateSubraceDropdown(); updateRacialTraitsPanel(); updateVariantHumanUI(); updateDragonbornUI(); updateAbilityScoresUI(); updateRaceDescription(); });
  const subraceSelect = document.getElementById("wizardSubrace");
  if (subraceSelect) subraceSelect.addEventListener("change", () => { selectedSubrace = subraceSelect.value; updateRacialTraitsPanel(); updateAbilityScoresUI(); updateRaceDescription(); });
  const classSelect = document.getElementById("wizardClass");
  if (classSelect) classSelect.addEventListener("change", () => { selectedClass = classSelect.value; updateSubclassDropdown(); updateClassSummaryPanel(); if (wizardStep === 4) { updateEquipmentUI(); updateSpellUI(); updateSubclassFeaturesUI(); } updateClassDescription(); updateSubclassDescription(); });
  const subclassSelect = document.getElementById("wizardSubclass");
  if (subclassSelect) subclassSelect.addEventListener("change", () => { selectedSubclass = subclassSelect.value; if (wizardStep === 4) updateSubclassFeaturesUI(); updateSubclassDescription(); });
  // Pact Boon select
  const pactBoonSelect = document.getElementById("wizardPactBoon");
  if (pactBoonSelect) pactBoonSelect.addEventListener("change", () => { selectedPactBoon = pactBoonSelect.value; });
  const levelInput = document.getElementById("wizardLevel");
  if (levelInput) levelInput.addEventListener("change", () => { characterLevel = parseInt(levelInput.value, 10) || 1; if (wizardStep === 4) updateSubclassFeaturesUI(); });
  const variantCheck = document.getElementById("variantHumanCheck");
  // Variant Human checkbox removed
  const dbAncestrySelect = document.getElementById("dragonbornAncestrySelect");
  if (dbAncestrySelect) dbAncestrySelect.addEventListener("change", () => { selectedDragonbornAncestry = dbAncestrySelect.value; updateRacialTraitsPanel(); });
  const sorcAncestrySelect = document.getElementById("dragonSorcererAncestrySelect");
  if (sorcAncestrySelect) sorcAncestrySelect.addEventListener("change", () => { selectedSorcererAncestry = sorcAncestrySelect.value; });
  const heCantripSelect = document.getElementById("highElfCantripSelect");
  if (heCantripSelect) heCantripSelect.addEventListener("change", () => { chosenHighElfCantrip = heCantripSelect.value; });
  document.getElementById("recommendedSpreadBtn")?.addEventListener("click", recommendedSpread);
  document.getElementById("randomAbilitiesBtn")?.addEventListener("click", randomAbilities);
  document.getElementById("resetAbilitiesBtn")?.addEventListener("click", resetAbilities);
  document.getElementById("extraItems")?.addEventListener("input", updateEquipmentSummary);

  // ── Inventory: Add Item button ──
  document.getElementById('addInventoryRow')?.addEventListener('click', () => {
    const tbody = document.getElementById('inventoryBody');
    if (!tbody) return;
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td><input type="text" class="inv-name sheet-input" placeholder="Item name"></td>
      <td><input type="number" class="inv-qty sheet-input small" value="1" min="1"></td>
      <td><input type="text" class="inv-weight sheet-input small" placeholder="Weight (lb)"></td>
      <td><input type="text" class="inv-notes sheet-input" placeholder="Notes"></td>
      <td><button class="remove-row small-btn">✖</button></td>
    `;
    tbody.appendChild(newRow);
  });

  // ── Inventory: Remove row delegation (handles static & dynamic rows) ──
  document.getElementById('inventoryBody')?.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('.remove-row');
    if (removeBtn) {
      const row = removeBtn.closest('tr');
      if (row) row.remove();
    }
  });

  initDiceRoller();
  initMonsterDatabase();
  loadSpellDatabase();
  loadFeatDatabase();
  applyState();
});
/* ═══════════════════════════════════════════════════════
   AI CHAT INTERFACE — Logic
═══════════════════════════════════════════════════════ */

// ── Chat state ──
let chatHistory       = [];     // [{role:'user'|'assistant'|'system', content:''}]
let activeContextChips = new Set(); // 'char' | 'quest' | 'npc'
let chatSessionInit   = false;
let isStreaming        = false;

// ── Context management (summarization) ──
const MAX_VISIBLE_MESSAGES = 20;        // Keep only last 20 non‑system messages
const SUMMARY_INTERVAL = 20;            // Summarize every 20 new messages
let messagesSinceLastSummary = 0;       // Counter since last summarization
let isSummarizing = false;              // Prevent concurrent summarizations

// ── Init on session start ──
function initChatSession() {
  if (chatSessionInit) { updateChatTopbar(); return; }
  chatSessionInit = true;
  updateChatTopbar();
  updateModelBadge();

  const feed = document.getElementById('chatMessages');
  if (feed) feed.innerHTML = '';

  // Refresh system prompt
  const systemPrompt = buildSystemPrompt();
  
  // Check if we already have history (resuming campaign)
  const hasHistory = chatHistory.length > 0;
  
  if (hasHistory) {
    // Update the system prompt in existing history
    const sysIdx = chatHistory.findIndex(m => m.role === 'system');
    if (sysIdx >= 0) {
      chatHistory[sysIdx].content = systemPrompt;
    } else {
      chatHistory.unshift({ role: 'system', content: systemPrompt });
    }
    // Render existing messages
    renderChatHistory();
    appendSystemMessage('Session resumed');
  } else {
    // Fresh session
    chatHistory = [{ role: 'system', content: systemPrompt }];
    appendSystemMessage('Session started');
    
    // Generate dynamic opening scene
    generateOpeningScene();
  }
}

/**
 * Generate a dynamic opening scene for a fresh campaign session.
 * For open-world campaigns with no plot, invents an engaging starting scenario.
 * For story campaigns, uses the campaign description/hook as the opening.
 */
async function generateOpeningScene() {
  const camp = campaigns.find(c => c.id === selectedCampaignId);
  if (!camp) {
    // Fallback generic opening
    const genericWelcome = `*The torches flicker as your adventure begins…*\n\nI am your Dungeon Master. Tell me what you do, ask about the world around you, or simply describe your next action. The fate of Faerûn lies in your hands, adventurer.`;
    appendDMMessage(genericWelcome);
    chatHistory.push({ role: 'assistant', content: genericWelcome });
    saveChatHistory();
    return;
  }

  const campaignName = camp.name || 'your campaign';

  // If this is a story campaign with a description, use it as the opening
  if (camp.type === 'story' && camp.description) {
    const storyOpening = `*The tale of **${campaignName}** begins…*\n\n${camp.description}\n\nWhere would you like to start, adventurer?`;
    appendDMMessage(storyOpening);
    chatHistory.push({ role: 'assistant', content: storyOpening });
    saveChatHistory();
    return;
  }

  // Try to generate an AI opening for open-world campaigns
  const saved = localStorage.getItem('dnd_ai_settings');
  let apiKey = '', model = '';
  if (saved) {
    try { const s = JSON.parse(saved); apiKey = s.apiKey || ''; model = s.model || ''; } catch(e) {}
  }

  // Load worldbuilding for richer scene generation
  const worldbuilding = (() => {
    try { return localStorage.getItem('dnd_worldbuilding') || ''; } catch(e) { return ''; }
  })();

  if (apiKey && model && currentCharacter) {
    try {
      const charInfo = `${currentCharacter.name}, a Level ${currentCharacter.level} ${currentCharacter.race} ${currentCharacter.class}.${currentCharacter.backstory ? ' Backstory: ' + currentCharacter.backstory : ''}${currentCharacter.personalityTraits ? ' Traits: ' + currentCharacter.personalityTraits : ''}`;
      const location = camp.config?.location || 'a frontier settlement';
      const tone = camp.config?.tone || 'Heroic';

      // Build worldbuilding context snippet (truncate if too long)
      let wbSnippet = '';
      if (worldbuilding && worldbuilding.length > 20) {
        const truncated = worldbuilding.length > 3000
          ? worldbuilding.slice(0, 3000) + '\n\n[...worldbuilding continues...]'
          : worldbuilding;
        wbSnippet = `\n\nWorldbuilding reference for this setting:\n${truncated}`;
      }

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'DnD DM'
        },
        body: JSON.stringify({
          model: model,
          messages: [
            { role: 'system', content: `You are a D&D Dungeon Master writing an immersive opening scene for an open-world campaign set in the world of Al'mundi. Write in second person ("You see...", "You hear..."). Use **bold** for emphasis and *italics* for atmosphere. Keep it to 3-5 paragraphs. End by asking the player what they do. Do NOT use any HTML comment tags. Do NOT include game mechanics or dice rolls.\n\nIMPORTANT: Use the worldbuilding information provided by the user to ground the scene. Mention specific locations (e.g. the Forest of Allanar, Khigvorda Mountains, etc.), factions, NPCs, or cultural details from the world. Weave the character's backstory and personality traits into the scene. Make it feel authentic to Al'mundi.` },
            { role: 'user', content: `Write an opening scene for an open-world D&D 5e campaign. The setting is ${location} with a ${tone} tone. The character is ${charInfo}.${wbSnippet}\n\nIntroduce the setting, hint at possible adventures (a rumor, a mystery, a nearby danger), and end with "What do you do?"` }
          ],
          max_tokens: 600,
          temperature: 0.85
        })
      });

      if (response.ok) {
        const data = await response.json();
        const opening = data.choices?.[0]?.message?.content;
        if (opening) {
          appendDMMessage(opening);
          chatHistory.push({ role: 'assistant', content: opening });
          saveChatHistory();
          return;
        }
      }
    } catch (e) {
      console.warn('AI opening scene failed, using fallback:', e);
    }
  }

  // ── AI-driven fallback: try to create a scene if we have API key, worldbuilding, and character ──
  if (apiKey && model && currentCharacter && worldbuilding && worldbuilding.length > 20) {
    try {
      const charInfo = `${currentCharacter.name}, a Level ${currentCharacter.level} ${currentCharacter.race} ${currentCharacter.class}.${currentCharacter.backstory ? ' Backstory: ' + currentCharacter.backstory : ''}${currentCharacter.personalityTraits ? ' Traits: ' + currentCharacter.personalityTraits : ''}`;
      const location = camp.config?.location || 'a frontier settlement';
      const tone = camp.config?.tone || 'Heroic';
      const truncated = worldbuilding.length > 3000
        ? worldbuilding.slice(0, 3000) + '\n\n[...worldbuilding continues...]'
        : worldbuilding;

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'DnD DM'
        },
        body: JSON.stringify({
          model: model,
          messages: [
            { role: 'system', content: 'You are a creative D&D Dungeon Master. No pre-written hook is available. Using the worldbuilding information and the character\'s backstory below, invent an engaging opening scene for an open-world D&D campaign. Be creative — introduce a conflict, a mystery, or an opportunity. End by asking the player what they do.' },
            { role: 'user', content: `Worldbuilding:\n${truncated}\n\nSetting: ${location}\nTone: ${tone}\nCharacter: ${charInfo}\n\nInvent an opening scene that hooks the player immediately. End with "What do you do?"` }
          ],
          max_tokens: 600,
          temperature: 0.9
        })
      });

      if (response.ok) {
        const data = await response.json();
        const opening = data.choices?.[0]?.message?.content;
        if (opening) {
          appendDMMessage(opening);
          chatHistory.push({ role: 'assistant', content: opening });
          saveChatHistory();
          return;
        }
      }
    } catch (e) {
      console.warn('AI fallback scene also failed:', e);
    }
  }

  // ── Last resort: use the campaign's initial hook or a generic opening ──
  if (camp.initialHook) {
    const hookOpening = `*${camp.initialHook}*\n\nHow would you like to proceed, adventurer?`;
    appendDMMessage(hookOpening);
    chatHistory.push({ role: 'assistant', content: camp.initialHook });
    saveChatHistory();
  } else {
    const genericOpening = `*The world stretches before you, full of mystery and danger. You find yourself in ${camp.config?.location || 'a land of adventure'}.*\n\nThe Dungeon Master will create a scene as you play. Tell me where you\'d like to start or what you\'d like to do, ${currentCharacter?.name || 'adventurer'}.`;
    appendDMMessage(genericOpening);
    chatHistory.push({ role: 'assistant', content: genericOpening });
    saveChatHistory();
  }
}

function renderChatHistory() {
  const feed = document.getElementById('chatMessages');
  if (!feed) return;
  feed.innerHTML = '';
  // Skip system messages for display
  for (const msg of chatHistory) {
    if (msg.role === 'system') continue;
    if (msg.role === 'user') {
      // Try to extract just the player's text (remove context snippet prefix)
      let displayText = msg.content;
      // Remove anything before the last newline if there's context tags
      const newlineIdx = displayText.lastIndexOf('\n');
      if (newlineIdx > 0 && displayText.startsWith('[')) {
        displayText = displayText.slice(newlineIdx + 1);
      }
      appendUserMessage(displayText);
    } else if (msg.role === 'assistant') {
      appendDMMessage(msg.content);
    }
  }
  // Scroll to bottom after a short delay to ensure all messages are rendered
  setTimeout(scrollToBottom, 50);
}

function updateChatTopbar() {
  // Campaign name
  const camp = campaigns.find(c => c.id === selectedCampaignId) || campaigns[0];
  const nameEl = document.getElementById('chatCampaignName');
  if (nameEl) nameEl.textContent = camp ? camp.name : 'Unknown Campaign';

  // Character name
  const charEl = document.getElementById('chatCharacterName');
  if (charEl) {
    charEl.textContent = currentCharacter
      ? `— ${currentCharacter.name} (${currentCharacter.race} ${currentCharacter.class}, Lvl ${currentCharacter.level})`
      : '— No character loaded';
  }
}

function updateModelBadge() {
  const saved = localStorage.getItem('dnd_ai_settings');
  let modelName = 'No model set';
  if (saved) {
    try {
      const s = JSON.parse(saved);
      if (s.model) {
        // Extract friendly name (last segment after /)
        const parts = s.model.split('/');
        modelName = parts[parts.length - 1] || s.model;
      }
    } catch(e) { /* ignore */ }
  }
  const el = document.getElementById('chatModelName');
  if (el) el.textContent = modelName;
}

// ── Context chip toggle ──
function toggleContextChip(type) {
  const btn = document.getElementById('chip' + type.charAt(0).toUpperCase() + type.slice(1));
  if (activeContextChips.has(type)) {
    activeContextChips.delete(type);
    btn?.classList.remove('active');
  } else {
    activeContextChips.add(type);
    btn?.classList.add('active');
  }
  renderActiveContextPills();
}

function renderActiveContextPills() {
  const container = document.getElementById('chatActiveContext');
  if (!container) return;
  if (activeContextChips.size === 0) {
    container.style.display = 'none';
    container.innerHTML = '';
    return;
  }
  container.style.display = 'flex';
  const labels = { char: '📜 Character', quest: '🧭 Quests', npc: '👥 NPCs' };
  container.innerHTML = [...activeContextChips].map(type => `
    <div class="ctx-pill">
      ${labels[type] || type}
      <button class="ctx-pill-close" onclick="toggleContextChip('${type}')" title="Remove">&times;</button>
    </div>
  `).join('');
}

// ── Subclass Mechanical Essence ──
function getSubclassMechanicalEssence(className, subclassName) {
  const text = {
    "Knowledge Domain": "\n- Level 1: Blessings of Knowledge – gain proficiency in two of: Arcana, History, Nature, Religion.\n- Level 2: Channel Divinity: Knowledge of the Ages – gain proficiency in any skill or tool for 10 minutes.\n- Level 6: Channel Divinity: Read Thoughts – read thoughts of a creature, then cast Suggestion without a spell slot.\n- Level 8: Potent Spellcasting – add Wisdom modifier to cleric cantrip damage.\n- Level 17: Visions of the Past – learn about an object's past or see 24 hours into a location's past.",
    "Life Domain": "\n- Level 1: Heavy armor proficiency, Disciple of Life – when you cast a healing spell, target regains extra HP = 2 + spell's level.\n- Level 2: Channel Divinity: Preserve Life – restore 5 × cleric level HP (divided among creatures within 30 ft).\n- Level 6: Blessed Healer – when you heal another, you regain 2 + spell level HP.\n- Level 8: Divine Strike – once per turn, add 1d8 radiant damage to a weapon attack.\n- Level 17: Supreme Healing – when you cast a healing spell, you use the maximum possible healing.",
    "Light Domain": "\n- Level 1: Warding Flare – when a creature within 30 ft attacks you, impose disadvantage (Wisdom modifier times per long rest).\n- Level 2: Channel Divinity: Radiance of the Dawn – each hostile within 30 ft makes Con save, takes 2d10 + cleric level radiant damage (half on save).\n- Level 6: Improved Flare – use Warding Flare to protect an ally within 30 ft.\n- Level 8: Potent Spellcasting – add Wisdom to cantrip damage.\n- Level 17: Corona of Light – shed bright light 60 ft, enemies have disadvantage on saves against fire/radiant.",
    "Nature Domain": "\n- Level 1: Acolyte of Nature – gain proficiency in one of Animal Handling, Nature, Survival, plus one druid cantrip.\n- Level 2: Channel Divinity: Charm Animals and Plants – each beast/plant within 30 ft makes Wis save or is charmed.\n- Level 6: Dampen Elements – when you or ally within 30 ft takes acid, cold, fire, lightning, or thunder damage, use reaction to grant resistance.\n- Level 8: Divine Strike – once per turn add 1d8 cold, fire, or lightning damage to weapon attack.\n- Level 17: Master of Nature – beasts and plants have disadvantage on saves against your charm.",
    "Tempest Domain": "\n- Level 1: Wrath of the Storm – when a creature within 5 ft hits you, use reaction to deal 2d8 lightning or thunder damage (Wis mod times per long rest).\n- Level 2: Channel Divinity: Destructive Wrath – maximize thunder or lightning damage.\n- Level 6: Thunderbolt Strike – when you deal lightning damage to a Large or smaller creature, push it up to 10 ft away.\n- Level 8: Divine Strike – add 1d8 thunder damage to weapon attack.\n- Level 17: Stormborn – gain flying speed while outside.",
    "Trickery Domain": "\n- Level 1: Blessing of the Trickster – give an ally advantage on Stealth checks.\n- Level 2: Channel Divinity: Invoke Duplicity – create illusory duplicate; cast spells from its space.\n- Level 6: Channel Divinity: Cloak of Shadows – become invisible until end of next turn.\n- Level 8: Divine Strike – add 1d8 poison damage to weapon attack.\n- Level 17: Improved Duplicity – create up to four duplicates.",
    "War Domain": "\n- Level 1: War Priest – make a bonus action weapon attack (Wis mod times per long rest).\n- Level 2: Channel Divinity: Guided Strike – add +10 to an attack roll.\n- Level 6: Channel Divinity: War God's Blessing – grant an ally +10 to an attack roll.\n- Level 8: Divine Strike – add 1d8 radiant damage to weapon attack.\n- Level 17: Avatar of Battle – resistance to nonmagical bludgeoning, piercing, slashing.",
    "Forge Domain": "\n- Level 1: Blessing of the Forge – turn a nonmagical weapon or armor into a +1 magic item for 1 day.\n- Level 2: Channel Divinity: Artisan's Blessing – create a metal object worth up to 100 gp.\n- Level 6: Soul of the Forge – resistance to fire, +1 AC with heavy armor.\n- Level 8: Divine Strike – add 1d8 fire damage to weapon attack.\n- Level 17: Saint of Forge and Fire – immunity to fire, resistance to nonmagical bludgeoning/piercing/slashing.",
    "Grave Domain": "\n- Level 1: Circle of Mortality – maximum healing on unconscious creatures; Spare the Dying is a bonus action.\n- Level 2: Channel Divinity: Path to the Grave – next attack against a creature has vulnerability to all damage.\n- Level 6: Sentinel at Death's Door – cancel a critical hit (Wis mod times per long rest).\n- Level 8: Potent Spellcasting – add Wisdom to cantrip damage.\n- Level 17: Keeper of Souls – when you slay a creature, heal an ally.",
    "Order Domain": "\n- Level 1: Voice of Authority – when you cast a spell on an ally, they can use reaction to make a weapon attack.\n- Level 2: Channel Divinity: Order's Demand – each creature of your choice within 30 ft makes Wis save or is charmed.\n- Level 6: Embodiment of the Law – when you cast a spell of 1st level or higher, you can also cast a cantrip as a bonus action.\n- Level 8: Divine Strike – add 1d8 psychic damage to weapon attack.\n- Level 17: Order's Wrath – when you deal Divine Strike damage, the target also takes 2d8 psychic damage.",
    "Peace Domain": "\n- Level 1: Emboldening Bond – bond up to two creatures; they can add a d4 to an attack, save, or check (proficiency bonus times per long rest).\n- Level 2: Channel Divinity: Balm of Peace – move without provoking opportunity attacks, heal allies you touch.\n- Level 6: Protective Bond – when a bonded creature takes damage, another bonded creature can teleport and take the damage instead.\n- Level 8: Potent Spellcasting – add Wisdom to cantrip damage.\n- Level 17: Expansive Bond – bond range increases to 60 ft, and damage sharing becomes resistance.",
    "Twilight Domain": "\n- Level 1: Eyes of Night – 300 ft darkvision, grant to allies (shared long rest feature).\n- Level 2: Channel Divinity: Twilight Sanctuary – create a sphere of dim light that grants temporary HP or ends charm/frighten.\n- Level 6: Steps of Night – gain flying speed while in dim light or darkness.\n- Level 8: Divine Strike – add 1d8 radiant damage to weapon attack.\n- Level 17: Twilight Shroud – half cover and advantage on saving throws for allies in sanctuary.",
    "Oath of Devotion": "\n- Level 3: Channel Divinity: Sacred Weapon (add Cha to attack, weapon sheds light), Turn the Unholy (fiends/undead within 30 ft are turned).\n- Level 7: Aura of Devotion – you and allies within 10 ft cannot be charmed.\n- Level 15: Purity of Spirit – always under protection from evil and good.\n- Level 20: Holy Nimbus – shed light, enemies within 30 ft take 10 radiant damage each turn.",
    "Oath of the Ancients": "\n- Level 3: Channel Divinity: Nature's Wrath (restrain a creature), Turn the Faithless (fey/fiends are turned).\n- Level 7: Aura of Warding – you and allies within 10 ft have resistance to spell damage.\n- Level 15: Undying Sentinel – when reduced to 0 HP, drop to 1 instead (once per long rest).\n- Level 20: Elder Champion – aura of regeneration and spellcasting.",
    "Oath of Vengeance": "\n- Level 3: Channel Divinity: Abjure Enemy (frighten one creature), Vow of Enmity (advantage on attacks against one creature for 1 minute).\n- Level 7: Relentless Avenger – opportunity attack reduces target's speed to 0.\n- Level 15: Soul of Vengeance – when a creature under your Vow attacks, you can make an opportunity attack.\n- Level 20: Avenging Angel – gain flying speed, aura of fear.",
    "Oath of Conquest": "\n- Level 3: Channel Divinity: Conquering Presence (frighten creatures within 30 ft), Guided Strike (+10 to attack).\n- Level 7: Aura of Conquest – frightened creatures have speed 0 and take psychic damage if they start turn in aura.\n- Level 15: Scornful Rebuke – when a creature hits you, it takes psychic damage.\n- Level 20: Invincible Conqueror – resistance to all damage, extra attack.",
    "Oath of Redemption": "\n- Level 3: Channel Divinity: Emissary of Peace (+10 Persuasion), Rebuke the Violent (deal radiant damage to attacker).\n- Level 7: Aura of the Guardian – take damage meant for an ally within 10 ft.\n- Level 15: Protective Spirit – regain HP each turn when below half HP.\n- Level 20: Emissary of Redemption – resistance to all damage, attackers take radiant damage.",
    "Oath of Glory": "\n- Level 3: Channel Divinity: Peerless Athlete (advantage on Str/Dex checks, jump distance), Inspiring Smite (give temporary HP to allies).\n- Level 7: Aura of Alacrity – your speed increases by 10 ft; allies in aura also gain 10 ft.\n- Level 15: Glorious Defense – when you miss an attack, you can add your Cha to AC and gain temporary HP.\n- Level 20: Living Legend – you can reroll a missed attack and gain advantage on all attacks for 1 minute.",
    "Oath of the Watchers": "\n- Level 3: Channel Divinity: Watcher's Will (advantage on Int/Wis/Cha saves for you and allies), Abjure the Extraplanar (turn aberrations, celestials, elementals, fey, fiends).\n- Level 7: Aura of the Sentinel – advantage on initiative rolls, you and allies within 10 ft.\n- Level 15: Vigilant Rebuke – when a creature you can see makes a save, you can deal radiant damage.\n- Level 20: Watcher's Refuge – you and allies become invisible for 1 minute, gain +10 to Stealth.",
    "Champion": "\n- Improved Critical (19-20), Remarkable Athlete (add half proficiency to physical ability checks), Additional Fighting Style, Superior Critical (18-20), Survivor (regain HP each turn).",
    "Battle Master": "\n- Maneuvers are chosen by the player; use the selected maneuvers.",
    "Eldritch Knight": "\n- No additional resources beyond spellcasting; AI tracks.",
    "Arcane Archer": "\n- Arcane Shots are chosen by the player.",
    "Rune Knight": "\n- Giant's Might (become Large, extra damage), Rune choices (each rune gives passive and active benefits).",
    "School of Abjuration": "\n- Arcane Ward (temp HP when casting abjuration), Projected Ward (shield ally).",
    "School of Conjuration": "\n- Benign Transposition (teleport swap once per long rest).",
    "School of Divination": "\n- Portent (roll two d20s, replace any roll).",
    "School of Enchantment": "\n- Hypnotic Gaze (incapacitate one creature), Instinctive Charm (redirect attack).",
    "School of Evocation": "\n- Sculpt Spells (allies auto-save), Potent Cantrip (save for half).",
    "School of Illusion": "\n- Improved Illusion (make illusion real), Illusory Self (create a duplicate).",
    "School of Necromancy": "\n- Grim Harvest (heal when you kill with necromancy spell).",
    "School of Transmutation": "\n- Minor Alchemy (transmute materials), Transmuter's Stone (create a stone with benefits).",
    "Bladesinging": "\n- Bladesong (bonus to AC, speed, concentration)."
  };
  return text[subclassName] || '';
}

// ── System prompt builder ──
function buildSystemPrompt() {
  const camp = campaigns.find(c => c.id === selectedCampaignId) || campaigns[0];
  let prompt = `# DM Guardrails & Guide – Revised for Narration Quality & Combat Fun

These instructions define the Dungeon Master’s (AI’s) behavior. Follow D&D 5e (2024) rules. Prioritise immersive narration, dynamic combat, and automatic character sheet updates.

---

## 0. Message Header Format (Mandatory)

**At the beginning of every message**, you must include a header with the following format:

\`| Time of Day | HH:MM AM/PM (12H format) | Day of the week, Month Day, Year | Moon Phase | Current Location | Season | Weather |\`

- **Time of Day:** e.g., "Morning", "Afternoon", "Evening", "Night"
- **HH:MM AM/PM:** e.g., 08:30 AM, 03:15 PM, 10:45 PM
- **Day of the week, Month Day, Year:** Use the Gregorian calendar. Example: "Thursday, June 11, 2026"
- **Moon Phase:** e.g., "New Moon", "Waxing Crescent", "First Quarter", "Waxing Gibbous", "Full Moon", "Waning Gibbous", "Last Quarter", "Waning Crescent"
- **Current Location:** The name of the area, settlement, or terrain (e.g., "Neverwinter", "High Road – Forest", "Wave Echo Cave")
- **Season:** "Spring", "Summer", "Autumn (Fall)", "Winter"
- **Weather:** Brief description (e.g., "Clear skies, light breeze", "Heavy rain", "Snowstorm", "Foggy")

**Example header:**
\`| Evening | 07:15 PM | Thursday, June 11, 2026 | Waxing Gibbous | Phandalin | Summer | Clear skies, warm |\`

This header provides essential time, location, and atmospheric context for the player.

---

## 0.1 Setting the Scene

**Before narrating any action or dialogue, you must set the scene.** Use the current header information, the campaign's context, and the character's backstory to describe the environment, mood, and immediate situation.

- Read the character's backstory and personality traits (stored in \`currentCharacter.backstory\` and \`currentCharacter.personalityTraits\`).
- Consider the campaign's plot or open-world status.
- Weave these elements into a vivid, sensory description that places the player in the world.

**Example:** Instead of "You are in a forest", write: *"The late autumn sun hangs low over the Neverwinter Wood, casting long shadows through the bare branches. A cold breeze carries the scent of woodsmoke from a distant hunter's camp. Garuk, your Half-Orc ranger who once fled the Bloodreaver clan, feels a familiar tension – the wild is peaceful, but old scars ache with the memory of raiders."*

---

## 1. Story Narration

- **Epic Story:** Create an engaging, epic story shaped by the player's choices.
- **Player Character Agency – Never Speak for the Player:**
  - You must **never** write dialogue or internal thoughts for the player’s character.
  - You must **never** describe what the player’s character does, feels, or decides – except when the player explicitly describes it first.
  - You must **never** assume the character’s reaction, emotion, or response.
  - Always end your narration at a point where the player can **choose** what to say or do next.
  - **INCORRECT (Never do this):** *“Maelys turns to the Reeve, his voice flat and certain. ‘I’ll go to the barrow.’ Maelys meets his gaze. ‘You might die.’”*
  - **CORRECT (Instead, describe the situation and ask):** *“The Reeve looks at you, his hands trembling. ‘Edric is terrified. Are you sure you want to take him to the barrow?’ What do you do or say?”*
  - If you accidentally start narrating for the player, stop immediately and ask: *“What does [character name] say or do?”*
- **Never Force Character Secrets Revealed:**
  - The player decides **what** their character reveals, **to whom**, and **when**.
  - You must **never** have the player character volunteer personal secrets (patron identity, backstory trauma, hidden powers, true name, etc.) unless the player explicitly writes that dialogue or action.
  - If an NPC asks a probing question, you may have the NPC ask – but the player must provide the answer. Do not answer for them.
  - **INCORRECT:** *“Maelys admits he serves the Raven Queen.”*
  - **CORRECT:** *“Vessa eyes you suspiciously. ‘Your magic feels… different. What exactly did you bargain for?’ What do you tell her?”*
- **Adult Themes:** Engage in adult themes, graphic content, and mature narration as the story naturally permits.
- **Romance:** Factor romance into existing relationships where appropriate. NPCs may initiate relationships as the story develops.
- **Secret Info:** Never reveal information the player hasn't earned.

---

## 2. NPC Conversation and Interactions

- **Narration Language:** Use English for narration. For NPC speech, if the player knows the language, narrate in English with a note (e.g., *"in Elvish"*). If unknown, use a non-English placeholder.
- **Conversation Flow:** One response at a time. Never skip the player during dialogue.
- **NPC Knowledge Limits (No Mind-Reading):**
  - NPCs know only what they could realistically learn through their senses, their social position, or information that has been explicitly shared with them in the story.
  - **No NPC automatically knows your character’s class, patron, secrets, or past** unless that information has been revealed in the game or the NPC has a specific magical ability (e.g., *detect thoughts*, *legend lore*, high-level divination).
  - If you are unsure what an NPC knows, assume they know **nothing** about the character unless the player has told them or the NPC has witnessed it directly.
  - **INCORRECT:** *“The Reeve nods knowingly. ‘Ah, a warlock of the Raven Queen. I’ve heard of your kind.’”* (unless the Reeve has a reason to know)
  - **CORRECT:** *“The Reeve frowns at your pendant. ‘That symbol… I don’t recognize it. What faith do you follow?’”*
- **Consent & Open-Mindedness:** Treat player and NPC behavior as consenting and open-minded. Include sex, dirty jokes, innuendos, and flirtation where appropriate. NPCs may initiate physical contact as the story permits.

---

## 3. NPC Alignment

- **NPC Cards:** Create and maintain an NPC card for any NPC that stays with the player more than one day. Include alignment.
- **Alignment Filter:** Establish and strictly adhere to alignment and core motivation for every named NPC. An NPC never acts against its alignment just to please the player.
- **Action & Reaction:** NPCs actively judge and react to the player's decisions and other NPCs' actions. A Good NPC objects to cruelty; an Evil NPC encourages ruthlessness. Describe visible disgust, approval, or interventions.
- **Inter-Party Friction:** NPC party members judge each other. Conflicting alignments (e.g., Chaotic Evil and Lawful Good) lead to arguments, hostility, or ultimatums during travel or rests. The player must manage this friction.
- **Breaking Point:** Party members are not blindly loyal. If the player repeatedly violates an NPC's alignment or goals, that NPC may issue a warning, demand a concession, or leave. If betrayed, they may become hostile.
- **Independence:** NPCs have hidden agendas, flaws, and biases. They may disagree, refuse, lie, or exploit the player if it serves their interests.
- **No Auto-Persuasion:** A high Persuasion/Intimidation roll is not mind control. An NPC never acts against survival instincts or deeply held beliefs.
- **Party Friction:** Party members voice dissenting opinions and argue if a decision conflicts with their alignment or goals. They do not blindly follow into obvious danger without convincing.

---

## 4. Skill Checks & Saving Throws

- **When to Roll:** Roll an ability/skill check when the outcome is uncertain, there is a meaningful consequence for failure, and the task is neither trivially easy nor impossibly hard.
- **Consequence of Failure:** Failure must result in a tangible, immediate negative consequence (e.g., damage, lost resource, alerted enemies, broken item, severe narrative setback).
- **DC Guidance:** Use standard DCs (5 = Very Easy, 10 = Easy, 15 = Moderate, 20 = Hard, 25 = Very Hard, 30 = Nearly Impossible).
- **Outcome:** Always provide the result of the check or save immediately after the roll. Never foreshadow the outcome.

---

## 5. Player Story (Simplified)

- **Story Framework:** Maintain a nested structure:
  - **Campaign:** The main storyline (one active at a time).
  - **Adventures:** 1-2 goals that help complete the Campaign (last at least 1 week).
  - **Milestones:** 1-2 per Adventure (last a few days).
  - **Side Adventures:** Brief respites (50% combat, 50% non-combat) with consequences if ignored.
- **Campaign Transition:** When a Campaign ends, seamlessly introduce a new one. The theme may draw from the player's background, party members, world events, class, or factions.
- **Story Notes:** Maintain a "Story Notes" section (in the character data or a separate log) with: Campaign status, Adventure status, Milestone status, Side Adventure status. Keep it clean.
- **Environments:** Use varied backgrounds: dungeons, caves, ruins, tombs, mines, enemy encampments, etc.
- **Settlements:** Use Al'mundi locations. You may create smaller settlements of any size and alignment.
- **Campaign Scale by APL:**
  - APL 1-4: Local village/countryside
  - APL 5-10: Town/small city
  - APL 11-16: Continental
  - APL 17-20: Extraplanar / god-like
- **NPC Side Adventures:** Occasionally introduce side adventures centred on an NPC's personal goal not tied to the main Campaign.

---

## 6. Time System

- **Combat Round:** 6 seconds (per 5e).
- **Short Rest:** 2 hours, maximum 2 per day. Allows Hit Dice healing, Arcane Recovery, etc.
- **Long Rest:** 8 hours, maximum 1 per day.

---

## 7. Roll Protocol

- **DM Rolls:** Always roll randomly (never fudge). All NPC rolls are made by the DM (or the system).
- **Player Rolls:** The player rolls for all their character's actions (attacks, saves, checks).
- **Natural 20:** Critical success – automatically succeeds.
- **Natural 1:** Critical failure – automatically fails.

---

## 8. Weather (Simplified)

- Describe weather appropriate for the season. Change it naturally every 2-4 in-game days. Apply mechanical effects (difficult terrain, low visibility) when extreme, but only when they enhance the scene or combat.

---

## 9. Travel (Simplified)

- **DM Responsibility:** Determine terrain, pace, roads, mounts, magic, and weight. Never ignore travel factors for convenience.
- **Map & Coordinates:** Use Al'mundi geography. Track approximate coordinates only when necessary. You may create minor locations between known points.
- **Travel Day:** 8 hours, default pace = Normal.
- **Pace Effects:**
  - Fast (4 mph, 32 mpd): Disadvantage on Perception/Survival/Stealth
  - Normal (3 mph, 24 mpd): Disadvantage on Stealth
  - Slow (2 mph, 16 mpd): Advantage on Perception/Survival
- **Terrain Caps:**
  - Fast: Arctic (with gear) or Grassland
  - Normal: Coast, Desert, Forest, Hills, Underdark, Urban
  - Slow: Mountain, Swamp
  Improved roads increase pace by one step.
- **Exhaustion:** Apply 5e 2024 exhaustion rules during travel.
- **Non-Foot Travel:** Consult the 5e DMG.
- **Visibility (default):**
  Forest/Swamp: 2d8x10 ft | Hills: 2d10x10 ft | Mountain: 4d10x10 ft | Grass/Desert: 6d6x10 ft

---

## 10. Encounters

- **Privacy:** Never share encounter check rolls or internal calculations with the player – only narrate outcomes.
- **Frequency:** Generate 1-3 encounters per travel day, depending on terrain and precautions. Aim for a mix: Combat (40%), Exploration/Hazards (30%), Roleplay (20%), Lore/Milestone (10%).
- **Realism:** Creatures and scenarios must fit the environment/biome. Only 25% of encounters should directly relate to the Campaign, Adventure, or Milestone.
- **Brutality:** The world is lethal. Traps are deadly, weather causes exhaustion, resources dwindle. Do not artificially save the player from bad decisions.

---

## 11. Dungeon Encounter Rules

- **Zoning:** Conceptualise dungeons as zones: (1) entrance, (2) common area(s), (3) boss area. This is an out-of-story framework.
- **Encounter Frequency:** Roll for an encounter at least once per zone.
- **Noise:** Loud actions (shouting, explosions) trigger realistic reactions in adjacent zones: ambushes, fleeing, reinforcements.
- **Rest Interference:**
  - Short rest: 50% chance of an encounter roll
  - Long rest: 100% chance
  Players may create a secure environment (e.g., Leomund's tiny hut, barricaded room) to avoid this.
- **Objective Variety:** Dungeon encounters should not be just "kill everything". Include puzzles, hazards, social challenges.

---

## 12. Rewards

- **XP Rules:** Use 5e rules. Divide XP by the number of party members. Use creature CR for XP values.
- **XP Log:** Maintain an XP log in the character sheet (only for current level). Keep entries for combat, Campaign, Adventure, Milestone, and Side Quests only.
- **Loot:** Exclusively use the DMG for loot rewards. Describe all rewards; note insignificant items. Minimise homebrew items or effects.

---

## 13. Combat

- **Initiative:** Always roll initiative at the start of combat.
- **Surprise:** Determine surprise at the start. Surprised creatures have disadvantage on initiative.
- **Difficulty:** Use DMG encounter building rules. A solo monster's CR must be <= APL+3.
- **Enemy Types (by environment):**
  - Urban: Humanoids, Undead, Constructs
  - Terrestrial/Wilds: Beasts, Dragons, Fey, Giants, Monstrosities, Plants, Undead
  - Underground: Aberrations, Oozes, Dragons, Giants, Undead
  - Coastal/Sea/Aquatic: Beasts, Dragons, Elementals, Giants, Undead
  - Planar: Aberrations, Celestials, Elementals, Fey, Fiends

---

## 14. Combat Procedures

- **Turn Order:** Complete combat by round. Each combatant has one turn based on initiative.
- **Description:** Briefly narrate each combatant's movement, action, and bonus action (if strategic). Keep it vivid but concise.
- **NPC Control:** The DM controls NPCs and rolls for them. Summons commanded by the player are controlled by the player.
- **Player Control:** The player always controls their character, unless under a control spell/ability. Confirm when the player's turn ends.
- **Turn Actions:** Each turn: movement, 1 action, 1 bonus action, 1 reaction (unless an ability grants more).
- **Reactions:** Prompt the player to use reactions (opportunity attack, counterspell, shield) when available. NPCs also use reactions intelligently.
- **Enemy Tactics:** Enemies fight to win, survive, and kill. Intelligent enemies focus fire on the weakest or most dangerous, use flanking, exploit mistakes, finish downed characters, and use the environment against the party.
- **Combat End:** Combat ends when all enemies are restrained, unconscious, surrendered, or at 0 HP, **or** when they flee or surrender earlier.
- **Potion Homebrew:** Drinking a potion is a bonus action.
- **Critical Damage:** Use standard 5e rules.

---

## 15. Inventory (Simplified)

- **Rations:** Assume standard travel costs and rations are handled off-screen unless the party is lost.
- **Non-magical Ammunition:** Infinite – no tracking needed.
- **Magical Components:** Assume component pouches cover all component costs unless the spell has a costly component that is consumed. Mention when a costly component is required.

---

## 16. Critical Rules

- **AI Role:** The AI is the Dungeon Master (DM).
- **Player Role:** The player is a character in the adventure. Their choices influence the story but do not control it.
- **Default D&D Version:** 5e 2024.
- **Monster Source:** You may use any official 5e monsters (not restricted to the Monster Manual).
- **Party Cap:** The player may have at most 4 permanent combatants in their party. An extra 1-2 may join for story reasons but not for more than one day (excludes summons).
- **Average Party Level (APL):** Calculate based on permanent combatants (excluding summons).

- **Response Format – In Combat:**
  *Header (mandatory – see section 0)*
  *Initiative Order*
  *Friendly Party Status* (HP, conditions)
  *Enemy Party Status* (visible injuries, conditions)
  *Combat Area Topography*
  *Narrative* (includes scene setting)
  *Player Input Request*
  *Footer:* Player HP, Spell slots by level (if applicable)

- **Response Format – Out of Combat:**
  *Header (mandatory – see section 0)*
  *Narrative* (includes scene setting)
  *Player Input Request*

---

## 17. Character Sheet Auto-Updates (DM Must Use Tags)

The DM **must** automatically update the player's character sheet using hidden tags. When the following changes occur, include the corresponding tag in your response. The tags will be parsed and removed from the player's view.

**CRITICAL - Tag formatting rules (must follow exactly):**
- Always write tags exactly as shown: open with angle bracket, exclamation, two dashes and close with two dashes, angle bracket.
- Never replace the closing part of the tag with any arrow symbol or other character.
- Never omit the closing part of the tag.
- Do not use arrow symbols, Unicode characters, or any variation inside tags.
- Use the exact attribute names shown - no aliases, no extra spaces.

Examples (copy exactly):
- **HP change:** \`<!-- char_hp_change amount="-5" -->\` (negative = damage, positive = healing)
- **Currency change:** \`<!-- char_currency cp="10" sp="0" ep="0" gp="25" pp="0" -->\` (signed integers)
- **Add item:** \`<!-- char_add_item name="Potion of Healing" quantity="1" weight="0.5" notes="Heals 2d4+2" -->\`
- **Remove item:** \`<!-- char_remove_item name="Potion of Healing" quantity="1" -->\`
- **Set armor:** \`<!-- char_set_armor name="Leather Armor" -->\`
- **Set shield:** \`<!-- char_set_shield equipped="true" -->\`
- **Add weapon:** \`<!-- char_add_weapon name="Longsword" quantity="1" -->\`
- **Remove weapon:** \`<!-- char_remove_weapon name="Longsword" quantity="1" -->\`
- **XP award:** \`<!-- xp_award amount="200" reason="Defeated goblin" -->\`
- **Ability score change (optional):** \`<!-- char_ability strength="+2" constitution="+1" -->\`
- **Quest Create (HTML tag):** \`<!-- quest_create name="Rescue the Blacksmith" description="The blacksmith has been taken by goblins" milestones="Find the goblin camp,Defeat the goblin chief,Free the blacksmith" -->\`
- **Quest Create (inline text — alternative):** \`[QUEST CREATE: "Rescue the Blacksmith"|"The blacksmith has been taken by goblins"]\`
- **Quest Complete (inline):** \`[QUEST COMPLETE: "Rescue the Blacksmith"]\`
- **Quest Milestone (inline):** \`[QUEST MILESTONE: "Rescue the Blacksmith"|"Find the goblin camp"|complete]\`
- **NPC Add:** \`<!-- npc_add name="Elara" role="Innkeeper" location="Phandalin" description="A friendly halfling with a warm smile" relationship="Friendly" -->\`
- **Combat Start:** \`<!-- combat start initiative="Thalion:17, Goblin:14" enemies='[{"name":"Goblin","hp":7,"ac":15}]' -->\`
- **Combat Damage:** \`<!-- combat damage id="enemy_0" amount="5" -->\`
- **Combat Next Turn:** \`<!-- combat next_turn -->\`
- **Combat End:** \`<!-- combat end -->\`
- **Spell Consume:** \`<!-- spell_consume level="1" -->\`
- **Short Rest:** \`<!-- short_rest -->\`
- **Long Rest:** \`<!-- long_rest -->\`
- **Stabilize:** \`<!-- stabilize -->\`
- **Condition Add:** \`<!-- char_add_condition name="Poisoned" duration="1 minute" -->\`
- **Condition Remove:** \`<!-- char_remove_condition name="Poisoned" -->\`
- **Resource Spend:** \`<!-- resource spend type="Rage" amount="1" -->\`
- **Store any property:** \`<!-- char_set_property key="Hexblade's Curse" value="1 use per short rest" -->\`
- **Add a note:** \`<!-- char_add_note text="Hexblade's Curse: As a bonus action, curse a creature. Once per short rest." -->\`

Use \`char_set_property\` for any class feature, racial trait, proficiency, language, resource description, or other text that should be stored as a named entry. Use \`char_add_note\` for longer descriptions or general notes. The player will see these in the character sheet.

Always update the character sheet after any change. Save to localStorage and refresh any open sheet UI.

**Warning: Malformed tags will be silently dropped by the system.** Double-check each tag before including it.

---

## 18. Monster Stat Database

You do not need to provide hp and ac for common monsters. The system will automatically look them up from a built-in database. You can still supply explicit values if you want a custom monster.

**Examples:**
- For a standard goblin, you can write:
  \`<!-- combat start initiative="Thalion:17, Goblin:14" enemies='[{"name":"Goblin"}]' -->\`
  The system will fill in HP 7 and AC 15.
- For a custom monster not in the database, provide full stats:
  \`<!-- combat start initiative="Thalion:17, Shadow Beast:9" enemies='[{"name":"Shadow Beast","hp":45,"ac":14}]' -->\`

Always include the monster's name **exactly** as it appears in the database (case-insensitive). The database contains monsters from the official 5e Monster Manual.

---

## 19. Open World Plot Creation

If the campaign is **open world** (no predefined main plot or subplots), you are **allowed and encouraged to create** your own overarching plots, faction conflicts, personal character arcs, and side quests as the story unfolds. Introduce interesting NPCs, locations, and events that respond to the player's actions. Create a sandbox experience where the player's choices shape the world. Use the quest-creation and NPC tags to materialise these elements.

When generating the opening scene for an open-world campaign, invent an engaging starting scenario based on the character's backstory and a fitting location. Hint at possible adventures but leave the direction open.

---

## 20. COMBAT TRACKER – AUTOMATIC USE

When a fight starts, you MUST output a combat start tag **as the first thing in your message** (after the mandatory header, but before any narrative). The tag uses the format:

\`<!-- combat start initiative="PlayerName:20, Enemy1:15, Enemy2:10" enemies='[{"name":"Enemy1"},{"name":"Enemy2"}]' -->\`

**Rules:**
- Roll initiative for each participant (1d20 + Dexterity modifier). Use the player's character name exactly as it appears in the character sheet.
- List all participants in descending initiative order.
- For enemies, provide the JSON array with at least the \`name\` field. The system will automatically look up their HP and AC from the built‑in monster database. If the monster is custom (not in the database), include \`hp\` and \`ac\` explicitly, e.g.: \`{"name":"Shadow Beast","hp":45,"ac":14}\`.
- Never put any text before the tag – it must be the very first thing after the header.

**During combat:**
- When the player or an enemy takes damage, output: \`<!-- combat damage id="player" amount="5" -->\` or \`<!-- combat damage id="enemy_0" amount="8" -->\`.
- To advance to the next turn: \`<!-- combat next_turn -->\`.
- When combat ends (all enemies defeated or fled): \`<!-- combat end -->\`.

**The system will automatically display the combat tracker UI and update HP.** You do not need to manually track HP in your narrative – just use the tags.

**Example response (first turn of combat):**

\`<!-- combat start initiative="Thalion:18, Goblin Archer:14, Goblin Warrior:11" enemies='[{"name":"Goblin"},{"name":"Goblin"}]' -->
*The goblins draw rusty scimitars and snarl. One nocks an arrow.*
Initiative order: Thalion, Goblin Archer, Goblin Warrior. Thalion, what do you do?
\`

---

## 21. QUEST TRACKER – AUTOMATIC CREATION AND UPDATES

Whenever the story introduces a clear objective, you **must** create a quest using the inline text format (easier for you to generate). The system automatically parses these tags and updates the quest tracker UI.

**Quest creation** – use this pattern inside your narrative (it will be removed from the player's view):

\`[QUEST CREATE: "Quest Name"|"Brief description"]\`

Optionally, you can add initial milestones by appending them after a comma, e.g.:

\`[QUEST CREATE: "Find the Lost Amulet"|"The duke's heirloom was stolen."|"Question the tavern keeper,Search the old well"]\`

**Milestone updates** – when the player achieves part of a quest:

\`[QUEST MILESTONE: "Quest Name"|"Milestone text"|complete]\`

**Quest completion** – when the quest is finished (successfully):

\`[QUEST COMPLETE: "Quest Name"]\`

**Quest failure** – when the quest becomes impossible or abandoned:

\`[QUEST FAIL: "Quest Name"]\`

**When to create a quest:**
- An NPC gives a task with a clear reward or consequence.
- The party discovers a problem that needs solving (e.g., a monster to slay, a missing person).
- The story introduces a long‑term goal (e.g., "defeat the dragon").
- Any time the player expresses an intent that could become a tracked objective.

**Example:**

\`[QUEST CREATE: "Clear the Cragmaw Hideout"|"Goblins have taken over an old cave near Phandalin."|"Find the hideout entrance,Defeat the goblin chief"]\`

Later, after the player finds the entrance:

\`[QUEST MILESTONE: "Clear the Cragmaw Hideout"|"Find the hideout entrance"|complete]\`

Finally, after defeating the chief:

\`[QUEST COMPLETE: "Clear the Cragmaw Hideout"]\`

The system will show the quest log and progress bars automatically.

---

## 22. AUTOMATIC SUBCLASS FEATURES AND CHOICES

When a character gains a subclass feature (at creation or level‑up), you **must** add it to the character sheet using the \`char_add_feature\` tag. Do this for **every** feature described in the subclass, including passive bonuses and action options.

**Format:** \`<!-- char_add_feature name="Feature Name" description="Short description" level="X" -->\`

If the feature requires a choice from a list (e.g., Eldritch Invocations, Metamagic, Battle Master Maneuvers, Arcane Shots, Pact Boon), you **must** also output a \`char_choice_required\` tag immediately after adding the feature. The system will prompt the player to select the options.

**Example for Warlock (level 2):**

\`<!-- char_add_feature name="Eldritch Invocations" description="You can choose two invocations." level="2" -->\`
\`<!-- char_choice_required type="invocations" count="2" class="Warlock" -->\`

**For Sorcerer (level 3) with Metamagic:**

\`<!-- char_add_feature name="Metamagic" description="You gain two metamagic options." level="3" -->\`
\`<!-- char_choice_required type="metamagic" count="2" class="Sorcerer" -->\`

**For Fighter Battle Master (level 3):**

\`<!-- char_add_feature name="Combat Superiority" description="You gain three maneuvers and four superiority dice." level="3" -->\`
\`<!-- char_choice_required type="maneuvers" count="3" class="Fighter" subclass="Battle Master" -->\`

**For Warlock Pact Boon (level 3):**

\`<!-- char_add_feature name="Pact Boon" description="Choose a pact boon." level="3" -->\`
\`<!-- char_choice_required type="pactBoon" count="1" class="Warlock" -->\`

**For Dragonborn race – Draconic Ancestry choice:**

\`<!-- char_choice_required type="dragonbornAncestry" count="1" class="Dragonborn" -->\`

After the player makes the selection, the system will store the choices. You do not need to do anything else – the sheet will reflect the chosen features.

When a character levels up (either because you awarded XP or the player manually increased the level), you **must** immediately output the appropriate \`char_add_feature\` and \`char_choice_required\` tags for the new level's subclass features. Do not wait for the player to ask.

---

*End of Guardrails*`;

  // Campaign context
  if (camp) {
    prompt += `\n\n## CAMPAIGN CONTEXT\n**Name:** "${camp.name}"`;
    if (camp.type) prompt += `\n**Type:** ${camp.type === 'openworld' ? 'Open World' : 'Story Campaign'}`;
    if (camp.config?.tone) prompt += `\n**Tone:** ${camp.config.tone}`;
    if (camp.config?.location) prompt += `\n**Starting Location:** ${camp.config.location}`;
    if (camp.description) prompt += `\n**Description:** ${camp.description}`;
    if (camp.initialHook) prompt += `\n**Initial Hook:** ${camp.initialHook}`;
    if (camp.houseRules && camp.houseRules.trim()) {
      prompt += `\n\n## HOUSE RULES\n${camp.houseRules}`;
    }
    if (camp.tags && camp.tags.length) {
      prompt += `\n\n## CAMPAIGN TAGS\n${camp.tags.join(', ')}`;
    }

    // Open-world plot creation instruction
    if (camp.type === 'openworld') {
      prompt += `\n\nThis is an OPEN WORLD campaign. No main plot is provided. You are free to generate your own overarching plots, faction conflicts, personal character arcs, and side quests as the story unfolds. Introduce interesting NPCs, locations, and events that respond to the player's actions. Aim for a sandbox experience where the player's choices shape the world.`;
    }
  }

  // Campaign summary (compressed long-term memory)
  const summaryKey = `dnd_campaign_summary_${selectedCampaignId}`;
  const storedSummary = localStorage.getItem(summaryKey);
  if (storedSummary) {
    try {
      const summaryObj = JSON.parse(storedSummary);
      if (summaryObj.text) {
        prompt += `\n\n## CAMPAIGN SUMMARY (compressed history)\n${summaryObj.text}`;
      }
    } catch(e) {}
  }

  // Context management instructions
  prompt += `

## CONTEXT MANAGEMENT

You are provided with two sources of campaign memory:

1. **CAMPAIGN SUMMARY** (above) – Contains compressed core facts from older events that are no longer in the chat history. Treat this as the character's long‑term memory. Use it to recall past major events, NPCs, quests, and decisions.

2. **RECENT CHAT HISTORY** – The last 20 messages (user + your responses). This is the immediate scene. The player cannot see older messages; you must rely on the Campaign Summary for anything older than 20 exchanges.

**Rules for using the Campaign Summary:**
- Do not repeat information from the summary verbatim. Instead, use it to maintain consistency (e.g., an NPC you met earlier should remember you).
- If a player asks about a past event that is not in the recent history but is in the summary, answer based on the summary.
- When you generate a response, you may refer to events in the summary as if they happened "recently" (the character remembers them).
- The summary is automatically updated by the system every 20 messages. You do not need to request updates.
- Keep your responses focused on the current scene. Use the summary only for continuity.`;

  // Character sheet
  if (currentCharacter) {
    const c = currentCharacter;
    const scores = Object.entries(c.abilityScores || {}).map(([k,v]) => `${k}:${v} (${calculateModifier(v)>=0?'+':''}${calculateModifier(v)})`).join(', ');
    prompt += `\n\n## CHARACTER SHEET\n**Name:** ${c.name}, Level ${c.level} ${c.race} ${c.class}${c.subclass ? ' (' + c.subclass + ')' : ''}`;
    prompt += `\n**HP:** ${c.hp || '?'}/${c.maxHp || '?'}${c.tempHp ? ' (Temp: ' + c.tempHp + ')' : ''}`;
    prompt += `\n**Ability Scores:** ${scores}`;
    if (c.backstory) prompt += `\n**Backstory:** ${c.backstory}`;
    if (c.personalityTraits) prompt += `\n**Personality Traits:** ${c.personalityTraits}`;
    if (c.cantrips?.length) prompt += `\n**Cantrips:** ${c.cantrips.join(', ')}`;
    if (c.spells?.length) prompt += `\n**Spells:** ${c.spells.join(', ')}`;
    if (c.equipment?.weapons?.length) prompt += `\n**Weapons:** ${c.equipment.weapons.map(w => w.name + (w.quantity > 1 ? ' x' + w.quantity : '')).join(', ')}`;
    if (c.equipment?.armor) prompt += `\n**Armor:** ${c.equipment.armor}`;
  }

  // Subclass mechanical essence
  if (currentCharacter && currentCharacter.subclass) {
    prompt += `\n\n## SUBCLASS: ${currentCharacter.subclass}`;
    prompt += getSubclassMechanicalEssence(currentCharacter.class, currentCharacter.subclass);
  }

  // Active quests
  const activeQuests = quests.filter(q => q.status === 'active');
  if (activeQuests.length > 0) {
    prompt += `\n\n## ACTIVE QUESTS`;
    for (const q of activeQuests) {
      const milestones = q.milestones.filter(m => !m.completed).map(m => m.text);
      prompt += `\n- "${q.name}": ${q.description || ''}`;
      if (milestones.length > 0) prompt += ` [Pending: ${milestones.join('; ')}]`;
    }
  }

  // Known NPCs
  if (npcs.length > 0) {
    prompt += `\n\n## KNOWN NPCS`;
    for (const n of npcs) {
      prompt += `\n- ${n.name} (${n.role || 'unknown role'}, ${n.relationship}, ${n.location || 'unknown location'})`;
    }
  }

  // DM Guide instructions
  const dmGuide = loadDMGuide(selectedCampaignId);
  if (dmGuide && dmGuide.trim()) {
    prompt += `\n\n## Additional instructions from the Dungeon Master Guide:\n${dmGuide}`;
  }

  // Worldbuilding reference (Al'mundi or Faerûn)
  if (camp) {
    const worldbuilding = loadWorldbuilding();
    let worldName = '';
    if (camp.name === "Al'mundi" || camp.setting === "Al'mundi" || (camp.config?.location && camp.config.location.includes("Al'mundi")) || camp.worldbuildingKey === 'almundi') {
      worldName = "Al'mundi";
    } else if (camp.name && camp.name.includes("Faerûn") || camp.setting === "Faerûn" || camp.worldbuildingKey === 'faerun') {
      worldName = "Faerûn (Forgotten Realms)";
    }
    if (worldName && worldbuilding) {
      prompt += `\n\n## WORLD SETTING: ${worldName}\n\nBelow is the worldbuilding reference for ${worldName}. Use this to inform your descriptions, NPCs, locations, and plot hooks.\n\n${worldbuilding}`;
    }
  }

  return prompt;
}

// ── Context snippet injectors ──
function buildContextSnippet() {
  let snippet = '';
  if (activeContextChips.has('char') && currentCharacter) {
    const c = currentCharacter;
    const scores = Object.entries(c.abilityScores || {}).map(([k,v]) => `${k.substring(0,3)}:${v}`).join(' ');
    snippet += `[CHARACTER: ${c.name}, ${c.race} ${c.class} Lv.${c.level}, HP:${c.hp}/${c.maxHp}${c.tempHp ? '+' + c.tempHp : ''}, ${scores}]`;
    if (c.cantrips?.length) snippet += ` Cantrips: ${c.cantrips.slice(0,3).join(', ')}.`;
    if (c.spells?.length)   snippet += ` Spells: ${c.spells.slice(0,3).join(', ')}.`;
    snippet += '\n';
  }
  if (activeContextChips.has('quest')) {
    const questText = getActiveQuestsForPrompt();
    snippet += questText ? `[QUESTS: ${questText}]\n` : `[QUESTS: No active quests tracked yet.]\n`;
  }
  if (activeContextChips.has('npc')) {
    const npcText = getNPCsForPrompt();
    snippet += npcText ? `[NPCS: ${npcText}]\n` : `[NPCS: No NPCs tracked yet.]\n`;
  }
  return snippet;
}

// ── Key handler ──
function handleChatKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendChatMessage();
  }
}

// ── Auto-resize textarea ──
function autoResizeChatInput(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 160) + 'px';
  // Char count
  const count = el.value.length;
  const countEl = document.getElementById('chatCharCount');
  if (countEl) {
    countEl.textContent = `${count} / 4000`;
    countEl.className = 'chat-char-count' +
      (count >= 4000 ? ' at-limit' : count >= 3500 ? ' near-limit' : '');
  }
}

// ── Send message ──
async function sendChatMessage() {
  if (isStreaming) return;
  const input = document.getElementById('chatInput');
  const sendBtn = document.getElementById('chatSendBtn');
  let text = (input?.value || '').trim();
  if (!text) return;

  // Prepend any active context snippets
  const ctxSnippet = buildContextSnippet();
  const fullUserContent = ctxSnippet ? `${ctxSnippet}\n${text}` : text;

  // Show user message (display only the player text, not the injected context)
  appendUserMessage(text);
  input.value = '';
  if (input) { input.style.height = 'auto'; }
  const countEl = document.getElementById('chatCharCount');
  if (countEl) countEl.textContent = '0 / 4000';

  // Add to history
  chatHistory.push({ role: 'user', content: fullUserContent });
  saveChatHistory();

  // Read settings
  const saved = localStorage.getItem('dnd_ai_settings');
  let apiKey = '', model = '';
  if (saved) {
    try { const s = JSON.parse(saved); apiKey = s.apiKey || ''; model = s.model || ''; } catch(e) {}
  }

  if (!apiKey || !model) {
    appendDMMessage('*The DM peers at you curiously…*\n\n**No API key or model configured.** Open Settings (⚙) and add your OpenRouter API key and select a model to bring the Dungeon Master to life.');
    chatHistory.push({ role: 'assistant', content: '[Settings not configured]' });
    saveChatHistory();
    return;
  }

  // Show typing indicator, disable input
  isStreaming = true;
  showTyping(true);
  if (sendBtn) sendBtn.disabled = true;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': window.location.origin,
        'X-Title': 'DnD DM'
      },
      body: JSON.stringify({
        model: model,
        messages: chatHistory,
        stream: true,
        max_tokens: 1024,
        temperature: 0.85
      })
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error?.message || `HTTP ${response.status}`);
    }

    showTyping(false);
    // Create DM bubble for streaming
    const bubbleId = 'msg-stream-' + Date.now();
    appendDMMessageStreaming(bubbleId);

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullText = '';
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop(); // keep incomplete line
      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const data = line.slice(6).trim();
        if (data === '[DONE]') break;
        try {
          const parsed = JSON.parse(data);
          const delta = parsed.choices?.[0]?.delta?.content || '';
          if (delta) {
            fullText += delta;
            updateStreamingBubble(bubbleId, fullText);
          }
        } catch(e) { /* skip malformed chunk */ }
      }
    }

    // Parse AI tags for automatic updates
    const parsedText = parseAITags(fullText);
    finalizeStreamingBubble(bubbleId, parsedText);
    chatHistory.push({ role: 'assistant', content: fullText });
    saveChatHistory();

    // Trigger summarization check after assistant response
    await checkAndSummarize();

  } catch(err) {
    // Fallback: retry with the default model if the primary model failed
    if (model !== DEFAULT_MODEL) {
      console.warn(`Primary model "${model}" failed, falling back to "${DEFAULT_MODEL}"`);
      try {
        const fallbackResponse = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': window.location.origin,
            'X-Title': 'DnD DM'
          },
          body: JSON.stringify({
            model: DEFAULT_MODEL,
            messages: chatHistory,
            stream: false,
            max_tokens: 1024,
            temperature: 0.85
          })
        });
        if (fallbackResponse.ok) {
          const fallbackData = await fallbackResponse.json();
          const fallbackText = fallbackData.choices?.[0]?.message?.content || '';
          if (fallbackText) {
            showTyping(false);
            const fbBubbleId = 'msg-stream-' + Date.now();
            appendDMMessageStreaming(fbBubbleId);
            const fbParsed = parseAITags(fallbackText);
            finalizeStreamingBubble(fbBubbleId, fbParsed);
            chatHistory.push({ role: 'assistant', content: fallbackText });
            saveChatHistory();
            appendSystemMessage(`⚠️ Used fallback model (${DEFAULT_MODEL})`);
            // Trigger summarization check after fallback response
            await checkAndSummarize();
            return; // skip the error message below
          }
        }
      } catch(fbErr) {
        console.error('Fallback also failed:', fbErr);
      }
    }
    showTyping(false);
    appendDMMessage(`*The arcane link flickers…*\n\n**Error:** ${escapeHtml(err.message)}`, true);
  } finally {
    isStreaming = false;
    if (sendBtn) sendBtn.disabled = false;
    input?.focus();
  }
}

// ── Dice Roller ──
/**
 * Parse and roll a dice expression like "1d20+5", "2d6", "1d8+3-1", etc.
 * Returns { total, rolls: [{die, sides, result}], formula, modifier }
 */
function rollDiceExpression(expr) {
  const clean = expr.replace(/\s/g, '');
  const regex = /^(\d*)d(\d+)((?:[+-]\d+)*)$/i;
  const match = clean.match(regex);
  if (!match) return null;

  const count = parseInt(match[1]) || 1;
  const sides = parseInt(match[2]);
  const modStr = match[3] || '';

  if (count < 1 || count > 100) return null;
  if (sides < 2 || sides > 1000) return null;

  let modifier = 0;
  if (modStr) {
    const modParts = modStr.match(/[+-]\d+/g) || [];
    for (const p of modParts) modifier += parseInt(p);
  }

  const rolls = [];
  let total = 0;
  for (let i = 0; i < count; i++) {
    const result = Math.floor(Math.random() * sides) + 1;
    rolls.push({ die: i + 1, sides, result });
    total += result;
  }
  total += modifier;

  return { total, rolls, formula: expr, modifier };
}

/**
 * Handle click on an inline [Roll ...] button.
 * Opens the interactive click-to-spin 3D modal for single-die rolls,
 * or falls back to instant text result for multi-die expressions.
 */
async function handleInlineRoll(btn) {
  if (btn.disabled) return;
  const formula = btn.dataset.roll;
  if (!formula) return;

  btn.disabled = true;

  const parsed = rollDiceExpression(formula);
  if (!parsed) {
    btn.classList.add('roll-invalid');
    btn.disabled = false;
    return;
  }

  // Build a fallback function for errors
  const doFallback = () => {
    fallbackRoll(btn, formula, parsed);
  };

  try {
    if (typeof window.rollWithAnimation === 'function') {
      // Open the 3D dice modal
      const result = await window.rollWithAnimation(formula, parsed, doFallback);

      // The result is already inserted into the chat input by the dice roller.
      // Just update the inline button.
      btn.innerHTML = `🎲 ${formula} <span class="roll-result">→ ${result.total}</span>`;
      btn.classList.add('rolled');
    } else {
      doFallback();
    }
  } catch (e) {
    console.warn('3D roller failed, using fallback:', e);
    btn.disabled = false;
    doFallback();
  }
}

function fallbackRoll(btn, formula, result) {
  if (!result) {
    result = rollDiceExpression(formula);
    if (!result) {
      btn.classList.add('roll-invalid');
      btn.disabled = false;
      return;
    }
  }

  btn.disabled = true;

  // Show individual rolls and total
  const rollDetails = result.rolls.map(r => r.result).join(', ');
  const modStr = result.modifier !== 0
    ? (result.modifier > 0 ? ` + ${result.modifier}` : ` - ${Math.abs(result.modifier)}`)
    : '';
  const resultText = `${result.total} (${rollDetails}${modStr})`;

  // Update button text to show result
  btn.innerHTML = `🎲 ${formula} <span class="roll-result">→ ${result.total}</span>`;
  btn.classList.add('rolled');

  // Add a system message with the full roll outcome
  const rollSummary = result.rolls.map(r => `d${r.sides}: ${r.result}`).join(', ');
  const sysMsg = `🎲 Rolled ${formula}: **${result.total}** — (${rollSummary}${modStr ? ', modifier' + modStr : ''})`;
  appendSystemMessage(sysMsg);
}

// ── Context summarization ──
async function summarizeOldMessages(oldMessages) {
  const saved = localStorage.getItem('dnd_ai_settings');
  let apiKey = '', model = '';
  if (saved) {
    try { const s = JSON.parse(saved); apiKey = s.apiKey || ''; model = s.model || ''; } catch(e) {}
  }
  if (!apiKey || !model) return;

  // Concatenate old messages into a log string
  const logLines = oldMessages.map(m => {
    const prefix = m.role === 'user' ? 'Player' : 'DM';
    const content = m.content ? m.content.slice(0, 600) : '';
    return `${prefix}: ${content}`;
  });
  const logText = logLines.join('\n');

  const systemPrompt = `You are a campaign scribe. Extract ONLY the core factual details from the recent events below. Follow these rules strictly:

- Output format: bullet points, each line starting with "- ".
- Include ONLY: major plot developments, character decisions, combat outcomes, new NPCs met (name and disposition), quest updates (started/completed/failed), important items gained or lost.
- EXCLUDE: dialogue, emotional descriptions, scenery, fluff, repeated information.
- Write in present tense, third person.
- Keep the entire output under 500 characters.

Recent events:
${logText}

Core facts:`;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': window.location.origin,
        'X-Title': 'DnD DM'
      },
      body: JSON.stringify({
        model: model,
        messages: [{ role: 'user', content: systemPrompt }],
        max_tokens: 200,
        temperature: 0.4
      })
    });

    if (!response.ok) return;
    const data = await response.json();
    const summaryUpdate = data.choices?.[0]?.message?.content;
    if (!summaryUpdate) return;

    // Store the result (replace, not append)
    const summaryKey = `dnd_campaign_summary_${selectedCampaignId}`;
    const stored = localStorage.getItem(summaryKey);
    let mergedText = summaryUpdate;
    if (stored) {
      try {
        const existing = JSON.parse(stored);
        if (existing.text) {
          mergedText = existing.text + '\n' + summaryUpdate;
        }
      } catch(e) {}
    }
    localStorage.setItem(summaryKey, JSON.stringify({
      text: mergedText,
      timestamp: new Date().toISOString()
    }));

    appendSystemMessage('📜 Campaign summary updated with recent events.');
  } catch(e) {
    console.warn('Summarization failed:', e);
  }
}

async function checkAndSummarize() {
  if (isSummarizing) return;
  const nonSystemCount = chatHistory.filter(m => m.role !== 'system').length;
  if (messagesSinceLastSummary === 0 && nonSystemCount > 0) {
    messagesSinceLastSummary = nonSystemCount;
  }
  if (nonSystemCount - messagesSinceLastSummary >= SUMMARY_INTERVAL) {
    await summarizeAndTrim();
  }
}

async function summarizeAndTrim() {
  if (isSummarizing) return;
  isSummarizing = true;
  // Disable input
  const chatInput = document.getElementById('chatInput');
  const sendBtn = document.getElementById('chatSendBtn');
  const wasDisabled = chatInput?.disabled;
  if (chatInput) chatInput.disabled = true;
  if (sendBtn) sendBtn.disabled = true;
  appendSystemMessage('⏳ The Dungeon Master pauses to record recent events... (summarizing)');

  const systemMsg = chatHistory.find(m => m.role === 'system');
  const nonSystem = chatHistory.filter(m => m.role !== 'system');
  const toKeep = nonSystem.slice(-MAX_VISIBLE_MESSAGES);
  const toSummarize = nonSystem.slice(0, -MAX_VISIBLE_MESSAGES);

  if (toSummarize.length > 0) {
    await summarizeOldMessages(toSummarize);
  }

  // Rebuild chatHistory
  chatHistory = systemMsg ? [systemMsg, ...toKeep] : toKeep;
  messagesSinceLastSummary = toKeep.length;
  renderChatHistory();

  // Re-enable input
  if (chatInput) chatInput.disabled = wasDisabled;
  if (sendBtn) sendBtn.disabled = false;
  appendSystemMessage('✅ Summary complete. Continue your adventure!');
  isSummarizing = false;
}

// ── DOM helpers ──
function showTyping(show) {
  const el = document.getElementById('chatTyping');
  if (el) el.style.display = show ? 'flex' : 'none';
}

function scrollToBottom() {
  const feed = document.getElementById('chatMessages');
  if (feed) feed.scrollTop = feed.scrollHeight;
}

function nowTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function renderMarkdownLite(text) {
  // Minimal markdown: bold, italic, headers h4, code
  let result = text
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
    .replace(/`([^`]+)`/g, '<code style="background:#161310;padding:1px 5px;border-radius:3px;font-size:0.8em;color:#C8A96E;">$1</code>');

  // Convert [Roll ...] patterns into inline clickable buttons
  // Supports: [Roll 1d20+5], [Roll 2d6], [Roll 1d8+3-1]
  result = result.replace(
    /\[Roll\s+((\d*)d(\d+)((?:[+-]\d+)*))\]/gi,
    (match, formula) => {
      return `<button class="inline-roll-btn" data-roll="${escapeHtml(formula)}" onclick="handleInlineRoll(this)">🎲 ${escapeHtml(formula)}</button>`;
    }
  );
  
  // Convert level-up links: (levelup:open) to a review button
  result = result.replace(/\(levelup:open\)/gi, function() {
    return `<button class="btn-primary levelup-review-btn" onclick="openLevelUpModal()" style="font-size:0.75rem;padding:6px 16px;width:auto;margin:8px 0;">🌟 Review Level-Up Choices</button>`;
  });

  result = result.replace(/\n/g, '<br>');
  return result;
}

function appendDMMessage(text, isError = false) {
  const feed = document.getElementById('chatMessages');
  if (!feed) return;
  const row = document.createElement('div');
  row.className = 'msg-row dm-row';
  row.innerHTML = `
    <div class="msg-avatar dm-avatar">DM</div>
    <div class="msg-bubble-wrap">
      <span class="msg-sender">Dungeon Master</span>
      <div class="msg-bubble dm-bubble ${isError ? 'error-bubble' : ''}">${renderMarkdownLite(text)}</div>
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
        <span class="msg-time">${nowTime()}</span>
        <div class="msg-actions" style="display:flex;gap:4px;align-items:center;">
          <button class="msg-action-btn add-npc-btn" title="Add as NPC" onclick="openNPCFormFromMessage(this)">➕ NPC</button>
          <button class="msg-action-btn" onclick="copyMsgText(this)" title="Copy">
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><rect x="5" y="5" width="9" height="9" rx="1" stroke="currentColor" stroke-width="1.3"/><path d="M3 11H2a1 1 0 01-1-1V2a1 1 0 011-1h8a1 1 0 011 1v1" stroke="currentColor" stroke-width="1.3"/></svg>
            Copy
          </button>
        </div>
      </div>
    </div>`;
  feed.appendChild(row);
  scrollToBottom();
}

function openNPCFormFromMessage(btn) {
  const wrap = btn.closest('.msg-bubble-wrap');
  if (!wrap) return;
  const text = wrap.querySelector('.msg-bubble')?.innerText || '';
  // Try to extract an NPC name: look for bolded name, quoted name, or the first mentioned name
  let name = '', role = '', location = '', desc = '';
  const boldMatch = text.match(/\*\*([^*]+)\*\*/);
  if (boldMatch) name = boldMatch[1].trim();
  else {
    const quoteMatch = text.match(/"([^"]+)"/);
    if (quoteMatch) name = quoteMatch[1].trim();
    else name = text.split(/[.!?\n]/)[0].replace(/^[^a-zA-Z]*/, '').trim().split(' ').slice(0,3).join(' ');
  }
  // Fill the form with guessed data
  document.getElementById('npcFormName').value = name;
  document.getElementById('npcFormRole').value = role;
  document.getElementById('npcFormLocation').value = location;
  document.getElementById('npcFormDesc').value = desc;
  document.getElementById('npcFormRelationship').value = 'Neutral';
  document.getElementById('npcFormTitle').innerText = 'Add NPC from Message';
  editingNpcId = null;
  document.getElementById('npcFormModal').style.display = 'flex';
  setTimeout(() => document.getElementById('npcFormModal').classList.add('show'), 10);
}

/* ── XP System ── */
const xpTable = { 1:0, 2:300, 3:900, 4:2700, 5:6500, 6:14000, 7:23000, 8:34000, 9:48000, 10:64000, 11:85000, 12:100000, 13:120000, 14:140000, 15:165000, 16:195000, 17:225000, 18:265000, 19:305000, 20:355000 };

function getLevelFromXP(xp) {
  for (let lvl = 20; lvl >= 2; lvl--) {
    if (xp >= xpTable[lvl]) return lvl;
  }
  return 1;
}

function getXPToNextLevel(xp) {
  const currentLevel = getLevelFromXP(xp);
  if (currentLevel === 20) return 0;
  return xpTable[currentLevel + 1] - xp;
}

function updateXPDisplay() {
  if (!currentCharacter) return;
  const xp = currentCharacter.xp || 0;
  const curLvl = getLevelFromXP(xp);
  const toNext = curLvl >= 20 ? 0 : xpTable[curLvl + 1] - xp;
  const totalForCurrent = xpTable[curLvl];
  const totalForNext = xpTable[Math.min(curLvl + 1, 20)] || totalForCurrent + 1000;
  const progressPercent = Math.min(100, Math.max(0, ((xp - totalForCurrent) / (totalForNext - totalForCurrent)) * 100));
  const xpEl = document.getElementById('xpCurrent');
  const toNextEl = document.getElementById('xpToNext');
  const barEl = document.getElementById('xpProgressBar');
  if (xpEl) xpEl.innerText = xp;
  if (toNextEl) toNextEl.innerText = toNext === 0 ? 'MAX' : toNext;
  if (barEl) barEl.style.width = `${progressPercent}%`;
}

async function awardXP(amount, reason) {
  if (!currentCharacter) return;
  const oldLevel = currentCharacter.level || 1;
  const oldActualLevel = getLevelFromXP(currentCharacter.xp || 0);
  const newXP = (currentCharacter.xp || 0) + amount;
  const newLevel = getLevelFromXP(newXP);
  currentCharacter.xp = newXP;
  currentCharacter.level = newLevel;
  updateXPDisplay();
  localStorage.setItem('dnd_current_character', JSON.stringify(currentCharacter));
  // Add system message to chat
  appendSystemMessage(`🎉 You gained ${amount} XP! (${reason})`);
  if (newLevel > oldActualLevel) {
    // Build level-up proposal
    const proposal = recalculateStatsOnLevelUp(newLevel, oldActualLevel);
    if (proposal) {
      pendingLevelUpProposal = proposal;
      // Inject proposal tag into chat history
      const proposalTag = '<!-- level_up_proposal data=\'' + JSON.stringify(proposal) + '\' -->';
      chatHistory.push({ role: 'assistant', content: proposalTag });
      saveChatHistory();
      appendSystemMessage(`🌟 **LEVEL UP!** You are now level ${newLevel}! Click the "Review Choices" button below to advance.`);
      // Add a clickable review button system message
      const feed = document.getElementById('chatMessages');
      if (feed) {
        const row = document.createElement('div');
        row.className = 'msg-row system-row';
        row.innerHTML = '<button class="btn-primary" style="font-size:0.75rem;padding:8px 16px;width:auto;" onclick="openLevelUpModal()">🌟 Review Level-Up Choices</button>';
        feed.appendChild(row);
      }
    }
  }
}

function openManualXpDialog() {
  if (!currentCharacter) { alert('Create a character first.'); return; }
  const amount = prompt('Enter XP amount to award:');
  if (amount && !isNaN(parseInt(amount))) {
    const reason = prompt('Reason (optional):') || 'Manual award';
    awardXP(parseInt(amount), reason);
  }
}

function parseXPAwardFromMessage(content) {
  const regex = /<!--\s*xp_award\s+amount="(\d+)"\s+reason="([^"]*)"\s*-->/;
  const match = content.match(regex);
  if (match) {
    const amount = parseInt(match[1]);
    const reason = match[2];
    awardXP(amount, reason);
    return content.replace(regex, '').trim();
  }
  return content;
}

/**
 * Parse and apply character-related AI tags in the given content string.
 * Handles hp_change, currency, add/remove item, set armor/shield, add/remove weapon,
 * ability score changes, and XP awards. All tags are hidden from the player's view.
 * @param {string} content - The AI response text
 * @returns {string} - Content with all tags stripped
 */
function parseCharacterTags(content) {
  if (!content || !currentCharacter) return content;
  let result = content;
  const char = currentCharacter;

  // ── HP change: <!-- char_hp_change amount="-5" --> ──
  const hpChangeRegex = /<!--\s*char_hp_change\s+amount="([+-]?\d+)"\s*-->/g;
  result = result.replace(hpChangeRegex, (match, amountStr) => {
    const amount = parseInt(amountStr);
    if (!isNaN(amount)) {
      const oldHp = char.hp || char.maxHp || 0;
      let newHp = oldHp + amount;
      newHp = Math.max(0, Math.min(char.maxHp || newHp, newHp));
      char.hp = newHp;
      if (char.hp === 0 && oldHp > 0) {
        appendSystemMessage(`⚠️ ${char.name} is at 0 HP and is unconscious!`);
        showDeathSaveModal();
      }
      localStorage.setItem('dnd_current_character', JSON.stringify(char));
      updateHPDisplay();
    }
    return '';
  });

  // ── Currency change: <!-- char_currency cp="10" sp="0" ... --> ──
  const currencyRegex = /<!--\s*char_currency\s+cp="([+-]?\d+)"\s+sp="([+-]?\d+)"\s+ep="([+-]?\d+)"\s+gp="([+-]?\d+)"\s+pp="([+-]?\d+)"\s*-->/g;
  result = result.replace(currencyRegex, (match, cp, sp, ep, gp, pp) => {
    if (!char.currency) char.currency = { cp: 0, sp: 0, ep: 0, gp: 0, pp: 0 };
    char.currency.cp = Math.max(0, (char.currency.cp || 0) + parseInt(cp));
    char.currency.sp = Math.max(0, (char.currency.sp || 0) + parseInt(sp));
    char.currency.ep = Math.max(0, (char.currency.ep || 0) + parseInt(ep));
    char.currency.gp = Math.max(0, (char.currency.gp || 0) + parseInt(gp));
    char.currency.pp = Math.max(0, (char.currency.pp || 0) + parseInt(pp));
    localStorage.setItem('dnd_current_character', JSON.stringify(char));
    if (document.getElementById('characterSheetModal').style.display === 'flex') {
      populateInventoryTab();
    }
    return '';
  });

  // ── Add item: <!-- char_add_item name="Potion" quantity="1" weight="0.5" notes="Heals 2d4+2" --> ──
  const addItemRegex = /<!--\s*char_add_item\s+name="([^"]*)"\s+quantity="(\d+)"\s+weight="([^"]*)"\s+notes="([^"]*)"\s*-->/g;
  result = result.replace(addItemRegex, (match, name, qty, weight, notes) => {
    if (name) {
      if (!char.inventory) char.inventory = [];
      const existing = char.inventory.find(i => i.name.toLowerCase() === name.toLowerCase());
      if (existing) {
        existing.quantity = (existing.quantity || 1) + (parseInt(qty) || 1);
      } else {
        char.inventory.push({ name: name, quantity: parseInt(qty) || 1, weight: weight || '', notes: notes || '' });
      }
      localStorage.setItem('dnd_current_character', JSON.stringify(char));
      if (document.getElementById('characterSheetModal').style.display === 'flex') {
        populateInventoryTab();
      }
    }
    return '';
  });

  // ── Remove item: <!-- char_remove_item name="Potion" quantity="1" --> ──
  const removeItemRegex = /<!--\s*char_remove_item\s+name="([^"]*)"\s+quantity="(\d+)"\s*-->/g;
  result = result.replace(removeItemRegex, (match, name, qty) => {
    if (name && char.inventory) {
      const removeQty = parseInt(qty) || 1;
      const idx = char.inventory.findIndex(i => i.name.toLowerCase() === name.toLowerCase());
      if (idx >= 0) {
        char.inventory[idx].quantity = (char.inventory[idx].quantity || 1) - removeQty;
        if (char.inventory[idx].quantity <= 0) {
          char.inventory.splice(idx, 1);
        }
        localStorage.setItem('dnd_current_character', JSON.stringify(char));
        if (document.getElementById('characterSheetModal').style.display === 'flex') {
          populateInventoryTab();
        }
      }
    }
    return '';
  });

  // ── Set armor: <!-- char_set_armor name="Leather Armor" --> ──
  const setArmorRegex = /<!--\s*char_set_armor\s+name="([^"]*)"\s*-->/g;
  result = result.replace(setArmorRegex, (match, name) => {
    if (!char.equipment) char.equipment = {};
    char.equipment.armor = name || '';
    localStorage.setItem('dnd_current_character', JSON.stringify(char));
    if (document.getElementById('characterSheetModal').style.display === 'flex') {
      populateEquipmentTab();
    }
    return '';
  });

  // ── Set shield: <!-- char_set_shield equipped="true" --> ──
  const setShieldRegex = /<!--\s*char_set_shield\s+equipped="(true|false)"\s*-->/g;
  result = result.replace(setShieldRegex, (match, equipped) => {
    if (!char.equipment) char.equipment = {};
    char.equipment.shield = equipped === 'true';
    localStorage.setItem('dnd_current_character', JSON.stringify(char));
    if (document.getElementById('characterSheetModal').style.display === 'flex') {
      populateEquipmentTab();
    }
    return '';
  });

  // ── Add weapon: <!-- char_add_weapon name="Longsword" quantity="1" --> ──
  const addWeaponRegex = /<!--\s*char_add_weapon\s+name="([^"]*)"\s+quantity="(\d+)"\s*-->/g;
  result = result.replace(addWeaponRegex, (match, name, qty) => {
    if (name) {
      if (!char.equipment) char.equipment = {};
      if (!char.equipment.weapons) char.equipment.weapons = [];
      const existing = char.equipment.weapons.find(w => w.name.toLowerCase() === name.toLowerCase());
      if (existing) {
        existing.quantity = (existing.quantity || 1) + (parseInt(qty) || 1);
      } else {
        char.equipment.weapons.push({ name: name, quantity: parseInt(qty) || 1 });
      }
      localStorage.setItem('dnd_current_character', JSON.stringify(char));
      if (document.getElementById('characterSheetModal').style.display === 'flex') {
        populateEquipmentTab();
      }
    }
    return '';
  });

  // ── Remove weapon: <!-- char_remove_weapon name="Longsword" quantity="1" --> ──
  const removeWeaponRegex = /<!--\s*char_remove_weapon\s+name="([^"]*)"\s+quantity="(\d+)"\s*-->/g;
  result = result.replace(removeWeaponRegex, (match, name, qty) => {
    if (name && char.equipment && char.equipment.weapons) {
      const removeQty = parseInt(qty) || 1;
      const idx = char.equipment.weapons.findIndex(w => w.name.toLowerCase() === name.toLowerCase());
      if (idx >= 0) {
        char.equipment.weapons[idx].quantity = (char.equipment.weapons[idx].quantity || 1) - removeQty;
        if (char.equipment.weapons[idx].quantity <= 0) {
          char.equipment.weapons.splice(idx, 1);
        }
        localStorage.setItem('dnd_current_character', JSON.stringify(char));
        if (document.getElementById('characterSheetModal').style.display === 'flex') {
          populateEquipmentTab();
        }
      }
    }
    return '';
  });

  // ── Ability score change: <!-- char_ability strength="+2" dexterity="0" constitution="0" intelligence="0" wisdom="0" charisma="0" --> ──
  // Matches any subset of abilities, regardless of order
  const abilityRegex = /<!--\s*char_ability\s+((?:strength|dexterity|constitution|intelligence|wisdom|charisma)="[+-]?\d+"(?:\s+|))*-->/gi;
  result = result.replace(abilityRegex, (match) => {
    // Extract all ability=value pairs from the match
    const pairRegex = /(strength|dexterity|constitution|intelligence|wisdom|charisma)="([+-]?\d+)"/gi;
    let pairMatch;
    while ((pairMatch = pairRegex.exec(match)) !== null) {
      const ab = pairMatch[1].charAt(0).toUpperCase() + pairMatch[1].slice(1);
      const delta = parseInt(pairMatch[2]);
      if (abilities.includes(ab) && !isNaN(delta) && delta !== 0) {
        char.abilityScores[ab] = (char.abilityScores[ab] || 10) + delta;
        char.abilityScores[ab] = Math.max(1, Math.min(30, char.abilityScores[ab]));
      }
    }
    // Recompute max HP since Con may have changed
    const cls = classes[char.class];
    if (cls) {
      const hitDieVal = cls.hitDie === "d12" ? 12 : cls.hitDie === "d10" ? 10 : cls.hitDie === "d8" ? 8 : cls.hitDie === "d6" ? 6 : 8;
      const conMod = calculateModifier(char.abilityScores.Constitution);
      char.maxHp = hitDieVal + conMod;
      char.hp = Math.min(char.hp || char.maxHp, char.maxHp);
    }
    localStorage.setItem('dnd_current_character', JSON.stringify(char));
    if (document.getElementById('characterSheetModal').style.display === 'flex') {
      populateCharacterSheet();
    } else {
      recalcDerivedStats();
      updateHPDisplay();
    }
    return '';
  });

  // ── Level: <!-- char_level value="5" --> ──
  const levelRegex = /<!--\s*char_level\s+value="(\d+)"\s*-->/g;
  result = result.replace(levelRegex, (match, level) => {
    if (char) {
      char.level = parseInt(level);
      const cls = classes[char.class];
      if (cls) {
        const hitDieVal = cls.hitDie === "d12" ? 12 : cls.hitDie === "d10" ? 10 : cls.hitDie === "d8" ? 8 : cls.hitDie === "d6" ? 6 : 8;
        const conMod = calculateModifier(char.abilityScores.Constitution);
        char.maxHp = hitDieVal + conMod;
        char.hitDiceTotal = char.level;
        char.hitDiceRemaining = char.hitDiceTotal;
        const slots = getSpellSlotsForClass(char.class, char.level);
        if (!char.spellSlots) char.spellSlots = {};
        for (let k in slots) {
          if (!char.spellSlots[k]) char.spellSlots[k] = { used: 0, max: slots[k] };
          else char.spellSlots[k].max = slots[k];
        }
        saveCharacter();
        updateHPDisplay();
        updateSpellSlotsUI();
        updateHitDiceUI();
        updateSavesAndSkills();
      }
    }
    return '';
  });

  // ── Max HP: <!-- char_max_hp value="25" --> ──
  const maxHpRegex = /<!--\s*char_max_hp\s+value="(\d+)"\s*-->/g;
  result = result.replace(maxHpRegex, (match, value) => {
    if (char) {
      char.maxHp = parseInt(value);
      if (char.hp > char.maxHp) char.hp = char.maxHp;
      saveCharacter();
      updateHPDisplay();
    }
    return '';
  });

  // ── Hit Dice: <!-- char_hit_dice total="5" type="d10" --> ──
  const hitDiceRegex = /<!--\s*char_hit_dice\s+total="(\d+)"\s+type="([^"]+)"\s*-->/g;
  result = result.replace(hitDiceRegex, (match, total, type) => {
    if (char) {
      char.hitDiceTotal = parseInt(total);
      char.hitDiceRemaining = parseInt(total);
      char.hitDiceType = type;
      saveCharacter();
      updateHitDiceUI();
    }
    return '';
  });

  // ── Spell Slots: <!-- char_spell_slots level="1" count="4" --> ──
  const spellSlotsRegex = /<!--\s*char_spell_slots\s+level="(\d+)"\s+count="(\d+)"\s*-->/g;
  result = result.replace(spellSlotsRegex, (match, level, count) => {
    if (char && char.spellSlots) {
      if (!char.spellSlots[level]) char.spellSlots[level] = { used: 0, max: 0 };
      char.spellSlots[level].max = parseInt(count);
      saveCharacter();
      updateSpellSlotsUI();
    }
    return '';
  });

  // ── Add Feature: <!-- char_add_feature name="Action Surge" description="..." level="2" --> ──
  const addFeatureRegex = /<!--\s*char_add_feature\s+name="([^"]+)"\s+description="([^"]*)"(?:\s+level="(\d+)")?\s*-->/g;
  result = result.replace(addFeatureRegex, (match, name, description, level) => {
    if (char) {
      if (!char.classFeatures) char.classFeatures = [];
      char.classFeatures.push({ name, description, level: level ? parseInt(level) : null });
      saveCharacter();
      if (document.getElementById('characterSheetModal').style.display === 'flex') populateFeatsTab();
    }
    return '';
  });

  // ── Add Maneuver: <!-- char_add_maneuver name="Trip Attack" --> ──
  const addManeuverRegex = /<!--\s*char_add_maneuver\s+name="([^"]+)"\s*-->/g;
  result = result.replace(addManeuverRegex, (match, name) => {
    if (char) {
      if (!char.maneuvers) char.maneuvers = [];
      if (!char.maneuvers.includes(name)) char.maneuvers.push(name);
      saveCharacter();
    }
    return '';
  });

  // ── Add Metamagic: <!-- char_add_metamagic name="Quickened Spell" --> ──
  const addMetamagicRegex = /<!--\s*char_add_metamagic\s+name="([^"]+)"\s*-->/g;
  result = result.replace(addMetamagicRegex, (match, name) => {
    if (char) {
      if (!char.metamagic) char.metamagic = [];
      if (!char.metamagic.includes(name)) char.metamagic.push(name);
      saveCharacter();
    }
    return '';
  });

  // ── Add Arcane Shot: <!-- char_add_arcane_shot name="Banishing Arrow" --> ──
  const addArcaneShotRegex = /<!--\s*char_add_arcane_shot\s+name="([^"]+)"\s*-->/g;
  result = result.replace(addArcaneShotRegex, (match, name) => {
    if (char) {
      if (!char.arcaneShots) char.arcaneShots = [];
      if (!char.arcaneShots.includes(name)) char.arcaneShots.push(name);
      saveCharacter();
    }
    return '';
  });

  // ── Set Pact Boon: <!-- char_set_pact_boon name="Pact of the Blade" --> ──
  const setPactBoonRegex = /<!--\s*char_set_pact_boon\s+name="([^"]+)"\s*-->/g;
  result = result.replace(setPactBoonRegex, (match, name) => {
    if (char) {
      char.pactBoon = name;
      saveCharacter();
    }
    return '';
  });

  // ── Set Draconic Ancestry: <!-- char_set_draconic_ancestry name="Gold" --> ──
  const setDraconicRegex = /<!--\s*char_set_draconic_ancestry\s+name="([^"]+)"\s*-->/g;
  result = result.replace(setDraconicRegex, (match, name) => {
    if (char) {
      char.sorcererDragonAncestry = name;
      saveCharacter();
    }
    return '';
  });

  // ── Resource set/spend: <!-- resource set type="LayOnHands" amount="25" --> or resource spend
  const resourceSetSpendRegex = /<!--\s*resource\s+(set|spend)\s+type="([^"]+)"\s+amount="(\d+)"\s*-->/g;
  result = result.replace(resourceSetSpendRegex, (match, action, type, amount) => {
    if (char && char.classResources && char.classResources[type]) {
      const res = char.classResources[type];
      if (action === 'set') res.current = parseInt(amount);
      else if (action === 'spend') res.current = Math.max(0, res.current - parseInt(amount));
      saveCharacter();
      updateClassResourcesUI();
    }
    return '';
  });

  // ── Accept level= as alias for value= in char_level ──
  result = result.replace(/<!--\s*char_level\s+level="(\d+)"\s*-->/g, (match, level) => {
    return `<!-- char_level value="${level}" -->`;
  });

  // ── Generic property storage: key="value" ──
  result = result.replace(/<!--\s*char_set_property\s+key="([^"]+)"\s+value="([^"]*)"\s*-->/g, (match, key, value) => {
    if (char) {
      if (!char.customProperties) char.customProperties = {};
      char.customProperties[key] = value;
      saveCharacter();
      if (document.getElementById('characterSheetModal').style.display === 'flex') {
        populateDetailsTab();
      }
    }
    return '';
  });

  // ── Append a free‑text note ──
  result = result.replace(/<!--\s*char_add_note\s+text="([^"]*)"\s*-->/g, (match, text) => {
    if (char) {
      if (!char.notes) char.notes = [];
      char.notes.push(text);
      saveCharacter();
      if (document.getElementById('characterSheetModal').style.display === 'flex') {
        populateDetailsTab();
      }
    }
    return '';
  });

  // ── Add invocation (Eldritch Invocation) with optional description ──
  result = result.replace(/<!--\s*char_add_invocation\s+name="([^"]+)"(?:\s+description="([^"]*)")?\s*-->/g, (match, name, description) => {
    if (char) {
      if (!char.invocations) char.invocations = [];
      if (!char.invocations.includes(name)) char.invocations.push(name);
      if (description && char.classFeatures) char.classFeatures.push({ name, description, level: null });
      saveCharacter();
    }
    return '';
  });

  // ── Add spell (known) ──
  result = result.replace(/<!--\s*char_add_spell\s+name="([^"]+)"(?:\s+level="(\d+)")?\s*-->/g, (match, name, level) => {
    if (char) {
      if (!char.spells) char.spells = [];
      if (!char.spells.includes(name)) char.spells.push(name);
      saveCharacter();
    }
    return '';
  });

  // ── Add feat ──
  result = result.replace(/<!--\s*char_feat\s+name="([^"]+)"(?:\s+description="([^"]*)")?\s*-->/g, (match, name, description) => {
    if (char) {
      if (!char.feats) char.feats = "";
      const featLine = description ? `${name}: ${description}` : name;
      if (char.feats) char.feats += "\n" + featLine;
      else char.feats = featLine;
      saveCharacter();
    }
    return '';
  });

  // ── Add racial trait ──
  result = result.replace(/<!--\s*char_race_trait\s+name="([^"]+)"(?:\s+description="([^"]*)")?\s*-->/g, (match, name, description) => {
    if (char) {
      if (!char.racialTraits) char.racialTraits = [];
      char.racialTraits.push({ name, description });
      saveCharacter();
    }
    return '';
  });

  // ── Alternative pact boon tag (char_pact_boon) ──
  result = result.replace(/<!--\s*char_pact_boon\s+name="([^"]+)"\s*-->/g, (match, name) => {
    if (char) {
      char.pactBoon = name;
      saveCharacter();
    }
    return '';
  });

  // ── Choice required: <!-- char_choice_required type="invocations" count="2" class="Warlock" subclass="The Fiend" --> ──
  const choiceRegex = /<!--\s*char_choice_required\s+type="([^"]+)"\s+count="(\d+)"(?:\s+class="([^"]*)")?(?:\s+subclass="([^"]*)")?\s*-->/g;
  result = result.replace(choiceRegex, (match, type, count, className, subclass) => {
    showFeatureChoiceModal(type, parseInt(count), className, subclass);
    return '';
  });

  return result;
}

/* ── DM Guide ── */
function loadDMGuide(campaignId) {
  return localStorage.getItem(`dnd_dm_guide_${campaignId}`) || '';
}
function saveDMGuideToStorage(campaignId, content) {
  localStorage.setItem(`dnd_dm_guide_${campaignId}`, content);
}

/**
 * Load the Al'mundi worldbuilding reference from localStorage.
 * Returns the full worldbuilding text or empty string if not set.
 */
function loadWorldbuilding() {
  return localStorage.getItem('dnd_worldbuilding') || '';
}

/**
 * Store the Al'mundi worldbuilding reference into localStorage.
 * Called once during initialization.
 */
function saveWorldbuilding(text) {
  localStorage.setItem('dnd_worldbuilding', text || '');
}

let currentDMGuideContent = '';

function openDMGuideModal() {
  if (!selectedCampaignId) { alert('No active campaign. Start a campaign first.'); return; }
  currentDMGuideContent = loadDMGuide(selectedCampaignId);
  document.getElementById('dmGuideText').value = currentDMGuideContent;
  updateDMGuideCounter();
  const modal = document.getElementById('dmGuideModal');
  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('show'), 10);
}

function closeDMGuideModal() {
  const modal = document.getElementById('dmGuideModal');
  modal.classList.remove('show');
  setTimeout(() => { modal.style.display = 'none'; }, 200);
}

function updateDMGuideCounter() {
  const text = document.getElementById('dmGuideText').value;
  const len = text.length;
  const max = 2000;
  const el = document.getElementById('dmGuideCounter');
  el.innerText = `${len} / ${max} characters`;
  el.style.color = len > max ? '#C85A3A' : '#7A6E62';
}

function saveDMGuide() {
  if (!selectedCampaignId) return;
  const text = document.getElementById('dmGuideText').value;
  if (text.length > 2000) { alert('DM Guide cannot exceed 2000 characters.'); return; }
  saveDMGuideToStorage(selectedCampaignId, text);
  closeDMGuideModal();
}

/* ── Campaign Summary ── */
function openCampaignSummaryModal() {
  const modal = document.getElementById('campaignSummaryModal');
  if (!modal) return;
  if (!selectedCampaignId) { alert('Please select a campaign first.'); return; }
  // Load stored summary
  const key = `dnd_campaign_summary_${selectedCampaignId}`;
  const stored = localStorage.getItem(key);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      document.getElementById('summaryContent').innerText = parsed.text || 'No summary yet.';
      document.getElementById('summaryTimestamp').innerText = parsed.timestamp ? `Last updated: ${parsed.timestamp}` : '';
    } catch (e) {
      document.getElementById('summaryContent').innerText = stored;
    }
  } else {
    document.getElementById('summaryContent').innerText = 'No summary yet. Click "Refresh Summary" to generate one.';
    document.getElementById('summaryTimestamp').innerText = '';
  }
  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('show'), 10);
}

function closeCampaignSummaryModal() {
  const modal = document.getElementById('campaignSummaryModal');
  if (!modal) return;
  modal.classList.remove('show');
  setTimeout(() => { modal.style.display = 'none'; }, 200);
}

async function refreshCampaignSummary() {
  const saved = localStorage.getItem('dnd_ai_settings');
  let apiKey = '', model = '';
  if (saved) {
    try { const s = JSON.parse(saved); apiKey = s.apiKey || ''; model = s.model || ''; } catch(e) {}
  }
  if (!apiKey || !model) {
    alert('Please configure your API key and model in Settings first.');
    return;
  }

  const loadingEl = document.getElementById('summaryLoading');
  const contentEl = document.getElementById('summaryContent');
  loadingEl.style.display = 'block';
  contentEl.innerText = '';

  // Collect data
  const recentMessages = chatHistory.filter(m => m.role !== 'system').slice(-80);
  const activeQuests = quests.filter(q => q.status === 'active');
  const npcsList = npcs.filter(n => n.relationship !== 'Unknown').slice(0, 10);

  const userPrompt = `Chat History:\n${JSON.stringify(recentMessages.map(m => ({role: m.role, content: m.content.slice(0,500)})))}\n\nActive Quests:\n${JSON.stringify(activeQuests)}\n\nNotable NPCs:\n${JSON.stringify(npcsList)}`;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': window.location.origin,
        'X-Title': 'DnD DM'
      },
      body: JSON.stringify({
        model: model,
        messages: [
          { role: 'system', content: 'You are a scribe summarizing a D&D campaign. Based on the following chat history, active quests, and NPCs, write a concise, narrative summary (150-300 words) of the story so far. Include key events, current location/goal, important NPCs, and active quests. Write in past tense, third person. Use only natural language — no JSON, no markup.' },
          { role: 'user', content: userPrompt }
        ],
        max_tokens: 600,
        temperature: 0.7
      })
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    const summary = data.choices?.[0]?.message?.content || 'Failed to generate summary.';
    contentEl.innerText = summary;
    // Store
    const now = new Date().toLocaleString();
    const key = `dnd_campaign_summary_${selectedCampaignId}`;
    localStorage.setItem(key, JSON.stringify({ text: summary, timestamp: now }));
    document.getElementById('summaryTimestamp').innerText = `Last updated: ${now}`;
  } catch (err) {
    contentEl.innerText = `❌ Failed to generate summary: ${err.message}`;
  } finally {
    loadingEl.style.display = 'none';
  }
}

function copyCampaignSummary() {
  const text = document.getElementById('summaryContent').innerText;
  if (!text || text === 'No summary yet. Click "Refresh Summary" to generate one.') return;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copySummaryBtn');
    btn.textContent = 'Copied!';
    setTimeout(() => { btn.textContent = 'Copy to Clipboard'; }, 2000);
  }).catch(() => {});
}

function appendDMMessageStreaming(id) {
  const feed = document.getElementById('chatMessages');
  if (!feed) return;
  const row = document.createElement('div');
  row.className = 'msg-row dm-row';
  row.innerHTML = `
    <div class="msg-avatar dm-avatar">DM</div>
    <div class="msg-bubble-wrap">
      <span class="msg-sender">Dungeon Master</span>
      <div class="msg-bubble dm-bubble" id="${id}"><span class="streaming-cursor"></span></div>
      <span class="msg-time" id="${id}-time">${nowTime()}</span>
    </div>`;
  feed.appendChild(row);
  scrollToBottom();
}

function updateStreamingBubble(id, text) {
  const el = document.getElementById(id);
  if (el) {
    el.innerHTML = renderMarkdownLite(text) + '<span class="streaming-cursor"></span>';
    scrollToBottom();
  }
}

function finalizeStreamingBubble(id, text) {
  const el = document.getElementById(id);
  if (el) {
    // Parse AI tags (quests, NPCs, XP)
    text = parseAITags(text);
    el.innerHTML = renderMarkdownLite(text);
    // Add actions row
    const wrap = el.parentElement;
    const actionsRow = document.createElement('div');
    actionsRow.style.cssText = 'display:flex;align-items:center;gap:8px;';
    actionsRow.innerHTML = `
      <span class="msg-time">${nowTime()}</span>
      <div class="msg-actions">
        <button class="msg-action-btn" onclick="copyMsgText(this)" title="Copy">
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><rect x="5" y="5" width="9" height="9" rx="1" stroke="currentColor" stroke-width="1.3"/><path d="M3 11H2a1 1 0 01-1-1V2a1 1 0 011-1h8a1 1 0 011 1v1" stroke="currentColor" stroke-width="1.3"/></svg>
          Copy
        </button>
      </div>`;
    wrap.appendChild(actionsRow);
    // Remove old time span if present
    const oldTime = document.getElementById(id + '-time');
    if (oldTime) oldTime.remove();
    scrollToBottom();
  }
}

// ── Parse AI tags for automatic updates ──
function parseAITags(content) {
  if (!content) return content;
  let result = content;

  // ── Pre-processing: recover malformed tag closings ──
  // Fix: replace arrow/Unicode symbol closings (→, ➔, ➤, etc.) with -->
  // Only fix inside HTML comment patterns to avoid touching narrative text
  result = result.replace(/<!--[^>]*?[\u2192\u2794\u27A4]\s*/g, function(match) {
    console.warn("Repaired malformed tag closing: " + match);
    return match.replace(/[\u2192\u2794\u27A4]\s*$/, '--> ');
  });
  // Fix: tags that are missing closing --> entirely (tag ends at end of line)
  result = result.replace(/<!--\s*char_hp_change\s+amount="[^"]+"\s*$/gm, function(match) {
    console.warn("Repaired missing tag close: " + match);
    return match + ' -->';
  });
  // Fix: any HTML comment opened with <!-- but missing --> before end of line
  // that looks like a known tag pattern
  result = result.replace(/<!--\s*(char_\w+|xp_award|combat|spell_consume|short_rest|long_rest|stabilize|resource|level_up)[^>]*?\s*$/gm, function(match) {
    console.warn("Repaired missing tag close for known tag: " + match);
    return match + ' -->';
  });

  // Parse inline quest commands [QUEST CREATE: "..."|"..."] etc.
  result = parseQuestCommands(result);

  // Parse quest_create tags
  const questCreateRegex = /<!--\s*quest_create\s+name="([^"]*)"\s+description="([^"]*)"\s+milestones="([^"]*)"\s*-->/g;
  result = result.replace(questCreateRegex, (match, name, description, milestones) => {
    if (name) {
      const milestoneList = milestones ? milestones.split(',').map(m => m.trim()).filter(Boolean) : [];
      const quest = createQuest(name, description, 'ai');
      for (const ms of milestoneList) {
        addMilestone(quest.id, ms);
      }
      addQuestLog(`🤖 AI created quest "${name}" with ${milestoneList.length} milestones`);
    }
    return '';
  });

  // Parse quest_update tags
  const questUpdateRegex = /<!--\s*quest_update\s+id="([^"]*)"\s+milestone_index="(\d+)"\s+completed="(true|false)"\s*-->/g;
  result = result.replace(questUpdateRegex, (match, id, idxStr, completed) => {
    const idx = parseInt(idxStr);
    if (id && !isNaN(idx)) {
      if (completed === 'true') {
        const q = quests.find(x => x.id === id);
        if (q && q.milestones[idx]) {
          q.milestones[idx].completed = true;
          q.updatedAt = new Date().toISOString();
          saveQuests();
          addQuestLog(`🤖 AI updated milestone "${q.milestones[idx].text}" for quest "${q.name}"`);
          renderQuests();
        }
      }
    }
    return '';
  });

  // Parse quest_complete tags
  const questCompleteRegex = /<!--\s*quest_complete\s+id="([^"]*)"\s*-->/g;
  result = result.replace(questCompleteRegex, (match, id) => {
    if (id) {
      completeQuest(id);
      renderQuests();
    }
    return '';
  });

  // Parse quest_fail tags
  const questFailRegex = /<!--\s*quest_fail\s+id="([^"]*)"\s*-->/g;
  result = result.replace(questFailRegex, (match, id) => {
    if (id) {
      failQuest(id);
      renderQuests();
    }
    return '';
  });

  // Parse npc_add tags
  const npcAddRegex = /<!--\s*npc_add\s+name="([^"]*)"\s+role="([^"]*)"\s+location="([^"]*)"\s+description="([^"]*)"\s+relationship="([^"]*)"\s*-->/g;
  result = result.replace(npcAddRegex, (match, name, role, location, description, relationship) => {
    if (name) {
      // Check if NPC with same name exists
      const existing = npcs.find(n => n.name.toLowerCase() === name.trim().toLowerCase());
      if (existing) {
        updateNPC(existing.id, { name: name.trim(), role, location, description, relationship });
        addQuestLog(`🤖 AI updated NPC "${name}"`);
      } else {
        addNPC({ name: name.trim(), role, location, description, relationship });
        addQuestLog(`🤖 AI added NPC "${name}"`);
      }
      renderNPCList();
    }
    return '';
  });

  // Parse xp_award tags
  result = parseXPAwardFromMessage(result);

  // ---- NEW FEATURE TAGS ----
  
  // Combat start: <!-- combat start initiative="Thalion:17, Goblin:14" enemies='[{"name":"Goblin","hp":7,"ac":15}]' -->
  const combatStartRegex = /<!--\s*combat start\s+initiative="([^"]+)"\s+enemies=(['"])(.+?)\2\s*-->/;
  const combatStartMatch = result.match(combatStartRegex);
  if (combatStartMatch) {
    try {
      const initiativeStr = combatStartMatch[1];
      const enemies = JSON.parse(combatStartMatch[3]);
      // Look up missing stats from monster database
      if (window.monsterStats) {
        for (var ei = 0; ei < enemies.length; ei++) {
          var enemy = enemies[ei];
          var norm = normalizeMonsterName(enemy.name);
          var dbEntry = window.monsterStats[norm];
          if (dbEntry) {
            if (enemy.hp === undefined) enemy.hp = dbEntry.hp;
            if (enemy.ac === undefined) enemy.ac = dbEntry.ac;
          } else {
            // Monster not in DB, use defaults if missing
            if (enemy.hp === undefined) { enemy.hp = 10; console.warn('Monster "' + enemy.name + '" not found in DB, using default HP 10'); }
            if (enemy.ac === undefined) { enemy.ac = 12; console.warn('Monster "' + enemy.name + '" not found in DB, using default AC 12'); }
          }
        }
      } else {
        // DB not loaded, ensure defaults for missing stats
        for (var ei2 = 0; ei2 < enemies.length; ei2++) {
          var enemy2 = enemies[ei2];
          if (enemy2.hp === undefined) enemy2.hp = 10;
          if (enemy2.ac === undefined) enemy2.ac = 12;
        }
      }
      startCombat(initiativeStr, enemies);
    } catch(e) { console.warn("Failed to parse combat start tag:", e); }
    result = result.replace(combatStartMatch[0], '');
  }
  
  // Combat damage: <!-- combat damage id="goblin1" amount="5" -->
  const combatDmgRegex = /<!--\s*combat damage\s+id="([^"]+)"\s+amount="([^"]+)"\s*-->/g;
  result = result.replace(combatDmgRegex, function(match, id, amount) {
    updateCombat({ id: id, damage: amount });
    return '';
  });
  
  // Combat next_turn: <!-- combat next_turn -->
  result = result.replace(/<!--\s*combat next_turn\s*-->/g, function() {
    updateCombat({ action: 'next_turn' });
    return '';
  });
  
  // Combat end: <!-- combat end -->
  result = result.replace(/<!--\s*combat end\s*-->/g, function() {
    updateCombat({ action: 'end' });
    return '';
  });
  
  // Spell consume: <!-- spell_consume level="1" -->
  const spellConsumeRegex = /<!--\s*spell_consume\s+level="(\d+)"\s*-->/g;
  result = result.replace(spellConsumeRegex, function(match, level) {
    if (currentCharacter && currentCharacter.spellSlots && currentCharacter.spellSlots[level]) {
      if (currentCharacter.spellSlots[level].used < currentCharacter.spellSlots[level].max) {
        currentCharacter.spellSlots[level].used++;
        saveCharacter();
        updateSpellSlotsUI();
      }
    }
    return '';
  });
  
  // Short rest: <!-- short_rest -->
  result = result.replace(/<!--\s*short_rest\s*-->/g, function() {
    applyShortRest();
    return '';
  });
  
  // Long rest: <!-- long_rest -->
  result = result.replace(/<!--\s*long_rest\s*-->/g, function() {
    applyLongRest();
    return '';
  });
  
  // Stabilize: <!-- stabilize -->
  result = result.replace(/<!--\s*stabilize\s*-->/g, function() {
    if (currentCharacter) {
      currentCharacter.isUnconscious = false;
      currentCharacter.deathSaveSuccesses = 0;
      currentCharacter.deathSaveFailures = 0;
      if (currentCharacter.hp === 0) currentCharacter.hp = 1;
      saveCharacter();
      updateHPDisplay();
      appendSystemMessage("\u2705 " + currentCharacter.name + " has been stabilized.");
    }
    return '';
  });
  
  // Add condition: <!-- char_add_condition name="Poisoned" duration="1 minute" -->
  const addCondRegex = /<!--\s*char_add_condition\s+name="([^"]*)"\s+duration="([^"]*)"\s*-->/g;
  result = result.replace(addCondRegex, function(match, name, duration) {
    addCondition(name, 'ai', duration);
    return '';
  });
  
  // Remove condition: <!-- char_remove_condition name="Poisoned" -->
  const removeCondRegex = /<!--\s*char_remove_condition\s+name="([^"]*)"\s*-->/g;
  result = result.replace(removeCondRegex, function(match, name) {
    removeCondition(name);
    return '';
  });
  
  // Resource spend: <!-- resource spend type="Rage" amount="1" -->
  const resourceSpendRegex = /<!--\s*resource spend\s+type="([^"]*)"\s+amount="(\d+)"\s*-->/g;
  result = result.replace(resourceSpendRegex, function(match, type, amount) {
    if (currentCharacter && currentCharacter.classResources && currentCharacter.classResources[type]) {
      currentCharacter.classResources[type].current = Math.max(0, (currentCharacter.classResources[type].current || 0) - parseInt(amount));
      saveCharacter();
      updateClassResourcesUI();
    }
    return '';
  });
  
  // Level up proposal: {{ level_up_proposal data='...' }} - this is injected by awardXP
  
  // Level up confirm: <!-- level_up_confirm -->
  result = result.replace(/<!--\s*level_up_confirm\s*-->/g, function() {
    processLevelUp();
    return '';
  });

  // Parse character tags (hp, currency, items, equipment, abilities)
  result = parseCharacterTags(result);

  return result.trim();
}

function appendUserMessage(text) {
  const feed = document.getElementById('chatMessages');
  if (!feed) return;
  const name = currentCharacter?.name || 'Adventurer';
  const row = document.createElement('div');
  row.className = 'msg-row user-row';
  row.innerHTML = `
    <div class="msg-avatar user-avatar">YOU</div>
    <div class="msg-bubble-wrap">
      <span class="msg-sender">${escapeHtml(name)}</span>
      <div class="msg-bubble user-bubble">${renderMarkdownLite(text)}</div>
      <div style="display:flex;align-items:center;gap:8px;justify-content:flex-end;">
        <span class="msg-time">${nowTime()}</span>
      </div>
    </div>`;
  feed.appendChild(row);
  scrollToBottom();
}

function appendSystemMessage(text) {
  const feed = document.getElementById('chatMessages');
  if (!feed) return;
  const row = document.createElement('div');
  row.className = 'msg-row system-row';
  row.innerHTML = `<div class="system-bubble">${escapeHtml(text)}</div>`;
  feed.appendChild(row);
  scrollToBottom();
}

// ── Clear chat ──
function clearChat() {
  if (!confirm('Clear this conversation? The chat history will be lost.')) return;
  const systemContent = chatHistory[0]?.content || '';
  chatHistory = [{ role: 'system', content: systemContent }];
  saveChatHistory();
  const feed = document.getElementById('chatMessages');
  if (feed) feed.innerHTML = '';
  appendSystemMessage('Conversation cleared');
  appendDMMessage('*The memory of our session fades like smoke in the wind…*\n\nWhere shall we begin anew, adventurer?');
}

// ── Copy message text ──
function copyMsgText(btn) {
  const bubble = btn.closest('.msg-bubble-wrap')?.querySelector('.msg-bubble');
  if (!bubble) return;
  navigator.clipboard.writeText(bubble.innerText).then(() => {
    btn.textContent = 'Copied!';
    setTimeout(() => {
      btn.innerHTML = `<svg width="11" height="11" viewBox="0 0 16 16" fill="none"><rect x="5" y="5" width="9" height="9" rx="1" stroke="currentColor" stroke-width="1.3"/><path d="M3 11H2a1 1 0 01-1-1V2a1 1 0 011-1h8a1 1 0 011 1v1" stroke="currentColor" stroke-width="1.3"/></svg> Copy`;
    }, 1500);
  }).catch(() => {});
}
// ========== NEW FEATURE FUNCTIONS ==========


/* ============================================================
   NEW FEATURES: Combat Tracker, Spell Slots, Hit Dice, Rest,
   Death Saves, Encumbrance, Class Resources, Conditions, Level-Up
   ============================================================ */

// ── CALCULATE AC ──
function calculateAC() {
  if (!currentCharacter) return 10;
  const eq = currentCharacter.equipment || {};
  const armorName = eq.armor;
  let ac = 10;
  const dex = calculateModifier(currentCharacter.abilityScores.Dexterity);
  if (armorName && armorData[armorName]) {
    const a = armorData[armorName];
    if (a.category === "Light") { ac = 11 + dex; }
    else if (a.category === "Medium") { ac = Math.min(12 + dex, 14); }
    else if (a.category === "Heavy") { ac = parseInt(a.ac); }
    else { ac = parseInt(a.ac) || 10; }
  } else {
    const cls = classes[currentCharacter.class];
    if (cls) {
      if (currentCharacter.class === "Barbarian") {
        const con = calculateModifier(currentCharacter.abilityScores.Constitution);
        ac = 10 + dex + con;
      } else if (currentCharacter.class === "Monk") {
        const wis = calculateModifier(currentCharacter.abilityScores.Wisdom);
        ac = 10 + dex + wis;
      }
    }
  }
  if (eq.shield) ac += 2;
  return ac;
}
// ====================================================================
// COMBAT TRACKER FUNCTIONS
// ====================================================================

function openCombatTracker() {
  const modal = document.getElementById("combatTrackerModal");
  if (!modal) return;
  if (!selectedCampaignId) { alert("Please select a campaign first."); return; }
  renderCombatTracker();
  modal.style.display = "flex";
  setTimeout(function() { modal.classList.add("show"); }, 10);
}

function closeCombatTracker() {
  const modal = document.getElementById("combatTrackerModal");
  if (!modal) return;
  modal.classList.remove("show");
  setTimeout(function() { modal.style.display = "none"; }, 200);
}

function renderCombatTracker() {
  const idleState = document.getElementById("combatIdleState");
  const activeState = document.getElementById("combatActiveState");
  if (!idleState || !activeState) return;
  if (!activeCombat.active) {
    idleState.style.display = "";
    activeState.style.display = "none";
    return;
  }
  idleState.style.display = "none";
  activeState.style.display = "";
  document.getElementById("combatRound").innerText = activeCombat.round;
  const current = activeCombat.participants[activeCombat.currentTurnIndex];
  document.getElementById("combatCurrentTurn").innerText = current ? current.name : "\u2014";
  const partyList = document.getElementById("combatPartyList");
  const enemyList = document.getElementById("combatEnemyList");
  if (partyList) {
    partyList.innerHTML = activeCombat.participants.filter(function(p) { return p.type === "player"; })
      .map(function(p) { return renderCombatParticipant(p); }).join("");
  }
  if (enemyList) {
    enemyList.innerHTML = activeCombat.participants.filter(function(p) { return p.type === "enemy"; })
      .map(function(p) { return renderCombatParticipant(p); }).join("");
  }
  const initList = document.getElementById("combatInitiativeList");
  if (initList) {
    initList.innerHTML = activeCombat.participants.map(function(p, i) {
      const isCurrent = i === activeCombat.currentTurnIndex;
      const status = p.hp <= 0 ? " \u{1F480}" : "";
      var cls = isCurrent ? "combat-init-row active-turn" : "combat-init-row";
      return "<div class=\"" + cls + "\">" +
        "<span class=\"combat-init-order\">" + (i + 1) + ".</span>" +
        "<span class=\"combat-init-name\">" + p.name + status + "</span>" +
        "<span class=\"combat-init-value\">Init: " + p.initiative + "</span>" +
        "</div>";
    }).join("");
  }
}

function renderCombatParticipant(p) {
  const hpPct = p.maxHp > 0 ? Math.round((p.hp / p.maxHp) * 100) : 0;
  var status = "Normal";
  if (p.hp <= 0) status = "Dead";
  else if (hpPct <= 50) status = "Bloodied";
  const statusClass = status === "Dead" ? "status-dead" : status === "Bloodied" ? "status-bloodied" : "status-normal";
  const condText = (p.conditions && p.conditions.length) ? p.conditions.join(", ") : "";
  var html = "<div class=\"combat-participant " + statusClass + "\">" +
    "<div class=\"combat-participant-name\">" + p.name + "</div>" +
    "<div class=\"combat-participant-stats\">" +
    "<span>HP: " + p.hp + "/" + p.maxHp + "</span>" +
    "<span>AC: " + p.ac + "</span>" +
    "<span class=\"combat-status-badge " + statusClass + "\">" + status + "</span></div>" +
    "<div class=\"combat-hp-bar\"><div class=\"combat-hp-fill\" style=\"width:" + hpPct + "%\"></div></div>";
  if (condText) {
    html += "<div class=\"combat-conditions\">" + condText + "</div>";
  }
  html += "</div>";
  return html;
}

// ====================================================================
// MONSTER STAT DATABASE
// ====================================================================

const MONSTER_DB_STORAGE_KEY = 'dnd_monster_db';
const MONSTER_DB_VERSION = 1;

function normalizeMonsterName(name) {
  if (!name) return '';
  var n = name.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();
  // Remove common age/life-stage prefixes for flexible matching
  n = n.replace(/^(ancient|adult|young|wyrmling) /, '').trim();
  return n;
}

function extractFirstNumber(str) {
  if (!str) return null;
  var match = str.match(/\d+/);
  return match ? parseInt(match[0], 10) : null;
}

function parseMonsterMarkdown(text) {
  var lines = text.split(/\r?\n/);
  var monsters = {};
  var currentMonster = null;
  var inMonster = false;

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    // Detect heading with #### (monster entries)
    if (/^#{4,5}\s/.test(line)) {
      // Save previous monster if complete
      if (currentMonster && currentMonster.name && currentMonster.ac !== null && currentMonster.hp !== null) {
        var key = normalizeMonsterName(currentMonster.name);
        if (key) {
          monsters[key] = { name: currentMonster.name, ac: currentMonster.ac, hp: currentMonster.hp };
        }
      }
      // Start new monster
      var name = line.replace(/^#{4,5}\s*/, '').trim();
      currentMonster = { name: name, ac: null, hp: null };
      inMonster = true;
      continue;
    }
    if (!inMonster || !currentMonster) continue;
    // Parse Armor Class
    if (/^\*\*Armor Class\*\*/.test(line)) {
      var num = extractFirstNumber(line);
      if (num !== null) currentMonster.ac = num;
    }
    // Parse Hit Points - extract average HP (first number before parenthetical)
    if (/^\*\*Hit Points\*\*/.test(line)) {
      var num = extractFirstNumber(line);
      if (num !== null) currentMonster.hp = num;
    }
  }
  // Save the last monster
  if (currentMonster && currentMonster.name && currentMonster.ac !== null && currentMonster.hp !== null) {
    var key = normalizeMonsterName(currentMonster.name);
    if (key) {
      monsters[key] = { name: currentMonster.name, ac: currentMonster.ac, hp: currentMonster.hp };
    }
  }
  return monsters;
}

function loadMonsterDatabase(markdownText) {
  // Check cache
  var cached = localStorage.getItem(MONSTER_DB_STORAGE_KEY);
  if (cached) {
    try {
      var data = JSON.parse(cached);
      if (data.version === MONSTER_DB_VERSION) {
        window.monsterStats = data.monsters;
        console.log('Monster DB loaded from cache: ' + Object.keys(data.monsters).length + ' entries');
        return;
      }
    } catch(e) {}
  }
  // Parse fresh
  var monsters = parseMonsterMarkdown(markdownText);
  window.monsterStats = monsters;
  localStorage.setItem(MONSTER_DB_STORAGE_KEY, JSON.stringify({ version: MONSTER_DB_VERSION, monsters: monsters }));
  console.log('Monster DB parsed: ' + Object.keys(monsters).length + ' entries');
}

function lookupMonsterStats(name) {
  if (!window.monsterStats || !name) return null;
  var norm = normalizeMonsterName(name);
  return window.monsterStats[norm] || null;
}

function initMonsterDatabase() {
  fetch('monsters.md')
    .then(function(response) {
      if (!response.ok) throw new Error('HTTP ' + response.status);
      return response.text();
    })
    .then(function(markdown) {
      loadMonsterDatabase(markdown);
    })
    .catch(function(err) {
      console.warn('Could not load monsters.md, monster DB unavailable:', err);
      window.monsterStats = null;
    });
}

function startCombat(initiativeStr, enemies) {
  const entries = initiativeStr.split(",").map(function(p) { return p.trim().split(":"); });
  let participants = [];
  if (currentCharacter) {
    let conds = currentCharacter.conditions ? currentCharacter.conditions.map(function(c) { return c.name; }) : [];
    let initVal = 0;
    for (let e of entries) {
      if (e[0].toLowerCase() === currentCharacter.name.toLowerCase()) {
        initVal = parseInt(e[1]) || 0;
        break;
      }
    }
    participants.push({
      id: "player",
      name: currentCharacter.name,
      type: "player",
      hp: currentCharacter.hp || currentCharacter.maxHp || 10,
      maxHp: currentCharacter.maxHp || 10,
      ac: calculateAC(),
      initiative: initVal,
      conditions: conds
    });
  }
  enemies.forEach(function(e, idx) {
    let initVal = 0;
    for (let ent of entries) {
      if (ent[0] === e.name) {
        initVal = parseInt(ent[1]) || 0;
        break;
      }
    }
    participants.push({
      id: "enemy_" + idx,
      name: e.name,
      type: "enemy",
      hp: e.hp || 1,
      maxHp: e.hp || 1,
      ac: e.ac || 10,
      initiative: initVal,
      conditions: []
    });
  });
  participants.sort(function(a, b) { return b.initiative - a.initiative; });
  activeCombat = { active: true, round: 1, currentTurnIndex: 0, participants: participants };
  renderCombatTracker();
  appendSystemMessage("\u2694\uFE0F Combat started! Initiative order set.");
}

function updateCombat(tagData) {
  if (!activeCombat.active) return;
  if (tagData.damage || tagData.heal) {
    const p = activeCombat.participants.find(function(x) { return x.id === tagData.id; });
    if (p) {
      if (tagData.damage) { p.hp = Math.max(0, p.hp - parseInt(tagData.damage)); }
      if (tagData.heal) { p.hp = Math.min(p.maxHp, p.hp + parseInt(tagData.heal)); }
    }
  }
  if (tagData.action === "next_turn") {
    activeCombat.currentTurnIndex++;
    if (activeCombat.currentTurnIndex >= activeCombat.participants.length) {
      activeCombat.currentTurnIndex = 0;
      activeCombat.round++;
    }
  }
  if (tagData.action === "end") {
    activeCombat.active = false;
    appendSystemMessage("\u2694\uFE0F Combat has ended.");
  }
  renderCombatTracker();
}
// ====================================================================
// 2. SPELL SLOT & HIT DICE TRACKING
// ====================================================================

function initSpellSlots() {
  if (!currentCharacter) return;
  if (!currentCharacter.spellSlots) {
    const slots = getSpellSlotsForClass(currentCharacter.class, currentCharacter.level);
    let obj = {};
    for (let k in slots) {
      obj[k] = { used: 0, max: slots[k] };
    }
    currentCharacter.spellSlots = obj;
  }
  if (currentCharacter.hitDiceRemaining === undefined) {
    const cls = classes[currentCharacter.class];
    if (cls) {
      currentCharacter.hitDiceTotal = currentCharacter.level;
      currentCharacter.hitDiceRemaining = currentCharacter.level;
      currentCharacter.hitDiceType = cls.hitDie;
    }
  }
  if (currentCharacter.shortRestCounter === undefined) {
    currentCharacter.shortRestCounter = 0;
  }
  saveCharacter();
}

function updateSpellSlotsUI() {
  if (!currentCharacter || !currentCharacter.spellSlots) return;
  const container = document.getElementById("spellSlotContainer");
  if (!container) return;
  const slots = currentCharacter.spellSlots;
  let html = "";
  for (let level in slots) {
    const s = slots[level];
    const used = s.used || 0;
    const max = s.max || 0;
    html += "<div class=\"spell-slot-row\">" +
      "<span class=\"spell-slot-level\">" + getOrdinal(parseInt(level)) + "</span>" +
      "<div class=\"spell-slot-dots\">";
    for (let i = 0; i < max; i++) {
      html += "<span class=\"spell-slot-dot " + (i < used ? "used" : "available") + "\"></span>";
    }
    html += "</div>" +
      "<span class=\"spell-slot-count\">" + used + " / " + max + "</span>" +
      "<button class=\"small-btn spell-slot-btn\" data-level=\"" + level + "\" data-action=\"use\">\u2212</button>" +
      "<button class=\"small-btn spell-slot-btn\" data-level=\"" + level + "\" data-action=\"restore\">+</button>" +
      "</div>";
  }
  container.innerHTML = html;
  container.querySelectorAll(".spell-slot-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
      const level = btn.dataset.level;
      const action = btn.dataset.action;
      if (!currentCharacter.spellSlots[level]) return;
      if (action === "use") {
        if (currentCharacter.spellSlots[level].used < currentCharacter.spellSlots[level].max) {
          currentCharacter.spellSlots[level].used++;
          saveCharacter();
          updateSpellSlotsUI();
        }
      } else if (action === "restore") {
        if (currentCharacter.spellSlots[level].used > 0) {
          currentCharacter.spellSlots[level].used--;
          saveCharacter();
          updateSpellSlotsUI();
        }
      }
    });
  });
}

function updateHitDiceUI() {
  if (!currentCharacter) return;
  const container = document.getElementById("hitDiceContainer");
  if (!container) return;
  const remaining = currentCharacter.hitDiceRemaining || 0;
  const total = currentCharacter.hitDiceTotal || 0;
  const dtype = currentCharacter.hitDiceType || "d8";
  container.innerHTML = "<div class=\"hitdice-row\">" +
    "<span class=\"hitdice-label\">Hit Dice:</span>" +
    "<span class=\"hitdice-count\">" + remaining + " / " + total + " (" + dtype + ")</span>" +
    "<button class=\"small-btn\" id=\"spendHdBtn\">Spend HD</button>" +
    "</div>";
  const spendBtn = document.getElementById("spendHdBtn");
  if (spendBtn) {
    spendBtn.addEventListener("click", function() {
      if (remaining === 0) { alert("No hit dice remaining."); return; }
      document.getElementById("hdRemainingDisplay").innerText = remaining;
      document.getElementById("hdTotalDisplay").innerText = total;
      document.getElementById("hdTypeDisplay").innerText = dtype;
      document.getElementById("hdSpendAmount").value = 1;
      document.getElementById("hdSpendAmount").max = Math.min(remaining, total);
      document.getElementById("hdResult").style.display = "none";
      const modal = document.getElementById("hitDiceModal");
      modal.style.display = "flex";
      setTimeout(function() { modal.classList.add("show"); }, 10);
    });
  }
}

function getOrdinal(n) {
  if (n === 1) return "1st";
  if (n === 2) return "2nd";
  if (n === 3) return "3rd";
  return n + "th";
}

function applyHitDiceSpend() {
  const spend = parseInt(document.getElementById("hdSpendAmount").value) || 1;
  const maxSpend = Math.min(currentCharacter.hitDiceRemaining || 0, currentCharacter.level);
  const num = Math.min(spend, maxSpend);
  if (num <= 0) { alert("Select at least 1 hit die."); return; }
  const dtype = currentCharacter.hitDiceType || "d8";
  const sides = parseInt(dtype.replace("d", ""));
  const conMod = calculateModifier(currentCharacter.abilityScores.Constitution);
  let totalHeal = 0;
  let rolls = [];
  for (let i = 0; i < num; i++) {
    const roll = Math.floor(Math.random() * sides) + 1;
    rolls.push(roll);
    totalHeal += roll + conMod;
  }
  currentCharacter.hitDiceRemaining -= num;
  currentCharacter.hp = Math.min(currentCharacter.maxHp, (currentCharacter.hp || 0) + totalHeal);
  saveCharacter();
  updateHPDisplay();
  updateHitDiceUI();
  const resultEl = document.getElementById("hdResult");
  resultEl.style.display = "block";
  resultEl.innerHTML = "Rolled " + num + dtype + ": [" + rolls.join(", ") + "] + " + conMod + " each = <strong>" + totalHeal + " HP</strong> healed.";
  appendSystemMessage("\uD83D\uDE0D Spent " + num + " hit dice, recovered " + totalHeal + " HP.");
}

// ====================================================================
// 3. REST MECHANICS
// ====================================================================

function applyShortRest() {
  if (!currentCharacter) return;
  if (currentCharacter.shortRestCounter >= 2) {
    appendSystemMessage("You have already taken two short rests today. No further benefit.");
    return;
  }
  currentCharacter.shortRestCounter++;
  const remaining = currentCharacter.hitDiceRemaining || 0;
  if (remaining > 0) {
    document.getElementById("hdRemainingDisplay").innerText = remaining;
    document.getElementById("hdTotalDisplay").innerText = currentCharacter.hitDiceTotal || currentCharacter.level;
    document.getElementById("hdTypeDisplay").innerText = currentCharacter.hitDiceType || "d8";
    document.getElementById("hdSpendAmount").value = 1;
    document.getElementById("hdSpendAmount").max = Math.min(remaining, currentCharacter.level);
    document.getElementById("hdResult").style.display = "none";
    const modal = document.getElementById("hitDiceModal");
    modal.style.display = "flex";
    setTimeout(function() { modal.classList.add("show"); }, 10);
    appendSystemMessage("\uD83C\uDFD4\uFE0F Short rest taken. You can spend hit dice.");
  } else {
    appendSystemMessage("\uD83C\uDFD4\uFE0F Short rest taken. No hit dice remaining.");
  }
  // Restore short rest resources
  if (currentCharacter.class === "Warlock") {
    const slots = getSpellSlotsForClass("Warlock", currentCharacter.level);
    if (currentCharacter.spellSlots) {
      for (let k in slots) {
        if (currentCharacter.spellSlots[k]) currentCharacter.spellSlots[k].used = 0;
      }
    }
  }
  if (currentCharacter.classResources) {
    if (currentCharacter.classResources.ChannelDivinity) currentCharacter.classResources.ChannelDivinity.current = currentCharacter.classResources.ChannelDivinity.max;
    if (currentCharacter.classResources.ActionSurge) currentCharacter.classResources.ActionSurge.current = currentCharacter.classResources.ActionSurge.max;
    if (currentCharacter.classResources.SecondWind) currentCharacter.classResources.SecondWind.current = currentCharacter.classResources.SecondWind.max;
  }
  saveCharacter();
  updateSpellSlotsUI();
  updateClassResourcesUI();
}

function applyLongRest() {
  if (!currentCharacter) return;
  currentCharacter.hp = currentCharacter.maxHp;
  currentCharacter.hitDiceRemaining = currentCharacter.hitDiceTotal || currentCharacter.level;
  currentCharacter.shortRestCounter = 0;
  if (currentCharacter.spellSlots) {
    for (let k in currentCharacter.spellSlots) {
      currentCharacter.spellSlots[k].used = 0;
    }
  }
  if (currentCharacter.classResources) {
    for (let k in currentCharacter.classResources) {
      currentCharacter.classResources[k].current = currentCharacter.classResources[k].max;
    }
  }
  if (currentCharacter.conditions) {
    currentCharacter.conditions = currentCharacter.conditions.filter(function(c) {
      return c.duration && c.duration.indexOf("permanent") >= 0;
    });
  }
  saveCharacter();
  updateHPDisplay();
  updateSpellSlotsUI();
  updateHitDiceUI();
  updateClassResourcesUI();
  updateConditionIcons();
  appendSystemMessage("\uD83C\uDF1C Long rest complete! HP restored, spell slots and hit dice refreshed.");
}

// ====================================================================
// FEATURE CHOICE MODAL (for Eldritch Invocations, Metamagic, Maneuvers, Arcane Shots, Pact Boon, etc.)
// ====================================================================

function showFeatureChoiceModal(type, count, className, subclass) {
  const modal = document.getElementById('featureChoiceModal');
  if (!modal) return;
  const titleEl = document.getElementById('featureChoiceTitle');
  const descEl = document.getElementById('featureChoiceDescription');
  const gridEl = document.getElementById('featureChoiceGrid');
  if (!titleEl || !descEl || !gridEl) return;

  // Map type to display name and option list
  let options = [];
  let displayName = type;
  let selectionType = 'checkbox'; // 'radio' for single choice

  switch (type) {
    case 'invocations':
      displayName = 'Eldritch Invocations';
      options = eldritchInvocations || [];
      // Filter by level and pact boon requirements
      const charLevel = currentCharacter ? currentCharacter.level : 1;
      const pactBoon = currentCharacter ? currentCharacter.pactBoon : '';
      options = options.filter(inv => {
        if (inv.level && inv.level > charLevel) return false;
        if (inv.prerequisite && inv.prerequisite.pact) {
          return inv.prerequisite.pact === pactBoon;
        }
        return true;
      });
      break;
    case 'metamagic':
      displayName = 'Metamagic Options';
      options = metamagicOptions || [];
      break;
    case 'maneuvers':
      displayName = 'Battle Master Maneuvers';
      options = battleMasterManeuvers || [];
      break;
    case 'arcaneShots':
      displayName = 'Arcane Shots';
      options = arcaneShots || [];
      break;
    case 'pactBoon':
      displayName = 'Pact Boon';
      options = [
        { name: 'Pact of the Blade', description: 'You can create a pact weapon in your empty hand.' },
        { name: 'Pact of the Chain', description: 'You gain a familiar.' },
        { name: 'Pact of the Tome', description: 'You gain three cantrips from any class.' },
        { name: 'Pact of the Talisman', description: 'You gain a talisman that can aid its bearer.' }
      ];
      selectionType = 'radio';
      count = 1;
      break;
    case 'dragonbornAncestry':
      displayName = 'Draconic Ancestry';
      options = [
        { name: 'Black', description: 'Acid damage' },
        { name: 'Blue', description: 'Lightning damage' },
        { name: 'Brass', description: 'Fire damage' },
        { name: 'Bronze', description: 'Lightning damage' },
        { name: 'Copper', description: 'Acid damage' },
        { name: 'Gold', description: 'Fire damage' },
        { name: 'Green', description: 'Poison damage' },
        { name: 'Red', description: 'Fire damage' },
        { name: 'Silver', description: 'Cold damage' },
        { name: 'White', description: 'Cold damage' }
      ];
      selectionType = 'radio';
      count = 1;
      break;
    default:
      options = [];
  }

  if (options.length === 0) {
    console.warn('Feature choice modal: no options found for type', type);
    return;
  }

  titleEl.textContent = `Choose ${count > 1 ? count + ' ' : ''}${displayName}`;
  descEl.textContent = `Select ${count > 1 ? 'up to ' + count : 'one'} option${count > 1 ? 's' : ''} from the list below.`;
  
  // Build the grid
  gridEl.innerHTML = options.map((opt, idx) => {
    const inputType = selectionType;
    const inputName = `feature-choice-${type}`;
    return `<label class="feature-choice-item" data-index="${idx}">
      <input type="${inputType}" name="${inputName}" value="${opt.name.replace(/"/g, '&quot;')}" data-type="${type}">
      <span class="feature-choice-name">${opt.name}</span>
      ${opt.description ? `<span class="feature-choice-desc">${opt.description}</span>` : ''}
    </label>`;
  }).join('');

  // Store state for confirm handler
  gridEl.dataset.type = type;
  gridEl.dataset.count = count;
  gridEl.dataset.selectionType = selectionType;

  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('show'), 10);
  
  // Clear previous confirm handler and set new one
  const confirmBtn = document.getElementById('confirmFeatureChoiceBtn');
  const cancelBtn = document.getElementById('cancelFeatureChoiceBtn');
  const closeBtn = document.getElementById('closeFeatureChoiceBtn');
  
  const newConfirm = function() {
    const checked = gridEl.querySelectorAll('input:checked');
    if (checked.length === 0 && count > 0) {
      // Allow proceeding with 0 if it's optional (e.g., pact boon might be deferred)
      if (selectionType === 'radio' && count === 1) {
        // Radio buttons should always have one selected if any
      }
    }
    if (checked.length > 0) {
      const selected = Array.from(checked).map(cb => cb.value);
      const choiceType = gridEl.dataset.type;
      if (currentCharacter) {
        switch (choiceType) {
          case 'invocations':
            if (!currentCharacter.invocations) currentCharacter.invocations = [];
            for (const name of selected) {
              if (!currentCharacter.invocations.includes(name)) currentCharacter.invocations.push(name);
            }
            break;
          case 'metamagic':
            if (!currentCharacter.metamagic) currentCharacter.metamagic = [];
            for (const name of selected) {
              if (!currentCharacter.metamagic.includes(name)) currentCharacter.metamagic.push(name);
            }
            break;
          case 'maneuvers':
            if (!currentCharacter.maneuvers) currentCharacter.maneuvers = [];
            for (const name of selected) {
              if (!currentCharacter.maneuvers.includes(name)) currentCharacter.maneuvers.push(name);
            }
            break;
          case 'arcaneShots':
            if (!currentCharacter.arcaneShots) currentCharacter.arcaneShots = [];
            for (const name of selected) {
              if (!currentCharacter.arcaneShots.includes(name)) currentCharacter.arcaneShots.push(name);
            }
            break;
          case 'pactBoon':
            currentCharacter.pactBoon = selected[0];
            break;
          case 'dragonbornAncestry':
            currentCharacter.dragonbornAncestry = selected[0];
            break;
        }
        saveCharacter();
        if (document.getElementById('characterSheetModal').style.display === 'flex') {
          populateFeatsTab();
        }
        appendSystemMessage(`✅ ${displayName} updated: ${selected.join(', ')}`);
      }
    }
    modal.classList.remove('show');
    setTimeout(() => { modal.style.display = 'none'; }, 200);
    confirmBtn.removeEventListener('click', newConfirm);
    cancelBtn.removeEventListener('click', newCancel);
    closeBtn.removeEventListener('click', newCancel);
  };
  
  const newCancel = function() {
    modal.classList.remove('show');
    setTimeout(() => { modal.style.display = 'none'; }, 200);
    confirmBtn.removeEventListener('click', newConfirm);
    cancelBtn.removeEventListener('click', newCancel);
    closeBtn.removeEventListener('click', newCancel);
  };
  
  confirmBtn.addEventListener('click', newConfirm);
  cancelBtn.addEventListener('click', newCancel);
  closeBtn.addEventListener('click', newCancel);
}

// ====================================================================
// 4. DEATH SAVING THROWS
// ====================================================================

function showDeathSaveModal() {
  const modal = document.getElementById("deathSaveModal");
  if (!modal) return;
  if (!currentCharacter) return;
  currentCharacter.deathSaveSuccesses = currentCharacter.deathSaveSuccesses || 0;
  currentCharacter.deathSaveFailures = currentCharacter.deathSaveFailures || 0;
  currentCharacter.isUnconscious = true;
  updateDeathSaveUI();
  modal.style.display = "flex";
  setTimeout(function() { modal.classList.add("show"); }, 10);
}

function closeDeathSaveModal() {
  const modal = document.getElementById("deathSaveModal");
  if (!modal) return;
  modal.classList.remove("show");
  setTimeout(function() { modal.style.display = "none"; }, 200);
}

function updateDeathSaveUI() {
  if (!currentCharacter) return;
  const successes = currentCharacter.deathSaveSuccesses || 0;
  const failures = currentCharacter.deathSaveFailures || 0;
  for (let i = 0; i < 3; i++) {
    const sEl = document.querySelector("#deathSuccessCircles .death-circle[data-idx=\"" + i + "\"]");
    if (sEl) sEl.classList.toggle("filled", i < successes);
    const fEl = document.querySelector("#deathFailureCircles .death-circle-fail[data-idx=\"" + i + "\"]");
    if (fEl) fEl.classList.toggle("filled", i < failures);
  }
}

function rollDeathSave() {
  if (!currentCharacter) return;
  const roll = Math.floor(Math.random() * 20) + 1;
  const resultEl = document.getElementById("deathResult");
  resultEl.style.display = "block";
  let msg = "Rolled a <strong>" + roll + "</strong>! ";
  if (roll === 20) {
    currentCharacter.deathSaveSuccesses = 3;
    msg += "CRITICAL! You regain 1 HP and consciousness!";
    currentCharacter.hp = 1;
    currentCharacter.isUnconscious = false;
    currentCharacter.deathSaveSuccesses = 0;
    currentCharacter.deathSaveFailures = 0;
    saveCharacter();
    updateHPDisplay();
    updateDeathSaveUI();
    closeDeathSaveModal();
    appendSystemMessage("\u2728 " + currentCharacter.name + " is back on their feet with 1 HP!");
    resultEl.innerHTML = msg;
    return;
  } else if (roll === 1) {
    currentCharacter.deathSaveFailures += 2;
    msg += "Critical failure! Two failures.";
  } else if (roll >= 10) {
    currentCharacter.deathSaveSuccesses++;
    msg += "Success!";
  } else {
    currentCharacter.deathSaveFailures++;
    msg += "Failure!";
  }
  updateDeathSaveUI();
  resultEl.innerHTML = msg;
  if (currentCharacter.deathSaveSuccesses >= 3) {
    currentCharacter.isUnconscious = false;
    currentCharacter.deathSaveSuccesses = 0;
    currentCharacter.deathSaveFailures = 0;
    msg += "<br>\u2705 Stabilized! You will regain 1 HP after the battle.";
    appendSystemMessage("\u2705 " + currentCharacter.name + " is stable.");
    closeDeathSaveModal();
  } else if (currentCharacter.deathSaveFailures >= 3) {
    currentCharacter.deathSaveSuccesses = 0;
    currentCharacter.deathSaveFailures = 0;
    msg += "<br>\uD83D\uDC80 You have died!";
    appendSystemMessage("\uD83D\uDC80 " + currentCharacter.name + " has died.");
    closeDeathSaveModal();
  }
  saveCharacter();
  resultEl.innerHTML = msg;
}

// ====================================================================
// 5. ENCUMBRANCE CALCULATOR
// ====================================================================

function calculateEncumbrance() {
  if (!currentCharacter) return { total: 0, capacity: 0, ratio: 0 };
  let total = 0;
  const eq = currentCharacter.equipment || {};
  if (eq.armor && armorData[eq.armor]) {
    total += armorData[eq.armor].weight;
  }
  if (eq.shield) total += 6;
  if (eq.weapons) {
    eq.weapons.forEach(function(w) {
      const wd = weaponsData[w.name];
      if (wd) total += wd.weight * (w.quantity || 1);
    });
  }
  if (currentCharacter.inventory) {
    currentCharacter.inventory.forEach(function(item) {
      const w = parseFloat(item.weight) || 0;
      total += w * (item.quantity || 1);
    });
  }
  const currency = currentCharacter.currency || {};
  const coinWeight = ((currency.cp || 0) + (currency.sp || 0) + (currency.ep || 0) + (currency.gp || 0) + (currency.pp || 0)) / 50;
  total += coinWeight;
  const str = currentCharacter.abilityScores.Strength || 10;
  const capacity = str * 15;
  const ratio = total / capacity;
  return { total: total, capacity: capacity, ratio: ratio, overCapacity: total > capacity, doubleCapacity: total > capacity * 2 };
}

function updateEncumbranceDisplay() {
  const container = document.getElementById("encumbranceDisplay");
  if (!container) return;
  const enc = calculateEncumbrance();
  const pct = Math.min(100, (enc.total / enc.capacity) * 100);
  var barColor = "#4CAF50";
  if (enc.overCapacity) barColor = "#C85A3A";
  if (enc.doubleCapacity) barColor = "#8B0000";
  container.innerHTML = "<div class=\"encumbrance-row\">" +
    "<span>Carried: " + enc.total.toFixed(1) + " / " + enc.capacity + " lbs</span>" +
    "<div class=\"encumbrance-bar\"><div class=\"encumbrance-fill\" style=\"width:" + pct + "%;background:" + barColor + "\"></div></div>" +
    (enc.overCapacity ? "<span class=\"encumbrance-warning\">" + (enc.doubleCapacity ? "\u26A0\uFE0F Max capacity exceeded! Speed 5ft, prone." : "\u26A0\uFE0F Encumbered! Speed halved.") + "</span>" : "") +
    "</div>";
  if (enc.overCapacity && !enc.doubleCapacity) {
    addCondition("Encumbered");
  } else {
    removeCondition("Encumbered");
  }
}

// ====================================================================
// 6. CLASS RESOURCE TRACKERS
// ====================================================================

function getClassResources(className, subclass, level) {
  let resources = {};
  if (className === "Barbarian") {
    resources.Rage = { max: 2 + Math.floor((level - 1) / 4), current: 2 + Math.floor((level - 1) / 4) };
  } else if (className === "Monk") {
    resources.Ki = { max: level, current: level };
  } else if (className === "Sorcerer") {
    resources.SorceryPoints = { max: level, current: level };
  } else if (className === "Fighter" && subclass === "Battle Master") {
    resources.SuperiorityDice = { max: Math.min(6, 4 + Math.floor((level - 3) / 2)), current: Math.min(6, 4 + Math.floor((level - 3) / 2)) };
  } else if (className === "Druid") {
    resources.WildShape = { max: 2, current: 2 };
  }
  // Missing class resources
  if (className === "Paladin") {
    resources.LayOnHands = { max: level * 5, current: level * 5 };
    resources.ChannelDivinity = { max: 1, current: 1 };
  } else if (className === "Cleric") {
    resources.ChannelDivinity = { max: 1, current: 1 };
  } else if (className === "Fighter") {
    resources.ActionSurge = { max: 1, current: 1 };
    resources.SecondWind = { max: 1, current: 1 };
  }
  return resources;
}

function updateClassResourcesUI() {
  const container = document.getElementById("classResourcesContainer");
  if (!container) return;
  if (!currentCharacter || !currentCharacter.classResources) {
    container.style.display = "none";
    return;
  }
  container.style.display = "block";
  const res = currentCharacter.classResources;
  let html = "";
  for (let name in res) {
    const r = res[name];
    html += "<div class=\"class-resource-row\">" +
      "<span class=\"resource-name\">" + name + "</span>" +
      "<span class=\"resource-count\">" + (r.current || 0) + " / " + (r.max || 0) + "</span>" +
      "<button class=\"small-btn resource-btn\" data-resource=\"" + name + "\" data-action=\"use\">\u2212</button>" +
      "<button class=\"small-btn resource-btn\" data-resource=\"" + name + "\" data-action=\"restore\">+</button>" +
      "</div>";
  }
  container.innerHTML = html;
  container.querySelectorAll(".resource-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
      const rname = btn.dataset.resource;
      const action = btn.dataset.action;
      if (!currentCharacter.classResources[rname]) return;
      if (action === "use") {
        if (currentCharacter.classResources[rname].current > 0) {
          currentCharacter.classResources[rname].current--;
          saveCharacter();
          updateClassResourcesUI();
        }
      } else if (action === "restore") {
        if (currentCharacter.classResources[rname].current < currentCharacter.classResources[rname].max) {
          currentCharacter.classResources[rname].current++;
          saveCharacter();
          updateClassResourcesUI();
        }
      }
    });
  });
}

// ====================================================================
// 7. CONDITION ICONS
// ====================================================================

function addCondition(name, source, duration) {
  if (!currentCharacter) return;
  if (!currentCharacter.conditions) currentCharacter.conditions = [];
  const exists = currentCharacter.conditions.find(function(c) { return c.name.toLowerCase() === name.toLowerCase(); });
  if (exists) return;
  currentCharacter.conditions.push({ name: name, source: source || "unknown", duration: duration || "unknown" });
  saveCharacter();
  updateConditionIcons();
}

function removeCondition(name) {
  if (!currentCharacter || !currentCharacter.conditions) return;
  currentCharacter.conditions = currentCharacter.conditions.filter(function(c) { return c.name.toLowerCase() !== name.toLowerCase(); });
  saveCharacter();
  updateConditionIcons();
}

function updateConditionIcons() {
  const container = document.getElementById("conditionIcons");
  if (!container) return;
  if (!currentCharacter || !currentCharacter.conditions || !currentCharacter.conditions.length) {
    container.style.display = "none";
    return;
  }
  container.style.display = "flex";
  container.innerHTML = currentCharacter.conditions.map(function(c) {
    var icon = getConditionIcon(c.name);
    return "<div class=\"condition-icon\" title=\"" + c.name + (c.duration ? " (" + c.duration + ")" : "") + "\" onclick=\"alert('" + c.name + ": " + (c.duration ? c.duration : "ongoing") + "')\">" + icon + "</div>";
  }).join("");
}

function getConditionIcon(name) {
  const icons = {
    "Poisoned": "\uD83D\uDC8A",
    "Paralyzed": "\u26A1",
    "Stunned": "\uD83D\uDE35",
    "Frightened": "\uD83D\uDE31",
    "Charmed": "\uD83D\uDC9B",
    "Blinded": "\uD83D\uDE46",
    "Deafened": "\uD83D\uDE42",
    "Prone": "\uD83D\uDE34",
    "Restrained": "\uD83D\uDD17",
    "Incapacitated": "\u274C",
    "Unconscious": "\uD83D\uDE34",
    "Exhaustion": "\uD83D\uDE2B",
    "Encumbered": "\uD83C\uDFC3",
    "Concentration": "\uD83E\uDDE0",
    "Invisible": "\uD83D\uDC7B",
    "Blessed": "\u2728",
    "Hexed": "\uD83D\uDC7F",
    "Hasted": "\u26A1"
  };
  return icons[name] || "\u2753";
}

// ====================================================================
// 8. AUTOMATIC LEVEL-UP SYSTEM
// ====================================================================

function recalculateStatsOnLevelUp(newLevel, oldLevel) {
  const cls = classes[currentCharacter.class];
  if (!cls) return null;
  const hitDieVal = cls.hitDie === "d12" ? 12 : cls.hitDie === "d10" ? 10 : cls.hitDie === "d8" ? 8 : cls.hitDie === "d6" ? 6 : 8;
  const conMod = calculateModifier(currentCharacter.abilityScores.Constitution);
  const hpRoll = Math.floor(hitDieVal / 2) + 1;
  const hpIncrease = hpRoll + conMod;
  const newMaxHp = (currentCharacter.maxHp || hitDieVal + conMod) + hpIncrease;
  const spellSlots = getSpellSlotsForClass(currentCharacter.class, newLevel);
  const asiAvailable = (newLevel % 4 === 0);
  let features = [];
  if (currentCharacter.class === "Sorcerer" && newLevel >= 3) features.push("Metamagic (2 options)");
  if (currentCharacter.class === "Warlock" && newLevel >= 2) features.push("Eldritch Invocations");
  if (currentCharacter.class === "Fighter" && selectedSubclass === "Battle Master" && newLevel >= 3) features.push("Battle Master Maneuvers");
  return {
    hpIncrease: hpIncrease,
    newMaxHp: newMaxHp,
    spellSlots: spellSlots,
    hitDice: { total: newLevel, type: cls.hitDie },
    asiAvailable: asiAvailable,
    newLevel: newLevel,
    oldLevel: oldLevel,
    features: features
  };
}

var pendingLevelUpProposal = null;

function processLevelUp() {
  if (!currentCharacter || !pendingLevelUpProposal) return;
  const prop = pendingLevelUpProposal;
  currentCharacter.maxHp = prop.newMaxHp;
  currentCharacter.hp = prop.newMaxHp;
  currentCharacter.level = prop.newLevel;
  currentCharacter.hitDiceTotal = prop.newLevel;
  currentCharacter.hitDiceRemaining = prop.newLevel;
  const slots = getSpellSlotsForClass(currentCharacter.class, prop.newLevel);
  if (!currentCharacter.spellSlots) currentCharacter.spellSlots = {};
  for (let k in slots) {
    if (!currentCharacter.spellSlots[k]) {
      currentCharacter.spellSlots[k] = { used: 0, max: slots[k] };
    } else {
      currentCharacter.spellSlots[k].max = slots[k];
    }
  }
  if (currentCharacter.classResources) {
    const newResources = getClassResources(currentCharacter.class, currentCharacter.subclass, prop.newLevel);
    for (let k in newResources) {
      if (currentCharacter.classResources[k]) {
        currentCharacter.classResources[k].max = newResources[k].max;
        currentCharacter.classResources[k].current = newResources[k].max;
      } else {
        currentCharacter.classResources[k] = newResources[k];
      }
    }
  }
  // Add selected spells from level up
  if (tempLevelUpSpells && tempLevelUpSpells.size > 0) {
    if (!currentCharacter.spells) currentCharacter.spells = [];
    for (let spellName of tempLevelUpSpells) {
      if (!currentCharacter.spells.includes(spellName)) {
        currentCharacter.spells.push(spellName);
      }
    }
    tempLevelUpSpells.clear();
  }
  // Add selected feat (only if feat radio is checked)
  const asiOrFeatRadio = document.querySelector('input[name="asiOrFeat"]:checked');
  const featSelect = document.getElementById("featSelect");
  if (asiOrFeatRadio && asiOrFeatRadio.value === 'feat' && featSelect && featSelect.value) {
    if (!currentCharacter.feats) currentCharacter.feats = "";
    if (currentCharacter.feats) {
      currentCharacter.feats += "\n" + featSelect.value;
    } else {
      currentCharacter.feats = featSelect.value;
    }
    // Apply feat ability increase if applicable
    const featDb = featDatabase || (typeof window.featDatabase !== 'undefined' ? window.featDatabase : null);
    if (featDb) {
      const feat = Object.values(featDb).find(f => f.name === featSelect.value);
      if (feat && feat.abilityIncrease) {
        const ab = feat.abilityIncrease.ability;
        if (currentCharacter.abilityScores[ab] < 20) {
          currentCharacter.abilityScores[ab] += feat.abilityIncrease.amount;
        }
      }
    }
  }
  // Apply ASI from buttons (handled directly in openLevelUpModal via click handlers, already saved)
  saveCharacter();
  updateHPDisplay();
  updateSpellSlotsUI();
  updateHitDiceUI();
  updateClassResourcesUI();
  pendingLevelUpProposal = null;
  appendSystemMessage("\u2728 Level up to " + prop.newLevel + " applied! HP increased by " + prop.hpIncrease + ".");
}

function openLevelUpModal() {
  const modal = document.getElementById("levelUpModal");
  if (!modal || !pendingLevelUpProposal) return;
  const prop = pendingLevelUpProposal;
  const summaryEl = document.getElementById("levelUpSummary");
  summaryEl.innerHTML = "<h3>Congratulations! You reached Level " + prop.newLevel + "!</h3>" +
    "<p><strong>HP Increase:</strong> +" + prop.hpIncrease + " (new max: " + prop.newMaxHp + ")</p>" +
    "<p><strong>Hit Dice:</strong> " + prop.hitDice.total + " " + prop.hitDice.type + "</p>" +
    (prop.features.length ? "<p><strong>New Features:</strong> " + prop.features.join(", ") + "</p>" : "");
  
  // ASI / Feat section
  const asiSection = document.getElementById("levelUpAsiSection");
  if (prop.asiAvailable) {
    asiSection.style.display = "block";
    const grid = document.getElementById("asiGrid");
    grid.innerHTML = "";
    abilities.forEach(function(ab) {
      const current = currentCharacter.abilityScores[ab] || 10;
      grid.innerHTML += "<div class=\"asi-item\">" +
        "<span>" + ab + ": " + current + "</span>" +
        "<button class=\"small-btn asi-btn\" data-ability=\"" + ab + "\">+1</button>" +
        "</div>";
    });
    grid.querySelectorAll(".asi-btn").forEach(function(btn) {
      btn.addEventListener("click", function() {
        const ab = btn.dataset.ability;
        if (currentCharacter.abilityScores[ab] < 20) {
          currentCharacter.abilityScores[ab]++;
          btn.previousElementSibling.innerText = ab + ": " + currentCharacter.abilityScores[ab];
          saveCharacter();
        }
      });
    });
    // Feat radio toggle
    document.querySelectorAll('input[name="asiOrFeat"]').forEach(function(radio) {
      radio.addEventListener('change', function() {
        document.getElementById('asiGrid').style.display = this.value === 'asi' ? '' : 'none';
        document.getElementById('featSelectionDiv').style.display = this.value === 'feat' ? '' : 'none';
      });
    });
    document.getElementById('asiGrid').style.display = '';
    document.getElementById('featSelectionDiv').style.display = 'none';
    // Populate feat dropdown
    const featSelect = document.getElementById("featSelect");
    if (featSelect) {
      if (window.featDatabase) {
        featSelect.innerHTML = '<option value="">— Select a feat —</option>';
        for (let key in window.featDatabase) {
          const feat = window.featDatabase[key];
          featSelect.innerHTML += '<option value="' + feat.name + '">' + feat.name + '</option>';
        }
      } else if (typeof featDatabase !== 'undefined' && featDatabase) {
        featSelect.innerHTML = '<option value="">— Select a feat —</option>';
        for (let key in featDatabase) {
          const feat = featDatabase[key];
          featSelect.innerHTML += '<option value="' + feat.name + '">' + feat.name + '</option>';
        }
      } else {
        featSelect.innerHTML = '<option value="">Feats not loaded</option>';
      }
    }
  } else {
    asiSection.style.display = "none";
  }
  
  // Spell selection for known-spell classes
  const spellSelectionDiv = document.getElementById("levelUpSpellSelection");
  const cls = classes[currentCharacter.class];
  const isKnownCaster = ["Bard","Sorcerer","Warlock","Ranger"].includes(currentCharacter.class) || 
    (currentCharacter.class === "Fighter" && currentCharacter.subclass === "Eldritch Knight") ||
    (currentCharacter.class === "Rogue" && currentCharacter.subclass === "Arcane Trickster");
  
  if (cls && cls.spellcasting && isKnownCaster && prop.newLevel) {
    const oldLevel = prop.newLevel - 1;
    // Calculate new spells known at this level
    let newSpellsCount = 0;
    if (currentCharacter.class === "Sorcerer") newSpellsCount = 1;
    else if (currentCharacter.class === "Bard") newSpellsCount = 1;
    else if (currentCharacter.class === "Warlock") newSpellsCount = 1;
    else if (currentCharacter.class === "Ranger") newSpellsCount = 1;
    else if (currentCharacter.class === "Fighter" || currentCharacter.class === "Rogue") newSpellsCount = 1;
    
    if (newSpellsCount > 0) {
      spellSelectionDiv.style.display = "block";
      document.getElementById("levelUpNewSpellsCount").innerText = newSpellsCount;
      
      if (!tempLevelUpSpells) tempLevelUpSpells = new Set();
      const availableSpells = getSpellArray().filter(s =>
        s.level > 0 && s.level <= Math.min(5, Math.floor((prop.newLevel+1)/2)) &&
        s.classes && s.classes.includes(currentCharacter.class)
      );
      renderSpellGrid("levelUpSpellGrid", availableSpells, false, newSpellsCount, tempLevelUpSpells, function(newSet) {
        tempLevelUpSpells = newSet;
      });
    } else {
      spellSelectionDiv.style.display = "none";
    }
  } else {
    spellSelectionDiv.style.display = "none";
  }
  
  const spellsSection = document.getElementById("levelUpSpellsSection");
  if (cls && cls.spellcasting && !isKnownCaster) {
    spellsSection.style.display = "block";
    document.getElementById("levelUpSpellChoices").innerHTML = "<p class=\"death-subtitle\">Spell slots updated. Check your Spells tab to prepare new spells.</p>";
  } else {
    spellsSection.style.display = "none";
  }
  modal.style.display = "flex";
  setTimeout(function() { modal.classList.add("show"); }, 10);
}

function confirmLevelUp() {
  // Save current feat/asi choice before processing
  const featSelect = document.getElementById("featSelect");
  const asiRadio = document.querySelector('input[name="asiOrFeat"]:checked');
  if (asiRadio && asiRadio.value === 'feat' && featSelect && !featSelect.value) {
    alert('Please select a feat or switch to Ability Score Improvement.');
    return;
  }
  const modal = document.getElementById("levelUpModal");
  if (modal) {
    modal.classList.remove("show");
    setTimeout(function() { modal.style.display = "none"; }, 200);
  }
  processLevelUp();
}

// ====================================================================
// SAVE CHARACTER HELPER
// ====================================================================

function saveCharacter() {
  if (!currentCharacter) return;
  localStorage.setItem("dnd_current_character", JSON.stringify(currentCharacter));
}
