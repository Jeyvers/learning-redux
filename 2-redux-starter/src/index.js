function sayHello() {
  return function () {
    return 'hello world';
  };
}

let fn = sayHello;
let message = fn();

function greet(fnMessage) {
  console.log(fnMessage());
}

greet(sayHello);
console.log(fn);
console.log(message);
