import { seedAndGetProducts, setInLocalStorage, addProduct } from '../utils.js';


// Get a reference to the form
const form = document.querySelector('form');
// Subscribe to the submit event
form.addEventListener('submit', (e) => {
    // Don't forget to call event.preventDefault()
    e.preventDefault();
// Create a new FormData object passing in the form
    const data = new FormData(form);
// Make a new product object from the formData (i.e. form.get)
    const id = data.get('id');
    const name = data.get('name');
    const image = data.get('image');
    const description = data.get('image');
    const category = 'sauce';
    const recipe = data.get('recipe');
    const happyprice = data.get('happyprice');
    const price = data.get('price');
// Call your new store addProduct function with the object.
    const newSauce = {
        id: id,
        name: name,
        image: image,
        description: description,
        recipe: recipe,
        category: category,
        happyprice: Number(happyprice),
        price: Number(price),
    };
// Reset the form
    addProduct(newSauce);
});
