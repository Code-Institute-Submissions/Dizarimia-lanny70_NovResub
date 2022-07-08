const questions = [{
        question: "How many times has he been married?",
        options: {
            option1: "1",
            option2: "2",
            option3: "3",

        },
        answer: "2"
    },
    {
        question: "When is Lannys birthday?",
        options: {
            option1: "July 11th",
            option2: "July 12th",
            option3: "July 13th",

        },
        answer: "July 13th"
    },
    {
        question: "What is Lannys favourite drink?",
        options: {
            option1: "Rum",
            option2: "Whiskey",
            option3: "Beer",

        },
        answer: "Whiskey"
    },
    {
        question: "What is the name of the house Lanny designed?",
        options: {
            option1: "Solkullen",
            option2: "Solbacken",
            option3: "Solgården",

        },
        answer: "Solbacken"
    },
    {
        question: "What is Lannys favourite restaurant?",
        options: {
            option1: "Stekhuset Löberöd",
            option2: "Viking pizzeria Hörby",
            option3: "Noy's Thaikök Önneköp",

        },
        answer: "Stekhuset Löberöd"
    },
]

const questionNumber = document.getElementById('question-number');
const question = document.getElementById('question');
const option1 = document.getElementById('option-1');
const option2 = document.getElementById('option-2');
const option3 = document.getElementById('option-3');


let activeQuestionNumber = 0;

function main() {
    // Load the quiz contents for the first question here
    questionNumber.innerText = (activeQuestionNumber + 1);
    question.innerText = questions[activeQuestionNumber].question;
    option1.innerText = questions[activeQuestionNumber].options.option1;
    option2.innerText = questions[activeQuestionNumber].options.option2;
    option3.innerText = questions[activeQuestionNumber].options.option3;
   
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