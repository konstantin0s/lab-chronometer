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
var intervalId = 0;
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
  if (intervalId == 0) { //start if pause
    intervalId = setInterval(function() {
      currentTime++;
      secDec.innerHTML = currentTime + "0";
      if (currentTime >= 100) {}
      console.log(currentTime);
      btnLeft.innerHTML = "PAUSE";
    }, 1000);
  } else { //pause if started
      clearInterval(intervalId);
      intervalId = 0;
      btnLeft.innerHTML = "START";
  }
 
});

function reset() {

  // currentTime = 0;
  // secDec.innerHTML = currentTime;
  clearInterval(intervalId);
  intervalId = -1;
  console.log(currentTime);
  btnLeft.innerHTML = "START";
  
}

btnRight.addEventListener("click", function() {
  // clearInterval(intervalId); // resets
   reset();
})



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
