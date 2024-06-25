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
    //chop up the sentence
    let splitSent = senetence.split(" ");
    
    //empty array for sentence in it's final form
    let returnSent = [];   
    
    //push all the chopped words to the array in reverse order
    for (i = splitSent.length - 1; i > -1; i--) {
        returnSent.push(splitSent[i]);
    }
    //smush the individual word elements into a sentence in the final array
    let mergeSent = returnSent.join(" ");

    //send me the final result. 
    return mergeSent;
}

console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = reverseSentence;
