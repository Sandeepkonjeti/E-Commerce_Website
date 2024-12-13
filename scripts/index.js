let currentIndex = 0;
const ads = document.querySelectorAll('.ad-image');
const adContent = document.querySelector('.ad-content');

function showAd(index) {
    adContent.style.transform = `translateX(-${index * 100}%)`;
}

function nextAd() {
    currentIndex = (currentIndex + 1) % ads.length;
    showAd(currentIndex);
}

function prevAd() {
    currentIndex = (currentIndex - 1 + ads.length) % ads.length;
    showAd(currentIndex);
}

const categoryContainer = document.querySelector('.category-container');

// Smoothly scroll the categories
categoryContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    categoryContainer.scrollLeft += e.deltaY;
});


let imageEnlarged = false;

        function addToCart(productName, price) {
            const cartItem = { productName, price };
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(cartItem);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
        }

        function toggleImageSize(imageUrl) {
            const modal = document.getElementById('imageModal');
            const modalImage = document.getElementById('modalImage');

            if (!imageEnlarged) {
                modalImage.style.width = 'auto';
                modalImage.style.height = '80vh'; // You can adjust the height as needed
                imageEnlarged = true;
            } else {
                modalImage.style.width = 'auto';
                modalImage.style.height = 'auto';
                imageEnlarged = false;
            }

            modalImage.src = imageUrl;
            modal.style.display = 'block';
        }

        function closeImageModal() {
            const modal = document.getElementById('imageModal');
            const modalImage = document.getElementById('modalImage');
            modalImage.style.width = 'auto';
            modalImage.style.height = 'auto';
            modal.style.display = 'none';
        }

        function addToCart(productName, price) {
            const cartItem = { productName, price };
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(cartItem);
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
            for (const item of cart) {
                const listItem = document.createElement('li');
                listItem.textContent = `${item.productName} - ₹${item.price}`;
                cartList.appendChild(listItem);
                total += parseFloat(item.price);
            }

            totalElement.textContent = total.toFixed(2);
            quantityElement.textContent = cart.length;
        }

        // Update the cart display when the page loads
        updateCartDisplay();

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
// JavaScript function to show the popup
function openPopup() {
    var popupOverlay = document.getElementById("popupOverlay");
    var popup = document.getElementById("popup");
    popupOverlay.style.display = "block";
    popup.style.display = "block";
}

// JavaScript function to close the popup
function closePopup() {
    var popupOverlay = document.getElementById("popupOverlay");
    var popup = document.getElementById("popup");
    popupOverlay.style.display = "none";
    popup.style.display = "none";
}