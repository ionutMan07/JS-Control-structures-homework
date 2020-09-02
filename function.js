function sayHello(name) {
  if (name && typeof name === "string") {
    console.log("hello " + name);
  } else {
    console.log("hey there");
  }
}

function saySomething() {
  console.log("I just said something");
}

function sum(a, b, c) {
  return a + b + c;
}
sayHello("Ionut");
saySomething();

var result = sum(1, 2, 3);

console.log(result);
