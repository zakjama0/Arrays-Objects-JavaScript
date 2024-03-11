// Arrays and Objects
// const,let control access levels

const item1 = "milk";
// cant reassign const as a variable

console.log(item1);

let item2 = "cheese";
// you can reassign a let
item2 = "egg";
console.log(item2);


// ends up on global object, no data protection or encapsulation
// need to give it a localised scope

function printNumber(){
    const numbers = [1,2,3,4,5];

    // must use const or let to locally scope it
    console.log(numbers);
}


printNumber();

console.log("Access 'local' variable outside intede scope: " + numbers);




