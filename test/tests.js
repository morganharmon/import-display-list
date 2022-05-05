import './example.test.js';
import { renderHat } from '../utils.js';
import { renderJuice } from '../utils.js';

const test = QUnit.test;

test('renderHat returns a div containing hat properties', (expect) => {
    const expected = `<div><h1>Sombrero</h1><img src="./assets/sombrero.jpg"><p>This hat is large and colorful</p></div>`;
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
    const expected = `<div><h1>Carrot</h1><p>This juice is orange and has lots of beta-carotene</p></div>`;
    const juice = {
        type: 'Carrot',
        color: 'orange',
        vitamins: 'beta-carotene'
    };
    const actual = renderJuice(juice);
    expect.equal(actual.outerHTML, expected);

});

