const testRaceData = {
  name : "Test",
  id: 0,
  
  races : [
    {
     name: "Argonian", 
     startingHMS: [100,100,100], 
     startingCW: 120, speedBonus: 0,
     hmsBonus: [0,0,0], 
     startingHMSRegen: [0,1.1,1.6], 
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
                        0,       //Benefits
                        0]       //Detriments
    },
    {
     name: "Breton", 
     startingHMS: [90,110,100], 
     startingCW: 110, speedBonus: 0,
     hmsBonus: [0,0,0], 
     startingHMSRegen: [0,1.44,1.60], 
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
                        0,       //Benefits
                        0]       //Detriments
    },
    {
     name: "Dunmer", 
     startingHMS: [100,100,100], 
     startingCW: 120, speedBonus: 0,
     hmsBonus: [0,0,0], 
     startingHMSRegen: [0,1.1,1.6], 
     unarmedDam: 13,
     startingSkills : [10,       //Smithing
                       10,       //Heavy Armor
                       10,       //Block
                       10,       //Two-handed
                       20,       //One-handed
                       15,       //Marksman
                       15,       //Evasion
                       10,       //Sneak
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
                        0,       //Benefits
                        0]       //Detriments
    },
    {
     name: "Altmer", 
     startingHMS: [90,120,90], 
     startingCW: 110, speedBonus: 0,
     hmsBonus: [0,30,0], 
     startingHMSRegen: [0,1.99,1.55], 
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
                        0,       //Benefits
                        0]       //Detriments
    },
    {
     name: "Imperial", 
     startingHMS: [110,110,100], 
     startingCW: 120, speedBonus: 0,
     hmsBonus: [0,0,0], 
     startingHMSRegen: [0.02,1.21,1.76], 
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
                        0,       //Benefits
                        0]       //Detriments
    },
    {
     name: "Khajiit", 
     startingHMS: [90,90,120], 
     startingCW: 110, speedBonus: 15,
     hmsBonus: [0,0,0], 
     startingHMSRegen: [0,1.05,2.31], 
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
                        0,       //Benefits
                        0]       //Detriments
    },
    {
     name: "Nord", 
     startingHMS: [110,80,110], 
     startingCW: 130, speedBonus: 0,
     hmsBonus: [0,0,0], 
     startingHMSRegen: [0,1,2.07], 
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
                        0,       //Benefits
                        0]       //Detriments
    },
    {
     name: "Orsimer", 
     startingHMS: [110,80,110], 
     startingCW: 130, speedBonus: 0,
     hmsBonus: [30,0,0], 
     startingHMSRegen: [0,1.0,2.07], 
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
                        0,       //Benefits
                        0]       //Detriments
    },
    {
     name: "Redguard", 
     startingHMS: [100,80,120], 
     startingCW: 120, speedBonus: 0,
     hmsBonus: [0,0,30], 
     startingHMSRegen: [0,1.0,2.31], 
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
                        0,       //Benefits
                        0]       //Detriments
    },
    {
     name: "Bosmer", 
     startingHMS: [90,100,110], 
     startingCW: 110, speedBonus: 0,
     hmsBonus: [0,0,0], 
     startingHMSRegen: [0,1.1,2.07], 
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
                        0,       //Benefits
                        0]       //Detriments
    }
  ]
};
addRaceData(testRaceData);
