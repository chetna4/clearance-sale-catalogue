const PRODUCTS = [
  { id: 1, name: "Chunky Bee Keychain", category: "keychains", price: 150, stock: 1, image: "assets/chunky-bee-keychain.jpg" },
  { id: 2, name: "Spiderman Keychain", category: "keychains", price: 190, stock: 4, image: "assets/spiderman-keychain.jpg" },
  { id: 3, name: "Clover Keychain", category: "keychains", price: 80, stock: 5, image: "assets/clover-keychain.jpg" },
  { id: 4, name: "Sad Hamster", category: "keychains", price: 200, stock: 2, image: "assets/sad-hamster.jpg" },
  { id: 5, name: "Swiss Roll Keychain", category: "keychains", price: 130, stock: 5, image: "assets/swiss-roll-keychain.jpg" },
  { id: 6, name: "Lily of the Valley Keychain", category: "keychains", price: 120, stock: 1, image: "assets/lily-of-the-valley-keychain.jpg" },
  { id: 7, name: "Strawberry Keychain", category: "keychains", price: 100, stock: 7, image: "assets/strawberry-keychain.jpg" },
  { id: 8, name: "Kitty Keychain", category: "keychains", price: 180, stock: 1, image: "assets/kitty-keychain.jpg" },
  { id: 9, name: "Mochi Cat Keychain", category: "keychains", price: 100, stock: 1, image: "assets/mochi-cat-keychain.jpg" },
  { id: 10, name: "Octo Keychain", category: "keychains", price: 100, stock: 1, image: "assets/octo-keychain.jpg" },
  { id: 11, name: "Heart Keychain", category: "keychains", price: 50, stock: 4, image: "assets/heart-keychain.jpg" },
  { id: 12, name: "No Face Keychain", category: "keychains", price: 130, stock: 1, image: "assets/no-face-keychain.jpg" },
  { id: 13, name: "Jellyfish Keychain", category: "keychains", price: 200, stock: 2, image: "assets/jellyfish-keychain.jpg" },
  { id: 14, name: "Totoro Keychain", category: "keychains", price: 150, stock: 1, image: "assets/totoro-keychain.jpg" },
  { id: 15, name: "Eyeball Keychain", category: "keychains", price: 70, stock: 1, image: "assets/eyeball-keychain.jpg" },
  { id: 16, name: "Sakura Keychain", category: "keychains", price: 90, stock: 1, image: "assets/sakura-keychain.jpg" },
  { id: 17, name: "Heart with Bow Keychain", category: "keychains", price: 100, stock: 1, image: "assets/heart-with-bow-keychain.jpg" },
  { id: 18, name: "Fishcake Keychain", category: "keychains", price: 120, stock: 1, image: "assets/fishcake-keychain.jpg" },
  { id: 19, name: "Yuji Itadori", category: "keychains", price: 130, stock: 1, image: "assets/yuji-itadori.jpg" },
  { id: 20, name: "Strawhat Keychain", category: "keychains", price: 100, stock: 1, image: "assets/strawhat-keychain.jpg" },

  { id: 21, name: "Red Rose", category: "flowers", price: 140, stock: 15, image: "assets/red-rose.jpg" },
  { id: 22, name: "White Rose", category: "flowers", price: 140, stock: 2, image: "assets/white-rose.jpg" },
  { id: 23, name: "Pink Rose", category: "flowers", price: 140, stock: 2, image: "assets/pink-rose.jpg" },
  { id: 24, name: "Sunflower", category: "flowers", price: 180, stock: 2, image: "assets/sunflower.jpg" },

  { id: 25, name: "Angry Clip", category: "clips", price: 150, stock: 1, image: "assets/angry-clip.jpg" },
  { id: 26, name: "Star Clip", category: "clips", price: 200, stock: 3, image: "assets/star-clip-butterfly-pink-blue.jpg" },
  { id: 27, name: "Star Clip Cross", category: "clips", price: 190, stock: 1, image: "assets/star-clip-cross.jpg" },

  { id: 28, name: "Gajra", category: "bracelet", price: 250, stock: 1, image: "assets/gajra.jpg" },
  { id: 29, name: "Flower Bracelet", category: "bracelet", price: 300, stock: 1, image: "assets/flower-bracelet.jpg" },

  { id: 30, name: "Sparkle Pendant", category: "necklace", price: 250, stock: 1, image: "assets/sparkle-pendant.jpg" },
  { id: 31, name: "Cresent Pendant", category: "necklace", price: 250, stock: 1, image: "assets/cresent-pendant.jpg" },
  { id: 32, name: "Heart Pendant", category: "necklace", price: 200, stock: 1, image: "assets/heart-pendant.jpg" },
  { id: 33, name: "Moon Sunflower Pendant", category: "necklace", price: 250, stock: 1, image: "assets/moon-sunflower-pendant.jpg" },
  { id: 34, name: "Bow Pendant", category: "necklace", price: 200, stock: 1, image: "assets/bow-pendant.jpg" },
  { id: 35, name: "Pink Heart Pendent", category: "necklace", price: 200, stock: 1, image: "assets/pink-heart-pendent.jpg" },
  { id: 36, name: "Star Pendent", category: "necklace", price: 200, stock: 1, image: "assets/star-pendent.jpg" },

  { id: 37, name: "Moon Earings", category: "earings", price: 250, stock: 1, image: "assets/moon-earings-1.jpg" },
  { id: 38, name: "Heart Earings", category: "earings", price: 250, stock: 1, image: "assets/heart-earings.jpg" },
  { id: 39, name: "Moon Earings Small", category: "earings", price: 225, stock: 1, image: "assets/moon-earings-2.jpg" },
  { id: 40, name: "Bow Earings", category: "earings", price: 200, stock: 1, image: "assets/bow-earings.jpg" },
  { id: 41, name: "Red Earings", category: "earings", price: 200, stock: 1, image: "assets/red-earings.jpg" },

  { id: 42, name: "White Brooch", category: "brooches", price: 300, stock: 1, image: "assets/white-brooch.jpg" },
  { id: 43, name: "Dreamy Brooch", category: "brooches", price: 300, stock: 1, image: "assets/dreamy-brooch.jpg" },
  { id: 44, name: "Pink Brooch", category: "brooches", price: 300, stock: 1, image: "assets/pink-brooch.jpg" },
  { id: 45, name: "Blue Brooch", category: "brooches", price: 300, stock: 1, image: "assets/blue-brooch.jpg" },

  { id: 46, name: "Chiikawa", category: "clay charms", price: 250, stock: 1, image: "assets/chiikawa.jpg" },
  { id: 47, name: "Hachiware", category: "clay charms", price: 250, stock: 1, image: "assets/hachiware.jpg" },
  { id: 48, name: "Usagi", category: "clay charms", price: 250, stock: 1, image: "assets/usagi.jpg" },
  { id: 49, name: "Snoppy", category: "clay charms", price: 100, stock: 1, image: "assets/snoppy.jpg" },
  { id: 50, name: "Seal", category: "clay charms", price: 100, stock: 1, image: "assets/seal.jpg" },
  { id: 51, name: "Shinchan", category: "clay charms", price: 150, stock: 1, image: "assets/shinchan.jpg" },
  { id: 52, name: "Sleepy Shinchan", category: "clay charms", price: 150, stock: 1, image: "assets/sleepy-shinchan.jpg" },
  { id: 53, name: "Fish", category: "clay charms", price: 70, stock: 1, image: "assets/fish.jpg" },
  { id: 54, name: "Apple", category: "clay charms", price: 90, stock: 1, image: "assets/apple.jpg" },
  { id: 55, name: "Thukuna", category: "clay charms", price: 150, stock: 1, image: "assets/thukuna.jpg" },
  { id: 56, name: "Dango Miffy", category: "clay charms", price: 100, stock: 1, image: "assets/dango-miffy.jpg" },
  { id: 57, name: "Strawberry Miffy", category: "clay charms", price: 100, stock: 1, image: "assets/strawberry-miffy.jpg" },
  { id: 58, name: "Banana Cat", category: "clay charms", price: 180, stock: 1, image: "assets/banana-cat.jpg" },
  { id: 59, name: "Pompompurin", category: "clay charms", price: 200, stock: 1, image: "assets/pompompurin.jpg" },
  { id: 60, name: "Cute Fish", category: "clay charms", price: 100, stock: 1, image: "assets/cute-fish.jpg" }
];

