/***********
Problem: Triangles

Determine if a triangle is equilateral, isosceles, or scalene.

An equilateral triangle has all three sides the same length.

An isosceles triangle has at least two sides the same length. (It is sometimes specified as having exactly two sides the same length, but for the purposes of this exercise we'll say at least two.)

A scalene triangle has all sides of different length

Create a function named `typeOfTriangle()` that accepts three (3) parameters s1, s2 and s3. The function will return

"equilateral" if the three (3) sides are the same
"isosceles" if two (2) sides are the same
"scalene" if all three (3) sides are different

"not a triangle" if any of the sides are <= 0

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. typeOfTriangle(4, 4, 4)

   Expected Result: "equilateral"

2. typeOfTriangle(0, 4, 7)

   Expected Result: "not a triangle"

3. typeOfTriangle(9, 8, 9)

   Expected Result: "isosceles"

4. typeOfTriangle(12, 8, 7)

   Expected Result: "scalene"

************/
console.log('Problem 1:')

// Add your code below this line

function typeOfTriangle (s1, s2, s3) {
  // guard clause
  if (s1 <= 0 || s2 <= 0 || s3 <= 0) {
    return 'not a triangle'
  }

  if (s1 === s2 && s2 === s3) {
    return 'equilateral'
  } else if (s1 === s2 || s1 === s3 || s2 === s3) {
    return 'isosceles'
  } else if (s1 !== s2 && s2 !== s3) {
    return 'scalene'
  } else {
    return 'not an equilateral or isosceles or scalene'
  }
}

const triangleType = typeOfTriangle(7, 4, 7)
console.log(triangleType)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')


/***********

Problem: Random Number Generator

Create a function that accepts an "upToNumber" as a parameter that generates a random number from 1 to the specifed "upToNumber"


Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. randomNumber(100)

   Expected Result: a random number (integer)  from 1 to 100

2. randomNumber(25)

   Expected Result: a random number (integer) from 1 to 25

3. randomNumber(1500)

   Expected Result: a random number (integer) from 1 to 1500

************/
console.log('Problem 2:')

// Add your code below this line

function randomNumber(upToNumber) {
  return Math.floor(Math.random() * upToNumber + 1)
}

console.log(randomNumber(100))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Odd Number Checker


Create a function that accepts a "number" as a parameter and returns true if the number is an odd number and false if the number is an even number

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. isOdd(3)

   Expected Result: true

2. isOdd(20)

   Expected Result: false

3. isOdd(10001)

   Expected Result: true

************/
console.log('Problem 3:')

// Add your code below this line
function isOdd(number) {
  return number % 2 !== 0
}

console.log(isOdd(10))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')


/***********
Tags: functions

Problem: Nucleotide Count

The genetic language of every living thing on the planet is DNA. DNA is a large molecule that is built from an extremely long sequence of individual elements called nucleotides. 4 types exist in DNA and these differ only slightly and can be represented as the following symbols: 'A' for adenine, 'C' for cytosine, 'G' for guanine, and 'T' thymine.

Given a single stranded DNA string, compute how many times each nucleotide occurs in the string.

Create a function that accepts "dna" (string) and calculates how many times each nucleotide occurs in the string

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. nucleotideCount("GGGGGTAACCCGG")

   Expected Result: { 'A': 2, 'T': 1, 'C': 3, 'G': 7 }

2. nucleotideCount("GGGGGGGG")

   Expected Result: { 'A': 0, 'T': 0, 'C': 0, 'G': 8 }

3. nucleotideCount("CGATTGGG")

   Expected Result: { 'A': 1, 'T': 2, 'C': 1, 'G': 4 }

4. nucleotideCount("AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC")

   Expected Result: { 'A': 20, 'T': 21, 'G': 17, 'C': 12 }

************/
console.log('Problem 4:')

// Add your code below this line

function nucleotideCount (nucleotide) {
  const letters = nucleotide.split('')
  const wordCount = {}

  // example letters array: ["G", "G", "G", "G", "G", "T", "A", "A", "C", "C", "C", "G", "G"]

  letters.forEach((letter) => {
    // check if letter exists as a key in wordCount object
    // if it does not, then add letter as key and value as 1
    // if letter already exists, then increment value by 1

    if (wordCount[letter] === undefined) {
      // if letter does not already exist in wordCount object
      wordCount[letter] = 1
    } else {
      // letter already exists in wordCount object
      // increment value by 1
      wordCount[letter] = wordCount[letter] + 1
    }
    // console.log(wordCount)
  })

  return wordCount
}

console.log(nucleotideCount('AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC'))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')


/***********
Problem: Wordy Math

Parse and evaluate simple math word problems returning the answer as an integer.

Create a function that accepts a "mathProblem" as a parameter and translate that word problem into an integer based math problems and returns an integer representing the answer

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. wordyMath("What is 5 plus 13?")

   Expected Result: 18

2. wordyMath("What is 7 minus 5?")

   Expected Result: 2

3. wordyMath("What is 6 multiplied by 4?")

   Expected Result: 24

4. wordyMath("What is 25 divided by 5?")

   Expected Result: 24

************/
console.log('Problem 5 (challenge):')

// Add your code below this line

function wordyMath (wordProblem) {
  const words = wordProblem.split(' ')

  // parse word problem and check if it includes "plus, minus, multipled or divided"
  if (words.includes('plus')) {
    return parseInt(words[2]) + parseInt(words[4])
  } else if (words.includes('minus')) {
    return parseInt(words[2]) - parseInt(words[4])
  } else if (words.includes('multiplied')) {
    return parseInt(words[2]) * parseInt(words[5])
  } else if (words.includes('divided')) {
    return parseInt(words[2]) / parseInt(words[5])
  } else {
    console.log('operator not found')
  }
}

const result = wordyMath('What is 25 divided by 5?')
console.log(result)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
