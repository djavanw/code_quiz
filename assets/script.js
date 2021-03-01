var startEl = document.querySelector('#start');
var highScoreEl = document.querySelector('#hiScore');
var scoreEl = document.querySelector('#score');
var timerEl = document.querySelector('#timer');
var startmsgEl = document.querySelector('#startmsg');
var questionEl = document.querySelector('#question');
var answersEl = document.querySelectorAll('.answers');

var answerOne = document.querySelector('#answ1');
var answerTwo = document.querySelector('#answ2');
var answerThree = document.querySelector('#answ3');
var answerFour = document.querySelector('#answ4');
var correctEl = document.querySelector('#correct');

let playTime = 75;
var score = 0;
var questAnsw = [
    {
        0: 'Here is question number one(1)?',
        1: 'Answer A to question1',
        2: 'Answer B to question1',
        3: 'Answer C to question1',
        4: 'Answer D to question1',
        5: 'Answer C to question1'
    },

    {
        0: 'Here is question number two(2)?',
        1: 'Answer A to question2',
        2: 'Answer B to question2',
        3: 'Answer C to question2',
        4: 'Answer D to question2',
        5: 'Answer D to question2'
    },

    {
        0: 'Here is question number three(3)?',
        1: 'Answer A to question3',
        2: 'Answer B to question3',
        3: 'Answer C to question3',
        4: 'Answer D to question3',
        5: 'Answer A to question3'
    },

    {
        0: 'Here is question number four(4)?',
        1: 'Answer A to question4',
        2: 'Answer B to question4',
        3: 'Answer C to question4',
        4: 'Answer D to question4',
        5: 'Answer B to question4'
    },

    {
        0: 'Here is question number five(5)?',
        1: 'Answer A to question5',
        2: 'Answer B to question5',
        3: 'Answer C to question5',
        4: 'Answer D to question5',
        5: 'Answer C to question5'
    }
];

let j = 0;
let i;
let currentQuestion = j;
//This is the transition time between questions after selection
//while(j < questAnsw.length)
//for(j = 0; j < questAnsw.length; i++)


function genQuestion() {
   console.log('CurrentQuestion: ' + (currentQuestion +1))
   correctEl.innerHTML = ' ';                               //This will hide the answer message before going to next question.
        //questionEl.textContent = questAnsw[j][i];
        //answerOne.innerHTML = questAnsw[j][i];
    
    for(i = 0; i < questAnsw.length; i++)
    {
        if(i === 0) {
            questionEl.innerHTML = questAnsw[j][i];
            console.log(questAnsw[j][i])
               
        } else if(i === 1) {
            answerOne.textContent = questAnsw[j][i];
            console.log(questAnsw[j][i])

        } else if(i === 2) {
            answerTwo.innerHTML = questAnsw[j][i];
            console.log(questAnsw[j][i])

        } else if(i === 3) {
            answerThree.innerHTML = questAnsw[j][i];
            console.log(questAnsw[j][i])

        } else if(i === 4) {
            answerFour.innerHTML = questAnsw[j][i];
            console.log(questAnsw[j][i])

        } else {console.log('iteration finished')}
       
        
        answerOne.addEventListener('click', checkAnswer); 
        answerTwo.addEventListener('click', checkAnswer);
        answerThree.addEventListener('click', checkAnswer);
        answerFour.addEventListener('click', checkAnswer);

    console.log('Loop finished ' + i);
    
    }   
       
}

function additionEl(){
    console.log('You are in the additionEl function');
    // console.log(event.type);
    // console.log(event.target);
    j = j + 1;
    currentQuestion++;
    
    //if(event.target === questAnsw[j][3])
    console.log('You are finished');
    genQuestion();
};




function checkAnswer(event) {
    console.log('You are in the checkAnswer function');
    console.log(event.target.innerText);
    console.log('This was selected: ' + questAnsw[j][i]);
    if(event.target.innerText === questAnsw[0][3] ||   //Checks the click event to match the correct answers of the array/object. #5 holds correct answers.
        event.target.innerText === questAnsw[1][4] || 
        event.target.innerText === questAnsw[2][1] || 
        event.target.innerText === questAnsw[3][2] || 
        event.target.innerText === questAnsw[4][3])
    {
        score++
        scoreEl.innerHTML = score; 
        console.log('This is the Correct Answer');
        correctEl.innerHTML = 'Correct Answer';
    } else { 
        console.log('The Answers is Wrong');
        correctEl.innerHTML = 'Wrong Answer';     
        }
    transitionEl();
}

function transitionEl(event) {
  
        
    let transitionTime = 3;
    console.log('Made it to the Question transition timer')
    var timerInterval = setInterval(function(){
        transitionTime--;
        questionEl.textContent = ' ';                    //The following will briefly hide the questions and answers before going to the next question.
        answerOne.textContent = ' ';
        answerTwo.textContent = ' ';
        answerThree.textContent = ' ';
        answerFour.textContent = ' ';

        if(transitionTime === 0) {
            clearInterval(timerInterval);
            questionEl.textContent = questAnsw[j][i];    //This must be unhiden before looping back to the genQuestion function or there will be variable contents and cause errors.
            answerOne.textContent = questAnsw[j][i];
            answerTwo.textContent = questAnsw[j][i];
            answerThree.textContent =questAnsw[j][i];
            answerFour.textContent = questAnsw[j][i];
            //correctEl.innerHTML = ' ';                  //This will hide the answer message before going to next question.
            additionEl();
        }
    }, 1000);
}


function timerGame(event) {                              //This is the main quiz time and start at first click.
    
    console.log('This timer is going');
    console.log(event);
    var timerInterval = setInterval(function(){
        playTime--;
        timerEl.innerHTML = playTime;
        if(playTime === 0) {
            clearInterval(timerInterval);
            timerEl.innerHTML = 'Time is Up'
         }
    }, 1000);
}



startEl.addEventListener('click', genQuestion);  //This starts the quiz.  
startEl.addEventListener('click', timerGame);    //This starts the quiz timer.



    
