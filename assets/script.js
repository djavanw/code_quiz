var startEl = document.querySelector('#start');
var highScoreEl = document.querySelector('#hiScore');
var scoreEl = document.querySelector('#score');
var timerEl = document.querySelector('#timer');
var startmsgEl = document.querySelector('#startmsg');
var questionEl = document.querySelector('#question');
var responsesEltwo = document.querySelectorAll('.responses');

var answerOne = document.querySelector('#answ1');
var answerTwo = document.querySelector('#answ2');
var answerThree = document.querySelector('#answ3');
var answerFour = document.querySelector('#answ4');
var correctEl = document.querySelector('#correct');

let playTime = 75;
var score = 0;
var questAnsw = [
    {
        0: '1. Which method below is not associated with arrays?',
        1: 'a. sort()',
        2: 'b. reverse()',
        3: 'c. href()',
        4: 'd. pop()',
        5: 'c. href()'
    },

    {
        0: '2. Which is not considered a loop in JavaScript?',
        1: 'a. for',
        2: 'b. while',
        3: 'c. for/in',
        4: 'd. do/wilt',
        5: 'd. do/wilt'
    },

    {
        0: '3. What does a break statement do?',
        1: 'a. jumps out of the loop',
        2: 'b. continues the iteration',
        3: 'c. gives the option to continue the loop',
        4: 'd. completes only three iterations',
        5: 'a. jumps out of the loop'
    },

    {
        0: '4. JavaScript statements do not contain which of the following?',
        1: 'a. expressions',
        2: 'b. boolean decimals',
        3: 'c. values',
        4: 'd. characters',
        5: 'b. boolean decimals'
    },

    {
        0: '5. What keyword can be used to create a variable?',
        1: 'a. mkdir',
        2: 'b. git',
        3: 'c. var',
        4: 'd. apt-get',
        5: 'c. var'
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
   correctEl.style.visibility = 'hidden';                               //This will hide the answer message before going to next question.
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
        correctEl.style.visibility = 'visible';
    } else { 
        console.log('The Answers is Wrong');
        correctEl.innerHTML = 'Wrong Answer';
        correctEl.style.visibility = 'visible';
        playTime-=10     
        }
    transitionEl();
}

function transitionEl(event) {
  
        
    let transitionTime = 3;
    console.log('Made it to the Question transition timer')
    var timerInterval = setInterval(function(){
        transitionTime--;
        //correctEl.style.visibility = 'visible';
        questionEl.style.visibility = 'hidden';                    //The following will briefly hide the questions and answers before going to the next question.
        answerOne.style.visibility = 'hidden';
        answerTwo.style.visibility = 'hidden';
        answerThree.style.visibility = 'hidden';
        answerFour.style.visibility = 'hidden';
                   
        // questionEl.textContent = ' ';                    //The following will briefly hide the questions and answers before going to the next question.
        // answerOne.textContent = ' ';
        // answerTwo.textContent = ' ';
        // answerThree.textContent = ' ';
        // answerFour.textContent = ' ';

        if(transitionTime === 0) {
            clearInterval(timerInterval);
            questionEl.style.visibility = 'visible';                    //The following will briefly hide the questions and answers before going to the next question.
            answerOne.style.visibility = 'visible';
            answerTwo.style.visibility = 'visible';
            answerThree.style.visibility = 'visible';
            answerFour.style.visibility = 'visible';
            correctEl.style.visibility = 'hidden';
            // questionEl.textContent = questAnsw[j][i];    //This must be unhiden before looping back to the genQuestion function or there will be variable contents and cause errors.
            // answerOne.textContent = questAnsw[j][i];
            // answerTwo.textContent = questAnsw[j][i];
            // answerThree.textContent =questAnsw[j][i];
            // answerFour.textContent = questAnsw[j][i];
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
        timerEl.innerHTML = 'Time: ' + playTime;
        if(playTime === 0) {
            clearInterval(timerInterval);
            timerEl.innerHTML = 'Time is Up'
         }
    }, 1000);
}



startEl.addEventListener('click', genQuestion);  //This starts the quiz.  
startEl.addEventListener('click', timerGame);    //This starts the quiz timer.



    
