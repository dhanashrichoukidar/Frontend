var obj = {
    name : "suresh",
    weekdays :[1, 2, 3, 4],
    contact : 989078965
}

console.log(obj)

for(let i in obj){
    console.log(obj[i])
}


function nextEdge(side1, side2) {
	if(side1-side2 >0){
		console.log("side1 is greater")
	}else{
		console.log("side2 is greater")
	}
}
nextEdge(7,9)

function triangle(base, height){
    console.log(1/2*(base*height))
}
triangle(8,10)


console.log('--------------------');
for (var year = 2014; year <= 2050; year++)
    {
    var d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
        console.log("1st January is being a Sunday  "+year);
    }
console.log('--------------------');


function string_check(str1) {
    if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') 
    {
    
      return str1;
    }
    return "Py"+str1;
  }
  
  console.log(string_check("Python"));
  console.log(string_check("thon"));
  console.log(string_check(""))
  console.log(string_check())



  function front_back(str)
{
  first = str.substring(0,1);
  return first + str + first;
}
console.log(front_back('a'));
console.log(front_back('ab'));
console.log(front_back('abc'));

  
