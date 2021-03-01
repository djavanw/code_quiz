var startEl = document.querySelector('#start');
var highScoreEl = document.querySelector('#hiScore');
var scoreEl = document.querySelector('#score');
var timerEl = document.querySelector('#timer');
var questionEl = document.querySelector('#question');
var answersEl = document.querySelector('.answers');

var answerOne = document.querySelector('#answ1');
var answerTwo = document.querySelector('#answ2');
var answerThree = document.querySelector('#answ3');
var answerFour = document.querySelector('#answ4');
var correctEl = document.querySelector('#correct');

let playTime = 75;

var questAnsw = [
    {
        0: 'Here is question number one(1)?',
        1: 'Answer A to question1',
        2: 'Answer B to question1',
        3: 'Answer C to question1',
        4: 'Answer D to question1',
        5: 'c'
    },

    {
        0: 'Here is question number two(2)?',
        1: 'Answer A to question2',
        2: 'Answer B to question2',
        3: 'Answer C to question2',
        4: 'Answer D to question2',
        5: 'd'
    },

    {
        0: 'Here is question number three(3)?',
        1: 'Answer A to question3',
        2: 'Answer B to question3',
        3: 'Answer C to question3',
        4: 'Answer D to question3',
        5: 'a'
    },

    {
        0: 'Here is question number four(4)?',
        1: 'Answer A to question4',
        2: 'Answer B to question4',
        3: 'Answer C to question4',
        4: 'Answer D to question4',
        5: 'b'
    },

    {
        0: 'Here is question number five(5)?',
        1: 'Answer A to question5',
        2: 'Answer B to question5',
        3: 'Answer C to question5',
        4: 'Answer D to question5',
        5: 'c'
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
        
        //questionEl.textContent = questAnsw[j][i];
        //answerOne.innerHTML = questAnsw[j][i];
    
    for(i = 0; i < questAnsw.length; i++)
    {
        if(i === 0) {
            questionEl.innerHTML = questAnsw[j][i];
            console.log(questAnsw[j][i])
               
        } else if(i === 1) {
            answerOne.innerHTML = questAnsw[j][i];
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
       
    answerOne.addEventListener('click', transitionEl); 
    answerTwo.addEventListener('click', transitionEl);
    answerThree.addEventListener('click', transitionEl);
    answerFour.addEventListener('click', transitionEl);

    console.log('Loop finished ' + i);
    
    }   
       
}

function additionEl(){
    console.log('You are in a new function');
    // console.log(event.type);
    // console.log(event.target);
    j = j + 1;
    currentQuestion++;
    
    //transitionEl();
    

    //if(event.target === questAnsw[j][3])
    console.log('You are finished');
    genQuestion();
};



function transitionEl() {
    let transitionTime = 3;
    console.log('Made it to the Question transition timer')
    var timerInterval = setInterval(function(){
        transitionTime--;

        questionEl.textContent = ' ';
        answerOne.innerHTML = ' ';
        answerTwo.innerHTML = ' ';
        answerThree.innerHTML = ' ';
        answerFour.innerHTML = ' ';

        if(transitionTime === 0) {
            clearInterval(timerInterval);
            
            questionEl.textContent = questAnsw[j][i];
            answerOne.innerHTML = questAnsw[j][i];
            answerTwo.innerHTML = questAnsw[j][i];
            answerThree.innerHTML = questAnsw[j][i];
            answerFour.innerHTML = questAnsw[j][i];

            additionEl();
        }
    }, 1000);
}

function timerGame(event) {
    
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



startEl.addEventListener('click', genQuestion);  //This starts the application  
startEl.addEventListener('click', timerGame);



    
