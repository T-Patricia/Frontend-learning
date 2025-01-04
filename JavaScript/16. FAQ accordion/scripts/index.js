// get elements from DOM
const expandBtns = document.querySelectorAll('.expand-btn')
const answerContainers = document.querySelectorAll('.answer-container')
const questionContainers = document.querySelectorAll('.question-container')

// loop through all the question containers and add an eventlistener
questionContainers.forEach(function(questionContainer, index) {
    questionContainer.addEventListener('click', function() {
      // Toggle the 'hidden' class on the answer container
      answerContainers[index].classList.toggle('hidden');
      
      // Toggle the icon (plus/minus)
      const isHidden = answerContainers[index].classList.contains('hidden');
      expandBtns[index].src = isHidden 
        ? './assets/images/icon-plus.svg' 
        : './assets/images/icon-minus.svg';
    });
  });