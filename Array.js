// Declare an empty array;
let myArray = new Array();
let myArray1 = [];
console.log("Array constructor:- ",myArray);
console.log("Array Square Bracket:-",myArray1);

// 2.Declare an array with more than 5 number of elements

let fiveNumberArray =[1,2,3,4,5];

// 3.Find the length of your array

console.log("length of fiveNumberArray is :-", fiveNumberArray.length );

//4. Get the first item, the middle item and the last item of the array

console.log("give array is :-",fiveNumberArray)
console.log("First item :-",fiveNumberArray[0]);
// if (fiveNumberArray.length % 2 == 0) {
//     console.log("Middle item :-",fiveNumberArray[fiveNumberArray.length/2]);
// } else {
//     let length= fiveNumberArray.length/2;
//     console.log("Middle item :-",fiveNumberArray[length-.5]);
// }
let length= fiveNumberArray.length/2;
  
fiveNumberArray.length % 2 == 0 ? console.log("Middle item :-",fiveNumberArray[length]) :  console.log("Middle item :-",fiveNumberArray[length-.5])

console.log("Last item :-",fiveNumberArray[fiveNumberArray.length -1]);


// 5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

let mixedDataTypesArray = ["One",2,"Three",4, 0.5,true];
console.log("mixedDataTypesArray length:- ",mixedDataTypesArray.length)

//6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon


let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle" , "Amazon"];


// 7.Print the array using console.log()

console.log("It Companies",itCompanies);
// 8.Print the number of companies in the array
console.log("the number of companies in the array:-" , itCompanies.length)
// 9.Print the first company, middle and last company
console.log("First company:-",itCompanies[0])
let lengthItCompanies =  itCompanies.length/2;

itCompanies.length % 2 == 0 ? console.log("Middle company:-",itCompanies[lengthItCompanies]):console.log("Middle company:-",itCompanies[lengthItCompanies-.5]);
console.log("Last company:-",itCompanies[itCompanies.length-1])
// 10.Print out each company
console.log("***Print out each company***")
for (let i = 0; i < itCompanies.length; i++) {
 console.log( itCompanies[i]);
}

//11. Change each company name to uppercase one by one and print them out
console.log("***company name to uppercase one by one and print them out***")
for (let i = 0; i < itCompanies.length; i++) {
 console.log( itCompanies[i].toUpperCase());
}

//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies.slice(0,itCompanies.length-1)} and ${itCompanies.slice(itCompanies.length-1,itCompanies.length)} are big IT companies`)


//13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

let exist = "IBM";

const findCompany= itCompanies.find((n)=>{

    return n === exist ? `found company${exist}` :"Not found Company"
    //  return n === exist;

})

console.log(findCompany)




// 14. Filter out companies which have more than one 'o' without the filter method

//15. Sort the array using sort() method
console.log("Sort the array:-", itCompanies.sort());

//16. Reverse the array using reverse() method
console.log("Reverse the array:-", itCompanies.reverse());


//17. Slice out the first 3 companies from the array
console.log("Reverse the array:-", itCompanies.reverse());
console.log("Slice out the first 3 companies:-", itCompanies.slice(0,3))
//18. Slice out the last 3 companies from the array
console.log("Slice out the last 3 companies:-", itCompanies.slice(itCompanies.length-3,itCompanies.length))

//19. Slice out the middle IT company or companies from the array


//20. Remove the first IT company from the array
//21. Remove the middle IT company or companies from the array
//22. Remove the last IT company from the array
//23. Remove all IT companies