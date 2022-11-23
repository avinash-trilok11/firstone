//let arr = ("hello", "all", "hi", "all", "am");
//console.log(arr);
//console.log(arr.indexof("all"));
//console.log(arr.push("node"));
//console.log(arr.slice(3));
//console.log(arr.join("*"));
//data=["29","nov","1994"];
//data=data.join("-")
//console.log(data)

//data=[56,67,98,89,56,54,1]
//for (var i=0;i<data.length;i++{

//console.log(data[i])
//}

/*var mul = (arg1, arg2) => {
  return arg1 * arg2;
};
var result = mul(8, 9);
console.log(result);*/

/*var arr = ["java", "js", "clan", "js", "python","clan"];
temp = [];
arr.map((value, index) => {
  if (temp.includes(value) === false) {
    temp.push(value);
  }
});
console.log(temp);*/

///checking if there is url or not
/*var url = "http://proclink.com";
if (url.indexOf("http://") === 0) {
  console.log("yes");
} else {
  console.log("no");
}*/

// let arr = "www.prasad.com";
// console.log(arr.slice(4, 10));

/*var url = "http://www.proclink.com";

 var url = url.split(".");
console.log(url[url.length - 2]);
 console.log(url[url.length - 1]);
console.log(url[url.length - 3]);*/

/*var date = "29-11-1994";
var date = date.split("-").reverse().join("-");
console.log(date);*/

/*var date = "345fedfd4343";
date = date.split("");
console.log(date);
num = "";
date.map((char) => {
  if (isNaN(parseint(char)) === false) {
    num = num + char;
  }
});*/
let data = "affrudin";
let abc = data.split("");
let a = abc.reverse();
console.log(a.join(""));
