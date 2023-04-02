const btnMenu = document.getElementById('btn-menu')
const menuPrimary = document.getElementById('primary-navigation')
const btnAddToCart = document.querySelectorAll('.btn-add-card')
const loadAddToCart = document.querySelectorAll('.follow-the-leader')

btnMenu.addEventListener('click', () => {
    menuPrimary.classList.toggle('active')
})

btnAddToCart.forEach(item => {
    item.addEventListener('click', () => {
        loadAddToCart.
    })
})

