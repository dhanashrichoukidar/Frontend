// Reduce Method

// const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 10];

// let result = arrayNum.reduce((previousVal, currentValue) => {
//   return previousVal + currentValue;
// });

// console.log(result);

// const parentArr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// let combineArr = parentArr.reduce((prevVal, currentVal) => {
//   return prevVal.concat(currentVal);
// });
// console.log(combineArr);

// Object Destructuring

// const personObj = {
//   userName: "Intutech",
//   address: "Pune",
//   pincode: 411041,
// };

// let { pincode } = personObj;

// console.log(pincode);

// Array Destructuring
// const desArr = ["Hi", "I am", 25, "Years Old", {userName: "Pradip"}];

// let [strFirst, strSecond, strThird, strFour, five] = desArr;
// //let [,,,,strThird] = desArr;

//  console.log(strFirst, strSecond, strThird, strFour );
//  console.log(strThird);

// Method - How methods are created.

let methodObj = {
  name: "methodObj",
  use: "Use anywhere",
  howmanyTime: 100,
  greetings: function () {
    console.log("Hi Guys, I am a method.");
  },
};

// methodObj.greetings()

let { greetings } = methodObj;

console.log(greetings());

// function add(){
   
// }

// add()