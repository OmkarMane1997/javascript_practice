// Exercise: Level 1
// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge =  '30 Days Of JavaScript';
// Print the string on the browser console using console.log()
console.log('Declare the String:-',challenge)
// Print the length of the string on the browser console using console.log()
console.log('length of string is :-',challenge.length)
// Change all the string characters to capital letters using toUpperCase() method
console.log('the string characters to capital letters:-',challenge.toUpperCase())
// Change all the string characters to lowercase letters using toLowerCase() method
console.log('the string characters to lowercase letters:-',challenge.toLowerCase())

// Cut (slice) out the first word of the string using substr() or substring() method
console.log('the first word of the string using substr():-',challenge.substr(0,3))
// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log('Slice out the phrase Days Of JavaScript:-',challenge.substring(3,challenge.length-1))
// Check if the string contains a word Script using includes() method
console.log(challenge.includes('a'))
// Split the string into an array using split() method

console.log('Split the string into an array',challenge.split(''))
// Split the string 30 Days Of JavaScript at the space using split() method
console.log('Split the string into an array the space using split()',challenge.split(' '))

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let a = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log('convert string into array:-',a.split(','))

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log("Replace:-", challenge.replace("JavaScript","Python"))

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log('character at index 15:-',challenge.charAt(15))

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log("The character code of J:-",challenge.charCodeAt('J'));

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

console.log("indexOf:-",challenge.indexOf('30'))

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

console.log('lastIndexOf:-',challenge.lastIndexOf('JavaScript'))

// Use indexOf to find the position of the first occurrence of the word because in the following 
let sentence='You cannot end a sentence with because because because is a conjunction'

console.log('indexof:-',sentence.indexOf('You'))

// Use lastIndexOf to find the position of the last occurrence of the word because in the following 
// sentence:'You cannot end a sentence with because because because is a conjunction'

console.log('lastIndexof:-',sentence.lastIndexOf("conjunction"))

// Use search to find the position of the first occurrence of the word because in the 
// following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(' first occurrence of the word -because-:-',sentence.search('because'))
let pattern = /because/gi
console.log('no of match in string because-:-',sentence.match(pattern))


// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log('trim:-',challenge.trim())
// Use startsWith() method with the string 30 Days Of JavaScript and make the result true

console.log('startWith :-',challenge.startsWith(30))
// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log('endsWith :-',challenge.endsWith('t'))

// Use match() method to find all the a’s in 30 Days Of JavaScript
let patter = /a/gi
console.log("let find a in the string:- ",challenge.match(patter))
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let first = '30 Days of ';
let second = 'JavaScript';
let final= '';
console.log('String concat:-',final.concat(first,second))
// Use repeat() method to print 30 Days Of JavaScript 2 times

console.log('Repeat two time:- ', challenge.repeat(2))