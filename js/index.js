// Creating variables for buttons
var startButton = document.getElementById("startButton");
var stopButton = document.getElementById("stopButton");
var resetButton = document.getElementById("resetButton");
var pomoButton = document.getElementById("pomoButton");
var shortButton = document.getElementById("shortButton");
var longButton = document.getElementById("longButton");

// Creating variables for what the countdown will be
var timeText = document.getElementById("time");
var selectedTimer = 25;
var minutes = 25;
var seconds = 0;
var myTimer;
// Setting title text in tab
document.title = "(" + timeText.innerHTML + ") " + "Pomodoro Timer";
// keeps check if the timer is/isn't running
var running = true;

// Play sound when timer ends
var timerAudio = new Audio("/sounds/hey_listen_loop.mp3");



// functionality of "Start" button
startButton.addEventListener("click", function (event) {
  // return nothing if user presses "Start" while timer is already going
  if (myTimer > 0 && running === true) {
    return;
  }
  running = true;

  myTimer = setInterval(function () {
    // Reduce minute when second hits 0
    if (seconds === 0) {
      minutes -= 1;
      seconds = 60;
    }
    // Update timer every second
    seconds -= 1;

    // Display the result
    if (minutes < 10) {
      if (seconds >= 10) {
        document.getElementById("time").innerHTML =
          "0" + minutes + ":" + seconds;
      } else if (seconds < 10) {
        document.getElementById("time").innerHTML =
          "0" + minutes + ":" + "0" + seconds;
      }
    } else if (seconds >= 10) {
      document.getElementById("time").innerHTML = minutes + ":" + seconds;
    } else if (seconds < 10) {
      document.getElementById("time").innerHTML = minutes + ":" + "0" + seconds;
    }

    document.title = "(" + timeText.innerHTML + ") " + "Pomodoro Timer";
    // If the count down is finished, write some text
    if (minutes < 0) {
      timerAudio.play();
      running = false;
      clearInterval(myTimer);
      document.getElementById("time").style.width = "300px";
      document.getElementById("time").innerHTML = "Time's up!";
      document.title = timeText.innerHTML;
      document.getElementById("cat-image").src = "/images/dancing-cat.gif";
    }
  }, 1000);
});

// Functionality for "Stop" button
stopButton.addEventListener("click", stopTimerNow);
function stopTimerNow() {
  timerAudio.pause();
  running = false;
  clearInterval(myTimer);
}

// functionality of "Reset" button
resetButton.addEventListener("click", function (event) {
  document.getElementById("time").style.width = "175px";
  running = false;
  clearInterval(myTimer);
  timerAudio.pause();
  
  if (selectedTimer === 25) {
    document.getElementById("time").innerHTML = "25:00";
    minutes = 25;
    seconds = 0;
    document.title = "(" + minutes + ":00" + ") " + "Pomodoro Timer";
  } else if (selectedTimer === 10) {
    document.getElementById("time").innerHTML = "10:00";
    minutes = 10;
    seconds = 0;
    document.title = "(" + minutes + ":00" + ") " + "Pomodoro Timer";
  } else if (selectedTimer === 5) {
    document.getElementById("time").innerHTML = "05:00";
    minutes = 5;
    seconds = 0;
    document.title = "(0" + minutes + ":00" + ") " + "Pomodoro Timer";
  }
});

// functionality of "Pomodoro" button
pomoButton.addEventListener("click", function (event) {
  // Setting up everything for "Pomodoro" display
  randomStartCat();
  document.getElementById("time").style.width = "175px";
  document.getElementById("time").innerHTML = "25:00";
  stopTimerNow();
  selectedTimer = 25;
  minutes = 25;
  seconds = 0;

  // return nothing if user presses "Start" while timer is already going
  if (myTimer > 0 && running === true) {
    return;
  }
  running = true;

  myTimer = setInterval(function () {
    // Reduce minute when second hits 0
    if (seconds === 0) {
      minutes -= 1;
      seconds = 60;
    }
    // Update timer every second
    seconds -= 1;

    // Display the result
    if (minutes < 10) {
      if (seconds >= 10) {
        document.getElementById("time").innerHTML =
          "0" + minutes + ":" + seconds;
      } else if (seconds < 10) {
        document.getElementById("time").innerHTML =
          "0" + minutes + ":" + "0" + seconds;
      }
    } else if (seconds >= 10) {
      document.getElementById("time").innerHTML = minutes + ":" + seconds;
    } else if (seconds < 10) {
      document.getElementById("time").innerHTML = minutes + ":" + "0" + seconds;
    }
    
    document.title = "(" + timeText.innerHTML + ") " + "Pomodoro Timer";
    // If the count down is finished, write some text
    if (minutes < 0) {
      timerAudio.play();
      running = false;
      clearInterval(myTimer);
      document.getElementById("time").style.width = "300px";
      document.getElementById("time").innerHTML = "Time's up!";
      document.title = timeText.innerHTML;
      document.getElementById("cat-image").src = "/images/dancing-cat.gif";
    }
  }, 1000);
});

