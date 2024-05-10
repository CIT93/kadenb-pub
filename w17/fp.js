class FP {
  constructor(first, last, houseMembers, houseSize, cfpFood, foodSource, waterValue, waterCon, both, houseP, waste, car, bus, plane) {
    this.first = first;
    this.last = last;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.cfpFood = cfpFood;
    this.foodSource = foodSource;
    this.waterValue = waterValue;
    this.waterCon = waterCon;
    this.both = both;
    this.houseP = houseP;
    this.waste = waste;
    this.car = car;
    this.bus = bus;
    this.plane = plane;
    this.calculateHouseholdPoints();
    this.calculateHouseSizePoints();
    this.calculateFoodPts();
    this.calculateFoodSourcePts();
    this.calculateWaterPts();
    this.calculatePurPts();
    this.calculateWastePts();
    this.calculateCarPts();
    this.calculateBusPts();
    this.calculatePlanePts();
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

  calculateFoodSourcePts() {
    if(this.foodSource === "packed") {
        this.foodSourcePts = 12
    } else if (this.foodSource === "balance") {
        this.foodSourcePts = 6
    } else if (this.foodSource === "local") {
      this.foodSourcePts = 2
    }
  }

  calculateWaterPts() {
    switch (this.waterCon) {
        case "nine":
            this.waterPts = 3;
            break;
        case "fourtonine":
            this.waterPts = 2;
            break;
        case "onetothree":
            this.waterPts = 1;
            break;
        case "none":
          this.waterPts = 0;
            break;
        default:
            console.error("Invalid selection");
            break;
    }
  }

  calculatePurPts() {
    switch (this.houseP) {
      case "morethanseven":
          this.housePurPts = 10;
          break;
      case "fivetoseven":
          this.housePurPts = 8;
          break;
      case "threetofive":
          this.housePurPts = 6;
          break;
      case "lessthanthree":
          this.housePurPts = 4;
          break;
      case "secondhand":
          this.housePurPts = 2;
          break;
      default:
          console.error("Invalid selection for purchases");
          break;
    }
  }
  
  calculateWastePts() {
    switch (this.waste) {
      case "fourcans":
          this.wastePts = 50;
          break;
      case "threecans":
          this.wastePts = 40;
          break;
      case "twocans":
          this.wastePts = 30;
          break;
      case "onecan":
          this.wastePts = 20;
          break;
      case "half":
          this.wastePts = 5;
          break;
      default:
          console.error("Invalid selection for garbage cans");
          break;
    }
  }

  calculateCarPts() {
    switch(this.car){
      case "fifteen":
        this.carPts = 12;
        break;
      case "ten":
        this.carPts = 10;
        break;
      case "one":
        this.carPts = 6;
        break;
      case "lessthanone":
        this.carPts = 4;
        break;
      case "nocar":
        this.carPts = 0;
        break;
      default:
        console.error("Invalid selection for miles");
        break;
    }
  }

  calculateBusPts(){
    switch(this.bus){
      case "twenty":
        this.busPts = 12;
        break;
      case "busfifteen":
        this.busPts = 10;
        break;
      case "busten":
        this.busPts = 6;
        break;
      case "busone":
        this.busPts = 4;
        break;
      case "buslessone":
        this.busPts = 2;
        break;
      case "nobus":
        this.busPts = 0;
        break;
      default:
        console.error("Invalid selection for miles");
        break;
    }
  }
  calculatePlanePts() {
    switch(this.plane){
      case "state":
        this.planePts = 2;
        break;
      case "country":
        this.planePts = 6;
        break;
      case "continent":
        this.planePts = 20;
        break;
      case "noplane":
        this.planePts = 0;
        break;
      default:
        console.error("Invalid selection for miles");
        break;
    }
  }

  calculateTotal() {
    this.total =
      this.householdPoints +
      this.houseSizePoints +
      this.foodPts +
      this.foodSourcePts;
      this.waterPts +
      this.housePurPts +
      this.wastePts +
      this.carPts +
      this.busPts +
      this.planePts;
  }
} 

export { FP };
