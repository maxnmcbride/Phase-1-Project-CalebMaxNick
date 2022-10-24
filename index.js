//document.addEventListener("DOMContentLoaded",fetchBreweryData())

//function fetchBreweryData() {
  fetch ('https://api.openbrewerydb.org/breweries')
  .then(response => response.json())
  .then(breweryArray => {
    
    breweryArray.forEach((brewery) => {
      renderBreweryData(brewery)  
    }) //end of forEach method
    //console.log(breweryArray)
  })

  // function to generate random brewery name at page load
  function renderBreweryData(brewery){
    //console.log(brewery)
    let breweryContainer = document.querySelector('#breweryContainer')
    let breweryCards = document.createElement('div')
        breweryCards.classList.add('card')
    let nameOfBrewery = document.createElement('h2')
        nameOfBrewery.textContent = brewery.name
    let styleOfBrewery = document.createElement('p')
        styleOfBrewery.textContent = brewery.brewery_type
    let locationOfBrewery = document.createElement('p')
        locationOfBrewery.textContent = brewery.state
        //breweryURL.textContent = brewery.brewery_url
        
        
        
        breweryCards.append(nameOfBrewery,styleOfBrewery, locationOfBrewery)
        breweryContainer.append(breweryCards)
        
        // breweryCards.addEventListener('click', e => {
          // e.target.breweryURL
          //  console.log(e.target.brewery)
          //  })
        //onclick = e => {brewery}
}

// comment form function
  const comments = document.querySelector('#comment-form')

  comments.addEventListener("submit", e => {
    e.preventDefault()
    const breweryComment = document.createElement('li')
    breweryComment.textContent = e.target['review'].value
    // console.log(e.target['review'].value)
    const reviews = document.querySelector('#reviews')
    //reviews.value.reset()
    reviews.appendChild(breweryComment)
    })
    //}
    
    // create function for website URL
    function breweryURL (URL) {
          document.createElement('a')
          breweryURL.innerText = brewery.brewery_url
          console.log(brewery.brewery_url)
    }
    breweryURL()
    