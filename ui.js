$(document).ready(function () {

  curPerkList = perksList[0];
  curRaceList = raceListData;
  curGameMechanics = gameMechanicsList[0];
  curBlessingList = blessingsData;

  sortDataLists();
  let gotBuild = initCharacterData();
  updateCustomSelectOptions();
  updateSkillNames();
  updateSkillLevelsDisplay();
  drawMiniSkillTrees();
  updateActiveSkillPanel();
  updateRaceSelect();
  updateStandingStoneSelect();
  updateBlessingSelect();
  updateAttributeText();
  updateCircleAndLineColors();
  createDerivedAttributesTable();
  updateDerivedAttributes();

  if (gotBuild) {
    updateStuffFromCharacterCode();
  }

  updateBuildCodeDisplay();

  attachHandlers();

  $("#mainTitle").html(`Character Planner for LoreRim v${curGameMechanics.name}`);
  $("#mainSkillDisplayDiv").fadeIn(500);
});

function updateStuffFromCharacterCode() {
  $("#oghmaSelect").val(characterData.oghmaChoice);
  $("#raceSelect").val(characterData.race);
  $("#stoneSelect").val(characterData.standingStone);
  $("#blessingSelect").val(characterData.blessing);
  $("#perksSelect").val(curPerkList.id);
  $("#racesListSelect").val(curRaceList.id);
  $("#blessingsSelect").val(curBlessingList.id);
  $("#mechanicsSelect").val(curGameMechanics.id);
  $("#healthIncreasesInput").val(characterData.hmsIncreases[0]);
  $("#magickaIncreasesInput").val(characterData.hmsIncreases[1]);
  $("#staminaIncreasesInput").val(characterData.hmsIncreases[2]);
  updateCharacterLevelAndResults();
}

function createDerivedAttributesTable() {
  let theTable = $("#derivedAttributeTable");
  let derAttrData = curGameMechanics.derivedAttributes;
  for (let i = 0; i < derAttrData.attribute.length; i++) {
    let theRow = `<div class="derivedAttributeTableRow">`;
    theRow += `<div class="derivedAttributeTableCellLabel" id="derivedAttributeName${i}">`;
    theRow += `${derAttrData.attribute[i]}</div>`;
    theRow += `<div class="derivedAttributeTableCellValue" id="derivedAttributeValue${i}">`;
    theRow += "0</div></div>";
    theTable.append(theRow);
  }
}

//Attach all the event handlers to the main UI
function attachHandlers() {
  $(".miniSkillTreeDiv").click(leftSideSkillClick);
  $(window).resize(resizeWindowHandler);
  $("#activeSkillLevelInput").on("change", skillInputChange);
  $("#perksSelect").on("change", perkSelectChange);
  $("#raceSelect").on("change", raceSelectChange);
  $("#racesListSelect").on("change", raceListSelectChange);
  $("#blessingsSelect").on("change", blessingListSelectChange);
  $("#mechanicsSelect").on("change", mechanicsListSelectChange);
  $(".customCloseText").click(customClickDivClick);
  $("#resetActiveSkillButton").click(resetActiveSkillButtonClick);
  $("#resetAllSkillsButton").click(resetAllSkillsButtonClick);
  $(".attributeInput").on("keydown input", attributeInputChange);
  $("#oghmaSelect").on("change", oghmaSelectChange);
  $("#blessingSelect").on("change", blessingSelectChange);
  $("#stoneSelect").on("change", stoneSelectChange);
  $("#buildCodeCopyText").click(buildCodeCopyTextClick);
}

function blessingSelectChange() {
  characterData.blessing = Number($(this).val());
  updateBuildCodeDisplay();

}

function stoneSelectChange() {
  characterData.standingStone = Number($(this).val());
  updateBuildCodeDisplay();
}

function oghmaSelectChange() {
  characterData.oghmaChoice = Number($("#oghmaSelect").val());
  updateCharacterLevelAndResults();
  updateAttributeText();
  updateBuildCodeDisplay();
}

function attributeInputChange() {

  validateAttributeInput($(this));

  // Just be lazy and update them all at the same time.
  characterData.hmsIncreases[0] = Number($("#healthIncreasesInput").val());
  characterData.hmsIncreases[1] = Number($("#magickaIncreasesInput").val());
  characterData.hmsIncreases[2] = Number($("#staminaIncreasesInput").val());

  updateAttributeChoiceInputs();
  updateFreeAttributeChoicesDisplay();
  updateAttributeText();
  updateDerivedAttributes();
  updateBuildCodeDisplay();
}

