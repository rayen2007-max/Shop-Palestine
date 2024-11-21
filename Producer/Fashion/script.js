var products = [
    { id: 1, name: 'Maillot Collector Bugs Bunny', category: 'men', price: 59.99, image: 'https://assets.laboutiqueofficielle.com/w_360,q_auto,f_auto/media/products/2024/05/31/looney-tunes_422907_LOONEY_TS_JERSEYBUGSLBLUE_BLE_20240717T131750_01.jpg' },
    { id: 2, name: 'Pantalons Large', category: 'men', price: 64.99, image: 'https://assets.laboutiqueofficielle.com/w_450,q_auto,f_auto/media/products/2024/08/29/none_433550_LOT-LBO_1070521_1357-1070521_1356_20240830T143528_02.jpg' },
    { id: 3, name: 'Baskets Campus', category: 'men', price: 100, image: 'https://assets.laboutiqueofficielle.com/w_450,q_auto,f_auto/media/products/2023/11/21/adidas_397804_HQ8708_20231130T093637_01.jpg' },
    { id: 4, name: 'Maillot Collector Taz', category: 'Women', price: 59.99, image: 'https://assets.laboutiqueofficielle.com/w_360,q_auto,f_auto/media/products/2024/04/11/looney-tunes_417313_LOONEY_TS_JERSEYBUGSPINK_ROS_20240529T111531_01.jpg' },
    { id: 5, name: 'Pantalon Parachute Cargo', category: 'Women', price: 27, image: 'https://assets.laboutiqueofficielle.com/w_450,q_auto,f_auto/media/products/2023/08/24/only_385785_15303706_DARK-GREY_20231115T155814_01.jpg' },
    { id: 6, name: 'Baskets Femme', category: 'Women', price: 40, image: 'https://assets.laboutiqueofficielle.com/w_450,q_auto,f_auto/media/products/2023/05/05/adidas_372252_GW0433_20230523T102540_01.jpg' }
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
