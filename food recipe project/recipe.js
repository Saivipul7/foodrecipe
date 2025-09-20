function viewRecipe(recipeId) {
  alert("Recipe steps for: " + recipeId + "\n(This can be replaced with a popup modal or a new page)");
}

document.getElementById("searchBar").addEventListener("keyup", function() {
  let filter = this.value.toLowerCase();
  let recipes = document.querySelectorAll(".recipe-card");

  recipes.forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(filter) ? "block" : "none";
  });
});
