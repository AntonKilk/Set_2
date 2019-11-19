/*  Task 2.2
Write a function add with the following API.
*/

function add(x, y) {
  if (x == undefined && y == undefined) {
    return add
  }   else if (y == undefined) {
      return function(y){
        return x + y
      }    
      }
  else return x + y     
  }
  
 console.log(add(1, 2) )   // 3
 console.log (add(1)(2))   // 3
 console.log (add()(1, 2)) // 3 