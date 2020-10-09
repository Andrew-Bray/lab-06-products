// IMPORT MODULES under test here:
import { calcOrderTotal, renderSauce, calcLineItem, addProduct } from '../utils.js';
import { renderTableRow } from '../cart/render-line-items.js';
import { sauceRecipes } from '../data.js';
import { PRODUCTS } from '../constants.js';

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

test('addProduct should take in a product object and add it to local storage (returning nothing)', (expect) => {

    const newSauce = {
        id: 'alfredo',
        price: 4
    };
    const expected = [
        {
            id: 'cheese-sauce',
            name: 'Vegan Nacho Cheese Sauce',
            image: '../assets/VeganCheesesauce.png',
            description: 'Do you want cheese, and NACHOS? But you are eating a plant-based diet? This sauce will be your new favorite recipe, guaranteed!!',
            recipe: 'https://www.noracooks.com/easy-vegan-nacho-cheese-sauce',
            category: 'sauce',
            happyprice: 5,
            price: 7
        },
        { id: 'tali-sauce',
            name: 'Tali Sauce - As seen at \'The Whole Bowl\'',
            image: '../assets/Tali Sauce.png',
            description: 'If you haven\'t been to the WHole Bowl yet, well then you are missing it all! A spicy, garlicy, lemony, umami sauce that will make you fall in love with nutritional yeast.',
            recipe: 'https://sweetphi.com/the-whole-bowl-tali-sauce-recipe-vegetarian-gluten-free/',
            category: 'sauce',
            happyprice: 4, 
            price: 6,
        },
        { id: 'ajvar',
            name: 'Ajvar',
            image: '../assets/ajvar.png',
            description: 'Who knew that a combination of eggplant, roasted red pepper, garlic, and some other good spices could make a sauce fitting for just about any dish? Try it with goat cheese!',
            recipe: 'https://saltandwind.com/recipes/370-ajvar-roasted-pepper-and-eggplant-dip-recipe',
            category: 'sauce',
            happyprice: 4,
            price: 5,
        }, 
        { id: 'tobys',
            name: 'Toby\'s Tofu Pate',
            image: '../assets/Tobys.png',
            description: 'It goes with anything, it replaces egg salad, it disappears before you knew it! Add a jalapeno for a kick!',
            recipe: 'http://www.bowenappetit.com/2013/08/11/homemade-tobys-tofu-pate/',
            category: 'sauce',
            happyprice: 5,
            price: 6, 
        },
        { id: 'mole',
            name: 'Holy Mole Sauce',
            image: '../assets/Mole.png',
            description: 'Do you cook with it, use it as a marinade, dip chips in like a salsa? yes, yes, and YES!',
            recipe: 'https://www.gimmesomeoven.com/holy-mole-sauce/',
            category: 'sauce',
            happyprice: 4,
            price: 5,
        },
        { id: 'chocolate',
            name: 'Homemade Chocolate Sauce',
            image: '../assets/Chocolate Sauce.png',
            description: 'Who needs Hersheys when it is this easy to make your own chocolate syrup? Be careful though, you\'ll put it in everything!',
            recipe: 'https://barefeetinthekitchen.com/simple-homemade-chocolate-sauce/',
            category: 'sauce',
            happyprice: 4,
            price: 3.5,
        },
        {
            id: 'alfredo',
            price: 4
        }
    ];

    addProduct(newSauce);

    const localStorageAfter = JSON.parse(localStorage.getItem(PRODUCTS));

    expect.deepEqual(expected, localStorageAfter);
});