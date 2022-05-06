// import functions and grab DOM elements
import { hats } from './hats.js';
import { renderHat } from './utils.js';
import { juices } from './juices.js';
import { renderJuice } from './utils.js';
import { animals } from './animals.js';

const hatsDiv = document.getElementById('hats');
const juiceDiv = document.getElementById('juices');

// let state

// set event listeners 

for (let hat in hats) {
    hatsDiv.append(renderHat(hats[hat]));
}

for (let juice in juices) {
    juiceDiv.append(renderJuice(juices[juice]));
}