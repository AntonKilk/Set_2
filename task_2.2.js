/*  Task 2.2
Write a function add with the following API.
*/

function add(x, y) {
if (y == undefined) {
  return function(y){
    console.log(x);
    console.log(y);
    return x + y;
    };
  } else return x + y;     
  }
  
 console.log(add(1, 2) )   // 3
 console.log (add(1)(2))   // 3
 console.log (add()(1, 2)) // 3