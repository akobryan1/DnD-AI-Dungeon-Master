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

// Spells (subset)
const spellsDatabase = {
  "Cantrips": [
    { name: "Acid Splash", level: 0, school: "Conjuration", classes: ["Sorcerer","Wizard"], castingTime: "1 action", range: "60 ft", components: ["V","S"], duration: "Instantaneous", description: "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage." },
    { name: "Blade Ward", level: 0, school: "Abjuration", classes: ["Bard","Sorcerer","Warlock","Wizard"], castingTime: "1 action", range: "Self", components: ["V","S"], duration: "1 round", description: "You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks." },
    { name: "Dancing Lights", level: 0, school: "Evocation", classes: ["Bard","Sorcerer","Wizard"], castingTime: "1 action", range: "120 ft", components: ["V","S","M (a bit of phosphorus or wychwood or a glowworm)"], duration: "Concentration, up to 1 minute", description: "You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. As a bonus action, you can move the lights up to 60 feet." },
    { name: "Eldritch Blast", level: 0, school: "Evocation", classes: ["Warlock"], castingTime: "1 action", range: "120 ft", components: ["V","S"], duration: "Instantaneous", description: "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack. On a hit, the target takes 1d10 force damage. The spell creates more than one beam when you reach higher levels: two beams at 5th level, three at 11th, four at 17th." },
    { name: "Fire Bolt", level: 0, school: "Evocation", classes: ["Sorcerer","Wizard"], castingTime: "1 action", range: "120 ft", components: ["V","S"], duration: "Instantaneous", description: "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried." },
    { name: "Guidance", level: 0, school: "Divination", classes: ["Cleric","Druid"], castingTime: "1 action", range: "Touch", components: ["V","S"], duration: "Concentration, up to 1 minute", description: "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check." },
    { name: "Light", level: 0, school: "Evocation", classes: ["Bard","Cleric","Sorcerer","Wizard"], castingTime: "1 action", range: "Touch", components: ["V","M (a firefly or phosphorescent moss)"], duration: "1 hour", description: "You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like." },
    { name: "Mage Hand", level: 0, school: "Conjuration", classes: ["Bard","Sorcerer","Warlock","Wizard"], castingTime: "1 action", range: "30 ft", components: ["V","S"], duration: "1 minute", description: "A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. You can use your action to control the hand. The hand can manipulate an object, open an unlocked door or container, stow or retrieve an item, but it can't attack, activate magic items, or carry more than 10 pounds." },
    { name: "Mending", level: 0, school: "Transmutation", classes: ["Bard","Cleric","Druid","Sorcerer","Wizard"], castingTime: "1 minute", range: "Touch", components: ["V","S","M (two lodestones)"], duration: "Instantaneous", description: "This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage." },
    { name: "Message", level: 0, school: "Transmutation", classes: ["Bard","Sorcerer","Wizard"], castingTime: "1 action", range: "120 ft", components: ["V","S","M (a short piece of copper wire)"], duration: "1 round", description: "You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear. You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier." },
    { name: "Minor Illusion", level: 0, school: "Illusion", classes: ["Bard","Sorcerer","Warlock","Wizard"], castingTime: "1 action", range: "30 ft", components: ["S","M (a bit of fleece)"], duration: "1 minute", description: "You create a sound or an image of an object within range that lasts for the duration. If you create a sound, its volume can range from a whisper to a scream. If you create an image, it must be no larger than a 5-foot cube. Physical interaction with the image reveals it to be an illusion." },
    { name: "Poison Spray", level: 0, school: "Conjuration", classes: ["Druid","Sorcerer","Warlock","Wizard"], castingTime: "1 action", range: "10 ft", components: ["V","S"], duration: "Instantaneous", description: "You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage." },
    { name: "Prestidigitation", level: 0, school: "Transmutation", classes: ["Bard","Sorcerer","Warlock","Wizard"], castingTime: "1 action", range: "10 ft", components: ["V","S"], duration: "Up to 1 hour", description: "This spell is a minor magical trick. You can create one of the following effects: an instantaneous harmless sensory effect, light or snuff out a candle, clean or soil an object, chill/warm/flavor up to 1 cubic foot of nonliving material, make a color or mark appear, or create a nonmagical trinket that lasts until the end of your next turn." },
    { name: "Ray of Frost", level: 0, school: "Evocation", classes: ["Sorcerer","Wizard"], castingTime: "1 action", range: "60 ft", components: ["V","S"], duration: "Instantaneous", description: "A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn." },
    { name: "Sacred Flame", level: 0, school: "Evocation", classes: ["Cleric"], castingTime: "1 action", range: "60 ft", components: ["V","S"], duration: "Instantaneous", description: "Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw." },
    { name: "Shillelagh", level: 0, school: "Transmutation", classes: ["Druid"], castingTime: "1 bonus action", range: "Touch", components: ["V","S","M (mistletoe, a shamrock leaf, and a club or quarterstaff)"], duration: "1 minute", description: "The wood of a club or quarterstaff you are holding is imbued with nature's power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls, and the weapon's damage die becomes a d8." },
    { name: "Shocking Grasp", level: 0, school: "Evocation", classes: ["Sorcerer","Wizard"], castingTime: "1 action", range: "Touch", components: ["V","S"], duration: "Instantaneous", description: "Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 lightning damage, and it can't take reactions until the start of its next turn." },
    { name: "Spare the Dying", level: 0, school: "Necromancy", classes: ["Cleric"], castingTime: "1 action", range: "Touch", components: ["V","S"], duration: "Instantaneous", description: "You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs." },
    { name: "Thaumaturgy", level: 0, school: "Transmutation", classes: ["Cleric"], castingTime: "1 action", range: "30 ft", components: ["V"], duration: "Up to 1 minute", description: "You manifest a minor wonder, a sign of supernatural power. You can create one of the following effects: your voice booms up to three times as loud, flames flicker/brighten/dim/change color, cause harmless tremors, create an instantaneous sound, cause an unlocked door to fly open or slam shut, or alter the appearance of your eyes." },
    { name: "True Strike", level: 0, school: "Divination", classes: ["Bard","Sorcerer","Warlock","Wizard"], castingTime: "1 action", range: "30 ft", components: ["S"], duration: "Concentration, up to 1 round", description: "You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the target's defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn't ended." },
    { name: "Vicious Mockery", level: 0, school: "Enchantment", classes: ["Bard"], castingTime: "1 action", range: "60 ft", components: ["V"], duration: "Instantaneous", description: "You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn." },
    { name: "Green-Flame Blade", level: 0, school: "Evocation", classes: ["Sorcerer","Warlock","Wizard"], castingTime: "1 action", range: "Self (5-foot radius)", components: ["S","M (a melee weapon worth at least 1 sp)"], duration: "Instantaneous", description: "You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects, and you can cause green fire to leap from the target to a different creature of your choice that you can see within 5 feet of it. The second creature takes fire damage equal to your spellcasting ability modifier. This spell's damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d8 fire damage to the target on a hit, and the fire damage to the second creature increases to 1d8 + your spellcasting ability modifier. Both damage rolls increase by 1d8 at 11th level (2d8 and 2d8) and 17th level (3d8 and 3d8)." },
    { name: "Lightning Lure", level: 0, school: "Evocation", classes: ["Sorcerer","Warlock","Wizard"], castingTime: "1 action", range: "Self (15-foot radius)", components: ["V"], duration: "Instantaneous", description: "You create a lash of lightning energy that strikes at one creature of your choice that you can see within 15 feet of you. The target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and then take 1d8 lightning damage if it is within 5 feet of you. This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)." },
    { name: "Mind Sliver", level: 0, school: "Enchantment", classes: ["Sorcerer","Warlock","Wizard"], castingTime: "1 action", range: "60 ft", components: ["V"], duration: "1 round", description: "You drive a disorienting spike of psychic energy into the mind of one creature you can see within range. The target must succeed on an Intelligence saving throw or take 1d6 psychic damage and subtract 1d4 from the next saving throw it makes before the end of your next turn. This spell's damage increases by 1d6 when you reach certain levels: 5th level (2d6), 11th level (3d6), and 17th level (4d6)." }
  ],
  "1st": [
    { name: "Bless", level: 1, school: "Enchantment", classes: ["Cleric","Paladin"], castingTime: "1 action", range: "30 ft", components: ["V","S","M (a sprinkling of holy water)"], duration: "Concentration, up to 1 minute", description: "You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw." },
    { name: "Burning Hands", level: 1, school: "Evocation", classes: ["Sorcerer","Wizard"], castingTime: "1 action", range: "Self (15-foot cone)", components: ["V","S"], duration: "Instantaneous", description: "As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much on a successful one." },
    { name: "Charm Person", level: 1, school: "Enchantment", classes: ["Bard","Druid","Sorcerer","Warlock","Wizard"], castingTime: "1 action", range: "30 ft", components: ["V","S"], duration: "1 hour", description: "You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails, it is charmed by you until the spell ends or until you or your companions do anything harmful to it." },
    { name: "Cure Wounds", level: 1, school: "Evocation", classes: ["Bard","Cleric","Druid","Paladin","Ranger"], castingTime: "1 action", range: "Touch", components: ["V","S"], duration: "Instantaneous", description: "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs." },
    { name: "Detect Magic", level: 1, school: "Divination", classes: ["Bard","Cleric","Druid","Paladin","Ranger","Sorcerer","Wizard"], castingTime: "1 action", range: "Self", components: ["V","S"], duration: "Concentration, up to 10 minutes", description: "For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any." },
    { name: "Faerie Fire", level: 1, school: "Evocation", classes: ["Bard","Druid"], castingTime: "1 action", range: "60 ft", components: ["V"], duration: "Concentration, up to 1 minute", description: "Each object in a 20-foot cube within range is outlined in colored light. Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. Attack rolls against an affected creature or object have advantage if the attacker can see it, and the affected creature can't benefit from being invisible." },
    { name: "Guiding Bolt", level: 1, school: "Evocation", classes: ["Cleric"], castingTime: "1 action", range: "120 ft", components: ["V","S"], duration: "1 round", description: "A flash of light streaks toward a creature of your choice within range. Make a ranged spell attack. On a hit, the target takes 4d6 radiant damage, and the next attack roll made against this target before the end of your next turn has advantage." },
    { name: "Healing Word", level: 1, school: "Evocation", classes: ["Bard","Cleric","Druid"], castingTime: "1 bonus action", range: "60 ft", components: ["V"], duration: "Instantaneous", description: "A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs." },
    { name: "Magic Missile", level: 1, school: "Evocation", classes: ["Sorcerer","Wizard"], castingTime: "1 action", range: "120 ft", components: ["V","S"], duration: "Instantaneous", description: "You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4+1 force damage. The darts all strike simultaneously, and you can direct them to hit one creature or several." },
    { name: "Shield", level: 1, school: "Abjuration", classes: ["Sorcerer","Wizard"], castingTime: "1 reaction, which you take when you are hit by an attack or targeted by the magic missile spell", range: "Self", components: ["V","S"], duration: "1 round", description: "An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile." },
    { name: "Sleep", level: 1, school: "Enchantment", classes: ["Bard","Sorcerer","Wizard"], castingTime: "1 action", range: "90 ft", components: ["V","S","M (a pinch of fine sand, rose petals, or a cricket)"], duration: "1 minute", description: "This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points. Undead and creatures immune to being charmed aren't affected." },
    { name: "Thunderwave", level: 1, school: "Evocation", classes: ["Bard","Druid","Sorcerer","Wizard"], castingTime: "1 action", range: "Self (15-foot cube)", components: ["V","S"], duration: "Instantaneous", description: "A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, it takes half as much damage and isn't pushed." }
  ],
  "2nd": [
    { name: "Hold Person", level: 2, school: "Enchantment", classes: ["Bard","Cleric","Druid","Paladin","Sorcerer","Warlock","Wizard"], castingTime: "1 action", range: "60 ft", components: ["V","S","M (a small, straight piece of iron)"], duration: "Concentration, up to 1 minute", description: "Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends." },
    { name: "Invisibility", level: 2, school: "Illusion", classes: ["Bard","Sorcerer","Warlock","Wizard"], castingTime: "1 action", range: "Touch", components: ["V","S","M (an eyelash encased in gum arabic)"], duration: "Concentration, up to 1 hour", description: "A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person. The spell ends for a target that attacks or casts a spell." },
    { name: "Misty Step", level: 2, school: "Conjuration", classes: ["Sorcerer","Warlock","Wizard"], castingTime: "1 bonus action", range: "Self", components: ["V"], duration: "Instantaneous", description: "Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see." },
    { name: "Scorching Ray", level: 2, school: "Evocation", classes: ["Sorcerer","Wizard"], castingTime: "1 action", range: "120 ft", components: ["V","S"], duration: "Instantaneous", description: "You create three rays of fire and hurl them at targets within range. You can hurl them at one target or several. Make a ranged spell attack for each ray. On a hit, the target takes 2d6 fire damage." },
    { name: "Summon Beast", level: 2, school: "Conjuration", classes: ["Druid","Ranger"], castingTime: "1 action", range: "90 ft", components: ["V","S","M (a feather, tuft of fur, and fish tail inside a gilded acorn worth at least 200 gp)"], duration: "Concentration, up to 1 hour", description: "You call forth a bestial spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Bestial Spirit stat block. When you cast the spell, choose an environment: Air, Land, or Water. The creature resembles an animal of your choice that is native to the chosen environment. The creature disappears when it drops to 0 hit points or when the spell ends. The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you)." }
  ],
  "3rd": [
    { name: "Fireball", level: 3, school: "Evocation", classes: ["Sorcerer","Wizard"], castingTime: "1 action", range: "150 ft", components: ["V","S","M (a tiny ball of bat guano and sulfur)"], duration: "Instantaneous", description: "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much on a successful one." },
    { name: "Fly", level: 3, school: "Transmutation", classes: ["Sorcerer","Warlock","Wizard"], castingTime: "1 action", range: "Touch", components: ["V","S","M (a wing feather from any bird)"], duration: "Concentration, up to 10 minutes", description: "You touch a willing creature. The target gains a flying speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall." },
    { name: "Haste", level: 3, school: "Transmutation", classes: ["Sorcerer","Wizard"], castingTime: "1 action", range: "30 ft", components: ["V","S","M (a shaving of licorice root)"], duration: "Concentration, up to 1 minute", description: "Choose a willing creature that you can see within range. Until the spell ends, the target's speed is doubled, it gains a +2 bonus to AC, it has advantage on Dexterity saving throws, and it gains an additional action on each of its turns (one weapon attack only). When the spell ends, the target can't move or take actions until after its next turn." },
    { name: "Lightning Bolt", level: 3, school: "Evocation", classes: ["Sorcerer","Wizard"], castingTime: "1 action", range: "Self (100-foot line)", components: ["V","S","M (a bit of fur and a rod of amber, crystal, or glass)"], duration: "Instantaneous", description: "A stroke of lightning forming a line 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much on a successful one." },
    { name: "Intellect Fortress", level: 3, school: "Abjuration", classes: ["Sorcerer","Warlock","Wizard"], castingTime: "1 action", range: "30 ft", components: ["V"], duration: "Concentration, up to 1 hour", description: "For the duration, you or one willing creature you can see within range has resistance to psychic damage, as well as advantage on Intelligence, Wisdom, and Charisma saving throws. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd. The creatures must be within 30 feet of each other when you target them." },
    { name: "Spirit Shroud", level: 3, school: "Necromancy", classes: ["Paladin","Sorcerer","Warlock","Wizard"], castingTime: "1 bonus action", range: "Self", components: ["V","S"], duration: "Concentration, up to 1 minute", description: "You call forth spirits of the dead, which flit around you for the spell's duration. Until the spell ends, any attack you make deals 1d8 extra damage when you hit a creature within 10 feet of you. This damage is radiant, necrotic, or cold (your choice when you cast the spell). Any creature that takes this damage can't regain hit points until the start of your next turn. In addition, any creature of your choice that you can see that starts its turn within 10 feet of you has its speed reduced by 10 feet until the start of your next turn. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for every two slot levels above 3rd." },
    { name: "Summon Fey", level: 3, school: "Conjuration", classes: ["Druid","Ranger","Warlock","Wizard"], castingTime: "1 action", range: "90 ft", components: ["V","S","M (a gilded flower worth at least 300 gp)"], duration: "Concentration, up to 1 hour", description: "You call forth a fey spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Fey Spirit stat block. When you cast the spell, choose a mood: Fuming, Mirthful, or Tricksy. The creature resembles a fey creature of your choice marked by the chosen mood. The creature disappears when it drops to 0 hit points or when the spell ends. The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you)." }
  ],
  "4th": [
    { name: "Banishment", level: 4, school: "Abjuration", classes: ["Cleric","Paladin","Sorcerer","Warlock","Wizard"], castingTime: "1 action", range: "60 ft", components: ["V","S","M (an item distasteful to the target)"], duration: "Concentration, up to 1 minute", description: "You attempt to send one creature that you can see within range to another plane of existence. The target must succeed on a Charisma saving throw or be banished. If the target is native to your current plane, it is banished to a harmless demiplane. If it is native to a different plane, it is banished to its home plane." },
    { name: "Polymorph", level: 4, school: "Transmutation", classes: ["Bard","Druid","Sorcerer","Wizard"], castingTime: "1 action", range: "60 ft", components: ["V","S","M (a caterpillar cocoon)"], duration: "Concentration, up to 1 hour", description: "This spell transforms a creature that you can see within range into a new form. An unwilling creature must make a Wisdom saving throw to avoid the effect. The new form can be any beast whose challenge rating is equal to or less than the target's (or level). The target's game statistics are replaced by the statistics of the chosen beast." },
    { name: "Summon Aberration", level: 4, school: "Conjuration", classes: ["Sorcerer","Warlock","Wizard"], castingTime: "1 action", range: "90 ft", components: ["V","S","M (a pickled tentacle and an eyeball in a platinum-inlaid vial worth at least 400 gp)"], duration: "Concentration, up to 1 hour", description: "You call forth an aberrant spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Aberrant Spirit stat block. When you cast the spell, choose Beholderkin, Slaad, or Star Spawn. The creature resembles an aberration of that kind. The creature disappears when it drops to 0 hit points or when the spell ends. The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you)." },
    { name: "Summon Construct", level: 4, school: "Conjuration", classes: ["Sorcerer","Wizard"], castingTime: "1 action", range: "90 ft", components: ["V","S","M (an ornate stone and metal lockbox worth at least 400 gp)"], duration: "Concentration, up to 1 hour", description: "You call forth the spirit of a construct. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Construct Spirit stat block. When you cast the spell, choose a material: Clay, Metal, or Stone. The creature resembles a golem or a modron (your choice) made of the chosen material. The creature disappears when it drops to 0 hit points or when the spell ends. The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you)." },
    { name: "Summon Elemental", level: 4, school: "Conjuration", classes: ["Druid","Sorcerer","Wizard"], castingTime: "1 action", range: "90 ft", components: ["V","S","M (air, a pebble, ash, and water inside a gold-inlaid vial worth at least 400 gp)"], duration: "Concentration, up to 1 hour", description: "You call forth an elemental spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Elemental Spirit stat block. When you cast the spell, choose an element: Air, Earth, Fire, or Water. The creature resembles a bipedal form wreathed in the chosen element. The creature disappears when it drops to 0 hit points or when the spell ends. The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you)." }
  ],
  "5th": [
    { name: "Cone of Cold", level: 5, school: "Evocation", classes: ["Sorcerer","Wizard"], castingTime: "1 action", range: "Self (60-foot cone)", components: ["V","S","M (a small crystal or glass cone)"], duration: "Instantaneous", description: "A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a Constitution saving throw. A creature takes 8d8 cold damage on a failed save, or half as much on a successful one. A creature killed by this spell becomes a frozen statue until it thaws." },
    { name: "Raise Dead", level: 5, school: "Necromancy", classes: ["Cleric","Paladin"], castingTime: "1 hour", range: "Touch", components: ["V","S","M (a diamond worth at least 500 gp, which the spell consumes)"], duration: "Instantaneous", description: "You return a dead creature you touch to life, provided that it has been dead no longer than 10 days. If the creature's soul is both willing and at liberty to rejoin the body, the creature returns to life with 1 hit point. This spell also neutralizes any poisons and cures nonmagical diseases that affected the creature at the time it died." },
    { name: "Summon Celestial", level: 5, school: "Conjuration", classes: ["Cleric","Paladin"], castingTime: "1 action", range: "90 ft", components: ["V","S","M (a golden reliquary worth at least 500 gp)"], duration: "Concentration, up to 1 hour", description: "You call forth a celestial spirit. It manifests in an angelic form in an unoccupied space that you can see within range. This corporeal form uses the Celestial Spirit stat block. When you cast the spell, choose Avenger or Defender. The creature disappears when it drops to 0 hit points or when the spell ends. The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you)." }
  ],
  "6th": [
    { name: "Summon Fiend", level: 6, school: "Conjuration", classes: ["Warlock","Wizard"], castingTime: "1 action", range: "90 ft", components: ["V","S","M (humanoid blood inside a ruby vial worth at least 600 gp)"], duration: "Concentration, up to 1 hour", description: "You call forth a fiendish spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Fiendish Spirit stat block. When you cast the spell, choose Demon, Devil, or Yugoloth. The creature disappears when it drops to 0 hit points or when the spell ends. The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you)." },
    { name: "Tasha's Otherworldly Guise", level: 6, school: "Transmutation", classes: ["Sorcerer","Wizard"], castingTime: "1 bonus action", range: "Self", components: ["V","S","M (an object engraved with a symbol of the Outer Planes, worth at least 500 gp)"], duration: "Concentration, up to 1 minute", description: "You draw on the magic of the Lower Planes or Upper Planes (your choice) to transform yourself. You gain the following benefits: immunity to fire and poison (Lower) or radiant and necrotic (Upper); immunity to poisoned (Lower) or charmed (Upper); flying speed 40 ft.; +2 bonus to AC; all weapon attacks are magical and can use your spellcasting ability modifier; you can attack twice instead of once when you take the Attack action." }
  ]
};

