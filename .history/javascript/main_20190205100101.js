// var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

var currentTime = 0; 
var intervalId = 0;  //0stop; 1 running.
var seconds= 0;
var minutes = 0;
// var minutes = Math.floor((minutes % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((seconds % (1000 * 60)) / 1000);

// function start() {
//   status = 1;
//   timer();
// }

// function stop() {
//   currentTime++

//   if (currentTime / 60 == 1) {
//     // setInterval(function() {
      
//     // })
//      currentTime = 0;
//      milUni.innerHTML = currentTime++;
//      if (milDec / 60 == 1) {
//       currentTime = 0;
//       milDec.innerHTML = currentTime++;
//      }
//      if (secUni / 60 == 1) {
//       currentTime = 0;
//       secUni.innerHTML = currentTime++;
//      } if (secDec / 60 == 1) {
//       currentTime = 0;
//       secDec.innerHTML = currentTime++;
//      } if (minUni / 60 == 1) {
//       currentTime = 0;
//       minUni.innerHTML = currentTime++;
//      } if (minDec / 60 == 1) {
//       currentTime = 0;
//       minDec.innerHTML = currentTime++;
//      } 
//   }
//   //
// }

// window.setInterval(stop, 1000);

// function reset() {
// status = 0;
// intervalId = 0;
// }

// function timer() {
//   if (status == 1) {
//     var intervalId = setInterval(function() {
//       currentTime++;
//       minDec =  Math.floor(intervalId/100/60);
//       secDec =  Math.floor(intervalId/100);
//       milDec = intervalId % 100;
  
//        if (minDec < 10) {
//         minDec = "0" + minDec;
//        } 
//        if (secDec >= 60) {
//         secDec = secDec % 60;
//        } 
//        if(secDec < 10) {
//         secDec = "0" + secDec;
//        }
              
//        minDec.innerHTML = minDec;
//        secDec.innerHTML = secDec;
//        milDec.innerHTML = milDec;
         
//     }, 10)
//   }
// }


 btnLeft.addEventListener("click", function(event) {
  if (intervalId == 0) { //start if pause
    intervalId = setInterval(function() {
      seconds++;
      secDec.innerHTML = seconds;
      if (seconds >= 60) {

         minDec.innerHTML = minDec + 1;
         if (minDec >= 60) {
          minDec = 0;
         }
      }
      console.log(seconds);
      btnLeft.innerHTML = "PAUSE";
    }, 1000);
  } else { //pause if started
      clearInterval(intervalId);
      btnLeft.innerHTML = "START";
  }
 
});

// function reset() {

//   // currentTime = 0;
//   // secDec.innerHTML = currentTime;
//   clearInterval(intervalId);
//   intervalId = 0;
//   console.log(currentTime);
//   btnLeft.innerHTML = "START";
  
// }

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
