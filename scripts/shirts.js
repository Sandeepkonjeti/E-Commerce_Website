function addToCart(productName, price) {
    const cartItem = { productName, price };
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartList = document.getElementById('cart-list');
    const totalElement = document.getElementById('total');
    const quantityElement = document.getElementById('quantity');

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartList.innerHTML = ''; // Clear the cart list

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        const listItem = document.createElement('li');
        listItem.textContent = `${item.productName} - ₹${item.price}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
            removeFromCart(i);
        };
        
        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
        total += parseFloat(item.price);
    }

    totalElement.textContent = total.toFixed(2);
    quantityElement.textContent = cart.length;
}


function showImageModal(imageUrl) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageUrl;
    modal.style.display = 'block';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Update the cart display when the page loads
updateCartDisplay();