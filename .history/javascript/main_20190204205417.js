// // var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
// var minDec      = document.getElementById('minDec');
// var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
// var secUni      = document.getElementById('secUni');
// var milDec      = document.getElementById('milDec');
// var milUni      = document.getElementById('milUni');

var currentTime = 0;
var intervalId = -1;
var minutes = Math.floor((minutes % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((seconds % (1000 * 60)) / 1000);


// function startPause() {
//   if (running == 0) {
//     running = 1;
//     increment();
//     document.getElementById("startPause").innerHTML = "Pause";
//   } else {
//     running = 0;
//     document.getElementById("startPause").innerHTML = "Resume";
//   }
// }



btnLeft.addEventListener("click", function(event) {
  if (intervalId == -1) { //start if pause
    intervalId = setInterval(function() {
      currentTime++;
      secDec.innerHTML = currentTime;
      if (currentTime >= 60) {
        intervalId = -1;
        currentTime++;
      // } if (currentTime >= 60) {
      //   // minDec.innerHTML = currentTime;
      //   clearInterval(intervalId);
      // }
      console.log(currentTime);
      // btnLeft.innerHTML = "START";
    }, 1000);
  } else { //pause if started
      intervalId = -1;
      btnLeft.innerHTML = "PAUSE";
  }
 
});


btnRight.addEventListener("click", function(e) {
  e.preventDefault();
  // clearInterval(intervalId);
   reset();
})

function reset() {
  clearInterval(intervalId);
  btnLeft.innerHTML = "START";
}



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