const mainContent = document.getElementById('main-content')
const searchInput = document.getElementById('search')
const resultCount = document.getElementById('result-count')

const buildCard = (grift) => {
    const card = document.createElement('article')
    card.classList.add('card')

    const image = document.createElement('img')
    image.src = grift.image
    image.alt = grift.title

    const category = document.createElement('p')
    category.classList.add('category')
    category.textContent = grift.category

    const title = document.createElement('h3')
    title.textContent = grift.title

    const text = document.createElement('p')
    text.classList.add('text')
    text.textContent = grift.text

    const submittedBy = document.createElement('p')
    submittedBy.classList.add('submitted-by')
    submittedBy.textContent = 'Submitted By: ' + grift.submittedBy

    const link = document.createElement('a')
    link.textContent = 'Read More >'
    link.setAttribute('role', 'button')
    link.href = `/grifts/${grift.slug}`

    card.appendChild(image)
    card.appendChild(category)
    card.appendChild(title)
    card.appendChild(text)
    card.appendChild(submittedBy)
    card.appendChild(link)

    return card
}

// the search is run by the database, not in the browser, so the server only
// ever sends back the rows that matched
const renderGrifts = async () => {
    const search = searchInput.value.trim()

    const query = search ? `?search=${encodeURIComponent(search)}` : ''
    const response = await fetch(`/grifts${query}`)
    const data = await response.json()

    mainContent.replaceChildren()

    if (data.length) {
        data.forEach(grift => mainContent.appendChild(buildCard(grift)))

        resultCount.textContent = query
            ? `${data.length} matching ${data.length === 1 ? 'lesson' : 'lessons'}`
            : ''
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Lessons Found 😞'
        mainContent.appendChild(message)

        resultCount.textContent = ''
    }
}

// waits for a pause in typing so each keystroke does not hit the database
let searchTimeout

searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout)
    searchTimeout = setTimeout(renderGrifts, 250)
})

const requestedUrl = window.location.pathname.split('/')[1]

if (requestedUrl) {
    window.location.href = '/404.html'
}
else {
    renderGrifts()
}
