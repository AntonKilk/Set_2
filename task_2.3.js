/* 
Task 2.3
Write a function double to duplicate each element in array in the sense of
 repeating it twice.
*/

function double(xs) {
    xs.flatMap( x => [x,x]); //TypeError: xs.flatMap is not a function
  }
  
  double([])     // []
  double([1])    // [1, 1]
  double([1, 2]) // [1, 1, 2, 2]
  // let double = (xs) => {
  //   return xs
  //     .map(x => [x, x])
  //     .reduce((zs, xs) => zs.concat(xs), [])
  // }
  
  // console.log(double([]))
  // console.log(double([4, 5])) 