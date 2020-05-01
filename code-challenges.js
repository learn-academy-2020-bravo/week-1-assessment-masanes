// ASSESSMENT 1: Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

//create a function called testTemp that takes in one parameter called temp
//create a condition that checks if temp is below boiling point or above boiling point
//make variable called boilingPoint
//if below boilingPoint return `temp is below boiling point"
//if above boiling Point return `temp is above boiling point"
//if temp is === 212 return "temp is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

// const testTemp = (temp) => {
//     let boilingPoint = 212;
//     if (temp < boilingPoint) {
//         return `${temp} is below boiling point`;
//         }
//     else if (temp > boilingPoint) {
//         return `${temp} is above boiling point`;
//         }
//         else {
//             return `${temp} is at boiling point`
//         }
//     }

//tried ternary operators for experience and shorter code/cleaner? 
const testTemp = (temp) => {
    let boilingPoint = 212;
    let result = "";

return result = temp < boilingPoint ? `${temp} is below boiling point` : (temp > boilingPoint ? `${temp} is above boiling point` : `${temp} is at boiling point`)
    }

console.log(testTemp(temp1));
console.log(testTemp(temp2));
console.log(testTemp(temp3));

//---------------------------------------------------------------------------------------------------------
// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]
//create a function called multiplyByFive
//make var called array which stores an empty array
//iterate through array and multiply by 5
//push to new array

const multiplyByFive = (num) => {
 let array = [];
    for (let i = 0; i < num.length; i++) {
        array.push(num[i] * 5)
    }
    return array;
}

console.log(multiplyByFive(myNumbers1));

// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]
//create a function called mapFive 
//use map to iterate through myNumbers2 and multiply each value by 5


const mapFive = myNumbers2.map(val => val * 5); //had to refer to syllabus for syntax set up..
//console.log(mapFive(myNumbers2)) //this did not work because we saved it into a variable called mapFive so when I tried to keep calling it I got is not a function.. 
console.log(mapFive)

//---------------------------------------------------------------------------------------------------------
// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"
//create a function called disemvowel that takes in one parameter str
//it should remove all vowels from a string called
//create an array called vowels that contains the vowels
//split the str so we can check each letter individually
//use filter to check each (char)  
//join the results

const disemvowel = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let splitString = str.split("");
    //console.log(splitString);
    return splitString
    .filter(char => !vowels.includes(char.toLowerCase()))//when I put .join("") here without breaking it into another line it was giving me an error because i did !vowels.includes(char).join(""))
    //also forgot to change to lowercase at first..
    .join("")

}

console.log(disemvowel(stringWithVowels1));
console.log(disemvowel(stringWithVowels2));

//---------------------------------------------------------------------------------------------------------

// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var notAString1 = true
var notAString2 = 42
//use typeof to check datatype
const testVowel = (str) => {
    if (typeof str !== "string") {
       return "please insert a string, this is a " + typeof str; 
    }
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let splitString = str.split("");
    //console.log(splitString);
    return splitString
    .filter(char => !vowels.includes(char.toLowerCase()))
    .join("")

}

console.log(testVowel(notAString1));
console.log(testVowel(notAString2));

//---------------------------------------------------------------------------------------------------------
// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]
//create a function called toonami that takes in an array called arr
//iterate through array to gain access to objects that contain animals
//filter out any animals that are not a cat

const toonami = (arr) => arr.filter(kitty => kitty.animal === "cat");

console.log(toonami(toonimals))


//---------------------------------------------------------------------------------------------------------
// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

//create a function called NoKitty
//return animals that are not a cat

const NoKitty = (cat) => {
   let noCats = cat.filter(otherAnimals => otherAnimals.animal !== "cat")
   let newArray = [];

   for (let i = 0; i < noCats.length; i++) {
       newArray.push(noCats[i].name)
   }
   return newArray.join(" ");
}
//I basically extended this problem with an extra loop was having issues trying to figure out how to access name using a hof.. I'm sure there is a way cleaner shorter way to do this.
console.log(NoKitty(toonimals))