 // Retrieve and display cart items
 function displayCartItems() {
    const cartList = document.getElementById('cart-list');
    const totalElement = document.getElementById('total');
    const quantityElement = document.getElementById('quantity');

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartList.innerHTML = ''; // Clear the cart list

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        const listItem = document.createElement('li');

        // Create an image element
        const imageElement = document.createElement('img');
        imageElement.style.maxHeight = '100px'; // Set the maximum height here
        imageElement.src = item.imageUrl; // Add the image URL here
        imageElement.alt = item.productName; // Add the alt text here

        // Create a div to hold product details
        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('product-details');

        // Create product name element
        const productName = document.createElement('h3');
        productName.textContent = item.productName;

        // Create price element
        const priceElement = document.createElement('p');
        priceElement.textContent = `Price: ₹${item.price}`;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function () {
            removeFromCart(i);
        };

        // Append elements to the cart item list item
        detailsDiv.appendChild(productName);
        detailsDiv.appendChild(priceElement);
        detailsDiv.appendChild(removeButton);

        listItem.appendChild(imageElement);
        listItem.appendChild(detailsDiv);

        cartList.appendChild(listItem);

        total += parseFloat(item.price);
    }

    totalElement.textContent = total.toFixed(2);
    quantityElement.textContent = cart.length;
}

// Remove item from cart
function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

// Update the cart display when the page loads
displayCartItems();