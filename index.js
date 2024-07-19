let hour, timer, minute, seconds, interval;

let getSeconds = 0, getMinutes = 0, getHours = 0;
//Start
function stopwatch() {
    this.start = function() {
        hour = document.getElementById("hour");
        minute = document.getElementById("minute");
        seconds = document.getElementById("seconds");

        if (getSeconds >= 0) {
            getSeconds++
            seconds.innerHTML = getSeconds;
        }
        if (getSeconds < 10) {
            seconds.innerHTML = "0" + getSeconds;
        }
        if (getSeconds >= 60) {
            getSeconds = 0;
            getMinutes++;
            minute.innerHTML = getMinutes;
        }
        if (getMinutes < 10) {
            minute.innerHTML = "0" + getMinutes + ":";
        }
        if (getMinutes >= 60) {
            getMinutes = 0;
            getMinutes++;
            hour.innerHTML = getHours;
        }
        if (getHours < 10) {
            hour.innerHTML = "0" + getHours + ":";
        }
        interval = setTimeout(object.start, 1000);
    //End of start
    }
    //Stop
    this.stop = function() {
        clearTimeout(interval);
    //End of stop
    }
    //Reset
    this.reset = function() {
        if (getSeconds >= 0) {
            getSeconds = 0;
            getMinutes = 0;
            getHours = 0;
    
            seconds.innerHTML = "0" + getSeconds
            minute.innerHTML = "0" + getMinutes + " :"
            hour.innerHTML = "0" + getHours + " :"
            clearTimeout(interval);
    //End of reset
        }
    }
}

let object = new stopwatch();