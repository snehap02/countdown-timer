const newYears = new Date("jan 1, 2023 00:00:00").getTime();

const x = setInterval(function(){

    const currentDate = new Date().getTime();
    const gapBetweenDates = newYears - currentDate;

    const days = Math.floor(gapBetweenDates /( 1000 * 60 * 60 * 24));
    
    const hours = Math.floor((gapBetweenDates % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((gapBetweenDates % (1000 * 60 * 60)) / (1000 * 60));
    
    const seconds = Math.floor((gapBetweenDates % (1000 * 60)) / (1000));
    
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);

// 🟡 getTime() :- this will return the number of milliseconds since jan 1 1970.

// 🟡 Math.floor() :- to return the decimal part.
