let recipePopup = document.getElementById('popup1')
let recipeButton = document.getElementById('recipe-details-button')
let span1 = document.getElementsByClassName('close')[0]

recipeButton.onclick = function () {
  recipePopup.style.display = 'block'
}
span1.onclick = function () {
  recipePopup.style.display = 'none'
}

// Second popUp Starts here 

let ingredientsPopup = document.getElementById('popup2')
let ingredientsButton = document.getElementById('ingredients-button')
let span2 = document.getElementsByClassName('close')[1]

ingredientsButton.onclick = function () {
  ingredientsPopup.style.display = 'block'
}
span2.onclick = function () {
  ingredientsPopup.style.display = 'none'
}

window.onclick = function (event) {
  if (event.target == recipePopup) {
    recipePopup.style.display = 'none'
  }
  if (event.target == ingredientsPopup) {
    ingredientsPopup.style.display = 'none'
  }
}