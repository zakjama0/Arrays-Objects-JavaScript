let shoppingList = ["milk", "cheese", "eggs", "bread"];



// declaration
let shoppingList2 

// initalisation
shoppingList2 = ["caano", "cheese", "beedh", "roti"];

// declaring empty array
let emptyArray = [];
console.log(emptyArray.length);
emptyArray[0] = "milk";
console.log(emptyArray.length);


// arrays are zero-index

console.log(shoppingList[0]);
console.log(shoppingList[1]);
console.log(shoppingList[2]);
console.log(shoppingList[3]);

// pop() returns the last element in the array
console.log (shoppingList2.pop());
//push() adds an element at the end of the array

shoppingList2.push("butter");
console.log(shoppingList);
//shift() removes the first element
shoppingList2.shift();
// unshift() adds an element to the beginning of the array
shoppingList2.unshift("cocopops");
console.log(shoppingList2);


//OBJECTS

// objects are colllections of properties
// objects are used as a way to access values
const person = {
    name:"zak",
    age:22,
    favouriteColour: "green"
}

console.log (person.name);