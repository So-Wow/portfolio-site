var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 18; // 5PM
var napTime = lunchTime + 2; // 2PM
var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
var timeEvent = document.getElementById("timeEvent");
var lolCatImage = document.getElementById("lolcat");
if (time == partyTime) {
image = "http://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
messageText = "IZ PARTEE TIME!!";
} else if (time == napTime) {
image = "http://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
messageText = "IZ NAP TIME…";
} else if (time == lunchTime) {
image = "http://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
messageText = "IZ NOM NOM NOM TIME!!";
} else if (time == wakeUpTime) {
messageText = "IZ TIME TO GETTUP.";
image = "http://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
} else if (time < noon) {
messageText = "Good morning!";
} else if (time > evening) {
messageText = "Good Evening!";
} else {
messageText = "Good afternoon!";
}
timeEvent.innerText = messageText;
lolCatImage.src = image;
//——– Clock is below ———
var updateClock = function() {
var showCurrentTime = function()
{
// display the string on the webpage
var clock = document.getElementById('clock');

var currentTime = new Date();

var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
var meridian = "AM";

// Set hours
if (hours >= noon)
{
	meridian = "PM";
}
if (hours > noon)
{
	hours = hours - 12;
}

// Set Minutes
if (minutes < 10)
{
	minutes = "0" + minutes;
}

// Set Seconds
if (seconds < 10)
{
	seconds = "0" + seconds;
}

// put together the string that displays the time
var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

clock.innerText = clockTime;
};
showCurrentTime();
};
updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);
//——- End Clock ———
//—— Party Time?——–
var partyEvent = function() {
if (isPartyTime == false) {
isPartyTime = true;
	time = partyTime;
	partyTimeButton.innerText = "Party Over";   partyTimeButton.style.backgroundColor = '#0A8DAB';
	// text in the button should read "Party Over"

	// color of the button should be "#0A8DAB" (bonus!)
}
else {
isPartyTime = false;
	time = new Date().getHours();
	partyTimeButton.innerText = "PARTY TIME!";
	partyTimeButton.style.backgroundColor = "#222";
}
};
partyTimeButton.addEventListener("click", partyEvent);
var wakeUpEvent = function () {
wakeUpTime = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
var lunchEvent = function () {
lunchTime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener('change', lunchEvent);
var napEvent = function () {
napTime = napTimeSelector.value;
};
napTimeSelector.addEventListener('change', napEvent);
