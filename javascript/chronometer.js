
// var time = 0;
// var running = 0;

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

// function reset() {
//   running = 0;
//   time = 0;
//   document.getElementById("startPause").innerHTML = "Start";
// }

// function increment() {
//   if (running == 1) {
//    setTimeout(function() {
//     time++;
//     var seconds = Math.floor(time/10/60);
//     var minutes = Math.floor(time/10/60);
//      var tenth = time % 10;
//      if (minutes < 10); {
//        minutes = "0" + minutes;
//      }  if (seconds < 10);
//     seconds = "0" + seconds;
//     increment();
//   document.getElementById("output").innerHTML = minutes + ":" + seconds + ":" + "0" + tenth;
  
//    }, 100);
//   }
//   }

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


// function timer() {
//   currentTime = setTimeout(start, 1000);
// }
// timer();

// function start() {
//   seconds++;
//   if (seconds >= 60) {
//     seconds = 0;
//     minutes++;
//     if (minutes >= 20) {
//         minutes = 0;
//     }
//   }
// }


// // Constructor
// function Chronometer() {

// this.currentTime = 0;
// this.intervalId = 0;

// }

// // The setInterval will be assigned to our intervalId property,
// //  this way we will be able to clear it later on.

// Chronometer.prototype.startClick = function () {
//     this.startClick = function() {
//     // var seconds = 0;
//     intervalId = setInterval(function(){
//     currentTime++; }, 1000);

//      }

    //  var myChronometer = {
    //    seconds: 0,
    //    minuts: 0,
    //    intervalId: 0,
    //    startClick: function() {
    //          this.intervalId = setInterval(function() {
    //            this.seconds++;
    //          }.bind(this),1000);
    //    },
    //    setMinutes: function() {
    //      this.seconds++
    //    },

    //  }
  
    // console.log(seconds);
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
