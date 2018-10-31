// https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
    let time = s.split(":");
    
    let res = time[2].charAt(2);
    
    let mm = time[2].slice(0, 2);

    let hour = parseInt(time[0]);
    
    time[2] = mm;

    if(hour === 12 && res === 'A'){
        hour = "00";
        time[0] = hour;
    }
    
    else if (res === 'P'){
        if(hour !== 12){
            hour += 12;
            hour.toString();
            time[0] = hour;
        }
    }
    
    let mTime = time.join(":");
    return mTime;
}

console.log(timeConversion('12:05:45AM'));