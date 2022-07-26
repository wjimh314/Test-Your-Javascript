/*Elements being used*/
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choicesA = document.getElementById("choicesA");
const choicesB = document.getElementById("choicesB");
const choicesC = document.getElementById("choicesC");
const choicesD = document.getElementById("choicesD");
const timer=document.getElementById("timer");
const timegauge=document.getElementById("timegauge");


let questions = [

    {
        question : "A very useful tool used durning development and debugging for printing content to the debugger is?",

    

        choiceA : "JavaScript",

        choiceB : "terminal/bash",

        choiceC : "for loops",

        choiceD : "console.log",

        correct: "D",

    },{
        question:"commonly used data types DO not include?",
        choiceA : strings,
        choiceb: booleans,
        choiceC : alerts,
        choiceD : numbers,
        correct :c,
    },{ 
        question:"string values must be enclosed within____when being assigned to variables.",
        choiceA : commas,
        choiceb: curly-brackets,
        choiceC : qoute,
        choiceD : parenthesis, 
        correct :c,
        
    },{
        question:"commonly used data types DO not include?",
        choiceA : strings,
        choiceb: booleans,
        choicec : alerts,
        choiced : numbers,
        correct :c
    },  {
        question:"The condition in an if/else statement is enclosed with _____",
        choiceA : qoutes,
        choiceb: curly-brackets,
        choiceC : parenthesis,
        choiceD : square-brackets,
        correct :d,
    }
]

const lastQuestion = questions.length - 1;





let runningQuestion = 0;
function renderQuestion(){

    let q = questions[runningQuestion];
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}
start.addEventListener("click",start);
function startQ(){
    start.style.display = "none";}
