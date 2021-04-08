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
