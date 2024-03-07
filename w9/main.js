import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";
import {FORM} from "./global.js";
import {saveLS, cfpData} from "./storage.js"

function start(firstName, lastName, houseHoldMembers, houseHoldSize) {
  const houseSizePts = determineHouseSizePts(houseHoldSize);
  const householdMemberPts = determineHouseHoldPts(houseHoldMembers);
  const total = houseSizePts + householdMemberPts;

  cfpData.push({
    firstName: firstName,
    lastName: lastName,
    houseMem: houseHoldMembers,
    houseSize: houseHoldSize,
    houseMemPts: householdMemberPts,
    houseSPts: houseSizePts,
    cfpTotal: total,
  });
}

renderTbl(cfpData);

FORM.addEventListener('submit', function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housemember.value);
  const houseS = FORM.housesize.value;

  start(firstName, lastName, houseMembers, houseS);
  saveLS(cfpData)
  renderTbl(cfpData);
  FORM.reset();
})