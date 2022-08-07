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
        answer: "Beer"
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
            option2: "Vollsjö Pizzeria",
            option3: "Noy's Thaikök Önneköp",

        },
        answer: "Stekhuset Löberöd"
    },
    {
        question: "What is Lannys shoe size?",
        options: {
            option1: "41",
            option2: "42",
            option3: "43",

        },
        answer: "42"
    },
    {
        question: "What was Lannys name supposed to be?",
        options: {
            option1: "Larry",
            option2: "Lenny",
            option3: "Harry",

        },
        answer: "Lenny"
    },
]

const questionNumber = document.getElementById('question-number');
const question = document.getElementById('question');
const option1 = document.getElementById('option-1');
const option2 = document.getElementById('option-2');
const option3 = document.getElementById('option-3');

let correctAnswerCount = 0;
let wrongAnswerCount = 0;
let totalScoreAchieved = 0;
let activeQuestionNumber = 0;
let TotalQuestions = 7;

function main() {

    /* Load the quiz contents for the first question here */
    questionNumber.innerText = (activeQuestionNumber + 1);
    question.innerText = questions[activeQuestionNumber].question;
    option1.innerText = questions[activeQuestionNumber].options.option1;
    option2.innerText = questions[activeQuestionNumber].options.option2;
    option3.innerText = questions[activeQuestionNumber].options.option3;
    document.getElementById("correctAnswerCount").innerHTML = correctAnswerCount;
    document.getElementById("totalScoreAchieved").innerHTML = totalScoreAchieved;

    // check if game is over
    if (activeQuestionNumber === TotalQuestions){
        alert('Congratulations on finishing the questions');
        return;
    }

}

function answer(optionId) {
    if (questions[activeQuestionNumber].options[`option${optionId}`] == questions[activeQuestionNumber].answer) {
        alert('Your answer is correct');
        correctAnswerCount += 1;
        if (activeQuestionNumber < TotalQuestions - 1)
        activeQuestionNumber++;
        nextQuestion();

    } else {
        alert('Your answer is wrong');
        wrongAnswerCount += 1;
        totalScoreAchieved += 1;
        if (activeQuestionNumber < TotalQuestions - 1)
        activeQuestionNumber++;
        nextQuestion();
    }
    
} 
function nextQuestion() {
    main(); 
    
}