// JavaScript for Interactivity

// Thumbnail image click event to change main image
const thumbnailImages = document.querySelectorAll('.thumbnail-img');
const mainImage = document.querySelector('.col-md-6 img');

thumbnailImages.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        mainImage.src = thumbnail.src;
    });
});

// "Add to Cart" button click event
const addToCartButton = document.getElementById('add-to-cart');
addToCartButton.addEventListener('click', () => {
    alert("Item added to cart!");
});
// Example JavaScript to update cart count
function updateCartCount(count) {
    document.getElementById('cart-count').innerText = count;
}

// Example usage: Update cart count to 5 items
updateCartCount(5);
