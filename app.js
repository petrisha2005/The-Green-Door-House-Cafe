// The Green Door Coffee House - JavaScript Orchestrator (Refactored Image Mappings & Quiz Tags)

// 1. Refactored Database of Menu Items with exact descriptive photo paths
const MENU_ITEMS = [
  // --- Category: BEVERAGES & SPECIALS (Tag: coffee) ---
  {
    id: 'espresso',
    name: 'Espresso (Solo/Doppio)',
    price: 170,
    category: 'coffee',
    description: 'Rich and bold, a classic handcrafted coffee shot pull with perfect golden crema.',
    image: 'assets/images/menu/espresso.png', // Mapped to Crema demitasse
    isVegan: true,
    isJain: true,
    quizTags: { mood: 'tired', sweetness: 'none', temp: 'hot', strength: 'strong' }
  },
  {
    id: 'americano',
    name: 'Americano',
    price: 200,
    category: 'coffee',
    description: 'Smooth espresso combined with hot water. *Hot & Iced options available.',
    image: 'assets/images/menu/espresso.png', // Mapped to black espresso crema base
    isVegan: true,
    isJain: true,
    quizTags: { mood: 'productive', sweetness: 'none', temp: 'hot', strength: 'strong' }
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    price: 230,
    category: 'coffee',
    description: 'Perfect classic balance of espresso, steamed milk and a velvety layer of microfoam.',
    image: 'assets/images/menu/cappuccino.png', // Mapped to leaf latte art cup
    isVegan: false,
    isJain: true,
    quizTags: { mood: 'productive', sweetness: 'medium', temp: 'hot', strength: 'strong' }
  },
  {
    id: 'latte',
    name: 'Latte',
    price: 250,
    category: 'coffee',
    description: 'Espresso with steamed milk and a delicate touch of foam. *Hot & Iced options available.',
    image: 'assets/images/menu/cappuccino.png', // Mapped to latte art
    isVegan: false,
    isJain: true,
    quizTags: { mood: 'cozy', sweetness: 'medium', temp: 'hot', strength: 'mild' }
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew Coffee',
    price: 250,
    category: 'coffee',
    description: 'Slow-brewed, refreshing and smooth cold-steeped organic coffee beans.',
    image: 'assets/images/menu/cold_brew.png', // Mapped to double-wall ice sphere brew
    isVegan: true,
    isJain: true,
    quizTags: { mood: 'productive', sweetness: 'none', temp: 'cold', strength: 'strong' }
  },
  {
    id: 'manual-brew',
    name: 'Manual Brew Pour-Over',
    price: 210,
    category: 'coffee',
    description: 'Handcrafted drip coffee, tailored in real-time to match your favorite notes.',
    image: 'assets/images/menu/beverage_placeholder.png', // Pour-over carafe view
    isVegan: true,
    isJain: true,
    quizTags: { mood: 'adventurous', sweetness: 'none', temp: 'hot', strength: 'strong' }
  },
  {
    id: 'honey-cinnamon-latte',
    name: 'Honey Cinnamon Latte',
    price: 290,
    category: 'coffee',
    description: 'Warm, spiced, and sweet organic forest honey with cinnamon - Christmas in a cup!',
    image: 'assets/images/menu/cappuccino.png',
    isVegan: false,
    isJain: true,
    quizTags: { mood: 'cozy', sweetness: 'extra', temp: 'hot', strength: 'mild' }
  },
  {
    id: 'classic-cold-coffee',
    name: 'Classic Cold Coffee',
    price: 240,
    category: 'coffee',
    description: 'Rich, thick, and creamy sweet coffee blend. Does it even need a description?',
    image: 'assets/espresso_tonic.png', // layered iced coffee visual
    isVegan: false,
    isJain: true,
    quizTags: { mood: 'cozy', sweetness: 'extra', temp: 'cold', strength: 'mild' }
  },
  {
    id: 'herbal-tea',
    name: 'Botanical Herbal Tea',
    price: 190,
    category: 'coffee',
    description: 'Calming floral tea / organic Wellness tea / sweet Rose Cinnamon black tea.',
    image: 'assets/images/menu/herbal_tea.png', // Mapped to flower teapot
    isVegan: true,
    isJain: true,
    quizTags: { mood: 'adventurous', sweetness: 'none', temp: 'hot', strength: 'mild' }
  },
  {
    id: 'kombucha',
    name: 'Artisanal Kombucha',
    price: 200,
    category: 'coffee',
    description: 'Fermented sparkling tea. Choices: Yuzu, Blueberry Lemonade, Hibiscus, Salted Lime, Cola.',
    image: 'assets/espresso_tonic.png',
    isVegan: true,
    isJain: true,
    quizTags: { mood: 'adventurous', sweetness: 'medium', temp: 'cold', strength: 'mild' }
  },
  {
    id: 'hot-chocolate',
    name: 'Luscious Hot Chocolate',
    price: 260,
    category: 'coffee',
    description: 'Creamy, rich Belgian dark chocolate warmer served with toasted marshmallow fluff.',
    image: 'assets/images/menu/hot_chocolate.png', // Mapped to roasted marshmallow cup
    isVegan: false,
    isJain: true,
    quizTags: { mood: 'cozy', sweetness: 'extra', temp: 'hot', strength: 'mild' }
  },
  {
    id: 'the-oj',
    name: 'The OJ Special',
    price: 220,
    category: 'coffee',
    description: 'The OG chilled orange juice served with a bold signature double shot of espresso.',
    image: 'assets/espresso_tonic.png',
    isVegan: true,
    isJain: true,
    quizTags: { mood: 'tired', sweetness: 'medium', temp: 'cold', strength: 'strong' }
  },
  {
    id: 'the-elder',
    name: 'The Elder Special',
    price: 240,
    category: 'coffee',
    description: 'Gourmet elderflower tonic topped with ice cubes and a shot of rich espresso.',
    image: 'assets/espresso_tonic.png',
    isVegan: true,
    isJain: true,
    quizTags: { mood: 'adventurous', sweetness: 'medium', temp: 'cold', strength: 'strong' }
  },
  {
    id: 'the-affogato',
    name: 'The Affogato Gelato',
    price: 240,
    category: 'coffee',
    description: 'Shot of hot espresso poured over your choice of vanilla or hazelnut gelato scoop.',
    image: 'assets/images/menu/the_affogato.png', // Mapped to espresso gelato scoop pour
    isVegan: false,
    isJain: true,
    quizTags: { mood: 'adventurous', sweetness: 'extra', temp: 'cold', strength: 'strong' }
  },

  // --- Category: MAINS & SIDE KICKS (Tag: eats) ---
  {
    id: 'caprese-toast',
    name: 'Caprese Toast',
    price: 340,
    category: 'eats',
    description: 'Sourdough toast spread with house pesto, topped with seasoned cherry tomatoes, fresh mozzarella, salad and crisps.',
    image: 'assets/images/menu/caprese_toast.png', // Mapped to mozzarella tomato Caprese sourdough
    isVegan: false,
    isJain: false
  },
  {
    id: 'triple-cheese-toastie',
    name: 'Triple Cheese Fiery Toastie',
    price: 320,
    category: 'eats',
    description: 'Our take on the classic Indian chilli cheese toast—loaded with triple cheese and fiery spices!',
    image: 'assets/images/menu/triple_cheese_toastie.png', // Mapped to hot cheese pull toastie
    isVegan: false,
    isJain: true
  },
  {
    id: 'roseate-avocado',
    name: 'Roseate Avocado Toastie',
    price: 380,
    category: 'eats',
    description: 'Sliced Haas avocado and organic beetroot hummus spread on toasted sourdough, served with crisps.',
    image: 'assets/avocado_toast.png', // Mapped to gourmet avocado toast
    isVegan: true,
    isJain: false
  },
  {
    id: 'forest-delight',
    name: 'Forest Delight Toastie',
    price: 340,
    category: 'eats',
    description: 'Perfectly toasted artisanal sourdough bread topped with a rich, creamy blend of shiitake and button mushrooms.',
    image: 'assets/images/menu/mains_placeholder.png', // Sourdough baseline
    isVegan: false,
    isJain: false
  },
  {
    id: 'farm-delight',
    name: 'Farm Delight Toastie',
    price: 320,
    category: 'eats',
    description: 'Assorted roasted veggies spread on basil pesto, topped with organic melted mozzarella.',
    image: 'assets/images/menu/mains_placeholder.png',
    isVegan: true,
    isJain: true
  },
  {
    id: 'margherita-toast',
    name: 'Margherita on Toast',
    price: 280,
    category: 'eats',
    description: 'Our twist on the classic Margherita pizza—basil pesto, pizza sauce, mozzarella, and fresh basil leaves on sourdough.',
    image: 'assets/images/menu/caprese_toast.png', // Tomato, basil, mozzarella Caprese sourdough
    isVegan: false,
    isJain: false
  },
  {
    id: 'breakfast-toast',
    name: 'Breakfast on Toast',
    price: 340,
    category: 'eats',
    description: 'Sourdough with peanut butter, banana slices, chocolate dust, mixed berries, and a seasonal fruit salsa.',
    image: 'assets/images/menu/mains_placeholder.png',
    isVegan: true,
    isJain: true
  },
  {
    id: 'tgd-special-chips',
    name: 'TGD Special Chips',
    price: 180,
    category: 'eats',
    description: 'Enjoy our famous house-seasoned baked chips served with a premium creamy yoghurt dill dip.',
    image: 'assets/images/menu/mains_placeholder.png',
    isVegan: false,
    isJain: true
  },

  // --- Category: PASTA SPECIALS (Tag: eats) ---
  {
    id: 'pasta-creamy-mushroom',
    name: 'Creamy Mushroom Pasta',
    price: 380,
    category: 'eats',
    description: 'Earthy button and shiitake mushrooms tossed in a luscious cream sauce, offering rich comforting flavor.',
    image: 'assets/images/menu/pasta_placeholder.png',
    isVegan: false,
    isJain: true
  },
  {
    id: 'pasta-arrabiata',
    name: 'Zesty Arrabiata Pasta',
    price: 360,
    category: 'eats',
    description: 'Classic fiery tomato-based herb sauce with garlic and chili kick, perfect for a punchy dinner.',
    image: 'assets/images/menu/pasta_placeholder.png',
    isVegan: true,
    isJain: false
  },
  {
    id: 'pasta-pesto',
    name: 'Savory Pesto Pasta',
    price: 370,
    category: 'eats',
    description: 'Fresh basil pesto with toasted pine nuts, hints of garlic, olive oil, and organic shaved cheese.',
    image: 'assets/images/menu/pasta_placeholder.png', // Pesto Penne bowl
    isVegan: false,
    isJain: true
  },

  // --- Category: DESSERTS (Tag: desserts) ---
  {
    id: 'classic-brownie',
    name: 'Classic Brownie / Gelato',
    price: 150,
    category: 'desserts',
    description: 'Decadent and rich dark chocolate brownie. *Top with Vanilla or Hazelnut gelato scoop: +₹50.',
    image: 'assets/carrot_cake.png',
    isVegan: false,
    isJain: true
  },
  {
    id: 'carrot-cake',
    name: 'Whole Wheat Carrot Cake',
    price: 250,
    category: 'desserts',
    description: 'Whole wheat flour, brown sugar, walnuts, topped with a dollop of cinnamon cream cheese frosting.',
    image: 'assets/carrot_cake.png', // Mapped to gold carrot cake frost slice
    isVegan: false,
    isJain: true
  },
  {
    id: 'scoop-gelato',
    name: 'A Scoop of Gelato',
    price: 150,
    category: 'desserts',
    description: 'Artisanal scoop of Italian Gelato. Flavor choices: Madagascar Vanilla Bean / Roasted Hazelnut.',
    image: 'assets/images/menu/the_affogato.png', // Gelato scoop close-up
    isVegan: false,
    isJain: true
  }
];

