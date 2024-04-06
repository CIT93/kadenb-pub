const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");

const displayWorkout = function(callback) {
    const userExercise = document.getElementById('exercise').value;
    const userReps = parseInt(document.getElementById('reps').value);
    const userTime = parseFloat(document.getElementById('time').value);

    const h1 = document.createElement("h1");
    h1.textContent = `Start ${userExercise}! Your goal is ${userReps}!`;
    OUTPUT.appendChild(h1);

    setTimeout(() => {
        callback(userExercise);
    }, 1000);
}

const stopWorkout = (userExercise) => {
    
}
