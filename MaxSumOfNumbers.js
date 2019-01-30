//Prime number checking
//has it  only two distinct divisors: 1 and itself
// function isPrime(number) {
//     for (var i = 2; i < number; i++)
//         if (number % i === 0) return false; //false if it's divisable by anything else
//     return number !== 1 && number !== 0; //true if number is not zero or one
// }

//Prime checker new version (faster)
function isPrime(number) {
    var isPrime = false;
    var divider = 0;

    if (number < 8) {
        if (number === 2 || number === 3 || number === 5 || number === 7) { //they are primes for sure
            isPrime = true;
        }
    } else {
        let examinedNumbers = parseInt(Math.sqrt(number)); //it's enough to examine the dividers until the square root plus one of the number
        for (let x = 2; x < examinedNumbers + 1; x++) {
            if (number % x === 0) {
                divider++;
            }
        }
        if (divider === 0) {
            isPrime = true;
        }
    }
    return isPrime;
}

//		1
//	   8 4
//	  2 6 9
//   8 5 9 3



//input numbers from file to "Orthogonal Triangle" array
var shortArray = [1, 8, 4, 2, 6, 9, 8, 5, 9, 3, 11, 11, 100,11, 11, 11, 11, 11,11, 11,11];
var shortArray2 = [1, 8, 4, 2, 6, 9, 8, 5, 9, 3, 11, 11, 100,11, 11, 11, 11, 11,11, 11,11];


var longArray = [
    215,
    193, 124,
    117, 237, 442,
    218, 935, 347, 235,
    320, 804, 522, 417, 345,
    229, 601, 723, 835, 133, 124,
    248, 202, 277, 433, 207, 263, 257,
    359, 464, 504, 528, 516, 716, 871, 182,
    461, 441, 426, 656, 863, 560, 380, 171, 923,
    381, 348, 573, 533, 447, 632, 387, 176, 975, 449,
    223, 711, 445, 645, 245, 543, 931, 532, 937, 541, 444,
    330, 131, 333, 928, 377, 733, 17, 778, 839, 168, 197, 197,
    131, 171, 522, 137, 217, 224, 291, 413, 528, 520, 227, 229, 928,
    223, 626, 34,  683, 839, 53, 627, 310, 713, 999, 629, 817, 410, 121,
    924, 622, 911, 233, 325, 139, 721, 218, 253, 223, 107, 233, 230, 124, 233
];
var longArray2 = [
    215,
    193, 124,
    117, 237, 442,
    218, 935, 347, 235,
    320, 804, 522, 417, 345,
    229, 601, 723, 835, 133, 124,
    248, 202, 277, 433, 207, 263, 257,
    359, 464, 504, 528, 516, 716, 871, 182,
    461, 441, 426, 656, 863, 560, 380, 171, 923,
    381, 348, 573, 533, 447, 632, 387, 176, 975, 449,
    223, 711, 445, 645, 245, 543, 931, 532, 937, 541, 444,
    330, 131, 333, 928, 377, 733, 17, 778, 839, 168, 197, 197,
    131, 171, 522, 137, 217, 224, 291, 413, 528, 520, 227, 229, 928,
    223, 626, 34, 683, 839, 53, 627, 310, 713, 999, 629, 817, 410, 121,
    924, 622, 911, 233, 325, 139, 721, 218, 253, 223, 107, 233, 230, 124, 233
];

