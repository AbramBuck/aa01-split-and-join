/*
Write a function snakeToPascal that takes in a snake_cased string and returns a
PascalCased version of the string. snakecase is where each word is separated
with underscores (``). PascalCase is a string where the first char of each word
is capital, all other chars lowercase.

1. take in a string
2. split it at the "_"
3. cap the substirng 0 of each element  <== PICK UP HERE
4. connect the words together concatenate them or use template literal
5. return new string
*/

function snakeToPascal(string) {
    let splitStrings = string.split("_");
    let sentence = [];
    
    for (let i = 0; i < splitStrings.length; i++) {
        let letter = splitStrings[i];
        let wordToCap = letter[0].toUpperCase();
        let afterLetter = letter.slice(1).toLowerCase();

        sentence.push(wordToCap += afterLetter);
    }

    return sentence.join(" ");
}

console.log(snakeToPascal('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToPascal('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToPascal('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToPascal('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = snakeToPascal;
