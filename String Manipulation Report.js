let productName = " wireless headphones PRO ";

productName = productName.trim();

productName = productName.toLowerCase();

let formattedName = productName
  .split(" ") 
  .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
  .join(" "); 

formattedName = formattedName.replace("Pro", "Pro Edition");

console.log("Cleaned Product Title:", formattedName);
console.log("Title Length:", formattedName.length);