const STORAGE_KEY = "nekoooCart";
const IG_LINK = "https://www.instagram.com/theglam._.aura/";

function getCart() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

function getProductById(id) {
  return PRODUCTS.find((product) => product.id === id);
}

function removeInvalidCartItems(cart) {
  const validCart = cart.filter((entry) => {
    const product = getProductById(entry.id);
    return product && entry.quantity > 0;
  });

  if (validCart.length !== cart.length) {
    saveCart(validCart);
  }

  return validCart;
}

function updateQuantity(productId, change) {
  let cart = getCart();
  cart = removeInvalidCartItems(cart);

  const item = cart.find((entry) => entry.id === productId);
  const product = getProductById(productId);

  if (!item || !product) return;

  const nextQty = item.quantity + change;

  if (nextQty <= 0) {
    cart = cart.filter((entry) => entry.id !== productId);
  } else if (nextQty <= product.stock) {
    item.quantity = nextQty;
  }

  saveCart(cart);
  renderCart();
}

function removeItem(productId) {
  const cart = getCart().filter((entry) => entry.id !== productId);
  saveCart(cart);
  renderCart();
}

function buildCheckoutText(cartItems) {
  let text = "ORDER LIST\n\n";
  let total = 0;

  cartItems.forEach((item) => {
    const lineTotal = item.price * item.quantity;
    total += lineTotal;
    text += `${item.name} x ${item.quantity} = ₹${lineTotal}\n`;
  });

  text += `\nTotal = ₹${total}`;
  return { text, total };
}

