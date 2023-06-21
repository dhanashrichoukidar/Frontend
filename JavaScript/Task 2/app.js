// Single Bang Operator

var a = ""

// this will compare string empty or not. if empty then print false because empty string is always false.
if(a){
    console.log("condition true")
}
else{
    console.log("condition false")
}


// This will compare the condition variable a with empty string. here if a is empty string then print true.
if(a===""){
    console.log("condition true")
}else{
    console.log("condition false")
}


// This will give exactly opposite output. i.e. for empty string it will print true.
if (!a){
    console.log("condition  single bang true")
}else{
    console.log("condition single bang false")
}



var a = 10
function Outer(){
    var c = 20
function Inner(){
    var b = 12
var result = a + b + c
console.log(result)
return result;
}
Inner()
}
Outer()




function checkVariable(){
    let user = "Pradip"
    function access(){
      console.log("Printing from inner side:-", user)
    }
    console.log("I am Outer Function.")
    return access
  }
  let check = checkVariable()
  check()
  
  
  function Counter() {
      let counter = 0;
      function IncreaseCounter() {
          return counter += 1;
      };
      return IncreaseCounter;
  }
  var counter = Counter();
  console.log(counter())




//Factory Function

// let Person = function(name, age){
//     let Obj = {}
//     Obj.personname = name;
//     Obj.personAge = age;
//     Obj.greeting = function(){
//       return (
//         `Hello I am ${Obj.personname} My age is ${Obj.personAge}`
//       )
//     }
//     return Obj;
//   }
//   let createNewPerson = Person("Pradip", 30)
//   console.log(createNewPerson.greeting())
  

  let Person = function(name, age){
    let Obj = {
        personname : name,
        personAge : age,
        greeting : function(){
        return (
        `Hello I am ${Obj.personname} My age is ${Obj.personAge}`
      )
    }
    
    }
    return Obj;
  }
  let createNewPerson = Person("Pradip", 30)
  console.log(createNewPerson.greeting())
  
  



  