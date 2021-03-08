var gameTitle = 'Coding Quiz Challenge';
var preGameMsg = 'Try to answer the following JavaScript coding related questions within the given time limit. Incorrect answers will deduct 10 seconds from the overall time.  Good Luck!!!'
var startEl = document.querySelector('#start');
var hsBtnEl = document.querySelector('#hsBtn');
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
var labelEl = document.querySelector('#label');
var initialsEl = document.querySelector('#initials');
var scoreBtnEl = document.querySelector('#scoreBtn');
var goBackEl = document.querySelector('#goBack');
var clearScoresEl = document.querySelector('#clearScores');
var lastScoreEl = document.querySelector('#lastScore');
var listHi = document.querySelector('.listYes');
var listChild = listHi.children;
                                                             
function unCover() {
    questionEl.style.visibility = 'visible';                    //Repeated code used to hide and unhide text
    answerOne.style.visibility = 'visible';                     
    answerTwo.style.visibility = 'visible';                     //The following will briefly hide the questions and answers before going to the next question.
    answerThree.style.visibility = 'visible';
    answerFour.style.visibility = 'visible';
    correctEl.style.visibility = 'hidden';                      //This will hide the answer message before going to next question.
    return;
}

function coverIT() {
    questionEl.style.visibility = 'hidden';                    //The following will briefly hide the questions and answers before going to the next question.
    answerOne.style.visibility = 'hidden';
    answerTwo.style.visibility = 'hidden';
    answerThree.style.visibility = 'hidden';
    answerFour.style.visibility = 'hidden';
    return;
    } 

function sevenHide() {                                          //Below is a block of functions to turn elements off and on.
    correctEl.style.visibility = 'hidden';
    scoreBtnEl.style.visibility = 'hidden';
    labelEl.style.visibility = 'hidden';
    initialsEl.style.visibility = 'hidden';
    goBackEl.style.visibility = 'hidden';
    // highScoreEl.style.display = 'block';
    clearScoresEl.style.visibility = 'hidden';
    return;
}

function fourHide() {
    correctEl.style.visibility = 'hidden';
    labelEl.style.visibility = 'hidden';                
    initialsEl.style.visibility = 'hidden';
    scoreBtnEl.style.visibility = 'hidden';
    return;
}

function fourSee() {
    correctEl.style.visibility = 'visible';
    labelEl.style.visibility = 'visible';
    initialsEl.style.visibility = 'visible';
    scoreBtnEl.style.visibility = 'visible';
    return;
}

function threeHide() {
    startEl.style.visibility = 'hidden';
    startHeaderEl.style.visibility = 'hidden';
    startmsgEl.style.visibility = 'hidden';
    return;
}

function threeSee() {
    startEl.style.visibility = 'visible';
    startHeaderEl.style.visibility = 'visible';
    startmsgEl.style.visibility = 'visible';
    return;
}

                                                                                    //Array for player initials and scores will check local storage for content to add to or make new array.
