
//item in an array (suaceArray) that matches said item (sauceId)
export function findById(sauceArray, sauceId) {
    for (let i = 0; i < sauceArray.length; i++) {
        const item = sauceArray[i];
        if (item.id === sauceId) {
            return item;
        } 
    } return null;
}
// multiplies amount by quantity
export function calcLineItem(quantity, amount) {
    const lineItem = quantity * amount;
    return lineItem;
}

//takes cart array and products array
export function calcOrderTotal(cartArray, sauceArray) {
    let accumulator = 0;
    for (let i = 0; i < cartArray.length; i++) {
        const item = cartArray[i];
        const actualItem = findById(sauceArray, item.id);
        const subTotal = actualItem.price * item.quantity;
        accumulator = accumulator + subTotal;    
    }
    return accumulator;
}
//returns a key from localStorage after parsing it
export function getFromLocalStorage(key) {
    const stringedKey = localStorage.getItem(key);
    return JSON.parse(stringedKey);
}

// stringifies a value, and sets the item in localStorage in the key) --> this function will not return anything
export function setInLocalStorage(key, value) {
    const stringedObject = JSON.stringify(value);
    localStorage.setItem(key, stringedObject);
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

    const recipeButton = document.createElement('button');
    recipeButton.classList.add('recipe-button');
    recipeButton.textContent = 'Go to Recipe';

    const divCart = document.createElement('div');
    divCart.classList.add('cart-line');

    const cartButton = document.createElement('button');
    cartButton.id = 'cart-button';
    cartButton.textContent = 'Add to Cart';

    //Sjaan's brillian constructor approach
    const selector = document.createElement('select');
    selector.id = ('select-number-' + sauce.id);

    const num = new Option();
    num.value = 1;
    num.text = '1';
    selector.options.add(num);
    const num2 = new Option();
    num2.value = 2;
    num2.text = '2';
    selector.options.add(num2);
    const num3 = new Option();
    num3.value = 3;
    num3.text = '3';
    selector.options.add(num3);
    const num4 = new Option();
    num4.value = 4;
    num4.text = '4';
    selector.options.add(num4);
    const num5 = new Option();
    num5.value = 5;
    num5.text = '5';
    selector.options.add(num5);

    //cartButton add event listener - which does a bunch of complex things 
//refactor later

    cartButton.addEventListener('click', () => {
        const dropDown = document.getElementById('select-number-' + sauce.id);
        const addCartNumber = Number(dropDown.value);
        const cart = getFromLocalStorage('myCart') || []; // get or inialize the cart
        const itemInCart = findById(cart, sauce.id);
     // if item doesn't yet exist, make one with these properites
        if (itemInCart === null) {
            const newCartItem = {
                id: sauce.id,
                quantity: addCartNumber,
            };
            cart.push(newCartItem);
    // otherwise, add 1 to the item amount
        } else {
            itemInCart.quantity += addCartNumber;
        }
        // and then run thru function to stringify it and store it in 'myCart'
        setInLocalStorage('myCart', cart);
    }
    );

    li.appendChild(h3);
    li.appendChild(img);
    li.appendChild(description);
    li.appendChild(happyPrice);
    li.appendChild(price);
    li.appendChild(recipeLink);
    recipeLink.appendChild(recipeButton);
    li.appendChild(divCart);
    divCart.appendChild(cartButton);
    divCart.appendChild(selector);
    //selector.appendChild();

    return li;
}
