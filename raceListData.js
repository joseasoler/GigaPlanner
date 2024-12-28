//to do - add starting move speed to speed bonus, add racial bonus


const raceListData = [
	{ 
	 name: "Argonian", 
     startingHMS: [100,100,100], 
     startingCW: 120, speedBonus: 0,
     hmsBonus: [0,0,0], 
     startingHMSRegen: [0.20,1.10,1.60], 
     unarmedDam: 32,
     startingSkills : [10,       //Smithing
                       10,       //Heavy Armor
                       10,       //Block
                       10,       //Two-handed
                       15,       //One-handed
                       10,       //Marksman
                       20,       //Evasion
                       15,       //Sneak
                       15,       //Wayfarer
                       10,       //Finesse
                       10,       //Speech
                       20,       //Alchemy
                       10,       //Illusion
                       10,       //Conjuration
                       10,       //Destruction
                       15,       //Restoration
                       10,       //Alteration
                       10,       //Enchanting
                        1,       //Destiny
                        0],		 // Traits
	 desc: "Argonians are the reptilian denizens of Black Marsh. Years of defending their borders have made them experts in stealth and evasion, and their natural abilities make them equally at home in water and on land. They are resistant to diseases and poisons and enjoy raw meat. Their Histskin allows them to quickly heal their wounds.",
	 bonus: "Claws: +20 Unarmed Damage. <br>Histskin: +1 Health per second, potions are 10% stronger and last 10% longer. <br> Raw Diet: Can eat raw meat without risk of disease. <br> Resist Poison and Disease: Poisons deal 75% less damage and 75% less likely to contract disease. <br>Strong Stomach: Can eat raw food without food poisoning. <br>Waterbreathing: Can breathe underwater, swim 20% faster and swimming is 75% less exhausting.",
    },
    {
     name: "Breton", 
     startingHMS: [90,110,100], 
     startingCW: 110, speedBonus: 0,
     hmsBonus: [0,0,0], 
     startingHMSRegen: [0.15,1.15,1.60], 
     unarmedDam: 12,
     startingSkills : [10,       //Smithing
                       10,       //Heavy Armor
                       10,       //Block
                       10,       //Two-handed
                       10,       //One-handed
                       10,       //Marksman
                       10,       //Evasion
                       10,       //Sneak
                       10,       //Wayfarer
                       10,       //Finesse
                       15,       //Speech
                       15,       //Alchemy
                       15,       //Illusion
                       25,       //Conjuration
                       10,       //Destruction
                       15,       //Restoration
                       10,       //Alteration
                       15,       //Enchanting
                        1,       //Destiny
                        0],		 // Traits
	 desc: "Bretons, the inhabitants of the province of High Rock, are the human descendants of the Elves and the ancient race of the Nedes. While Bretons are physically weak, they can tap on magicka more than any other human race and they are particularly capable in the school of Conjuration. Their magic resistance blocks one fifth of incoming spell damage and their Dragonskin ability can fully absorb harmful magic by chance.",
	 bonus: "Dragonskin: Increases chance to absorb the magicka from hostile spells by 10%. <br> Magic Resistance: Magic Damage deals 20% less damage to you.",
    },
    {
     name: "Dunmer", 
     startingHMS: [100,100,100], 
     startingCW: 120, speedBonus: 0,
     hmsBonus: [0,0,0], 
     startingHMSRegen: [0.20,1.10,1.60], 
     unarmedDam: 13,
     startingSkills : [10,       //Smithing
                       10,       //Heavy Armor
                       10,       //Block
                       10,       //Two-handed
                       20,       //One-handed
                       10,       //Marksman
                       15,       //Evasion
                       15,       //Sneak
                       10,       //Wayfarer
                       10,       //Finesse
                       10,       //Speech
                       10,       //Alchemy
                       15,       //Illusion
                       15,       //Conjuration
                       20,       //Destruction
                       10,       //Restoration
                       10,       //Alteration
                       10,       //Enchanting
                        1,       //Destiny
                        0],      //Traits
	 desc: "The Dunmer, or Dark Elves, are the ash-skinned, red-eyed, Elven people of Vvardenfell. They combine powerful intellects with strong and agile physiques, producing excellent warriors and evokers. They are extremely resistant to fire, blocking half of incoming fire damage. They're particularly skilled in Destruction and Conjuration magic, and can imbue more power into associated spells.",
	 bonus: "Ashlander: Destruction and Conjuration spells are 10% more powerful and last longer. <br> Resist Fatigue: 15% resistance to fatigue. <br> Resist Fire: Fire damage deals 50% less damage to you.",
    },
    {
     name: "Altmer", 
     startingHMS: [90,120,90], 
     startingCW: 110, speedBonus: 0,
     hmsBonus: [0,30,0], 
     startingHMSRegen: [0.15,1.20,1.55], 
     unarmedDam: 12,
     startingSkills : [10,       //Smithing
                       10,       //Heavy Armor
                       10,       //Block
                       10,       //Two-handed
                       10,       //One-handed
                       10,       //Marksman
                       10,       //Evasion
                       10,       //Sneak
                       10,       //Wayfarer
                       10,       //Finesse
                       10,       //Speech
                       10,       //Alchemy
                       15,       //Illusion
                       15,       //Conjuration
                       20,       //Destruction
                       15,       //Restoration
                       20,       //Alteration
                       15,       //Enchanting
                        1,       //Destiny
                        0],		 // Traits
	 desc: "The Altmer of Summerset Isle are called 'High' Elves in the Empire, describing both their physical appearance and their snobbish personality. The arcane ability of High Elves surpasses all other races in Tamriel. Their Highborn ability grants them increased magicka and spell power. They are weak in physical combat, however, and their magic affinity makes them more susceptible to elemental damage.",
	 bonus: "Highborn: Magicka increases by 30, magicka regenerates 30% faster, spells are 5% more powerful and last longer, you are 50% less likely to contract diseases. <br> Resist Fatigue: 15% resistance to fatigue. <br> Weakness to Elements: Fire, frost and shock deal 25% more damage to you.",
    },
    {
     name: "Imperial", 
     startingHMS: [100,100,100], 
     startingCW: 120, speedBonus: 0,
     hmsBonus: [10,10,10], 
     startingHMSRegen: [0.20,1.10,1.60], 
     unarmedDam: 13,
     startingSkills : [10,       //Smithing
                       15,       //Heavy Armor
                       15,       //Block
                       10,       //Two-handed
                       15,       //One-handed
                       10,       //Marksman
                       10,       //Evasion
                       10,       //Sneak
                       10,       //Wayfarer
                       10,       //Finesse
                       35,       //Speech
                       10,       //Alchemy
                       10,       //Illusion
                       10,       //Conjuration
                       15,       //Destruction
                       20,       //Restoration
                       10,       //Alteration
                       10,       //Enchanting
                        1,       //Destiny
                        0],		 // Traits	
	 desc: "The cosmopolitan citizens of Cyrodiil are descended from the founders of the glorious Empire that has influenced Tamriel's history throughout the eras. Imperials are talented leaders and traders among society, skilled in both magic and combat thanks to martial and academic education of the schools of Cyrodiil. Their leadership can encourage their followers to fight well in combat.",
	 bonus: "Imperial Diversity: Health, magicka and stamina increase by 10 and regenerate 10% faster. <br> Voice of the Emperor: Speech skill is 15 higher, prices are 15% more favorable, magicka and stamina of nearby allies increase by 30.",
    },
    {
     name: "Khajiit", 
     startingHMS: [90,90,120], 
     startingCW: 110, speedBonus: 9,
     hmsBonus: [0,0,0], 
     startingHMSRegen: [0.15,1.05,1.70], 
     unarmedDam: 32,
     startingSkills : [10,       //Smithing
                       10,       //Heavy Armor
                       10,       //Block
                       10,       //Two-handed
                       15,       //One-handed
                       10,       //Marksman
                       15,       //Evasion
                       25,       //Sneak
                       15,       //Wayfarer
                       15,       //Finesse
                       10,       //Speech
                       15,       //Alchemy
                       10,       //Illusion
                       10,       //Conjuration
                       10,       //Destruction
                       10,       //Restoration
                       10,       //Alteration
                       10,       //Enchanting
                        1,       //Destiny
                        0],		 // Traits	
	 desc: "The Khajiit are a race of feline humanoids hailing from the province of Elsweyr, well-known as great merchants but also as smugglers and thieves. They are very fast and outrun all other races which, combined with a high stamina reserve, makes them fearsome skirmishers. However, they are seldom gifted with the skill to harness magical forces. All Khajiit can see in the dark at will and eat raw meat, and their sharp claws are as lethal as knives.",
	 bonus: "Claws: +20 Unarmed Damage. <br> Fingersmith: Lockpicking expertise is increased by 2, lockpicks are 20% more durable, pickpocketing is 20% more likely to succeed, you are 20% harder to detect. <br> Feline Agility: Movement is 10% faster, sneaking is 10% faster, fall damage is reduced by 15%. <br> Fortify Warmth: Resistance to cold environments is increased by 10 points. <br> Raw Diet: Can eat raw meat without risk of disease. <br> Strong Stomach: Can eat raw food without food poisoning.",
    },
    {
     name: "Nord", 
     startingHMS: [110,80,110], 
     startingCW: 130, speedBonus: 0,
     hmsBonus: [0,0,0], 
     startingHMSRegen: [0.25,1.00,1.65], 
     unarmedDam: 12,
     startingSkills : [20,       //Smithing
                       15,       //Heavy Armor
                       15,       //Block
                       20,       //Two-handed
                       15,       //One-handed
                       10,       //Marksman
                       15,       //Evasion
                       10,       //Sneak
                       10,       //Wayfarer
                       10,       //Finesse
                       10,       //Speech
                       10,       //Alchemy
                       10,       //Illusion
                       10,       //Conjuration
                       10,       //Destruction
                       10,       //Restoration
                       10,       //Alteration
                       10,       //Enchanting
                        1,       //Destiny
                        0],		 // Traits	
	 desc: "Skyrim's Nords are tall and fair, with a culture which values honor, glory, and loyalty to family and community. Nords have come to distrust magic, but excel in physical warfare. They are greatly resistant to frost and lightning damage, reducing them by half and by one quarter respectively. Nords also have innate ability to use Shouts, and can unleash immense power through the words of power when mastered.",
	 bonus: "Ancient Tongues: Shouts are 10% more powerful and last longer. Shouts can be used 10% more often. <br> Barbaric Strength: Melee weapons deal 5% more damage. <br> Fortify Warmth: Resistance to cold environments is increased by 15 points. <br> Resist Frost and Shock: Frost deals 50% less damage and shock deals 25% less damage to you.",
    },
    {
     name: "Orsimer", 
     startingHMS: [110,80,110], 
     startingCW: 130, speedBonus: 0,
     hmsBonus: [30,0,0], 
     startingHMSRegen: [0.25,1.00,1.65], 
     unarmedDam: 14,
     startingSkills : [20,       //Smithing
                       20,       //Heavy Armor
                       15,       //Block
                       15,       //Two-handed
                       15,       //One-handed
                       10,       //Marksman
                       10,       //Evasion
                       10,       //Sneak
                       10,       //Wayfarer
                       10,       //Finesse
                       10,       //Speech
                       10,       //Alchemy
                       10,       //Illusion
                       10,       //Conjuration
                       15,       //Destruction
                       10,       //Restoration
                       10,       //Alteration
                       10,       //Enchanting
                        1,       //Destiny
                        0],		 // Traits	
	 desc: "The Orsimer or 'Pariah Folk', commonly called Orcs, come from Orsinium in the west. Their savage appearance and customs sometimes cause fear, but they have won acceptance for their distinguished service in the Legion. Orcs' superior strength makes them formidable warriors, though use of magic requires extensive training. Their incredible endurance grants them resistance to both magical and physical harm.",
	 bonus: "Bulwark: Health increases by 30, armor rating increases by 100, magic deals 10% less damage to you. <br> Stalwart: 10% resistance to hunger and fatigue, resistance to cold environments is increased by 15 points. <br> Strong Stomach: Can eat raw food without food poisoning.",
    },
    {
     name: "Redguard", 
     startingHMS: [100,80,120], 
     startingCW: 120, speedBonus: 0,
     hmsBonus: [0,0,30], 
     startingHMSRegen: [0.20,1.00,1.70], 
     unarmedDam: 13,
     startingSkills : [15,       //Smithing
                       10,       //Heavy Armor
                       15,       //Block
                       15,       //Two-handed
                       25,       //One-handed
                       15,       //Marksman
                       15,       //Evasion
                       10,       //Sneak
                       10,       //Wayfarer
                       10,       //Finesse
                       10,       //Speech
                       10,       //Alchemy
                       10,       //Illusion
                       10,       //Conjuration
                       10,       //Destruction
                       10,       //Restoration
                       10,       //Alteration
                       10,       //Enchanting
                        1,       //Destiny
                        0],		 // Traits	
	 desc: "The dark-skinned, wiry-haired Redguards of Hammerfell seem born for battle, though their proud and independent spirits suit free-ranging heroism more. They have a hardy constitution and natural resistance to poison and disease, but tend to shun their magic. They are full of stamina and naturally skilled in melee combat, making them one of the strongest warriors in Tamriel.",
	 bonus: "Adrenaline Rush: Stamina increases by 30, sprinting cost 1 less stamina per second. <br> Martial Prowess: Armor penetration with melee weapons is increased by 5. <br> Resist Poison and Disease: Poisons deal 50% less damage and 50% less likely to contract disease.",
    },
    {
     name: "Bosmer", 
     startingHMS: [90,100,110], 
     startingCW: 110, speedBonus: 0,
     hmsBonus: [0,0,0], 
     startingHMSRegen: [0.15,1.10,1.65], 
     unarmedDam: 12,
     startingSkills : [10,       //Smithing
                       10,       //Heavy Armor
                       10,       //Block
                       10,       //Two-handed
                       10,       //One-handed
                       25,       //Marksman
                       15,       //Evasion
                       15,       //Sneak
                       10,       //Wayfarer
                       15,       //Finesse
                       10,       //Speech
                       15,       //Alchemy
                       10,       //Illusion
                       10,       //Conjuration
                       10,       //Destruction
                       10,       //Restoration
                       15,       //Alteration
                       10,       //Enchanting
                        1,       //Destiny
                        0],		 // Traits	
	 desc: "The Bosmer, or Wood Elves, originate from the sacred forest of Valenwood. Their culture is highly carnivorous and even cannibalistic, derived from the Green Pact with the forest, in which they harm no plant. Their dexterity makes them excellent scouts and thieves, and there are no finer archers in all of Tamriel. They have a natural resistance to poison and disease, and can command nearby animals to fight for them.",
	 bonus: "Eye of the Hunt: Armor penetration with ranged weapons is increased by 5. <br> Resist Fatigue: 15% resistance to fatigue. <br> Resist Poison and Disease: Poisons deal 25% less damage and 50% less likely to contract disease. <br> Strong Stomach: Can eat raw food without food poisoning.",
    },
]

