const determineDog = function(dogSize, dogEnergy) {
    let userDog = "chihuahua";
    if (dogSize === "small" && dogEnergy === 1){
        userDog = "dachshund";
    } else if (dogSize === "medium" && dogEnergy === 1){
        userDog = "chowchow";
    } else if (dogSize === "large" && dogEnergy === 1){
        userDog = "saintbernard";
    } else if (dogSize === "small" && dogEnergy === 2){
        userDog = "maltese";
    } else if (dogSize === "medium" && dogEnergy === 2){
        userDog = "corgi";
    } else if (dogSize === "large" && dogEnergy === 2){
        userDog = "akita";
    } else if (dogSize === "small" && dogEnergy === 3){
        userDog = "chihuahua";
    } else if (dogSize === "medium" && dogEnergy === 3){
        userDog = "beagle";
    } else if (dogSize === "large" && dogEnergy === 3){
        userDog = "golden";
    } else {
        console.log(`Not a correct input!`);
    }
    return userDog;
};

const determineFit = function(userDog, dogWalk) {
    if (userDog === "dachshund" || userDog === "chowchow" || userDog === "saintbernard") {
        return "A good fit!";
    } else if ((userDog === "maltese" || userDog === "corgi" || userDog === "akita") && dogWalk === true) {
        return "A good fit!";
    } else if ((userDog === "maltese" || userDog === "corgi" || userDog === "akita") && dogWalk === false) {
        return "Consider a different dog!";
    } else if ((userDog === "chihuahua" || userDog === "beagle" || userDog === "golden") && dogWalk === true) {
        return "A good fit!";
    } else if ((userDog === "chihuahua" || userDog === "beagle" || userDog === "golden") && dogWalk === false) {
        return "Consider a different dog!";
    } else {
        return "Something went wrong!";
    }
};

const convertDogAge = function(userAge) {
    return userAge * 7;
}

export {determineDog, determineFit, convertDogAge}