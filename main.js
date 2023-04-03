const btnMenu = document.getElementById('btn-menu')
const menuPrimary = document.getElementById('primary-navigation')
const btnAddToCart = document.querySelectorAll('.btn-add-card')
const loadAddToCart = document.querySelectorAll('.follow-the-leader')

// console.log(btnAddToCart);
// btnMenu.addEventListener('click', () => {
//     menuPrimary.classList.toggle('active')
// })

// btnAddToCart.forEach(item => {
//     item.addEventListener('click', () => {
//         loadAddToCart.
//     })
// })

btnAddToCart.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        let btnItem = e.target
        let product = btnItem.parentElement
        let productName = product.querySelector('h2').innerText;
        let productPrice = product.querySelector('span').innerText;
        let productImg = product.querySelector("img").src;
        // console.log(productName, productPrice, productImg);
        addCart(productImg, productName, productPrice)
        closeButton()
    })
})

function addCart(productImg, productName, productPrice) {
    let cartBox = document.querySelector('.cart-item')
    let cartContent = document.createElement('div')
    cartContent.classList.add('item')

    let cartItem = `
    <a href="" class="cart-item-link">
        <div class="cart-close">
            <div class="svg-close-cart">
                <svg class="close-btn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <span class="product-cart-name">
                ${productName}asdadadadsdsadasdsadadasdsssssssssssssssssssssss
            </span>					                                              
        </div>
        <div class="cart-img">
            <img src="${'.' + productImg.slice(33)}" alt="">
        </div>
    </a>
    <span class="quantity">1 x £${productPrice.slice(1)}</span>
    `
    cartContent.innerHTML = cartItem
    cartBox.append(cartContent)

    totalCartItems()
}

function closeButton() {
    const closeButton = document.querySelectorAll('.close-btn')

    closeButton.forEach(btn => { 
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        let cartContent = btn.closest('.item')
        cartContent.remove()
        totalCartItems()
      })
    })
}

function totalCartItems() {
    let priceItem = document.querySelectorAll('.quantity')
    let totalItems = document.querySelector('.cart-total')
    // Total
    let sum = 0;
    priceItem.forEach(item => {
        sum += Number(item.innerText.slice(5))
    })
    
    totalItems.innerHTML = `
    Subtotal: £${sum}
    `
}
