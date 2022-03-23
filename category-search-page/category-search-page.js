//access elements from html file
let container = document.querySelector('.container')
let input= document.querySelector('.input-value')
let buttonSearch= document.querySelector('.butt-search')
let title=document.querySelector(".title")
//get category name from local storage
let categoryName= localStorage.getItem("CategoryName")

//add event listener to button search
buttonSearch.addEventListener('click', searchMeal)
//set the title for the page
  title.innerText=`${categoryName} Recipes`;
   
  //fetch meals api and show meals by random depends on category name 
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`).then(response => response.json())
    .then((data)=>{
        container.innerHTML=" ";
        let meals=data.meals;
        meals.forEach((meal)=>{
    
            let card = document.createElement('div')
            card.setAttribute('class','card')
            container.appendChild(card)

            let link = document.createElement('a')
            card.appendChild(link)
            link.addEventListener("click", () => {
                location.href = '../recipe-page/recipe-page.html'
                saveTolocalStorageCategory(meal.idMeal);
              });
    
            let img= document.createElement('img')
            img.src= meal.strMealThumb
            link.appendChild(img)
    
            let nameMeal= document.createElement('h3')
            nameMeal.textContent= meal.strMeal
            link.appendChild(nameMeal)
            input.value=" ";
        })
    }).catch(error=> console.log(error)) 

//fetch cocktail api and show cocktails by random depends on category name 
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryName}`).then(response => response.json())
    .then((data)=>{
        container.innerHTML=" ";
        let drinks=data.drinks;
        drinks.forEach((cocktail)=>{
    
            let card = document.createElement('div')
            card.setAttribute('class','card')
            container.appendChild(card)

            let link = document.createElement('a')
            card.appendChild(link)
            link.addEventListener("click", () => {
                location.href = '../recipe-page/recipe-page.html'
                saveTolocalStorageCategory(cocktail.idDrink);
              });
    
            let img= document.createElement('img')
            img.src= cocktail.strDrinkThumb
            link.appendChild(img)
    
            let nameMeal= document.createElement('h3')
            nameMeal.textContent= cocktail.strDrink
            link.appendChild(nameMeal)
            input.value=" ";
        })
    }).catch(error=> console.log(error)) 


    //function to save card id in local storage 
    function saveTolocalStorageCategory(CardId) {
        localStorage.setItem("CardId", CardId);
      }

      //function to search for meals and cocktails depends on input text
      function searchMeal(e) {
        e.preventDefault()
        let userInput = input.value
        console.log(userInput);
        //fetch api Search meals by name
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`)
          .then((res) => res.json())
          .then((data) => {
            let allData = data.meals
            container.innerHTML = ''
            allData.forEach(ele => {
              if(ele.strCategory === categoryName){
                let card = document.createElement('div')
            card.setAttribute('class','card')
            container.appendChild(card)

            let link = document.createElement('a')
            card.appendChild(link)
            link.addEventListener("click", () => {
                location.href = '../recipe-page/recipe-page.html'
                saveTolocalStorageCategory(ele.idMeal);
              });
    
            let img= document.createElement('img')
            img.src= ele.strMealThumb
            link.appendChild(img)
    
            let nameMeal= document.createElement('h3')
            nameMeal.textContent= ele.strMeal
            link.appendChild(nameMeal)
            input.value=" ";
              }
            })
          })

          //fetch api Search cocktails by name
          fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`).then(response => response.json())
          .then((data)=>{
              container.innerHTML=" ";
              let drinks=data.drinks;
              drinks.forEach((cocktail)=>{
                if(cocktail.strCategory === categoryName){
                  let card = document.createElement('div')
                  card.setAttribute('class','card')
                  container.appendChild(card)
      
                  let link = document.createElement('a')
                  card.appendChild(link)
                  link.addEventListener("click", () => {
                      location.href = '../recipe-page/recipe-page.html'
                      saveTolocalStorageCategory(cocktail.idDrink);
                    });
          
                  let img= document.createElement('img')
                  img.src= cocktail.strDrinkThumb
                  link.appendChild(img)
          
                  let nameCocktail= document.createElement('h3')
                  nameCocktail.textContent= cocktail.strDrink
                  link.appendChild(nameCocktail)
                  input.value=" ";
                }
              })
          })

      }
      