const defaultProduct = {
    name: 'Avocado',
    price: '5.99',
    image: '../images/fruit1.jpg'
  };

  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const productName = urlParams.get('name') || defaultProduct.name;
  const productPrice = urlParams.get('price') || defaultProduct.price;
  const productImage = urlParams.get('image') || defaultProduct.image;

  // Set product details
  document.getElementById('productName').textContent = productName;
  document.getElementById('productPrice').textContent = `€ ${productPrice}`;
  document.getElementById('productImage').src = productImage;


  
  //Increment Decrement button
  let numberInput = document.getElementById("number");

  function decrement() {
    let currentValue = parseInt(numberInput.value);
    if (currentValue > 1)
    numberInput.value = currentValue - 1;
  }

  function increment() {
    let currentValue = parseInt(numberInput.value);
    numberInput.value = currentValue + 1;
  }


  // Add to Cart
function addToCart() {
    const product = {
      name: productName,
      price: productPrice,
      image: productImage
    };

    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));

    alert('Product added to wishlist!');
  }