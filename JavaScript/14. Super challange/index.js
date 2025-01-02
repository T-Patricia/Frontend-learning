// importing data
import { placeholderPropertyObj } from './properties/placeholderPropertyObj.js'
import { propertyForSaleArr } from './properties/propertyForSaleArr.js'

// function for 
function getPropertyHtml(propertyArr = [placeholderPropertyObj]) {
// iterate through array
const feedHTML = propertyArr.map(property => {
    // destructuring 
    const { propertyLocation, priceGBP, roomsM2, comment, image } = property
    // calculating total area per property
    const totalArea = roomsM2.reduce((total, current) => total + current)
    // returning a template string
    return `
    <section class="card">
        <img src="/images/${image}">
        <div class="card-right">
            <h2>${propertyLocation}</h2>
            <h3>${priceGBP}</h3>
            <p>${comment}</p>
            <h3>${totalArea} m&sup2;</h3>
        </div>
    </section>`
}).join('')
return feedHTML
}

// rendering it out to the page
document.getElementById('container').innerHTML = getPropertyHtml()
