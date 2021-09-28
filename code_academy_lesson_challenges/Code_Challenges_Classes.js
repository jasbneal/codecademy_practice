// 25 September 2021

/*
You are a college student and you want to stream a movie over one of the campuses Wi-Fi networks. 
Based on the number of users, some networks won’t have the data to stream a movie.

Use the following Network class to track how much total data and how many users each network has:

class Network {
  constructor(data, users) {
    this.data = data;
    this.users = users;
  }
}

The properties of the Network class are:

data: Total units of data supplied by the network
users: Total numbers of users currently on the network
Each user on average deducts 5 units from the network’s total data. To watch a movie you must connect to a network that has at least 10 remaining units of data.

Add a method movieTime() to the Network class that returns true if there is enough data available to watch a movie, false if there isn’t.

Example:

const library = new Network(50, 9) 
library.movieTime() // returns false 
*/

class Network {
    constructor(data, users) {
      this._data = data;
      this._users = users;
    }

    movieTime(){
      const remaining_data = (this._data - (this._users * 5));
      if (remaining_data >= 10) {
        return true;
      } else {
        return false;
      }
    }
  
    get data() {
      return this._data;
    }
  
    get users() {
      return this._users;
    }
  
    set data(new_data) {
      this._data = new_data;
    }
  
    set users(new_users) {
      this._users = new_users;
    }
  }
  
  const library = new Network(50, 9) 
  console.log(library.movieTime());
  library.users = 1;
  console.log(library.movieTime());

// 27 September 2021

/*
A video game consists of two players floating using 100 helium balloons. 
The players shoot pellets at each other’s balloons and after 10 minutes the player with the most balloons left wins.

class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }
 
  status() {
    console.log(`Player: ${this.name} -- Balllons Left: ${this.balloonCount}`)
  }
}

Write a game function balloonAttack that takes two Player instances, calculates the balloons left for each player 
after 10 minutes (using the hitsPerMinute property) and returns the name of the winner. If the result is a tie, return the string 'Tie'.

You can test your balloonAttack function by creating two instances of the Player class to use as arguments for your function like below:

const p1 = new Player('p1', 5);
const p2 = new Player('p2', 2);
 
balloonAttack(p1, p2);
Feel free to use the status() method to output each player’s balloon count at any given time.
*/

class Player {
    constructor(name, hitsPerMinute) {
      this.name = name;
      this.hitsPerMinute = hitsPerMinute;
      this.balloonCount = 100;
    }
  
    attacked() {
      this.balloonCount -= this.hitsPerMinute;
      return this.balloonCount;
    }
  
    status() {
      console.log(`Player: ${this.name} -- Balllons Left: ${this.balloonCount}`)
    }
  }
  
  // Write function below
  const balloonAttack = (p1, p2) => {
    let p1_hits;
    let p2_hits;  
    for (let i = 1; i <= 10; i++) {
      p1_hits = p1.balloonCount - p1.hitsPerMinute * i;
      p2_hits = p2.balloonCount - p2.hitsPerMinute * i;
      console.log(p1_hits);
      console.log(p2_hits);
    }
  
    if (p1_hits > p2_hits) {
      return p2.name;
    } else if (p2_hits > p1_hits) {
      return p1.name;
    } else {
      return "Tie"
    }
  }
  
  const p1 = new Player('p1', 1);
  const p2 = new Player('p2', 1);
   
  console.log(balloonAttack(p1, p2));

// 27 September 2021

/*

A shift cipher takes a plain text message and shifts each letter forward in the alphabet by a given number. 
For example, a shift cipher with a shift of 1 would turn the string 'hello' to 'ifmmp'.

Create a class ShiftCipher that takes the numerical value of the shift as a constructor parameter. The class should have two methods:

encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.
decrypt: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.
In both methods, any character outside the alphabet should remain the same.
But if a character is shifted outside the alphabet in either direction it should be wrapped around to the other side. 
For example, encrypting a y with a shift of 4 results in C and decrypting an A with a shift of 1 result in z.
Example:

const cipher = new ShiftCipher(2);
cipher.encrypt('I love to code!'); // returns 'K NQXG VQ EQFG!'
cipher.decrypt('K <3 OA RWRRA'); // returns 'i <3 my puppy'
*/

class ShiftCipher {
  constructor(shift) {
      this._shift = (shift % 26);
      this._lettersIndex = [['A', 1], ['B', 2], ['C', 3], ['D', 4], ['E', 5], ['F', 6], 
      ['G', 7], ['H', 8], ['I', 9], ['J', 10], ['K', 11], ['L', 12], ['M', 13], ['N', 14], 
      ['O', 15], ['P', 16], ['Q', 17], ['R', 18], ['S', 19], ['T', 20], ['U', 21], ['V', 22],
      ['W', 23], ['X', 24], ['Y', 25], ['Z', 26]];
  }

  // 1. How do we catalog the letters? Nested array and iterate to find it's #? Array with objects nested?
  // 2. How do we reset? If letter == z, then new letter == 0 + shift?
  // 3. Shift % 26 in case number > 26?
  
  encrypt(msg) {
    let newMsg = msg.toUpperCase();
    let newString = "";

    for (let count = 0; count < newMsg.length; count++) {
      let found = false;
      for (let i = 0; i < this._lettersIndex.length; i++) {
        if (newMsg[count] === this._lettersIndex[i][0]) {
          if ((this._shift + i) < 25) {
            newString += this._lettersIndex[i + this._shift][0];
            found = true;
          } else {
            newString += this._lettersIndex[i + this._shift - 26][0];
            found = true;
          } 
        }
      }
      if (!found) {
        newString += newMsg[count];
      }
      found = false;
    }
    return newString;
  }

  decrypt(msg) {
    let newMsg = msg.toUpperCase();
    let newString = "";
    for (let count = 0; count < newMsg.length; count++) {
      let found = false;
      for (let i = 0; i < this._lettersIndex.length; i++) {
        if (newMsg[count] === this._lettersIndex[i][0]) {
          if ((i - this._shift) >= 1) {
            newString += this._lettersIndex[i - this._shift][0];
            found = true;
          } else {
            newString += this._lettersIndex[i - this._shift + 26][0];
            found = true;
          } 
        }
      }
      if (!found) {
        newString += newMsg[count];
      }
      found = false;
    }
    return newString.toLowerCase();
  }
}

const cipher = new ShiftCipher(2);
cipher.encrypt('I love to code!'); // returns 'K NQXG VQ EQFG!'
cipher.decrypt('K <3 OA RWRRA'); // returns 'i <3 my puppy'
