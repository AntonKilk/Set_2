/* 
Task 2.5
Implement run-length encoding and decoding.
Run-length encoding (RLE) is a simple form of data compression,
 where runs (consecutive data elements) are replaced by just one data
  value and count.
For example we can represent the original 53 characters with only 13.
"WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"  
-> 
"12WB12W3B24WB"

RLE allows the original data to be perfectly reconstructed from the compressed data, which makes it a lossless data compression.

"AABCCCDEEEE"  ->  "2AB3CD4E"  ->  "AABCCCDEEEE"

For simplicity, assume that the unencoded string will only contain
 the letters A through Z (either lower or upper case) and whitespace.
This way data to be encoded will never contain any numbers and
 numbers inside data to be decoded always represent the count for the following character.
*/

let str = "AABCCCDEEEE";

function encode (string) {
    let encoded = "";
    let count = 1;
    for (let i = 0; i < string.length; i++){
        if (string[i+1] == string[i]){
            count ++;
        } 
        else {
            if (count == 1){
                encoded += string[i];
            } else {
                encoded += count;
                count = 1;
                encoded += string[i];
            }
        }  
    }
    return encoded;
}       

// decoding


function decode (string){
    let decoded = "";
    arr = string.split(/([A-Z])/);
    for (let i = 0; i < arr.length; i ++){
        if (isNaN(arr[i]) == true){
            decoded += arr[i];
            if (isNaN(arr[i-1]) == false){
               let num = parseInt(arr[i-1]);
               decoded += arr[i].repeat(num-1); 
            }
        }
    }
    return decoded;
}

var encoded = encode(str);
console.log(encoded)
console.log(decode(encoded));

