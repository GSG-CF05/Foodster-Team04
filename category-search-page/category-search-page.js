let container = document.querySelector('.container')
let input= document.querySelector('.input-value')
let buttonSearch= document.querySelector('.butt-search')
let categoryName= localStorage.getItem("CategoryName")
let title=document.querySelector(".title")

buttonSearch.addEventListener('click', searchMeal)


    // let title=document.createElement("h2");
    title.innerText=`${categoryName} Recipes`;
    // header.appendChild(title)

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

    
    function saveTolocalStorageCategory(CardId) {
        localStorage.setItem("CardId", CardId);
      }

      function searchMeal(e) {
        e.preventDefault()
        let userInput = input.value
        console.log(userInput);
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
      }
      