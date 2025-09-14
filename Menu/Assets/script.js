// --- 1. MENU DATA (expanded with new items) ---
const fullMenu = [
    // Appetizers
    { id: 1, name: "Vegetable Samosa", category: "Appetizers", description: "Crispy pastry filled with spiced potatoes and peas. Served with tamarind chutney.", price: 120, image: "assets/vegetable_Samosa.png", tags: ["vegetarian", "vegan"] },
    { id: 2, name: "Paneer Tikka", category: "Appetizers", description: "Cubes of paneer marinated in yogurt and spices, grilled in a tandoor.", price: 250, image: "assets/Paneer_Tikka.png", tags: ["vegetarian", "gluten-free"] },
    { id: 3, name: "Aloo Tikki Chaat", category: "Appetizers", description: "Spiced potato patties topped with yogurt, chutneys, and sev.", price: 180, image: "assets/Aloo-Tikki.png", tags: ["vegetarian"] },
    { id: 4, name: "Chicken 65", category: "Appetizers", description: "Spicy, deep-fried chicken chunks from Chennai.", price: 280, image: "assets/Chicken 65.png", tags: ["spicy", "non-vegetarian"] },
    { id: 28, name: "Gobi Manchurian", category: "Appetizers", description: "Crispy cauliflower tossed in Manchurian sauce.", price: 260, image: "assets/Gobi Manchurian.png", tags: ["vegetarian", "vegan", "spicy"] },

    // New Starters / Fusion
    { id: 33, name: "Tandoori Mushroom Skewers", category: "Appetizers", description: "Smoky tandoori-marinated mushrooms with a zesty raita.", price: 240, image: "assets/Tandoori Mushroom Skewers.png", tags: ["vegetarian", "gluten-free"] },
    { id: 34, name: "Chili Paneer Dry", category: "Appetizers", description: "Stir-fried paneer with peppers and a spicy chili glaze.", price: 270, image: "assets/Chili paneer Dry.png", tags: ["vegetarian", "spicy"] },
    { id: 39, name: "Hara Bhara Kebab", category: "Appetizers", description: "Spinach, peas, and potato patties, shallow-fried. A healthy and delicious starter.", price: 230, image: "assets/Hara Bhara Kebab.png", tags: ["vegetarian", "vegan"] },

    // Main Courses (Veg)
    { id: 5, name: "Paneer Butter Masala", category: "Main Courses (Veg)", description: "Paneer cubes in a rich, creamy tomato and cashew gravy.", price: 350, image: "assets/Paneer Butter Masala.png", tags: ["vegetarian", "contains-nuts", "gluten-free"] },
    { id: 6, name: "Dal Makhani", category: "Main Courses (Veg)", description: "Black lentils & kidney beans slow-cooked in creamy butter.", price: 320, image: "assets/Dal Makhani.png", tags: ["vegetarian", "gluten-free"] },
    { id: 7, name: "Chana Masala", category: "Main Courses (Veg)", description: "Classic chickpea curry in spiced tomato sauce.", price: 290, image: "assets/Chana Masala.png", tags: ["vegetarian", "vegan", "gluten-free"] },
    { id: 8, name: "Malai Kofta", category: "Main Courses (Veg)", description: "Potato & paneer balls served in creamy gravy.", price: 380, image: "assets/Malai Kofta.png", tags: ["vegetarian", "contains-nuts"] },
    { id: 29, name: "Palak Paneer", category: "Main Courses (Veg)", description: "Soft paneer cubes in a creamy spinach gravy.", price: 340, image: "assets/Palak-Paneer.png", tags: ["vegetarian", "gluten-free"] },

    // New veg mains
    { id: 35, name: "Baingan Bharta", category: "Main Courses (Veg)", description: "Smoky roasted eggplant mashed with aromatics and spices.", price: 310, image: "assets/Baingan Bharta.png", tags: ["vegetarian", "vegan", "gluten-free"] },
    { id: 40, name: "Navratan Korma", category: "Main Courses (Veg)", description: "A medley of nine vegetables and fruits in a creamy, nutty, and mildly sweet gravy.", price: 360, image: "assets/Navratan Korma.png", tags: ["vegetarian", "contains-nuts"] },

    // Main Courses (Non-Veg)
    { id: 9, name: "Butter Chicken", category: "Main Courses (Non-Veg)", description: "Grilled chicken simmered in smooth, buttery tomato gravy.", price: 400, image: "assets/Butter Chicken.png", tags: ["contains-nuts", "gluten-free", "non-vegetarian"] },
    { id: 10, name: "Lamb Rogan Josh", category: "Main Courses (Non-Veg)", description: "Aromatic curried lamb dish with Kashmiri spices.", price: 450, image: "assets/Lamb Rogan JOsh.png", tags: ["spicy", "gluten-free", "non-vegetarian"] },
    { id: 11, name: "Goan Fish Curry", category: "Main Courses (Non-Veg)", description: "Tangy fish curry cooked with coconut milk.", price: 420, image: "assets/Goan Fish Currry.png", tags: ["spicy", "gluten-free", "non-vegetarian"] },
    { id: 30, name: "Chicken Tikka Masala", category: "Main Courses (Non-Veg)", description: "Roasted marinated chicken chunks in spiced curry sauce.", price: 420, image: "assets/Chicken Tikka Masala.png", tags: ["non-vegetarian", "gluten-free", "contains-nuts"] },
    { id: 41, name: "Mutton Korma", category: "Main Courses (Non-Veg)", description: "Tender mutton pieces cooked in a rich, fragrant gravy of yogurt, nuts, and spices.", price: 480, image: "assets/Mutton Korma.png", tags: ["non-vegetarian", "contains-nuts"] },

    // New Non-veg
    { id: 36, name: "Hyderabadi Biryani (Mutton)", category: "Rice & Biryani", description: "Layered biryani with tender mutton, saffron & fried onions.", price: 520, image: "assets/Hyderabadi Mutton Biryani.png", tags: ["non-vegetarian", "gluten-free"] },

    // Breads
    { id: 12, name: "Plain Naan", category: "Breads", description: "Soft, leavened flatbread baked in a tandoor.", price: 50, image: "assets/Plain Naan.png", tags: ["vegetarian"] },
    { id: 13, name: "Garlic Naan", category: "Breads", description: "Naan topped with fresh garlic & cilantro.", price: 70, image: "assets/Garlic Naan.png", tags: ["vegetarian"] },
    { id: 14, name: "Tandoori Roti", category: "Breads", description: "Unleavened whole wheat bread baked in a tandoor.", price: 40, image: "assets/Tanddori Roti.png", tags: ["vegetarian", "vegan"] },

    // Rice & Biryani
    { id: 15, name: "Vegetable Biryani", category: "Rice & Biryani", description: "Basmati rice cooked with mixed vegetables & spices.", price: 330, image: "assets/Veg Biryani.png", tags: ["vegetarian", "gluten-free"] },
    { id: 16, name: "Chicken Dum Biryani", category: "Rice & Biryani", description: "Fragrant rice layered with succulent chicken.", price: 390, image: "assets/Chicken Dum Biryani.png", tags: ["gluten-free", "non-vegetarian"] },
    { id: 17, name: "Jeera Rice", category: "Rice & Biryani", description: "Basmati rice flavored with cumin seeds and ghee.", price: 150, image: "assets/Jeera RIce.png", tags: ["vegetarian", "vegan", "gluten-free"] },

    // Desserts
    { id: 18, name: "Gulab Jamun", category: "Desserts", description: "Soft milk-solid balls soaked in sweet syrup.", price: 100, image: "assets/Gulab Jamun.png", tags: ["vegetarian", "contains-nuts"] },
    { id: 19, name: "Rasmalai", category: "Desserts", description: "Paneer discs in thickened sweetened milk.", price: 120, image: "assets/Rasmalai.png", tags: ["vegetarian", "contains-nuts", "gluten-free"] },
    { id: 20, name: "Kulfi", category: "Desserts", description: "Traditional Indian ice cream, dense & creamy.", price: 90, image: "assets/Kulfi.png", tags: ["vegetarian", "contains-nuts", "gluten-free"] },
    { id: 31, name: "Jalebi", category: "Desserts", description: "Crispy spiral sweets soaked in saffron sugar syrup.", price: 130, image: "assets/Jalebi.png", tags: ["vegetarian", "vegan"] },
    // New dessert
    { id: 37, name: "Masala Kulfi with Rabri", category: "Desserts", description: "Spiced kulfi topped with rich rabri and crushed pistachios.", price: 160, image: "assets/Masala Kulfi With Rabri.png", tags: ["vegetarian", "contains-nuts"] },
    { id: 43, name: "Gajar Ka Halwa", category: "Desserts", description: "A warm, sweet pudding of grated carrots, milk, sugar, and ghee, garnished with nuts.", price: 140, image: "assets/Gajar ka Halwa.png", tags: ["vegetarian", "contains-nuts", "gluten-free"] },

    // Drinks
    { id: 21, name: "Mango Lassi", category: "Drinks", description: "Yogurt-based drink with sweet mango pulp.", price: 110, image: "assets/Mango Lassi.png", tags: ["vegetarian", "gluten-free"] },
    { id: 22, name: "Masala Chai", category: "Drinks", description: "Black tea infused with aromatic spices and milk.", price: 60, image: "assets/Masala Chai.png", tags: ["vegetarian", "gluten-free"] },
    // New beverages
    { id: 38, name: "Cold Coffee Frappe", category: "Drinks", description: "Iced coffee blended with milk and a hint of chocolate.", price: 140, image: "assets/Cold Coffe frappe.png", tags: ["vegetarian"] },
    { id: 44, name: "Coca-Cola", category: "Drinks", description: "Classic and refreshing carbonated soft drink.", price: 50, image: "assets/Coca Cola.png", tags: ["vegan", "gluten-free"] },
    { id: 45, name: "Sprite", category: "Drinks", description: "Crisp lemon-lime flavored soft drink.", price: 50, image: "assets/Sprite.png", tags: ["vegan", "gluten-free"] },
    { id: 46, name: "Fresh Lime Soda", category: "Drinks", description: "A refreshing mix of fresh lime juice, soda, and a hint of sugar or salt.", price: 80, image: "assets/Fresh Lime Soda.png", tags: ["vegan", "gluten-free", "vegetarian"] },

    // Street Food
    { id: 23, name: "Pani Puri", category: "Street Food", description: "Crispy puris filled with potato & tamarind water.", price: 80, image: "assets/Pani Puri.png", tags: ["vegetarian", "vegan", "spicy"] },
    { id: 24, name: "Pav Bhaji", category: "Street Food", description: "Thick vegetable curry served with buttered pav.", price: 220, image: "assets/Pav Bhaji.png", tags: ["vegetarian"] },
    { id: 25, name: "Vada Pav", category: "Street Food", description: "Potato fritter in a bun, with chutneys.", price: 70, image: "assets/Vada Pao.png", tags: ["vegetarian", "vegan"] },
    { id: 26, name: "Chicken Kathi Roll", category: "Street Food", description: "Spiced grilled chicken wrapped in paratha.", price: 250, image: "assets/Chicken Kathi Roll.png", tags: ["non-vegetarian"] },
    { id: 27, name: "Chole Bhature", category: "Street Food", description: "Spicy chickpea curry with fluffy fried bhature.", price: 240, image: "assets/Chole Bhature.png", tags: ["vegetarian"] },
    { id: 32, name: "Dahi Puri", category: "Street Food", description: "Mini puris with potatoes, chutneys & chilled yogurt.", price: 100, image: "assets/Dahi Puri.png", tags: ["vegetarian"] },
    { id: 42, name: "Samosa Chaat", category: "Street Food", description: "Crushed samosas topped with yogurt, tamarind and mint chutneys, onions, and sev.", price: 150, image: "assets/Samosa Chat.png", tags: ["vegetarian"] },
];

