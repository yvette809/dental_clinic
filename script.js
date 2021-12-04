

const button = document.querySelector('.navbar-toggler ')
const clickedItem = document.querySelector('ul')

button.addEventListener('click', () => {
    clickedItem.classList.toggle('active')

})