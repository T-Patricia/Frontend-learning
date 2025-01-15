// import data
import { menuArray } from "../data/data.js";

// getting elements from HTML
const itemSection = document.getElementById("item-section");
const summaryRow = document.getElementById("summary-row")
const summaryTitle = document.getElementById("summary-title");
const totalRow = document.getElementById("total-row");
const totalPrice = document.getElementById("total-price");
const completeBtn = document.getElementById("complete-btn")
let summaryHTML = "";
let total = 0;

// rendering out menu items
function getItemFeedHtml(menuArray){
    // iterating through array
    const itemFeedHtml = menuArray.map(function(menuItem){
         // destructuring object
        const { name, ingredients, price, image, emoji, alt, id } = menuItem;
        //  inserting boilerplate
        return `
            <div class="item-container">
                <img
                    src="${image}"
                    alt="${alt}"
                />
                <div class="item-description">
                    <h2 class="item-name ">${name}</h2>
                    <p class="item-ingredients">
                        ${ingredients.join(", ")}
                    </p>
                    <p class="item-price">$${price}</p>
                </div>
                <p class="plus-icon" data-plus="${menuItem.id}">+</p>
            </div>
        `
    }).join('')
    // return the insertable HTML
    return itemFeedHtml
}

// rendering function
function render(){
    itemSection.innerHTML = getItemFeedHtml(menuArray)
}
// calling render function
render()

// eventListener for doc
document.addEventListener('click', function(e){
    if (e.target.dataset.plus){
        handlePlusBtnClick(e.target.dataset.plus)
    }
})

// plus icon function
function handlePlusBtnClick(itemID){
    // finding clicked menu item by uniqe id
    const targetMenuItem = menuArray.find(function(menuItem){
        return menuItem.id === Number(itemID)
    });

    // modifing the display of the title, total row, button
    summaryTitle.classList.remove("hidden")
    totalRow.classList.remove("hidden")
    totalRow.classList.add("flex")
    completeBtn.classList.remove("hidden")

    // counting total price
    total += targetMenuItem.price

    // item boilerplate
    summaryHTML += `
        <div class="summary-row" data-id="${targetMenuItem.id}">
            <p class="summary-item-name">${targetMenuItem.name}</p>
            <a href="#" class="summary-remove-tag">remove</a>
            <p class="summary-item-price">$${targetMenuItem.price}</p>
        </div>`;

    //updating the DOM once 
    summaryRow.innerHTML = summaryHTML
    totalPrice.textContent = `$${total}`
}