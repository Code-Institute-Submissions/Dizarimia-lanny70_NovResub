
const questions = [
    {
        question: "What colour are my shoes?",
        options: {
            option1: "Blue",
            option2: "Red",
            option3: "Green",
            option4: "Yellow"
        },
        answer: "Blue"
    },
    {
        question: "What colour is my hair?",
        options: {
            option1: "Grey",
            option2: "Blonde",
            option3: "Green",
            option4: "Black"
        },
        answer: "Green"
    },
]

const questionNumber = document.getElementById('question-number');
const question = document.getElementById('question');
const option1 = document.getElementById('option-1');
const option2 = document.getElementById('option-2');
const option3 = document.getElementById('option-3');
const option4 = document.getElementById('option-4');

let activeQuestionNumber = 0;

function main() {
    // Load the quiz contents for the first question here
    questionNumber.innerText = (activeQuestionNumber + 1);
    question.innerText = questions[activeQuestionNumber].question;
    option1.innerText = questions[activeQuestionNumber].options.option1;
    option2.innerText = questions[activeQuestionNumber].options.option2;
    option3.innerText = questions[activeQuestionNumber].options.option3;
    option4.innerText = questions[activeQuestionNumber].options.option4;
}

function answer(optionId) {
    if (questions[activeQuestionNumber].options[`option${optionId}`] == questions[activeQuestionNumber].answer) {
        alert('Your answer is correct');
    } else {
        alert('Your answer is wrong');
    }
    activeQuestionNumber++;
}

function nextQuestion() {
    main();
}