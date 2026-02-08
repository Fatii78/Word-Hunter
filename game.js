//words
const Words = {
  ANIMALS: ["COW", "HORSE", "DOLPHIN", "OWL", "FOX", "ZEBRA", "ELEPHANT", "MONKEY", "KANGAROO"],
  FOODS: ["TOMATO", "RICE", "SALAD", "SOUP", "PANCAKE", "PIZZA", "PASTA", "YOGURT", "CARROT"],
  JOBS: ["ENGINEER", "POLICE", "CHEF", "FARMER", "TEACHER", "DRIVER", "WAITER", "ACTOR", "DOCTOR"]
}
//back button + title
const backB = document.getElementById("backB")
const categoryTitle = document.getElementById("categoryTitle")

const selectedCategory = localStorage.getItem("selectedCategory") || "ANIMALS"
categoryTitle.textContent = selectedCategory

backB.addEventListener("click", () => {
  window.location.href = "home.html"
})
//select a random word
const categoryWords = Words[selectedCategory]
const random = Math.floor(Math.random() * categoryWords.length)
const secretWord = categoryWords[random]
console.log(selectedCategory, secretWord)

//blankspace ---
const word = document.getElementById("word")
function blankspace(){
let  BlankSpace = ""
for (let letter  of secretWord){
  if(chooseIetter.has(letter)){
      BlankSpace += letter + " "
    }else{
      BlankSpace += "_ "
    }}
    word.textContent = BlankSpace
     if (!BlankSpace.includes("_")){
    window.location.href = "win.html"
}
}

//keyboard
const keyboard = document.getElementById("keyboard")

let chooseIetter = new Set()
function Keyboard(){
keyboard.textContent = ""
// دا يسوي لحروف في ARRAY
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(letter => {
    const button = document.createElement("button")
    button.textContent = letter
    button.className = "key"
    button.addEventListener("click", () => {
      checkLetter(letter, button)
    })
    // نحطه في الصفحة 
    keyboard.appendChild(button)
  })
}
// check letter
function checkLetter(letter, button){
  button.disabled = true
  if(secretWord.includes(letter)){
    chooseIetter.add(letter)
    blankspace()
  }else{
    console.log("Wrong")
  }
}

blankspace()
Keyboard()
