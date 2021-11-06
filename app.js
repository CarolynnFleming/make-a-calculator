import { add } from './math-utils.js';
import { subtract } from './math-utils.js';
import { multiply} from './math-utils.js';
import { divide } from './math-utils.js';
// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const addInputfire = document.getElementById
('add-input-fire');
console.log(addInputfire)
const addInputrain = document.getElementById
('add-input-rain')
console.log(addInputrain)
const getitButton = document.getElementById
('getit-button')
console.log(getitButton)
const addResult = document.getElementById
('add-result')
console.log(addResult)


getitButton.addEventListener('click', () =>{

  const redstar1 = +addInputfire.value;
  const redstar2 = +addInputrain.value;

  const result = add(redstar1, redstar2)

  addResult.textContent = result;
});

const subtractInputlava = document.getElementById;
('subtract-input-lava');
const subtractInputrock = document.getElementById
('subtract-input-rock');
const subtractButton = document.getElementById
('subtract-button');
const subtractResult = document.getElementById
('subtract-result');

subtractButton.addEventListener('click', () =>{

  const redstar1 = -subtractlava.value;
  const redstar2 = -subtractInputrock.value;

  const result = subtract(redstar1, redstar2)

  subtractResult.textContent = result;
});




