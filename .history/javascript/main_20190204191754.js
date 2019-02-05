// // var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
// var minDec      = document.getElementById('minDec');
// var minUni      = document.getElementById('minUni');
// var secDec      = document.getElementById('secDec');
// var secUni      = document.getElementById('secUni');
// var milDec      = document.getElementById('milDec');
// var milUni      = document.getElementById('milUni');

var currentTime = 0;
var intervalId = -1;
var output = document.getElementById("output");

btnLeft.addEventListener("click", function(event) {
  if (intervalId == -1) {
    intervalId = setInterval(function() {
      currentTime++;
      output.innerHTML = currentTime;
    }, 1000);
  } else {

  }
  clearInterval(intervalId);
 
});




// function printTime() {

// }

// function printMinutes() {

// }

// function printSeconds() {

// }

// function printMilliseconds() {

// }

// function printSplit() {

// }

// function clearSplits() {

// }

// function setStopBtn() {

// }

// function setSplitBtn() {

// }

// function setStartBtn() {

// }

// function setResetBtn() {

// }

// // Start/Stop Button
// btnLeft.addEventListener('click', function () {

// });

// // Reset/Split Button
// btnRight.addEventListener('click', function () {

// });
