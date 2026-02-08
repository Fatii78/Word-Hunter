const Words = {
  ANIMALS: ["COW", "HORSE", "DOLPHIN", "OWL", "FOX", "ZEBRA", "ELEPHANT", "MONKEY", "KANGAROO"],
  FOODS: ["TOMATO", "RICE", "SALAD", "SOUP", "PANCAKE", "PIZZA", "PASTA", "YOGURT", "CARROT"],
  JOBS: ["ENGINEER", "POLICE", "CHEF", "FARMER", "TEACHER", "DRIVER", "WAITER", "ACTOR", "DOCTOR"]
}

const backB = document.getElementById("backB")
const categoryTitle = document.getElementById("categoryTitle")

const selectedCategory = localStorage.getItem("selectedCategory") || "ANIMALS"
categoryTitle.textContent = selectedCategory

backB.addEventListener("click", () => {
  window.location.href = "home.html"
})

const categoryWords = Words[selectedCategory]
const random = Math.floor(Math.random() * categoryWords.length)
const secretWord = categoryWords[random]
console.log(selectedCategory, secretWord)

