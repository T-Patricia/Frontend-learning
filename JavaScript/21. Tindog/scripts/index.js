// import dogs data
import Dog from "./Dog.js"
import dogsData from "../data/data.js"

// get elements from DOM, creating variables
const mainContainer = document.getElementById("main-container")

let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])

// function to render the current dog
function render() {
    mainContainer.innerHTML = currentDog.getDogHtml()

    document.getElementById("like-btn").addEventListener("click", likeDog)
    document.getElementById("dislike-btn").addEventListener("click", dislikeDog)
}

// function to get a new dow
function getNewDog() {
    // check first if there are more dogs available
    if(currentDogIndex < dogsData.length - 1) {
        currentDogIndex += 1
        currentDog = new Dog(dogsData[currentDogIndex])
        render()
        // feedback if there are no dogs
    } else {
        mainContainer.innerHTML = `
            <div class="feedback-container">
                <h2 class="feedback-message">No more dogs available! 🐶</h2>
            </div>
        `
    }
}

// handle like action
function likeDog() {
    currentDog.setMatchStatus(true)
    const likeBadge = document.getElementById("like-badge")
    if (likeBadge) {
        likeBadge.style.display = "block"
        setTimeout(getNewDog, 800)
    }
}

// handle dislike action
function dislikeDog() {
    currentDog.setMatchStatus(false)
    const nopeBadge = document.getElementById("nope-badge")
    if (nopeBadge) {
        nopeBadge.style.display = "block"
        setTimeout(getNewDog, 800)
    }
}

// initial render
render()