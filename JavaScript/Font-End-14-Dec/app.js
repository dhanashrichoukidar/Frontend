// Arithmatic operators with equal sign to reuse the same variable.

// let a = 10;
// let b = 15;

// let result = a + b;
// a += b;
// a -= b;
// a *= b;
// a /= b;
// console.log(a);

// Concat Method

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.concat([10, 15]);
// console.log(arr);
// console.log(newArr);
// let new2 = arr.concat({firs:1,sec: 2})
// console.log(new2)


// const arr = [1, 2, 3, 4, 5];
// const arr2 = [10, 15];
// const arr3 = [25, 50];
// const newArr = arr.concat(arr2, arr3);
// console.log(arr);
// console.log(newArr);

// IndexOf() method

// let arr = ["Hi", 1, 2, 3, 4, 5, "Hi"];
// //let findIndexOf = arr.indexOf(5);
// let findIndexOf = arr.indexOf("Hi");
// console.log(findIndexOf);

// lastIndexOf() Method

// let arr = ["Hi", 1, 2, 3, 4, 5, "Hi"];
// let findLastIndexOf = arr.lastIndexOf("Hi");
// console.log(findLastIndexOf);

let person = {
  name: "Pradip",
  contact: 1800000,
};

let person1 = {
  name: "Mr.A",
  contact: 1800000,
};

const people = [
  { name: "Pradip", contact: 1800000, age: 30, address: "Pune" },
  { name: "Mr.A", contact: 78994566, age: 32, address: "Mumbai" },
  { name: "Mr.B", contact: 12345678, age: 35, address: "Satara" },
  { name: "Mr.M", contact: 55555555, age: 35, address: "Sangli" },
  { name: "Mr.C", contact: 851214563, age: 40, address: "Kolhapur" },
];

let findObj = people.find(function (SingleEle) {
  // console.log()
  return SingleEle.age === 32;
});
console.log(findObj);
