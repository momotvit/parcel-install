const dog = {
  name: "Mango",
  age: 3,
  isHappy: true,
  bark() {
    console.log("Woof!");
  },
};

let dogJSON = JSON.stringify(dog);
// console.log(dogJSON); // "{"name":"Mango","age":3,"isHappy":true}"

dog.bark();
// console.log(dog.age); // "{"name":"Mango","age":3,"isHappy":true,"bark":"Woof!"}"

// dogJSON = JSON.parse(dogJSON);
// console.log(dogJSON); // {"name":"Mango","age":3,"isHappy":true,"bark":"Woof!"}


////////////////////////this is is not valid json


// const data = JSON.parse("Well, this is awkward");
// console.log("❌ You won't see this log");


////////////////////////this is going to work(try ...catch)


try {
//   const data = JSON.parse("Well, this is awkward");
    dogJSON = JSON.parse(dogJSON);
} catch (error) {
    console.log(error.name); // "SyntaxError"
    console.log(error.message); // Unexpected token W in JSON at position 0
    console.log(error.stack); 
}

console.log("✅ This is fine, we handled parse error in try...catch");


////////////////////////this is going to work(try...catch)


try {
  const data = JSON.parse('{username: "Mango"}');
} catch (error) {
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // "Expected property name or '}' in JSON at position 1"
}

console.log("✅ This is fine, we handled parse error in try...catch");