var modifiedlongArray = [
    215,
    193, 124,
    117, 237, 442,
    218, 935, 347, 235,
    320, 804, 522, 417, 345,
    229, 601, 723, 835, 133, 124,
    248, 202, 10000, 433, 207, 263, 257,
    359, 464, 504, 528, 516, 716, 871, 182,
    461, 441, 426, 656, 863, 560, 380, 171, 923,
    381, 348, 573, 533, 447, 632, 387, 176, 975, 449,
    223, 711, 445, 645, 245, 543, 931, 532, 937, 541, 444,
    330, 131, 333, 928, 377, 733, 17, 778, 839, 168, 197, 197,
    131, 171, 522, 137, 217, 224, 291, 413, 528, 520, 227, 229, 928,
    223, 626, 10000, 683, 839, 53, 627, 310, 713, 999, 629, 817, 410, 121,
    924, 622, 911, 233, 325, 139, 721, 218, 253, 223, 107, 233, 230, 124, 233
];
var modifiedlongArray2 = [
    215,
    193, 124,
    117, 237, 442,
    218, 935, 347, 235,
    320, 804, 522, 417, 345,
    229, 601, 723, 835, 133, 124,
    248, 202, 10000, 433, 207, 263, 257,
    359, 464, 504, 528, 516, 716, 871, 182,
    461, 441, 426, 656, 863, 560, 380, 171, 923,
    381, 348, 573, 533, 447, 632, 387, 176, 975, 449,
    223, 711, 445, 645, 245, 543, 931, 532, 937, 541, 444,
    330, 131, 333, 928, 377, 733, 17, 778, 839, 168, 197, 197,
    131, 171, 522, 137, 217, 224, 291, 413, 528, 520, 227, 229, 928,
    223, 626, 10000, 683, 839, 53, 627, 310, 713, 999, 629, 817, 410, 121,
    924, 622, 911, 233, 325, 139, 721, 218, 253, 223, 107, 233, 230, 124, 233
];


document.write("The maximum sum of the numbers according to given rules below <br>");
document.write("<br>");
document.write("1. You will start from the top and move downwards to an adjacent number as in below. <br>");
document.write("2. You are only allowed to walk downwards and diagonally. <br>");
document.write("3. You can only walk over NON PRIME NUMBERS. <br>");
document.write("4. You have to reach at the end of the pyramid as much as possible. <br>");
document.write("<br>");
document.write("According to above rules the maximum sum of the numbers from top to bottom in below example is 24. <br>");
document.write("<br>");
document.write("*1 <br>");
document.write("*8 4 <br>");
document.write("2 *6 9 <br>");
document.write("8 5 *9 3 <br>");
document.write("<br>");
document.write("<br>");
document.write(" a = max(b,c) We need to start from the bottom of the triangle <br>");
document.write(" In the next to the last row each element should equal to the maximum value of the two elements in the last row which are below this element + self. <br>");
document.write(" eg. a = max(b,c) => max(8,5) = 8 =>	8 + 2 = 10 <br>");
document.write(" We must micrify values which are primes <br>");
document.write(" The last row (8 5 9 3) will be 8 -1000 9 -1000 <br>");
document.write(" max(-1000,9) = 9 => 9 + 6 = 15 <br>");
document.write(" max(9,-1000) = 9 => 9 + 9 = 18 <br>");
document.write("*1 <br>");
document.write("8 4 <br>");
document.write("-992 15 18 <br>");
document.write("<br>");
document.write(" max(-992,15) = 15 => 15 + 8 = 23 <br>");
document.write(" max(15,18) = 18 => 18 + 4 = 22 <br>");
document.write("1 <br>");
document.write("23 22 <br>");
document.write("max(23,22) = 23 => 23 + 1 = 24 <br>");
document.write("<br>");
document.write("<br>");

