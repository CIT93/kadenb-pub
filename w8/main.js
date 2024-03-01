import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";

const FORM = document.getElementById("form")
const OUTPUT = document.getElementById("output");

const cfpData = [];


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
  OUTPUT.innerHTML = "";
  //displayOutput();
  renderTbl(cfpData);
  FORM.reset();
})