function getLeapYear(year){
    if ((year%4==0) && (year%400==0) || (year%100 != 0 )){
        return "leap year"
    }
    else{
        return "not leap year"
    }
}
const getYear=getLeapYear(2100);
console.log("this year is : ", getYear);