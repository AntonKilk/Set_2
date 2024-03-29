/* 
Task 2.4
Given a year, report if it is a leap year.
 The tricky thing here is that a leap year in the Gregorian calendar occurs:
    on every year that is evenly divisible by 4
    except every year that is evenly divisible by 100
    unless the year is also evenly divisible by 400
For example, 1997 is not a leap year, but 1996 is. 1900 is not a leap year, but 2000 is.
 */

 function isLeapYear (year){
     if (year %4 == 0){
        if (year %100 == 0){
            if (year %400 == 0){
                return true;
            }
            return false;
        }
        return true;
     } else return false;
 }
 console.log(isLeapYear(1900));
 console.log(isLeapYear(1997));
 console.log(isLeapYear(1996));
 console.log(isLeapYear(2000));

 