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
//     let result = a * b;
//     return result;
//   } catch {
//     console.log("Error in program");
//   }
// }

// console.log(add(5, "Hi"))

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

// let promise = new Promise(function (resolve, reject) {
//   let a = 10;

//   if (a > 5) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// promise.then(function(){
//  console.log("Yes, Requset successfully done")
// }).catch(function(){
//   console.log("Error Is there!")
// })

// const storeData = [];
// const Request = fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((data) => {
//     const section = document.querySelector("section");
//     storeData.push(data);
//     // storeData.shift()
//     console.log(storeData);

//     storeData.map((singleObj) => {
//       section.innerHTML = `
//       <table class="table table-dark">
//       <thead>
//         <tr>
//           <th>UserId</th>
//           <th>Id</th>
//           <th>Title</th>
//           <th>Completed</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>${singleObj.userId}</td>
//           <td>${singleObj.id}</td>
//           <td>${singleObj.title}</td>
//           <td>${singleObj.completed}</td>
//         </tr>
//       </tbody>
//     </table>
//       `;
//     });
//   });

// Request.then(function () {
//   console.log("Request successfully done!");
// }).catch(function () {
//   console.log("Request Failed.");
// });

// function parent() {
//   let numb = 100;


//   function child() {
//     return numb
//   }

//   return child;
// }

// let call = parent();

// console.log(call());


// function Counter() {
//   let counter = 0;
//   function IncreaseCounter() {
//       return counter += 1;
//   };
//   return IncreaseCounter;
// }
// var counter = Counter();
// console.log(counter())


// LocalStorage
let storeLocallyA = localStorage.setItem("password","123456789")
let storeLocally = localStorage.setItem("username","dummyMail@gmail.com")
// console.log(storeLocally)
let getDataLocal = localStorage.getItem("username")
console.log(getDataLocal)
localStorage.clear()

