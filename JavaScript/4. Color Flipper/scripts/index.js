// declaring a fixed color palette
// it also work with hex values or rgb colors
const colors = [
    "green",
    "red",
    "blue",
    "orange",
    "yellow",
    "purple",
    "pink",
    "brown",
    "black",
    "white",
    "gray",
    "cyan",
    "magenta",
    "lime",
    "teal",
    "navy",
    "olive",
    "maroon",
    "gold",
    "silver"
]

// declaring button element, color element
const btn = document.getElementById('btn')
const color = document.querySelector(".color")

btn.addEventListener('click', function(){
    // declaring a variable to create a random number
    const randomNumber = getRandomNumber();
    // change background in HTML with the random number's color from array
    document.body.style.background = colors[randomNumber];
    // change color name in HTML  with the random number's color from array
    color.textContent = colors[randomNumber]
})

// get random number in the length of the colors array
function getRandomNumber() {
    return Math.floor( Math.random()*colors.length)
}