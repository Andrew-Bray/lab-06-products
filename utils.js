

export function findById(sauceArray, sauceId) {
    for (let i = 0; i < sauceArray.length; i++) {
        const item = sauceArray[i];
        if (item.id === sauceId) {
            return item;
        } 
    } return null;
}

export function calcLineItem(quantity, amount) {
    const lineItem = quantity * amount;
    return lineItem;
}

//makes the Sauce Products show up in HTML format
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

    for (let i = 0; i < sauce.happyprice ; i++) {
        const yummy = document.createElement('img');
        yummy.src = '../assets/Yummys.png';
        happyPrice.appendChild(yummy);
    }

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `$${sauce.price.toFixed(2)} per jar`;

    const recipeLink = document.createElement('a');
    recipeLink.href = sauce.recipe;

    const button = document.createElement('button');
    button.classList.add('recipe-button');
    button.textContent = 'Go to Recipe';

    li.appendChild(h3);
    li.appendChild(img);
    li.appendChild(description);
    li.appendChild(happyPrice);
    li.appendChild(price);
    li.appendChild(recipeLink);
    recipeLink.appendChild(button);

    return li;
}
