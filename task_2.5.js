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

let str = "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB";

function encode (string) {
    let output = "";
    let count = 1;
    for (let i = 0; i < string.length; i++){
        if (string[i+1] == string[i]){
            count ++;
        } 
        else {
            if (count == 1){
                output += string[i];
            } else {
                output += count;
                count = 1;
                output += string[i];
            }
        }  
    }
    return output;
}       

// decoding

let code = encode(str);

arr = code.split(/([0-9]+)/);
let decoded = "";
for (let i = 0, i< arr.length; i++){
    if (typeof arr[i] == "number"){
        decode +=arr[i+1];
    }
}

