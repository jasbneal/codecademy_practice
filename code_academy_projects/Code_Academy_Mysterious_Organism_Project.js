/* Context: You’re part of a research team that has found a new mysterious organism 
at the bottom of the ocean near hydrothermal vents. Your team names the organism, 
Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. 
The small DNA samples and frequency at which it mutates due to the hydrothermal vents 
make P. aequor an interesting specimen to study. However, P. aequor cannot survive 
above sea level and locating P. aequor in the deep sea is difficult and expensive. 
Your job is to create objects that simulate the DNA of P. aequor for your research team to study. */

// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
// Factory function to create a P. aequor object
// No two organisms should have the same specimenNum property!
const pAequorFactory = (number, dnaStrand) => {
    return {
      'specimenNum': number,
      'dna': dnaStrand,
      // function simulates mutation: replaces random base with a different base
      mutate() {
        let random = Math.floor(Math.random() * 15);
        let newBase = returnRandBase();
        while (dnaStrand[random] === newBase) {
          newBase = returnRandBase()
        };
        dnaStrand[random] = returnRandBase();
        return dnaStrand;
      },
      // compares the DNA strands of 2 P. aequors and prints the percentage of DNA in common
      compareDNA(pAequor) {
        let identicalBases = 0;
        for (let i = 0; i < 15; i++) {
          if (this['dna'][i] === pAequor['dna'][i]) {
            identicalBases++;
          }
        };
        let identicalPercentage = (identicalBases / 15) * 100
        console.log(`Percentage of DNA in Common Between ${this['specimenNum']} and ${pAequor['specimenNum']}: ${identicalPercentage}`)
      },
      // returns liklihood of survival (60%+ of DNA bases === C or G)
      willLikelySurvive() {
        let cAndG = 0
        for (const base of this.dna) {
          if (base === 'C' || base === 'G') {
            cAndG++;
          }
        };
        return (((cAndG / 15) * 100) >= 60)
        }
      }
    }

// Creates 30 instances of P. aequor and stores them in the pAequorList for later use
pAequorList = [];
for (let i = 1; i <= 30; i++) {
    pAequorList.push(pAequorFactory(i, mockUpStrand()))
    }