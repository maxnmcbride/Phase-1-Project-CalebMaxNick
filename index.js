//document.addEventListener("DOMContentLoaded",fetchBreweryData())

//function fetchBreweryData() {
  fetch ('https://api.openbrewerydb.org/breweries')
  .then(response => response.json())
  .then(breweryArray => {
    
    breweryArray.forEach((brewery) => {renderBreweryData(brewery)
    
    })
    //console.log(breweryArray)
  })

  // function to generate random brewery name at page load
  function renderBreweryData(brewery){
    console.log(brewery)
    let breweryContainer = document.querySelector('#breweryContainer')
    let breweryCards = document.createElement('div')
    breweryCards.classList.add('card')
    breweryContainer.append(breweryCards)
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

    // create search form to filter by location
    
