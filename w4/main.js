const cfpData = [];

function determineHouseSizePts(size) {
  console.log("inside block scope");
  let houseSizePoints = 0;
  switch (size) {
    case "large":
      houseSizePoints = 0;
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
  console.log("Inside block scope");
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

function start(houseHoldMembers, houseHoldSize){
  const houseHoldSizePts = determineHouseSizePts(houseHoldSize);
  const householdMemberPts = determineHouseHoldPts(houseHoldMembers);
  const total = houseHoldSizePts + householdMemberPts;
  cfpData.push([houseHoldMembers, houseHoldSize, householdMemberPts, houseHoldSizePts, total]);
  }

function displayOutput() {
  for (arr of cfpData){
    console.log(arr);
    const output = document.getElementById("output");
    const newP = document.createElement("p");
    (newP.textContent = `HouseHold Size Points is ${arr[3]}. Household Member Points is ${arr[2]}. The Carbon Footprint total is ${arr[4]}`)
    output.appendChild(newP);
  }


}

start(5, "apartment");
start(2, "medium");
start(3, "large");


displayOutput();