const cfpData = [];

function sizePts(houseSize) {
  console.log("inside block scope");
  let houseSizePoints = 0;
  switch (houseSize) {
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


console.log("global scope");


function start(houseHoldMembers, houseHoldSize){
const houseHoldP = sizePts(houseHoldSize);
const houseSizePts = determineHouseHoldPts(houseHoldMembers);
const total = houseHoldP + houseSizePts;
cfpData.push(houseHoldMembers, houseHoldSize, houseSizePts, houseHoldP, total);
}

function displayOutput() {


}

start(1, "small");
start(2, "madium");
start(3, "large");


displayOutput();