/*var details = { name: "react", version: 17 }
details.version = 23;                  
var version = "version";
details[version] = 23;
var newobj = { milk: "yes", ...details };   ///sprad operator///
console.log(newobj);*/

/*var details = { name: "react", coffe: 17 };
details.version = 23;
var version = "version";
details[version] = 23;
var newobj = { ...details, coffe: 20 };     //output:{ name: 'react', coffe: 20, version: 23 }
console.log(newobj);*/

/*var details = { name: "react", coffe: 17, price: { main: 100, gst: 18 } };
details.version = 23;
var version = "version";
details[version] = 23;
var newobj = { ...details, coffe: 20 };
//newobj = { ...details, price: { ...details.price, total: 118 } };//
newobj = { ...details, price: { total: 118, ...details.price } };
console.log(newobj);*/

///setTimeout///
/*const getTemp = () => {
  console.log("todays temp is:24");
};
//setTimeout(getTemp, 5000);    //getTemp executes after 5 seconds
setInterval(getTemp, 1000); */ //gives interval to execute

/*class game {
  constructor() {
    this.name = "node";
    this.email = "avinash@gmail.com";
  }
}
var obj = new game();
console.log(obj.name);*/

/*class game {
  constructor(live) {        //constructor is predefined here
    this.live = live;
  }
  attack() {
    this.live = this.live - 1;
  }
  getMyLive() {
    return this.live;
  }
}
var player1 = new game(4);
var player2 = new game(5);
player1.attack();
player2.attack();
console.log(player2.getMyLive());*/

/*const onAttack = (live) => {
  console.log("Attack on this", live);
};
class Game {
  constructor(live, onAttackMethod) {
    this.live = live;
    this.onAttackMethod = onAttackMethod;
  }
  attack() {
    this.live = this.live - 1;
    onAttack(this.live);
  }
  getMyLive() {
    return this.live;
  }
}
var player1 = new Game(4, onAttack);
var player2 = new Game(5);
player1.attack();
player1.attack();
console.log(player1.getMyLive());*/

/*const promissFunction = (resolve, reject) => {
  console.log(resolve, reject);
};
const resolve = (response) => {
  console.log("response");
};
const reject = () => {
  console.log("reject");
};
promissFunction(resolve, reject);*/

/*const methodone = (resolve, reject) => {
  resolve("i am resolve");
  reject("i am reject");
};
const resolve = (res) => {
  console.log(res);
};
const reject = (res) => {
  console.log(res);
};

methodone(resolve, reject);*/
/////////////////////////////////////////////////////
/*for (var i = 0; i <= 5; i++) {   //settimeout
  let j = i;
  setTimeout(() => console.log(j), 2000 * i);
}*/

/*for (let i = 1; i < 6; i++) {
  setTimeout(() => console.log(i), 1000 * i);
}
*/

/*set1 = [1, 2, 3, 4, 5];  ///spread operator
set2 = [6, 7, 8, 9, 10, ...set1];
console.log(set2);*/

/*set1 = {
  name: "avinash",  ///spread operator
  phno: "9100898979",
};
set2 = { ...set1, gmail: "avinash@" };
console.log(set2);*/
