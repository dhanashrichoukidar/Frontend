// Call Method

// const obj1 = {
//   name: "IntuTech",
//   contact: 180000,
//   address: "Pune",
//   print: function (pincode, destination) {
//     console.log(this.name, this.contact, this.address, pincode, destination)
//   },
// };

// obj1.print(411041)

// const obj2 = {
//   name: "Mr.A",
//   contact: 210000,
//   address: "Mumbai"
// }

// console.log(obj2.address)
// obj1.print.call(obj2, 411051, "Dubai")

// Apply Method

// const obj1 = {
//   name: "IntuTech",
//   contact: 180000,
//   address: "Pune",
//   print: function (pincode, destination = 0, Next ="default") {
//     console.log(this.name, this.contact, this.address, pincode, destination, Next)
//   },
// };

// obj1.print(411041, "Uk")

// const obj2 = {
//   name: "Mr.A",
//   contact: 210000,
//   address: "Mumbai"
// }

// obj1.print.apply(obj2, [411051, "Dubai", "UK", "USA"])

// Pure Function

// function addTwoNumb(a, b) {
//   console.log(a + b);
// }

// addTwoNumb(10, 5);

// Impure Function

// let sumVal = 5;

// function impureAddition(a, b) {
//   let combine = a + sumVal;
//   console.log(combine + b);
// }

// impureAddition(10, 5);

// Immediatly invoked function expression (IIFE)

// (function callMyself(){
//   // console.log("I am getting called my self")
//   alert("Please login to read all information.")
// })()

// 23-Dec-2022

// setTimeout setInterval examples

// function callMeAfterTimerExpires(){
//     console.log("I am triggered.")
// }

//setTimeout(callMeAfterTimerExpires, 5000)
//setInterval(callMeAfterTimerExpires, 5000);

// Clear Timer - setTimeout
// let setTimer = setTimeout(callMeAfterTimerExpires, 2000)
//  clearTimeout(setTimer)

// Clear Timer - setInterval
// let setInter = setInterval(callMeAfterTimerExpires, 2000);
// clearInterval(setInter)

// Bind Method

const objBind = {
  name: "Intutech",
  contact: 2000000,
  printDetails: function () {
    console.log(this.name, this.contact);
  },
};

  objBind.printDetails()

  //setTimeout(objBind.printDetails.bind(objBind), 2000);

const btnStop = document.getElementById("stop")

console.log(btnStop)