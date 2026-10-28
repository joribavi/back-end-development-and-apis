const { __esModule } = require("@babel/generator");

function getUpperCase(anyString){
    const upperCaseVersion = anyString.toUpperCase();
    return upperCaseVersion;
};

function getLowerCase(anyString){
    const lowerCaseVersion = anyString.toLowerCase();
    return lowerCaseVersion;
};

function getSentenceCase(anyString){
    let lowerCaseString  = getLowerCase(anyString);
    const firstStringLetter = lowerCaseString[0];
    const firsLetterWithUpper = getUpperCase(firstStringLetter);
  
    lowerCaseString = lowerCaseString.replace(firstStringLetter,firsLetterWithUpper);
    return lowerCaseString;
};

console.log(getSentenceCase("hello world"));

console.log(getSentenceCase("Hello World"));
console.log(getSentenceCase("HELLO WORLD")); 
//code to correct bellow - Lesson 21 "Build a Case Converter"

function getProperCase(myString){
    return myString
        .trim()
        .split(/\s+/)
        .map(word => getSentenceCase(word))
        .join(" ");
}

module.exports = {
   getLowerCase,
   getUpperCase,
   getProperCase, 
   getSentenceCase
};



