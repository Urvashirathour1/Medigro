function addToCart(id, name, price) {
  // Get the cart from localStorage or create an empty array if none
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if the product is already in the cart
  let existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    // If product exists, increase the quantity
    existingItem.quantity += 1;
  } else {
    // If product does not exist, add new item with quantity 1
    cart.push({ id, name, price, quantity: 1 });
  }

  // Save updated cart back to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Optionally update cart count on page (if you have one)
  updateCartCount();

  // Alert user or show message
  alert(${name} added to cart!);
}
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cart-count').textContent = totalCount;
}