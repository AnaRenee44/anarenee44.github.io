// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    var i = 1 //initialize a variable to 1
while (i <= 100) { //iterate from 1 to 100

/* set conditions to check for multiples of 3 and 5 
 * and print accordingly
 */
    if (i%3 === 0 && i%5 !== 0) {
        console.log("Fizz");
    } else if (i%5 === 0 && i%3 !== 0) {
        console.log("Buzz");
    } else if (i%3 === 0 && i%5 === 0) {
        console.log("FizzBuzz");
    } else {
        console.log(i)
    }
/*increment the variable */
i++
}


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}