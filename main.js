const btnMenu = document.getElementById('btn-menu')
const menuPrimary = document.getElementById('primary-navigation')
const btnAddToCart = document.querySelectorAll('.btn-add-card')
const loadAddToCart = document.querySelectorAll('.follow-the-leader')

btnAddToCart.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(1);
        showMessage()
        console.log(2);
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

function showMessage() {
    const popUp = document.getElementById('popup')

    const toast = document.createElement('div')
    toast.classList.add('toast')
    toast.style.animation = `popupInLeft ease .3s, fadeOut linear 1s 2s forwards`


    toast.innerHTML = `
            <div class="popup-icons">
                <svg class="popup-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <p class="popup-text">Sản phẩm đã được thêm vào Giỏ hàng</p>
    `
    popUp.appendChild(toast)
}