// functionality of "Short Break" button
shortButton.addEventListener("click", function (event) {
    // Setting up everything for "Short Break" display
  document.getElementById("cat-image").src = "/images/sleepy-cat.gif";
  document.getElementById("time").style.width = "175px";
  document.getElementById("time").innerHTML = "05:00";
  stopTimerNow();
  selectedTimer = 5;
  minutes = 5;
  seconds = 0;

  // return nothing if user presses "Start" while timer is already going
  if (myTimer > 0 && running === true) {
    return;
  }
  running = true;

  myTimer = setInterval(function () {
    // Reduce minute when second hits 0
    if (seconds === 0) {
      minutes -= 1;
      seconds = 60;
    }
    // Update timer every second
    seconds -= 1;

    // Display the result
    if (minutes < 10) {
      if (seconds >= 10) {
        document.getElementById("time").innerHTML =
          "0" + minutes + ":" + seconds;
      } else if (seconds < 10) {
        document.getElementById("time").innerHTML =
          "0" + minutes + ":" + "0" + seconds;
      }
    } else if (seconds >= 10) {
      document.getElementById("time").innerHTML = minutes + ":" + seconds;
    } else if (seconds < 10) {
      document.getElementById("time").innerHTML = minutes + ":" + "0" + seconds;
    }

    // Display excited cat when break is about to end
    if (minutes < 1) {
      document.getElementById("cat-image").src = "/images/excited-cat.gif";
    }

    document.title = "(" + timeText.innerHTML + ") " + "Pomodoro Timer";
    // If the count down is finished, write some text
    if (minutes < 0) {
      timerAudio.play();
      clearInterval(myTimer);
      document.getElementById("time").style.width = "300px";
      document.getElementById("time").innerHTML = "Time's up!";
      document.title = timeText.innerHTML;
      document.getElementById("cat-image").src = "/images/dancing-cat.gif";
    }
  }, 1000);
});

// functionality of "Long Break" button
longButton.addEventListener("click", function (event) {
  // Setting up everything for "Long Break" display
  document.getElementById("cat-image").src = "/images/sleeping-cat.gif";
  document.getElementById("time").style.width = "175px";
  document.getElementById("time").innerHTML = "10:00";
  stopTimerNow();
  selectedTimer = 10;
  minutes = 10;
  seconds = 0;

  // return nothing if user presses "Start" while timer is already going
  if (myTimer > 0 && running === true) {
    return;
  }
  running = true;

  myTimer = setInterval(function () {
    // Reduce minute when second hits 0
    if (seconds === 0) {
      minutes -= 1;
      seconds = 60;
    }
    // Update timer every second
    seconds -= 1;

    // Display the result
    if (minutes < 10) {
      if (seconds >= 10) {
        document.getElementById("time").innerHTML =
          "0" + minutes + ":" + seconds;
      } else if (seconds < 10) {
        document.getElementById("time").innerHTML =
          "0" + minutes + ":" + "0" + seconds;
      }
    } else if (seconds >= 10) {
      document.getElementById("time").innerHTML = minutes + ":" + seconds;
    } else if (seconds < 10) {
      document.getElementById("time").innerHTML = minutes + ":" + "0" + seconds;
    }
    
    // Display excited cat when break is about to end
    if (minutes < 1) {
      document.getElementById("cat-image").src = "/images/excited-cat.gif";
    }

    document.title = "(" + timeText.innerHTML + ") " + "Pomodoro Timer";
    // If the count down is finished, write some text
    if (minutes < 0) {
      timerAudio.play();
      running = false;
      clearInterval(myTimer);
      document.getElementById("time").style.width = "300px";
      document.getElementById("time").innerHTML = "Time's up!";
      document.title = timeText.innerHTML;
      document.getElementById("cat-image").src = "/images/dancing-cat.gif";
    }
  }, 1000);
});

// Selects a random cat gif for start
var catImage = document.getElementById("cat-image");
function randomStartCat() {
  var cats = 
  {
  1: "/images/cat-on-phone.gif", 
  2: "/images/silly-cat.gif", 
  3: "/images/licking-cat.gif",
  4: "/images/desk-cat.gif"
  };
  var keys = Object.keys(cats);
  var randCatGif = cats[keys[ keys.length * Math.random() << 0]];
  document.getElementById("cat-image").src = randCatGif;
}
// var randCatGif = randomStartCat();
// document.getElementById("cat-image").src = randCatGif;

// Checks which cat should be showing up based on the current time
function checkCat() {
  if (minutes >= 5) {
    document.getElementById("cat-image").src = randCatGif;
  } else if (minutes < 5) {
    document.getElementById("cat-image").src = "/images/excited-cat.gif";
  }
}