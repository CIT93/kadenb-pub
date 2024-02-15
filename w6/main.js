const FORM = document.getElementById("form")
const OUTPUT = document.getElementById("output");
const cfpData = [];

function determineHouseSizePts(size) {
  let houseSizePoints = 0;
  switch (size) {
    case "large":
      houseSizePoints = 10;
      break;
    case "medium":
      houseSizePoints = 7;
      break;
    case "small":
      houseSizePoints = 4;
      break;
    case "apartment":
      houseSizePoints = 2;
      break;
    default:
      console.log("no update to points");
  }
  return houseSizePoints;
}

function determineHouseHoldPts(numberInHousehold) {
  let houseHoldPts = 0;
  if (numberInHousehold === 1) {
    houseHoldPts = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPts = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPts = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPts = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPts = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPts = 4;
  } else if (numberInHousehold <= 7) {
    houseHoldPts = 2;
  } else {
    console.log("no update to points");
  }
  return houseHoldPts;
}

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

function displayOutput() {
  
  

  for (const obj of cfpData) {
    const newH2 = document.createElement("h2");
    newH2.textContent = `${obj.firstName} ${obj.lastName}'s Carbon Footprint: ${obj.cfpTotal}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on the number in and size of home`;
    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of people in the house of ${obj.houseMem} (score: ${obj.houseMemPts}),`;
    newP.textContent += ` and a ${obj.houseSize} size of home (score: ${obj.houseSPts}).`;
  
    OUTPUT.appendChild(newH2);
    OUTPUT.appendChild(newH3);
    OUTPUT.appendChild(newP);
  }
}


FORM.addEventListener('submit', function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housemember.value);
  const houseS = FORM.housesize.value;

  start(firstName, lastName, houseMembers, houseS);
  OUTPUT.innerHTML = "";
  displayOutput();
  FORM.reset();
})


