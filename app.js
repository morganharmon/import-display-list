// import functions and grab DOM elements
import { hats } from './hats.js';
import { renderHat } from './utils.js';
import { juices } from './juices.js';
import { renderJuice } from './utils.js';
import { animals } from './animals.js';
import { renderAnimal } from './utils.js';

const hatsDiv = document.getElementById('hats');
const juiceDiv = document.getElementById('juices');
const animalDiv = document.getElementById('animals');

// let state

// set event listeners 

for (let hat of hats) {
    hatsDiv.append(renderHat(hat));
}

for (let juice of juices) {
    juiceDiv.append(renderJuice(juice));
}

for (let animal of animals) {
    animalDiv.append(renderAnimal(animal));
}