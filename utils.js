export function renderHat(hat) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = hat.type;
    const p = document.createElement('p');
    p.textContent = `This hat is ${hat.size} and ${hat.color}`;
    const img = document.createElement('img');
    img.src = hat.image;

    div.append(h1, img, p);
    return div;

}

export function renderJuice(juice) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = juice.type;
    const p = document.createElement('p');
    p.textContent = `This juice is ${juice.color} and has lots of ${juice.vitamins}`;

    div.append(h1, p);
    return div;

}