export function renderHat(hat) {
    const div = document.getElementById('hats');

    const h1 = document.createElement('h1');
    h1.textContent = hat.type;
    const p = document.createElement('p');
    p.textContent = `This hat is ${hat.size} and ${hat.color}`;
    const img = document.createElement('img');
    img.src = hat.image;

    div.append(h1, img, p);
    return div;

}