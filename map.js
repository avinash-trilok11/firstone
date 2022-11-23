// var mapmethod = (arg1, arg2) => {
//   console.log(arg1, arg2);
// };
// mapmethod(1, 2);

// var mapmethod1 = (arg1, arg2) => {
//   console.log(arg1, arg2);
// };
// mapmethod1(mapmethod);

function add(v1, v2) {
  console.log(v1 + v2);
}

function result(v1, v2) {
  console.log(v2(4, 2));
}
result(3, add);
