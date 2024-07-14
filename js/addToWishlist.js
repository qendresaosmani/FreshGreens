function addToWishlist(link) {
    // Retrieve product details from the data attributes
    let name = link.parentNode.parentNode.querySelector('h6').textContent;
    let price = parseFloat(link.parentNode.parentNode.querySelector('h5').textContent.replace('€', ''));
    let image = link.parentNode.parentNode.parentNode.querySelector('img').src;

    // Create a new row for the wishlist table
    let tbody = document.querySelector('#wishlist tbody');
    let newRow = tbody.insertRow();

    // Insert cells into the new row
    let cell1 = newRow.insertCell();
    let cell2 = newRow.insertCell();
    let cell3 = newRow.insertCell();
    let cell4 = newRow.insertCell();
    let cell5 = newRow.insertCell();
    let cell6 = newRow.insertCell();

    // Fill cells with data
    cell1.innerHTML = '<a href="#" onclick="removeFromWishlist(this)">X</a>'; // Remove link
    cell2.innerHTML = `<img src="${image}" alt="${name}" height="60px" width="60px">`; // Image
    cell3.innerHTML = `<h6>${name}</h6>`; // Name
    cell4.textContent = `€${price.toFixed(2)}`; // Price
    cell5.innerHTML = '<input type="number" name="quantity" value="1" min="0" onchange="updateTotal(this)">'; // Quantity input
    cell6.textContent = `€${price.toFixed(2)}`; // Total price

    // Optionally, update total price when quantity changes
    function updateTotal(input) {
        let quantity = parseInt(input.value);
        let price = parseFloat(input.parentNode.previousSibling.textContent.replace('€', ''));
        let total = quantity * price;
        input.parentNode.nextSibling.textContent = `€${total.toFixed(2)}`;
    }
}

// Function to remove row from wishlist
function removeFromWishlist(link) {
    let row = link.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
