import { renderTbl } from "./render.js";
//import { determineHouseSizePts, determineHouseHoldPts, determineFoodPts, determineFoodSourcePts} from "./cfp.js";
import {FORM, FNAME, LNAME, SUBMIT, WATER, BOTH} from "./global.js";
import {saveLS, cfpData} from "./storage.js"
import { FP } from "./fp.js"

const start = (firstName, lastName, houseHoldMembers, houseHoldSize, cfpFood, foodSource) => {
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
    cfpFood: userFood,
    foodPts: foodPts,
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



FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);

const determineRecycleItems = e => {
  const numberChecked = document.querySelectorAll('.recycle:checked').length;
  return {
    glass: e.target.glass.checked,
    plastic: e.target.plastic.checked,
    aluminum: e.target.aluminum.checked,
    steel: e.target.steel.checked,
    compost: e.target.compost.checked,
    recyclePts: (24-(numberChecked * 4))
  }
}

FORM.addEventListener('submit', e => {
  e.preventDefault();
  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent = '';
    const fpObj = new FP(
      FNAME.value,
      LNAME.value,
      parseInt(e.target.housemember.value),
      e.target.housesize.value,
      e.target.food.value,
      e.target.foodSource.value,
      parseInt(e.target.waterCon.value),
      e.target.bothWash.checked ? parseInt(e.target.waterCon.value) * 2 : parseInt(e.target.waterCon.value),
      parseInt(e.target.houseP.value),
      parseInt(e.target.waste.value),
      determineRecycleItems(e)
    );
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    
    SUBMIT.textContent = "Form requires first and last name";
  }
})

const updatedStart = (...x) => {
  const houseSizePts = determineHouseSizePts(x[0]);
  const householdMemberPts = determineHouseHoldPts(x[1]);
  const total = houseSizePts + householdMemberPts;

  cfpData.push({
    firstName: firstName,
    lastName: lastName,
    houseMem: houseHoldMembers,
    houseSize: houseHoldSize,
    houseMemPts: x[0],
    houseSPts: x[1],
    cfpTotal: total,
  });
}