const renderGrift = async () => {
    const requestedSlug = window.location.pathname.split('/').pop()

    const response = await fetch('/grifts')
    const data = await response.json()

    let grift

    if (data) {
        grift = data.find(grift => grift.slug === requestedSlug)
    }

    if (grift) {
        const image = document.getElementById('image')
        image.src = grift.image
        image.alt = grift.title

        document.getElementById('title').textContent = grift.title
        document.getElementById('category').textContent = grift.category
        document.getElementById('text').textContent = grift.text
        document.getElementById('redFlag').textContent = grift.redFlag
        document.getElementById('submittedBy').textContent = 'Submitted By: ' + grift.submittedBy
        document.getElementById('submittedOn').textContent = 'Submitted On: ' + new Date(grift.submittedOn).toLocaleDateString()
        document.getElementById('id').textContent = 'Lesson No: ' + grift.id
        document.getElementById('slug').textContent = 'Slug: ' + grift.slug

        document.title = grift.title
    }
    else {
        window.location.href = '/404.html'
    }
}

renderGrift()