var playTime = 76;                                                                      //Overall amount of time for the quiz. Global use in other functions.
var score = 0;
var transTime;                                                                          //Time for questions to transition after click.  Global use in other functions.
var j = 0;                                                                               //Variables for genQuestion function.  Made Global to reference in other functions.
var i;                                                                                   //j and i are used for the loop count to generate the questions.
var currentQuestion = 0;
var questAnsw = [                                                                        //Object/array for questions.  Index[5] contains the answer.
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

function preGame() {                                                                //Event listeners for the beginning of the quiz.
    sevenHide();       
    coverIT();
    hsBtnEl.style.display ='none';
    listHi.style.display = 'none';
    startHeaderEl.innerHTML = gameTitle;
    startmsgEl.innerHTML = preGameMsg;
    startEl.addEventListener('click', scrdisplay);                                  //This starts the quiz.
    startEl.addEventListener('click', timerGame);                                   //This starts the quiz timer.
}

function scrdisplay() {                                                             //Turns elements on and off for visibility.
    threeHide();
    unCover();
    genQuestion();
}

function timerGame(event) {                                                         //This is the main quiz time and start at first click.
    var gameInterval = setInterval(function(){
        playTime--;
        timerEl.innerHTML = 'Time: ' + playTime;
        if(
            (playTime >= 0 && currentQuestion > questAnsw.length) ||
            (playTime < 0 && currentQuestion <= questAnsw.length)  ||
            (playTime < 0 && currentQuestion > questAnsw.length)  ||
            (playTime <= 0))
        {
            clearInterval(gameInterval);
            coverIT();
            quizInitials();
        }
    }, 1000);
}

function genQuestion() {
    currentQuestion++;
    for(i = 0; i < questAnsw.length; i++)  {
        if(i === 0) {
            questionEl.innerHTML = questAnsw[j][i];
        } else if(i === 1) {
            answerOne.textContent = questAnsw[j][i];
        } else if(i === 2) {
            answerTwo.innerHTML = questAnsw[j][i];
        } else if(i === 3) {
            answerThree.innerHTML = questAnsw[j][i];
        } else if (i === 4) {
            answerFour.innerHTML = questAnsw[j][i];
        } 
        if(playTime <= 0) {
            coverIT();
            quizInitials();
        }
          
        answerOne.addEventListener('click', checkAnswer); 
        answerTwo.addEventListener('click', checkAnswer);
        answerThree.addEventListener('click', checkAnswer);
        answerFour.addEventListener('click', checkAnswer);
    }   
}

function checkAnswer(event) {
    if(event.target.innerText === questAnsw[0][3] ||                            //Checks the click event to match the correct answers of the array/object. #5 of the object/array holds correct answers.
        event.target.innerText === questAnsw[1][4] || 
        event.target.innerText === questAnsw[2][1] || 
        event.target.innerText === questAnsw[3][2] || 
        event.target.innerText === questAnsw[4][3] ){  
        score += 1 + Math.round(.131 * playTime);                                   //This will calcutate speed into the score.
        correctEl.style.color = 'blue';
        correctEl.innerHTML = 'Correct Answer';
        correctEl.style.visibility = 'visible';
    } else { 
        correctEl.style.color = 'red';
        correctEl.innerHTML = 'Wrong Answer';
        correctEl.style.visibility = 'visible';
        playTime-=10;
        }
    transitionEl();
}

function transitionEl(event) {                                      //Transition time between questions being answered.
    transTime = 2;
    var transInterval = setInterval(function(){
        transTime--;
        coverIT();
        if(
            (transTime <= 0 || playTime <= 0) ||
            (transTime <= 0 && playTime <= 0) ||
            (transTime >= 0 && playTime <= 0)
          ) {
            clearInterval(transInterval);
            unCover();

            additionEl();}
    }, 1000);
}

function additionEl(){                                                  //Keeps count for the question array and the currentQuestion
    j++;                                                                //Loop counter for the question count.
    if(currentQuestion >= questAnsw.length) {
        j = 0;
        timerGame();                                                     //All questions answered, this goes to the game timer to be stopped
    }
    genQuestion();
};

function quizInitials() {
    fourSee();
    
    if(playTime <= 0) {
        coverIT();
    }

    correctEl.innerHTML = 'Your final score is ' + score;
    labelEl.innerHTML = 'Enter your initials below then click Enter';
    scoreBtnEl.addEventListener('click', saveScore);
    
}

function saveScore() {
    scoreBtnEl.style.visibility = 'hidden';
     var userInfo = {
        userInitials: initialsEl.value.trim(),
        quizScore: score 
    }
    // userInfo.quizScore = score;

    var scoreRay = JSON.parse(localStorage.getItem('scoreRay') || '[]');
    scoreRay.push(userInfo);
    localStorage.setItem('scoreRay', JSON.stringify(scoreRay));
    
    lastScoreEl.innerHTML = 'Last Score: ' + userInfo.userInitials + ' ' + userInfo.quizScore;
   
    goBackEl.style.visibility = 'visible';
    hsBtnEl.style.display = 'block';
    clearScoresEl.style.visibility = 'visible';     
    userInfo.userInitials = '';                                                         
    
          
    lastThing();   
 }

 function lastThing() {
    goBackEl.addEventListener('click', daRestart);
    
    hsBtnEl.addEventListener('click', seeHighScore);                                      //High scores will show when the High Score button is clicked.
   
    clearScoresEl.addEventListener('click', function(event) {
        localStorage.clear();
    });
}

function seeHighScore(event) {
    listHi.style.display = 'block';
    var currentScore = JSON.parse(localStorage.getItem('scoreRay')) || '[]';
    currentScore.sort((value1, value2) => value2.quizScore - value1.quizScore);
    
    for(let k = 0; k < currentScore.length; k++){                                       //revised loop with append
    var li = document.createElement('li');
    li.textContent = currentScore[k].quizScore + '___ ' + currentScore[k].userInitials;
    listHi.append(li);
    // currentScore.splice(7);                                                             //Will give only 7 scores on the screen
    }
}

function daRestart(event) {
    hsBtnEl.style.display = 'none';
    listHi.style.display = 'none';
    goBackEl.style.visibility = 'hidden';
    clearScoresEl.style.visibility = 'hidden';
    threeSee();
    score = 0;
    currentQuestion = 0;
    j=0;
    playTime = 76;
                                                               
    labelEl.style.color = 'black';
    fourHide();
    startEl.addEventListener('click', scrdisplay);              //This starts the quiz.
    startEl.addEventListener('click', timerGame);               //This starts the quiz timer.
   
}

preGame();