function updateAttributeText() {
  let answers = ["Health: ", "Magicka: ", "Stamina: "];
  for (let i = 0; i < 3; i++) {
    let baseVal = raceListData[characterData.race].startingHMS[i];
    baseVal += curGameMechanics.leveling.hmsGiven[i] * characterData.hmsIncreases[i];

    let bonuses = raceListData[characterData.race].hmsBonus[i];

    answers[i] += (baseVal + bonuses);

    if (bonuses > 0) {
      answers[i] += ` (${baseVal}+${bonuses})`;
    }
  }

  $("#healthAttributeText").html(answers[0]);
  $("#magickaAttributeText").html(answers[1]);
  $("#staminaAttributeText").html(answers[2]);
}

function validateAttributeInput(theInput) {
  let val = Number(theInput.val());
  if (val < 0) val = 0;
  if (val > theInput.attr("max")) val = theInput.attr("max");
  theInput.val(val);
}

function resetActiveSkillButtonClick() {
  resetSkill(activeSkill);
  updateActiveSkillPanel();
  updateCircleAndLineColors();
  updateSkillLevelsDisplay();
  updateBuildCodeDisplay();
}

function resetAllSkillsButtonClick() {
  resetSkill(-1);
  updateActiveSkillPanel();
  updateCircleAndLineColors();
  updateSkillLevelsDisplay();
  updateBuildCodeDisplay();
}

function customClickDivClick() {
  $("#presetCustomOptionsDiv").toggle();
}

function raceListSelectChange() {
  changeRaceList(Number($(this).val()));
  updateBuildCodeDisplay();
}

function blessingListSelectChange() {
  changeBlessingList(Number($(this).val()));
  updateBuildCodeDisplay();
}

function mechanicsListSelectChange() {
  changeGameMechanics(Number($(this).val()));
  updateBuildCodeDisplay();
}

function changeGameMechanics(gmNum) {
  curGameMechanics = gameMechanicsList[getIndexWithID(gmNum, gameMechanicsList)];
  updateCharacterLevelAndResults();
  updateBuildCodeDisplay();
}

function changeRaceList(listNum) {
  curRaceList = racesList[getIndexWithID(listNum, racesList)];
  updateRaceSelect();
  changeRace(0, false);
  updateBuildCodeDisplay();
}

function changeBlessingList(listNum) {
  curBlessingList = blessingsList[getIndexWithID(listNum, blessingsList)];
  updateBlessingSelect();
  updateBuildCodeDisplay();
}

function raceSelectChange() {
  changeRace(Number($(this).val()));
  updateBuildCodeDisplay();
}

function changePerkList(listNum) {
  curPerkList = perksList[getIndexWithID(listNum, perksList)];
  // Just reset all the selected perks.
  characterData.spentPerks = 0;
  characterData.perksTaken = [];
  for (let i = 0; i < 21; i++) {
    characterData.perksTaken.push(false);
  }

  updateSkillNames();
  drawMiniSkillTrees();
  updateActiveSkillPanel();
}

function perkSelectChange() {
  changePerkList(Number($(this).val()));
  updateBuildCodeDisplay();
}

function skillInputChange() {
  let value = Number($(this).val());
  let minVal = $(this).attr("min");
  if (value < minVal) value = minVal;
  if (value > 100) value = 100;
  $(this).val(value);
  characterData.skillLevels[activeSkill] = value;

  updateCircleAndLineColors();

  updateCharacterLevelAndResults();
  updateSkillLevelsDisplay();
  updateBuildCodeDisplay();
}

function attachActiveSkillHandlers() {
  let activeSkillCircleSelector = $(".activeSkillCircle");
  activeSkillCircleSelector.hover(activeSkillPerkHoverEnter, activeSkillPerkHoverLeave);
  activeSkillCircleSelector.mousedown(activeSkillPerkClick);
}

