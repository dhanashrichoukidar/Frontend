// HTTP Request

// const Http = new XMLHttpRequest();
// const url = "https://jsonplaceholder.typicode.com/users";
// Http.open("GET", url);
// Http.send();
// Http.onreadystatechange = (e) => {
//   const parse = JSON.parse(Http.responseText);
//   console.log(Http.responseText);
//   console.log(parse);

//   parse.map((singleObj) => {
//     console.log(singleObj.email)
//   });
// };

// Fetch method
// let options = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json;charset=utf-8",
//   },
// }

// fetch("https://jsonplaceholder.typicode.com/users", [options])
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => {
//     throw new Error("Request Failed.");
//   });

// fetch("https://jsonplaceholder.typicode.com/userssss")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => {
//     console.log("I catched the error:-", error);
//   });

// function add(a, b) {
//   try {
//     let result = a / b;
//     return result;
//   } catch {
//     console.log("Error in program");
//   }
// }

// console.log(add(2,1))

// function req() {
//   try {
//     const a = 10;
//     a = 15;
//   } catch {
//     console.log("Error in program");
//   }
// }
// req();

// Promise

let promise = new Promise(function (resolve, reject) {
  let a = 10;

  if (a > 100) {
    resolve();
  } else {
    reject();
  }
});

promise.then(function(){
 console.log("Yes, Requset successfully done") 
}).catch(function(){
  console.log("Error Is there!")
})
