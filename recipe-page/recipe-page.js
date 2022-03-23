// API Section
let cardID = localStorage.getItem("CardId");
let mealsArray = {};
let recipeInfo = document.querySelector(".recipe-info");
const recipePicture = document.querySelector(".recipe-picture");
const recipeDetails = document.querySelector(".recipe-details");
const ingredientsDetails = document.querySelector(".ingredients-details");
const pageTitle = document.getElementsByTagName("title")[0];

console.log(cardID);
fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + cardID)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    mealsArray = data.meals[0];
    // Display the recipe name
    let title = document.createElement("h1");
    console.log("name", mealsArray.strMeal);
    title.innerText = pageTitle.textContent = mealsArray.strMeal; //display the recipe name in the page title
    title.classList.add("recipe-name");
    recipeInfo.appendChild(title);
    //Youtube link
    const li = document.createElement("a");
    li.setAttribute("href", `${data.meals[0].strYoutube}`);
    recipePicture.appendChild(li);

    //Recipe picture
    const recipeImg = document.createElement("img");
    recipeImg.setAttribute("src", `${data.meals[0].strMealThumb}`);
    recipeImg.classList.add("recipe-img");
    recipePicture.appendChild(recipeImg);
    li.appendChild(recipeImg);
    //The notice section
    const notice = document.createElement("h4");
    notice.classList.add("notice");
    notice.textContent = "Press on the picture for an illustrative video";
    recipePicture.appendChild(notice);

    //Recipe ingredients
    recipeDetails.textContent = data.meals[0].strInstructions;
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
