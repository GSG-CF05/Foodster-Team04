let cardID = localStorage.getItem("CardId");
let mealsArray = {};
let drinksArray = {};
let recipeInfo = document.querySelector(".recipe-info");
const recipePicture = document.querySelector(".recipe-picture");
const recipeDetails = document.querySelector(".recipe-details");
const ingredientsDetails = document.querySelector(".ingredients-details");
const pageTitle = document.getElementsByTagName("title")[0];
let recipeType = localStorage.getItem("API")
//If statment to so that the page knows which API to go with
// Since the meals and dessert sections use the same API the if statment will only look for the API coming from the previous page if it was using 
//the cocktailDB API it will go through this next block, else it will directly go to the The foodDB section

//The CocktailDB API Section
if(recipeType ==  "drinks"){
  console.log(111)
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cardID}`)
  .then((res) => {
    return res.json();
  })
  .then((data)  => {
     drinksArray = data.drinks[0];
    //Display the drink's name
    let title = document.createElement("h1");
    title.innerText = pageTitle.textContent = drinksArray.strDrink;
    title.classList.add("recipe-name");
    recipeInfo.appendChild(title);
    const drinkImg = document.createElement("img");
    drinkImg.setAttribute("src",`${data.drinks[0].strDrinkThumb}`);
    drinkImg.classList.add("recipe-img");
    recipePicture.appendChild(drinkImg);
    recipeDetails.textContent=data.drinks[0].strInstructions;

    let drinksIngArr = []; // Driks ingredients array
    drinksIngArr = [
      data.drinks[0].strIngredient1,
      data.drinks[0].strIngredient2,
      data.drinks[0].strIngredient3,
      data.drinks[0].strIngredient4,
      data.drinks[0].strIngredient5,
      data.drinks[0].strIngredient6,
      data.drinks[0].strIngredient7,
      data.drinks[0].strIngredient8,
      data.drinks[0].strIngredient9,
      data.drinks[0].strIngredient10,
      data.drinks[0].strIngredient11,
      data.drinks[0].strIngredient12,
      data.drinks[0].strIngredient13,
      data.drinks[0].strIngredient14,
      data.drinks[0].strIngredient15,
    ]
      const filteredarr = drinksIngArr.filter((ele) => ele !== null);
      console.log(filteredarr);
      ingredientsDetails.textContent = filteredarr.join(", ");
})
}
else{

// The FoodDB API Section
console.log(cardID);
fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + cardID)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data.meals);
    mealsArray = data.meals[0];
    // Display the meals's name
    let title = document.createElement("h1");
    console.log("name", mealsArray.strMeal);
    title.innerText = pageTitle.textContent = mealsArray.strMeal; //display the recipe name in the page title
    title.classList.add("recipe-name");
    recipeInfo.appendChild(title);
    //Youtube link
    const li = document.createElement("a");
    li.setAttribute("href", `${data.meals[0].strYoutube}`);
    recipePicture.appendChild(li);

    //Meal picture
    const recipeImg = document.createElement("img");
    recipeImg.setAttribute("src", `${data.meals[0].strMealThumb}`);
    recipeImg.classList.add("recipe-img");
    recipePicture.appendChild(recipeImg);
    li.appendChild(recipeImg); //linking the Video link to the picture
    //The notice section
    const notice = document.createElement("h4");
    notice.classList.add("notice");
    notice.textContent = "Press on the picture for an illustrative video";
    recipePicture.appendChild(notice);
    //Recipe Instructions
    recipeDetails.textContent = data.meals[0].strInstructions.substring(0,1700);
    //Meal ingredients
    let ingredientsArray = []; //Ingredients array
    ingredientsArray = [
      data.meals[0].strIngredient1,
      data.meals[0].strIngredient2,
      data.meals[0].strIngredient3,
      data.meals[0].strIngredient4,
      data.meals[0].strIngredient5,
      data.meals[0].strIngredient6,
      data.meals[0].strIngredient7,
      data.meals[0].strIngredient8,
      data.meals[0].strIngredient9,
      data.meals[0].strIngredient10,
      data.meals[0].strIngredient11,
      data.meals[0].strIngredient12,
      data.meals[0].strIngredient13,
      data.meals[0].strIngredient14,
      data.meals[0].strIngredient15,
      data.meals[0].strIngredient16,
      data.meals[0].strIngredient17,
      data.meals[0].strIngredient18,
      data.meals[0].strIngredient19,
      data.meals[0].strIngredient20,
    ];
    console.log(ingredientsArray);
    const filteredarr = ingredientsArray.filter((ele) => ele !== null);
    console.log(filteredarr);
    ingredientsDetails.textContent = filteredarr.join(", ");
  });
}
// Popup Section starts here
let recipePopup = document.getElementById("popup1");
let recipeButton = document.getElementById("recipe-details-button");
let span1 = document.getElementsByClassName("close")[0];
recipeButton.onclick = function () {
  recipePopup.style.display = "block";
};
span1.onclick = function () {
  recipePopup.style.display = "none";
};

// Second popUp Starts here

let ingredientsPopup = document.getElementById("popup2");
let ingredientsButton = document.getElementById("ingredients-button");
let span2 = document.getElementsByClassName("close")[1];

ingredientsButton.onclick = function () {
  ingredientsPopup.style.display = "block";
};
span2.onclick = function () {
  ingredientsPopup.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == recipePopup) {
    recipePopup.style.display = "none";
  }
  if (event.target == ingredientsPopup) {
    ingredientsPopup.style.display = "none";
  }
};