// --- 2. DOM refs ---
const header = document.querySelector('header');
const menuContainer = document.getElementById('menu-container');
const controlsScrollTrigger = document.getElementById('controls-scroll-trigger');
const menuControls = document.querySelector('.menu-controls');
const preferenceFilters = document.getElementById('preference-filters');
const sortBySelect = document.getElementById('sort-by');
const searchBar = document.getElementById('search-bar');
const cartIcon = document.getElementById('cart-icon');
const cartPanel = document.getElementById('cart-panel');
const cartCount = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalPrice = document.getElementById('cart-total-price');
const closeCartBtn = document.querySelector('.close-cart-btn');
const maxPriceInput = document.getElementById('max-price-input');
const flyZone = document.getElementById('fly-zone');
const checkoutBtn = document.getElementById('checkout-btn');

// --- 3. Cart state ---
const CART_STORAGE_KEY = 'restaurant-cart';
let cart = loadCart();
let itemObserver = null; // For parallax effect
let cardEntranceObserver = null; // For entrance animation

/** save cart to localStorage */
function saveCart() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

/** load cart from localStorage */
function loadCart() {
    try {
        const storedCart = localStorage.getItem(CART_STORAGE_KEY);
        return storedCart ? JSON.parse(storedCart) : [];
    } catch (e) {
        console.error("Failed to load cart from localStorage", e);
        return [];
    }
}
/** create html for a menu card */
function createMenuItemHTML(item) {
    const itemInCart = cart.find(ci => ci.id === item.id);
    const cartControlsHTML = itemInCart ? `
        <div class="item-quantity-controls">
            <button class="quantity-btn-menu" data-id="${item.id}" data-change="-1" aria-label="Decrease quantity">-</button>
            <span class="item-quantity">${itemInCart.quantity}</span>
            <button class="quantity-btn-menu" data-id="${item.id}" data-change="1" aria-label="Increase quantity">+</button>
        </div>` : `<button class="add-to-cart-btn" data-id="${item.id}" data-image="${item.image}">+</button>`;

    // include data-image for fly animation + loading=lazy
    return `
        <div class="item-image-wrapper">
            <img src="${item.image}" alt="${item.name}" class="item-image" loading="lazy" data-image="${item.image}">
        </div>
        <div class="item-content"> 
            <div class="item-header">
                <h3>${item.name}</h3>
                <span class="item-price">₹${item.price}</span>
            </div>
            <p class="item-description">${item.description}</p>
            ${cartControlsHTML}
        </div>
    `;
}

