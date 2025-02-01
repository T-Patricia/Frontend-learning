// 1. DECLARING VAIRABLES, ELEMENTS FROM DOM
const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
    "T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3",
     "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",
     ")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");
const generateBtn = document.getElementsByClassName("btn-generate")[0];

// 2. FUNCTION TO GENERATE A RANDOMIZING FUNCTION
function generateRandomPassword() {
    // setting a variable generated password can be stored in
    let randomPassword = "";
    // for loop for the desired length of characters - currently fixed to 8
    for (let i = 0; i < 8; i++) {
        // randomizing an index to pick select a random character from the array
        let randomIndex = Math.floor(Math.random() * characters.length);
        // updating the variable to store all 8 characters
        randomPassword += characters[randomIndex];
    }
    // this function is returning an 8 length randomized password
    return randomPassword;
}

// 3. BUTTON EVENTLISTENER + REFRESHING THE DATA IN THE HTML
generateBtn.addEventListener('click', function() {
    // Generate two different random passwords by calling our function
    let passwordOneText = generateRandomPassword();
    let passwordTwoText = generateRandomPassword();

    // Updating the generated passwords to the elements
    passwordOne.textContent = passwordOneText;
    passwordTwo.textContent = passwordTwoText;
});

// 4. CREATING COPY TO CLIPBOARD FUNCTION
function copy(element) {
    navigator.clipboard.writeText(element.innerText)
}
