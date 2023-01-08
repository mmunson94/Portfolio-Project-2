const questions = [
    {
        question: "Who is Manchester Uniteds longest serving manager?",
        option: ["Alex Ferguson", "Matt Busby", "Ron Atkinson", "Jose Mourinho"],

        answerIndex: 0,
    },
    {
        question: "Which of these Manchester United players has not won the Ballon d'or?",
        option: ["Bobby Charlton", "Eric Cantona", "Cristiano Ronaldo", "George Best"],

        answerIndex: 1,
    },
    {
        question: "In what year was Manchest United founded?",
        option: ["1904", "1878", "1894", "1910"],

        answerIndex: 1,
    },
    {
        question: "What were Manchester United originally called?",
        option: ["F.C. United of Manchester", "Manchester North End F.C.", "Northwhich Manchester Villa F.C.", "Newton Heath LYR"],

        answerIndex: 0,
    },
];

const questionContainer = document.getElementById("question-container");

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');

startButton.addEventListener('click', startGame); 

function startGame() {
    console.log('Started')
    startButton.classList.add('hidden')
    questionContainer.classList.remove('hidden')
    nextButton.classList.remove('hidden')

    currentQuestionIndex = 0

    showNextQuestion()
}

let currentQuestion = questions[currentQuestionIndex];

function showNextQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    
    questionContainer.textContent = currentQuestion.question;

}
 
function checkAnswer() {

}

function endGame() {

}

function incrementScore() {

}

function incrementIncorrectAnswer() {

}

