(function () {

  // let chronometer = new Chronometer();
  let btnLeft = document.getElementById('btnLeft');
  let btnRight = document.getElementById('btnRight');
  let minDec = document.getElementById('minDec');
  let minUni = document.getElementById('minUni');
  let secDec = document.getElementById('secDec');
  let secUni = document.getElementById('secUni');
  let milDec = document.getElementById('milDec');
  let milUni = document.getElementById('milUni');
  let addSplits = document.getElementById('splits');
  let recordBtn = document.getElementById('btn split');
  let listItem = document.getElementsByClassName('list-item');


  let currentTime = 0; //takes split time..
  let intervalId = 0;  //0stop; 1 running.
  let seconds = 0;
  let minutes = 0;
  let miliseconds = 0;
  let intervalRef = null;

  //add 00 on the html before starts counting.
  function startWithZero() {
    secDec.innerHTML = "0" + seconds;
    minDec.innerHTML = "0" + minutes;
    milDec.innerHTML = miliseconds;
  }


  function twoDigits(number) {
    if (number < 10) {
      return "0" + number;
    }
    return number;
  }

  startWithZero();
  btnLeft.addEventListener("click", startButton);
  btnRight.addEventListener("click", doTheSplit);

  function textStartBtn() {
    btnLeft.innerHTML = "STOP";
    btnLeft.setAttribute("class", "btn stop");
    btnRight.setAttribute("class", "btn split");
    btnRight.innerHTML = "SPLIT";
  }

  function createResetBtn() {
    btnLeft.innerHTML = "START";
    btnRight.innerHTML = "RESET";
    btnLeft.setAttribute("class", "btn start");
    btnRight.setAttribute("class", "btn reset");
    intervalId = 0; // continue chronometer from it's pause point.
  }

  function startButton() {
    if (intervalId == 0) { //start if pause
      intervalRef = setInterval(function () {
        intervalId = 1;
        miliseconds++;
        milDec.innerHTML = twoDigits(miliseconds);
        if (miliseconds === 60) {
          miliseconds = 0;
          milDec.innerHTML = twoDigits(miliseconds)
        }
        seconds++;
        secDec.innerHTML = twoDigits(seconds);
        if (seconds === 60) {
          seconds = 0;
          minutes++;
          minDec.innerText = twoDigits(minutes);
          secDec.innerText = "0" + seconds;
          if (minDec === 60) {
            minutes = 0;
          }
        }
        textStartBtn();
      }, 100);
    } else { //pause if started
      clearInterval(intervalRef);  //pause chronometer
      createResetBtn();
    }
  }


  function doTheSplit() {
    btnRight.style.backgroundColor = "grey";
    let li = document.createElement("li");
    li.setAttribute("class", "list-item");
    li.innerHTML = twoDigits(minutes) + ":" + twoDigits(seconds) + ":" + twoDigits(miliseconds);
    addSplits.appendChild(li);
    changeClassDoTheSplit();
  }

  function changeClassDoTheSplit() {
    let testClass = document.getElementById('btnRight');
    if (testClass.classList.contains("reset")) {
      if (!testClass.classList.contains("split")) {
        reset();
      }
    }
  }

  function reset() {
    clearInterval(intervalRef);
    intervalId = 0;
    milisecods = 0;
    seconds = 0;
    minutes = 0;
    btnLeft.innerHTML = "START";

    // sets values of them to 00 after reset
    startWithZero();
    listItem.innerHTML = 0;
    timedRefresh(2000);
  }

  function timedRefresh(timeoutPeriod) {
    setTimeout("location.reload(true);", timeoutPeriod);
  }

}());