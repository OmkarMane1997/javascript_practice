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
let average =sum/ages.length
console.log( "average of age is :-",Math.round(average))
// - Find the range of the ages(max minus min) 
console.log("Find the range of the ages:-" ,max-min)
// - Compare the value of (min - average) and (max - average),  use abs() method

let  value = Math.abs((min-average)-(max-average))
console.log(value)

let countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]

// 1.Slice the first ten countries from the countries array

console.log(' First ten countries form the countries array:-',countries.slice(0,10))

// Find the middle country(ies) in the countries 
let noOfCountries =countries.length/2;
// console.log(noOfCountries)
// console.log(Math.floor(noOfCountries))
console.log('the middle country(ies) in the countries:-',countries[Math.floor(noOfCountries)])


// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let Total =countries.length
console.log("Total:-",Total)
let half = countries.length/2
console.log("Half:-",half)

countries.length % 2 === 0 ?  console.log(even()): console.log( odd())

function even() {

  let evenFirst=countries.slice(0,Math.floor(countries.length/2));
  let evenSecond =countries.slice(Math.floor(countries.length/2),Total);
  console.log(" even First Half:-",evenFirst );
  console.log(" even Second Half:-",evenSecond)

  console.log(`First size of array :-${evenFirst.length},and Second size of array :-${evenSecond.length}`)
}

function odd() {

let oddFirst =countries.slice(0,Math.round(countries.length/2))

  console.log(" Odd First Half:-", oddFirst);
  
  let oddSecond =countries.slice(Math.round(countries.length/2),Total)
  oddSecond.push("ZXY");
  console.log(" Odd Second Half:-",oddSecond)
  console.log(`First size of array :-${oddFirst.length},and Second size of array :-${oddSecond.length}`)

}

// console.log()console.log("First part of array is :-",countries.slice(0,))