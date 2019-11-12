/* 
Task 2.3
Write a function double to duplicate each element in array in the sense of
 repeating it twice.
*/

// function double(xs) {
//     ???
//   }
  
//   double([])     // []
//   double([1])    // [1, 1]
//   double([1, 2]) // [1, 1, 2, 2]
// BUT this is a solution below isn't it?
  let double = (xs) => {
    return xs
      .map(x => [x, x])
      .reduce((zs, xs) => zs.concat(xs), [])
  }
  
  console.log(double([]))
  console.log(double([4, 5])) 