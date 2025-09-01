// Simple Store - app.js
const currency = (n, unit='TZS') => `${unit} ${Number(n).toLocaleString()}`;

async function loadProducts() {
  const res = await fetch('./data/products.json');
  const items = await res.json();
  return items;
}

function getCart() {
  try { return JSON.parse(localStorage.getItem('cart') || '[]'); } catch { return []; }
}
function setCart(cart) { localStorage.setItem('cart', JSON.stringify(cart)); }

function addToCart(product, qty=1) {
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === product.id);
  if (idx >= 0) { cart[idx].qty += qty; } else { cart.push({ id: product.id, name: product.name, price: product.price, unit: product.unit, img: product.img, qty }); }
  setCart(cart);
  toast(`${product.name} added to cart`);
  renderCartBadge();
}

function updateQty(id, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, qty);
  setCart(cart);
}

function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter(i => i.id !== id);
  setCart(cart);
}

function cartTotal() {
  return getCart().reduce((sum, i) => sum + i.price * i.qty, 0);
}

function renderCartBadge() {
  const el = document.querySelector('[data-cart-count]');
  if (!el) return;
  const count = getCart().reduce((sum,i)=>sum+i.qty,0);
  el.textContent = count;
}

// Small toast
function toast(msg) {
  const t = document.createElement('div');
  t.textContent = msg;
  t.style.position='fixed'; t.style.bottom='20px'; t.style.right='20px';
  t.style.padding='10px 14px'; t.style.border='1px solid #1f2937'; t.style.background='#0b1222'; t.style.borderRadius='12px';
  t.style.zIndex='9999';
  document.body.appendChild(t);
  setTimeout(()=>{ t.remove(); }, 1400);
}

window.addEventListener('DOMContentLoaded', () => renderCartBadge());
