import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";
import {FORM} from "./global.js";
import {saveLS, cfpData} from "./storage.js"

const firstNameEl = document.getElementById('firstName')
const lastNameEl = document.getElementById('lastName')
const submitEl = document.getElementById("submitError");

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

const validateField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === '') {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add('invalid');
  } else {
      fieldError.textContent = '';
      event.target.classList.remove('invalid');
  }
};



firstNameEl.addEventListener('blur', validateField);
lastNameEl.addEventListener('blur', validateField);



FORM.addEventListener('submit', function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const firstNameIsValid = firstNameEl.value !== '';
  const lastNameIsValid = lastNameEl.value !== '';
  if (firstNameIsValid && lastNameIsValid) {
    submitEl.textContent = '';
    const houseMembers = parseInt(FORM.housemember.value);
    const houseS = FORM.housesize.value;
    start(firstName, lastName, houseMembers, houseS);
    saveLS(cfpData)
    renderTbl(cfpData);
    FORM.reset();
  } else {
    
    submitEl.textContent = "Form requires first and last name";
  }
})