const questions = [
    {
        question: "which of the following is used in pencils?",
        answers: [
            {text: "Graphite", correct: true},
            {text: "Silicon", correct: false},
            {text: "Charcoal", correct: false},
            {text: "Phosphorous", correct: false},


        ]
    },
    {
        question: "The gas usually used in the electric Bulb is?",
        answers: [
            {text: "nitrogen", correct: true},
            {text: "hydrogen", correct: false},
            {text: "carbon dioxide", correct: false},
            {text: "oxygen", correct: false},


        ]
    },
    {
        question: "which of the gas is not known as green house gas?",
        answers: [
            {text: "Methane", correct: false},
            {text: "Nitrous oxide", correct: false},
            {text: "carbon dioxide", correct: false},
            {text: "Hydrogen", correct: true},


        ]
    },
    {
        question: "The hardest substance available on the Earth?",
        answers: [
            {text: "gold", correct: false},
            {text: "iron", correct: false},
            {text: "Diamond", correct: true},
            {text: "platinum", correct: false},


        ]
    },
    {
        question: "which is largest animal in the world?",
        answers: [
            {text: "shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},


        ]
    },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
   nextButton.innerHTML = "Next";
   showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = questions [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." +currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    if (answer.correct){
        button.dataset.correct = answer .correct;
    }
    button.addEventListener("click",selectAnswer);
    });
}
  
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct ==="true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz(); 
    }
})
startQuiz();
