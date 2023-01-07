const questions = [
    {
        question: "Who is Manchester Uniteds longest serving manager?",
        options: ["Alex Ferguson", "Matt Busby", "Ron Atkinson", "Jose Mourinho"],

        answerIndex: 0,
    },
    {
        question: "Which of these Manchester United players has not won the Ballon d'or?",
        options: ["Bobby Charlton", "Eric Cantona", "Cristiano Ronaldo", "George Best"],

        answerIndex: 1,
    },
    {
        question: "In what year was Manchest United founded?",
        options: ["1904", "1878", "1894", "1910"],

        answerIndex: 1,
    },
    {
        question: "What were Manchester United originally called?",
        options: ["F.C. United of Manchester", "Manchester North End F.C.", "Northwhich Manchester Villa F.C.", "Newton Heath LYR"],

        answerIndex: 0,
    },
];

const questionContainer = document.getElementById("question-container");

const startButton = document.getElementById('start-btn')

startButton.addEventListener('click', startGame) 

function startGame() {
    console.log('Started')
    startButton.classList.add('hidden')
}
    

function showNextQuestion() {

}
 
function checkAnswer() {

}

function endGame() {

}

function incrementScore() {

}

function incrementIncorrectAnswer() {

}

