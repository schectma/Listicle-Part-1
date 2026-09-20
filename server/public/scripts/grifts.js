const renderGrifts = async () => {
    const response = await fetch('/grifts')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {
        data.map(grift => {
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

            mainContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Lessons Available 😞'
        mainContent.appendChild(message)
    }
}

const requestedUrl = window.location.pathname.split('/')[1]

if (requestedUrl) {
    window.location.href = '/404.html'
}
else {
    renderGrifts()
}
