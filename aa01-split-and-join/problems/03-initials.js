/*
Write a function initials(name) that accepts a full name as an arg. The function
should return the initials for that name.
*/

function initials(name) {
    let initials = [];
    //lowercase the name
    let lowCase = name.toLowerCase();
    //break name by space
    let splitName = lowCase.split(" ");
    //take the first index of each array element
    //cap the letter taken
    for (let i = 0; i < splitName.length; i++) {
        let firstLetter = splitName[i][0].toUpperCase();
        //put the two letters in an array
         initials.push(firstLetter);
    }
    //join the letters together
    return initials.join(" ");
}


 console.log(initials('anna paschall')); // 'AP'
// console.log(initials('Mary La Grange')); // 'MLG'
// console.log(initials('brian crawford scott')); // 'BCS'
// console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = initials;