function renderCart() {
  const cartContent = document.getElementById("cartContent");
  if (!cartContent) return;

  let cart = getCart();
  cart = removeInvalidCartItems(cart);

  if (!cart.length) {
    cartContent.innerHTML = `
      <div class="empty-state">
        Your cart is empty.<br>
        Add some cute items first 💖
      </div>
    `;
    return;
  }

  const cartItems = cart
    .map((entry) => {
      const product = getProductById(entry.id);
      if (!product) return null;

      return {
        ...product,
        quantity: entry.quantity
      };
    })
    .filter(Boolean);

  const { text, total } = buildCheckoutText(cartItems);

  cartContent.innerHTML = `
    <div class="cart-list">
      ${cartItems.map((item) => `
        <div class="cart-item">
          <div class="cart-item-image">
            <img
              class="product-image"
              src="${item.image}"
              alt="${item.name}"
              onerror="this.src='assets/placeholder.jpg'"
            >
          </div>
          <h4>${item.name}</h4>
          <p>${item.category}</p>
          <div class="stock">Available: ${item.stock}</div>
          <div class="cart-item-actions">
            <div class="cart-item-controls">
              <button class="small-btn qty-minus" data-id="${item.id}">−</button>
              <strong>${item.quantity}</strong>
              <button class="small-btn qty-plus" data-id="${item.id}">+</button>
            </div>
            <div class="total-price">
              ₹${item.price * item.quantity}
            </div>
          </div>
          <button class="remove-btn" data-id="${item.id}">Remove</button>
        </div>
      `).join("")}
    </div>

    <div class="summary-box">
      <h3>Order Summary</h3>
      ${cartItems.map((item) => `
        <div class="summary-line">
          <span>${item.name} x ${item.quantity}</span>
          <span>₹${item.price * item.quantity}</span>
        </div>
      `).join("")}
      <div class="summary-line">
        <strong>Total</strong>
        <strong class="summary-total">₹${total}</strong>
      </div>
    </div>

    <div class="checkout-box">
      <div class="checkout-top">
        <h3>Checkout</h3>
        <button class="copy-btn" id="copyBillBtn" title="Copy bill">
          <i class="fa-regular fa-copy" style="color: rgb(181, 43, 123);"></i>
        </button>
      </div>
      <p class="light-text">Your selected items and total bill are shown below.</p>
      <div class="checkout-list" id="checkoutBillText">${text}</div>
      <div class="contact-links">
        <a class="checkout-link" href="${IG_LINK}" target="_blank">Order on Instagram</a>
      </div>
    </div>
  `;

  document.querySelectorAll(".qty-minus").forEach((button) => {
    button.addEventListener("click", () => {
      updateQuantity(Number(button.dataset.id), -1);
    });
  });

  document.querySelectorAll(".qty-plus").forEach((button) => {
    button.addEventListener("click", () => {
      updateQuantity(Number(button.dataset.id), 1);
    });
  });

  document.querySelectorAll(".remove-btn").forEach((button) => {
    button.addEventListener("click", () => {
      removeItem(Number(button.dataset.id));
    });
  });

  const copyBillBtn = document.getElementById("copyBillBtn");
  if (copyBillBtn) {
    copyBillBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(text);
        copyBillBtn.innerHTML = `<i class="fa-solid fa-check" style="color: rgb(181, 43, 123);"></i>`;
        setTimeout(() => {
          copyBillBtn.innerHTML = `<i class="fa-regular fa-copy" style="color: rgb(181, 43, 123);"></i>`;
        }, 1200);
      } catch (error) {
        alert("Could not copy bill.");
      }
    });
  }
}

renderCart();
