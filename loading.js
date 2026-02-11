const fill = document.getElementById("fill")
const percentEl = document.getElementById("percent")

let p = 0
const timer = setInterval(() => {
  p += 1
  fill.style.width = p + "%"
  percentEl.textContent = p + "%"

  if (p >= 100) {
    clearInterval(timer)
    window.location.href = "home.html"
  }
}, 50) 
