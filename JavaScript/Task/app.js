var arr =[1, 2, 3, 4]
//console.log(arr)

//Array Methods
// arr.push("by push")    //adds element on last index

// console.log(arr)

// arr.pop("by pop")       //removes element on last index
// console.log(arr)

// arr.shift()              //removes element on first index
// console.log(arr)

// arr.unshift("by unshift")   //adds element on first index
// console.log(arr)

// //Splice Method

// console.log("Splice method start")
// var newArr = arr.splice()
// console.log("Original array " +  (arr))
// console.log(newArr)

// var newArr = arr.splice(2,1)
// console.log("Original  "+arr)
// console.log("new  " +newArr)

// var newArr = arr.splice(2,0, "add","2")
// console.log("Original  "+ arr)
// console.log( newArr)

// var newArr = arr.splice(2,2,"X", "y")
// console.log(arr)
// console.log(newArr)

//Slice Method
// var newSlice = arr.slice(1,3)
// console.log(arr)
// console.log(newSlice)

// var newSlice = arr.slice(1,0)
// console.log(arr)
// console.log(newSlice)

// //Primitive Value
// var Val = 10;
// console.log(Val);
// var Val = "new Value"
// console.log(Val);

// var newVal = 20;
// console.log(newVal)
// var primitiveVal = newVal;
// console.log(primitiveVal);

// newVal = 50;
// console.log(newVal)
// console.log(primitiveVal)

// Reference Value
    var Array1 = ["A","B","C","D"]
 console.log(Array1)
     var Array2= Array1
 console.log(Array2)

 Array1.push("F")
console.log(Array1)
console.log(Array2)



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



//Spread operator
var newArray3 = [1,2,3,4]
var Array4 = [...newArray3]
console.log(newArray3)
console.log(Array4)

newArray3 = [5,6,7,8]
console.log(newArray3)
console.log(Array4)

