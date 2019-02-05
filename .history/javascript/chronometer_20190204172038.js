// Constructor
function Chronometer() {

this.currentTime = 0;
this.intervalId = undefined;

}

// The setInterval will be assigned to our intervalId property,
//  this way we will be able to clear it later on.

Chronometer.prototype.startClick = function () {
    // this.startClick = function() {
    var seconds = 0;
    seconds = setInterval(function(){
    seconds++; }, 1000);
    return seconds;
    //  }
  
    console.log(seconds);
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
