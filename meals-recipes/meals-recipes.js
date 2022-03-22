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

fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.categories.forEach((res) => {
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

fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.meals.forEach((res) => {
      if (res.strCategory == "Dessert") {
        return;
      } else {
        let aForMeals = document.createElement("a");
        aForMeals.classList.add("Card");
        container.appendChild(aForMeals);

        let imgForMeals = document.createElement("img");
        imgForMeals.src = res.strMealThumb;
        aForMeals.appendChild(imgForMeals);

        let h3ForMeals = document.createElement("h3");
        h3ForMeals.innerText = res.strMeal;
        aForMeals.appendChild(h3ForMeals);

        aForMeals.addEventListener("click", () => {
          window.location.replace("../recipe-page/recipe-page.html");
          saveTolocalStorageCard(res.idMeal);
        });
      }
    });
  });

function saveTolocalStorageCategory(CardId) {
  localStorage.setItem("CardId", CardId);
}
function saveTolocalStorageCard(CategoryName) {
  localStorage.setItem("CategoryName", CategoryName);
}
