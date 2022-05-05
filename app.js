// import functions and grab DOM elements
import { hats } from './hats.js';
import { renderHat } from './utils.js';

const hatsDiv = document.getElementById('hats');

// let state

// set event listeners 


for (let hat in hats) {
    hatsDiv.append(renderHat(hats[hat]));
}