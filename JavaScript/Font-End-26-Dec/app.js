// Anonymous Function

let btnPrime = document.querySelector(".btn-primary");

// console.log(btnPrime);

// This function is used only for single event
// It may or may not have the names
// If you use name with function it will show it in console if any error occurs.

// btnPrime.addEventListener("click", function Clicked(){
//     console.log("Click Event Triggered.", i)
// })

// btnPrime.addEventListener("click", function(){
//     console.log("Click Event Triggered.", i)
// })

// Second way to use function in event listner.
// function forBtnPrime(){
//     console.log("Decleared function.")
// }
// btnPrime.addEventListener("click", forBtnPrime)

// Anonymous Function with Arrow syntax

// btnPrime.addEventListener("click", ()=>{console.log("Arrow Function Output.")})

// const addArrowFun = () =>{

// }

const tagLine = document.getElementById("headlineTag");

const btnAdd = document.querySelector(".btn-success");
const btnRemove = document.querySelector(".btn-warning");
const btnToggle = document.querySelector(".btn-danger");

console.log(btnToggle);

btnAdd.addEventListener("click", () => {
  tagLine.classList.add("backGround");
});

btnRemove.addEventListener("click", () => {
  tagLine.classList.remove("backGround");
});

btnToggle.addEventListener("click", () => {
  tagLine.classList.toggle("backGround");
});


// CreateElement and Append

const ulList = document.querySelector(".unOrderedList")

// console.log(ulList)

const newListItem = document.createElement("li")

newListItem.innerText = "New Item added"
// console.log(newListItem)
ulList.append(newListItem)

const newListItem1 = document.createElement("li")
newListItem1.innerText ="more"
ulList.append(newListItem1)

const newListItem2 = document.createElement("li")
newListItem2.innerText="Last"
ulList.append(newListItem2)