// Seating Area Metadata
const SEATING_AREAS = {
  window: {
    title: 'Window Side',
    description: 'Gazing down on quiet, leafy Church Road street. Beautiful warm sunlight filters in, perfect for readers and dreamers.',
    image: 'assets/hero_bg.png'
  },
  balcony: {
    title: 'Botanical Balcony',
    description: 'Surrounded by hanging ferns, trailing English ivy, and fresh Shanti Nagar breeze. A lush botanical escape with rustic wooden seats.',
    image: 'assets/cozy_nook.png'
  },
  nook: {
    title: 'Cozy Indoor Nook',
    description: 'Tucked behind the green door with soft warm-lit lamps, velvet emerald sofas, and books. Perfect for quiet, private conversations.',
    image: 'assets/hero_bg.png'
  }
};

// Global State
let cart = {}; // { itemId: quantity }
let tipPercentage = 10; // default 10% tip
let activeFilter = 'all';

// DOM Elements Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  initHeaderScroll();
  initMobileNavigation();
  renderMenuGrid();
  initMenuFilters();
  initSeatingSelector();
  initCartDrawer();
  initReservationForm();
  renderReservationsDashboard();
  initSmoothScrollSpy();
  initMenuLightbox();
  initRecommendationQuiz();
  initPolaroidGallery();
  initGsapEntrance();
  initScrollReveal();
  initScrollProgress();      // New advanced progress bar
  initMagneticElements();    // New advanced magnetic pull
  initGsapParticles();       // New advanced floating botanical particles
});

