import { renderTableRow } from './render-line-items.js';
import { sauceCart } from '../data/cart-data.js';
import { calcOrderTotal } from '../utils.js';
import { sauceRecipes } from '../data.js';

const tbody = document.querySelector('#sauce-cart');

for (let i = 0; i < sauceCart.length; i++) {
    const sauce = sauceCart[i];

    const tr = renderTableRow(sauce);

    tbody.appendChild(tr);
}

const total = calcOrderTotal(sauceCart, sauceRecipes);
const totalCell = document.querySelector('#total');
totalCell.textContent = `$${total.toFixed(2)}`;