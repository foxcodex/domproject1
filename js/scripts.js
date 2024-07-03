// script.js

document.addEventListener('DOMContentLoaded', function () {
    const cartList = document.getElementById('cartList');
    const totalPriceElement = document.getElementById('totalPrice');

    //Here to update the total mount
    function updateTotalPrice() {
        let totalPrice = 0;
        const items = cartList.querySelectorAll('li');
        items.forEach(item => {
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            const price = parseFloat(item.querySelector('.price').getAttribute('data-price'));
            totalPrice += quantity * price;
        });
        totalPriceElement.textContent = `${totalPrice}$`;
    }

    // Click event
    cartList.addEventListener('click', function (e) {
        const target = e.target;
        const listItem = target.closest('li');

        if (target.classList.contains('plus')) {
            const quantityElement = listItem.querySelector('.quantity');
            quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
            updateTotalPrice();
        }

        if (target.classList.contains('minus')) {
            const quantityElement = listItem.querySelector('.quantity');
            const currentQuantity = parseInt(quantityElement.textContent);
            if (currentQuantity > 1) {
                quantityElement.textContent = currentQuantity - 1;
                updateTotalPrice();
            }
        }

        if (target.classList.contains('delete-button')) {
            listItem.remove();
            updateTotalPrice();
        }

        if (target.classList.contains('like-button')) {
            target.classList.toggle('liked');
        }
    });

    // Initial total price calculation
    updateTotalPrice();
});
