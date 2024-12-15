// declaring variables, get  elements from DOM
const addItemBtn = document.getElementById('add-item-btn')
const itemInput = document.getElementById('item-input')
const list = document.getElementById('list')

// creating an empty array, later input.values pushed here
const shoppingList = []

// creating EventListener for the add btn
// clearing input value as we click it
// starting render function
addItemBtn.addEventListener('click', function(){
    // if statement I. duplicates - just clear the input value, log out no duplicates
    if (shoppingList.includes(itemInput.value)){
        itemInput.value = '' 
        console.log("no duplicates")
    // else statement II. not on the list - push it to the array 
    } else {
        shoppingList.push(itemInput.value)
        render()        
        itemInput.value = '' 
    }
})

// for...of loop to add the items to the HTML, changing innerHTML
function render(){    
    let html = ''
    for (let item of shoppingList){
        html+= `<li class="list-item">${item}</li>`
    }
    list.innerHTML = html
}

// calling render function
render()

