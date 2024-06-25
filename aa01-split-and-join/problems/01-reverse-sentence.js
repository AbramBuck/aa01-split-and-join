/*
Write a function reverseSentence(sentence) that takes in a sentence as an arg.
The function should return a new sentence where the order of the words is
reversed. Note that you should reverse the order among words, not the order
among characters.

1. take in a senetence
2. reverse the order of the words
3. return the new sentence
*/

function reverseSentence(senetence) {

    let splitSent = senetence.split(" ");
    let returnSent = [];   for (i = splitSent.length - 1; i > -1; i--) {
        returnSent.unshift(splitSent[i]);
    }
    return returnSent;

}


console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = reverseSentence;
