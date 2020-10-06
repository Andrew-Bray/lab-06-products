import { sauceRecipes } from '../data.js';
import { renderSauce } from '../app.js';

const ul = document.querySelector('#sauce-list');

for (let i = 0; i < sauceRecipes.length; i++) {
    const sauce = sauceRecipes[i];

    const li = renderSauce(sauce);

    ul.appendChild(li);
}

