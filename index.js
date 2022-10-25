//document.addEventListener("DOMContentLoaded",fetchBreweryData())
let breweryData = [];
//function fetchBreweryData() {
  fetch ('https://api.openbrewerydb.org/breweries')
  .then(response => response.json())
  .then((data) => {
        breweryData = data;
        breweryData.forEach((brewery) => {
          renderBreweryData(brewery)
    })
    // console.log(breweryData)
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

        breweryCards.append(nameOfBrewery,styleOfBrewery, locationOfBrewery)
        breweryContainer.append(breweryCards)
    
        breweryCards.addEventListener('click', e => {
         // e.target.breweryURL
          console.log(e.target.brewery)
        })
        //onclick = e => {brewery}
}
  // comment form function
const comments = document.querySelector('#comment-form')

  comments.addEventListener("submit", (event) => {
      event.preventDefault()
  const breweryComment = document.createElement('li')
    breweryComment.textContent = event.target.review.value
    // console.log(e.target['review'].value)
    const reviews = document.querySelector('#reviews')
    comments.reset()
      reviews.appendChild(breweryComment)
    })
    //}

    // create search form to filter by location

