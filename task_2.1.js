/* Task 2.1
Write two functions: encrypt and decrypt, implementing Caesar cipher.
Choose one predefined offset value and use it as a constant in both
functions (see wiki to understand this sentence).
*/

function encrypt(str) {
    let output = "";
    
    for (let i = 0; i < str.length; i++){
        let c = str[i]; // char
        let code = str.charCodeAt(i); // char number
        c = String.fromCharCode(((code + 3 - 97) %26) +97); // adds 3 to char number
        output += c;
    }
    return output;
  }
  
  function decrypt(str) {
    let output = "";

    for (let i = 0; i < str.length; i++){
        let c = str[i]; // char
        let code = str.charCodeAt(i); // char number
        let temp = (code - 3) - 97; // detracts 3 from char number
        if (temp < 0) temp += 26;
        c = String.fromCharCode(temp + 97);
        output += c;
    }
    return output;
  }
  
  encrypt("abz", 3) // "dec"
  decrypt("dec", 3) // "abz"
  decrypt(encrypt("foobar")) == "foobar" // true