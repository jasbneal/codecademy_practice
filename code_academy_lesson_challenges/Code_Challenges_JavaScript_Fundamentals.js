/* 7 April 2021
Write a function, greetWorld(). Your function should have no parameters
and return the string 'Hello, World! */

function greetWorld() {
    return 'Hello, World!';
}

console.log(greetWorld());

/* 7 April 2021
The most common minimum age to vote is 18. Write a function canIVote()
that takes in a number, representing the person's age, and returns the boolean
true if they are 18 years or older, and the boolean false if they are not. */

const canIVote = age => {
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
  }

  console.log(canIVote(19)); // Prints true
  console.log(canIVote(12)); // Prints false

/* 7 April 2021
Write a function, agreeOrDisagree(), that takes in two strings, and returns
'You agree!' if the two strings are the same and 'You disagree!' if the two
strings are different. */

const agreeOrDisagree = (string1, string2) => {
    if (string1 === string2) {
        return 'You agree!';
    } else {
        return 'You disagree!';
    }
}

console.log(agreeOrDisagree("yep", "yep")); // Prints You agree!
console.log(agreeOrDisagree("yep", "nope")); // Prints You disagree! 

/* 7 April 2021
Write a function, lifePhase(), that takes in a person's age, as a number, and
returns which phase of life they are in. Here are the classifications:
    0-3 should return 'baby'
    4-12 should return 'child'
    13-19 should return 'teen'
    20-64 should return 'adult'
    65-140 should return 'senior citizen'
    If the number is less than 0 or greater than 140, the program should return
    'This is not a valid age' */

function lifePhase(age) {
    if (age < 0) {
        return 'This is not a valid age';
    } else if (age >= 0 && age <= 3) {
        return 'baby';
    } else if (age > 3 && age <= 12) {
        return 'child';
    } else if (age > 12 && age <= 19) {
        return 'teen';
    } else if (age > 19 && age <= 64) {
        return 'adult';
    } else if (age > 64 && age <= 140) {
        return 'senior citizen';
    } else {
        return 'This is not a valid age'
    }
    }

console.log(lifePhase(27)); // Prints adult

/* 7 April 2021
Write a function, finaleGrade(). It should take 3 arguments of type number, find
the average of those three numbers, return the letter grade (as a string) that the
average corresponds to, and return 'You have entered an invalid grade.' if any of the
three grades are less than 0 or greater than 100.
    0-59 should return 'F'
    60-69 should return 'D'
    70-79 should return 'C'
    80-89 should return 'B'
    90-100 should return 'A' */

const finalGrade = (grade1, grade2, grade3) => {
    if ((grade1 < 0 || grade1 > 100) || (grade2 < 0 || grade2 > 100) || (grade3 < 0 || grade3 > 100)) {
        return 'You have entered an invalid grade.';
    }
    const avg = (grade1 + grade2 + grade3) / 3
    if (avg > 0 && avg <= 59) {
        return 'F';
    } else if (avg > 59 && avg <= 69) {
        return 'D';
    } else if (avg > 69 && avg <= 79) {
        return 'C';
    } else if (avg > 79 && avg <= 89) {
        return 'B';
    } else {
        return 'A';
    }
    }

console.log(finalGrade(90, 90, 95)) // Prints A

/* 7 April 2021
Write a function reportingForDuty(), that has 2 string parameters, rank and lastName,
and returns a string in the following format: 'rank lastName reporting for duty!' */

function reportingForDuty(rank, lastName) {
    return `${rank} ${lastName} reporting for duty!`;
  }

console.log(reportingForDuty('Private', 'Neal')); // Prints Private Neal reporting for duty!

/* 7 April 2021
Though an object’s mass remains consistent throughout the universe, weight is determined by 
the force of gravity on an object. Since different planets have different gravity, the same 
object would weigh different amounts on each of those planets! Write a function, 
calculateWeight(). 
It should:
    have two parameters: earthWeight and planet
    expect earthWeight to be a number
    expect planet to be a string
    return a number representing what that Earth-weight would equate to on the planet passed in.
Handle the following cases:
    'Mercury' weight = earthWeight * 0.378
    'Venus' weight = earthWeight * 0.907
    'Mars' weight = earthWeight * 0.377
    'Jupiter' weight = earthWeight * 2.36
    'Saturn' weight = earthWeight * 0.916
    For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, 
    Jupiter, or Saturn.' */