/** update a single item card to reflect cart */
function updateSingleMenuItem(itemId) {
    const itemCard = menuContainer.querySelector(`.menu-item[data-item-id="${itemId}"]`);
    if (!itemCard) return;
    const itemData = fullMenu.find(i => i.id === itemId);
    if (!itemData) return;
    itemCard.innerHTML = createMenuItemHTML(itemData);
}

/** Observe categories to add visible class */
function observeCategories() {
    const categories = document.querySelectorAll('.menu-category');
    if (!categories.length) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('is-visible');
            else entry.target.classList.remove('is-visible');
        });
    }, { threshold: 0.12 });
    categories.forEach(c => observer.observe(c));
}

/** render menu with filters, sorting, search */
function renderMenu(activePreferences = [], sortBy = 'default', searchTerm = '', maxPrice = Infinity) {
    // Disconnect previous observers to avoid observing old elements
    if (itemObserver) {
        itemObserver.disconnect();
    }
    if (cardEntranceObserver) {
        cardEntranceObserver.disconnect();
    }

    menuContainer.innerHTML = '';
    const isAllView = activePreferences.includes('all');
    const hoverStyles = ['hover-style-1', 'hover-style-2', 'hover-style-3'];

    // --- FILTERING LOGIC ---
    let filtered = [...fullMenu];

    // 1. Apply dietary filters (ignore 'all' tag for filtering)
    const dietaryFilters = activePreferences.filter(p => p !== 'all');
    if (dietaryFilters.length > 0) {
        filtered = filtered.filter(item => {
            return dietaryFilters.every(p => item.tags.includes(p));
        });
    }

    // 2. Apply search term
    if (searchTerm) {
        filtered = filtered.filter(i => i.name.toLowerCase().includes(searchTerm) || i.description.toLowerCase().includes(searchTerm));
    }
    // 3. Apply max price
    if (maxPrice !== Infinity) filtered = filtered.filter(i => i.price <= maxPrice);

    if (filtered.length === 0) {
        menuContainer.innerHTML = '<p class="no-results">No dishes match your selected preferences. Try different filters or search.</p>';
        return;
    }

    // if isAllView -> show flat list sorted appropriately
    if (isAllView) {
        if (sortBy === 'price-asc') filtered.sort((a,b)=>a.price-b.price);
        else if (sortBy === 'price-desc') filtered.sort((a,b)=>b.price-a.price);
        else filtered.sort((a,b)=> a.name.localeCompare(b.name));
        filtered.forEach((item, idx) => {
            const card = document.createElement('div');
            card.className = 'menu-item';
            card.classList.add(hoverStyles[idx % hoverStyles.length]); // Add varied hover style
            card.dataset.itemId = item.id;
            card.style.animationDelay = `${idx * 40}ms`;
            card.innerHTML = createMenuItemHTML(item);
            menuContainer.appendChild(card);
        });
    } else {
        // grouped view
        const grouped = filtered.reduce((acc,item)=>{
            acc[item.category] = acc[item.category] || [];
            acc[item.category].push(item);
            return acc;
        }, {});
        const categoryOrder = ["Appetizers", "Street Food", "Main Courses (Veg)", "Main Courses (Non-Veg)", "Breads", "Rice & Biryani", "Desserts", "Drinks"];

        categoryOrder.forEach(category => {
            if (!grouped[category]) return;
            const items = grouped[category];
            if (sortBy === 'price-asc') items.sort((a,b)=>a.price-b.price);
            else if (sortBy === 'price-desc') items.sort((a,b)=>b.price-a.price);

            const title = document.createElement('h2');
            title.className = 'menu-category';
            title.textContent = category;
            menuContainer.appendChild(title);

            items.forEach((item, idx) => {
                const card = document.createElement('div');
                card.className = 'menu-item';
                card.classList.add(hoverStyles[idx % hoverStyles.length]); // Add varied hover style
                card.dataset.itemId = item.id;
                card.style.animationDelay = `${idx * 45}ms`;
                card.innerHTML = createMenuItemHTML(item);
                menuContainer.appendChild(card);
            });
        });
    }

    // --- CONSOLIDATED OBSERVER SETUP ---
    const allNewItems = menuContainer.querySelectorAll('.menu-item');
    if (itemObserver) {
        allNewItems.forEach(item => itemObserver.observe(item));
    }
    if (cardEntranceObserver) {
        allNewItems.forEach(item => cardEntranceObserver.observe(item));
    }

    observeCategories();
}

