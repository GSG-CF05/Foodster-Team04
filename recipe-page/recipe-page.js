var recipePopup = document.getElementById("popup1");
var recipeButton = document.getElementById("recipe-details-button");
var span =  document.getElementsByClassName("close")[0];
recipeButton.onclick = function(){
    recipePopup.style.display = "block";
    }
span.onclick = function(){
    recipePopup.style.display = "none";
}
window.onclick = function(event){
    if(event.target == recipePopup){
        recipePopup.style.display="none";
    } 
}
var ingredientsPopup = document.getElementById("popup2");
var ingredientsButton = document.getElementById("ingredients-button");
var span =  document.getElementsByClassName("close");
ingredientsButton.onclick = function(){
    ingredientsPopup.style.display = "block";
    }
span.onclick = function(){
   ingredientsPopup.style.display = "none";
}
window.onclick = function(event){
    if(event.target == ingredientsPopup){
        ingredientsPopup.style.display="none";
    } 
}