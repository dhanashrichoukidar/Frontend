// Object
var person = {
    name : "Mr.A",
    age : 30,
    contact : 18000000,
    mailId : 'mra@gmail.com'
}
console.log(person)
// Updating the existing data
// person.age = 35

// Adding New property
// person.address = ["Building no.4", "4/5/6", "Pune", 411011]
console.log(person)
person.newObj={
    Qualification:"BE",
    college:"MIT"
}

console.log(person)

// Delete Obj Property
// delete person.age
// delete person.contact

delete person.newObj
console.log(person)
 //console.log(person)
// console.log(person.address)


// Array
var randomData = ["Hi Guys, I just turn", 30, "I am going to see the world.", true];
// console.log(randomData[2])

// Array Methods
// Push
// pop
// shift
// unshift
// splice
// slice
//console.log(randomData)

// Delete and Add element at last in the Array
// randomData.push("I am added with the help of push method.")
//randomData.push(1800000000)
//console.log(randomData)
// randomData.pop()
// console.log(randomData)

// Delete and add element at the begining of the Array.

//randomData.shift()     
randomData.unshift("I am added with unshift method.")

//console.log(randomData)

