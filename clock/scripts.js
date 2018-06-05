// clock
// by jakob vendegna
// my first attempt at such a thing in javascript.
// objective is to pretty print a css formatted clock, that works, no tutorial, vanilla js.

// begin funcitons
function dayToString(dy) {
    
    switch (dy) {
        case 1: 
            dy = "Monday";
            break;
        case 2: 
            dy = "Tuesday";
            break;
        case 3: 
            dy = "Wednesday";
            break;
        case 4: 
            dy = "Thursday";
            break;
        case 5: 
            dy = "Friday";
            break;
        case 6: 
            dy = "Saturday";
            break;
        default: 
            dy = "Sunday";
    }
    
    return dy;
};

function monthToString(mnth) {
   
    switch(mnth) {
        case 0: 
            mnth = "January";
            break;
        case 1:
            mnth = "Febuary";
            break;
        case 2:
            mnth = "March";
            break;
        case 3:
            mnth = "April";
            break;
        case 4:
            mnth = "May";
            break;
        case 5:
            mnth = "June";
            break;
        case 6:
            mnth = "July";
            break;
        case 7:
            mnth = "August";
            break;
        case 8:
            mnth = "September";
            break;
        case 9:
            mnth = "October";
            break;
        case 10:
            mnth = "November";
            break;
        default:
            mnth = "December";
            break;
        
    }
    return mnth;
}

function getStandardHour(hr) {

    if (hr > 12) {
        hr = hr - 12;
    }
    
    if (hr == 0) {
        hr = 12;
    }

    return hr + ":";
}

function getAMPM(hr) {
    var am = true;
    if(hr <= 11) {
        document.getElementById("ampm").innerText = " AM";
    } else {
        document.getElementById("ampm").innerText = " PM";
    } 
}

function twoDigits(clkElement)  {
    if(clkElement < 10) {
        clkElement = "0" + clkElement
    }

    return clkElement;
}

// main loop

function timer() {
    var clock = new Date();
    var hour = clock.getHours();
    var min = clock.getMinutes();
    var second = clock.getSeconds();

    
    console.log(second);
    
    document.getElementById("day").innerText = dayToString(clock.getDay());
    document.getElementById("date").innerText = clock.getDate();
    document.getElementById("month").innerText = monthToString(clock.getMonth());
    document.getElementById("year").innerText = clock.getFullYear();
    hour = twoDigits(hour);
    minute = twoDigits(minute);
    second = twoDigits(second);
    document.getElementById("hour").innerText = getStandardHour(hour);
    document.getElementById("minute").innerText = min + ":";
    document.getElementById("second").innerText = second + " ";
    getAMPM(hour);
    setTimeout(timer, 1000);
}

timer();
document.getElementById("jake").innerText = "JakobVendegna\n2018";
