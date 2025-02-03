// import dogs data
import Dog from "./Dog.js"
import dogsData from "../data/data.js"

// get elements from DOM, creating variables
const mainContainer = document.getElementById("main-container")
const likeBtn = document.getElementById("like-btn")
// const dislikeBtn = document.getElementById("dislike-btn")

let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])


function render() {
    mainContainer.innerHTML = currentDog.getDogHtml()
}

function getNewDog() {
    currentDogIndex += 1
    currentDog = new Dog(dogsData[currentDogIndex])
    render()
}

function yes() {
    currentDog.setMatchStatus(true)
    getNewDog()
}


likeBtn.addEventListener("click", yes)

render()