function activeSkillPerkClick(event) {
  $("body").addClass("unselectable");

  let perkNum = Number($(this).attr("data-perknum"));

  const LMB = 0;
  const RMB = 2;
  if (event.button === LMB) {
    let hasPerk = characterHasPerk(perkNum);
    let isInChain = curPerkList.perks[perkNum].placeInChain !== -1;
    let isFirstInChain = curPerkList.perks[perkNum].prevPerk === -1;

    let perkToTake;

    // The perk we clicked on is the one we want to take
    if (!isInChain || !hasPerk) {
      perkToTake = perkNum;
    }
    // Otherwise we clicked part of a chain and actually want to take the next one.
    else {
      perkToTake = curPerkList.perks[perkNum].nextPerk;
    }

    if (event.detail > 1 && !tookPerkWithLastClick) {

      let tookPerk = forceTakePerk(perkToTake);
      if (tookPerk) {
        updateActiveSkillPanel();
        tookPerkWithLastClick = true;
      } else {
        tookPerkWithLastClick = false;
      }
      updateCharacterLevelAndResults();
      updateCircleAndLineColors();
      updateSkillLevelsDisplay();
    } else {
      tookPerkWithLastClick = tryTakePerk(perkToTake);
    }

  } else if (event.button === RMB) {
    tryRemovePerk(perkNum);
  }

  window.getSelection().removeAllRanges();
  setTimeout(function () {
    $("body").removeClass("unselectable");
  }, 5);
  updateBuildCodeDisplay();
}

function activeSkillPerkHoverEnter(event) {

  let clientRect = this.getBoundingClientRect();

  let perkNum = Number($(this).attr("data-perknum"));
  let hasPerk = characterHasPerk(perkNum);
  let isInChain = curPerkList.perks[perkNum].placeInChain !== -1;
  let isLastInChain = curPerkList.perks[perkNum].nextPerk === -1;

  let skillReq = curPerkList.perks[perkNum].skillReq;
  let descString = curPerkList.perks[perkNum].description;
  let skill = curPerkList.perks[perkNum].skill
  if (skillReq !== 0) {
    if (skill < DestinySkillId) {
      descString += ` [Skill Req: ${skillReq}]`;
    } else if (skill < TraitSkillId) {
      descString += ` [Level Req: ${skillReq}]`;
    } else if (skill < SkillCount) {
      descString += ` [Trait Points: ${skillReq}]`;
    } else {
      descString += ` [Trait Points: +${skillReq}]`;
    }
  }
  $("#highlightedPerkDesc").html(descString);

  if (hasPerk && isInChain && !isLastInChain) {
    let nextPerkNum = curPerkList.perks[perkNum].nextPerk;
    let nextPerkReq = curPerkList.perks[nextPerkNum].skillReq;
    let nextPerkDescString = curPerkList.perks[nextPerkNum].description;
    if (nextPerkReq > 0) {
      let nextDescString = `<b>Next rank:</b> ${nextPerkDescString} [Skill Req: ${nextPerkReq}]`;

      $("#highlightedNextPerkDesc").html(nextDescString);
    }
    if (nextPerkReq <= 0) {
      let nextDescString = `<b>Next rank:</b> ${nextPerkDescString}`;

      $("#highlightedNextPerkDesc").html(nextDescString);
    }
  } else {
    $("#highlightedNextPerkDesc").empty();
  }

  let highlightedPerkDivSelector = $("#highlightedPerkDiv");
  highlightedPerkDivSelector.removeClass("errorMessageDiv");
  highlightedPerkDivSelector.css({left: `${clientRect.left - 300}px`, top: `${clientRect.top + 40}px`, display: "block"});
}

function activeSkillPerkHoverLeave() {
  $("#highlightedPerkDesc").empty();
  $("#highlightedNextPerkDesc").empty();
  $("#highlightedPerkDiv").hide();
}

function resizeWindowHandler() {
  drawActiveSkillTree();
  drawMiniSkillTrees();
  updateCircleAndLineColors();
}

function leftSideSkillClick() {
  activeSkill = Number($(this).attr("data-skillnum"));
  $(".miniSkillTreeDivSelected").removeClass("miniSkillTreeDivSelected");
  $(this).addClass("miniSkillTreeDivSelected");
  updateActiveSkillPanel();
}

