/* declared variables that will be selected*/

var questionsElement= document.queryselctor('questions');
var correctElement=document.queryselctor("correct");
var incorrectElement=document.queryselctor("incorrect");
var timerElement=document.queryselctor("timer-count");
var startElement=document.queryselctor("start");
var highscoreElement=document.queryselector("High-scores");

/* declared varibles that will be in use through program */
var awnsers =[]
var scorekeeper=0;
var seconds=0;
var countdownTimer;
console.log()

  /* declared variables for questions*/  
 var start= document.getElementById("start");
 start.addEventListener("click", startQuiz);
let timer;
 function startQuiz(){
    start.style.display="none";
    counterRender();
    timer= SetInnterval(counterRender,1000);
    progressRender();
    questionRender ();
    startQuiz.style.display="block";
 }


    

  var questions = [

        {
    
            question : "What does HTML stand for?",
    
        
    
            choiceA : "Correct",
    
            choiceB : "Wrong",
    
            choiceC : "Wrong",
    
            correct : "A"
    
        }
]