// 2. Header Scroll Effect
function initHeaderScroll() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// 3. Mobile Navigation Trigger
function initMobileNavigation() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = navMenu.querySelectorAll('a');

  mobileBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileBtn.querySelectorAll('span').forEach((span, idx) => {
      if (navMenu.classList.contains('active')) {
        if (idx === 0) span.style.transform = 'translateY(8px) rotate(45deg)';
        if (idx === 1) span.style.opacity = '0';
        if (idx === 2) span.style.transform = 'translateY(-8px) rotate(-45deg)';
      } else {
        span.style.transform = 'none';
        span.style.opacity = '1';
      }
    });
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      mobileBtn.querySelectorAll('span').forEach(s => {
        s.style.transform = 'none';
        s.style.opacity = '1';
      });
    });
  });
}

// 4. Smooth Scroll Spy
function initSmoothScrollSpy() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 120) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });
}

// 5. Render Menu & Incrementor functionality with Vegan & Jain Badges
function renderMenuGrid() {
  const grid = document.getElementById('menu-items-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const filteredItems = activeFilter === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeFilter);

  filteredItems.forEach((item, idx) => {
    const card = document.createElement('article');
    card.className = 'menu-item-card';
    card.setAttribute('data-id', item.id);

    const quantity = cart[item.id] || 0;

    // Build dietary badges HTML
    let badgesHTML = '';
    if (item.isVegan) {
      badgesHTML += `<span class="diet-badge vegan">🌱 Vegan</span>`;
    }
    if (item.isJain) {
      badgesHTML += `<span class="diet-badge jain">🥬 Jain</span>`;
    }

    card.innerHTML = `
      <div class="menu-item-visual">
        <div class="badges-container">${badgesHTML}</div>
        <img src="${item.image}" alt="${item.name}" class="menu-item-image" loading="lazy">
        <div class="menu-item-overlay"></div>
      </div>
      <div class="menu-item-info">
        <div class="menu-item-header">
          <h3 class="menu-item-title">${item.name}</h3>
          <span class="menu-item-price">₹${item.price}</span>
        </div>
        <p class="menu-item-desc">${item.description}</p>
        
        <div class="menu-item-action">
          <div class="quantity-control">
            <button class="quantity-btn minus-btn" onclick="updateItemQuantity('${item.id}', -1)" aria-label="Decrease quantity">−</button>
            <span class="quantity-val">${quantity}</span>
            <button class="quantity-btn plus-btn" onclick="updateItemQuantity('${item.id}', 1)" aria-label="Increase quantity">+</button>
          </div>
          
          <button class="add-cart-btn" onclick="updateItemQuantity('${item.id}', 1)" aria-label="Add to tasting cart">
            <svg viewBox="0 0 24 24">
              <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/>
            </svg>
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  // Staggered pop-over scale animation for active menu tab cards
  gsap.fromTo('.menu-item-card', 
    { scale: 0.9, y: 15, opacity: 0 }, 
    { scale: 1, y: 0, opacity: 1, duration: 0.5, stagger: 0.04, ease: 'back.out(1.2)' }
  );
}

function initMenuFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');
      renderMenuGrid();
    });
  });
}

// 6. Dynamic Cart State Operations
window.updateItemQuantity = function(itemId, change) {
  const currentQty = cart[itemId] || 0;
  const newQty = Math.max(0, currentQty + change);
  
  if (newQty === 0) {
    delete cart[itemId];
  } else {
    cart[itemId] = newQty;
  }
  
  // Refresh UI elements
  updateCartBadge();
  renderMenuGrid(); // updates incrementor card val
  renderCartDrawerContents();
  
  if (change > 0 && newQty === 1) {
    const item = MENU_ITEMS.find(i => i.id === itemId);
    showToast(`Added ${item.name} to budget estimator!`, 'success');
  }
};

function updateCartBadge() {
  const badge = document.getElementById('cart-count');
  if (!badge) return;
  const totalCount = Object.values(cart).reduce((a, b) => a + b, 0);
  
  badge.textContent = totalCount;
  if (totalCount > 0) {
    badge.classList.add('active');
  } else {
    badge.classList.remove('active');
  }
}

// 7. Interactive Cart Drawer Visualizer
function initCartDrawer() {
  const trigger = document.getElementById('cart-trigger');
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  const closeBtn = document.getElementById('close-cart');
  const checkoutBtn = document.getElementById('cart-checkout-btn');

  if (!trigger || !drawer) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    renderCartDrawerContents();
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
  };

  trigger.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  checkoutBtn.addEventListener('click', () => {
    closeDrawer();
    showToast('Tasting budget saved! Proceeding to lock your table...', 'info');
    setTimeout(() => {
      document.getElementById('reserve').scrollIntoView({ behavior: 'smooth' });
    }, 400);
  });

  const tipButtons = document.querySelectorAll('.tip-btn');
  tipButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tipButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      tipPercentage = parseInt(btn.getAttribute('data-tip'), 10);
      recalculateCartTotals();
    });
  });
}

function renderCartDrawerContents() {
  const container = document.getElementById('cart-items-container');
  if (!container) return;
  container.innerHTML = '';

  const items = Object.entries(cart);
  
  if (items.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <svg viewBox="0 0 24 24">
          <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z"/>
        </svg>
        <p>Your tasting cart is empty.<br><span style="font-size: 0.85rem; color: var(--accent);">Add some items above to estimate your cafe order budget!</span></p>
      </div>
    `;
    recalculateCartTotals();
    return;
  }

  items.forEach(([id, qty]) => {
    const item = MENU_ITEMS.find(i => i.id === id);
    if (!item) return;

    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${item.price} x ${qty}</div>
      </div>
      <div class="quantity-control" style="height: 30px;">
        <button class="quantity-btn" onclick="updateItemQuantity('${item.id}', -1)" style="width: 25px;">−</button>
        <span class="quantity-val" style="font-size: 0.8rem; min-width: 15px;">${qty}</span>
        <button class="quantity-btn" onclick="updateItemQuantity('${item.id}', 1)" style="width: 25px;">+</button>
      </div>
      <div class="cart-item-subtotal">₹${item.price * qty}</div>
    `;
    container.appendChild(row);
  });

  recalculateCartTotals();
}

function recalculateCartTotals() {
  let subtotal = 0;
  
  Object.entries(cart).forEach(([id, qty]) => {
    const item = MENU_ITEMS.find(i => i.id === id);
    if (item) subtotal += item.price * qty;
  });

  const tax = Math.round(subtotal * 0.18); // 18% GST (CGST + SGST)
  const tipAmount = Math.round(subtotal * (tipPercentage / 100));
  const grandTotal = subtotal + tax + tipAmount;

  const subtotalEl = document.getElementById('cart-subtotal');
  const taxEl = document.getElementById('cart-tax');
  const totalEl = document.getElementById('cart-total');

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  if (taxEl) taxEl.textContent = `₹${tax.toLocaleString('en-IN')}`;
  if (totalEl) totalEl.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
}

// 8. Seating Area Map Selector
function initSeatingSelector() {
  const cards = document.querySelectorAll('.seating-area-card');
  const previewImg = document.getElementById('area-preview-img');
  const previewDesc = document.getElementById('area-preview-desc');
  const hiddenInput = document.getElementById('selected-area-input');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');

      const areaKey = card.getAttribute('data-id') || card.getAttribute('data-area');
      const data = SEATING_AREAS[areaKey];
      
      if (data) {
        if (hiddenInput) hiddenInput.value = areaKey;
        if (previewImg) {
          previewImg.src = data.image;
          previewImg.alt = data.title;
        }
        if (previewDesc) previewDesc.textContent = data.description;
        
        showToast(`Selected atmosphere: ${data.title}`, 'info');
      }
    });
  });
}

// 9. Table Reservation Submissions & LocalStorage CRUD
function initReservationForm() {
  const form = document.getElementById('reservation-form');
  const dateInput = document.getElementById('res-date');
  if (!form || !dateInput) return;
  
  // Set tomorrow's date as default minimum date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateString = tomorrow.toISOString().split('T')[0];
  dateInput.min = minDateString;
  dateInput.value = minDateString;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('res-name').value.trim();
    const phone = document.getElementById('res-phone').value.trim();
    const date = document.getElementById('res-date').value;
    const time = document.getElementById('res-time').value;
    const guests = document.getElementById('res-guests').value;
    const areaKey = document.getElementById('selected-area-input').value;
    const areaName = SEATING_AREAS[areaKey].title;

    const ticketCode = `GD-${Math.floor(1000 + Math.random() * 9000)}`;
    const newReservation = {
      id: ticketCode,
      name,
      phone,
      date,
      time,
      guests,
      areaKey,
      areaName,
      createdAt: new Date().toISOString()
    };

    // Save database operation in LocalStorage
    let list = JSON.parse(localStorage.getItem('greendoor_reservations')) || [];
    list.unshift(newReservation);
    localStorage.setItem('greendoor_reservations', JSON.stringify(list));

    showToast(`Table Locked Successfully! Ticket: ${ticketCode}`, 'success');

    // Reset Form Fields
    form.reset();
    dateInput.value = minDateString;
    
    // Refresh Reservation dashboard and scroll
    renderReservationsDashboard();
    
    setTimeout(() => {
      document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
    }, 1000);
  });
}

// Render local storage dashboard
function renderReservationsDashboard() {
  const container = document.getElementById('dashboard-wrapper');
  if (!container) return;
  const reservations = JSON.parse(localStorage.getItem('greendoor_reservations')) || [];

  if (reservations.length === 0) {
    container.innerHTML = `
      <div class="dashboard-empty">
        <svg viewBox="0 0 24 24">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7v-5z"/>
        </svg>
        <p>You don't have any active reservations currently.<br><span style="font-size: 0.85rem; color: var(--accent);">Fill out the secure booking form above to reserve your cozy space!</span></p>
      </div>
    `;
    return;
  }

  let html = `<div class="reservation-tickets-grid">`;
  reservations.forEach(res => {
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    const dateFormatted = new Date(res.date).toLocaleDateString('en-US', options);

    html += `
      <div class="res-ticket glass-panel" id="ticket-${res.id}">
        <div class="res-ticket-header">
          <span class="res-ticket-code">${res.id}</span>
          <span class="res-ticket-area">${res.areaName}</span>
        </div>
        <div class="res-ticket-body">
          <div class="res-ticket-name">${res.name}</div>
          <div class="res-ticket-meta">
            <div class="res-meta-item" title="Date">
              📅 <span>${dateFormatted}</span>
            </div>
            <div class="res-meta-item" title="Time Slot">
              🕰️ <span>${res.time}</span>
            </div>
            <div class="res-meta-item" title="Guest Count">
              👥 <span>${res.guests}</span>
            </div>
            <div class="res-meta-item" title="Contact">
              📞 <span>${res.phone}</span>
            </div>
          </div>
        </div>
        <div class="res-ticket-actions">
          <button class="cancel-res-btn" onclick="cancelReservation('${res.id}')">Cancel Booking</button>
        </div>
      </div>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

window.cancelReservation = function(ticketId) {
  let list = JSON.parse(localStorage.getItem('greendoor_reservations')) || [];
  const index = list.findIndex(r => r.id === ticketId);
  
  if (index !== -1) {
    list.splice(index, 1);
    localStorage.setItem('greendoor_reservations', JSON.stringify(list));
    
    showToast(`Booking ${ticketId} cancelled.`, 'error');
    renderReservationsDashboard();
  }
};

// 10. Digital Menu Lightbox Event Handlers
function initMenuLightbox() {
  const trigger = document.getElementById('open-lightbox-trigger');
  const backdrop = document.getElementById('menu-lightbox-backdrop');
  const closeBtn = document.getElementById('close-lightbox-btn');

  if (!trigger || !backdrop) return;

  const openLightbox = () => {
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden'; // lock scroll
    showToast('Viewing full printed digital menu sheets', 'info');
  };

  const closeLightbox = () => {
    backdrop.classList.remove('open');
    document.body.style.overflow = ''; // unlock scroll
  };

  trigger.addEventListener('click', openLightbox);
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  
  // Close when clicking outside sheets
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeLightbox();
    }
  });

  // ESC key handler
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closeLightbox();
    }
  });
}

