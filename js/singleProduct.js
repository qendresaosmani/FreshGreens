const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('name');
const productPrice = urlParams.get('price');
const productImage = urlParams.get('image');

// Set product details
document.getElementById('productName').textContent = productName;
document.getElementById('productPrice').textContent = `€ ${productPrice}`;
document.getElementById('productImage').src = productImage;
