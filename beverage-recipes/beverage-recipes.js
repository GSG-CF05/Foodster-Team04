let categories = document.querySelector(".Categories");
let container = document.querySelector(".container");

var button = document.getElementById("next");
button.onclick = function () {
  categories.scrollLeft += 104;
};

var back = document.getElementById("back");
back.onclick = function () {
  categories.scrollLeft -= 104;
};

fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.drinks.forEach((res) => {
      let li = document.createElement("li");
      categories.appendChild(li);

      let categoriesBtn = document.createElement("button");
      categoriesBtn.classList.add("item");
      categoriesBtn.innerText = res.strCategory;
      li.appendChild(categoriesBtn);

      categoriesBtn.onclick = function () {
        window.location.href =
          "../category-search-page/category-search-page.html";
      };

      li.addEventListener("click", () => {
        saveTolocalStorageCategory(res.strCategory);
      });
    });
  });

fetch(
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Punch%20/%20Party%20Drink"
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.drinks.forEach((res) => {
      let aForMeals = document.createElement("a");
      aForMeals.classList.add("Card");
      container.appendChild(aForMeals);

      let imgForMeals = document.createElement("img");
      imgForMeals.src = res.strDrinkThumb;
      aForMeals.appendChild(imgForMeals);

      let h3ForMeals = document.createElement("h3");
      h3ForMeals.innerText = res.strDrink;
      aForMeals.appendChild(h3ForMeals);

      aForMeals.addEventListener("click", () => {
        window.location.replace("../recipe-page/recipe-page.html");
        saveTolocalStorageCard(res.idDrink);
      });
    });
  });

function saveTolocalStorageCard(CardId) {
  localStorage.setItem("CardId", CardId);
}
function saveTolocalStorageCategory(CategoryName) {
  localStorage.setItem("CategoryName", CategoryName);
}
localStorage.setItem("API", "drinks");