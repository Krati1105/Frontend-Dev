// Q1: E-Commerce Product Manager (Classes + Objects)
// Create a Product class with properties: id, name, price, category.
// Add methods to apply discount and display product details.
// Create multiple product objects, store in array, display products with price > 1000.

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply discount method
    applyDiscount(percent) {
        this.price -= (this.price * percent) / 100;
    }

    // Display product details in formatted string
    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price.toFixed(2)}, Category: ${this.category}`;
    }
}

// Create multiple product objects
const products = [
    new Product(1, 'Laptop', 1200, 'Electronics'),
    new Product(2, 'Book', 20, 'Education'),
    new Product(3, 'Phone', 800, 'Electronics'),
    new Product(4, 'Shirt', 50, 'Clothing'),
    new Product(5, 'Tablet', 1500, 'Electronics')
];

// Display products with price > 1000
const expensiveProducts = products.filter(product => product.price > 1000);
console.log('Products with price > 1000:');
expensiveProducts.forEach(product => console.log(product.displayDetails()));
