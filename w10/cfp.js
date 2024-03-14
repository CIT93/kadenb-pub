const determineHouseSizePts = size => {
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
  
 const determineHouseHoldPts = numberInHousehold => {
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

  export {determineHouseSizePts, determineHouseHoldPts};