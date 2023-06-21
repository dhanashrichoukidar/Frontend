// Splice

 //var arr = ["A", "B", "C", "D", "E", "F"];

 //console.log("Original :-", arr);

// First target the element by index Number
// second mention how many elements want to remove
// third and onward new elements to be added from targeted index number

//  var updatedArr = arr.splice(2,1)
//  var updatedArr = arr.splice(2, 1, "Z", "X");
//  var updatedArr = arr.splice(arr);

// console.log("After Splice :-", arr);
// console.log("Variable to store splice :-", updatedArr);

// Slice

 var arr = ["A", "B", "C", "D", "E", "F"];

 console.log(arr);

var resultSlice = arr.slice(1, 5);
//var resultSlice = arr.slice(arr);

console.log(arr);
console.log(resultSlice);


//const arr=["Pune","Mumbai","Banglore","Nashik"];
//console.log(arr);

//const additems = arr.slice(1)
//console.log(arr);
//console.log(additems);

// Primitive Value & Reference Value

// Example of primitive value
 var newVal = 10

 console.log(newVal)

 newVal = "Hi I am updated"

// console.log(newVal)

// Step - 1
// var newVal = 10
// Step - 2
// var newVariable = newVal

// console.log(newVal)
// console.log(newVariable)
// Step -3
// newVal = 50

// console.log(newVal)
// console.log(newVariable)

// Example of reference value

// var obj1 = {
//   name: "IntuTech",
//   contact: 1800000,
//   address: "Pune",
//   pincode: 411041,
// };

// var obj2 = obj1

// console.log(obj1)
// console.log(obj2)

// obj1.name = "Institute name has been changed."

// console.log(obj1)
// console.log(obj2)

// Spread operator for copying on new memory location
// var obj1 = {
//     name: "IntuTech",
//     contact: 1800000,
//     address: "Pune",
//     pincode: 411041,
//   };

//   var obj2 = {...obj1}

//   console.log(obj1)
//   console.log(obj2)

//   obj1.name = "Institute name has been changed."

//   console.log(obj1)
   console.log(newVal)

 
  let name1 = "Neha";
  let newName = name1;
   name1 = "Sagar";

   console.log(name1);     //Sagar
   console.log(newName);   //Neha

   // Example of Reference Value

   let obj1 = {
      empName : "Psb",
      age : 30
   }

   console.log(obj1);  //30

  // let obj2 = {...obj1};    // Spread operator copy object to new memory location
   let obj2 = obj1;

   obj1.age =25;

   console.log(obj1);   //25
   console.log(obj2);   //25