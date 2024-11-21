var products = [
    { id: 1, name: 'Lamp', category: 'electronics', price: 20, image: 'https://tse2.mm.bing.net/th?id=OIP.7rH0CNYIAQMigXCdXcU3CQHaHa&pid=Api&P=0&h=180' },
    { id: 2, name: 'Toaster', category: 'electronics', price: 100, image: 'https://tse4.mm.bing.net/th?id=OIP.7zmJKYtTEfPBbigCs3G-BQHaF7&pid=Api&P=0&h=180' },
    { id: 3, name: 'lighter', category: 'electronics', price: 1, image: 'https://tse2.mm.bing.net/th?id=OIP.aIK4pljqGQ-yGU_9OqRcZQHaEo&pid=Api&P=0&h=180' },
    { id: 4, name: 'Sofa', category: 'home', price: 300, image: 'https://tse2.mm.bing.net/th?id=OIP.kBczxNSFMz0AqSIFKbf3hgHaFC&pid=Api&P=0&h=180' },
    { id: 5, name: 'Cooking equipment', category: 'home', price: 70, image: 'https://tse1.mm.bing.net/th?id=OIP.Ffyu7Wbezo-dCIsVVols0AHaE7&pid=Api&P=0&h=180' },
    { id: 6, name: 'Table', category: 'home', price: 50, image: 'https://tse2.mm.bing.net/th?id=OIP.KhDq0Md4b_g7OKHzg4mF-QHaF0&pid=Api&P=0&h=180' }
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
