// Map method

const people = [
  { name: "Pradip", contact: 1800000, age: 30, address: "Pune" },
  { name: "Mr.A", contact: 78994566, age: 32, address: "Mumbai" },
  { name: "Mr.B", contact: 12345678, age: 35, address: "Satara" },
  { name: "Mr.M", contact: 55555555, age: 35, address: "Sangli" },
  { name: "Mr.C", contact: 851214563, age: 40, address: "Kolhapur" },
];

// let resultByMapMethod = people.map((singleEle) => {
//   return `${singleEle.name} - ${singleEle.contact}`
// });
// console.log(resultByMapMethod);

// Solution - 1
// let resultByMapMethod = people.map((singleEle) => {
//     let arr = [singleEle.name, singleEle.contact];
//     return arr;
//   });
//   console.log(resultByMapMethod);


// Solution -2
// const mapData = people.map((singleobj) => {
//   return singleobj.name + " " + singleobj.contact;
// });
// console.log(mapData);

// Sort Method

 //const alphaArr = ["a", "z", "b", "e", "j"];
// console.log("Mixed Array -", alphaArr);
// let sortedArr = alphaArr.sort();
// console.log("Sorted Arr -", sortedArr);
 const numeric = [8, 7, 6, 1, 15, 88, 34];
// console.log("Without Sorting -", numeric);

// let sortedNumericArr = numeric.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });

// console.log("Sorted Numbers -", sortedNumericArr)

// // Reverse method
//console.log("Without sorting reversed",numeric.reverse())
// console.log("Reverse Value :-", sortedNumericArr.reverse())



// Example or difference between traditional fun and arrow fun
// function add(){
//   return
// }

// const adding = function(){
//   return
// }

// const arrAddition = () => {
//   return
// }

// Filter Method

// const arrNumb = [5, 15, 110, 25, 55, 75, 85, 95, "100", "Hello"];

// let filteredArray = arrNumb.filter((singleElement) => {
//   return singleElement > 25;
// });
// console.log(filteredArray);
//console.log(arrNumb)

// Call Back Function
// function Printresult(resultVal) {
//   console.log("Result :-", resultVal);
// }

// function addTwoNumber(a, b, functn) {
//   let addresult = a + b;
//   //console.log(addresult)
//   functn(addresult);

// //   // This will also work because it is in the same File.
//  //  //Printresult(addresult);
//  }

//  addTwoNumber(100, 10, Printresult);


// Default Values to a function
function calculateValues(a = 1, b = 2) {
  let calc = a + b;
  console.log(calc);
}

calculateValues(7, 100);
calculateValues();