function updateLevelAndFreePerksDisplay() {
  let theDiv = $("#freePerkCountDiv");
  let freePerks = calcFreePerks();
  let freeTraits = calcFreeTraits()
  let freeClass = calcClassPoints()

  if (activeSkill < DestinySkillId) {
    theDiv.html(`Level ${characterData.level}, Free Perks: ${freePerks}`);
    if (freePerks < 0) {
      theDiv.removeClass("whiteText");
      theDiv.addClass("redText");
    } else {
      theDiv.removeClass("redText");
      theDiv.addClass("whiteText");
    }
  }
  if (activeSkill === DestinySkillId) {
    theDiv.html(`Level ${characterData.level}, Free Class Points: ${freeClass}`);
    if (freeClass < 0) {
      theDiv.removeClass("whiteText");
      theDiv.addClass("redText");
    } else {
      theDiv.removeClass("redText");
      theDiv.addClass("whiteText");
    }
  }
  if (activeSkill === TraitSkillId) {
    theDiv.html(`Level ${characterData.level}, Free Traits: ${freeTraits}`);
    if (freeTraits < 0) {
      theDiv.removeClass("whiteText");
      theDiv.addClass("redText");
    } else {
      theDiv.removeClass("redText");
      theDiv.addClass("whiteText");
    }
  }
}

function updateClassAndTraitDisplay() {
  let theDiv = $("#freeClassPointDiv");
  let freeClass = calcClassPoints();
  let freeTraits = calcFreeTraits()
  let traitPoints = calcTraitPoints();
  characterData.skillLevels[19] = freeTraits
  theDiv.html(`Free Class Points: ${freeClass} &nbsp;&nbsp;&nbsp;&nbsp; Free Traits: ${freeTraits}`);
  if (freeClass < 0 || freeTraits < 0 || (freeTraits < 0)) {
    theDiv.removeClass("whiteText");
    theDiv.addClass("redText");
  } else {
    theDiv.removeClass("redText");
    theDiv.addClass("whiteText");
  }
}

function updateActiveSkillPanel() {
  $("#activeSkillDisplayName").html(curPerkList.skillNames[activeSkill]);
  updateCharacterLevelAndResults();
  $("#activeSkillLevelInput").val(characterData.skillLevels[activeSkill]);
  drawActiveSkillTree();
  updateCircleAndLineColors();
}

function drawActiveSkillTree() {
  // clear the lines and circles in the active skill tree
  $("#activeSkillDisplaySVG > circle").remove();
  $("#activeSkillDisplaySVG > line").remove();
  $("#activeSkillDisplaySVG > text").remove();

  let perks = curPerkList.perks;
  let theSVG = $("#activeSkillDisplaySVG");
  let svgWidth = theSVG.width();
  let svgHeight = theSVG.height();
  //Draw the connecting lines. Do this first so that the circles will be
  //drawn on top of them.
  for (let i = 0; i < perks.length; i++) {
    if (perks[i].skill !== activeSkill) continue;
    let curXPos = perks[i].xPos / 100 * svgWidth;
    let curYPos = perks[i].yPos / 100 * svgHeight;

    //Assuming that all pre-reqs are in the same skill tree
    for (let j = 0; j < perks[i].preReqs.length; j++) {
      let preReqNum = Math.abs(perks[i].preReqs[j]);

      let preXPos = perks[preReqNum].xPos / 100 * svgWidth;
      let preYPos = perks[preReqNum].yPos / 100 * svgHeight;

      if (preXPos !== curXPos || preYPos !== curYPos) {
        theSVG.append(`<line id="mainLine${i}to${preReqNum}" x1="${curXPos}" y1="${curYPos}" x2="${preXPos}" y2="${preYPos}" stroke-width="2" stroke-opacity="0.5" />`);
      }
    }
  }
  //Then draw the circles for the perks along with the labels
  for (let i = 0; i < perks.length; i++) {
    //This is only for the actively selected perk tree
    if (perks[i].skill !== activeSkill) continue;

    let hasPerk = characterHasPerk(i);
    let isInChain = perks[i].placeInChain !== -1;
    let isLastInChain = perks[i].nextPerk === -1;
    let isFirstInChain = perks[i].prevPerk === -1;
    let hasNextInChain = characterHasPerk(perks[i].nextPerk);
    let hasPrevInChain = characterHasPerk(perks[i].prevPerk);

    //If it's not part of a chain we always want to draw it.
    if (isInChain) {
      let wantToDraw = false;
      if (hasPerk && isLastInChain) wantToDraw = true;
      if (hasPerk && !hasNextInChain) wantToDraw = true;
      if (!hasPerk && isFirstInChain) wantToDraw = true;
      if (!wantToDraw) continue;
    }

    let curXPos = perks[i].xPos / 100 * svgWidth;
    let curYPos = perks[i].yPos / 100 * svgHeight;

    theSVG.append(`<circle class="activeSkillCircle" id="activeCircle${i}" cx="${curXPos}" cy="${curYPos}" r="10" data-perkNum="${i}" oncontextmenu="return false"/>`);

    let label = perks[i].name;
    if (isInChain) {
      if (!hasPerk) {
        label += " (0";
      } else {
        label += ` (${perks[i].placeInChain}`;
      }
      label += `/${perks[i].totalInChain})`;
    }

    let breakLocation = label.indexOf("<br>");

    if (breakLocation === -1) {
      theSVG.append(`<text font-size="16px" x="${curXPos}" y="${curYPos + 25}" text-anchor="middle" fill="black" filter="url(#shadow)">${label}</text>`);
      theSVG.append(`<text font-size="16px" x="${curXPos}" y="${curYPos + 25}" text-anchor="middle" fill="white">${label}</text>`);
    } else {
      let parts = label.split("<br>");
      theSVG.append(`<text font-size="16px" x="${curXPos}" y="${curYPos + 25}" text-anchor="middle" fill="black" filter="url(#shadow)">${parts[0]}
          <tspan x="${curXPos}" y="${curYPos + 42}">${parts[1]}</tspan></text>`);


      theSVG.append(`<text font-size="16px" x="${curXPos}" y="${curYPos + 25}" text-anchor="middle" fill="white">${parts[0]}<tspan x="${curXPos}" y="${curYPos + 42}">${parts[1]}</tspan></text>`);
    }
  }

  // Silly hack to actually draw the new SVG
  theSVG.html(theSVG.html())

  $("#activeSkillLevelInput").attr("min",
    raceListData[characterData.race].startingSkills[activeSkill]);

  //Re-attach the handlers to all of the circles
  attachActiveSkillHandlers();
}