// 11. Native Custom dynamic Toast Alerts
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let icon = '🔔';
  if (type === 'success') icon = '🌿';
  if (type === 'error') icon = '🗑️';
  
  toast.innerHTML = `
    <span>${icon}</span>
    <span>${message}</span>
  `;
  
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-30px)';
    toast.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    setTimeout(() => {
      toast.remove();
    }, 500);
  }, 4000);
}

// ==========================================================================
// 12. AI COFFEE RECOMMENDATION WIZARD & LOGIC ORCHESTRATION
// ==========================================================================
let currentQuizStep = 1;
let quizAnswers = {};

function initRecommendationQuiz() {
  const steps = document.querySelectorAll('.quiz-step');
  const progressBar = document.getElementById('quiz-progress');
  const progressLbl = document.getElementById('quiz-progress-lbl');
  const backBtn = document.getElementById('quiz-back-btn');
  const optionButtons = document.querySelectorAll('.quiz-opt-btn');
  
  const modalBackdrop = document.getElementById('quiz-modal-backdrop');
  const closeBtn = document.getElementById('close-quiz-modal');
  const recOrderBtn = document.getElementById('rec-order-btn');
  
  if (!steps.length || !progressBar) return;

  function goToStep(stepNum) {
    if (stepNum < 1) return;
    
    if (stepNum > 4) {
      // Quiz complete! Trigger matching calculations & brewing loading modal
      triggerRecommendationBrew();
      return;
    }

    const currentStepEl = Array.from(steps).find(step => step.classList.contains('active'));
    const nextStepEl = Array.from(steps).find(step => parseInt(step.getAttribute('data-step'), 10) === stepNum);

    if (currentStepEl && currentStepEl !== nextStepEl) {
      // Smooth sequential horizontal transition: slide out left, then slide in right
      gsap.to(currentStepEl, {
        x: -30,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          currentStepEl.classList.remove('active');
          gsap.set(currentStepEl, { x: 0 }); // reset layout offsets

          if (nextStepEl) {
            nextStepEl.classList.add('active');
            gsap.fromTo(nextStepEl,
              { x: 30, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.3, ease: 'power2.out' }
            );
          }
        }
      });
    } else if (nextStepEl) {
      nextStepEl.classList.add('active');
      gsap.fromTo(nextStepEl,
        { x: 0, opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
    }

    // Update progress elements
    currentQuizStep = stepNum;
    progressBar.style.width = `${(stepNum / 4) * 100}%`;
    if (progressLbl) progressLbl.textContent = `Step ${stepNum} of 4`;
    
    // Back button state
    if (backBtn) {
      if (stepNum === 1) {
        backBtn.disabled = true;
      } else {
        backBtn.disabled = false;
      }
    }
  }

  // Back button click handler
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      goToStep(currentQuizStep - 1);
    });
  }

  // Options click selector
  optionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const stepEl = btn.closest('.quiz-step');
      const stepIndex = parseInt(stepEl.getAttribute('data-step'), 10);
      const val = btn.getAttribute('data-val');
      
      // Map step to quizAnswers key
      let key = '';
      if (stepIndex === 1) key = 'mood';
      if (stepIndex === 2) key = 'sweetness';
      if (stepIndex === 3) key = 'temp';
      if (stepIndex === 4) key = 'strength';

      // Record selected choice
      quizAnswers[key] = val;

      // Toggle active buttons styling in the current step grid
      stepEl.querySelectorAll('.quiz-opt-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');

      // Auto-advance with a smooth transition delay for feedback
      setTimeout(() => {
        goToStep(stepIndex + 1);
      }, 350);
    });
  });

  // Modal backdrop close helpers
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modalBackdrop.classList.remove('open');
    });
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        modalBackdrop.classList.remove('open');
      }
    });
  }
}

