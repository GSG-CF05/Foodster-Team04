let container = document.querySelector('.container')
let input= document.querySelector('.input-value')
let buttonSearch= document.querySelector('.butt-search')
let categoryName= localStorage.getItem("CategoryName")
let title=document.querySelector(".title")



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

      let items = [];
      let returnMealsArray = [];
      
      function mealsArray() {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?c=${categoryName}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            data.meals.forEach((res) => {
              let aForMeals = document.createElement("a");
              aForMeals.classList.add("Card");
              container.appendChild(aForMeals);
      
              let imgForMeals = document.createElement("img");
              imgForMeals.src = res.strMealThumb;
              aForMeals.appendChild(imgForMeals);
      
              let h3ForMeals = document.createElement("h3");
              h3ForMeals.innerText = res.strMeal;
              aForMeals.appendChild(h3ForMeals);
            });
            saveTolocalStorageArray(data.meals);
          });
      }
      mealsArray();
      returnMealsArray = JSON.parse(localStorage.getItem("MealsArray"));
      
      function searchData(value) {
        container.innerHTML = "";
        for (let i = 0; i < returnMealsArray.length; i++) {
          if (returnMealsArray[i].strMeal.includes(value.toLowerCase())) {
              returnMealsArray.forEach((res) => {
                  let aForMeals = document.createElement("a");
                  aForMeals.classList.add("Card");
                  container.appendChild(aForMeals);
      
                  let imgForMeals = document.createElement("img");
                  imgForMeals.src = res.strMealThumb;
                  aForMeals.appendChild(imgForMeals);
          
                  let h3ForMeals = document.createElement("h3");
                  h3ForMeals.innerText = res.strMeal;
                  aForMeals.appendChild(h3ForMeals);
      
                  console.log("fffff",res.strMeal);
      
                });
          }
        }
      }
      
      function saveTolocalStorageArray(item) {
        localStorage.setItem("MealsArray", JSON.stringify(item));
      }
      
