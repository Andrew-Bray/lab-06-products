// IMPORT MODULES under test here:
import { calcOrderTotal, renderSauce, calcLineItem } from '../utils.js';
import { renderTableRow } from '../cart/render-line-items.js';
import { sauceRecipes } from '../data.js';

const test = QUnit.test;

test('testing the render sauce funtion to show in HTML for the products page', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="sauce" title="Homemade Chocolate Sauce"><h3>Homemade Chocolate Sauce</h3><img src="../assets/Chocolate Sauce.png"><p class="description">Who needs Hersheys when it is this easy to make your own chocolate syrup? Be careful though, you'll put it in everything!</p><p class="happy-price"><img src="../assets/Yummys.png"><img src="../assets/Yummys.png"><img src="../assets/Yummys.png"><img src="../assets/Yummys.png"></p><p class="price">$3.50 per jar</p><a href="https://barefeetinthekitchen.com/simple-homemade-chocolate-sauce/"><button class="recipe-button">Go to Recipe</button></a><div class="cart-line"><button id="cart-button">Add to Cart</button><select id="select-number-chocolate"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div></li>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const sauce = {
        id: 'chocolate',
        name: 'Homemade Chocolate Sauce',
        image: '../assets/Chocolate Sauce.png',
        description: 'Who needs Hersheys when it is this easy to make your own chocolate syrup? Be careful though, you\'ll put it in everything!',
        recipe: 'https://barefeetinthekitchen.com/simple-homemade-chocolate-sauce/',
        category: 'sauce',
        happyprice: 4,
        price: 3.5,
    };
    const actual = renderSauce(sauce);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('testing to make an accurate Cart Line Item', (expect) =>
{
    const expected = '<tr><td>Homemade Chocolate Sauce</td><td>3</td><td>$3.50</td><td>$10.50</td></tr>';

    const cart = [{
        id: 'chocolate',
        quantity: 3,
    }];

    const actual = renderTableRow(cart, sauceRecipes);

    expect.equal(actual.outerHTML, expected);

});

test('testing our calcOrderTotal function', (expect) =>
{
    const expected = 22;

    const sauceCart = [{
        id: 'ajvar',
        quantity: 3,
    }, {
        id: 'chocolate',
        quantity: 2,
    }
    ];

    const actual = calcOrderTotal(sauceCart, sauceRecipes);

    expect.equal(actual, expected);

});

test('testing our calcLineItem function. Should return 12', (expect) =>
{
    const expected = 12;

    const sauceCart = 3;
    const sauceRecipes = 4;
  
    const actual = calcLineItem(sauceCart, sauceRecipes);
    expect.equal(actual, expected);

});
