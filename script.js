const burger = document.querySelector('.burger')
const x = document.querySelector('.x')
const navLinks = document.querySelector('.nav-links')

burger.addEventListener('click', function() {
    x.classList.toggle('x-show')
    burger.classList.toggle('burger-hide')
    navLinks.classList.add('nav-ul-show')
})

x.addEventListener('click', function() {
    x.classList.toggle('x-show')
    burger.classList.toggle('burger-hide')
    navLinks.classList.toggle('nav-ul-show')
})
