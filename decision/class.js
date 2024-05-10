class DF {
    constructor(dogsize, dogenergy, dogwalk, dogage, userDog, userAge){
        this.dogsize = dogsize;
        this.dogenergy = dogenergy;
        this.dogwalk = dogwalk;
        this.dogage = dogage;
        this.userDog = userDog;
        this.userAge = userAge;
        this.calculateDog();
        this.calculateFit();
        this.calculateDogAge();

    }
    calculateDog() {
        if (this.dogsize === "small" && this.dogenergy === 1){
            this.userDog = "dachshund";
        } else if (this.dogsize === "medium" && this.dogenergy === 1){
            this.userDog = "chowchow";
        } else if (this.dogsize === "large" && this.dogenergy === 1){
            this.userDog = "saintbernard";
        } else if (this.dogsize === "small" && this.dogenergy === 2){
            this.userDog = "maltese";
        } else if (this.dogsize === "medium" && this.dogenergy === 2){
            this.userDog = "corgi";
        } else if (this.dogsize === "large" && this.dogenergy === 2){
            this.userDog = "akita";
        } else if (this.dogsize === "small" && this.dogenergy === 3){
            this.userDog = "chihuahua";
        } else if (this.dogsize === "medium" && this.dogenergy === 3){
            this.userDog = "beagle";
        } else if (this.dogsize === "large" && this.dogenergy === 3){
            this.userDog = "golden";
        } else {
            console.log(`Not a correct input!`);
        }
        return this.userDog;
    };
    
    calculateFit() {
        if (this.userDog === "dachshund" || this.userDog === "chowchow" || this.userDog === "saintbernard") {
            return "A good fit!";
        } else if ((this.userDog === "maltese" || this.userDog === "corgi" || this.userDog === "akita") && this.dogwalk === true) {
            return "A good fit!";
        } else if ((this.userDog === "maltese" || this.userDog === "corgi" || this.userDog === "akita") && this.dogwalk === false) {
            return "Consider a different dog!";
        } else if ((this.userDog === "chihuahua" || this.userDog === "beagle" || this.userDog === "golden") && this.dogwalk === true) {
            return "A good fit!";
        } else if ((this.userDog === "chihuahua" || this.userDog === "beagle" || this.userDog === "golden") && this.dogwalk === false) {
            return "Consider a different dog!";
        } else {
            return "Something went wrong!";
        }
    };
    
    calculateDogAge() {
        return this.userAge * 7;
    }
}

export { DF };