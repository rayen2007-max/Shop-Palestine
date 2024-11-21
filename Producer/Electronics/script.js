var products = [
    { id: 1, name: 'Smartphone', category: 'electronics', price: 499, image: 'https://tse1.mm.bing.net/th?id=OIP.a_qlj28ZZkXKpuMMaVu8TwHaEo&pid=Api&P=0&h=180' },
    { id: 2, name: 'Laptop', category: 'electronics', price: 899, image: 'https://tse2.mm.bing.net/th?id=OIP.nZSs90fzP-2h5DRonb-7rAHaE8&pid=Api&P=0&h=180' },
    { id: 3, name: 'iPad', category: 'electronics', price: 550, image: 'https://tse4.mm.bing.net/th?id=OIP.FKh3aC4S0Lz0CqwIacOjfAHaE8&pid=Api&P=0&h=180' },
    { id: 4, name: 'washing machine', category: 'home', price: 380, image: 'https://tse1.mm.bing.net/th?id=OIP.m9LDEN1vXCPYdVR0wcdCnAHaE8&pid=Api&P=0&h=180' },
    { id: 5, name: 'fridge', category: 'home', price: 299, image: 'https://tse4.mm.bing.net/th?id=OIP.gR3MF_A4VbpOFCzVaSQ5fAHaFj&pid=Api&P=0&h=180' },
    { id: 6, name: 'TV', category: 'home', price: 600, image: 'https://tse1.mm.bing.net/th?id=OIP.MFhdFThUwmvIyTDJB1gxwQHaEd&pid=Api&P=0&h=180' }
]
var cart = []

function loadProducts(filteredProducts = products) {
    var productsContainer = document.getElementById('products')
    productsContainer.innerHTML = ''
    filteredProducts.forEach(product => {
        var productDiv = document.createElement('div')
        productDiv.classList.add('product')
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `
        productsContainer.appendChild(productDiv)
    })
}

function addToCart(productId) {
    var product = products.find(p => p.id === productId)
    cart.push(product)
    updateCartCount()
}

function updateCartCount() {
    var cartCount = cart.length
    document.getElementById('cart-count').textContent = cartCount
}

function viewCart() {
    var cartModal = document.getElementById('cart-modal')
    var cartItemsContainer = document.getElementById('cart-items')
    cartItemsContainer.innerHTML = ''
    cart.forEach(item => {
        var cartItem = document.createElement('li')
        cartItem.textContent = `${item.name} - $${item.price}`
        cartItemsContainer.appendChild(cartItem)
    })
    cartModal.style.display = 'flex'
}

function closeCart() {
    var cartModal = document.getElementById('cart-modal')
    cartModal.style.display = 'none'
}

function clearCart() {
    cart = []
    updateCartCount()
    closeCart()
}

function filterProducts() {
    var searchQuery = document.getElementById('search-bar').value.toLowerCase()
    var category = document.getElementById('category-filter').value
    var filteredProducts = products.filter(product => {
        var matchesSearch = product.name.toLowerCase().includes(searchQuery)
        var matchesCategory = category === '' || product.category === category
        return matchesSearch && matchesCategory
    })
    loadProducts(filteredProducts)
}

loadProducts()
updateCartCount()