function updateCircleAndLineColors() {
  //First handle the active skill
  for (let i = 0; i < curPerkList.perks.length; i++) {
    let thePerk = curPerkList.perks[i];
    let hasPerk = characterHasPerk(i);
    // Handle the active skill display
    if (thePerk.skill === activeSkill) {
      // First deal with the circles.
      if (hasPerk) {
        if (characterData.skillLevels[activeSkill] >= thePerk.skillReq) {
          $(`#activeCircle${i}`).attr("fill", "url(#perkSelectedGrad)");
        } else {
          //Don't meet the skill requirement anymore
          $(`#activeCircle${i}`).attr("fill", "url(#perkNotValidGrad)");
        }

        //Then the connecting lines
        for (let j = 0; j < thePerk.preReqs.length; j++) {
          if (characterHasPerk(Math.abs(thePerk.preReqs[j]))) {
            $(`#mainLine${i}to${Math.abs(thePerk.preReqs[j])}`).attr("stroke", "yellow");
          } else {
            $(`#mainLine${i}to${Math.abs(thePerk.preReqs[j])}`).attr("stroke", "lightblue");
          }
        }
      } else {
        $(`#activeCircle${i}`).attr("fill", "url(#perkNotSelectedGrad)");
        for (let j = 0; j < thePerk.preReqs.length; j++) {
          $(`#mainLine${i}to${Math.abs(thePerk.preReqs[j])}`).attr("stroke", "lightblue");
        }
      }
    }
  }
  //Then the mini-skill trees
  for (let i = 0; i < curPerkList.perks.length; i++) {
    let thePerk = curPerkList.perks[i];
    //We only drew the first perk in the chain, so nothing to do for the rest
    if (thePerk.prevPerk !== -1) continue;

    let hasPerk = characterHasPerk(i);
    if (!hasPerk) {
      $(`#miniSkillCircle${i}`).attr("fill", "lightblue");
      for (let j = 0; j < thePerk.preReqs.length; j++) {
        $(`#miniLine${i}to${Math.abs(thePerk.preReqs[j])}`).attr("stroke", "lightblue");
      }
    } else {
      for (let j = 0; j < thePerk.preReqs.length; j++) {
        if (characterHasPerk(Math.abs(thePerk.preReqs[j]))) {
          $(`#miniLine${i}to${Math.abs(thePerk.preReqs[j])}`).attr("stroke", "yellow");
        } else {
          $(`#miniLine${i}to${Math.abs(thePerk.preReqs[j])}`).attr("stroke", "lightblue");
        }
      }
      //Check if the circle should be red because we have a later perk in the
      //chain that we don't meet the skill req for.
      let shouldBeRed = false;
      let checkingNum = i;
      while (checkingNum !== -1) {
        let checking = curPerkList.perks[checkingNum];
        if (characterHasPerk(checkingNum) &&
          checking.skillReq > characterData.skillLevels[checking.skill]) {
          shouldBeRed = true;
          break;
        }
        checkingNum = checking.nextPerk;
      }

      if (shouldBeRed) {
        $(`#miniSkillCircle${i}`).attr("fill", "red");
      } else {
        $(`#miniSkillCircle${i}`).attr("fill", "yellow");
      }
    }
  }
}