/** Render cart panel */
function renderCart() {
    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align:center;color:#cfcfd2">Your cart is empty.</p>';
    } else {
        cart.forEach(ci => {
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <div class="cart-item-info">
                    <h4>${ci.name}</h4>
                    <p>₹${ci.price} x ${ci.quantity}</p>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" data-id="${ci.id}" data-change="-1">-</button>
                    <span>${ci.quantity}</span>
                    <button class="quantity-btn" data-id="${ci.id}" data-change="1">+</button>
                    <button class="remove-btn" data-id="${ci.id}">×</button>
                </div>
            `;
            cartItemsContainer.appendChild(div);
        });
    }
    const total = cart.reduce((s,i)=> s + i.price * i.quantity, 0);
    cartTotalPrice.textContent = `₹${total}`;
    const totalItems = cart.reduce((s,i)=> s + i.quantity, 0);
    cartCount.textContent = totalItems;

    // Enable/disable checkout button
    checkoutBtn.disabled = totalItems === 0;

    // little pop for cart icon
    if (totalItems > 0) {
        cartIcon.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.25)' }, { transform: 'scale(1)' }], { duration: 420, easing: 'cubic-bezier(.2,1,.2,1)'});
    }
}

/** add item to cart */
function addToCart(itemId) {
    const item = fullMenu.find(i=>i.id === itemId);
    if (!item) return;
    const exists = cart.find(c=>c.id===itemId);
    if (exists) exists.quantity++;
    else cart.push({ id: item.id, name: item.name, price: item.price, quantity:1 });
    saveCart();
}

/** update quantity (or remove) */
function updateCartItemQuantity(itemId, change) {
    const ci = cart.find(c=>c.id===itemId);
    if (!ci) return;
    if (!isFinite(change)) { // remove entirely
        cart = cart.filter(x=>x.id!==itemId);
        saveCart();
        return;
    }
    ci.quantity += change;
    if (ci.quantity <= 0) cart = cart.filter(x=>x.id!==itemId);
    saveCart();
}

/** toggle cart panel */
function toggleCartPanel() {
    const open = cartPanel.classList.toggle('open');
    cartPanel.setAttribute('aria-hidden', !open);
    cartIcon.setAttribute('aria-pressed', String(open));
}

/** helper: animate image flying into cart */
function flyImageToCart(sourceImgEl) {
    if (!sourceImgEl) return;
    const srcRect = sourceImgEl.getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();

    const clone = sourceImgEl.cloneNode(true);
    clone.style.position = 'fixed';
    clone.style.left = `${srcRect.left}px`;
    clone.style.top = `${srcRect.top}px`;
    clone.style.width = `${srcRect.width}px`;
    clone.style.height = `${srcRect.height}px`;
    clone.style.zIndex = 9999;
    clone.style.pointerEvents = 'none';
    clone.style.borderRadius = '10px';
    flyZone.appendChild(clone);

    // compute deltas for animation using CSS variables for better GPU perf
    const dx = (cartRect.left + cartRect.width/2) - (srcRect.left + srcRect.width/2);
    const dy = (cartRect.top + cartRect.height/2) - (srcRect.top + srcRect.height/2);

    clone.style.setProperty('--sx', '0px');
    clone.style.setProperty('--sy', '0px');
    clone.style.setProperty('--dx', dx + 'px');
    clone.style.setProperty('--dy', dy + 'px');

    clone.animate([
        { transform: 'translate3d(0px,0px,0) scale(1)', opacity: 1 },
        { transform: `translate3d(${dx}px, ${dy}px, 0) scale(0.2)`, opacity: 0.1 }
    ], {
        duration: 700,
        easing: 'cubic-bezier(.2,.8,.2,1)'
    }).onfinish = () => {
        clone.remove();
        // small bounce/pop on cart count
        cartIcon.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.18)' }, { transform: 'scale(1)' }], { duration: 340, easing: 'cubic-bezier(.2,1,.2,1)'});
    };
}

/** read filters & rerender */
function updateFullMenuDisplay() {
    const existingItems = menuContainer.querySelectorAll('.menu-item');
    const animationDuration = 280;
    const renderNew = () => {
        const checked = preferenceFilters.querySelectorAll('input[type="checkbox"]:checked');
        const activePreferences = Array.from(checked).map(c => c.value);
        const sortBy = sortBySelect.value;
        const searchTerm = searchBar.value.trim().toLowerCase();
        const maxPriceValue = parseInt(maxPriceInput.value, 10);
        const maxPrice = isNaN(maxPriceValue) || maxPriceInput.value.trim()==='' ? Infinity : maxPriceValue;
        renderMenu(activePreferences, sortBy, searchTerm, maxPrice);
    };
    if (existingItems.length > 0) {
        existingItems.forEach(it => it.classList.add('is-exiting'));
        setTimeout(renderNew, animationDuration);
    } else renderNew();
}

/** Handles view mode switching (grid/list) and persistence */
function initializeViewSwitcher() {
    const viewSwitcher = document.getElementById('view-switcher');
    if (!viewSwitcher) return;

    const VIEW_MODE_KEY = 'restaurant-view-mode';

    const applyViewMode = (mode) => {
        menuContainer.classList.toggle('list-view', mode === 'list');
        viewSwitcher.querySelectorAll('.view-btn').forEach(btn => {
            const isCurrent = btn.dataset.view === mode;
            btn.setAttribute('aria-checked', isCurrent);
        });
        localStorage.setItem(VIEW_MODE_KEY, mode);
        // When switching views, reset any inline parallax styles to prevent visual glitches.
        menuContainer.querySelectorAll('.item-image').forEach(img => img.style.removeProperty('--parallax-offset'));
    };

    viewSwitcher.addEventListener('click', (e) => {
        const btn = e.target.closest('.view-btn');
        if (btn) {
            applyViewMode(btn.dataset.view);
        }
    });

    applyViewMode(localStorage.getItem(VIEW_MODE_KEY) || 'grid');
}

/** event handlers & delegation */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize observers FIRST, so they are ready for the initial render.
    if ('IntersectionObserver' in window) {
        itemObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                entry.target.classList.toggle('is-in-view', entry.isIntersecting);
            });
        }, { threshold: 0 });

        cardEntranceObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-entering');
                    observer.unobserve(entry.target); // Animate only once for performance
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    }

    // Now that observers are ready, perform the initial render.
    updateFullMenuDisplay();
    renderCart();

    let menuControlsObserver = null;

    initializeViewSwitcher();

    // This function sets up all behavior that depends on the header's height.
    const setupStickyBehavior = () => {
        if (!header || !menuControls) return;

        const headerHeight = header.offsetHeight;
        // 1. Set CSS variable for menu-controls's top position.
        document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);

        // 2. Re-initialize the IntersectionObserver for the condensed effect, using the new height.
        if (menuControlsObserver) menuControlsObserver.disconnect();
        
        if (controlsScrollTrigger) {
            menuControlsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    menuControls.classList.toggle('is-condensed', !entry.isIntersecting);
                });
            }, {
                rootMargin: `-${headerHeight + 20}px 0px 0px 0px`,
                threshold: 1.0
            });
            menuControlsObserver.observe(controlsScrollTrigger);
        }
    };

    // Use ResizeObserver to react to header height changes (from scrolling or window resize).
    // This is more performant and robust than listening to scroll/resize events for layout changes.
    if (window.ResizeObserver) {
        const headerObserver = new ResizeObserver(setupStickyBehavior);
        headerObserver.observe(header);
    } else {
        // Fallback for older browsers.
        setupStickyBehavior();
        window.addEventListener('resize', setupStickyBehavior);
    }

    // Add a performant scroll listener for UI effects.
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                // 1. Shrink header
                header.classList.toggle('is-scrolled', lastScrollY > 10);

                // 2. Parallax effect for visible item images
                const visibleItems = menuContainer.querySelectorAll('.menu-item.is-in-view');
                visibleItems.forEach(item => {
                    const rect = item.getBoundingClientRect();
                    
                    // Use a different parallax factor for grid vs list for best feel
                    const isListView = menuContainer.classList.contains('list-view');
                    const parallaxFactor = isListView ? 0.08 : 0.1;

                    const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * parallaxFactor;
                    const image = item.querySelector('.item-image');
                    if (image) {
                        // Using style.setProperty is efficient for dynamic values
                        image.style.setProperty('--parallax-offset', `${-offset}px`);
                    }
                });
                ticking = false;
            });
            ticking = true;
        }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
});

// Combine all filter checkboxes into one handler
preferenceFilters.addEventListener('change', (e) => {
    // The render function is smart enough to handle combinations. Just trigger a re-render on any change.
    if (e.target.type === 'checkbox') updateFullMenuDisplay();
});

sortBySelect.addEventListener('change', updateFullMenuDisplay);
searchBar.addEventListener('input', updateFullMenuDisplay);
maxPriceInput.addEventListener('input', updateFullMenuDisplay);

// cart icon events
cartIcon.addEventListener('click', toggleCartPanel);
closeCartBtn.addEventListener('click', toggleCartPanel);

// Checkout button
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;

    const total = cart.reduce((s,i)=> s + i.price * i.quantity, 0);
    alert(`Thank you for your order!\n\nTotal: ₹${total}\n\nYour order has been placed and will be ready shortly.`);

    // Clear cart and update UI
    cart = [];
    saveCart();
    renderCart();
    updateFullMenuDisplay(); // Re-render menu to update all quantity controls
});

// delegation for add-to-cart and quantity buttons in menu
menuContainer.addEventListener('click', (e) => {
    const t = e.target;
    // add-to-cart
    if (t.classList.contains('add-to-cart-btn')) {
        const id = parseInt(t.dataset.id,10);
        const img = t.closest('.menu-item')?.querySelector('.item-image');

        // Add click animation to button
        t.classList.add('is-clicked');
        t.addEventListener('animationend', () => t.classList.remove('is-clicked'), { once: true });

        addToCart(id);
        flyImageToCart(img);
        renderCart();
        updateSingleMenuItem(id);
    } else if (t.classList.contains('quantity-btn-menu')) {
        const id = parseInt(t.dataset.id,10);
        const change = parseInt(t.dataset.change,10);
        updateCartItemQuantity(id, change);
        renderCart();
        updateSingleMenuItem(id);
    }
});

// Improved 3D tilt effect for menu cards using event delegation
menuContainer.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.menu-item');
    if (!card || menuContainer.classList.contains('list-view')) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top;  // y position within the element.

    const maxRotation = 12; // degrees
    const rotateX = (y / rect.height - 0.5) * -maxRotation;
    const rotateY = (x / rect.width - 0.5) * maxRotation;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    card.style.zIndex = '10';
});

menuContainer.addEventListener('mouseout', (e) => {
    const card = e.target.closest('.menu-item');
    // When mouse leaves the card, reset its transform and z-index
    if (card && !card.contains(e.relatedTarget)) {
        card.style.transform = ''; // Resets to CSS default
        card.style.zIndex = '';   // Resets to CSS default
    }
});

// delegation for cart controls
cartItemsContainer.addEventListener('click', (e) => {
    const t = e.target;
    const id = parseInt(t.dataset.id, 10);
    if (t.classList.contains('quantity-btn')) {
        const change = parseInt(t.dataset.change, 10);
        updateCartItemQuantity(id, change);
        renderCart();
        updateSingleMenuItem(id);
    } else if (t.classList.contains('remove-btn')) {
        updateCartItemQuantity(id, -Infinity);
        renderCart();
        updateSingleMenuItem(id);
    }
});
