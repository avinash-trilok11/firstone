let main = [
  "avinash",
  "raju",
  "affrudin",
  "durga",
  "kavya",
  "shyama",
  "renu",
  "ravi",
  "kiran",
  "krish",
];
let main1 = [];
let main2 = [];
main.map((values) => {
  if (values.length < 7) {
    main1.push(values);
  } else {
    main2.push(values);
  }
});
console.log(main1.join("-"));
console.log(main2.join("-"));