function drawMiniSkillTrees() {

  for (let i = 1; i <= 21; i++) {
    $(`#skill${i}SVG`).html("")
  }

  let perks = curPerkList.perks;
  //Draw the connecting lines. Do this first so that the circles will be
  //drawn on top of them.
  for (let i = 0; i < perks.length; i++) {
    let theSVG = $("#skill" + (perks[i].skill + 1) + "SVG");
    let svgWidth = theSVG.width();
    let svgHeight = theSVG.height();

    let curXPos = perks[i].xPos / 100 * svgWidth;
    let curYPos = perks[i].yPos / 100 * svgHeight;

    for (let j = 0; j < perks[i].preReqs.length; j++) {
      let preReqNum = Math.abs(perks[i].preReqs[j]);
      let preXPos = perks[preReqNum].xPos / 100 * svgWidth;
      let preYPos = perks[preReqNum].yPos / 100 * svgHeight;

      if (preXPos !== curXPos || preYPos !== curYPos) {
        theSVG.append(`<line id="miniLine${i}to${preReqNum}" x1="${curXPos}" y1="${curYPos}" x2="${preXPos}" y2="${preYPos}" stroke-width="1" />`);
      }
    }
  }

  for (let perkIndex = 0; perkIndex < perks.length; perkIndex++) {
    let theSVG = $(`#skill${perks[perkIndex].skill + 1}SVG`);
    let svgWidth = theSVG.width();
    let svgHeight = theSVG.height();

    let curXPos = perks[perkIndex].xPos / 100 * svgWidth;
    let curYPos = perks[perkIndex].yPos / 100 * svgHeight;

    //For perk chains, only draw one circle for the first one
    if (perks[perkIndex].prevPerk === -1) {
      $("#skill" + (perks[perkIndex].skill + 1) + "SVG").append(`<circle class="miniSkillCircle" id="miniSkillCircle${perkIndex}" cx="${curXPos}" cy="${curYPos}" r="3" data-perkNum="${perkIndex}" />`);
    }
  }

  for (let skillIndex = 1; skillIndex <= SkillCount; skillIndex++) {
    let skillDivSelector = $(`#skill${skillIndex}Div`);
    skillDivSelector.html(skillDivSelector.html())
  }

  attachMiniSkillTreeHandlers();
}

function attachMiniSkillTreeHandlers() {
  $(".miniSkillCircle").hover(miniPerkHoverEnter, activeSkillPerkHoverLeave);
}

function miniPerkHoverEnter(event) {
  let clientRect = this.getBoundingClientRect();

  let perkNum = Number($(this).attr("data-perknum"));
  let hasPerk = characterHasPerk(perkNum);
  let isInChain = curPerkList.perks[perkNum].placeInChain !== -1;

  let highlightedPerkDivSelector = $("#highlightedPerkDiv");
  highlightedPerkDivSelector.removeClass("errorMessageDiv");
  $("#highlightedPerkDesc").html(curPerkList.perks[perkNum].name);
  $("#highlightedNextPerkDesc").empty();

  highlightedPerkDivSelector.css({left: `${clientRect.left - 80}px`, top: `${clientRect.top + 5}px`, display: "block"});
}

function updateSkillNames() {
  for (let skillIndex = 0; skillIndex < SkillCount; skillIndex++) {
    $("#skill" + (skillIndex + 1) + "Name").html(curPerkList.skillNames[skillIndex]);
  }
}

function updateSkillLevelsDisplay() {
  for (let skillIndex = 1; skillIndex <= SkillCount; skillIndex++) {
    $("#skill" + skillIndex + "Level").html(characterData.skillLevels[skillIndex - 1]);
  }
  $("#activeSkillLevelInput").val(characterData.skillLevels[activeSkill]);
}