function triggerRecommendationBrew() {
  const modalBackdrop = document.getElementById('quiz-modal-backdrop');
  const loadingState = document.getElementById('quiz-loading');
  const resultContent = document.getElementById('quiz-result-content');
  const loadingBarProgress = document.getElementById('loading-bar-progress');
  
  if (!modalBackdrop) return;
  
  // Show loading modal and reset states
  modalBackdrop.classList.add('open');
  loadingState.style.display = 'flex';
  resultContent.style.display = 'none';
  if (loadingBarProgress) loadingBarProgress.style.width = '0%';
  
  // Calculate coffee soulmate match immediately in the background
  const matchItem = calculateOptimalCoffee();

  // Animate loading bar over 1.8s
  let progress = 0;
  const interval = setInterval(() => {
    progress += 5;
    if (loadingBarProgress) loadingBarProgress.style.width = `${progress}%`;
    
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        // Display recommended drink details inside modal card
        displayCoffeeRecommendation(matchItem);
      }, 200);
    }
  }, 90);
}

function calculateOptimalCoffee() {
  let matchedItem = null;
  let highestScore = -1;

  // Filter beverages to score
  const coffeeItems = MENU_ITEMS.filter(item => item.category === 'coffee');

  coffeeItems.forEach(item => {
    if (!item.quizTags) return;
    
    let score = 0;
    
    // 1. Temperature match (Critical category filter): +2.0 points
    if (item.quizTags.temp === quizAnswers.temp) {
      score += 2.0;
    }
    
    // 2. Strength match (Very important caffeine factor): +1.5 points
    if (item.quizTags.strength === quizAnswers.strength) {
      score += 1.5;
    }
    
    // 3. Sweetness match (Texture metric): +1.0 point
    if (item.quizTags.sweetness === quizAnswers.sweetness) {
      score += 1.0;
    }
    
    // 4. Mood match (Vibe synergy): +1.0 point
    if (item.quizTags.mood === quizAnswers.mood) {
      score += 1.0;
    }

    if (score > highestScore) {
      highestScore = score;
      matchedItem = item;
    }
  });

  // Fallback seeder in case database entries have missing tags
  return matchedItem || coffeeItems[0];
}

function displayCoffeeRecommendation(item) {
  const loadingState = document.getElementById('quiz-loading');
  const resultContent = document.getElementById('quiz-result-content');
  
  const recName = document.getElementById('rec-item-name');
  const recImg = document.getElementById('rec-item-img');
  const recTitle = document.getElementById('rec-item-title');
  const recPrice = document.getElementById('rec-item-price');
  const recDesc = document.getElementById('rec-item-desc');
  const recBadges = document.getElementById('rec-item-badges');
  const recOrderBtn = document.getElementById('rec-order-btn');
  
  if (!item || !resultContent) return;

  // Render match parameters
  if (recName) recName.textContent = item.name;
  if (recImg) {
    recImg.src = item.image;
    recImg.alt = item.name;
  }
  if (recTitle) recTitle.textContent = item.name;
  if (recPrice) recPrice.textContent = `₹${item.price}`;
  if (recDesc) recDesc.textContent = item.description;
  
  // Dietary tags badges inside recommendation panel
  if (recBadges) {
    let badgesHTML = '';
    if (item.isVegan) badgesHTML += `<span class="diet-badge vegan" style="font-size: 0.6rem; padding: 0.2rem 0.6rem; border-radius: 4px;">🌱 Vegan</span>`;
    if (item.isJain) badgesHTML += `<span class="diet-badge jain" style="font-size: 0.6rem; padding: 0.2rem 0.6rem; border-radius: 4px;">🥬 Jain</span>`;
    recBadges.innerHTML = badgesHTML;
  }

  // Order checkout button click action
  if (recOrderBtn) {
    // Clear old event listener to prevent duplicate orders
    const newBtn = recOrderBtn.cloneNode(true);
    recOrderBtn.parentNode.replaceChild(newBtn, recOrderBtn);
    
    newBtn.addEventListener('click', () => {
      // Add drink to tasting cart
      updateItemQuantity(item.id, 1);
      
      // Close recommendation modal
      document.getElementById('quiz-modal-backdrop').classList.remove('open');
      
      // Reset quiz steps
      currentQuizStep = 1;
      quizAnswers = {};
      document.querySelectorAll('.quiz-opt-btn').forEach(b => b.classList.remove('selected'));
      
      // Tweak steps display
      const steps = document.querySelectorAll('.quiz-step');
      steps.forEach((step, idx) => {
        step.classList.remove('active');
        if (idx === 0) step.classList.add('active');
      });
      document.getElementById('quiz-progress').style.width = '25%';
      document.getElementById('quiz-progress-lbl').textContent = 'Step 1 of 4';
      document.getElementById('quiz-back-btn').disabled = true;

      // Direct scroll & cart drawer open orchestrator
      setTimeout(() => {
        const drawer = document.getElementById('cart-drawer');
        const backdrop = document.getElementById('cart-backdrop');
        if (drawer && backdrop) {
          drawer.classList.add('open');
          backdrop.classList.add('open');
          renderCartDrawerContents();
        }
      }, 300);
    });
  }

  // Smooth transitions between loading & visual content
  loadingState.style.display = 'none';
  resultContent.style.display = 'block';
  
  // High-end bouncy spring scale-in using GSAP
  gsap.fromTo(resultContent, 
    { scale: 0.8, opacity: 0 }, 
    { scale: 1, opacity: 1, duration: 0.65, ease: 'back.out(1.5)' }
  );

  showToast(` virtual barista matched you with ${item.name}!`, 'success');
}


