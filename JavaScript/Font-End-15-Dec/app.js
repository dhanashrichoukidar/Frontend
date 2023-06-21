// const people = [
//   { name: "Pradip", contact: 1800000, age: 30, address: "Pune" },
//   { name: "Mr.A", contact: 78994566, age: 32, address: "Mumbai" },
//   { name: "Mr.B", contact: 12345678, age: 35, address: "Satara" },
//   { name: "Mr.M", contact: 55555555, age: 35, address: "Sangli" },
//   { name: "Mr.C", contact: 851214563, age: 40, address: "Kolhapur" },
// ];

// let findObj = people.find(function (singleEle) {
//   return singleEle.age ===32;
// });
// console.log(findObj);

//Same example with arrow function
// let findPersonWithArrowFun = people.find((singleObj)=>{
//   return singleObj.name === "Mr.A"
// })

//  console.log(findPersonWithArrowFun)

//Include Method

// const arr = ["A", "B", 5, 8, 10, "X", "Y", "Z"];

// // let result = arr.includes("A", "B");
// // let result = arr.includes("A");
// //  let result = arr.includes("A", 10);

//  console.log(result);

// Map method

const people = [
  { name: "Pradip", contact: 1800000, age: 30, address: "Pune" },
  { name: "Mr.A", contact: 78994566, age: 32, address: "Mumbai" },
  { name: "Mr.B", contact: 12345678, age: 35, address: "Satara" },
  { name: "Mr.M", contact: 55555555, age: 35, address: "Sangli" },
  { name: "Mr.C", contact: 851214563, age: 40, address: "Kolhapur" },
];

// let resultByMapMethod = people.map((singleEle) => {
//   // console.log(person);
//   let arr = [singleEle.name, singleEle.contact];
//   return arr;
//   // return singleEle.name;
// });

// console.log(resultByMapMethod);

// let resultByMapMethod = people.map((singleEle, index, persons) => {
//   //console.log(persons);
//   //console.log(index)
//   console.log(singleEle)
// });

//console.log(resultByMapMethod);



//Sort Method

// const alphaArr = ["a", "z", "b", "e", "j"];

// console.log("Mixed Array -", alphaArr);

// let sortedArr = alphaArr.sort();

// console.log("Sorted Arr -", sortedArr);

const numeric = [8, 7, 6, 1, 15, 88, 34];

console.log("Without Sorting -", numeric);

// let sortedNumericArr = numeric.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// }
// );

let sortedNumericArr = numeric.sort((a, b) => a-b);


console.log("Sorted Numbers -", sortedNumericArr)
console.log(numeric)
