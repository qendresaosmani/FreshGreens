document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.featured_controls ul li');
    const items = document.querySelectorAll('.item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');
            items.forEach(item => {
                if (filter === 'all') {
                    item.classList.remove('hidden_products');
                } else {
                    if (item.classList.contains(filter)) {
                        item.classList.remove('hidden_products');
                    } else {
                        item.classList.add('hidden_products');
                    }
                }
            });
        });
    });
});