// ==========================================================================
// 13. POLAROID UGC GALLERY & LOCAL STORAGE CRUD ORCHESTRATION
// ==========================================================================
let selectedGalleryTags = [];

function initPolaroidGallery() {
  const uploadTrigger = document.getElementById('open-upload-modal-btn');
  const uploadBackdrop = document.getElementById('upload-modal-backdrop');
  const uploadCloseBtn = document.getElementById('close-upload-modal');
  const fileDropzone = document.getElementById('file-dropzone');
  const fileInput = document.getElementById('photo-file');
  const tagButtons = document.querySelectorAll('.mood-tag-btn');
  const uploadForm = document.getElementById('polaroid-upload-form');
  const previewImg = document.getElementById('upload-preview-img');
  
  if (!uploadTrigger) return;

  // Dynamic gallery seeder on first load
  seedDefaultPolaroids();
  renderPolaroidGrid();

  // Open modal
  uploadTrigger.addEventListener('click', () => {
    uploadBackdrop.classList.add('open');
  });

  // Close modal
  if (uploadCloseBtn) {
    uploadCloseBtn.addEventListener('click', () => {
      uploadBackdrop.classList.remove('open');
    });
  }
  if (uploadBackdrop) {
    uploadBackdrop.addEventListener('click', (e) => {
      if (e.target === uploadBackdrop) {
        uploadBackdrop.classList.remove('open');
      }
    });
  }

  // Multi-select mood tag toggles
  tagButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      const tag = btn.getAttribute('data-tag');
      
      if (btn.classList.contains('active')) {
        if (!selectedGalleryTags.includes(tag)) {
          selectedGalleryTags.push(tag);
        }
      } else {
        selectedGalleryTags = selectedGalleryTags.filter(t => t !== tag);
      }
    });
  });

  // File dropzone click trigger hidden input
  if (fileDropzone && fileInput) {
    fileDropzone.addEventListener('click', (e) => {
      // Prevent recursion if clicking the hidden input
      if (e.target !== fileInput) {
        fileInput.click();
      }
    });

    // Drag and Drop styling bindings
    ['dragenter', 'dragover'].forEach(eventName => {
      fileDropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        fileDropzone.style.borderColor = 'var(--accent)';
        fileDropzone.style.background = 'rgba(255,255,255,0.03)';
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      fileDropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        fileDropzone.style.borderColor = 'var(--border-glass)';
        fileDropzone.style.background = 'rgba(255,255,255,0.01)';
      }, false);
    });

    // Drop handler
    fileDropzone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const files = dt.files;
      if (files.length) {
        fileInput.files = files;
        handleFileSelection(files[0]);
      }
    });

    // File Picker select handler
    fileInput.addEventListener('change', () => {
      if (fileInput.files.length) {
        handleFileSelection(fileInput.files[0]);
      }
    });
  }

  function handleFileSelection(file) {
    if (!file || !previewImg) return;
    
    // Validate that it is actually an image file
    if (!file.type.startsWith('image/')) {
      showToast('Please select a valid image file.', 'error');
      return;
    }

    // Set preview URL
    previewImg.src = URL.createObjectURL(file);
    previewImg.style.display = 'block';
    
    // Hide text and icon elements in dropzone
    if (fileDropzone) {
      fileDropzone.querySelector('.dropzone-icon').style.display = 'none';
      fileDropzone.querySelector('.dropzone-text').style.display = 'none';
    }
  }

  // Polaroid UGC Upload Form submit CRUD
  if (uploadForm) {
    uploadForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const experience = document.getElementById('photo-experience').value.trim();
      const sentiment = document.getElementById('photo-sentiment').value.trim();
      
      if (!fileInput.files.length) {
        showToast('Please select a photograph to upload.', 'error');
        return;
      }

      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = function(event) {
        const base64String = event.target.result;
        
        // Assemble new polaroid object
        const newPolaroid = {
          id: `ugc-${Date.now()}`,
          image: base64String,
          caption: experience,
          notes: sentiment,
          tags: [...selectedGalleryTags],
          createdAt: new Date().toISOString()
        };

        // Save in LocalStorage database array
        let list = JSON.parse(localStorage.getItem('greendoor_gallery')) || [];
        list.unshift(newPolaroid);
        localStorage.setItem('greendoor_gallery', JSON.stringify(list));

        showToast('Instant Polaroid pinned to the Chronicles board!', 'success');

        // Reset form variables
        uploadForm.reset();
        previewImg.style.display = 'none';
        previewImg.src = '';
        if (fileDropzone) {
          fileDropzone.querySelector('.dropzone-icon').style.display = 'block';
          fileDropzone.querySelector('.dropzone-text').style.display = 'block';
        }
        tagButtons.forEach(b => b.classList.remove('active'));
        selectedGalleryTags = [];

        // Close modal
        uploadBackdrop.classList.remove('open');

        // Dynamically rebuild grid
        renderPolaroidGrid();
      };

      reader.onerror = function() {
        showToast('Error serializing photograph file.', 'error');
      };

      reader.readAsDataURL(file);
    });
  }
}