const classSpellLists = {
  "Artificer": [...spellsDatabase.Cantrips.filter(s => s.classes.includes("Artificer")), ...spellsDatabase["1st"].filter(s => s.classes.includes("Artificer")), ...spellsDatabase["2nd"].filter(s => s.classes.includes("Artificer")), ...spellsDatabase["3rd"].filter(s => s.classes.includes("Artificer")), ...spellsDatabase["4th"].filter(s => s.classes.includes("Artificer")), ...spellsDatabase["5th"].filter(s => s.classes.includes("Artificer"))],
  "Bard": [...spellsDatabase.Cantrips.filter(s => s.classes.includes("Bard")), ...spellsDatabase["1st"].filter(s => s.classes.includes("Bard")), ...spellsDatabase["2nd"].filter(s => s.classes.includes("Bard")), ...spellsDatabase["3rd"].filter(s => s.classes.includes("Bard")), ...spellsDatabase["4th"].filter(s => s.classes.includes("Bard")), ...spellsDatabase["5th"].filter(s => s.classes.includes("Bard")), ...(spellsDatabase["6th"]||[]).filter(s => s.classes.includes("Bard"))],
  "Cleric": [...spellsDatabase.Cantrips.filter(s => s.classes.includes("Cleric")), ...spellsDatabase["1st"].filter(s => s.classes.includes("Cleric")), ...spellsDatabase["2nd"].filter(s => s.classes.includes("Cleric")), ...spellsDatabase["3rd"].filter(s => s.classes.includes("Cleric")), ...spellsDatabase["4th"].filter(s => s.classes.includes("Cleric")), ...spellsDatabase["5th"].filter(s => s.classes.includes("Cleric")), ...(spellsDatabase["6th"]||[]).filter(s => s.classes.includes("Cleric"))],
  "Druid": [...spellsDatabase.Cantrips.filter(s => s.classes.includes("Druid")), ...spellsDatabase["1st"].filter(s => s.classes.includes("Druid")), ...spellsDatabase["2nd"].filter(s => s.classes.includes("Druid")), ...spellsDatabase["3rd"].filter(s => s.classes.includes("Druid")), ...spellsDatabase["4th"].filter(s => s.classes.includes("Druid")), ...spellsDatabase["5th"].filter(s => s.classes.includes("Druid")), ...(spellsDatabase["6th"]||[]).filter(s => s.classes.includes("Druid"))],
  "Paladin": [...spellsDatabase["1st"].filter(s => s.classes.includes("Paladin")), ...spellsDatabase["2nd"].filter(s => s.classes.includes("Paladin")), ...spellsDatabase["3rd"].filter(s => s.classes.includes("Paladin")), ...spellsDatabase["4th"].filter(s => s.classes.includes("Paladin")), ...spellsDatabase["5th"].filter(s => s.classes.includes("Paladin"))],
  "Ranger": [...spellsDatabase["1st"].filter(s => s.classes.includes("Ranger")), ...spellsDatabase["2nd"].filter(s => s.classes.includes("Ranger")), ...spellsDatabase["3rd"].filter(s => s.classes.includes("Ranger")), ...spellsDatabase["4th"].filter(s => s.classes.includes("Ranger")), ...spellsDatabase["5th"].filter(s => s.classes.includes("Ranger"))],
  "Sorcerer": [...spellsDatabase.Cantrips.filter(s => s.classes.includes("Sorcerer")), ...spellsDatabase["1st"].filter(s => s.classes.includes("Sorcerer")), ...spellsDatabase["2nd"].filter(s => s.classes.includes("Sorcerer")), ...spellsDatabase["3rd"].filter(s => s.classes.includes("Sorcerer")), ...spellsDatabase["4th"].filter(s => s.classes.includes("Sorcerer")), ...spellsDatabase["5th"].filter(s => s.classes.includes("Sorcerer")), ...(spellsDatabase["6th"]||[]).filter(s => s.classes.includes("Sorcerer"))],
  "Warlock": [...spellsDatabase.Cantrips.filter(s => s.classes.includes("Warlock")), ...spellsDatabase["1st"].filter(s => s.classes.includes("Warlock")), ...spellsDatabase["2nd"].filter(s => s.classes.includes("Warlock")), ...spellsDatabase["3rd"].filter(s => s.classes.includes("Warlock")), ...spellsDatabase["4th"].filter(s => s.classes.includes("Warlock")), ...spellsDatabase["5th"].filter(s => s.classes.includes("Warlock")), ...(spellsDatabase["6th"]||[]).filter(s => s.classes.includes("Warlock"))],
  "Wizard": [...spellsDatabase.Cantrips.filter(s => s.classes.includes("Wizard")), ...spellsDatabase["1st"].filter(s => s.classes.includes("Wizard")), ...spellsDatabase["2nd"].filter(s => s.classes.includes("Wizard")), ...spellsDatabase["3rd"].filter(s => s.classes.includes("Wizard")), ...spellsDatabase["4th"].filter(s => s.classes.includes("Wizard")), ...spellsDatabase["5th"].filter(s => s.classes.includes("Wizard")), ...(spellsDatabase["6th"]||[]).filter(s => s.classes.includes("Wizard"))]
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
let chosenClassSkills = [];
let chosenRaceBonusSkills = [];
let chosenHighElfCantrip = "";
let pendingOpenWorldConfig = null;
let pendingStoryCampaign = null;

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
const storyCampaigns = [];

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
  for (let i=1; i<=5; i++) {
    const stepDiv = document.getElementById(`wizard-step-${i}`);
    if (stepDiv) stepDiv.style.display = i === wizardStep ? "block" : "none";
  }
  document.querySelectorAll(".wizard-steps .step").forEach((step, idx) => {
    if (idx+1 === wizardStep) step.classList.add("active");
    else step.classList.remove("active");
  });
  document.getElementById("stepIndicator").innerText = `Step ${wizardStep} of 5`;
  const backBtn = document.getElementById("wizardBackBtn"), nextBtn = document.getElementById("wizardNextBtn"), finishBtn = document.getElementById("wizardFinishBtn");
  backBtn.disabled = (wizardStep === 1);
  if (wizardStep === 5) { nextBtn.style.display = "none"; finishBtn.style.display = "inline-block"; generateReview(); }
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
function finishWizard() {
  const racialBonuses = getCurrentRacialBonuses();
  const charClass = classes[selectedClass];
  const baseHp = charClass ? (charClass.hitDie === "d6"?6: charClass.hitDie === "d8"?8: charClass.hitDie === "d10"?10:12) : 8;
  const conMod = calculateModifier(finalScores.Constitution);
  const maxHp = baseHp + conMod;
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
    xp: 0,
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
    newCampaign = {
      id: Date.now().toString(),
      name: config.name,
      lastPlayed: new Date().toISOString().slice(0,10),
      type: 'openworld',
      config: { location: config.location, tone: config.tone },
      description: "The world of Al'mundi is yours to explore.",
      initialHook: config.initialHook,
      characterId: character.id
    };
    campaigns.push(newCampaign);
    pendingOpenWorldConfig = null;
  } else if (wizardContext && wizardContext.type === 'story' && pendingStoryCampaign) {
    newCampaign = {
      id: Date.now().toString(),
      name: pendingStoryCampaign.name,
      lastPlayed: new Date().toISOString().slice(0,10),
      type: 'story',
      refId: pendingStoryCampaign.id,
      description: pendingStoryCampaign.description || '',
      initialHook: pendingStoryCampaign.description || '',
      characterId: character.id
    };
    campaigns.push(newCampaign);
    pendingStoryCampaign = null;
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
  
  // If this is a truly fresh campaign with no persisted chat history and has an initial hook, send it
  if (campaign && !storedChat && campaign.initialHook) {
    setTimeout(() => {
      appendDMMessage(`*${campaign.initialHook}*\n\nHow would you like to proceed, adventurer?`);
      chatHistory.push({ role: 'assistant', content: campaign.initialHook });
      saveChatHistory();
    }, 300);
  }
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
  const openWorld = { type: "openworld", id: "openworld", name: "Al'mundi", setting: "Al'mundi", tone: "Choose tone at creation", description: "The world of Al'mundi is yours to explore. No fixed main plot—the AI Dungeon Master creates dynamic adventures as you go.", toneClass: "tone-neutral" };
  campaignListDiv.appendChild(createCampaignCard(openWorld, true));
}
function createCampaignCard(campaign, isOpenWorld = false) {
  const card = document.createElement('div'); card.className = 'campaign-card';
  const badge = document.createElement('div'); badge.className = `card-badge ${isOpenWorld ? 'open-world' : ''}`; badge.textContent = isOpenWorld ? '🌍 Open World' : '📜 Story Campaign'; card.appendChild(badge);
  const name = document.createElement('div'); name.className = 'campaign-name'; name.textContent = campaign.name; card.appendChild(name);
  const setting = document.createElement('div'); setting.className = 'campaign-setting'; setting.textContent = `Setting: ${campaign.setting}`; card.appendChild(setting);
  const tone = document.createElement('div'); tone.className = `campaign-tone ${campaign.toneClass || 'tone-neutral'}`; tone.textContent = typeof campaign.tone === 'string' ? campaign.tone : 'Narrative Tone: ' + campaign.tone; card.appendChild(tone);
  const desc = document.createElement('div'); desc.className = 'campaign-description'; desc.textContent = campaign.description; card.appendChild(desc);
  const button = document.createElement('button'); button.className = 'card-button'; button.textContent = 'Start Adventure';
  button.addEventListener('click', (e) => { e.stopPropagation(); if (isOpenWorld) openOpenWorldConfigModal(); else startStoryCampaign(campaign); });
  card.appendChild(button);
  return card;
}
function startStoryCampaign(story) { closeCampaignSelectionModal(); pendingStoryCampaign = story; wizardContext = { type: 'story' }; openCharacterCreationWizard(); }
function openOpenWorldConfigModal() { closeCampaignSelectionModal(); if (!configModal) return; document.getElementById('owSessionName').value = "Al'mundi"; document.getElementById('owStartLocation').value = 'Random'; document.getElementById('owTone').value = 'Heroic'; document.getElementById('owNameError').innerText = ''; configModal.style.display = 'flex'; setTimeout(() => configModal.classList.add('show'), 10); }
function closeOpenWorldConfigModal() { if (!configModal) return; configModal.classList.remove('show'); setTimeout(() => { configModal.style.display = 'none'; }, 200); }
function generateAIHook(location, tone) {
  const hooks = { 'Forest of Allanar': `Ancient trees whisper secrets in the Forest of Allanar, where fey creatures and forgotten ruins lie hidden...`, 'Khigvorda Mountains': `The Khigvorda Mountains hold veins of precious ore and deeper, darker tunnels where something stirs...`, 'The Fading Swamp': `Miasma clings to the Fading Swamp, a place where the veil between worlds is thin and strange lights flicker at night...`, 'Starview Plains': `Across the open Starview Plains, nomadic tribes trade tales of a falling star that brought something otherworldly...`, "The Merchant's Pass": `The Merchant's Pass is a vital trade route, but bandits and a recent monster attack have brought commerce to a halt...`, 'random town': `A bustling town square, a guarded gate, and rumors of trouble beyond the walls draw your attention...`, 'random village': `A quiet hamlet where the locals eye you with a mix of curiosity and concern—something is amiss...`, 'Random': `Rumors swirl of an ancient ruin...` };
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
  pendingOpenWorldConfig = { name, location, tone, initialHook: generateAIHook(location, tone) };
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
  const customItems = (currentCharacter.equipment?.custom || "").split("\n").filter(l => l.trim());
  const tbody = document.getElementById("inventoryBody");
  if (tbody) {
    tbody.innerHTML = customItems.map((item, idx) =>
      `<tr>
        <td><input type="text" class="inv-name sheet-input" value="${escapeHtml(item)}"></td>
        <td><input type="number" class="inv-qty sheet-input small" value="1" min="1"></td>
        <td><input type="text" class="inv-weight sheet-input small" placeholder="lb"></td>
        <td><input type="text" class="inv-notes sheet-input" placeholder="Notes"></td>
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
  currentCharacter.equipment.custom = Array.from(document.querySelectorAll("#inventoryBody .inv-name"))
    .map(inp => inp.value).filter(v => v.trim()).join("\n");
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
  const modals = [campaignModal, selectionModal, configModal, confirmModal, characterSheetModal, charCreationWizard, settingsModal, questModal, questEditModal, npcModal, npcFormModal, summaryModal, dmGuideModal, combatModal, deathModal, hitDiceModal, levelUpModal, cropModal];
  modals.forEach(modal => { if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) { if (modal === campaignModal) closeCampaignModal(); else if (modal === selectionModal) closeCampaignSelectionModal(); else if (modal === configModal) closeOpenWorldConfigModal(); else if (modal === confirmModal) closeConfirmModal(); else if (modal === characterSheetModal) closeCharacterSheetModal(); else if (modal === charCreationWizard) closeWizard(); else if (modal === settingsModal) closeSettingsModal(); else if (modal === questModal) closeQuestModal(); else if (modal === questEditModal) closeQuestEdit(); else if (modal === npcModal) closeNPCDirectory(); else if (modal === npcFormModal) closeNPCForm(); else if (modal === summaryModal) closeCampaignSummaryModal(); else if (modal === dmGuideModal) closeDMGuideModal(); else if (modal === combatModal) closeCombatTracker(); else if (modal === deathModal) closeDeathSaveModal(); else if (modal === hitDiceModal) { hitDiceModal.classList.remove('show'); setTimeout(function() { hitDiceModal.style.display = 'none'; }, 200); } else if (modal === levelUpModal) { levelUpModal.classList.remove('show'); setTimeout(function() { levelUpModal.style.display = 'none'; }, 200); } else if (modal === cropModal) closeCropModal(); } }); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { if (confirmModal && confirmModal.style.display === 'flex') closeConfirmModal(); else if (configModal && configModal.style.display === 'flex') closeOpenWorldConfigModal(); else if (selectionModal && selectionModal.style.display === 'flex') closeCampaignSelectionModal(); else if (campaignModal && campaignModal.style.display === 'flex') closeCampaignModal(); else if (characterSheetModal && characterSheetModal.style.display === 'flex') closeCharacterSheetModal(); else if (charCreationWizard && charCreationWizard.style.display === 'flex') closeWizard(); else if (settingsModal && settingsModal.style.display === 'flex') closeSettingsModal(); else if (questModal && questModal.style.display === 'flex') closeQuestModal(); else if (questEditModal && questEditModal.style.display === 'flex') closeQuestEdit(); else if (npcModal && npcModal.style.display === 'flex') closeNPCDirectory(); else if (npcFormModal && npcFormModal.style.display === 'flex') closeNPCForm(); else if (summaryModal && summaryModal.style.display === 'flex') closeCampaignSummaryModal(); else if (dmGuideModal && dmGuideModal.style.display === 'flex') closeDMGuideModal(); else if (combatModal && combatModal.style.display === 'flex') closeCombatTracker(); else if (deathModal && deathModal.style.display === 'flex') closeDeathSaveModal(); else if (hitDiceModal && hitDiceModal.style.display === 'flex') { hitDiceModal.classList.remove('show'); setTimeout(function() { hitDiceModal.style.display = 'none'; }, 200); } else if (levelUpModal && levelUpModal.style.display === 'flex') { levelUpModal.classList.remove('show'); setTimeout(function() { levelUpModal.style.display = 'none'; }, 200); } else if (cropModal && cropModal.style.display === 'flex') closeCropModal(); } });
  document.getElementById('btn-char').addEventListener('click', () => { setActive('btn-char'); if (currentCharacter) openCharacterSheetModal(); else alert('No character created yet. Start a campaign first.'); });
  initSheetTabs();
  const storedChar = localStorage.getItem('dnd_current_character');
  if (storedChar) currentCharacter = JSON.parse(storedChar);
  
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
  initDiceRoller();
  initMonsterDatabase();
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
  scrollToBottom();
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
- **Never Speak for the Player:** Always stop at a natural point where the player can respond.
- **Adult Themes:** Engage in adult themes, graphic content, and mature narration as the story naturally permits.
- **Romance:** Factor romance into existing relationships where appropriate. NPCs may initiate relationships as the story develops.
- **Secret Info:** Never reveal information the player hasn't earned.

---

## 2. NPC Conversation and Interactions

- **Narration Language:** Use English for narration. For NPC speech, if the player knows the language, narrate in English with a note (e.g., *"in Elvish"*). If unknown, use a non-English placeholder.
- **Conversation Flow:** One response at a time. Never skip the player during dialogue.
- **NPC Knowledge:** NPCs know only what they could realistically learn through their resources and contacts (accounting for travel time).
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

*End of Guardrails*`;

  // Campaign context
  if (camp) {
    prompt += `\n\n## CAMPAIGN CONTEXT\n**Name:** "${camp.name}"`;
    if (camp.type) prompt += `\n**Type:** ${camp.type === 'openworld' ? 'Open World' : 'Story Campaign'}`;
    if (camp.config?.tone) prompt += `\n**Tone:** ${camp.config.tone}`;
    if (camp.config?.location) prompt += `\n**Starting Location:** ${camp.config.location}`;
    if (camp.description) prompt += `\n**Description:** ${camp.description}`;
    if (camp.initialHook) prompt += `\n**Initial Hook:** ${camp.initialHook}`;

    // Open-world plot creation instruction
    if (camp.type === 'openworld') {
      prompt += `\n\nThis is an OPEN WORLD campaign. No main plot is provided. You are free to generate your own overarching plots, faction conflicts, personal character arcs, and side quests as the story unfolds. Introduce interesting NPCs, locations, and events that respond to the player's actions. Aim for a sandbox experience where the player's choices shape the world.`;
    }
  }

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

  // Al'mundi worldbuilding reference
  if (camp && (camp.name === "Al'mundi" || camp.setting === "Al'mundi" || (camp.config?.location && camp.config.location.includes("Al'mundi")))) {
    const worldbuilding = loadWorldbuilding();
    if (worldbuilding) {
      prompt += `\n\n## WORLD SETTING: Al'mundi\n\nBelow is the worldbuilding reference for the continent of Al'mundi. Use this to inform your descriptions, NPCs, locations, and plot hooks.\n\n${worldbuilding}`;
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
  const combatStartRegex = /<!--\s*combat start\s+initiative="([^"]+)"\s+enemies='([^']+)'\s*-->/;
  const combatStartMatch = result.match(combatStartRegex);
  if (combatStartMatch) {
    try {
      const initiativeStr = combatStartMatch[1];
      const enemies = JSON.parse(combatStartMatch[2]);
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
  saveCharacter();
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
  } else {
    asiSection.style.display = "none";
  }
  const spellsSection = document.getElementById("levelUpSpellsSection");
  const cls = classes[currentCharacter.class];
  if (cls && cls.spellcasting) {
    spellsSection.style.display = "block";
    document.getElementById("levelUpSpellChoices").innerHTML = "<p class=\"death-subtitle\">Spell slots updated. Check your Spells tab to add new spells.</p>";
  } else {
    spellsSection.style.display = "none";
  }
  modal.style.display = "flex";
  setTimeout(function() { modal.classList.add("show"); }, 10);
}

function confirmLevelUp() {
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
