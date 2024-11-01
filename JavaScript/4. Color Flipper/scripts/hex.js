// declaring possible HEX values
const hex = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
];

// declaring button element, color element
const btn = document.getElementById('btn')
const color = document.querySelector(".color")


btn.addEventListener('click', function(){
    // adding the hashtag
    let hexColor = '#';
    // creating for loop to run this randomizer 6 times
    for(let i = 0; i < 6; i++){
        // hashtag + 6 random values from hex array
        hexColor += hex[getRandomNumber()];
    }
    // changing hex color name in HTML to the randomized color hex values
    color.textContent = hexColor;
    // changing background in HTML to the randomized color
    document.body.style.backgroundColor = hexColor
})

// creating function to randomize a number in the hex intervall
function getRandomNumber() {
    return Math.floor( Math.random()* hex.length)
}