$(document).ready(function()
{
var answerBallImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png";


$("#answer").hide();

var magic8ball = {};
magic8ball.answerList = ["Yes", "No", "Maybe", "Of course not!", "Unlikely"];

magic8ball.askQuestion = function(question)
{
$("#8ball").attr("src", answerBallImage);
$("#answer").fadeIn(4000);
randomNumber = Math.random();
randomNumberArray = randomNumber * this.answerList.length;
randomIndex = Math.floor(randomNumberArray);
randomAnswer = this.answerList[randomIndex];

$("#answer").text( randomAnswer );
};

var clickMe =   function()
{
$("#answer").hide();
var question = prompt("ASK ME YES/NO QUESTION, HUMAN.");

$("#8ball").effect( "shake" );
magic8ball.askQuestion(question);
};

setTimeout (function () {
$("#questionButton").click( clickMe );
}, 1000);

});
