// import functions and grab DOM elements

// initialize state
// set event listeners to update state and DOM

const sauce = {
    id: 'Cheese Sauce',
    name: 'Vegan Nacho Cheese Sauce',
    image: '../assets/VeganCheesesauce.png',
    description: 'Do you want cheese, and NACHOS? But you are eating a plant-based diet? This sauce will be your new favorite recipe, guaranteed!!',
    recipe: 'https://www.noracooks.com/easy-vegan-nacho-cheese-sauce',
    category: 'sauce',
    price: 5,
};

export function renderSauce(sauce) {
 // creates the list element
    const li = document.createElement('li');
    li.classList.add(sauce.category);
    li.title = sauce.name;
// creates the h3 (name) element
    const h3 = document.createElement('h3');
    h3.textContent = sauce.name;
// creates the image element
    const img = document.createElement('img');
    img.src = sauce.image;
//
    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = sauce.description;

    const happyPrice = document.createElement('p');
    happyPrice.classList.add('happy-price');

    for (let i = 0; i < sauce.price ; i++) {
        const yummy = document.createElement('img');
        yummy.src = '../assets/Yummys.png';
        happyPrice.appendChild(yummy);
    }

    const recipeLink = document.createElement('a');
    recipeLink.href = sauce.recipe;

    const button = document.createElement('button');
    button.classList.add('recipe-button');
    button.textContent = 'Go to Recipe';

    li.appendChild(h3);
    li.appendChild(img);
    li.appendChild(description);
    li.appendChild(happyPrice);
    li.appendChild(recipeLink);
    recipeLink.appendChild(button);

    return li;
}
