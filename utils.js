export function renderHat(hat) {
    const div = document.createElement('div');
    div.classList.add('hat');
    const h2 = document.createElement('h2');
    h2.textContent = hat.type;
    const p = document.createElement('p');
    p.textContent = `This hat is ${hat.size} and ${hat.color}`;
    const img = document.createElement('img');
    img.src = hat.image;
    img.alt = 'hat';

    div.append(h2, img, p);
    return div;

}

export function renderJuice(juice) {
    const div = document.createElement('div');
    div.classList.add('juice');
    const h2 = document.createElement('h2');
    h2.textContent = juice.type;
    const p = document.createElement('p');
    p.textContent = `This juice is ${juice.color} and has lots of ${juice.vitamins}`;
    const img = document.createElement('img');
    img.src = juice.image;
    img.alt = 'juice';

    div.append(h2, img, p);
    return div;

}