function seedDefaultPolaroids() {
  const galleryDb = localStorage.getItem('greendoor_gallery');
  
  // Auto-migration: If old placeholder data exists, clear it to force the real photos seeder
  if (galleryDb && (galleryDb.includes('cozy_nook.png') || galleryDb.includes('hero_bg.png') || galleryDb.includes('cafe_facade_night.png') || galleryDb.includes('cafe_green_door.png'))) {
    localStorage.removeItem('greendoor_gallery');
  }

  // Seed real cafe assets
  const defaults = [
    {
      id: 'default-1',
      image: 'assets/cafe_green_door.jpg',
      caption: 'The Green Door itself! 🌿',
      notes: 'Walking through these double emerald doors instantly transports you to a quiet, lush greenhouse cafe away from the traffic noise. Absolutely magical!',
      tags: ['Cozy 🛋️', 'Serene 🍃'],
      createdAt: new Date(2026, 4, 12, 10, 15).toISOString()
    },
    {
      id: 'default-2',
      image: 'assets/cafe_logo_sign.png',
      caption: 'The Green Door Signboard ☕',
      notes: 'Spotted this circular glowing logo signboard hanging outside Church Road! It truly marks the start of a warm, secret sanctuary.',
      tags: ['Warm ☕', 'Retro 📻'],
      createdAt: new Date(2026, 4, 18, 17, 45).toISOString()
    },
    {
      id: 'default-3',
      image: 'assets/cafe_facade_night.jpg',
      caption: 'Cozy facade lights at night 🌙',
      notes: 'The entrance arch looks absolutely stunning under the glowing warm sign at night. A comforting, beautiful view to wrap up the day.',
      tags: ['Cozy 🛋️', 'Warm ☕'],
      createdAt: new Date(2026, 4, 25, 20, 30).toISOString()
    }
  ];

  if (!localStorage.getItem('greendoor_gallery')) {
    localStorage.setItem('greendoor_gallery', JSON.stringify(defaults));
  }
}

