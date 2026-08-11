// ============================================================
// Zany'sCollection — Shared Cart Utility
// Cart data lives in the browser's localStorage (persists across
// page loads and visits, until the customer clears their browser data).
// Every page (index, shop, product, cart, checkout) includes this
// file so the cart is consistent everywhere.
// ============================================================

const CART_KEY = 'zanys_cart';

// Cart shape: [ { id, qty, size }, ... ]  — size is null if the product has no sizes

function getCart(){
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch(e) {
    return [];
  }
}

function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(id, qty, size){
  const cart = getCart();
  const existing = cart.find(item => item.id === id && item.size === size);
  if(existing){
    existing.qty += qty;
  } else {
    cart.push({ id, qty, size: size || null });
  }
  saveCart(cart);
}

function removeFromCart(id, size){
  let cart = getCart();
  cart = cart.filter(item => !(item.id === id && item.size === size));
  saveCart(cart);
}

function updateCartQty(id, size, qty){
  const cart = getCart();
  const item = cart.find(i => i.id === id && i.size === size);
  if(item){
    item.qty = Math.max(1, qty);
    saveCart(cart);
  }
}

function clearCart(){
  saveCart([]);
}

function getCartCount(){
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function getCartDetailed(){
  // Joins cart entries with full product info from the shared catalog
  return getCart().map(item => {
    const product = catalog.find(p => p.id === item.id);
    return product ? { ...product, qty: item.qty, size: item.size } : null;
  }).filter(Boolean);
}

function getCartTotal(){
  return getCartDetailed().reduce((sum, item) => sum + item.price * item.qty, 0);
}

// Updates the little number badge on the cart icon in the header, on every page
function updateCartBadge(){
  const count = getCartCount();
  document.querySelectorAll('.cart-dot').forEach(el => {
    el.setAttribute('data-count', count);
    let badge = el.querySelector('.cart-count-num');
    if(!badge){
      // fallback: the ::after pseudo-element shows the number via CSS content,
      // driven by the data-count attribute (see cart-badge-dynamic.css rule below)
    }
  });
}

// Run on every page load
document.addEventListener('DOMContentLoaded', updateCartBadge);
