// Exercise: Level 3
// The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 
// - Sort the array and 
// find the min and max age 
// - Find the median age(one middle item or two middle items divided by two) 
// - Find the average age(all items divided by number of items) 
// - Find the range of the ages(max minus min) 
// - Compare the value of (min - average) and (max - average), 
// use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// - Sort the array and 
ages.sort();
// find the min and max age 
let min = Math.min(...ages)
let max = Math.max(...ages)
console.log(`Min:-${min} and Max:-${max}` );
// - Find the median age(one middle item or two middle items divided by two) 

const  minValue = Math.floor(ages.length/2)
const array =  ages.sort();
const median = ages.length % 2 !== 0 ? array[minValue] : (array[minValue-1]+array[minValue])/2;
console.log("median;-",median);
var sum =0;
for (let index = 0; index < ages.length; index++) {
  sum = sum + ages[index];
  
}
console.log( "average of age is :-",sum/ages.length)
// - Find the range of the ages(max minus min) 
console.log("Find the range of the ages:-" ,max-min)
// - Compare the value of (min - average) and (max - average),  use abs() method



// 1.Slice the first ten countries from the countries array

// Find the middle country(ies) in the countries array

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.