const calculateWeight = (earthWeight, planet) => { 
    switch (planet) {
        case 'Mercury':
        return earthWeight * .378;
        break;
        case 'Venus':
        return earthWeight * .907;
        break;
        case 'Mars':
        return earthWeight * .377;
        break;
        case 'Jupiter':
        return earthWeight * 2.36;
        break;
        case 'Saturn':
        return earthWeight * .916;
        break;
        default:
        return 'Invalid Planet Entry. Try: Mecury, Venus, Mars, Jupiter, or Saturn.';
        break;
    }
    }

console.log(calculateWeight(100, 'Jupiter')) // Prints 236

/* 7 April 2021
Write a function, truthyOrFalsy(), that takes in any value and returns true if 
that value is truthy and false if that value is falsy. */

const truthyOrFalsy = (val) => {
    if (val) {
      return true;
    } else {
      return false;
    }
  }

console.log(truthyOrFalsy(0)); // Prints false

/* 7 April 2021
A person’s number of imaginary friends are always 25% (or 1/4) of their total 
friends. Write a function, numImaginaryFriends(), that takes in the total 
number of friends a person has and returns the number of imaginary friends they have. 
Since friends can only come in whole numbers, be sure to round your result up to 
the nearest whole number before returning it.*/

const numImaginaryFriends = realFriends => Math.ceil(realFriends * .25);

console.log(numImaginaryFriends(20)); // Prints 5

/* 7 April 2021
Write a function, sillySentence(), that has 3 string parameters and returns the 
following silly sentence with the blanks filled in by the arguments passed into the function:
"I am so _____(adj) because I ______ (verb) coding! Time to write some more awesome ______ (noun)!" */

const sillySentence = (adj, verb, noun) => {
    return `I am so ${adj} because I ${verb} coding! Time to write some more awesome ${noun}!`
  }

console.log(sillySentence('excited', 'love', 'functions'))
// Prints I am so excited because I love coding! Time to write some more awesome functions!

/* 8 April 2021
Write a function, howOld(), that has two number parameters, age and year, and returns how 
old someone who is currently that age was (or will be) during that year. Handle three different cases:

    1. If the year is in the future, you should return a string in the following format:
        'You will be [calculated age] in the year [year passed in]'
    2. If the year is before they were born, you should return a string in the following format:
        'The year [year passed in] was [calculated number of years] years before you were born'
    3. If the year is in the past but not before the person was born, you should return a 
    string in the following format:
        'You were [calculated age] in the year [year passed in]' */

function howOld(age, year) {
    const born = 2021 - age;
    if (year >= 2021) {
    let newAge = (year - 2021) + age;
    return `You will be ${newAge} in the year ${year}`;
    } else if (year < born) {
    let difference = born - year;
    return `The year ${year} was ${difference} years before you were born`;
    } else {
    let prevAge = year - born;
    return `You were ${prevAge} in the year ${year}`; 
    }
    }

console.log(howOld(28, 2000)); // Prints You were 7 in the year 2000
console.log(howOld(28, 2022)); // Prints You will be 29 in the year 2022
console.log(howOld(28, 1923)); // Prints The year 1923 was 70 years before you were born

/* 8 April 2021
Create a function, tipCalculator(), that has two parameters, a string representing 
the quality of the service received and a number representing the total cost.
Return the tip, as a number, based on the following:
    ‘bad’ should return a 5% tip
    ‘ok’ should return a 15% tip
    ‘good’ should return a 20% tip
    ‘excellent’ should return a 30% tip
    all other inputs should default to 18% */

console.log(tipCalculator('excellent', 100)) // Prints 30
console.log(tipCalculator('alright', 175)) // Prints 31.5

/* 8 April 2021
Write a function, toEmoticon(), that takes in a string and returns the corresponding 
emoticon as a string. Use a switch/case, and cover these cases:
    'shrug' should return '|_{"}_|'
    'smiley face' should return ':)'
    'frowny face' should return':('
    'winky face' should return ';)'
    'heart' should return '<3'
    any other input should return '|_(* ~ *)_|' */

const toEmoticon = string => {
    switch (string) {
        case 'shrug':
        return '|_{"}_|';
        break;
        case 'smiley face':
        return ':)';
        break;
        case 'frowny face':
        return ':(';
        break;
        case 'winky face':
        return ';)';
        break;
        case 'heart':
        return '<3';
        break;
        default:
        return '|_(* ~ *)_|';
        break;
    }
    }

console.log(toEmoticon("whatever")) // Prints |_(* ~ *)_|
console.log(toEmoticon('shrug')) // Prints |_{"}_|
