const PRODUCTS = [
  { id: 1, name: "Chunky Bee Keychain", category: "keychains", price: 150, stock: 1, image: "assets/chunky-bee-keychain.jpg", note: "Keychain", description: "Handmade keychain." },
{ id: 2, name: "Spiderman Keychain", category: "keychains", price: 190, stock: 4, image: "assets/spiderman-keychain.jpg", note: "Keychain", description: "Handmade keychain." },
{ id: 3, name: "Clover Keychain", category: "keychains", price: 80, stock: 5, image: "assets/clover-keychain.jpg", note: "Keychain", description: "Handmade keychain." },
{ id: 4, name: "Sad Hamster", category: "keychains", price: 200, stock: 2, image: "assets/sad-hamster.jpg", note: "Keychain", description: "Handmade item." },
{ id: 5, name: "Swiss Roll Keychain", category: "keychains", price: 130, stock: 5, image: "assets/swiss-roll-keychain.jpg", note: "Red 2 • Pink 2 • Green 1", description: "Handmade keychain." },
{ id: 6, name: "Lily of the Valley Keychain", category: "keychains", price: 120, stock: 1, image: "assets/lily-of-the-valley-keychain.jpg", note: "Keychain", description: "Handmade keychain." },
{ id: 7, name: "Strawberry Keychain", category: "keychains", price: 100, stock: 7, image: "assets/strawberry-keychain.jpg", note: "Red 2 • Pink 5", description: "Handmade keychain." },
{ id: 8, name: "Kitty Keychain", category: "keychains", price: 180, stock: 1, image: "assets/kitty-keychain.jpg", note: "Keychain", description: "Handmade keychain." },
{ id: 9, name: "Mochi Cat Keychain", category: "keychains", price: 100, stock: 1, image: "assets/mochi-cat-keychain.jpg", note: "Keychain", description: "Handmade keychain." },
{ id: 10, name: "Octo Keychain", category: "keychains", price: 100, stock: 1, image: "assets/octo-keychain.jpg", note: "Keychain", description: "Handmade keychain." },
{ id: 11, name: "Heart Keychain", category: "keychains", price: 50, stock: 4, image: "assets/heart-keychain.jpg", note: "Red 1 • Pink 2 • White 1", description: "Handmade keychain." },
{ id: 12, name: "No Face Keychain", category: "keychains", price: 130, stock: 1, image: "assets/no-face-keychain.jpg", note: "Keychain", description: "Handmade keychain." },
{ id: 13, name: "Jellyfish Keychain", category: "keychains", price: 200, stock: 2, image: "assets/jellyfish-keychain.jpg", note: "Blue 1 • Yellow 1", description: "Handmade keychain." },
{ id: 14, name: "Totoro Keychain", category: "keychains", price: 150, stock: 1, image: "assets/totoro-keychain.jpg", note: "Keychain", description: "Handmade keychain." },
{ id: 15, name: "Eyeball Keychain", category: "keychains", price: 70, stock: 1, image: "assets/eyeball-keychain.jpg", note: "Keychain", description: "Handmade keychain." },
{ id: 16, name: "Sakura Keychain", category: "keychains", price: 90, stock: 1, image: "assets/sakura-keychain.jpg", note: "Keychain", description: "Handmade keychain." },
{ id: 17, name: "Heart with Bow Keychain", category: "keychains", price: 100, stock: 1, image: "assets/heart-with-bow-keychain.jpg", note: "Keychain", description: "Handmade keychain." },
{ id: 18, name: "Fishcake Keychain", category: "keychains", price: 120, stock: 1, image: "assets/fishcake-keychain.jpg", note: "Keychain", description: "Handmade keychain." },
{ id: 19, name: "Yuji Itadori", category: "keychains", price: 130, stock: 1, image: "assets/yuji-itadori.jpg", note: "Keychain", description: "Handmade item." },
{ id: 20, name: "Strawhat Keychain", category: "keychains", price: 100, stock: 1, image: "assets/strawhat-keychain.jpg", note: "Keychain", description: "Handmade keychain." },

  { id: 21, name: "Red Rose", category: "flowers", price: 100, stock: 15, image: "assets/red-rose.jpg", note: "Flower", description: "Handmade flower." },
  { id: 22, name: "White Rose", category: "flowers", price: 100, stock: 2, image: "assets/white-rose.jpg", note: "Flower", description: "Handmade flower." },
  { id: 23, name: "Pink Rose", category: "flowers", price: 100, stock: 2, image: "assets/pink-rose.jpg", note: "Flower", description: "Handmade flower." },
  { id: 24, name: "Sunflower", category: "flowers", price: 180, stock: 2, image: "assets/sunflower.jpg", note: "Flower", description: "Handmade flower." },

  { id: 25, name: "Angry Clip", category: "clips", price: 100, stock: 1, image: "assets/angry-clip.jpg", note: "Clip", description: "Handmade clip." },
  { id: 26, name: "Star Clip", category: "clips", price: 160, stock: 3, image: "assets/star-clip-butterfly-pink-blue.jpg", note: "Butterfly 1 • Pink 1 • Blue 1", description: "Handmade clip." },
  { id: 27, name: "Star Clip Cross", category: "clips", price: 160, stock: 1, image: "assets/star-clip-cross.jpg", note: "Cross 1", description: "Handmade clip." },

  { id: 28, name: "Gajra", category: "bracelet", price: 250, stock: 1, image: "assets/gajra.jpg", note: "Bracelet", description: "Handmade bracelet." },
  { id: 29, name: "Flower Bracelet", category: "bracelet", price: 250, stock: 1, image: "assets/flower-bracelet.jpg", note: "Bracelet", description: "Handmade bracelet." },

  { id: 30, name: "Y2K Sparkle Pendant", category: "necklace", price: 200, stock: 1, image: "assets/sparkle-pendant.jpg", note: "Necklace", description: "Handmade necklace." },
  { id: 31, name: "Y2K Cresent Pendant", category: "necklace", price: 200, stock: 1, image: "assets/cresent-pendant.jpg", note: "Necklace", description: "Handmade necklace." },
  { id: 32, name: "Y2K Heart Pendant", category: "necklace", price: 200, stock: 1, image: "assets/heart-pendant.jpg", note: "Necklace", description: "Handmade necklace." },
  { id: 33, name: "Y2K Moon Sunflower Pendant", category: "necklace", price: 250, stock: 1, image: "assets/moon-sunflower-pendant.jpg", note: "Necklace", description: "Handmade necklace." },
  { id: 34, name: "Y2K Bow Pendant", category: "necklace", price: 200, stock: 1, image: "assets/bow-pendant.jpg", note: "Necklace", description: "Handmade necklace." },
  { id: 35, name: "Y2K Pink Heart Pendent", category: "necklace", price: 200, stock: 1, image: "assets/pink-heart-pendent.jpg", note: "Necklace", description: "Handmade necklace." },
  { id: 36, name: "Y2K Star Pendent", category: "necklace", price: 200, stock: 1, image: "assets/star-pendent.jpg", note: "Necklace", description: "Handmade necklace." },

  { id: 37, name: "Moon Earings", category: "earings", price: 139, stock: 1, image: "assets/moon-earings-1.jpg", note: "Earings", description: "Handmade earings." },
  { id: 38, name: "Heart Earings", category: "earings", price: 139, stock: 1, image: "assets/heart-earings.jpg", note: "Earings", description: "Handmade earings." },
  { id: 39, name: "Moon Earings Small", category: "earings", price: 139, stock: 1, image: "assets/moon-earings-2.jpg", note: "Earings", description: "Handmade earings." },
  { id: 40, name: "Bow Earings", category: "earings", price: 139, stock: 1, image: "assets/bow-earings.jpg", note: "Earings", description: "Handmade earings." },
  { id: 41, name: "Red Earings", category: "earings", price: 139, stock: 1, image: "assets/red-earings.jpg", note: "Earings", description: "Handmade earings." },

  { id: 42, name: "White Brooch", category: "brooches", price: 199, stock: 1, image: "assets/white-brooch.jpg", note: "Brooch", description: "Handmade brooch." },
  { id: 43, name: "Dreamy Brooch", category: "brooches", price: 199, stock: 1, image: "assets/dreamy-brooch.jpg", note: "Brooch", description: "Handmade brooch." },
  { id: 44, name: "Pink Brooch", category: "brooches", price: 199, stock: 1, image: "assets/pink-brooch.jpg", note: "Brooch", description: "Handmade brooch." },
  { id: 45, name: "Blue Brooch", category: "brooches", price: 199, stock: 1, image: "assets/blue-brooch.jpg", note: "Brooch", description: "Handmade brooch." },

  { id: 46, name: "Chiikawa", category: "clay charms", price: 250, stock: 1, image: "assets/chiikawa.jpg", note: "Clay Charm", description: "Handmade clay charm." },
  { id: 47, name: "Hachiware", category: "clay charms", price: 250, stock: 1, image: "assets/hachiware.jpg", note: "Clay Charm", description: "Handmade clay charm." },
  { id: 48, name: "Usagi", category: "clay charms", price: 250, stock: 1, image: "assets/usagi.jpg", note: "Clay Charm", description: "Handmade clay charm." },
  { id: 49, name: "Snoppy", category: "clay charms", price: 100, stock: 1, image: "assets/snoppy.jpg", note: "Clay Charm", description: "Handmade clay charm." },
  { id: 50, name: "Seal", category: "clay charms", price: 100, stock: 1, image: "assets/seal.jpg", note: "Clay Charm", description: "Handmade clay charm." },
  { id: 51, name: "Shinchan", category: "clay charms", price: 150, stock: 1, image: "assets/shinchan.jpg", note: "Clay Charm", description: "Handmade clay charm." },
  { id: 52, name: "Sleepy Shinchan", category: "clay charms", price: 150, stock: 1, image: "assets/sleepy-shinchan.jpg", note: "Clay Charm", description: "Handmade clay charm." },
  { id: 53, name: "Fish", category: "clay charms", price: 70, stock: 1, image: "assets/fish.jpg", note: "Clay Charm", description: "Handmade clay charm." },
  { id: 54, name: "Apple", category: "clay charms", price: 90, stock: 1, image: "assets/apple.jpg", note: "Clay Charm", description: "Handmade clay charm." },
  { id: 55, name: "Thukuna", category: "clay charms", price: 150, stock: 1, image: "assets/thukuna.jpg", note: "Clay Charm", description: "Handmade clay charm." },
  { id: 56, name: "Dango Miffy", category: "clay charms", price: 100, stock: 1, image: "assets/dango-miffy.jpg", note: "Clay Charm", description: "Handmade clay charm." },
  { id: 57, name: "Strawberry Miffy", category: "clay charms", price: 100, stock: 1, image: "assets/strawberry-miffy.jpg", note: "Clay Charm", description: "Handmade clay charm." },
  { id: 58, name: "Banana Cat", category: "clay charms", price: 180, stock: 1, image: "assets/banana-cat.jpg", note: "Clay Charm", description: "Handmade clay charm." },
  { id: 59, name: "Pompompurin", category: "clay charms", price: 200, stock: 1, image: "assets/pompompurin.jpg", note: "Clay Charm", description: "Handmade clay charm." },
  { id: 60, name: "Cute Fish", category: "clay charms", price: 100, stock: 1, image: "assets/cute-fish.jpg", note: "Clay Charm", description: "Handmade clay charm." }
];

