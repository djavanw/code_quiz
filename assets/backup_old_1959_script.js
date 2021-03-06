var gameTitle = 'Coding Quiz Challenge';
var preGameMsg = 'Try to answer the following JavaScript coding related questions within the given time limit. Incorrect answers will deduct 10 seconds from the overall time.  Good Luck!!!'
var startEl = document.querySelector('#start');
var highScoreEl = document.querySelector('#hiScore');
var scoreEl = document.querySelector('#score');
var timerEl = document.querySelector('#timer');
var startHeaderEl = document.querySelector('#startheader');
var startmsgEl = document.querySelector('#startmsg');
var questionEl = document.querySelector('#question');
var answerOne = document.querySelector('#answ1');
var answerTwo = document.querySelector('#answ2');
var answerThree = document.querySelector('#answ3');
var answerFour = document.querySelector('#answ4');
var correctEl = document.querySelector('#correct');
var daFormEl = document.querySelector('#daForm');
var labelEl = document.querySelector('#label');
var initialsEl = document.querySelector('#initials');
var scoreBtnEl = document.querySelector('#scoreBtn');
var goBackEl = document.querySelector('#goBack');
var clearScoresEl = document.querySelector('#clearScores');

//var responsesEltwo = document.querySelectorAll('.responses');

var scoreRay = JSON.parse(localStorage.getItem('scoreRay')) || [];          //Array for player initials and scores
var playTime = 76;                                  //Overall amount of time for the quiz
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
let currentQuestion = 0;  //You had this as let currentQuestion = j;


//This is the transition time between questions after selection
//while(j < questAnsw.length)
//for(j = 0; j < questAnsw.length; i++)

function genQuestion() {
    console.log('CurrentQuestion: ' + (currentQuestion))
    //correctEl.style.visibility = 'hidden';                               //This will hide the answer message before going to next question.
    scoreEl.innerHTML ='Score: ' + score;
    //if(currentQuestion >= 6){
    //    timerGame();
    //}
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
        
        } else {
            console.log('iteration finished')
        }
       
        
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
    console.log('Just added to the Question count');
    if(currentQuestion >= questAnsw.length) {
        j = 0;
        console.log('Current Quetion  Did you answer the last question #: ' + currentQuestion);
        timerGame();   //All questions answered, this goes to the game timer to be stopped
    }

    genQuestion();
};

function checkAnswer(event) {
    console.log('You are in the checkAnswer function');
    console.log(event.target.innerText);
    console.log('This was selected: ' + questAnsw[j][i]);
    if(event.target.innerText === questAnsw[0][3] ||   //Checks the click event to match the correct answers of the array/object. #5 of the object/array holds correct answers.
        event.target.innerText === questAnsw[1][4] || 
        event.target.innerText === questAnsw[2][1] || 
        event.target.innerText === questAnsw[3][2] || 
        event.target.innerText === questAnsw[4][3])
         
    {
        score += 1 + Math.round(.131 * playTime);                   //This will calcutate speed into the score.
        //scoreEl.innerHTML ='Score: ' + score;
        correctEl.style.color = 'blue';
        console.log('This is the Correct Answer');
        correctEl.innerHTML = 'Correct Answer';
        correctEl.style.visibility = 'visible';
    } else { 
        correctEl.style.color = 'red';
        console.log('The Answers is Wrong');
        correctEl.innerHTML = 'Wrong Answer';
        correctEl.style.visibility = 'visible';
        console.log('Penalty for answering wrong');
        playTime-=10;
        //preGame();
        }
     
        // if (playTime <= 0) {
    //     currentQuestion = 0;
    //     preGame();
    // }

    transitionEl();
}

function transitionEl(event) {
    let transitionTime = 2;
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

        if(transitionTime > 0) {
            clearInterval(timerInterval);
            console.log('transitionTime function is at 0');
            scrdisplay();
            // questionEl.style.visibility = 'visible';                    //The following will briefly hide the questions and answers before going to the next question.
            // answerOne.style.visibility = 'visible';
            // answerTwo.style.visibility = 'visible';
            // answerThree.style.visibility = 'visible';
            // answerFour.style.visibility = 'visible';
            // correctEl.style.visibility = 'hidden';
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
        if(playTime > 0 && currentQuestion >= questAnsw.length) {
            clearInterval(timerInterval);
            console.log('Line 234');
            //timerEl.innerHTML = 'You finished with a score of: ' + score;
            preGame();
        }

        if(playTime <= 0 && currentQuestion <= questAnsw.length)  {
           //playTime <= 0 || currentQuestion <= questAnsw.length 
            clearInterval(timerInterval);
            timerEl.innerHTML = 'Time is Up';
            console.log('Line 243');
            preGame();
         }
    }, 1000);
}

function scrdisplay(event) {
    //clearInterval(timerInterval);
    console.log('You are in scrdisplay function')
    startEl.style.visibility = 'hidden';
    startHeaderEl.style.visibility = 'hidden';
    startmsgEl.style.visibility = 'hidden';
    questionEl.style.visibility = 'visible';                    //The following will briefly hide the questions and answers before going to the next question.
    answerOne.style.visibility = 'visible';
    answerTwo.style.visibility = 'visible';
    answerThree.style.visibility = 'visible';
    answerFour.style.visibility = 'visible';
    correctEl.style.visibility = 'hidden';
    genQuestion();

}

