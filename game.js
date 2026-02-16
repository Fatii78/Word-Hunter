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
let roundNumber =
  Number(localStorage.getItem("roundNumber")) || 1

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
      clearInterval(timer)
      gameOver = true

  const key = `lastDone_${selectedCategory}`
  const prev = Number(localStorage.getItem(key)) || 0
  localStorage.setItem(key, String(Math.max(prev, roundNumber)))
  if (roundNumber === 8){
    window.location.href = "welldone.html"
  } else {
    window.location.href = "win.html"
  }
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
  if(gameOver) return
  button.disabled = true
  if(secretWord.includes(letter)){
    chooseIetter.add(letter)
    blankspace()
  }else{
    console.log("Wrong")
  }
}

//Timer 
let time = 30
let timer
let gameOver = false

function startTimer(){
  timer = setInterval(() => {
    time--
    document.getElementById("time").textContent = time
    if(time === 0){
      clearInterval(timer)
      gameOver = true
      stopGame()
        showGameOver()
    }
  }, 1000)
}

function stopGame(){
  document.querySelectorAll(".key").forEach(button => {
    button.disabled = true
  })
}

blankspace()
Keyboard()

time = 30
gameOver = false
document.getElementById("time").textContent = time


startTimer()

//game over
const gameOverr = document.getElementById("gameOver")
const yesB = document.getElementById("yesB")
const noB = document.getElementById("noB")
gameOverr.classList.add("hidden")

yesB.addEventListener("click", () => {
  location.reload()
})

noB.addEventListener("click", () => {
  window.location.href = "home.html"
})

function showGameOver(){
  gameOverr.classList.remove("hidden")
}

//hint

document.addEventListener("DOMContentLoaded", () => {
  const gift1 = document.getElementById("gift1")
  const gift2 = document.getElementById("gift2")
  if(!gift1 || !gift2) return

  
  function useHint(giftEl){
    const unrevealed = [...new Set(secretWord.split(""))]
      .filter(ch => !chooseIetter.has(ch))
    if(unrevealed.length === 0) return
    const randomLetter = unrevealed[Math.floor(Math.random() * unrevealed.length)]
    chooseIetter.add(randomLetter)
    blankspace()
    giftEl.classList.add("used")
  }

  gift1.addEventListener("click", () => useHint(gift1))
  gift2.addEventListener("click", () => useHint(gift2))
})
