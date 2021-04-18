/* 16 April 2021
Write a function factorial() that takes a number as an argument 
and returns the factorial of the number. */

const factorial = function(num) {
    let total = 1;
    if (num === 1 || num === 0) {
       total = 1;
    } else if (num > 1) {
    for (num; num > 0; num--) {
      total *= num;
    }
    };
  return total; // Code breaks if the number is too large. 
}

/* 17 April 2021 
Write a function subLength() that takes 2 parameters, a string and a single 
character. The function should search the string for the two occurrences of the 
character and return the length between them including the 2 characters. 
If there are less than 2 or more than 2 occurrences of the character the 
function should return 0.
  Examples:

  subLength('Saturday', 'a'); // returns 6
  subLength('summer', 'm'); // returns 2
  subLength('digitize', 'i'); // returns 0
  subLength('cheesecake', 'k'); // returns 0 */

const subLength = (string, char) => {
  let spaces = 0;
  let occurrence = 0;
  let firstLetter;
  let secondLetter;
  /* Loop iterates through each ch. If ch === char and occurrence === 0,
  the first ch position is determined. If occurrence > 0, the second ch 
  position is determined. */
  for (i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === char) {
        if (occurrence === 0) {
        firstLetter = i;
        occurrence++;
      } else if ( occurrence > 0) {
        secondLetter = i + 1;
        spaces = secondLetter - firstLetter;
        occurrence++;
      }
  }
  };
  // If the occurrence of the character is only 1 or more than 2, return 0. 
  if (occurrence < 2 || occurrence > 2) {
      spaces = 0;
    }
return spaces;
};
  
/* 17 April 2021
Write a function groceries() that takes an array of object literals of grocery items. 
The function should return a string with each item separated by a comma except the last 
two items should be separated by the word 'and'. Make sure spaces (' ') are inserted 
where they are appropriate. */

const groceries = list => {
  let groceryList = [ ]; // Creates new array accessible by the entire function.
  // Nested loop to iterate through array and then each obj in each array item.
  for (let counter = 0; counter < list.length; counter++) {
    for (let item in list[counter]) {
      groceryList.push(list[counter][item]);
    }
  };
  let listLength = groceryList.length;
  // If the list has 1+ item, replace last item with 'and' + last item
  if (listLength > 1) {
  let lastItem = groceryList[listLength - 1];
  groceryList.splice((listLength - 1), 1, 'and ' + lastItem);
  }
  // Loop that adds commas behind all items except the last 2
  for (let counter = 0; counter < (groceryList.length -2); counter++) {
    let groceries = groceryList[counter];
    groceryList[counter] = groceries + ',';
  };
  return groceryList.join(' ');
}

console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));
// returns 'Carrots, Hummus, Pesto and Rigatoni'

console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ));
// returns 'Bread and Butter'
 
console.log(groceries( [{item: 'Cheese Balls'}] ));
// returns 'Cheese Balls'

/* 17 April 2021
Write a function, reverseArray(), that takes in an array as an argument 
and returns a new array with the elements in the reverse order. */

const reverseArray = list => {
  let newList = [];
  let listLength = list.length;
  for (let counter = (listLength -1); counter >= 0; counter--) {
    newList.push(list[counter]);
  };
  return newList;
}

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Prints ['This', 'will', 'all', 'make', 'sense.'];

/* 17 April 2021
Write a function, greetAliens(), that takes in an array of strings and uses a 
for loop to print a greeting with each string in the array. */

function greetAliens (list) {
  for (const element of list) {
    console.log(`Oh powerful ${element}, we humans offer our unconditional surrender!`)
  }
}

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);
// Prints: 
// Oh powerful Blorgous, we humans offer our unconditional surrender! 
// Oh powerful Glamyx, we humans offer our unconditional surrender! 
// Oh powerful Wegord, we humans offer our unconditional surrender! 
// Oh powerful SpaceKing, we humans offer our unconditional surrender!

/* 17 April 2021
Write a function, convertToBaby(), that takes in an array as an argument and, 
using a loop, returns a new array with each string in the array prepended with 'baby '. */

function convertToBaby (list) {
  const newList = [];
  for (let counter = 0; counter < list.length; counter++) {
    newList.push('baby ' + list[counter]);
  };
  return newList;
}

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 
// Prints ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];

