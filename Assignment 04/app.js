const arrays = [
    42,
    true,
    "Hello, World!",
    {
        name: "John",
        age: 25,
        isStudent: false,
    },
    false,
    3.14,
    "JavaScript is fun!",
];

            // Question No 1
// const strings = arrays.map((element) => String(element));
// console.log(strings); // ["42", "true", "Hello, World!", "[object Object]", "false", "3.14", "JavaScript is fun!"]


            // Question No 2
// const numbers = arrays.filter((element)=> typeof element === "number");
//  console.log(numbers); // [42, 3.14]


            // Question No 3
// arrays.forEach((element)=>console.log(typeof element));
// "number"
// "boolean"
// "string"
// "object"
// "boolean"
// "number"
// "string"


//         // Question No 4
// const sum = arrays
//   .filter((element) => typeof element === "number")
//   .reduce((acc, curr) => acc + curr, 0);
// console.log(sum); // 45.14


        // Question No 5
// const firstBoolean = arrays.find((eleemnt)=>typeof eleemnt === "boolean");
// console.log(firstBoolean); // true 


//         // Question No 6
// const firstObjectIndex = arrays.findIndex((element) => typeof element === "object" && !Array.isArray(element));
// console.log(firstObjectIndex);

        // Question NO 7
// const hasNumbers = arrays.some((element) => typeof element === "number");
// console.log(hasNumbers); // true


        // Question NO 8
const allStrings = arrays.every((element) => typeof element === "string");
console.log(allStrings); // false
        