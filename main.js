const btnMenu = document.getElementById('btn-menu')
const menuPrimary = document.getElementById('primary-navigation')

btnMenu.addEventListener('click', () => {
    menuPrimary.classList.toggle('active')
})
