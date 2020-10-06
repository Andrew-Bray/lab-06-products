// IMPORT MODULES under test here:
import { renderSauce } from '../app.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li class="sauce" title="Vegan Nacho Cheese Sauce"><h3>Vegan Nacho Cheese Sauce</h3><img src="../assets/VeganCheesesauce.png"><p class="description">Do you want cheese, and NACHOS? But you are eating a plant-based diet? This sauce will be your new favorite recipe, guaranteed!!</p><p class="happy-price"><img src="../assets/Yummys.png"><img src="../assets/Yummys.png"><img src="../assets/Yummys.png"><img src="../assets/Yummys.png"><img src="../assets/Yummys.png"></p><a href="https://www.noracooks.com/easy-vegan-nacho-cheese-sauce/"><button class="recipe-button">Go to Recipe</button></a></li>';

    //Act 
    // Call the function you're testing and set the result to a const
    const sauce = {
        id: 'Cheese Sauce',
        name: 'Vegan Nacho Cheese Sauce',
        image: '../assets/VeganCheesesauce.png',
        description: 'Do you want cheese, and NACHOS? But you are eating a plant-based diet? This sauce will be your new favorite recipe, guaranteed!!',
        recipe: 'https://www.noracooks.com/easy-vegan-nacho-cheese-sauce/',
        category: 'sauce',
        price: 5,
    };
    const actual = renderSauce(sauce);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
