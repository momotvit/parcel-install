// const dog = {
//   name: "Mango",
//   age: 3,
//   isHappy: true,
//   bark() {
//     console.log("Woof!");
//   },
// };

// let dogJSON = JSON.stringify(dog);
// // console.log(dogJSON); // "{"name":"Mango","age":3,"isHappy":true}"

// dog.bark();
// // console.log(dog.age); // "{"name":"Mango","age":3,"isHappy":true,"bark":"Woof!"}"

// // dogJSON = JSON.parse(dogJSON);
// // console.log(dogJSON); // {"name":"Mango","age":3,"isHappy":true,"bark":"Woof!"}


// ////////////////////////this is is not valid json


// // const data = JSON.parse("Well, this is awkward");
// // console.log("❌ You won't see this log");


// ////////////////////////this is going to work(try ...catch)


// try {
// //   const data = JSON.parse("Well, this is awkward");
//     dogJSON = JSON.parse(dogJSON);
// } catch (error) {
//     console.log(error.name); // "SyntaxError"
//     console.log(error.message); // Unexpected token W in JSON at position 0
//     console.log(error.stack);
// }

// console.log("✅ This is fine, we handled parse error in try...catch");


// ////////////////////////this is going to work(try...catch)


// try {
//   const data = JSON.parse('{username: "Mango"}');
// } catch (error) {
//   console.log(error.name); // "SyntaxError"
//   console.log(error.message); // "Expected property name or '}' in JSON at position 1"
// }

// console.log("✅ This is fine, we handled parse error in try...catch");


// ////////////////////////this is not going to work becouse of the runtime error


// // console.log('This message will not appear in the console');

// // cos value = 5;


// //////////////////localStorage


// localStorage.setItem("ui-theme", "light");
// localStorage.setItem("sidebar", "expanded");
// localStorage.setItem("notification-level", "mute");

// console.log(localStorage.getItem("ui-theme"));
// console.log(localStorage);


// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem("settings", JSON.stringify(settings));


// localStorage.setItem("ui-theme", "dark");

// const theme = localStorage.getItem("ui-theme");
// console.log(theme); // "dark"

// //removing items from localStorage

// localStorage.removeItem("ui-theme");
// console.log(localStorage.getItem("ui-theme")); // null

// ///////json parse

// ///////////Не забывайте использовать конструкцию try...catch с
// /////////// методом JSON.parse(),
//  //////////чтобы избежать «падения» скрипта если вдруг прочитали не валидный JSON.
// const data = JSON.parse(localStorage.getItem("settings"));
// console.log(data); // {theme: "dark", isAuthenticated: true, options: [1, 2, 3]}


// ///////////////localStorage clering

// // localStorage.clear();

// // console.log(localStorage.getItem("ui-theme")); // null

// // console.log(localStorage)

const form = document.querySelector("#message-form");
const output = document.querySelector("#output");
const LOCALSTORAGE_KEY = "goit-example-message";

updateOutput();
form.addEventListener("submit", saveMessage);

function saveMessage(evt) {
  evt.preventDefault();
    localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
    console.log(form.elements.message.value);
    

  updateOutput();
  form.reset();
}

function updateOutput() {
  output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
}


console.log(localStorage.getItem(LOCALSTORAGE_KEY));

console.log(localStorage)


