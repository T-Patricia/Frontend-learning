// Creating variables
let countHome = 0
let countGuest = 0
let resultHome = document.getElementById("result-home")
let resultGuest = document.getElementById("result-guest")

// Home functions
function addOneHome() {
    countHome += 1
    resultHome.innerText = countHome
}

function addTwoHome() {
    countHome += 2
    resultHome.innerText = countHome
}

function addThreeHome() {
    countHome += 3
    resultHome.innerText = countHome
}

// Guest functions
function addOneGuest() {
    countGuest += 1
    resultGuest.innerText = countGuest
}

function addTwoGuest() {
    countGuest += 2
    resultGuest.innerText = countGuest
}

function addThreeGuest() {
    countGuest += 3
    resultGuest.innerText = countGuest
}

// New game function
function newgame() {
    resultGuest.innerText = 0
    resultHome.innerText = 0
    countHome = 0
    countGuest = 0
}