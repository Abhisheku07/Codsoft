// Product data for Shop
const PRODUCTS = [
    { id: "p1", title: "Wireless Headphones", price: 8999, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80", rating: 4.5 },
    { id: "p2", title: "Running Shoes", price: 5999, category: "Fashion", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80", rating: 4.0 },
    { id: "p3", title: "Designer Sunglasses", price: 3499, category: "Fashion", image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-clash-low-square-sunglasses--Z1910W_PM2_Front%20view.jpg", rating: 5.0 },
    { id: "p4", title: "Women's Fashion Watch", price: 4999, category: "Fashion", image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=600&q=80", rating: 4.5 },
    { id: "p5", title: "Smart Speaker", price: 7999, category: "Electronics", image: "https://i0.wp.com/bdtechtalks.com/wp-content/uploads/2020/03/smart-speaker-amazon-alexa-echo.jpg?resize=696%2C464&ssl=1", rating: 4.5 },
    { id: "p6", title: "Modern Leather Sofa", price: 45999, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80", rating: 4.0 },
    { id: "p7", title: "Organic Skincare Set", price: 2999, category: "Beauty", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80", rating: 5.0 },
    { id: "p8", title: "Minimalist Desk Lamp", price: 2499, category: "Home & Kitchen", image: "https://www.figliving.com/cdn/shop/files/Fika_Task_Study_Table_Lamp_-_Modern_Scandinavian_Design_Desk_lamp_Modern_Bedside_Lamp_Easy_Installation_-_FIG_Living_-_Fika_Task_Study_Table_Lamp_-_Modern_Scandinavian_Design_Desk_l_f8fad3c3-a6c9-4d53-8a71-43b57cccf685.jpg?v=1723033771&width=1600", rating: 4.0 },
    { id: "p9", title: "Modern Laptop", price: 75999, category: "Electronics", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", rating: 4.8 },
    { id: "p10", title: "Leather Backpack", price: 4599, category: "Fashion", image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=600&q=80", rating: 4.7 },
    { id: "p11", title: "Espresso Machine", price: 12999, category: "Home & Kitchen", image: "https://images-cdn.ubuy.co.in/67f7ee53255ff7fd17068fc8-espresso-coffee-machine-with-grinder-20.jpg", rating: 4.9 },
    { id: "p12", title: "Eyeshadow Palette", price: 2499, category: "Beauty", image: "https://m.media-amazon.com/images/I/51glpMxqPiL._UF1000,1000_QL80_.jpg", rating: 4.6 }
];

let CART = {};
let currentCategory = 'all';

// DOM refs
const productsEl = document.getElementById('products-grid');
const searchInput = document.getElementById('search-input');
const categoryFilters = document.querySelector('.category-filters');
const staticCategoryLinks = document.querySelector('.categories');
const cartBtn = document.getElementById('cart-btn');
const cartDrawer = document.getElementById('cart-drawer');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsEl = document.getElementById('cart-items');
const cartCountEl = document.getElementById('cart-count');
const cartTotalEl = document.getElementById('cart-total-value');
const sortSelect = document.getElementById('sort-select');
const minPriceInput = document.getElementById('min-price');
const maxPriceInput = document.getElementById('max-price');
const ratingFilter = document.getElementById('rating-filter');
const clearFiltersBtn = document.getElementById('clear-filters-btn');
const quickViewModal = document.getElementById('quick-view-modal');
const quickViewContent = document.getElementById('quick-view-content');
const themeToggleBtn = document.getElementById('theme-toggle');


// --- HELPERS ---
function formatPrice(n) { return '₹' + (n / 100).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
function debounce(fn, t) { let id; return function () { clearTimeout(id); id = setTimeout(() => fn.apply(this, arguments), t); }; }
function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]); }
function renderRatingStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < fullStars; i++) stars += '<i class="fas fa-star"></i>';
    if (halfStar) stars += '<i class="fas fa-star-half-alt"></i>';
    for (let i = 0; i < emptyStars; i++) stars += '<i class="far fa-star"></i>';
    return stars;
}

// --- INITIALIZATION ---
function init() {
    loadCartFromStorage();
    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
    renderProducts(PRODUCTS);
    bindEvents();
}

// --- EVENT BINDING ---
function bindEvents() {
    cartBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    document.getElementById('checkout-btn').addEventListener('click', () => { alert('Checkout demo — implement payment flow in production'); });

    searchInput.addEventListener('input', debounce(() => filterAndRender(), 300));
    sortSelect.addEventListener('change', filterAndRender);
    minPriceInput.addEventListener('input', debounce(() => filterAndRender(), 500));
    maxPriceInput.addEventListener('input', debounce(() => filterAndRender(), 500));
    ratingFilter.addEventListener('change', filterAndRender);
    clearFiltersBtn.addEventListener('click', resetFilters);
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // Save theme preference
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 10);
    });

    // Event delegation for dynamic elements and filters
    document.addEventListener('click', (e) => {
        if (e.target.matches('.add-to-cart-btn')) {
            e.preventDefault();
            addToCart(e.target.dataset.id);
        }
        if (e.target.matches('.quick-view-btn')) {
            e.preventDefault();
            openQuickView(e.target.dataset.id);
        }
        if (e.target.matches('.qty-btn')) {
            changeQty(e.target.dataset.id, parseInt(e.target.dataset.delta));
        }
        if (e.target.matches('.remove-btn')) {
            removeFromCart(e.target.dataset.id);
        }
        if (e.target.closest('.cat-filter-btn')) {
            handleCategoryFilter(e.target.closest('.cat-filter-btn'));
        }
        if (e.target.closest('.category')) {
            handleCategoryFilter(e.target.closest('.category'));
        }
        if (e.target.matches('#close-modal') || e.target.classList.contains('modal-overlay')) {
            closeQuickView();
        }
    });
}

function handleCategoryFilter(target) {
    const category = target.dataset.category;
    currentCategory = category;
    
    // Update active state for button filters
    document.querySelectorAll('.cat-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });

    filterAndRender();
}

function resetFilters() {
    searchInput.value = '';
    minPriceInput.value = '';
    maxPriceInput.value = '';
    ratingFilter.value = '0';
    sortSelect.value = 'default';
    currentCategory = 'all';
    document.querySelectorAll('.cat-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === 'all');
    });
    filterAndRender();
}

// --- RENDERING ---
function renderProducts(list) {
    productsEl.innerHTML = '';
    if (list.length === 0) {
        productsEl.innerHTML = `<div style="text-align: center; grid-column: 1 / -1; padding: 40px 0; color: var(--text-secondary);">
            <i class="fas fa-search" style="font-size: 40px;"></i>
            <h3 style="margin-top: 20px; color: var(--text-primary);">No Products Found</h3>
            <p>Try adjusting your filters or click "Clear Filters".</p>
        </div>`;
        return;
    }
    list.forEach((p, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product';
        productCard.style.animationDelay = `${index * 50}ms`;
        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${p.image}" alt="${escapeHtml(p.title)}">
                <div class="product-actions">
                    <button class="product-action-btn quick-view-btn" data-id="${p.id}" title="Quick View"><i class="fas fa-search-plus"></i></button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${escapeHtml(p.title)}</h3>
                <div class="product-rating">${renderRatingStars(p.rating)}</div>
                <p class="product-price">${formatPrice(p.price)}</p>
                <button class="add-to-cart-btn" data-id="${p.id}">Add to Cart</button>
            </div>
        `;
        productsEl.appendChild(productCard);
    });
}

function filterAndRender() {
    productsEl.classList.add('reloading');

    const q = searchInput.value.trim().toLowerCase();
    const cat = currentCategory;
    const minPrice = parseInt(minPriceInput.value * 100) || 0;
    const maxPrice = parseInt(maxPriceInput.value * 100) || Infinity;
    const minRating = parseFloat(ratingFilter.value) || 0;

    setTimeout(() => {
        let results = PRODUCTS.filter(p => {
            const inQuery = p.title.toLowerCase().includes(q);
            const inCategory = (cat === 'all') ? true : p.category === cat;
            const inPriceRange = p.price >= minPrice && p.price <= maxPrice;
            const inRating = p.rating >= minRating;
            return inQuery && inCategory && inPriceRange && inRating;
        });

        const sort = sortSelect.value;
        const sortFunctions = {
            'price-asc': (a, b) => a.price - b.price,
            'price-desc': (a, b) => b.price - a.price,
            'rating-desc': (a, b) => b.rating - a.rating,
            'alpha-asc': (a, b) => a.title.localeCompare(b.title),
            'alpha-desc': (a, b) => b.title.localeCompare(a.title),
        };
        if (sortFunctions[sort]) {
            results.sort(sortFunctions[sort]);
        }
        renderProducts(results);
        productsEl.classList.remove('reloading');
    }, 300);
}

// --- CART LOGIC ---
function addToCart(id) {
    const product = PRODUCTS.find(x => x.id === id);
    if (!product) return;

    if (!CART[id]) {
        CART[id] = { ...product, qty: 0 };
    }
    CART[id].qty += 1;
    
    saveCartToStorage();
    renderCart();
    openCart();
}

function changeQty(id, delta) {
    if (!CART[id]) return;
    CART[id].qty += delta;
    if (CART[id].qty <= 0) {
        delete CART[id];
    }
    saveCartToStorage();
    renderCart();
}

function removeFromCart(id) {
    delete CART[id];
    saveCartToStorage();
    renderCart();
}

function renderCart() {
    const ids = Object.keys(CART);
    if (ids.length === 0) {
        cartItemsEl.innerHTML = '<p class="empty-cart-message">Your cart is empty.</p>';
        cartCountEl.textContent = '0';
        cartTotalEl.textContent = formatPrice(0);
        return;
    }

    let total = 0;
    let count = 0;
    cartItemsEl.innerHTML = '';

    ids.forEach(id => {
        const item = CART[id];
        total += item.price * item.qty;
        count += item.qty;

        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${escapeHtml(item.title)}">
            <div class="cart-item-info">
                <div class="cart-item-title">${escapeHtml(item.title)}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
                <div class="cart-item-actions">
                    <button class="qty-btn" data-id="${item.id}" data-delta="-1">−</button>
                    <span class="item-qty">${item.qty}</span>
                    <button class="qty-btn" data-id="${item.id}" data-delta="1">+</button>
                    <button class="remove-btn" data-id="${item.id}">Remove</button>
                </div>
            </div>
            <div class="cart-item-total">${formatPrice(item.price * item.qty)}</div>
        `;
        cartItemsEl.appendChild(cartItemDiv);
    });

    cartCountEl.textContent = String(count);
    cartTotalEl.textContent = formatPrice(total);
}

function saveCartToStorage() {
    localStorage.setItem('shop_cart', JSON.stringify(CART));
}

function loadCartFromStorage() {
    const raw = localStorage.getItem('shop_cart');
    if (raw) {
        try {
            CART = JSON.parse(raw);
        } catch (e) {
            CART = {};
        }
    }
    renderCart();
}

function openCart() {
    cartDrawer.classList.add('open');
}
function closeCart() {
    cartDrawer.classList.remove('open');
}

// --- QUICK VIEW MODAL ---
function openQuickView(id) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;

    quickViewContent.innerHTML = `
        <button id="close-modal">&times;</button>
        <div class="quick-view-body">
            <div class="quick-view-image">
                <img src="${product.image}" alt="${escapeHtml(product.title)}">
            </div>
            <div class="quick-view-details">
                <h2 class="product-title" style="font-size: 1.8rem;">${escapeHtml(product.title)}</h2>
                <div class="product-rating" style="font-size: 1.2rem;">${renderRatingStars(product.rating)}</div>
                <p class="product-price" style="font-size: 2rem;">${formatPrice(product.price)}</p>
                <p style="color: var(--text-secondary); margin-bottom: 20px;">A brief but engaging description of the product would go here, highlighting its key features and benefits for the customer.</p>
                <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `;
    quickViewModal.classList.add('open');
}

function closeQuickView() {
    quickViewModal.classList.remove('open');
}

// Run on page load
init();