function renderPolaroidGrid() {
  const grid = document.getElementById('polaroid-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  const polaroids = JSON.parse(localStorage.getItem('greendoor_gallery')) || [];

  polaroids.forEach(card => {
    const article = document.createElement('article');
    article.className = 'polaroid-card';
    article.setAttribute('data-id', card.id);
    
    // Assign a randomized rotation tilt between -3 and +3 degrees for authentic look
    const randomTilt = (Math.random() * 6 - 3).toFixed(2);
    article.style.transform = `rotate(${randomTilt}deg)`;
    
    // Dynamic badges tags markup
    let tagsHTML = '';
    card.tags.forEach(t => {
      tagsHTML += `<span class="polaroid-tag-badge">${t}</span>`;
    });

    article.innerHTML = `
      <div class="polaroid-img-wrapper">
        <div class="polaroid-tags">${tagsHTML}</div>
        <img src="${card.image}" alt="${card.caption}" loading="lazy">
      </div>
      <div class="polaroid-caption">${card.caption}</div>
    `;

    // Click trigger to open detailed visual polaroid lightbox
    article.addEventListener('click', () => {
      openPolaroidDetailLightbox(card);
    });

    grid.appendChild(article);
  });

  // Bind real-time 3D parallax coordinate-based tilts
  bind3DPolaroidTilts();
}

function openPolaroidDetailLightbox(card) {
  // Dynamically build a premium lightbox backdrop overlay for Polaroid details
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-backdrop open';
  overlay.style.zIndex = '99999';
  
  // Format creation date
  const dateFormatted = new Date(card.createdAt).toLocaleDateString('en-US', {
    weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'
  });

  let tagsHTML = '';
  card.tags.forEach(t => {
    tagsHTML += `<span class="polaroid-tag-badge" style="font-size: 0.65rem; padding: 0.25rem 0.5rem; border-radius: 4px;">${t}</span>`;
  });

  overlay.innerHTML = `
    <div class="lightbox-container" style="max-width: 720px; padding: 1.5rem;">
      <div class="glass-panel" style="position: relative; width: 100%; padding: 2.5rem; border-radius: 40px 10px 40px 10px; border: 1px solid var(--border-glass-active); background: rgba(11, 26, 17, 0.98); box-shadow: 0 20px 50px rgba(0,0,0,0.95); animation: scaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;">
        <button type="button" class="lightbox-close-btn" id="close-polaroid-detail-btn" style="top: 1.5rem; right: 1.5rem; font-size: 2rem;">&times;</button>
        
        <span class="section-tag" style="margin-bottom: 0.5rem;">Guest Memory Spotlight</span>
        <h3 style="font-family: var(--font-display); font-size: 1.8rem; margin-bottom: 2rem; color: var(--accent); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding-right: 1.5rem;">${card.caption}</h3>
        
        <div class="polaroid-view-detail">
          <!-- Polaroid visual left side -->
          <div style="background: #fbfaf5; padding: 12px 12px 28px 12px; border-radius: 2px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); width: 220px; flex-shrink: 0; transform: rotate(-1.5deg);">
            <div style="width: 100%; aspect-ratio: 1/1; overflow: hidden; border: 1px solid rgba(0,0,0,0.08);">
              <img src="${card.image}" alt="${card.caption}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="font-family: var(--font-script); font-size: 1.35rem; color: #2b3a2f; text-align: center; margin-top: 0.85rem; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${card.caption}</div>
          </div>
          
          <!-- Sentiment text right side -->
          <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between; min-height: 260px;">
            <div>
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; color: var(--accent); display: block; margin-bottom: 0.5rem;">Aesthetic Notes / Thoughts</span>
              <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-main); font-weight: 300; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 12px; padding: 1rem 1.25rem; font-style: italic; max-height: 160px; overflow-y: auto;">
                "${card.notes}"
              </p>
            </div>
            
            <div style="margin-top: 1.5rem;">
              <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
                ${tagsHTML}
              </div>
              <span style="font-family: var(--font-sans); font-size: 0.75rem; color: var(--text-muted); font-weight: 400; display: block;">
                📅 Captured on: <strong>${dateFormatted}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden'; // lock scroll

  // Close lightbox event
  const closeDetailBtn = overlay.querySelector('#close-polaroid-detail-btn');
  const closeDetailLightbox = () => {
    overlay.remove();
    document.body.style.overflow = ''; // unlock scroll
  };

  closeDetailBtn.addEventListener('click', closeDetailLightbox);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeDetailLightbox();
    }
  });

  // ESC key handler
  window.addEventListener('keydown', function escHandler(e) {
    if (e.key === 'Escape') {
      closeDetailLightbox();
      window.removeEventListener('keydown', escHandler);
    }
  });
}

// 14. GSAP Page Load Entrance Timeline
function initGsapEntrance() {
  // 1. Settle-in scale on background elements (.hero)
  gsap.fromTo('.hero', 
    { backgroundSize: '105%' },
    { backgroundSize: '100%', duration: 1.8, ease: 'power2.out' }
  );

  // 2. Main heading "THE GREEN DOOR HOUSE CAFE" grace fade-in and slide-down slightly
  gsap.fromTo('.hero-title',
    { opacity: 0, y: -25 },
    { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.1 }
  );

  // Logo text, section tag, subtitle etc.
  gsap.fromTo('.hero .section-tag',
    { opacity: 0, y: -15 },
    { opacity: 1, y: 0, duration: 1.0, ease: 'power2.out', delay: 0.3 }
  );

  gsap.fromTo('.hero-subtitle',
    { opacity: 0, y: 15 },
    { opacity: 1, y: 0, duration: 1.0, ease: 'power2.out', delay: 0.4 }
  );

  // 3. Stagger-fade primary Call-to-Action buttons and metadata highlights
  gsap.fromTo('.hero-actions .btn, .hero-meta',
    { opacity: 0, y: 15 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.15, delay: 0.6 }
  );
}

// 15. Scroll Reveal GSAP ScrollTrigger Framework
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-element');
  if (!revealElements.length) return;

  revealElements.forEach(el => {
    // Determine translation offset direction
    let xOffset = 0;
    let yOffset = 40;

    if (el.classList.contains('reveal-left')) {
      xOffset = -50;
      yOffset = 0;
    } else if (el.classList.contains('reveal-right')) {
      xOffset = 50;
      yOffset = 0;
    }

    // Set initial state before transition (FOUC prevention)
    gsap.set(el, { opacity: 0, x: xOffset, y: yOffset, visibility: 'visible' });

    // Set up scroll triggers
    gsap.to(el, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none' // Animate only once
      }
    });
  });

  // Sleek Horizontal slide reveals on section tags/titles gold lines
  gsap.utils.toArray('.section-tag, .section-title').forEach(title => {
    gsap.fromTo(title,
      { letterSpacing: '0.05em', opacity: 0.5 },
      {
        letterSpacing: '0.12em',
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: title,
          start: 'top 90%'
        }
      }
    );
  });
}

// 16. Sleek Top Scroll Progress Tracker
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  gsap.to(progressBar, {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.3
    }
  });
}

// 17. Tactical Interactive Magnetic Pull Elements
function initMagneticElements() {
  // Select buttons, brand header logo, and budget cart circular icon
  const magneticEls = document.querySelectorAll('.btn, #header .logo, #cart-trigger');
  
  magneticEls.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const bound = el.getBoundingClientRect();
      const mouseX = e.clientX - bound.left - bound.width / 2;
      const mouseY = e.clientY - bound.top - bound.height / 2;
      
      // Calculate pull distances (max 15-20px pull)
      const pullX = mouseX * 0.35;
      const pullY = mouseY * 0.35;
      
      gsap.to(el, {
        x: pullX,
        y: pullY,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    el.addEventListener('mouseleave', () => {
      // Spring elastic snapback to origin
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.4)'
      });
    });
  });
}

// 18. Holographic 3D Real-Time Parallax Polaroid Tilts
function bind3DPolaroidTilts() {
  const cards = document.querySelectorAll('.polaroid-card');
  
  cards.forEach(card => {
    // Extract dynamic initial flat rotation
    const transformVal = card.style.transform || '';
    const rotateMatch = transformVal.match(/rotate\(([^)]+)\)/);
    const randomTilt = rotateMatch ? parseFloat(rotateMatch[1]) : 0;
    
    card.addEventListener('mousemove', (e) => {
      const bound = card.getBoundingClientRect();
      const x = e.clientX - bound.left;
      const y = e.clientY - bound.top;
      
      const width = bound.width;
      const height = bound.height;
      
      // Calculate tilt angles based on position (max tilt 8 degrees)
      const tiltX = ((y - height / 2) / (height / 2)) * 8;
      const tiltY = -((x - width / 2) / (width / 2)) * 8;
      
      gsap.to(card, {
        scale: 1.08,
        rotateX: tiltX,
        rotateY: tiltY,
        rotateZ: 0,
        z: 30,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.7)',
        overwrite: 'auto',
        duration: 0.15,
        ease: 'power2.out'
      });
    });
    
    card.addEventListener('mouseleave', () => {
      // Spring elastic reset back to initial seeded dynamic flat rotation
      gsap.to(card, {
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        rotateZ: randomTilt,
        z: 0,
        boxShadow: '0 12px 28px rgba(0, 0, 0, 0.45)',
        overwrite: 'auto',
        duration: 0.5,
        ease: 'power2.out'
      });
    });
  });
}

// 19. Floating Greenhouse Botanical Leaves & Coffee Particles
function initGsapParticles() {
  const container = document.getElementById('particles-container');
  if (!container) return;

  const particleStyles = [
    // Translucent Green English Ivy Leaf SVG
    `<svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(72,112,80,0.15)" xmlns="http://www.w3.org/2000/svg"><path d="M17 8C8 10 9 19 12 22C15 19 16 10 17 8Z"/><path d="M7 8C16 10 15 19 12 22C9 19 8 10 7 8Z"/></svg>`,
    // Translucent Botanical Monstera Leaf outline
    `<svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(59,83,62,0.12)" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C14.07 4 15.93 4.84 17.29 6.2C15.93 7.56 14.07 8.4 12 8.4C9.93 8.4 8.07 7.56 6.71 6.2C8.07 4.84 9.93 4 12 4Z"/></svg>`,
    // Translucent Gold Coffee Bean Outline
    `<svg width="12" height="12" viewBox="0 0 24 24" fill="rgba(212,175,55,0.18)" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8 10C8.55 10 9 10.45 9 11C9 11.55 8.55 12 8 12C7.45 12 7 11.55 7 11C7 10.45 7.45 10 8 10Z"/></svg>`
  ];

  function spawnParticle() {
    // Limit active particles to prevent performance drag
    if (container.children.length > 25) return;

    const el = document.createElement('div');
    el.className = 'botanical-particle';
    el.innerHTML = particleStyles[Math.floor(Math.random() * particleStyles.length)];
    
    // Random sizes and starting positions
    const size = Math.random() * 20 + 10;
    const startX = Math.random() * container.offsetWidth;
    const startY = container.offsetHeight + 20;
    
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.left = `${startX}px`;
    el.style.top = `${startY}px`;
    
    container.appendChild(el);

    // GSAP floating flight path
    gsap.fromTo(el,
      { 
        y: 0, 
        x: 0, 
        opacity: 0, 
        rotation: 0 
      },
      {
        y: -(container.offsetHeight + 100),
        x: Math.random() * 120 - 60, // gentle side-to-side drift
        opacity: Math.random() * 0.8 + 0.2,
        rotation: Math.random() * 360,
        duration: Math.random() * 8 + 6, // 6s to 14s rise duration
        ease: 'power1.out',
        onComplete: () => {
          el.remove();
        }
      }
    );
  }

  // Periodic spawning (optimized interval to save memory)
  const spawnTimer = setInterval(spawnParticle, 800);
  
  // Clean up if window closes (best practices)
  window.addEventListener('beforeunload', () => clearInterval(spawnTimer));
}

