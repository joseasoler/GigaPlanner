//To do: add bonuses to derrAts
const standingStoneData = [
	//0
{name: "None", group: "", 
description: "", 
bonus: ""},
	//1
{name: "Warrior", group: "The Warrior is the first Guardian Constellation and he protects his charges during their seasons. The Warrior's own season is Last Seed when his strength is needed for the harvest.", 
description: "Those under the sign of the Warrior have increased strength and endurance.", 
bonus: "Health increases by 40, all weapons deal 10% more damage, armor penetration with all weapons is increased by 5, unarmed strikes do 5 additional damage."},
	//2
{name: "Lady", group: "The Lady is one of the Warrior's Charges and her season is Heartfire.", 
description: "Those under the sign of the Lady have increased vitality.", 
bonus: "Health and stamina increase by 20, health and stamina regenerate 40 pecent faster, you can run and swim without exhaustion."},
	//3
{name: "Lord", group: "The Lord's season is First Seed and he oversees all of Tamriel during the planting.", 
description: "The Stone of the Lord grants natural regeneration and weakened hostile spells, but also afflicts them with the Trollkin curse.", 
bonus: "10% magic resist, 100 armor rating, 25% weakness to fire."},
	//4
{name: "Steed", group: "The Steed is one of the Warrior's Charges, and her season is Mid Year.", 
description: "Those under the sign of the Steed have increased speed.", 
bonus: "Movement is 10 percent faster, carry weight increases by 25, stamina increased by 40, most slow effects don't affect you."},
	//5
{name: "Mage", group: "The Mage is a Guardian Constellation whose season is Rain's Hand when magicka was first used by men.", 
description: "Those under the sign of the Mage have increased magicka reserves and cast more potent spells.", 
bonus: "Magicka increases by 75, spells are 20% stronger."},
	//6
{name: "Apprentice", group: "The Apprentice's season is Sun's Height.", 
description: "Those under the sign of the Apprentice have increased magicka and faster regeneration, but also have a weakness to magic.", 
bonus: "Magicka increases by 100, magicka regenerates 300% faster, magic deals 20% more damage to you."},
	//7
{name: "Atronach", group: "The Atronach is one of the Mage's Charges. Its season is Sun's Dusk", 
description: "Those under the sign of the Atronach have deep reserves of magicka and can absorb harmful magic, but cannot generate magicka on their own.", 
bonus: "Magicka increases by 450, you do not lose magicka when hit, increases chance to absorb magicka from hostile spells by 30%, you cannot regenerate magicka by yourself or non-magical sources."},
	//8
{name: "Ritual", group: "The Ritual is one of the Mage's Charges and its season is Morning Star.", 
description: "Those under the sign of the Ritual have various abilities depending on the aspect of the moons and Divines.", 
bonus: "You receive Blessed Fire, Dead Horde and Salvation powers."},
	//9
{name: "Thief", group: "The Thief is the last Guardian Constellation, and her season is the darkest month of Evening Star.", 
description: "Those under the sign of the Thief have increased dexterity.", 
bonus: "Lockpicks are 30% more durable, pickpocketing is 30% more likely to succeed, you are 30% harder to detect, you can sneak without proficiency, increases chance to critical hit by 10%, increases chance to avoid physical damage by 10%."},
	//10
{name: "Lover", group: "The Lover is one of the Thief's Charges and her season is SUn's Dawn", 
description: "Those under the sign of the Lover have increases agility and natural charm.", 
bonus: "Stamina increases by 30, increases chance to avoid physical damage by 25%, speek skill is 25 higher, shout cooldown is reduced by 5%."},
	//11
{name: "Shadow", group: "The Shadow's season is Second Seed.", 
description: "Those under the sign of the Shadow are naturally skilled at stealth and can hide in the shadows once a day.", 
bonus: "You are 50% harder to detect, you can sneak without proficiency, movement noise is 30% quieter, you receive Moonshadow power."},
	//12
{name: "Tower", group: "The Tower is one of the Thief's Charges and its season is Frostfall.", 
description: "Those under the sign of the Tower have nimble hands and a knack for finding fortune.", 
bonus: "Prices are 20% more favorable, 50 more carry weight, lockpicks are 40% more durable, lockpicking expertise is increased by 4, you can pick effortless locks in plain sight without being noticed."},
	//13
{name: "Serpent",group: "The Serpent wanders about in the sky and has no Season, though its motions are predictable to a degree.", 
description: "Those under the sign of the Serpent have improved precision, resistance to poison and paralysis, and can cast Serpent's Curse once a day.", 
bonus: "Armor penetration with all weapons is increased by 10, poison deals 50% less damage to you, most paralysis effects don't adversely affect you, you receive Serpent's Curse power."}
];