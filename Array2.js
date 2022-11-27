// Exc 2.

//First remove all the punctuations and change the string to array and count the number of words in the array
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

let words = text.split(' ');

console.log('words:-',words)
console.log('words length:-',words.length)

// In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
let add = "Meat";
const findElement = shoppingCart.filter((n)=>{
  return  n.includes(add)
})  
// add 'Meat' in the beginning of your shopping cart if it has not been already added

console.log(findElement)
findElement.length===0 ? shoppingCart.unshift(add):console.log("already added")
console.log("shoppingCart New array :-", shoppingCart)

// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push("Sugar");
console.log("shoppingCart New array :-", shoppingCart)

// remove 'Honey' 
let index =shoppingCart.findIndex((n)=>{
return n.includes('Honey')
})

console.log('Remove the Honey',shoppingCart.splice(index,1))
console.log("shoppingCart New array :-", shoppingCart)
// modify Tea to 'Green Tea'

let modify =shoppingCart.findIndex((n)=>{
    return n.includes('Tea')
    })
    shoppingCart[modify]= 'Green Tea'

console.log('modify Tea to Green Tea',shoppingCart)


// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let countries =['india','Cambodia', 'Timor-Lester', 'Indonesia', 'Laos', 'Malaysia',  'Philippines', 'Singapore', 'Thailand' , 'Vietnam','Ethiopia'];
let nameCountries = "Ethiopia";
let findCount= countries.findIndex((params)=>{
   return  params.includes(nameCountries)
})

console.log('Countries index',  findCount)

if (findCount > 0) {
    console.log("print in upper case:-",countries[findCount].toUpperCase())
} else {
    countries.push(nameCountries)
}

console.log('update countries:-', countries)

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

let webTechs =['HTML', 'CSS','JS', 'React', 'Redux'];


let findWeb = webTechs.findIndex((skills)=>{
   return skills.includes('Sass')
})

if (findWeb>0) {
    console.log(`${webTechs[findWeb]} is a CSS preprocess`)
} else {
    webTechs.push('Sass')
    console.log('update array:-',webTechs )
}


// Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = [...frontEnd,...backEnd]

console.log('Fullstack array:-',fullStack)