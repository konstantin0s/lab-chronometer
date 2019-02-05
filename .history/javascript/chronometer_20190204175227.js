
var currentTime = 0;
var running;

function startPause() {
  if (running == 0) {
    running = 1;
    increment();
    document.getElementById().innerHTML = "Pausse";
  } else {
    running = 0;
    document.getElementById().innerHTML = "Resume";
  }
}

function reset() {
  running = 0;
  currentTime = 0;
  document.getElementById().innerHTML = "Start";
}

function increment() {
   setTimeout(function() {
    currentTime++;
    var seconds = 0;
    var minutes = 0;
   }, 1000);


function timer() {
  currentTime = setTimeout(start, 1000);
}
timer();

function start() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 20) {
        minutes = 0;
    }
  }
}


// // Constructor
// function Chronometer() {

// this.currentTime = 0;
// this.intervalId = currentTime;

// }

// // The setInterval will be assigned to our intervalId property,
// //  this way we will be able to clear it later on.

// Chronometer.prototype.startClick = function () {
//     // this.startClick = function() {
//     // var seconds = 0;
//     currentTime = setInterval(function(){
//     currentTime++; }, 1000);

//     //  }
  
//     // console.log(seconds);
// };

// Chronometer.prototype.setMinutes = function () {
  
// };

// Chronometer.prototype.setSeconds = function () {
  
// };

// Chronometer.prototype.twoDigitsNumber = function () {
  
// };

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
