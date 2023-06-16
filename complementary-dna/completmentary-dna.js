// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// declare switchUp variable to an empty array
// dna.split('')
// for loop through
// if dna[i] == 'A', switchUp.push('T')
// else if dna[i] == 'T', switchUp.push('A')
// else if dna[i] == 'C', switchUp.push('G')
// else dna[i] == 'G', switchUp.push('C')
// return switchUp and use .join('') method to transform it back into a string for the final output


function DNAStrand(dna){
    let switchUp = []
  dna.split('')
  for(let i = 0; i < dna.length; i++){
      if(dna[i] == 'A'){
          switchUp.push('T')
      } else if(dna[i] == 'T'){
          switchUp.push('A')
      } else if (dna[i] == 'C'){
          switchUp.push('G')
      } else {
          switchUp.push('C')
      }
  }
  return switchUp.join('')
}
console.log(DNAStrand("ATTGC")) // output => "TAACG"