// creating variables
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

// adding incrementing function
function increment() {
    count += 1
    countEl.innerText = count
}

// adding save function
function save() {
    saveEl.textContent += count + " - "
    countEl.textContent = 0
    count = 0
}