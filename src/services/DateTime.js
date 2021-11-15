function getCurrentDate(separator=''){

    let myCurrentDate = new Date()
    let date = myCurrentDate.getDate();
    let currentMonth = myCurrentDate.getMonth() + 1;
    let year = myCurrentDate.getFullYear();

    var monthObject = {
        1: "January",
        2: "February",
        3: "March",
        4: "April", 
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
    }

    currentMonth = monthObject[currentMonth];
     
    return ` ${separator}${date} ${currentMonth<10 ? `0${currentMonth}` : `${currentMonth}`} ${year}${separator}`;
}
 
export {getCurrentDate};