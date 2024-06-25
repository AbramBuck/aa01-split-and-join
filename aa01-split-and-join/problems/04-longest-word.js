/*
Write a function longestWord(sentence) that takes in a sentence string as an
argument. The function should return the longest word in the sentence. If there
is more than one "longest word", return the first of these instances.
*/
/* FAILED ATTEMPT
function longestWord(sentence) {
    //break up sentence
    let words = sentence.split(" ");
    let letterCount = []; 
    let bigLetterIndexNum;
    

    for (let i = 0; i < words.length; i++) {
     //count each word and push number into an array
        letterCount.push(words[i].length);
    }
    
     //evaluate if word is longer than another
    for (let i = 0; i < letterCount.length - 1; i++) {
        if (letterCount[i] > letterCount[i + 1]) {
            bigLetterIndexNum = i;
        } else if (letterCount[i] < letterCount[i + 1]) {
            bigLetterIndexNum = i+1;
        }
    }
     //the indexes of words array and letterCount will be the same. For instance. 
     //If letterCount's highest number is at index 0 in its array the return the index of 0 from the word's array to get the highest number of letters  
     let indexToCheck = letterCount.indexOf(bigLetterIndexNum);
     let longestWord = words.charAt(indexToCheck);
    //return the first longest word found
    return longestWord;

}
*/

function longestWord(sentence) {
    let words = sentence.split(" ");
    let longestWord = "";

    for (let i = 0; i < words.length; i++) {

        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    if (longestWord.length > 0) {
        return longestWord; 
    } else {
        return "Your word count is 0. Get more words chump!";
    }
}

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = longestWord;
