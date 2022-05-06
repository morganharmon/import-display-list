import './example.test.js';
import { renderHat } from '../utils.js';
import { renderJuice } from '../utils.js';

const test = QUnit.test;

test('renderHat returns a div containing hat properties', (expect) => {
    const expected = `<div class="hat"><h2>Sombrero</h2><img src="./assets/sombrero.jpg" alt="hat"><p>This hat is large and colorful</p></div>`;
    const hat = {
        type: 'Sombrero',
        color: 'colorful',
        size: 'large',
        image: './assets/sombrero.jpg'
    };
    const actual = renderHat(hat);
    expect.equal(actual.outerHTML, expected);

});

test('renderJuice returns a div containing juice properties', (expect) => {
    const expected = `<div class="juice"><h2>Carrot</h2><img src="./assets/carrot-juice.webp" alt="juice"><p>This juice is orange and has lots of beta-carotene</p></div>`;
    const juice = {
        type: 'Carrot',
        color: 'orange',
        vitamins: 'beta-carotene',
        image: './assets/carrot-juice.webp'
    };
    const actual = renderJuice(juice);
    expect.equal(actual.outerHTML, expected);

});

