// Creating variables
let countHome = 0
let countGuest = 0
let resultHome = document.getElementById("result-home")
let resultGuest = document.getElementById("result-guest")

// Home functions
function addOneHome() {
    countHome += 1
    resultHome.innerText = countHome
    leaderHighlight()
}

function addTwoHome() {
    countHome += 2
    resultHome.innerText = countHome
    leaderHighlight()
}

function addThreeHome() {
    countHome += 3
    resultHome.innerText = countHome
    leaderHighlight()
}

// Guest functions
function addOneGuest() {
    countGuest += 1
    resultGuest.innerText = countGuest
    leaderHighlight()
}

function addTwoGuest() {
    countGuest += 2
    resultGuest.innerText = countGuest
    leaderHighlight()
}

function addThreeGuest() {
    countGuest += 3
    resultGuest.innerText = countGuest
    leaderHighlight()
}

// New game function
function newGame() {
    resultGuest.innerText = 0
    resultHome.innerText = 0
    countHome = 0
    countGuest = 0
    resultHome.style.color = "#F94F6D"
    resultGuest.style.color = "#F94F6D"
}

// Leading team highlight function
function leaderHighlight(){
    if (countHome > countGuest) {
        resultHome.style.color = "green"
        resultGuest.style.color = "#F94F6D"
    }
    if (countHome < countGuest) {
        resultGuest.style.color = "green"
        resultHome.style.color = "#F94F6D"
    }
    else if (countHome === countGuest) {
        resultHome.style.color = "#9AABD8"
        resultGuest.style.color = "#9AABD8"
    }
}
