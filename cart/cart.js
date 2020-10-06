import { sauceRecipes } from '../data.js';
import { sauceCart } from 'cart/cart.js';

const tbody = document.querySelector('#sauce-cart');

for (let i = 0; i < sauceRecipes.length; i++) {
    const sauce = sauceRecipes[i];

    const tr = sauceCart(sauce);

    tbody.appendChild(tr);
}
