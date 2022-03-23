//access elements from html file
let container = document.querySelector('.container')
let input = document.querySelector('.input-value')
let buttonSearch = document.querySelector('.butt-search')
let title = document.querySelector(".title")

//get from local storage
let categoryName = localStorage.getItem("CategoryName")
let pageName = localStorage.getItem("API")

//add event listener to button search
buttonSearch.addEventListener('click', searchFood)

//set the title for the page
title.innerText = `${categoryName} Recipes`;


if (pageName == "drinks")
    getCocktailCard()
else
    getMealsCards()

//function for search 
function searchFood(e) {
    e.preventDefault()
    if (pageName == "drinks")
        searchCocktail();
    else
        searchMeals();

}

//function to save card id in local storage 
function saveTolocalStorageCategory(CardId) {
    localStorage.setItem("CardId", CardId);
}



// function to fetch cocktail api and show cocktails by random depends on category name 
function getCocktailCard() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryName}`).then(response => response.json())
        .then((data) => {
            container.innerHTML = " ";
            let drinks = data.drinks;
            drinks.forEach((cocktail) => {

                let card = document.createElement('div')
                card.setAttribute('class', 'card')
                container.appendChild(card)

                let link = document.createElement('a')
                card.appendChild(link)
                link.addEventListener("click", () => {
                    location.href = '../recipe-page/recipe-page.html'
                    saveTolocalStorageCategory(cocktail.idDrink);
                });

                let img = document.createElement('img')
                img.src = cocktail.strDrinkThumb
                link.appendChild(img)

                let nameMeal = document.createElement('h3')
                nameMeal.textContent = cocktail.strDrink
                link.appendChild(nameMeal)
                input.value = " ";
            })
        }).catch(error => console.log(error))
}

//function to fetch meals api and show meals by random depends on category name 
function getMealsCards() {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`).then(response => response.json())
        .then((data) => {
            container.innerHTML = " ";
            let meals = data.meals;
            meals.forEach((meal) => {

                let card = document.createElement('div')
                card.setAttribute('class', 'card')
                container.appendChild(card)

                let link = document.createElement('a')
                card.appendChild(link)
                link.addEventListener("click", () => {
                    location.href = '../recipe-page/recipe-page.html'
                    saveTolocalStorageCategory(meal.idMeal);
                });

                let img = document.createElement('img')
                img.src = meal.strMealThumb
                link.appendChild(img)

                let nameMeal = document.createElement('h3')
                nameMeal.textContent = meal.strMeal
                link.appendChild(nameMeal)
                input.value = " ";
            })
        }).catch(error => console.log(error))
}

//function to search for cocktail depends on input text
function searchCocktail() {
    let userInput = input.value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`).then(response => response.json())
        .then((data) => {
            container.innerHTML = " ";
            let drinks = data.drinks;
            drinks.forEach((cocktail) => {
                if (cocktail.strCategory === categoryName) {
                    let card = document.createElement('div')
                    card.setAttribute('class', 'card')
                    container.appendChild(card)

                    let link = document.createElement('a')
                    card.appendChild(link)
                    link.addEventListener("click", () => {
                        location.href = '../recipe-page/recipe-page.html'
                        saveTolocalStorageCategory(cocktail.idDrink);
                    });

                    let img = document.createElement('img')
                    img.src = cocktail.strDrinkThumb
                    link.appendChild(img)

                    let nameCocktail = document.createElement('h3')
                    nameCocktail.textContent = cocktail.strDrink
                    link.appendChild(nameCocktail)
                    input.value = " ";
                }
            })
        })
}
//function to search for meals depends on input text
function searchMeals() {
    let userInput = input.value
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`)
        .then((res) => res.json())
        .then((data) => {
            let allData = data.meals
            container.innerHTML = ''
            allData.forEach(ele => {
                if (ele.strCategory === categoryName) {
                    let card = document.createElement('div')
                    card.setAttribute('class', 'card')
                    container.appendChild(card)

                    let link = document.createElement('a')
                    card.appendChild(link)
                    link.addEventListener("click", () => {
                        location.href = '../recipe-page/recipe-page.html'
                        saveTolocalStorageCategory(ele.idMeal);
                    });

                    let img = document.createElement('img')
                    img.src = ele.strMealThumb
                    link.appendChild(img)

                    let nameMeal = document.createElement('h3')
                    nameMeal.textContent = ele.strMeal
                    link.appendChild(nameMeal)
                    input.value = " ";
                }
            })
        })
}