//var obj={name:"react",name:"node",age:26,details:{email:"avinash@gmail",address:{pin:1998}}};
//console.log(obj["name"]);
//console.log (obj["age"]);
//var age="details";/////////
//console.log(obj[age]);
//console.log(obj.details.email);
//console.log(obj["details"]["email"]);
//console.log(obj["details"]["address"]["pin"]);


//var obj ={name:"react",details:{pin:345}};
//obj.language="java";
//var language ="programming";
//obj["programming"] ={};
//obj["programming"]["code"]="done";
//obj["code"]={};

//obj["code"]["sys"]="system";

//console.log(obj["code"]);
//////////////////////////////////////////////

//in object only one unique key is possible
//this gives output "node" "age=26"because it updates now only
//var obj={name:"react",name:"node",age:26,}
//console.log(obj)

// only age has to print
//var obj={name:"react",name:"node",age:26,}
//console.log(obj.age)
//or
//console.log(obj["name"])

// this gives "node"
//var obj={name:"react",name:"node",age:26,}
//var age="name"
//console.log(obj[age])



//this givees the details
//var obj={name:"react",name:"node",age:26,details:{email:"avinash@gmail",address:{pin:1998}}};
//var age="details";
//console.log(obj[age])

//here we are getting only "gmail"
//var obj={name:"react",name:"node",age:26,details:{email:"avinash@gmail",address:{pin:1998}}};
//var age="details";
//sconsole.log(obj.details.email)

//here we are getting "details"
//var obj={name:"react",name:"node",age:26,details:{email:"avinash@gmail",address:{pin:1998}}};
//var age="details";
//console.log(obj["details"])


/// this gives whole obj and pin replaces new value
//var obj ={
 //  name:"react",
 //details:{pin:454}
//}
//obj["details"]["pin"]=454545
//console.log(obj)

//replace nam:"react"to"java"
//var obj ={
  //   name:"react",
    //details:{pin:454}
   //}
   //obj.name="java"
   //console.log(obj)


   // here there is no language bus it adds that on result
   //var obj ={
   //name:"react",
   //details:{pin:454}
  //}
  //obj.name="java"
  //obj.language="node"
  //console.log(obj)


  //here  language="java" programming="node"
  //var obj ={
    //name:"react",
    //details:{pin:454}
   //}
   //obj.language="java"
   //var language="programming"
   //obj["programming"]="node"
   //console.log(obj)
 
   //var obj ={
    //name:"react",
    //details:{pin:454}
   //}
   //obj.language="java"
   //var language="programming"
   //obj["programming"]={}
   //obj["programming"]["code"]="yes"
   //obj["code"]={}
   //obj["code"]["code"]="no"

   //console.log(obj["code"])

   //find keys
   //let keys = object.keys(obj)
   //console.log(keys)

 
//parseint finding numbers in string condition id has to start numbersonly
//var num = "43.789hk23"
//console.log(parseint(num));



