function sayHello() {
  return 'Hello World';
}

let fn = sayHello;
fn();

function greet(fnMessage) {
  console.log(fnMessage());
}

greet(sayHello);
