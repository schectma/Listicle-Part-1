const header = document.querySelector('header')

const nav = document.createElement('nav')

const navLeft = document.createElement('ul')

const brandItem = document.createElement('li')

const brand = document.createElement('a')
brand.href = '/'
brand.className = 'brand'
brand.textContent = '🪤 Rug Pull Academy'

brandItem.appendChild(brand)
navLeft.appendChild(brandItem)

const navRight = document.createElement('ul')

const homeItem = document.createElement('li')

const homeButton = document.createElement('button')
homeButton.className = 'outline'
homeButton.textContent = 'All Lessons'

homeButton.addEventListener('click', function handleClick(event) {
  window.location = '/'
})

homeItem.appendChild(homeButton)
navRight.appendChild(homeItem)

nav.appendChild(navLeft)
nav.appendChild(navRight)

header.appendChild(nav)
