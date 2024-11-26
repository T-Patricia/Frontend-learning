// declaring variables, elements from the DOM, constant values to convert 
const inputEl = document.getElementById("input-el")

const lengthOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")

const convertBtn = document.getElementById("convert-btn")

const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204

// creating a function that listening to clicks
convertBtn.addEventListener("click", function(){
    let inputVal = inputEl.value
    // length logic
    lengthOutput.textContent = `${inputVal} meters = ${(inputVal * meterToFeet).toFixed(3)} feet | ${inputVal} feet = ${(inputVal / meterToFeet).toFixed(3)} meters`

    // volume logic
    volumeOutput.textContent = `${inputVal} liters = ${(inputVal * literToGallon).toFixed(3)} gallons | ${inputVal} gallons = ${(inputVal / literToGallon).toFixed(3)} liters`

    // mass logic
    massOutput.textContent = `${inputVal} kilos = ${(inputVal * kilogramToPound).toFixed(3)} pounds | ${inputVal} pounds = ${(inputVal / kilogramToPound).toFixed(3)} kilos`
})