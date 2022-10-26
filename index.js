document.addEventListener("DOMContentLoaded", () => {
let breweryData = [];
let breweryContainer = document.querySelector('#breweryContainer')

  fetch ('https://api.openbrewerydb.org/breweries')
  .then(response => response.json())
  .then((data) => {
    breweryData = data;
    breweryData.forEach((brewery) => {
      renderBreweryData(brewery); 
    })
  })
  // function to generate brewery cards
function renderBreweryData(brewery){
  let breweryCards = document.createElement('div')
      breweryCards.classList.add('card')
  let nameOfBrewery = document.createElement('h2')
       nameOfBrewery.textContent = brewery.name
  let styleOfBrewery = document.createElement('h4')
      styleOfBrewery.textContent = `Brewery Style: ${brewery.brewery_type}`
      styleOfBrewery.classList.add('breweryStyleFont')
  let locationOfBrewery = document.createElement('p')
      locationOfBrewery.textContent = brewery.state
  let urlTag = document.createElement('a')
      urlTag.href = brewery.website_url
      urlTag.target = '_blank'
      urlTag.classList.add('urlStyle')
  const breweryLiker = document.createElement( "button" )
    breweryLiker.innerText = '♡'
    breweryLiker.className = 'like-btn'
    let clicked = false
    breweryLiker.addEventListener('click' , () => {
      clicked = !clicked
      if (clicked){
        breweryLiker.innerText='❤️'
      }else{
        breweryLiker.innerText='♡'
      }
  })

    urlTag.append(nameOfBrewery)
    breweryCards.append(urlTag, styleOfBrewery, locationOfBrewery, breweryLiker)
    breweryContainer.append(breweryCards)  
}

  // create search form to filter by location
const searchBar = document.querySelector('#search-form')
    searchBar.classList.add('searchBar')
    searchBar.addEventListener('submit', (event) => {
      event.preventDefault();
      const userInput = event.target.search.value
      searchBar.reset()
        const filterData = breweryData.filter((theOneBrewery) => {
          const currentState = theOneBrewery.state
            if (currentState == userInput) { 
              return true
            } else {
              return false
            }
      })
    breweryContainer.innerHTML = ""
    filterData.forEach(renderBreweryData)
  })
})