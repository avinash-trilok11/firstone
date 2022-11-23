//data =[54,65,543,45,45,233,22];
 //for(var i =0; i<data.length;i++){
   // console.log(data[i]);


 //var car = "fait";
// console.log(car);

//const car = {type:"Fiat", model:"500", color:"white"};
//console.log ( "the car type is" + car.type);

//const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
//console.log(person.firstName + " is " + person.age + " years old.");

//const person = { firstName: "John",lastName : "Doe",id :5566};
//console.log(person.firstName + " " + person.lastName); 

//var person = { firstName: "John",lastName : "Doe",id :5566};
///console.log(person.firstName + " " + person.lastName);
////////////////////////////////////////////////////////////////
//replace-method
//var thought ="i love react and love node js";//////
//thought = thought.replace(/love/g,"like");
//console.log(thought);

// finding lenght of a string
//thought = thought.replace(/love/g,"like");
//thought = thought.replace(/love/g,"like");
//console.log(thought.length)

//gives the last letter of a string
//console.log(thought[thought.length-1]);

//split///
// split always return array
//this splits at "and" divides into two
//thought = thought.replace(/love/g,"like");
//thought=thought.split("and");

//this gives only the "i like react"
//thought = thought.replace(/love/g,"like");
//thought=thought.split("and");
//console.log(thought[0]);

//this gives between spaces for every word
//thought = thought.replace(/love/g,"like");
//thought=thought.split(" ");
//console.log(thought);

//this gives the last word of a string
//thought = thought.replace(/love/g,"like");
//thought=thought.split(" ");
//console.log(thought[thought.length-1]);

//this converts lower to upper
//console.log(thought.toUpperCase());

//substring
//this gives lov as out put because it gives 2word to 5
//console.log(thought.substring(2,5));


//replace
date="12-08-1994"
var newdate=new Date(date);
newdate = newdate.toLocaleDateString("en-IN",{
   day:"2-digit",month:"long",year:"numeric"});
newdate = newdate.replace(/ /g,"-");
console.log(newdate);