function updateCustomSelectOptions() {

  let perksSel = $("#perksSelect");
  perksSel.empty();
  for (let i = 0; i < perksList.length; i++) {
    perksSel.append(`<option value="${perksList[i].id}">${perksList[i].name}</option>`);
  }
  perksSel.val(curPerkList.id);

  let racesSel = $("#racesListSelect");
  racesSel.empty();
  for (let i = 0; i < racesList.length; i++) {
    racesSel.append(`<option value="${racesList[i].id}">${racesList[i].name}</option>`);
  }
  racesSel.val(curRaceList.id);

  let mechanicsSel = $("#mechanicsSelect");
  mechanicsSel.empty();
  for (let i = 0; i < gameMechanicsList.length; i++) {
    mechanicsSel.append(`<option value="${gameMechanicsList[i].id}">${gameMechanicsList[i].name}</option>`);
  }
  mechanicsSel.val(curGameMechanics.id);

  let blessingsSel = $("#blessingsSelect");
  blessingsSel.empty();
  for (let i = 0; i < blessingsList.length; i++) {
    blessingsSel.append(`<option value="${blessingsList[i].id}">${blessingsList[i].name}</option>`);
  }
  blessingsSel.val(curBlessingList.id);
}


function updateRaceSelect() {
  let raceSel = $("#raceSelect");
  raceSel.empty();
  for (let i = 0; i < curRaceList.length; i++) {
    raceSel.append(`<option value="${i}">${curRaceList[i].name}</option>`);
  }
}

function updateBlessingSelect() {
  let blessSel = $("#blessingSelect");
  blessSel.empty();
  for (let i = 0; i < curBlessingList.length; i++) {
    let name = curBlessingList[i].name
    if (name.includes("&mdash;")) {
      blessSel.append(`<optgroup label="${name}">`)
    } else blessSel.append(`<option value="${i}">${curBlessingList[i].name}</option>`);
  }
}

function updateStandingStoneSelect() {
  let ssSelect = $("#stoneSelect");
  ssSelect.empty();
  for (let i = 0; i < standingStoneData.length; i++) {
    ssSelect.append(`<option value="${i}">${standingStoneData[i].name}</option>`);
  }
}


function updateCharacterLevelAndResults() {
  calcCharacterLevelAndResults();
  updateLevelAndFreePerksDisplay();
  updateFreeAttributeChoicesDisplay();
  updateAttributeChoiceInputs();
  updateAttributeText();
  updateClassAndTraitDisplay();
}

function updateAttributeChoiceInputs() {
  let freeChoices = calcFreeAttributeChoices();
  if (freeChoices < 0) freeChoices = 0;
  $("#healthIncreasesInput").attr("max", characterData.hmsIncreases[0] + freeChoices);
  $("#magickaIncreasesInput").attr("max", characterData.hmsIncreases[1] + freeChoices);
  $("#staminaIncreasesInput").attr("max", characterData.hmsIncreases[2] + freeChoices);
}

function updateFreeAttributeChoicesDisplay() {
  let theDiv = $("#attributesToSpendDiv");
  let freeChoices = calcFreeAttributeChoices();
  theDiv.html(`Attribute Choices Remaining: ${freeChoices}`);
  if (freeChoices < 0) {
    theDiv.removeClass("whiteText");
    theDiv.addClass("redText");
  } else {
    theDiv.removeClass("redText");
    theDiv.addClass("whiteText");
  }
}

function buildCodeCopyTextClick() {
  navigator.clipboard.writeText($("#buildCodeText").val()).then(function () {
    $("#buildCopiedMessage").show();
    clearTimeout(copiedMessageTimeoutID);
    copiedMessageTimeoutID = setTimeout(function () {
      $("#buildCopiedMessage").hide();
    }, 2000);
  }, function () {
    /* clipboard write failed */
  });
}


function updateBuildCodeDisplay() {
  let buildCheck = validateBuild();
  if (buildCheck.valid) {
    let code = generateBuildCode();
    // ToDo
    let buildLink = `file:///C:/dev/GigaPlanner/index.html?b=${code}`;
    $("#buildCodeText").val(buildLink);
  } else {
    $("#buildCodeText").val(buildCheck.message);
  }
}


