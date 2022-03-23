// access elements
let container = document.querySelector('.container')
let input= document.querySelector('.input-value')
let buttonSearch= document.querySelector('.butt-search')


buttonSearch.addEventListener('click', searchValue)

// fetch food api with end point dessert category 
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert`).then(response => response.json())
.then((data)=>{
    container.innerHTML=" ";
    let meals=data.meals;
   
    meals.forEach((dessert)=>{
        // create cards
        let card = document.createElement('div')
        card.setAttribute('class','card')
        container.appendChild(card)

        let link = document.createElement('a')
        card.appendChild(link)
        //add event listener to open recipe page when click on card
        link.addEventListener("click", () => {
          location.href = '../recipe-page/recipe-page.html';
            //save id dessert in local storage
            saveTolocalStorageCategory(dessert.idMeal);
          });

        let img= document.createElement('img')
        img.src= dessert.strMealThumb
        link.appendChild(img)

        let nameMeal= document.createElement('h3')
        nameMeal.textContent= dessert.strMeal
        link.appendChild(nameMeal)
        input.value=" ";

    });
}).catch(error=> console.log(error)) 

// function to save id dessert in local storage
function saveTolocalStorageCategory(CardId) {
    localStorage.setItem("CardId", CardId);
  }
  localStorage.setItem("API", "desserts");
 

  function searchValue(e) {
    e.preventDefault()
    let value = input.value
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
      .then((res) => res.json())
      .then((data) => {
        let allData = data.meals
        container.innerHTML = ''
        allData.forEach((element) => {
          if (element.strCategory === 'Dessert') {
            console.log(element)
            let card = document.createElement('div')
            card.setAttribute('class', 'card')
            container.appendChild(card)
  
            let link = document.createElement('a')
            card.appendChild(link)
  
            let img = document.createElement('img')
            img.src = element.strMealThumb
            link.appendChild(img)
  
            link.addEventListener('click', () => {
              location.href = '../recipe-page/recipe-page.html'
              saveTolocalStorageCategory(element.idMeal)
            })
  
            let nameMeal = document.createElement('h3')
            nameMeal.textContent = element.strMeal
            link.appendChild(nameMeal)
            input.value = ' '
          }
        })
      })
  }