const btnMenu = document.getElementById('btn-menu')
const menuPrimary = document.getElementById('primary-navigation')
const btnAddToCart = document.querySelectorAll('.btn-add-card')
const loadAddToCart = document.querySelectorAll('.follow-the-leader')

console.log(btnAddToCart);
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
    })
})

function addCart(productImg, productName, productPrice) {
    let cartBox = document.querySelector('.item')
    let cartContent = document.createElement('a')
    cartContent.classList.add('cartContent')
    let cartItem = `
        <div class="cart-close">
            <div class="svg-close-cart">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <span class="product-cart-name">
                ${productName} 
            </span>					                                              
        </div>
        <div class="cart-img">
            <img src="${productImg.slice(33)}" alt="">
        </div>
        <span class="quantity">${productPrice.slice(1)}</span>
    `
    // let text = productPrice
    cartContent.innerHTML = cartItem
    // console.log(productPrice.slice(1), productImg.slice(33));
    cartBox.append(cartContent)
}