const STORAGE_KEY = "nekoooCart";
let activeFilter = "all";
let activeProduct = null;
let currentSelectedQty = 1;

function getCart() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

function getProductById(id) {
  return PRODUCTS.find((product) => product.id === id);
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

function updateCartBadge() {
  const badge = document.getElementById("cartCount");
  if (badge) badge.textContent = getCartCount();
}

function addToCart(productId, quantity) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === productId);
  const product = getProductById(productId);
  if (!product) return;

  const currentQty = existing ? existing.quantity : 0;
  const finalQty = Math.min(currentQty + quantity, product.stock);

  if (existing) {
    existing.quantity = finalQty;
  } else {
    cart.push({ id: productId, quantity: Math.min(quantity, product.stock) });
  }

  saveCart(cart);
  updateCartBadge();
}

const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const tagButtons = document.querySelectorAll(".tag-btn");
const productModal = document.getElementById("productModal");
const closeModal = document.getElementById("closeModal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalCategory = document.getElementById("modalCategory");
const modalPrice = document.getElementById("modalPrice");
const modalStock = document.getElementById("modalStock");
const modalDescription = document.getElementById("modalDescription");
const selectedQty = document.getElementById("selectedQty");
const minusQty = document.getElementById("minusQty");
const plusQty = document.getElementById("plusQty");
const addToCartBtn = document.getElementById("addToCartBtn");

function renderProducts() {
  const searchValue = searchInput.value.trim().toLowerCase();

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesFilter = activeFilter === "all" || product.category === activeFilter;
    const matchesSearch =
      product.name.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue) ||
      product.note.toLowerCase().includes(searchValue);
    return matchesFilter && matchesSearch;
  });



  resultCount.textContent = `Showing ${filteredProducts.length} item${filteredProducts.length !== 1 ? "s" : ""}`;

  if (!filteredProducts.length) {
    productsGrid.innerHTML = `<div class="empty-state">No products found.<br>Try another tag or search word.</div>`;
    return;
  }

  productsGrid.innerHTML = filteredProducts.map((product) => `
    <article class="card" data-id="${product.id}">
      <div class="card-image">
        <span class="mini-badge">${product.note}</span>
        <img class="product-image" src="${product.image}" alt="${product.name}" onerror="this.src='assets/placeholder.jpg'" />
      </div>
      <h4>${product.name}</h4>
      <span class="category">${product.category}</span>
      <p>${product.description}</p>
      <div class="stock">Available: ${product.stock}</div>
      <div class="price">
  <strike>₹${product.price + 80}</strike>
  <span class="new-price">₹${product.price}</span>
</div>
    </article>
  `).join("");

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => openModal(Number(card.dataset.id)));
  });
}

