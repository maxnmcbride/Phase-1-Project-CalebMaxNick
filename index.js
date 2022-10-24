//document.addEventListener("DOMContentLoaded",fetchBreweryData())


//function fetchBreweryData() {

  
  fetch ('https://api.openbrewerydb.org/breweries')
  .then(response => response.json())
  .then( breweryArray => {
    
    breweryArray.forEach((brewery) => {renderBreweryData(brewery)
    
      
    })
    //console.log(breweryArray)
  })
    
  
  
  document.querySelector("#comment-form")
  .addEventListener("submit", e => {
    e.preventDefault()
    const breweryComment = document.createElement('li')
    breweryComment.textContent = e.target['review'].value
    // console.log(e.target['review'].value)
    
    const reviews = document.querySelector('#reviews')
    //reviews.value.reset()
      reviews.appendChild(breweryComment)
      
    })
    //}
    
    function renderBreweryData(brewery){
      console.log(brewery)

    }
