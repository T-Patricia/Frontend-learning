// declaring variable
let count = 0;

// select value and buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

// creating a function to the buttons
btns.forEach(function(btn){
    // working with event listeners
    btn.addEventListener('click', function(e){
        // specifying for each button type
        const styles = e.currentTarget.classList
        if (styles.contains('decrease')) {
            count--;
        }
        else if (styles.contains('increase')){
            count++
        }
        // else if (styles.contains('reset')) {
        //     count = 0
        // }
        else {
            count = 0
        }
        // changing color depending if the number is positive or negative
        if (count > 0) {
            value.style.color = "green"
        }
        if (count < 0) {
            value.style.color = "red"
        }
        if (count === 0) {
            value.style.color = "#222"
        }
        // implementing it to the HTML
        value.textContent = count;
    })
});