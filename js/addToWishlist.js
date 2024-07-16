document.addEventListener('DOMContentLoaded', function() {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let tbody = document.getElementById('wishlist-table-body');

    wishlist.forEach((item, index) => {
        let row = document.createElement('tr');

        let cell1 = document.createElement('td');
        cell1.innerHTML = `<a href="#" onclick="removeFromWishlist(${index})">X</a>`;
        row.appendChild(cell1);

        let cell2 = document.createElement('td');
        cell2.innerHTML = `<img src="${item.image}" alt="${item.name}" height="60px" width="60px">`;
        row.appendChild(cell2);

        let cell3 = document.createElement('td');
        cell3.innerHTML = `<h6>${item.name}</h6>`;
        row.appendChild(cell3);

        let cell4 = document.createElement('td');
        cell4.textContent = `€${parseFloat(item.price).toFixed(2)}`;
        row.appendChild(cell4);

        let cell5 = document.createElement('td');
        let input = document.createElement('input');
        input.type = 'number';
        input.value = 1;
        input.min = 1;
        input.addEventListener('input', function() {
            let quantity = parseInt(input.value);
            let subtotal = quantity * parseFloat(item.price);
            let vat = subtotal * 0.18;
            let total = subtotal + vat;
            cell6.textContent = `€${subtotal.toFixed(2)}`;
            cell7.textContent = `€${vat.toFixed(2)}`;
            cell8.textContent = `€${total.toFixed(2)}`;
        });
        cell5.appendChild(input);
        row.appendChild(cell5);

        let cell6 = document.createElement('td');
        cell6.textContent = `€${parseFloat(item.price).toFixed(2)}`;
        row.appendChild(cell6);

        let cell7 = document.createElement('td');
        cell7.textContent = `€${(parseFloat(item.price) * 0.18).toFixed(2)}`;
        row.appendChild(cell7);

        let cell8 = document.createElement('td');
        cell8.textContent = `€${(parseFloat(item.price) * 1.18).toFixed(2)}`;
        row.appendChild(cell8);

        tbody.appendChild(row);
    });
});

function removeFromWishlist(index) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.splice(index, 1);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    location.reload();
}