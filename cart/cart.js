import { renderTableRow } from './render-line-items.js';
import { calcOrderTotal, getFromLocalStorage } from '../utils.js';
import { sauceRecipes } from '../data.js';

// I don;t want to import the cart data from where it was before. istead I want to 
//get the cart from th elocalstorage. to do that, I would need to use the right function

const cart = getFromLocalStorage('myCart');

//looping function to calculat full total and add to totalCell
const tbody = document.querySelector('#sauce-cart');

for (let i = 0; i < cart.length; i++) {
    const sauce = cart[i];

    const tr = renderTableRow(sauce);

    tbody.appendChild(tr);
}

const total = calcOrderTotal(cart, sauceRecipes);
const totalCell = document.querySelector('#total');
totalCell.textContent = `$${total.toFixed(2)}`;

//add functions to Place Order Button
const orderButton = document.getElementById('place-order');

orderButton.addEventListener('click', () => {
    //display an alert with the contents of the cart
    alert(JSON.stringify(cart, 2, true));
    //remove items in the cart
    localStorage.removeItem('myCart');
    //go back to main page
    window.location.href = "/";
    
    
});
