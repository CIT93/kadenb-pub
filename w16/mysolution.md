first, i would add a function to calculate total water consumption.

in the function i would combine && and function and the or || function to factor out if the user has only a dishwasher, only a washing machine, has both, or has none. 

if (user === both ) && (usage === 1) {
    waterPts === 1;
} else if (user === onlyWash) && (usage === 2) {
    waterPts === 2;
} else if (user === onlyDish) && (usage === 3) {
    waterPts = 3;
} else if (user === none) {
    waterPts === 0;
}

something like that and copy and paste for each different number of points that can be added