import { renderTableRow } from './render-line-items.js';
import { sauceCart } from '../data/cart-data.js';

const tbody = document.querySelector('#sauce-cart');

for (let i = 0; i < sauceCart.length; i++) {
    const sauce = sauceCart[i];

    const tr = renderTableRow(sauce);

    tbody.appendChild(tr);
}
