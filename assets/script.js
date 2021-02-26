var startEl = document.getElementById('start');
var answerEl =document.getElementsByClassName('answers');
//var questionEl = document.getElementById('question');
//var answerOne = document.querySelector('.answer1');
var elScore;
var questArray = ['Here is question number one(1)?', 'Here is question number two(2)?', 'Here is question number three(3)?','Here is question number four(4)?', 'Here is question number five(5)?' ];
var answ1Array = ['a. quest1', 'a. quest2','a. quest3','a. quest4','a. quest5'];
var answ2Array = ['b. quest1', 'b. quest2','b. quest3','b. quest4','b. quest5'];
var answ3Array = ['c. quest1', 'c. quest2','c. quest3','c. quest4','c. quest5'];
var answ4Array = ['d. quest1', 'd. quest2','d. quest3','d. quest4','d. quest5'];
var correctArray = ['c1','a2','b3','d3','a5'];

var elTimer;
var elHighScore;

function generateQuestion() {
    for(let i = 0; i <questArray.length; i++) {
    document.getElementById('question').textContent = questArray[i];
    document.getElementById('answ1').textContent = answ1Array[i];
    document.getElementById('answ2').textContent = answ2Array[i];
    document.getElementById('answ3').textContent = answ3Array[i];
    document.getElementById('answ4').textContent = answ4Array[i];
    
    answerEl.addEventListener('click');
    if('answer' === correctArray[i]) {
        console.log('The answer is correct');
    } else {
        console.log('The answer is wrong');
        }
    }

};

generateQuestion();


//startEl.addEventListener('click', postQuest);