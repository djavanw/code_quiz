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
var labelEl = document.querySelector('#label');
var initialsEl = document.querySelector('#initials');
var scoreBtnEl = document.querySelector('#scoreBtn');
var goBackEl = document.querySelector('#goBack');
var clearScoresEl = document.querySelector('#clearScores');
var userHiScore = document.querySelector('#daHsView');

function unCover() {
    questionEl.style.visibility = 'visible';                    //Repeated code used to hide and unhide text
    answerOne.style.visibility = 'visible';                     
    answerTwo.style.visibility = 'visible';                     //The following will briefly hide the questions and answers before going to the next question.
    answerThree.style.visibility = 'visible';
    answerFour.style.visibility = 'visible';
    correctEl.style.visibility = 'hidden';                      //This will hide the answer message before going to next question.
    console.log('bottom of unCover');
    return;
}

function coverIT() {
    questionEl.style.visibility = 'hidden';                    //The following will briefly hide the questions and answers before going to the next question.
    answerOne.style.visibility = 'hidden';
    answerTwo.style.visibility = 'hidden';
    answerThree.style.visibility = 'hidden';
    answerFour.style.visibility = 'hidden';
    console.log('bottom of coverIT');
    return;
    } 

function sevenHide() {
    correctEl.style.visibility = 'hidden';
    scoreBtnEl.style.visibility = 'hidden';
    labelEl.style.visibility = 'hidden';
    initialsEl.style.visibility = 'hidden';
    goBackEl.style.visibility = 'hidden';
    highScoreEl.style.visibility = 'hidden';
    clearScoresEl.style.visibility = 'hidden';
    return;
}

