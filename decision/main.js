import { renderTblHeading, renderTbl } from "./render.js";
import { determineDog, determineFit, convertDogAge } from "./dogfun.js";
import { TBL, FORM, OUTPUT, SUBMIT } from "./global.js";
import { DF } from "./class.js";

let dogArray = [];

const dogData = [];
dogData.forEach(function (data) {
    const chosenDog = determineDog(data.dogSize, data.dogEnergy);
    const dogFit = determineFit(chosenDog, data.dogWalk);
    const dogAge = convertDogAge(data.userAge);

    const dogResult = {
        dogSize: data.dogSize,
        dogEnergy: data.dogEnergy,
        userAge: data.userAge,
        dogWalk: data.dogWalk,
        chosenDog: chosenDog,
        dogFit: dogFit,
        dogAge: dogAge
    };

    dogArray.push(dogResult);
});

FORM.addEventListener('submit', function(e){
    e.preventDefault();

    const dogSize = FORM.dogsize.value;
    const dogEnergy = parseInt(FORM.dogenergy.value);
    const dogWalk = FORM.dogwalk.value === "true";

    if (dogSize !== "small" && dogSize !== "medium" && dogSize !== "large") {
        alert("Please enter a valid dog size: small, medium, or large.");
        return;
    }

    const chosenDog = determineDog(dogSize, dogEnergy);
    const dogFit = determineFit(chosenDog, dogWalk);
    const userAge = parseInt(FORM.userage.value);
    const dogAge = convertDogAge(userAge);

    renderTbl( chosenDog, dogFit, dogAge);
});