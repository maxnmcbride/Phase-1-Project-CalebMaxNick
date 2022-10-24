fetch ('https://api.openbrewerydb.org/breweries')
.then(response => response.json())
.then(data => (data))

document.querySelector("#comment-form")
 .addEventListener("submit", e => {
    e.preventDefault()
    const breweryComment = document.createElement('li')
    breweryComment.textContent = e.target['review'].value
    // console.log(e.target['review'].value)
    const reviews = document.querySelector('#reviews')
    reviews.innerHTML = ""
      reviews.appendChild(breweryComment)
 })
