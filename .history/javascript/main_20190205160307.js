// var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var addSplits   = document.getElementById('splits');
var recordBtn   = document.getElementById('btn split');


var currentTime = 0; //takes split time..
var intervalId = 0;  //0stop; 1 running.
var seconds= 0;
var minutes = 0;


function twoDigits(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}

// recordBtn.addEventListener("click", function() {
//           var li = document.createElement("li");
//           li.appendChild(currentTime);
//            splits.appendChild(li);
// });


var intervalRef = null;

//add 00 on the html before starts counting.
secDec.innerHTML = "0" + seconds;
minDec.innerHTML = "0" + minutes;

 btnLeft.addEventListener("click", function(event) {
      if (intervalId == 0) { //start if pause
         intervalRef = setInterval(function() {
         intervalId = 1;
         seconds++;
         secDec.innerHTML = twoDigits(seconds);
         btnLeft.innerHTML = "STOP";
         btnLeft.setAttribute("class", "btn stop");
         btnRight.setAttribute("class", "btn split");
         btnRight.innerHTML = "SPLIT"; 
         $(document).on('click','.split',function(){
          var li = document.createElement("li");
          li.appendChild(currentTime);
          splits.appendChild(li);      
        });

      if (seconds === 60) {
         seconds = 0;
         minutes++;
         minDec.innerText = twoDigits(minutes);
         secDec.innerText = "0" + seconds;
      if (minDec === 60) {
         minutes = 0;
         }
      }
 
    }, 100);
  }  else { //pause if started
       clearInterval(intervalRef);  //pause chronometer
       btnLeft.innerHTML = "START";
       btnRight.innerHTML = "RESET";
       btnLeft.setAttribute("class", "btn start");
       btnRight.setAttribute("class", "btn reset");
       intervalId = 0; // continue chronometer from it's pause point.
  }
});

btnRight.addEventListener("click", function() {
  reset();
});

function reset() {
    clearInterval(intervalRef);
    intervalId = 0;
    seconds = 0;
    minutes = 0;
    btnLeft.innerHTML = "START";
    // sets values of them to 00 after reset
    minDec.innerHTML = "0" + minutes;  
    secDec.innerHTML = "0" + seconds;
}


