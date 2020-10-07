import { sauceRecipes } from '../data.js';
import { findById, calcLineItem } from '../utils.js';

export function renderTableRow(cart) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdTotal = document.createElement('td');

    const sauceData = findById(sauceRecipes, cart.id);
    const price = sauceData.price;
    const name = sauceData.name;


    tdPrice.textContent = `$${price.toFixed(2)}`;
    tdName.textContent = name;

    tdQuantity.textContent = cart.quantity;

    const total = calcLineItem(price, cart.quantity);
    tdTotal.textContent = `$${total.toFixed(2)}`;

    tr.append(tdName, tdQuantity, tdPrice, tdTotal);

    return tr;
}