function fourHide() {
    correctEl.style.visibility = 'hidden';
    labelEl.style.visibility = 'hidden';                //visibility would not work
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


var scoreRay = JSON.parse(localStorage.getItem('scoreRay')) || [];          //Array for player initials and scores will check local storage for content to add to or make new array.
var playTime = 76;                                                          //Overall amount of time for the quiz. Global use in other functions.
var score = 0;
var transTime;                                                          //Time for questions to transition after click.  Global use in other functions.

var j = 0;                                                                  //Variables for genQuestion function.  Made Global to reference in other functions.
var i;                                                                      //j and i are used for the loop count to generate the questions.
var currentQuestion = 0;

var questAnsw = [                                                           //Object/array for questions.  Index[5] contains the answer.
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

function preGame() {
    // highScoreEl.style.visibility = 'hidden';
    // clearScoresEl.style.visibility = 'hidden';
    // goBackEl.style.visibility = 'hidden';
    // initialsEl.style.visibility = 'hidden';
    // labelEl.style.visibility = 'hidden';
    // scoreBtnEl.style.visibility = 'hidden';
    // correctEl.style.visibility = 'hidden';
    sevenHide();       
    coverIT();

    // questionEl.style.visibility = 'hidden';                    //The following will briefly hide the questions and answers before going to the next question.
    // answerOne.style.visibility = 'hidden';
    // answerTwo.style.visibility = 'hidden';
    // answerThree.style.visibility = 'hidden';
    // answerFour.style.visibility = 'hidden';
        
    // if(playTime >= 0 && currentQuestion >= questAnsw.length) {   //This checks to see if the quiz is over (all questions answered)
    //    quizInitials();
    //  }    
    // if(playTime <= 0 || currentQuestion >= questAnsw.length) {    ///Taken out at 2145
    //     quizInitials();
    // }

    // if(playTime <= 0 && currentQuestion >= questAnsw.length) {
    //     currentQuestion=0;   
    //     quizInitials();
    // }
    
    console.log('You are at preGame Function');
    startHeaderEl.innerHTML = gameTitle;
    startmsgEl.innerHTML = preGameMsg;
    
    startEl.addEventListener('click', scrdisplay);                  //This starts the quiz.
    startEl.addEventListener('click', timerGame);                   //This starts the quiz timer.

}


function scrdisplay() {
    // startEl.style.visibility = 'hidden';
    // startHeaderEl.style.visibility = 'hidden';
    // startmsgEl.style.visibility = 'hidden';
    console.log('You are in scrdisplay function')
    threeHide();
    unCover();
    // questionEl.style.visibility = 'visible';                       //The following will briefly hide the questions and answers before going to the next question.
    // answerOne.style.visibility = 'visible';
    // answerTwo.style.visibility = 'visible';
    // answerThree.style.visibility = 'visible';
    // answerFour.style.visibility = 'visible';
    // correctEl.style.visibility = 'hidden';
    genQuestion();
}

function timerGame(event) {                                            //This is the main quiz time and start at first click.
    console.log('This timer is going');
    console.log(event);
    
    var gameInterval = setInterval(function(){
        playTime--;
        timerEl.innerHTML = 'Time: ' + playTime;
        console.log('question: ' + currentQuestion);
        console.log('playTime: ' + playTime);
        if(
            (playTime >= 0 && currentQuestion > questAnsw.length) ||
            (playTime < 0 && currentQuestion <= questAnsw.length)  ||
            (playTime < 0 && currentQuestion > questAnsw.length)  ||
            (playTime <= 0))
        {
            clearInterval(gameInterval);
            coverIT();
            console.log('Clear playTime');
            
            //timerEl.innerHTML = 'You finished with a score of: ' + score;
            quizInitials();
        }

        // if(playTime < 0 && currentQuestion <= questAnsw.length)  {
        //     clearInterval(gameInterval);
        //     timerEl.innerHTML = 'Time is Up';
        //     console.log('Ran out of time');
        //     quizInitials();
        //   }
    }, 1000);
}

function genQuestion() {
    currentQuestion++;
    console.log('CurrentQuestion: ' + (currentQuestion))
    //correctEl.style.visibility = 'hidden';                               //This will hide the answer message before going to next question.
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

        } else if (i === 4) {
            answerFour.innerHTML = questAnsw[j][i];
            console.log(questAnsw[j][i])
        } 
        // else {
        //     console.log('iteration finished')
        // }
        
        console.log('Loop finished ' + i);
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
    console.log('You are in the checkAnswer function');
    console.log(event.target.innerText);
    console.log('This was selected: ' + questAnsw[j][i]);
    if(event.target.innerText === questAnsw[0][3] ||   //Checks the click event to match the correct answers of the array/object. #5 of the object/array holds correct answers.
        event.target.innerText === questAnsw[1][4] || 
        event.target.innerText === questAnsw[2][1] || 
        event.target.innerText === questAnsw[3][2] || 
        event.target.innerText === questAnsw[4][3]) {   

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
        // currentQuestion = 0;
        // preGame();
    // }
    transitionEl();
    //additionEl();
}

function transitionEl(event) {
    transTime = 2;
    // if(playTime <= 0) {
    //     quizInitials();
    // }
    console.log('Made it to the Question transition timer ' + transTime)
    var transInterval = setInterval(function(){
  
        transTime--;
        coverIT();
        // questionEl.style.visibility = 'hidden';                    //The following will briefly hide the questions and answers before going to the next question.
        // answerOne.style.visibility = 'hidden';
        // answerTwo.style.visibility = 'hidden';
        // answerThree.style.visibility = 'hidden';
        // answerFour.style.visibility = 'hidden';
               
        if(
            (transTime <= 0 || playTime <= 0) ||
            (transTime <= 0 && playTime <= 0) ||
            (transTime >= 0 && playTime <= 0)
          ) {
            clearInterval(transInterval);
            unCover();
            console.log('XXXX XXXtransitionTime ' + transTime);
            // questionEl.style.visibility = 'visible';                    //The following will briefly hide the questions and answers before going to the next question.
            // answerOne.style.visibility = 'visible';                     //This will hide the answer message before going to next question.
            // answerTwo.style.visibility = 'visible';
            // answerThree.style.visibility = 'visible';
            // answerFour.style.visibility = 'visible';
            // correctEl.style.visibility = 'hidden';
           
        additionEl();}
    }, 1000);
}

function additionEl(){                                                  //Keeps count for the question array and the currentQuestion
    console.log('You are in the additionEl function');
    j++;
    //currentQuestion++;
    console.log('Just added to the Question count');
    if(currentQuestion >= questAnsw.length) {
        j = 0;
        console.log(j);
        timerGame();                                                     //All questions answered, this goes to the game timer to be stopped
    }
    
    genQuestion();
};


function quizInitials() {
    fourSee();
    console.log('You are in the Quiz Initials function');
    // correctEl.style.visibility = 'visible';
    correctEl.innerHTML = 'Your final score is ' + score;
    // labelEl.style.visibility = 'visible';
    labelEl.innerHTML = 'Enter your initials below then click Enter';
    // initialsEl.style.visibility = 'visible';
    // scoreBtnEl.style.visibility = 'visible';
    
    scoreBtnEl.addEventListener('click', saveScore);
    if(playTime <= 0) {
        coverIT();
    }

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
    //questionEl.style.display = 'block';

    //questionEl.style.visibility = 'hidden';
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

    userHiScore.innerHTML = 'Last Score: ' + userInfo.userInitials + ' ' + userInfo.quizScore;

    scoreRay.push(userInfo);
    //document.forms[0].reset;
    fourHide();
    // labelEl.style.visibility = 'hidden';                
    // initialsEl.style.visibility = 'hidden';
    // scoreBtnEl.style.visibility = 'hidden';
    // correctEl.style.visibility = 'hidden';
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

 function lastThing() {
    console.log('you are at lastThing function')
    goBackEl.style.visibility = 'visible';
    highScoreEl.style.visibility = 'visible';
    clearScoresEl.style.visibility = 'visible';
    
    goBackEl.addEventListener('click', daRestart);
    clearScoresEl.addEventListener('click', function(event) {
        localStorage.clear();
    });
}

function daRestart() {
    goBackEl.style.visibility = 'hidden';
    highScoreEl.style.visibility = 'hidden';
    clearScoresEl.style.visibility = 'hidden';
    console.log('You are at daRestart Function');
    
    threeSee();
    // startEl.style.visibility ='visible';
    // startHeaderEl.style.visibility = 'visible';
    // startmsgEl.style.visibility = 'visible';
    // startHeaderEl.innerHTML = gameTitle;
    // startmsgEl.innerHTML = preGameMsg;
    //goBackEl.style.visibility = 'hidden';
    score = 0;
    currentQuestion = 0;
    j=0;
    playTime = 76;
    initialsEl.value = '';              //blank out the input field for next iterations
    labelEl.style.color = 'black';

      
    // questionEl.style.visibility = 'hidden';                    //The following will briefly hide the questions and answers before going to the next question.
    // answerOne.style.visibility = 'hidden';
    // answerTwo.style.visibility = 'hidden';
    // answerThree.style.visibility = 'hidden';
    // answerFour.style.visibility = 'hidden';
    fourHide();
    // correctEl.style.visibility = 'hidden';
    // initialsEl.style.visibility = 'hidden';
    // labelEl.style.visibility = 'hidden';
    // scoreBtnEl.style.visibility = 'hidden';
    //goBackEl.style.visibility = 'hidden';
        
    //transitionEl = 0;
    
    startEl.addEventListener('click', scrdisplay);              //This starts the quiz.
    startEl.addEventListener('click', timerGame);               //This starts the quiz timer.
   
}


preGame();
