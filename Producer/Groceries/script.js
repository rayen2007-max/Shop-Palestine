var products = [
    { id: 1, name: 'Red Apple', category: 'Fruits', price: 15, image: 'https://tse1.mm.bing.net/th?id=OIP.kyvKnaREfPu2kQeRbP8YjgHaEo&pid=Api&P=0&h=180' },
    { id: 2, name: 'watermelon', category: 'Fruits', price: 30, image: 'https://tse1.mm.bing.net/th?id=OIP.KghvU4nz3oHe8LNfKEi0PwHaFS&pid=Api&P=0&h=180' },
    { id: 3, name: 'orange', category: 'Fruits', price: 19, image: 'https://tse3.mm.bing.net/th?id=OIP.JSjqyRLEVPe6CikrlNbl4QHaD4&pid=Api&P=0&h=180' },
    { id: 4, name: 'tomatoes', category: 'vegetables', price: 20, image: 'https://tse4.mm.bing.net/th?id=OIP.691Hw6NXrfwl4cskWAja_QHaFj&pid=Api&P=0&h=180' },
    { id: 5, name: 'pepper', category: 'vegetables', price: 13, image: 'https://tse4.mm.bing.net/th?id=OIP.vM7sLd-iGki5RFtPRAIBTgHaFj&pid=Api&P=0&h=180' },
    { id: 6, name: 'Onion', category: 'vegetables', price: 15, image: 'https://tse3.mm.bing.net/th?id=OIP.Wx6vzEAXKItnAlYqn-nKqwHaE8&pid=Api&P=0&h=180' }
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
