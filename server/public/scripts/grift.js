const renderGrift = async () => {
    const requestedSlug = window.location.pathname.split('/').pop()

    // asks the database for the one lesson this page is about rather than
    // pulling the whole list down and filtering it in the browser
    const response = await fetch(`/grifts/${requestedSlug}/data`)

    if (!response.ok) {
        window.location.href = '/404.html'
        return
    }

    const grift = await response.json()

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

renderGrift()
