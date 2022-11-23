/*let radius = 5;
let pi = 3.14;
let area;
area = pi * (radius * radius);
console.log(area);*/

//by using "typeof" we know what type of variable
//let num = 7.8;
//console.log(typeof num);//
/*let num1 = "avinash";
console.log(typeof num1);*/

//adding two strings
/*let first = "avinash";
let second = "guntupalli";
let user = first + second;    //let user = first + " " + second;
console.log(user);*/

//let user = "avin\tash avi";    //output;avin    ash avi :gives tab

//let user = "avinash\bavi";
//console.log(user);      //output;avinasavi :for deleting word

/*let x;
console.log(x, typeof x);
x = 8; //output;             // output
console.log(x, typeof x); //undefined undefined
x = x + "";                  8 number
console.log(x, typeof x);*/ //8 string

//type coersion and type conversion
/*let x;
console.log(x, typeof x);//undefined undefined
x = 8; //output;             // output
console.log(x, typeof x); //8 number
x = x + ""; // 8 number
console.log(x, typeof x); //8 string
x = x - 2;
console.log(x, typeof x);*/ //6 number

/*let num = 2;
//(num =num+1) 
num += 3;      another method to add with out second line
console.log(num);*/

/*let x = 10;
let y = 7;
let z = 5;
if (x > y && x > z) {
  console.log("x is greater");
} else if (y > x && y > z) {
  console.log("yis greater");
} else {
  console.log("z is greater");
}
console.log("nothing");*/

/*let num = 5;          /// terinary operator with(? :)
let result;        
result = num % 2 === 0 ? "even" : "odd";
console.log(result);*/

/*let day = "monday";             //switch case
switch (day) {
  case "monday":
    console.log("7am");
    break;
  case "tuesday":
    console.log("8am");
    break;
  case "wensday":
    console.log("5am");
    break;
  case "thursday":
    console.log("7am");
}*/

/*let num1 = 9;           //concatinantion
let num2 = 7;
let result = num1 + num2;
//console.log("addition of " + num1 + "and" + num2 + "is" + result);*/
//console.log(`addition of ${num1}  and ${num2}is ${result}`);*/

/*console.log(`avinash      //this gives asitis we mentioned in ``
guntupalli`);*/

/*let i = 1;          //do while
do {
  console.log("hi", i);
  i++;
} while (i <= 5);*/

/*for (let i = 1; i <= 10; i++) {
  console.log(i);
}*/

/*let num = 564782;
while (num > 0) {
  console.log(num % 10);
  num = parseInt(num / 10);
}*/

/*let stu = {
  name: "avinash", //object
  age: "25",
};
console.log(stu.age);*/

/*let stu = {
  name: "avinash",          //object inside another object
  age: "25",
  clg: {
    clgname: "nri",
    area: "tenali",
    branch: "mpc",
  },
};
//delete stu.clg.branch//
console.log(stu.clg.branch);*/

let alien = {
  name: "navin",
  tech: "js",
  laptop: {
    cpu: "i5",
    ram: 8,
    brand: "asus",
  },
};
for (let key in alien) {
  console.log(key, alien[key]);
}