function maximumSumOfTheNumbers(array1, array2) {

    var ot = array1;
    var ot2 = array2;
    var row = []; //initializing an array which will contain one row of the triangle
    var newLastRow = []; //initializing a spare array which will contain one row of the triangle
    var maximumSumOfTheNumbers = 0; //initializing result
    var rowCounter = 1; //initializing and setting the counter of the rows to 1
    var helper = 1;
    var changedPrime = 0; //if the maximum element of the array 10000, it will be -10000

    // document.write("Triangle with primes:  <br>" + ot2 + "<br>");
    // for (var countot2 = 0; countot2 < ot2.length; countot2++) { //loop through "Orthogonal Triangle" array to micrify values which are primes
    //     if (isPrime(ot2[countot2])) { //if actual element of the array is prime
    //         ot[countot2] = changedPrime;
    //         ot2[countot2] = changedPrime;
    //     }
    // }
    // document.write("Triangle without primes: <br>" + ot2 + "<br>");


    for (var count = 0; count < ot.length; count++) { //loop through "Orthogonal Triangle" array to get the number of the rows
        row = ot.splice(0, rowCounter); //removing a row
        rowCounter++; //increasing the counter of the rows by one
    }
    rowCounter--;  //get the exact number eg. how many rows we have
    document.write("<br>Number of rows in triangle: " + rowCounter + "<br>" + "<br>" + "<br>");


    //loop through "Orthogonal Triangle" array backwards
    for (var rows = rowCounter; rows > 0; rows--) {
        document.write("Last row: " + row + "<br>");
        newLastRow.length = 0; //empty helping array
        //loop through the last row
        for (var element = 0; element < row.length - 1; element++) {
            document.write("Last row's elements two element at a time: " + row[element] + ", " + row[element + 1] + "<br>");
            document.write("and the maximum of them eg.: max(b,c) = " + Math.max(row[element], row[element + 1]) + "<br>");


            if (isPrime(row[element]) && isPrime(row[element + 1]) && rows === rowCounter) {
                newLastRow.push(0);
            } else if (isPrime(row[element]) && rows === rowCounter) {
                newLastRow.push(row[element + 1])
            } else if (isPrime(row[element + 1]) && rows === rowCounter) {
                newLastRow.push(row[element])
            } else {
                newLastRow.push(Math.max(row[element], row[element + 1])); //add the max values to an empty array
            }
        }
        document.write("Triangle: " + ot2 + "<br>");
        document.write("This needs to add to the next last row: " + newLastRow + "<br>");

        if (rows !== rowCounter) { //if it's not the first run in the loop
            ot2.length = ot2.length - rows + newLastRow.length //cut the end of the triangle
        } else { //first run in the loop
            ot2.length = ot2.length - rows //cut the end of the triangle
        }

        if (newLastRow.length === 1) { // if it's the last round
            ot2.length = 1; //leave the first value only
        }

        var rowOriginal = row;
        document.write("Triangle without the last row: " + ot2 + "<br>");
        row = ot2.slice(ot2.length - newLastRow.length); //get old values of next last row
        document.write("Old Values from the next last row: " + row + "<br>");
        document.write("new Values from last row: " + newLastRow + "<br>");


        document.write("rómegváltoztatott: " + row + "<br>");
        document.write("róeredeti: " + rowOriginal + "<br>");

        for (var k = 0; k < newLastRow.length; k++) { //Adding new values to  old values of next last row
            if (isPrime(row[k])){
                document.write("sikítssssssssssssss" + row[k])
                newLastRow[k] = 0;
            }else {
                newLastRow[k] = newLastRow[k] + row[k];
            }
        }

        ot2.length = ot2.length - newLastRow.length; //cutting the end of the triangle
        ot2.push(newLastRow); //and adding the new summarized values

        if (newLastRow.length === 1) { //if that's the last round we need the result
            document.write("<br>" + "<br>" + "<br>" + "<br>");
            maximumSumOfTheNumbers = "<STRONG>" + ot2 + "</STRONG>";
        } else {
            document.write("The next last row: " + ot2.slice(ot2.length - newLastRow.length - 2) + "<br>");
            document.write("The next triangle: " + ot2 + "<br>" + "<br>" + "<br>" + "<br>");
        }
        for (var i = 0; i < newLastRow.length; i++) { //changing the old values to the new values in row
            row[i] = newLastRow[i];
        }

    }
    return maximumSumOfTheNumbers; //after the end of the loops we got the answer
}

document.write("The maximum sum of the numbers according to given rules is: " + maximumSumOfTheNumbers(shortArray, shortArray2));
document.write("<br><br>____________________________________________________________________________________________________________________________________<br><br>");
document.write("The maximum sum of the numbers according to given rules is: " + maximumSumOfTheNumbers(longArray, longArray2));
document.write("<br><br>____________________________________________________________________________________________________________________________________<br><br>");
document.write("The maximum sum of the numbers according to given rules is: " + maximumSumOfTheNumbers(modifiedlongArray, modifiedlongArray2));
