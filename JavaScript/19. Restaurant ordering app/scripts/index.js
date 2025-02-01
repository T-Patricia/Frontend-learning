// import data
import { menuArray } from "../data/data.js";

// getting elements from HTML
const itemSection = document.getElementById("item-section");
const summaryRow = document.getElementById("summary-row")
const summaryTitle = document.getElementById("summary-title");
const totalRow = document.getElementById("total-row");
const totalPrice = document.getElementById("total-price");
const completeBtn = document.getElementById("complete-btn");
const modal = document.getElementById("modal");
const payBtn = document.getElementById("pay-btn");
const feedbackContainer = document.getElementById("feedback-container");
let cartItems = []; 
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
    else if (e.target.dataset.removeID){
        handleRemoveBtn(e.target.dataset.removeID)
    }
})

function refreshSumHTML(){
        // Create the summaryHTML based on cartItems array
        summaryHTML = cartItems.map(function(menuItem) {
            return `
            <div class="summary-row" data-id="${menuItem.id}">
                <p class="summary-item-name">${menuItem.name}</p>
                <a class="summary-remove-tag" data-removeID="${menuItem.id}">remove</a>
                <p class="summary-item-price">$${menuItem.price}</p>
            </div>`;
        }).join('');
}

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

    // adding object to cartItems array
    cartItems.push({
        name: targetMenuItem.name,
        price: targetMenuItem.price,
        id: targetMenuItem.id
    })
    
    refreshSumHTML()

    //updating the DOM once 
    summaryRow.innerHTML = summaryHTML
    totalPrice.textContent = `$${total}`
}

// removing element function
function handleRemoveBtn(itemID){
    // Convert itemID to a number
    const idToRemove = Number(itemID);

    // Find the index of the item to be removed
    const itemIndex = cartItems.findIndex(function (menuItem) {
        return menuItem.id === idToRemove;
    });

    // counting total price
    total -= targetMenuItem.price;

    // Update the total price in the DOM
    totalPrice.textContent = `$${total}`;

    // remove object to cartItems array
    cartItems.pop({
        name: targetMenuItem.name,
        price: targetMenuItem.price,
        id: targetMenuItem.id
    })

    refreshSumHTML()


    // If no items left, hide summary title, total row, and button
    if (total === 0) {
        summaryTitle.classList.add("hidden");
        totalRow.classList.add("hidden");
        totalRow.classList.remove("flex");
        completeBtn.classList.add("hidden");
    }


    console.log(summaryHTML)

    // updatng DOM
    summaryRow.innerHTML = summaryHTML
    totalPrice.textContent = `$${total}`
}

// eventListener for complete btn
completeBtn.addEventListener('click', function(){
    modal.classList.remove("hidden")
    modal.classList.add("modal-active-state")
})

// eventListener for pay btn
payBtn.addEventListener('click', function(){
    modal.classList.add("hidden")
    modal.classList.remove("modal-active-state")
    // ide még feedback
    feedbackContainer.innerHTML = `
        <h2>Thanks, ${name}! Your order is on its way!<h2>
    `
    console.log('clcked')
})