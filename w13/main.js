const FORM = document.getElementById('form');
const OUTPUT = document.getElementById('output');

function updateDOM(message, el) {
    const newEl = document.createElement(el);
    newEl.textContent = message;
    OUTPUT.appendChild(newEl); 
}

const startWorkout = (exercise, reps, time, fn) => {
    return new Promise(function(resolve, reject) {
         fn(`Start ${exercise} <> Goal reps is ${reps} <> complete in ${time} min!`, 'p');
    setTimeout(() => {
        fn(`Stop ${exercise}`, "h1");
    }, time * 1000);
})   
}

FORM.addEventListener('submit', e => {
    e.preventDefault();
    const exercise = e.target.exercise.value;
    const reps = parseFloat(e.target.reps.value);
    const time = parseFloat(e.target.time.value);
    startWorkout(exercise, reps, time, updateDOM); 
    FORM.reset();
});

function onSuccess(data) {
  console.log(`Success: ${data}`);
}

function onError(error) {
  console.log(`Error: ${data}`);
}

startWorkout()
    .then(exercise, reps, time, fn)
    .catch(onSuccess,onError)