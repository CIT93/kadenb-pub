class FP {
  constructor(first, last, houseMembers, houseSize, cfpFood) {
    this.first = first;
    this.last = last;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.cfpFood = cfpFood;
    this.calculateHouseholdPoints();
    this.calculateHouseSizePoints();
    this.calculateFoodPts();
    this.calculateTotal();
  }

  calculateHouseholdPoints() {
    if (this.houseMembers === 1) {
      this.householdPoints = 14;
    } else if (this.houseMembers === 2) {
      this.householdPoints = 12;
    } else if (this.houseMembers === 3) {
      this.householdPoints = 10;
    } else if (this.houseMembers === 4) {
      this.householdPoints = 8;
    } else if (this.houseMembers === 5) {
      this.householdPoints = 6;
    } else if (this.houseMembers === 6) {
      this.householdPoints = 4;
    } else if (this.houseMembers <= 7) {
      this.householdPoints = 2;
    } else {
      console.log("no update to points");
    }
  }

  calculateHouseSizePoints() {
    if (this.houseSize === "large") {
      this.houseSizePoints = 10;
    } else if (this.houseSize === "medium") {
      this.houseSizePoints = 7;
    } else if (this.houseSize === "small") {
      this.houseSizePoints = 4;
    } else if (this.houseSize === "apartment") {
      this.houseSizePoints = 2;
    }
  }

  calculateFoodPts() {
    switch (this.cfpFood) {
      case "daily":
        this.foodPts = 10;
        break;
      case "few":
        this.foodPts = 8;
        break;
      case "veg":
        this.foodPts = 4;
        break;
      case "veganWild":
        this.foodPts = 2;
        break;
      case "prepackaged":
        this.foodPts = 12;
        break;
      default:
        console.log("no update to points");
    }
  }

  calculateTotal() {
    this.total = this.householdPoints + this.houseSizePoints + this.foodPts;
  }
}

export { FP };