function quizInitials() {
    console.log('You are in the Quiz Initials function');
    correctEl.style.visibility = 'visible';
    correctEl.innerHTML = 'Your final score is ' + score;
    labelEl.style.visibility = 'visible';
    labelEl.innerHTML = 'Enter your initials below then click Enter';
    initialsEl.style.visibility = 'visible';
    scoreBtnEl.style.visibility = 'visible';
    
    
    //currentQuestion = 0;

    scoreBtnEl.addEventListener('click', saveScore);
        // initialsEl.addEventListener('submit', function(event) {        //Code example for Course activities
        //     event.preventDefault();                                    //anonmus function within the quizInitials function

        //     var userInt = initialsEl.value.trim();
        //     if(userInt ==='') {
        //         preGame();
        //     } 

        //     scoreRay.push(userInt);
        //     initialsEl.value = '';
        //     saveScore();

        // });

}

function saveScore(event) {
    console.log('You are in the saveScore Function');
    event.preventDefault();
    var userInfo = {
        userInitials: initialsEl.value.trim(),
        quizScore: score 
    }

    if(userInfo.userInitials === '' || userInfo.userInitials === null) {
        console.log('You must enter some initials');
        labelEl.style.color = 'red';
        labelEl.innerHTML = 'You must enter your initials';
        return;
    } 

    highScoreEl.innerHTML = 'High Score: ' + userInfo.userInitials+ ' ' + userInfo.quizScore;


    scoreRay.push(userInfo);
    //document.forms[0].reset;
    labelEl.style.visibility = 'none';                //visibility would not work
    initialsEl.style.visibility = 'none';
    scoreBtnEl.style.visibility = 'none';
    correctEl.style.visibility = 'none';
    //daFormEl.reset();
    console.log(scoreRay);
    console.log('Initials pushed');
    localStorage.setItem('scoreRay', JSON.stringify(scoreRay) );
    console.log('Placed in localstorage');
    
    //goBackEl.style.visibility = 'visible';
    //goBackEl.addEventListener('click',preGame);

    //preGame(); 
    lastThing();   
 }


function preGame() {
    clearScoresEl.style.visibility = 'hidden';
    goBackEl.style.visibility = 'hidden';
    questionEl.style.visibility = 'hidden';                    //The following will briefly hide the questions and answers before going to the next question.
    answerOne.style.visibility = 'hidden';
    answerTwo.style.visibility = 'hidden';
    answerThree.style.visibility = 'hidden';
    answerFour.style.visibility = 'hidden';
    correctEl.style.visibility = 'hidden';
    initialsEl.style.visibility = 'hidden';
    labelEl.style.visibility = 'hidden';
    scoreBtnEl.style.visibility = 'hidden';
    //goBackEl.style.visibility = 'hidden';
    if(playTime >= 0 && currentQuestion >= questAnsw.length) {   //This checks to see if the quiz is over (all questions answered)
        //currentQuestion = 0;
        quizInitials();
     }    
    if(playTime <= 0 || currentQuestion >= questAnsw.length) {
        quizInitials();
    }

    if(playTime <= 0 && currentQuestion >= questAnsw.length) {
        currentQuestion=0;   
        quizInitials();
    }


    
    console.log('You are at preGame Function');
    startHeaderEl.innerHTML = gameTitle;
    startmsgEl.innerHTML = preGameMsg;
    
    
    startEl.addEventListener('click', scrdisplay);  //This starts the quiz.
    startEl.addEventListener('click', timerGame);    //This starts the quiz timer.

}


function lastThing() {
    console.log('you are at lastThing function')
    goBackEl.style.visibility = 'visible';
    clearScoresEl.style.visibility = 'visible';
    goBackEl.addEventListener('click',daRestart);
    clearScoresEl.addEventListener('click', function(event) {
        localStorage.clear();
    });


}

function daRestart() {
    goBackEl.style.visibility = 'hidden';
    clearScoresEl.style.visibility = 'hidden';
    console.log('You are at daRestart Function');
    startEl.style.visibility ='visible';
    startHeaderEl.style.visibility = 'visible';
    startmsgEl.style.visibility = 'visible';
    //startHeaderEl.innerHTML = gameTitle;
    //startmsgEl.innerHTML = preGameMsg;
    //goBackEl.style.visibility = 'hidden';
    questionEl.style.visibility = 'hidden';                    //The following will briefly hide the questions and answers before going to the next question.
    answerOne.style.visibility = 'hidden';
    answerTwo.style.visibility = 'hidden';
    answerThree.style.visibility = 'hidden';
    answerFour.style.visibility = 'hidden';
    correctEl.style.visibility = 'hidden';
    initialsEl.style.visibility = 'hidden';
    labelEl.style.visibility = 'hidden';
    scoreBtnEl.style.visibility = 'hidden';
    //goBackEl.style.visibility = 'hidden';
    
    score = 0;
    currentQuestion = 0;
    playTime = 18;
    initialsEl.value = '';              //blank out the input field for next iterations
    labelEl.style.color = 'black';
    //transitionEl = 0;

    startEl.addEventListener('click', scrdisplay);  //This starts the quiz.
    startEl.addEventListener('click', timerGame);    //This starts the quiz timer.
    //startEl.addEventListener('click', preGame);
}




 
preGame();



