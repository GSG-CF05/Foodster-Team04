// access elements
let container = document.querySelector('.container')
let input= document.querySelector('.input-value')
let buttonSearch= document.querySelector('.butt-search')

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
            window.location.href = ("#");
           
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
