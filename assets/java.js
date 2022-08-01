    /*Elements being used*/
const start = document.getElementById("start");
const questionbox = document.getElementById("questionbox");
const question = document.getElementById("question");
const choicesA = document.getElementById("choicesA");
const choicesB = document.getElementById("choicesB");
const choicesC = document.getElementById("choicesC");
const choicesD = document.getElementById("choicesD");
const timer=document.getElementById("timer");
const instructions= document.getElementById("instructions");
console.log(start)
let runningQuestion = 0;

/* qustions being used*/

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
        choiceA : "strings",
        choiceB: "booleans",
        choiceC : "alerts",
        choiceD : "numbers",
        correct :"c",
    },{ 
        question:"string values must be enclosed within____when being assigned to variables.",
        choiceA : "commas",
        choiceB: "curly-brackets",
        choiceC : "qoute",
        choiceD : "parenthesis", 
        correct :"c",
        
    },{
        question:"commonly used data types DO not include?",
        choiceA : "strings",
        choiceB: "booleans",
        choicec : "alerts",
        choiced : "numbers",
        correct :"c"
    },  {
        question:"The condition in an if/else statement is enclosed with _____",
        choiceA : "qoutes",
        choiceB: "curly-brackets",
        choiceC : "parenthesis",
        choiceD : "square brackets",
        correct :"d",
    }
    

]

/*timer function*/

function starttimer(){
console.log("timerstart")
let time=70
const countdown=setInterval(() =>{
time--
timer.textContent=time
},1000)
}
let lastquestionIndex=question.length -1;
let runningQuestionIndex=0
function renderquestion(){
console.log("renderquestion")
let q = questions[runningQuestionIndex++];
  question.innerHTML = "<p>"+ q.question +"</p>";
     choicesA.innerHTML = q.choiceA;
     choicesB.innerHTML = q.choiceB;
     choicesC.innerHTML = q.choiceC;
     choicesD.innerHTML = q.choiceD;

    }

    
   
    
    
    let button = document.getElementById("questionbox");
button.addEventListener('click', function() {
    renderquestion()
    console.log('Clicked!');
}); 





    

 







function startquiz(){ 
    console.log("click")
   instructions.style.display="none"
   start.style.display="none"
   questionbox.style.display="block"
starttimer()
renderquestion()
}

start.addEventListener('click', startquiz)