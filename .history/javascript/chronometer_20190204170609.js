// Constructor
function Chronometer() {

this.currentTime =0;
this.intervalId = undefined;
this.startClick = function() {
var seconds = 0;
seconds = setInterval(function(){ seconds++; }, 1000);
  return seconds;
  console.log(seconds);
}
this.start = function() {
this.intervalId = seconds;
}
}

Chronometer.prototype.startClick = function () {

};

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