import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts, determineFoodPts} from "./cfp.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import {saveLS, cfpData} from "./storage.js"
import { FP } from "./fp.js"

const start = (firstName, lastName, houseHoldMembers, houseHoldSize, cfpFood) => {
  const houseSizePts = determineHouseSizePts(houseHoldSize);
  const householdMemberPts = determineHouseHoldPts(houseHoldMembers);
  const foodPts = determineFoodPts(eatMeat);
  const total = houseSizePts + householdMemberPts + foodPts;

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



FORM.addEventListener('submit', e => {
  e.preventDefault();
  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent = '';
    //start(FNAME.value, LNAME.value, parseInt(FORM.housemember.value), FORM.housesize.value);
    const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housemember.value), FORM.housesize.value);
    //fpObj.householdPoints();
    //fpObj.houseSizePoints();
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


/*const me = {
  name: "Kaden",
  hairColor: "Black",
  location: "Office",
  sleepScore: 89,
  introduce: function(){
    console.log(`This is ${this.name} with ${this.hairColor} hair in ${this.location}`)
    console.log(this);
  }

}

const you = {
  name: "Jan",
  hairColor: "Brown",
  location: "Home",
  sleepScore: 82,
  introduce: function(){
    console.log(`This is ${this.name} with ${this.hairColor} hair in ${this.location}`)
    console.log(this);
  }

}

me.introduce();
console.log(this);
you.introduce(); */

/*class Human {
  constructor(name, hairColor, location, sleepScore){
    this.name = name
    this.hairColor = hairColor
    this.location = location
    this.sleepScore = sleepScore
  }
  introduce(){
    console.log(`This is ${this.name} with ${this.hairColor} hair in ${this.location}`)
  }
}

const kaden = new Human("Kaden", "Black", "office",89 );
const jane = new Human("Jane", "Brown", "home",89 );
kaden.introduce();
jane.introduce();
kaden.hrv = 50;*/