function openModal(productId) {
  activeProduct = getProductById(productId);
  if (!activeProduct) return;

  currentSelectedQty = 1;
  selectedQty.textContent = currentSelectedQty;
  modalImage.src = activeProduct.image;
  modalImage.alt = activeProduct.name;
  modalName.textContent = activeProduct.name;
  modalCategory.textContent = activeProduct.category;
  modalPrice.textContent = `₹${activeProduct.price}`;
  modalStock.textContent = `Available: ${activeProduct.stock}`;
  modalDescription.textContent = activeProduct.note;
  productModal.classList.remove("hidden");
}

function closeProductModal() {
  productModal.classList.add("hidden");
}

minusQty.addEventListener("click", () => {
  if (currentSelectedQty > 1) {
    currentSelectedQty -= 1;
    selectedQty.textContent = currentSelectedQty;
  }
});

plusQty.addEventListener("click", () => {
  if (activeProduct && currentSelectedQty < activeProduct.stock) {
    currentSelectedQty += 1;
    selectedQty.textContent = currentSelectedQty;
  }
});

addToCartBtn.addEventListener("click", () => {
  if (!activeProduct) return;
  addToCart(activeProduct.id, currentSelectedQty);
  closeProductModal();
  alert("Added to cart 💖");
});

closeModal.addEventListener("click", closeProductModal);
productModal.addEventListener("click", (event) => {
  if (event.target === productModal) closeProductModal();
});

tagButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tagButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderProducts();
  });
});

searchInput.addEventListener("input", renderProducts);
updateCartBadge();
renderProducts();

makeStableRandomOrder();


function closeProductModal() {
  productModal.classList.add("hidden");
}

minusQty.addEventListener("click", () => {
  if (currentSelectedQty > 1) {
    currentSelectedQty--;
    selectedQty.textContent = currentSelectedQty;
  }
});

plusQty.addEventListener("click", () => {
  if (activeProduct && currentSelectedQty < activeProduct.stock) {
    currentSelectedQty++;
    selectedQty.textContent = currentSelectedQty;
  }
});

addToCartBtn.addEventListener("click", () => {
  if (!activeProduct) return;
  addToCart(activeProduct.id, currentSelectedQty);
  closeProductModal();
});

closeModal.addEventListener("click", closeProductModal);

productModal.addEventListener("click", (event) => {
  if (event.target === productModal) {
    closeProductModal();
  }
});
