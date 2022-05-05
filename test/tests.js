import './example.test.js';
import { renderHat } from '../utils.js';

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