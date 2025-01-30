// Elements from the DOM
const configContainer = document.querySelector(".config-container")
const quizContainer = document.querySelector(".quiz-container");
const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const questionStatus = document.querySelector(".question-status");
const timerDisplay = document.querySelector(".time-duration");
const resultContainer = document.querySelector(".result-container");

// Quiz state variables
const QUIZ_TIME_LIMIT = 5;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;
let quizCategory = "programming";
let numberOfQuestions = 5;
let currentQuestion = null;
const questionsIndexHistory = [];
let correctAnswersCount = 0;
let currentQuestionNumber = 1;

// Display the quiz result and hide the quiz container
const showQuizResult = () => {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    const resultText = `You answered <b>${correctAnswersCount}</b> out of <b>${numberOfQuestions}</b> questions correctly. Great effort!`
    document.querySelector(".result-message").innerHTML = resultText;
}

// Clear and reset the timer
const resetTimer = () => {
    clearInterval(timer);
    currentTime = QUIZ_TIME_LIMIT;
    timerDisplay.textContent = `${currentTime}s`
}

// Initialize and start the timer for the current question
const startTimer = () => {
    timer = setInterval(() =>  {
        currentTime--;
        timerDisplay.textContent = `${currentTime}s`;

        if(currentTime <= 0) {
            clearInterval(timer);
            highlightCorrectAnswer();
            nextQuestionBtn.style.visibility = "visible";
            quizContainer.querySelector(".quiz-timer").style.background = "var(--timer-expired-bg)";

            // Disable all answer options after one option is selected
            answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");
        }
    }, 1000);
}

// Fetch a random questions based on the selected category
const getRandomQuestion = () => {
    const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || [];

    // Show the results if all questions have been answered
    if(questionsIndexHistory.length >= Math.min(categoryQuestions.length, numberOfQuestions)) {
        return showQuizResult();
    }

    // Filter out already asked questions and choose a random one
    const availableQuestions = categoryQuestions.filter((_, index) => !questionsIndexHistory.includes(index));
    const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];

    questionsIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
    return randomQuestion;
}

// Highlight the correct answer option and add icon
const highlightCorrectAnswer = () => {
    const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
    correctOption.classList.add("correct");
    const iconHTML = `<span class="material-symbols-rounded">check_circle</span>`;
    correctOption.insertAdjacentHTML("beforeend", iconHTML);
}

// Handles the user's choice of answer
const handleAnswer = (option, answerIndex) => {
    clearInterval(timer);
    
    const isCorrect = currentQuestion.correctAnswer === answerIndex;
    option.classList.add(isCorrect ? 'correct' : 'incorrect');

    !isCorrect ? highlightCorrectAnswer() : correctAnswersCount++;

    // Inserts icon based on correctness
    const iconHTML = `<span class="material-symbols-rounded">${isCorrect ? 'check_circle' : 'cancel'}</span>`;
    option.insertAdjacentHTML("beforeend", iconHTML);

    // Disable all answer options after one option is selected
    answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");

    nextQuestionBtn.style.visibility = "visible";
}

// Render the current question and its options in the quiz
const renderQuestion = () => {
    currentQuestion = getRandomQuestion();
    if(!currentQuestion) return;

    resetTimer();
    startTimer();

    // Update UI
    answerOptions.innerHTML = "";
    nextQuestionBtn.style.visibility = "hidden"
    quizContainer.querySelector(".quiz-timer").style.background = "var(--black-bg)";

    document.querySelector(".question-text").textContent = currentQuestion.question;
    questionStatus.innerHTML = `<b>${currentQuestionNumber}</b> of <b>${numberOfQuestions}</b> Questions`;

    // Create option <li> elements and append them, and add click even listeners
    currentQuestion.options.forEach((option, index) =>{
        const li = document.createElement("li");
        li.classList.add("answer-option");
        li.textContent = option;
        answerOptions.appendChild(li)
        li.addEventListener("click", () => handleAnswer(li, index))
    });
}

// Start quiz and render the random question
const startQuiz = () => {
    configContainer.style.display = "none";
    quizContainer.style.display = "block";
    currentQuestionNumber = 1;

    // Update quiz category and number of question
    quizCategory = configContainer.querySelector(".category-option.active").textContent;
    numberOfQuestions = parseInt(configContainer.querySelector(".question-option.active").textContent);

    renderQuestion();
}

// Highlight the selected option on click - category or number of question
document.querySelectorAll(".category-option, .question-option").forEach(option => {
    option.addEventListener("click", () => {
        option.parentNode.querySelector(".active").classList.remove("active");
        option.classList.add("active");
    });
});

// Reset the quiz and return to the configuration container
const resetQuiz = () => {
    resetTimer();
    currentQuestionNumber = 1;
    correctAnswersCount = 0;
    questionsIndexHistory.length = 0;
    configContainer.style.display = "block";
    resultContainer.style.display = "none";
}

// Modified to increment currentQuestionNumber
nextQuestionBtn.addEventListener("click", () => {
    currentQuestionNumber++;
    renderQuestion();
});

document.querySelector(".try-again-btn").addEventListener("click", resetQuiz);
document.querySelector(".start-quiz-btn").addEventListener("click", startQuiz);
