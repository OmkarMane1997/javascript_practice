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


