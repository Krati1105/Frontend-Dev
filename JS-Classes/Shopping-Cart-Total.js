// Q9: Shopping Cart Total (Classes + RegExp for Coupon)
// Cart class, add items, getTotal(), apply coupon SAVE20 or DISC10, show final total.

class Cart {
    constructor() {
        this.items = [];
    }

    // Add item
    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    // Get total
    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Apply coupon
    applyCoupon(coupon) {
        const regex = /^(SAVE|DISC)\d{2}$/;
        if (!regex.test(coupon)) {
            return false; // Invalid coupon
        }
        const discount = parseInt(coupon.slice(-2));
        const total = this.getTotal();
        const discountedTotal = total - (total * discount / 100);
        return discountedTotal;
    }
}

// Example usage
const cart = new Cart();
cart.addItem('Apple', 2, 5);
cart.addItem('Banana', 1, 10);

console.log('Total:', cart.getTotal());
const finalTotal = cart.applyCoupon('SAVE20');
if (finalTotal !== false) {
    console.log('Final Total after discount:', finalTotal);
} else {
    console.log('Invalid coupon.');
}
