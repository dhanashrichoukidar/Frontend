// const btnEvent = document.querySelector("button");
// const userInput = document.querySelector("input");
// console.log(userInput);

// // btnEvent.addEventListener("click", function checkEvents(e){
// //     console.log(e)
// // })
// // function checkEvents(){
// //     console.log(userInput.value)
// // }
// function checkEvents(e) {
//   console.log(e);
// }
// // Capturing Value of UserInput
// btnEvent.addEventListener("click", checkEvents);

// Inner Html, Inner Text

const greet = document.querySelector(".greeting");
const btnChange = document.querySelector(".btn-success");
const divSection = document.querySelector(".parent-div");

// btnChange.addEventListener("click", ()=>{
//     greet.innerText = "How are you doing?"
// })

// divSection.innerHTML = `<p>I am no longer empty.<p>
// <span>Hi Guys!</span>`;

// divSection.innerHTML = `
// <form>
// <label for="username">Username</label>
// <input type="text" id="username"/>
// <label for="password">Password</label>
// <input type="text" id="password"/>
// <button type="submit">Login</button>
// </form>
// `;



// btnChange.addEventListener("click", () => {
//   divSection.innerHTML = `
//     <form>
//     <label for="username">Username</label>
//     <input type="text" id="username"/>
//     <label for="password">Password</label>
//     <input type="text" id="password"/>
//     <button type="submit" class="btn btn-warning">Login</button>
//     </form>
//     `;

  // const btnLogin = document.querySelector(".btn-warning");
  // console.log(btnLogin)

  // btnLogin.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   const userVal = document.querySelector("#username");
  //   const passwordVal = document.querySelector("#password");
  //   console.log(userVal.value, passwordVal.value);
  // });
//});



// Class and Constructor

// const obj1 = {
//     username: "Mr.A",
//     age: 30
// }

// const obj2 = {
//     username: "Mr.B",
//     age: 35
// }

// class Person {
//   constructor(usernameVal, ageVal) {
//     (this.username = usernameVal), (this.age = ageVal);
//   }
//   super()

// }

// class PersonDetails{
//   constructor(usernameVal, ageVal) {
//     (this.contact = usernameVal), (this.address = ageVal);
    
//   }
 
// }

// const person1 = new Person("Mr.A", 30);
// const person2 = new Person("Mr.B", 40);
// const person3 = new Person("Mr.C", 45);
// const person4 = new Person("Mr.D", 50);

// console.log(person1);
// console.log(person2);
// console.log(person3);
// console.log(person4);

// Example of Json

// const obj1 = {
//     "username": "Mr.A",
//     "age": 30
// }

// console.log(obj1)

// let strgfyObj = JSON.stringify(obj1)
// console.log(strgfyObj)

// HTTP Request

const Http = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/users";
Http.open("GET", url);
Http.send();
Http.onreadystatechange = (e) => {
 
  const parse = JSON.parse(Http.responseText);

     //console.log(Http.responseText);
    console.log(parse);

  parse.map((singleObj) => {
    console.log(singleObj.email)
  });

};
