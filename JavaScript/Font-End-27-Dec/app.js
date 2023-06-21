const btnEvent = document.querySelector("button");
const userInput = document.querySelector("input");
console.log(userInput);

// btnEvent.addEventListener("click", function checkEvents(e){
//     console.log(e)
// })
function checkEvents(){
    console.log(userInput.value)
}
// function checkEvents(e) {
//   console.log(e);
// }
// // Capturing Value of UserInput
btnEvent.addEventListener("click", checkEvents);

// Inner Html, Inner Text

const greet = document.querySelector(".greeting");
const btnChange = document.querySelector(".btn-success");
const divSection = document.querySelector(".parent-div");

btnChange.addEventListener("click", ()=>{
    greet.innerText = "How are you doing?"
    greet.classList.toggle("background")
})

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


// btnChange.addEventListener("click", ()=>{
//     divSection.innerHTML = `
//     <form>
//     <label for="username">Username</label>
//     <input type="text" id="username"/>
//     <label for="password">Password</label>
//     <input type="text" id="password"/>
//     <button type="submit">Login</button>
//     </form>
//     `;
// })

