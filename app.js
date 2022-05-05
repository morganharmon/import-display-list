// import functions and grab DOM elements
import { hats } from './hats.js';
import { renderHat } from './utils.js';

const hatsDiv = document.getElementById('hats');

// let state

// set event listeners 

test("renderHat returns a div containing hat properties", (expect) => {
    const expected = `<div id="hats"><h1>Sombrero</h1><img src="./assets/sombrero.jpg"><p>This hat is large and colorful</p></div>`;
    const hat = {
        type: 'Sombrero',
        color: 'colorful',
        size: 'large',
        image: './assets/sombrero.jpg'
    };
    const actual = renderHat(hat);
    expect.equal(actual.outerHTML, expected);

});

