// Currying
function add(a) {
  return function (b) {
    return a + b;
  };
}

// add function using arrow functions
const add2 = (a) => (b) => a + b;

// Calling function returns a function, main parameter is 1 and second paramter is for returned function 5
add(1)(5);
